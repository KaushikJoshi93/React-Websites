import '../assets/css/total_amount_style.css'

function Totalamount(props){

    return (
        <>
            <div className="checkout_container">
                <div className="reset_container">
                            <p>Reset</p>
                </div>
                <div className="total_amount_container">
                            <p>Total:</p>
                </div>
                <div className="pay_container">
                            <p>Pay Now</p>
                </div>
            </div>
        </>
    )
}
export default Totalamount;
