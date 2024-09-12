import React, { useState } from 'react';
import Button from './Button';
import './text.css';

interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'other';
}

const skills: Skill[] = [
  { name: "Rust", level: 90, category: 'backend' },
  { name: "Laravel", level: 85, category: 'backend' },
  { name: "C#", level: 80, category: 'backend' },
  { name: "Git", level: 70, category: 'other' },
];

const About: React.FC = () => {
  
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <h1 className='gradiented ' style={{fontFamily: 'Montserrat', fontWeight: '400'}}>Nothing here yet!</h1>
        <p  className='text-white ' style={{fontFamily: 'Montserrat', fontWeight: '200'}} > You can track my learning process on my github account!</p>
        <Button text=' Github '></Button>
    </div>
  );
};

export default About;