import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'
import img4 from '../assets/images/carousel4.jpg'
import "../assets/css/carousel_style.css"

function Carousel(){
    let index = 0;
    let img_names = [img1 , img2 , img3 , img4]
    const change_images = (val)=>{
        let carousel_elem = document.querySelector("#carousel_img");
        if(val === "forward"){
            index += 1;
            index = (index > 3)? 0 : index;
            carousel_elem.src = img_names[index];
        }
        else if(val==='backward'){
            index -= 1;
            index = (index < 0)? 0 : index;
            carousel_elem.src = img_names[index];
        }
        else{
            if(index===4){
                index = 0;
            }
            else if(index < 0){
                index = 0;
            }
            carousel_elem.src = img_names[index];
            index += 1;
        }
        
    }
    setInterval(function carousel_changing(){
        if(window.location==='http://localhost:3000/'){
            change_images()
        }
    },5000)
    return (
        <div className="carousel">
            <i className='bi bi-arrow-left' onClick={()=>change_images('backward')}></i>
            <img src={img1} alt="Images" id="carousel_img" />
            <i className="bi bi-arrow-right" onClick={()=>change_images('forward')}></i>
        </div>
    )
}
export default Carousel