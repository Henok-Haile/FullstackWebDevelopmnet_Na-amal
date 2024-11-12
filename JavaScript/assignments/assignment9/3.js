function processData(data) {
    return new Promise(async (resolve) => {
      console.log("Processing data:", data);
      await delay(1000);
      resolve(data * 2); 
    });
  }