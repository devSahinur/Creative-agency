import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';


import { UserContext } from '../App';
import AddService from '../components/Dashborad/AddService/AddService';
import DashboardNavbar from '../components/Dashborad/DashboardNavbar/DashboardNavbar';
import ManageService from '../components/Dashborad/ManageService/ManageService';
import Profile from '../components/Dashborad/Profile/Profile';
import Sidebar from '../components/Dashborad/Sidebar/Sidebar';

const Dashboard = ({ adminLoading }) => {
    const { loggedInUser: { email },  } = useContext(UserContext);
    const history = useHistory();
    const { panel } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);
    const isAdmin = false;

    if(
        !adminLoading &&  isAdmin && (
            panel === "orderList" ||
            panel === "addService" ||
            panel === "makeAdmin" ||
            panel === "manageServices")
    ){
        history.replace({ pathname: '/dashboard/profile'})
    }

    if (
        !adminLoading && isAdmin && (
            panel === "book" ||
            panel === "bookingList" ||
            panel === "review")
    ) {
        history.replace({ pathname: "/dashboard/profile" });
    }


    return (
        <main className='wrapper'>
            <Sidebar  adminLoading={adminLoading} show={showSidebar} />
            <div id="content">
                <DashboardNavbar setShowSidebar={setShowSidebar} show={showSidebar} />
                {
                    panel === 'profile' ? <Profile/>
                    : panel === 'addService' ? <AddService/>
                    : panel === 'manageServices' ? <ManageService/>
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;