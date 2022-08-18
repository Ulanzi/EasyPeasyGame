import React from 'react';
import classes from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const MenuGame = () => {
    return (<div>
        <div className={classes.grid}>
            <div className={classes.gridLeft}>
                <div >
                    <img className={classes.Photo}  src={'https://phonoteka.org/uploads/posts/2021-07/1625109324_23-phonoteka_org-p-oboi-na-rabochii-stol-minimalizm-gori-kras-24.jpg'}/>
                </div>
                <NavLink className={navData => navData.isActive ? classes.active1 : classes.item1} to="/game1"><h1>"Игра в вожатых"</h1></NavLink>
            </div>
            <div className={classes.gridRight}>
                <div >
                    <img className={classes.Photo} src={'https://img5.goodfon.ru/original/800x480/0/4c/solntse-igra-zvezda-fon-molnii-miami-hotline-miami-synthpop.jpg'}/>
                </div>
                <NavLink className={navData => navData.isActive ? classes.active2 : classes.item2} to="/game2"><h1>"Дилинджер"</h1></NavLink>
            </div>
        </div>
    </div>)
}

export default MenuGame;