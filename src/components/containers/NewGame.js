import React from 'react';
import PlayersList from "../presentational-components/PlayersList";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    title: 'Players',
    players: state.players
});


export default connect(
    mapStateToProps,
)(PlayersList)
