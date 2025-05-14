import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";

const Transferencia = (e) => {
    const navigate = useNavigate();

    const { name, username, balance, token } = JSON.parse(
        localStorage.getItem("datosLogin")
    );

    const Account = () => {
        navigate("/Account");
    };

    return (
        <Box
            component="section"
            sx={{ border: "2px solid red", height: "100vh", width: "100vw" }}
        >
            <Stack
                spacing={3}
                direction="column"
                alignItems="center"
                sx={{
                    margin: "auto",
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "60%",
                        lg: "40%",
                        xl: "40%"
                    },
                    height: {
                        xs: "100%",
                        sm: "100%",
                        md: "80%",
                        lg: "80%",
                        xl: "70%"
                    },
                    border: "2px solid red",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#26a69a", width: "100%", height: "12%", textAlign: "center" }}>
                    <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                        User: {name}
                    </Typography>
                </Box>
                <form sx={{ width: "120%" }}>
                    <Stack spacing={4} direction="column" sx={{ border: "2px solid red", width: "100%" }}>
                        <TextField label="Alias" variant="standard" />
                        <TextField label="Cantidad" variant="standard" />
                        <TextField label="Detalle" variant="standard" />
                        <TextField label="TOTP" variant="standard" />
                        <Stack spacing={2} direction={{xs: "column", md:"row"}}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={Account}
                                sx={{ fontSize: "1rem", width: "50%" }}
                            >
                                Volver
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ fontSize: "1rem", width: "auto" }}
                            >
                                Transferir
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack >
        </Box >
    );
};

export default Transferencia;
