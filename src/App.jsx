import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Team from "./Team";

import Blog from "./Blog";
import Contact from "./Contact";
import RegisterSuccess from "./RegisterSuccess";
import UserLogin from "./UserLogin";
import CusDashBoard from "./CusDashBoard";
import AccountInfo from "./customer/AccountInfo";
import CheckBalance from "./customer/CheckBalance";
import SubmitMoney from "./customer/SubmitMoney";
import WithDrawMoney from "./customer/WithdrawMoney";
import ChangePassword from "./customer/ChangePassword";
import MiniStatements from "./customer/MiniStatements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="team" element={<Team />} />

          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />

          <Route path="regsucss" element={<RegisterSuccess />} />
          <Route path="userlogin" element={<UserLogin />} />

          <Route path="cusDashBoard" element={<CusDashBoard />}>
            <Route path="accountinfo"  element={<AccountInfo />} />
            <Route path="checkbalance" element={<CheckBalance />} />
            <Route path="submitmoney" element={<SubmitMoney />} />
            <Route path="withdrawmoney" element={<WithDrawMoney />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="ministatement" element={<MiniStatements />} />
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
