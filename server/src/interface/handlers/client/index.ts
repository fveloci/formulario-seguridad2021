import {saveClient} from "../../../application/use-cases/client";
import {ClientDTO} from "../../../domain/dtos/clientDTO";

export const postClient = async (req, res) => {
    let client: ClientDTO = req.body;
    try {
        client = await saveClient(client);
        res.status(200).send(client);
    } catch (e) {
        res.status(500).send({
            error: {
                message: e.message
            }
        });
    }
}