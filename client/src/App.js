import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Context from './context';

import Home from './home/home';
import Teams from './teams/teams';

const App = () => {
    const [roomKey, setRoomKey] = useState(null);

    const value = { roomKey, setRoomKey };

    return (
        <Context.Provider value={value}>
            <Router>
                <div className="App" >
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/teams" component={Teams} />
                    </Switch>
                </div>
            </Router>
        </Context.Provider>
    );
}

export default App;