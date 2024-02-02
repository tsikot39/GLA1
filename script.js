// Display Full Name
const fullName = "Johnson Benedict Corpus";
const h1Element = document.createElement("h1");
h1Element.textContent = fullName;
h1Element.style.textAlign = "center";
h1Element.style.color = "gray";
h1Element.style.fontFamily = "Calibri";
document.body.appendChild(h1Element);

// Dynamically create two input elements, a button, and a result/error div
document.addEventListener("DOMContentLoaded", function () {
  var inputElement1 = document.createElement("input");
  inputElement1.type = "text";
  inputElement1.id = "input1";
  inputElement1.fontFamily = "Calibri";
  inputElement1.fontSize = "18px";

  var inputElement2 = document.createElement("input");
  inputElement2.type = "text";
  inputElement2.id = "input2";
  inputElement2.fontFamily = "Calibri";
  inputElement2.fontSize = "18px";

  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Add Numbers";
  buttonElement.fontFamily = "Calibri";
  buttonElement.fontSize = "18px";
  buttonElement.addEventListener("click", checkAndSum);

  // Create div to center created elements
  var containerDiv = document.createElement("div");
  containerDiv.style.position = "absolute";
  containerDiv.style.top = "30%";
  containerDiv.style.left = "50%";
  containerDiv.style.textAlign = "center";
  containerDiv.style.backgroundColor = "lightblue";
  containerDiv.style.transform = "translate(-50%, -50%)";
  containerDiv.style.width = "300px";
  containerDiv.style.height = "160px";
  containerDiv.style.backgroundColor = "lightblue";

  var resultElement = document.createElement("div");
  resultElement.id = "result";

  var lineBreakElement1 = document.createElement("br");
  var lineBreakElement2 = document.createElement("br");
  var lineBreakElement3 = document.createElement("br");
  var lineBreakElement4 = document.createElement("br");
  var lineBreakElement5 = document.createElement("br");
  var lineBreakElement6 = document.createElement("br");

  document.body.appendChild(lineBreakElement1);
  document.body.appendChild(containerDiv);

  containerDiv.appendChild(lineBreakElement1);
  containerDiv.appendChild(lineBreakElement2);
  containerDiv.appendChild(inputElement1);
  containerDiv.appendChild(lineBreakElement3);
  containerDiv.appendChild(lineBreakElement4);
  containerDiv.appendChild(inputElement2);
  containerDiv.appendChild(lineBreakElement5);
  containerDiv.appendChild(lineBreakElement6);
  containerDiv.appendChild(buttonElement);
});

// Remove any previous error messages and result
function checkAndSum() {
  clearError();
  clearResult();
  resetInputBorders();

  // Get the input values
  var inputValue1 = document.getElementById("input1").value;
  var inputValue2 = document.getElementById("input2").value;

  try {
    // Try to parse the inputs as numbers
    var numericValue1 = parseFloat(inputValue1);
    var numericValue2 = parseFloat(inputValue2);

    if (isNaN(numericValue1) || isNaN(numericValue2)) {
      throw new Error("Both inputs must be valid numbers.");
    }

    // If both are valid numbers then calculate the sum
    var sum = numericValue1 + numericValue2;

    // Display the result on the page
    displayResult("The sum is: " + sum);
  } catch (error) {
    // If an error occurs, create an element to display the error on the page
    var errorElement = document.createElement("div");
    errorElement.id = "error-message";
    errorElement.style.color = "red";
    errorElement.style.fontSize = "18px";
    errorElement.style.textAlign = "center";
    errorElement.style.fontFamily = "Calibri";
    errorElement.innerHTML = "<br>" + "Error: " + error.message;

    input1.style.border = "2px solid red";
    input2.style.border = "2px solid red";

    // Append the error element to the body
    document.body.appendChild(errorElement);
  }
}

// Reset input borders to their default state
function resetInputBorders() {
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  input1.style.border = "";
  input2.style.border = "";
}

function clearError() {
  var errorElement = document.getElementById("error-message");
  if (errorElement) {
    // Remove the error element if it exists
    errorElement.remove();
  }
}

function clearResult() {
  var resultElement = document.getElementById("result");
  if (resultElement) {
    // Remove the result element if it exists
    resultElement.remove();
  }
}

// Create an element to display the result on the page
function displayResult(resultMessage) {
  var resultElement = document.createElement("div");
  resultElement.id = "result";
  resultElement.style.fontSize = "18px";
  resultElement.style.textAlign = "center";
  resultElement.style.fontFamily = "Calibri";
  resultElement.innerHTML = "<br>" + resultMessage;

  // Append the result element to the body
  document.body.appendChild(resultElement);
}
