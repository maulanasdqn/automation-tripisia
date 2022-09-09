import fs from "fs";

let data = JSON.parse(fs.readFileSync("Purwakarta.json", "utf8"));
console.log(data);
