import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import { router } from "./infrastructure/routes";
import "reflect-metadata";
import {initConnection} from "./infrastructure/persistences/connector";
import * as bodyParser from "body-parser";
import { initKeycloak } from "./config/keycloak";

initConnection();

const app = express();

const keycloak = initKeycloak();
app.use(cors());
console.log('Middleware')
app.use(keycloak.middleware());
app.use(morgan("dev"));
//app.options('*', cors())

app.use(bodyParser.json())

app.use(router)

app.use((err, req, res, next) => {
    res.status(500).send({
        error: {
            message: err.message,
            status: 500
        }
    })
})

app.listen("3000", () => {
    console.log("Server started on port: 3000")
})
