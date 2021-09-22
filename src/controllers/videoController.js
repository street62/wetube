export const trending = (req, res) => {
  return res.send("Homepage Videos");
}
export const see = (req, res) => {
  console.log(req.params);
  res.send("You can watch videos here!");
}
export const edit = (req, res) => {
  res.send("You can edit videos here!");
}
export const search = (req, res) => {
  res.send("You can search videos!");
}
export const remove = (req, res) => {
  res.send("You can delete a video!");
}
export const upload = (req, res) => {
  res.send("You can upload a video here!");
}