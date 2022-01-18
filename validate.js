/*
    File: validate.js
    Name: Henry Pacheco Cachon
    Class: CS325, January 2022
    Lab: 07
    Due: 17 January 2022

    rules:
    1. First name, last name, address cannot be empty
    2. Password must have 8 or more characters, at least one 
       character must be uppercase, at least one character
       must be lowercase, and it must have at least one
       special character
*/

"use strict";

// Function removes the name and address inputs
function clear_identity(){
    $("div").filter(document.getElementById("first-name")).hide();
    $("div").filter(document.getElementById("last-name")).hide();
    $("div").filter(document.getElementById("address")).hide();

    $("#hide").val("1");
}

// Function validates the first name entry (can't be empty)
function validate_first_name(e, name_regex){

    let first_name = $("input").filter("input[name^=first_name]").val();    
    
    if (!first_name.match(name_regex)){
        $("#first-name").css({"color":"red"});
        $("#formPrompt").append($("<li>").append("First Name Cannot be Empty!"));
        e.preventDefault();
    }
}

// Function validates the last name entry (can't be empty)
function validate_last_name(e, name_regex){

    let last_name = $("input").filter("input[name^=last_name]").val();

    if (!last_name.match(name_regex)){
        $("#last-name").css({"color":"red"});
        $("#formPrompt").append($("<li>").append("Last Name Cannot be Empty!"));
        e.preventDefault();
    }
}

// Function validates the address entry (can't be empty)
function validate_address(e, name_regex){

    let address = $("input").filter("input[name^=address]").val();

    if (!address.match(name_regex)){
        $("#address").css({"color":"red"});
        $("#formPrompt").append($("<li>").append("Address Cannot be Empty!"));
        e.preventDefault();
    }

}

// Function checks if the string contains one or more uppercase characters
function check_uppercase(e, password){
    let uppercase_regex = /[A-Z]+/;

    if (!password.match(uppercase_regex)){
        e.preventDefault();
    }
}

// Function checks if the string contains one or more lowercaser characters
function check_lowercase(e, password){
    let lowercase_regex = /[a-z]+/;

    if (!password.match(lowercase_regex)){
        e.preventDefault();
    }
}

// Function checks if string contains one or more special characters
function check_special_characters(e, password){
    let special_regex = /[!@#$\%\^\&\*]+/;

    if (!password.match(special_regex)){
        e.preventDefault();
    }
}

// Function checks if the string is at least 8 characters long
function check_length(e, password){
    let length_regex = /^.{8,}$/

    if (!password.match(length_regex)){
        e.preventDefault();
    }
    else{
        $("#length").css({"color":"limegreen"});
    }
}

// Function validates the password entry 
function validate_password(e){
    let password = $("input").filter("input[name^=password]").val();

    check_uppercase(e, password);
    check_lowercase(e, password);
    check_special_characters(e, password);
    check_length(e, password);
}

// Function only updates list item color to limegreen if requirement is met 
// else it is set to red (one or more uppercase characters)
function live_check_uppercase(password){
    let uppercase_regex = /[A-Z]+/;

    if (!password.match(uppercase_regex)){
        $("#password").css({"color":"red"});
        $("#uppercase").css({"color":"red"});
    }
    else{
        $("#uppercase").css({"color":"limegreen"});
    }
}


// Function only updates list item color to limegreen if requirement is met 
// else it is set to red (one or more lowercase characters)
function live_check_lowercase(password){
    let lowercase_regex = /[a-z]+/;

    if (!password.match(lowercase_regex)){
        $("#password").css({"color":"red"});
        $("#lowercase").css({"color":"red"});
    }
    else{
        $("#lowercase").css({"color":"limegreen"});
    }
}

// Function only updates list item color to limegreen if requirement is met 
// else it is set to red (one or more special characters)
function live_check_special_characters(password){
    let special_regex = /[!@#$\%\^\&\*]+/;

    if (!password.match(special_regex)){
        $("#password").css({"color":"red"});
        $("#special").css({"color":"red"});
    }
    else{
        $("#special").css({"color":"limegreen"});
    }
}

// Function only updates list item color to limegreen if requirement is met 
// else it is set to red (8 or more characters)
function live_check_length(password){
    let length_regex = /^.{8,}$/

    if (!password.match(length_regex)){
        $("#password").css({"color":"red"});
        $("#length").css({"color":"red"});
    }
    else{
        $("#length").css({"color":"limegreen"});
    }
}

// Function is responsible for constantly checking the user's 
// input in the password input field. 
function live_validate_password(){
    let password = $("input").filter("input[name^=password]").val();

    live_check_uppercase(password);
    live_check_lowercase(password);
    live_check_special_characters(password);
    live_check_length(password);
}



$(document).ready(function(e){

    // Calls on the live_validate_password function each time a key is released
    // while the password text input is selected
    $("input").filter("input[name^=password]")[0].addEventListener("keyup", live_validate_password);

    // Function validates the input form each time submit is pressed
    $("#JASF").submit(function(e){
        
        // Only checks identity if the anonymous button isn't pressed
        if ($("#hide").val() == 0){
            let name_regex = /^[a-zA-Z]+/
            validate_first_name(e, name_regex);
            validate_last_name(e, name_regex);
            validate_address(e, name_regex);
        }

        // Always checks the password on post
        validate_password(e);
        
    });


});