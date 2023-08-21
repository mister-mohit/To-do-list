import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let taskarr = [];
let taskarr2 = [];

function checkarr(req, res, next){
    if (req.body.task){
        taskarr.unshift(req.body.task);
    }
    if(req.body.task2){
        taskarr2.unshift(req.body.task2);
    }
    next();
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs",{element: taskarr});
})

app.get("/work", (req, res) => {
    res.render("work.ejs",{element: taskarr2});
})

app.use(checkarr);

app.post("/submit", (req, res) => {
    res.redirect("/");
})

app.post("/work-submit", (req,res) => {
    res.redirect("/work");
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
