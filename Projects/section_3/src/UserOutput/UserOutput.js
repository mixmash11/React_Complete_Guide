// UserOutput.js
import React from "react";
import "./UserOutput.css"

const userOutput = (props) => {

    const style = {
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
    };

    return (
        <div className="UserOutput" style={style}>
            <h3>Name</h3>
            <p>Bill</p>
            {/*<p>{props.name}</p>*/}
            <h4>Skill</h4>
            <p>Hiking</p>
            {/*<p>{props.skill}</p>*/}
        </div>
    )
};

export default userOutput;