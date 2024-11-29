import React from 'react';
import './App.css';
import Header from "./Componant/Header/Header";
import Main_title from "./Componant/Main_Titel/Main_title";
import Footer from "./Componant/Footer/Footer"
import Over_all from "./Componant/container/container";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main_title/>
            <Over_all/>
            <Footer/>
        </div>
    );
}

export default App;
