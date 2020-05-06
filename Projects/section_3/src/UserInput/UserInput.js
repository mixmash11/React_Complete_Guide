// UserInput.js
import React from "react";
import "./UserInput.css"

const userInput = (props) => {

    return (
        <div className="UserInput">
            <label htmlFor="rename">Rename Your Hero:</label>
            <br/>
            <input type="text" value={props.name} onChange={props.rename_event} name="rename"/>
        </div>
    )
};

export default userInput;