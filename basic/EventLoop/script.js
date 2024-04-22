console.log("start");
setTimeout(function cbT(){
    console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
});
console.log("END");

//-------------------------------------------------------------
// console.log("start");
// document.getElementById("startButton").addEventListener("click",function cb(){
//     console.log("call back");
// });
// console.log("end");

//-------------------------------------------
// console.log("start");
// setTimeout(function cb(){
//     console.log("callback");
// }, 3000);
// console.log("end");
//--------------------------------------------