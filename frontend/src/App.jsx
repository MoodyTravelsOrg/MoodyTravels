import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./views/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import TravelMood from "./components/TravelMood/TravelMood";
import DestinationDetail from "./components/DestinationView/DestinationView";
import PageNotFound from "./views/PageNotFound";
import UserProfile from './components/UserProfile/UserProfile';
import Contact from './components/Contact/Contact';


// App component with all the routing logic for making possible the navigation between the different views and keeping the Navbar component always visible at the top of the page 
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/mood-log" element={<MoodTracker />} />
          <Route path="/travel-mood" element={<TravelMood />} />
          <Route path="/destination/:name" element={<DestinationDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
     
    </>
  );
};

export default App;

