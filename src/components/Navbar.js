import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    menuMobile ? setMenuMobile(false) : setMenuMobile(true);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          sticky ? "dark-nav shadoww" : ""
        }`}
      >
        <div className="container">
          <Link to={"/"}>
            <span className="navbar-brand">
              <img
                src={
                  currentPath === "/"
                    ? "../assets/logo.png"
                    : "../../assets/logo.png"
                }
                alt=""
              />
              <b>Edusity</b>
            </span>
          </Link>
          {currentPath === "/" ? (
            <img
              onClick={toggleMenu}
              className="menu-icon"
              src={menuMobile ? "../assets/close.png" : "../assets/menu.png"}
              alt=""
            />
          ) : (
            <img
              onClick={toggleMenu}
              className="menu-icon"
              src={
                menuMobile ? "../../assets/close.png" : "../../assets/menu.png"
              }
              alt=""
            />
          )}

          <div className={`fullNav ${menuMobile ? "" : "hide-mobile-menu"}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to={"/"} onClick={() => setMenuMobile(false)}>
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" onClick={() => setMenuMobile(false)}>
                  <span className="nav-link">About us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Program" onClick={() => setMenuMobile(false)}>
                  <span className="nav-link">Program</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Pricing" onClick={() => setMenuMobile(false)}>
                  <span className="nav-link">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Courses" onClick={() => setMenuMobile(false)}>
                  <span className="nav-link">Courses</span>
                </Link>
              </li>
            </ul>
            <Link to="/ContactUs" onClick={() => setMenuMobile(false)}>
              <button className="button shadow-sm">
                Contact us <img src={"../assets/mail.png"} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
