import React, { useState } from 'react';
import toast from 'react-hot-toast';


const RedirectButton2: React.FC<{ link: string }> = ({ link }) => {
  const [redirecting, setRedirecting] = useState(false);


  const handleClick = () => {
    setRedirecting(true);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          window.location.href = link;
          resolve(true);
        }, 3000);
      }),
      
      {
        loading: 'Regisztráció...',
        success: 'Sikeres Regisztrálás!',
        error: 'Valami Hibás',
       
      }
    );
  };


  return (
    
    <button className='button1' onClick={handleClick} disabled={redirecting}>
      {'Regisztráció'} 
      
    </button>
    
    
  );
};

export default RedirectButton2;