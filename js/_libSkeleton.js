//This is a skeleton of creating a custom JS library. Please change 'Leo' to the library name you want for your project

(function (window) {
    'use strict';

    //Create a function that will get attached to a Name space
    function leoLibFunction() {
       /* Create an Object and return that Object so that all properties & methods in that object can be attached to the function leoLibrary */
        var leoObject = {

            /* Define all your utilities below here */
            leoUtilitySample : function (element) {
                var $el = document.querySelector(element);
                console.info($el);
            }

            //End of leoOject
        };
        //Return the object in the leoLibrary function
        return leoObject;
    }
    //Now the above function leoLibrary is available to be attached to the global namespace of the Library

    if(typeof(window.LeoLibraryNamespace) === "undefined" || typeof jQuery !== "undefined")){
        window.LeoLibraryNamespace = leoLibFunction();
    }

}(window))


//This is a skeleton of Revealing Module Pattern with JS Pattern we been following
var leoModule = function(){

    /* Private Stuff */

    var settings = {
       $el : $('#someDiv'),
       $url : ''
    }

    function _PvtFunction() {
        var endPoint = 'http://someendpoint';
        return;
    }

    function publicFunction() {
        settings.$url = _PvtFunction();
        console.info(settings.$url);
    }


    /* Public Stuff */
    return {
        publicFunction : publicFunction
    }
};

//Usage of the Module in Application
window.onload = function () {
    var invokeTheRevealingPattern = leoModule();
    invokeTheRevealingPattern.publicFunction();
};






//2nd Version of revealing Pattern
var myObject = function() {
    /* Private Methods */
    var p = 'private var';

    function private_method1() {
      public.public_method1()
   }

    /* Public Methods */
   var public = {
      public_method1: function() {
         alert('do stuff')
      },
      public_method2: function() {
         private_method1()
      }
   };

    //Returning Public Method to be accessed globally
   return public;
} ();

//Usage of the Module in Application
window.onload = function () {
    myObject.public_method2()
};

