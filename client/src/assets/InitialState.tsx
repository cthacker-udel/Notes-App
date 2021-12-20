import { State } from "../interfaces/State";

export const InitialState: State = {
    notes: [],
    addedNote: {
        sender: "",
        message: "",
        date: ""
    }
};

export default InitialState;