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
    //$listItem: '',
    $tpl : $('#loginTpl')
  }

  //Success Data UI 
  var createList = function (msg, data) {
    console.info('data', data);
    //Align the data in whatever ways you want in the UI 
    // $.each(data, function (i){
    //   var li = '<div class="list-group-item">' + data[i].login + '</div>';
    //   _PrivateSettings.$listItem += li;
    // });
    // _PrivateSettings.$list.html(_PrivateSettings.$listItem);
    
    //Mustache Version
    var loginName = {loginName : data};
    var template = _PrivateSettings.$tpl.html();
    var html = Mustache.to_html(template, loginName);
    _PrivateSettings.$list.html(html);
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