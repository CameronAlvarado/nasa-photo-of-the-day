// import React, { useEffect, useState } from "react"
// import axios from "axios";
import React from "react"
import { Button, Segment, Icon } from 'semantic-ui-react'
import "semantic-ui/dist/semantic.min.css";

function ButtonEx(props)  {

     return (
  <div>
    <Segment inverted basic>
      <Button 
        onClick={props.onClick} 
        inverted color='orange' 
        animated='horizontal'>
        <Button.Content hidden>
          <Icon loading name='space shuttle' />
        </Button.Content>
        <Button.Content visible>
          Click for Photo!
        </Button.Content>
      </Button>
    </Segment>
    </div>
     )
}

export default ButtonEx;