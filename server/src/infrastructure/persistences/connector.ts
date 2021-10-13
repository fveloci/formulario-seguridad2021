import { createConnection } from "typeorm";

export const initConnection = () => {
    createConnection({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "",
        "database": "example",
        migrationsRun: true,
        synchronize: true,
        entities: [
            "src/domain/entities/*.ts"
        ]
    }).then((connection) => {
        console.log("DB success connection")
    }).catch((error) => {
        console.log(error)
        console.log("DB error connection")
    })
}
