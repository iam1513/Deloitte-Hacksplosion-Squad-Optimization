import React from 'react'
import players from "../data/playerdata.js";
import PlayerStatsBarChart from './PlayerCardBarChart.jsx';
import PlayerScoreDial from './PlayerScoreDial.jsx';
import "../Styles/player-card.css"
const PlayerCardRightSection = () => {

    const player = players[0]

    return (
        <div className='player-card-right-section'>
            <PlayerStatsBarChart player={player} />
            <PlayerScoreDial player={player} />
        </div>
    )
}

export default PlayerCardRightSection