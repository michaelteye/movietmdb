import auth from "../firebase/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Logout() {
//   const [currentUser, setCurrentUser] = useState<User | null>();
const [currentUser,setCurrentUser] = useState(auth.currentUser)

  const logOutUser = () => {
    if (currentUser?.emailVerified) {
      signOut(auth);
      alert("you've signout successfully");
    } else {
      alert("Please verify your email first");
    }
  };

  return (
    <>
      <li>
        <Link to="/login" onClick={logOutUser}>
          Log Out
        </Link>
      </li>
    </>
  );
}
