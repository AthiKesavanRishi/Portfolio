import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
    
      <div className="main">
        
        <nav>
              <Link to="/"><button className="hello"><b><i>Profile</i></b></button></Link>
              <Link to="/resume"><button className="hello"><b><i>Resume</i></b></button></Link>
              <Link to="/projects"><button className="hello"><b><i>Projects</i></b></button></Link>
              <Link to="/contact"><button className="hello"><b><i>Contact</i></b></button></Link>
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Layout;