const fs = require("fs");
const folderName = process.argv[2] || "Project";

fs.mkdirSync(folderName);
try {
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/style.css`, '');
} catch(e){
    console.log(e)
}
