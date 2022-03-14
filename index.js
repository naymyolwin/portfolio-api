const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const sendMail = require("./sendmail.js");
const connectDB = require("./getdata.js");
const Project = require("./projectschema.js");
const Skill = require("./skillschema.js");
const Data = require("./personaldataschema.js");

const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json("DONE");
});

app.get("/get/datas", async (req, res) => {
  const myData = await Data.find();
  res.status(200).json(myData);
});

app.get("/get/projects", async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

app.get("/get/skills", async (req, res) => {
  const skills = await Skill.find();
  res.status(200).json(skills);
});

app.post("/send/email", (req, res) => {
  sendMail(req.body.params.name);
  res.send("Email Sent");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
