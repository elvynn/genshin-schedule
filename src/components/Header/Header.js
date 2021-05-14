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
                    <NavLink to="/characters"> Characters</NavLink>
                    <NavLink to="/weapons"> Weapons</NavLink>
                </div>
                <div>
                    <NavLink to="/schedule" exact> Schedule</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;