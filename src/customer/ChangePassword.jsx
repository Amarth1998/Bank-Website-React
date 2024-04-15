


const ChangePassword=()=>
{
    return(
  <>
    <center>
 <div id="regform" style={{height:"220px"}}> 
     <h2 class="head1"> Change Your Password</h2>
     <input type="text" placeholder="Enter Old Password" name="oldpwd"
     />
     <input type="text" placeholder="Enter new Password" name="newpwd"
       />
        <input type="text" placeholder="Re Enter new Password" name="renewpwd"
       />
     <button type="button"> Submit </button>

     <div id="myerr"></div>
  </div>
  </center> 

  
  </>
    );
}

export default ChangePassword;