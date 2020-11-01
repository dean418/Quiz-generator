import './App.css';
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    constructor() {
        super();

        this.state = {
            key: ''
        }
    }

    createRoom = () => {
        fetch('http://localhost:3001/room/create')
            .then(response => response.json())
                .then(response => this.setState({key: response.key}));
    }

    render () {
        return (
            <div className = "App" >
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="roomBtns">
                        <button onClick={this.createRoom}>Create a room</button>
                        <button>Join a room</button>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;