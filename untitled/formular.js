
//deklarieren der versch. input variables
const form = document.getElementById('formular');
const Name = document.getElementById("name");
const Nachname = document.getElementById("nachname");
const Email = document.getElementById("email");
let isValid = true;


// Anzeigen der Fehlermeldung
function showError(input, message) {
    isValid = false;
    const formControl = input.parentElement;
    formControl.className = 'form-control error spalte-rechts';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Anzeigen bei richtigem ausfüllen
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success spalte-rechts';
}

// eingegebene E-Mail überprüfen
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email ist nicht korrekt');
    }
}

// Prüfen ob alles ausgefüllt ist
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} muss ausgefüllt sein`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}


// Länge der Inputs prüfen
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} muss mindestens ${min} Zeichen sein`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} muss weniger als ${max} Zeichen sein`
        );
    } else {
        showSuccess(input);
    }
}

// Name des Input Felds
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// beim Abschicken des Forms benutzte Functions
function validateForm(){
    if(!checkRequired([Name, Email, Nachname])){
        checkLength(Name, 3, 20);
        checkLength(Nachname, 3, 20);
        checkEmail(Email);
    }

    if (isValid == true) {
        alert(`Vielen Dank für deine Kontaktanfrage ${Name.value} ${Nachname.value} , ich werde mich bei Ihnen melden!`)
    }else {
        console.log("nicht abgeschickt!");
        isValid = true;
    }
}
// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

// Captcha
function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}
function ValidateCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 =         removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
        return true;
    }else{
        return false;
    }
}
function removeSpaces(string){
    return string.split(' ').join('');
}

