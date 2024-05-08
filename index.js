const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

const port = process.env.PORT || 4500;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
