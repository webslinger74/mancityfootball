import React, { PureComponent } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';


class Stripes2 extends PureComponent {
 
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
                    top:-498,
                    delay:400
                }
            ]
         }
    

    showStripes = () => {
        console.log("is this being called");
        this.state.stripes.map((stripe,i) => {
        return (
            <Animate 
                show={true}

                start={{
                    background:'#ffffff'
                             }}
              
                enter={{
                    background:`${stripe.background}`,
                       }}>
                
                {(state) => {
                    const { background } = state.start;
                return  (
                        <div
                        className="stripe"
                        style={{
                            background:background
                        }}
        
                        ></div>
                    )
                }



             } </Animate>

            )
        })
            }
    
    render() {

    return (

            <div className="featured_stripes">
                 {this.showStripes()}
            </div>    
    )}

    }
 
export default Stripes2;