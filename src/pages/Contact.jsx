// src/pages/Contact.jsx
import '../styles/Contact.css'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="contact-page section">
      <div className="floating-box contact-box">
        <h2>Let's Connect</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/prayash_pratimbaruah?igsh=MXVqemt1eWl3dDl1dg==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/praystar" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/prayash-baruah-ba8a14277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/prayash_baruah?t=snzShZyuB5m8MyBtBjIGWA&s=08" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}
