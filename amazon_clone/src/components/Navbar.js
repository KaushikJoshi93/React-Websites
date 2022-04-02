import "../assets/css/navbar_style.css"
import logo from '../assets/images/nav_logo.png'
import Cart from "./Cart"
import { useState } from "react"
import { Link } from "react-router-dom"



function Navbar(props){
    // const [input_val, setinput_val] = useState("")
    let value = (localStorage.getItem('cart_value')?localStorage.getItem('cart_value'):0);
    const [cart_value , set_cart_value] = useState(value);
    let jwt_arr = document.cookie.split("=");
    if (jwt_arr.find(value=>(value.includes("jwt"))?true:false)){
        let token_val = "";
        for (let index = 0; index < jwt_arr.length; index++) {
            if (jwt_arr[index].includes("jwt")) {
               let token_str = jwt_arr[index + 1];
               token_val = token_str.split(";")[0];
            }

         }
        fetch("http://localhost/authentication_api/api/other_api/fetch_cart_value.php", {
               method: "POST",
               body: JSON.stringify({
                  token: token_val
               }),
               headers: {
                  "Content-type": "application/json; charset=UTF-8"
               }
            })
            .then(response=>response.json())
            .then(json=>{
                if(json.message===undefined || json.message===null){
                        set_cart_value(json.cart_value);
                }
                else{
                    console.log("invalid token....");
                }
            })
    }
    window.no_cart_items = cart_value;
    function give_function(){
        try{
            props.myfunc(()=>{return set_cart_value})
        }
        catch{
            // console.log("Server Error....")
        }
    
    }
    return (
        
        <div className="nav_container" onLoad={give_function}>
            <img src={logo} alt="" />
            <input type="text" name="searchBox"/>
            <i className="bi bi-search"></i>
            <Link to={'/cart'}><Cart value = {cart_value}/></Link>
        </div>
    )
}
export default Navbar
