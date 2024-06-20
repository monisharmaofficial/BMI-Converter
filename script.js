function calculateBMI() {
  // First we Get the height and weight values
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // now check for the valid input
  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  // Calculate BMI = weight in kg / (height in mtr * height in mtr)
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  //we'll display the result
  const result = document.querySelector("#result");
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

  //code to execute extra  category of result
  let category = "";
  if (bmi < 18.5) {
    category = "Under weight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Range";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  result.innerHTML += `<br>You are classified as: ${category}`;
}
