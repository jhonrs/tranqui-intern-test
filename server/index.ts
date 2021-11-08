import express from 'express';
import { json } from 'stream/consumers';
var cors = require('cors');

const app = express();
const port = 3333;


const bp = require('body-parser');
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

let base = [
  { name: "Jhon Reyes" },
  { name: "Julieth Salazar" },
  { name: "Juan Bravo" },
  { name: "Luis Diaz" },
  { name: "Juanes Perez" },
  { name: "Mateo Valencia" },
  { name: "Saul Luas" },
  { name: "Nicole Melo" },
  { name: "Aurora Sanchez" },
  { name: "Saul Valencia" },
  { name: "Mateo Luas" },
  { name: "Steph Melo" },
  { name: "Monica Ramirez" }
];

var fs = require('fs');
app.get("/api", (req, res) => {

  const nums = Math.floor(Math.random() * 4) + 5;
  const shuffleArray = base.sort(() => 0.5 - Math.random());
  return res.json({ names: shuffleArray.slice(0, nums) });
});

app.put("/counter", (req, res) => {
  const { name } = req.body;
  fs.readFile('server/counter.txt', 'utf8', (err: string, data: string) => {
    if (err) console.error(err);
    const currentNames = data.split("\n");
    const clickedName = currentNames.findIndex((item: string) => item.includes(name));
    if (clickedName > -1) {
      currentNames[clickedName] = name + "," + (parseInt(currentNames[clickedName].split(",")[1]) + 1);
    } else {
      currentNames.push(name + ",1");
    }
    fs.writeFile("server/counter.txt", currentNames.join("\n"), function (err: string) {
      if (err) {
        return console.log(err);
      }
      console.log("El archivo fue creado correctamente");
    });
    console.log(currentNames);

  });
  return res.json(req.body);
})

app.listen(port, () => {
  console.log(`Hello Jhon the server started at http://localhost:${port}`);
});