import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import auth from "./authentication";

let corsOptions: cors.CorsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
};

let bodyParserOptions: bodyParser.OptionsUrlencoded = {
  extended: false,
};

let app = express();
app.use(auth);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded(bodyParserOptions));

export default app;