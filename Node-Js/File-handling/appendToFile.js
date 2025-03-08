const fs = require("fs");
try {
    fs.appendFileSync('log.txt', `\n\n[Tag INFO]: New log entry added: Data appended at 12:29 PM`);
    console.log("Data appended successfully to log.txt file.")
}catch (error) {
    console.error("Error: ", error);
}