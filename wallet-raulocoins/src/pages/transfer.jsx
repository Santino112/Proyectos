import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Stack, Box, Button, TextField, Typography, Autocomplete, Alert } from "@mui/material";

const Transferencia = (e) => {
    const [alias, setAlias] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [detalle, setDetalle] = useState("");
    const [codigo, setCodigo] = useState("");
    const [severity, setSeverity] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const AliasUsuarios = ["alejo.daloia", "barbimol", "SamirFrascarelli.alias", "tobias.rc.alias", "Fransay.alias", "misaSSJ", "FabriRuma912", "anto.p", "Agus", "guada", "jogani", "virpedraza47", "Loki", "lupigliacampi", "maxibergese", "facundogrosso", "sqlenjoyer.alias", "santiagolazos", "otakuemo", "jgp.raulo", "dam", "JulietaGonella.alias"];

    const { name, username } = JSON.parse(
        localStorage.getItem("datosLogin")
    );

    const Account = () => {
        navigate("/Account");
    };

    const transferencia = async (e) => {
        e.preventDefault();

        const datosVerify = {
            username,
            totpToken: codigo
        }

        const response = await axios.post("https://raulocoin.onrender.com/api/verify-totp", datosVerify);
        const res = response.data;

        try {
            if (res.success) {
                const datosTransferencia = {
                    fromUsername: username,
                    toUsername: alias,
                    amount: cantidad,
                    description: detalle,
                    operationToken: datosVerify.totpToken
                }

                try {
                    const response = await axios.post("https://raulocoin.onrender.com/api/transfer", datosTransferencia);
                    const res = response.data;

                    console.log("Respuesta completa:", response.sex);
                    console.log("Datos recibidos:", res);
                    if (res.success) {
                        setMensaje(res.message);
                        setSeverity("success");
                        setTimeout(() => {
                            setMensaje('');
                        }, 5000);
                        const datosActuales = JSON.parse(
                            localStorage.getItem("datosLogin")
                        );

                        const nuevoBalance = res.transfer.from.newBalance;

                        const nuevosDatos = {
                            ...datosActuales,
                            balance: nuevoBalance,
                            token: JSON.parse(localStorage.getItem("datosLogin")).token
                        };

                        localStorage.setItem("datosLogin", JSON.stringify(nuevosDatos));
                    }
                } catch (error) {
                    if (error.response && error.response.data && error.response.data.message) {
                        setMensaje(res.message);
                        setSeverity("error");
                        setTimeout(() => {
                            setMensaje('');
                        }, 5000);
                    } else {
                        setMensaje("Error desconocido al hacer la transferencia:", error);
                        setSeverity("error");
                        setTimeout(() => {
                            setMensaje('');
                        }, 5000);
                    }
                }
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setMensaje("Error desconocido al hacer la transferencia:", error);
                setSeverity("error");
                setTimeout(() => {
                    setMensaje('');
                }, 5000);
            } else {
                setMensaje("Error desconocido al hacer la transferencia:", error);
                setSeverity("error");
                setTimeout(() => {
                    setMensaje('');
                }, 5000);
            }
        }
    };

    return (
        <Box
            component="section"
            sx={{
                minHeight: "100vh",
                minWidth: "100vw",
                backgroundImage: 'url(../public/Images/Transferencia.png)',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                px: { xs: 2, sm: 4 }
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "60%",
                        lg: "40%",
                        xl: "45%",
                    },
                    height: {
                        xs: "100%",
                        sm: "100%",
                        md: "auto",
                        lg: "auto",
                        xl: "auto",
                    },
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 0.10)",
                    boxShadow: "0 1px 12px rgba(25, 25, 25, 0.8)",
                    borderRadius: 2,
                    py: 5,
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
                        ¿Listo para transferir {name}?
                    </Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={transferencia}
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
                        <Autocomplete
                            value={alias}
                            onChange={(event, newValue) => setAlias(newValue)}
                            options={[...AliasUsuarios]}
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
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Alias"
                                    variant="standard"
                                    required
                                    InputLabelProps={{ required: false }}
                                    fullWidth
                                />
                            )}
                        />

                        <TextField
                            label="Cantidad"
                            type="number"
                            variant="standard"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
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
                            label="Detalle"
                            type="text"
                            variant="standard"
                            value={detalle}
                            onChange={(e) => setDetalle(e.target.value)}
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
                            label="TOTP"
                            type="text"
                            variant="standard"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
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
                                    "&:hover fieldset": { borderColor: "white" }
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
                                    width: "100%",
                                    backgroundColor: "#74c69d",
                                    "&:hover": {
                                        backgroundColor: "#52b788"
                                    }
                                }}
                            >
                                Transferir
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={Account}
                                sx={{
                                    fontSize: "1rem",
                                    width: "100%",
                                    backgroundColor: "#d8f3dc",
                                    "&:hover": {
                                        backgroundColor: "#b7e4c7"
                                    }
                                }}
                            >
                                Volver
                            </Button>
                        </Stack>
                    </Box>
                </Box>
                {mensaje && (
                    <Alert variant="filled" severity={severity}>
                        {mensaje}
                    </Alert>
                )}
            </Stack>
        </Box>
    );
};

export default Transferencia;
