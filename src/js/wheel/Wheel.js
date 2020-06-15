import React, { Component } from 'react'
import './wheel.css'

class Wheel extends Component {
    render() {
        return (
            <div className="wheelBody">
                <div className="wheel">
                    <img alt='' src="menu.svg" className="menu"></img>
                    <img alt='' src="rewind.svg" className="rewind"></img>
                    <div className="innerWheel"></div>
                    <img alt='' src="fast_forward.svg" className="fastForw"></img>
                    <img alt='' src="play_pause.svg" className="playPause"></img>
                </div>
            </div>
        )
    }
}

export default Wheel
