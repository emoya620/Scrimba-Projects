const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    special: "~`!@#$%^&*()_-+={[}]|:;>.,?/"
};

let pwdElement1 = document.getElementById("password-1");
let pwdElement2 = document.getElementById("password-2");
let lengthElement = document.getElementById("pwd-length");
let alertElement = document.getElementById("alert-info");
let copyAlertElement = document.getElementById("copy-alert");
let includeNumbers = document.getElementById("include-numbers");
let includeSpecial = document.getElementById("include-special");

function generatePasswords(){
    let pwdLength = lengthElement.value;
    if (pwdLength < 10 || pwdLength > 32){
        alertElement.textContent = "Password must be between 10 to 32 characters";
        pwdElement1.textContent = "";
        pwdElement2.textContent = "";
        pwdElement1.style.height = "40px";
        pwdElement2.style.height = "40px";
        return;
    }
    else{
        alertElement.textContent = "";
    }

    let characterSet = characters.letters;
    if (includeNumbers.checked) {
        characterSet += characters.numbers;
    }
    if (includeSpecial.checked) {
        characterSet += characters.special;
    }
    
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < pwdLength; i++){
        randomIndex1 = Math.floor(Math.random() * characterSet.length);
        randomIndex2 = Math.floor(Math.random() * characterSet.length);
        
        password1 += characterSet[randomIndex1];
        password2 += characterSet[randomIndex2];
    }

    if (pwdLength > 23){
        let breakIndex = 0;
        if (pwdLength % 2 === 0){
            breakIndex = pwdLength / 2;
        }
        else{
            breakIndex = (pwdLength / 2) + 1;
        }

        password1 = password1.slice(0, breakIndex) + "<br>" + password1.slice(breakIndex);
        password2 = password2.slice(0, breakIndex) + "<br>" + password2.slice(breakIndex);

        pwdElement1.style.height = "60px";
        pwdElement2.style.height = "60px";
        pwdElement1.style.lineHeight = "20px";
        pwdElement2.style.lineHeight = "20px";
    }
    else{
        pwdElement1.style.height = "40px";
        pwdElement2.style.height = "40px";
    }
    pwdElement1.innerHTML = password1;
    pwdElement2.innerHTML = password2;
}

function copyToClipboard(id){
    // Get the HTML object with the text we wish to copy
    let copyElement = document.getElementById(id);

    // Copy the text to clipboard
    if (copyElement.textContent.trim() !== ""){
        navigator.clipboard.writeText(copyElement.textContent).then(() => {
            copyAlertElement.textContent = "Password copied to clipboard!";
            copyAlertElement.classList.add('show');
            setTimeout(() => {
                copyAlertElement.classList.remove('show');
            }, 2000);
        });
    }
}

pwdElement1.addEventListener('click', () => copyToClipboard('password-1'));
pwdElement2.addEventListener('click', () => copyToClipboard('password-2'));