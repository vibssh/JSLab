/**
* Module : _AjaxFetchData
* Public Api : _AjaxFetchData.init();
* Created on : 09.10.2017
* Author : leo Jacobs
*/
 
var _AjaxFetchData = (function(window){
'use strict';
  var _PrivateSettings = {
    
  }
 
  var _fetchData = function($url){
    return $.ajax({
      url: $url,
      type: 'GET',
      dataType: 'html',
      contentType:'application/json; charset=utf-8;'
    });
  };

  var _fetchSuccess = function(data){
    PubSub.publish('fetchSuccess', data);
  };

  var _fetchFail = function(xhr){
    var xhrCode = xhr.status;
    PubSub.publish('fetchFailure', xhrCode);
  }

  var init = function($url){
    _fetchData($url).done(_fetchSuccess).fail(_fetchFail);
  };
 
  return {
    init: init
  }
}(window));