// CharComponent.js
import React from "react";
import "./CharComponent.css";

const charComponent = (props) => {
    return (
        <div className="CharComponent">
            <p>{props.letter}</p>
        </div>
    )
};

export default charComponent;
