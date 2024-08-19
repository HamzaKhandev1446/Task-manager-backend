const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
// Load environment variables from .env file
require('dotenv').config();

const port = process.env.PORT || 3000;

connectDB();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
