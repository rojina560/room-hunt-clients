import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;