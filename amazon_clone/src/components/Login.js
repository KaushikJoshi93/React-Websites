import Navbar from "./Navbar";
import '../assets/css/login_style.css';
import Logo from "../assets/images/nav_logo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import LoadingBar from "./Loading_bar";
import Alert from "./Alert";

function Login(){
    const [email_val,set_email_val] = useState("");
    const [password_val , set_password_val] = useState("");
    const [show_alert , set_show_alert] = useState("none");
    const [text ,set_text] = useState("");
    const [color , set_color] = useState("");
    let update_value = (event , val)=>{
        if(val==='email'){
            set_email_val(event.target.value);
        }
        else if(val==='password'){
            set_password_val(event.target.value);
        }

    }
    const login_user = (e)=>{
        e.preventDefault();
        fetch('http://localhost/authentication_api/api/login.php',{
            // Adding method type
            method:"POST",
            // Adding content to send
            body: JSON.stringify({
                email:email_val,
                password:password_val
            }),
            // Adding headers to the request
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        // Converting data to json
        .then(response=> response.json())
        // Displaying results
        .then(json=>{
            set_show_alert('block');
            if(json['message'] !== "Login failed"){
                set_text("Sucess!! You are Successfully Logged in..");
                set_color("green");
                document.cookie = `jwt=${json['jwt']}; max-age=${60*60}`;
                setTimeout(() => {
                    window.location = "http://localhost:3000";                    
                }, 2000);
            }
            else{
                set_text("Oops!! Wrong Credentials..");
                set_color("red");
            }
        }
        )
        set_email_val("");
        set_password_val("");
    }
    const[loading,set_loading] = useState('true');
    const[show,set_show] = useState("block");
    useEffect(() => {
        setTimeout(() => {
            set_loading(false);
            set_show('none');
        }, 1000)
      }, []);
    return (
        <>
            <Navbar/>
            <Alert style={{display:show_alert,background:color}} text={text} func={set_show_alert}/>
            <LoadingBar style={{display:show}}/>
            {!loading&&
                <div className="login_box">
                    <form onSubmit={(event)=>login_user(event)}>
                        <img src={Logo} alt="Logo"/>
                        <i className="bi bi-person-fill"></i>
                        <input type="email" name="email" id="email" placeholder="Email" onChange={(event)=>update_value(event,'email')} value={email_val}/><br/>
                        <i className="bi bi-key"></i>
                        <input type="password" name="password" id="password" placeholder="Password" autoComplete="true" onChange={(event)=>update_value(event,'password')} value={password_val}/><br/>
                        <input type="submit" value="Login" />
                    </form>
                    Don't Have an account?<Link to={"/signup"}>Signup</Link>
                </div>
            }
        </>
    )
}
export default Login;
