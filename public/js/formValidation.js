// Calling all validations before submit
function validation() {
    return !!(checkUnameLen() & checkUnameChar() & checkPwdLen() & checkPwdChar() & checkcPwdMatch());
}

// UserName validation ** line 8 to 46 **
function checkUnameLen() {
    let uname = document.getElementById("uname").value;

    if (uname.length < 3) {
        document.getElementById("uname").style.borderColor = "red";
        document.getElementById("uname_error").style.display = "block";
        document.getElementById("uname_error").innerHTML =
            "<span style='color: red;'>&#10006 Username must be at least 3 alphanumeric characters. </span>";
        return false;
    }
    document.getElementById("uname").style.borderColor = "green";
    document.getElementById("uname_error").innerHTML =
        "<span style='color: green;'>&#10004 Username must be at least 3 alphanumeric characters. </span>";
    return true;
}

function checkUnameChar() {
    let uname = document.getElementById("uname").value;
    let uname_char = /^[a-zA-Z]+/g;

    if (!uname.match(uname_char)) {
        document.getElementById("uname").style.borderColor = "red";
        document.getElementById("uname_char_error").style.display = "block";
        document.getElementById("uname_char_error").innerHTML =
            "<span style='color: red;'>&#10006 Username must start with a character (a-z or A-Z). </span>";
        return false;
    }
    document.getElementById("uname").style.borderColor = "green";
    document.getElementById("uname_char_error").innerHTML =
        "<span style='color: green;'>&#10004 Username must start with a character (a-z or A-Z). </span>";
    return true;
}

function checkUname() {
    checkUnameLen();
    checkUnameChar();
}

document.getElementById("uname").addEventListener("click", checkUname);
document.getElementById("uname").addEventListener("input", checkUname);

// Password validation ** line 50 to 88 **
function checkPwdLen() {
    let pwd = document.getElementById("pwd").value;

    if (pwd.length < 8) {
        document.getElementById("pwd").style.borderColor = "red";
        document.getElementById("pwd_error").style.display = "block";
        document.getElementById("pwd_error").innerHTML =
            "<span style='color: red;'>&#10006 Password must be 8 characters long.</span>";
        return false;
    }
    document.getElementById("pwd").style.borderColor = "green";
    document.getElementById("pwd_error").innerHTML =
        "<span style='color: green;'>&#10004 Password must be 8 characters long.</span>";
    return true;
}

function checkPwdChar() {
    let pwd = document.getElementById("pwd").value;
    let pwd_char = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[(/*-+!@#$^&*)])/g;

    if (!pwd.match(pwd_char)) {
        document.getElementById("pwd").style.borderColor = "red";
        document.getElementById("pwd_char_error").style.display = "block";
        document.getElementById("pwd_char_error").innerHTML =
            "<span style='color: red;'>&#10006 Password must contain at least 1 upper case letter and 1 number and 1 of the following special characters ( / * - + ! @ # $ ^ & * ).</span>";
        return false;
    }
    document.getElementById("pwd").style.borderColor = "green";
    document.getElementById("pwd_char_error").innerHTML =
        "<span style='color: green;'>&#10004 Password must contain at least 1 upper case letter and 1 number and 1 of the following special characters ( / * - + ! @ # $ ^ & * ).</span>";
    return true;
}

function checkPwd() {
    checkPwdLen();
    checkPwdChar();
}

document.getElementById("pwd").addEventListener("click", checkPwd);
document.getElementById("pwd").addEventListener("input", checkPwd);

// Confirm Passowrd Validation ** line 92 to 109 **
function checkcPwdMatch() {
    let pwd = document.getElementById("pwd").value;
    let c_pwd = document.getElementById("c_pwd").value;

    if (pwd !== c_pwd || c_pwd == "") {
        document.getElementById("c_pwd").style.borderColor = "red";
        document.getElementById("c_pwd_error").style.display = "block";
        document.getElementById("c_pwd_error").innerHTML =
            "<span style='color: red;'>&#10006 Passwords must not be empty and must be identical.</span>";
        return false;
    }
    document.getElementById("c_pwd").style.borderColor = "green";
    document.getElementById("c_pwd_error").innerHTML =
        "<span style='color: green;'>&#10004 Passwords must not be empty and must be identical.</span>";
    return true;
}

document.getElementById("c_pwd").addEventListener("input", checkcPwdMatch);

// Password and Confirm password eye toggle ** line 111 to 128 **
function pwdToggle() {
    var toggle = document.getElementById("pwd");
    if (toggle.type === "password") {
        toggle.type = "text";
    } else {
        toggle.type = "password";
    }
}

function c_pwdToggle() {
    var toggle = document.getElementById("c_pwd");
    if (toggle.type === "password") {
        toggle.type = "text";
    } else {
        toggle.type = "password";
    }
}
