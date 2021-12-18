import { MongoDBConfiguration } from './../config/mongodbconfig';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Connection, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { Note as NoteEntity } from './notes/entities/note.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const connection: Connection = await createConnection(
    {
        type: "mongodb",
    ...MongoDBConfiguration,
    entities: [NoteEntity]

    }
  )

  await app.listen(3000);
}
bootstrap();