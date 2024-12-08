import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Prepare the data
        const payload = { email, password };

        // Make the POST request with Axios

        try {
            const response = await axios.post('http://localhost:6800/api/user/login', payload, {
                withCredentials: true, // Ensure cookies are sent with the request
            });

            if (response.status === 200) {
                // Redirect to the dashboard page after successful login
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again.');
        }
    };


    return(
        <>
        <div className="loginpage">
<div className='login'>

    <h1 className='header'>LOGIN</h1>
    <form onSubmit={handleSubmit}>
            <h3 className='h3'>Email id</h3>
            <input type="text"
                        placeholder="Please enter the Email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        required/>
            <h3 className='h3'>Password</h3>
            <input type="password"
                        placeholder="Please enter the password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update email state
                        required/>
            <button className='button' type='submit'>Login</button>
    </form>
        </div>
        </div>
          
        </>
    )
}

export default Loginpage