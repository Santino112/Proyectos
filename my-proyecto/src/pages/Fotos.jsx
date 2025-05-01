import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Stack, Typography } from "@mui/material";

export default function Productos() {
  const navigate = useNavigate();
  const [imgurl, setimgurl] = useState();
  const consulta = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(response);
    setimgurl(response.data.message);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        backgroundColor: '#263238'
      }}
    >
      <Stack spacing={2} direction="column"
        sx={{
          backgroundColor: '#212121',
          padding: '2rem'
        }}>
        <Typography variant="h1"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2rem',
              md: '2.5rem'
            }
          }}>Foto aleatoria de un perro 🐶</Typography>

        <Box component="img" src={imgurl}
          sx={{
            maxWidth: 500,
            maxHeight: 500,
            boxShadow: 5,
            overflow: 'hidden'
          }}
        >
        </Box>
        <Button variant="contained" size="large" onClick={consulta}
          sx={{
            backgroundColor: '#607d8b',
            '&:hover': {
              backgroundColor: '#37474f'
            }
          }}>
          Consulta</Button>
        <Button variant="contained" size="large" onClick={() => navigate("/")}
          sx={{
            backgroundColor: '#607d8b',
            '&:hover': {
              backgroundColor: '#37474f'
            }
          }}>
          Volver al inicio</Button>
      </Stack>
    </Box>
  );
}