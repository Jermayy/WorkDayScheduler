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
let hourTextbox = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let currentHour = parseInt(moment().format('H'));
let workHour = parseInt($('.hour').text());
// let storedSchedule = JSON.parse(localStorage.getItem("storedSchedule")) || [];

currentDate.text(moment().format('dddd, MMMM DD YYYY, h:mm a'));

// resetSchedule();
// setColour();
// setSchedule();


// function resetSchedule() {
//     $('.textInput').removeClass('present');
//     $('.textInput').removeClass('past');
//     $('.textInput').removeClass('future');
// }







// for (let i = 0; i < hourTextbox.length; i++) {

//     let time = hourTextbox[i].value;


if (currentHour === workHour) {
    $('#textInput-' + workHour).addClass('present');
} else if (currentHour > workHour) {
    $('#textInput-' + workHour).addClass('past');
} else if (currentHour < workHour) {
    $('#textInput-' + workHour).addClass('future');
}
// }









// function setSchedule() {
//     if (storedSchedule !== "") {
//         if (storedSchedule.time == $('timeDiv').attr('id')) {
//             $('#' + storedSchedule.time).children($('.textInput')).val(JSON.stringify(storedSchedule.text));
//         }
//     }
// }

// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();


//     let time = $(this).parent().attr("id");
//     let text = $(this).parent().children("#textArea-" + time).val();

//     if (text === "") {
//         return;
//     }


//     let schedule = {
//         time: time,
//         text: text
//     };

//     storedSchedule.push(schedule);
//     console.log(storedSchedule);
//     localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));


// });