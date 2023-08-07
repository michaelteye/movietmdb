import React, { useEffect } from 'react'
import Login from '../auth/login'
import { useState } from 'react'
import NavSvg from '../components/icons/nav'
import ButtonSVG from '../components/icons/button'
import { Link } from 'react-router-dom'
import Logout from '../auth/logout'
import { onAuthStateChanged, onIdTokenChanged,User } from 'firebase/auth'
import { AuthProvider } from '../context/AuthContext'
import auth from '../firebase/firebase'

export default function Navbar(){
    //const user = useContext(AuthContext);     
    const [isOpen, setIsOpen] = useState(false)
    const [currentUser,setCurrentUser] = useState(auth.currentUser)
    const styles = `z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`
    const listStyle = `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`
    const atags = `block py-2 pl-3 pr-4 text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`

    const toggleProfile = ()=>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsubscribe(); // Cleanup the subscription when the component unmounts
        };
    }, []);

  return (
   

   
   <div>
     <AuthProvider value={{currentUser}}>

    <nav className=" border-gray-300 dark:bg-gray-900 bg-startbg relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:3000/home" className="flex items-center">
            <img src="https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-black text-2xl font-bold whitespace-nowrap dark:text-white">FineSite</span>
        </a>
        <div className="flex items-center md:order-2">
                <div>
                    <button type="button" className="flex mr-3 
                        text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4
                        focus:ring-gray-300 dark:hover:ring-gray-600" id="user-menu-button" 
                        onClick={toggleProfile}>
                        
                        <img 
                        className="w-8 h-8 rounded-full" 
                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" 
                        alt="user photo"
                        />
                    </button>
                </div>
           
            <NavSvg/>
            <div className={styles}>
                <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="#" className={listStyle}>Dashboard</a>
                </li>
                <li>
                    <a href="#" className={listStyle}>Settings</a>
                </li>
                <li>
                    <a href="#" className={listStyle}>Earnings</a>
                </li>
                <li>
                    <a href="#" className={listStyle}>Sign out</a>
                </li>
                </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <ButtonSVG/>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-300 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <Link to='/home' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            
           <li>
                <Link to="/" className={atags}>My List</Link>
            </li> 
            {
                currentUser && <Logout/> 
            }
            <li>
                <Link to='/' className={atags}>
                    <button className='bg-white w-20 rounded-full'>Filter</button>
                </Link>
            </li>
            </ul>
        </div>
        </div>
       {isOpen && (<Login/>)}
     </nav>
   
    </AuthProvider>
</div>
  )
}