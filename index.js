const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

const products = [
  { id: 100, name: "Premium Pitch Grass Boots", price: "$85.00" },
  { id: 101, name: "Pro Training Match Soccer Ball", price: "$29.99" },
  { id: 102, name: "Oxcare Heavy Goalkeeper Gloves", price: "$45.00" },
  { id: 103, name: "Agility Speed Training Cones Set", price: "$15.50" },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.json([
    { id: 1, name: "Franco Team Admin", status: "Active" },
    { id: 2, name: "Oxcare Health Advisor", status: "Active" }
  ]);
});

app.get("/user/:id", (req, res) => {
  res.json({
    identifiedParamId: req.params.id
  });
});

app.get("/users", (req, res) => {
  res.json({
    searchQueryName: req.query.name,
    searchQueryNumber: req.query.number
  });
});

app.get("/product/:id", (req, res) => {
  const targetId = req.params.id;
  const match = products.find((p) => p.id == targetId);  
  
  if (!match) {
    return res.status(404).json({ error: "Product item not found in data ledger" });
  }
  
  res.json(match);
});

app.listen(port, () => {
  console.log("Backend server listening on desk port ", port);
});
