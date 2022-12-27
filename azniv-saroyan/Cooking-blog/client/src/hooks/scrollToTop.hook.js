import {useState, useEffect} from "react";
import "../styles/scrollToTopStyles/scrollToTopStyles.scss";
import {FaArrowCircleUp} from "react-icons/fa";

const ScrollToTop = () => {
  
    const [visible, setVisible] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    
    // Fix the final position. 
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    // Fix the final position.
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    // Scroll up when the scroll position is greater than 400px.
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if(scrollPosition > 400){
            setVisible(true);
        } else {
            setVisible(false);
        }
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [scrollPosition]);

    if(!visible) {
        return false;
    }

    return (
        <div className = "scrollToTop" onClick = {scrollToTop}>
            <FaArrowCircleUp className="topIcon"/>
        </div>
    );
}

export default ScrollToTop;