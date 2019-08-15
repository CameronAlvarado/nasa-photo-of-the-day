import React from "react"
import { Header, Segment } from 'semantic-ui-react'
import "../App.css";

function HeaderEx() {
    return (
        <div className = "App-header">
            {/* <h1>NASA Photo of the Day</h1> */}
            <Segment inverted>
            <Header as='h4' inverted color='orange'>
            <h1>NASA Photo of the Day</h1>
             </Header>
            </Segment>
        </div>
    )
}

export default HeaderEx;