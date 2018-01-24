﻿ //============================VALIDATION EVENT================================== -->

function validation_alphabetical(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[a-zA-Z ]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
            swal({
                title: "NUMERIC NOT ALLOWED",
                text: "You cannot enter Numeric Values or Special Characters",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            },
function () {
});
        }
    }
}

function validation_numeric(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
            swal({
                title: "ALPHABETS NOT ALLOWED",
                text: "You cannot enter Alphabets or Special Characters Values",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            },
function () {
});
        }
    }
}


function validation_phone(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9+-]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
            swal({
                title: "ALPHABETS NOT ALLOWED",
                text: "You cannot enter Alphabets or Special Characters Values",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            },
function () {
});
        }
    }
}


function validation_cnic(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9-]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
            swal({
                title: "ALPHABETS NOT ALLOWED",
                text: "You cannot enter Alphabets or Special Characters Values",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            },
function () {
});
        }
    }
}
