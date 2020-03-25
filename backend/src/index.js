const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Driver - Select * from users
 * Query builder - table('users').select('*').where(...); - ex KNEX.JS
 */

app.listen(3333);