import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/FirebaseAuthProvider';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className='flex justify-center h-screen'>
                <span className="loading loading-spinner text-secondary w-10 md:w-20"></span>
            </div>
        )
    }
    if (!user) {
        Swal.fire({
            title: "Error",
            text: "Please Login !",
            icon: "error"
        });
        return (
            <Navigate to="/login" state={location.pathname} />

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