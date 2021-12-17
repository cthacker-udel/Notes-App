import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @Column()
    sender: string;

    @Column({ default: new Date().toUTCString()})
    date: string;

};
