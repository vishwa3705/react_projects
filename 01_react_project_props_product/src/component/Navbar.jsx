import "./Navbar.css";

const Navbar = ({ itemLikes }) => {
  return (
    <nav>
      <h1>VP Electronics</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <i class="ri-poker-hearts-fill"></i>
        <span>{itemLikes}</span>
        <i class="ri-shopping-cart-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
