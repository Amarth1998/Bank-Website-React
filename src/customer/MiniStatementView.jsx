


const MiniStatementView=(props)=>
{
return(
<>
   <tr>
      <td height="30"> {props.trnDate} </td>
      <td> {props.subAmt} </td>
      <td> {props.withdrawAmt} </td>
   </tr>
   <tr>
      <td height="2" colspan="3" bgcolor="#63cfc2" >  </td>
   </tr>
</>
  );
}

export default MiniStatementView;