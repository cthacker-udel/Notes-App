import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { MainUI } from "./panels/MainUI";
import { StateContext } from "../util/reducercontext/StateContext";
import { DispatchContext } from "../util/reducercontext/DispatchContext";
import { NoteDispatcher } from "../util/reducerlogic/DispatchFunctions/NoteDispatcher";
import InitialState from "../assets/InitialState";
import { AddNoteForm } from "./forms/AddNoteForm";
import { Note } from "../interfaces/Note";

export const MainPage = () => {

    const [state, dispatch] = useReducer(NoteDispatcher, InitialState);

    useEffect(() => {

        fetch("http://localhost:3005/notes/all").then((allNotes) => {
            allNotes.json().then((jsonResponse: Note[]) => {
                jsonResponse.forEach((eachNote: Note) => {
                    dispatch({type: "addNote", payload: { ...state, addedNote: eachNote}});
                })
            });
        });
    },[]);

    const stateValue = { state };
    const dispatchValue = { dispatch };

    return(

        <BrowserRouter>
        
            <Routes>


                <Route path="*" element={
                        <DispatchContext.Provider value={dispatchValue}>
                            <StateContext.Provider value={stateValue}>
                                <MainUI />
                            </StateContext.Provider>
                        </DispatchContext.Provider>
                    }
                />
                <Route path="/addNote" element={
                    <DispatchContext.Provider value={dispatchValue}>
                        <StateContext.Provider value={stateValue}>
                            <AddNoteForm />
                        </StateContext.Provider>
                    </DispatchContext.Provider>
                }
                />
                <Route path="/" element={<Navigate to="/mainpage" />} />

            </Routes>

        </BrowserRouter>
    
    
    );
};