const fs = require("fs");
const path = require("path");
const readFile = require("./src/readFile");

let parseFiles = async () => {
    let inputDir = path.join(__dirname, "\\inputCSV");

    await fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.log(`Error reading files = ${err}`);
        }

        files.forEach(async (file) => {
            await readFile(file);
        });
    });
};

parseFiles();
