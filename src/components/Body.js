import React, { useEffect, useState } from "react"
import axios from "axios";
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox"
import ButtonEx from "./refactoring/ButtonEx";

import "../App.css";

function Body() {
    const [nasaData, setNasaData] = useState([]);
    const [date, setDate] = useState("Loading...");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=xVhenOpgYYC2GhrJGsBtztu7ypPTESAkPudiRAzu&date=${date}`) // Public API
          .then(response => {
            setNasaData(response.data)
            console.log(response.data)
          })
      }, [date]);
    return (
        <div className = "Body">
          <ButtonEx onClick={() => setDate(today)}/>
           {/* <button className="button" onClick={() => setDate(today)}>Click to show Photo</button> */}
          <PhotoBox imgUrl={nasaData.hdurl}/>
          <TextBox title={nasaData.title} date={date} explanation=        {nasaData.explanation} />
        </div>
    )
}

export default Body;