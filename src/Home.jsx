import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = () => {
    let url = "http://localhost:3000/customer";
    axios.post(url, input).then((res) => {
      alert("Your Accoutn Succesfully Created!!!");
      navigate("/regsucss");
     
    });
  }
  return (
    <>
      <div id="banklogo">
        <span class="bankLogo1">Corporate </span>
        <span class="bankLogo2">Bank</span>
      </div>
      <div id="content">
        <div id="regform1">
          <h2 class="head1"> Start Saving Account</h2>
          <input type="text" placeholder="Customer Name" name="name"
            value={input.name}
            onChange={handleChange}  style={{padding:"5px"}}/>
          <input type="text" style={{padding:"5px"}} placeholder="Mobile no" name="contactno"
            value={input.contactno}
            onChange={handleChange} />
          <input type="text" placeholder="Email" name="email"
            value={input.email}
            onChange={handleChange}style={{padding:"5px"}} />
          <input type="text" placeholder="Password" name="password"
            value={input.password}
            onChange={handleChange}style={{padding:"5px"}} />
          <button type="button" onClick={handleSubmit}> Get Started </button>
        </div>

        <div id="procstep">
          <h2 class="head2">Account Processing Steps!</h2>
          Most individuals and businesses today have some type of banking account. Having a trusted financial service provider is important as

          <ul>
            <li> Create an account number of your  </li>
            <li> Some banks are open on Sunday,   </li>
            <li> Most individuals and businesses  </li>
            <li> Having a trusted financial service   </li>
            <li>Modern banks use computers for   </li>
          </ul>

        </div>

      </div>



    </>
  );
}

export default Home;