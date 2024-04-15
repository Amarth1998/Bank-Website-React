import img1 from './img/Blog_DigitalRupee.jpeg';
import img2 from './img/Blog_API_Banking.png';
import img3 from './img/Blog_Fintech_Partnerships.png';

const Blog=()=>
{
    return(
  <>
  <div id="BlogContainer">
  <h2 style={{textAlign:"center", color:"darkblue",margin:"30px"}}>CORPORATE BLOG</h2>
    <div className="blogpage">
      <p>Welcome to the official blog of Federal Bank. There are hundreds of videos available on internet each propagating their views on the product, which may not be true always. It is therefore the bounden duty of Federal Bank to disseminate the correct, real, 100% authenticate information on the Bank’s various products from the customer’s point of view. This led to the creation of our official Corporate Blog wherein customers can read the in-depth analysis of our various products and arrive at an informed decision. Stay tuned to our regular updates. </p>
    </div>
  </div>
  <div id='teamContainer'>
  <div className="blog-card">
      <div className="image-container">
        <img src={img1} alt="Blog_DigitalRupee" />
      </div>
      <h4>CBDC-R: India's Path to a Digital Rupee</h4>
      <p>Digitalisation has reformed the financial sector. It has brought about a lot of changes in the way transactions take place and money is handled. </p>
    </div>
  <div className="blog-card">
      <div className="image-container">
        <img src={img2} alt="Blog_API_Banking" />
      </div>
      <h4>Demystifying API Banking: How APIs are Transforming the Financial Industry</h4>
      <p>In the past few years, APIs have taken the world of finance by storm. From streamlining internal operations to optimising customer experience, there is nothing they cannot do.</p>
    </div>
  <div className="blog-card">
      <div className="image-container">
        <img src={img3} alt="Blog_Fintech_Partnerships" />
      </div>
      <h4>Millennials and Money Management: Unlocking the Potential of Fintech Partnerships</h4>
      <p>The Fintech Revolution in Banking The era of millennials has seen it all! Right from having to visit a bank to get the passbook updated to updating it on the app....</p>
    </div>
    </div>
  
  </>


    );
}

export default Blog;