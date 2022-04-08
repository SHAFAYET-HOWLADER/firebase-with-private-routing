import { useEffect, useState } from "react"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
    //<--------sign in with google----------->
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error=>{
          console.log(error)
        })
    }
    //<----------handle sign our---------->
    const handleSignOut = ()=>{
      signOut(auth)
      .then(()=>{

      })
      .catch(error=>{
          console.log(error)
      })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user)
        })
    },[])

    return {user,handleSignOut, signInWithGoogle};
}
export default useFirebase;