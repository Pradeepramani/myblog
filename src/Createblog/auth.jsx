import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check authentication by calling the backend
                await axios.get('http://localhost:6800/api/blog/loading', {
                    withCredentials: true, // Send cookies with the request
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        // While checking authentication, show a loader or placeholder
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/" />;
    }

    // Render the protected component if authenticated
    return children;
}

export default ProtectedRoute;
