import express from "express";
import regions from "./routes/regions.routes.js";
import communes from "./routes/communes.routes.js";
import proteins from "./routes/proteins.routes.js";
import products from "./routes/products.routes.js";
const app = express();

app.use(express.json());

app.use('/api', regions);
app.use('/api', communes);
app.use('/api', proteins);
app.use('/api', products);

import { PORT } from "./config.js";

app.use((req, res, next) => {
  res.status(404).json({
    message: "api Not found"
  });
})


app.listen(PORT,
  () => console.log(`Server running on port ${PORT}`));