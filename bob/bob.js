//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let bobResponds;
  if(!/[0-9]/.test(message) && !/[a-zA-Z]/.test(message) && !/[?]/.test(message)){
    bobResponds = 'Fine. Be that way!'
  }
  else if(message.endsWith('?') && message == message.toUpperCase() && /[A-Z]/.test(message)) {
    bobResponds = 'Calm down, I know what I\'m doing!'
  }else if(message.trimEnd().endsWith('?')) {
    bobResponds = 'Sure.';
  }else if(message == message.toUpperCase() && /[a-zA-Z]/.test(message)) {
    bobResponds = 'Whoa, chill out!';
  }else{
    bobResponds = 'Whatever.';
  }
  return bobResponds;
};
