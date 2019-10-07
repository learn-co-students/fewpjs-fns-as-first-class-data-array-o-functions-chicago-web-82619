function wakeDog(dogName, dogBreed) {
  let exercise = `Wake ${dogName} the ${dogBreed}`;
  console.log(exercise);
  return exercise
};

function leashDog(dogName, dogBreed) {
  let exercise = `Leash ${dogName} the ${dogBreed}`;
  console.log(exercise);
  return exercise
};

function walkToPark(dogName, dogBreed) {
  let exercise = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(exercise);
  return exercise
};

function throwFrisbee(dogName, dogBreed) {
  let exercise = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(exercise);
  return exercise
};

function walkHome(dogName, dogBreed) {
  let exercise = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(exercise);
  return exercise
};

function unleashDog(dogName, dogBreed) {
  let exercise = `Unleash ${dogName} the ${dogBreed}`
  console.log(exercise);
  return exercise
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let routineArray = [];
  for(let i = 0; i < routine.length; i++) {
    routineArray.push(routine[i](dogName, dogBreed));
  };
  return routineArray
}