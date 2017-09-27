/**
* Module : _AjaxModule
* Public Api : _AjaxModule.init();
* Created on : 26.09.2017
* Author : Leo Jacobs
*/
 
var _AjaxModule = (function(window){
'use strict';
  var _PrivateSettings = {
     $endPoint : 'https://api.github.com/users',
     $getUserBtn: $('#getUsers')
  }
 
  var bindUIActions = function(){
    _PrivateSettings.$getUserBtn.on('click', function(e){
      e.preventDefault();
      _FetchData('GET', {}).done(_successMethod).fail(_errorMethod);
    });
  }

  var _FetchData = function(method, args){
    var args = args || {};
    return $.ajax({
      url: _PrivateSettings.$endPoint,
      type: method,
      dataType: args.$dataType || 'json',
      contentType: 'application/json; charset=utf-8;',
      data : args.$data || null || undefined
    })
  }

 
  var _successMethod = function(data){
    PubSub.publish(_EventManagement.evtSettings.Topics[0], data);
  }

  var _errorMethod = function(xhr){
    PubSub.publish(_EventManagement.evtSettings.Topics[1], xhr);
  }
 
  return {
    init: bindUIActions,
    success: _successMethod,
    failure: _errorMethod
  }
}(window));