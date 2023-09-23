import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../assets/logo.png"

const Header = () => {
  

  return (
    <ReactNavbar
      navColor1="white"
      navColor2="black"
      burgerColor ="hsl(250,100%,75%)"
      burgerColorHover ="hsl(25,100%,75%)"

      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      logo={logo} 
      logoWidth ="200px"
      logoHoverColor="hsl(250,100%,75%)"
      link1Text="Home"
      link2Text="About"
      link3Text="Project"
      link4Text="Contact" // Correct the spelling of "Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/project"
      link1ColorHover ="white"
      link1Color ="hsl(250,100%,75%)"
      link1Size ="1.5rem"
      link1Padding="3vmax"
    
    />
  );
}

export default Header;