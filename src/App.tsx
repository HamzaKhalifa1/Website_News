import React from 'react';
import './App.css';
import Header from "./Componant/Header/index";
import Main_title from "./Componant/Main_Titel/index";
import Footer from "./Componant/Footer/index"
import HomePage from "./Pages/HomePage/index";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main_title/>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;
