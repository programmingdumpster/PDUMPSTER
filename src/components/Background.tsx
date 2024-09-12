import React from 'react';
import './Background.css'; // Importuj plik CSS

const Background: React.FC = () => {
    return (
        <>
            <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </>
    );
};

export default Background;
