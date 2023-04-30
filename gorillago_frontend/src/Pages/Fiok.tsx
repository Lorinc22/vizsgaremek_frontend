import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav/Nav";
import Kep2 from "../images/gorillagoicon.png";
import axios from 'axios';

interface ChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

interface AccountData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface SaveAccountDataParams {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}



const changePassword = async (
  id: number,
  data: ChangePasswordParams
): Promise<boolean> => {
  console.log(localStorage.getItem('userid'))
  try {
    const response = await fetch(`http://localhost:3000/users/password/${localStorage.getItem('userid')}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    

    console.log('result:' + result)
    return true
  } catch (error) {
    console.error("Error changing password:", error);
    return false;
  }
};

interface AccountProps {
  accountData: AccountData;
  setAccountData: (data: AccountData) => void;
}

const Account: React.FunctionComponent<AccountProps> = (props) => {
  
  const [email, setEmail] = useState<string>(props.accountData.email);
  const [firstName, setFirstName] = useState<string>(
    props.accountData.firstName
  );
  const [lastName, setLastName] = useState<string>(props.accountData.lastName);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    props.accountData.phoneNumber
  );
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
    
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  

  const handleAccountSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, firstName, lastName, phoneNumber };
    try{
      const success = await fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('userid')!)}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Account data saved successfully!");
      props.setAccountData(data);
    }catch(error){
      alert("Error saving account data, please try again.");
    }
  };

  
  
  

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { oldPassword, newPassword };
    const success = await changePassword(parseInt(localStorage.getItem('userid')!), data);
    console.log('success: '+ success)
    if (success) {
      alert("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
    } else {
      alert("Error changing password, please try again.");
    }
  };
  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "#3c1945" , borderRadius: "20px" }}>
              <div
                className="card-body "
                style={{ backgroundColor: "#3c1945" }}
              >
                <h4 className="card-title mb-4" style={{ textAlign: "center" }}>
                  Fiók Adatai
                </h4>
                <form onSubmit={handleAccountSubmit}>
                  <div className="form-group">
                    
                    <label style={{ color: "white" }}>Email</label>
                    <input
                      type="email"
                      className="form__inputAccount"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Vezetéknév</label>
                    <input
                      type="text"
                      className="form__inputAccount"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Keresztnév</label>
                    <input
                      type="text"
                      className="form__inputAccount"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Telefonszám</label>
                    <input
                      type="tel"
                      className="form__inputAccount"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <button type="submit" className="AccountButtons">
                    Mentés
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "#3c1945" ,  borderRadius: "20px" }}>
              <div className="card-body" style={{ backgroundColor: "#3c1945" }}>
                <h4 className="card-title mb-4" style={{ textAlign: "center" }}>
                  Jelszó Változtatás
                </h4>
                <form onSubmit={handlePasswordSubmit}>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Régi Jelszó</label>
                    <input
                      type="password"
                      className="form__inputAccount"
                      value={oldPassword}
                      onChange={handleOldPasswordChange}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Új Jelszó</label>
                    <input
                      type="password"
                      className="form__inputAccount"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                  </div>
                  <button type="submit" className="AccountButtons">
                    Megváltoztatás
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <img src={Kep2} width="100" alt="Gorillago Logo" />
      </div>
    </div>
  );
};

export default Account;
