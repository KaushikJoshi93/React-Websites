import { useEffect,useState } from "react"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import LoadingBar from "./components/Loading_bar"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import SubNav from "./components/SubNav"
import Alert from "./components/Alert"


function sample(func, n = 0) {
    window.amazing = func();
}
function App() {
    const [show_alert, set_show_alert] = useState("none");
    const [text, set_text] = useState("");
    const [color, set_color] = useState("");
    const [loading, set_loading] = useState('true');
    const [show, set_show] = useState("block");
    const [arr, set_arr] = useState([]);
    const[error_msg , set_error_msg] = useState("");

   
    function show_component() {
        let nwarr = []
        // here we have fetched the products from the server
        fetch("http://localhost/authentication_api/api/other_api/fetch_product.php").then((response) => response.json())
            .then((json) => {
                for (let i = 0; i < json.length; i++) {
                    let element = json[i];
                    nwarr.push(<ProductCard key={i} name={element['Name']} price={element['Price']} details={element['Details']} image={element["Image"]} sno={element['Sno']} text_func={set_text} color_func={set_color} show_func={set_show_alert} />)
                }
                // console.log(element["Name"]);
                set_arr(nwarr);
                set_loading(false);
                set_show('none');
            },(error)=>{
                set_error_msg(`${error.message}.Please Reload the Page`);
                set_loading(false);
            });
        return arr
    }
    useEffect(() => {
        show_component();
    },[]);
    if(error_msg !== ""){
        return (
            <div>
                <Navbar myfunc={sample} />
                <center><h4>{error_msg}</h4></center>
            </div>
        )
    }
    else{
        return (
            <>
                <Navbar myfunc={sample} />
                <LoadingBar style={{ display: show }} />
                {!loading &&
                    <>
                        <SubNav text_func={set_text} color_func={set_color} show_func={set_show_alert}/>    
                        <Alert style={{ display: show_alert, background: color }} text={text} func={set_show_alert} />
                        <Carousel />
                        <div className="prod_box" style={{ display: 'flex', flexFlow: 'wrap' }}>
                            {arr.map(data => data)}
                        </div>
                        <Footer />
                    </>}
            </>
        )
            }
}
export default App