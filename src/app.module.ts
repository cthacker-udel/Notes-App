import { MongoDBConfiguration } from './../config/mongodbconfig';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/notes/Note';
import { NotesService } from './notes/notes.service';

@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
