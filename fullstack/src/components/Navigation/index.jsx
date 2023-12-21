import "./style.scss"
import { Outlet, Link } from "react-router-dom";

function Navigation() {
    return ( 
        <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <hr />
              <Outlet />
        </>
        
     );
}

export default Navigation;