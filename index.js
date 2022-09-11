const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const p of passTimes){
    let day = new Date(p.risetime * 1000);
    console.log(`Next pass at ${day} for ${p.duration} seconds!`)
  }
});