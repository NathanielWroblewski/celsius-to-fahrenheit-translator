var CELSIUS = /(\d+(\.\d+)?)\s?(°|degrees?|\sin)(\sin)?\s?(C(elsius)?|celsius)/g;

var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    walk(document.body);
  }
}, 10);

function walk (node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;

      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText (node) {
  node.nodeValue = node.nodeValue.replace(CELSIUS, function(match, degreesC) {
    return match + ' (' + (parseFloat(degreesC) * 9.0 / 5 + 32) + '°F)';
  });
}
