import { Link } from "react-router-dom";

const RegisterSuccess=()=>
{
    return(
  <>
   <h1> Your are Succesfully Registered!!!</h1>
   <h2> Now you can  &nbsp;
    
  <Link to="/userlogin">Login</Link> 
    
    </h2>    
  </>
   );
}

export default RegisterSuccess;