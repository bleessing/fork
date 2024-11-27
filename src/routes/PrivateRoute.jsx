import React, {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";

const PrivateRoute = () => {
    const {auth} = useContext(AuthContext);
    return auth ? <Outlet/> : <Navigate to="/auth" replace />;
};

export default PrivateRoute;