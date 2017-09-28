(function() {
    'use strict';

    var s,
        Ajaxified = {

            settings: {
                $url : 'https://api.elemeno.io/v1/',
                $btn : $('.elemeno').find('button')
            },


            init: function() {
                s = this.settings;
                this.bindUIActions();
            },

            bindUIActions : function() {
                s.$btn.on('click', function() {
                    Ajaxified.callAjax('singles/about-us');
                });
            },

            callAjax : function(item) {
                $.ajax({
                    url: s.$url + item,
                    type: 'GET',
                    headers : {
                        'Authorization': 'a54f0290-dbc3-11e6-8dc4-0b1175f0b82d'
                    },

                    success : function(response, textStatus, jqXHR) {
                        console.info(response.data);
                    },

                    error : function(response, textStatus, jqXHR) {
                        console.info(textStatus.statusText);
                    }

                });
            }


        };

    Ajaxified.init();

}());
