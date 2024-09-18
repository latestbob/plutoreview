import React from 'react';
import { Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Forgot from './pages/Forgot';
import MyLinks from './pages/dashboard/MyLinks';
import Analytics from './pages/dashboard/Analytics';
import Review from './pages/Review';
import ReviewTwo from './pages/ReviewTwo';
import Confirm from './pages/Confirm';

const routes = [
    


    {
        id:1,
        path:'/',
        exact:true,
        auth:false,
        component: Review,
        pageTile:"Pluto Beauty Supplies Review"
    },

    {
        id:2,
        path:'/next',
        exact:true,
        auth:false,
        component: ReviewTwo,
        pageTile:"Pluto Beauty Supplies Review"
    },

    {
        id:3,
        path:'/confirmation',
        exact:true,
        auth:false,
        component: Confirm,
        pageTile:"Pluto Beauty Supplies Review"
    },
];

export default routes;