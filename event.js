var arrayValues = [];

document.getElementById("add").addEventListener("click", addNumber);
document.getElementById("calculate").addEventListener("click", sumOfNumbers);

function addNumber() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  arrayValues.push(input1, input2);
  document.getElementById("array").innerHTML = arrayValues;
}

function sumOfNumbers() {
  var sum = 0;
  arrayValues.forEach(add);
  document.getElementById("sum").innerHTML = sum;

  function add(value) {
    sum = parseFloat(sum) + parseFloat(value);
  }
}
