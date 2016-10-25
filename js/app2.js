var MyKlass = (function () {
    var s = {
        settings: {
            btn: document.getElementById('btn'),
            msg: 'Hello'
        }
    },

    me = {};

    me.init = function () {
        setupBindings();
        //do other important setup things
    }

    function setupBindings() {
        //do UI bindings
        s.settings.btn.addEventListener('click', function() {
            nextMethod('Leo');
        });

    }

    function nextMethod(name) {
        console.log(s.settings.msg + ' ' + name);
    }

    return me;
}());
