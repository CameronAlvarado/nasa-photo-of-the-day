import React from "react"
import "../App.css";

function TextBox(props) {
    return (
        <div className = "TextBox">
            <h3>{props.title}</h3>
            <h4>{props.date}</h4>
            <p>{props.explanation}</p>
        </div>
    )
}

export default TextBox;