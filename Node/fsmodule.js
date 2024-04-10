const fs=require('fs');
// fs.readFile('Node/file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// });
// const a = fs.readFileSync("Node/file.txt")
// console.log(a.toString());
// fs.writeFile("Node/file2.txt","Hello!!",()=>{
//     console.log("Written")
// })
const a = fs.writeFileSync("Node/file.txt","HELLO!!")
console.log(a)
console.log("End");
