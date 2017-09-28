/**
* Module : _EventManagement
* Public Api : _EventManagement.init();
* Created on : 28.09.2017
* Author : Leo Jacobs
*/
 
var _EventManagement = (function(window){
'use strict';
  var _PrivateSettings = {
     Topics : ['ajaxSuccess', 'ajaxFailure'],
     $getListBtn: $('#listUsers')
  }
 

  //Call This method from the UI click event
  var init = function(){
    //Subscription 
    PubSub.subscribe(_PrivateSettings.Topics[0], function(msg, data){
      //Call the UI Module to perform its manipulation
      _PrivateSettings.$getListBtn.on('click', function(){
        _UIModule.createList(msg, data);
      });
    });

    PubSub.subscribe(_PrivateSettings.Topics[1], function(msg, data){
      _PrivateSettings.$getListBtn.on('click', function(){
        console.info(data);
        _UIModule.errorUI(msg, data);
      });
      
    });
  }
 
  return {
    topics: _PrivateSettings.Topics,
    init: init
  }
}(window));