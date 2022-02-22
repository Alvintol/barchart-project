//data:     an array of numbers
//options:  object that controls width and height of chart
//elements: DOM or jQuery element the chart will be placed into

//empty array for submitted data into unput fields 
let data = [];
let display = {

}

let display = {
  titleColor: "#b37313",
  titleSize: "large",
  scale: 20,
  quantityDisplay: 'centre',
}
const options = {
  width: 100,
  height: 100
}

//chart input display
document.getElementById("chartDisplay").onclick = function() {
  let chartDisplay = {
    titleColor: document.getElementById("titleColor").value,
    titleSize: document.getElementById("titleSize").value,
    scale: document.getElementById("inputScale").value,
    quantityDisplay: document.getElementById("quantityDisplay").value
  };
  console.log(chartDisplay);
  chartDisplay = display;
}
//chart input data 
document.getElementById("chartData").onclick = function() {
  let chartInput = {
    label: document.getElementById("inputLabel").value,
    labelColor: document.getElementById("inputLabelColor").value,
    quantity: document.getElementById("inputQuantity").value,
    barColor: document.getElementById("inputBarColor").value
  };
  data.push(chartInput);
  console.log(chartInput);
  console.log(data);
}
//fuction to clear input feilds
const btnDisplay = document.getElementById("chartDisplay");
btnDisplay.addEventListener("click", function(){
  let inputs = document.querySelectorAll(".input");
  inputs.forEach(input => {
    input.value = '';
  }); 
});
const button = document.getElementById("chartData");
button.addEventListener("click", function(){
  let input = document.querySelectorAll(".input");
  input.forEach(item => {
    item.value = "";
  });
});


const barZero = document.getElementsByClassName("bar0");
window.addEventListener("load", () => {
  bar0.classList.toggle("expanded");
});
const barOne = document.getElementsByClassName("bar1");
window.addEventListener("load", () => {
  bar1.classList.toggle("expanded");
});
const barTwo = document.getElementsByClassName("bar2");
window.addEventListener("load", () => {
  bar2.classList.toggle("expanded");
});
const barThree = document.getElementsByClassName("bar3");
window.addEventListener("load", () => {
  bar3.classList.toggle("expanded");
});
const barFour = document.getElementsByClassName("bar4");
window.addEventListener("load", () => {
  bar4.classList.toggle("expanded");
});



function drawBarChart(data, options, elements) {
  console.log(data);
  console.log(options);
  console.log(elements);
}

document.getElementById('bar0').innerHTML= `${data[0]}`;
document.getElementById('bar1').innerHTML= `${data[1]}`;
document.getElementById('bar2').innerHTML= `${data[2]}`;
document.getElementById('bar3').innerHTML= `${data[3]}`;
document.getElementById('bar4').innerHTML= `${data[4]}`;