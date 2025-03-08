const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

const jsonFilePath = path.join(__dirname, 'data.json');

try {
    //Read json file
    const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
    const data = JSON.parse(jsonData);

    //Create a new csv parser
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);

    // Write csv data to file
    const csvFilePath = path.join(__dirname, "convertedData.csv");
    fs.writeFileSync(csvFilePath, csv);
    console.log("Conversion Successful.")

} catch (error) {
    console.error("Error in reading or converting to csv: ", error);
}