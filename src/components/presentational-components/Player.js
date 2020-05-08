import React from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import RemovePlayer from "../containers/RemovePlayer";

function Player(props) {
    const {data} = props;
    return (
        <div className='player'>
            <ListGroupItem variant="info" className='player-name'>
                {data.name}
            </ListGroupItem>
            <RemovePlayer playerId={data.id}/>
        </div>
    );
}

export default Player;
