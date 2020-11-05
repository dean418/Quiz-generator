import { createContext } from 'react';

const Context = createContext({
    roomKey: null,
    setRoomKey: () => {}
});

export default Context;