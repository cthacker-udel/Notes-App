import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Note {

    @ObjectIdColumn()
    id: number;

    @Column()
    message: string;

    @Column()
    sender: string;

    @Column({ default: new Date().toUTCString()})
    date: string;

    constructor(message: string, sender: string, date: string) {
        this.message = message;
        this.sender = sender;
        this.date = date;
    }

};
