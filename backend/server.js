const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const { db } = require("./db/db");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewear
app.use(express.json());
app.use(cors(
  {
	origin:["https://expense-tracker-full-stack.vercel.app"],
	methode:["¨POST","GET","DELETE"],
	credentials:true

}
));

//routes
readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);
app.use("/api/users", require("./routes/user"));

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("server running on port:", PORT);
  });
};

server();
