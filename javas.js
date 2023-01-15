const form = document.getElementById(`form`);
const username = document.getElementById(`username`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const password2 = document.getElementById(`password2`);

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
};
/* function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if (!(email === "user@gmx.ch" && password === "12345678")) {
        alert("login failed")
    } else {
        alert("login succesfully");
        return false;
    }
    if (password.length < 8) {
        alert("Das Passwort muss mindestens 8 Zeichen lang sein!");
    } else {
        alert("login succesfully");
        return false;
    }
    var jsonString = JSON.stringify(obj);
    console.log(jsonString);
} */

