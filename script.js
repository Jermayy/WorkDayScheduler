//user will have time block from 9am to 5pm in hour increments when load page

// browser will read current day and time and display it above the scheduler      


// when user clicks on a time block, user can enter their task for that hour

// when user clicks save button, task is saved to localStorage until cleared

//browser will read real time data on current time and dynamically interact with application
// - if time has already past, time block = grey ;  
// - if current hour, time block = red;
// - if hour in future, time block = green;

let currentDate = $("#currentDay");
let timeDiv = $('.day-row');

let currentHour = parseInt(moment().format('H'));
let workHour = parseInt($('.hour').text());
let storedSchedule = JSON.parse(localStorage.getItem("storedSchedule")) || [];

currentDate.text(moment().format('dddd, MMMM DD YYYY, h:mm a'));

resetSchedule();
setColour();
setSchedule();


function resetSchedule() {
    $('.textInput').removeClass('present');
    $('.textInput').removeClass('past');
    $('.textInput').removeClass('future');
}


function setColour() {
    if (currentHour === workHour) {
        $('.textInput').addClass('present');
    } else if (currentHour > workHour) {
        $('.textInput').addClass('past');
    } else if (currentHour < workHour) {
        $('.textInput').addClass('future');
    }
}

function setSchedule() {
    if (storedSchedule != "") {
        if (storedSchedule.time == $('timeDiv').attr('id')) {
            $('#' + storedSchedule.time).children($('.textInput')).text(JSON.stringify(storedSchedule.text));
        }
    }
}

$(".saveBtn").on("click", function() {

    let time = $(this).parent().attr("id");
    let text = $(this).parent().children("#textArea-" + time).val();

    let schedule = {
        time: time,
        text: text

    }

    storedSchedule.push(schedule);
    localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));
    console.log(storedSchedule);
});