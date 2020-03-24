import React from 'react';
import PlayersList from "../presentational-components/PlayersList";
import {addPlayer} from "../../actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    title: 'Players',
    players: state.players
});

// const mapDispatchToProps = dispatch => ({
//     addPlayer: (name) => dispatch(addPlayer(name))
// });

export default connect(
    mapStateToProps,
)(PlayersList)
