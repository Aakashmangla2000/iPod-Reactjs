import React, { Component } from 'react'
import './ipod.css'
import './wheel/wheel.css'
import Screen from './screen/Screen'
import Wheel from './wheel/Wheel'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

class Ipod extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            page: '',
            action: 0,
            click: false,
            mainmenu: ['CoverFlow', 'Music' , 'Games' , 'Settings'],
            settingsmenu: ['Background', 'iPod Colour' , 'About'],
            cssProperties: {}

        }
        this.getActionFromWheel = this.getActionFromWheel.bind(this)
        this.buttonClicked = this.buttonClicked.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
    }


    getActionFromWheel(act){
        this.setState({
            action: act
        })
    }

    buttonClicked(){
        this.setState({
            click: true
        })
    }

    changeTheme(thm){
        this.setState({
            cssProperties: thm
        })
    }

    render() {
        // if (this.state.isClicked) {
        //  cssProperties['--bgcolor'] = 'white'
        // }
        // if (this.state.ipodClicked) {
        //     cssProperties['--ipodcolor'] = 'linear-gradient(to bottom, #787678 0%, #353536 100%)'
        //     cssProperties['--wheelbutton'] = '#4d4c4e'
        //     cssProperties['--wheelcolor'] = '#2f2f2f'
        // }

       


        return (
            <Router>
            <div className="bodyy" style={this.state.cssProperties}>
                <div className='ip'>
                <Screen act={this.state.action} click={this.state.click} mainmenu={this.state.mainmenu} settingsmenu={this.state.settingsmenu} thm={(thm) => this.changeTheme(thm)}/>
                <Wheel childFunc={this.getActionFromWheel} buttonClicked={this.buttonClicked}/>
                </div>
            </div>
            </Router>
        )
    }
}

export default Ipod
