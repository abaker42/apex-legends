import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const active = (dat) => (dat.isActive ? classes.active : '');
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Apex Legends</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/home' className={active}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={active} to='/search'>
							Search
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
