/**
* Module : _UIManagement
* Public Api : _UIManagement.init();
* Created on : 27.09.2017
* Author : Leo Jacobs
*/
 
var _UIManagement = (function(window){
'use strict';
 var _Settings = {
   $list : $('#user-list'),
   $listItem: ''
   
 }
 
  var _createUserList = function(msg, data){
    
      $.each(data, function(i){
        var _loginName = data[i].login;
        _Settings.$listItem += '<li class = "list-group-item" >' + _loginName + '</li>';
      });

      _Settings.$list.html(_Settings.$listItem);

      
      
  }
 
  return {
    createList : _createUserList
  }
  
}(window));