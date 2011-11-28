$(function(){
	$('body').delegate('form', 'submit', function(e){
		$(':submit', this).disableSubmit();
		
		//e.preventDefault();
	});
	
});


