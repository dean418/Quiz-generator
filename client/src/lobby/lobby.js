import { useContext } from 'react';
import {KeyContext, NameContext} from '../context';
import Input from './userNameInput';
import Team from './team';

import './lobby.css';

let exampleTeams = [
    {name: 'Team-1'},
    {name: 'Team-2'},
    {name: 'Team-3'},
    {name: 'Team-4'},
    {name: 'Team-5'},
    {name: 'Team-6'},
]

const Lobby = () => {
    const key = useContext(KeyContext);
    const userName = useContext(NameContext);

    return (
        <div className='teamContainer'>
            {!userName.userName && <Input></Input>}

            <h3 className='notice'>You can join this room using the key: <span>{key.roomKey}</span></h3>
            <h1 className='title'>Contestants</h1>
            <div className='names'>
                {exampleTeams.map(team => <Team name={team.name}/>)}
            </div>
        </div>
    );
}

export default Lobby;