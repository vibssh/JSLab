/**
* Module : _UIManagement
* Public Api : _UIManagement.headerUI();
* Created on : 09/10/2017
* Author : Leo Jacobs
*/
 
var _UIManagement = (function(window){
'use strict';
  var _PrivateSettings = {
    $uiContainer : $('#ui-container')
  }
 
  var _headerSuccess = function(data){
    //Getting Header Data
    _PrivateSettings.$uiContainer.html(data);
  }

  
 
  //Call these UI methods in the Event Management Module 
  return {
    header: _headerSuccess
  }
}(window));