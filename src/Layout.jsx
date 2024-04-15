import { Outlet, Link } from "react-router-dom";

const Layout=()=>
{
    return(
  <>
   <div id="container">
   <div id="topheader">
        <div id="contactno">
        <i class="fa fa-phone"></i> &nbsp;&nbsp; +91-9993336660

         <Link to="userlogin" style={{paddingLeft:"20px", color:"white", textDecoration:"none"}}>Customer Login</Link> 
        </div>
        <div id="righticons">
        <i class="fa-brands fa-facebook space" ></i>
        <i class="fa-brands fa-twitter space" ></i>
        <i class="fa-brands fa-linkedin space" ></i>
        <i class="fa-brands fa-google-plus-g space" ></i>
        <i class="fa-brands fa-instagram space"></i>
        
        </div>
    </div>
    <div id="topmenu">
         <ul>
           <li><a href="#"><Link to="/">Home</Link></a></li>
           <li><a href="#"><Link to="about">About</Link></a></li>
           <li><a href="#"><Link to="service">Services</Link></a></li>
           <li><a href="#"><Link to="team">Team</Link></a></li>
           <li><a href="#"><Link to="blog">Blog</Link></a></li>
           <li><a href="#"><Link to="contact">Contact</Link></a></li>
         </ul>
    </div>
 
   <Outlet />

  {/* <div id="footerSpace"> </div> */}

   <div id="footer">
       corporate@gmail.com
   </div>
   </div>
  </>
   );
}

export default Layout;