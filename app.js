(function () {
  'use strict';

  /* Object*/
  var animal = {};
  // Dot notation to add property
  animal.username = 'kitten';
  console.log(animal.username);

  //Bracket notation to add property
  animal['tagline'] = 'We like to meow';
  console.log(animal);

  //create variable noises and assign to empty array
  var noises = [];
  animal['noises'] = noises;
  console.log(animal);

  /* Loops */
  var count = 0;
  for (var prop in animal) {
    count += 1;
    console.log(`${count} ${prop}`);
    //console.log(animal[prop]);
    if (prop === 'username') {
      console.log(`Hi my name is ${animal[prop]}`);
    } else if (prop === 'tagline') {
      console.log(`I like to say ${animal[prop]}`);
    }

  }

  /* Array */
  var noiseArray = ['meow'];
  noiseArray.unshift('Woof');
  noiseArray.push('grrr');
  noiseArray[noiseArray.length] = "Roar";
  var len = noiseArray.length;
  console.log(len);
  for(var i = 0; i < len; i++){
    console.log(i);
  }
  console.log(noiseArray);
  animal.noises.push(noiseArray);
  console.log(animal);
  
  /* Animal Collection */
  console.log('##### Animal Collection #####');
  var animals = [];
  animals.push(animal);
  console.log(animals);
  
  var quackers = {
    username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] 
  };  
  console.log(quackers);
  
  animals.push(quackers);
  //animals.concat(quackers);
  console.log(animals);
  
  var mockers = {
    username : 'mockingDuck',
    tagline : 'mockDuck',
    noises: ['mockQuack']
  };
  
  var shockers = {
    username : 'shockingDuck',
    tagline : 'shockingDuck',
    noises : ['shockDuck']
  };
  
  animals.push(mockers);
  animals.push(shockers);
  console.log(animals.length);
  
}());