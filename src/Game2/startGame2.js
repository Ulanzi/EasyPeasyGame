import React from 'react';
import classes from "./startGame2.module.css";
import {NavLink} from "react-router-dom";

const StartGame2 = () => {
    return (<div>
        <div >
            <img  src={ 'https://sun9-62.userapi.com/impf/c836628/v836628483/15944/6skRgqAeg8w.jpg?size=1000x646&quality=96&sign=a70535050e3f4e5d618b5f4624c7d78b&type=album'} className={classes.gamePhoto1}/>
        </div>
        <div className={classes.gameTextPadding2}>
            <h2> <p>Привет Дружище! Эту часть я решил посвятить тому, что мы все безумно любим - тепло и уют, который нам дарят праздники, а
                именно - Новый Год, ну или Рождество! Тот самый момент, когда весь мир становится чуть добрее... </p> </h2>
        </div>

        <div className={classes.buttonLeft02} >
            <NavLink to='/game2/1' className={navData => navData.isActive ? classes.active : classes.item}><h3>Поехали!</h3></NavLink>
        </div>
    </div>)
}

export default StartGame2;