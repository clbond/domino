"use strict";

var HTMLParser = require('./HTMLParser');

function DOMParser() {}

DOMParser.prototype.parseFromString = function(markup, mimeType) {
  var parser = new HTMLParser();
  parser.parse(markup || '', true);
  return parser.document();
};

module.exports = DOMParser;
