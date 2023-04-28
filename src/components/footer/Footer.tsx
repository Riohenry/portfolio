import { Link } from "react-router-dom";
import DownloadButton from "../button/DownloadButton"
import "./footer.css";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="footer__container">
      <div className="middle footer__wrapper">
        <div className="footer__links">
          <Link to='/'><p>Home</p></Link>
          <Link to='/about'><p>About</p></Link>
          <Link to='/portfolio'><p>Portfolio</p></Link>
        </div>
        <div className="logo">
          <h1 style={{ fontWeight:"500" }}>Lwanga Samson</h1>
        </div>
        <div className="last">
          <h2 style={{ marginBottom: "1rem",fontWeight:"500" }}>samsonlwanga2@gmail.com</h2>
          <DownloadButton name="Download CV" to="/files/Geofrey_Isiagi_Resume.pdf"/>
        </div>
      </div>
      <div className="footer__last">
        <p>&copy; Geofrey Isiagi 2023</p>
      </div>
    </div>
  );
}

export default Footer;
