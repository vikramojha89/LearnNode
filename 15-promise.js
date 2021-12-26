const { readFile, writeFile } = require('fs').promises;
const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async ()=>{
    const first = await readFile('./content/first.txt', "utf-8")
    const second = await readFile('./content/second.txt', "utf-8")
    await writeFile("./content/result_async_await_promise.txt",  
    `THIS IS AWESOME:${first}, ${second}`,
    {flag:'a'})
    console.log(`${first}, ${second}`)
}


start()
// const { reject } = require('lodash');
// const { resolve } = require('path');

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, "utf-8", (err, data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)   
//             }
//         })
//     })
// }

// const start = async ()=>{
//     const first = await getText('./content/first.txt')
//     const second = await getText('./content/second.txt')
//     console.log(`${first}, ${second}`)
// }


//getText('./content/first.txt')
// .then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)})

