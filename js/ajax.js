(function(){
	'use strict';

	var s,
	   AjaxCalls = {
	   	settings: {
	   		el: document.getElementsByClassName('element-container')[0],
	   		btn: document.querySelector('button')
	   	},

	   	init: function(){
	   		s = this.settings;
	   		this.bindUIActions();
	   		console.log(s.el.innerHTML);
	   	},

	   	bindUIActions: function(){

	   		s.btn.addEventListener(	'click', function(){
	   			AjaxCalls.myAjax();
	   		});
	   	},

	   	myAjax: function() {
	   		var xhr = new XMLHttpRequest();
	   	    xhr.onload = function(){
	   	    	if(xhr.readyState === 4 && xhr.status === 200) {

	   	    		s.el.innerHTML = xhr.responseText;
	   	    	}
	   	    };
	   		xhr.open('GET', 'info.txt', true);
	   		xhr.send();
	   	}

	   };


AjaxCalls.init();


}());
