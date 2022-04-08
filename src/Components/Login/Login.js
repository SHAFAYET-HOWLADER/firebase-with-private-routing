import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='login'>
             <h2>Please login here </h2>
            <form>            
                <input type='email' placeholder='Your Email' required/>
                <br/>
                <br/>
                <input type='password' placeholder='Your Password' required/>
                <br/>
                <br/>
                <input type='submit' value='Login' required/>
                <input onClick={signInWithGoogle} type='button' value='signInWithGoogle'/>
            </form>
        </div>
    );
};

export default Login;