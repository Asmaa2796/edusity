import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollTop = () => {
    const [scroll,setScroll] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    useEffect(() => {
        
        window.addEventListener('scroll',() => {
            if(window.scrollY >= 100) {
                setScroll(true)
            } else {setScroll(false)}
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top:'0',
            behavior:'smooth'
        })
    }
    return (
        <>
        {currentPath === "/" ? 
          scroll &&
            <img data-aos="fade-up" onClick={scrollTop} className="scrollTop" src={"../assets/top.png"} alt="" />
            :
            <img data-aos="fade-up" onClick={scrollTop} className="scrollTop" src={"../../assets/top.png"} alt="" />
          }
            
        </>
    );
}

export default ScrollTop;
