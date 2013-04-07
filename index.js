var _ = require('underscore')
  , loremIpsum = require('lorem-ipsum');

module.exports = function (app) {
  app.view.fn('loremIpsum',
    function (count, units, sentenceLowerBound, sentenceUpperBound, paragraphLowerBound, paragraphUpperBound, format) {
      var options = null;

      if (units && _.isObject(units)) {
        options = units;
        options.count = options.count || count;
      } else {
        options = {
            count: count
          , format: format
          , paragraphLowerBound: paragraphLowerBound
          , paragraphUpperBound: paragraphUpperBound
          , sentenceUpperBound: sentenceUpperBound
          , sentenceLowerBound: sentenceLowerBound
          , units: units
        };
      }

      return loremIpsum(options);
  });
}