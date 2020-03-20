import React from 'react';
import Player from './Player'

function PlayersList(props) {
    const {title, players} = props;
    return (
        <div className="players-list">
            <h1>{title}</h1>
            <ul>
                {players.map(player => <Player key={player.id} data={player}/>)}
            </ul>
        </div>
    );
}

export default PlayersList;
