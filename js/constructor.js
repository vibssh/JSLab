(function(){
  'use strict';

  //Our Constructor Function
  function vehicle(doors, transmission){

    //Properties on the Constructor function
    this.doors = doors;
    this.transmission = transmission;

    //Method on constructor function
    this.type = function(){
      switch(doors) {
        case 1:
          if(doors <=3){
              console.info('This is rickshaw');
          }
          break;
        case 2:
          if(doors === 4){
            console.info('This vehicle is a car');
          }
        break;

        case 1:
          if(doors > 4){
            console.info('This vehicle is a people\'s\ carrier');
          }
          break;

        default:
          console.info('This is not a motor vehicle');
          break;
      }
    }
  };


  var toyota = new vehicle(4, 'Manual');
  toyota.type();

}());
