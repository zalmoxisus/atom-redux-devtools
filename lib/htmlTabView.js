// Based on https://github.com/mark-hahn/html-tab

var HtmlTabView, View,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

View = require('atom-space-pen-views').View;

module.exports = HtmlTabView = (function(superClass) {
  extend(HtmlTabView, superClass);

  function HtmlTabView() {
    return HtmlTabView.__super__.constructor.apply(this, arguments);
  }

  HtmlTabView.content = function() {
    return this.div({ id: 'remotedev' });
  };

  return HtmlTabView;

})(View);
