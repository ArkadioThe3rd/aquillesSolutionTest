const express = require("express");
const body_parser = require("body-parser");
const app = express();
const port = 5000;

app.use(body_parser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const randomDataGenerator = () => [...Array(4000)].map((e, i) => ({
    id: i,
    value: (Math.random() * 40) | 0,
}));

const tableDataGenerator = () =>
    tableData.map(({ id, name, description, active }) => ({
        id,
        name,
        description,
        active,
        data: randomDataGenerator(),
    }));

let tableData = require("./data/tableData.js");
let cardsData = tableDataGenerator();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/cards", (req, res) => {
    res.json(cardsData);
});

app.get("/cards/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = cardsData.find((item) => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.json({ message: `item ${itemId} doesn't exist` });
    }
});

app.get("/configs", (req, res) => {
    res.json(tableData);
});

app.get("/configs/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = tableData.find((item) => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.json({ message: `item ${itemId} doesn't exist` });
    }
});

app.post("/configs", (req, res) => {
    const item = req.body;
    const maxID = Math.max.apply(
        null,
        tableData.map((o) => o.id)
    );

    item.id = maxID + 1;
    console.log("Adding new item: ", item);

    tableData.push(item);

    cardsData = tableDataGenerator();

    res.json(tableData);
});

app.put("/configs/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = req.body;
    console.log("Editing item: ", itemId, " to be ", item);

    const updatedListItems = [];

    tableData.forEach((oldItem) => {
        if (oldItem.id === itemId) {
            updatedListItems.push(item);
        } else {
            updatedListItems.push(oldItem);
        }
    });

    tableData = updatedListItems;

    res.json(tableData);
});

app.delete("/configs/:id", (req, res) => {
    const itemId = parseInt(req.params.id);

    console.log("Delete item with id: ", itemId);

    const filtered_list = tableData.filter((item) => item.id !== itemId);
    tableData = filtered_list;

    cardsData = tableDataGenerator();

    res.json(filtered_list);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});