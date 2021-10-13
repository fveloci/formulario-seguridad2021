import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        default: null
    })
    street: string;
    @Column({
        default: null
    })
    number: number;
}