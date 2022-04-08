import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='home'>
           <h3> User : {user? user.displayName : "No body"}</h3>
        </div>
    );
};

export default Home;