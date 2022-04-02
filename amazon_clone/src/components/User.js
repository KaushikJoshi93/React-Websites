import Heading from "./Heading"
import '../assets/css/user_style.css'

function User(props){

    return(
            <div className="user_heading">
                    <i className="bi bi-person-circle"></i>
                    <Heading text={props.text} style = {{color:'black' , width:'100%',fontSize:'70%'}}/>
                    <i className="bi bi-x" onClick={()=>{props.toggle_func('none');window.onscroll = function () {};}}></i>
            </div>

    )
}
export default User