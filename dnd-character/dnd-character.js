//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (baseStat) => {
  if(baseStat >= 3 && baseStat <=18){
  let mod = baseStat - 10;
  mod = Math.floor(mod/2);
  return mod;
  }else if(baseStat < 3){
    throw new Error('Ability scores must be at least 3')
  }else if(baseStat > 18){
    throw new Error('Ability scores can be at most 18')
  }
};

export class Character {
  static rollAbility()  {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let die3 = Math.floor(Math.random() * 6) + 1;
    let die4 = Math.floor(Math.random() * 6) + 1;

    let smallest = Math.min(die1, die2, die3, die4);
    let total = 0;
    switch(smallest){
      case die1:
          total = die2 + die3 + die4;
          break;
      case die2:
          total = die1 + die3 + die4;
          break;
      case die3:
          total = die1 + die2 + die4;
          break;
      case die4:
          total = die1 + die2 + die3; 
    }
    return total;
  }
  constructor(){
    this._strength = this.rollAbility;    //need to resolve rollAbility
    this._dexterity = this.rollAbility;
    this._constitution = this.rollAbility;
    this._intelligence = this.rollAbility;
    this._wisdom = this.rollAbility;
    this._charisma = this.rollAbility;
    this._hitpoints = abilityModifier(this._constitution);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
