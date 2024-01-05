// Create web server application with express.js
// Create a GET route for /comments that returns the comments array
// Create a POST route for /comments that accepts a JSON body with keys: username and comment and adds it to the comments array

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const comments = [
  {
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
  {
    username: "iliketurtles",
    comment: "Hello",
  },
];

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/comments", (req, res) => {
  const newComment = {
    username: req.body.username,
    comment: req.body.comment,
  };
  comments.push(newComment);
  res.send("Comment added!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});