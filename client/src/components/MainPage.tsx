import React, { useReducer } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { MainUI } from "./panels/MainUI";
import { StateContext } from "../util/reducercontext/StateContext";
import { DispatchContext } from "../util/reducercontext/DispatchContext";
import { NoteDispatcher } from "../util/reducerlogic/DispatchFunctions/NoteDispatcher";
import InitialState from "../assets/InitialState";

export const MainPage = () => {

    const [state, dispatch] = useReducer(NoteDispatcher, InitialState);

    const { 
        notes
    } = state;

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
                <Route path="/" element={<Navigate to="/mainpage" />} />

            </Routes>

        </BrowserRouter>
    
    
    );
};