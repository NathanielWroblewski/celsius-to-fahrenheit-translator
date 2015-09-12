// execute with `$ node ./scripts/regex.js`
var CELSIUS = /(\d+(\.\d+)?)\s?(°|degrees?|\sin)(\sin)?\s?(C(elsius)?|celsius)/g;

var assertEqualStrings = [
  '10°C',
  '10°Celsius',
  '10°celsius',
  '10° C',
  '10° Celsius',
  '10 °C',
  '10 °Celsius',
  '10° in Celsius',
  '10 in Celsius',
  '10 in celsius',
  '1 degree C',
  '10 degrees C',
  '1 degree Celsius',
  '10 degrees Celsius',
  '10 degrees in Celsius',
  '1 degree in Celsius',
  '1 degree Celsius',
  '100.54° in Celsius',
  '100.54 degrees in Celsius'
]

var assertNullStrings = ['10c']

for (var i = 0; i < assertEqualStrings.length; i++) {
  console.log(assertEqualStrings[i].match(CELSIUS)[0] === assertEqualStrings[i])
}

for (var i = 0; i < assertNullStrings.length; i++) {
  console.log(assertNullStrings[i].match(CELSIUS) === null)
}
