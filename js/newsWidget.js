//var app = app || {};

////object literal
//app = {
//    init: function () {
//        this.cache();
//        this.bind();
//    },
//    cache: function () {
//        this.anchor = $('button');
//    },
//    bind: function () {
//        this.anchor.on('click', this.doSomething)
//    },
//    doSomething: function () {
//        console.log("Simple app.");
//    }
//}

//app.init();


// Modular
var Module = (function() {
    'use strict';
    return {
        publicFunc : function() {
            console.log('Hello World');
        },

        publicFunc2 : function() {
            console.log('Function - 2')
        }
    };

}());

Module.publicFunc();
