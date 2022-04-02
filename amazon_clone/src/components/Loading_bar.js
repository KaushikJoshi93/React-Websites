import loading from "../assets/images/loader.gif";
import "../assets/css/loading_bar_style.css";

function Loading_bar(props){
    return(
        <div className="loading_container">
        <img src={loading} style={props.style} alt="Loading bar"/>
        </div>
    );
}
export default Loading_bar;
