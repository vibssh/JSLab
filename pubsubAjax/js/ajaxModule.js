/**
* Module : _AjaxModule
* Public Api : _AjaxModule.init();
* Created on : 28.09.2017
* Author : leo Jacobs
*/
 
var _AjaxModule = (function(window){
'use strict';
  var _PrivateSettings = {
    $endPoint : 'https://api.github.com/uers',
    $method  : 'GET',
    $statusCode : ''
  };
 
  //Ajax Call
  var _fetchData = function(args){
    args = args || {};
    var $dataType = args.$dataType || 'json';
    var $data = args.$data || null || undefined;

    return $.ajax({
        url: _PrivateSettings.$endPoint,
        type: _PrivateSettings.$method,
        dataType: $dataType,
        data: $data
    });
  };
  
  //Success Handler Publishing data 
  var _successCall = function(data){
    PubSub.publish(_EventManagement.topics[0], data);
  };

  //Error Handler Publishing data
  var _failedCall = function(xhr){
   _PrivateSettings.$statusCode = xhr.status;
   PubSub.publish(_EventManagement.topics[1], _errorHandler(_PrivateSettings.$statusCode));
  };

  //Error Handler object
  var _errorHandler = function(xhr){
    var errorObj = {
       404 : function(){
         return 404;
       },

       500 : function(){
         return 500;
       },

       'default': function(){
         return 'something went wrong';
       }
    }
    return ((errorObj[xhr] || errorObj['default']))();
  };


  var init = function(){
   _fetchData().done(_successCall).fail(_failedCall);
  };

  return {
    init: init
  }
}(window));