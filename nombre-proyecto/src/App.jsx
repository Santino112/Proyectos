import "./App.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
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
        direction={{
          xs: "Column",
          sm: "Row",
          md: "row",
          lg: "row"
        }}
        sx={{
          width: {
            xs: "75%",
            sm: "75%",
            md: "80%",
            lg: "80%"
          },
          margin: {
            xs: "8vh auto",
            sm: "8vh auto",
            md: "15vh auto",
            lg: "15vh auto"
          },
          border: '8px',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.10)',
          boxShadow: '0 1px 12px rgba(255,255,255,0.8)'
        }}>
        <Stack spacing={1} direction="column" justifyContent="center" alignItems="center" sx={{
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
                xs: "65%",
                sm: "65%",
                md: "90%",
                lg: "90%"
              }
            }}
          />
        </Stack>
        <Stack spacing={4} direction="column" justifyContent="center" sx={{
          padding: {
            xs: "2rem",
            sm: "2rem",
            md: "1rem"
          }
        }}>
          <Typography variant="h2" sx={{
            fontSize: {
              xs: "1.1rem",
              sm: "1.1rem",
              md: "3rem",
              lg: "3rem"
            }
          }}>
            SANTINO SCAMPONE GARCIA
          </Typography>
          <div className="contenedorInfoPersonal">
            <Typography variant="p" sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.1rem",
                md: "2rem",
                lg: "1rem"
              }
            }}>
              Analísta de sistemas y desarrollador web. Apasionado por la
              programación y la obtención de nuevas habilidades. Tecnologías con
              las que me llevo bien:
            </Typography>
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
        </Stack>
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
