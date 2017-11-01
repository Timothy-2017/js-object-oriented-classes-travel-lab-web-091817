class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getYear() + 1901);
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let beginningAve = eastWest.indexOf(this.beginningLocation.horizontal);
    let beginningSt = parseInt(this.beginningLocation.vertical);
    let endingAve = eastWest.indexOf(this.endingLocation.horizontal);
    let endingSt = parseInt(this.endingLocation.vertical);
    let side = Math.abs(beginningAve - endingAve);
    let up = Math.abs(beginningSt - endingSt);
    return side + up;
  }
  estimatedTime(peak) {
    let blocks = this.blocksTravelled();
    if (peak) {
      return Math.round(blocks / 2);
    } else {
      return Math.round(blocks / 3);
    }
  }
}
