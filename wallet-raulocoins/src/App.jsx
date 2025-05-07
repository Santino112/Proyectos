import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Totp from "./pages/Totp.jsx";
import Account from "./pages/Account.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
import SignInSide from "./sign-in-side/SignInSide.jsx"

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/register" element={<Register />} />
            <Route path="/totp" element={<Totp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/verify-account" element={<VerifyAccount />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
