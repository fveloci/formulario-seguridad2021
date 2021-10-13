import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        default: null
    })
    phone: string;
    @Column({
        default: null
    })
    email: string;
}