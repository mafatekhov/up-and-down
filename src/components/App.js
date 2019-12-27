import React, {Component} from 'react';
import PlayersList from "./PlayersList";

class App extends Component {
    constructor() {
        super();
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


    render() {
        let title = 'Players';
        return (
            <div className="container">
                <div className="row">
                    <PlayersList title={title} players={this.state.players}/>
                </div>
            </div>
        );
    }
}

export default App;
