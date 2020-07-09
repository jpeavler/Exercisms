let generatedNames = [];
const generateName = () => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let letterOne = alphabet[Math.floor(Math.random() * 26)];
    let letterTwo = alphabet[Math.floor(Math.random() * 26)];
    let numOne = Math.floor(Math.random()* 10).toString();
    let numTwo = Math.floor(Math.random()* 10).toString();
    let numThree = Math.floor(Math.random()* 10).toString();
    let name = letterOne.concat(letterTwo,numOne,numTwo,numThree);
    if(generatedNames.includes(name)) {
        name = generateName();
    } else {
        generatedNames.push(name);
    }
    return name;
}

export class Robot {
    constructor () {
        this._name = generateName();
    }
    get name() {
        return this._name;
    }
    reset() {
        this._name = generateName();
    }
 }

Robot.releaseNames = () => { 

};
