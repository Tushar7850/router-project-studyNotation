import { Routes ,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />


      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
         <Route path="dashboard" element={<Dashboard/>} />



      </Routes>
    
    </div>
  );
}

export default App;
