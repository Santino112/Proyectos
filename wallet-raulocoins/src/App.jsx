import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Totp from "./pages/Totp.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
import Transferencia from "./pages/transfer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from '@mui/material';
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{
          width: "100vw",
          minHeight: "100vh",
          mx: "center",
          backgroundColor: "#F0A8E5"
        }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/totp" element={<Totp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/verify-account" element={<VerifyAccount />} />
            <Route path="/transfer" element={<Transferencia />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
