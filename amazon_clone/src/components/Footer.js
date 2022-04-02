import  '../assets/css/footer_style.css';
function Footer(){
    return (
        <div className="footer">
           <div className="icons">
           <i className="bi bi-facebook"></i>
           <i className="bi bi-whatsapp"></i>
           <i className="bi bi-youtube"></i>
           </div>
           <div className="links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                </ul>
           </div>
           <div className="copyright">
                <h5>Copyright&copy;2022</h5>
           </div>
        </div>
    )
}
export default Footer