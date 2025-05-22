import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, Box, Button, TextField, Typography, Autocomplete, Alert } from "@mui/material";

const recuperacionTotp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const data = {
        username: username,
        email: email
    }

    const handleRecuperar = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://raulocoin.onrender.com/api/regenerate-totp", data)
            const res = response.data;

            if (res.success) {
            }
        } catch (error) {
            console.error("Error al obtener el QR:", error);
        }
    }

    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                minWidth: "100vw",
                backgroundImage: 'url(../public/Images/Inicio.png)',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <Stack
                spacing={7}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "60%",
                        lg: "35%",
                        xl: "32%",
                    },
                    height: {
                        xs: "100%",
                        sm: "100%",
                        md: "auto",
                        lg: 500,
                        xl: 500,
                    },
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 0.10)",
                    boxShadow: "0 1px 12px rgba(25, 25, 25, 0.8)",
                    borderRadius: 2,
                    py: 8,
                    px: { xs: 2, sm: 4 }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 12px rgba(0, 0, 0, 0.39)",
                        width: "100%",
                        height: "12%",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h2" sx={{
                        fontSize: {
                            xs: "1.2rem",
                            sm: "1.2rem",
                            md: "1.5rem",
                            lg: "1.5rem",
                            xl: "1.8rem"
                        }
                    }}>
                        Ingrese sus datos para regenerar el QR
                    </Typography>
                </Box>

                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        gap: 5
                    }}
                >
                    <Box sx={{ width: { xs: "90%", sm: "70%", md: "50%" } }}>
                        <TextField
                            label="Alias"
                            type="text"
                            variant="outlined"
                            InputLabelProps={{ required: false }}
                            required
                            fullWidth
                            sx={{
                                mb: 3,
                                input: { color: "white" },
                                label: { color: "white" },
                                "& label.Mui-focused": { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "white" },
                                    "&:hover fieldset": { borderColor: "white" },
                                    "&.Mui-focused fieldset": { borderColor: "white" }
                                },
                            }}
                        />

                        <TextField
                            label="Email"
                            type="text"
                            variant="outlined"
                            InputLabelProps={{ required: false }}
                            required
                            fullWidth
                            sx={{
                                mb: 3,
                                input: { color: "white" },
                                label: { color: "white" },
                                "& label.Mui-focused": { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "white" },
                                    "&:hover fieldset": { borderColor: "white" },
                                    "&.Mui-focused fieldset": { borderColor: "white" }
                                },
                            }}
                        />

                        <Stack
                            spacing={2}
                            direction={{ xs: "column", sm: "column", md: "row" }}
                            sx={{ mt: 2 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    fontSize: "1rem",
                                    height: 50,
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "50%",
                                        lg: "50%",
                                        xl: "50%",
                                    },
                                    backgroundColor: "#74c69d",
                                    "&:hover": {
                                        backgroundColor: "#52b788"
                                    }
                                }}
                            >
                                Generar
                            </Button>
                            <Button
                                variant="contained"
                                component="a"
                                href="/login"
                                color="primary"
                                sx={{
                                    fontSize: "1rem",
                                    height: 50,
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "50%",
                                        lg: "50%",
                                        xl: "50%",
                                    },
                                    backgroundColor: "#d8f3dc",
                                    "&:hover": {
                                        backgroundColor: "#b7e4c7",
                                        color: "#000"
                                    }
                                }}
                            >Log in
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box >
    )
};

export default recuperacionTotp;