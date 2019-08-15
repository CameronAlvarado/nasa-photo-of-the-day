// import React, { useEffect, useState } from "react"
// import axios from "axios";
import React from "react"
import { Button, Segment } from 'semantic-ui-react'
import "semantic-ui/dist/semantic.min.css";

function ButtonEx(props)  {

     return (
  <div>
    <Segment inverted>
      <Button  onClick={props.onClick}inverted color='orange'>
        Load Photo
      </Button>
    </Segment>
    </div>
     )
}

export default ButtonEx;