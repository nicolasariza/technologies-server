const server = require("./server");
const { PORT } = require("./config");

server.listen(PORT, ()=> {
    console.log(`Technologies server running on port ${PORT}`);
    
})
