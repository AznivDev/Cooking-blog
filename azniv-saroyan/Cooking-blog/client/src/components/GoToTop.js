import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
  
export default function GoToTop() {
    const location = useLocation()

    const onTop = () => {
      window.scrollTo(0, 0);
    }
    
    useEffect(() => {
      onTop()
    }, [location]);
    
    return null;
}