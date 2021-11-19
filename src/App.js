import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Componants/Navbar";
import News from "./Componants/News";
import About from "./Componants/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      progress:0
    }
  }

 

 

  apikey = process.env.REACT_APP_NEWS_API;



  setProgress = (val) => {
    this.setProgress({ progress: val });
  };
  render() {
    let size = 12;
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />

         

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  pagesize={size}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="business"
                  pagesize={size}
                  country={this.state.country}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  pagesize={size}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="health"
                  pagesize={size}
                  country={this.state.country}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="science"
                  pagesize={size}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="sports"
                  pagesize={size}
                  country={this.state.country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="technology"
                  pagesize={size}
                  country={this.state.country}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pagesize={size}
                  country={this.state.country}
                  category="entertainment"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
