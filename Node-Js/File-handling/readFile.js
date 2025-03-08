const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "log.txt");
console.log(filePath)

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (error) {
    console.error("Error: ", error);
}