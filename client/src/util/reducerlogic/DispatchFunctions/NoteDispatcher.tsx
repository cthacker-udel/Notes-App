import { NoteAction } from "../../../interfaces/NoteAction";
import { State } from "../../../interfaces/State";
import produce from "immer";

export const NoteDispatcher = (action: NoteAction, state: State): State => {

    switch (action.type) {

        default: {
            return {...state};
        }

    }

}