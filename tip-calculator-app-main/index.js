const buttonBox = document.querySelector(".button-box");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const resetBtn = document.querySelector(".reset-btn");
let currentTip = "0%";
const createButton = (inner, className) => {
  const button = document.createElement("button");
  button.innerHTML = inner;
  button.classList.add(className || "button");
  return button;
};

const addButtonsToBox = () => {
  const tips = ["5%", "10%", "15%", "25%", "50%"];
  const customTip = createButton("Custom", "custom-button");
  const buttons = [];
  tips.forEach((tip) => {
    const button = createButton(tip, "tip-button");
    buttons.push(button);
    button.addEventListener("click", (e) => {
      buttons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      currentTip = e.target.innerHTML;
      calculateTip(currentTip);
    });
    buttonBox.appendChild(button);
  });
  customTip.addEventListener("click", () => {
    currentTip = prompt("Enter custom tip amount");
    customTip.innerHTML = `${currentTip}%`;
    calculateTip(currentTip);
  });
  buttonBox.appendChild(customTip);
};

bill.addEventListener("input", () => {
  calculateTip(currentTip);
});

people.addEventListener("input", () => {
  calculateTip(currentTip);
});

const calculateTip = (tip) => {
  const billValue = Number(bill.value);
  const tipValue = Number(tip.replace("%", ""));
  const tipAmount = (billValue * tipValue) / 100;
  const totalAmount = Number(billValue) + tipAmount;
  const peopleValue = Number(people.value);
  if (!peopleValue || peopleValue === "0") {
    return;
  }
  const tipPerPerson = tipAmount / peopleValue;
  const totalPerPerson = totalAmount / peopleValue;
  const tipResult = document.querySelector(".tip-result");
  tipResult.innerHTML = `$${tipPerPerson.toFixed(2)}`;

  const totalResult = document.querySelector(".total-result");
  totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
};

resetBtn.addEventListener("click", () => {
  const tipResult = document.querySelector(".tip-result");
  const totalResult = document.querySelector(".total-result");
  const customButton = document.querySelector(".custom-button");
  tipResult.innerHTML = "$0.00";
  totalResult.innerHTML = "$0.00";
  bill.value = "";
  people.value = "";
  currentTip = "0%";
  customButton.innerHTML = "Custom";

  calculateTip(currentTip);
});

const init = () => {
  addButtonsToBox();
};

init();
