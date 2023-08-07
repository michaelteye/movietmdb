import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import  auth  from '../firebase/firebase';
import { useAuthValue } from '../context/AuthContext';

export default function Signup() {
  const [isClick, setIsClick] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords do not match. Please try again.');
      }
    }
    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser!)
            .then(() => {
              setTimeActive(true);
              navigate('/verify-email');
              
            })
            .catch((err) => setError(err.message));
        })
        .catch((err) => setError(err.message));

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const toggleOnClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="bg-authbg bg-no-repeat bg-cover bg-center h-screen">
      <div className="w-full max-w-xs ml-[510px] pt-[150px] mb-0">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[450px]" onSubmit={register}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************************"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="*************************"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>

          <div className="py-2 " onClick={toggleOnClick}>
            <p>
              Already have an account? <Link to="/login" className="text-blue-400">Sign In</Link>
            </p>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
      </div>
    </div>
  );
}
