var data = require('self').data;
var tabs = require("sdk/tabs");

var {Cc, Ci} = require('chrome');
var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
 
exports.main = function(options, callbacks) {
	addToolbarButton();
};
 
exports.onUnload = function(reason) {
	removeToolbarButton();
};
 
function addToolbarButton() {
	var document = mediator.getMostRecentWindow('navigator:browser').document;		
	var navBar = document.getElementById('nav-bar');
	if (!navBar) {
		return;
	}
	var btn = document.createElement('toolbarbutton');	
	btn.setAttribute('id', 'hcn-toolbar');
	btn.setAttribute('type', 'button');
	btn.setAttribute('class', 'toolbarbutton-1');
	btn.setAttribute('image', data.url('19.png'));
	btn.setAttribute('orient', 'horizontal');
	btn.setAttribute('title', "Vous pouvez poster une news à partir de n'importe quel site web en un clic !");
	btn.addEventListener('click', function() {
		tabs.open("http://news.humancoders.com/items/new?url=" + encodeURIComponent(tabs.activeTab.url) + "&utm_source=HCNFirefoxExtention&utm_medium=button&utm_campaign=share-news");
	}, false)
	navBar.appendChild(btn);
}
 
function removeToolbarButton() {
	var mostRecentWindow = mediator.getMostRecentWindow('navigator:browser');
	if(!mostRecentWindow) {
		return;
	}
	var document = mostRecentWindow.document;		
	var navBar = document.getElementById('nav-bar');
	var btn = document.getElementById('hcn-toolbar');
	if (navBar && btn) {
		navBar.removeChild(btn);
	}
}
