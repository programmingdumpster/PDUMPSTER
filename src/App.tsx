import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import './components/text.css';
import WIP from './components/WIP';
import { Title } from 'chart.js';
 

const App: React.FC = () => {
    const birthDate = new Date(2006, 0, 27); 
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear() - 
        (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

    return (

        <Router>
            <Navbar />
            <Background />
             
            <Routes>
                {/* Trasa dla strony głównej */}
                <Route path="/" element={
                    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '66%', height: '275px' }}>
                            <h1 className="display-3  fw-normal gradiented fade-in" style={{ marginBottom: '0.75rem', MozAnimationDelay: '0.5s' }}>
                                @Siwwy
                            </h1>
                            <h3 className='mb-4 gray text-center fade-in' style={{ fontWeight: '200', fontSize: '1.3rem', MozAnimationDelay: '1s' }}>
                                BACKEND DEVELOPER
                            </h3>
                            <h6 className="fw-light text-center fade-in" style={{ 
                                color: '#d3d3d3',
                                marginBottom: '0.5rem', 
                                maxWidth: '600px',  
                                lineHeight: '1.5', 
                                fontFamily: 'poppins', 
                                MozAnimationDelay: '1.5s'
                            }}>
                                I'm an {age}-year-old guy <br/> who enjoys backend
                                development and cherishes music; <br/> it's
                                a language I understand deeply.
                            </h6>
                        </div>
                    </div>
                } />
                {/* Trasa dla strony "O nas" */}
                <Route path="/Experience" element={<WIP/>}/>
                <Route path="/Projects" element={<WIP/>}/>
            </Routes>
        </Router>
    );
};

export default App;
