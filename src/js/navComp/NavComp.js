import React, { Component } from 'react'
import './navComp.css'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
class NavComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listItems: this.props.mainmenu
        }
    }


    render() {
        let max = this.state.listItems.length-1, ch = this.props.act;
        let ch2 = this.props.click
        if(ch>max){
            ch = max
        }
        let l = this.state.listItems.filter((el,ind)=>ch===ind?el:null)
        if(ch2 === true && l!== 'Background' && l !== 'iPod Colour' ){
            window.location = `/${l}`
        }
        else{
           ch2 = false
        }
       
    let listIt = this.state.listItems.map((el,ind) => <div className={`nav-el ${ch===ind?'active':''}`}><div className="txt">{el}<img alt='' className="r-arrow" src="arrow_right.svg"></img></div></div>)
        return (
            <div>
                {listIt}
            </div>
        )
    }
}

export default NavComp
