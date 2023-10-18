import InstaLogo from '../assets/svg/insta.svg';
import FbLogo from '../assets/svg/fb.svg';
import LinkedinLogo from '../assets/svg/Linkedin.svg';
import TwitterLogo from '../assets/svg/twitter.svg';

const Footer = () => {
  return (
    <footer
      className="container footer-section"
      id="contact"
    >
      <ul className="socials-list">
        <li className="socials-item">
          <a href="https://www.facebook.com/">
            <img
              src={FbLogo}
              alt="Facebook Logo"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className="socials-item">
          <a href="https://www.instagram.com/">
            <img
              src={InstaLogo}
              alt="Instagram Logo"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className="socials-item">
          <a href="https://twitter.com/">
            <img
              src={TwitterLogo}
              alt="Twitter Logo"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className="socials-item">
          <a href="https://www.linkedin.com/">
            <img
              src={LinkedinLogo}
              alt="Linkedin Logo"
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
      <p className="footer-copyright">Copyright &copy; All rights reserved</p>
    </footer>
  );
};

export default Footer;
