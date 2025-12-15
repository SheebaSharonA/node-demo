import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html)
app.use(express.static(process.cwd()));

let users = [
  { id: 1, name: "Sheeba" },
  { id: 2, name: "Sharon" },
  { id: 3, name: "Sheeba" }
];

// API → returns SET of names
app.get("/users", (req, res) => {
  const uniqueNames = [...new Set(users.map(u => u.name))];
  res.json(uniqueNames);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
