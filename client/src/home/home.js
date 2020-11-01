import { useContext } from 'react';
import { Link } from "react-router-dom";

import Context from '../context';

const createRoom = (setRoomKey) => {
    fetch('http://localhost:3001/room/create')
        .then(response => response.json())
        .then(response => setRoomKey(response.key));
}

const Home = () => {
    const {setRoomKey} = useContext(Context);

    return (
        <div>
            <Link to="/teams" onClick={() => createRoom(setRoomKey)}>Create a room</Link>
        </div>
    )
}

export default Home;