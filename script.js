//user will have time block from 9am to 5pm in hour increments when load page

// browser will read current day and time and display it above the scheduler      


// when user clicks on a time block, user can enter their task for that hour

// when user clicks save button, task is saved to localStorage until cleared

//browser will read real time data on current time and dynamically interact with application
// - if time has already past, time block = grey ;  
// - if current hour, time block = red;
// - if hour in future, time block = green;

let currentDate = $("#currentDay");

function showCurrentDay() {
    currentDate.text(moment().format('dddd, MMMM DD YYYY, h:mm:ss a'));
}

showCurrentDay();