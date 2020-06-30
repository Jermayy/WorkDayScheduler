const currentDate = $("#currentDay");
currentDate.text(moment().format('dddd, MMMM DD YYYY, h:mm a'));

for (let hour = 9; hour <= 17; hour++) {
    let hourIndex = hour - 9;

    let newRow = $("<div>");
    newRow.addClass("row schedulerRow");
    newRow.attr("hourIndex", hourIndex);
    $('#container').append(newRow);

    const hourBlock = $("<div>");
    const timeText = $("<p>");
    hourBlock.addClass("col");
    timeText.addClass("time-block");
    hourBlock.append(timeText);
    newRow.append(hourBlock);

    let hourDisplay = 0;
    let ampm = "";
    if (hour > 12) {
        hourDisplay = hour - 12;
        ampm = "pm";
    } else {
        hourDisplay = hour;
        ampm = "am";
    }

    timeText.text(hourDisplay + " " + ampm);

    const textInputBox = $("<textarea>");
    textInputBox.attr('type', 'text');
    textInputBox.addClass('inputBox');
    textInputBox.attr('id', "input-" + hourIndex);
    textInputBox.attr('hour-index', hourIndex);

    let inputBoxDiv = $('<div>');
    inputBoxDiv.addClass("col-9");

    inputBoxDiv.append(textInputBox);
    newRow.append(inputBoxDiv);




    const saveBtn = $("<button>");
    saveBtn.attr('id', "input-" + hourIndex);
    saveBtn.attr('save-id', hourIndex);
    saveBtn.addClass('far fa-save saveIcon');
    newRow.append(saveBtn);




}










// //user will have time block from 9am to 5pm in hour increments when load page

// // browser will read current day and time and display it above the scheduler      


// // when user clicks on a time block, user can enter their task for that hour

// // when user clicks save button, task is saved to localStorage until cleared

// //browser will read real time data on current time and dynamically interact with application
// // - if time has already past, time block = grey ;  
// // - if current hour, time block = red;
// // - if hour in future, time block = green;

// 
// let timeDiv = $('.day-row');
// let hourTextbox = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// let currentHour = parseInt(moment().format('H'));
// let workHour = parseInt($('.hour').text());
// // let storedSchedule = JSON.parse(localStorage.getItem("storedSchedule")) || [];

// 

// // resetSchedule();
// // setColour();
// // setSchedule();


// // function resetSchedule() {
// //     $('.textInput').removeClass('present');
// //     $('.textInput').removeClass('past');
// //     $('.textInput').removeClass('future');
// // }







// // for (let i = 0; i < hourTextbox.length; i++) {

// //     let time = hourTextbox[i].value;


// if (currentHour === workHour) {
//     $('#textInput-' + workHour).addClass('present');
// } else if (currentHour > workHour) {
//     $('#textInput-' + workHour).addClass('past');
// } else if (currentHour < workHour) {
//     $('#textInput-' + workHour).addClass('future');
// }
// // }









// // function setSchedule() {
// //     if (storedSchedule !== "") {
// //         if (storedSchedule.time == $('timeDiv').attr('id')) {
// //             $('#' + storedSchedule.time).children($('.textInput')).val(JSON.stringify(storedSchedule.text));
// //         }
// //     }
// // }

// // $(".saveBtn").on("click", function(event) {
// //     event.preventDefault();


// //     let time = $(this).parent().attr("id");
// //     let text = $(this).parent().children("#textArea-" + time).val();

// //     if (text === "") {
// //         return;
// //     }


// //     let schedule = {
// //         time: time,
// //         text: text
// //     };

// //     storedSchedule.push(schedule);
// //     console.log(storedSchedule);
// //     localStorage.setItem('storedSchedule', JSON.stringify(storedSchedule));


// // });