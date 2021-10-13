import * as express from "express";
import { postClient } from "../../interface/handlers/client";
import {getKeycloak} from "../../config/keycloak";

const keycloak = getKeycloak();
export const router = express();

router.post("/client/save", keycloak.protect('admin'), postClient);