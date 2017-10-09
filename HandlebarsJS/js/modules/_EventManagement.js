/**
* Module : _EventManagement
* Public Api : _EventManagement.init();
* Created on : 09.10.2017
* Author : Leo Jacobs     
*/  
 
var _EventManagement = (function(window){
'use strict';
  var _PrivateSettings = {
    Topics:['fetchSuccess', 'fetchFailure']
  }
 
  var init = function(){
    //Success Data from the Fetch Data Ajax Call
    PubSub.subscribe(_PrivateSettings.Topics[0], function(msg, data){
      //Do UI bit with the data - This is where to call in the UI Method
      _UIManagement.header(data);
    });

    //Failure Status from the Fetch Ajax Call
    PubSub.subscribe(_PrivateSettings.Topics[1], function(msg, data){
      //Do UI bit with the data - This is where to call in the UI Method
      
    });
  }
 
  return {
    topics: _PrivateSettings.Topics,
    init:init 
  }
}(window));