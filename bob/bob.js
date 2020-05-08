//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let bobResponds;
  if(!/\d/.test(message) && !/[a-zA-Z]/.test(message)){
    bobResponds = 'Fine. Be that way!'
  }
  else if(message[message.length -1] == '?' && message == message.toUpperCase()) {
    bobResponds = 'Calm down, I know what I\'m doing!'
  }else if(message[message.length - 1] == '?') {
    bobResponds = 'Sure.';
  }else if(message == message.toUpperCase()) {
    bobResponds = 'Whoa, chill out!';
  }else{
    bobResponds = 'Whatever.';
  }
  return bobResponds;
};
