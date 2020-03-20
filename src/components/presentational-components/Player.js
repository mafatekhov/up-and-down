import React from 'react';

function Player(props) {
    const {data} = props;
    return (
        <li>
            {data.name}
        </li>
    );
}

export default Player;
