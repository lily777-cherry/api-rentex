import express from "express";
const app = express();
app.get("/", (request, response) => {
    response.status(200).send("OK");
});

const port = 3333;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    
})