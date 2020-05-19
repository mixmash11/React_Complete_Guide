// ValidationComponent.js
import React from "react";

const ValidationComponent = (props) => {
    let textComment = props.text_length >= 5 ? <p>Text long enough</p> : <p>Text too short</p>;

    return (
        <div>
            {textComment}
        </div>
    )
};

export default ValidationComponent;