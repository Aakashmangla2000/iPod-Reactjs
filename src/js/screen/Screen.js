import React, { Component } from 'react'
import './screen.css'

class Screen extends Component {
    render() {
        return (
            <div className="body">
            <div className="screen">
                <ul>
                    <li>Music</li>
                    <li>Games</li>
                    <li>Settings</li>

                </ul>
            </div>
            </div>
        )
    }
}

export default Screen
