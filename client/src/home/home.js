import { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import Context from '../context';

class Home extends Component {
    static contextType = Context;

    constructor() {
        super();

        this.state = {
            inputValue: '',
            showInput: false,
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
            console.log(response.err);
            this.setState({ message: response.err });
            return;
        }

        this.context.setRoomKey(response.key);
    }

    render() {
        return (
            <div>
                <Link to="/teams" onClick={() => this.createRoom()}>Create a room</Link>
                <p onClick={() => this.setState({ showInput: !this.state.showInput })}>Join room</p>

                <form onSubmit={event => this.joinRoom(event)}>
                    <input type="text" onChange={this.handleInputChange}></input>
                    <input type="submit" value="Join room" />
                </form>

                <p>{this.state.message}</p>

                {this.context.roomKey && <Redirect exact to="/teams"></Redirect>}
            </div>
        )
    }
}

export default Home;