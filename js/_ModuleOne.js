// (function(){
//     'use strict';
//     var ModuleOne = function(element){
//         var $el = $(element).find('p');
//         console.info($($el).text());
//     };

//     ComponentLoader.ModuleOne = ModuleOne;
// }());


(function(){
    'use strict';
    var ModuleOne = {
        settings: {
            
        },

        init: function(element){
            ModuleOne.settings.$el = $(element).find('p');
            ModuleOne.settings.$btn = $(element).find('#button');
            ModuleOne.bindUIActions();
        },

        bindUIActions: function(){
            ModuleOne.settings.$btn.on('click', function(e){
                e.preventDefault();
                ModuleOne.changeColor();
            });
            // console.info($(ModuleOne.settings.$el).html());
        },

        changeColor: function (){
            ModuleOne.settings.$el.css('color', 'red');
        }
    };
    ComponentLoader.ModuleOne = ModuleOne.init;
}());