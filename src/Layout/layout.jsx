import React from 'react';
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
