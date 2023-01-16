function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;


    if (email === "user@gmx.ch" && password === "12345678") {
        alert("login succesfully");
        return false;
    } else {
        alert("login failed")
    }

    if (email.length < 3) {
        alert("Email Adresse muss mindestens 3 Zeichen lang sein!");
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

}


