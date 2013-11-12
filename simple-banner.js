(function( $ ) {	
	$.fn.rotate = function (option) {
		var defaults = {
			'interval'	: 5000,
			'height'	: 200,
			'pause'	: false,
			'speed'	: 400
		}
		var o = $.extend(defaults, option);
		var $this;
		var max_length;
		var no=0;
		var zindex = 0;
		var timer_simple_banner;
		$this = $(this);
		max_length = $(this).find('a').length;
		$(this).css('position', 'relative').css('overflow', 'hidden').css('height', o.height + 'px');
		$(this).find('a').css('position', 'absolute').css('width', '100%').hide().css('height', o.height + 'px');
		$(this).find('a:eq(0)').show();
		$(this).find('img').css('width', '100%').css('height', o.height + 'px');
		
		no = 1;
		timer_simple_banner = setInterval( function() { animate_simple_banner(); }, o.interval );
		
		function animate_simple_banner()
		{
			zindex ++;
			
			$t = $this.find("a:eq("+no+")");
			
			$t.css('z-index', zindex).css('left', $t.width() + 'px').show();
			
			$t.animate(
				{
					'left': 0
				},
				o.speed
			);
			no ++;
			if ( no >= max_length ) no = 0;
		}
		
		if ( o.pause ) {
			$this.mouseenter( function() {
				if ( timer_simple_banner ) clearInterval(timer_simple_banner);
			});
			$this.mouseleave( function() {
				timer_simple_banner = setInterval( function() { animate_simple_banner(); }, o.interval );
			});
		}
	};
}( jQuery ));

