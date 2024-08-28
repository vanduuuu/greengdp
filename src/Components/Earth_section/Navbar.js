import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="header">
        <div className="logo">
          <Link to="/"><img src="https://webpagecdnstorage.blob.core.windows.net/greengdp/logo.png" alt="Logo" loading="lazy" /></Link>
        </div>
        <div className="socialLinks">
          <ul>
            <li>
              <Link to="https://www.facebook.com/electroniccrop/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/electronic-crop/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/electronic_crop/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
