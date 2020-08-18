/*const metup
@param number year: The year of the requested date.
@param number month: The month of the requested date.
    Note: months start at index one -> January == 1 ... December == 12
@param string condition: What time of the month to meet. Combines with the day param.
    Note: Accepted conditions: first, second, third, fourth, last, and teenth.
@param string day: Which day of the week
    Note: Accepted days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
*/
export const meetup = (year, month, condition, day) =>  {
  return new Date(year, month - 1, 1);
}
