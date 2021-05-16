import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

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
                    <nav className={styles.MainNav}>
                        <div>
                            <NavLink to="/characters"> Characters</NavLink>
                        </div>
                        <div>
                            <NavLink to="/weapons"> Weapons</NavLink>
                        </div>
                    </nav>
                </div>
                <div className={styles.ScheduleButton}>
                    <NavLink to="/schedule" exact> Go to schedule</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Header;