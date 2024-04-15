import { useState, useEffect } from "react";
import axios from "axios";
import MiniStatementView from "./MiniStatementView";
let CusID=localStorage.getItem("cusID");
const MiniStatements=()=>
{
    const [data, setData]=useState([]);
    const loadData=()=>
    {
        let url=`http://localhost:3000/account/?cus_id=${CusID}`;
        axios.get(url).then((res)=>{
            setData(res.data);
        });
    }
   useEffect(()=>{
        loadData();
    }, []);

    var totalBalance=0;
    var totalSubmitAmt=0;
    var totalWithdrawAmt=0;
    
    const myData=data.map((key)=>{
        totalSubmitAmt+=parseInt(key.submit_amount);
        totalWithdrawAmt+=parseInt(key.withdraw_amount);
     return(
    <>
      <MiniStatementView 
    trnDate={key.date}  
    subAmt={key.submit_amount}
    withdrawAmt={key.withdraw_amount}
    
    />
    </>
);

    });
    totalBalance=totalSubmitAmt-totalWithdrawAmt;
    return(
 <>
 <h1> Mini Statements</h1>
 <center>
 <table align="center" style={{width:"95%", borderCollapse: "collapse", border: "1px solid black", padding:"20px", fontFamily:"verdana", fontSize:"13px", fontWeight:"bold", color:"navy"}}>
    <tr bgcolor="orange" style={{color:'white',fontSize:"14px", fontWeight:"bold"}}>
        <td style={{height:"30px"}}>Transaction Date </td>
        <td>Debit </td>
        <td>Credit </td>
    </tr> 
 {myData}
 </table>
 </center>
  <h3 style={{padding:"20px"}}> Net Balanace:  {totalBalance} </h3> 
 </>
   );
}
export default MiniStatements;