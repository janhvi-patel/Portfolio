import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
        <div className="main-info">
            <h2>Janhvi Patel </h2>
            <h2> </h2>
            <Typed
             className="typed-text"
             strings={["Learner", "Web Developer", "Web Desinger"]}
             typeSpeed={40}
             backSpeed={60}
             loop
            />
            <a href='#' className="btn-main-offer"></a>
        </div>
            
        </div>
    )
}

export default Header;
