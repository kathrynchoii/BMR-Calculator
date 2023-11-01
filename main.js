const calories = document.querySelector(".bmr_calculator .result .calories");
const calculateBtn = document.querySelector(".bmr_calculator .result .calculate-btn");
const age = document.querySelector(".bmr_calculator form #age");
const heightFt= document.querySelector(".bmr_calculator form #heightFt");
const heightIn= document.querySelector(".bmr_calculator form #heightIn");
const weight = document.querySelector(".bmr_calculator form #weight");
const errorMessage = document.querySelector(".bmr_calculator .result .error-message");
//BMR for women = 65.51 + 4.35 * weight + 4.7 * height - 4.7 * age
//BMR for men = 66.47 + 6.24 * weight + 12.7 * height - 6.75 * age

const calculateBMR = (weight, heightFt, heightIn, age, gender) => {
    const height = parseInt(heightFt) * 12 + parseInt(heightIn);
    weight = parseFloat(weight);
    age = parseFloat(age);
    if (gender == "male"){
        return 66.47 + 6.24 * weight + 12.7 * height - 6.75 * age;
    }
    return 65.51 + 4.35 * weight + 4.7 * height - 4.7 * age;
};

calculateBtn.addEventListener("click", () => {

    if (age.classList.contains("invalid") || heightIn.classList.contains("invalid") || heightFt.classList.contains("invalid") || weight.classList.contains("invalid")){
        errorMessage.classList.add("active");
        return;
    }
    errorMessage.classList.remove("active");

    let genderValue = document.querySelector(".bmr_calculator form input[name='gender']:checked").value;

    let BMR = calculateBMR(weight.value, heightFt.value, heightIn.value, age.value, genderValue);

    calories.innerHTML = BMR.toLocaleString("en-US");
});


//Input Validation

age.addEventListener("input", (e) =>{
    let ageValue = e.target.value;

    if(!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100){
        age.classList.add("invalid");
    } else {
        age.classList.remove("invalid");
    }
});

heightFt.addEventListener("input", (e) =>{
    let heightFtValue = e.target.value;

    if(!heightFtValue || isNaN(heightFtValue) || heightFtValue < 0){
        heightFt.classList.add("invalid");
    } else {
        heightFt.classList.remove("invalid");
    }
});

heightIn.addEventListener("input", (e) =>{
    let heightInValue = e.target.value;

    if(!heightInValue || isNaN(heightInValue) || heightInValue < 0){
        heightIn.classList.add("invalid");
    } else {
        heightIn.classList.remove("invalid");
    }
});

weight.addEventListener("input", (e) =>{
    let weightValue = e.target.value;

    if(!weightValue || isNaN(weightValue) || weightValue < 0){
        weight.classList.add("invalid");
    } else {
        weight.classList.remove("invalid");
    }
});