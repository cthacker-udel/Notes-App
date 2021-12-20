import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useQuill } from "react-quilljs";
import { UseDispatchContext } from "../../util/reducerlogic/UsingContext/UseDispatchContext";
import { UseStateContext } from "../../util/reducerlogic/UsingContext/UseStateContext";
import { NoteNavbar } from "../navbars/NoteNavbar";

export const AddNoteForm = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    const [theSender, setTheSender] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const { quill, quillRef } = useQuill();

    useEffect(() => {

        if (quill) {
            quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
                //console.log("Text Change!");
                //console.log(quill.getText());
                //console.log(quill.getContents());
                //console.log(quill.root.innerHTML);
                //console.log(quillRef.current.firstChild.innerHTML);
                setMessage(quillRef.current.firstChild.innerHTML);
            });
        }

    }, [quill]);

    const submitNote = () => {
        console.log("in submit note, msg = ", message);
        if (message.length > 0 && theSender.length > 0) {
            dispatch({type: "addNote", payload: { ...state, addedNote: {
                sender: theSender,
                message: message,
                date: new Date().toUTCString()
            }}});
        }
    }


    return(

        <>
            <NoteNavbar />
            <br />
            <br />
            <br />
            <Form>

                <Form.Group className="mb-3" controlId="basic-sender-name-form">
                    <Form.Label>Sender</Form.Label>
                    <Form.Control type="text" placeholder="enter sender's name here" onChange={(e) => {
                        setTheSender(e.target.value);
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="basic-message-form">

                    <Form.Label>Message</Form.Label>
                    <div ref={quillRef}></div>

                </Form.Group>

            </Form>
            <br />
            <Container style={{ textAlign: "center"}}>
                    <Row>
                        <Col>
                            <Button variant="outline-primary" onClick={() => submitNote()}>
                                Submit Note
                            </Button>
                        </Col>
                    </Row>
            </Container>
        
        </>


    );



};