/*
1 meter = 3.28084 feet
1 liter = 0.26417 gallon
1 kilogram = 2.2046 pound
*/

const lengthInfo = document.getElementById("length-info");
const volumeInfo = document.getElementById("volume-info");
const massInfo = document.getElementById("mass-info");
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const themeSwitch = document.getElementById("theme-switch");

let darkmode = localStorage.getItem("darkmode");

if (darkmode === "active") {
    enableDarkmode();
}

function meterToFeet(meters){
    return (meters * 3.2808).toFixed(3);
}

function feetToMeter(feet){
    return (feet / 3.2808).toFixed(3);
}

function literToGallon(liters){
    return (liters * 0.2642).toFixed(3);
}

function gallonToLiter(gallons){
    return (gallons / 0.2642).toFixed(3);
}

function kilogramToPound(kilograms){
    return (kilograms * 2.2046).toFixed(3);
}

function poundToKilogram(pounds){
    return (pounds / 2.2046).toFixed(3);
}

function convertUnits(){
    const units = inputEl.value;
    if (units === "") {
        alert("Please enter a number");
        lengthInfo.textContent = "0 meters = 0 feet | 0 feet = 0 meters";
        volumeInfo.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters";
        massInfo.textContent = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms";
        return;
    }
    if (units > 999999999 || units < -999999999) {
        alert("Please enter a number in the range of -999,999,999 to 999,999,999");
        inputEl.value = "";
        lengthInfo.textContent = "0 meters = 0 feet | 0 feet = 0 meters";
        volumeInfo.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters";
        massInfo.textContent = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms";
        return;
    }

    inputEl.value = "";
    lengthInfo.textContent = `${units} meters = ${meterToFeet(units)} feet | ${units} feet = ${feetToMeter(units)} meters`;
    volumeInfo.textContent = `${units} liters = ${literToGallon(units)} gallons | ${units} gallons = ${gallonToLiter(units)} liters`;
    massInfo.textContent = `${units} kilograms = ${kilogramToPound(units)} pounds | ${units} pounds = ${poundToKilogram(units)} kilograms`;
}

function enableDarkmode() {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

function disableDarkmode() {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

convertBtn.addEventListener("click", convertUnits);
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});