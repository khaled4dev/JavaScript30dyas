// const axios = require("axios")
import fetch from 'node-fetch';

getData();

//  async function getData() {
//    const data = await axios("https://jsonplaceholder.typicode.com/todos")
//     // .then((data)=>console.log(data));
//     console.log(data);
// }
 function getData(){
  fetch("./khaled.txt")
  .then(res => res.txt())
  .then(data => console.log(data))
}


console.log("Welcome to api2");
