const moment = require('moment');
function calculateTimeDiff(start, end) {
  
    const mStart = moment(start, "h:mm a");
    const mEnd = moment(end, "h:mm a");
    if(mStart > mEnd) {
      return mStart.diff(mEnd, "minutes")
    }
    return mEnd.diff(mStart, "minutes");
  };
module.exports = calculateTimeDiff;


// Անհրաժեշտ է տեստավորել օրվա AM ժամանակահատվածի ժամերի տաեբերությունները return 
//անող ֆունկցիա։

// Այդ նպատակով բացել եմ 3 case-եր calculateTimeDiff.test.js ֆայլում։
//Արդյունքում պարզեցի, որ երբ mStart֊ի արժեքը փոքր է mEnd֊ի արժեքից,
//պատասխանը լինում է մինուսով։ Դա ուղղեցի calculateTimeDiff ֆունցիայում և 
//հիմա բոլոր case-երը passed են։