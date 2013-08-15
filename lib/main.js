var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");

var widget = widgets.Widget({
  id: "Human Coders News",
  label: "Vous pouvez poster une news à partir de n'importe quel site web en un clic !",
  contentURL: "https://github.com/HumanCoders/chrome/blob/master/19.png?raw=true",
  onClick: function() {
  	tabs.open("http://news.humancoders.com/items/new?url=" + encodeURIComponent(tabs.activeTab.url) + "&utm_source=HCNFirefoxExtention&utm_medium=button&utm_campaign=share-news");
  }
});