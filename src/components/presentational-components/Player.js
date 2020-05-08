import React from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Player(props) {
    const {data} = props;
    return (
        <ListGroupItem variant="info">
            {data.name}
        </ListGroupItem>
    );
}

export default Player;
