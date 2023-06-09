import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={user ? <Account /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
