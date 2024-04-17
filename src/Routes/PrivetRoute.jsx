import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/FirebaseAuthProvider';


const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (!user) {
        Swal.fire({
            title: "Error",
            text: "Please Login !",
            icon: "error"
        });
        return (
            <Navigate to="/login" state={location.pathname}/>

        )

    }
    return (
        <div>
            {children}
        </div>
    );
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;