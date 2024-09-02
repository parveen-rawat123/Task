
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="Logo.png" alt="Company Logo"/>
      </div>
      <nav>
        <ul className="navbaar">
          <li>
            <select name="services" id="services">
              <option value="">Service</option>
            </select>
          </li>
          <li>
            <select name="subjects" id="subjects">
              <option value="">Subjects</option>
            </select>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><button className="review">4.9/5</button></li>
          <li><a href="#about">About Us</a></li>
          <li><button className="order-now">ORDER NOW</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
