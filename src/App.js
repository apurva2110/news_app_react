import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () =>{
  //apiKey=process.env.REACT_APP_NEWS_API  --NOT WORKING THROUGH ENV VARIABLE GETTING ERROR
  const apiKey='9fb3e16107b442ba91e706412a036362';
  const pageSize=6;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          /* onLoaderFinished={() => setProgress(0)} */
        />  
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  key="General" country='in' category='General' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Business" element={<News setProgress={setProgress}  key="Business" country='in' category='Business' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress}  key="Entertainment" country='in' category='Entertainment' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Health" element={<News setProgress={setProgress}  key="Health" country='in' category='Health' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Science" element={<News setProgress={setProgress}  key="Science" country='in' category='Science' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Sports" element={<News setProgress={setProgress}  key="Sports" country='in' category='Sports' pageSize={pageSize} apiKey={apiKey}/>}/>
          <Route exact path="/Technology" element={<News setProgress={setProgress}  key="Technology" country='in' category='Technology' pageSize={pageSize} apiKey={apiKey}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;