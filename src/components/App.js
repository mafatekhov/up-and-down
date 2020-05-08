import React, {Component} from 'react';
import NewGame from "./containers/NewGame";


class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="app-container">
                <NewGame/>
            </div>

        );
    }
}

export default App;
