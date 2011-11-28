/**
 * DisableSubmit v1.0 jQuery Plugin
 *
 * provides method to disable a submit button on-click/form-submit to prevent double click/duplicate submissions
 * 
 * IMPORTANT: double submission must also be handled server side
 * 
 * Requirements
 * jQuery 1.3.2+

 * 
 * @param object options - configuration options
 *   - int/string  	duration	(default:7000)	// submit button disable duration
 */

// create closure
(function($) {
	
	// plugin definition
	$.fn.disableSubmit = function(options) {
		
		// extend default settings with those provided.
		var settings = $.extend(
			{},
			$.fn.disableSubmit.defaults,
			options
		);
		
		// iterate each matched element
		return this.each(function() {
			
			// cache clicked button object
			var $btnOrig = $(this);
			
			$btnOrig
	    		// append after clicked button
	    		.after(                 
		    		$btnOrig
		                // a clone of button
		                .clone()
		                // that is disabled
		                .attr({disabled: 'disabled'})
		                // with loading animation
		                .add('<span class="'+ settings.animClass +'"></span>')                                              
		                // wait...
		                .delay(settings.duration)
		                    .queue(function() {
		                    	
		                    	// cache clicked button object
		                    	var $btnDisabled = $(this);
		
		                        // remove cloned button *and loading gif*
		                    	$btnDisabled.remove();
		                    	
		                        // show original button (hidden on click)
		                    	$btnOrig.show();
		                    	
		                        // dequeue element
		                        $btnDisabled.dequeue();                         
		                    })
	            );
			
		      	// hide original button
			$btnOrig.hide();

		});	
	};
	
	// plugin default settings
	$.fn.disableSubmit.defaults = {
		duration: 7000, // submit button hide duration
		animClass: 'wait-animation'
	};

// end closure 
})(jQuery);