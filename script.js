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
let storedSchedule = [];
// let storedSchedule = JSON.parse(localStorage.getItem("storedSchedule")) || [];

currentDate.text(moment().format('dddd, MMMM DD YYYY, h:mm a'));

resetSchedule();
setColour();


function resetSchedule() {
    $('.textInput').removeClass('present');
    $('.textInput').removeClass('past');
    $('.textInput').removeClass('future');
}


console.log(currentHour);

console.log(workHour);

function setColour() {
    if (currentHour === workHour) {
        $('.textInput').addClass('present');
    } else if (currentHour > workHour) {
        $('.textInput').addClass('past');
    } else if (currentHour < workHour) {
        $('.textInput').addClass('future');
    }
}

if (storedSchedule != "") {
    if (schedule.time == $('timeDiv').attr('id')) {
        $('#' + time).children($('.textInput')).text(JSON.stringify(text));
    }
}




$(".saveBtn").on("click", function() {

    let text = $(this).parent().siblings(".textarea").text();
    let time = $(this).parent().attr("id");

    let schedule = {
        text: text,
        time: time
    }

    localStorage.setItem('storedSchedule', JSON.stringify(text));
    storedSchedule.push(schedule);
});


console.log(storedSchedule);




// function checkTime {

//     if (moment())



// }



// function pastTime {

// };

// function currentTime {

// }

// function futureTime {

// }