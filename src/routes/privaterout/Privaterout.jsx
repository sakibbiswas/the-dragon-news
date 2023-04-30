import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privaterout = ({ children }) => {
    const { user } = useContext(Authcontext)
    const location = useLocation();

    console.log(location);
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>


};

export default Privaterout;