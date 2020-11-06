import { useContext } from 'react';

import Context from '../context';
import './lobby.css';

const Lobby = () => {
    const state = useContext(Context);

    return (
        <div className='teamContainer'>
            <h3 className='notice'>You can join this room using the key: <span>{state.roomKey}</span></h3>
            <h1 className='title'>Contestants</h1>
            <div className='names'>
                <div className='team'>
                    <p>team A</p>
                </div>
                <div className='team'>
                    <p>team B</p>
                </div>
                <div className='team'>
                    <p>team C</p>
                </div>
                <div className='team'>
                    <p>team D</p>
                </div>
                <div className='team'>
                    <p>team E</p>
                </div>
                <div className='team'>
                    <p>team F</p>
                </div>
            </div>
        </div>
    );
}

export default Lobby;