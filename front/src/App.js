import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowUser from "./ShowUser";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";   
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-user" element={<GuestRoute><Register /></GuestRoute>} />
        <Route path="/show-user" element={<ProtectedRoute><ShowUser /> </ProtectedRoute>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
