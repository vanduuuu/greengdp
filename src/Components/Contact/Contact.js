import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import Navbar from '../Earth_section/Navbar'
const Contact = () => {
  return (
    <div>
      <Navbar/>
          <div class="container-Contact">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" loading='lazy'/>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <h4><i class="fas fa-map-marker-alt"></i>  Regd Office:</h4>
          <p>B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703</p>
          <h4><i class="fas fa-map-marker-alt"></i>  Project Office:</h4>
          <p>61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</p>
          <div class="info">
            
            <div class="information">
              <i class="fas fa-envelope"></i> 
              <p>mail@precisiongrow.co.in</p>
            </div>
            <div class="information">
              <i class="fas fa-phone"></i>
              <p>+91 - 8097283444</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <Link to="https://www.facebook.com/PrecisionGrow/?show_switched_toast=0&amp;show_invite_to_follow=0&amp;show_switched_tooltip=0&amp;show_podcast_settings=0&amp;show_community_review_changes=0&amp;show_community_rollback=0&amp;show_follower_visibility_disclosure=0" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://x.com/precision_grow?s=21" target="_blank">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="https://www.instagram.com/precisiongrow_/" target="_blank">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/100778255/admin/feed/posts/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </Link>
              <Link to="https://precisiongrowindia.blogspot.com/" target="_blank">
                <i class="fa-brands fas fa-blogger"></i>
              </Link>
              <Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g" target="_blank">
                <i class="fa-brands fas fa-youtube"></i>
              </Link>
              <Link to="https://on.soundcloud.com/BTa2Q" target="_blank">
                <i class="fa-brands fas fa-soundcloud"></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Full Name</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Mobile Number</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Write Your Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
