import React, { PureComponent } from 'react';
import {Animate} from 'react-move';
import { easePolyOut } from 'd3-ease';
import featuredPlayer from '../../../Resources/images/featured_player.png';

class Text extends PureComponent {

        state = {  }

        animateNumber = () => (
    <Animate 
        show={true}
        start={() => ({
           opacity:0,
           rotate:0
          })}

          enter={() => ({
            opacity:[1],
            rotate:[360],
            timing:{duration:3000, ease:easePolyOut}

          })}

          >
             {(state) => {
            const { rotate, opacity } = state
            return (
                <div className="featured_number"
                  style={{          
                    opacity,
                    transform: `translate(260px,100px) rotateY(${rotate}deg)`,
                  }}
                >
                3</div>
            )
          }} 
          </Animate>
        )

        animateFirst = () => (
            <Animate 
                show={true}
                start={() => ({
                   opacity:0,
                   x:'400',
                   y:'450'
                  })}
        
                  enter={() => ({
                    opacity:[1],
                    x:[285],
                    y:[380],
                    timing:{duration:1000, ease:easePolyOut}
        
                  })}
        
                  >
                     {(state) => {
                    const { opacity, x, y } = state
                    return (
                        <div className="featured_first"
      m                    style={{          
                            opacity,
                            transform: `translate(${x}px,${y}px)`,
                            zIndex:3
                          }}
                        >
                        League</div>
                    )
                  }} 
                  </Animate>
                )

    animateSecond = () => (
        <Animate 
        show={true}
        start={() => ({
           opacity:0,
           x:'400',
           y:'550'
          })}

          enter={() => ({
            opacity:[1],
            x:[285],
            y:[500],
            timing:{duration:1500, ease:easePolyOut}

          })}

          >
             {(state) => {
            const { opacity, x, y } = state
            return (
                <div className="featured_first"
m                    style={{          
                    opacity,
                    transform: `translate(${x}px,${y}px)`,
                    zIndex:5
                  }}
                >
                Championships</div>
            )
          }} 
          </Animate>
    
    )
    
    animatePlayer = ()=> (
    <Animate 
    show={true}
    start={() => ({
       opacity:0
      })}

      enter={() => ({
        opacity:[1],
        timing:{ delay:1000, duration:2000, ease:easePolyOut}

      })}

      >
         {(state) => {
        const { opacity } = state
        return (
            <div className="featured_player"
m                    style={{          
                opacity,
                backgroundImage:`url(${featuredPlayer})`,
                transform: `translate(${650}px,${50}px)`,
                zIndex:2
              }}
            >
            League</div>
        )
      }} 
      </Animate>   
    )
    
    render() { 
        return ( 
            <div className="featured_text">
             {this.animatePlayer()}
            {this.animateNumber()}
            {this.animateFirst()}
            {this.animateSecond()}
         
            </div>
         );
    }
}
 
export default Text;