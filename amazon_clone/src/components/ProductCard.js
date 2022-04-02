import { Link } from "react-router-dom"
import "../assets/css/Productcard.css"
import Heading from "./Heading"

let enter = true;
function ProductCard(props) {
   const update_cart_value = (event) => {
      //    setting the number of cart value in global variable of window
      window.amazing(parseInt(window.no_cart_items) + 1)
      // setting the number of cart value in localstorage 
      localStorage.setItem('cart_value', parseInt(window.no_cart_items) + 1);
      let dis_button = event.target;
      dis_button.disabled = true;
      dis_button.style.backgroundColor = "grey";
      dis_button.style.color = 'black';
      let token_val = "";
      if (document.cookie !== "" && enter) {
         let jwt_arr = document.cookie.split("=");
         if (jwt_arr.find(value=>(value.includes("jwt"))?true:false)) {
            for (let index = 0; index < jwt_arr.length; index++) {
               if (jwt_arr[index].includes("jwt")) {
                  let token_str = jwt_arr[index + 1];
                  token_val = token_str.split(";")[0];
               }

            }

            var prod_sno = event.target.previousSibling.innerHTML;
            fetch("http://localhost/authentication_api/api/other_api/insert_cart_items.php", {
               method: "POST",
               body: JSON.stringify({
                  token: token_val,
                  sno: prod_sno

               }),
               headers: {
                  "Content-type": "application/json; charset=UTF-8"
               }
            })
               .then(response => response.json())
               .then(json => {
                  if (json.message === "success") {
                     props.text_func("Successfully!! Added to Cart...");
                     props.color_func("green");
                     props.show_func("block");
                  }
                  else if (json.message === "failed") {
                     props.text_func("Sorry!! We couldn't add your item to cart...");
                     props.color_func("red");
                     props.show_func("block");
                  }
                  else {
                     props.text_func("You are unauthorised person...");
                     props.color_func("red");
                     props.show_func("block");
                  }
               })
         }
         else {
                  enter = false;
                  update_cart_value(event);
         }
      }
      else {
         //    Here we will set the sno of the products in the localstorage so that we can fetch products in the cart window 
         if (localStorage.getItem("prod_arr") !== null) {
            var prod_arr = [];
            prod_arr = Object.values(JSON.parse(localStorage.getItem('prod_arr')));
            var productSno = event.target.previousSibling.innerHTML;
            prod_arr.push(productSno);
            localStorage.setItem('prod_arr', JSON.stringify(prod_arr));
         }
         else {
            var product_arr = [];
            var product_sno = event.target.previousSibling.innerHTML;
            product_arr.push(product_sno);
            localStorage.setItem('prod_arr', JSON.stringify(product_arr));

         }
      }
   }
   return (

      <div className="prod_card" style={props.style}>
         {/* image */}
         <Link to={`/prod_window?prod_no=${props.sno}`}><img src={props.image} alt="Products" title="Products" />  </Link>
         {/* name of product */}
         <Heading text={props.name} style={{ textAlign: 'center' }} />
         {/* price of product */}
         <p id='price'>₹{props.price}</p>
         {/* details about product */}
         <p id='details'>{props.details}</p>
         {/* id of the product */}
         <p style={{ 'visibility': "hidden" }}>{props.sno}</p>
         {/* add to cart button */}
         <button onClick={(event) => { update_cart_value(event) }}>Add to Cart</button>
      </div>

   )
}
export default ProductCard;
