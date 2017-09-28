/**
 * Module : _UIModule
 * Public Api : _UIModule.init();
 * Created on : 29.09.2017
 * Author : Leo Jacobs
 */

var _UIModule = (function (window) {
  'use strict';
  var _PrivateSettings = {
    $list: $('#list'),
    $listItem: ''
  }

  //Success Data UI 
  var createList = function (msg, data) {
    //Align the data in whatever ways you want in the UI 
    $.each(data, function (i){
      var li = '<div class="list-group-item">' + data[i].login + '</div>';
      _PrivateSettings.$listItem += li;
    });
    _PrivateSettings.$list.html(_PrivateSettings.$listItem);
  }

  
  var errorUI = function(msg, data){
    var li = '<div class="list-group-item bg-danger">' + data + '</div>';
    _PrivateSettings.$list.html(li);
  };

  return {
    createList: createList,
    errorUI: errorUI
  }
}(window));