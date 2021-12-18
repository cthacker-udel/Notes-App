import { State } from "./State";

export interface NoteAction{
    type: string,
    payload: State
};
