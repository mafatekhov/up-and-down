import React, {Component} from 'react';
import PlayersList from "../presentational-components/PlayersList";

class NewGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    id: 1,
                    name: 'Artyom',
                    score: 0
                },
                {
                    id: 2,
                    name: 'Yarik',
                    score: 0
                },
                {
                    id: 3,
                    name: 'Alexander',
                    score: 0
                },
                {
                    id: 4,
                    name: 'Marat',
                    score: 0
                },
            ]
        };

    }

    addPlayer = () => {
        const newPlayer = {
            id: 5,
            name: 'Nikita',
            score: 0
        };
        this.setState(state => (
            {
                players: [...state.players, newPlayer]
            }));
    };

    render() {
        let title = 'Players';
        return (
            <div>
                <h2>Start New Game</h2>

                <div className="container">
                    <div className="row">
                        <PlayersList title={title} players={this.state.players}/>
                    </div>
                    <button onClick={this.addPlayer}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default NewGame;