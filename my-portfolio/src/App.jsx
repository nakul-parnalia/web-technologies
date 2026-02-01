import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Aboutme";
import FeaturedProjects from "./components/FeaturedProjects";
import GetInTouch from "./components/Getintouch";
import Home from "./components/Home";
import Footer from "./footer";
export default function App() {
    return (
        <>
            <Navbar/>
            <Home/>
            <AboutMe />
            <FeaturedProjects />
            <GetInTouch/>
            <Footer/>
        </>
       
    );
}
 