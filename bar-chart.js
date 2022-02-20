//data:     an array of numbers
//options:  object that controls width and height of chart
//elements: DOM or jQuery element the chart will be placed into

const data = [
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20)];

const options = {
  width: 100,
  height: 100
}
const elements = {id: "chart", class: "column"}

function drawBarChart(data, options, elements) {
  console.log(data);
  console.log(options);
  console.log(elements);
}

console.log(drawBarChart(data, options, elements))