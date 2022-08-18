import React from "react";
import {Route, Routes} from "react-router-dom";
import MenuGame from "./MenuGame/MenuGame";
import Start from "./Start";
import StartGame from "./Game/startGame";
import Game from "./Game/Game";
import StartGame2 from "./Game2/startGame2";
import Game2 from "./Game2/Game2";



const App = () => {
    return (<div>
        <div>
            <Routes >

                <Route path="/menu"
                       element={<MenuGame/>}/>
                <Route path="/"
                       element={<Start/>}/>
                <Route path="/game1"
                       element={<StartGame/>}/>
                <Route path="/game/*"
                       element={<Game/>}/>
                <Route path="/game2"
                       element={<StartGame2/>}/>
                <Route path="/game2/*"
                       element={<Game2/>}/>

            </Routes>
        </div>
    </div>);
}

export default App;
