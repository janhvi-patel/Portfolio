import React  from 'react';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';

const Navbar = () => {

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand " href="#">Janhvi Patel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <HorizontalSplitIcon />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">contact</a>
              
            </li>
          </ul>

              </div>
        </div>
      </nav>
    
    </div>
    </>
  )
}



export default Navbar;
