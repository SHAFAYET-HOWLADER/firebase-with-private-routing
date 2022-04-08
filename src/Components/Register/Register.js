
import React from 'react';

const Register = () => {
    return (
        <div className='register'>
            <h2>Please register here </h2>
            <form>
                <input type='text' placeholder='Your Name' required/>
                <br/>
                <br/>
                <input type='email' placeholder='Your Email' required/>
                <br/>
                <br/>
                <input type='password' placeholder='Your Password' required/>
                <br/>
                <br/>
                <input type='submit' value='Register' required/>
            </form>
        </div>
    );
};

export default Register;