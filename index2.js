const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes); // had to change 'printPassTimes' - not a function..
  });