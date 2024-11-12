// 1. delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // 2. fetchData function
  function fetchData() {
    return new Promise(async (resolve) => {
      await delay(2000); // Wait for 2 seconds
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
      resolve(randomNumber);
    });
  }
  
  // 3. processData function
  function processData(data) {
    return new Promise(async (resolve) => {
      console.log("Processing data:", data); // Log the data
      await delay(1000); // Wait for 1 second
      resolve(data * 2); // Resolve with data multiplied by 2
    });
  }
  
  // 4. Chain the functions together
  fetchData()
    .then(data => processData(data))
    .then(result => console.log("Processed result:", result))
    .catch(error => console.error("An error occurred:", error));
  