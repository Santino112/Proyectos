import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Account = () => {
  const location = useLocation();
  const { name, username, balance, token} = JSON.parse(localStorage.getItem("datosLogin"))
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const transferir = () => {
    navigate('/transfer')
  }

  return (
    <div className="login-container">
        <div className='icon-container'>
          <p className='saludo'>Hola, {name}</p>
          <LogoutIcon className="logout-icon" onClick={handleLogout} />
        </div>
        <div className='user-container'>
            <p className='saludo'>Saldo actual</p>
            <h1 className='saldo'>
                R$ {balance}
            </h1>
            <p className='saludo'>{username}</p>
        </div>
        <Button variant="contained" color="primary" onClick={transferir}> 
            Transferir
        </Button>
    </div>
  );
};

export default Account;
