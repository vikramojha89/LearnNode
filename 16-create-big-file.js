const {writeFile}  = require('fs');

for(i=0;i<1000; i++){
    writeFile('./content/big-file.txt', "hello World", {flag:'a'},(err)=>{
        if(err){
            console.log(err)
        }
    })
}