import React from 'react';
import { logout } from '../AuthService';
import "../App.css";

function LogoutButton() {
  return (
    <button className='button1' onClick={logout}>Logout</button>
  );
}

export default LogoutButton;