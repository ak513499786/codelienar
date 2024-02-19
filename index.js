const express= require("express");
const cors= require("cors");
const { router } = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
