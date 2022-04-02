import "../assets/css/cart_style.css"


function Cart(props){
    return (
        <>
        <i className="bi bi-cart"></i>
        <span id="cart_value">{props.value}</span>
        </>
    )
}
export default Cart