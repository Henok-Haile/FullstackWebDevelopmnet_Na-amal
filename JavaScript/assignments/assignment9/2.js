function fetchData() {
    return new Promise(async (resolve) => {
      await delay(2000);
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    });
  }