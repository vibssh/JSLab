//App.js

/* SW Registration  */
(function(){
  //check if sw is supported in the browser
  if('serviceWorker' in navigator){
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(){ //Promised based Registration
        console.info('SW Registered');
      });
  }
}());