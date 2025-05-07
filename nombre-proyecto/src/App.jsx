import "./App.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Box, Typography, Avatar, Stack } from "@mui/material";

function SeccionN1() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Stack
      direction= {{
        xs: "Column",
        sm: "Row",
        md: "row",
        lg: "row"
      }}
      sx={{
        width: "65%",
        borderRadius: '8px',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        boxShadow: '0 1px 12px rgba(255,255,255,0.8)'
      }}>
        <Stack spacing={1} direction="column" sx={{
          padding: "2rem"
        }}>
          <Box
            component="img"
            src="/Images/FotoPerfil.png"
            alt="Foto de perfil"
            sx={{
              maxWidth: "100%",
              height: "auto",
              width: {
                xs: "80%",
                sm: "90%",
                md: "90%",
                lg: "90%"
              }
            }}
          />
        </Stack>
        <div className="d-sm-flex flex-column justify-content-end contenedorInfo">
          <h2 className="text-center text-sm-start fs-1 fs-md-2 fs-lg-1">
            SANTINO SCAMPONE GARCIA
          </h2>
          <div className="contenedorInfoPersonal">
            <p className="text-center text-sm-start fs-2 fs-md-3 fs-lg-1">
              Analísta de sistemas y desarrollador web. Apasionado por la
              programación y la obtención de nuevas habilidades. Tecnologías con
              las que me llevo bien:
            </p>
            <div className="d-sm-flex flex-wrap justify-content-start gap-4 contenedorIconos"></div>
          </div>
          <div className="d-sm-flex flex-wrap justify-content-start gap-4 contenedorBotones">
            <a
              href="\Images\Curriculum Vitae - Scampone Garcia Santino.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn boton fs-4 fs-md-2 fs-xxl-3"
            >
              Curriculum
            </a>
            <a
              href="https://wa.me/5493534244165?text=Hola%2C%20estoy%20interesado%20en%20tu%20trabajo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn boton fs-4 fs-md-2 fs-xxl-3"
            >
              Contacto
            </a>
          </div>
        </div>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <>
      <>
        <SeccionN1 />
      </>
    </>
  );
}

export default App;
