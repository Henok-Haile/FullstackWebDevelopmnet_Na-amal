fetchData()
  .then(data => processData(data))
  .then(result => console.log("Processed result:", result))
  .catch(error => console.error("An error occurred:", error));