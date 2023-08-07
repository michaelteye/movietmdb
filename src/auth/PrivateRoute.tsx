import { ReactNode } from 'react'
import {Navigate} from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import Profile from '../pages/profile';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({children}:PrivateRouteProps) => {
  const  {currentUser}  = useAuthValue()

  if(!currentUser?.emailVerified){
    return <Navigate to='/' replace/>
  }

  return (
    // <>children</>
    <Profile/>
  )
}
export default PrivateRoute