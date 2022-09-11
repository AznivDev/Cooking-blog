function calculateTransitTime(miles) {

    const milesPerHour = 50;
    const driveHoursPerDay = 11;
    const hoursPerDay = 24;
    const hoursPerFirstDay = 7;
    const milesPerFirstDay = milesPerHour * hoursPerFirstDay;

    let milesToCalc;
    if (miles <= milesPerFirstDay) {
      return Math.round(miles / milesPerHour) + 2 + 2;
    }
    milesToCalc = miles - milesPerFirstDay;
    let number = Math.round(milesToCalc / milesPerHour) + driveHoursPerDay;
    return Math.round((hoursPerDay - driveHoursPerDay) * (number / driveHoursPerDay) + number);//13*(17/11)+17
  
  };
  module.exports = calculateTransitTime;

