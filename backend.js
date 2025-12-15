import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// serve static frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

let users = [
  { id: 1, name: "Sheeba" },
  { id: 2, name: "Sharon" },
  { id: 3, name: "Sheeba" }
];

// GET /users → unique names
app.get("/users", (req, res) => {
  const uniqueNames = [...new Set(users.map(u => u.name))];
  res.json(uniqueNames);
});

// fallback to index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
