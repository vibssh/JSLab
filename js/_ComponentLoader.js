/**
 * This is a Component Loader which brings in the Modules 
 */

//Creating a Global Namespace for Component to Load across the App
var ComponentLoader = {};

(function(){
    'use strict';
    var componentName = null;
    $(document).on('ready page:load', function(){
        $('[data-component]').each(function(index, element){
        componentName = $(element).data('component');
        
        //Check if the Property Exist on the ComponentLoader Object
        if(ComponentLoader.hasOwnProperty(componentName)){
            new ComponentLoader[componentName](element); // Creating a new object 
        }
    });
    });
    
}());

