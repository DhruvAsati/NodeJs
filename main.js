const { exec, ChildProcess } = require('node:child_process');
const fs = require('fs'); //Cjs import 

fs.readFile("Node.txt", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString()); //Converting buffer to string

})

const data1 = "This is create file using node js"

// const data1 = fs.readFileSync("Node.txt", "utf-8");


// console.log(data1); //Reading file synchronously

fs.writeFile("Node.txt", data1, (err, data2) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File updated successfully");
})

fs.unlink("sample.txt", ()=>{
    console.log("File deleted successfully");

});
