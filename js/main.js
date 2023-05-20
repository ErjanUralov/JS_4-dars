/* Math in JS */
/*let round = Math.round(8.4);   /!* Yaxlitlash-1 *!/*/
/*let pow = Math.pow(4,10);    /!* Darajasini hisoblash *!/*/
/*let sqrt = Math.sqrt(64);      /!* Ildizini topish *!/*/
/*let abs = Math.abs(-12.8);     /!* Absolyut sonini chiqarish *!/*/
/*let ceil = Math.ceil(49.1);    /!* Yaxlitlash-2 *!/*/
/*let floor = Math.floor(49.9);  /!* Yaxlitlash-3 *!/*/
/*let min = Math.min(111,75,274,125,23,49); /!* Minimal sonni topish *!/*/
/*let max = Math.max(111,75,274,125,23,49); /!* Maksimal sonni topish *!/*/
/*document.write(max);*/

let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.color = "yellow";
byAll.style.backgroundColor = "green";
byAll.style.width = "300px";
byAll.style.height = "250px";
byAll.style.fontSize = "45px";
byAll.style.paddingTop = "90px";
byAll.style.paddingLeft = "30px";
byAll.style.boxSizing = "border-box";
byAll.style.border = "10px solid blue";

console.log(byAll);



