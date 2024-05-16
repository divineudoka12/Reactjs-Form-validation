import React, { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import UserProfile from './Components/UserProfile'
import NotFound from './Components/NotFound'
import {FaSun} from "react-icons/fa"

function App() {
 
  const [userData, setUserData] = useState(null)

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div className="container ">
      <div>
               <div id="header">
                   <h1>Github Profile Finder</h1>
                   <p className="light">Light mode <FaSun /> </p>
               </div>
               <SearchBar onUserData={handleUserData} />
               {userData ? <UserProfile data={userData}/> : <NotFound/>}
            </div>
    </div>
  )
}

export default App
