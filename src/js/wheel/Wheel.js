import React, { Component } from 'react'
import './wheel.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Wheel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    goBack(){
        window.location = "javascript:history.back()"
    }
    render() {
        return (
            <div className="wheelBody">
                <div className="wheel">
                    <img onClick={this.goBack} alt='' src="menu.svg" className="menu" style={{"pointer-events": "all"}}></img>
                    <img alt='' src="rewind.svg" className="rewind"></img>
                    <div onClick={() => this.props.buttonClicked(true)} className="innerWheel"></div>
                    <img alt='' src="fast_forward.svg" className="fastForw"></img>
                    <img alt='' src="play_pause.svg" className="playPause"></img>
                    {/* </canvas> */}
                    <canvas id="myPics" ref="canvas" width={230} height={230} onMouseDown={(e) => moused(e)} onMouseMove={e => this.props.childFunc(mousem(e))} onMouseUp={e => mouseu(e)} onMouseOut={e => mouseu(e)} onTouchStart={(e) => moused(e)} onTouchMove={e => this.props.childFunc(mousem(e))} onTouchEnd={e => mouseu(e)}/>

                </div>
            </div>
        )
    }
}

export default Wheel


let isDrawing = false;
let x = 0;
let y = 0;

function moused(e) {
if(e.clientX!=undefined){
  x = e.clientX;
  y = e.clientY;}
  else{
    x = e.touches[0].clientX;
  y = e.touches[0].clientY;  
  }
  isDrawing = true;
  fa = 0;
}

function mousem(e) {
  if (isDrawing === true) {
    if(e.clientX!=undefined){
        drawLine(0, x, y, e.clientX, e.clientY);
        x = e.clientX;
        y = e.clientY;
}
        else{
            drawLine(0, x, y, e.touches[0].clientX, e.touches[0].clientY);
          x = e.touches[0].clientX;
        y = e.touches[0].clientY;  
        }
  }
  return st
}

function mouseu(e) {
  if (isDrawing === true) {
    if(e.clientX!=undefined){
        drawLine(0, x, y, e.clientX, e.clientY);
    }
        else{
            drawLine(0, x, y, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        }   
    x = 0;
    y = 0;
    isDrawing = false;
  } 
}

let flag = 0
let fa = 0;
let st = 0;


function drawLine(context, x1, y1, x2, y2 , t = 0) {
    x1 = x1 - window.innerWidth/2 + t
    y1 = window.innerHeight/2 - y1+ t
    x2 = x2 - window.innerWidth/2+ t
    y2 = window.innerHeight/2 - y2+ t

    let angle = 0;
    if(y2!=y1&&x2!=x1){
    angle = ((Math.atan(x1/y1) - Math.atan(x2/y2))*180)/3.14
        
    fa += angle;
    console.log(x1,x2,'width')

    if(flag>=4){
    if(angle>=0){
      console.log('anti')
      if(st>0)
      st -= 1
    }
    else{
      console.log('clockwise')
      if(st<3)
      st += 1
    }
}
  
  flag = 0
}
flag+=1;


}