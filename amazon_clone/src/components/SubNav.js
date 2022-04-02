import "../assets/css/subnav_style.css"
import SideNav from "./SideNav"
import { useState } from "react";

function SubNav(props){
    const [show_sidemenu, setshow_sidemenu] = useState('none')
    function toggle_sidemenu(value){
        setshow_sidemenu(value);
        window.onscroll = function () { window.scrollTo(0, 0); };
    }
    return (
        <div className="subnav">
            <SideNav show={show_sidemenu} func={toggle_sidemenu} text_func2={props.text_func} color_func2={props.color_func} show_func2={props.show_func}/>
            <i className="bi bi-list" onClick={()=>{toggle_sidemenu('block')}}></i>
            <ul>
                <li>All</li>
                <li>Today's Deals</li>
                <li>Sell</li>
                <li>Registry</li>
            </ul>
        </div>
    )
}
export default SubNav