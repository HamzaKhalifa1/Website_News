import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from "./Componant/Header/index";
import Main_title from "./Componant/Main_Titel/index";
import Footer from "./Componant/Footer/index";
import HomePage from "./Pages/HomePage/index";

const DivHome = styled.div`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: #f5f9fc;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    li a {
        text-decoration: none;
        color: #7273b0;
        font-size: 17px;
    }
    li a:hover {
        text-decoration: none;
        color: white;
        font-size: 17px;
        margin-top: 10px;
    }
    p {
        margin: 0;
        width: 100%;
    }
`;

function App() {
    return (
        <DivHome>
            <Header />
            <Main_title />
            <HomePage />
            <Footer />
        </DivHome>
    );
}

export default App;
