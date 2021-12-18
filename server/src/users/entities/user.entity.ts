import { Column, Entity } from "typeorm";


@Entity()
export class UserEntity {

    @Column({ default: "Jethro"})
    private first: string;

    @Column({ default: "Cornelius"})
    private middle: string;

    @Column({ default: "Backswamp"})
    private last: string;

    @Column({ default: new Date().toUTCString()})
    private dob: string;

    @Column({ default: 1})
    private employeeId: number;

    @Column({ default: "customer"})
    private status: string;


    constructor(newFirst: string, newMiddle: string, newLast: string, newDob: string, newEmployeeId: number, newStatus: string) {
        this.first = newFirst;
        this.middle = newMiddle;
        this.last = newLast;
        this.dob = newDob;
        this.employeeId = newEmployeeId;
        this.status = newStatus;
    };

}