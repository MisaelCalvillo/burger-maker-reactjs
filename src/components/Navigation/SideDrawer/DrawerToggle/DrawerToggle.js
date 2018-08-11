import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <dir onClick={props.clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </dir>
);

export default drawerToggle;