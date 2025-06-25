const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const daysEl = document.getElementById("days");

let currentDate = new Date();

function renderCalendar(date) {
  let year = date.getFullYear();
  let month = date.getMonth();

  monthEl.textContent = months[month];
  yearEl.textContent = year;

  // First day of the month
  const firstDay = new Date(year, month, 1).getDay();
  // Total days in month
  const totalDays = new Date(year, month + 1, 0).getDate();

  daysEl.innerHTML = "";

  // Add empty divs for spacing
  for (let i = 0; i < firstDay; i++) {
    daysEl.innerHTML += `<div></div>`;
  }

  // Add days
  for (let day = 1; day <= totalDays; day++) {
    const today = new Date();
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    daysEl.innerHTML += `<div class="${isToday ? "today" : ""}">${day}</div>`;
  }
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementById("prev").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("next").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
