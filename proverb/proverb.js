const line = (item1, item2) => {  //Helper function that takes in two items and enters them into the standard line.
  return `For want of a ${item1} the ${item2} was lost.\n`;
};

const finalLine = (item, qualifier) => {  //Helper function to generate the last line in the proverb.
  return qualifier ? `And all for the want of a ${qualifier} ${item}.`  //If there is a qualifier, use it.
    : `And all for the want of a ${item}.`; //If no qualifier, don't use it.
}

export const proverb = (...params) => { //Utilizes rest parameter functionality to allow any number of parameters
  let result = "";  //start with an empty string
  if(params.length === 0) { //If there are no parameters given then return an empty string
    return result;
  }
  let end = params.length -1; //capture the index of the last item of the params array.
  let qualifier;  //A variable to store the qualifier for the final line, if it exists. If not, leave undefined.
  if (params[end].qualifier) {  //If the final parameter is an object with a qualifier value
    qualifier = params.pop().qualifier; //remove that object from the params array and grab the qualifier value to assign
    end = end -1; //since we popped off the last param, we need to decrement the end of list index variable.
  }
  params.forEach((param, index) => {  //Loop through each parameter
    let addOn = index !== end ? line(param, params[index + 1])  //If current param isn't at the end of params array, generate a regular line.
      : finalLine(params[0], qualifier);  //If the last parameter, generate the final line with potential qualifier (when defined).
      result = result.concat(addOn);  //Add the generated line to the result.
  });
  return result;  //Return the proverb with all lines added.
};