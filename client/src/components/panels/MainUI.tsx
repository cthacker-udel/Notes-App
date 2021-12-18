import React from "react";
import { useQuill } from "react-quilljs";
import { NoteNavbar } from "../navbars/NoteNavbar";
import { NotesTable } from "../tables/NotesTable";

export const MainUI = () => {

    const { quill, quillRef } = useQuill();

    return(

        <>
            <NoteNavbar />
            <NotesTable />
        </>

    )

}
