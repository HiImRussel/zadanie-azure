/** Dotenv */
import dotenv from "dotenv";

/** Body parser */
import bodyParser from "body-parser";

/** Constants */
import { DEFAULT_APP_PORT } from "../constants/base.constants";

dotenv.config();
const jsonParser = bodyParser.json();

const apiPort = process.env.API_PORT || DEFAULT_APP_PORT;

export { apiPort, jsonParser };
