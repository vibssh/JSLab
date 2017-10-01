/**
 * Module : _App
 * Public Api : _App.init();
 * Created on : 01.10.2017
 * Author : Leo Jacobs
 */

var _App = (function (window) {
  'use strict';
  var _PrivateSettings = {
    $dataSource: '/MustacheJS/Templates/_bookTPL.html',
    $bookTPL: '#booksTPL',
    $bookData: '/MustacheJS/Data/data.json',
    $bookList: $('#list-group')
  }

  var init = function () {
    $.getJSON(_PrivateSettings.$bookData, function (data, xhr) {
      var bookData = data;
      
      $.get(_PrivateSettings.$dataSource, function (templates) {
        console.info($(templates).filter(_PrivateSettings.$bookTPL).html());
        var template = $(templates).filter(_PrivateSettings.$bookTPL).html();
        _PrivateSettings.$bookList.append(Mustache.render(template, bookData));
      });
    });
    // $.get(_PrivateSettings.$dataSource, function(templates){
    //   console.info($(templates).filter(_PrivateSettings.$bookTPL).html());
    //   var template = $(templates).filter(_PrivateSettings.$bookTPL).html();
    //   _PrivateSettings.$bookList.append(Mustache.render(template, ));
    //});
  }

  return {
    init: init
  }
}(window));