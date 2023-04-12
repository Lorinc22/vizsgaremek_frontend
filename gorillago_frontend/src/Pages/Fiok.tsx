import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav/Nav';
import Kep2 from '../images/gorillagoicon.png'

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

const saveAccountData = async (data: SaveAccountDataParams): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3000/account', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error saving account data:', error);
    return false;

    
  }
  
}

interface AccountProps {
  accountData: AccountData;
  setAccountData: (data: AccountData) => void;
}

const Account: React.FunctionComponent<AccountProps> = (props) => {
  const [email, setEmail] = useState<string>(props.accountData.email);
  const [firstName, setFirstName] = useState<string>(props.accountData.firstName);
  const [lastName, setLastName] = useState<string>(props.accountData.lastName);
  const [phoneNumber, setPhoneNumber] = useState<string>(props.accountData.phoneNumber);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, firstName, lastName, phoneNumber };
    const response = await saveAccountData(data);
    console.log(response); // itt már a mentés eredményét is látni fogjuk
  }


  return (
    <div>
      <Nav />
      <div id='AccountInput' className='container'>
        <h3>Fiók Adatok:</h3>
        <hr className='hr' />
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input type="text" className="form__input" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <label className="form__label"> Email</label>
          </div>
          <div className="form__group">
            <input type="text" className="form__input" id="firstName" placeholder="Keresztnév" value={firstName} onChange={handleFirstNameChange} />
            <label className="form__label"> Keresztnév</label>
          </div>
          <div className="form__group">
            <input type="text" className="form__input" id="lastName" placeholder="Vezetéknév" value={lastName} onChange={handleLastNameChange} />
            <label className="form__label"> Vezetéknév</label>
          </div>
          <div className="form__group">
            <input type="Phonenumber" className="form__input" id="phoneNumber" placeholder="Telefonszám" value={phoneNumber} onChange={handlePhoneNumberChange} />
            <label className="form__label"> Telefonszám</label>
            <button type='submit' className='button2'>Mentés</button>
          </div>
        </form>
      </div>
      <div>
      </div>
      <footer className='footer'>
        <img className='gorillagoiconfooter' src={Kep2} />
      </footer>
    </div>
  );
};
  
export default Account;