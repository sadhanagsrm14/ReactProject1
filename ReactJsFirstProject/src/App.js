/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Sidebar component*/
import Sidebar from "./Sidebar";

/* import Navebar component*/
import Navebar from "./Navebar";

/* import MainContent component*/
import MainContent from "./MainContent";

/* import Footer component*/
import Footer from "./Footer";

/* This is Class Component*/
class App extends Component{
    render(){
        return(
        <Fragment>
        {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            
            {/* NaveBar Section,Use Navebar Component */}
            <Navebar />
            
            {/* Main Container */}
            <div className="container">
                <div className="row">
                    
                    {/* Sidebar Section(Right Section) */}
                    <div className="col-lg-3">
                       
                       {/* Use Sidebar Component */} 
                       <Sidebar /> 
                    
                    </div>
                    
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-9">
                        
                        {/* Use MainContent Component */}
                        <MainContent />
                    
                    </div>
                </div>
            </div>
            
            {/*Use Footer Component */}
            <Footer />

        </Fragment>);
    }
}

//Export App Custom Component so that other component import it.
export default App;