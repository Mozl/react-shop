import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">React Shop</a>
      <Nav />
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  </div>
);

export default Header;
