import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easePolyOut } from 'd3-ease'
import { Hidden } from '@material-ui/core'



class Stripes extends PureComponent {
  state = {
    stripes:[
        {
            background:'#98c5e9',
            left:120,
            rotate:25,
            top:-260,
            height:1200,
            margin:50,
            delay:0
        },
        {
            background:'#ffffff',
            left:360,
            rotate:25,
            top:-397,
            height:1200,
            margin:150,
            delay:0
        },
        {
            background:'#98c5e9',
            left:600,
            rotate:25,
            top:-498,
            height:1200,
            delay:0
        }
    ]
  }



  render() {
    return (
        this.state.stripes.map((stripe,i) => {
            return (
      <div>
      
        <Animate
          show={true}
          key={i}
          start={() => ({
            backgroundColor:stripe.background,
            opacity:1,
            left:0,
            top:0,
            height:1200,
            margin:stripe.margin
          })}

          enter={() => ({
           
            backgroundColor:[stripe.background],
            left:[stripe.left],
            top:[stripe.top],
            rotate:[stripe.rotate],
            height:[stripe.height],
            margin:[stripe.margin],
            timing: { delay:stripe.delay, duration:700, ease: easePolyOut },
          })}
        >
          {(state) => {
            const { backgroundColor, left, top, height, margin } = state
            console.log(margin, "this is the margin");
            return (
                <div style={{position:'relative'}}>
                <div
                  style={{
                    position:'absolute',
                    overflow:Hidden,
                    height:height,
                    top:top,
                    marginRight:margin,
                    width:240,
                    opacity: 0.7,
                    backgroundColor:backgroundColor,
                    transform: `rotate(15deg) translateX(${left}px)`,
                  }}
                ></div>
            </div>
            )
          }}
        </Animate>
      </div>
    )}))
  }
}

export default Stripes;