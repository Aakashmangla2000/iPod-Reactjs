import React, { Component } from 'react'
import LeftScreen from '../leftScreen/LeftScreen'
import './musicComp.css'

class MusicComp extends Component {
    render() {
        return (
            <div className="ls-music">
                <LeftScreen act={this.props.act} click={this.props.click} mainmenu={this.props.musicmenu}/>
            </div>
        )
    }
}

export default MusicComp
