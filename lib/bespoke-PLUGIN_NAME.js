module.exports = function() {
  return function(deck) {
    console.log('registered PLUGIN_NAME on deck with root ' + deck.parent.outerHTML.match(/<[^>]+>/)[0]);
  };
};
