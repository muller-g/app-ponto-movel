import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

const RouterApp = () =>{
    return(
        <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                </Routes>
        </Router>
    )   
}

export default RouterApp