import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from "antd";
import MainMenuTop from "./pages/common/MainMenuTop";
import HomePageContentImage from "./pages/common/HomePageContentImage";
import HomePage from "./pages/homePage/HomePage";
import Gallery from "./pages/gallery/Gallery";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <MainMenuTop/>
        <HomePageContentImage/>
<Content style={{margin:'0px 50px 0px 50px'}}>
    <HomePage/>
    <Gallery/>
</Content>
           </div>
  );
}

export default App;
