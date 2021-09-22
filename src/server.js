import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)

const handleLogin = (req, res) => {
  res.send("login here!");
}
const handleHome = (req, res) => {
  return res.send("<h1>Hello!</h1>");
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, handleListening);