import { Injectable } from "@nestjs/common";
import { Note } from "./interfaces/Note";
import { Note as NoteEntity } from "./entities/note.entity";
import { DeleteResult, getMongoManager, getMongoRepository, MongoEntityManager, MongoRepository } from "typeorm";

@Injectable()
export class NotesService {

    private manager: MongoEntityManager;

    async create(note: Note){
        this.manager = getMongoManager("mongo");
        await this.manager.save(new NoteEntity(note.message, note.sender, note.date));
    };

    async findAll(): Promise<NoteEntity[]> {
        this.manager = getMongoManager("mongo");
        return await this.manager.find(NoteEntity);
    };

    async findOne(senderName: string): Promise<NoteEntity> {
        return await getMongoManager("mongo").findOne(NoteEntity, { "sender": senderName });
    };

    async findAllBySender(senderName: string): Promise<NoteEntity[]> {
        return await getMongoManager("mongo").find(NoteEntity, { "sender" : senderName});
    };

    async deleteAllBySender(senderName: string): Promise<DeleteResult> {
        return await getMongoManager("mongo").delete(NoteEntity, { sender: senderName });
    }

};
