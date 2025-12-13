import express from "express";

const app = express();
app.use(express.json());

// in-memory "DB"
let users = [
  { id: 1, name: "Sheeba" },
  { id: 2, name: "Sharon" }
];

// serve HTML
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST users
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
    