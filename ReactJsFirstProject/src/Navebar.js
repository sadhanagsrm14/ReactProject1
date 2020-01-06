/* import React from react to make custome component like Sidebar  */
import React,{ Component,Fragment } from "react";

/* This is Class Component*/
class Sidebar extends Component{
    render(){
        return(
          <Fragment>
          {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
        
            {/* NaveBar Section  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="">Home
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
              
          </Fragment>);
    }
}
//Export Sidebar Custom Component so that other component import it.
export default Sidebar;