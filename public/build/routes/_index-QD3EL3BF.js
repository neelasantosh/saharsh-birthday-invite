import {
  require_react_dom
} from "/build/_shared/chunk-FQ3SI4AI.js";
import {
  Buffer,
  __commonJS,
  __toESM,
  global,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-VLYZ26UA.js";

// node_modules/react-responsive/dist/react-responsive.js
var require_react_responsive = __commonJS({
  "node_modules/react-responsive/dist/react-responsive.js"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define(["react"], factory);
      else if (typeof exports === "object")
        exports["MediaQuery"] = factory(require_react());
      else
        root["MediaQuery"] = factory(root["React"]);
    })(exports, (__WEBPACK_EXTERNAL_MODULE_react__) => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = {
            /***/
            "./node_modules/css-mediaquery/index.js": (
              /*!**********************************************!*\
                !*** ./node_modules/css-mediaquery/index.js ***!
                \**********************************************/
              /***/
              (__unused_webpack_module, exports2) => {
                "use strict";
                exports2.match = matchQuery;
                exports2.parse = parseQuery;
                var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
                function matchQuery(mediaQuery, values) {
                  return parseQuery(mediaQuery).some(function(query) {
                    var inverse = query.inverse;
                    var typeMatch = query.type === "all" || values.type === query.type;
                    if (typeMatch && inverse || !(typeMatch || inverse)) {
                      return false;
                    }
                    var expressionsMatch = query.expressions.every(function(expression) {
                      var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                      if (!value) {
                        return false;
                      }
                      switch (feature) {
                        case "orientation":
                        case "scan":
                          return value.toLowerCase() === expValue.toLowerCase();
                        case "width":
                        case "height":
                        case "device-width":
                        case "device-height":
                          expValue = toPx(expValue);
                          value = toPx(value);
                          break;
                        case "resolution":
                          expValue = toDpi(expValue);
                          value = toDpi(value);
                          break;
                        case "aspect-ratio":
                        case "device-aspect-ratio":
                        case /* Deprecated */
                        "device-pixel-ratio":
                          expValue = toDecimal(expValue);
                          value = toDecimal(value);
                          break;
                        case "grid":
                        case "color":
                        case "color-index":
                        case "monochrome":
                          expValue = parseInt(expValue, 10) || 1;
                          value = parseInt(value, 10) || 0;
                          break;
                      }
                      switch (modifier) {
                        case "min":
                          return value >= expValue;
                        case "max":
                          return value <= expValue;
                        default:
                          return value === expValue;
                      }
                    });
                    return expressionsMatch && !inverse || !expressionsMatch && inverse;
                  });
                }
                function parseQuery(mediaQuery) {
                  return mediaQuery.split(",").map(function(query) {
                    query = query.trim();
                    var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                    parsed.inverse = !!modifier && modifier.toLowerCase() === "not";
                    parsed.type = type ? type.toLowerCase() : "all";
                    expressions = expressions.match(/\([^\)]+\)/g) || [];
                    parsed.expressions = expressions.map(function(expression) {
                      var captures2 = expression.match(RE_MQ_EXPRESSION), feature = captures2[1].toLowerCase().match(RE_MQ_FEATURE);
                      return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures2[2]
                      };
                    });
                    return parsed;
                  });
                }
                function toDecimal(ratio2) {
                  var decimal = Number(ratio2), numbers;
                  if (!decimal) {
                    numbers = ratio2.match(/^(\d+)\s*\/\s*(\d+)$/);
                    decimal = numbers[1] / numbers[2];
                  }
                  return decimal;
                }
                function toDpi(resolution) {
                  var value = parseFloat(resolution), units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
                  switch (units) {
                    case "dpcm":
                      return value / 2.54;
                    case "dppx":
                      return value * 96;
                    default:
                      return value;
                  }
                }
                function toPx(length) {
                  var value = parseFloat(length), units = String(length).match(RE_LENGTH_UNIT)[1];
                  switch (units) {
                    case "em":
                      return value * 16;
                    case "rem":
                      return value * 16;
                    case "cm":
                      return value * 96 / 2.54;
                    case "mm":
                      return value * 96 / 2.54 / 10;
                    case "in":
                      return value * 96;
                    case "pt":
                      return value * 72;
                    case "pc":
                      return value * 72 / 12;
                    default:
                      return value;
                  }
                }
              }
            ),
            /***/
            "./node_modules/hyphenate-style-name/index.js": (
              /*!****************************************************!*\
                !*** ./node_modules/hyphenate-style-name/index.js ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                "use strict";
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "default": () => __WEBPACK_DEFAULT_EXPORT__
                  /* harmony export */
                });
                var uppercasePattern = /[A-Z]/g;
                var msPattern = /^ms-/;
                var cache = {};
                function toHyphenLower(match) {
                  return "-" + match.toLowerCase();
                }
                function hyphenateStyleName(name) {
                  if (cache.hasOwnProperty(name)) {
                    return cache[name];
                  }
                  var hName = name.replace(uppercasePattern, toHyphenLower);
                  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
                }
                const __WEBPACK_DEFAULT_EXPORT__ = hyphenateStyleName;
              }
            ),
            /***/
            "./node_modules/matchmediaquery/index.js": (
              /*!***********************************************!*\
                !*** ./node_modules/matchmediaquery/index.js ***!
                \***********************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var staticMatch = __webpack_require__2(
                  /*! css-mediaquery */
                  "./node_modules/css-mediaquery/index.js"
                ).match;
                var dynamicMatch = typeof window !== "undefined" ? window.matchMedia : null;
                function Mql(query, values, forceStatic) {
                  var self2 = this;
                  if (dynamicMatch && !forceStatic) {
                    var mql = dynamicMatch.call(window, query);
                    this.matches = mql.matches;
                    this.media = mql.media;
                    mql.addListener(update);
                  } else {
                    this.matches = staticMatch(query, values);
                    this.media = query;
                  }
                  this.addListener = addListener;
                  this.removeListener = removeListener;
                  this.dispose = dispose;
                  function addListener(listener) {
                    if (mql) {
                      mql.addListener(listener);
                    }
                  }
                  function removeListener(listener) {
                    if (mql) {
                      mql.removeListener(listener);
                    }
                  }
                  function update(evt) {
                    self2.matches = evt.matches;
                    self2.media = evt.media;
                  }
                  function dispose() {
                    if (mql) {
                      mql.removeListener(update);
                    }
                  }
                }
                function matchMedia(query, values, forceStatic) {
                  return new Mql(query, values, forceStatic);
                }
                module2.exports = matchMedia;
              }
            ),
            /***/
            "./node_modules/object-assign/index.js": (
              /*!*********************************************!*\
                !*** ./node_modules/object-assign/index.js ***!
                \*********************************************/
              /***/
              (module2) => {
                "use strict";
                var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                var hasOwnProperty2 = Object.prototype.hasOwnProperty;
                var propIsEnumerable = Object.prototype.propertyIsEnumerable;
                function toObject(val) {
                  if (val === null || val === void 0) {
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                  }
                  return Object(val);
                }
                function shouldUseNative() {
                  try {
                    if (!Object.assign) {
                      return false;
                    }
                    var test1 = new String("abc");
                    test1[5] = "de";
                    if (Object.getOwnPropertyNames(test1)[0] === "5") {
                      return false;
                    }
                    var test2 = {};
                    for (var i2 = 0; i2 < 10; i2++) {
                      test2["_" + String.fromCharCode(i2)] = i2;
                    }
                    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
                      return test2[n2];
                    });
                    if (order2.join("") !== "0123456789") {
                      return false;
                    }
                    var test3 = {};
                    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                      test3[letter] = letter;
                    });
                    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                      return false;
                    }
                    return true;
                  } catch (err) {
                    return false;
                  }
                }
                module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
                  var from;
                  var to = toObject(target);
                  var symbols;
                  for (var s2 = 1; s2 < arguments.length; s2++) {
                    from = Object(arguments[s2]);
                    for (var key in from) {
                      if (hasOwnProperty2.call(from, key)) {
                        to[key] = from[key];
                      }
                    }
                    if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (var i2 = 0; i2 < symbols.length; i2++) {
                        if (propIsEnumerable.call(from, symbols[i2])) {
                          to[symbols[i2]] = from[symbols[i2]];
                        }
                      }
                    }
                  }
                  return to;
                };
              }
            ),
            /***/
            "./node_modules/prop-types/checkPropTypes.js": (
              /*!***************************************************!*\
                !*** ./node_modules/prop-types/checkPropTypes.js ***!
                \***************************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var printWarning = function() {
                };
                if (true) {
                  var ReactPropTypesSecret = __webpack_require__2(
                    /*! ./lib/ReactPropTypesSecret */
                    "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                  );
                  var loggedTypeFailures = {};
                  var has = __webpack_require__2(
                    /*! ./lib/has */
                    "./node_modules/prop-types/lib/has.js"
                  );
                  printWarning = function(text) {
                    var message = "Warning: " + text;
                    if (typeof console !== "undefined") {
                      console.error(message);
                    }
                    try {
                      throw new Error(message);
                    } catch (x2) {
                    }
                  };
                }
                function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                  if (true) {
                    for (var typeSpecName in typeSpecs) {
                      if (has(typeSpecs, typeSpecName)) {
                        var error;
                        try {
                          if (typeof typeSpecs[typeSpecName] !== "function") {
                            var err = Error(
                              (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                            );
                            err.name = "Invariant Violation";
                            throw err;
                          }
                          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                        } catch (ex) {
                          error = ex;
                        }
                        if (error && !(error instanceof Error)) {
                          printWarning(
                            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                          );
                        }
                        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                          loggedTypeFailures[error.message] = true;
                          var stack = getStack ? getStack() : "";
                          printWarning(
                            "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                          );
                        }
                      }
                    }
                  }
                }
                checkPropTypes.resetWarningCache = function() {
                  if (true) {
                    loggedTypeFailures = {};
                  }
                };
                module2.exports = checkPropTypes;
              }
            ),
            /***/
            "./node_modules/prop-types/factoryWithTypeCheckers.js": (
              /*!************************************************************!*\
                !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
                \************************************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var ReactIs = __webpack_require__2(
                  /*! react-is */
                  "./node_modules/react-is/index.js"
                );
                var assign = __webpack_require__2(
                  /*! object-assign */
                  "./node_modules/object-assign/index.js"
                );
                var ReactPropTypesSecret = __webpack_require__2(
                  /*! ./lib/ReactPropTypesSecret */
                  "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                );
                var has = __webpack_require__2(
                  /*! ./lib/has */
                  "./node_modules/prop-types/lib/has.js"
                );
                var checkPropTypes = __webpack_require__2(
                  /*! ./checkPropTypes */
                  "./node_modules/prop-types/checkPropTypes.js"
                );
                var printWarning = function() {
                };
                if (true) {
                  printWarning = function(text) {
                    var message = "Warning: " + text;
                    if (typeof console !== "undefined") {
                      console.error(message);
                    }
                    try {
                      throw new Error(message);
                    } catch (x2) {
                    }
                  };
                }
                function emptyFunctionThatReturnsNull() {
                  return null;
                }
                module2.exports = function(isValidElement, throwOnDirectAccess) {
                  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                  var FAUX_ITERATOR_SYMBOL = "@@iterator";
                  function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if (typeof iteratorFn === "function") {
                      return iteratorFn;
                    }
                  }
                  var ANONYMOUS = "<<anonymous>>";
                  var ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bigint: createPrimitiveTypeChecker("bigint"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: createAnyTypeChecker(),
                    arrayOf: createArrayOfTypeChecker,
                    element: createElementTypeChecker(),
                    elementType: createElementTypeTypeChecker(),
                    instanceOf: createInstanceTypeChecker,
                    node: createNodeChecker(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker,
                    exact: createStrictShapeTypeChecker
                  };
                  function is(x2, y2) {
                    if (x2 === y2) {
                      return x2 !== 0 || 1 / x2 === 1 / y2;
                    } else {
                      return x2 !== x2 && y2 !== y2;
                    }
                  }
                  function PropTypeError(message, data) {
                    this.message = message;
                    this.data = data && typeof data === "object" ? data : {};
                    this.stack = "";
                  }
                  PropTypeError.prototype = Error.prototype;
                  function createChainableTypeChecker(validate) {
                    if (true) {
                      var manualPropTypeCallCache = {};
                      var manualPropTypeWarningCount = 0;
                    }
                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                      componentName = componentName || ANONYMOUS;
                      propFullName = propFullName || propName;
                      if (secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                          var err = new Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                          );
                          err.name = "Invariant Violation";
                          throw err;
                        } else if (typeof console !== "undefined") {
                          var cacheKey = componentName + ":" + propName;
                          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                          manualPropTypeWarningCount < 3) {
                            printWarning(
                              "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                            );
                            manualPropTypeCallCache[cacheKey] = true;
                            manualPropTypeWarningCount++;
                          }
                        }
                      }
                      if (props[propName] == null) {
                        if (isRequired) {
                          if (props[propName] === null) {
                            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                          }
                          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                        }
                        return null;
                      } else {
                        return validate(props, propName, componentName, location, propFullName);
                      }
                    }
                    var chainedCheckType = checkType.bind(null, false);
                    chainedCheckType.isRequired = checkType.bind(null, true);
                    return chainedCheckType;
                  }
                  function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== expectedType) {
                        var preciseType = getPreciseType(propValue);
                        return new PropTypeError(
                          "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                          { expectedType }
                        );
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createAnyTypeChecker() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                  }
                  function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (typeof typeChecker !== "function") {
                        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                      }
                      var propValue = props[propName];
                      if (!Array.isArray(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                      }
                      for (var i2 = 0; i2 < propValue.length; i2++) {
                        var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
                        if (error instanceof Error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createElementTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      if (!isValidElement(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createElementTypeTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      if (!ReactIs.isValidElementType(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        var actualClassName = getClassName(props[propName]);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createEnumTypeChecker(expectedValues) {
                    if (!Array.isArray(expectedValues)) {
                      if (true) {
                        if (arguments.length > 1) {
                          printWarning(
                            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                          );
                        } else {
                          printWarning("Invalid argument supplied to oneOf, expected an array.");
                        }
                      }
                      return emptyFunctionThatReturnsNull;
                    }
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      for (var i2 = 0; i2 < expectedValues.length; i2++) {
                        if (is(propValue, expectedValues[i2])) {
                          return null;
                        }
                      }
                      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                        var type = getPreciseType(value);
                        if (type === "symbol") {
                          return String(value);
                        }
                        return value;
                      });
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (typeof typeChecker !== "function") {
                        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                      }
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                      }
                      for (var key in propValue) {
                        if (has(propValue, key)) {
                          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                          if (error instanceof Error) {
                            return error;
                          }
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createUnionTypeChecker(arrayOfTypeCheckers) {
                    if (!Array.isArray(arrayOfTypeCheckers)) {
                      true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : 0;
                      return emptyFunctionThatReturnsNull;
                    }
                    for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                      var checker = arrayOfTypeCheckers[i2];
                      if (typeof checker !== "function") {
                        printWarning(
                          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
                        );
                        return emptyFunctionThatReturnsNull;
                      }
                    }
                    function validate(props, propName, componentName, location, propFullName) {
                      var expectedTypes = [];
                      for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
                        var checker2 = arrayOfTypeCheckers[i3];
                        var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                        if (checkerResult == null) {
                          return null;
                        }
                        if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                          expectedTypes.push(checkerResult.data.expectedType);
                        }
                      }
                      var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createNodeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (!isNode(props[propName])) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function invalidValidatorError(componentName, location, propFullName, key, type) {
                    return new PropTypeError(
                      (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
                    );
                  }
                  function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                      }
                      for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (typeof checker !== "function") {
                          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                        }
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createStrictShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                      }
                      var allKeys = assign({}, props[propName], shapeTypes);
                      for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (has(shapeTypes, key) && typeof checker !== "function") {
                          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                        }
                        if (!checker) {
                          return new PropTypeError(
                            "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                          );
                        }
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function isNode(propValue) {
                    switch (typeof propValue) {
                      case "number":
                      case "string":
                      case "undefined":
                        return true;
                      case "boolean":
                        return !propValue;
                      case "object":
                        if (Array.isArray(propValue)) {
                          return propValue.every(isNode);
                        }
                        if (propValue === null || isValidElement(propValue)) {
                          return true;
                        }
                        var iteratorFn = getIteratorFn(propValue);
                        if (iteratorFn) {
                          var iterator = iteratorFn.call(propValue);
                          var step;
                          if (iteratorFn !== propValue.entries) {
                            while (!(step = iterator.next()).done) {
                              if (!isNode(step.value)) {
                                return false;
                              }
                            }
                          } else {
                            while (!(step = iterator.next()).done) {
                              var entry = step.value;
                              if (entry) {
                                if (!isNode(entry[1])) {
                                  return false;
                                }
                              }
                            }
                          }
                        } else {
                          return false;
                        }
                        return true;
                      default:
                        return false;
                    }
                  }
                  function isSymbol(propType, propValue) {
                    if (propType === "symbol") {
                      return true;
                    }
                    if (!propValue) {
                      return false;
                    }
                    if (propValue["@@toStringTag"] === "Symbol") {
                      return true;
                    }
                    if (typeof Symbol === "function" && propValue instanceof Symbol) {
                      return true;
                    }
                    return false;
                  }
                  function getPropType(propValue) {
                    var propType = typeof propValue;
                    if (Array.isArray(propValue)) {
                      return "array";
                    }
                    if (propValue instanceof RegExp) {
                      return "object";
                    }
                    if (isSymbol(propType, propValue)) {
                      return "symbol";
                    }
                    return propType;
                  }
                  function getPreciseType(propValue) {
                    if (typeof propValue === "undefined" || propValue === null) {
                      return "" + propValue;
                    }
                    var propType = getPropType(propValue);
                    if (propType === "object") {
                      if (propValue instanceof Date) {
                        return "date";
                      } else if (propValue instanceof RegExp) {
                        return "regexp";
                      }
                    }
                    return propType;
                  }
                  function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch (type) {
                      case "array":
                      case "object":
                        return "an " + type;
                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + type;
                      default:
                        return type;
                    }
                  }
                  function getClassName(propValue) {
                    if (!propValue.constructor || !propValue.constructor.name) {
                      return ANONYMOUS;
                    }
                    return propValue.constructor.name;
                  }
                  ReactPropTypes.checkPropTypes = checkPropTypes;
                  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
                  ReactPropTypes.PropTypes = ReactPropTypes;
                  return ReactPropTypes;
                };
              }
            ),
            /***/
            "./node_modules/prop-types/index.js": (
              /*!******************************************!*\
                !*** ./node_modules/prop-types/index.js ***!
                \******************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                if (true) {
                  var ReactIs = __webpack_require__2(
                    /*! react-is */
                    "./node_modules/react-is/index.js"
                  );
                  var throwOnDirectAccess = true;
                  module2.exports = __webpack_require__2(
                    /*! ./factoryWithTypeCheckers */
                    "./node_modules/prop-types/factoryWithTypeCheckers.js"
                  )(ReactIs.isElement, throwOnDirectAccess);
                } else {
                }
              }
            ),
            /***/
            "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
              /*!*************************************************************!*\
                !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
                \*************************************************************/
              /***/
              (module2) => {
                "use strict";
                var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                module2.exports = ReactPropTypesSecret;
              }
            ),
            /***/
            "./node_modules/prop-types/lib/has.js": (
              /*!********************************************!*\
                !*** ./node_modules/prop-types/lib/has.js ***!
                \********************************************/
              /***/
              (module2) => {
                module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
              }
            ),
            /***/
            "./node_modules/react-is/cjs/react-is.development.js": (
              /*!***********************************************************!*\
                !*** ./node_modules/react-is/cjs/react-is.development.js ***!
                \***********************************************************/
              /***/
              (__unused_webpack_module, exports2) => {
                "use strict";
                if (true) {
                  (function() {
                    "use strict";
                    var hasSymbol = typeof Symbol === "function" && Symbol.for;
                    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
                    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
                    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
                    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
                    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
                    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
                    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
                    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
                    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
                    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
                    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
                    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
                    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
                    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
                    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
                    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
                    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
                    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
                    function isValidElementType(type) {
                      return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
                    }
                    function typeOf(object) {
                      if (typeof object === "object" && object !== null) {
                        var $$typeof = object.$$typeof;
                        switch ($$typeof) {
                          case REACT_ELEMENT_TYPE:
                            var type = object.type;
                            switch (type) {
                              case REACT_ASYNC_MODE_TYPE:
                              case REACT_CONCURRENT_MODE_TYPE:
                              case REACT_FRAGMENT_TYPE:
                              case REACT_PROFILER_TYPE:
                              case REACT_STRICT_MODE_TYPE:
                              case REACT_SUSPENSE_TYPE:
                                return type;
                              default:
                                var $$typeofType = type && type.$$typeof;
                                switch ($$typeofType) {
                                  case REACT_CONTEXT_TYPE:
                                  case REACT_FORWARD_REF_TYPE:
                                  case REACT_LAZY_TYPE:
                                  case REACT_MEMO_TYPE:
                                  case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                  default:
                                    return $$typeof;
                                }
                            }
                          case REACT_PORTAL_TYPE:
                            return $$typeof;
                        }
                      }
                      return void 0;
                    }
                    var AsyncMode = REACT_ASYNC_MODE_TYPE;
                    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
                    var ContextConsumer = REACT_CONTEXT_TYPE;
                    var ContextProvider = REACT_PROVIDER_TYPE;
                    var Element = REACT_ELEMENT_TYPE;
                    var ForwardRef = REACT_FORWARD_REF_TYPE;
                    var Fragment4 = REACT_FRAGMENT_TYPE;
                    var Lazy = REACT_LAZY_TYPE;
                    var Memo = REACT_MEMO_TYPE;
                    var Portal = REACT_PORTAL_TYPE;
                    var Profiler = REACT_PROFILER_TYPE;
                    var StrictMode = REACT_STRICT_MODE_TYPE;
                    var Suspense = REACT_SUSPENSE_TYPE;
                    var hasWarnedAboutDeprecatedIsAsyncMode = false;
                    function isAsyncMode(object) {
                      {
                        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                          hasWarnedAboutDeprecatedIsAsyncMode = true;
                          console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
                        }
                      }
                      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
                    }
                    function isConcurrentMode(object) {
                      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
                    }
                    function isContextConsumer(object) {
                      return typeOf(object) === REACT_CONTEXT_TYPE;
                    }
                    function isContextProvider(object) {
                      return typeOf(object) === REACT_PROVIDER_TYPE;
                    }
                    function isElement(object) {
                      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                    function isForwardRef(object) {
                      return typeOf(object) === REACT_FORWARD_REF_TYPE;
                    }
                    function isFragment(object) {
                      return typeOf(object) === REACT_FRAGMENT_TYPE;
                    }
                    function isLazy(object) {
                      return typeOf(object) === REACT_LAZY_TYPE;
                    }
                    function isMemo(object) {
                      return typeOf(object) === REACT_MEMO_TYPE;
                    }
                    function isPortal(object) {
                      return typeOf(object) === REACT_PORTAL_TYPE;
                    }
                    function isProfiler(object) {
                      return typeOf(object) === REACT_PROFILER_TYPE;
                    }
                    function isStrictMode(object) {
                      return typeOf(object) === REACT_STRICT_MODE_TYPE;
                    }
                    function isSuspense(object) {
                      return typeOf(object) === REACT_SUSPENSE_TYPE;
                    }
                    exports2.AsyncMode = AsyncMode;
                    exports2.ConcurrentMode = ConcurrentMode;
                    exports2.ContextConsumer = ContextConsumer;
                    exports2.ContextProvider = ContextProvider;
                    exports2.Element = Element;
                    exports2.ForwardRef = ForwardRef;
                    exports2.Fragment = Fragment4;
                    exports2.Lazy = Lazy;
                    exports2.Memo = Memo;
                    exports2.Portal = Portal;
                    exports2.Profiler = Profiler;
                    exports2.StrictMode = StrictMode;
                    exports2.Suspense = Suspense;
                    exports2.isAsyncMode = isAsyncMode;
                    exports2.isConcurrentMode = isConcurrentMode;
                    exports2.isContextConsumer = isContextConsumer;
                    exports2.isContextProvider = isContextProvider;
                    exports2.isElement = isElement;
                    exports2.isForwardRef = isForwardRef;
                    exports2.isFragment = isFragment;
                    exports2.isLazy = isLazy;
                    exports2.isMemo = isMemo;
                    exports2.isPortal = isPortal;
                    exports2.isProfiler = isProfiler;
                    exports2.isStrictMode = isStrictMode;
                    exports2.isSuspense = isSuspense;
                    exports2.isValidElementType = isValidElementType;
                    exports2.typeOf = typeOf;
                  })();
                }
              }
            ),
            /***/
            "./node_modules/react-is/index.js": (
              /*!****************************************!*\
                !*** ./node_modules/react-is/index.js ***!
                \****************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                if (false) {
                } else {
                  module2.exports = __webpack_require__2(
                    /*! ./cjs/react-is.development.js */
                    "./node_modules/react-is/cjs/react-is.development.js"
                  );
                }
              }
            ),
            /***/
            "./node_modules/shallow-equal/dist/index.esm.js": (
              /*!******************************************************!*\
                !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                "use strict";
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "shallowEqualArrays": () => (
                    /* binding */
                    shallowEqualArrays
                  ),
                  /* harmony export */
                  "shallowEqualObjects": () => (
                    /* binding */
                    shallowEqualObjects
                  )
                  /* harmony export */
                });
                function shallowEqualObjects(objA, objB) {
                  if (objA === objB) {
                    return true;
                  }
                  if (!objA || !objB) {
                    return false;
                  }
                  var aKeys = Object.keys(objA);
                  var bKeys = Object.keys(objB);
                  var len = aKeys.length;
                  if (bKeys.length !== len) {
                    return false;
                  }
                  for (var i2 = 0; i2 < len; i2++) {
                    var key = aKeys[i2];
                    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
                      return false;
                    }
                  }
                  return true;
                }
                function shallowEqualArrays(arrA, arrB) {
                  if (arrA === arrB) {
                    return true;
                  }
                  if (!arrA || !arrB) {
                    return false;
                  }
                  var len = arrA.length;
                  if (arrB.length !== len) {
                    return false;
                  }
                  for (var i2 = 0; i2 < len; i2++) {
                    if (arrA[i2] !== arrB[i2]) {
                      return false;
                    }
                  }
                  return true;
                }
              }
            ),
            /***/
            "./src/Component.ts": (
              /*!**************************!*\
                !*** ./src/Component.ts ***!
                \**************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __rest = this && this.__rest || function(s2, e2) {
                  var t2 = {};
                  for (var p2 in s2)
                    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
                      t2[p2] = s2[p2];
                  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
                      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                        t2[p2[i2]] = s2[p2[i2]];
                    }
                  return t2;
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var useMediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./useMediaQuery */
                  "./src/useMediaQuery.ts"
                ));
                var MediaQuery = function(_a) {
                  var children = _a.children, device = _a.device, onChange = _a.onChange, settings = __rest(_a, ["children", "device", "onChange"]);
                  var matches = (0, useMediaQuery_1.default)(settings, device, onChange);
                  if (typeof children === "function") {
                    return children(matches);
                  }
                  return matches ? children : null;
                };
                exports2["default"] = MediaQuery;
              }
            ),
            /***/
            "./src/Context.ts": (
              /*!************************!*\
                !*** ./src/Context.ts ***!
                \************************/
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                "use strict";
                Object.defineProperty(exports2, "__esModule", { value: true });
                var react_1 = __webpack_require__2(
                  /*! react */
                  "react"
                );
                var Context = (0, react_1.createContext)(void 0);
                exports2["default"] = Context;
              }
            ),
            /***/
            "./src/index.ts": (
              /*!**********************!*\
                !*** ./src/index.ts ***!
                \**********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Context = exports2.toQuery = exports2.useMediaQuery = exports2["default"] = void 0;
                var useMediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./useMediaQuery */
                  "./src/useMediaQuery.ts"
                ));
                exports2.useMediaQuery = useMediaQuery_1.default;
                var Component_1 = __importDefault(__webpack_require__2(
                  /*! ./Component */
                  "./src/Component.ts"
                ));
                exports2["default"] = Component_1.default;
                var toQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./toQuery */
                  "./src/toQuery.ts"
                ));
                exports2.toQuery = toQuery_1.default;
                var Context_1 = __importDefault(__webpack_require__2(
                  /*! ./Context */
                  "./src/Context.ts"
                ));
                exports2.Context = Context_1.default;
              }
            ),
            /***/
            "./src/mediaQuery.ts": (
              /*!***************************!*\
                !*** ./src/mediaQuery.ts ***!
                \***************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __assign = this && this.__assign || function() {
                  __assign = Object.assign || function(t2) {
                    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
                      s2 = arguments[i2];
                      for (var p2 in s2)
                        if (Object.prototype.hasOwnProperty.call(s2, p2))
                          t2[p2] = s2[p2];
                    }
                    return t2;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = this && this.__rest || function(s2, e2) {
                  var t2 = {};
                  for (var p2 in s2)
                    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
                      t2[p2] = s2[p2];
                  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
                      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                        t2[p2[i2]] = s2[p2[i2]];
                    }
                  return t2;
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var prop_types_1 = __importDefault(__webpack_require__2(
                  /*! prop-types */
                  "./node_modules/prop-types/index.js"
                ));
                var stringOrNumber = prop_types_1.default.oneOfType([
                  prop_types_1.default.string,
                  prop_types_1.default.number
                ]);
                var types = {
                  all: prop_types_1.default.bool,
                  grid: prop_types_1.default.bool,
                  aural: prop_types_1.default.bool,
                  braille: prop_types_1.default.bool,
                  handheld: prop_types_1.default.bool,
                  print: prop_types_1.default.bool,
                  projection: prop_types_1.default.bool,
                  screen: prop_types_1.default.bool,
                  tty: prop_types_1.default.bool,
                  tv: prop_types_1.default.bool,
                  embossed: prop_types_1.default.bool
                };
                var matchers = {
                  orientation: prop_types_1.default.oneOf([
                    "portrait",
                    "landscape"
                  ]),
                  scan: prop_types_1.default.oneOf([
                    "progressive",
                    "interlace"
                  ]),
                  aspectRatio: prop_types_1.default.string,
                  deviceAspectRatio: prop_types_1.default.string,
                  height: stringOrNumber,
                  deviceHeight: stringOrNumber,
                  width: stringOrNumber,
                  deviceWidth: stringOrNumber,
                  color: prop_types_1.default.bool,
                  colorIndex: prop_types_1.default.bool,
                  monochrome: prop_types_1.default.bool,
                  resolution: stringOrNumber,
                  type: Object.keys(types)
                };
                var type = matchers.type, featureMatchers = __rest(
                  matchers,
                  ["type"]
                );
                var features = __assign({ minAspectRatio: prop_types_1.default.string, maxAspectRatio: prop_types_1.default.string, minDeviceAspectRatio: prop_types_1.default.string, maxDeviceAspectRatio: prop_types_1.default.string, minHeight: stringOrNumber, maxHeight: stringOrNumber, minDeviceHeight: stringOrNumber, maxDeviceHeight: stringOrNumber, minWidth: stringOrNumber, maxWidth: stringOrNumber, minDeviceWidth: stringOrNumber, maxDeviceWidth: stringOrNumber, minColor: prop_types_1.default.number, maxColor: prop_types_1.default.number, minColorIndex: prop_types_1.default.number, maxColorIndex: prop_types_1.default.number, minMonochrome: prop_types_1.default.number, maxMonochrome: prop_types_1.default.number, minResolution: stringOrNumber, maxResolution: stringOrNumber }, featureMatchers);
                var all3 = __assign(__assign({}, types), features);
                exports2["default"] = {
                  all: all3,
                  types,
                  matchers,
                  features
                };
              }
            ),
            /***/
            "./src/toQuery.ts": (
              /*!************************!*\
                !*** ./src/toQuery.ts ***!
                \************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var hyphenate_style_name_1 = __importDefault(__webpack_require__2(
                  /*! hyphenate-style-name */
                  "./node_modules/hyphenate-style-name/index.js"
                ));
                var mediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./mediaQuery */
                  "./src/mediaQuery.ts"
                ));
                var negate = function(cond) {
                  return "not ".concat(cond);
                };
                var keyVal = function(k2, v2) {
                  var realKey = (0, hyphenate_style_name_1.default)(k2);
                  if (typeof v2 === "number") {
                    v2 = "".concat(v2, "px");
                  }
                  if (v2 === true) {
                    return realKey;
                  }
                  if (v2 === false) {
                    return negate(realKey);
                  }
                  return "(".concat(realKey, ": ").concat(v2, ")");
                };
                var join = function(conds) {
                  return conds.join(" and ");
                };
                var toQuery = function(obj) {
                  var rules = [];
                  Object.keys(mediaQuery_1.default.all).forEach(function(k2) {
                    var v2 = obj[k2];
                    if (v2 != null) {
                      rules.push(keyVal(k2, v2));
                    }
                  });
                  return join(rules);
                };
                exports2["default"] = toQuery;
              }
            ),
            /***/
            "./src/useMediaQuery.ts": (
              /*!******************************!*\
                !*** ./src/useMediaQuery.ts ***!
                \******************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var react_1 = __webpack_require__2(
                  /*! react */
                  "react"
                );
                var matchmediaquery_1 = __importDefault(__webpack_require__2(
                  /*! matchmediaquery */
                  "./node_modules/matchmediaquery/index.js"
                ));
                var hyphenate_style_name_1 = __importDefault(__webpack_require__2(
                  /*! hyphenate-style-name */
                  "./node_modules/hyphenate-style-name/index.js"
                ));
                var shallow_equal_1 = __webpack_require__2(
                  /*! shallow-equal */
                  "./node_modules/shallow-equal/dist/index.esm.js"
                );
                var toQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./toQuery */
                  "./src/toQuery.ts"
                ));
                var Context_1 = __importDefault(__webpack_require__2(
                  /*! ./Context */
                  "./src/Context.ts"
                ));
                var makeQuery = function(settings) {
                  return settings.query || (0, toQuery_1.default)(settings);
                };
                var hyphenateKeys = function(obj) {
                  if (!obj)
                    return void 0;
                  var keys = Object.keys(obj);
                  return keys.reduce(function(result, key) {
                    result[(0, hyphenate_style_name_1.default)(key)] = obj[key];
                    return result;
                  }, {});
                };
                var useIsUpdate = function() {
                  var ref = (0, react_1.useRef)(false);
                  (0, react_1.useEffect)(function() {
                    ref.current = true;
                  }, []);
                  return ref.current;
                };
                var useDevice = function(deviceFromProps) {
                  var deviceFromContext = (0, react_1.useContext)(Context_1.default);
                  var getDevice = function() {
                    return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
                  };
                  var _a = (0, react_1.useState)(getDevice), device = _a[0], setDevice = _a[1];
                  (0, react_1.useEffect)(function() {
                    var newDevice = getDevice();
                    if (!(0, shallow_equal_1.shallowEqualObjects)(device, newDevice)) {
                      setDevice(newDevice);
                    }
                  }, [deviceFromProps, deviceFromContext]);
                  return device;
                };
                var useQuery = function(settings) {
                  var getQuery = function() {
                    return makeQuery(settings);
                  };
                  var _a = (0, react_1.useState)(getQuery), query = _a[0], setQuery = _a[1];
                  (0, react_1.useEffect)(function() {
                    var newQuery = getQuery();
                    if (query !== newQuery) {
                      setQuery(newQuery);
                    }
                  }, [settings]);
                  return query;
                };
                var useMatchMedia = function(query, device) {
                  var getMatchMedia = function() {
                    return (0, matchmediaquery_1.default)(query, device || {}, !!device);
                  };
                  var _a = (0, react_1.useState)(getMatchMedia), mq = _a[0], setMq = _a[1];
                  var isUpdate = useIsUpdate();
                  (0, react_1.useEffect)(function() {
                    if (isUpdate) {
                      var newMq_1 = getMatchMedia();
                      setMq(newMq_1);
                      return function() {
                        if (newMq_1) {
                          newMq_1.dispose();
                        }
                      };
                    }
                  }, [query, device]);
                  return mq;
                };
                var useMatches = function(mediaQuery) {
                  var _a = (0, react_1.useState)(mediaQuery.matches), matches = _a[0], setMatches = _a[1];
                  (0, react_1.useEffect)(function() {
                    var updateMatches = function(ev) {
                      setMatches(ev.matches);
                    };
                    mediaQuery.addListener(updateMatches);
                    setMatches(mediaQuery.matches);
                    return function() {
                      mediaQuery.removeListener(updateMatches);
                    };
                  }, [mediaQuery]);
                  return matches;
                };
                var useMediaQuery2 = function(settings, device, onChange) {
                  var deviceSettings = useDevice(device);
                  var query = useQuery(settings);
                  if (!query)
                    throw new Error("Invalid or missing MediaQuery!");
                  var mq = useMatchMedia(query, deviceSettings);
                  var matches = useMatches(mq);
                  var isUpdate = useIsUpdate();
                  (0, react_1.useEffect)(function() {
                    if (isUpdate && onChange) {
                      onChange(matches);
                    }
                  }, [matches]);
                  (0, react_1.useEffect)(function() {
                    return function() {
                      if (mq) {
                        mq.dispose();
                      }
                    };
                  }, []);
                  return matches;
                };
                exports2["default"] = useMediaQuery2;
              }
            ),
            /***/
            "react": (
              /*!**************************************************************************************!*\
                !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
                \**************************************************************************************/
              /***/
              (module2) => {
                "use strict";
                module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = __webpack_require__("./src/index.ts");
          return __webpack_exports__;
        })()
      );
    });
  }
});

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react12 = __toESM(require_react());

