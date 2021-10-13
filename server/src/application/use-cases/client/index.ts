import { Client } from "../../../domain/entities/client";
import {ClientDTO} from "../../../domain/dtos/clientDTO";
import {getManager} from "typeorm";
import {Contact} from "../../../domain/entities/contact";
import {Address} from "../../../domain/entities/address";

export const saveClient = async (client: ClientDTO): Promise<ClientDTO> => {

    await getManager().transaction(async manager => {
        await manager.insert(Contact, client.contact)
        await manager.insert(Address, client.address)

        let clientEntity: Client = new Client();
        clientEntity.name = client.name;
        clientEntity.dni = client.dni;
        clientEntity.contact = client.contact.id;
        clientEntity.address = client.address.id;

        await manager.insert(Client, clientEntity);
        client.id = clientEntity.id;
    })

    return client;
}