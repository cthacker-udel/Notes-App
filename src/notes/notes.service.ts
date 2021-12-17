import { Injectable } from "@nestjs/common";
import { Note } from "./interfaces/Note";

@Injectable()
export class NotesService {

    private readonly notes: Note[] = [];

    create(note: Note){
        this.notes.push(note);
    }

    findAll(): Note[] {
        return this.notes;
    }

};
