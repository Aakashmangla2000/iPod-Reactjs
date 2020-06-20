import React, { Component } from 'react'
import './screen.css'
import LeftScreen from '../leftScreen/LeftScreen'
import { Route } from 'react-router-dom'
import Coverflow from '../coverflow/Coverflow'
import SettingsScreen from '../settingsScreen/SettingsScreen'

class Screen extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="body">
            <div className="screen">
                <Route path='/' exact strict render>
                    <LeftScreen act={this.props.act} click={this.props.click} mainmenu={this.props.mainmenu}/>
                    </Route>
                    <Route path='/Coverflow' exact strict render><Coverflow/></Route>
                    <Route path='/Music' exact strict render>Music</Route>
                    <Route path='/Games' exact strict render>Games</Route>
                    <Route path='/Settings' exact strict render><SettingsScreen act={this.props.act} click={this.props.click} thm={this.props.thm} settingsmenu={this.props.settingsmenu}/></Route>
            </div>
            </div>
        )
    }
}

export default Screen
