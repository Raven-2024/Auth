import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowContact from "./ShowContact";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";   
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
// import AddStudents from "./AddStudent"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-user" element={<GuestRoute><Register /></GuestRoute>} />
        <Route path="/show-contact" element={<ProtectedRoute><ShowContact /> </ProtectedRoute>} />
        {/* <Route path="/add-contact" element={<ProtectedRoute><AddStudent /> <ProtectedRoute>} /> */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
