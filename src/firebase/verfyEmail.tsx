import { useAuthValue } from '../context/AuthContext'
import {useState, useEffect} from 'react'
import auth from './firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/home')
        }
      })
      .catch((err:any) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval:any = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser!)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }
   return (
    <div className='center flex justify-center text-center h-screen'>
    <div className='verifyEmail w-[90%] max-w-[500px] shadow-custom text-center px-[40px] py-[20px] bg-bgColor'>
      <h1 className=" font-light mt-0">Verify your Email Address</h1>
      <p className=" leading-6">
        <strong>A Verification email has been sent to:</strong><br/>
        <span className=" text-gray-100">{currentUser?.email}</span>
      </p>
      <span>Follow the instruction in the email to verify your account</span>       
      <button 
        onClick={resendEmailVerification}
        disabled={timeActive}
        className = "mt-[35px]"
      >Resend Email {timeActive && time}</button>
    </div>
  </div>
   )
}

export default VerifyEmail