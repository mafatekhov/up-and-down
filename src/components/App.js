import React, {Component} from 'react';
import PlayersList from "./PlayersList";

class App extends Component {
    constructor(props) {
        super(props);
        const initialState = {
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
        this.state = initialState;

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
            <div className="container">
                <div className="row">
                    <PlayersList title={title} players={this.state.players}/>
                </div>
                <button onClick={this.addPlayer}>
                    Add
                </button>
            </div>
        );
    }
}

export default App;
