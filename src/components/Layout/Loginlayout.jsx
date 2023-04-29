import React from 'react';
import Navigationvar from '../../Shared/NavigationBar/Navigationvar';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
    return (
        <div>
            <Navigationvar></Navigationvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;