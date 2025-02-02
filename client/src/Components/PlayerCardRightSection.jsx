import React from 'react'
import players from "../data/playerdata.js";
import PlayerStatsBarChart from './PlayerCardBarChart.jsx';
import PlayerScoreDial from './PlayerScoreDial.jsx';
const PlayerCardRightSection = () => {

    const player = players[0]

    return (
        <div>
            <PlayerStatsBarChart player={player} />
            <PlayerScoreDial player={player} />
        </div>
    )
}

export default PlayerCardRightSection