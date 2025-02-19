import React, { useState } from 'react'
import "./Usestateeg.css"
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import 'animate.css';


const Usestateeg = () => {
  let [loginshow,setlogin]=useState(false)
  let [signupshow,setsignup]=useState(false)
  let [icon,seticon]=useState(false)

  const darktheme={
    bgcolor1:"black",
    textcolor:"white"
  }

//   function login(){
//     if (signupshow){
//         signupshow=false
//         setlogin(!loginshow)
//     }
//     else{
//         setlogin(!loginshow)

//     }
    
//   }

  
  return (
<div id="container" >
<div id="navbar" style={{backgroundColor:icon ? darktheme.bgcolor1:"aquamarine" }}>
    <h1 style={{color:icon ? darktheme.textcolor:"black"}}>Navbar</h1>
    <div id="navright">
        <button  onClick={()=>{setsignup(!signupshow)}}>Sign Up</button>
        <button onClick={()=>setlogin(!loginshow)}>Log In</button>
        <p id="moon" style={{color:icon ? darktheme.textcolor:"black"}} onClick={()=>seticon(!icon)}>
            {icon ? <IoMdSunny />:<FaMoon/>}</p>
      
    </div>

</div>
{signupshow && <div className="signup-container animate__animated animate__zoomIn" style={{backgroundColor:icon ? darktheme.bgcolor1:"white" }}>
        <h2 style={{color:icon ? darktheme.textcolor:"black"}}>Sign Up</h2>
        <form>
            <div className="input-group">
                <label for="name" style={{color:icon ? darktheme.textcolor:"black"}} >Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required/>
            </div>
            <div className="input-group">
                <label for="email" style={{color:icon ? darktheme.textcolor:"black"}}>Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="input-group">
                <label for="password" style={{color:icon ? darktheme.textcolor:"black"}}>Password</label>
                <input type="password" id="password" placeholder="Create a password" required/>
            </div>
            <div className="input-group">
                <label for="confirm-password" style={{color:icon ? darktheme.textcolor:"black"}}>Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>}


{loginshow && <div id="loginform">
    <div className="login-container animate__animated animate__zoomIn">
        <h2>Login</h2>
        <form>
            <div className="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    </div>}
</div>


 
  )
}

export default Usestateeg



    
    

