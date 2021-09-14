import express from "express";

const PORT = 4000;

const app = express();
const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)
const handleLogin = (req, res) => {
  res.send("login here!");
}

app.get("/", (req, res) => {
  return res.send("I still love you.");
})
app.get("/login", handleLogin);

app.listen(PORT, handleListening);