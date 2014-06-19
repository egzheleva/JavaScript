"use strict";

var sortNumbers = function(numbers) {
  return numbers.sort(function(a, b) {
    return a - b;
  });
};

var beerAndFries = function(items) {
  var fries = [],
      beer = [];
      //max = [];

  items.forEach(function(item) {
    if(item.type == "beer") {
      beer.push(item.score);
    }
    else {
      fries.push(item.score);
    }
  });

  sortNumbers(fries);
  sortNumbers(beer);

  return fries.map(function(item, index) {
    return item * beer[index];
  }).reduce(function(x, y) {
    return x + y;
  }, 0);
};

exports.beerAndFries = beerAndFries;
