import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Totp from "./pages/Totp.jsx";
import Account from "./pages/Account.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
import SignInSide from "./sign-in-side/SignInSide.jsx"
import { ThemeProvider, createTheme} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/register" element={<Register />} />
          <Route path="/totp" element={<Totp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
