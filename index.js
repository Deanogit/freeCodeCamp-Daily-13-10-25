// 24 to 12
// Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

// The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

function to12(time) {
  console.log(time);

  // get hours
  let hours = parseInt(time[0] + time[1]);
  console.log(hours);

  // get mins
  const mins = time.slice(2);
  console.log(mins);

  // determine period
  const period = hours >= 12 ? 'PM' : 'AM';

  // convert 0 hours to 12 (Midnight)
  if (hours === 0) {
    hours = 12;
  }

  // conver 13-23 to 1-11 (Afternoon)
  else if (hours > 12) {
    hours = hours - 12;
  }

  return `${hours}:${mins} ${period}`;

  // return time;
}
