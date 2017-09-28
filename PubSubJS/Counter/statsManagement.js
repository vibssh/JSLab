/**
* Module : _StatsManagement
* Public Api : _StatsManagement.init();
* Created on : 26.09.2017
* Author : Leo Jacobs
*/
 
var _StatsManagement = (function(window){
'use strict';
    var _PrivateSettings = {
        $countUI : document.querySelector('#joined-count'),
        $count : 0
    }
 
    var init = function(msg, data){
        if(msg === 'add'){
            _PrivateSettings.$count += 1;
            _PrivateSettings.$countUI.innerHTML = _PrivateSettings.$count;
            _PrivateSettings.$countUI.setAttribute('class', 'btn btn-success');
            
        }

        if(msg === 'del'){
            if(_PrivateSettings.$count > 0 ){
                _PrivateSettings.$count -= 1;
                _PrivateSettings.$countUI.innerHTML = _PrivateSettings.$count;
            } 
            
        }
    }
 
    return {
        init: init
    }
}(window));