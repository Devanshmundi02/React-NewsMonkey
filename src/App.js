import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  pageSize = 10;
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter basename='/React-NewsMonkey'>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="general" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="business" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="general" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apikey = {this.apikey} key="technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
