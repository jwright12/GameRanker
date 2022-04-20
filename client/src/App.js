import logo from './logo.svg';
import React,{Component} from 'react';
import {BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import FilterView from './components/FilterView';
import NoPage from './components/NoPage';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from "./utils/theme"

function App() {
  return (
   <ChakraProvider theme={customTheme}>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FilterView />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
     </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;