import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { useRef,useEffect } from "react"
import { logout } from "../../firebase"

function Navbar(){

    const navRef = useRef()

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }
            else{
                navRef.current.classList.remove('nav-dark')
            }
        })

    },[])
    return(
        <div className="nav-bar" ref={navRef}>
           <div className="navbar-left">
            <img src={logo}/>
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
           </div>
           <div className="navbar-right">
            <img src={search_icon} alt="" className="icons"/>
            <p>children</p>
            <img src={bell_icon} alt="" className="icons"/>
            <div className="navbar-profile">
            <img src={profile_icon} alt="" className="profile"/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>sign out of Netflix</p>
            </div>
            </div>
           </div>
        </div>
    )
}
export default Navbar