import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography, Button, TextField, List, ListItem, ListItemText } from "@mui/material";

export default function Usuario() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [responseData, setResponseData] = useState(null);
  const handleSubmit = () => {
    axios
      .post(
        "https://reqres.in/api/users",
        {
          name: name,
          job: job,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
        }
      )
      .then((response) => {
        console.log("Respuesta:", response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: '100vw',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        backgroundColor: '#263238'
      }}>
      <Typography variant="h1"
        sx={{
          fontSize: {
            xs: '3rem',
            sm: '3rem',
            md: '2rem'
          }
        }}>Formulario</Typography>
      <Stack spacing={2} direction="column"
        sx={{
          backgroundColor: '#212121',
          padding: '2rem',
          width: {
            xs: '60%',
            sm: '60%',
            md: '20%'
          }
        }}>
        <TextField
          label='Nombre'
          variant='filled'
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              color: "#fafafa"
            },
            "& .MuiInputLabel-root": {
              color: "#fafafa",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fafafa",
            }
          }}
        />
        <TextField
          label='Trabajo'
          variant='filled'
          value={job}
          onChange={(e) => setJob(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              color: "#fafafa"
            },
            "& .MuiInputLabel-root": {
              color: "#fafafa",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fafafa",
            }
          }}
        />
        <Button variant="contained" size="large" type="button" onClick={handleSubmit}
          sx={{
            backgroundColor: '#607d8b',
            '&:hover': {
              backgroundColor: '#37474f'
            }
          }}>
          Enviar
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/")}
          sx={{
            backgroundColor: '#607d8b',
            '&:hover': {
              backgroundColor: '#37474f'
            }
          }}>
          Home</Button>
      </Stack>
      {responseData && name && job && (
        <Stack direction="column"
          sx={{
            backgroundColor: '#607d8b',
            padding: '2rem',
            width: {
              xs: '60%',
              sm: '60%',
              md: '20%'
            }
          }}>
          <Typography variant="h2"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '2rem'
              }
            }}
          >
            Información</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={`Name: ${responseData.name}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Job: ${responseData.job}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Id: ${responseData.id}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Date: ${responseData.createdAt}`}
              />
            </ListItem>
          </List>
        </Stack>
      )}
    </Box>
  );
}