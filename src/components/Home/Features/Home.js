import React from 'react';
import Featured from './Featured';
import MatchesHome from '../Matches/MatchesHome';
import MeetPlayers from '../MeetPlayers/MeetPlayers';
import Promotion from '../Promotion/Promotion';
const Home = () => {
    return (
        <div className="bck_blue">
            <Featured />
            <MatchesHome />
            <MeetPlayers />
            <Promotion />
        </div>
      );
}
 
export default Home;