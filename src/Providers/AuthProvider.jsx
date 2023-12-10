import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser]=useState(null);
    const[loading, setLoading]=useState(true);

//user create
 const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }
 //sign in
 const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }



 //onAuthStateChanged
 useEffect(()=>{
 const unScribe =   onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log('user', currentUser);
        setLoading(false)
      

    });
    return ()=>{
        unScribe()
    }
 },[])

    const authInfo={user,
        loading,
        createUser,
        signIn
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;