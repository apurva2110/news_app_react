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
  //apiKey=process.env.REACT_APP_NEWS_API  --NOT WORKING THROUGH ENV VARIABLE GETTING ERROR
  apiKey='8e70dfb7d265470195027fa972f7209f';
  render() {
    return (
      <div>
        <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="General" country='in' category='General' apiKey={this.apiKey}/>}/>
          <Route exact path="/Business" element={<News key="Business" country='in' category='Business' apiKey={this.apiKey}/>}/>
          <Route exact path="/Entertainment" element={<News key="Entertainment" country='in' category='Entertainment' apiKey={this.apiKey}/>}/>
          <Route exact path="/Health" element={<News key="Health" country='in' category='Health' apiKey={this.apiKey}/>}/>
          <Route exact path="/Science" element={<News key="Science" country='in' category='Science' apiKey={this.apiKey}/>}/>
          <Route exact path="/Sports" element={<News key="Sports" country='in' category='Sports' apiKey={this.apiKey}/>}/>
          <Route exact path="/Technology" element={<News key="Technology" country='in' category='Technology' apiKey={this.apiKey}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

