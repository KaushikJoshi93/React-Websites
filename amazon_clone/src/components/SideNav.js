import "../assets/css/sidenav_style.css"
import User from "./User"
import { Link } from "react-router-dom";

function SideNav(props){
    const Logout_user = ()=>{
        document.cookie = "jwt=test;max-age=0";
        props.text_func2("Successfully!! Logged Out...");
        props.color_func2("green");
        props.show_func2("block");
        props.func("none");
        window.onscroll = function () {};
    }
    let heading = "Hello, Sign in";
    if(document.cookie.split("=").length !== 0 && document.cookie.split("=").find(value => (value.includes("jwt")) ? true : false)){
        heading = "Hello User";
        return(
            <div className="sidemenu" style={{display:props.show}}>
                <User text = {heading} toggle_func={props.func}/>
                <h1 style={{zIndex:3,color:"purple",fontSize:'18px',textAlign:'center',backgroundColor:'yellow',cursor:'pointer'}} onClick={()=>{Logout_user()}}>Logout</h1>
                <h1 style={{zIndex:3,color:"purple",fontSize:'18px',textAlign:'center',backgroundColor:'yellow',cursor:'pointer'}}>About</h1>
            </div>
        )
    }
    else{
        return (
            <div className="sidemenu" style={{display:props.show}}>
                <User text = {heading} toggle_func={props.func}/>
                <h1 style={{zIndex:3,color:"purple",fontSize:'18px',textAlign:'center',backgroundColor:'yellow',cursor:'pointer'}} onClick={()=>window.onscroll = ()=>{}}><Link to="/login">Login</Link></h1>
                <h1 style={{zIndex:3,color:"purple",fontSize:'18px',textAlign:'center',backgroundColor:'yellow',cursor:'pointer'}} onClick={()=>window.onscroll = ()=>{}}><Link to="/signup">Signup</Link></h1>
            </div>
    )
    }
}
export default SideNav