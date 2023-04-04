import React, { useContext, useState, useLocation } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider} from "firebase/auth";
import "firebase/auth";
import { UserContext } from '../../App';
import { Navigate, useNavigate } from 'react-router-dom';



const app = initializeApp(firebaseConfig);


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {from} = location.state || {from :{pathname: "/"}};
  

  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const handleSignIn = () =>{
    const auth = getAuth();

    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const {displayName,photoURL,email} = result.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedInUser);
      console.log(displayName,photoURL,email);
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  const handleFbSignIN = () =>{
    const auth = getAuth();
    signInWithPopup(auth, fbProvider)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    //const accessToken = credential.accessToken;
    console.log('signed in using Facebook', user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  }

  const handleSignOut = () =>{
    const auth = getAuth();

    signOut(auth).then(() => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        error: '',
        success: false
      }
      setUser(signedOutUser);
     })
     .catch((error) => {
      console.log(error);
     });
  }

  const handleBlur =(event) =>{
    let isFormValid = true;
    if (event.target.name=== 'email'){
      const isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      //console.log(isFormValid);
    }
    if (event.target.name=== 'password'){
      const isPassValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPassValid && passwordHasNumber;
    }
    if (isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (event) => {
    if(newUser && user.email && user.password){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          
          //updateUserName(user.name)
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
         setUser(newUserInfo);
        });
    }

    if(!newUser && user.email && user.password){
      const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
         .then((userCredential) => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          navigate ("/" from);
          console.log("sign in user info", userCredential.user);
        })
         .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
        });
    }
    event.preventDefault();
  }


  const updateUserName = name =>{
    const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: name})
        .then(() => {
        console.log('Profile updated!');
        
      }).catch((error) => {
        console.log(error);
       
      })
    
  }

  return(
    <div style={{textAlign: 'center'}}>
       {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleSignIn}>Sign In</button>
       }
      <br/>
      <button onClick={handleFbSignIN}>Sign in using Facebook</button>

      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt='emoji'></img>
        </div>
      }

      <h2>Our Own Authentication</h2>
      <p>Email:{user.email}</p>
      <p>Password:{user.password}</p>
        <form onSubmit={handleSubmit}>
          <input type='checkbox' onChange={() => setNewUser(!newUser)} name='newUSer' id=''></input>
          <label htmlFor='newUser'>Register New User</label>
          <br/>
          {newUser && <input type='text' name='name' onBlur={handleBlur} placeholder='Enter name'></input>}
          <br/>
          <input type='text' name='email' onBlur={handleBlur} placeholder='Enter user email' required></input>
          <br/>
          <input type='password' name='password' onBlur={handleBlur} placeholder='Enter Password' required></input>
          <br/>
          <input type='submit' value={newUser ?"Sign up" : "Sign in"}></input>
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {
        user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully!</p>
      }
    </div>
  );
}

export default Login;
