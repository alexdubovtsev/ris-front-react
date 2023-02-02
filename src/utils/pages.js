export const getPagesCount = (totalLocations, limit) => {
  return Math.ceil(totalLocations / limit);
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);    
  }
  return result;
}