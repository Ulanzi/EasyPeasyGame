import React, {useEffect} from 'react';
import classes from "./startGame2.module.css";
import {NavLink} from "react-router-dom";


const Chapter2 = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.backGround}>
            <div>
                <div>
                    <img className={classes.gamePhoto1} src={props.photo1}/>
                </div>
                <div className={classes.gameTextPadding}>
                    <h2>{props.text1}</h2>
                </div>

                <div>
                    <img className={classes.gamePhoto2} src={props.photo2}/>
                </div>
                <div className={classes.gameTextPadding2}>
                    <h2>{props.text2}</h2>
                </div>

                <div className={classes.grid}>
                    <div className={classes.buttonLeft01}>
                        <NavLink to={"/game2/" + props.step1}
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            <h3>{props.choice1}</h3></NavLink>
                    </div>
                    <div className={classes.buttonLeft02}>
                        <NavLink to={"/game2/" + props.step2}
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            <h3>{props.choice2}</h3></NavLink>
                    </div>
                </div>

                <div className={classes.buttonLeft03}>
                    <NavLink to={"/" + props.step3}
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <h3>{props.choice3}</h3></NavLink>
                </div>

                <div className={classes.buttonLeft04}>
                    <NavLink to={"/game2/" + props.step4}
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <h3>{props.choice4}</h3></NavLink>
                </div>

            </div>
        </div>
    )
}

export default Chapter2;