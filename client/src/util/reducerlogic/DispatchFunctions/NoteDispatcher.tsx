import { NoteAction } from "../../../interfaces/NoteAction";
import { State } from "../../../interfaces/State";
import produce from "immer";

export const NoteDispatcher = (state: State, action: NoteAction): State => {

    switch (action.type) {

        case "addNote": {
            return produce(state, (draft) => {
                draft.notes = [...draft.notes, action.payload.addedNote];
            });
        }

        case "removeNoteBySender": {
            return produce(state, (draft) => {
                const senderToDelete = action.payload.addedNote.sender;
                draft.notes = draft.notes.filter((eachNote) => eachNote.sender !== senderToDelete);
            })
        }

        default: {
            return {...state};
        }

    }

}