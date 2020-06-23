import React, { Component } from 'react'
import './songComp.css'
import LeftScreen from '../../leftScreen/LeftScreen';
// import NavComp from '../../navComp/NavComp';

class SongComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          play: false,
          pause: true,
          url: ['Imagine Dragons - Believer.mp3','The Weeknd - Blinding Lights.mp3','Lauv - I Like Me Better.mp3','Numb (Official Video) - Linkin Park.mp3','Bohemian Rhapsody (Official Video Remastered).mp3','Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse).mp3','01 - Udd Gaye (128 Kbps) - DownloadMing.SE.mp3','Coldplay - Viva La Vida.mp3'],
          time: 0,
          ind: 0,
          pind: 0,
          dur: 0
        };
    
        this.url = this.state.url[this.state.ind];
        this.audio = new Audio(this.url);
        this.changetime = this.changetime.bind(this)
      }

      componentDidMount() {
        this.intervalID = setInterval(
          () => this.changetime(),
          1000
        );
      }

      changetime(){
        this.setState({
            time: parseInt(this.audio.currentTime)
        })
        
        // this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
        // this.url = this.state.url[this.state.ind];
        // this.audio = Audio(this.url);
      }

      componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
        clearInterval(this.intervalID);
        // console.log('bye')
      }
    
      togglePlay = () => {
        
        if((this.audio.currentSrc.substring(this.audio.currentSrc.lastIndexOf('/')+1)).replace(/%20/g,' ') !== this.state.url[this.state.ind]){
            this.audio.src = (this.state.url[this.state.ind])
            // console.log('changed',(this.audio.currentSrc.substring(this.audio.currentSrc.lastIndexOf('/')+1)).replace(/%20/g,' '),this.state.url[this.state.ind])
        }
        this.setState({ play: !this.state.play }, () => {
            // this.audio.currentTime = this.state.dur;
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }

      onMusicSelect(name){
        this.setState({
            pind: this.state.ind,
            ind: name
        })


        // this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
        // console.log(this.state.ind)
      }

      render() {
        //   console.log(this.state.ind)
        return (
          <div className="radio-div" style={{ display:"flex",justifyContent:"center",alignContent:"center", height:'100%',width:"100%"}}>
              {/* <img style={{height:'100%',width:"100%",borderRadius:"15px", overflow:"hidden"}} src="24902871.jpg"></img> */}
              {/* <h1>Radio</h1> */}
              <LeftScreen getSongIndex={this.props.getSongIndex} mus={true} play={this.state.play} style={{width:"100%"}} click={this.props.click} act={this.props.act} mainmenu={this.props.songmenu} onSelect={(name) => this.onMusicSelect(name)}/>
              {/* {this.state.time} */}
            <button style={{marginTop:"500px"}} className="music-btn" onClick={this.togglePlay}><img alt='' style={{height:"13px"}} src="play_pause.svg"></img></button>
          </div>
        );
      }
}

export default SongComp
