import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import useFirebase from '../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,handleSignOut}  = useFirebase();
    return (
        <div className='header'>
           <nav>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
            <small>{user?.displayName && user.displayName}</small>
           {user?.uid ? <button onClick={handleSignOut}>Sign Out</button>
                :
                <CustomLink to="/login">Login</CustomLink>
           }
           </nav>
        </div>
    );
};

export default Header;