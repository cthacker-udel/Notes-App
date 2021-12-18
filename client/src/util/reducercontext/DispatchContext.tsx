import React from "react";
import { NoteAction } from "../../interfaces/NoteAction";

export const DispatchContext = React.createContext<React.Dispatch<NoteAction> | undefined>(undefined);