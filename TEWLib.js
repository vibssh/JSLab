/*
 * Project      => _TEWLib  
 * Description  => A JS Library created with Handy Utilities 
 * Dependency   => jQuery
 * Created      => 13.03.2017
 * Version      => 1.0.0
 * Author       => leo@the-earthworks.com
 */

(function (window) {
  'use strict';

  function tewLibFunction() {
    var tewLibObject = {
      /* Put all your Utilities in this Object */

      //01. Get Current year
      getCurrentYear: function (element) {
        var dt = new Date();
        var yr = dt.getFullYear();
        element.innerHTML = yr;
      },

      //02. AJAX Utility - with lazy Loading of images as you scroll or click load more
      fetchData: function ($endpoint, $method, $successCallBack, $errorCallBack, options) {
        options = options || null || 'undefined'; // These are optional Parameters with default values set
        var $data = options.$data || {};
        var $headers = options.$Headers || {};

        $.ajax({
          url: $endpoint,
          type: $method,
          dataType: 'json',
          crossDomain: true,
          data: $data,
          headers: $headers,
          contentType: 'application/json; charset=utf-8',

          success: function (data) {
            $successCallBack && $successCallBack(data);
          },
          error: function () {
            $errorCallBack && $errorCallBack();
          }
        });
      },

      //03. In ViewPort Utility - Checks to see if element is in viewport
      isInViewPort: function ($element) {
        var rect = $element.getBoundingClientRect();
        var html = document.documentElement;
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.top <= (window.innerHeight || html.clientHeight) - 50 // (-50px is adding bottom plus 50px to show the content)
        );
      },

      //04. Lazy Load IMG and Background Image
      lazyMedia: function ($el, $elementDataAttribute) {
        var $elements = $el;
        for (var i = 0; i < $elements.length; i++) {
          var element = $elements[i];
          var source = $(element).data($elementDataAttribute);
          var inView = this.isInViewPort(element);

          if (inView) {
            $(element).addClass('lazy-fadeIn');
            $(element).attr($elementDataAttribute, source);
          }
        }
      },

      //05. Truncate Text
      truncateText: function (element) {
        //Text element to truncate
        var stringToTrim = $.trim($(element).text());

        //Capture Class of Element
        var classValue = $(element).attr('class');
        console.info(stringToTrim);
        console.info(classValue);

        //Max Characters 
        var maxCharacters = classValue.split('-').pop();
        console.info(maxCharacters);

        var trimmedString = stringToTrim.substr(0, maxCharacters);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))); // This truncates the text without truncating the word in middle
        trimmedString += '...'; // This adds the ... after the truncated text
        return trimmedString;
      },

      //06. Toggle Show / Hide with sliding effect
      toggleDisplay: function (trigger, element) {
        var invisible = true;
        trigger.click(function () {
          if (invisible) {
            element.slideUp(0, function () {
              element.removeClass('accessibly-hidden')
                .slideDown('fast');
            });
          } else {
            element.slideUp('fast', function () {
              element.addClass('accessibly-hidden')
                .slideDown('fast');
            });
          }
          invisible = !invisible;
        });
      },

      //07. Tabs 
      tabbed: function ($clicked, $tabLinks, $tabContent, $tabContentParent) {

        var dataId = $clicked.data('tab'); // clicked tab data attribute

        var tabContents = $tabContent; // all tab contents

        var tabLinks = $tabLinks; // All tab links            

        //Add class on the clicked tab nav item and remove from all
        for (var i = 0; i < $tabLinks.length; i++) {
          tabLinks[i].classList.remove('active');
        }

        $clicked[0].classList.add('active');

        //Remove tab-selected class from all the tabcontents and addclass to the clicked items content
        //for (var j = 0; j < tabContents.length; j++) {
        //    tabContents[j].classList.remove('tab-selected');
        //}
        $(tabContents).removeClass('tab-selected');

        //Adding class tab-selected to relevant items
        var showTabContent = $($tabContentParent).find('div[data-tab="' + dataId + '"]');
        $(showTabContent).addClass('tab-selected');

      },

      //08. Modal
      modal: function ($modalButton, $modalBackdrop, $modalContent, $direction, options) {
        /* Optional Parameter */
        options = options || null || 'undefined';
        var $timeOut = options.$timeout || 200;
        var $modalBodyClose = options.$modalBodyClose || false;
        var $modalAcceptBtn = options.$modalAcceptBtn || null || 'undefined';
        var $modalDeclineBtn = options.$modalDeclineBtn || null || 'undefined';
        var $modalAcceptUrl = options.$modalAcceptUrl || '#';

        /* Setting variables */
        var modalBtn = $modalButton;
        var modal = $modalBackdrop;
        var modalContent = $modalContent;
        var direction = $direction;
        var timeOut = $timeOut;

        var wrapper = $('#wrapper');

        var bodyTopPos;
        var el = document.querySelector('body');

        var closeModal = function () {

          //Resetting body properties of scroll and wrapper position
          $('body').removeClass('no-scroll');
          el.scrollTop = bodyTopPos;
          $('#wrapper').css('top', 0);

          //Closing Modal
          modalContent.addClass(direction);
          modal.removeClass('activate').fadeOut();

        };

        /*On Load give direction to the Content to come from by adding class */
        $modalContent.addClass(direction);

        //User Click Event to trigger Modal
        modalBtn.on('click', function () {

          //Capturing Body Scroll Position
          bodyTopPos = el.scrollTop;

          //Setting wrapper Top position to negative body scrollpos and adding class noscroll to body
          $(wrapper).css('top', -bodyTopPos);
          $('body').addClass('no-scroll');

          //Activating Modal
          modal.fadeIn().addClass('activate');
          setTimeout(function () {
            modalContent.removeClass(direction);
          }, timeOut);
        });

        //User Click Event to Close Modal on body
        if ($modalBodyClose) {
          modal.on('click', function () {
            closeModal();
          });
        }

        // Modal Accept Button 
        if ($modalAcceptBtn !== 'undefined' || null) {
          $modalAcceptBtn.attr('href', $modalAcceptUrl);

          //User Click Event when Decline Button Clicked
          $modalAcceptBtn.on('click', function (e) {
            e.preventDefault();
            if ($modalAcceptUrl !== '#') {
              window.open($modalAcceptUrl, '_blank');
            }

            closeModal();
          });
        }

        //Modal Decline Button
        if ($modalDeclineBtn !== 'undefined' || null) {
          $modalDeclineBtn.on('click', function () {
            closeModal();
          });
        }
      },

      //09. SlideShow
      slideShow: function () {
        var $parent = $('.m-slider');
        //var $sliderEl;
        var $dotsIndex;
        var $parentIndex;

        var $slideWrapperWidth;
        var $currentSlideIndex;
        var $totalSlides;

        /* Auto SlideShow */
        function tewSlideShow() {

          /* Do the Loop on the m-slider element on load */
          $parent.each(function (index, $parent) {
            var $interval = null;
            var $slides;
            $parentIndex = index;
            $($parent).addClass('m-slider--' + $parentIndex);


            //console.info($parent);
            // Actual Slides containing Images
            $slides = $($parent).find('.m-slider__slide');



            //Slider Wrapper
            var $sliderEl = $($parent).find('div[data-class="m-slider__wrapper"]');


            var $isAutoSlide = $($sliderEl).data('autoplay') || 'true';
            var $isSlideArrow = $($sliderEl).data('slidearrow') || 'true';
            var $isSlideDots = $($sliderEl).data('slidedots') || 'true';
            var $autoDuration = $($sliderEl).data('duration') || 5000;


            /* width of the slides Based on number of slides */
            $totalSlides = $slides.length;

            $slideWrapperWidth = $totalSlides * 1000; // 1000 is defined in the css as the max-width on the container in which the slides will be shown

            //Giving width to the slides container
            $($sliderEl).css('width', $slideWrapperWidth);

            //First  Slide active class on load
            $($slides).first().addClass('tewSlideActive');
            var $images = $($parent).find('.tewSlideActive');

            // Adding src to image
            var $imgDataSrc = $($images[0])[0].children[0].dataset.src;
            $($images[0])[0].children[0].src = $imgDataSrc;


            /* Current Slide */
            $currentSlideIndex = $($parent).find('.tewSlideActive').index();

            $($sliderEl).addClass('m-slider__wrapper--' + $currentSlideIndex);


            /* Button Declared / Defined */
            var $nextBtn = $($parent).find('.m-slider-arrowcontrol > .next-slide-btn');
            var $prevBtn = $($parent).find('.m-slider-arrowcontrol > .previous-slide-btn');

            //Disabled The previous Button on load
            $prevBtn.addClass('tewSlideBtnDisabled');

            /* Dots Declared / Defined */
            var $dots = $($parent).find('input');

            $($dots).each(function (index, $dots) {

              var dotsIdx = index;
              var $labels = $($dots).next();

              $($dots).attr({
                'name': 'slide-dots-' + $parentIndex,
                'id': dotsIdx + "-" + $parentIndex
              });

              $($labels).prop({
                'for': dotsIdx + "-" + $parentIndex
              });

            });

            //Event Hooked to the changing of the dots
            $($dots).on('change', function () {
              /* Stop the Auto Carousel */
              clearInterval($interval);

              var $clickedDotId = $(this).attr('id');
              var $clickedId = $clickedDotId.split('-')[0];

              var slides = $(this).parent().parent().parent().parent().parent().find('.m-slider__slide');
              var dotParent = $(this).parent().parent().parent().parent().parent();

              var slidesLength = $(slides).length - 1; //cause the index starts at 0

              $(slides).removeClass('tewSlideActive'); // RemoveActive class on the slides
              var currentSlide = $(dotParent).find('div[data-slide="' + $clickedId + '"]').addClass('tewSlideActive'); // Adding Active Class to slide corresponding to the dots

              var currentSlideIndex = currentSlide.index();

              // Adding src to image
              var $imgDataSrc = $(currentSlide[0])[0].children[0].dataset.src;
              $(currentSlide[0])[0].children[0].src = $imgDataSrc;


              //Previous Button
              if (currentSlideIndex === 0) {
                $prevBtn.addClass('tewSlideBtnDisabled');
              } else {
                $prevBtn.removeClass('tewSlideBtnDisabled');
              }


              //Next Button
              if (currentSlideIndex === slidesLength) {
                $nextBtn.addClass('tewSlideBtnDisabled');
              } else {
                $nextBtn.removeClass('tewSlideBtnDisabled');
              }


              $($sliderEl).removeClass();
              $($sliderEl).addClass('m-slider__wrapper--' + $clickedId);
            });


            /* Arrow Navigation */
            //NEXT BUTTON CLICK
            $nextBtn.on('click', function (e) {
              e.preventDefault();
              /* Stop auto slider */
              clearInterval($interval); // Stopping the auto carousel

              //Get Current Active Slide Index
              var arrowParent = $(this).parent().parent();
              var slides = $(arrowParent).find('.m-slider__slide');
              var slidesLength = $(slides).length;

              var currentSlide = $(arrowParent).find('.tewSlideActive');
              var currentSlideIndex = currentSlide.index();
              var idx = currentSlideIndex + 1;


              var $currentDot = $($dots)[idx];
              $($dots).prop('checked', false);
              $($currentDot).prop('checked', 'checked');

              var nextSlide = currentSlide.next();
              var nextIndex = nextSlide.index() + 1;
              currentSlide.removeClass('tewSlideActive');
              nextSlide.addClass('tewSlideActive');

              // Adding src to image
              console.info($(nextSlide[0].children[0])[0]);
              // Adding src to image
              var $imgDataSrc = $($(nextSlide[0].children[0])[0]).data('src');
              $($(nextSlide[0].children[0])[0]).prop('src', $imgDataSrc);


              if (nextIndex >= slidesLength) {
                $nextBtn.addClass('tewSlideBtnDisabled');
              } else {
                $nextBtn.removeClass('tewSlideBtnDisabled');
                $prevBtn.removeClass('tewSlideBtnDisabled');
              }

              $($sliderEl).removeClass();
              $($sliderEl).addClass('m-slider__wrapper--' + idx);
            });

            //PREVIOUS BUTTON CLICK
            $prevBtn.on('click', function (e) {
              e.preventDefault();
              /* Stop auto slider */
              clearInterval($interval); // Stopping the auto carousel
              //autoSlideShow(); // Restart Auto Carousel
              //interval = setInterval(autoSlideShow, $autoDuration);

              var arrowParent = $(this).parent().parent();
              var slides = $(arrowParent).find('.m-slider__slide');
              var slidesLength = $(slides).length;

              var currentSlide = $(arrowParent).find('.tewSlideActive');
              var currentSlideIndex = currentSlide.index();
              var idx = currentSlideIndex - 1;

              var $currentDot = $($dots)[idx];
              $($dots).prop('checked', false);
              $($currentDot).prop('checked', 'checked');

              var prevSlide = currentSlide.prev();
              var prevIndex = prevSlide.index();
              currentSlide.removeClass('tewSlideActive');
              prevSlide.addClass('tewSlideActive');

              if (prevIndex <= 0) {
                $prevBtn.addClass('tewSlideBtnDisabled');
                $nextBtn.removeClass('tewSlideBtnDisabled');
              } else {
                $prevBtn.removeClass('tewSlideBtnDisabled');
                $nextBtn.removeClass('tewSlideBtnDisabled');
              }

              $($sliderEl).removeClass();
              $($sliderEl).addClass('m-slider__wrapper--' + idx);
            });

            /* Auto slideshow */
            function autoSlideShow() {
              var slides = $($parent).find('.m-slider__slide');
              var slideLength = $(slides).length - 1;

              $currentSlideIndex = $($parent).find('.tewSlideActive').index();


              //console.info(slidesLength);
              //Previous Button
              if ($currentSlideIndex >= slideLength) {
                $currentSlideIndex = 0;
                $prevBtn.addClass('tewSlideBtnDisabled');
              } else {
                $currentSlideIndex = $currentSlideIndex + 1;
                $prevBtn.removeClass('tewSlideBtnDisabled');
              }

              //console.info('CurrentSlide Index:', $currentSlideIndex);
              // console.info('SlideLength:', slideLength);

              //Add Remove Active Class    
              $(slides).removeClass('tewSlideActive'); // RemoveActive class on the slides
              var currentSlide = $($parent).find('.m-slider__slide[data-slide="' + $currentSlideIndex + '"]').addClass('tewSlideActive'); // Adding Active Class to slide corresponding to the dots

              // Adding src to image
              var $imgDataSrc = $(currentSlide[0])[0].children[0].dataset.src;
              $(currentSlide[0])[0].children[0].src = $imgDataSrc;

              //Next Button
              if ($currentSlideIndex === slideLength) {
                $nextBtn.addClass('tewSlideBtnDisabled');
              } else {
                $nextBtn.removeClass('tewSlideBtnDisabled');
              }

              var $currentDot = $($dots)[$currentSlideIndex];
              $($dots).prop('checked', false);
              $($currentDot).prop('checked', 'checked');

              $($sliderEl).removeClass();
              $($sliderEl).addClass('m-slider__wrapper--' + $currentSlideIndex);

            }

            $interval = setInterval(autoSlideShow, $autoDuration);

            /* Data Attributes */
            if ($isAutoSlide.toLowerCase() === 'false') {
              clearInterval($interval);
            }

            if ($isSlideDots.toLowerCase() === 'false') {
              var $dotControl = $($parent).find('.m-slider-dotscontrol');
              $($dotControl).remove();
            }

            if ($isSlideArrow.toLowerCase() === 'false') {
              var $arrowControl = $($parent).find('.m-slider-arrowcontrol');
              $arrowControl.remove();
            }

          });
        }

        return tewSlideShow();

      }
    }

    return tewLibObject;
  }

  //Attach it the window Variable to be accessed globally if its not been defined anywhere or if jquery is not undefined
  if (typeof (Window.TEWLibrary) === 'undefined' || typeof jQuery !== 'undefined') {
    window.TEWLibrary = tewLibFunction();
  }

})(window);


// NOT USED OR REFACTORED

//04. Truncate Text
//truncateText : function(stringVariable, maxCharacters) {
//    var trimmedString = stringVariable.substr(0, maxCharacters);
//    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))); // This truncates the text without truncating the word in middle
//    trimmedString += '...'; // This adds the ... after the truncated text
//    return trimmedString;
//},