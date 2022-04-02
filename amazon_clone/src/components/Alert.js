import "../assets/css/alert_style.css";


// This is a alert component which will show when we want to tell the user any specific information
function Alert(props){

    return (
    <div className="alert" style={props.style}>
        {props.text}
    <span className="closebtn" onClick={(event)=>{event.target.parentElement.style.display='none';props.func('none')}}>&times;</span>
    </div>
    )
}
export default Alert;
