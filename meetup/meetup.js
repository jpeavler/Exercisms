//Helper object to convert the day string into a number
const dayInNum = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

/*const getDays
@param number year: The year of the requested day
@param number month: The month to find all instances of the requested day
@param number day: The day of the week represented by a number.
@return array of all dates in month of a given day
*/
const getDays = (year, month, day) => {
  let allOfDay = [];
  let targetDay = new Date(year, month); //sets target day to first day of the month
  while(targetDay.getDay() !== day) {    //sets target day to first requested day of the month
    targetDay.setDate(targetDay.getDate() + 1);
  }
  while(targetDay.getMonth() === month) {//adds all instances of target day to array
    allOfDay.push(targetDay.getDate());
    targetDay.setDate(targetDay.getDate() + 7);
  }
  return allOfDay;
}

/*const meetup
@param number year: The year of the requested date.
@param number month: The month of the requested date.
    Note: months start at index one -> January == 1 ... December == 12
@param string condition: What time of the month to meet. Combines with the day param.
    Note: Accepted conditions: first, second, third, fourth, last, and teenth.
@param string day: Which day of the week
    Note: Accepted days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
@return Date object that matches all parameters
*/
export const meetup = (year, month, condition, day) =>  {
  let date;
  let possibleDates = getDays(year, month - 1, dayInNum[day]);
  switch (condition) {
    case 'teenth':
      date = possibleDates.filter(myDate => myDate > 12 && myDate < 20).pop();
      break;
    case 'first':
      date = possibleDates[0];
      break;
    case 'second':
      date = possibleDates[1];
      break;
    case 'third':
      date = possibleDates[2];
      break;
    case 'fourth':
      date = possibleDates[3];
      break;
    default: 
      date = possibleDates.pop();
  }
  return new Date(year, month -1, date);
}
