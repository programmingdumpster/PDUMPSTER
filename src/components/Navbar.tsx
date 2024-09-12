import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black" style={{ fontSize: '0.75rem' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '1rem' }}>Matt.S</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://github.com/programmingdumpster">Github</Link>
                            </li>
                            <li className="nav-item d-lg-none">
                                <button type="button" className="btn btn-sm btn-outline-light" style={{ fontSize: '0.75rem' }}>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-light d-none d-lg-inline-block" style={{ fontSize: '0.75rem' }}>
                        Contact
                    </button>
                </div>
            </nav>
            <hr style={{ border: 'none', borderTop: '2px solid white', margin: '0', width: '100%' }} />
        </>
    );
};

export default Navbar;
