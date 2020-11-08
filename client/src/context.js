import { createContext } from 'react';

export const KeyContext = createContext({
    roomKey: null,
    setRoomKey: () => {},
});

export const NameContext = createContext({
    userName: null,
    setUserName: () => {}
});