//data:     an array of numbers
//options:  object that controls width and height of chart
//elements: DOM or jQuery element the chart will be placed into

const data = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)];

const options = {
  width: 100,
  height: 100
}


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