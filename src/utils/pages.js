export const getPagesCount = (totalLocations, limit) => {
  return Math.ceil(totalLocations / limit);
};

