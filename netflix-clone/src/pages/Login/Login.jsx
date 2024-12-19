import "./Login.css"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { login,signup } from "../../firebase"
import netflix_spinner from "../../assets/netflix_spinner.gif"

function Login(){
    const [signState,setSignState] = useState("Sign In")

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [isloading,setloading] = useState(false)

    

    const user_auth = async (e)=>{
        e.preventDefault()
        setloading(true)
        if(signState === 'Sign In'){
            await login(email,password)
        }
        else{
            await signup(name,email,password)
        }
        setloading(false)
    }



    return(
    <> 
       {isloading ? <div className="loading_spinner">
         <img src={netflix_spinner}/>
       </div>:
       <div className="login">
         <img src={logo} className="login-logo" alt=""/>
       <div className="login-form">
           <h1>{signState}</h1>
           <form >
               {signState === "Sign Up" ?  <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>:<></>}
              
               <input type="email" placeholder="Your Email"
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <input type="password" placeholder="Enter PAssword"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
               <button onClick={user_auth} type="submit">{signState}</button>
               <div className="form-help">
                   <div className="remember">
                       <input type="checkbox"/>
                       <label htmlFor="">Remember Me</label>
                   </div>
                   <p>Need Help?</p>
               </div>
           </form>
           <div className="form-switch">
               {signState === "Sign In"?<p>New To Netflix<span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span></p>: <p>Already Have Account <span  onClick={()=>{setSignState("Sign In")}}>Login In</span></p>}
               
           </div>
       </div>
   </div>}
        
        </>
    )
}

export default Login

