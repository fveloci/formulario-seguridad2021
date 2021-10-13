import {Contact} from "./contact";
import {Address} from "./address";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        default: null
    })
    name: string;
    @Column({
        default: null
    })
    dni: number;
    @Column({
        default: null
    })
    contact: number;
    @Column({
        default: null
    })
    address: number;
}