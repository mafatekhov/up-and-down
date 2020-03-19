import React, {Component} from 'react';
import PlayersList from "./PlayersList";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./Home";
import NewGame from "./NewGame";


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
            // <div className="container">
            //     <div className="row">
            //         <PlayersList title={title} players={this.state.players}/>
            //     </div>
            //     <button onClick={this.addPlayer}>
            //         Add
            //     </button>
            // </div>
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/new'} className="nav-link"> New Game </Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/new' component={NewGame}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
