import React, {Component} from 'react';
import PlayersList from "./presentational-components/PlayersList";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./containers/Home";
import NewGame from "./containers/NewGame";


class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
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
