import { CreateNoteDto } from './dto/create-note.dto';
import { Body, Controller, Get, HttpCode, Ip, Param, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";
import { NotesService } from './notes.service';
import { Note } from './interfaces/Note';
import { Note as NoteEntity } from './entities/note.entity';


@Controller('notes')
export class NotesController{

    constructor(private notesService: NotesService) {}

    @Post()
    async create(@Body() body: CreateNoteDto) {
        this.notesService.create({
            message: body.message,
            sender: body.sender,
            date: body.date
        });
    }

    @Get('all')
    async getAll() {
        const noteEntities: NoteEntity[] = [];
        this.notesService.findAll()
        .then((noteEntityArray) => {
            noteEntityArray.forEach((eachNote) => noteEntities.push(eachNote))
        })
        .catch((error) => {
            console.log("erorr with getting all notes");
        });
        return noteEntities;
    }

    @Get(':id')
    getOne(@Param('sender') id: string): NoteEntity[] {
        const foundNotes: NoteEntity[] = [];

    }

}