jQuery(document).ready(function($) {
	$('#tab-dd').click(function() {
		$('#tab-dd').toggleClass('active');
	});
});

/* ========================================================
 * pnext.jquery.tabs.js
 * ========================================================
 * 2013 Lee Reamsnyder, IBM
 *
 * Heavily inspired by Twitter Bootstrap tabs
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 *
 * This version differs from Twitter Bootstrap in the following ways:
 *  + The Data API uses [role="tab"] (WAI-ARIA) instead of [data-toggle="tab"]
 *  + WAI-ARIA support everywhere
 *  + Google Analytics events + pageview triggered on tab click
 *  + Additional .drop animation support
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


(function(w,$) {
	
	var transitionSupport = false,
		transitionEnd = '',
		el = document.createElement('div'),
		transEndEventNames = {
		  'WebkitTransition' : 'webkitTransitionEnd',
		  'MozTransition'    : 'transitionend',
		  'OTransition'      : 'oTransitionEnd otransitionend', // Opera used both at one point
		  // Microsoft never supported prefixed transitions. IE10 is not prefixed.
		  'transition'       : 'transitionend'
		};
		
	for (name in transEndEventNames) {
		if (el.style[name] !== undefined) {
			transitionSupport = true;
			transitionEnd = transEndEventNames[name];
		}
	}
	

	var Tabs = function (element, options) {
		this.element = $(element),
		this.options = $.extend({},this.defaults, typeof options == "object" && options);
	};
	
	Tabs.prototype = {
	
		constructor: Tabs,
		
		supportsCssTransitions: transitionSupport && { 				
			end : transitionEnd
		},
		
		show: function() {
		
			var $this = this.element,
				$tablist = $this.closest('ul'),
				$parent = $this.parent('li'),
				selector = ( '#' + $this.attr('aria-controls') ) || $this.data('target') || $this.attr('href'),
				tabFragment = $this.attr('href'),
				previous,
				$target,
				e;
			
			// If current, stop
			if ( $parent.hasClass('active') ) return;
			
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
			
			// determine previous panel
			previous = $tablist.find('.active:last a')[0];
			
			// Trigger the "show" event
			// Passes the previous tab element as e.relatedTarget
			// The clicked tab would be (naturally) e.target
			e = $.Event('show', {relatedTarget: previous});
			$this.trigger(e);
			
			if (e.isDefaultPrevented()) return;
			
			$target = $(selector);

			window.location.hash = tabFragment;
			
			
			// Set new tab parent active
			this.activate( $parent, $tablist, 'aria-selected' );
			// Set target panel as active (and trigger transitions)
			this.activate( $target, $target.parent(), 'aria-hidden', function(){
				// 'Shown' event
				$this.trigger({
					type:'shown',
					relatedTarget: previous
				});
			});

		},
		
		activate: function(element, container, ariastatus, callback) {
			var $active = container.find('> .active'),
				isTablist = ariastatus === 'aria-selected',
				$ariaPrevEl,
				$ariaNewEl,
				transition = callback
					&& this.supportsCssTransitions 
					&& ( $active.hasClass('drop') || $active.hasClass('fade') );
			
			// Define callback function (or it'll just go if there's no csstransitions support)
			function next() {
			
				// Remove active and selected status
				$active.removeClass('active');
			
				$ariaPrevEl = isTablist ? $active.find('a') : $active;
				$ariaPrevEl.attr(ariastatus, isTablist ? 'false' : 'true' );
		
				// Add .active and ARIA status to the new one
				element.addClass('active')
			
				$ariaNewEl = isTablist ? element.find('a') : element;
				$ariaNewEl.attr(ariastatus, isTablist.toString() );
				
				if (transition) {
					element[0].offsetWidth // triggers a reflow so that the transition can work
					element.addClass('is-in')
				} else {
					// If transitions aren't supported or we won't be doing them here, remove the possibility
					element.removeClass('fade drop')
				}
				
				callback && callback();
			
			}
			
			/* 
			  If transtions are supported, fire next() after the previous has finished its transitions. 
			  Otherwise, just fire next(); 
			*/			
			transition ? $active.one( this.supportsCssTransitions.end, next ) : next();
			
			$active.removeClass('is-in'); // when finished, will trigger next();
			
		}
	}
	
	/* Define the plugin */
	$.fn.tabs = function( option ) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('tabs');	
				
			if (!data) $this.data('tab', (data = new Tabs(this) ) );
			if (typeof option === 'string') data[option]();
		});
	}
	
	$.fn.tabs.defaults = {};
	
	/* 
		Look for iframes or object/embeds inside of tab panels
		If there, swap out the transition class .drop for .fade
		Resolves an issue (#95671) with FireFox borking embeds within transformed elements
	*/
	$('.pn-tab-panel.drop')
		.has('iframe, embed, object')
		.siblings() // converts matched set to the sibling tabs
		.andSelf() // adds the original tab to the set
		.removeClass('drop')
		.addClass('fade');
			
	/*  
	  WAI-ARIA Data API 
		[role="tab"]
	*/
	$(document).on('click.tabs.data', '.pn-tabs-wrap a[role="tab"]', function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.tabs('show');
		$('#tab-dd span b').html($this[0].innerText);

    // If Analytics is around
    if (w.ga) { 
      var selector = ( '#' + $this.attr('aria-controls') ) || $this.data('target') || $this.attr('href');
      
      // Event tracking
      ga('send', 'event', 'Tab interaction', 'Clicked a panel', selector, 0);
      
      // Track tabbed "pages" with their own pageview"
      ga('send', 'pageview', {
        'page': location.pathname + location.search + location.hash
      }); // http://stackoverflow.com/a/4813223
    }

	});

  function activateTabFromHash () {

    if ( window.location.hash ) {
    	if(window.location.hash.match(/=/gi)){
    		return;  //if there is an equal sign in the hash, we need to bail out of this as it is conflicting with the old resource manager
    	}
    	var $label = $( '#' + $(window.location.hash).attr('aria-labelledby') );
    		$label.attr('role') === 'tab' && $label.tabs('show');
    }
  }

	$(document).ready(activateTabFromHash);

	// Need to handle hash navigation events (doesn't trigger a page reload).
	$(window).on('hashchange', activateTabFromHash);

})(window,window.jQuery)
