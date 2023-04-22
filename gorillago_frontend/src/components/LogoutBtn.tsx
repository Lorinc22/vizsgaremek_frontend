import React from 'react';
import { logout } from '../AuthService';

function LogoutButton() {
  return (
    <button onClick={logout}>Logout</button>
  );
}

export default LogoutButton;