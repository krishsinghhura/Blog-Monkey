const app = require("./app");
const http = require("http");
const connectDB=require("./config/dbConnect");

connectDB(); 

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
