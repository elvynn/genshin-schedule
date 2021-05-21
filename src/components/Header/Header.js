import React from 'react';
import { NavLink, Route } from 'react-router-dom';



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
                            <NavLink to="/characters" activeClassName={styles.Active}> 
                                <img alt="characters" src={'./assets/images/ui/paimon-icon.png'} />
                                <span>Characters</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/weapons" activeClassName={styles.Active}> 
                                <img alt="characters" src={'./assets/images/ui/paimon-icon.png'} />
                                <span>Weapons</span>
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <Route path="/characters">
                 <div className={styles.ScheduleButton}>
                    <NavLink to="/schedule" exact> Go to schedule</NavLink>
                </div>
                </Route>
                <Route path="/weapons">
                 <div className={styles.ScheduleButton}>
                    <NavLink to="/schedule" exact> Go to schedule</NavLink>
                </div>
                </Route>
            </header>
        </div>
    );
};

export default Header;