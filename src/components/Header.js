import React from "react";


  
function Header() {
  return (
<div className="Header">
<header>
<div class="wrapper">
<a href="/">
<img src="https://www.wolfgangdigital.com/img/logo.svg" alt="WolfGang Logo"></img>
</a>
<a href="#navigation" class="menu-trigger"><span class="icon-menu"></span></a>
<nav id="navigation">
<div class="nav-header">
<span class="menu-heading">Main Menu</span>
</div>
<ul class="main-nav">
<li><a href="https://www.wolfgangdigital.com/our-work/">Our Work</a></li>
<li><a href="https://www.wolfgangdigital.com/about-us/">About us</a></li>
<li><a href="https://www.wolfgangdigital.com/careers/">Careers</a></li>
<li><a href="https://www.wolfgangdigital.com/blog/">Blog</a></li>
<li><a href="https://www.wolfgangdigital.com/awards/">Awards</a></li>
<li><a class="contact-link" href="https://www.wolfgangdigital.com/contact/">Contact</a></li>
</ul>
<ul class="sub-nav">
<li><a href="/">Home</a></li>
<li><a href="https://www.wolfgangdigital.com/terms/">Terms of Service</a></li>
<li><a href="https://www.wolfgangdigital.com/privacy/">Privacy</a></li>
</ul>
</nav>
</div>
</header>
</div>
  
        );
                }

export default Header;