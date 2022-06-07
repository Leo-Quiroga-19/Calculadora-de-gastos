let names = [];
let result = [];

function namesAndBills() {
    document.getElementById("InputName").value !== "" &&
    document.getElementById("InputBills").value !== ""
  ?
    dataCollection()
  :
    document.getElementById("half").innerText =
      "Por favor, rellene todos los campos del formulario o ingrese un valor valido.";
}
function dataCollection() {
  let nameValue = document.getElementById("InputName").value;
  let billsValue = document.getElementById("InputBills").value;
  imprMembers(nameValue, billsValue);
  pushAndimpr(nameValue, billsValue);
}
function pushAndimpr(nameValue, billsValue) {
  names.push(nameValue);
  result.push(billsValue);
  finalValue();
}
function imprMembers(name, price) {
  let text = name + ": " + price + " $";
  imprFunction(text);
}
function imprFunction(text) {
  const h4 = document.createElement("h4");
  const imprPant = document.getElementById("displayresult");
  h4.innerText = text;
  imprPant.append(h4);
}
function finalValue() {
  let { valueResult, valueHalf } = valueFunction();
  document.getElementById("finalResult").innerText =
    "Total: " + valueResult + " $";
  document.getElementById("half").innerText =
    "A cada uno le toca aportar: " + valueHalf + " $";
}
function valueFunction() {
  let valueResult = finalResult(result);
  let valueHalf = valueResult / result.length;
  return { valueResult, valueHalf };
}
function finalResult(array) {
  let finalScore = 0;
  for (const element of array) {
    finalScore += parseInt(element);
  }
  return finalScore;
}
