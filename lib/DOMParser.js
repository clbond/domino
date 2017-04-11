"use strict";

function DOMParser() {}

DOMParser.prototype.parseFromString = function(markup, mimeType) {
  var element = document.createElement('template');
  element.innerHTML = markup;
  return {documentElement: element.content.childNodes[0]};
};

module.exports = DOMParser;
