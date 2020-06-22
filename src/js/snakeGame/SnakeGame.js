import React, {Component}from 'react';
import './snakeGame.css';
import Snakes from './Snakes'
import Food from './Food'

const getRandomCoordinates =()=>{
  let min=10
  let max=90
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]

}
const initialState={
  food:getRandomCoordinates(),
    speed:200,
    direction :'RIGHT',
    snakeDots:[
      [0,0],[2,0]
    ]
}

class SnakeGame extends Component{
  state=initialState;
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }
moveSnake=()=>{
  let dots=[...this.state.snakeDots]
  let head=dots[dots.length-1];


  switch(this.state.direction){
    case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
  }
  dots.push(head);
  dots.shift();
  this.setState({
    snakeDots: dots
  })
}
checkIfOutOfBorders() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
    this.onGameOver();
  }
}

checkIfCollapsed() {
  let snake = [...this.state.snakeDots];
  let head = snake[snake.length - 1];
  snake.pop();
  snake.forEach(dot => {
    if (head[0] === dot[0] && head[1] === dot[1]) {
      this.onGameOver();
    }
  })
}

checkIfEat() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  let food = this.state.food;
  if (head[0] === food[0] && head[1] === food[1]) {
    this.setState({
      food: getRandomCoordinates()
    })
    this.enlargeSnake();
    this.increaseSpeed();
  }
}

enlargeSnake() {
  let newSnake = [...this.state.snakeDots];
  newSnake.unshift([])
  this.setState({
    snakeDots: newSnake
  })
}

increaseSpeed() {
  if (this.state.speed > 10) {
    this.setState({
      speed: this.state.speed - 10
    })
  }
}

onGameOver() {
  alert(`Game Over. Your score is ${this.state.snakeDots.length - 2}`);
  this.setState(initialState)
  window.location ='/'
}
downclick=()=>{
  this.setState({
    direction:'DOWN'
  })

}

upclick=()=>{
  this.setState({
    direction:'UP'
  })
}
rightclick=()=>{
  this.setState({
    direction:'RIGHT'
  })
}
leftclick=()=>{
  this.setState({
    direction:'LEFT'
  })
}

  render(){
   return (
     <div>
      <div className="game-area">
      <Snakes snakesDots={this.state.snakeDots}/>
      <Food dot={this.state.food}/>
     <h3 style={{float:"right",marginRight:"10px", marginBottom:"190px"}}>{this.state.snakeDots.length-2}</h3>
    </div>
    {/* <button style={{margin:'0',marginLeft:"55px"}} onClick={this.downclick} ><img alt='' src="play_pause.svg" className="playPause" style={{"pointer-events": "all"}}></img></button>
    <button style={{position:"absolute",margin:'0',marginLeft:"46px",marginTop:"81px"}} onClick={this.upclick} ><img alt='' src="menu.svg" className="playPause" style={{"pointer-events": "all"}}></img></button>
    <button style={{marginTop:"40px"}} onClick={this.rightclick} ><img alt='' src="fast_forward.svg" className="fastForw" style={{"pointer-events": "all"}}></img></button>
    <button style={{marginLeft:"55px"}} onClick={this.leftclick}><img alt='' src="rewind.svg" className="rewind" style={{"pointer-events": "all"}}></img></button> */}
    <button style={{position:"absolute",margin:'0',marginTop:"230px",marginLeft:"148px"}} className="music-btn" onClick={this.downclick}><img alt='' style={{height:"13px"}} src="play_pause.svg"></img></button>
    <button style={{position:"absolute",margin:'0',marginTop:"67px",marginLeft:"143px"}} className="music-btn" onClick={this.upclick}><img alt='' style={{height:"13px"}} src="menu.svg"></img></button>
    <button style={{position:"absolute",margin:'0',marginTop:"147px",marginLeft:"232px"}} className="music-btn" onClick={this.rightclick}><img alt='' style={{height:"13px"}} src="fast_forward.svg"></img></button>
    <button style={{position:"absolute",margin:'0',marginTop:"148px",marginLeft:"68px"}} className="music-btn" onClick={this.leftclick}><img alt='' style={{height:"13px"}} src="rewind.svg"></img></button>

    </div>
    
   );
  }
}

export default SnakeGame;