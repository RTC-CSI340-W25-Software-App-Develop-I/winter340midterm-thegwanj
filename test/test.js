import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

// Test suite for testing the calculateStarAverage function
describe("Tests calculateStarAverage function", () => {

  it("Should return an average star rating of 3", () => {
    const results = calculateStarAverage(mockReviews);
    assert.equal(results, 3);
  });
  it("Should return an average star rating of 3.5 after getting a 5-star review", () => {
    mockReviews.push({username: "tester", image: "./images/avatar2.png", star: 5, review: "Very cool"})

    const results = calculateStarAverage(mockReviews);
    assert.equal(results, 3.5);
  });
});