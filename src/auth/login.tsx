import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import auth from '../firebase/firebase'
import Signup from './signup'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setTimeActive} = useAuthValue()
    const navigate = useNavigate()


    const login = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            if(!auth.currentUser?.emailVerified){
                sendEmailVerification(auth.currentUser!)
                .then(()=>{
                    setTimeActive(true)
                    navigate('/verify-email')
                })
                .catch(err=> alert(err.message))
            }
            else{
                navigate('/home')
            }
        })
        .catch(err=>new Error(err.message))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)

    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)

    }

    const [iSClick,setIsClick] = useState(false)

    const ToggleOnClick = ()=>{
        setIsClick(!iSClick)
    }
  return (
    <>
    {iSClick ? <Signup/>:
    <div className=' bg-authbg bg-no-repeat bg-cover bg-center h-screen'>

        <div className="w-full max-w-xs ml-[510px] pt-[150px] mb-0">
            <form
            onSubmit={login} name="login_form"
             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[450px]">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                     id="email" 
                     type="email" 
                     required
                     placeholder="Enter Your Email Here" 
                     value={email}
                     onChange={handleEmail}
                     />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input 
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="******************"
                onChange={handlePassword}
                />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>    
                </div>
                <div className='py-2 ' onClick={ToggleOnClick}>
                    <p>Not a Member? <Link to='/signup' className=' text-blue-400'>SignUp Now</Link></p>
                </div>
            </form>
           
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>


    </div>
}
    


    </>
  )
}
