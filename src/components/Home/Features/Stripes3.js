import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easePolyOut } from 'd3-ease'

const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'relative',
  margin: '5px 3px 10px',
  width: 500,
  height: 500,
}

class Stripes extends PureComponent {
  state = {
    stripes:[
        {
            background:'#98c5e9',
            left:120,
            rotate:25,
            top:-260,
            delay:0
        },
        {
            background:'#ffffff',
            left:360,
            rotate:25,
            top:-397,
            delay:200
        },
        {
            background:'#98c5e9',
            left:600,
            rotate:25,
            top:-490,
            delay:400
        }
    ]
  }



  render() {
    return (
      <div>
      
        <Animate
          show={true}
          start={() => ({
            backgroundColor:'#ffffff',
            left:0
          })}

          enter={() => ({
           
            backgroundColor:['red'] ,
            left:[400],
            timing: { delay:500, duration:2000, ease: easePolyOut },
          })}
        >
          {(state) => {
            const { backgroundColor, left } = state

            return (
              <div style={trackStyles}>
                <div
                  style={{
                    height:500,
                    width:50,
                    opacity: 0.7,
                    zIndex:50000,
                    backgroundColor:backgroundColor,
                 //   WebkitTransform: `translate3d(${left}px, 0, 0)`,
                    transform: `rotate(15deg) translateX(${left}px)`,
                  }}
                />what the
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}

export default Stripes;