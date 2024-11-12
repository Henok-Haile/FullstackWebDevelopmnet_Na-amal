function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

console.log(delay(1000));