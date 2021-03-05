import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header >
                <div> 
                    {/*<h1>Genshin Impact Schedule</h1>
                    <p>Weekly schedule planifier for Genshin Impact weekly tasks </p>*/}
                </div>
                <div>
                    <h2>Customize Schedule</h2>
                    <NavLink to="/" exact> Schedule</NavLink>
                    <NavLink to="/characters"> link2</NavLink>
                    <NavLink to="/weapons"> link1</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;