//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
    let forward = input.split("");
    let backward = [];
    while(forward.length > 0){
        backward.push(forward.pop());
    }
    //let backward = forward.reverse();
    let output = backward.join("");
    return output;
};
