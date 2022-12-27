import React from 'react'
import {Link} from 'react-router-dom'
import {QRCode} from 'react-qrcode-logo'
import {FaEnvelope, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import '../styles/footerStyles/footer.scss'

function Footer() {
  return (
    <div className = "footer">
      <div className="contacts-container">
          <div className = "social-pages">
            {/* Link to social pages */}
            <Link to = "https://www.youtube.com/@nairaskitchen" target = "_blank"><FaYoutube className = "youtube"/></Link> 
            <Link to = "https://www.instagram.com/nairas__kitchen/" target = "_blank"><FaInstagram className = "instagram"/></Link>
            <Link to = "https://www.facebook.com/Nairayixohanocy/" target = "_blank"><FaFacebook className = "facebook"/></Link>
          </div> 
          <div className="contact">
            <FaEnvelope className="email"/>
            <p>cookingblog@gmail.com</p>
          </div>
      </div> 
      <div className="qrcode">
        {/* QRCode in youtube channel */}
          <QRCode value="https://www.youtube.com/@nairaskitchen"  // QR code to youtube
                size= {100} 
                fgColor= {"#0A66C2"}
          />
      </div>    
    </div>
  )
}

export default Footer;