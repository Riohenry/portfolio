import { Link } from "react-router-dom";
import Button from "../button/Button";
import { CgDetailsMore } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import "./nav.css";
import { useEffect, useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  const [offset] = windowOffSet();

  return (
    <nav className={offset > 20 ? "nav__container1" : "nav__container"}>
      <div className="middle nav__wrapper">
        <div className="nav__header">
          <Link to="/">
            <h1 style={{color: '#002D5B'}}>Lwanga Samson</h1>
          </Link>
        </div>
        <div className={`nav__ul ${open ? "active" : ""}`}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/portfolio">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <Button name="Contact Me" to="/contact" />
        <div className="nav__icons">
          {open ? (
            <ImCancelCircle
              className="nav__icon"
              onClick={() => setOpen(false)}
            />
          ) : (
            <CgDetailsMore
              className="nav__icon"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

function windowOffSet() {
  const [offset, setOffSet] = useState<number>(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffSet(window.scrollY);
    };
  }, []);

  return [offset] as const;
}
