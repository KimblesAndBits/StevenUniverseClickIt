import React from "react";
import GuessNote from "../guessNotes/index";
import Score from "../Score/index";
import HighScore from "../highScore/index";
import "./style.css";

function Title(props) {
    return (
        <div className="pink-wrap">
            <div className="title">
                <div id="game-name"><span>Clicky Game</span></div>
                <GuessNote message={props.guessMessage} />
                <div id="score-area" style={{ float: "right" }}>
                    <Score score={props.score} />
                    <p><HighScore highScore={props.highScore} /></p>
                </div>
            </div>
        </div>
    )
};

export default Title;