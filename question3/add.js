let fs = require('fs');
let path = require('path');

function makingDirectory(name){
    if (fs.existsSync(name) === false) {
        fs.mkdirSync(name);
      }
}
function creatingFiles(numberOfFIles, dirPath){
    for (let x = 0; x < numberOfFIles ; x++){
        const filename = path.join(dirPath, `log${x}.txt`); 
        fs.writeFileSync(filename, `${x}`);
        console.log(filename)


    }
}
const dirPath = path.join(__dirname, 'Logs'); 

makingDirectory(dirPath)
process.chdir(dirPath);
creatingFiles(10,dirPath)





