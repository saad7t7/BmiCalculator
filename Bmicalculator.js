const button = document.getElementById('btn');
button.addEventListener("click", () => {

    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const result = document.getElementById('output');
    let height_status = false;
    let weight_status = false;
    
    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = "Please provide a valid weight"
    }
    else {
        document.getElementById('weight_error').innerHTML = "";
        weight_status = true;
    }
    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = "Please provide a valid height"
    }
    else {
        document.getElementById('height_error').innerHTML = "";
        height_status = true;
    }
    if (height_status && weight_status) {
        let BMI = (weight / ((height * height) / 10000)).toFixed(2);

        if (BMI < 18.5) {
            result.innerHTML = "UnderWeight:" + BMI;
        }
        else if (BMI >= 18.5 && BMI <= 24.9) {
            result.innerHTML = "Healthy:" + BMI;
        }
        else if (BMI >= 25 && BMI <= 29.9) {
            result.innerHTML = "OverWeight:" + BMI;
        }
        else if (BMI >= 30 && BMI <= 39.9) {
            result.innerHTML = "Obesity:" + BMI;
        }
        else {
            result.innerHTML = "SevereObesity:" + BMI;
        }
    }
    else {
        alert("This form has errors")
        result.innerHTML = "";
    }
}
)