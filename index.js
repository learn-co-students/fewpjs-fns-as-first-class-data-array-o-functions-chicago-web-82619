function wakeDog(dogName, dogBreed) {
  let notice = `Wake ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

function leashDog(dogName, dogBreed) {
  let notice = `Leash ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

function walkToPark(dogName, dogBreed) {
  let notice = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

function throwFrisbee(dogName, dogBreed) {
  let notice = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

function walkHome(dogName, dogBreed) {
  let notice = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

function unleashDog(dogName, dogBreed) {
  let notice = `Unleash ${dogName} the ${dogBreed}`;
  console.log(notice)
  return notice
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let result = [];
  for (let action of routine) {
    result += action(dogName, dogBreed)
  }
  return result;
}
