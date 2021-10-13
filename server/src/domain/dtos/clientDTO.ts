import {stat} from "fs";

export class ClientDTO {
    id: number;
    name: string;
    dni: number;
    contact: {
        id: number;
        email: string;
        phone: string;
    }
    address: {
        id: number;
        street: string;
        number: number;
    }
}