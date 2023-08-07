import React, { useState, useEffect } from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Profile from '../pages/profile';
import VerifyEmail from '../firebase/verfyEmail';
import auth from '../firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';
import Login from '../auth/login';
import Signup from '../auth/signup';
import NewReleased from '../pages/NewReleased/NewReleased';
// import MewReleased from '../pages/NewReleased/MewReleased';
import MovieDetails from '../pages/detailPage/moviedetails';
import WatchMovie from '../pages/watch/watchMovie';
import Display from '../pages/Display';
import ReleasesDisplay from '../pages/HomePage/HomeDisplay';

export default function Allroutes() {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [timeActive, setTimeActive] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate()


  // handling the hover

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
  }, []);


  useEffect(()=>{
    if(currentUser?.emailVerified){
      navigate('/home')
    }
  })


  return (
    <>
  
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Routes>
      <Route path="/two" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
        <Route path="/login" element={
          !currentUser?.emailVerified
          ? <Login/>
          : <Navigate to='/' replace/>
        } />
        <Route path="/signup" element={

          !currentUser?.emailVerified 
          ? <Signup/>
          : <Navigate to='/' replace/>
        }/>
        <Route path='/verify-email' element={<VerifyEmail/>} /> 
        <Route path='/' 
         element={
          !currentUser?.emailVerified ? <Signup/> :  <NewReleased/>
      
         }/>
     

        <Route path='/home' 
         element={
          !currentUser?.emailVerified ? <Signup/> : <ReleasesDisplay/>
         
         }/>
        <Route path='/movie/:movieId'
         element={
          !currentUser?.emailVerified? <Signup/> :
         <MovieDetails/>
         }/>
      </Routes>  
    </AuthProvider>
</>
);
}
