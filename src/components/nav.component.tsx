import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';

export const NavComponent: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li> */}
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/ticketing" className="unset-anchor nav-link">Ticketing</Link>
            </li>
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle pointer" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manage Ticketing</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <div className="dropdown-item"><Link to="/approved" className="unset-anchor nav-link active">Approved</Link></div>
                <div className="dropdown-item"><Link to="/denied" className="unset-anchor nav-link active">Denied</Link></div>
                <div className="dropdown-item"><Link to="/pending" className="unset-anchor nav-link active">Pending</Link></div>
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/sign-out" className="unset-anchor nav-link shift-right">Sign Out</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-header c-pointer shift-right">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
          </Link>
        </div>
      </nav>
    </div >
  );
}