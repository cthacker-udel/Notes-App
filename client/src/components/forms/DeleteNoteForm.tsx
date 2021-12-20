import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { UseDispatchContext } from "../../util/reducerlogic/UsingContext/UseDispatchContext";
import { UseStateContext } from "../../util/reducerlogic/UsingContext/UseStateContext";
import { NoteNavbar } from "../navbars/NoteNavbar";

export const DeleteNoteForm = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    const ids = new Set(state.notes.map((eachNote) => eachNote.sender));

    console.log("ids = ", ids);

    const removeNote = (sender: string): void => {
        fetch(`http://localhost:3005/notes/${sender}`, 
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache"
            }
        );
        dispatch({type: "removeNoteBySender", payload: { ...state, addedNote: {
            sender: sender,
            message: "",
            date: ""
        }}});
    };

    return(

        <>

            <NoteNavbar />
            <br />
            <ListGroup>

                {
                    Array.from(ids.values()).map((eachId) => {
                        return(
                        <ListGroup.Item>
                            <Button variant="danger" style={{ textAlign: "center"}} onClick={() => removeNote(eachId)}>
                                {eachId}
                            </Button>
                        </ListGroup.Item>
                        );
                    })
                }
                
            </ListGroup>  
        
        </>

    );


};
