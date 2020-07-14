interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving ${animal.type} at speed ${speed}`);
}

const horse: Horse = { type: 'horse', runningSpeed: 10 };
moveAnimal(horse);
