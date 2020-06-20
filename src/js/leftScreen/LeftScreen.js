import React, { Component } from 'react'
import './leftScreen.css'
import NavComp from '../navComp/NavComp'

class leftScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="tot-sc">
            <div className="l-s-container">
                <div className="top-div">
                    iPod
                    <img alt='' className='battery' src='battery.svg'></img>
                </div>
                <div className="nav-div">
                    <div>
                        <NavComp act={this.props.act} click={this.props.click} mainmenu={this.props.mainmenu} thm={this.props.thm}/>
                    </div>
                </div>
            </div>
            <img alt='' className="right-img" src="2c3a5a203d30897358861ae85cb98144.jpg"></img>
            </div>
        )
    }
}

export default leftScreen
