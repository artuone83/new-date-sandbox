// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>new Date sandbox</h1>`;

const subtractDays = (date, subtructDays) => {
  return date.setDate(date.getDate() - subtructDays);
};
const date = new Date(2022, 7, 6);

console.log(date.toISOString());
console.log(date.toLocaleString('pl-PL'));

const msToSec = Math.floor(new Date(2022, 7, 6).getTime() / 1000);
console.log(msToSec);