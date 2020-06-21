import React, { Component } from 'react'
import './screen.css'
import LeftScreen from '../leftScreen/LeftScreen'
import { Route } from 'react-router-dom'
import Coverflow from '../coverflow/Coverflow'
import SettingsScreen from '../settingsScreen/SettingsScreen'
import MusicComp from '../Music/MusicComp'
import GamesComp from '../Games/GamesComp'
import AboutUs from '../AboutUs/AboutUs'
import SongsComp from '../Music/Songs/SongsComp'
import SongComp from '../Music/SongComp/SongComp'
import SnakeGame from '../snakeGame/SnakeGame'

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
                    <Route path='/Coverflow' exact strict render><Coverflow act={this.props.act}/></Route>
                    <Route path='/Music' exact strict render><MusicComp act={this.props.act} click={this.props.click} musicmenu={this.props.musicmenu}/></Route>
                    <Route path='/Game' exact strict render><SnakeGame/></Route>
                    <Route path='/Settings' exact strict render><SettingsScreen act={this.props.act} click={this.props.click} thm={this.props.thm} settingsmenu={this.props.settingsmenu}/></Route>
                    <Route path='/About' exact strict render><AboutUs/></Route>
                    <Route path='/Radio' exact strict render><SongsComp/></Route>
                    <Route path='/Albums' exact strict render><SongComp click={this.props.click} songmenu={this.props.songmenu} act={this.props.act}/></Route>
                    <Route path='/Artists' exact strict render><SongComp click={this.props.click} songmenu={this.props.songmenu} act={this.props.act}/></Route>
                    {/* <Route path={`/Adhi%20Adhi%20Raat`} exact strict render><SongScreen/></Route> */}

            </div>
            </div>
        )
    }
}

export default Screen
