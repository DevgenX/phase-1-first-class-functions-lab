// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = drivers => {
  return drivers.slice(drivers.length - 2, drivers.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fare => {
  return multiplier => {
    return fare * multiplier;
  };
};

const fareDoubler = fare => {
  const doubler = createFareMultiplier(fare);

  return doubler(2);
};

const fareTripler = fare => {
  const tripler = createFareMultiplier(fare);

  return tripler(3);
};

const selectDifferentDrivers = (drivers, func) => {
  if (func === returnFirstTwoDrivers) {
    return drivers.slice(0, 2);
  } else {
    return drivers.slice(drivers.length - 2, drivers.length);
  }
};
