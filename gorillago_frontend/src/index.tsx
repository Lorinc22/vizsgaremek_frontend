import ReactDOM from "react-dom";
import "./index.css";
import HomehomePage from "./Pages/HomehomePage";
import Layout from "./Pages/Layout";
import Home from "./Pages/Fooldal";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import { useState } from "react";
import Account from "./Pages/Fiok";
import PizzaKing from "./RestaurantSites/PizzaKing";

interface AccountData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

function App() {
  const [accountData, setAccountData] = useState<AccountData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="HomehomePage" element={<HomehomePage />} />
          <Route path="pizzaking" element={<PizzaKing/>}/>
          <Route
            path="Account"
            element={
              <Account
                accountData={accountData}
                setAccountData={setAccountData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
