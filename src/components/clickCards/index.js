import React from "react";
import "./style.css";

function ClickCard(props) {
    return (
        <div className="card click-card" data-id={props.id} onClick={() => props.handleGuess(props.id)}>
            <div className="card-body">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default ClickCard;