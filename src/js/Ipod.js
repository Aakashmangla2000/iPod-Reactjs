import React, { Component } from 'react'
import './ipod.css'
import './wheel/wheel.css'
import Screen from './screen/Screen'
import Wheel from './wheel/Wheel'



class Ipod extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isClicked: false,
            ipodClicked: false
        }
    }
    
    render() {
        let cssProperties = {}
        if (this.state.isClicked) {
         cssProperties['--bgcolor'] = 'white'
        }
        if (this.state.ipodClicked) {
            cssProperties['--ipodcolor'] = 'linear-gradient(to bottom, #787678 0%, #353536 100%)'
            cssProperties['--wheelbutton'] = '#4d4c4e'
            cssProperties['--wheelcolor'] = '#2f2f2f'
           }

        return (
            <div className="bodyy" style={cssProperties}>
                <button onClick={() => { this.setState({ isClicked: !this.state.isClicked }) }}>Change Background</button>
                <button onClick={() => { this.setState({ ipodClicked: !this.state.ipodClicked }) }}>Change Ipod Colour</button>
                <div className='ip'>
                <Screen/>
                <Wheel/>
                </div>
            </div>
        )
    }
}

export default Ipod
