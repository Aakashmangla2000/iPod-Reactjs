import React, { Component } from 'react'
import './leftScreen.css'
import NavComp from '../navComp/NavComp'

class leftScreen extends Component {
    render() {
        return (
            <div className="l-s-container">
                <div className="top-div">iPod.js</div>
                <div className="nav-div">
                    <div>
                        <NavComp/>
                    </div>
                </div>
            </div>
        )
    }
}

export default leftScreen
