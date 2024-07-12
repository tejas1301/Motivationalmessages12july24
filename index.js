const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mm", (req, res) => {
	let msgs = [" Live and let live ", " Just do it ", " Just did it ", " You can win ", " Nothing is impossible ", " Live big "];
	let r = parseInt(Math.random() * msgs.length);
	res.send({msg:msgs[r]});
	res.end();
});

app.listen(9000, () => { console.log(" Ready @ 9000"); });