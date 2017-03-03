(function () {
    'use strict';
    var s,
      AccordianWidget = {
        settings: {
          $tabNav: document.getElementById('tab-nav'),
          $tabLinks: document.getElementsByClassName('tab-link')
            //$tabContent: document.getElementById('tab-content')
        },

        init: function (tabContent) {
          s = this.settings;
          s.$tabContent = document.querySelector(tabContent);
          this.bindUIActions();
          var firstTabLink = s.$tabLinks[0];
          firstTabLink.classList.add('active');

          var firstTabContent = s.$tabContent.children[0];
          firstTabContent.classList.add('tab-selected');
        },

        bindUIActions: function () {
          for (var i = 0; i < s.$tabLinks.length; i++) {
            s.$tabLinks[i].addEventListener('click', function () {
              AccordianWidget.accordianMethod(this, s.$tabContent);
            })
          }

        },

        accordianMethod: function ($clicked) {
          var dataId = $clicked.getAttribute('data-tab');
          var tabContents = s.$tabContent.children;

          //Remove Active Class from each of the Tab link triggers
          for (var i = 0; i < s.$tabLinks.length; i++) {
            s.$tabLinks[i].classList.remove('active');
          }

          // Adding Active Class to the clicked Link
          $clicked.classList.add('active');

          //Remove Selected Class from each of the Tab Content
          for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove('tab-selected');
          };

          //Adding Selected Class to the corresponding Tab Content
          var showContent = s.$tabContent.querySelector('div[data-tab="' + dataId + '"]');
          showContent.classList.add('tab-selected');

        }
      };

    //Pass in the Parent Element Selector of all the Tab content
    AccordianWidget.init('#tab-content');
  }());
