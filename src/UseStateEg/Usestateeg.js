import React, { useState } from 'react'
import "./Usestateeg.css"
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import 'animate.css';


const Usestateeg = () => {
  let [loginshow,setlogin]=useState(false)
  let [signupshow,setsignup]=useState(false)
  let [icon,seticon]=useState(false)
  let [con,setcon]=useState(true)



  const darktheme={
    bgcolor1:"black",
    textcolor:"white"
  }

const signup = ()=>{
    if(con){
        setcon(!con)
        setsignup(!signupshow)
    }
    else{
        if(loginshow){
           setlogin(!login)
           setcon(!con)
        }
        
        else{
            setcon(!con)
            setsignup(!signupshow)
        }
        
    }
   
}
const login = ()=>{
    if(con){
        setcon(!con)
        setlogin(!loginshow)
    }
    else{
        if(signupshow){
           setsignup(!signupshow)
           setlogin(!loginshow)
        }
        else{
            setcon(!con)
            setlogin(!loginshow)


        }
        
    }
    
}
  
  return (
<div id="container" style={{backgroundColor:icon ? darktheme.bgcolor1:"white" }} >
<div id="navbar" style={{backgroundColor:icon ? "grey":"orange" }}>
    <div id="title">
    <p style={{color:icon ? darktheme.textcolor:"black"}}><IoFastFood /></p>
    <h1 style={{color:icon ? darktheme.textcolor:"black"}}>Knite Bite</h1>
    </div>
    <div id="navright">
        <button  onClick={signup}>Sign Up</button>
        <button onClick={login}>Log In</button>
        <p id="moon" style={{color:icon ? darktheme.textcolor:"black"}} onClick={()=>seticon(!icon)}>
            {icon ? <IoMdSunny />:<FaMoon/>}</p>
      
    </div>

</div>

{con && <div id="content">
    <div id="c1">
        <img src="https://www.knight-bite.com/res/about/food-strip.webp"></img>
        <p style={{color:icon ? darktheme.textcolor:"black"}} >Knight Bite started with the idea to serve all the hungry nocturnals who find it really difficult to order late night muchies. KB brought together late night eaters and helped them order delicious meals at their convenience via Knight Bite App and call.</p>
    </div>
    <div id="c2">
        <p style={{color:icon ? darktheme.textcolor:"black"}}>Going forward, our aim is to help and bring smiles in many more faces and cover many more cities across India and around the world.</p>
        <img src="https://www.knight-bite.com/res/about/burger.webp"></img>
    </div>
</div>}
{signupshow && <div className="signup-container animate__animated animate__zoomIn" style={{backgroundColor:icon ? "grey":"lightgrey" }}>
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



    
    

