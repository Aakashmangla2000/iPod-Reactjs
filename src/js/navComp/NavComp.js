import React, { Component } from 'react'
import './navComp.css'

class NavComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             listItems: ['Cover Flow', 'Music' , 'Games' , 'Settings']
        }
    }
    

    render() {
        let listIt = this.state.listItems.map(el => <div className="nav-el">{el}</div>)
        return (
            <div>
                {listIt}
            </div>
        )
    }
}

export default NavComp
