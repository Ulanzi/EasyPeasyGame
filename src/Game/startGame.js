import React from 'react';
import classes from "./startGame.module.css";
import {NavLink} from "react-router-dom";

const StartGame = () => {
    return (<div>
        <div >
            <img  src={ 'https://sun9-48.userapi.com/impg/2nZY-qwzGXms51j-JamMDyB_BH45iLfsBStySw/CNk9u93oMJA.jpg?size=1068x717&quality=96&sign=dcba67c3d02f64bb1562d9155d9ea3ca&type=album'} className={classes.gamePhoto1}/>
        </div>
        <div className={classes.gameTextPadding}>
            <h2> <p>Привет Дружище! Предлагаю тебе немножко отдохнуть от твоих дел и сыграть в небольшую, мистическую игру, где твоей главной задачей будет
                выживание, в веренице странных и таинственных событий. А на последок ты сможешь попытаться спасти этот мир! </p> </h2>
        </div>

        <div className={classes.buttonLeft02} >
            <NavLink to='/game/1' className={navData => navData.isActive ? classes.active : classes.item}><h3>Поехали!</h3></NavLink>
        </div>
    </div>)
}

export default StartGame;