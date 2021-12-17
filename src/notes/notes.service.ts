import { Injectable } from "@nestjs/common";
import { Note } from "./interfaces/Note";
import { Note as NoteEntity } from "./entities/note.entity";
import { getMongoManager, getMongoRepository, MongoEntityManager, MongoRepository } from "typeorm";

@Injectable()
export class NotesService {

    private manager: MongoEntityManager;

    async create(note: Note){
        this.manager = getMongoManager("mongo");
        await this.manager.save(new NoteEntity(note.message, note.sender, note.date));
    }

    async findAll(): Promise<NoteEntity[]> {
        const noteEntities: NoteEntity[] = [];
        this.manager = getMongoManager("manager");
        await this.manager.find(NoteEntity)
        .then((result) => result.forEach((eachNote) => noteEntities.push(eachNote)))
        .catch((err) => {
            throw new Error("error finding all notes");
        })
        return noteEntities;
    }

};
