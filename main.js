function calculateBMI() {
    weightBmi = document.getElementById("input-weight").value
    weightBmiCalc = weightBmi * 703
    heightBmi = document.getElementById("input-height").value
    heightBmiCalc = heightBmi**2
    bmi = weightBmiCalc / heightBmiCalc
    document.getElementById("bmi-output").innerHTML = "Your BMI is "+bmi.toFixed(1)+"!"

}

