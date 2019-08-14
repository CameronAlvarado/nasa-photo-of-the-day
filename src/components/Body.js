import React, { useEffect, useState } from "react"
import axios from "axios";
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox"

import "../App.css";

function Body() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`) // Public API
          .then(response => {
            setNasaData(response.data)
            console.log(response)
          })
      }, []);
    return (
        <div className = "Body">
            <PhotoBox imgUrl={nasaData.hdurl}/>
            <TextBox title={nasaData.title} date={nasaData.date} explanation={nasaData.explanation} />
        </div>
    )
}

export default Body;