import React from 'react';
import './App.css';
import styled from 'styled-components';
import Layout from './Layouts/Layout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./Pages/HomePage/index";
import AnotherPage from "./Pages/AnotherPage/index";

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
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anotherPage" element={<AnotherPage />} />
                </Routes>
            </Layout>
        </Router>
        </DivHome>
    );
}

export default App;
