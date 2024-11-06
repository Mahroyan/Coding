let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let completeDate = `${month}/${day}/${year}`;

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[today.getDate()];

document.getElementById('date').textContent = completeDate;
document.getElementById('day').textContent = `${dayName}`;