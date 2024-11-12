function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function greet() {
    console.log("Hello");
    await delay(2000); // Wait for 2000 miliseconds which is equal to 2sec
    console.log("World");
  }
  
  greet();