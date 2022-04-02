import Navbar from "./Navbar";
import '../assets/css/signup_style.css';
import Logo from "../assets/images/nav_logo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import LoadingBar from "./Loading_bar";
import Alert from "./Alert";

function Signup(){
    const [email_val,set_email_val] = useState("");
    const [password_val , set_password_val] = useState("");
    const [cpassword_val , set_cpassword_val] = useState("");
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
        else if(val==="cpassword"){
            set_cpassword_val(event.target.value);
        }

    }
    const submit_data = (e)=>{
        e.preventDefault();
        if(password_val === cpassword_val){
        fetch('http://localhost/authentication_api/api/create_user.php',{
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
            if(json['message'] === "User has been created."){
                set_text("Sucess!! User has been created.");
                set_color("green");
            }
            else{
                set_text("Oops!! Unable to create user..");
                set_color("red");
            }
        }
        )
        set_email_val("");
        set_password_val("");
        set_cpassword_val("");
        }
        else{
            set_show_alert('block');
            set_text("Please Enter both password same..");
            set_color('red');
        }
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
                <div className="signup_box">
                    <form  onSubmit={(event)=>submit_data(event)}>
                        <img src={Logo} alt="Logo"/>
                        <i className="bi bi-person-fill"></i>
                        <input type="email" name="email" id="email" placeholder="Email" onChange={(event)=>update_value(event,'email')} value={email_val}/><br/>
                        <i className="bi bi-key"></i>
                        <input type="password" name="password" id="password" placeholder="Password" autoComplete="true" onChange={(event)=>update_value(event,'password')} value={password_val}/><br/>
                        <i className="bi bi-key"></i>
                        <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" autoComplete="true" onChange={(event)=>update_value(event,'cpassword')} value={cpassword_val}/><br/>
                        <input type="submit" value="Signup" />
                    </form>
                    Already Have Account?<Link to={"/login"}>Login</Link>
                </div>
            }
        </>
    )
}
export default Signup;
