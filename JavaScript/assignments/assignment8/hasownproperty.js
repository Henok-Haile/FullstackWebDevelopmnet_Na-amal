const animal = {
    type: "mammal"
  };
  
  const dog = Object.create(animal);
  dog.name = "Buddy";
  
  for (const key in dog) {
    // if (dog.hasOwnProperty(key)) {
    //   console.log(key, ":", dog[key]); // Output: name : Buddy
    // } else {
    //   console.log(key, "is inherited."); // Output: type is inherited.
    // }
    console.log(key, ":",dog[key]);
  }
  