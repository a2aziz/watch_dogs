import "./style.scss"
import { Outlet, Link } from "react-router-dom";

function Navigation() {
    return ( 
        <>
        <div className="main">
            <div className="div1">
                <Link to="/">ГЛАВНАЯ</Link>
                      <Link to="/about">О Нас</Link>
            </div>
            <div className="div2">
                <h3><Link to="/Login">Login</Link></h3>
                <h3><Link to="/Register">Register</Link></h3>
            </div>  
        </div>
        <Outlet />
        </>
        
        


     );
}

export default Navigation;