import { CreateNoteDto } from './dto/create-note.dto';
import { Body, Controller, Get, HttpCode, Ip, Param, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";
import { NotesService } from './notes.service';
import { Note } from './interfaces/Note';
import { Note as NoteEntity } from './entities/note.entity';
import { resolve } from 'path/posix';


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
    };

    @Get('all')
    getAll(): Promise<NoteEntity[]> {
        return this.notesService.findAll()
    };

    @Get(':id')
    getOne(@Param('id') id: string): Promise<NoteEntity> {
        return this.notesService.findOne(id);
    };

    @Get('all/:id')
    getAllBySender(@Param('id') id: string): Promise<NoteEntity[]> {
        return this.notesService.findAllBySender(id);
    };

}