import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { KeyContext, NameContext } from './context';

import Home from './home/home';
import Lobby from './lobby/lobby';

const App = () => {
    const [roomKey, setRoomKey] = useState(null);
    const [userName, setUserName] = useState(null);

    const key = { roomKey, setRoomKey };
    const name = { userName, setUserName };

    return (
        <Router>
            <div className='App' >
                <Switch>
                    <NameContext.Provider value={name}>
                        <KeyContext.Provider value={key}>
                            <Route exact path='/' component={Home} />
                            <Route path='/lobby' component={Lobby} />
                        </KeyContext.Provider>
                    </NameContext.Provider>
                </Switch>
            </div>
        </Router>
    );
}

export default App;