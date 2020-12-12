var objPeople = [
    {
        username: "sitanshudevaiah@gmail.com",
        password: "Beyourself@07"
    },
    {
        username: "sitanshudevaiah13@gmail.com",
        password: "BeMyself@007"
    },
    {
        username: "iliketocode29@gmail.com",
        password: "BeMyself29@007"
    },
    {
        username: "sdlovesdanbro@gmail.com",
        password: "12@6_2017"
    }
]

let loggedIn = false;

function getInfo() {
    var username = document.getElementById("usern").value;
    var password = document.getElementById("userp").value;
    
    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password)
        {
            loggedIn = true;
            window.open("index.html");
            close = true;
            if(close == true){
                window.close("login.html");
            }
            return;
        }
        else{
            alert("Incorrect username or password.Please try again");
            return;
        }
    }
    
}