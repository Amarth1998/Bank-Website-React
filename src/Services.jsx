import img from './img/Thumb_ECS.png';
import img2 from './img/Thumb_AWB.png';
import img3 from './img/Thumb_Emaintenance.png';
const Services=()=>
{
    return(
      <>
      <h1 style={{textAlign:"center",color:"blue",margin:"10px"}}>SERVICES</h1>
     
<div id="serviceContainer">
      <div className="service-card">
          <img src={img} alt="" />
      <h2>NACH / Electronic Clearing Services (ECS)</h2>
      <p>Federal Bank offers NACH/ ECS services that will enable you to make repetitive and periodic payments/ receipts with ease.</p>
      </div>
      <div className="service-card">
          <img src={img2} alt="" />
      <h2>AWB Services</h2>
      <p>Anywhere Banking is a highly secure and convenient system for online, real-time inter branch transactions across the Bank. Anywhere banking offers you greater flexibility, transaction power, convenience and ease in banking.</p>
      </div>
      <div className="service-card">
          <img src={img3} alt="" />
      <h2>E-Maintenance</h2>
      <p>Federal Bank's E-Maintenance is an easy solution for fee collection requirements of Apartments, Residents' Associations and Housing Societies. It is also advantageous for the Tenants, since they can do away with the troubles of making payment.</p>
      </div>
      </div>
  </>

    );
}

export default Services;