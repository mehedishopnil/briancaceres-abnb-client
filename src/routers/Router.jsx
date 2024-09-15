import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUP/SignUp";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import HostingDashboard from "../layout/HostingDashboard/HostingDashboard";
import PrivateRout from "./PrivateRout";
import Earnings from "../pages/Earnings/Earnings";
import CreateNewList from "../pages/CreateNewList/CreateNewList";
import Listing from "../pages/Listing/Listing";
import Insights from "../pages/Insights/Insights";
import GuideBooks from "../pages/GuideBooks/GuideBooks";
import Reservations from "../pages/Reservations/Reservations";

export const router = createBrowserRouter([
     {
         path: '/',
         element: <Main/>,
         children:[
             {
                 path:'/',
                 element:<Home/>
             },
             {
                 path:'signin',
                 element:<SignIn/>
             },
             {
                 path: 'signup',
                 element: <SignUp/>
             },
             {
                 path: 'contact',
                 element: <Contact/>
             },
             
             {
                 path: 'profile',
                 element: <Profile/>
             },
             
         ]
     },
 
     {
         path: '/hosting-dashboard',
         element: <PrivateRout><HostingDashboard></HostingDashboard></PrivateRout>,
         children: [
             {
                 path:'reservation',
                 element: <Reservations></Reservations>
 
             },
            
             {
                 path: 'earnings',
                 element: <Earnings></Earnings>
             },
             {
                 path: 'insights',
                 element: <Insights/>
             },
             {
                 path: 'guide-books',
                 element: <GuideBooks></GuideBooks>
             },
             {
                 path: 'create-new-list',
                 element: <CreateNewList></CreateNewList>
             },
             {
                 path: 'listing',
                 element: <Listing/>
             },
             
             
         ]
     }
 
 
     
 ])