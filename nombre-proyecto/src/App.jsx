import "./App.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";

function SeccionN1() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
        }}
        sx={{
          width: {
            xs: "75%",
            sm: "75%",
            md: "70%",
            lg: "70%",
          },
          margin: {
            xs: "8vh auto",
            sm: "8vh auto",
            md: "13vh auto",
            lg: "13vh auto",
          },
          border: "8px",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
        }}
      >
        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "2rem",
          }}
        >
          <Box
            component="img"
            src="/Images/FotoPerfil.png"
            alt="Foto de perfil"
            sx={{
              maxWidth: "100%",
              height: "auto",
              width: {
                xs: "60%",
                sm: "60%",
                md: "90%",
                lg: "90%",
              },
              boxShadow: "0 1px 12px rgba(15, 6, 6, 0.8)",
              borderRadius: "25%",
            }}
          />
        </Stack>
        <Stack
          spacing={6}
          direction="column"
          justifyContent="center"
          sx={{
            padding: {
              xs: "2rem",
              sm: "2rem",
              md: "1rem",
            }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.1rem",
                md: "2.5rem",
              },
            }}
          >
            SANTINO SCAMPONE GARCIA
          </Typography>
          
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.1rem",
                md: "1rem",
              }
            }}
          >
            Analísta de sistemas y desarrollador web. Apasionado por la
            programación y la obtención de nuevas habilidades. Tecnologías con
            las que me llevo bien:
          </Typography>
          <Stack spacing={3} direction="row">
            <Button
              href="\Images\Curriculum Vitae - Scampone Garcia Santino.pdf"
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              variant="contained"
              sx={{ 
                fontSize: { xs: "0.80rem", md: "1rem" },
                backgroundColor: "#37474f",
                "&:hover":{
                  color: "#ffff",
                  backgroundColor: "#263238"
                }
              }}
            >
              Curriculum
            </Button>
            <Button
              href="https://wa.me/5493534244165?text=Hola%2C%20estoy%20interesado%20en%20tu%20trabajo"
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              variant="contained"
              sx={{ 
                fontSize: { xs: "0.80rem", md: "1rem" },
                backgroundColor: "#37474f",
                "&:hover":{
                  color: "#ffff",
                  backgroundColor: "#263238"
                }
              }}
            >
              Contacto
            </Button>
          </Stack>
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
