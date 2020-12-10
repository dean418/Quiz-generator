import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './home.css';
import { KeyContext } from '../context';

class Home extends Component {
    static contextType = KeyContext;

    constructor() {
        super();

        this.state = {
            inputValue: '',
            message: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    createRoom() {
        fetch('http://localhost:3001/room/create')
            .then(response => response.json())
            .then(response => this.context.setRoomKey(response.key));
    }

    async joinRoom(event) {
        event.preventDefault();

        let response = await fetch('http://localhost:3001/room/join', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ roomKey: this.state.inputValue })
        });

        response = await response.json();

        if (response.err) {
            this.setState({ message: response.err });
            return;
        }

        this.context.setRoomKey(response.key);
    }

    render() {
        return (
            <div className='homeContainer'>
                <span className='joinContainer'>
                    <div className='join'>
                        <form onSubmit={event => this.joinRoom(event)}>
                            <input type='text' onChange={this.handleInputChange} className='keyInput'></input>
                            <br/>
                            <input type='submit' value='Join room' className='submit'/>
                        </form>
                        <p className='error'>{this.state.message}</p>
                    </div>
                </span>

                <span className='createContainer'>
                    <div className='create'>
                        <Link to='/lobby' onClick={() => this.createRoom()} className='createBtn'>Create a room</Link>
                    </div>
                </span>

                {this.context.roomKey && <Redirect exact to='/lobby'></Redirect>}
            </div>
        )
    }
}

export default Home;