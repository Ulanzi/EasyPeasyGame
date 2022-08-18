import React from 'react';
import classes from "./App.module.css";
import {NavLink} from "react-router-dom";


const Start = () => {
    return (<div className={classes.grid}>
            <div className={classes.BackGround}>
                <img className={classes.Photo} src={'https://i.gifer.com/KHM7.gif'}/>
            </div>

            <div className={classes.TextStart}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/menu"><h1>START</h1></NavLink>
            </div>



        </div>);
}

export default Start;