import logo from './logo.svg';
import React,{Component} from 'react';
import {BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import FilterView from './views/FilterView';
import AddGameView from './views/AddGameView';
import NoPage from './components/NoPage';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from "./utils/theme"

/* The Browser Router injects a portion of the Controller responsibility into the View.
   With Single Page Applications, the Controller (Web Server) sends the entire
   Application to the browser upon the initial request. This breaks the paradigm of classical MVC web patterns.
   In traditional MVC web apps, a request from the client would be served with a static asset.
   The content of that static asset would be populated with resources provided from the Model.
   There is more communication back-and-forth with the client and the server in original MVC frameworks like Ruby on Rails.
   In React, the entire application is sent at first. The initial application could be served with data from the Model, but
   with React content that was pre-loaded can be displayed in the viewport without needing to communicate with the web server.
   This is acheived with the BrowserRouter shown in this file. It switches the content in the viewport based on the users actions.
   If the user needs to update or view the Data Model in a new context, it can be acheived by sending requests to end-points defined on the server.
*/

function App() {
  return (
   <ChakraProvider theme={customTheme}>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FilterView />} />
          <Route path="/add_game" element={<AddGameView />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
     </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;