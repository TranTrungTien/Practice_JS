const newYear = new Date("2022-01-01T00:00:00+07:00");

let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");

const msOfDay = 24 * 60 * 60 * 1000;
const msOfHours = 60 * 60 * 1000;
const msOfMinutes = 60 * 1000;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;


function nowUntilNewYear(){
    let now = new Date();
    let timeRemaining = newYear - now;

    days = Math.floor(timeRemaining / msOfDay);
    timeRemaining = timeRemaining % msOfDay;
    hours = Math.floor(timeRemaining / msOfHours);
    timeRemaining = timeRemaining % msOfHours;
    minutes = Math.floor(timeRemaining / msOfMinutes);
    timeRemaining = timeRemaining % msOfMinutes;
    seconds = Math.floor(timeRemaining / 1000);

    return {day : days, hour : hours, minute : minutes, second : seconds};
};
let countdown = null;

setInterval(()=>{
    countdown = nowUntilNewYear();
    day.textContent = countdown.day;
    hour.textContent = countdown.hour;
    minute.textContent = countdown.minute;
    second.textContent = countdown.second;
}, 1000);





