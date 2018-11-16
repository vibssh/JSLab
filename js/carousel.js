/**
 * Module : CarouselLib
 * Public Api : CarouselLib.init();
 * Created on : 15.02.2018
 * Author : Leo Jacobs
 */

var CarouselLib = (function (window) {
  'use strict';
  var $carouselWrapper;
  var $carousel;
  var $radioButtons;
  var $nextButton;
  var $prevButton;
  var $finishButton;
  var $doNotShow;

  //Booleans 
  var $isNoShow;
  var $isArrowNavigation;
  var $isDotsNavigation;
  var $isFinishButton;

  //Methods
  var carouselTransform = function (position) {
    $($carouselWrapper).css('transform', 'translateX(-' + position + 'px)');
    ('-webkit-transform', 'translateX(-' + position + 'px)');
    ('-ms-transform', 'translateX(-' + position + 'px)');
    ('-moz-transform', 'translateX(-' + position + 'px)');
    ('-o-transform', 'translateX(-' + position + 'px)');
  };

  /* Dots Navigation  */
  var dotsNavigation = function () {
    $($radioButtons).each(function (i) {
      var activeId = $('input[type="radio"]:checked').attr('id');

      $($carousel).each(function (index) {
        var activeSlide = $($carousel).find($('[data-id="' + activeId + '"]'));
        $($carousel).removeClass('active');
        $(activeSlide).addClass('active');
        var i = index;
        var pos = index * 1000;

        var currentSlide = $('[data-js="carousel"].active').next();
        var pastSlide = $('[data-js="carousel"].active').prev();

        if ($(this).hasClass('active')) {
          carouselTransform(pos);
        }

        if (pastSlide.length > 0) {
          $($prevButton).css('display', 'inline-block');
        } else {
          $($prevButton).css('display', 'none');
        }

        if (currentSlide.length < 1) {
          $($prevButton).css('display', 'inline-block');
          $($nextButton).css('display', 'none');
          $($finishButton).css('display', 'inline-block');
        } else {
          $(nextButton).css('display', 'inline-block');
          $(finishButton).css('display', 'none');
        }
      });
    });
  };


  /* Do not show Carousel again */
  var doNotShowCarousel = function () {
    localStorage.setItem('carouselShow', 'no');
  };

  /* Arrow Carousel Slide Navigation */
  var arrowCarouselNavigation = function (navDirection) {
    var $navDir;

    if (navDirection === 'next') {
      $navDir = next;
    }

    if (navDirection === 'prev') {
      $navDir = prev;
    }

    var i = $('[data-js="carousel"].active').$navDir().index() + 1;
    var j = $('[data-js="carousel"].active').next().index();
    var currentSlide = $('[data-js="carousel"][data-id="screen-' + i + '"]');
    var input = $('[data-js="carousel-dots"]]');
    $($carousel).removeClass('active');
    $(currentSlide).addClass('active');

    //Dots controlled for Next Navigation
    $($radioButtons).each(function (index) {
      var radioId = 'screen-' + i;
      var activeRadio = $('[data-js="carousel-dots"][id="' + radioId + '"]');
      $($carousel).find('input[type="radio"]').attr('checked', false);
      $(activeRadio).prop('checked', true);
    });

    var moveSlide = $(currentSlide).$navDir();
    var idx = $(currentSlide).index() * 1000;
    carouselTransform(idx);

    if (navDirection === 'next') {
      if (moveSlide.length > 0) {
        $($prevButton).css('display', 'inline-block');
      } else {
        $($nextButton).css('display', 'none');
        $($finishButton).css('display', 'inline-block');
      }
    };

    if (navDirection === 'prev') {
      if (moveSlide.length > 0) {
        $($prevButton).css('display', 'inline-block');
        $($finishButton).css('display', 'none');
        $($nextButton).css('display', 'inline-block');
      } else {
        $($prevButton).css('display', 'none');
        $($nextButton).css('display', 'inline-block');
        $($finishButton).css('display', 'none');
      }
    }
  };

  //Events
  var binduiActions = function (isNoShow, isArrowNavigation, isDotsNavigation, isFinishButton) {
    /* Dots Navigation Event */
    $($radioButtons).on('change', function () {
      dotsNavigation();
    });

    /* Arrow Navigation Event  */
    //Clicking Next Button
    $($nextButton).on('click', function (e) {
      e.preventDefault();
      arrowCarouselNavigation('next');
    });

    //Clicking Previous Button
    $($prevButton).on('click', function (e) {
      e.preventDefault();
      arrowCarouselNavigation('prev');
    });

    /* Do not show carousel again on re-visit */
    $($doNotShow).on('click', function (e) {
      e.preventDefault();
      doNotShowCarousel();
    });

  };

  var init = function (options) {
    $carouselWrapper = $('[data-js="carousel-wrapper"]')
    $carousel = $('[data-js="carousel"]');
    $radioButtons = $('[data-js="carousel-dots"]');
    $nextButton = $('[data-js="carousel-next-button"]');
    $prevButton = $('[data-js="carousel-prev-button"]');
    $finishButton = $('[data-js="carousel-finish-button]');


    options = {} || null || 'undefined';
    $isNoShow = options.$isNoShow || true;
    $isArrowNavigation = options.$isArrowNavigation || true;
    $isDotsNavigation = options.$isDotsNavigation || true;
    $isFinishButton = options.$isFinishButton || false;

    binduiActions($isNoShow, $isArrowNavigation, $isDotsNavigation, $isFinishButton);

    /* Check the options passed */
    if ($isNoShow === false) {
      $($doNotShow).hide();
    }

    if ($isArrowNavigation === false) {
      $($nextButton).hide();
      $($prevButton).hide();
    }

    if ($isDotsNavigation === false) {
      $($radioButtons).hide();
    }

    if ($isFinishButton === false) {
      $($finishButton).hide();
    }
  }

  return {
    init: init
  }
}(window));