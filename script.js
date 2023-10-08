// Variabel For Color of status
const statusColors = {
  Underweight: "#D80032",
  "Normal weight": "#4CAF50",
  Overweight: "#FFC107",
  Obesity: "#FF5722",
  "Invalid BMI": "#000000",
};

// Function for Calculate BMI
BMI_Calculate = () => {
  const weightValue = document.getElementById("weight").value;
  const heightValue = document.getElementById("height").value;

  // Validation input
  if (weightValue === "" || heightValue === "") {
    const result = document.getElementById("result");
    result.innerHTML = "Masukkan berat dan tinggi terlebih dahulu!";
    result.style.color = "#D80032";
    return;
  }

  const calculation = weightValue / (heightValue / 100) ** 2;

  let status;

  switch (true) {
    case calculation < 18.5:
      status = "Underweight";
      break;
    case calculation >= 18.5 && calculation <= 24.9:
      status = "Normal weight";
      break;
    case calculation >= 25 && calculation <= 29.9:
      status = "Overweight";
      break;
    case calculation >= 30:
      status = "Obesity";
      break;
    default:
      status = "Invalid BMI";
  }

  const result = document.getElementById("result");
  result.innerHTML = `BMI: ${calculation.toFixed(
    2
  )} - Status: <span id="status">${status}</span>`;
  const statusElement = document.getElementById("status");
  statusElement.style.color = statusColors[status];
};

// Function for reset value
resetValue = () => {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").innerHTML = "";
};
