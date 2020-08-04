/**

	Dynamic tabs widget.
	<br />
	<br />Automatically creates the dynamic tab widget onload and makes them dynamic tabs (show/hide content) based on the presence 
	and value of the magic @data-widget="dyntabs" attribute on the tab container.
	<br />
	<br />Usage:
		
	<div id="ibm-primary-tabs" class="ibm-dyntabs" data-widget="dyntabs">

	Or in the case of content space tabs:
		
		<div class="ibm-graphic-tabs ibm-dyntabs" data-widget="dyntabs">

	__Event usage__: Subscribe to the IBM widget init event that fires on your DOM element to know when the widget has been initialized and you can access its APIs.

	<br>
	<br>
	__Special case:__ In scenarios where you dynamically inject HTML post page load, you can initialize the widget on your injected container like this:
		
	jQuery("<your_tabwidget_container_selector>").dyntabs(optionalSettingsObject);

	__To destroy the widget__ and return back the original HTML that the widget initialized on, call the common widget destroy method on your element:
		
	jQuery("<your_tabwidget_container_selector>").data("widget").destroy();


	<br />Allowed options and values. __All values are strings__ (html standards):
	<br />__data-remembertab__: true (default) | false

	@class IBMCore.common.widget.dyntabs

**/

(function ($, IBM) {

	var me = IBM.namespace(IBM, "common.widget.dyntabs"),
		dynTabWidgets = [],
		object_name = "DynTabs",
		dyntabStoragePrefix = "ibmdyntabs.";

	/**
		Public jQuery plug-in definition.
		<br />Used by core v18 JS file to auto-init dynamic tab HTML that exist on the page on DOM ready.

		@method $.fn.dyntabs
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
	**/
	$.fn.dyntabs = function (settings) {
		return this.each(function(){
			var d = createDynTabs(settings);
			d.init(this);
		});
	};

	/**
		Called by our jQuery plug-in.
		<br />This creates a new dynamit tabs object and registers the instance into array of all this widget instances.
		<br />The jQuery plugin abstracts this and makes behind-the-scenes changes easy.
		
		@method createDynTabs
		@private
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
		@return {Object} The dynamic tab object instance created.
	**/
	function createDynTabs (settings) {
		var newTabs = new DynTabs(settings);
		
		dynTabWidgets.push(newTabs);
		
		return newTabs;
	}

	/**
		Publishes this event if there was an error creating the widget.
		
		@event error
	**/
	/**
		Published on widget's DOM element after dyntabs has been initialized.
		<br><strong>Example usage</strong>:
		<pre>
			jQuery("&lt;your_tabwidget_container_selector>")[0].addEventListener("ibm-init", function (evt) {
			    // dynamic tabs widget is available.
			});
		</pre>
		
		@event ibm-init
	**/
	/**
		Dynamic tabs object/constructor for our public jQuery plugin.
		<br />Called by "createDynTabs".
		<br />You can't use this directly. Use the standard jQuery(xxxx).dyntabs() plug-in method to dynamically init and create dynamic tabs.

		@method DynTabs
		@constructor
		@param [settings] {Object} Settings to override defaults and element's @data-xxxx attributes.
		@example
			// You can access your widget object that was created (this) using the standard convention:
			jQuery("<your_tabwidget_container_selector>").data("widget");
	**/
	function DynTabs (settings) {
		var $elem,
			$origEl,
			me = this,
			_activeTabId,
			appliedSettings,
			containerElement,
			defaults = {
				remembertab: true
			},
			tabListElement,
			tabItemElements,
			tabIds = [],
			tabContentElements,
			showAllElement;			

		/**
			This is a method of the "Dyntabs" constructor.
			<br />Destroys the widget and puts back the original HTML element that existed before the widget initialized.
			
			@method Dyntabs.destroy
		**/
		me.destroy = function () {
			tabItemElements.each(function () {
				$(this).removeAttr("aria-controls");
			});

			tabContentElements.each(function () {
				$(this).removeAttr("style").removeAttr("role").removeAttr("aria-hidden");
			});

			$elem.replaceWith($origEl);

			return $origEl;
		};

		/**
			This is a method of the widget constructor.
			<br />Called by our public jQuery plug-in after a new DynTabs object has been created and returned by "createDynTabs".
			<br />Automatically inits the Dyntabs plug-in on the passed element, 
			merging in any manually passed settings, @data-xxxxx settings, and our default settings. 
			
			@method DynTabs.init
			@param elem {jQuery/DOM selector} The element you want to init the widget on.
		**/
		me.init = init;
		function init (elem) {
			var showAllSelector = "li:has(a[href='#__show_all_tabs__'])";

			$elem = $(elem);
			
			$origEl = $elem.clone(true);

			$elem.data("widget", me);
			
			containerElement = $elem;
			tabListElement = $elem.find("ul.ibm-tabs");
			tabItemElements = tabListElement.find("a");
			showAllElement = tabListElement.find(showAllSelector);

			// Merge settings into applied settings to use.
			appliedSettings = $.extend(true, {}, defaults, $elem.data(), settings);

			// Add the dynamic class to them. This isn't needed if the widget isn't there so we add it here.
			containerElement.addClass("ibm-dyntabs");

			// Make a list of the content elements by collecting the href values.
			// We do it this way since the content items may be located elsewhere outside the widget.
			tabContentElements = tabItemElements.map(function () {
				return $(this.getAttribute("href"))[0];
			});

			try {
				initData();
				initHtml();
				initEvents();
				showTab(startingTabId());
				fireStatsEvent("load", startingTabId());

				// Add processed state (class) and fire common init event on the HTML element.
				IBM.common.widget.manager.dispatchInitEvent($elem[0]);
			}
			catch (er) {
				throw er;
			}
		}

		/**
			Adds the IDs of the tabs in the set to an array. Used for showAll and ID checking.

			@method initData
			@private
		**/
		function initData () {
			// Save list of ids for easy access to ordering.
			tabItemElements.each(function () {
				var nId = normalizeId($(this).attr("href"));
				tabIds.push(nId);
			});
		}

		/**
			Adds a11y tagging to tabs. 
			<br />Need to verify this with Matt King that it's correct.

			@method initHtml
			@private
		**/
		function initHtml () {
			ensureIdExists();

			containerElement.attr("role", "toolbar").attr("aria-label", "Tab Navigation");

			tabListElement.attr("role", "tablist");

			tabItemElements.each(function () {
				var $tabEl = $(this),
					href = $tabEl.attr("href"),
					targetId = href.replace(/^#/, "");

				if (!this.id) {
					this.id = "dtitem-" + targetId;
				}

				$tabEl.attr("role", "tab").attr("aria-controls", targetId);
				$(document.getElementById(targetId)).attr("aria-labelledby", $tabEl[0].id);
			});

			tabContentElements.each(function () {
				$(this).attr("role", "tabpanel");
			});
		}

		/**
			Binds the tabs to fire an event onclick.

			@method initEvents
			@private
		**/
		function initEvents () {
			function tabHandler (e) {
				e.preventDefault();
				
				var anchor,
					$target = $(e.delegateTarget),
					tabId;

				if ($target.is("li")) {
					anchor = $target.find("a");
				}
				else {
					anchor = $target;
				}

				// Tabs HAVE to have "#someIDvalue" for href to work, so just grab value here.
				tabId = anchor.attr("href").split("#")[1];

				showTab(tabId);

				fireStatsEvent("click", tabId);
			}

			// Tabs have to have <a> for natural tab/focus. v17 way of just <li> was wrong.
			tabItemElements.on("click", tabHandler);
		}


		/**
			Makes sure the DOM element has an ID. Creates a dynamic one if it doesn't.
			
			@method ensureIdExists
			@private
		**/
		function ensureIdExists () {
			if (!tabListElement[0].id) {
				tabListElement.attr("id", "ibm_dyntablist_" + dynTabWidgets.length);
			}
		}

		/**
			Strips the pound sign (#) from a content item's id if there is one. 
			
			@method normalizeId
			@private
			@param id {String} The ID, with or without the preceding pound sign. 
			@return {String} The bare ID.
		**/
		function normalizeId (id) {
			return id.replace(/^#/, "");
		}

		/**
			Highlight the specified tab. 
			
			@method setActiveTabItem
			@private
			@param id {String} The ID of the content item whose tab to make active, or "__show_all_tabs__".
			@param hideOthers {Boolean} If you want to hide all other tab contents or not. Typically true.
		**/
		function setActiveTabItem (id, hideOthers) {
			var nId = normalizeId(id),
				selector = "li a[href='#" + nId + "']";

			if (hideOthers) {
				tabItemElements.not(selector).removeClass("ibm-active").attr("aria-selected", "false").end();
			}

			tabItemElements.filter(selector).addClass("ibm-active").attr("aria-selected", "true").end();
		}

		/**
			Show the selected content item.
			
			@method setActiveContentItem
			@private
			@param id {String} The ID of the content item to make active, or "__show_all_tabs__".
			@param hideOthers {Boolean} If you want to hide all other tab contents or not. Typically true.
		**/
		function setActiveContentItem (id, hideOthers) {
			var nId = normalizeId(id);

			if (hideOthers) {
				tabContentElements.not("#" + nId).hide().attr("aria-hidden", "true").end();
			}

			tabContentElements.filter("#" + nId).show().attr("aria-hidden", "false").end();

			// Run EACH setsameheight widget that exists and has been processed and (re)adjust 
			//  the height after the tab content is shown.
			if ($(document.getElementById(nId)).find(".ibm-widget-processed[data-widget='setsameheight']")[0]) {
				$(document.getElementById(nId)).find(".ibm-widget-processed[data-widget='setsameheight']").each(function () {
					$(this).data("widget").adjustHeights(true);
				});
			}
		}

		/**
			Save selected item to local storage.
			
			@method saveActiveItem
			@private
			@param  {String} id Id of the tab to save.
		**/
		function saveActiveItem (id) {
			// remember active tab in HTML5 storage for 7 days
			var url = location.href.split("#")[0],
				tabListId = tabListElement[0].id,
				nId = normalizeId(id),
				allowedTtl = IBMCore.www.module.truste.getUiAllowedStorageTtl(4 * 3600);

			IBM.common.util.storage.setItem(dyntabStoragePrefix + url + "#" + tabListId, nId, allowedTtl);
		}

		/**
			Get the id of the active tab from local storage, if it exists.
			
			@method retrieveActiveItem
			@private
			@return {String} The ID of the tab to activate from storage, or undefined if not found.
		**/
		function retrieveActiveItem () {
			var urlParts = location.href.split("#"),
			url = urlParts[0],
			tabListId = tabListElement[0].id;

			return IBM.common.util.storage.getItem(dyntabStoragePrefix + url + "#" + tabListId);
		}

		/**
			Fire a stats event for this widget.
			
			@method fireStatsEvent
			@private 
			@param eventType {String} Type of event, either "load" or "click."
			@param id {String} The ID of the tab.
		**/
		function fireStatsEvent (eventType, tabId) {
			var nId = normalizeId(tabId);

			IBM.common.util.statshelper.fireEvent({
				"ibmEV" : "widget",
				"ibmEvGroup" : "Dynamic tabs",
				"ibmEvName" : eventType,
				"ibmEvAction" : nId
			});
		}

		/**
			Determine which tab to set active initially. Determined in three steps:
			<br />1. If the url has "#tab_<tabname>" at the end of it, that is used.
			<br />2. Else if localstorage has a saved entry, use that.
			<br />3. Lastly, default to the first tab in the list.
			
			@method startingTabId
			@private
			@return {String} The ID of the content item to make active.
		**/
		function startingTabId () {
			var activeTabId = null,
				id,
				urlParts = location.href.split("#"),
				storedItem = retrieveActiveItem();

			// #1. Priority: If we've got "#tab_<tabname>" at the end of the url, use that.
			// else
			// #2. Use a preset: If the tabs were tagged with a data-activetabid, use that value.
			if (urlParts.length > 1 && urlParts[1].match(/^tab_/) !== null) {
				id = urlParts[1].replace(/^tab_/, "");
				if (tabIds.indexOf(id) > -1) {
					activeTabId = id;
				}
			}
			else if (appliedSettings.activetabid) {
				activeTabId = appliedSettings.activetabid;
			}

			// #3. If we don't have one from #1 & 2 above: Look for one from the "last visit" in localstorage if enabled (by default).
			if (!activeTabId && !!storedItem && appliedSettings.remembertab) {
				activeTabId = storedItem;
			}

			// Validate that the tab we're going to highlight exists, else set to null and let next "if" take over.
			if (tabItemElements.is("[href='#" + activeTabId + "']").length === 0) {
				activeTabId = null;
			}

			// #4. Fallback/default: If none from 1,2,3 or the ID doesn't exist, default to the first tab.
			if (!activeTabId) {
				activeTabId = $(tabItemElements[0]).attr("href");
			}

			return activeTabId;
		}

		/**
			This is a method of the widget constructor.
			<br>Make the indicated tab active.
			
			@method DynTabs.showTab
			@param id {String} The ID of the content element to make active, with or without the # sign.
			@example 
				jQuery("<your_tabwidget_container_selector>").data("widget").showTab("mytabID");
		**/
		me.showTab = showTab;
		function showTab (id) {
			var nId = normalizeId(id);

			if (nId === "__show_all_tabs__") {
				showAllTabs();
				return;
			}

			_activeTabId = nId;

			setActiveTabItem(id, true);
			setActiveContentItem(id, true);
			saveActiveItem(id);
			
			// Trigger slick carousel resize event when tab is shown so it can reinit/fix itself when nested in dynamic tabs
			$("#" + nId).find("[data-widget='carousel']").each(function () {
				if ($(this).slick) {
					$(this).slick("resize");
				}
			});
		}

		/**
			This is a method of the widget constructor.
			<br>Make the content of all tabs visible. 
			
			@method DynTabs.showAllTabs
			@example 
				jQuery("<your_tabwidget_container_selector>").data("widget").showAllTabs();
		**/
		me.showAllTabs = showAllTabs;
		function showAllTabs () {
			_activeTabId = "__show_all_tabs__";

			setActiveTabItem(_activeTabId, true);

			$.each(tabIds, function (i, name) {
				setActiveContentItem(name, false);
			});
		}

		/**
			This is a method of the widget constructor.
			<br>Method to retrieve the active tab's ID.

			@method DynTabs.activeTabId
			@return {String} The ID of the current active tab.
			@example 
				jQuery("<your_tabwidget_container_selector>").data("widget").activeTabId();
		**/
		me.activeTabId = activeTabId;
		function activeTabId () {
			return _activeTabId;
		}
	}

	/** 
		Enables primary tabnav as dyntabs in burger menu to change the selected burger menu item and then close the menu.
		<br />Also adds binding to primary tabnav dyntabs to simply change the burger menu selected item (to keep them visually in sync).

		@method setupDyntabsInMobilemenu
		@private
	**/
	function setupDyntabsInMobilemenu () {
		var $menuDyntabs = $(document.getElementsByClassName("ibm-mobilemenu")[0]).find("[data-type='dyntabs']"),
			selectedClasses = "ibm-active ibm-mobilemenu-nav-selected";

		if (!$menuDyntabs[0]) {
			return;
		}

		// Find the one that's selected and de-select it.
		// Then select the one that was clicked.
		function showSelected ($el) {
			$menuDyntabs.find("[aria-selected='true']").parent().attr("aria-selected",false).removeClass(selectedClasses);
			$el.parent().attr("aria-selected",true).addClass(selectedClasses);
		}

		// If a PRIMARY NAV dyntab is clicked, change it to be "selected" in the burger menu.
		$("#ibm-primary-tabs.ibm-dyntabs").on("click", "a", function (evt) {
			var thisId = $(this).parent().attr("aria-controls");

			showSelected( $menuDyntabs.find("li[aria-controls='" + thisId + "'] a") );
		});

		// If a BURGER MENU dyntab is clicked, change it to be "selected" in the burger menu, then close the menu.
		$menuDyntabs.on("click", "a", function (evt) {
			var $clickedTab = $(this);
			evt.preventDefault();
			evt.stopPropagation();
			showSelected($clickedTab);
			IBM.common.module.mobilemenu.hide();
		});
	}

	// When burger menu is ready, check for dynamic primary tabs and set them up to work in the burger menu.
	IBM.common.module.mobilemenu.subscribe("ready", "dyntabs", setupDyntabsInMobilemenu).runAsap(setupDyntabsInMobilemenu);

})(jQuery, IBMCore);

;