// app/components/WelcomeModal.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());

// app/components/Utils/TextWithLine.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TextWithLine = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, false, {
      fileName: "app/components/Utils/TextWithLine.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center font-medium font-head text-gray-600 italic mx-3", children }, void 0, false, {
      fileName: "app/components/Utils/TextWithLine.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, false, {
      fileName: "app/components/Utils/TextWithLine.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var TextWithLine_default = TextWithLine;

// app/components/WelcomeModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function WelcomeModal({ isOpen, onClose }) {
  const { remark: recipient } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" + (!isOpen ? " -translate-y-full" : ""),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center p-5 my-auto w-full md:w-[500]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500", children: "Birthday Invitation of" }, void 0, false, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500", children: "Neela. Saharsh" }, void 0, false, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "text-center font-head text-5xl md:text-6xl mb-6 text-gray-800", children: "Son of Neela. Shivani & Santosh" }, void 0, false, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[350px] mb-12", children: !recipient ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextWithLine_default, { children: "For" }, void 0, false, {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: recipient.length < 50 ? "text-center font-sans text-gray-700 leading-7 text-lg py-1" : "text-center font-sans text-gray-700 leading-7 px-4 md:px-0",
              children: recipient
            },
            void 0,
            false,
            {
              fileName: "app/components/WelcomeModal.tsx",
              lineNumber: 39,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "button",
            className: "px-5 transition-all py-3 font-sans font-medium rounded-md bg-contrast outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            onClick: onClose,
            children: "Enter"
          },
          void 0,
          false,
          {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/WelcomeModal.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var import_react_responsive = __toESM(require_react_responsive());

// app/images/hero-bg.jpg
var hero_bg_default = "/build/_assets/hero-bg-N5BLWGR4.jpg";

// app/images/hero-bg-mobile.jpg
var hero_bg_mobile_default = "/build/_assets/hero-bg-mobile-OKT6IZAB.jpg";

// app/components/Utils/SectionWrapper.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var SectionWrapper = ({ children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-0 md:px-16", children }, void 0, false, {
    fileName: "app/components/Utils/SectionWrapper.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Utils/SectionWrapper.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var SectionWrapper_default = SectionWrapper;

// app/components/BirthdayBoy.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/images/saharsh.png
var saharsh_default = "/build/_assets/saharsh-7SJN7PQ7.png";

// app/components/BirthdayBoy.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var BirthdayBoy = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pt-20 pb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-3xl text-center font-sans font-bold text-gray-700 mb-6", children: "He is the blessed" }, void 0, false, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full flex flex-wrap pb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          src: saharsh_default,
          alt: "pengantin perempuan",
          className: "w-48 h-48 rounded-full mb-8"
        },
        void 0,
        false,
        {
          fileName: "app/components/BirthdayBoy.tsx",
          lineNumber: 13,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-5xl font-medium font-head mb-4 text-gray-800", children: "Neela Saharsh" }, void 0, false, {
        fileName: "app/components/BirthdayBoy.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextWithLine_default, { children: "Birthday Boy" }, void 0, false, {
        fileName: "app/components/BirthdayBoy.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/BirthdayBoy.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-sans text-gray-500 leading-6", children: "Born on September, 29th 2022." }, void 0, false, {
        fileName: "app/components/BirthdayBoy.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BirthdayBoy.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var BirthdayBoy_default = BirthdayBoy;

// app/components/Countdown.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var EVENT_DATE = "September 30, 2023 18:00:00";
var COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();
var countdownBase = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};
var Countdown = (0, import_react3.memo)(() => {
  const [countdown, setCountdown] = (0, import_react3.useState)(countdownBase);
  (0, import_react3.useEffect)(() => {
    const interval = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const delta = COUNTDOWN_DATE - now;
      const days = Math.floor(delta / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(
        delta % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      );
      const minutes = Math.floor(delta % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(delta % (1e3 * 60) / 1e3);
      setCountdown({ days, hours, minutes, seconds });
      if (delta < 0) {
        clearInterval(interval);
        setCountdown(countdownBase);
      }
    }, 1e3);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "mb-1", children: "Countdown" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "Saharsh Birthday" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center pb-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NumberCard, { number: countdown.days, label: "Day" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NumberCard, { number: countdown.hours, label: "Hours" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NumberCard, { number: countdown.minutes, label: "Minutes" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NumberCard, { number: countdown.seconds, label: "Seconds" }, void 0, false, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
});
Countdown.displayName = "Countdown";
var NumberCard = (0, import_react3.memo)(({ number, label }) => {
  const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rounded-lg bg-[#EFEFEF] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-3xl mb-2", children: numberString }, void 0, false, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: label }, void 0, false, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
});
NumberCard.displayName = "NumberCard";
var Countdown_default = Countdown;

// app/components/LocationMap.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var MAP_EMBEDED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4390589186432!2d78.50880877610341!3d17.53427078337817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b33156f5151%3A0xa3337e599283a76c!2sShruthi%20Banquet%20Halls!5e0!3m2!1sen!2sin!4v1693293209074!5m2!1sen!2sin";
var MAP_REDIRECT_URL = "https://www.google.com/maps/place/Shruthi+Banquet+Halls/@17.5342708,78.5088088,17z/data=!4m14!1m7!3m6!1s0x3bcb9b33156f5151:0xa3337e599283a76c!2sShruthi+Banquet+Halls!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x!3m5!1s0x3bcb9b33156f5151:0xa3337e599283a76c!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x?authuser=0&entry=ttu";
var MAP_TITLE = "Shruthi Banquet Halls";
var MAP_ADDRESS = "Plot no 5.vijay Vihar colony.Opposite to Brindavan colony, Kompally, to, Bolarum, Secunderabad, Telangana 500010";
var LocationMap = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "py-10 bg-[#EFEFEF]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SectionWrapper_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col-reverse md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full px-4 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-2 bg-white rounded-lg shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "iframe",
      {
        src: MAP_EMBEDED_URL,
        className: "w-full h-[580px] md:h-[450px]",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: MAP_TITLE,
        scrolling: "no",
        "aria-label": MAP_TITLE
      },
      void 0,
      false,
      {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 18,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:w-1/2 w-full px-4 mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sticky top-8 text-center md:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-3xl font-head font-bold mb-3 text-gray-700", children: "Location" }, void 0, false, {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { className: "text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700", children: MAP_TITLE }, void 0, false, {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mb-16 md:mb-10 font-sans", children: MAP_ADDRESS }, void 0, false, {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex md:justify-start justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "a",
        {
          href: MAP_REDIRECT_URL,
          target: "_blank",
          className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          rel: "noreferrer",
          children: "Open Map"
        },
        void 0,
        false,
        {
          fileName: "app/components/LocationMap.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var LocationMap_default = LocationMap;

// app/components/Message.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react5 = __toESM(require_react());

// node_modules/@react-oauth/google/dist/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react4 = __toESM(require_react());
function useLoadGsiScript(options = {}) {
  const { nonce, onScriptLoadSuccess, onScriptLoadError } = options;
  const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = (0, import_react4.useState)(false);
  const onScriptLoadSuccessRef = (0, import_react4.useRef)(onScriptLoadSuccess);
  onScriptLoadSuccessRef.current = onScriptLoadSuccess;
  const onScriptLoadErrorRef = (0, import_react4.useRef)(onScriptLoadError);
  onScriptLoadErrorRef.current = onScriptLoadError;
  (0, import_react4.useEffect)(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://accounts.google.com/gsi/client";
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.nonce = nonce;
    scriptTag.onload = () => {
      var _a;
      setScriptLoadedSuccessfully(true);
      (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
    };
    scriptTag.onerror = () => {
      var _a;
      setScriptLoadedSuccessfully(false);
      (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
    };
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, [nonce]);
  return scriptLoadedSuccessfully;
}
var GoogleOAuthContext = (0, import_react4.createContext)(null);
function GoogleOAuthProvider({ clientId, nonce, onScriptLoadSuccess, onScriptLoadError, children }) {
  const scriptLoadedSuccessfully = useLoadGsiScript({
    nonce,
    onScriptLoadSuccess,
    onScriptLoadError
  });
  const contextValue = (0, import_react4.useMemo)(() => ({
    clientId,
    scriptLoadedSuccessfully
  }), [clientId, scriptLoadedSuccessfully]);
  return import_react4.default.createElement(GoogleOAuthContext.Provider, { value: contextValue }, children);
}
function useGoogleOAuth() {
  const context = (0, import_react4.useContext)(GoogleOAuthContext);
  if (!context) {
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  }
  return context;
}
function useGoogleLogin({ flow = "implicit", scope = "", onSuccess, onError, onNonOAuthError, overrideScope, state, ...props }) {
  const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
  const clientRef = (0, import_react4.useRef)();
  const onSuccessRef = (0, import_react4.useRef)(onSuccess);
  onSuccessRef.current = onSuccess;
  const onErrorRef = (0, import_react4.useRef)(onError);
  onErrorRef.current = onError;
  const onNonOAuthErrorRef = (0, import_react4.useRef)(onNonOAuthError);
  onNonOAuthErrorRef.current = onNonOAuthError;
  (0, import_react4.useEffect)(() => {
    var _a;
    if (!scriptLoadedSuccessfully)
      return;
    const clientMethod = flow === "implicit" ? "initTokenClient" : "initCodeClient";
    const client = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts.oauth2[clientMethod]({
      client_id: clientId,
      scope: overrideScope ? scope : `openid profile email ${scope}`,
      callback: (response) => {
        var _a2, _b;
        if (response.error)
          return (_a2 = onErrorRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(onErrorRef, response);
        (_b = onSuccessRef.current) === null || _b === void 0 ? void 0 : _b.call(onSuccessRef, response);
      },
      error_callback: (nonOAuthError) => {
        var _a2;
        (_a2 = onNonOAuthErrorRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(onNonOAuthErrorRef, nonOAuthError);
      },
      state,
      ...props
    });
    clientRef.current = client;
  }, [clientId, scriptLoadedSuccessfully, flow, scope, state]);
  const loginImplicitFlow = (0, import_react4.useCallback)((overrideConfig) => {
    var _a;
    return (_a = clientRef.current) === null || _a === void 0 ? void 0 : _a.requestAccessToken(overrideConfig);
  }, []);
  const loginAuthCodeFlow = (0, import_react4.useCallback)(() => {
    var _a;
    return (_a = clientRef.current) === null || _a === void 0 ? void 0 : _a.requestCode();
  }, []);
  return flow === "implicit" ? loginImplicitFlow : loginAuthCodeFlow;
}

// node_modules/axios/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/axios.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/utils.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/bind.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i2;
  let l2;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i2 = keys.length;
  let _key;
  while (i2-- > 0) {
    _key = keys[i2];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    arguments[i2] && forEach(arguments[i2], assignValue);
  }
  return result;
}
var extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction(val)) {
      a2[key] = bind(val, thisArg);
    } else {
      a2[key] = val;
    }
  }, { allOwnKeys });
  return a2;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i2;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i2 = props.length;
    while (i2-- > 0) {
      prop = props[i2];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i2 = thing.length;
  if (!isNumber(i2))
    return null;
  const arr = new Array(i2);
  while (i2-- > 0) {
    arr[i2] = thing[i2];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define2 = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i2) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i2] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i2 + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i2] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/Axios.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/buildURL.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/toFormData.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/core/AxiosError.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i2) {
    token = removeBrackets(token);
    return !dots && i2 ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/core/dispatchRequest.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/core/transformData.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/defaults/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/defaults/transitional.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/platform/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/platform/browser/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
var isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i2;
  const len = keys.length;
  let key;
  for (i2 = 0; i2 < len; i2++) {
    key = keys[i2];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw AxiosError_default.from(e2, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e2;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: browser_default.classes.FormData,
    Blob: browser_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// node_modules/axios/lib/core/AxiosHeaders.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/parseHeaders.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i2;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i2 = line.indexOf(":");
    key = line.substring(0, i2).trim().toLowerCase();
    val = line.substring(i2 + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i2 = keys.length;
    let deleted = false;
    while (i2--) {
      const key = keys[i2];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/adapters/adapters.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/adapters/xhr.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/core/settle.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/cookies.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var cookies_default = browser_default.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils_default.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils_default.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils_default.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }()
);

// node_modules/axios/lib/core/buildFullPath.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/helpers/isAbsoluteURL.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/helpers/isURLSameOrigin.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv2() {
    return function isURLSameOrigin() {
      return true;
    };
  }()
);

// node_modules/axios/lib/helpers/parseProtocol.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i2 = tail;
    let bytesCount = 0;
    while (i2 !== head) {
      bytesCount += bytes[i2++];
      i2 = i2 % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return (e2) => {
    const loaded = e2.loaded;
    const total = e2.lengthComputable ? e2.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e2
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils_default.isFormData(requestData)) {
      if (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else {
        requestHeaders.setContentType("multipart/form-data;", false);
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitional_default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (browser_default.isStandardBrowserEnv) {
      const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e2) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i2 = 0; i2 < length; i2++) {
      nameOrAdapter = adapters[i2];
      if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError_default(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      }
      throw new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    }
    if (!utils_default.isFunction(adapter)) {
      throw new TypeError("adapter is not a function");
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a2, b2, caseless) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(a2, b2, caseless);
    } else if (!utils_default.isUndefined(a2)) {
      return getMergedValue(void 0, a2, caseless);
    }
  }
  function valueFromConfig2(a2, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a2, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils_default.isUndefined(a2)) {
      return getMergedValue(void 0, a2);
    }
  }
  function mergeDirectKeys(a2, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a2, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a2);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/validator.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/axios/lib/env/data.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var VERSION = "1.4.0";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i2 = keys.length;
  while (i2-- > 0) {
    const opt = keys[i2];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i2 = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i2 < len) {
        promise = promise.then(chain[i2++], chain[i2++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i2 = 0;
    while (i2 < len) {
      const onFulfilled = requestInterceptorChain[i2++];
      const onRejected = requestInterceptorChain[i2++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i2 = 0;
    len = responseInterceptorChain.length;
    while (i2 < len) {
      promise = promise.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var CancelToken = class {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i2 = token._listeners.length;
      while (i2-- > 0) {
        token._listeners[i2](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// app/components/Message.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var PER_PAGE = 5;
var Message = ({ isMobile }) => {
  var _a;
  const { messages } = useLoaderData();
  const fetcher = useFetcher();
  const formRef = (0, import_react5.useRef)(null);
  const messagesRef = (0, import_react5.useRef)(null);
  const [page, setPage] = (0, import_react5.useState)(0);
  const messagesSantized = messages.filter((message) => !message.hide);
  const messagesDisplay = messagesSantized.slice(
    PER_PAGE * page,
    PER_PAGE * (page + 1)
  );
  const totalPages = Math.ceil(messagesSantized.length / PER_PAGE);
  const paginationArr = [...Array(totalPages).keys()];
  const paginationDisplay = paginationArr.filter((num) => {
    const leftBoundary = page - 2;
    const rightBoundary = page + 2;
    return num >= leftBoundary && num <= rightBoundary || page < 4 && num < 4 || page > totalPages - 5 && num > totalPages - 5;
  });
  const scrollTop = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onChangePage = (0, import_react5.useCallback)(
    (newPage) => {
      setPage(newPage);
      if (isMobile) {
        scrollTop();
      }
    },
    [isMobile]
  );
  (0, import_react5.useEffect)(() => {
    var _a2, _b;
    if (((_a2 = fetcher.data) == null ? void 0 : _a2.ok) && fetcher.state === "loading") {
      (_b = formRef.current) == null ? void 0 : _b.reset();
      onChangePage(0);
    }
  }, [fetcher, onChangePage]);
  const sendMessage = useGoogleLogin({
    onSuccess: async (res) => {
      const userInfo = await axios_default.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${res.access_token}` }
        }
      );
      const formData = new FormData(formRef.current);
      formData.append("google_name", userInfo.data.name);
      fetcher.submit(formData, { method: "post" });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4", children: "Give blessings to Saharsh" }, void 0, false, {
      fileName: "app/components/Message.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full flex flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-lg shadow-lg p-6 md:p-8 bg-white sticky top-8 mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "form",
        {
          ref: formRef,
          onSubmit: (e2) => {
            e2.preventDefault();
            sendMessage();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { disabled: fetcher.state === "submitting", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 mb-6 outline-[#0f4d92]",
                  placeholder: "Enter Name",
                  name: "name",
                  required: true,
                  maxLength: 70
                },
                void 0,
                false,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 101,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "textarea",
                {
                  className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 min-h-[6rem] mb-4 outline-[#0f4d92]",
                  placeholder: "Enter your Message",
                  name: "message",
                  required: true,
                  maxLength: 750
                },
                void 0,
                false,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "button",
                {
                  type: "submit",
                  id: "submit-message-btn",
                  className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#0f4d92] hover:bg-[#0f4d92] outline-[#0f4d92] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                  children: "Bless"
                },
                void 0,
                false,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/Message.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Message.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this),
            ((_a = fetcher.data) == null ? void 0 : _a.ok) === false && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "pt-4 text-red-500", children: "Try again!! Error" }, void 0, false, {
              fileName: "app/components/Message.tsx",
              lineNumber: 127,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/Message.tsx",
          lineNumber: 93,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Message.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Message.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", ref: messagesRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pt-4", children: [
          fetcher.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-5 animate-pulse", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-[22.39px] w-[120px] bg-background mb-2 rounded-md" }, void 0, false, {
              fileName: "app/components/Message.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-[20px] w-[300px] bg-background rounded-md" }, void 0, false, {
              fileName: "app/components/Message.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Message.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          messagesDisplay.map((message, i2) => {
            if (fetcher.state === "loading" && i2 === messagesDisplay.length - 1) {
              return null;
            }
            return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-7 md:mb-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h5", { className: "font-black font-sans text-gray-700 mb-1", children: message.name }, void 0, false, {
                fileName: "app/components/Message.tsx",
                lineNumber: 152,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "whitespace-pre-wrap font-sans text-gray-800 leading-6", children: message.message }, void 0, false, {
                fileName: "app/components/Message.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, this)
            ] }, i2, true, {
              fileName: "app/components/Message.tsx",
              lineNumber: 151,
              columnNumber: 17
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/components/Message.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        totalPages === 1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center justify-center pl-2 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              className: "mr-2 text-2xl text-gray-700 transition-all hover:text-[#0f4d92] disabled:opacity-50 disabled:hover:text-gray-700 pt-1",
              onClick: () => onChangePage(page - 1),
              disabled: page === 0,
              "aria-label": "page-left",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-chevron-left" }, void 0, false, {
                fileName: "app/components/Message.tsx",
                lineNumber: 172,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 166,
              columnNumber: 15
            },
            this
          ),
          paginationDisplay[0] > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "button",
              {
                className: "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#0f4d92]",
                onClick: () => onChangePage(0),
                children: "1"
              },
              void 0,
              false,
              {
                fileName: "app/components/Message.tsx",
                lineNumber: 177,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-semibold text-lg mr-2", children: "..." }, void 0, false, {
              fileName: "app/components/Message.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Message.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) : null,
          paginationDisplay.map((num) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              className: "mr-2 px-1 font-semibold text-lg " + (num === page ? "text-[#0f4d92]" : "text-gray-700 transition-all hover:text-[#0f4d92]"),
              onClick: () => onChangePage(num),
              children: num + 1
            },
            num,
            false,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 190,
              columnNumber: 17
            },
            this
          )),
          paginationDisplay[paginationDisplay.length - 1] < totalPages - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-semibold text-lg mr-2", children: "..." }, void 0, false, {
              fileName: "app/components/Message.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "button",
              {
                className: "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#0f4d92]",
                onClick: () => onChangePage(totalPages - 1),
                children: totalPages
              },
              void 0,
              false,
              {
                fileName: "app/components/Message.tsx",
                lineNumber: 208,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/Message.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              className: "text-2xl mr-2 text-gray-700 transition-all hover:text-[#0f4d92] disabled:opacity-50 disabled:hover:text-gray-700 pt-1",
              onClick: () => onChangePage(page + 1),
              disabled: page === totalPages - 1,
              "aria-label": "page-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "bx bx-chevron-right" }, void 0, false, {
                fileName: "app/components/Message.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 219,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Message.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Message.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Message.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Message.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
};
var Message_default = (0, import_react5.memo)(Message);

// app/components/MusicPlayer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var MusicPlayer = ({ play: playParent }) => {
  const [play, setPlay] = (0, import_react7.useState)(false);
  const audio = (0, import_react7.useRef)(null);
  const onPlay = async () => {
    if (!audio.current)
      return;
    await audio.current.play();
    setPlay(true);
  };
  const onPause = async () => {
    if (!audio.current)
      return;
    audio.current.pause();
    setPlay(false);
  };
  (0, import_react7.useEffect)(() => {
    if (playParent)
      onPlay();
    else
      onPause();
  }, [playParent]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("audio", { controls: true, ref: audio, loop: true, hidden: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("source", { src: "/song.m4r", type: "audio/mp4" }, void 0, false, {
        fileName: "app/components/MusicPlayer.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      "Your browser does not support the audio element."
    ] }, void 0, true, {
      fileName: "app/components/MusicPlayer.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " fixed bottom-0 right-0 mr-3 mb-3 md:mr-8 md:mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        className: "rounded-full drop-shadow-md bg-[#0f4d92] text-4xl w-9 h-9  md:w-11 md:h-11 flex items-center justify-center",
        onClick: () => {
          play ? onPause() : onPlay();
        },
        "aria-label": "audio-control",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: play ? "bx bx-pause" : "bx bx-play pl-1" }, void 0, false, {
          fileName: "app/components/MusicPlayer.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/MusicPlayer.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/MusicPlayer.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MusicPlayer.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};
var MusicPlayer_default = MusicPlayer;

// app/components/GalleryPhotos.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react10 = __toESM(require_react());

// app/images/Photo1.jpeg
var Photo1_default = "/build/_assets/Photo1-C5KQOEL7.jpeg";

// app/images/Photo2.jpeg
var Photo2_default = "/build/_assets/Photo2-IQKVOIUG.jpeg";

// app/images/Photo3.jpeg
var Photo3_default = "/build/_assets/Photo3-P2UMNLY2.jpeg";

// app/images/Photo4.jpeg
var Photo4_default = "/build/_assets/Photo4-FJDQMFQK.jpeg";

// app/images/Photo5.jpeg
var Photo5_default = "/build/_assets/Photo5-R5Q46RJ3.jpeg";

// app/images/Photo6.jpeg
var Photo6_default = "/build/_assets/Photo6-H3JAJKLS.jpeg";

// app/images/Photo7.jpeg
var Photo7_default = "/build/_assets/Photo7-YBRN7LUB.jpeg";

// app/images/Photo8.jpeg
var Photo8_default = "/build/_assets/Photo8-V6YZURPY.jpeg";

// app/images/Photo9.jpeg
var Photo9_default = "/build/_assets/Photo9-MMGAZDP7.jpeg";

// app/images/Photo10.jpeg
var Photo10_default = "/build/_assets/Photo10-TLWHYA2K.jpeg";

// app/images/Photo11.jpeg
var Photo11_default = "/build/_assets/Photo11-7LFGNQ7I.jpeg";

// app/images/Photo12.jpg
var Photo12_default = "/build/_assets/Photo12-OKT6IZAB.jpg";

// app/components/Gallery/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Gallery/Gallery.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react9 = __toESM(require_react());

// app/components/Gallery/Utils/compute-layout.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Gallery/Utils/dijkstra.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Gallery/Utils/binary-heap.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var BinaryHeap = class {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  bubbleUp(n2) {
    const element = this.content[n2];
    const score = this.scoreFunction(element);
    while (n2 > 0) {
      const parentN = Math.floor((n2 + 1) / 2) - 1;
      const parent = this.content[parentN];
      if (score >= this.scoreFunction(parent))
        break;
      this.content[parentN] = element;
      this.content[n2] = parent;
      n2 = parentN;
    }
  }
  sinkDown(n2) {
    const length = this.content.length;
    const element = this.content[n2];
    const elemScore = this.scoreFunction(element);
    while (true) {
      const child2N = (n2 + 1) * 2;
      const child1N = child2N - 1;
      let swap = null;
      let child1Score = 0;
      if (child1N < length) {
        const child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1);
        if (child1Score < elemScore) {
          swap = child1N;
        }
      }
      if (child2N < length) {
        const child2 = this.content[child2N];
        const child2Score = this.scoreFunction(child2);
        if (child2Score < (swap === null ? elemScore : child1Score)) {
          swap = child2N;
        }
      }
      if (swap === null)
        break;
      this.content[n2] = this.content[swap];
      this.content[swap] = element;
      n2 = swap;
    }
  }
  push(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  }
  pop() {
    const result = this.content[0];
    const end = this.content.pop();
    if (this.content.length > 0 && !!end) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  }
  remove(node) {
    const length = this.content.length;
    for (let i2 = 0; i2 < length; i2++) {
      if (this.content[i2] != node)
        continue;
      const end = this.content.pop();
      if (i2 === length - 1)
        break;
      if (end) {
        this.content[i2] = end;
        this.bubbleUp(i2);
      }
      break;
    }
  }
  size() {
    return this.content.length;
  }
};

// app/components/Gallery/Utils/dijkstra.ts
var buildPrecedentsMap = (graph, startNode, endNode) => {
  const precedentsMap = {};
  const visited = {};
  const storedShortestPaths = {};
  storedShortestPaths[startNode] = 0;
  const pQueue = new BinaryHeap(function(n2) {
    return n2.weight;
  });
  pQueue.push({ id: startNode, weight: 0 });
  while (pQueue.size()) {
    const shortestNode = pQueue.pop();
    const shortestNodeId = shortestNode.id;
    if (visited[shortestNodeId])
      continue;
    const neighboringNodes = graph(shortestNodeId) || {};
    visited[shortestNodeId] = 1;
    for (let neighbor in neighboringNodes) {
      const newTotalWeight = shortestNode.weight + neighboringNodes[neighbor];
      const neighborId = Number(neighbor);
      if (typeof storedShortestPaths[neighborId] === "undefined" || storedShortestPaths[neighborId] > newTotalWeight) {
        storedShortestPaths[neighborId] = newTotalWeight;
        pQueue.push({ id: neighborId, weight: newTotalWeight });
        precedentsMap[neighborId] = shortestNodeId;
      }
    }
  }
  if (typeof storedShortestPaths[endNode] === "undefined") {
    throw new Error(`There is no path from ${startNode} to ${endNode}`);
  }
  return precedentsMap;
};
var getPathFromPrecedentsMap = (precedentsMap, endNode) => {
  const nodes = [];
  let n2 = endNode;
  while (n2 !== void 0) {
    nodes.push(n2);
    n2 = precedentsMap[n2];
  }
  return nodes.reverse();
};
var findShortestPath = (graph, startNode, endNode) => {
  const precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
  return getPathFromPrecedentsMap(precedentsMap, endNode);
};

// app/components/Gallery/Utils/round.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var round = (value, decimals = 0) => {
  return Number(Math.round(Number(`${value}e${decimals}`)) + "e-" + decimals);
};

// app/components/Gallery/Utils/compute-layout.ts
var ratio = ({ width, height }) => round(width / height, 2);
var getCommonHeight = (row, containerWidth, margin) => {
  const rowWidth = containerWidth - row.length * (margin * 2);
  const totalAspectRatio = row.reduce((acc, photo) => acc + ratio(photo), 0);
  return rowWidth / totalAspectRatio;
};
var cost = (photos2, i2, j2, width, targetHeight, margin) => {
  const row = photos2.slice(i2, j2);
  const commonHeight = getCommonHeight(row, width, margin);
  return Math.pow(Math.abs(commonHeight - targetHeight), 2);
};
var makeGetNeighbors = (targetHeight, containerWidth, photos2, limitNodeSearch, margin) => (start) => {
  const results = {};
  start = +start;
  results[+start] = 0;
  for (let i2 = start + 1; i2 < photos2.length + 1; ++i2) {
    if (i2 - start > limitNodeSearch)
      break;
    results[i2] = cost(photos2, start, i2, containerWidth, targetHeight, margin);
  }
  return results;
};
var computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  photos: photos2
}) => {
  const getNeighbors = makeGetNeighbors(
    targetRowHeight,
    containerWidth,
    photos2,
    limitNodeSearch,
    margin
  );
  let path = findShortestPath(getNeighbors, 0, photos2.length);
  path = path.map((node) => +node);
  for (let i2 = 1; i2 < path.length; ++i2) {
    const row = photos2.slice(path[i2 - 1], path[i2]);
    const height = getCommonHeight(row, containerWidth, margin);
    for (let j2 = path[i2 - 1]; j2 < path[i2]; ++j2) {
      photos2[j2].width = round(height * ratio(photos2[j2]), 1);
      photos2[j2].height = height;
    }
  }
  return photos2;
};

// app/components/Gallery/Utils/findIdealNodeSearch.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var findIdealNodeSearch = ({
  targetRowHeight,
  containerWidth
}) => {
  const rowAR = containerWidth / targetRowHeight;
  return round(rowAR / 1.5) + 8;
};

// node_modules/react-photo-view/dist/react-photo-view.module.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react8 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function f() {
  return f = Object.assign || function(e2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var t2 = arguments[n2];
      for (var r2 in t2)
        Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
    }
    return e2;
  }, f.apply(this, arguments);
}
function h(e2, n2) {
  if (null == e2)
    return {};
  var t2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++)
    n2.indexOf(t2 = o2[r2]) >= 0 || (i2[t2] = e2[t2]);
  return i2;
}
function m(e2) {
  var t2 = (0, import_react8.useRef)({ fn: e2, curr: void 0 }).current;
  if (t2.fn = e2, !t2.curr) {
    var r2 = /* @__PURE__ */ Object.create(null);
    Object.keys(e2).forEach(function(e3) {
      r2[e3] = function() {
        var n2;
        return (n2 = t2.fn[e3]).call.apply(n2, [t2.fn].concat([].slice.call(arguments)));
      };
    }), t2.curr = r2;
  }
  return t2.curr;
}
function g(e2) {
  return (0, import_react8.useReducer)(function(e3, n2) {
    return f({}, e3, "function" == typeof n2 ? n2(e3) : n2);
  }, e2);
}
var p = (0, import_react8.createContext)(void 0);
var w = "undefined" != typeof window && "ontouchstart" in window;
var y = function(e2, n2, t2) {
  return Math.max(Math.min(e2, t2), n2);
};
var x = function(e2, n2, t2) {
  return void 0 === n2 && (n2 = 0), void 0 === t2 && (t2 = 0), y(e2, 1 * (1 - t2), Math.max(6, n2) * (1 + t2));
};
var C = "undefined" == typeof window || /ServerSideRendering/.test(navigator && navigator.userAgent) ? import_react8.useEffect : import_react8.useLayoutEffect;
function b(e2, t2, r2) {
  var o2 = (0, import_react8.useRef)(t2);
  o2.current = t2, (0, import_react8.useEffect)(function() {
    function n2(e3) {
      o2.current(e3);
    }
    return e2 && window.addEventListener(e2, n2, r2), function() {
      e2 && window.removeEventListener(e2, n2);
    };
  }, [e2]);
}
var E = ["container"];
function k(n2) {
  var t2 = n2.container, r2 = void 0 === t2 ? document.body : t2, i2 = h(n2, E);
  return (0, import_react_dom.createPortal)(import_react8.default.createElement("div", f({}, i2)), r2);
}
function P(n2) {
  return import_react8.default.createElement("svg", f({ width: "44", height: "44", viewBox: "0 0 768 768" }, n2), import_react8.default.createElement("path", { d: "M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z" }));
}
function _(n2) {
  return import_react8.default.createElement("svg", f({ width: "44", height: "44", viewBox: "0 0 768 768" }, n2), import_react8.default.createElement("path", { d: "M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z" }));
}
function M(n2) {
  return import_react8.default.createElement("svg", f({ width: "44", height: "44", viewBox: "0 0 768 768" }, n2), import_react8.default.createElement("path", { d: "M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z" }));
}
function Y() {
  return (0, import_react8.useEffect)(function() {
    var e2 = document.body.style, n2 = e2.overflow;
    return e2.overflow = "hidden", function() {
      e2.overflow = n2;
    };
  }, []), null;
}
function X(e2) {
  var n2 = e2.touches[0], t2 = n2.clientX, r2 = n2.clientY;
  if (e2.touches.length >= 2) {
    var i2 = e2.touches[1], o2 = i2.clientX, a2 = i2.clientY;
    return [(t2 + o2) / 2, (r2 + a2) / 2, Math.sqrt(Math.pow(o2 - t2, 2) + Math.pow(a2 - r2, 2))];
  }
  return [t2, r2, 0];
}
var N = function(e2, n2, t2, r2) {
  var i2 = t2 * n2, o2 = (i2 - r2) / 2, a2 = void 0, c2 = e2;
  return i2 <= r2 ? (a2 = 1, c2 = 0) : e2 > 0 && o2 - e2 <= 0 ? (a2 = 2, c2 = o2) : e2 < 0 && o2 + e2 <= 0 && (a2 = 3, c2 = -o2), [a2, c2];
};
function W(e2, n2, t2, r2, i2, o2, a2, c2, u2, l2) {
  void 0 === a2 && (a2 = innerWidth / 2), void 0 === c2 && (c2 = innerHeight / 2), void 0 === u2 && (u2 = 0), void 0 === l2 && (l2 = 0);
  var s2 = N(e2, o2, t2, innerWidth)[0], d2 = N(n2, o2, r2, innerHeight), v2 = innerWidth / 2, f2 = innerHeight / 2;
  return { x: a2 - o2 / i2 * (a2 - (v2 + e2)) - v2 + (r2 / t2 >= 3 && t2 * o2 === innerWidth ? 0 : s2 ? u2 / 2 : u2), y: c2 - o2 / i2 * (c2 - (f2 + n2)) - f2 + (d2[0] ? l2 / 2 : l2), lastCX: a2, lastCY: c2 };
}
function S(e2, n2, t2) {
  var r2 = e2 % 180 != 0;
  return r2 ? [t2, n2, r2] : [n2, t2, r2];
}
function T(e2, n2, t2) {
  var r2 = S(t2, innerWidth, innerHeight), i2 = r2[0], o2 = r2[1], a2 = 0, c2 = i2, u2 = o2, l2 = e2 / n2 * o2, s2 = n2 / e2 * i2;
  return e2 < i2 && n2 < o2 ? (c2 = e2, u2 = n2) : e2 < i2 && n2 >= o2 ? c2 = l2 : e2 >= i2 && n2 < o2 || e2 / n2 > i2 / o2 ? u2 = s2 : n2 / e2 >= 3 && !r2[2] ? a2 = ((u2 = s2) - o2) / 2 : c2 = l2, { width: c2, height: u2, x: 0, y: a2, pause: true };
}
function V(e2, t2) {
  var r2 = t2.leading, i2 = void 0 !== r2 && r2, o2 = t2.maxWait, a2 = t2.wait, u2 = void 0 === a2 ? o2 || 0 : a2, l2 = (0, import_react8.useRef)(e2);
  l2.current = e2;
  var s2 = (0, import_react8.useRef)(0), d2 = (0, import_react8.useRef)(), v2 = function() {
    return d2.current && clearTimeout(d2.current);
  }, f2 = (0, import_react8.useCallback)(function() {
    var e3 = [].slice.call(arguments), n2 = Date.now();
    function t3() {
      s2.current = n2, v2(), l2.current.apply(null, e3);
    }
    var r3 = s2.current, a3 = n2 - r3;
    if (0 === r3 && (i2 && t3(), s2.current = n2), void 0 !== o2) {
      if (a3 > o2)
        return void t3();
    } else
      a3 < u2 && (s2.current = n2);
    v2(), d2.current = setTimeout(function() {
      t3(), s2.current = 0;
    }, u2);
  }, [u2, o2, i2]);
  return f2.cancel = v2, f2;
}
var R = function(e2, n2, t2) {
  return I(e2, n2, t2, 100, function(e3) {
    return e3;
  }, function() {
    return I(n2, e2, t2);
  });
};
var A = function(e2) {
  return 1 - Math.pow(1 - e2, 4);
};
function I(e2, n2, t2, r2, i2, o2) {
  void 0 === r2 && (r2 = 400), void 0 === i2 && (i2 = A);
  var a2 = n2 - e2;
  if (0 !== a2) {
    var c2 = Date.now(), u2 = 0, l2 = function() {
      var n3 = Math.min(1, (Date.now() - c2) / r2);
      t2(e2 + i2(n3) * a2) && n3 < 1 ? s2() : (cancelAnimationFrame(u2), n3 >= 1 && o2 && o2());
    };
    s2();
  }
  function s2() {
    u2 = requestAnimationFrame(l2);
  }
}
var H = { T: 0, L: 0, W: 0, H: 0, FIT: void 0 };
var L = function() {
  var e2 = (0, import_react8.useRef)(false);
  return (0, import_react8.useEffect)(function() {
    return e2.current = true, function() {
      e2.current = false;
    };
  }, []), e2;
};
var F = ["className"];
function D(n2) {
  var t2 = n2.className, r2 = h(n2, F);
  return import_react8.default.createElement("div", f({ className: "PhotoView__Spinner " + t2 }, r2), import_react8.default.createElement("svg", { viewBox: "0 0 32 32", width: "36", height: "36", fill: "white" }, import_react8.default.createElement("path", { opacity: ".25", d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" }), import_react8.default.createElement("path", { d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" })));
}
var O = ["src", "loaded", "broken", "className", "onPhotoLoad", "loadingElement", "brokenElement"];
function B(n2) {
  var t2 = n2.src, r2 = n2.loaded, i2 = n2.broken, o2 = n2.className, a2 = n2.onPhotoLoad, c2 = n2.loadingElement, u2 = n2.brokenElement, l2 = h(n2, O), s2 = L();
  return t2 && !i2 ? import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("img", f({ className: "PhotoView__Photo" + (o2 ? " " + o2 : ""), src: t2, onLoad: function(e2) {
    var n3 = e2.target;
    s2.current && a2({ loaded: true, naturalWidth: n3.naturalWidth, naturalHeight: n3.naturalHeight });
  }, onError: function() {
    s2.current && a2({ broken: true });
  }, alt: "" }, l2)), !r2 && (import_react8.default.createElement("span", { className: "PhotoView__icon" }, c2) || import_react8.default.createElement(D, { className: "PhotoView__icon" }))) : u2 ? import_react8.default.createElement("span", { className: "PhotoView__icon" }, "function" == typeof u2 ? u2({ src: t2 }) : u2) : null;
}
var z = { naturalWidth: void 0, naturalHeight: void 0, width: void 0, height: void 0, loaded: void 0, broken: false, x: 0, y: 0, touched: false, maskTouched: false, rotate: 0, scale: 1, CX: 0, CY: 0, lastX: 0, lastY: 0, lastCX: 0, lastCY: 0, lastScale: 1, touchTime: 0, touchLength: 0, pause: true, stopRaf: true, reach: void 0 };
function j(t2) {
  var r2 = t2.item, o2 = r2.src, a2 = r2.render, c2 = r2.width, l2 = void 0 === c2 ? 0 : c2, s2 = r2.height, d2 = void 0 === s2 ? 0 : s2, v2 = r2.originRef, h2 = t2.visible, p2 = t2.speed, y2 = t2.easing, E2 = t2.wrapClassName, k2 = t2.className, P2 = t2.style, _2 = t2.loadingElement, M2 = t2.brokenElement, Y2 = t2.onPhotoTap, A2 = t2.onMaskTap, F2 = t2.onReachMove, D2 = t2.onReachUp, O2 = t2.onPhotoResize, j2 = t2.isActive, q2 = t2.expose, K2 = g(z), U2 = K2[0], G2 = K2[1], J2 = (0, import_react8.useRef)(0), Q2 = L(), Z = U2.naturalWidth, $ = void 0 === Z ? l2 : Z, ee = U2.naturalHeight, ne = void 0 === ee ? d2 : ee, te = U2.width, re = void 0 === te ? l2 : te, ie = U2.height, oe = void 0 === ie ? d2 : ie, ae = U2.loaded, ce = void 0 === ae ? !o2 : ae, ue = U2.broken, le = U2.x, se = U2.y, de = U2.touched, ve = U2.stopRaf, fe = U2.maskTouched, he = U2.rotate, me = U2.scale, ge = U2.CX, pe = U2.CY, we = U2.lastX, ye = U2.lastY, xe = U2.lastCX, Ce = U2.lastCY, be = U2.lastScale, Ee = U2.touchTime, ke = U2.touchLength, Pe = U2.pause, _e = U2.reach, Me = m({ onScale: function(e2) {
    return Ye(x(e2));
  }, onRotate: function(e2) {
    he !== e2 && (q2({ rotate: e2 }), G2(f({ rotate: e2 }, T($, ne, e2))));
  } });
  function Ye(e2, n2, t3) {
    me !== e2 && (q2({ scale: e2 }), G2(f({ scale: e2 }, W(le, se, re, oe, me, e2, n2, t3), e2 <= 1 && { x: 0, y: 0 })));
  }
  var Xe = V(function(e2, n2, t3) {
    if (void 0 === t3 && (t3 = 0), (de || fe) && j2) {
      var r3 = S(he, re, oe), i2 = r3[0], o3 = r3[1];
      if (0 === t3 && 0 === J2.current) {
        var a3 = Math.abs(e2 - ge) <= 20, c3 = Math.abs(n2 - pe) <= 20;
        if (a3 && c3)
          return void G2({ lastCX: e2, lastCY: n2 });
        J2.current = a3 ? n2 > pe ? 3 : 2 : 1;
      }
      var u2 = e2 - xe, l3 = n2 - Ce, s3 = void 0;
      if (0 === t3) {
        var d3 = N(u2 + we, me, i2, innerWidth)[0], v3 = N(l3 + ye, me, o3, innerHeight);
        s3 = function(e3, n3, t4, r4) {
          return n3 && 1 === e3 || "x" === r4 ? "x" : t4 && e3 > 1 || "y" === r4 ? "y" : void 0;
        }(J2.current, d3, v3[0], _e), void 0 !== s3 && F2(s3, e2, n2, me);
      }
      if ("x" === s3 || fe)
        return void G2({ reach: "x" });
      var h3 = x(me + (t3 - ke) / 100 / 2 * me, $ / re, 0.2);
      q2({ scale: h3 }), G2(f({ touchLength: t3, reach: s3, scale: h3 }, W(le, se, re, oe, me, h3, e2, n2, u2, l3)));
    }
  }, { maxWait: 8 });
  function Ne(e2) {
    return !ve && !de && (Q2.current && G2(f({}, e2, { pause: h2 })), Q2.current);
  }
  var We, Se, Te, Ve, Re, Ae, Ie, He, Le = (Re = function(e2) {
    return Ne({ x: e2 });
  }, Ae = function(e2) {
    return Ne({ y: e2 });
  }, Ie = function(e2) {
    return Q2.current && (q2({ scale: e2 }), G2({ scale: e2 })), !de && Q2.current;
  }, He = m({ X: function(e2) {
    return Re(e2);
  }, Y: function(e2) {
    return Ae(e2);
  }, S: function(e2) {
    return Ie(e2);
  } }), function(e2, n2, t3, r3, i2, o3, a3, c3, u2, l3, s3) {
    var d3 = S(l3, i2, o3), v3 = d3[0], f2 = d3[1], h3 = N(e2, c3, v3, innerWidth), m2 = h3[0], g2 = h3[1], p3 = N(n2, c3, f2, innerHeight), w2 = p3[0], y3 = p3[1], x2 = Date.now() - s3;
    if (x2 >= 200 || c3 != a3 || Math.abs(u2 - a3) > 1) {
      var C2 = W(e2, n2, i2, o3, a3, c3), b2 = C2.x, E3 = C2.y, k3 = m2 ? g2 : b2 !== e2 ? b2 : null, P3 = w2 ? y3 : E3 !== n2 ? E3 : null;
      return null !== k3 && I(e2, k3, He.X), null !== P3 && I(n2, P3, He.Y), void (c3 != a3 && I(a3, c3, He.S));
    }
    var _3 = (e2 - t3) / x2, M3 = (n2 - r3) / x2, Y3 = Math.sqrt(Math.pow(_3, 2) + Math.pow(M3, 2)), X2 = false, T2 = false;
    !function(e3, n3) {
      var t4 = e3, r4 = 0, i3 = void 0, o4 = 0, a4 = function(o5) {
        i3 || (i3 = o5);
        var a5 = o5 - i3, l4 = Math.sign(e3), s4 = -1e-3 * l4, d4 = Math.sign(-t4) * Math.pow(t4, 2) * 2e-4, v4 = t4 * a5 + (s4 + d4) * Math.pow(a5, 2) / 2;
        r4 += v4, i3 = o5, l4 * (t4 += (s4 + d4) * a5) <= 0 ? u3() : n3(r4) ? c4() : u3();
      };
      function c4() {
        o4 = requestAnimationFrame(a4);
      }
      function u3() {
        cancelAnimationFrame(o4);
      }
      c4();
    }(Y3, function(t4) {
      var r4 = e2 + t4 * (_3 / Y3), i3 = n2 + t4 * (M3 / Y3), o4 = N(r4, a3, v3, innerWidth), c4 = o4[0], u3 = o4[1], l4 = N(i3, a3, f2, innerHeight), s4 = l4[0], d4 = l4[1];
      if (c4 && !X2 && (X2 = true, m2 ? I(r4, u3, He.X) : R(u3, r4 + (r4 - u3), He.X)), s4 && !T2 && (T2 = true, w2 ? I(i3, d4, He.Y) : R(d4, i3 + (i3 - d4), He.Y)), X2 && T2)
        return false;
      var h4 = X2 || He.X(u3), g3 = T2 || He.Y(d4);
      return h4 && g3;
    });
  }), Fe = (We = Y2, Se = function(e2, n2) {
    _e || Ye(1 !== me ? 1 : Math.max(2, $ / re), e2, n2);
  }, Te = (0, import_react8.useRef)(0), Ve = V(function() {
    Te.current = 0, We.apply(void 0, [].slice.call(arguments));
  }, { wait: 300 }), function() {
    var e2 = [].slice.call(arguments);
    Te.current += 1, Ve.apply(void 0, e2), Te.current >= 2 && (Ve.cancel(), Te.current = 0, Se.apply(void 0, e2));
  });
  function De(e2, n2) {
    if (J2.current = 0, (de || fe) && j2) {
      G2({ touched: false, maskTouched: false, pause: false, stopRaf: false, reach: void 0 });
      var t3 = x(me, $ / re);
      if (Le(le, se, we, ye, re, oe, me, t3, be, he, Ee), D2(e2, n2), ge === e2 && pe === n2) {
        if (de)
          return void Fe(e2, n2);
        fe && A2(e2, n2);
      }
    }
  }
  function Oe(e2, n2, t3) {
    void 0 === t3 && (t3 = 0), G2({ touched: true, CX: e2, CY: n2, lastCX: e2, lastCY: n2, lastX: le, lastY: se, lastScale: me, touchLength: t3, touchTime: Date.now() });
  }
  function Be(e2) {
    G2({ maskTouched: true, CX: e2.clientX, CY: e2.clientY, lastX: le, lastY: se });
  }
  b(w ? void 0 : "mousemove", function(e2) {
    e2.preventDefault(), Xe(e2.clientX, e2.clientY);
  }), b(w ? void 0 : "mouseup", function(e2) {
    De(e2.clientX, e2.clientY);
  }), b(w ? "touchmove" : void 0, function(e2) {
    e2.preventDefault();
    var n2 = X(e2);
    Xe.apply(void 0, n2);
  }, { passive: false }), b(w ? "touchend" : void 0, function(e2) {
    var n2 = e2.changedTouches[0];
    De(n2.clientX, n2.clientY);
  }, { passive: false }), b("resize", V(function() {
    ce && !de && (G2(T($, ne, he)), O2());
  }, { maxWait: 8 })), C(function() {
    j2 && q2(f({ scale: me, rotate: he }, Me));
  }, [j2]);
  var ze = function(e2, t3, r3, o3, a3, c3, l3, s3, d3, v3) {
    var f2 = function(e3, t4, r4, i2, o4) {
      var a4 = (0, import_react8.useRef)(false), c4 = g({ lead: true, scale: r4 }), u2 = c4[0], l4 = u2.lead, s4 = u2.scale, d4 = c4[1], v4 = V(function(e4) {
        try {
          return o4(true), d4({ lead: false, scale: e4 }), Promise.resolve();
        } catch (e5) {
          return Promise.reject(e5);
        }
      }, { wait: i2 });
      return C(function() {
        a4.current ? (o4(false), d4({ lead: true }), v4(r4)) : a4.current = true;
      }, [r4]), l4 ? [e3 * s4, t4 * s4, r4 / s4] : [e3 * r4, t4 * r4, 1];
    }(c3, l3, s3, d3, v3), h3 = f2[0], p3 = f2[1], w2 = f2[2], y3 = function(e3, t4, r4, o4, a4) {
      var c4 = (0, import_react8.useState)(H), l4 = c4[0], s4 = c4[1], d4 = (0, import_react8.useState)(0), v4 = d4[0], f3 = d4[1], h4 = (0, import_react8.useRef)(), g2 = m({ OK: function() {
        return e3 && f3(4);
      } });
      function p4(e4) {
        a4(false), f3(e4);
      }
      return (0, import_react8.useEffect)(function() {
        if (h4.current || (h4.current = Date.now()), r4) {
          if (function(e4, n2) {
            var t5 = e4 && e4.current;
            if (t5 && 1 === t5.nodeType) {
              var r5 = t5.getBoundingClientRect();
              n2({ T: r5.top, L: r5.left, W: r5.width, H: r5.height, FIT: "IMG" === t5.tagName ? getComputedStyle(t5).objectFit : void 0 });
            }
          }(t4, s4), e3)
            return Date.now() - h4.current < 250 ? (f3(1), requestAnimationFrame(function() {
              f3(2), requestAnimationFrame(function() {
                return p4(3);
              });
            }), void setTimeout(g2.OK, o4)) : void f3(4);
          p4(5);
        }
      }, [e3, r4]), [v4, l4];
    }(e2, t3, r3, d3, v3), x2 = y3[0], b2 = y3[1], E3 = b2.W, k3 = b2.FIT, P3 = innerWidth / 2, _3 = innerHeight / 2, M3 = x2 < 3 || x2 > 4;
    return [M3 ? E3 ? b2.L : P3 : o3 + (P3 - c3 * s3 / 2), M3 ? E3 ? b2.T : _3 : a3 + (_3 - l3 * s3 / 2), h3, M3 && k3 ? h3 * (b2.H / E3) : p3, 0 === x2 ? w2 : M3 ? E3 / (c3 * s3) || 0.01 : w2, M3 ? k3 ? 1 : 0 : 1, x2, k3];
  }(h2, v2, ce, le, se, re, oe, me, p2, function(e2) {
    return G2({ pause: e2 });
  }), je = ze[4], qe = ze[6], Ke = "transform " + p2 + "ms " + y2, Ue = { className: k2, onMouseDown: w ? void 0 : function(e2) {
    e2.stopPropagation(), 0 === e2.button && Oe(e2.clientX, e2.clientY, 0);
  }, onTouchStart: w ? function(e2) {
    e2.stopPropagation(), Oe.apply(void 0, X(e2));
  } : void 0, onWheel: function(e2) {
    if (!_e) {
      var n2 = x(me - e2.deltaY / 100 / 2, $ / re);
      G2({ stopRaf: true }), Ye(n2, e2.clientX, e2.clientY);
    }
  }, style: { width: ze[2], height: ze[3], opacity: ze[5], objectFit: 4 === qe ? void 0 : ze[7], transform: he ? "rotate(" + he + "deg)" : void 0, transition: qe > 2 ? Ke + ", opacity " + p2 + "ms ease, height " + (qe < 4 ? p2 / 2 : qe > 4 ? p2 : 0) + "ms " + y2 : void 0 } };
  return import_react8.default.createElement("div", { className: "PhotoView__PhotoWrap" + (E2 ? " " + E2 : ""), style: P2, onMouseDown: !w && j2 ? Be : void 0, onTouchStart: w && j2 ? function(e2) {
    return Be(e2.touches[0]);
  } : void 0 }, import_react8.default.createElement("div", { className: "PhotoView__PhotoBox", style: { transform: "matrix(" + je + ", 0, 0, " + je + ", " + ze[0] + ", " + ze[1] + ")", transition: de || Pe ? void 0 : Ke, willChange: j2 ? "transform" : void 0 } }, o2 ? import_react8.default.createElement(B, f({ src: o2, loaded: ce, broken: ue }, Ue, { onPhotoLoad: function(e2) {
    G2(f({}, e2, e2.loaded && T(e2.naturalWidth || 0, e2.naturalHeight || 0, he)));
  }, loadingElement: _2, brokenElement: M2 })) : a2 && a2({ attrs: Ue, scale: je, rotate: he })));
}
var q = { x: 0, touched: false, pause: false, lastCX: void 0, lastCY: void 0, bg: void 0, lastBg: void 0, overlay: true, minimal: true, scale: 1, rotate: 0 };
function K(r2) {
  var i2 = r2.loop, o2 = void 0 === i2 ? 3 : i2, c2 = r2.speed, l2 = r2.easing, s2 = r2.photoClosable, d2 = r2.maskClosable, v2 = void 0 === d2 || d2, f2 = r2.maskOpacity, h2 = void 0 === f2 ? 1 : f2, p2 = r2.pullClosable, x2 = void 0 === p2 || p2, E2 = r2.bannerVisible, X2 = void 0 === E2 || E2, N2 = r2.overlayRender, W2 = r2.toolbarRender, S2 = r2.className, T2 = r2.maskClassName, V2 = r2.photoClassName, R2 = r2.photoWrapClassName, A2 = r2.loadingElement, I2 = r2.brokenElement, H2 = r2.images, L2 = r2.index, F2 = void 0 === L2 ? 0 : L2, D2 = r2.onIndexChange, O2 = r2.visible, B2 = r2.onClose, z2 = r2.afterClose, K2 = r2.portalContainer, U2 = g(q), G2 = U2[0], J2 = U2[1], Q2 = (0, import_react8.useState)(0), Z = Q2[0], $ = Q2[1], ee = G2.x, ne = G2.touched, te = G2.pause, re = G2.lastCX, ie = G2.lastCY, oe = G2.bg, ae = void 0 === oe ? h2 : oe, ce = G2.lastBg, ue = G2.overlay, le = G2.minimal, se = G2.scale, de = G2.rotate, ve = G2.onScale, fe = G2.onRotate, he = r2.hasOwnProperty("index"), me = he ? F2 : Z, ge = he ? D2 : $, pe = (0, import_react8.useRef)(me), we = H2.length, ye = H2[me], xe = "boolean" == typeof o2 ? o2 : we > o2, Ce = function(e2, r3) {
    var i3 = (0, import_react8.useReducer)(function(e3) {
      return !e3;
    }, false)[1], o3 = (0, import_react8.useRef)(0), c3 = function(t2, r4) {
      var i4 = (0, import_react8.useRef)(t2);
      function c4(e3) {
        i4.current = e3;
      }
      return (0, import_react8.useMemo)(function() {
        !function(n2) {
          e2 ? (n2(e2), o3.current = 1) : o3.current = 2;
        }(c4);
      }, [t2]), [i4.current, c4];
    }(e2), u2 = c3[1];
    return [c3[0], o3.current, function() {
      i3(), 2 === o3.current && (u2(false), r3 && r3()), o3.current = 0;
    }];
  }(O2, z2), be = Ce[0], Ee = Ce[1], ke = Ce[2];
  C(function() {
    if (be)
      return J2({ pause: true, x: me * -(innerWidth + 20) }), void (pe.current = me);
    J2(q);
  }, [be]);
  var Pe = m({ close: function(e2) {
    fe && fe(0), J2({ overlay: true, lastBg: ae }), B2(e2);
  }, changeIndex: function(e2, n2) {
    void 0 === n2 && (n2 = false);
    var t2 = xe ? pe.current + (e2 - me) : e2, r3 = we - 1, i3 = y(t2, 0, r3), o3 = xe ? t2 : i3, a2 = innerWidth + 20;
    J2({ touched: false, lastCX: void 0, lastCY: void 0, x: -a2 * o3, pause: n2 }), pe.current = o3, ge && ge(xe ? e2 < 0 ? r3 : e2 > r3 ? 0 : e2 : i3);
  } }), _e = Pe.close, Me = Pe.changeIndex;
  function Ye(e2) {
    return e2 ? _e() : J2({ overlay: !ue });
  }
  function Xe() {
    J2({ x: -(innerWidth + 20) * me, lastCX: void 0, lastCY: void 0, pause: true }), pe.current = me;
  }
  function Ne(e2, n2, t2, r3) {
    "x" === e2 ? function(e3) {
      if (void 0 !== re) {
        var n3 = e3 - re, t3 = n3;
        !xe && (0 === me && n3 > 0 || me === we - 1 && n3 < 0) && (t3 = n3 / 2), J2({ touched: true, lastCX: re, x: -(innerWidth + 20) * pe.current + t3, pause: false });
      } else
        J2({ touched: true, lastCX: e3, x: ee, pause: false });
    }(n2) : "y" === e2 && function(e3, n3) {
      if (void 0 !== ie) {
        var t3 = null === h2 ? null : y(h2, 0.01, h2 - Math.abs(e3 - ie) / 100 / 4);
        J2({ touched: true, lastCY: ie, bg: 1 === n3 ? t3 : h2, minimal: 1 === n3 });
      } else
        J2({ touched: true, lastCY: e3, bg: ae, minimal: true });
    }(t2, r3);
  }
  function We(e2, n2) {
    var t2 = e2 - (null != re ? re : e2), r3 = n2 - (null != ie ? ie : n2), i3 = false;
    if (t2 < -40)
      Me(me + 1);
    else if (t2 > 40)
      Me(me - 1);
    else {
      var o3 = -(innerWidth + 20) * pe.current;
      Math.abs(r3) > 100 && le && x2 && (i3 = true, _e()), J2({ touched: false, x: o3, lastCX: void 0, lastCY: void 0, bg: h2, overlay: !!i3 || ue });
    }
  }
  b("keydown", function(e2) {
    if (O2)
      switch (e2.key) {
        case "ArrowLeft":
          Me(me - 1, true);
          break;
        case "ArrowRight":
          Me(me + 1, true);
          break;
        case "Escape":
          _e();
      }
  });
  var Se = function(e2, n2, t2) {
    return (0, import_react8.useMemo)(function() {
      var r3 = e2.length;
      return t2 ? e2.concat(e2).concat(e2).slice(r3 + n2 - 1, r3 + n2 + 2) : e2.slice(Math.max(n2 - 1, 0), Math.min(n2 + 2, r3 + 1));
    }, [e2, n2, t2]);
  }(H2, me, xe);
  if (!be)
    return null;
  var Te = ue && !Ee, Ve = O2 ? ae : ce, Re = ve && fe && { images: H2, index: me, visible: O2, onClose: _e, onIndexChange: Me, overlayVisible: Te, overlay: ye && ye.overlay, scale: se, rotate: de, onScale: ve, onRotate: fe }, Ae = c2 ? c2(Ee) : 400, Ie = l2 ? l2(Ee) : "cubic-bezier(0.25, 0.8, 0.25, 1)", He = c2 ? c2(3) : 600, Le = l2 ? l2(3) : "cubic-bezier(0.25, 0.8, 0.25, 1)";
  return import_react8.default.createElement(k, { className: "PhotoView-Portal" + (Te ? "" : " PhotoView-Slider__clean") + (O2 ? "" : " PhotoView-Slider__willClose") + (S2 ? " " + S2 : ""), role: "dialog", onClick: function(e2) {
    return e2.stopPropagation();
  }, container: K2 }, O2 && import_react8.default.createElement(Y, null), import_react8.default.createElement("div", { className: "PhotoView-Slider__Backdrop" + (T2 ? " " + T2 : "") + (1 === Ee ? " PhotoView-Slider__fadeIn" : 2 === Ee ? " PhotoView-Slider__fadeOut" : ""), style: { background: Ve ? "rgba(0, 0, 0, " + Ve + ")" : void 0, transitionTimingFunction: Ie, transitionDuration: (ne ? 0 : Ae) + "ms", animationDuration: Ae + "ms" }, onAnimationEnd: ke }), X2 && import_react8.default.createElement("div", { className: "PhotoView-Slider__BannerWrap" }, import_react8.default.createElement("div", { className: "PhotoView-Slider__Counter" }, me + 1, " / ", we), import_react8.default.createElement("div", { className: "PhotoView-Slider__BannerRight" }, W2 && Re && W2(Re), import_react8.default.createElement(P, { className: "PhotoView-Slider__toolbarIcon", onClick: _e }))), Se.map(function(n2, t2) {
    var r3 = xe || 0 !== me ? pe.current - 1 + t2 : me + t2;
    return import_react8.default.createElement(j, { key: xe ? n2.key + "/" + n2.src + "/" + r3 : n2.key, item: n2, speed: Ae, easing: Ie, visible: O2, onReachMove: Ne, onReachUp: We, onPhotoTap: function() {
      return Ye(s2);
    }, onMaskTap: function() {
      return Ye(v2);
    }, wrapClassName: R2, className: V2, style: { left: (innerWidth + 20) * r3 + "px", transform: "translate3d(" + ee + "px, 0px, 0)", transition: ne || te ? void 0 : "transform " + He + "ms " + Le }, loadingElement: A2, brokenElement: I2, onPhotoResize: Xe, isActive: (ye && ye.key) === n2.key, expose: J2 });
  }), !w && X2 && import_react8.default.createElement(import_react8.default.Fragment, null, (xe || 0 !== me) && import_react8.default.createElement("div", { className: "PhotoView-Slider__ArrowLeft", onClick: function() {
    return Me(me - 1, true);
  } }, import_react8.default.createElement(_, null)), (xe || me + 1 < we) && import_react8.default.createElement("div", { className: "PhotoView-Slider__ArrowRight", onClick: function() {
    return Me(me + 1, true);
  } }, import_react8.default.createElement(M, null))), N2 && Re && import_react8.default.createElement("div", { className: "PhotoView-Slider__Overlay" }, N2(Re)));
}
var U = ["children", "onIndexChange", "onVisibleChange"];
var G = { images: [], visible: false, index: 0 };
function J(t2) {
  var r2 = t2.children, i2 = t2.onIndexChange, o2 = t2.onVisibleChange, c2 = h(t2, U), u2 = g(G), l2 = u2[0], s2 = u2[1], d2 = (0, import_react8.useRef)(0), v2 = l2.images, w2 = l2.visible, y2 = l2.index, x2 = m({ nextId: function() {
    return d2.current += 1;
  }, update: function(e2) {
    var n2 = v2.findIndex(function(n3) {
      return n3.key === e2.key;
    });
    if (n2 > -1) {
      var t3 = v2.slice();
      return t3.splice(n2, 1, e2), void s2({ images: t3 });
    }
    s2(function(n3) {
      return { images: n3.images.concat(e2) };
    });
  }, remove: function(e2) {
    s2(function(n2) {
      var t3 = n2.images.filter(function(n3) {
        return n3.key !== e2;
      });
      return { images: t3, index: Math.min(t3.length - 1, y2) };
    });
  }, show: function(e2) {
    var n2 = v2.findIndex(function(n3) {
      return n3.key === e2;
    });
    s2({ visible: true, index: n2 }), o2 && o2(true, n2, l2);
  } }), C2 = m({ close: function() {
    s2({ visible: false }), o2 && o2(false, y2, l2);
  }, changeIndex: function(e2) {
    s2({ index: e2 }), i2 && i2(e2, l2);
  } }), b2 = (0, import_react8.useMemo)(function() {
    return f({}, l2, x2);
  }, [l2, x2]);
  return import_react8.default.createElement(p.Provider, { value: b2 }, r2, import_react8.default.createElement(K, f({ images: v2, visible: w2, index: y2, onIndexChange: C2.changeIndex, onClose: C2.close }, c2)));
}
var Q = function(e2) {
  var t2, r2, o2 = e2.src, c2 = e2.render, u2 = e2.overlay, v2 = e2.width, h2 = e2.height, g2 = e2.triggers, w2 = void 0 === g2 ? ["onClick"] : g2, y2 = e2.children, x2 = (0, import_react8.useContext)(p), C2 = (t2 = function() {
    return x2.nextId();
  }, (r2 = (0, import_react8.useRef)({ sign: false, fn: void 0 }).current).sign || (r2.sign = true, r2.fn = t2()), r2.fn), b2 = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(function() {
    return function() {
      x2.remove(C2);
    };
  }, []);
  var E2 = m({ render: function(e3) {
    return c2 && c2(e3);
  }, show: function(e3, n2) {
    x2.show(C2), function(e4, n3) {
      if (y2) {
        var t3 = y2.props[e4];
        t3 && t3(n3);
      }
    }(e3, n2);
  } }), k2 = (0, import_react8.useMemo)(function() {
    var e3 = {};
    return w2.forEach(function(n2) {
      e3[n2] = E2.show.bind(null, n2);
    }), e3;
  }, []);
  return (0, import_react8.useEffect)(function() {
    x2.update({ key: C2, src: o2, originRef: b2, render: E2.render, overlay: u2, width: v2, height: h2 });
  }, [o2]), y2 ? import_react8.Children.only((0, import_react8.cloneElement)(y2, f({}, k2, { ref: b2 }))) : null;
};

// app/components/Gallery/Gallery.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var Gallery = ({ photos: photos2 }) => {
  const [containerWidth, setContainerWidth] = (0, import_react9.useState)(0);
  const galleryEl = (0, import_react9.useRef)(null);
  (0, import_react9.useLayoutEffect)(() => {
    let animationFrameID = null;
    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    if (galleryEl.current) {
      observer.observe(galleryEl.current);
    }
    return () => {
      observer.disconnect();
      if (animationFrameID) {
        window.cancelAnimationFrame(animationFrameID);
      }
    };
  });
  if (!containerWidth)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ref: galleryEl, children: "\xA0" }, void 0, false, {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 52,
      columnNumber: 31
    }, this);
  const width = containerWidth - 1;
  const targetRowHeight = 300;
  let limitNodeSearch = 2;
  if (containerWidth >= 450) {
    limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight });
  }
  const thumbs = computeRowLayout({
    containerWidth: width,
    limitNodeSearch,
    targetRowHeight,
    margin: 2,
    photos: photos2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(J, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ref: galleryEl, className: "flex flex-wrap", children: thumbs.map((thumb, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Q, { src: thumb.src, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "img",
      {
        src: thumb.src,
        alt: thumb.alt,
        width: thumb.width,
        height: thumb.height,
        className: "m-0.5 cursor-pointer"
      },
      index,
      false,
      {
        fileName: "app/components/Gallery/Gallery.tsx",
        lineNumber: 74,
        columnNumber: 15
      },
      this
    ) }, index, false, {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
var Gallery_default = Gallery;

// app/components/GalleryPhotos.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var photos = [
  {
    src: Photo1_default,
    width: 3,
    height: 2,
    alt: "Photo 1"
  },
  {
    src: Photo2_default,
    width: 4,
    height: 5,
    alt: "Photo 2"
  },
  {
    src: Photo3_default,
    width: 3,
    height: 2,
    alt: "Photo 3"
  },
  {
    src: Photo4_default,
    width: 1,
    height: 1,
    alt: "Photo 4"
  },
  {
    src: Photo5_default,
    width: 3,
    height: 2,
    alt: "Photo 5"
  },
  {
    src: Photo6_default,
    width: 4,
    height: 5,
    alt: "Photo 6"
  },
  {
    src: Photo7_default,
    width: 3,
    height: 2,
    alt: "Photo 7"
  },
  {
    src: Photo8_default,
    width: 1,
    height: 1,
    alt: "Photo 8"
  },
  {
    src: Photo9_default,
    width: 3,
    height: 2,
    alt: "Photo 9"
  },
  {
    src: Photo10_default,
    width: 5,
    height: 4,
    alt: "Photo 10"
  },
  {
    src: Photo11_default,
    width: 3,
    height: 2,
    alt: "Photo 11"
  },
  {
    src: Photo12_default,
    width: 2,
    height: 3,
    alt: "Photo 12"
  }
];
var isHydrating = true;
var GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = (0, import_react10.useState)(!isHydrating);
  (0, import_react10.useEffect)(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700", children: "Gallery" }, void 0, false, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Gallery_default, { photos }, void 0, false, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/GalleryPhotos.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
};
var GalleryPhotos_default = GalleryPhotos;

// app/routes/_index.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    {
      title: "Birthday Invitation - Neela Saharsh"
    },
    {
      description: "Birthday invitation of Saharsh - Son of Neela Shivani & Santosh"
    },
    {
      "og:image": saharsh_default
    },
    {
      "og:site_name": "neesanto"
    },
    { "og:title": "Birthday of Saharsh" },
    {
      "og:description": `September, 29th 2023. Shruthi banquets`
    },
    { "og:type": "website" }
  ];
};
function Index() {
  const { ENV } = useLoaderData();
  const isSmallScreen = (0, import_react_responsive.useMediaQuery)({ query: `(max-width: 768px)` });
  const [openWelcome, setOpenWelcome] = (0, import_react12.useState)(true);
  const [isMobile, setIsMobile] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };
  (0, import_react12.useEffect)(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);
  const thisYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      className: "bg-background-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WelcomeModal, { isOpen: openWelcome, onClose: onCloseWelcomeModal }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "div",
          {
            className: "flex justify-center items-center h-screen md:h-[100vh] bg-no-repeat bg-center bg-cover",
            style: { backgroundImage: `url(${isMobile ? hero_bg_mobile_default : hero_bg_default})` },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb-1", style: { position: "absolute", top: "10vh" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "h4",
                {
                  className: "text-center font-head font-bold text-5xl mb-4 ",
                  style: { textShadow: "3px 3px 1px #ffffff", color: "red" },
                  children: "Happy Birthday Saharsh"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 81,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "div",
                {
                  className: "text-center font-black font-sans text-md  italic border-t-2 border-[#ffffff] pt-3",
                  style: { textShadow: "2px 2px 1px #ffffff", color: "red" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb-4 font-head md:text-lg font-medium", style: { color: "red" }, children: "Birthday on:" }, void 0, false, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 91,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-3xl md:text-4xl font-black mb-6 text-cente font-sans", style: { color: "red" }, children: "September, 30th 2023" }, void 0, false, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 94,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 87,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 80,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SectionWrapper_default, { className: "bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BirthdayBoy_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SectionWrapper_default, { className: "mb-36 pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Countdown_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(LocationMap_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SectionWrapper_default, { className: "mb-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(GalleryPhotos_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(GoogleOAuthProvider, { clientId: ENV.GOOGLE_CLIENT_ID, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SectionWrapper_default, { className: "mb-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Message_default, { isMobile }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "py-24 bg-background text-gray-700 relative text-center font-sans", children: [
          "\xA9 ",
          thisYear,
          " by ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "font-semibold", children: "Santosh" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MusicPlayer_default, { play: !openWelcome }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}
export {
  Index as default,
  meta
};
/*! Bundled license information:

react-responsive/dist/react-responsive.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/routes/_index-QD3EL3BF.js.map
