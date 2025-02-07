//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
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
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

// TODO: 1. Append the reviews to the DOM
const renderReviews = (reviews) => {
  // Selecting our DOM
  const container = document.querySelector(".reviews");

  // Clear our previous rendering if any
  container.innerHTML = "<h3>Reviews</h3>"

  // Go through each review in the reviews array and render it to the DOM
  reviews.forEach((review) => {
    // Container for the whole review
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review_container";

    const image = document.createElement("img");
    image.src = review.image;

    // Container for the p elements
    const div = document.createElement("div");

    const username = document.createElement("p");   
    username.textContent = review.username;
    const rating = document.createElement("p");    
    rating.textContent = review.star;
    const reviewText = document.createElement("p");
    reviewText.textContent = review.review;

    // Adding the p elements to the div
    div.append(username, rating, reviewText);

    // Putting the img and div into the main container
    reviewContainer.append(image, div);

    // Appending our review to the main container in order to render it
    container.append(reviewContainer);
  });
};

// TODO: 2. Append new reviews to the DOM from the form
const handleFormSubmit = (e) => {
  e.preventDefault();

  // Create new review object
  const newReview = {
    username: e.target.username.value,
    image: e.target.image.value,
    star: e.target.star.value,
    review: e.target.review.value,};

  // Append to reviews array
  reviews.push(newReview);

  // Render our reviews
  renderReviews(reviews);
};

// Function to assign event listener(s)
const assignListeners = () => {
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

// Assigning listeners at the start of the program as well as rendering our existing reviews, if any
assignListeners();
renderReviews(reviews);