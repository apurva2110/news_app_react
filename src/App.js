import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="General" country='in' category='General'/>}/>
          <Route exact path="/Business" element={<News key="Business" country='in' category='Business'/>}/>
          <Route exact path="/Entertainment" element={<News key="Entertainment" country='in' category='Entertainment'/>}/>
          <Route exact path="/Health" element={<News key="Health" country='in' category='Health'/>}/>
          <Route exact path="/Science" element={<News key="Science" country='in' category='Science'/>}/>
          <Route exact path="/Sports" element={<News key="Sports" country='in' category='Sports'/>}/>
          <Route exact path="/Technology" element={<News key="Technology" country='in' category='Technology'/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

