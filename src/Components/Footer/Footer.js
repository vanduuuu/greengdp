import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer>
        <div class="btnnn">
          <Link to="/contact">
            <button class="btn">JOIN THE MISSION</button>
          </Link>
          <h4 class="text-white">GREEN GDP</h4>
        </div>
        <div>
          <ul class="social2">
            <li>
              <Link
                to="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/twitter.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/PrecisionGrow/?show_switched_toast=0&amp;show_invite_to_follow=0&amp;show_switched_tooltip=0&amp;show_podcast_settings=0&amp;show_community_review_changes=0&amp;show_community_rollback=0&amp;show_follower_visibility_disclosure=0"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/fb.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/electronic_crop/"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/insta.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/electronic-crop/"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/linkdin.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/ytb.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://precisiongrowindia.blogspot.com/"
                target="_blank"
              >
                <img
                  src="https://precisiongrow.co.in/assets/img/blog.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src="https://precisiongrow.co.in/assets/img/flicker.png"
                  target="_blank"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to="https://on.soundcloud.com/BTa2Q" target="_blank">
                <img
                  src="https://precisiongrow.co.in/assets/img/soundcloud.png"
                  alt="" loading="lazy"
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
