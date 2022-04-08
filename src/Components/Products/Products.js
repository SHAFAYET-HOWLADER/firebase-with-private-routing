import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app)

const Products = () => {
   const [user] = useAuthState(auth);
    return (
        <div className='products'>
            <h2>Blew are the list of current user...</h2>
             <small>User : {user ? user.displayName : "No active user"}</small>
        </div>
    );
};

export default Products;