import useAuth from "../../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export const PrivateRoutes = () => {
    const {isAuthenticated} = useAuth();
    const location = useLocation();
    return(
        isAuthenticated === true
            ? <Outlet />
            : <Navigate to={'/login'} state={{from: location}} replace/>

    )
}