let fs = require('fs');
let path = require('path');

const dirPath = path.join(__dirname, 'Logs'); 

if (fs.existsSync(dirPath) === true) {
    fs.readdir(dirPath, (error, files) =>{
        if (error){
            let e = "Error Occured";
            console.log(e) 
        }
        console.log(files)
        for(file of files){
            const filePath = path.join(dirPath, file);
            fs.unlink(filePath, error =>{
                if (error){
                    console.log("Error Occured")
                }
                else{
                    console.log(`${file} was deleted`)
                }



            })
        }
        fs.rmdirSync(dirPath);



       

    

    })
  }
