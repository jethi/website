function colorFunc() {
    var obj = document.getElementById("test");
    var color = window.getComputedStyle(obj).color;
    if(color == "rgb(255, 0, 0)") {
        color = "red"
    }
    else if(color == "rgb(255, 255, 0)") {
        color = "yellow"
    }
    else if(color == "rgb(0, 0, 255)") {
        color = "blue"
    }
    var myElement = document.getElementById("colors");
    var bgElement = document.getElementById("background");
    var selectedValue = myElement.value;
    if(selectedValue == bgElement.value) {
        window.alert("Cannot have same color as background.");
        myElement.value = color;
    }
    else {
        var text = document.getElementById("test");
        text.style.color = selectedValue;
    }
}

function backgroundFunc() {
    var obj = document.getElementById("test");
    var background = window.getComputedStyle(obj).backgroundColor;
    if(background == "rgb(255, 0, 0)") {
        background = "red"
    }
    else if(background == "rgb(255, 255, 0)") {
        background = "yellow"
    }
    else if(background == "rgb(0, 0, 255)") {
        background = "blue"
    }
    var myElement = document.getElementById("background");
    var colorElement = document.getElementById("colors")
    var selectedValue = myElement.value;
    if(selectedValue == colorElement.value) {
        window.alert("Cannot have same background as color.");
        myElement.value = background;
    }
    else {
        var text = document.getElementById("test");
        text.style.backgroundColor = selectedValue;
    }
}

function caseFunc() {
    var myElement = document.getElementById("cases");
    var val = myElement.value;
    var text = document.getElementById("test");
    text.style.textTransform = val;
    if(val == "lowercase") {
        text.style.width = "490px";
    }
    else if (val == "uppercase"){
        text.style.width = "610px";
    }
    else if (val == "capitalize"){
        text.style.width = "520px";
    }
}