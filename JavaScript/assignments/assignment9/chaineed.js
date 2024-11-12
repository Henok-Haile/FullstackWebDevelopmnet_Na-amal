
  function fetchData() {
    return new Promise(async (resolve) => {
      await delay(2000); // Wait for 2 seconds
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    });
  }
  
  
  function processData(data) {
    return new Promise(async (resolve) => {
      console.log("Processing data:", data);
      await delay(1000);
      resolve(data * 3);
    });
  }
  
  
  fetchData()
    .then(data => processData(data))
    .then(result => console.log("Processed result:", result))
    .catch(error => console.error("An error occurred:", error));
  