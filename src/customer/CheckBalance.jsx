import { useState, useEffect } from "react";
import axios from "axios";
const cus_id=localStorage.getItem("cusID");
const CheckBalance=()=>
{
  const [data, setData]=useState([]);
  const loadData=()=>
  {
    const url=`http://localhost:3000/account/?cus_id=${cus_id}`;
    axios.get(url).then((res)=>{
      setData(res.data);
    });
  }

  useEffect(()=>{
    loadData();
  }, []);

  let totalCredit=0;
  let totalDebit=0;
  data.map((key)=>{
                
        totalCredit+=parseInt(key.submit_amount);
        totalDebit+=parseInt(key.withdraw_amount);
            
        
      });
   let netAmount=totalCredit-totalDebit;

  return(
  <>
    <h1> Bank Balance Of Customer {cus_id}</h1>  
          <h2> Total Balance: {netAmount} </h2>
  </>
    );
}

export default CheckBalance;