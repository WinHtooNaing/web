import React from 'react';
import './navbar.css';

const Navbar = () => {
    
    return (
        <>
            <nav>
                <h1>Learn For Web Development</h1>
                <div className="btnTag" >
            <div className="btn-indicator">
                <div className="btn-icon-container">
                    <i className='btn-icon bx bxs-moon'></i>
                </div>
            </div>
        </div>
            </nav>
           
        </>
    )
}


export default Navbar;