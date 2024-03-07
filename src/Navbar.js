import "./App.css";

function Navbar() {
  return (
    <div className="navbar" role="navigation">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Promos</a>
        </li>
        <li>
          <a href="#">Order Tracking</a>
        </li>
        <li>
          <a href="#">Supercard+</a>
        </li>
        <li>
          <a href="#">Book a Party</a>
        </li>
      </ul>

      <button class="Login-btn">Login</button>

      <button
        className="Search-btn"
        aria-expanded="false"
        data-action="open-drawer"
        data-drawer-id="sidebar-menu"
        aria-label="Open navigation"
        buttonWithMargin
      >
        {/* Search icon */}
        <img
          src="./images/icon-search.png"
          alt="Search Icon"
          height="40px"
          weight="40px"
        />
      </button>

      <button
        className="Cart-btn"
        aria-expanded="false"
        data-action="open-drawer"
        data-drawer-id="sidebar-menu"
        aria-label="Open navigation"
        buttonWithMargin
      >
        {/* Cart icon */}
        <img
          src="./images/icon-cart.png"
          alt="Search Icon"
          height="40px"
          weight="40px"
        />
      </button>

      <div className="logo">
        <img src="./images/shakeys-logo.png"></img>
      </div>
    </div>
  );
}

export default Navbar;
