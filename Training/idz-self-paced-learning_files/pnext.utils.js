(function(pnext, $, undefined){
	//check for the pnext.utils object or create it
	pnext.utils ? '' : pnext.utils = {}

	//private variables
	var updatedTacticLinks = false,
		tactMatches = null,
		tactParams = "",
	    qParams = "",
	    dBoardTemplate = '<div id="dw-mast-presub-container" class=""><div id="dw-mast-presub-notice"><p id="dw-mast-presub-text">Your developerWorks<br>Premium Dashboard<br>is now active!</p><a id="dw-mast-presub-close" href="#" tabindex="0" role="button" aria-label="Close">X</a></div><div id="dw-mast-presub-db"><a href="https://nextstage.torolab.ibm.com/index.php/dashboard" tabindex="0">View your dashboard <span class="dw-mast-presub-db-arrow" aria-hidden="true">&rsaquo;&rsaquo;</span></a></div></div>',
	    pnModalOverlay = '<div class="pn-modal-overlay"></div>',
	    $pnModalOverlay,
	    pnModalWindow = '<div class="pn-modal">'+
	    					'<div class="pn-modal-wrap">'+
	    						'<div class="pn-modal-hd">Header Here</div>'+
	    						'<div class="pn-modal-bd"></div>'+
	    						'<div class="pn-modal-ft"></div>'+
	    						'<a href="#" class="pn-modal-close">x</a>'+
	    					'</div>'+
	    				'</div>',
	   $pnModal,
	   pnModalCallback = null;

	//private methods

	var initModalOverlay = function(){
		$pnModalOverlay = $(pnModalOverlay).hide();
		$pnModal = $(pnModalWindow).hide();
		$('body').append($pnModalOverlay,$pnModal);
		//add the events to the modal buttons for closing
		$pnModal.on('click.close','.pn-modal-close',function(e){
			e.preventDefault();
			pnext.utils.toggleModal({
				close:true
			})
		})
	}

	var dwUserMenu = function(){
		$('html').on('click.hideUserMenu',function() {
			$('#dw-mast-auth-menu').addClass('dw-mf-hide');
		});

		$('#dw-mast-auth-menu').on('click.userMenu',function(e){
			e.stopPropagation();
		})

		$('#dw-mast-menu-trigger').on('click.toggle',function(e){
			e.stopPropagation();
			e.preventDefault();
			$('#dw-mast-auth-menu').toggleClass('dw-mf-hide');
		});
	}

	var dwDbModal = function(){
		//add the modal to the dom
		if(typeof(localStorage) === 'undefined'){
			return;
		}
		if(localStorage.getItem('seen_dboard_alert') && localStorage.getItem('seen_dboard_alert') === 'true'){
			return;
		}else{
			$('#loginout_link').append(dBoardTemplate);
			localStorage.setItem("seen_dboard_alert", true);
			$('#dw-mast-presub-close').on('click.hide',function(e){
				e.preventDefault();
				$('#dw-mast-presub-container').hide();
			})
		}
	}

	var prepTacticLinks = function(){
		if(updatedTacticLinks === true){
			return; //exit because we already ran the method on the document
		}
		qParams =  window.location.search.substring(1);

		//look for the s_tact param and isolate that
		if(qParams.length > 0){
			tactMatches = qParams.match(/(s_tact=\d*\w*)/gi,'');
		}

		//now run the tactify function on all the links
		if (tactMatches != null && tactMatches.length > 0) {
			tactParams = tactMatches.join("&");
			$('a').each(function(){
				pnext.utils.tactifyLink(this);
			});
		}

		updatedTacticLinks = true; //this will keep the global function from being kicked off more than once
	}

	//public methods
	pnext.utils.setModalData = function(){
		var args = arguments[0] || {};

		//cehck for modial size param
		args.size ? $pnModal.addClass(args.size) : $pnModal.removeClass('medium large');
		//set the header content
		$pnModal.find('.pn-modal-hd').html(args.header || 'Attention');

		args.callback && typeof(args.callback) === 'function' ? pnModalCallback = args.callback : '';

		//check for special action buttons
		if(args.action && args.action.href){
			var cancelTitle = args.action.cancelTitle || "Close",
				actionTitle = args.action.title || "Sure",
				actionTarget = args.action.target || "_self";
				actionCallback = args.action.callback && typeof(args.action.callback == 'function') ? args.action.callback : '';

				var actionLink = $('<a class="primary" href="'+args.action.href+'" target="'+actionTarget+'">'+actionTitle+'</a>');

				if(actionTarget === "_blank"){
					$(actionLink).on('click.blank',function(){
						pnext.utils.toggleModal({close: true});
					});
				}

				//build the link options and only add the link one time.

				if(actionCallback != ""){
					$(actionLink).on('click.callback',actionCallback);
				}

				//$pnModal.find('.pn-modal-ft');
				$pnModal.find('.pn-modal-ft').append(actionLink, '<a href="#" class="pn-modal-close">'+cancelTitle+'</a>').show();

		}else{
			$pnModal.find('.pn-modal-ft').hide()
		}

		if(args.url){
			//create an iframe and drop it in there
			var iFrame = $('<iframe></iframe>').attr('src', args.url);
			$pnModal.find('.pn-modal-bd').html(iFrame);
			pnext.utils.toggleModal(); //call the modal
		}else if(args.html){
			$pnModal.find('.pn-modal-bd').html(args.html);
			pnext.utils.toggleModal(); //call the modal
		}else if(args.txt){
			//make an ajax call to get the contents of the textfile
			$.ajax({
				  //type: "POST",
				  //url: "/wp-content/themes/dwboomer/functions/getFileContents.php",
				  url: args.txt,
				  type: "GET",
				  data: {
					  url: args.txt
				  },
				  success: function(d){
					  //$pnModal.find('.pn-modal-bd').html('<pre>' + d + '</pre>');
					  $pnModal.find('.pn-modal-bd').html('<div class="txtFile">' + d + '</div>');
					  pnext.utils.toggleModal(); //call the modal on successful callback
				  },
				  error: function(d){
					console.info(d);
				  },
				  dataType: 'text'
				});
		}else{
			return;
		}

	}

	pnext.utils.toggleModal = function(){
		var args = arguments[0] || {};
		if(args.close === true){
			$(document).off('keyup.closeModal');
			$pnModal.hide();
			$pnModal.find('.pn-modal-bd').html('');
			$pnModal.find('.pn-modal-ft').html('');
			if(pnModalCallback != null && typeof(pnModalCallback) === 'function'){
				pnModalCallback();
			}
			pnModalCallback = null;
			$pnModalOverlay.hide();
		}else{
			$pnModalOverlay.show();
			$pnModal.show();
			//set a keypress listener on the document
			$(document).on('keyup.closeModal', function(e) {
			     if (e.keyCode == 27) { // escape key maps to keycode '27'
			        pnext.utils.toggleModal({close:true})
			    }
			});
		}
	}

	pnext.utils.createCookie = function(name, value, days) {
	    var expires;

	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	        expires = "";
	    }
	    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
	}

	pnext.utils.readCookie = function(name) {
	    var nameEQ = encodeURIComponent(name) + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
	        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	    }
	    return null;
	}

	pnext.utils.eraseCookie = function(name) {
	    pnext.utils.createCookie(name, "", -1);
	}

	pnext.utils.tactifyLink = function(link){
		var href, $elm;
		if(link.jquery){ //we got passed a jquery element
			href = link[0].href;
			$elm = link;
		}else{ //must have been a DOM element
			href = link.href;
			$elm = $(link);
		}
		//now rewrite the link
		if($elm.hasClass('page-numbers')){
			//skip it because the events manager plugin take all of the url query params and adds them to the paging links
		}else{
			$elm.attr('href',href + (href.indexOf("?") > -1 ? '&' : '?') + tactParams);
		}
	}

	var init = function(){
		$(document).ready(function(){
			dwUserMenu();
			//dwDbModal();
			prepTacticLinks();
			initModalOverlay();
		});
	}

	init();

}(window.pnext = window.pnext || {}, jQuery));
