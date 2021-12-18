import { NoteAction } from "../../../interfaces/NoteAction";
import { State } from "../../../interfaces/State";
import produce from "immer";

export const NoteDispatcher = (state: State, action: NoteAction): State => {

    switch (action.type) {

        default: {
            return {...state};
        }

    }

}