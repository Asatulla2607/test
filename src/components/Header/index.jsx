import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="Header">
        <div className="container">
          <div className="header">
            <img
              className="Header-Logo"
              src="/src/assets/image.png"
              alt="img"
            />
            <div className="">
              <nav className="navigete">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Menu
                </NavLink>

                <NavLink
                  to="/basket"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Orders
                </NavLink>

                <NavLink
                  to="/create"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Admin
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
