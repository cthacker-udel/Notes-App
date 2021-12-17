import { CreateNoteDto } from './create-note.dto';
import { Body, Controller, Get, HttpCode, Ip, Param, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";


@Controller('notes')
export class NotesController{

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    create(@Body() body: CreateNoteDto): string{
        return 'This action is creating a note';
    }

    @Get('all')
    getAll(): string[] {
        return ['note1','note2'];
    }

    @Get(':id')
    getOne(@Param('id') id: string): string{
        console.log("params = ", id);
        return 'One note';
    }

}