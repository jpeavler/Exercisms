//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(name, grade) {
    if(this._roster[grade]) {
      this._roster[grade].push(name);
    } else {
      this._roster[grade] = [name];
    }
    this._roster[grade].sort();
  }

  grade(gradeReq) {
    if(this._roster[gradeReq]) {
      return [...this._roster[gradeReq]];
    } else {
      return [];
    }

  }
}
