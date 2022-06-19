import "./Layout.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {};

const Layout = (props: Props) => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div id={theme ? "light" : "dark"} className="layout">
      <div
        className={`navbar-container ${
          location.pathname === "/" && "home-page"
        }`}
      >
        {location.pathname === "/results" && (
          <Link className="link" to={"/"}>
            Back Home
          </Link>
        )}
        <div className="button-container">
          <div test-id="button" className="on-off" onClick={toogleTheme}>
            <div className={`clicked ${!theme && "d-right"}`}></div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
