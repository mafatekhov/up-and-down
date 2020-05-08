import React from 'react';
import {connect} from "react-redux";
import {removePlayer} from "../../actions";
import {Trash} from 'react-bootstrap-icons';

const RemovePlayer = (props) => {
    const {playerId, dispatch} = props;
    return (
        <Trash onClick={() => {
            dispatch(removePlayer(playerId));
        }}/>
    )
};

export default connect()(RemovePlayer);
