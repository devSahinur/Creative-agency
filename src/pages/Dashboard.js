import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';


import AddReview from '../components/Dashborad/AddReview/AddReview';
import AddService from '../components/Dashborad/AddService/AddService';
import DashboardNavbar from '../components/Dashborad/DashboardNavbar/DashboardNavbar';
import ManageService from '../components/Dashborad/ManageService/ManageService';
import Profile from '../components/Dashborad/Profile/Profile';
import Sidebar from '../components/Dashborad/Sidebar/Sidebar';
import DashboardLoader from '../components/Dashborad/DashboardLoader'
import MakeAdmin from '../components/Dashborad/MakeAdmin/MakeAdmin';
import { UserContext } from '../App';


const Dashboard = ({ adminLoading }) => {
    const { loggedInUser: { email }, isAdmin } = useContext(UserContext);
    const history = useHistory();
    const { panel } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);
    const [loadingReview, setLoadingReview] = useState(true);
    const [review, setReview] = useState({});
    const [reviewEdit, setReviewEdit] = useState(false);
    // const isAdmin = false;

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
    useEffect(() => {
        axios.get(`http://localhost:5000/user/review?email=${email}`)
            .then(res => {
                setReview(res.data);
                setLoadingReview(false);
            })
            .catch(error => toast.error(error.message))
    }, [email, reviewEdit, review])


    return (
        <main className='wrapper'>
            <Sidebar  adminLoading={adminLoading} show={showSidebar} />
            <div id="content">
                <DashboardNavbar setShowSidebar={setShowSidebar} show={showSidebar} />
                {
                    adminLoading ? <DashboardLoader />
                    : panel === "profile" ? <Profile />
                    : panel === "addService" && isAdmin ? <AddService />
                    : panel === "makeAdmin" && isAdmin ? <MakeAdmin />
                    : panel === 'manageServices' ? <ManageService/>
                    : panel === 'review' ? <AddReview/>
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;