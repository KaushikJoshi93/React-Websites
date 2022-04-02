import Navbar from "./Navbar";
import banner_img from '../assets/images/instock_banner.png'
import '../assets/css/product_window_style.css'
import { useEffect, useState } from "react";
import LoadingBar from "./Loading_bar";

function Product_window() {
    const [loading, set_loading] = useState('true');
    const [show, set_show] = useState("block");
    const [arr, set_arr] = useState([]);

    // making request to fetch the details of the product
    useEffect(() => {
        let nwarr = [];
        let sno = window.location.href.split("=")[1];
        sno = parseInt(sno);
        fetch("http://localhost/authentication_api/api/other_api/fetch_product.php", {
            method: "POST",
            body: JSON.stringify({
                prod_arr: JSON.stringify(sno)
            }),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
            .then((json) => {
                let detail_arr = json[0];
                nwarr.push(detail_arr["Sno"], detail_arr["Name"], detail_arr["Price"], detail_arr["Details"], detail_arr['Quantity'], detail_arr["Image"]);
                set_arr(nwarr);
                set_loading(false);
                set_show('none');
            });
    }, [])


    return (
        <>
            <Navbar />
            <LoadingBar style={{ display: show }} />
            {!loading &&
                <div className="product_box">
                    <img src={arr[5]} alt={`Product ${arr.length}`} />
                    <div className="product_desc">
                        <p>{arr[1]}</p>
                        <p className="details">{arr[3]}</p>
                        <p className="price">₹{arr[2]}</p>
                        <img src={banner_img} alt={`Banner of ${arr[1]}`} />
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            }
        </>
    )
}
export default Product_window;
