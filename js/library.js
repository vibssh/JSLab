//Library

(function () {
    'use strict';

    function Tabular() {
        var TabularLib = {

            //01. Current Year
            currentYear: function (el) {
                var dt = new Date();
                var yr = dt.getFullYear();
                el.innerHTML = yr;
            },

            //02. Accordian Library
            accordianObj: {


                accordianInit: function (tabNav, tabLinks, tabContent) {

                    var firstTabLink = tabLinks[0];
                    firstTabLink.classList.add('active');

                    var firstTabContent = tabContent[0];
                    firstTabContent.classList.add('tab-selected');
                },

                accordianToggle: function ($clicked, tabContent, tabLinks, tabContentParent) {
                    var dataId = $clicked.getAttribute('data-tab');
                    var tabContents = tabContent;
                    var tabLinks = tabLinks;

                    //Remove Active Class from each of the Tab link triggers
                    for (var i = 0; i < tabLinks.length; i++) {
                        tabLinks[i].classList.remove('active');
                    }

                    // Adding Active Class to the clicked Link
                    $clicked.classList.add('active');

                    //Remove Selected Class from each of the Tab Content
                    for (var i = 0; i < tabContents.length; i++) {
                        tabContents[i].classList.remove('tab-selected');
                    };

                    //Adding Selected Class to the corresponding Tab Content
                    var showContent = tabContentParent.querySelector('div[data-tab="' + dataId + '"]');
                    showContent.classList.add('tab-selected');
                }
            }

        };

        return TabularLib;
    };

    if (typeof (TabularLib) === 'undefined') {
        window.TabularLib = Tabular();
    }

})(window);

