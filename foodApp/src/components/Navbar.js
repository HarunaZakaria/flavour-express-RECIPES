
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Flavor Express
      </a>
      <button
        className="navbar-toggler"
        type="button"  
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/Home">
              Home 
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/Reservation">
             Reservations 
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
             Contact Us 
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Login 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Card
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
