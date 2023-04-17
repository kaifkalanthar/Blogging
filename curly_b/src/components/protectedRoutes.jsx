import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import auth from '../service/authService';


const ProtectRoute = ({ path, component: Component, navigatePath }) => {
    const user = auth.getCurrentUser();
    return (
        <Route
            path={path}
            element={!user ? Component : <Navigate to={navigatePath} />}
        />
    );
}

export default ProtectRoute;