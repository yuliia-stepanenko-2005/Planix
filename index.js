import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const notes = [];
/*let deleteNote= (req, res, next)=>{
    next();
}*/

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=>{

    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    notes.push({titleOfNote: req.body.title, textOfNote: req.body.text});
    res.render("notes.ejs", {titleOfNote: req.body.title, textOfNote: req.body.text});
});
app.get("/home", (req, res)=>{
    res.render("index.ejs");
});
app.get("/notes", (req, res)=>{
    res.render("all-notes.ejs", {notes: notes});
});

app.post("/delete", (req, res)=>{
    console.log("successful");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
