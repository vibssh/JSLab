(function() {
    'use strict';
    var s,
        TabFeature = {
            settings: {
                $tabNav: document.querySelector('#tab-nav'),
                $tabLinks: document.querySelectorAll('.tab-link'),
                $tabContent: document.querySelectorAll('#tab-content div'),
                $tabContentParent: document.getElementById('tab-content')
            },

            init: function () {
                s = this.settings;
                this.bindUIActions();
                TabularLib.accordianObj.accordianInit(s.$tabNav, s.$tabLinks, s.$tabContent);
            },

            bindUIActions: function() {
                for (var i = 0; i < s.$tabLinks.length; i++) {
                    s.$tabLinks[i].addEventListener('click', function () {
                        TabFeature.Tab(this);
                    });
                }
            },

            Tab: function($clicked) {
                TabularLib.accordianObj.accordianToggle($clicked, s.$tabContent, s.$tabLinks, s.$tabContentParent);
            }
        };

    TabFeature.init();
}());



