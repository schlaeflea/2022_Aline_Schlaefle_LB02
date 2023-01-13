function validate()
{
    var username=document.getElementById("Email").value;
    var password=document.getElementById("password").value;

    if(username=="user"&& password=="password")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed")
    }
}

let javascriptObj = {name: "John", age: 30};
let jsonObj = JSON.stringify(javascriptObj);
console.log(jsonObj);
