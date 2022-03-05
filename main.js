
//empty array for submitted data into unput fields 
let data = [];

let displayDetails = {
  titleColor: "#b37313",
  titleSize: "large",
  scale: 20,
  spacing: '1',
  quantityDisplay: '50%',
}
let options = {
  width: '1000px',
  height: '750px'
}
let elements = document.querySelector('#barChart');
let addCount = 0;
let dataCount = 0;

function drawBarChart(data, options, elements) {

  chartContainerBuild();
  headerBuild();
  chartSectionBuild();
  inputSectionBuild();
}

//function that generates Bar Chart container into html
const chartContainerBuild = function () {
  const chartBox = document.createElement("div");
  chartBox.id = "chartBox";
  chartBox.classList = "container";
  chartBox.maxWidth = `${options.width}`;
  chartBox.maxHeight = `${options.height}`;

  document.querySelector('#barChart').appendChild(chartBox);
}

//function that generates header of bar chart
const headerBuild = function () {
  const headerDiv = document.createElement("header");

  const h1Div = document.createElement("h1");
  h1Div.id = "title0";
  h1Div.classList = "userAccess";
  h1Div.contentEditable = "true";
  h1Div.innerHTML = 'Bar Chart Project (Click to Edit)'

  document.querySelector('#chartBox').appendChild(headerDiv)
  document.querySelector('header').appendChild(h1Div)
}

//function that generates main Bar Chart display
const chartSectionBuild = function () {
  const chart = document.createElement('section');
  chart.id = 'chart';
  chart.classList = 'column';

  const chartRow = document.createElement('div');
  chartRow.id = 'chartRow';
  chartRow.classList = 'row';

  const axisX = document.createElement('div');
  axisX.id = 'axisX';
  axisX.classList = 'axis column';

  const title1 = document.createElement('h2');
  title1.id = 'title1';
  title1.classList = 'userAccess';
  title1.contentEditable = 'true';
  title1.innerHTML = '(Click to Edit)';

  const leftBar = document.createElement('div');
  leftBar.id = 'leftBar';
  leftBar.classList = 'left column';

  const flexLeft = document.createElement('div');
  flexLeft.id = 'flexLeft';
  flexLeft.classList = 'container';

  const flexBox = document.createElement('div');
  flexBox.id = 'flexBox';
  flexBox.classList = 'container column';

  const scaleBuild = function () {
    let scaleMax = 5;
    for (let c = 0; c < scaleMax; c++) {
      const scale = document.createElement('div');
      scale.id = `scale${c}`;
      scale.classList = 'scale row';
      scale.innerHTML = `${c} -`;

      document.querySelector('#flexLeft').appendChild(scale);
    }
  }
  const chartColumn = document.createElement('div');
  chartColumn.id = 'chartColumn';
  chartColumn.classList = 'column';

  const bottomBar = document.createElement('div');
  bottomBar.id = 'bottomBar';
  bottomBar.classList = 'axis row';

  const corner = document.createElement('div');
  corner.id = 'corner';
  corner.classList = 'column';

  const flexBottom = document.createElement('div');
  flexBottom.id = 'flexBottom';
  flexBottom.classList = 'container label';

  const title2 = document.createElement('h2');
  title2.id = 'title2';
  title2.classList = 'userAccess axisY';
  title2.contentEditable = 'true';
  title2.innerHTML = '(Click to Edit)'

  document.querySelector('#chartBox').appendChild(chart);
  document.querySelector('#chart').appendChild(chartRow);
  document.querySelector('#chartRow').appendChild(axisX);
  document.querySelector('#axisX').appendChild(title1);
  document.querySelector('#chartRow').appendChild(leftBar);
  document.querySelector('#leftBar').appendChild(flexLeft);
  document.querySelector('#chartRow').appendChild(flexBox);
  scaleBuild();
  document.querySelector('#chart').appendChild(chartColumn);
  document.querySelector('#chartColumn').appendChild(bottomBar);
  document.querySelector('#bottomBar').appendChild(corner);
  document.querySelector('#bottomBar').appendChild(flexBottom);
  document.querySelector('#chartColumn').appendChild(title2);

}

