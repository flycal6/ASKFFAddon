var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;


var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');


var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Thunderkatz",
    icon: {
        "16": "./cat-icon.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open("http://www.moneykatz.com/");
}

var button_teacher = buttons.ActionButton({
    id: "teacher-plus",
    label: "TeacherPlus",
    icon: {
        "16": "./teachericon.png"
    },
    onClick: handleClickTeacher
});

function handleClickTeacher(state) {
    tabs.open("https://gb.plusportals.com/ADP.GRADEBOOK.UITestPage.aspx?qtrs=JQwDzcIrLUDwAbJIIqftfkaGD6TE6CUUYoMKhNwv23q7qS4jI2FurfmMdAn+dPbY");
}

var button_detention = buttons.ActionButton({
    id: "detention",
    label: "Lunch Detention",
    icon: {
        "16": "./detention-icon.png"
    },
    onClick: handleClickDetention
});

function handleClickDetention(state) {
    tabs.open("https://docs.google.com/a/ask.edu.kw/forms/d/1B-BKZetR5UfAqLJs7vsGr9uu-7CEnMikqYtmzZU_V_Y/viewform");
}