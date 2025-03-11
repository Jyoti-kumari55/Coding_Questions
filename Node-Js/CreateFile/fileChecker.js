require("dotenv").config();
const fs = require("fs");

const path = process.env.FILE_PATH;

function checkAndCreateFile(filePath) {
    // First check the file path id defined or not.
    if(!filePath) {
        console.log("File path is not defined.");
        return;
    }

    // Access the file
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if(err) {
            fs.writeFile(filePath, "Sample Text", (writeErr) => {
                if(writeErr) throw writeErr;
                console.log("File Created.");
            });
        }else {
            console.log("File already exists.")
        }
    })
}
checkAndCreateFile(path);