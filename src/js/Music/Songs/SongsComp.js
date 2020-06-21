import React, { Component } from 'react'
import './songsComp.css'

class SongsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          play: false,
          pause: true
    
        };
    
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    
      }
    
      componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
      }
    
      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }
    
      render() {
        return (
          <div className="radio-div" style={{ display:"flex",justifyContent:"center",alignContent:"center", height:'100%',width:"100%"}}>
              <img style={{height:'100%',width:"100%",borderRadius:"15px", overflow:"hidden"}} src="24902871.jpg"></img>
              {/* <h1>Radio</h1> */}
            <button className="music-btn" onClick={this.togglePlay}><img alt='' style={{height:"13px"}} src="play_pause.svg"></img></button>
          </div>
        );
      }
}

export default SongsComp
