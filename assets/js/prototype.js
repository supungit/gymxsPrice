
function inputEnabler(trigger, element, scenario) {
    var checkBox = document.getElementById(trigger);
    var inputBox = document.getElementById(element);
    var featureSet = '';
    if (scenario == 'one') {
        featureSet = 'rf-';
    }
    else if (scenario == 'two') {
        featureSet = 'mb-';
    }

    if (checkBox.checked == true) {
        inputBox.removeAttribute('disabled');
        inputBox.classList.remove('disabled');

        for (var i = 1; i < 8; i++) {
            document.getElementById(featureSet + i).innerHTML = "YES";
        }

    } else {
        inputBox.setAttribute('disabled', 'disabled');
        inputBox.value = "0";
        inputBox.classList.add('disabled');
        for (var i = 1; i < 8; i++) {
            document.getElementById(featureSet + i).innerHTML = "NO";
        }
    }
}
function hideElements(){
    for (var i = 0; i < 21; i++) {
        document.getElementById('forcast-' + i).style.display = "none";
    }
}
function enableForcast(checkbox) {
    if (checkbox.checked == true) {
        for (var i = 0; i < 21; i++) {
            document.getElementById('forcast-' + i).style.display = "block";
        }
    }
    else{
        for (var i = 0; i < 21; i++) {
            document.getElementById('forcast-' + i).style.display = "none";
        }
    }
}

function setTotal(display, display2, v1, v2, currlement, totalDisplay, baseDisplay, scenario) {
    var field1 = document.getElementById(display);
    var field2 = document.getElementById(display2);
    var field3 = document.getElementById(totalDisplay);
    var field4 = document.getElementById(baseDisplay);
    var basePrice = 200;
    var rPrice1 = document.getElementById('r1').value;
    var rPrice2 = document.getElementById('r2').value;
    var mPrice1 = document.getElementById('i1').value;
    var mPrice2 = document.getElementById('i2').value;
    var totalAdditionalMembers;

    if (scenario == 'one') {
        totalAdditionalMembers = parseFloat(rPrice1) + parseFloat(mPrice1);
    }

    else if (scenario == 'two') {
        totalAdditionalMembers = parseFloat(rPrice2) + parseFloat(mPrice2);
    }
    if (parseFloat(currlement.value) > 200) {
        basePrice = 180;
    }

    value1 = document.getElementById(v1).value;
    value2 = document.getElementById(v2).value;
    field1.innerHTML = 500 + parseFloat(value1) + parseFloat(value2);

    field2.innerHTML = "£ " + parseFloat(currlement.value) * .12 + " (" + parseFloat(currlement.value) + " x £ 0.12)";

    field3.innerHTML = "£ " + (parseFloat(basePrice) + parseFloat(totalAdditionalMembers * .12));

    field4.innerHTML = "£ " + basePrice;
}