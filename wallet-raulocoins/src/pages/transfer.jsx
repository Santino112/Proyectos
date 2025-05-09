import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Stack, Box, Button, Input, Typography } from '@mui/material';

const Transferencia = async (e) => {
    const navigate = useNavigate();


      const res = response.data;
      navigate('/account', {
          state: {
            name: res.user.name,
            username: res.user.username,
            balance: res.user.balance,
          },
        });


    const Account = () => {
        navigate("/Account")
    }

    return (
            <Stack sx={{
                margin: "auto",
                width: "60%",
                border: "2px solid red"
            }}>
                <Typography variant="h2">Yo User</Typography>
                <Button variant="contained" color="primary" onClick={Account}></Button>
            </Stack>
    )
};

export default Transferencia;