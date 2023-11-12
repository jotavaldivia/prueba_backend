import express from "express";
import regions from "./routes/regions.routes.js";
import communes from "./routes/communes.routes.js";
import proteins from "./routes/proteins.routes.js";
import products from "./routes/products.routes.js";
const app = express();

app.use(express.json());

import {
  PORT_SERVER
} from "../config.js";

app.use('/api',regions);
app.use('/api',communes);
app.use('/api',proteins);
app.use('/api',products);

app.use((req, res, next)=>{
  res.status(404).json({
    message: "api Not found"
  });
})

app.listen(process.env.PORT_SERVER, () => {
  console.log("Example app listening on port " + PORT_SERVER);
});