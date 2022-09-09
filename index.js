// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>new Date sandbox</h1><p>Follow Console logs 👇</p>`;

const ONE_SECOND_IN_MILLISECONDS = 1000;
// date: Date
const getTimestamp = (date) => {
  const currentDate = new Date(date.setHours(0, 0, 0, 0));

  return Math.floor(currentDate.getTime() / ONE_SECOND_IN_MILLISECONDS);
};
// {date: Date, addDays: number} return milliseconds
const addDays = ({ date, addDays }) => {
  return new Date(date).setDate(date.getDate() + addDays);
};

const subtractDays = ({ date, subtructDays }) => {
  return new Date(date).setDate(date.getDate() - subtructDays);
};

// date: Date | string | number, return milliseconds
export const startOfDay = (date) => {
  return new Date(date).setHours(0, 0, 0, 0);
};

// date: Date | string | number, return milliseconds
export const endOfDay = (date) => {
  return new Date(date).setHours(23, 59, 59, 999);
};

// milliseconds: number
export const getTimestampInSeconds = (milliseconds) => {
  return Math.floor(milliseconds / ONE_SECOND_IN_MILLISECONDS);
};

const date = new Date(1662760800000);

console.log('new Date(date.toString()) --> ', new Date(date.toString()));
console.log('date.toISOString() -->', date.toISOString());
console.log('date.toLocaleString', date.toLocaleString('pl-PL'));

console.log('getTimestamp', getTimestamp(date));

console.log('addDays', addDays({ date, addDays: 1 }));
