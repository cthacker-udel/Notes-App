import { UseStateContext } from "../../util/reducerlogic/UsingContext/UseStateContext";
import { Table } from "react-bootstrap";

export const NotesTable = (): JSX.Element => {

    const { state } = UseStateContext();

    return(

        <Table>
            <thead>
                <tr>
                    <th>Sender</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.notes.map((eachNote, index) => {
                        return(
                        <tr key={index} >
                            <td>{eachNote.sender}</td>
                            <td>{eachNote.message}</td>
                            <td>{eachNote.date}</td>
                        </tr>
                        );
                    })
                }
            </tbody>

        </Table>

    );

}