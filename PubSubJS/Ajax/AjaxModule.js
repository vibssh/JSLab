/**
 * Module : _AjaxModule
 * Public Api : _AjaxModule.init();
 * Created on : 26.09.2017
 * Author : Leo Jacobs
 */

var _AjaxModule = (function (window) {
  'use strict';

  //Settings
  var _PrivateSettings = {
    $endPoint: 'https://api.github.com/uses',
    $getUsersBtn: $('#get-users') // This is the hook for click handler to call _FetchData 
  }

  //BindUIActions
  var bindUIActions = function () {
    _PrivateSettings.$getUsersBtn.on('click', function(){
      _FetchData('GET',{}) .done().fail(_AjaxErrorHandler(_FailMethod));
    });
  };

  //Ajax Method
  var _FetchData = function (method, options) {
    var $options = options || {};
    var $data = options.$data || null || undefined;
    var $beforeSend = options.$beforeSend || null || undefined;
    var $dataType = options.$dataType || 'json';
    return $.ajax({
      url: _PrivateSettings.$endPoint,
      type: method,
      dataType: $dataType,
      data: $data
    });
  };

  //Error Handler
  var _AjaxErrorHandler = function ($xhr) {
    var errorCode = {
      0: function () {
        return 0;
      },
      302: function () {
        return 302;
      },
      400: function () {
        return 400;
      },
      401: function () {
        return 401;
      },
      403: function () {
        return 403;
      },
      404: function () {
        return 404;
      },
      418: function () {
        return 418;
      },
      500: function () {
        return 500;
      },
      502: function () {
        return 502;
      },
      'default': function () {
        return 'unknown';
      }
    };
    return (errorCode[$xhr] || errorCode['default'])();
  };

  //Fail method
  var _FailMethod = function(xhr){
    var xhrStatus = xhr.status;
    var status = _AjaxErrorHandler(xhrStatus);
  };

  return {
    init: bindUIActions
  }
}(window));