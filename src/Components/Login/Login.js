import React from 'react';
import {getAuth} from 'firebase/auth';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app)

const Login = () => {
   const [signInWithGoogle]  = useSignInWithGoogle(auth);
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
                <input onClick={()=>signInWithGoogle()} type='button' value='signInWithGoogle'/>
            </form>
        </div>
    );
};

export default Login;