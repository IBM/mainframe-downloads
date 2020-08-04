/**

	Canada cookie notice
	<br />
	<br />This is required by law/legal on Canada pages.
	<br />When a user views a canada page, and we detect we haven't shown them the notice yet (only show once), we show
	 a notice at the bottom of the page about using cookies.
	<br />We keep track (as possible) and only show it to the user 1 time. Of course, if they disable or clear cookies/storage
	 we end up showing them again. This is fine and agreed on.
	<br>
	<br>This gets output as it's own file and is dynamically included when needed.

  NOTE: Canada cookie banner taken out and passed on to another team. Only Adchoice remains (for now)

	@class IBMCore.common.module.canadanotice

**/

(function($, IBM) {
  var me = IBM.namespace(IBM, 'common.module.canadanotice');

  /**
		Automated callback from subscription to meta 'dataReady' event publisher.
		<br />These conditions must be met for the canada overlay notice:
		<br />1. Must be a CA-EN|FR page.
		<br />2. Must not have the flag that we've shown it to them already.
		<br />3. Must have storage enabled. There's no point in showing if we can't even track them.
		<br />
		<br />For the "adchoices" link at bottom, the only requirement is cc == "ca".

		@method autoInit
	**/
  me.autoInit = function() {
    // Remove the adChoices link and canada cookie notice in the case of dyn. locale change via meta utility.
    $(
      '#ibm-canada-legal-adchoice, .ibm-canada-notice, .ibm-canada-notice-button'
    ).remove();

    // SPECIAL TRUSTE Adchoice link: Add the special Truste "adChoices" link for all Canada pages.
    // If the special ADCHOICE truste lib. isn't on the page already get it then inject the link,
    // else just inject the link b/c it's already there.
    if (IBM.common.util.meta.getPageCc() === 'ca' && !$('#ibm-canada-legal-adchoice').length) {
      $(injectAdchoiceLink);
    }
  };

  /**
		Just injects the link, appends to body.

		@method injectAdchoiceLink
		@private
	**/
  function injectAdchoiceLink() {
    var imageToUse =
      '<img src="' +
      IBM.common.util.config.get('imageUrl') +
      'adchoices.png" width="77" height="16" alt="" border="0" />';

    if (IBM.common.util.meta.getPageLc() === 'fr') {
      imageToUse =
        '<img src="' +
        IBM.common.util.config.get('imageUrl') +
        'adchoices-cafr.png" width="87" height="15" alt="" border="0" />';
    }

    $('body').prepend(
      '<div class="ibm-legalfooter-text" id="ibm-canada-legal-adchoice"><div class="ibm-columns"><div class="ibm-col-1-1"><p><a style="cursor:pointer" href="https://youradchoices.ca/en/tools" target="_blank">' +
        imageToUse +
        '</a></p></div></div></div>'
    );
  }

  /* Wait for events to happen.
   **********************************************************************************************/

  // This separate file is injected if the page loaded is ca, but add subscripbtion for dynamic locale change,
  // so when going from CA to a different country, we can remove this.
  IBM.common.meta
    .subscribe('dataReady', 'canadaadchoice', me.autoInit)
    .runAsap(me.autoInit);
})(jQuery, IBMCore);
;
