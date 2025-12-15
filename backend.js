import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// in-memory DB
let users = [
  { id: 1, name: "Sheeba" },
  { id: 2, name: "Sharon" },
  { id: 3, name: "Sheeba" } // duplicate on purpose
];

// GET → return SET of names
app.get("/users", (req, res) => {
  const nameSet = new Set(users.map(u => u.name));
  res.json([...nameSet]); // convert Set → Array
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
