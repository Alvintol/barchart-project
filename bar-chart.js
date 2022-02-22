//data:     an array of numbers
//options:  object that controls width and height of chart
//elements: DOM or jQuery element the chart will be placed into

//empty array for submitted data into unput fields 
let data = [];
let display = {

}

let displayDetails = {
  titleColor: "#b37313",
  titleSize: "large",
  scale: 20,
  quantityDisplay: 'centre',
}
const options = {
  width: 100,
  height: 100
}

// function drawBarChart(data, options, elements) {
//   console.log(data);
//   console.log(options);
//   console.log(elements);
// }

//function that changes chart display details
document.getElementById("chartDisplay").onclick = function () {
  let chartDisplay = {
    titleColor: document.getElementById("titleColor").value,
    titleSize: document.getElementById("titleSize").value,
    scale: document.getElementById("inputScale").value,
    quantityDisplay: document.getElementById("quantityDisplay").value
  };

  displayDetails = chartDisplay;
  titleColorChange();
  titleSizeChange();
  scaleDisplay();
}



//function that changes scale units
const scaleDisplay = function () {
  const scaleNum = [document.getElementById("scale0"),
document.getElementById("scale1"),
document.getElementById("scale2"),
document.getElementById("scale3"),
document.getElementById("scale4")];
  for (let a = 0; a < scaleNum.length; a++) {
    document.getElementById(`scale${a}`).innerHTML = (displayDetails.scale * (a + 1)) + "-";
  }
}

//function that changes title colors
const titleColorChange = function () {
  const titles = [
    document.getElementById("title0"),
    document.getElementById("title1"),
    document.getElementById("title2")];
    for (let b = 0; b < titles.length; b++){
      titles[b].style.color = displayDetails.titleColor;
  }
};

//function that changes title size
const titleSizeChange = () => document.getElementById("title0").style.fontSize = displayDetails.titleSize;

/***********************
 * incomplete function
 */
//function that changes quantity display position
const quantityPosition = function () {

}

//function that chart that creates an object of input data 
document.getElementById("chartData").onclick = function () {
  let chartInput = {
    label: document.getElementById("inputLabel").value,
    labelColor: document.getElementById("inputLabelColor").value,
    quantity: document.getElementById("inputQuantity").value,
    barColor: document.getElementById("inputBarColor").value
  };
  data.push(chartInput);
  console.log(chartInput);
  console.log(data);  
  createLabel();

}
//function that provides a label for object based on user input
const createLabel = function () {

}


//function that changes object label color based on user input


//function that provides data quantity based on user input


// function that changes object bar color based on user input


//function to clear display input fields
const btnDisplay = document.getElementById("chartDisplay");
btnDisplay.addEventListener("click", function () {
  let inputs = document.querySelectorAll(".input");
  inputs.forEach(input => {
    input.value = '';
  });
});
//second submit button
const button = document.getElementById("chartData");
button.addEventListener("click", function () {
  let input = document.querySelectorAll(".input");
  input.forEach(item => {
    item.value = "";
  });
});




// const barZero = document.getElementsByClassName("bar0");
// window.addEventListener("load", () => {
//   bar0.classList.toggle("expanded");
// });
// const barOne = document.getElementsByClassName("bar1");
// window.addEventListener("load", () => {
//   bar1.classList.toggle("expanded");
// });
// const barTwo = document.getElementsByClassName("bar2");
// window.addEventListener("load", () => {
//   bar2.classList.toggle("expanded");
// });
// const barThree = document.getElementsByClassName("bar3");
// window.addEventListener("load", () => {
//   bar3.classList.toggle("expanded");
// });
// const barFour = document.getElementsByClassName("bar4");
// window.addEventListener("load", () => {
//   bar4.classList.toggle("expanded");
// });

// document.getElementById('bar0').innerHTML = `${data[0]}`;
// document.getElementById('bar1').innerHTML = `${data[1]}`;
// document.getElementById('bar2').innerHTML = `${data[2]}`;
// document.getElementById('bar3').innerHTML = `${data[3]}`;
// document.getElementById('bar4').innerHTML = `${data[4]}`;