//Do not change anything in this file////////////////////////
//3. Create a test for this function.
// Write the test in the test/test.js file
// Given an array of reviews it should return the average of that array.
export const calculateStarAverage = (reviewsArr) => {
  const sum = reviewsArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.star,
    0
  );
  const averageStar = sum / reviewsArr.length;
  return averageStar;
};
