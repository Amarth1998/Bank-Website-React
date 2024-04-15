import img1 from './img/Mr. Shyam Srinivasan.jpg';
import img2 from './img/Mr. A P Hota.jpg';
import img3 from './img/Mr. Siddhartha Sengupta.jpg';
import img4 from './img/Ms. Shalini Warrier.jpg';
const Team=()=>
{
    return(
  <>
  <div id="teamContainer">
  <div className="team-card">
      <div className="image-container">
        <img src={img1} alt="Shyam Srinivasan" />
      </div>
      <h4>Shyam Srinivasan</h4>
      <p>Managing Director & CEO</p>
    </div>
  <div className="team-card">
      <div className="image-container">
        <img src={img2} alt="A P Hota" />
      </div>
      <h4>A P Hota</h4>
      <p>Part Time Chairman & Independent Director</p>
    </div>
  <div className="team-card">
      <div className="image-container">
        <img src={img3} alt="Mr. Siddhartha Sengupta" />
      </div>
      <h4>Siddhartha Sengupta</h4>
      <p>Independent Director</p>
    </div>
  <div className="team-card">
      <div className="image-container">
        <img src={img4} alt="Ms. Shalini Warrier" />
      </div>
      <h4>Shalini Warrier</h4>
      <p>Executive Director</p>
    </div>
  </div>
  
  </>


    );
}

export default Team;