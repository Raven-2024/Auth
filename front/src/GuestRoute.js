
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Navigate to="/show-user" replace />; 
    }
    return children;
};

export default GuestRoute;