//function that generates main UI display
const inputSectionBuild = function () {

  //display UI
  const userInput = document.createElement('section');
  userInput.id = 'userInput';
  userInput.classList = 'input';

  const chartInput = document.createElement('div');
  chartInput.id = 'chartInput';
  chartInput.classList = 'input';

  const titleColor = document.createElement('select');
  titleColor.id = 'titleColor';
  titleColor.classList = 'input';
  titleColor.name = 'titleColor';

  const titleSize = document.createElement('select');
  titleSize.id = 'titleSize';
  titleSize.classList = 'input';
  titleSize.name = 'titleSize';

  const barSpacing = document.createElement('select');
  barSpacing.id = 'barSpacing';
  barSpacing.classList = 'input';
  barSpacing.name = 'barSpacing';

  const quantityDisplay = document.createElement('select');
  quantityDisplay.id = 'quantityDisplay';
  quantityDisplay.classList = 'input';
  quantityDisplay.name = 'quantityDisplay';

  const inputScale = document.createElement('input');
  inputScale.id = 'inputScale';
  inputScale.classList = 'input';
  inputScale.min = '1';
  inputScale.type = 'number';
  inputScale.placeholder = 'Scale by: Number';

  const chartDisplay = document.createElement('input');
  chartDisplay.id = 'chartDisplay';
  chartDisplay.classList = 'button';
  chartDisplay.type = 'button';
  chartDisplay.value = 'Submit';


  //data UI

  const chartInfo0 = document.createElement('div');
  chartInfo0.id = `chartInfo0`;
  chartInfo0.classList = 'inputBar input0 barContainer';

  const inputLabel0 = document.createElement('input');
  inputLabel0.id = `inputLabel0`;
  inputLabel0.classList = 'inputBar input0';
  inputLabel0.type = 'text';
  inputLabel0.placeholder = 'Bar Title';

  const labelColor0 = document.createElement('select');
  labelColor0.id = `labelColor0`;
  labelColor0.classList = 'inputBar input0';
  labelColor0.name = 'labelColor';

  const inputQuantity0 = document.createElement('input');
  inputQuantity0.id = `inputQuantity0`;
  inputQuantity0.classList = 'inputBar input0';
  inputQuantity0.type = "number";
  inputQuantity0.min = "0";
  inputQuantity0.placeholder = "Quantity";

  const barColor0 = document.createElement('select');
  barColor0.id = `barColor0`;
  barColor0.classList = 'inputBar input0';
  barColor0.name = 'barColor';

  const chartInfo1 = document.createElement('div');
  chartInfo1.id = `chartInfo1`;
  chartInfo1.classList = 'inputBar barContainer input1';
  chartInfo1.innerHTML = '2nd Value';
  chartInfo1.style.color = 'rgba(240, 240, 260, 0.8)';
  chartInfo1.style.display = 'none';

  const inputLabel1 = document.createElement('input');
  inputLabel1.id = `inputLabel1`;
  inputLabel1.classList = 'inputBar input1';
  inputLabel1.type = 'text';
  inputLabel1.placeholder = 'Bar Title';

  const labelColor1 = document.createElement('select');
  labelColor1.id = `labelColor1`;
  labelColor1.classList = 'inputBar input1';
  labelColor1.name = 'labelColor';

  const inputQuantity1 = document.createElement('input');
  inputQuantity1.id = `inputQuantity1`;
  inputQuantity1.classList = 'inputBar input1';
  inputQuantity1.type = "number";
  inputQuantity1.min = "0";
  inputQuantity1.placeholder = "Quantity";

  const barColor1 = document.createElement('select');
  barColor1.id = `barColor1`;
  barColor1.classList = 'inputBar input1';
  barColor1.name = 'barColor';

  const chartInfo2 = document.createElement('div');
  chartInfo2.id = `chartInfo2`;
  chartInfo2.classList = 'inputBar barContainer input2';
  chartInfo2.innerHTML = '3rd Value';
  chartInfo2.style.color = 'rgba(240, 240, 260, 0.8)';
  chartInfo2.style.display = 'none';

  const inputLabel2 = document.createElement('input');
  inputLabel2.id = `inputLabel2`;
  inputLabel2.classList = 'inputBar input2';
  inputLabel2.type = 'text';
  inputLabel2.placeholder = 'Bar Title';

  const labelColor2 = document.createElement('select');
  labelColor2.id = `labelColor2`;
  labelColor2.classList = 'inputBar input2';
  labelColor2.name = 'labelColor';

  const inputQuantity2 = document.createElement('input');
  inputQuantity2.id = `inputQuantity2`;
  inputQuantity2.classList = 'inputBar input2';
  inputQuantity2.type = "number";
  inputQuantity2.min = "0";
  inputQuantity2.placeholder = "Quantity";

  const barColor2 = document.createElement('select');
  barColor2.id = `barColor2`;
  barColor2.classList = 'inputBar input2';
  barColor2.name = 'barColor';

  const chartDataBtn = document.createElement('input');
  chartDataBtn.id = 'chartDataBtn';
  chartDataBtn.classList = 'button';
  chartDataBtn.type = 'button';
  chartDataBtn.value = 'Submit';


  //additional UI buttons
  const addBtn = document.createElement('button');
  addBtn.id = 'addBtn';
  addBtn.class = 'button';
  addBtn.type = 'button';
  addBtn.innerHTML = '+ Additional Value';
  addBtn.style.position = 'relative';
  addBtn.style.bottom = '0';
  addBtn.style.left = '0';
  addBtn.style.opacity = '0.6';
  addBtn.style.border = '0';
  addBtn.style.background = 'transparent';


  const chartReset = document.createElement('div');
  chartReset.id = 'chartReset';
  chartReset.class = 'input';
  chartReset.style.textAlign = 'center';

  const buttonReset = document.createElement('input');
  buttonReset.id = 'buttonReset';
  buttonReset.type = 'Button';
  buttonReset.classList = 'Button';
  buttonReset.value = 'Reset';


  const showHide = document.createElement('button');
  showHide.id = 'showHide';
  showHide.class = 'button';
  showHide.type = 'button';
  showHide.innerHTML = 'hide';
  showHide.style.position = 'absolute';
  showHide.style.bottom = '-4.5%';
  showHide.style.left = '0';
  showHide.style.opacity = '0.3';
  showHide.style.border = '0';
  showHide.style.background = 'transparent';

  document.querySelector('#chartBox').appendChild(userInput);
  document.querySelector('#userInput').appendChild(chartInput);
  document.querySelector('#chartInput').appendChild(titleColor);
  document.querySelector('#chartInput').appendChild(titleSize);
  document.querySelector('#chartInput').appendChild(inputScale);
  document.querySelector('#chartInput').appendChild(barSpacing);
  document.querySelector('#chartInput').appendChild(quantityDisplay);
  document.querySelector('#chartInput').appendChild(chartDisplay);
  document.querySelector('#userInput').appendChild(chartInfo0);
  document.querySelector(`#chartInfo0`).appendChild(inputLabel0);
  document.querySelector(`#chartInfo0`).appendChild(labelColor0);
  document.querySelector(`#chartInfo0`).appendChild(inputQuantity0);
  document.querySelector(`#chartInfo0`).appendChild(barColor0);
  document.querySelector('#userInput').appendChild(chartInfo1);
  document.querySelector(`#chartInfo1`).appendChild(inputLabel1);
  document.querySelector(`#chartInfo1`).appendChild(labelColor1);
  document.querySelector(`#chartInfo1`).appendChild(inputQuantity1);
  document.querySelector(`#chartInfo1`).appendChild(barColor1);
  document.querySelector(`#chartInfo0`).appendChild(chartDataBtn);
  document.querySelector('#userInput').appendChild(chartInfo2);
  document.querySelector(`#chartInfo2`).appendChild(inputLabel2);
  document.querySelector(`#chartInfo2`).appendChild(labelColor2);
  document.querySelector(`#chartInfo2`).appendChild(inputQuantity2);
  document.querySelector(`#chartInfo2`).appendChild(barColor2);
  document.querySelector(`#chartInfo0`).appendChild(chartDataBtn);
  document.querySelector(`#chartInfo0`).appendChild(addBtn);
  document.querySelector('#chartBox').appendChild(chartReset);
  document.querySelector('#chartReset').appendChild(buttonReset);
  document.querySelector('#chart').appendChild(showHide);



  //functions that fill all dropdown options
  const titleColorList = function () {
    const titleColorList0 = document.createElement('option');
    titleColorList0.value = '';
    titleColorList0.disabled = 'true';
    titleColorList0.selected = 'true';
    titleColorList0.innerHTML = 'Title Color';
    document.querySelector('#titleColor').appendChild(titleColorList0)
    const titleColorList1 = document.createElement('option');
    titleColorList1.value = '#b37313';
    titleColorList1.innerHTML = 'Default';
    document.querySelector('#titleColor').appendChild(titleColorList1)
    const titleColorList2 = document.createElement('option');
    titleColorList2.value = 'red';
    titleColorList2.innerHTML = 'Red';
    document.querySelector('#titleColor').appendChild(titleColorList2)
    const titleColorList3 = document.createElement('option');
    titleColorList3.value = 'orange';
    titleColorList3.innerHTML = 'Orange';
    document.querySelector('#titleColor').appendChild(titleColorList3)
    const titleColorList4 = document.createElement('option');
    titleColorList4.value = 'yellow';
    titleColorList4.innerHTML = 'Yellow';
    document.querySelector('#titleColor').appendChild(titleColorList4)
    const titleColorList5 = document.createElement('option');
    titleColorList5.value = 'Green';
    titleColorList5.innerHTML = 'Green';
    document.querySelector('#titleColor').appendChild(titleColorList5)
    const titleColorList6 = document.createElement('option');
    titleColorList6.value = 'Blue';
    titleColorList6.innerHTML = 'Blue';
    document.querySelector('#titleColor').appendChild(titleColorList6)
    const titleColorList7 = document.createElement('option');
    titleColorList7.value = 'Purple';
    titleColorList7.innerHTML = 'Purple';
    document.querySelector('#titleColor').appendChild(titleColorList7)
    const titleColorList8 = document.createElement('option');
    titleColorList8.value = 'Black';
    titleColorList8.innerHTML = 'Black';
    document.querySelector('#titleColor').appendChild(titleColorList8)
    const titleColorList9 = document.createElement('option');
    titleColorList9.value = 'White';
    titleColorList9.innerHTML = 'White';
    document.querySelector('#titleColor').appendChild(titleColorList9)
    const titleColorList10 = document.createElement('option');
    titleColorList10.value = 'Gray';
    titleColorList10.innerHTML = 'Gray';
    document.querySelector('#titleColor').appendChild(titleColorList10)
  }

  const titleSizeList = function () {
    const titleSizeList0 = document.createElement('option');
    titleSizeList0.value = '';
    titleSizeList0.disabled = 'true';
    titleSizeList0.selected = 'true';
    titleSizeList0.innerHTML = 'Title Size';
    document.querySelector('#titleSize').appendChild(titleSizeList0)
    const titleSizeList1 = document.createElement('option');
    titleSizeList1.value = 'small';
    titleSizeList1.innerHTML = 'Small';
    document.querySelector('#titleSize').appendChild(titleSizeList1)
    const titleSizeList2 = document.createElement('option');
    titleSizeList2.value = 'medium';
    titleSizeList2.innerHTML = 'Medium';
    document.querySelector('#titleSize').appendChild(titleSizeList2)
    const titleSizeList3 = document.createElement('option');
    titleSizeList3.value = 'large';
    titleSizeList3.innerHTML = 'Large';
    document.querySelector('#titleSize').appendChild(titleSizeList3)
    const titleSizeList4 = document.createElement('option');
    titleSizeList4.value = 'x-large';
    titleSizeList4.innerHTML = 'X-Large';
    document.querySelector('#titleSize').appendChild(titleSizeList4)
    const titleSizeList5 = document.createElement('option');
    titleSizeList5.value = 'xx-large';
    titleSizeList5.innerHTML = 'XX-Large';
    document.querySelector('#titleSize').appendChild(titleSizeList5)
  }

  const barSpacingList = function () {
    const barSpacingList0 = document.createElement('option');
    barSpacingList0.value = '';
    barSpacingList0.disabled = 'true';
    barSpacingList0.selected = 'true';
    barSpacingList0.innerHTML = 'Bar Spacing';
    document.querySelector('#barSpacing').appendChild(barSpacingList0)
    const barSpacingList1 = document.createElement('option');
    barSpacingList1.value = '0';
    barSpacingList1.innerHTML = '1';
    document.querySelector('#barSpacing').appendChild(barSpacingList1)
    const barSpacingList2 = document.createElement('option');
    barSpacingList2.value = '2';
    barSpacingList2.innerHTML = '2';
    document.querySelector('#barSpacing').appendChild(barSpacingList2)
    const barSpacingList3 = document.createElement('option');
    barSpacingList3.value = '4';
    barSpacingList3.innerHTML = '3';
    document.querySelector('#barSpacing').appendChild(barSpacingList3)
    const barSpacingList4 = document.createElement('option');
    barSpacingList4.value = '6';
    barSpacingList4.innerHTML = '4';
    document.querySelector('#barSpacing').appendChild(barSpacingList4)
    const barSpacingList5 = document.createElement('option');
    barSpacingList5.value = '8';
    barSpacingList5.innerHTML = '5';
    document.querySelector('#barSpacing').appendChild(barSpacingList5)
  }

  const quantityDisplayList = function () {
    const quantityDisplayList0 = document.createElement('option');
    quantityDisplayList0.value = '';
    quantityDisplayList0.disabled = 'true';
    quantityDisplayList0.selected = 'true';
    quantityDisplayList0.innerHTML = 'Quantity Display';
    document.querySelector('#quantityDisplay').appendChild(quantityDisplayList0)
    const quantityDisplayList1 = document.createElement('option');
    quantityDisplayList1.value = '98%';
    quantityDisplayList1.innerHTML = 'Top';
    document.querySelector('#quantityDisplay').appendChild(quantityDisplayList1)
    const quantityDisplayList2 = document.createElement('option');
    quantityDisplayList2.value = '50%';
    quantityDisplayList2.innerHTML = 'Center';
    document.querySelector('#quantityDisplay').appendChild(quantityDisplayList2)
    const quantityDisplayList3 = document.createElement('option');
    quantityDisplayList3.value = '10%';
    quantityDisplayList3.innerHTML = 'Bottom';
    document.querySelector('#quantityDisplay').appendChild(quantityDisplayList3)
  }

  const labelColorListA = function () {
    const labelColorList0 = document.createElement('option');
    labelColorList0.value = '';
    labelColorList0.disabled = 'true';
    labelColorList0.selected = 'true';
    labelColorList0.innerHTML = 'Title Color';
    document.querySelector(`#labelColor0`).appendChild(labelColorList0)
    const labelColorList1 = document.createElement('option');
    labelColorList1.value = 'red';
    labelColorList1.innerHTML = 'Red';
    document.querySelector(`#labelColor0`).appendChild(labelColorList1)
    const labelColorList2 = document.createElement('option');
    labelColorList2.value = 'orange';
    labelColorList2.innerHTML = 'Orange';
    document.querySelector(`#labelColor0`).appendChild(labelColorList2)
    const labelColorList3 = document.createElement('option');
    labelColorList3.value = 'yellow';
    labelColorList3.innerHTML = 'Yellow';
    document.querySelector(`#labelColor0`).appendChild(labelColorList3)
    const labelColorList4 = document.createElement('option');
    labelColorList4.value = 'Green';
    labelColorList4.innerHTML = 'Green';
    document.querySelector(`#labelColor0`).appendChild(labelColorList4)
    const labelColorList5 = document.createElement('option');
    labelColorList5.value = 'Blue';
    labelColorList5.innerHTML = 'Blue';
    document.querySelector(`#labelColor0`).appendChild(labelColorList5)
    const labelColorList6 = document.createElement('option');
    labelColorList6.value = 'Purple';
    labelColorList6.innerHTML = 'Purple';
    document.querySelector(`#labelColor0`).appendChild(labelColorList6)
    const labelColorList7 = document.createElement('option');
    labelColorList7.value = 'White';
    labelColorList7.innerHTML = 'White';
    document.querySelector(`#labelColor0`).appendChild(labelColorList7)
    const labelColorList8 = document.createElement('option');
    labelColorList8.value = 'Gray';
    labelColorList8.innerHTML = 'Gray';
    document.querySelector(`#labelColor0`).appendChild(labelColorList8)
    const labelColorList9 = document.createElement('option');
    labelColorList9.value = 'Black';
    labelColorList9.innerHTML = 'Black';
    document.querySelector(`#labelColor0`).appendChild(labelColorList9)
  }

  const barColorListA = function () {
    const barColorList0 = document.createElement('option');
    barColorList0.value = '';
    barColorList0.disabled = 'true';
    barColorList0.selected = 'true';
    barColorList0.innerHTML = 'Bar Color';
    document.querySelector(`#barColor0`).appendChild(barColorList0)
    const barColorList1 = document.createElement('option');
    barColorList1.value = 'red';
    barColorList1.innerHTML = 'Red';
    document.querySelector(`#barColor0`).appendChild(barColorList1)
    const barColorList2 = document.createElement('option');
    barColorList2.value = 'orange';
    barColorList2.innerHTML = 'Orange';
    document.querySelector(`#barColor0`).appendChild(barColorList2)
    const barColorList3 = document.createElement('option');
    barColorList3.value = 'yellow';
    barColorList3.innerHTML = 'Yellow';
    document.querySelector(`#barColor0`).appendChild(barColorList3)
    const barColorList4 = document.createElement('option');
    barColorList4.value = 'Green';
    barColorList4.innerHTML = 'Green';
    document.querySelector(`#barColor0`).appendChild(barColorList4)
    const barColorList5 = document.createElement('option');
    barColorList5.value = 'Blue';
    barColorList5.innerHTML = 'Blue';
    document.querySelector(`#barColor0`).appendChild(barColorList5)
    const barColorList6 = document.createElement('option');
    barColorList6.value = 'Purple';
    barColorList6.innerHTML = 'Purple';
    document.querySelector(`#barColor0`).appendChild(barColorList6)
    const barColorList7 = document.createElement('option');
    barColorList7.value = 'White';
    barColorList7.innerHTML = 'White';
    document.querySelector(`#barColor0`).appendChild(barColorList7)
    const barColorList8 = document.createElement('option');
    barColorList8.value = 'Gray';
    barColorList8.innerHTML = 'Gray';
    document.querySelector(`#barColor0`).appendChild(barColorList8)
  }
  const labelColorListB = function () {
    const labelColorList0 = document.createElement('option');
    labelColorList0.value = '';
    labelColorList0.disabled = 'true';
    labelColorList0.selected = 'true';
    labelColorList0.innerHTML = 'Title Color';
    document.querySelector(`#labelColor1`).appendChild(labelColorList0)
    const labelColorList1 = document.createElement('option');
    labelColorList1.value = 'red';
    labelColorList1.innerHTML = 'Red';
    document.querySelector(`#labelColor1`).appendChild(labelColorList1)
    const labelColorList2 = document.createElement('option');
    labelColorList2.value = 'orange';
    labelColorList2.innerHTML = 'Orange';
    document.querySelector(`#labelColor1`).appendChild(labelColorList2)
    const labelColorList3 = document.createElement('option');
    labelColorList3.value = 'yellow';
    labelColorList3.innerHTML = 'Yellow';
    document.querySelector(`#labelColor1`).appendChild(labelColorList3)
    const labelColorList4 = document.createElement('option');
    labelColorList4.value = 'Green';
    labelColorList4.innerHTML = 'Green';
    document.querySelector(`#labelColor1`).appendChild(labelColorList4)
    const labelColorList5 = document.createElement('option');
    labelColorList5.value = 'Blue';
    labelColorList5.innerHTML = 'Blue';
    document.querySelector(`#labelColor1`).appendChild(labelColorList5)
    const labelColorList6 = document.createElement('option');
    labelColorList6.value = 'Purple';
    labelColorList6.innerHTML = 'Purple';
    document.querySelector(`#labelColor1`).appendChild(labelColorList6)
    const labelColorList7 = document.createElement('option');
    labelColorList7.value = 'White';
    labelColorList7.innerHTML = 'White';
    document.querySelector(`#labelColor1`).appendChild(labelColorList7)
    const labelColorList8 = document.createElement('option');
    labelColorList8.value = 'Gray';
    labelColorList8.innerHTML = 'Gray';
    document.querySelector(`#labelColor1`).appendChild(labelColorList8)
    const labelColorList9 = document.createElement('option');
    labelColorList9.value = 'Black';
    labelColorList9.innerHTML = 'Black';
    document.querySelector(`#labelColor1`).appendChild(labelColorList9)
  }

  const barColorListB = function () {
    const barColorList0 = document.createElement('option');
    barColorList0.value = '';
    barColorList0.disabled = 'true';
    barColorList0.selected = 'true';
    barColorList0.innerHTML = 'Bar Color';
    document.querySelector(`#barColor1`).appendChild(barColorList0)
    const barColorList1 = document.createElement('option');
    barColorList1.value = 'red';
    barColorList1.innerHTML = 'Red';
    document.querySelector(`#barColor1`).appendChild(barColorList1)
    const barColorList2 = document.createElement('option');
    barColorList2.value = 'orange';
    barColorList2.innerHTML = 'Orange';
    document.querySelector(`#barColor1`).appendChild(barColorList2)
    const barColorList3 = document.createElement('option');
    barColorList3.value = 'yellow';
    barColorList3.innerHTML = 'Yellow';
    document.querySelector(`#barColor1`).appendChild(barColorList3)
    const barColorList4 = document.createElement('option');
    barColorList4.value = 'Green';
    barColorList4.innerHTML = 'Green';
    document.querySelector(`#barColor1`).appendChild(barColorList4)
    const barColorList5 = document.createElement('option');
    barColorList5.value = 'Blue';
    barColorList5.innerHTML = 'Blue';
    document.querySelector(`#barColor1`).appendChild(barColorList5)
    const barColorList6 = document.createElement('option');
    barColorList6.value = 'Purple';
    barColorList6.innerHTML = 'Purple';
    document.querySelector(`#barColor1`).appendChild(barColorList6)
    const barColorList7 = document.createElement('option');
    barColorList7.value = 'White';
    barColorList7.innerHTML = 'White';
    document.querySelector(`#barColor1`).appendChild(barColorList7)
    const barColorList8 = document.createElement('option');
    barColorList8.value = 'Gray';
    barColorList8.innerHTML = 'Gray';
    document.querySelector(`#barColor1`).appendChild(barColorList8)
  }
  const labelColorListC = function () {
    const labelColorList0 = document.createElement('option');
    labelColorList0.value = '';
    labelColorList0.disabled = 'true';
    labelColorList0.selected = 'true';
    labelColorList0.innerHTML = 'Title Color';
    document.querySelector(`#labelColor2`).appendChild(labelColorList0)
    const labelColorList1 = document.createElement('option');
    labelColorList1.value = 'red';
    labelColorList1.innerHTML = 'Red';
    document.querySelector(`#labelColor2`).appendChild(labelColorList1)
    const labelColorList2 = document.createElement('option');
    labelColorList2.value = 'orange';
    labelColorList2.innerHTML = 'Orange';
    document.querySelector(`#labelColor2`).appendChild(labelColorList2)
    const labelColorList3 = document.createElement('option');
    labelColorList3.value = 'yellow';
    labelColorList3.innerHTML = 'Yellow';
    document.querySelector(`#labelColor2`).appendChild(labelColorList3)
    const labelColorList4 = document.createElement('option');
    labelColorList4.value = 'Green';
    labelColorList4.innerHTML = 'Green';
    document.querySelector(`#labelColor2`).appendChild(labelColorList4)
    const labelColorList5 = document.createElement('option');
    labelColorList5.value = 'Blue';
    labelColorList5.innerHTML = 'Blue';
    document.querySelector(`#labelColor2`).appendChild(labelColorList5)
    const labelColorList6 = document.createElement('option');
    labelColorList6.value = 'Purple';
    labelColorList6.innerHTML = 'Purple';
    document.querySelector(`#labelColor2`).appendChild(labelColorList6)
    const labelColorList7 = document.createElement('option');
    labelColorList7.value = 'White';
    labelColorList7.innerHTML = 'White';
    document.querySelector(`#labelColor2`).appendChild(labelColorList7)
    const labelColorList8 = document.createElement('option');
    labelColorList8.value = 'Gray';
    labelColorList8.innerHTML = 'Gray';
    document.querySelector(`#labelColor2`).appendChild(labelColorList8)
    const labelColorList9 = document.createElement('option');
    labelColorList9.value = 'Black';
    labelColorList9.innerHTML = 'Black';
    document.querySelector(`#labelColor2`).appendChild(labelColorList9)
  }

  const barColorListC = function () {
    const barColorList0 = document.createElement('option');
    barColorList0.value = '';
    barColorList0.disabled = 'true';
    barColorList0.selected = 'true';
    barColorList0.innerHTML = 'Bar Color';
    document.querySelector(`#barColor2`).appendChild(barColorList0)
    const barColorList1 = document.createElement('option');
    barColorList1.value = 'red';
    barColorList1.innerHTML = 'Red';
    document.querySelector(`#barColor2`).appendChild(barColorList1)
    const barColorList2 = document.createElement('option');
    barColorList2.value = 'orange';
    barColorList2.innerHTML = 'Orange';
    document.querySelector(`#barColor2`).appendChild(barColorList2)
    const barColorList3 = document.createElement('option');
    barColorList3.value = 'yellow';
    barColorList3.innerHTML = 'Yellow';
    document.querySelector(`#barColor2`).appendChild(barColorList3)
    const barColorList4 = document.createElement('option');
    barColorList4.value = 'Green';
    barColorList4.innerHTML = 'Green';
    document.querySelector(`#barColor2`).appendChild(barColorList4)
    const barColorList5 = document.createElement('option');
    barColorList5.value = 'Blue';
    barColorList5.innerHTML = 'Blue';
    document.querySelector(`#barColor2`).appendChild(barColorList5)
    const barColorList6 = document.createElement('option');
    barColorList6.value = 'Purple';
    barColorList6.innerHTML = 'Purple';
    document.querySelector(`#barColor2`).appendChild(barColorList6)
    const barColorList7 = document.createElement('option');
    barColorList7.value = 'White';
    barColorList7.innerHTML = 'White';
    document.querySelector(`#barColor2`).appendChild(barColorList7)
    const barColorList8 = document.createElement('option');
    barColorList8.value = 'Gray';
    barColorList8.innerHTML = 'Gray';
    document.querySelector(`#barColor2`).appendChild(barColorList8)
  }
  titleColorList();
  titleSizeList();
  barSpacingList();
  quantityDisplayList();
  labelColorListA();
  labelColorListB();
  labelColorListC();
  barColorListA();
  barColorListB();
  barColorListC();

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

  //function that changes H1/H2 color
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

  //function that chart that creates an object of input data 
  document.getElementById("chartDataBtn").onclick = function () {
    let chartInput = [
      {
        label: document.getElementById("inputLabel0").value,
        labelColor: document.getElementById("labelColor0").value,
        quantity: document.getElementById("inputQuantity0").value,
        barColor: document.getElementById("barColor0").value
      },
      {
        label: document.getElementById("inputLabel1").value,
        labelColor: document.getElementById("labelColor1").value,
        quantity: document.getElementById("inputQuantity1").value,
        barColor: document.getElementById("barColor1").value
      },
      {
        label: document.getElementById("inputLabel2").value,
        labelColor: document.getElementById("labelColor2").value,
        quantity: document.getElementById("inputQuantity2").value,
        barColor: document.getElementById("barColor2").value
      }
    ];

    const createLabelContainer = function() {
      let labelContainer = document.createElement('div');
      labelContainer.id = `labelContainer${dataCount}`;
      labelContainer.classList = `container label row bar`;
      labelContainer.style.display = 'flex';
      labelContainer.style.fontWeight = 'bold';
      labelContainer.style.flexDirection = 'row';
      labelContainer.style.justifyContent = 'space-evenly';
      document.getElementById('flexBottom').appendChild(labelContainer);
    }

    const createLabel = function () {
      let label = document.createElement("div");
      label.id = `label${dataCount}`;
      label.classList = `label column bar`;
      label.innerHTML = `${chartInput[0].label}`;
      label.style.color = `${chartInput[0].labelColor}`;
      label.style.textShadow = `0.5px 0.5px 0.5px #000000`;
      document.getElementById(`labelContainer${dataCount}`).appendChild(label);
    }
    //function that creates a container for bar element in chart
    const createContainer = function () {
      let container = document.createElement("div");
      container.id = `barContainer${dataCount}`;
      container.classList = `container column bar`;
      container.style.position = 'relative';
      container.style.textAlign = 'center';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.justifyContent = 'end';
      container.style.margin = `0 ${displayDetails.spacing}% -0.5% ${displayDetails.spacing}%`;

      document.getElementById("flexBox").appendChild(container);
    }

    //function that builds bar representing data with quantity number
    const createBar = function () {
      let bar = document.createElement("div");
      bar.id = `bar${dataCount}A`;
      bar.classList = `column bar`;
      bar.style.position = 'relative';
      bar.style.width = '100%';
      let heightPercent = ((chartInput[0].quantity / (displayDetails.scale * 5)) * 100);
      bar.style.maxHeight = "100%";
      bar.style.height = `${heightPercent}%`;
      bar.style.margin = '0 2px 0 2px';
      bar.style.bottom = '0';
      bar.style.zIndex = '0';
      bar.style.background = `${chartInput[0].barColor}`;
      bar.style.transformOrigin = 'bottom';

      document.getElementById(`barContainer${dataCount}`).appendChild(bar);
    }


    //function that displays quantity of user data
    const quantityDisplay = function () {
      let quantityNum = document.createElement("div");
      quantityNum.id = `quantity${dataCount}`;
      quantityNum.classList = `display bar`;
      quantityNum.style.textAlign = 'center';
      quantityNum.style.position = 'absolute';
      quantityNum.style.width = '100%';
      quantityNum.style.bottom = `${displayDetails.quantityDisplay}`
      quantityNum.style.zIndex = '3';
      quantityNum.innerHTML = `${chartInput[0].quantity}`;

      document.getElementById(`bar${dataCount}A`).appendChild(quantityNum);
    }
    const createLabel1 = function () {
      let label = document.createElement("div");
      label.id = `label${dataCount}`;
      label.classList = `label column bar`;
      label.innerHTML = `${chartInput[1].label}`;
      label.style.color = `${chartInput[1].labelColor}`;
      label.style.textShadow = `0.5px 0.5px 0.5px #000000`;
      document.getElementById(`labelContainer${dataCount}`).appendChild(label);
    }

    const createBar1 = function () {
      let bar = document.createElement("div");
      bar.id = `bar${dataCount}B`;
      bar.classList = `column bar`;
      bar.style.position = 'relative';
      bar.style.width = '100%';
      let heightPercent = ((chartInput[1].quantity / (displayDetails.scale * 5)) * 100);
      bar.style.maxHeight = "100%";
      bar.style.height = `${heightPercent}%`;
      bar.style.margin = '0 2px 0 2px';
      bar.style.bottom = '0';
      bar.style.zIndex = '0';
      bar.style.background = `${chartInput[1].barColor}`;
      bar.style.transformOrigin = 'bottom';

      document.getElementById(`barContainer${dataCount}`).appendChild(bar);
    }

    const quantityDisplay1 = function () {
      let quantityNum = document.createElement("div");
      quantityNum.id = `quantity${dataCount}`;
      quantityNum.classList = `display bar`;
      quantityNum.style.textAlign = 'center';
      quantityNum.style.position = 'absolute';
      quantityNum.style.width = '100%';
      quantityNum.style.bottom = `${displayDetails.quantityDisplay}`
      quantityNum.style.zIndex = '3';
      quantityNum.innerHTML = `${chartInput[1].quantity}`;

      document.getElementById(`bar${dataCount}B`).appendChild(quantityNum);
    }

    const createLabel2 = function () {
      let label = document.createElement("div");
      label.id = `label${dataCount}`;
      label.classList = `label column bar`;
      label.innerHTML = `${chartInput[2].label}`;
      label.style.color = `${chartInput[2].labelColor}`;
      label.style.textShadow = `0.5px 0.5px 0.5px #000000`;
      document.getElementById(`labelContainer${dataCount}`).appendChild(label);
    }

    const createBar2 = function () {
      let bar = document.createElement("div");
      bar.id = `bar${dataCount}C`;
      bar.classList = `column bar`;
      bar.style.position = 'relative';
      bar.style.width = '100%';
      let heightPercent = ((chartInput[2].quantity / (displayDetails.scale * 5)) * 100);
      bar.style.maxHeight = "100%";
      bar.style.height = `${heightPercent}%`;
      bar.style.margin = '0 2px 0 2px';
      bar.style.bottom = '0';
      bar.style.zIndex = '0';
      bar.style.background = `${chartInput[2].barColor}`;
      bar.style.transformOrigin = 'bottom';

      document.getElementById(`barContainer${dataCount}`).appendChild(bar);
    }


    //function that displays quantity of user data
    const quantityDisplay2 = function () {
      let quantityNum = document.createElement("div");
      quantityNum.id = `quantity${dataCount}`;
      quantityNum.classList = `display bar`;
      quantityNum.style.textAlign = 'center';
      quantityNum.style.position = 'absolute';
      quantityNum.style.width = '100%';
      quantityNum.style.bottom = `${displayDetails.quantityDisplay}`
      quantityNum.style.zIndex = '3';
      quantityNum.innerHTML = `${chartInput[2].quantity}`;

      document.getElementById(`bar${dataCount}C`).appendChild(quantityNum);
    }

    if (
      chartInput[0].label != '' &&
      chartInput[0].labelColor != '' &&
      chartInput[0].quantity != '' &&
      chartInput[0].barColor != '' &&
      chartInput[1].label != '' &&
      chartInput[1].labelColor != '' &&
      chartInput[1].quantity != '' &&
      chartInput[1].barColor != '' &&
      chartInput[2].label != '' &&
      chartInput[2].labelColor != '' &&
      chartInput[2].quantity != '' &&
      chartInput[2].barColor != '') {

      data.push(chartInput);
      console.log(chartInput);
      console.log(data);
      createLabelContainer();
      createLabel();
      createContainer();
      createBar();
      quantityDisplay();
      createLabel1();
      createBar1();
      quantityDisplay1();
      createLabel2();
      createBar2();
      quantityDisplay2();
    }
    else if (
      chartInput[0].label != '' &&
      chartInput[0].labelColor != '' &&
      chartInput[0].quantity != '' &&
      chartInput[0].barColor != '' &&
      chartInput[1].label != '' &&
      chartInput[1].labelColor != '' &&
      chartInput[1].quantity != '' &&
      chartInput[1].barColor != '') {

      data.push(chartInput);
      console.log(chartInput);
      console.log(data);
      createLabelContainer();
      createLabel();
      createContainer();
      createBar();
      quantityDisplay();
      createLabel1();
      createBar1();
      quantityDisplay1();
    }
    else if (
      chartInput[0].label != '' &&
      chartInput[0].labelColor != '' &&
      chartInput[0].quantity != '' &&
      chartInput[0].barColor != '') {

      data.push(chartInput);
      console.log(chartInput);
      console.log(data);
      createLabelContainer();
      createLabel();
      createContainer();
      createBar();
      quantityDisplay();
    }


    //second submit button
    const dataBtn = document.getElementById("chartDataBtn");
    dataBtn.addEventListener("click", function () {
      let dataInput = document.querySelectorAll(".inputBar");
      dataInput.forEach(item => {
        item.value = "";
      });
    });

    dataCount++;
  }

  //function to clear display input fields
  const btnDisplay = document.getElementById("chartDisplay");
  btnDisplay.addEventListener("click", function () {
    let inputs = document.querySelectorAll(".input");
    inputs.forEach(input => {
      input.value = '';
    });
  });

  //function that resets page
  const clear = document.querySelector('#buttonReset');
  clear.addEventListener("click", function () {
    let barData = document.querySelectorAll(".bar");
    console.log(barData);
    barData.forEach(bar => {
      bar.remove();
    })
  })

  const uiShowHide = document.querySelector('#showHide');
  uiShowHide.addEventListener("click", function () {
    let target = document.querySelector('#userInput');
    if (target.style.display !== 'none') {
      uiShowHide.innerHTML = 'show';
      target.style.display = 'none';
    } else if (target.style.display == 'none') {
      uiShowHide.innerHTML = 'hide';
      target.style.display = 'inline';
    }
  })

  const addButton = document.querySelector('#addBtn');
  addButton.addEventListener('click', function () {
    addCount++;
    let addValue1 = document.querySelector('.input1');
    let addValue2 = document.querySelector('.input2');
    if (addCount == 1 && addValue1.style.display == 'none') {
      addValue1.style.display = '';
    }
    else if (addCount == 2 && addValue2.style.display == 'none') {
      addValue2.style.display = '';
    }
  })

}

