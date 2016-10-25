(function(){
var s,
   AjaxJquery = {

   	settings: {
   		$el : $('.element-container'),
   		$btn: $('button')
   	},

   	init: function(){
   		s = this.settings;
   		this.bindUIActions();
   	},

   	bindUIActions: function(){
		s.$btn.click(function(){
			AjaxJquery.myAjax();
		});
   	},

   	myAjax : function() {
   		var fileUrl = 'https://api.tfl.gov.uk/Line/Mode/tube?app_id=&app_key= ';
   		var loading = false;
   		 $.ajax({
   		 	url: fileUrl,
   		 	async: true,
   		 	cache: false,
   		 	crossDomain: true,


   		 	beforeSend: function(){
   		 		loading = true;


   		 	  setTimeout(function(){
   		 	  	if(loading){
					$('body').addClass('before');
   		 	  		}

   		 			},300);

   		 	},

   		 	// complete: function(){
   		 	// 		$('body').removeClass('before');
   		 	// },

   		 	success: function(result){
   		 		loading= false;
   		 		$('body').removeClass('before');
            	s.$el.html(result);
        	},

        	error: function(t) {
        		s.$el.html('There is an error code : ' + t.status);
        	}
        });

   	},



   };

   AjaxJquery.init();
}());
