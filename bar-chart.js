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
  spacing: '1',
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
    spacing: document.getElementById("barSpacing").value,
    quantityDisplay: document.getElementById("quantityDisplay").value
  };

  displayDetails = chartDisplay;
  console.log(displayDetails);
  titleColorChange();
  titleSizeChange();
  scaleDisplay();
}

//function that changes title colors
const titleColorChange = function () {
  const titles = [
    document.getElementById("title0"),
    document.getElementById("title1"),
    document.getElementById("title2")];
  for (let b = 0; b < titles.length; b++) {
    titles[b].style.color = displayDetails.titleColor;
  }
};

//function that changes title size
const titleSizeChange = () => document.getElementById("title0").style.fontSize = displayDetails.titleSize;

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
  const createLabel = function () {
    let div = document.createElement("div");
    div.id = `label${data.indexOf(chartInput)}`;
    div.classList = 'label column';
    div.innerHTML = `${chartInput.label}`;

    document.getElementById("flexBottom").appendChild(div);
  }
  //function that creates a container for bar element in chart
  const createContainer = function () {
    let container = document.createElement("div");
    container.id = `barContainer${data.indexOf(chartInput)}`;
    container.classList = 'container column';
    container.innerHTML = `${chartInput.quantity}`;
    container.style.textAlign = 'center';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.margin = `0 ${displayDetails.spacing}% -0.5% ${displayDetails.spacing}%`;
    

    document.getElementById("flexBox").appendChild(container);
  }
  //function that builds bar representing data with quantity number
  const createBar = function () {
    let bar = document.createElement("div");
    bar.id = `bar${data.indexOf(chartInput)}`;
    bar.classList = 'column bar';
    bar.style.position = 'relative';
    bar.style.width = '100%';
    bar.style.height = '100%';
    bar.style.background = `${chartInput.barColor}`;
    bar.style.transformOrigin = 'bottom';
    let scalePercent = chartInput.quantity / (displayDetails.scale * 5) ;
    bar.style.transform = `scale(1, ${scalePercent})`

    document.getElementById(`barContainer${data.indexOf(chartInput)}`).appendChild(bar);
  }

  data.push(chartInput);
  console.log(chartInput);
  console.log(data);
  createLabel();
  createContainer();
  createBar();

}



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
