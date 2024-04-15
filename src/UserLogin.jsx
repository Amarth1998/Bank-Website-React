import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogin=()=>
{
const [email, setEmail]=useState("");
const [pwd, setPwd]=useState("");
const myNavigation= useNavigate();

const handleSubmit=()=>
{
  let url=`http://localhost:3000/customer?email=${email}`;
  axios.get(url).then((res)=>{ 
        if(res.data.length===0)
        {
            document.getElementById("myerr").innerHTML="Invalid Email";
        }
        else 
        {
            if (res.data[0].password===pwd)
            {
               localStorage.setItem("cusName", res.data[0].name );
               localStorage.setItem("cusEmail", res.data[0].email);
               localStorage.setItem("cusID", res.data[0].id );
               myNavigation("/cusDashBoard");
            }
            else 
            {
            document.getElementById("myerr").innerHTML="Invalid Password";
            }
        }
    
     //console.log(res.data);
  });

}

return(
<>
<center>
  <div style={{height:"550px"}}> 
 <h1> Customer Login</h1>
 <div id="regform" > 
     <h2 class="head1"> Customer Login Form</h2>
     <input type="text" placeholder="Enter Your Email" name="email"
     value={email} onChange={(e)=>{setEmail(e.target.value)}}   style={{height:"40px",width:"100%",padding:"10px",margin:"10px"}} /> <br />


     <input type="text" placeholder="Password" name="password"
     value={pwd} onChange={(e)=>{setPwd(e.target.value)}}   style={{height:"40px",width:"100%",padding:"10px",margin:"10px"}}/> <br />

     <button type="button" onClick={handleSubmit}  style={{height:"40px",width:"100%",margin:"10px"}}> Login </button>

     
  </div>
  </div>
  </center>
</>
 )
}

export default UserLogin;