import { CreateNoteDto } from './create-note.dto';
import { Body, Controller, Get, HttpCode, Ip, Param, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";
import { NotesService } from './notes.service';
import { Note } from 'src/interfaces/Note';


@Controller('notes')
export class NotesController{

    constructor(private notesService: NotesService) {}

    @Post()
    async create(@Body() body: CreateNoteDto) {
        this.notesService.create({
            message: body.content,
            sender: body.creator,
            date: body.date
        });
    }

    @Get('all')
    getAll(): Note[] {
        return this.notesService.findAll();
    }

    @Get(':id')
    getOne(@Param('sender') id: string): Note[]{
        return this.notesService.findAll().filter((eachNote) => eachNote.sender === id);
    }

}