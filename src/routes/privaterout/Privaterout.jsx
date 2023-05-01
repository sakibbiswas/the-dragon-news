import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privaterout = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    console.log(location);
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>


};

export default Privaterout;