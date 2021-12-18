import { Test, TestingModule } from "@nestjs/testing";
import { NotesController } from "../notes/notes.controller";


describe('NotesController', () => {

    let notesController: NotesController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [NotesController]
        }).compile();
        notesController = app.get<NotesController>(NotesController);
    });

    describe('root', () => {
        it('should return One Note', () => {
            expect(notesController.getOne('cthacker')).toBe('One note');
        })
    })
});