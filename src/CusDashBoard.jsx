import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
let cusName=localStorage.getItem("cusName");
let cusEmail=localStorage.getItem("cusEmail");


const CusDashBoard=()=>
{
  const myNavigation= useNavigate();
  const usrLogout=()=>
    {
        localStorage.clear();
        myNavigation("/");
    }

   return(
    <>
      <div id="dashboard">
          Welcome {cusName}!  Email : { cusEmail} 
          <a href="/" onClick={usrLogout} style={{marginLeft:"10px",color:"yellow"}}>Logout</a> 
      </div>

      <div id="cusArea">
            <div id="cusLeftManu">
                <ul>
                  <li> <Link to="accountinfo" className="leftmenu">Account Info</Link>  </li>
                  <li> <Link to="ministatement" className="leftmenu">Mini Statements</Link>  </li>
                  <li> <Link to="checkbalance" className="leftmenu">Check Balance</Link>  </li>
                  <li> <Link to="submitmoney" className="leftmenu">Submit Money</Link>  </li>
                  <li> <Link to="withdrawmoney" className="leftmenu">Withdraw Money</Link>  </li>
                  <li> <Link to="changepassword" className="leftmenu">Change Password</Link>  </li>
                </ul>
           </div>
            <div id="cusRightData">
                 
                  <Outlet />

            </div>
      </div>


     </>
    );
}

export default CusDashBoard;