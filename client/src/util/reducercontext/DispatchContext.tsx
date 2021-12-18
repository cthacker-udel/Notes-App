import React from "react";
import { NoteAction } from "../../interfaces/NoteAction";

export const DispatchContext = React.createContext<{ dispatch: React.Dispatch<NoteAction>} | undefined>(undefined);