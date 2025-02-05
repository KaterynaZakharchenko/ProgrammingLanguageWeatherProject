var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(event) {
    if (event) event.preventDefault();

    regBox.style.display = "block";
    loginBox.style.display = "none";
    forgetBox.style.display = "none";

    regTab.classList.add("active");
    loginTab.classList.remove("active");
}

function loginTabFun(event) {
    if (event) event.preventDefault();

    regBox.style.display = "none";
    loginBox.style.display = "block";
    forgetBox.style.display = "none";

    loginTab.classList.add("active");
    regTab.classList.remove("active");
}

function forTabFun(event) {
    if (event) event.preventDefault();

    regBox.style.display = "none";
    loginBox.style.display = "none";
    forgetBox.style.display = "block";

    loginTab.classList.remove("active");
    regTab.classList.remove("active");
}

function register(event) {
    if (event) event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email === "") {
        alert("Email required.");
        return;
    } else if (password === "") {
        alert("Password required.");
        return;
    } else if (passwordRetype === "") {
        alert("Re-enter Password required.");
        return;
    } else if (password !== passwordRetype) {
        alert("Passwords don't match, please retype your password.");
        return;
    } else if (emailArray.indexOf(email) === -1) {
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registering! Try logging in now.");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";

        loginTabFun(); // Switch to login tab automatically
    } else {
        alert(email + " is already registered.");
        return;
    }
}

function login(event) {
    if (event) event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if (email === "") {
        alert("Email required.");
        return;
    } else if (i === -1) {
        alert("Email does not exist.");
        return;
    } else if (passwordArray[i] !== password) {
        if (password === "") {
            alert("Password required.");
            return;
        }
        alert("Incorrect password.");
        return;
    } else {
        alert(email + " you are now logged in! Welcome to our website.");

        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        window.location.href = "index.html";
        return;
    }
}

function forgot(event) {
    if (event) event.preventDefault();

    var email = document.getElementById("fe").value;

    if (email === "") {
        alert("Email required.");
        return;
    } else if (emailArray.indexOf(email) === -1) {
        alert("Email does not exist.");
        return;
    }

    alert("A password reset email has been sent. Check your inbox within 24 hours.");
    document.getElementById("fe").value = "";
}


/*var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                window.location.href="index.html";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }*/