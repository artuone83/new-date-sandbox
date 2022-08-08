// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>new Date sandbox</h1>`;

const ONE_SECOND_IN_MILLISECONDS = 1000;
// date: Date
const getTimestamp = (date) => {
  const currentDate = new Date(date.setHours(0, 0, 0, 0));

  return Math.floor(currentDate.getTime() / ONE_SECOND_IN_MILLISECONDS);
};
// {dateFrom: Date, addDays: number} return milliseconds
const addDays = ({ dateFrom, addDays }) => {
  return dateFrom.setDate(dateFrom.getDate() + addDays);
};

const subtractDays = ({ date, subtructDays }) => {
  return date.setDate(date.getDate() - subtructDays);
};

const date = new Date(1659909600 * 1000);

console.log('new Date(date.toString()) --> ', new Date(date.toString()));
console.log('date.toISOString() -->', date.toISOString());
console.log('date.toLocaleString', date.toLocaleString('pl-PL'));

console.log('getTimestamp', getTimestamp(date));

console.log('addDays', addDays({ dateFrom: date, addDays: 1 }));
