import React from "react"
import { Header, Segment, Icon } from 'semantic-ui-react'
import "../App.css";

function HeaderEx() {
    return (
        <div className = "App-header">
            {/* <h1>NASA Photo of the Day</h1> */}
            <Segment inverted>
            <Header as='h1' inverted color='white' icon>
            <Icon name='camera' />
            NASA Photo of the Day
             </Header>
            </Segment>
        </div>
    )
}

export default HeaderEx;