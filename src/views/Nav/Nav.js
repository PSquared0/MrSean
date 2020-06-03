import React, {Component} from 'react'; 
import { NavContainer, NavText, MainNav, NavLogo, Toggle } from "./NavStlyes";


class Nav extends Component {
    render() {
      return (
        <NavContainer>
        <nav class="navbar">
        <Toggle>  <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span> </Toggle> 
        <NavLogo> <a href="#" class="logo">Mr Seans Music</a> </NavLogo>
       <MainNav>
        <ul class="main-nav" id="js-menu">
        <NavText> <li> 
            <a href="#" class="nav-links">Home</a> 
                </li>
            <li>
                <a href="#" class="nav-links">Products</a>
            </li>
            <li>
                <a href="#" class="nav-links">About</a>
            </li>
            <li>
                <a href="#" class="nav-links">Contact</a>
            </li>
            <li>
                <a href="#" class="nav-links">Blog</a>
            </li>
            </NavText>  
        </ul>
        </MainNav>
        
</nav>
</NavContainer>);

  
    }
  
    }
  
    


export default Nav;