import Navbar from "./Navbar";
import '../assets/css/cart_window_style.css';
import { useState } from "react";
import { useEffect } from "react";
import Totalamount from "./Totalamount";
import LoadingBar from "./Loading_bar";
import { Link } from "react-router-dom";


let enter = true;

function Cart_window() {
    const [quantity, setquantity] = useState(1);
    const [price, setprice] = useState(10000);
    const [arr, set_arr] = useState([]);
    const [runFunc ,set_runfunc] = useState(false);
    const [loading, set_loading] = useState('true');
    const [show, set_show] = useState("block");
    const [cart_func , set_cart_func] = useState("");
    
    let new_func = ()=>{};
    function return_cart_func(func){
        // set_func(()=>func);
        let sample_func = func();
        // console.log(sample_func);
        new_func = sample_func;
        // set_cart_func(new_func);
    }
    function increament(event) {
        let new_quantity = quantity + 1;
        let new_price = new_quantity * 10.99;
        setquantity(new_quantity)
        setprice(new_price)
    }
    function decreament(event) {
        let new_quantity = quantity - 1;
        if (new_quantity < 0) {
            new_quantity = 0;
        }
        let new_price = price / new_quantity;
        setquantity(new_quantity)
        setprice(new_price);
    }
    function removeitem(event) {
        let sno = event.target.parentElement.previousElementSibling.innerHTML;
        let new_arr = Object.values(JSON.parse(localStorage.getItem('prod_arr')));
        new_arr = new_arr.filter((value, index, new_arr) => {
            return value !== sno;
        });
        set_runfunc(true);
        // console.log(cart_func);
        // console.log(new_func);
        new_func((parseInt(window.no_cart_items) - 1));
        // window.amazing((parseInt(window.no_cart_items) - 1));
        localStorage.setItem('cart_value', parseInt(window.no_cart_items) - 1);
        localStorage.setItem('prod_arr', JSON.stringify(new_arr));
       
    }
    const show_products = ()=> {
        set_runfunc(false);
        let token_val = "";
        if (document.cookie !== "" && enter) {
            let jwt_arr = document.cookie.split("=");
            if (jwt_arr.find(value => (value.includes("jwt")) ? true : false)) {
                for (let index = 0; index < jwt_arr.length; index++) {
                    if (jwt_arr[index].includes("jwt")) {
                        let token_str = jwt_arr[index + 1];
                        token_val = token_str.split(";")[0];
                    }

                }
                fetch("http://localhost/authentication_api/api/other_api/fetch_cart_items.php", {
                    method: "POST",
                    body: JSON.stringify({
                        token: token_val
                    }),
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        let nwarr = [];
                        if (json.message === undefined) {
                            for (let i = 0; i < json.length; i++) {
                                let element = json[i];
                                nwarr.push(<div className="cart_box" key={i}>
                                   <Link to={`/prod_window?prod_no=${element["Sno"]}`}> <img src={element['Image']} alt={`Product ${element['Sno']}`} /></Link>
                                    <div className="cart_sub_box">
                                        <h4 className="prod_name">{element["Name"]}</h4>
                                        <p>{element['Details']}</p>
                                    </div>
                                    <div className="cart_pricenquantity_box">
                                        <p id="cart_price">₹{element['Price']}</p>
                                        <p onClick={(event) => { decreament(event) }} className="buttons">-</p><p className="quantity">{quantity}</p><p onClick={(event) => { increament(event) }} className="buttons">+</p>
                                        <p style={{ 'visibility': "hidden" }} className="sno">{element["Sno"]}</p>
                                        <Link to={"/cart"}><i className="bi bi-trash-fill" onClick={(event) => { removeitem(event) }}></i></Link>
                                    </div>
                                </div>);
                            }
                        }
                        else if (json.message === "Empty") {
                            nwarr.push(<h1 style={{ margin: 'auto' }} key={1}>No Items in your cart</h1>);
                        }
                        else {
                            enter = false;
                            show_products();
                        }
                        set_arr(nwarr);
                        set_loading(false);
                        set_show('none')
                    });
            }
            else {
                enter = false;
                show_products();
            }
        }
        else {
            enter = true;
            let new_prod_arr = localStorage.getItem("prod_arr");
            if (new_prod_arr !== '[]' && new_prod_arr !== null) {
                new_prod_arr = Object.values(JSON.parse(new_prod_arr));
                new_prod_arr = JSON.stringify(new_prod_arr).replace("[", "");
                new_prod_arr = new_prod_arr.replace("]", "");
                let nwarr = [];
                fetch("http://localhost/authentication_api/api/other_api/fetch_product.php", {
                    method: "POST",
                    body: JSON.stringify({
                        prod_arr: new_prod_arr
                    }),
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    // Converting data to json
                    .then(response => response.json())
                    .then(json => {
                        for (let i = 0; i < json.length; i++) {
                            let element = json[i];
                            nwarr.push(<div className="cart_box" key={i}>
                                <Link to={`/prod_window?prod_no=${element["Sno"]}`}><img src={element['Image']} alt={`Product ${element['Sno']}`} /></Link>
                                <div className="cart_sub_box">
                                    <h4 className="prod_name">{element["Name"]}</h4>
                                    <p>{element['Details']}</p>
                                </div>
                                <div className="cart_pricenquantity_box">
                                    <p id="cart_price">₹{element['Price']}</p>
                                    <p onClick={(event) => { decreament(event) }} className="buttons">-</p><p className="quantity">{quantity}</p><p onClick={(event) => { increament(event) }} className="buttons">+</p>
                                    <p style={{ 'visibility': "hidden" }} className="sno">{element["Sno"]}</p>
                                    <Link to={"/cart"}><i className="bi bi-trash-fill" onClick={(event) => { removeitem(event) }}></i></Link>
                                </div>
                            </div>);
                        }
                        set_arr(nwarr);
                        set_loading(false);
                        set_show('none');
                    },(error)=>{
                        console.log(`${error.message} --> Please reload the Page`);
                    });
            }
            else {
                let nwarr = [];
                nwarr.push(<h1 style={{ margin: 'auto' }} key={1}>No Items in your cart</h1>);
                set_arr(nwarr);
                set_loading(false);
                set_show('none')
            }
        }

    }
    useEffect(() => {
        show_products();
    },[runFunc]);
    return (
        <>
            <Navbar myfunc = {return_cart_func}/>
            <LoadingBar style={{ display: show }} />
            <h2 id="cart_heading">Shopping Cart</h2>
            {!loading &&
                <>
                    <div className="major_cart" >
                        {arr.map(data =>{
                             return data;
                             
                        })}
                    </div>
                    <Totalamount />
                </>
            }
        </>
    )
}

export default Cart_window;