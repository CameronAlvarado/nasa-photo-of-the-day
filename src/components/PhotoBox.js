import React from "react"
import "../App.css";

function PhotoBox(props) {
    return (
        <div className = "PhotoBox">
            <h3>This is the photo box</h3>
            {/* {console.log(props)} */}
            <img className="image" src={props.imgUrl} alt="APOD"></img>
        </div>
    )
}

export default PhotoBox;