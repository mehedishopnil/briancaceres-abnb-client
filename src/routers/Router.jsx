import { createBrowserRouter } from "react-router-dom";

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
                 path:'login',
                 element:<Login/>
             },
             {
                 path: 'registration',
                 element: <Registration/>
             },
             {
                 path: 'contact',
                 element: <Contact/>
             },
             
             {
                 path: 'profile',
                 element: <Profile/>
             },
             {
                path: 'individual-earnings/:id',
               element: <IndividualEarnings/>
             }
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
                 element: <Insights></Insights>
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
                 path: 'listings',
                 element: <Listings></Listings>
             },
             {
                 path: 'individual-earnings/:id',
                 element: <IndividualEarnings></IndividualEarnings>
             },
             
         ]
     }
 
 
     
 ])