import React, { Component } from 'react'
import './playing.css'

class Playing extends Component {
    constructor(props) {
        console.log(window.location.href[window.location.href.length-1])
        super(props)
    
        this.state = {
            play: false,
            pause: true,
            url: ['/Imagine Dragons - Believer.mp3','/The Weeknd - Blinding Lights.mp3','/Lauv - I Like Me Better.mp3','/Numb (Official Video) - Linkin Park.mp3','/Bohemian Rhapsody (Official Video Remastered).mp3','/Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse).mp3','/01 - Udd Gaye (128 Kbps) - DownloadMing.SE.mp3','/Coldplay - Viva La Vida.mp3'],
            artistmenu: [{title:'Imagine Dragons',img:'/cover/Imagine-Dragons-Believer-art.jpg'},{title:'The Weeknd',img:'/cover/The_Weeknd_-_Blinding_Lights.png'},{title:'Lauv',img:'/cover/Lauv_-_I_Like_Me_Better.png'},{title:'Linkin Park',img:'/cover/download.jpg'},{title:'Queen',img:'/cover/Bohemian_Rhapsody_soundtrack.jpg'},{title:'Post Malone',img:'/cover/220px-Into_the_Spider-Verse_Cover.jpg'},{title:'Ritviz',img:'/cover/DPz0Oi1W4AALn-8.jpg'},{title:'Coldplay',img:'cover/61MdbWKFVOL._SY355_.jpg'}],
            time: 0,
            ind: 0,
            pind: 0,
            dur: 0,
            total: 44
        }
        this.state.ind = window.location.href[window.location.href.length-1]
        this.url = this.state.url[this.state.ind];
        this.audio = new Audio(this.url);
        // this.changetime = this.changetime.bind(this)
        // console.log(this.url)
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
        
        if(this.audio.currentTime === this.audio.duration){
            this.setState({
              total: 44,
              time: 0
          })
        }

        // this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
        // this.url = this.state.url[this.state.ind];
        // this.audio = Audio(this.url);
        if(this.state.play && this.audio.currentTime!==0)
            this.setState({
                time: parseInt(this.audio.currentTime),
                total: this.state.total + (240/this.audio.duration)
            })
      }

      componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
        clearInterval(this.intervalID);
        // console.log('bye')
      }

      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }

    goBack(){
        window.location ='/Albums'
    }
    
    render() {
        let min = 0, sec =0,ts=0,tm=0;
        sec = parseInt(this.state.time%60)
        min = parseInt(this.state.time/60)
        tm = parseInt(this.audio.duration)
        ts = parseInt(this.audio.duration)

        if(tm.isNaN){
            tm=ts=0
        }
        
        // console.log(this.props.songIndex)
        return (
                <div className="play-screen">
                            <div className="p-t-div" style={{borderRadius:"15px 15px 0px 0px"}}>
                                <p style={{position:"absolute",marginTop:"3px",marginLeft:"5px"}}>Now Playing</p>  
                                <img alt='' className='battery p-b' src='/battery.svg'></img>
                                {this.state.play?<img alt='' className='play p-pa' src='/pause.svg'></img>:<img alt='' className='play p-pa' src='/play.svg'></img>}
                            </div>
                    <div className="p-screen">
                        
                        <div className="per"><div className="cover-art"><img className="cover-img" alt='' src={this.state.artistmenu[this.state.ind].img}></img></div></div>
                        <h1 className="song-name">{this.props.songmenu[this.state.ind].title}</h1>
                        <h1 className="artist">{this.state.artistmenu[this.state.ind].title}</h1>
                        <p className="l-t" style={{position:"absolute",zIndex:"100",margin:"0",marginLeft:"9px",marginTop:"199px",color:"gray"}}>{min}:{sec<10?`0`:``}{sec}</p>
        <p className="r-t" style={{position:"absolute",zIndex:"100",margin:"0",marginLeft:"300px",marginTop:"199px",color:"gray"}}>{parseInt((tm-this.audio.currentTime)/60)}:{((ts-sec)%60)>9?'':'0'}{(ts-sec)%60}</p>
                        <div className="p-over"></div>
                    <img alt=''  className='p-scrub' style={{transitionProperty:"margin-left",  marginLeft:`${this.state.total}px`}} src='/scrubber.svg'></img>
                    </div>
                    <img onClick={this.goBack} alt='' src="/menu.svg" className="menu me2" style={{"pointer-events": "all"}}></img>
                    <button style={{position:"absolute",margin:'0',marginTop:"228px",marginLeft:"150px"}} className="music-btn" onClick={this.togglePlay}><img alt='' style={{height:"13px"}} src="/play_pause.svg"></img></button>
                </div>
        )
    }
}

export default Playing
