var buildSite = function() {
	var that = this;
	
	that.header = $('#site-header');
	
	that.init = function()
	{
		// start the header gradient effect
		that.headerGradient();
		
		// start events
		that.historyEvents();
		
		that.navigation();
	},
	
	that.headerGradient = function()
	{	
		//orange to yellow
		//hsl(34, 100.0000%, 64.1176%)
		//hsl(52, 100.0000%, 72.3529%)
		var a = 34, b = 100, c = 64, d = 52, e = 100, f = 72;
		var aDir = 1, bDir = 1, cDir = 1, dDir = 1, eDir = 1 , fDir = 1;
		
		setInterval(function() { 
			
			if(aDir == 1){ a++; } else { a--; }
			if(bDir == 1){ b++; } else { b--; }
			if(cDir == 1){ c++; } else { c--; }
			if(dDir == 1){ d++; } else { d--; }
			if(eDir == 1){ f++; } else { e--; }
			if(fDir == 1){ e++; } else { f--; }
			
			if(a>=255){a=254;aDir=0}if(a<=0){a=1;aDir=1}if(b>=100){b=99;bDir=0}if(b<=0){b=1;bDir=1}if(c>=100){c=99;cDir=0}if(c<=0){c=1;cDir=1}if(d>=255){d=254;dDir=0}if(d<=0){d=1;dDir=1}if(e>=100){e=99;eDir=0}if(e<=0){e=1;eDir=1}if(f>=255){f=254;fDir=0}if(f<=0){f=1;fDir=1};
			
			that.header.css('background-image', '-webkit-linear-gradient(left, hsl('+a+','+b+'%,'+c+'%) 0%, hsl('+d+','+e+'%,'+f+'%) 100%)')
		},1000)
	},
	
	that.navigation = function()
	{
		// Manipulate all a tags to look for pushState / hash change
		$('a').click(function(e){ 
			e.preventDefault();

			//history
			var state = '{page: "' + $(this).attr('title') + '"}'
			history.pushState(state, '', $(this).attr('href') );
		});
		
		// Handle scrolling of the top menu navigations
		$('#nav-obj-scroller').mousemove( function(e){
		 	
		 	// mouse is over the right zone		
			if(e.pageX >= ($(window).width() - (e.pageX / 4 )))
			{
				$('#nav-obj-container').animate({'left' : - 500 })
			}
		});
	},
	
	that.historyEvents = function()
	{
		$(window).bind('popstate', function(e){
			console.log(e)
		});
	}
}

