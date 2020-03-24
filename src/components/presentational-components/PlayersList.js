import React from 'react';
import Player from './Player'
import AddPlayer from "../containers/AddPlayer";

function PlayersList(props) {
    const {title, players} = props;
    return (
        <div className="players-list">
            <h1>{title}</h1>
            <ul>
                {players.map(player => <Player key={player.id} data={player}/>)}
            </ul>
            <AddPlayer/>
        </div>
    );
}

export default PlayersList;
