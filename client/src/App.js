import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Context from './context';

import Home from './home/home';
import Lobby from './lobby/lobby';

const App = () => {
    const [roomKey, setRoomKey] = useState(null);

    const value = { roomKey, setRoomKey };

    return (
        <Router>
            <div className='App' >
                <Switch>
                    <Context.Provider value={value}>
                        <Route exact path='/' component={Home} />
                        <Route path='/lobby' component={Lobby} />
                    </Context.Provider>
                </Switch>
            </div>
        </Router>
    );
}

export default App;