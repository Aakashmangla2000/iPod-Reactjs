import React, { Component } from 'react'
import './screen.css'
import LeftScreen from '../leftScreen/LeftScreen'

class Screen extends Component {
    render() {
        return (
            <div className="body">
            <div className="screen">
                <LeftScreen/>
            </div>
            </div>
        )
    }
}

export default Screen
