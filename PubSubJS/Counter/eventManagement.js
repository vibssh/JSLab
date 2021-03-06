/**
* Module : _EventManagement
* Public Api : _EventManagement.init();
* Created on : 26.09.2017
* Author : Leo Jacobs
*/
 
var _EventManagement = (function(window){
'use strict';
    var _PrivateSettings = {
        Topics : ['add', 'del']
    }
 
    var init = function(){
        PubSub.subscribe(_PrivateSettings.Topics[0], function(msg, data){
            _StatsManagement.init(msg, data);
        });

        PubSub.subscribe(_PrivateSettings.Topics[1], function(msg, data){
            _StatsManagement.init(msg, data);
        });
    }
 
    return {
        evtSettings : _PrivateSettings,
        init: init
    }
}(window));