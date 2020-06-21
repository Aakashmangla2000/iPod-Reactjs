// import React from 'react'
// import Coverflow from 'react-coverflow';
// import './coverflow.css'
// // import { StyleRoot } from 'radium';

// const fn = function () {
//   /* do your action */
//   Coverflow.active = 3
//   console.log('hi')
// }

// function Coverfloww() {
//   const myStyle = {
//           display: 'block',
//           // width: '100px',
//           // height: '80px',
//           // overflow: 'visible'
//   }
//     return (
//         <div>
//           <Coverflow 
//               width={340}
//               height={270}
//               displayQuantityOfSide={1}
//               navigation={false}
//               enableScroll={false}
//               enableHeading={false}
//               // clickable={true}
//               active={5}
//           >
//     <div
//       onClick={() => fn()}
//       onKeyDown={() => fn()}
//       role="menuitem"
//       tabIndex="0"
//     >
//       <img
//         src='coverArt/R-10559651-1503610834-7229.png.jpg'
//         alt=''
//         style={myStyle}
//       />
//     </div>
//     <img style={myStyle} src='coverArt/R-1873013-1471100381-3022.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-367084-1263095553.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-226082-1239894271.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-376152-1124751661.jpg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-383777-1173543359.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-459606-1450389425-8852.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-463597-1560369536-8302.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-1934367-1383908438-4175.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-2607424-1298729076.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-10559651-1503610834-7229.png.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     {/* <img style={myStyle} src='coverArt/' alt='' data-action="http://andyyou.github.io/react-coverflow/"/> */}


//   </Coverflow>
//         </div>
//     )
// }

// export default Coverfloww

import React, { Component, getMoreData } from 'react'
import Coverflow from 'react-coverflow';
import './coverflow.css'


// const fn = function () {
//   /* do your action */
//   Coverflow.active = 3
//   console.log('hi')
// }

class Coverfloww extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       act: 0
    }
    this.fn = this.fn.bind(this)  
    this.state.act = this.props.act
    console.log('con')
  }

  fn(){
    if(this.state.act + this.props.act >= 0 && this.state.act + this.props.act <9){
    this.setState({
      act: this.state.act + this.props.act
    })}
    console.log('hi')
    return this.props.act
  }

  // componentDidUpdate(prevProps) {
  //   if(this.state.act + this.props.act >= 0 && this.state.act + this.props.act <9){
  //     this.setState({
  //       act: this.state.act + this.props.act
  //     })
  //   }
  //  }
//   componentWillReceiveProps(props) {
//     if(this.state.act!==NaN)
//     if(this.state.act + props.act >= 0 && this.state.act + props.act <9 && this.state.act !== this.state.act +props.act){
//     this.setState({act: this.state.act + props.act});
//     console.log(this.state.act)}
// }
  render() {
    const myStyle = {
                display: 'block',
                // width: '100px',
                // height: '80px',
                // overflow: 'visible'
        }
        // if(chn<9&&chn<chn+1)
          return (
              <div>
                <Coverflow 
                    width={340}
                    height={270}
                    active={this.props.act}
                    displayQuantityOfSide={1}
                    navigation={false}
                    enableScroll={false}
                    enableHeading={false}
                    clickable={false}
                >
          {/* <div
            onClick={this.fn}
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
              src='coverArt/R-10559651-1503610834-7229.png.jpg'
              alt=''
              style={myStyle}
            />
          </div> */}
          <img style={myStyle} src='coverArt/R-1873013-1471100381-3022.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-367084-1263095553.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-226082-1239894271.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-376152-1124751661.jpg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-383777-1173543359.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-459606-1450389425-8852.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-463597-1560369536-8302.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-1934367-1383908438-4175.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-2607424-1298729076.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-10559651-1503610834-7229.png.jpg' alt=''/>
          {/* <img style={myStyle} src='coverArt/' alt='' data-action="http://andyyou.github.io/react-coverflow/"/> */}
      
      
        </Coverflow>
              </div>
    )
  }
}

export default Coverfloww
