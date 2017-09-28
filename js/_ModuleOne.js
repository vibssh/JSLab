//(function(){
//    'use strict';
//    var ModuleOne = {
//        settings: {
//
//        },
//
//        init: function(element){
//            ModuleOne.settings.$el = $(element).find('p');
//            ModuleOne.settings.$btn = $(element).find('#button');
//            ModuleOne.bindUIActions();
//        },
//
//        bindUIActions: function(){
//            ModuleOne.settings.$btn.on('click', function(e){
//                e.preventDefault();
//                ModuleOne.changeColor();
//            });
//            // console.info($(ModuleOne.settings.$el).html());
//        },
//
//        changeColor: function (){
//            ModuleOne.settings.$el.css('color', 'red');
//        }
//    };
//    ComponentLoader.ModuleOne = ModuleOne.init;
//}());

var Module = function(){
    //Private Stuff
    var settings = {

    },

    init = function(element){
       settings.$el = $(element).find('p');
       settings.$btn = $(element).find('#button');
        console.info(settings.$btn);
       bindUIActions();
    },

    bindUIActions = function(){
        settings.$btn.on('click', function(e){
           e.preventDefault();
           changeColor();
        });
    },

    changeColor = function(){
      settings.$el.css('color', 'red');
    };


    //Public API
    return {
       ModuleOne : init
    };

};

$(document).ready(function(){
   var m = Module();

    ComponentLoader.ModuleOne = m.ModuleOne;

});
