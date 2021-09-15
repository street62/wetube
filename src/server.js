import express from "express";

const PORT = 4000;

const app = express();
const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)
const handleLogin = (req, res) => {
  res.send("login here!");
}

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}
const protectionMiddleware = (req, res, next) => {
  const url = req.url;
  if(url === "/protected") {
    return res.send("<h1>Not Allowed!</h1>");
  }
  console.log("Allowed. You may continue.");
  next();
}
const handleHome = (req, res, next) => {
  return res.send("I love middlewares!");
}

const handleProtected = (req, res, next) => {
  return res.send("Welcome to the private lounge");
}

app.use(loggerMiddleware);
app.use(protectionMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

app.listen(PORT, handleListening);