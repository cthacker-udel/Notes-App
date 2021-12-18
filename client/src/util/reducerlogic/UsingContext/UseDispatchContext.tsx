import React from "react";
import { NoteAction } from "../../../interfaces/NoteAction";
import { DispatchContext } from "../../reducercontext/DispatchContext";

export const UseDispatchContext = (): { dispatch: React.Dispatch<NoteAction> } => {
    const dispatch = React.useContext(DispatchContext);
    if (dispatch === undefined) {
        throw new Error("Unable to access Dispatch Context");
    }
    return dispatch;
};
