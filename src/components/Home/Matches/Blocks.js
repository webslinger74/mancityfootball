import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../UI/misc';
import MatchesBlock from '../../UI/MatchesBlock';
import Slide from 'react-reveal/Slide';

class Blocks  extends Component {
  
        state = {
            matches:[]
        }


    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            // will return array of matches
                const matches = firebaseLooper(snapshot);
                this.setState({
                    matches:reverseArray(matches)
                })
        })
        console.log(this.state.matches);
    }


    showMatches = (matches) => (
        matches ?
        matches.map((element,i) => (
            <Slide bottom key={element.id}>
            <div key={i} className="item">
                <div className="wrapper">
                <MatchesBlock match={element}/>
                </div>
            </div> 
            </Slide>
         ) )
         :null
    )
    


    render() { 
        return ( 
        <div className="home_matches">
            {this.showMatches(this.state.matches)}


        </div>

         );
    }
}
 export default Blocks;
