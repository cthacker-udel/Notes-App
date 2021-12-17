import { MongoDBConfiguration } from './../../config/mongodbconfig';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";
import { Note } from './entities/note.entity';

@Module({
    imports: [],
    providers: [NotesService],
    controllers: [NotesController],
    exports: [NotesService]
})
export class NotesModule {};