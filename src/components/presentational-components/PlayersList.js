import React from 'react';
import Player from './Player'
import AddPlayer from "../containers/AddPlayer";
import ListGroup from "react-bootstrap/ListGroup";

function PlayersList(props) {
    const {title, players} = props;
    return (
        <div>
            <AddPlayer/>
            <h1>{title}</h1>
            <ListGroup className="players-list">
                {players.map(player => <Player key={player.id} data={player}/>)}
            </ListGroup>
        </div>
    );
}

export default PlayersList;
