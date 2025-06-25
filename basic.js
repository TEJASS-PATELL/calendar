let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let calender = new Date();

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
date.innerHTML = calender.getDate()<10 ? "0" : "" + calender.getDate();
day.innerHTML = weekdays[calender.getDay()];
month.innerHTML = months[calender.getMonth()];
year.innerHTML = calender.getFullYear();