import { useContext } from 'react';
import {KeyContext, NameContext} from '../context';
import Input from './userNameInput';
import './lobby.css';

const Lobby = () => {
    const key = useContext(KeyContext);
    const userName = useContext(NameContext);

    return (
        <div className='teamContainer'>
            {!userName.userName && <Input></Input>}

            <h3 className='notice'>You can join this room using the key: <span>{key.roomKey}</span></h3>
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