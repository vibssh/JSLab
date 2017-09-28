var Person = (function () {
    'use strict';
    var s = {
        settings: {
            btn: document.getElementById('btn-person'),
            msg: {
                English: 'hello',
                Hindi: 'namastey',
                Polish: 'cześć'
            }
        }
    },

    me = {};

    me.init = function () {
        bindUIActions();
    };

    function bindUIActions() {
        s.settings.btn.addEventListener('click', function () {
            sayHello('bam-bam');
        });
    };

    function sayHello(name) {
        if (name === 'leo') {
            console.log(s.settings.msg.English + ' ' + name);
        } else {
            console.log(s.settings.msg.Polish + ' ' + name);
        }
    };

    return me;
}());
