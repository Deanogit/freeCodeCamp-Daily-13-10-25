// 24 to 12
// Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

// The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

function to12(time) {
  console.log(time);

  if (parseInt(`${time[0]}${time[1]}`) >= 12) {
    return `${time[0]}${time[1]}:${time[2]}${time[3]} PM`;
  } else {
    return `${time[0]}${time[1]}:${time[2]}${time[3]} AM`;
  }

  // return time;
}
