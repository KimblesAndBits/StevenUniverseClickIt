import React from "react";

function Score(props) {
    return (
        <span className="score">High Score: {props.highScore}</span>
    );
};

export default Score;