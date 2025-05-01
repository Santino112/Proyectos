import { useNavigate } from "react-router-dom";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { Button, Stack, Typography, Box } from "@mui/material";

function Botones() {
  const navigate = useNavigate();
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
        <Typography variant="h1" sx={{
          fontSize: {
            xs: '4.5rem',
            sm: '2.5rem',
            md: '5.5rem'
          },
        }}
        >
          Get y post</Typography>
        <Typography variant="body1" sx={{
          fontSize: {
            xs: '1rem',
            sm: '2rem',
            md: '2rem'
          }
        }}
        >
          Uso de api para programación 3</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" size="large" onClick={() => navigate("/Fotos")} 
          sx={{
            backgroundColor: '#f57c00',
            '&:hover':{
              backgroundColor: '#ef6c00'
            }
          }}
          >
            Ir a fotos</Button>
          <Button variant="contained" size="large" onClick={() => navigate("/Usuario")} 
          sx={{
            backgroundColor: '#00796b',
            '&:hover': {
              backgroundColor: '#00695c'
            }
          }}>Ir al usuario</Button>
        </Stack>
      </Box>
  );
}

export default Botones;
