import { createContext } from "react";

const Context = createContext({
    roomKey: null,
    setRoomKey: function (key) {
        this.roomKey = key;
    }
});

export default Context;