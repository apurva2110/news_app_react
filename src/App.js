import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  //apiKey=process.env.REACT_APP_NEWS_API  --NOT WORKING THROUGH ENV VARIABLE GETTING ERROR
  apiKey='9fb3e16107b442ba91e706412a036362';
  state ={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          /* onLoaderFinished={() => setProgress(0)} */
        />  
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key="General" country='in' category='General' apiKey={this.apiKey}/>}/>
          <Route exact path="/Business" element={<News setProgress={this.setProgress}  key="Business" country='in' category='Business' apiKey={this.apiKey}/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key="Entertainment" country='in' category='Entertainment' apiKey={this.apiKey}/>}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress}  key="Health" country='in' category='Health' apiKey={this.apiKey}/>}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress}  key="Science" country='in' category='Science' apiKey={this.apiKey}/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress}  key="Sports" country='in' category='Sports' apiKey={this.apiKey}/>}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress}  key="Technology" country='in' category='Technology' apiKey={this.apiKey}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

