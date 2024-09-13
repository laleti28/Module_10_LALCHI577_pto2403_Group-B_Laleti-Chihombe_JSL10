document.addEventListener("DOMContentLoaded", () => {
  // Add click event listener to the element with ID 'solveRoom1'
  document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch book data from 'books.json'
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        // Find the most recently published book
        const mostRecentBook = findMostRecentBook(books);
        // Display the title of the most recent book
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

// Add click event listener to the element with ID 'solveRoom2'
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // function call to find common concepts between JavaScript and React
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
     // Display the common concept
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

 
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          document.getElementById("room3Result").innerHTML = message;
        });
      });
  });
});

// Function to find the most recently published book based off date published
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => {
      return new Date(book.published) > new Date(mostRecent.published)
        ? book
        : mostRecent;
    });
  }

// Function to find intersection between JavaScript and React concepts
  function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}
// Asynchronous function to navigate through a labyrinth based on given directions
async function navigateLabyrinth(directions) {
      // Loop through each direction in the directions array
  for (let direction of directions) {
    // 1 second delay added
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Log the direction step to the console
    console.log(`Navigating: ${direction.step}`);
  }
  // Return a completion message after all directions have been processed
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
