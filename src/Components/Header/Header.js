import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const auth = getAuth(app);
const Header = () => {
   const [user]  = useAuthState(auth);
    return (
        <div className='header'>
           <nav>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
           {user?.uid ? <button onClick={()=>signOut(auth)}>Sign Out</button>
                :
                <CustomLink to="/login">Login</CustomLink>
           }
            <small>{user?.displayName && user.displayName}</small>
           </nav>
        </div>
    );
};

export default Header;