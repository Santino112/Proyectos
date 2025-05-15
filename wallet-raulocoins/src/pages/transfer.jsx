import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Stack, Box, Button, TextField, Typography, Autocomplete } from "@mui/material";

const Transferencia = (e) => {
    const [alias, setAlias] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [detalle, setDetalle] = useState("");
    const [codigo, setCodigo] = useState("");
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

        const datosTransferencia = {
            fromUsername: username,
            toUsername: alias,
            amount: cantidad,
            description: detalle,
            operationToken: codigo
        }

        try {
            const response = await axios.post("https://raulocoin.onrender.com/api/transfer", datosTransferencia);
            const res = response.data;

            console.log("Respuesta completa:", response);
            console.log("Datos recibidos:", res);
            if (res.success) {
                alert(res.success);
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
                navigate('/Account');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log("Error en la transferencia:", error.response.data.message);
            } else {
                console.log("Error desconocido al hacer la transferencia:", error);
            }
        }
    };

    return (
        <Box
            component="section"
            sx={{ border: "2px solid red", height: "100vh", width: "100vw" }}
        >
            <Stack
                spacing={2}
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

                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#26a69a", width: "100%", height: "12%", textAlign: "center" }}>
                    <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                        User: {name}
                    </Typography>
                </Box>
                <Box component="form" onSubmit={transferencia} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", border: "2px solid red", gap: 4 }}>
                    <Autocomplete
                        value={alias}
                        onChange={(event, newValue) => setAlias(newValue)}
                        options={[...AliasUsuarios]} // ejemplo de opciones
                        sx={{ width: "45vh" }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Alias"
                                variant="standard"
                                required
                                InputLabelProps={{ required: false }} // esto oculta el asterisco
                            />
                        )}
                    />
                    <TextField label="Cantidad" type="number" variant="standard" value={cantidad} onChange={(e) => setCantidad(e.target.value)} InputLabelProps={{ required: false }} required sx={{ width: "45vh" }} />
                    <TextField label="Detalle" type="text" variant="standard" value={detalle} onChange={(e) => setDetalle(e.target.value)} InputLabelProps={{ required: false }} required sx={{ width: "45vh" }} />
                    <TextField label="TOTP" type="text" variant="standard" value={codigo} onChange={(e) => setCodigo(e.target.value)} InputLabelProps={{ required: false }} required sx={{ width: "45vh" }} />
                    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
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
                            type="submit"
                            sx={{ fontSize: "1rem", width: "auto" }}
                        >
                            Transferir
                        </Button>
                    </Stack>
                </Box>
            </Stack >
        </Box >
    );
};

export default Transferencia;
