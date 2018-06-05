/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = __webpack_require__(1);
var Any = __webpack_require__(2);
var Cast = __webpack_require__(8);
var Errors = __webpack_require__(5);
var Lazy = __webpack_require__(11);
var Ref = __webpack_require__(4);
var Settings = __webpack_require__(3);

// Declare internals

var internals = {
    alternatives: __webpack_require__(10),
    array: __webpack_require__(12),
    boolean: __webpack_require__(13),
    date: __webpack_require__(14),
    func: __webpack_require__(15),
    number: __webpack_require__(18),
    object: __webpack_require__(16),
    string: __webpack_require__(19)
};

internals.applyDefaults = function (schema) {

    Utils.assert(this, 'Must be invoked on a Joi instance.');

    if (this._defaults) {
        schema = this._defaults(schema);
    }

    schema._currentJoi = this;

    return schema;
};

internals.root = function () {

    var any = new Any();

    var root = any.clone();
    Any.prototype._currentJoi = root;
    root._currentJoi = root;

    root.any = function () {

        Utils.assert(arguments.length === 0, 'Joi.any() does not allow arguments.');

        return internals.applyDefaults.call(this, any);
    };

    root.alternatives = root.alt = function () {

        var alternatives = internals.applyDefaults.call(this, internals.alternatives);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return args.length ? alternatives.try.apply(alternatives, args) : alternatives;
    };

    root.array = function () {

        Utils.assert(arguments.length === 0, 'Joi.array() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.array);
    };

    root.boolean = root.bool = function () {

        Utils.assert(arguments.length === 0, 'Joi.boolean() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.boolean);
    };

    // root.binary = function (...args) {
    //
    //     Utils.assert(args.length === 0, 'Joi.binary() does not allow arguments.');
    //
    //     return internals.applyDefaults.call(this, internals.binary);
    // };

    root.date = function () {

        Utils.assert(arguments.length === 0, 'Joi.date() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.date);
    };

    root.func = function () {

        Utils.assert(arguments.length === 0, 'Joi.func() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.func);
    };

    root.number = function () {

        Utils.assert(arguments.length === 0, 'Joi.number() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.number);
    };

    root.object = function () {

        var object = internals.applyDefaults.call(this, internals.object);
        return arguments.length ? object.keys.apply(object, arguments) : object;
    };

    root.string = function () {

        Utils.assert(arguments.length === 0, 'Joi.string() does not allow arguments.');

        return internals.applyDefaults.call(this, internals.string);
    };

    root.ref = function () {

        return Ref.create.apply(Ref, arguments);
    };

    root.isRef = function (ref) {

        return Ref.isRef(ref);
    };

    root.validate = function (value) /*, [schema], [options], callback */{
        var _ref;

        var last = (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, arguments.length <= _ref ? undefined : arguments[_ref]);
        var callback = typeof last === 'function' ? last : null;

        var count = (arguments.length <= 1 ? 0 : arguments.length - 1) - (callback ? 1 : 0);
        if (count === 0) {
            return any.validate(value, callback);
        }

        var options = count === 2 ? arguments.length <= 2 ? undefined : arguments[2] : {};
        var schema = root.compile(arguments.length <= 1 ? undefined : arguments[1]);

        return schema._validateWithOptions(value, options, callback);
    };

    root.describe = function () {

        var schema = arguments.length ? root.compile(arguments.length <= 0 ? undefined : arguments[0]) : any;
        return schema.describe();
    };

    root.compile = function (schema) {

        try {
            return Cast.schema(this, schema);
        } catch (err) {
            if (err.hasOwnProperty('path')) {
                err.message = err.message + '(' + err.path + ')';
            }
            throw err;
        }
    };

    root.assert = function (value, schema, message) {

        root.attempt(value, schema, message);
    };

    root.attempt = function (value, schema, message) {

        var result = root.validate(value, schema);
        var error = result.error;
        if (error) {
            if (!message) {
                if (typeof error.annotate === 'function') {
                    error.message = error.annotate();
                }
                throw error;
            }

            if (!(message instanceof Error)) {
                if (typeof error.annotate === 'function') {
                    error.message = message + ' ' + error.annotate();
                }
                throw error;
            }

            throw message;
        }

        return result.value;
    };

    root.reach = function (schema, path) {

        Utils.assert(schema && schema instanceof Any, 'you must provide a joi schema');
        Utils.assert(Array.isArray(path) || typeof path === 'string', 'path must be a string or an array of strings');

        var reach = function reach(sourceSchema, schemaPath) {

            if (!schemaPath.length) {
                return sourceSchema;
            }

            var children = sourceSchema._inner.children;
            if (!children) {
                return;
            }

            var key = schemaPath.shift();
            for (var i = 0; i < children.length; ++i) {
                var child = children[i];
                if (child.key === key) {
                    return reach(child.schema, schemaPath);
                }
            }
        };

        var schemaPath = typeof path === 'string' ? path.split('.') : path.slice();

        return reach(schema, schemaPath);
    };

    root.lazy = function (fn) {

        return Lazy.set(fn);
    };

    root.defaults = function (fn) {
        var _this = this;

        Utils.assert(typeof fn === 'function', 'Defaults must be a function');

        var joi = Object.create(this.any());
        joi = fn(joi);

        Utils.assert(joi && joi instanceof this.constructor, 'defaults() must return a schema');

        Object.assign(joi, this, joi.clone()); // Re-add the types from `this` but also keep the settings from joi's potential new defaults

        joi._defaults = function (schema) {

            if (_this._defaults) {
                schema = _this._defaults(schema);
                Utils.assert(schema instanceof _this.constructor, 'defaults() must return a schema');
            }

            schema = fn(schema);
            Utils.assert(schema instanceof _this.constructor, 'defaults() must return a schema');
            return schema;
        };

        return joi;
    };

    root.extend = function () {
        var _this2 = this;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var extensions = Utils.flatten(args);
        Utils.assert(extensions.length > 0, 'You need to provide at least one extension');

        this.assert(extensions, root.extensionsSchema);

        var joi = Object.create(this.any());
        Object.assign(joi, this);

        var _loop = function _loop(i) {
            var extension = extensions[i];

            if (typeof extension === 'function') {
                extension = extension(joi);
            }

            _this2.assert(extension, root.extensionSchema);

            var base = (extension.base || _this2.any()).clone(); // Cloning because we're going to override language afterwards
            var ctor = base.constructor;
            var type = function (_ctor) {
                _inherits(type, _ctor);

                // eslint-disable-line no-loop-func

                function type() {
                    _classCallCheck(this, type);

                    var _this3 = _possibleConstructorReturn(this, (type.__proto__ || Object.getPrototypeOf(type)).call(this));

                    if (extension.base) {
                        Object.assign(_this3, base);
                    }

                    _this3._type = extension.name;

                    if (extension.language) {
                        _this3._settings = Settings.concat(_this3._settings, {
                            language: _defineProperty({}, extension.name, extension.language)
                        });
                    }
                    return _this3;
                }

                return type;
            }(ctor);

            if (extension.coerce) {
                type.prototype._coerce = function (value, state, options) {

                    if (ctor.prototype._coerce) {
                        var baseRet = ctor.prototype._coerce.call(this, value, state, options);

                        if (baseRet.errors) {
                            return baseRet;
                        }

                        value = baseRet.value;
                    }

                    var ret = extension.coerce.call(this, value, state, options);
                    if (ret instanceof Errors.Err) {
                        return { value: value, errors: ret };
                    }

                    return { value: ret };
                };
            }
            if (extension.pre) {
                type.prototype._base = function (value, state, options) {

                    if (ctor.prototype._base) {
                        var baseRet = ctor.prototype._base.call(this, value, state, options);

                        if (baseRet.errors) {
                            return baseRet;
                        }

                        value = baseRet.value;
                    }

                    var ret = extension.pre.call(this, value, state, options);
                    if (ret instanceof Errors.Err) {
                        return { value: value, errors: ret };
                    }

                    return { value: ret };
                };
            }

            if (extension.rules) {
                var _loop2 = function _loop2(j) {
                    var rule = extension.rules[j];
                    var ruleArgs = rule.params ? rule.params instanceof Any ? rule.params._inner.children.map(function (k) {
                        return k.key;
                    }) : Object.keys(rule.params) : [];
                    var validateArgs = rule.params ? Cast.schema(_this2, rule.params) : null;

                    type.prototype[rule.name] = function () {
                        for (var _len3 = arguments.length, rArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                            rArgs[_key3] = arguments[_key3];
                        }

                        // eslint-disable-line no-loop-func

                        if (rArgs.length > ruleArgs.length) {
                            throw new Error('Unexpected number of arguments');
                        }

                        var hasRef = false;
                        var arg = {};

                        for (var k = 0; k < ruleArgs.length; ++k) {
                            arg[ruleArgs[k]] = rArgs[k];
                            if (!hasRef && Ref.isRef(rArgs[k])) {
                                hasRef = true;
                            }
                        }

                        if (validateArgs) {
                            arg = joi.attempt(arg, validateArgs);
                        }

                        var schema = void 0;
                        if (rule.validate) {
                            var validate = function validate(value, state, options) {

                                return rule.validate.call(this, arg, value, state, options);
                            };

                            schema = this._test(rule.name, arg, validate, {
                                description: rule.description,
                                hasRef: hasRef
                            });
                        } else {
                            schema = this.clone();
                        }

                        if (rule.setup) {
                            var newSchema = rule.setup.call(schema, arg);
                            if (newSchema !== undefined) {
                                Utils.assert(newSchema instanceof Any, 'Setup of extension Joi.' + this._type + '().' + rule.name + '() must return undefined or a Joi object');
                                schema = newSchema;
                            }
                        }

                        return schema;
                    };
                };

                for (var j = 0; j < extension.rules.length; ++j) {
                    _loop2(j);
                }
            }

            if (extension.describe) {
                type.prototype.describe = function () {

                    var description = ctor.prototype.describe.call(this);
                    return extension.describe.call(this, description);
                };
            }

            var instance = new type();
            joi[extension.name] = function () {

                return internals.applyDefaults.call(this, instance);
            };
        };

        for (var i = 0; i < extensions.length; ++i) {
            _loop(i);
        }

        return joi;
    };

    root.extensionSchema = internals.object.keys({
        base: internals.object.type(Any, 'Joi object'),
        name: internals.string.required(),
        coerce: internals.func.arity(3),
        pre: internals.func.arity(3),
        language: internals.object,
        describe: internals.func.arity(1),
        rules: internals.array.items(internals.object.keys({
            name: internals.string.required(),
            setup: internals.func.arity(1),
            validate: internals.func.arity(4),
            params: [internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')), internals.object.type(internals.object.constructor, 'Joi object')],
            description: [internals.string, internals.func.arity(1)]
        }).or('setup', 'validate'))
    }).strict();

    root.extensionsSchema = internals.array.items([internals.object, internals.func.arity(1)]).strict();

    root.version = __webpack_require__(25).version;

    return root;
};

module.exports = internals.root();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var Escape = __webpack_require__(1);
  // Apply options to a copy of the defaults

  // Declare internals

  var internals = {};

  exports.applyToDefaults = function (defaults, options, isNullOverride) {

    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');

    if (!options) {
      // If no options, return null
      return null;
    }

    var copy = exports.clone(defaults);

    if (options === true) {
      // If options is set to true, use defaults
      return copy;
    }

    return exports.merge(copy, options, isNullOverride === true, false);
  };

  exports.assert = function (condition) {

    if (condition) {
      return;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && args[0] instanceof Error) {
      throw args[0];
    }

    var msgs = args.filter(function (arg) {
      return arg !== '';
    }).map(function (arg) {

      return typeof arg === 'string' ? arg : arg instanceof Error ? arg.message : exports.stringify(arg);
    });

    throw new Error(msgs.join(' ') || 'Unknown error');
  };

  // Clone object or array

  exports.clone = function (obj, seen) {

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {

      return obj;
    }

    seen = seen || new Map();

    var lookup = seen.get(obj);
    if (lookup) {
      return lookup;
    }

    var newObj = void 0;
    var cloneDeep = false;

    if (!Array.isArray(obj)) {
      if (obj instanceof Date) {
        newObj = new Date(obj.getTime());
      } else if (obj instanceof RegExp) {
        newObj = new RegExp(obj);
      } else {
        var proto = Object.getPrototypeOf(obj);
        if (proto && proto.isImmutable) {

          newObj = obj;
        } else {
          newObj = Object.create(proto);
          cloneDeep = true;
        }
      }
    } else {
      newObj = [];
      cloneDeep = true;
    }

    seen.set(obj, newObj);

    if (cloneDeep) {
      var keys = Object.getOwnPropertyNames(obj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor && (descriptor.get || descriptor.set)) {

          Object.defineProperty(newObj, key, descriptor);
        } else {
          newObj[key] = exports.clone(obj[key], seen);
        }
      }
    }

    return newObj;
  };

  // Test if the reference contains the values

  exports.contain = function (ref, values, options) {

    /*
     string -> string(s)
     array -> item(s)
     object -> key(s)
     object -> object (key:value)
     */

    var valuePairs = null;
    if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' && !Array.isArray(ref) && !Array.isArray(values)) {

      valuePairs = values;
      values = Object.keys(values);
    } else {
      values = [].concat(values);
    }

    options = options || {}; // deep, once, only, part

    exports.assert(typeof ref === 'string' || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object', 'Reference must be string or an object');
    exports.assert(values.length, 'Values array cannot be empty');

    var compare = void 0;
    var compareFlags = void 0;
    if (options.deep) {
      compare = exports.deepEqual;

      var hasOnly = options.hasOwnProperty('only');
      var hasPart = options.hasOwnProperty('part');

      compareFlags = {
        prototype: hasOnly ? options.only : hasPart ? !options.part : false,
        part: hasOnly ? !options.only : hasPart ? options.part : true
      };
    } else {
      compare = function compare(a, b) {
        return a === b;
      };
    }

    var misses = false;
    var matches = new Array(values.length);
    for (var i = 0; i < matches.length; ++i) {
      matches[i] = 0;
    }

    if (typeof ref === 'string') {
      var pattern = '(';
      for (var _i = 0; _i < values.length; ++_i) {
        var value = values[_i];
        exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
        pattern += (_i ? '|' : '') + exports.escapeRegex(value);
      }

      var regex = new RegExp(pattern + ')', 'g');
      var leftovers = ref.replace(regex, function ($0, $1) {

        var index = values.indexOf($1);
        ++matches[index];
        return ''; // Remove from string
      });

      misses = !!leftovers;
    } else if (Array.isArray(ref)) {
      for (var _i2 = 0; _i2 < ref.length; ++_i2) {
        var matched = false;
        for (var j = 0; j < values.length && matched === false; ++j) {
          matched = compare(values[j], ref[_i2], compareFlags) && j;
        }

        if (matched !== false) {
          ++matches[matched];
        } else {
          misses = true;
        }
      }
    } else {
      var keys = Object.getOwnPropertyNames(ref);
      for (var _i3 = 0; _i3 < keys.length; ++_i3) {
        var key = keys[_i3];
        var pos = values.indexOf(key);
        if (pos !== -1) {
          if (valuePairs && !compare(valuePairs[key], ref[key], compareFlags)) {

            return false;
          }

          ++matches[pos];
        } else {
          misses = true;
        }
      }
    }

    var result = false;
    for (var _i4 = 0; _i4 < matches.length; ++_i4) {
      result = result || !!matches[_i4];
      if (options.once && matches[_i4] > 1 || !options.part && !matches[_i4]) {

        return false;
      }
    }

    if (options.only && misses) {

      return false;
    }

    return result;
  };

  // Deep object or array comparison

  exports.deepEqual = function (obj, ref, options, seen) {

    options = options || { prototype: true };

    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

    if (type !== (typeof ref === 'undefined' ? 'undefined' : _typeof(ref))) {
      return false;
    }

    if (type !== 'object' || obj === null || ref === null) {

      if (obj === ref) {
        // Copied from Deep-eql, copyright(c) 2013 Jake Luer,
        // jake@alogicalparadox.com, MIT Licensed,
        // https://github.com/chaijs/deep-eql
        return obj !== 0 || 1 / obj === 1 / ref; // -0 / +0
      }

      return obj !== obj && ref !== ref; // NaN
    }

    seen = seen || [];
    if (seen.indexOf(obj) !== -1) {
      return true; // If previous comparison failed, it would have stopped execution
    }

    seen.push(obj);

    if (Array.isArray(obj)) {
      if (!Array.isArray(ref)) {
        return false;
      }

      if (!options.part && obj.length !== ref.length) {
        return false;
      }

      for (var i = 0; i < obj.length; ++i) {
        if (options.part) {
          var found = false;
          for (var j = 0; j < ref.length; ++j) {
            if (exports.deepEqual(obj[i], ref[j], options)) {
              found = true;
              break;
            }
          }

          return found;
        }

        if (!exports.deepEqual(obj[i], ref[i], options)) {
          return false;
        }
      }

      return true;
    }

    // if (Buffer.isBuffer(obj)) {
    //   if (!Buffer.isBuffer(ref)) {
    //     return false
    //   }
    //
    //   if (obj.length !== ref.length) {
    //     return false
    //   }
    //
    //   for (let i = 0; i < obj.length; ++i) {
    //     if (obj[i] !== ref[i]) {
    //       return false
    //     }
    //   }
    //
    //   return true
    // }

    if (obj instanceof Date) {
      return ref instanceof Date && obj.getTime() === ref.getTime();
    }

    if (obj instanceof RegExp) {
      return ref instanceof RegExp && obj.toString() === ref.toString();
    }

    if (options.prototype) {
      if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
        return false;
      }
    }

    var keys = Object.getOwnPropertyNames(obj);

    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
      return false;
    }

    for (var _i5 = 0; _i5 < keys.length; ++_i5) {
      var key = keys[_i5];
      var descriptor = Object.getOwnPropertyDescriptor(obj, key);
      if (descriptor.get) {
        if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
          return false;
        }
      } else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
        return false;
      }
    }

    return true;
  };

  exports.escapeHtml = function (string) {

    return Escape.escapeHtml(string);
  };

  // Escape string for Regex construction

  exports.escapeRegex = function (string) {

    // Escape ^$.*+-?=!:|\/()[]{},
    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
  };

  // Flatten array

  exports.flatten = function (array, target) {

    var result = target || [];

    for (var i = 0; i < array.length; ++i) {
      if (Array.isArray(array[i])) {
        exports.flatten(array[i], result);
      } else {
        result.push(array[i]);
      }
    }

    return result;
  };

  // Convert array into object

  exports.mapToObject = function (array, key) {

    if (!array) {
      return null;
    }

    var obj = {};
    for (var i = 0; i < array.length; ++i) {
      if (key) {
        if (array[i][key]) {
          obj[array[i][key]] = true;
        }
      } else {
        obj[array[i]] = true;
      }
    }

    return obj;
  };

  // Merge all the properties of source into target, source wins in conflict, and by default null and undefined from
  // source are applied

  /*eslint-disable */
  exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {
    /*eslint-enable */

    exports.assert(target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object', 'Invalid target value: must be an object');
    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object', 'Invalid source value: must be null, undefined, or an object');

    if (!source) {
      return target;
    }

    if (Array.isArray(source)) {
      exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
      if (isMergeArrays === false) {
        // isMergeArrays defaults to true
        target.length = 0; // Must not change target assignment
      }

      for (var i = 0; i < source.length; ++i) {
        target.push(exports.clone(source[i]));
      }

      return target;
    }

    var keys = Object.keys(source);
    for (var _i6 = 0; _i6 < keys.length; ++_i6) {
      var key = keys[_i6];
      if (key === '__proto__') {
        continue;
      }

      var value = source[key];
      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

        if (!target[key] || _typeof(target[key]) !== 'object' || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date ||
        // Buffer.isBuffer(value) ||
        value instanceof RegExp) {

          target[key] = exports.clone(value);
        } else {
          exports.merge(target[key], value, isNullOverride, isMergeArrays);
        }
      } else {
        if (value !== null && value !== undefined) {
          // Explicit to preserve empty strings

          target[key] = value;
        } else if (isNullOverride !== false) {
          // Defaults to true
          target[key] = value;
        }
      }
    }

    return target;
  };

  // Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

  exports.reach = function (obj, chain, options) {

    if (chain === false || chain === null || typeof chain === 'undefined') {

      return obj;
    }

    options = options || {};
    if (typeof options === 'string') {
      options = { separator: options };
    }

    var path = chain.split(options.separator || '.');
    var ref = obj;
    for (var i = 0; i < path.length; ++i) {
      var key = path[i];
      if (key[0] === '-' && Array.isArray(ref)) {
        key = key.slice(1, key.length);
        key = ref.length - key;
      }

      if (!ref || !(((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || typeof ref === 'function') && key in ref) || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) !== 'object' && options.functions === false) {
        // Only object and function can have properties

        exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
        exports.assert((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
        ref = options.default;
        break;
      }

      ref = ref[key];
    }

    return ref;
  };

  exports.stringify = function () {

    try {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return JSON.stringify.apply(null, args);
    } catch (err) {
      return '[Cannot display object: ' + err.message + ']';
    }
  };

  // Remove duplicate items from array

  exports.unique = function (array, key) {

    var result = void 0;
    if (key) {
      result = [];
      var index = new Set();
      array.forEach(function (item) {

        var identifier = item[key];
        if (!index.has(identifier)) {
          index.add(identifier);
          result.push(item);
        }
      });
    } else {
      result = Array.from(new Set(array));
    }

    return result;
  };
  exports.isIPv6 = function (input) {
    return (/^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(input)
    );
  };

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Declare internals

  var internals = {};

  exports.escapeHtml = function (input) {

    if (!input) {
      return '';
    }

    var escaped = '';

    for (var i = 0; i < input.length; ++i) {

      var charCode = input.charCodeAt(i);

      if (internals.isSafe(charCode)) {
        escaped += input[i];
      } else {
        escaped += internals.escapeHtmlChar(charCode);
      }
    }

    return escaped;
  };

  internals.isSafe = function (charCode) {

    return typeof internals.safeCharCodes[charCode] !== 'undefined';
  };

  internals.escapeHtmlChar = function (charCode) {

    var namedEscape = internals.namedHtml[charCode];
    if (typeof namedEscape !== 'undefined') {
      return namedEscape;
    }

    if (charCode >= 256) {
      return '&#' + charCode + ';';
    }

    var hexValue = charCode.toString(16);
    return '&#x' + internals.padLeft(hexValue, 2) + ';';
  };

  internals.padLeft = function (str, len) {

    while (str.length < len) {
      str = '0' + str;
    }

    return str;
  };

  internals.namedHtml = {
    '38': '&amp;',
    '60': '&lt;',
    '62': '&gt;',
    '34': '&quot;',
    '160': '&nbsp;',
    '162': '&cent;',
    '163': '&pound;',
    '164': '&curren;',
    '169': '&copy;',
    '174': '&reg;'
  };

  internals.safeCharCodes = function () {

    var safe = {};

    for (var i = 32; i < 123; ++i) {

      if (i >= 97 || // a-z
      i >= 65 && i <= 90 || // A-Z
      i >= 48 && i <= 57 || // 0-9
      i === 32 || // space
      i === 46 || // .
      i === 44 || // ,
      i === 45 || // -
      i === 58 || // :
      i === 95) {
        // _

        safe[i] = null;
      }
    }

    return safe;
  }();

  /***/
}]
/******/);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = __webpack_require__(1);
var Settings = __webpack_require__(3);
var Ref = __webpack_require__(4);
var Errors = __webpack_require__(5);
var Alternatives = null; // Delay-loaded to prevent circular dependencies
var Cast = null;

// Declare internals

var internals = {
    Set: __webpack_require__(7)
};

internals.defaults = {
    abortEarly: true,
    convert: true,
    allowUnknown: false,
    skipFunctions: false,
    stripUnknown: false,
    language: {},
    presence: 'optional',
    strip: false,
    noDefaults: false,
    escapeHtml: false

    // context: null
};

module.exports = internals.Any = function () {
    function _class() {
        _classCallCheck(this, _class);

        Cast = Cast || __webpack_require__(8);

        this.isJoi = true;
        this._type = 'any';
        this._settings = null;
        this._valids = new internals.Set();
        this._invalids = new internals.Set();
        this._tests = [];
        this._refs = [];
        this._flags = {
            /*
             presence: 'optional',                   // optional, required, forbidden, ignore
             allowOnly: false,
             allowUnknown: undefined,
             default: undefined,
             forbidden: false,
             encoding: undefined,
             insensitive: false,
             trim: false,
             normalize: undefined,                   // NFC, NFD, NFKC, NFKD
             case: undefined,                        // upper, lower
             empty: undefined,
             func: false,
             raw: false
             */
        };

        this._description = null;
        this._unit = null;
        this._notes = [];
        this._tags = [];
        this._examples = [];
        this._meta = [];

        this._inner = {}; // Hash of arrays of immutable objects
    }

    _createClass(_class, [{
        key: 'createError',
        value: function createError(type, context, state, options) {
            var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._flags;


            return Errors.create(type, context, state, options, flags);
        }
    }, {
        key: 'createOverrideError',
        value: function createOverrideError(type, context, state, options, message, template) {

            return Errors.create(type, context, state, options, this._flags, message, template);
        }
    }, {
        key: 'checkOptions',
        value: function checkOptions(options) {

            var Schemas = __webpack_require__(9);
            var result = Schemas.options.validate(options);
            if (result.error) {
                throw new Error(result.error.details[0].message);
            }
        }
    }, {
        key: 'clone',
        value: function clone() {

            var obj = Object.create(Object.getPrototypeOf(this));

            obj.isJoi = true;
            obj._currentJoi = this._currentJoi;
            obj._type = this._type;
            obj._settings = this._settings;
            obj._baseType = this._baseType;
            obj._valids = this._valids.slice();
            obj._invalids = this._invalids.slice();
            obj._tests = this._tests.slice();
            obj._refs = this._refs.slice();
            obj._flags = Utils.clone(this._flags);

            obj._description = this._description;
            obj._unit = this._unit;
            obj._notes = this._notes.slice();
            obj._tags = this._tags.slice();
            obj._examples = this._examples.slice();
            obj._meta = this._meta.slice();

            obj._inner = {};
            var inners = Object.keys(this._inner);
            for (var i = 0; i < inners.length; ++i) {
                var key = inners[i];
                obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
            }

            return obj;
        }
    }, {
        key: 'concat',
        value: function concat(schema) {

            Utils.assert(schema instanceof internals.Any, 'Invalid schema object');
            Utils.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

            var obj = this.clone();

            if (this._type === 'any' && schema._type !== 'any') {

                // Reset values as if we were "this"
                var tmpObj = schema.clone();
                var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit', '_notes', '_tags', '_examples', '_meta', '_inner'];

                for (var i = 0; i < keysToRestore.length; ++i) {
                    tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
                }

                obj = tmpObj;
            }

            obj._settings = obj._settings ? Settings.concat(obj._settings, schema._settings) : schema._settings;
            obj._valids.merge(schema._valids, schema._invalids);
            obj._invalids.merge(schema._invalids, schema._valids);
            obj._tests = obj._tests.concat(schema._tests);
            obj._refs = obj._refs.concat(schema._refs);
            Utils.merge(obj._flags, schema._flags);

            obj._description = schema._description || obj._description;
            obj._unit = schema._unit || obj._unit;
            obj._notes = obj._notes.concat(schema._notes);
            obj._tags = obj._tags.concat(schema._tags);
            obj._examples = obj._examples.concat(schema._examples);
            obj._meta = obj._meta.concat(schema._meta);

            var inners = Object.keys(schema._inner);
            var isObject = obj._type === 'object';
            for (var _i = 0; _i < inners.length; ++_i) {
                var key = inners[_i];
                var source = schema._inner[key];
                if (source) {
                    var target = obj._inner[key];
                    if (target) {
                        if (isObject && key === 'children') {
                            var keys = {};

                            for (var j = 0; j < target.length; ++j) {
                                keys[target[j].key] = j;
                            }

                            for (var _j = 0; _j < source.length; ++_j) {
                                var sourceKey = source[_j].key;
                                if (keys[sourceKey] >= 0) {
                                    target[keys[sourceKey]] = {
                                        key: sourceKey,
                                        schema: target[keys[sourceKey]].schema.concat(source[_j].schema)
                                    };
                                } else {
                                    target.push(source[_j]);
                                }
                            }
                        } else {
                            obj._inner[key] = obj._inner[key].concat(source);
                        }
                    } else {
                        obj._inner[key] = source.slice();
                    }
                }
            }

            return obj;
        }
    }, {
        key: '_test',
        value: function _test(name, arg, func, options) {

            var obj = this.clone();
            obj._tests.push({ func: func, name: name, arg: arg, options: options });
            return obj;
        }
    }, {
        key: 'options',
        value: function options(_options) {

            Utils.assert(!_options.context, 'Cannot override context');
            this.checkOptions(_options);

            var obj = this.clone();
            obj._settings = Settings.concat(obj._settings, _options);
            return obj;
        }
    }, {
        key: 'strict',
        value: function strict(isStrict) {

            var obj = this.clone();

            var convert = isStrict === undefined ? false : !isStrict;
            obj._settings = Settings.concat(obj._settings, { convert: convert });
            return obj;
        }
    }, {
        key: 'raw',
        value: function raw(isRaw) {

            var value = isRaw === undefined ? true : isRaw;

            if (this._flags.raw === value) {
                return this;
            }

            var obj = this.clone();
            obj._flags.raw = value;
            return obj;
        }
    }, {
        key: 'error',
        value: function error(err) {

            Utils.assert(err && (err instanceof Error || typeof err === 'function'), 'Must provide a valid Error object or a function');

            var obj = this.clone();
            obj._flags.error = err;
            return obj;
        }
    }, {
        key: 'allow',
        value: function allow() {
            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
            }

            var obj = this.clone();
            values = Utils.flatten(values);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];

                Utils.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
                obj._invalids.remove(value);
                obj._valids.add(value, obj._refs);
            }
            return obj;
        }
    }, {
        key: 'valid',
        value: function valid() {

            var obj = this.allow.apply(this, arguments);
            obj._flags.allowOnly = true;
            return obj;
        }
    }, {
        key: 'invalid',
        value: function invalid() {
            for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                values[_key2] = arguments[_key2];
            }

            var obj = this.clone();
            values = Utils.flatten(values);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];

                Utils.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
                obj._valids.remove(value);
                obj._invalids.add(value, obj._refs);
            }

            return obj;
        }
    }, {
        key: 'required',
        value: function required() {

            if (this._flags.presence === 'required') {
                return this;
            }

            var obj = this.clone();
            obj._flags.presence = 'required';
            return obj;
        }
    }, {
        key: 'optional',
        value: function optional() {

            if (this._flags.presence === 'optional') {
                return this;
            }

            var obj = this.clone();
            obj._flags.presence = 'optional';
            return obj;
        }
    }, {
        key: 'forbidden',
        value: function forbidden() {

            if (this._flags.presence === 'forbidden') {
                return this;
            }

            var obj = this.clone();
            obj._flags.presence = 'forbidden';
            return obj;
        }
    }, {
        key: 'strip',
        value: function strip() {

            if (this._flags.strip) {
                return this;
            }

            var obj = this.clone();
            obj._flags.strip = true;
            return obj;
        }
    }, {
        key: 'applyFunctionToChildren',
        value: function applyFunctionToChildren(children, fn, args, root) {

            children = [].concat(children);

            if (children.length !== 1 || children[0] !== '') {
                root = root ? root + '.' : '';

                var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {

                    return root + child;
                });

                throw new Error('unknown key(s) ' + extraChildren.join(', '));
            }

            return this[fn].apply(this, args);
        }
    }, {
        key: 'default',
        value: function _default(value, description) {

            if (typeof value === 'function' && !Ref.isRef(value)) {

                if (!value.description && description) {

                    value.description = description;
                }

                if (!this._flags.func) {
                    Utils.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
                }
            }

            var obj = this.clone();
            obj._flags.default = value;
            Ref.push(obj._refs, value);
            return obj;
        }
    }, {
        key: 'empty',
        value: function empty(schema) {

            var obj = this.clone();
            if (schema === undefined) {
                delete obj._flags.empty;
            } else {
                obj._flags.empty = Cast.schema(this._currentJoi, schema);
            }
            return obj;
        }
    }, {
        key: 'when',
        value: function when(condition, options) {

            Utils.assert(options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
            Utils.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

            var then = options.hasOwnProperty('then') ? this.concat(Cast.schema(this._currentJoi, options.then)) : undefined;
            var otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(this._currentJoi, options.otherwise)) : undefined;

            Alternatives = Alternatives || __webpack_require__(10);

            var alternativeOptions = { then: then, otherwise: otherwise };
            if (Object.prototype.hasOwnProperty.call(options, 'is')) {
                alternativeOptions.is = options.is;
            }
            var obj = Alternatives.when(condition, alternativeOptions);
            obj._flags.presence = 'ignore';
            obj._baseType = this;

            return obj;
        }
    }, {
        key: 'description',
        value: function description(desc) {

            Utils.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

            var obj = this.clone();
            obj._description = desc;
            return obj;
        }
    }, {
        key: 'notes',
        value: function notes(_notes) {

            Utils.assert(_notes && (typeof _notes === 'string' || Array.isArray(_notes)), 'Notes must be a non-empty string or array');

            var obj = this.clone();
            obj._notes = obj._notes.concat(_notes);
            return obj;
        }
    }, {
        key: 'tags',
        value: function tags(_tags) {

            Utils.assert(_tags && (typeof _tags === 'string' || Array.isArray(_tags)), 'Tags must be a non-empty string or array');

            var obj = this.clone();
            obj._tags = obj._tags.concat(_tags);
            return obj;
        }
    }, {
        key: 'meta',
        value: function meta(_meta) {

            Utils.assert(_meta !== undefined, 'Meta cannot be undefined');

            var obj = this.clone();
            obj._meta = obj._meta.concat(_meta);
            return obj;
        }
    }, {
        key: 'example',
        value: function example() {

            Utils.assert(arguments.length === 1, 'Missing example');
            var value = arguments.length <= 0 ? undefined : arguments[0];

            var obj = this.clone();
            obj._examples.push(value);
            return obj;
        }
    }, {
        key: 'unit',
        value: function unit(name) {

            Utils.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

            var obj = this.clone();
            obj._unit = name;
            return obj;
        }
    }, {
        key: '_prepareEmptyValue',
        value: function _prepareEmptyValue(value) {

            if (typeof value === 'string' && this._flags.trim) {
                return value.trim();
            }

            return value;
        }
    }, {
        key: '_validate',
        value: function _validate(value, state, options, reference) {
            var _this = this;

            var originalValue = value;

            // Setup state and settings

            state = state || { key: '', path: [], parent: null, reference: reference };

            if (this._settings) {
                options = Settings.concat(options, this._settings);
            }

            var errors = [];
            var finish = function finish() {

                var finalValue = void 0;

                if (value !== undefined) {
                    finalValue = _this._flags.raw ? originalValue : value;
                } else if (options.noDefaults) {
                    finalValue = value;
                } else if (Ref.isRef(_this._flags.default)) {
                    finalValue = _this._flags.default(state.parent, options);
                } else if (typeof _this._flags.default === 'function' && !(_this._flags.func && !_this._flags.default.description)) {

                    var args = void 0;

                    if (state.parent !== null && _this._flags.default.length > 0) {

                        args = [Utils.clone(state.parent), options];
                    }

                    var defaultValue = internals._try(_this._flags.default, args);
                    finalValue = defaultValue.value;
                    if (defaultValue.error) {
                        errors.push(_this.createError('any.default', { error: defaultValue.error }, state, options));
                    }
                } else {
                    finalValue = Utils.clone(_this._flags.default);
                }

                if (errors.length && typeof _this._flags.error === 'function') {
                    var change = _this._flags.error.call(_this, errors);

                    if (typeof change === 'string') {
                        errors = [_this.createOverrideError('override', { reason: errors }, state, options, change)];
                    } else {
                        errors = [].concat(change).map(function (err) {

                            return err instanceof Error ? err : _this.createOverrideError(err.type || 'override', err.context, state, options, err.message, err.template);
                        });
                    }
                }

                return {
                    value: _this._flags.strip ? undefined : finalValue,
                    finalValue: finalValue,
                    errors: errors.length ? errors : null
                };
            };

            if (this._coerce) {
                var coerced = this._coerce.call(this, value, state, options);
                if (coerced.errors) {
                    value = coerced.value;
                    errors = errors.concat(coerced.errors);
                    return finish(); // Coerced error always aborts early
                }

                value = coerced.value;
            }

            if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
                value = undefined;
            }

            // Check presence requirements

            var presence = this._flags.presence || options.presence;
            if (presence === 'optional') {
                if (value === undefined) {
                    var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
                    if (isDeepDefault && this._type === 'object') {
                        value = {};
                    } else {
                        return finish();
                    }
                }
            } else if (presence === 'required' && value === undefined) {

                errors.push(this.createError('any.required', null, state, options));
                return finish();
            } else if (presence === 'forbidden') {
                if (value === undefined) {
                    return finish();
                }

                errors.push(this.createError('any.unknown', null, state, options));
                return finish();
            }

            // Check allowed and denied values using the original value

            if (this._valids.has(value, state, options, this._flags.insensitive)) {
                return finish();
            }

            if (this._invalids.has(value, state, options, this._flags.insensitive)) {
                errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
                if (options.abortEarly || value === undefined) {
                    // No reason to keep validating missing value

                    return finish();
                }
            }

            // Convert value and validate type

            if (this._base) {
                var base = this._base.call(this, value, state, options);
                if (base.errors) {
                    value = base.value;
                    errors = errors.concat(base.errors);
                    return finish(); // Base error always aborts early
                }

                if (base.value !== value) {
                    value = base.value;

                    // Check allowed and denied values using the converted value

                    if (this._valids.has(value, state, options, this._flags.insensitive)) {
                        return finish();
                    }

                    if (this._invalids.has(value, state, options, this._flags.insensitive)) {
                        errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
                        if (options.abortEarly) {
                            return finish();
                        }
                    }
                }
            }

            // Required values did not match

            if (this._flags.allowOnly) {
                errors.push(this.createError('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
                if (options.abortEarly) {
                    return finish();
                }
            }

            // Helper.validate tests

            for (var i = 0; i < this._tests.length; ++i) {
                var test = this._tests[i];
                var ret = test.func.call(this, value, state, options);
                if (ret instanceof Errors.Err) {
                    errors.push(ret);
                    if (options.abortEarly) {
                        return finish();
                    }
                } else {
                    value = ret;
                }
            }

            return finish();
        }
    }, {
        key: '_validateWithOptions',
        value: function _validateWithOptions(value, options, callback) {

            if (options) {
                this.checkOptions(options);
            }

            var settings = Settings.concat(internals.defaults, options);
            var result = this._validate(value, null, settings);
            var errors = Errors.process(result.errors, value);

            if (callback) {
                return callback(errors, result.value);
            }

            return {
                error: errors,
                value: result.value,
                then: function then(resolve, reject) {

                    if (errors) {
                        return Promise.reject(errors).catch(reject);
                    }

                    return Promise.resolve(result.value).then(resolve);
                },
                catch: function _catch(reject) {

                    if (errors) {
                        return Promise.reject(errors).catch(reject);
                    }

                    return Promise.resolve(result.value);
                }
            };
        }
    }, {
        key: 'validate',
        value: function validate(value, options, callback) {

            if (typeof options === 'function') {
                return this._validateWithOptions(value, null, options);
            }

            return this._validateWithOptions(value, options, callback);
        }
    }, {
        key: 'describe',
        value: function describe() {
            var _this2 = this;

            var description = {
                type: this._type
            };

            var flags = Object.keys(this._flags);
            if (flags.length) {
                if (['empty', 'default', 'lazy', 'label'].some(function (flag) {
                    return _this2._flags.hasOwnProperty(flag);
                })) {
                    description.flags = {};
                    for (var i = 0; i < flags.length; ++i) {
                        var flag = flags[i];
                        if (flag === 'empty') {
                            description.flags[flag] = this._flags[flag].describe();
                        } else if (flag === 'default') {
                            if (Ref.isRef(this._flags[flag])) {
                                description.flags[flag] = this._flags[flag].toString();
                            } else if (typeof this._flags[flag] === 'function') {
                                description.flags[flag] = {
                                    description: this._flags[flag].description,
                                    function: this._flags[flag]
                                };
                            } else {
                                description.flags[flag] = this._flags[flag];
                            }
                        } else if (flag === 'lazy' || flag === 'label') {
                            // We don't want it in the description
                        } else {
                            description.flags[flag] = this._flags[flag];
                        }
                    }
                } else {
                    description.flags = this._flags;
                }
            }

            if (this._settings) {
                description.options = Utils.clone(this._settings);
            }

            if (this._baseType) {
                description.base = this._baseType.describe();
            }

            if (this._description) {
                description.description = this._description;
            }

            if (this._notes.length) {
                description.notes = this._notes;
            }

            if (this._tags.length) {
                description.tags = this._tags;
            }

            if (this._meta.length) {
                description.meta = this._meta;
            }

            if (this._examples.length) {
                description.examples = this._examples;
            }

            if (this._unit) {
                description.unit = this._unit;
            }

            var valids = this._valids.values();
            if (valids.length) {
                description.valids = valids.map(function (v) {

                    return Ref.isRef(v) ? v.toString() : v;
                });
            }

            var invalids = this._invalids.values();
            if (invalids.length) {
                description.invalids = invalids.map(function (v) {

                    return Ref.isRef(v) ? v.toString() : v;
                });
            }

            description.rules = [];

            for (var _i2 = 0; _i2 < this._tests.length; ++_i2) {
                var validator = this._tests[_i2];
                var item = { name: validator.name };

                if (validator.arg !== void 0) {
                    item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
                }

                var options = validator.options;
                if (options) {
                    if (options.hasRef) {
                        item.arg = {};
                        var keys = Object.keys(validator.arg);
                        for (var j = 0; j < keys.length; ++j) {
                            var key = keys[j];
                            var value = validator.arg[key];
                            item.arg[key] = Ref.isRef(value) ? value.toString() : value;
                        }
                    }

                    if (typeof options.description === 'string') {
                        item.description = options.description;
                    } else if (typeof options.description === 'function') {
                        item.description = options.description(item.arg);
                    }
                }

                description.rules.push(item);
            }

            if (!description.rules.length) {
                delete description.rules;
            }

            var label = this._getLabel();
            if (label) {
                description.label = label;
            }

            return description;
        }
    }, {
        key: 'label',
        value: function label(name) {

            Utils.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

            var obj = this.clone();
            obj._flags.label = name;
            return obj;
        }
    }, {
        key: '_getLabel',
        value: function _getLabel(def) {

            return this._flags.label || def;
        }
    }, {
        key: 'schemaType',
        get: function get() {

            return this._type;
        }
    }]);

    return _class;
}();

internals.Any.prototype.isImmutable = true; // Prevents Utils from deep cloning schema objects

// Aliases

internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
internals.Any.prototype.exist = internals.Any.prototype.required;

internals._try = function (fn, args) {

    var err = void 0;
    var result = void 0;

    try {
        result = fn.apply(null, args);
    } catch (e) {
        err = e;
    }

    return {
        value: result,
        error: err
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var Utils = __webpack_require__(1);

// Declare internals

var internals = {};

exports.concat = function (target, source) {

    if (!source) {
        return target;
    }

    var obj = Object.assign({}, target);

    var sKeys = Object.keys(source);
    for (var i = 0; i < sKeys.length; ++i) {
        var key = sKeys[i];
        if (key !== 'language' || !obj.hasOwnProperty(key)) {

            obj[key] = source[key];
        } else {
            obj[key] = Utils.applyToDefaults(obj[key], source[key]);
        }
    }

    return obj;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var Utils = __webpack_require__(1);

// Declare internals

var internals = {};

exports.create = function (key, options) {

    Utils.assert(typeof key === 'string', 'Invalid reference key:', key);

    var settings = Utils.clone(options); // options can be reused and modified

    var ref = function ref(value, validationOptions) {

        return Utils.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
    };

    ref.isContext = key[0] === (settings && settings.contextPrefix || '$');
    ref.key = ref.isContext ? key.slice(1) : key;
    ref.path = ref.key.split(settings && settings.separator || '.');
    ref.depth = ref.path.length;
    ref.root = ref.path[0];
    ref.isJoi = true;

    ref.toString = function () {

        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
    };

    return ref;
};

exports.isRef = function (ref) {

    return typeof ref === 'function' && ref.isJoi;
};

exports.push = function (array, ref) {

    if (exports.isRef(ref) && !ref.isContext) {

        array.push(ref.root);
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = __webpack_require__(1);
var Language = __webpack_require__(6);

// Declare internals

var internals = {
    annotations: Symbol('joi-annotations')
};

internals.stringify = function (value, wrapArrays) {

    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (value === null) {
        return 'null';
    }

    if (type === 'string') {
        return value;
    }

    if (value instanceof exports.Err || type === 'function' || type === 'symbol') {
        return value.toString();
    }

    if (type === 'object') {
        if (Array.isArray(value)) {
            var partial = '';

            for (var i = 0; i < value.length; ++i) {
                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
            }

            return wrapArrays ? '[' + partial + ']' : partial;
        }

        return value.toString();
    }

    return JSON.stringify(value);
};

exports.Err = function () {
    function _class(type, context, state, options, flags, message, template) {
        _classCallCheck(this, _class);

        this.isJoi = true;
        this.type = type;
        this.context = context || {};
        this.context.key = state.path[state.path.length - 1];
        this.context.label = state.key;
        this.path = state.path;
        this.options = options;
        this.flags = flags;
        this.message = message;
        this.template = template;

        var localized = this.options.language;

        if (this.flags.label) {
            this.context.label = this.flags.label;
        } else if (localized && ( // language can be null for arrays exclusion check
        this.context.label === '' || this.context.label === null)) {
            this.context.label = localized.root || Language.errors.root;
        }
    }

    _createClass(_class, [{
        key: 'toString',
        value: function toString() {
            var _this = this;

            if (this.message) {
                return this.message;
            }

            var format = void 0;

            if (this.template) {
                format = this.template;
            }

            var localized = this.options.language;

            format = format || Utils.reach(localized, this.type) || Utils.reach(Language.errors, this.type);

            if (format === undefined) {
                return 'Error code "' + this.type + '" is not defined, your custom type is missing the correct language definition';
            }

            var wrapArrays = Utils.reach(localized, 'messages.wrapArrays');
            if (typeof wrapArrays !== 'boolean') {
                wrapArrays = Language.errors.messages.wrapArrays;
            }

            if (format === null) {
                var childrenString = internals.stringify(this.context.reason, wrapArrays);
                if (wrapArrays) {
                    return childrenString.slice(1, -1);
                }
                return childrenString;
            }

            var hasKey = /\{\{\!?label\}\}/.test(format);
            var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

            if (skipKey) {
                format = format.slice(2);
            }

            if (!hasKey && !skipKey) {
                var localizedKey = Utils.reach(localized, 'key');
                if (typeof localizedKey === 'string') {
                    format = localizedKey + format;
                } else {
                    format = Utils.reach(Language.errors, 'key') + format;
                }
            }

            return format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {

                var value = Utils.reach(_this.context, name);
                var normalized = internals.stringify(value, wrapArrays);
                return isSecure && _this.options.escapeHtml ? Utils.escapeHtml(normalized) : normalized;
            });
        }
    }]);

    return _class;
}();

exports.create = function (type, context, state, options, flags, message, template) {

    return new exports.Err(type, context, state, options, flags, message, template);
};

exports.process = function (errors, object) {

    if (!errors || !errors.length) {
        return null;
    }

    // Construct error

    var message = '';
    var details = [];

    var processErrors = function processErrors(localErrors, parent) {

        for (var i = 0; i < localErrors.length; ++i) {
            var item = localErrors[i];

            if (item instanceof Error) {
                return item;
            }

            if (item.flags.error && typeof item.flags.error !== 'function') {
                return item.flags.error;
            }

            var itemMessage = void 0;
            if (parent === undefined) {
                itemMessage = item.toString();
                message = message + (message ? '. ' : '') + itemMessage;
            }

            // Do not push intermediate errors, we're only interested in leafs

            if (item.context.reason && item.context.reason.length) {
                var _override = processErrors(item.context.reason, item.path);
                if (_override) {
                    return _override;
                }
            } else {
                details.push({
                    message: itemMessage || item.toString(),
                    path: item.path,
                    type: item.type,
                    context: item.context
                });
            }
        }
    };

    var override = processErrors(errors);
    if (override) {
        return override;
    }

    var error = new Error(message);
    error.isJoi = true;
    error.name = 'ValidationError';
    error.details = details;
    error._object = object;
    error.annotate = internals.annotate;
    return error;
};

// Inspired by json-stringify-safe
internals.safeStringify = function (obj, spaces) {

    return JSON.stringify(obj, internals.serializer(), spaces);
};

internals.serializer = function () {

    var keys = [];
    var stack = [];

    var cycleReplacer = function cycleReplacer(key, value) {

        if (stack[0] === value) {
            return '[Circular ~]';
        }

        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
    };

    return function (key, value) {

        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            if (~thisPos) {
                stack.length = thisPos + 1;
                keys.length = thisPos + 1;
                keys[thisPos] = key;
            } else {
                stack.push(this);
                keys.push(key);
            }

            if (~stack.indexOf(value)) {
                value = cycleReplacer.call(this, key, value);
            }
        } else {
            stack.push(value);
        }

        if (value) {
            var annotations = value[internals.annotations];
            if (annotations) {
                if (Array.isArray(value)) {
                    var annotated = [];

                    for (var i = 0; i < value.length; ++i) {
                        if (annotations.errors[i]) {
                            annotated.push('_$idx$_' + annotations.errors[i].sort().join(', ') + '_$end$_');
                        }
                        annotated.push(value[i]);
                    }

                    value = annotated;
                } else {
                    var errorKeys = Object.keys(annotations.errors);
                    for (var _i = 0; _i < errorKeys.length; ++_i) {
                        var errorKey = errorKeys[_i];
                        value[errorKey + '_$key$_' + annotations.errors[errorKey].sort().join(', ') + '_$end$_'] = value[errorKey];
                        value[errorKey] = undefined;
                    }

                    var missingKeys = Object.keys(annotations.missing);
                    for (var _i2 = 0; _i2 < missingKeys.length; ++_i2) {
                        var missingKey = missingKeys[_i2];
                        value['_$miss$_' + missingKey + '|' + annotations.missing[missingKey] + '_$end$_'] = '__missing__';
                    }
                }

                return value;
            }
        }

        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
            return '[' + value.toString() + ']';
        }

        return value;
    };
};

internals.annotate = function (stripColorCodes) {

    var redFgEscape = stripColorCodes ? '' : '\x1B[31m';
    var redBgEscape = stripColorCodes ? '' : '\x1B[41m';
    var endColor = stripColorCodes ? '' : '\x1B[0m';

    if (_typeof(this._object) !== 'object') {
        return this.details[0].message;
    }

    var obj = Utils.clone(this._object || {});

    for (var i = this.details.length - 1; i >= 0; --i) {
        // Reverse order to process deepest child first
        var pos = i + 1;
        var error = this.details[i];
        var path = error.path;
        var ref = obj;
        for (var j = 0;; ++j) {
            var seg = path[j];

            if (ref.isImmutable) {
                ref = ref.clone(); // joi schemas are not cloned by hoek, we have to take this extra step
            }

            if (j + 1 < path.length && ref[seg] && typeof ref[seg] !== 'string') {

                ref = ref[seg];
            } else {
                var refAnnotations = ref[internals.annotations] = ref[internals.annotations] || { errors: {}, missing: {} };
                var value = ref[seg];
                var cacheKey = seg || error.context.label;

                if (value !== undefined) {
                    refAnnotations.errors[cacheKey] = refAnnotations.errors[cacheKey] || [];
                    refAnnotations.errors[cacheKey].push(pos);
                } else {
                    refAnnotations.missing[cacheKey] = pos;
                }

                break;
            }
        }
    }

    var replacers = {
        key: /_\$key\$_([, \d]+)_\$end\$_\"/g,
        missing: /\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g,
        arrayIndex: /\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g,
        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g
    };

    var message = internals.safeStringify(obj, 2).replace(replacers.key, function ($0, $1) {
        return '" ' + redFgEscape + '[' + $1 + ']' + endColor;
    }).replace(replacers.missing, function ($0, $1, $2) {
        return redBgEscape + '"' + $1 + '"' + endColor + redFgEscape + ' [' + $2 + ']: -- missing --' + endColor;
    }).replace(replacers.arrayIndex, function ($0, $1, $2) {
        return '\n' + $2 + ' ' + redFgEscape + '[' + $1 + ']' + endColor;
    }).replace(replacers.specials, function ($0, $1) {
        return $1;
    });

    message = message + '\n' + redFgEscape;

    for (var _i3 = 0; _i3 < this.details.length; ++_i3) {
        var _pos = _i3 + 1;
        message = message + '\n[' + _pos + '] ' + this.details[_i3].message;
    }

    message = message + endColor;

    return message;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules


// Declare internals

var internals = {};

exports.errors = {
    root: 'value',
    key: '"{{!label}}" ',
    messages: {
        wrapArrays: true
    },
    any: {
        unknown: 'is not allowed',
        invalid: 'contains an invalid value',
        empty: 'is not allowed to be empty',
        required: 'is required',
        allowOnly: 'must be one of {{valids}}',
        default: 'threw an error when running default method'
    },
    alternatives: {
        base: 'not matching any of the allowed alternatives',
        child: null
    },
    array: {
        base: 'must be an array',
        includes: 'at position {{pos}} does not match any of the allowed types',
        includesSingle: 'single value of "{{!label}}" does not match any of the allowed types',
        includesOne: 'at position {{pos}} fails because {{reason}}',
        includesOneSingle: 'single value of "{{!label}}" fails because {{reason}}',
        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
        includesRequiredKnowns: 'does not contain {{knownMisses}}',
        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
        excludes: 'at position {{pos}} contains an excluded value',
        excludesSingle: 'single value of "{{!label}}" contains an excluded value',
        min: 'must contain at least {{limit}} items',
        max: 'must contain less than or equal to {{limit}} items',
        length: 'must contain {{limit}} items',
        ordered: 'at position {{pos}} fails because {{reason}}',
        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
        ref: 'references "{{ref}}" which is not a positive integer',
        sparse: 'must not be a sparse array',
        unique: 'position {{pos}} contains a duplicate value'
    },
    boolean: {
        base: 'must be a boolean'
    },
    // binary: {
    //     base: 'must be a buffer or a string',
    //     min: 'must be at least {{limit}} bytes',
    //     max: 'must be less than or equal to {{limit}} bytes',
    //     length: 'must be {{limit}} bytes'
    // },
    date: {
        base: 'must be a number of milliseconds or valid date string',
        format: 'must be a string with one of the following formats {{format}}',
        strict: 'must be a valid date',
        min: 'must be larger than or equal to "{{limit}}"',
        max: 'must be less than or equal to "{{limit}}"',
        isoDate: 'must be a valid ISO 8601 date',
        timestamp: {
            javascript: 'must be a valid timestamp or number of milliseconds',
            unix: 'must be a valid timestamp or number of seconds'
        },
        ref: 'references "{{ref}}" which is not a date'
    },
    function: {
        base: 'must be a Function',
        arity: 'must have an arity of {{n}}',
        minArity: 'must have an arity greater or equal to {{n}}',
        maxArity: 'must have an arity lesser or equal to {{n}}',
        ref: 'must be a Joi reference',
        class: 'must be a class'
    },
    lazy: {
        base: '!!schema error: lazy schema must be set',
        schema: '!!schema error: lazy schema function must return a schema'
    },
    object: {
        base: 'must be an object',
        child: '!!child "{{!child}}" fails because {{reason}}',
        min: 'must have at least {{limit}} children',
        max: 'must have less than or equal to {{limit}} children',
        length: 'must have {{limit}} children',
        allowUnknown: '!!"{{!child}}" is not allowed',
        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
        missing: 'must contain at least one of {{peersWithLabels}}',
        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
        or: 'must contain at least one of {{peersWithLabels}}',
        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
        rename: {
            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists',
            regex: {
                multiple: 'cannot rename children {{from}} because multiple renames are disabled and another key was already renamed to "{{to}}"',
                override: 'cannot rename children {{from}} because override is disabled and target "{{to}}" exists'
            }
        },
        type: 'must be an instance of "{{type}}"',
        schema: 'must be a Joi instance'
    },
    number: {
        base: 'must be a number',
        min: 'must be larger than or equal to {{limit}}',
        max: 'must be less than or equal to {{limit}}',
        less: 'must be less than {{limit}}',
        greater: 'must be greater than {{limit}}',
        float: 'must be a float or double',
        integer: 'must be an integer',
        negative: 'must be a negative number',
        positive: 'must be a positive number',
        precision: 'must have no more than {{limit}} decimal places',
        ref: 'references "{{ref}}" which is not a number',
        multiple: 'must be a multiple of {{multiple}}',
        port: 'must be a valid port'
    },
    string: {
        base: 'must be a string',
        min: 'length must be at least {{limit}} characters long',
        max: 'length must be less than or equal to {{limit}} characters long',
        length: 'length must be {{limit}} characters long',
        alphanum: 'must only contain alpha-numeric characters',
        token: 'must only contain alpha-numeric and underscore characters',
        regex: {
            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
            invert: {
                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
            }
        },
        email: 'must be a valid email',
        uri: 'must be a valid uri',
        uriRelativeOnly: 'must be a valid relative uri',
        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
        isoDate: 'must be a valid ISO 8601 date',
        guid: 'must be a valid GUID',
        hex: 'must only contain hexadecimal characters',
        base64: 'must be a valid base64 string',
        hostname: 'must be a valid hostname',
        normalize: 'must be unicode normalized in the {{form}} form',
        lowercase: 'must only contain lowercase characters',
        uppercase: 'must only contain uppercase characters',
        trim: 'must not have leading or trailing whitespace',
        creditCard: 'must be a credit card',
        ref: 'references "{{ref}}" which is not a number',
        ip: 'must be a valid ip address with a {{cidr}} CIDR',
        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ref = __webpack_require__(4);

module.exports = function () {
    function Set() {
        _classCallCheck(this, Set);

        this._set = [];
    }

    _createClass(Set, [{
        key: 'add',
        value: function add(value, refs) {

            if (!Ref.isRef(value) && this.has(value, null, null, false)) {

                return;
            }

            if (refs !== undefined) {
                // If it's a merge, we don't have any refs
                Ref.push(refs, value);
            }

            this._set.push(value);
            return this;
        }
    }, {
        key: 'merge',
        value: function merge(add, remove) {

            for (var i = 0; i < add._set.length; ++i) {
                this.add(add._set[i]);
            }

            for (var _i = 0; _i < remove._set.length; ++_i) {
                this.remove(remove._set[_i]);
            }

            return this;
        }
    }, {
        key: 'remove',
        value: function remove(value) {

            this._set = this._set.filter(function (item) {
                return value !== item;
            });
            return this;
        }
    }, {
        key: 'has',
        value: function has(value, state, options, insensitive) {

            for (var i = 0; i < this._set.length; ++i) {
                var items = this._set[i];

                if (state && Ref.isRef(items)) {
                    // Only resolve references if there is a state, otherwise it's a merge
                    items = items(state.reference || state.parent, options);
                }

                if (!Array.isArray(items)) {
                    items = [items];
                }

                for (var j = 0; j < items.length; ++j) {
                    var item = items[j];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== (typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
                        continue;
                    }

                    if (value === item || value instanceof Date && item instanceof Date && value.getTime() === item.getTime() || insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase()) {

                        return true;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'values',
        value: function values(options) {

            if (options && options.stripUndefined) {
                var values = [];

                for (var i = 0; i < this._set.length; ++i) {
                    var item = this._set[i];
                    if (item !== undefined) {
                        values.push(item);
                    }
                }

                return values;
            }

            return this._set.slice();
        }
    }, {
        key: 'slice',
        value: function slice() {

            var newSet = new Set();
            newSet._set = this._set.slice();

            return newSet;
        }
    }, {
        key: 'concat',
        value: function concat(source) {

            var newSet = new Set();
            newSet._set = this._set.concat(source._set);

            return newSet;
        }
    }]);

    return Set;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Utils = __webpack_require__(1);
var Ref = __webpack_require__(4);

// Type modules are delay-loaded to prevent circular dependencies


// Declare internals

var internals = {};

exports.schema = function (Joi, config) {

    if (config !== undefined && config !== null && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {

        if (config.isJoi) {
            return config;
        }

        if (Array.isArray(config)) {
            return Joi.alternatives().try(config);
        }

        if (config instanceof RegExp) {
            return Joi.string().regex(config);
        }

        if (config instanceof Date) {
            return Joi.date().valid(config);
        }

        return Joi.object().keys(config);
    }

    if (typeof config === 'string') {
        return Joi.string().valid(config);
    }

    if (typeof config === 'number') {
        return Joi.number().valid(config);
    }

    if (typeof config === 'boolean') {
        return Joi.boolean().valid(config);
    }

    if (Ref.isRef(config)) {
        return Joi.valid(config);
    }

    Utils.assert(config === null, 'Invalid schema content:', config);

    return Joi.valid(null);
};

exports.ref = function (id) {

    return Ref.isRef(id) ? id : Ref.create(id);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var Joi = __webpack_require__(0);

// Declare internals

var internals = {};

exports.options = Joi.object({
    abortEarly: Joi.boolean(),
    convert: Joi.boolean(),
    allowUnknown: Joi.boolean(),
    skipFunctions: Joi.boolean(),
    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
    language: Joi.object(),
    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
    raw: Joi.boolean(),
    context: Joi.object(),
    strip: Joi.boolean(),
    noDefaults: Joi.boolean(),
    escapeHtml: Joi.boolean()
}).strict();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = __webpack_require__(1);
var Any = __webpack_require__(2);
var Cast = __webpack_require__(8);
var Ref = __webpack_require__(4);

// Declare internals

var internals = {};

internals.Alternatives = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'alternatives';
        _this._invalids.remove(null);
        _this._inner.matches = [];
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var errors = [];
            var il = this._inner.matches.length;
            var baseType = this._baseType;

            for (var i = 0; i < il; ++i) {
                var item = this._inner.matches[i];
                if (!item.schema) {
                    var schema = item.peek || item.is;
                    var input = item.is ? item.ref(state.reference || state.parent, options) : value;
                    var failed = schema._validate(input, null, options, state.parent).errors;

                    if (failed) {
                        if (item.otherwise) {
                            return item.otherwise._validate(value, state, options);
                        }
                    } else if (item.then) {
                        return item.then._validate(value, state, options);
                    }

                    if (i === il - 1 && baseType) {
                        return baseType._validate(value, state, options);
                    }

                    continue;
                }

                var result = item.schema._validate(value, state, options);
                if (!result.errors) {
                    // Found a valid match
                    return result;
                }

                errors = errors.concat(result.errors);
            }

            if (errors.length) {
                return { errors: this.createError('alternatives.child', { reason: errors }, state, options) };
            }

            return { errors: this.createError('alternatives.base', null, state, options) };
        }
    }, {
        key: 'try',
        value: function _try() {
            for (var _len = arguments.length, schemas = Array(_len), _key = 0; _key < _len; _key++) {
                schemas[_key] = arguments[_key];
            }

            schemas = Utils.flatten(schemas);
            Utils.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

            var obj = this.clone();

            for (var i = 0; i < schemas.length; ++i) {
                var cast = Cast.schema(this._currentJoi, schemas[i]);
                if (cast._refs.length) {
                    obj._refs = obj._refs.concat(cast._refs);
                }
                obj._inner.matches.push({ schema: cast });
            }

            return obj;
        }
    }, {
        key: 'when',
        value: function when(condition, options) {

            var schemaCondition = false;
            Utils.assert(Ref.isRef(condition) || typeof condition === 'string' || (schemaCondition = condition instanceof Any), 'Invalid condition:', condition);
            Utils.assert(options, 'Missing options');
            Utils.assert((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
            if (schemaCondition) {
                Utils.assert(!options.hasOwnProperty('is'), '"is" can not be used with a schema condition');
            } else {
                Utils.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
            }
            Utils.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

            var obj = this.clone();
            var is = void 0;
            if (!schemaCondition) {
                is = Cast.schema(this._currentJoi, options.is);

                if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {

                    // Only apply required if this wasn't already a schema or a ref, we'll suppose people know what they're doing
                    is = is.required();
                }
            }

            var item = {
                ref: schemaCondition ? null : Cast.ref(condition),
                peek: schemaCondition ? condition : null,
                is: is,
                then: options.then !== undefined ? Cast.schema(this._currentJoi, options.then) : undefined,
                otherwise: options.otherwise !== undefined ? Cast.schema(this._currentJoi, options.otherwise) : undefined
            };

            if (obj._baseType) {

                item.then = item.then && obj._baseType.concat(item.then);
                item.otherwise = item.otherwise && obj._baseType.concat(item.otherwise);
            }

            if (!schemaCondition) {
                Ref.push(obj._refs, item.ref);
                obj._refs = obj._refs.concat(item.is._refs);
            }

            if (item.then && item.then._refs) {
                obj._refs = obj._refs.concat(item.then._refs);
            }

            if (item.otherwise && item.otherwise._refs) {
                obj._refs = obj._refs.concat(item.otherwise._refs);
            }

            obj._inner.matches.push(item);

            return obj;
        }
    }, {
        key: 'describe',
        value: function describe() {

            var description = Any.prototype.describe.call(this);
            var alternatives = [];
            for (var i = 0; i < this._inner.matches.length; ++i) {
                var item = this._inner.matches[i];
                if (item.schema) {

                    // try()

                    alternatives.push(item.schema.describe());
                } else {

                    // when()

                    var when = item.is ? {
                        ref: item.ref.toString(),
                        is: item.is.describe()
                    } : {
                        peek: item.peek.describe()
                    };

                    if (item.then) {
                        when.then = item.then.describe();
                    }

                    if (item.otherwise) {
                        when.otherwise = item.otherwise.describe();
                    }

                    alternatives.push(when);
                }
            }

            description.alternatives = alternatives;
            return description;
        }
    }]);

    return _class;
}(Any);

module.exports = new internals.Alternatives();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Any = __webpack_require__(2);
var Utils = __webpack_require__(1);

// Declare internals

var internals = {};

internals.Lazy = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'lazy';
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var result = { value: value };
            var lazy = this._flags.lazy;

            if (!lazy) {
                result.errors = this.createError('lazy.base', null, state, options);
                return result;
            }

            var schema = lazy();

            if (!(schema instanceof Any)) {
                result.errors = this.createError('lazy.schema', null, state, options);
                return result;
            }

            return schema._validate(value, state, options);
        }
    }, {
        key: 'set',
        value: function set(fn) {

            Utils.assert(typeof fn === 'function', 'You must provide a function as first argument');

            var obj = this.clone();
            obj._flags.lazy = fn;
            return obj;
        }
    }]);

    return _class;
}(Any);

module.exports = new internals.Lazy();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Any = __webpack_require__(2);
var Cast = __webpack_require__(8);
var Ref = __webpack_require__(4);
var Utils = __webpack_require__(1);

// Declare internals

var internals = {};

internals.fastSplice = function (arr, i) {

    var pos = i;
    while (pos < arr.length) {
        arr[pos++] = arr[pos];
    }

    --arr.length;
};

internals.Array = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'array';
        _this._inner.items = [];
        _this._inner.ordereds = [];
        _this._inner.inclusions = [];
        _this._inner.exclusions = [];
        _this._inner.requireds = [];
        _this._flags.sparse = false;
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var result = {
                value: value
            };

            if (typeof value === 'string' && options.convert) {

                internals.safeParse(value, result);
            }

            var isArray = Array.isArray(result.value);
            var wasArray = isArray;
            if (options.convert && this._flags.single && !isArray) {
                result.value = [result.value];
                isArray = true;
            }

            if (!isArray) {
                result.errors = this.createError('array.base', null, state, options);
                return result;
            }

            if (this._inner.inclusions.length || this._inner.exclusions.length || this._inner.requireds.length || this._inner.ordereds.length || !this._flags.sparse) {

                // Clone the array so that we don't modify the original
                if (wasArray) {
                    result.value = result.value.slice(0);
                }

                result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

                if (result.errors && wasArray && options.convert && this._flags.single) {

                    // Attempt a 2nd pass by putting the array inside one.
                    var previousErrors = result.errors;

                    result.value = [result.value];
                    result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

                    if (result.errors) {

                        // Restore previous errors and value since this didn't validate either.
                        result.errors = previousErrors;
                        result.value = result.value[0];
                    }
                }
            }

            return result;
        }
    }, {
        key: '_checkItems',
        value: function _checkItems(items, wasArray, state, options) {

            var errors = [];
            var errored = void 0;

            var requireds = this._inner.requireds.slice();
            var ordereds = this._inner.ordereds.slice();
            var inclusions = this._inner.inclusions.concat(requireds);

            var il = items.length;
            for (var i = 0; i < il; ++i) {
                errored = false;
                var item = items[i];
                var isValid = false;
                var key = wasArray ? i : state.key;
                var path = wasArray ? state.path.concat(i) : state.path;
                var localState = { key: key, path: path, parent: state.parent, reference: state.reference };
                var res = void 0;

                // Sparse

                if (!this._flags.sparse && item === undefined) {
                    errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                    if (options.abortEarly) {
                        return errors;
                    }

                    ordereds.shift();

                    continue;
                }

                // Exclusions

                for (var j = 0; j < this._inner.exclusions.length; ++j) {
                    res = this._inner.exclusions[j]._validate(item, localState, {}); // Not passing options to use defaults

                    if (!res.errors) {
                        errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
                        errored = true;

                        if (options.abortEarly) {
                            return errors;
                        }

                        ordereds.shift();

                        break;
                    }
                }

                if (errored) {
                    continue;
                }

                // Ordered
                if (this._inner.ordereds.length) {
                    if (ordereds.length > 0) {
                        var ordered = ordereds.shift();
                        res = ordered._validate(item, localState, options);
                        if (!res.errors) {
                            if (ordered._flags.strip) {
                                internals.fastSplice(items, i);
                                --i;
                                --il;
                            } else if (!this._flags.sparse && res.value === undefined) {
                                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                                if (options.abortEarly) {
                                    return errors;
                                }

                                continue;
                            } else {
                                items[i] = res.value;
                            }
                        } else {
                            errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
                            if (options.abortEarly) {
                                return errors;
                            }
                        }
                        continue;
                    } else if (!this._inner.items.length) {
                        errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
                        if (options.abortEarly) {
                            return errors;
                        }
                        continue;
                    }
                }

                // Requireds

                var requiredChecks = [];
                var jl = requireds.length;
                for (var _j = 0; _j < jl; ++_j) {
                    res = requiredChecks[_j] = requireds[_j]._validate(item, localState, options);
                    if (!res.errors) {
                        items[i] = res.value;
                        isValid = true;
                        internals.fastSplice(requireds, _j);
                        --_j;
                        --jl;

                        if (!this._flags.sparse && res.value === undefined) {
                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                            if (options.abortEarly) {
                                return errors;
                            }
                        }

                        break;
                    }
                }

                if (isValid) {
                    continue;
                }

                // Inclusions

                var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.arrays : false;

                jl = inclusions.length;
                for (var _j2 = 0; _j2 < jl; ++_j2) {
                    var inclusion = inclusions[_j2];

                    // Avoid re-running requireds that already didn't match in the previous loop
                    var previousCheck = requireds.indexOf(inclusion);
                    if (previousCheck !== -1) {
                        res = requiredChecks[previousCheck];
                    } else {
                        res = inclusion._validate(item, localState, options);

                        if (!res.errors) {
                            if (inclusion._flags.strip) {
                                internals.fastSplice(items, i);
                                --i;
                                --il;
                            } else if (!this._flags.sparse && res.value === undefined) {
                                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
                                errored = true;
                            } else {
                                items[i] = res.value;
                            }
                            isValid = true;
                            break;
                        }
                    }

                    // Return the actual error if only one inclusion defined
                    if (jl === 1) {
                        if (stripUnknown) {
                            internals.fastSplice(items, i);
                            --i;
                            --il;
                            isValid = true;
                            break;
                        }

                        errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
                        errored = true;

                        if (options.abortEarly) {
                            return errors;
                        }

                        break;
                    }
                }

                if (errored) {
                    continue;
                }

                if (this._inner.inclusions.length && !isValid) {
                    if (stripUnknown) {
                        internals.fastSplice(items, i);
                        --i;
                        --il;
                        continue;
                    }

                    errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));

                    if (options.abortEarly) {
                        return errors;
                    }
                }
            }

            if (requireds.length) {
                this._fillMissedErrors.call(this, errors, requireds, state, options);
            }

            if (ordereds.length) {
                this._fillOrderedErrors.call(this, errors, ordereds, state, options);
            }

            return errors.length ? errors : null;
        }
    }, {
        key: 'describe',
        value: function describe() {

            var description = Any.prototype.describe.call(this);

            if (this._inner.ordereds.length) {
                description.orderedItems = [];

                for (var i = 0; i < this._inner.ordereds.length; ++i) {
                    description.orderedItems.push(this._inner.ordereds[i].describe());
                }
            }

            if (this._inner.items.length) {
                description.items = [];

                for (var _i = 0; _i < this._inner.items.length; ++_i) {
                    description.items.push(this._inner.items[_i].describe());
                }
            }

            return description;
        }
    }, {
        key: 'items',
        value: function items() {
            var _this2 = this;

            var obj = this.clone();

            for (var _len = arguments.length, schemas = Array(_len), _key = 0; _key < _len; _key++) {
                schemas[_key] = arguments[_key];
            }

            Utils.flatten(schemas).forEach(function (type, index) {

                try {
                    type = Cast.schema(_this2._currentJoi, type);
                } catch (castErr) {
                    if (castErr.hasOwnProperty('path')) {
                        castErr.path = index + '.' + castErr.path;
                    } else {
                        castErr.path = index;
                    }
                    castErr.message = castErr.message + '(' + castErr.path + ')';
                    throw castErr;
                }

                obj._inner.items.push(type);

                if (type._flags.presence === 'required') {
                    obj._inner.requireds.push(type);
                } else if (type._flags.presence === 'forbidden') {
                    obj._inner.exclusions.push(type.optional());
                } else {
                    obj._inner.inclusions.push(type);
                }
            });

            return obj;
        }
    }, {
        key: 'ordered',
        value: function ordered() {
            var _this3 = this;

            var obj = this.clone();

            for (var _len2 = arguments.length, schemas = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                schemas[_key2] = arguments[_key2];
            }

            Utils.flatten(schemas).forEach(function (type, index) {

                try {
                    type = Cast.schema(_this3._currentJoi, type);
                } catch (castErr) {
                    if (castErr.hasOwnProperty('path')) {
                        castErr.path = index + '.' + castErr.path;
                    } else {
                        castErr.path = index;
                    }
                    castErr.message = castErr.message + '(' + castErr.path + ')';
                    throw castErr;
                }
                obj._inner.ordereds.push(type);
            });

            return obj;
        }
    }, {
        key: 'min',
        value: function min(limit) {

            var isRef = Ref.isRef(limit);

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

            return this._test('min', limit, function (value, state, options) {

                var compareTo = void 0;
                if (isRef) {
                    compareTo = limit(state.reference || state.parent, options);

                    if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                        return this.createError('array.ref', { ref: limit.key }, state, options);
                    }
                } else {
                    compareTo = limit;
                }

                if (value.length >= compareTo) {
                    return value;
                }

                return this.createError('array.min', { limit: limit, value: value }, state, options);
            });
        }
    }, {
        key: 'max',
        value: function max(limit) {

            var isRef = Ref.isRef(limit);

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

            return this._test('max', limit, function (value, state, options) {

                var compareTo = void 0;
                if (isRef) {
                    compareTo = limit(state.reference || state.parent, options);

                    if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                        return this.createError('array.ref', { ref: limit.key }, state, options);
                    }
                } else {
                    compareTo = limit;
                }

                if (value.length <= compareTo) {
                    return value;
                }

                return this.createError('array.max', { limit: limit, value: value }, state, options);
            });
        }
    }, {
        key: 'length',
        value: function length(limit) {

            var isRef = Ref.isRef(limit);

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

            return this._test('length', limit, function (value, state, options) {

                var compareTo = void 0;
                if (isRef) {
                    compareTo = limit(state.reference || state.parent, options);

                    if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                        return this.createError('array.ref', { ref: limit.key }, state, options);
                    }
                } else {
                    compareTo = limit;
                }

                if (value.length === compareTo) {
                    return value;
                }

                return this.createError('array.length', { limit: limit, value: value }, state, options);
            });
        }
    }, {
        key: 'unique',
        value: function unique(comparator) {

            Utils.assert(comparator === undefined || typeof comparator === 'function' || typeof comparator === 'string', 'comparator must be a function or a string');

            var settings = {};

            if (typeof comparator === 'string') {
                settings.path = comparator;
            } else if (typeof comparator === 'function') {
                settings.comparator = comparator;
            }

            return this._test('unique', settings, function (value, state, options) {

                var found = {
                    string: {},
                    number: {},
                    undefined: {},
                    boolean: {},
                    object: new Map(),
                    function: new Map(),
                    custom: new Map()
                };

                var compare = settings.comparator || Utils.deepEqual;

                for (var i = 0; i < value.length; ++i) {
                    var item = settings.path ? Utils.reach(value[i], settings.path) : value[i];
                    var records = settings.comparator ? found.custom : found[typeof item === 'undefined' ? 'undefined' : _typeof(item)];

                    // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
                    // I still want to keep the test for future js versions with new types (eg. Symbol).
                    if ( /* $lab:coverage:off$ */records /* $lab:coverage:on$ */) {
                            if (records instanceof Map) {
                                var entries = records.entries();
                                var current = void 0;
                                while (!(current = entries.next()).done) {
                                    if (compare(current.value[0], item)) {
                                        var localState = {
                                            key: state.key,
                                            path: state.path.concat(i),
                                            parent: state.parent,
                                            reference: state.reference
                                        };

                                        var context = {
                                            pos: i,
                                            value: value[i],
                                            dupePos: current.value[1],
                                            dupeValue: value[current.value[1]]
                                        };

                                        if (settings.path) {
                                            context.path = settings.path;
                                        }

                                        return this.createError('array.unique', context, localState, options);
                                    }
                                }

                                records.set(item, i);
                            } else {
                                if (records[item] !== undefined) {
                                    var _localState = {
                                        key: state.key,
                                        path: state.path.concat(i),
                                        parent: state.parent,
                                        reference: state.reference
                                    };

                                    var _context = {
                                        pos: i,
                                        value: value[i],
                                        dupePos: records[item],
                                        dupeValue: value[records[item]]
                                    };

                                    if (settings.path) {
                                        _context.path = settings.path;
                                    }

                                    return this.createError('array.unique', _context, _localState, options);
                                }

                                records[item] = i;
                            }
                        }
                }

                return value;
            });
        }
    }, {
        key: 'sparse',
        value: function sparse(enabled) {

            var value = enabled === undefined ? true : !!enabled;

            if (this._flags.sparse === value) {
                return this;
            }

            var obj = this.clone();
            obj._flags.sparse = value;
            return obj;
        }
    }, {
        key: 'single',
        value: function single(enabled) {

            var value = enabled === undefined ? true : !!enabled;

            if (this._flags.single === value) {
                return this;
            }

            var obj = this.clone();
            obj._flags.single = value;
            return obj;
        }
    }, {
        key: '_fillMissedErrors',
        value: function _fillMissedErrors(errors, requireds, state, options) {

            var knownMisses = [];
            var unknownMisses = 0;
            for (var i = 0; i < requireds.length; ++i) {
                var label = requireds[i]._getLabel();
                if (label) {
                    knownMisses.push(label);
                } else {
                    ++unknownMisses;
                }
            }

            if (knownMisses.length) {
                if (unknownMisses) {
                    errors.push(this.createError('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
                } else {
                    errors.push(this.createError('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
                }
            } else {
                errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
            }
        }
    }, {
        key: '_fillOrderedErrors',
        value: function _fillOrderedErrors(errors, ordereds, state, options) {

            var requiredOrdereds = [];

            for (var i = 0; i < ordereds.length; ++i) {
                var presence = Utils.reach(ordereds[i], '_flags.presence');
                if (presence === 'required') {
                    requiredOrdereds.push(ordereds[i]);
                }
            }

            if (requiredOrdereds.length) {
                this._fillMissedErrors.call(this, errors, requiredOrdereds, state, options);
            }
        }
    }]);

    return _class;
}(Any);

internals.safeParse = function (value, result) {

    try {
        var converted = JSON.parse(value);
        if (Array.isArray(converted)) {
            result.value = converted;
        }
    } catch (e) {}
};

module.exports = new internals.Array();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Any = __webpack_require__(2);
var Utils = __webpack_require__(1);

// Declare internals

var internals = {
    Set: __webpack_require__(7)
};

internals.Boolean = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'boolean';
        _this._flags.insensitive = true;
        _this._inner.truthySet = new internals.Set();
        _this._inner.falsySet = new internals.Set();
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var result = {
                value: value
            };

            if (typeof value === 'string' && options.convert) {

                var normalized = this._flags.insensitive ? value.toLowerCase() : value;
                result.value = normalized === 'true' ? true : normalized === 'false' ? false : value;
            }

            if (typeof result.value !== 'boolean') {
                result.value = this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true : this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value;
            }

            result.errors = typeof result.value === 'boolean' ? null : this.createError('boolean.base', null, state, options);
            return result;
        }
    }, {
        key: 'truthy',
        value: function truthy() {
            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
            }

            var obj = this.clone();
            values = Utils.flatten(values);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];

                Utils.assert(value !== undefined, 'Cannot call truthy with undefined');
                obj._inner.truthySet.add(value);
            }
            return obj;
        }
    }, {
        key: 'falsy',
        value: function falsy() {
            for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                values[_key2] = arguments[_key2];
            }

            var obj = this.clone();
            values = Utils.flatten(values);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];

                Utils.assert(value !== undefined, 'Cannot call falsy with undefined');
                obj._inner.falsySet.add(value);
            }
            return obj;
        }
    }, {
        key: 'insensitive',
        value: function insensitive(enabled) {

            var insensitive = enabled === undefined ? true : !!enabled;

            if (this._flags.insensitive === insensitive) {
                return this;
            }

            var obj = this.clone();
            obj._flags.insensitive = insensitive;
            return obj;
        }
    }, {
        key: 'describe',
        value: function describe() {

            var description = Any.prototype.describe.call(this);
            description.truthy = [true].concat(this._inner.truthySet.values());
            description.falsy = [false].concat(this._inner.falsySet.values());
            return description;
        }
    }]);

    return _class;
}(Any);

module.exports = new internals.Boolean();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Any = __webpack_require__(2);
var Ref = __webpack_require__(4);
var Utils = __webpack_require__(1);

// Declare internals

var internals = {};

internals.isoDate = /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
internals.invalidDate = new Date('');
internals.isIsoDate = function () {

    var isoString = internals.isoDate.toString();

    return function (date) {

        return date && date.toString() === isoString;
    };
}();

internals.Date = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'date';
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var result = {
                value: options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier) || value
            };

            if (result.value instanceof Date && !isNaN(result.value.getTime())) {
                result.errors = null;
            } else if (!options.convert) {
                result.errors = this.createError('date.strict', null, state, options);
            } else {
                var type = void 0;
                if (internals.isIsoDate(this._flags.format)) {
                    type = 'isoDate';
                } else if (this._flags.timestamp) {
                    type = 'timestamp.' + this._flags.timestamp;
                } else {
                    type = 'base';
                }

                result.errors = this.createError('date.' + type, null, state, options);
            }

            return result;
        }
    }, {
        key: 'iso',
        value: function iso() {

            if (this._flags.format === internals.isoDate) {
                return this;
            }

            var obj = this.clone();
            obj._flags.format = internals.isoDate;
            return obj;
        }
    }, {
        key: 'timestamp',
        value: function timestamp() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'javascript';


            var allowed = ['javascript', 'unix'];
            Utils.assert(allowed.includes(type), '"type" must be one of "' + allowed.join('", "') + '"');

            if (this._flags.timestamp === type) {
                return this;
            }

            var obj = this.clone();
            obj._flags.timestamp = type;
            obj._flags.multiplier = type === 'unix' ? 1000 : 1;
            return obj;
        }
    }, {
        key: '_isIsoDate',
        value: function _isIsoDate(value) {

            return internals.isoDate.test(value);
        }
    }], [{
        key: 'toDate',
        value: function toDate(value, format, timestamp, multiplier) {

            if (value instanceof Date) {
                return value;
            }

            if (typeof value === 'string' || typeof value === 'number' && !isNaN(value) && isFinite(value)) {

                if (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value)) {

                    value = parseFloat(value);
                }

                var date = void 0;
                if (format && internals.isIsoDate(format)) {
                    date = format.test(value) ? new Date(value) : internals.invalidDate;
                } else if (timestamp && multiplier) {
                    date = /^\s*$/.test(value) ? internals.invalidDate : new Date(value * multiplier);
                } else {
                    date = new Date(value);
                }

                if (!isNaN(date.getTime())) {
                    return date;
                }
            }

            return null;
        }
    }]);

    return _class;
}(Any);

internals.compare = function (type, compare) {

    return function (date) {

        var isNow = date === 'now';
        var isRef = Ref.isRef(date);

        if (!isNow && !isRef) {
            date = internals.Date.toDate(date);
        }

        Utils.assert(date, 'Invalid date format');

        return this._test(type, date, function (value, state, options) {

            var compareTo = void 0;
            if (isNow) {
                compareTo = Date.now();
            } else if (isRef) {
                compareTo = internals.Date.toDate(date(state.reference || state.parent, options));

                if (!compareTo) {
                    return this.createError('date.ref', { ref: date.key }, state, options);
                }

                compareTo = compareTo.getTime();
            } else {
                compareTo = date.getTime();
            }

            if (compare(value.getTime(), compareTo)) {
                return value;
            }

            return this.createError('date.' + type, { limit: new Date(compareTo) }, state, options);
        });
    };
};
internals.Date.prototype.min = internals.compare('min', function (value, date) {
    return value >= date;
});
internals.Date.prototype.max = internals.compare('max', function (value, date) {
    return value <= date;
});

module.exports = new internals.Date();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = __webpack_require__(1);
var ObjectType = __webpack_require__(16);
var Ref = __webpack_require__(4);

// Declare internals

var internals = {};

internals.Func = function (_ObjectType$construct) {
    _inherits(_class, _ObjectType$construct);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._flags.func = true;
        return _this;
    }

    _createClass(_class, [{
        key: 'arity',
        value: function arity(n) {

            Utils.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

            return this._test('arity', n, function (value, state, options) {

                if (value.length === n) {
                    return value;
                }

                return this.createError('function.arity', { n: n }, state, options);
            });
        }
    }, {
        key: 'minArity',
        value: function minArity(n) {

            Utils.assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');

            return this._test('minArity', n, function (value, state, options) {

                if (value.length >= n) {
                    return value;
                }

                return this.createError('function.minArity', { n: n }, state, options);
            });
        }
    }, {
        key: 'maxArity',
        value: function maxArity(n) {

            Utils.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

            return this._test('maxArity', n, function (value, state, options) {

                if (value.length <= n) {
                    return value;
                }

                return this.createError('function.maxArity', { n: n }, state, options);
            });
        }
    }, {
        key: 'ref',
        value: function ref() {

            return this._test('ref', null, function (value, state, options) {

                if (Ref.isRef(value)) {
                    return value;
                }

                return this.createError('function.ref', null, state, options);
            });
        }
    }, {
        key: 'class',
        value: function _class() {

            return this._test('class', null, function (value, state, options) {

                if (/^\s*class\s/.test(value.toString())) {
                    return value;
                }

                return this.createError('function.class', null, state, options);
            });
        }
    }]);

    return _class;
}(ObjectType.constructor);

module.exports = new internals.Func();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = __webpack_require__(1);
var Topo = __webpack_require__(17);
var Any = __webpack_require__(2);
var Errors = __webpack_require__(5);
var Cast = __webpack_require__(8);

// Declare internals

var internals = {};

internals.Object = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'object';
        _this._inner.children = null;
        _this._inner.renames = [];
        _this._inner.dependencies = [];
        _this._inner.patterns = [];
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var target = value;
            var errors = [];
            var finish = function finish() {

                return {
                    value: target,
                    errors: errors.length ? errors : null
                };
            };

            if (typeof value === 'string' && options.convert) {

                value = internals.safeParse(value);
            }

            var type = this._flags.func ? 'function' : 'object';
            if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== type || Array.isArray(value)) {

                errors.push(this.createError(type + '.base', null, state, options));
                return finish();
            }

            // Skip if there are no other rules to test

            if (!this._inner.renames.length && !this._inner.dependencies.length && !this._inner.children && // null allows any keys
            !this._inner.patterns.length) {

                target = value;
                return finish();
            }

            // Ensure target is a local copy (parsed) or shallow copy

            if (target === value) {
                if (type === 'object') {
                    target = Object.create(Object.getPrototypeOf(value));
                } else {
                    target = function target() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        return value.apply(this, args);
                    };

                    target.prototype = Utils.clone(value.prototype);
                }

                var valueKeys = Object.keys(value);
                for (var i = 0; i < valueKeys.length; ++i) {
                    target[valueKeys[i]] = value[valueKeys[i]];
                }
            } else {
                target = value;
            }

            // Rename keys

            var renamed = {};
            for (var _i = 0; _i < this._inner.renames.length; ++_i) {
                var rename = this._inner.renames[_i];

                if (rename.isRegExp) {
                    var targetKeys = Object.keys(target);
                    var matchedTargetKeys = [];

                    for (var j = 0; j < targetKeys.length; ++j) {
                        if (rename.from.test(targetKeys[j])) {
                            matchedTargetKeys.push(targetKeys[j]);
                        }
                    }

                    var allUndefined = matchedTargetKeys.every(function (key) {
                        return target[key] === undefined;
                    });
                    if (rename.options.ignoreUndefined && allUndefined) {
                        continue;
                    }

                    if (!rename.options.multiple && renamed[rename.to]) {

                        errors.push(this.createError('object.rename.regex.multiple', { from: matchedTargetKeys, to: rename.to }, state, options));
                        if (options.abortEarly) {
                            return finish();
                        }
                    }

                    if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {

                        errors.push(this.createError('object.rename.regex.override', { from: matchedTargetKeys, to: rename.to }, state, options));
                        if (options.abortEarly) {
                            return finish();
                        }
                    }

                    if (allUndefined) {
                        delete target[rename.to];
                    } else {
                        target[rename.to] = target[matchedTargetKeys[matchedTargetKeys.length - 1]];
                    }

                    renamed[rename.to] = true;

                    if (!rename.options.alias) {
                        for (var _j = 0; _j < matchedTargetKeys.length; ++_j) {
                            delete target[matchedTargetKeys[_j]];
                        }
                    }
                } else {
                    if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
                        continue;
                    }

                    if (!rename.options.multiple && renamed[rename.to]) {

                        errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
                        if (options.abortEarly) {
                            return finish();
                        }
                    }

                    if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {

                        errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
                        if (options.abortEarly) {
                            return finish();
                        }
                    }

                    if (target[rename.from] === undefined) {
                        delete target[rename.to];
                    } else {
                        target[rename.to] = target[rename.from];
                    }

                    renamed[rename.to] = true;

                    if (!rename.options.alias) {
                        delete target[rename.from];
                    }
                }
            }

            // Validate schema

            if (!this._inner.children && // null allows any keys
            !this._inner.patterns.length && !this._inner.dependencies.length) {

                return finish();
            }

            var unprocessed = Utils.mapToObject(Object.keys(target));

            if (this._inner.children) {
                var stripProps = [];

                for (var _i2 = 0; _i2 < this._inner.children.length; ++_i2) {
                    var child = this._inner.children[_i2];
                    var key = child.key;
                    var item = target[key];

                    delete unprocessed[key];

                    var localState = { key: key, path: state.path.concat(key), parent: target, reference: state.reference };
                    var result = child.schema._validate(item, localState, options);
                    if (result.errors) {
                        errors.push(this.createError('object.child', { key: key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));

                        if (options.abortEarly) {
                            return finish();
                        }
                    } else {
                        if (child.schema._flags.strip || result.value === undefined && result.value !== item) {
                            stripProps.push(key);
                            target[key] = result.finalValue;
                        } else if (result.value !== undefined) {
                            target[key] = result.value;
                        }
                    }
                }

                for (var _i3 = 0; _i3 < stripProps.length; ++_i3) {
                    delete target[stripProps[_i3]];
                }
            }

            // Unknown keys

            var unprocessedKeys = Object.keys(unprocessed);
            if (unprocessedKeys.length && this._inner.patterns.length) {

                for (var _i4 = 0; _i4 < unprocessedKeys.length; ++_i4) {
                    var _key2 = unprocessedKeys[_i4];
                    var _localState = { key: _key2, path: state.path.concat(_key2), parent: target, reference: state.reference };
                    var _item = target[_key2];

                    for (var _j2 = 0; _j2 < this._inner.patterns.length; ++_j2) {
                        var pattern = this._inner.patterns[_j2];

                        if (pattern.regex.test(_key2)) {
                            delete unprocessed[_key2];

                            var _result = pattern.rule._validate(_item, _localState, options);
                            if (_result.errors) {
                                errors.push(this.createError('object.child', { key: _key2, child: pattern.rule._getLabel(_key2), reason: _result.errors }, _localState, options));

                                if (options.abortEarly) {
                                    return finish();
                                }
                            }

                            target[_key2] = _result.value;
                        }
                    }
                }

                unprocessedKeys = Object.keys(unprocessed);
            }

            if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
                if (options.stripUnknown && this._flags.allowUnknown !== true || options.skipFunctions) {

                    var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.objects : false;

                    for (var _i5 = 0; _i5 < unprocessedKeys.length; ++_i5) {
                        var _key3 = unprocessedKeys[_i5];

                        if (stripUnknown) {
                            delete target[_key3];
                            delete unprocessed[_key3];
                        } else if (typeof target[_key3] === 'function') {
                            delete unprocessed[_key3];
                        }
                    }

                    unprocessedKeys = Object.keys(unprocessed);
                }

                if (unprocessedKeys.length && (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

                    for (var _i6 = 0; _i6 < unprocessedKeys.length; ++_i6) {
                        var unprocessedKey = unprocessedKeys[_i6];
                        errors.push(this.createError('object.allowUnknown', { child: unprocessedKey }, { key: unprocessedKey, path: state.path.concat(unprocessedKey) }, options, {}));
                    }
                }
            }

            // Validate dependencies

            for (var _i7 = 0; _i7 < this._inner.dependencies.length; ++_i7) {
                var dep = this._inner.dependencies[_i7];
                var err = internals[dep.type].call(this, dep.key !== null && target[dep.key], dep.peers, target, { key: dep.key, path: dep.key === null ? state.path : state.path.concat(dep.key) }, options);
                if (err instanceof Errors.Err) {
                    errors.push(err);
                    if (options.abortEarly) {
                        return finish();
                    }
                }
            }

            return finish();
        }
    }, {
        key: 'keys',
        value: function keys(schema) {

            Utils.assert(schema === null || schema === undefined || (typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object', 'Object schema must be a valid object');
            Utils.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');

            var obj = this.clone();

            if (!schema) {
                obj._inner.children = null;
                return obj;
            }

            var children = Object.keys(schema);

            if (!children.length) {
                obj._inner.children = [];
                return obj;
            }

            var topo = new Topo();
            if (obj._inner.children) {
                for (var i = 0; i < obj._inner.children.length; ++i) {
                    var child = obj._inner.children[i];

                    // Only add the key if we are not going to replace it later
                    if (!children.includes(child.key)) {
                        topo.add(child, { after: child._refs, group: child.key });
                    }
                }
            }

            for (var _i8 = 0; _i8 < children.length; ++_i8) {
                var key = children[_i8];
                var _child = schema[key];
                try {
                    var cast = Cast.schema(this._currentJoi, _child);
                    topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
                } catch (castErr) {
                    if (castErr.hasOwnProperty('path')) {
                        castErr.path = key + '.' + castErr.path;
                    } else {
                        castErr.path = key;
                    }
                    throw castErr;
                }
            }

            obj._inner.children = topo.nodes;

            return obj;
        }
    }, {
        key: 'append',
        value: function append(schema) {
            // Skip any changes
            if (schema === null || schema === undefined || Object.keys(schema).length === 0) {
                return this;
            }

            return this.keys(schema);
        }
    }, {
        key: 'unknown',
        value: function unknown(allow) {

            var value = allow !== false;

            if (this._flags.allowUnknown === value) {
                return this;
            }

            var obj = this.clone();
            obj._flags.allowUnknown = value;
            return obj;
        }
    }, {
        key: 'length',
        value: function length(limit) {

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

            return this._test('length', limit, function (value, state, options) {

                if (Object.keys(value).length === limit) {
                    return value;
                }

                return this.createError('object.length', { limit: limit }, state, options);
            });
        }
    }, {
        key: 'min',
        value: function min(limit) {

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

            return this._test('min', limit, function (value, state, options) {

                if (Object.keys(value).length >= limit) {
                    return value;
                }

                return this.createError('object.min', { limit: limit }, state, options);
            });
        }
    }, {
        key: 'max',
        value: function max(limit) {

            Utils.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

            return this._test('max', limit, function (value, state, options) {

                if (Object.keys(value).length <= limit) {
                    return value;
                }

                return this.createError('object.max', { limit: limit }, state, options);
            });
        }
    }, {
        key: 'pattern',
        value: function pattern(_pattern, schema) {

            Utils.assert(_pattern instanceof RegExp, 'Invalid regular expression');
            Utils.assert(schema !== undefined, 'Invalid rule');

            _pattern = new RegExp(_pattern.source, _pattern.ignoreCase ? 'i' : undefined); // Future version should break this and forbid unsupported regex flags

            try {
                schema = Cast.schema(this._currentJoi, schema);
            } catch (castErr) {
                if (castErr.hasOwnProperty('path')) {
                    castErr.message = castErr.message + '(' + castErr.path + ')';
                }

                throw castErr;
            }

            var obj = this.clone();
            obj._inner.patterns.push({ regex: _pattern, rule: schema });
            return obj;
        }
    }, {
        key: 'schema',
        value: function schema() {

            return this._test('schema', null, function (value, state, options) {

                if (value instanceof Any) {
                    return value;
                }

                return this.createError('object.schema', null, state, options);
            });
        }
    }, {
        key: 'with',
        value: function _with(key, peers) {

            Utils.assert(arguments.length === 2, 'Invalid number of arguments, expected 2.');

            return this._dependency('with', key, peers);
        }
    }, {
        key: 'without',
        value: function without(key, peers) {

            Utils.assert(arguments.length === 2, 'Invalid number of arguments, expected 2.');

            return this._dependency('without', key, peers);
        }
    }, {
        key: 'xor',
        value: function xor() {
            for (var _len2 = arguments.length, peers = Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
                peers[_key4] = arguments[_key4];
            }

            peers = Utils.flatten(peers);
            return this._dependency('xor', null, peers);
        }
    }, {
        key: 'or',
        value: function or() {
            for (var _len3 = arguments.length, peers = Array(_len3), _key5 = 0; _key5 < _len3; _key5++) {
                peers[_key5] = arguments[_key5];
            }

            peers = Utils.flatten(peers);
            return this._dependency('or', null, peers);
        }
    }, {
        key: 'and',
        value: function and() {
            for (var _len4 = arguments.length, peers = Array(_len4), _key6 = 0; _key6 < _len4; _key6++) {
                peers[_key6] = arguments[_key6];
            }

            peers = Utils.flatten(peers);
            return this._dependency('and', null, peers);
        }
    }, {
        key: 'nand',
        value: function nand() {
            for (var _len5 = arguments.length, peers = Array(_len5), _key7 = 0; _key7 < _len5; _key7++) {
                peers[_key7] = arguments[_key7];
            }

            peers = Utils.flatten(peers);
            return this._dependency('nand', null, peers);
        }
    }, {
        key: 'requiredKeys',
        value: function requiredKeys() {
            for (var _len6 = arguments.length, children = Array(_len6), _key8 = 0; _key8 < _len6; _key8++) {
                children[_key8] = arguments[_key8];
            }

            children = Utils.flatten(children);
            return this.applyFunctionToChildren(children, 'required');
        }
    }, {
        key: 'optionalKeys',
        value: function optionalKeys() {
            for (var _len7 = arguments.length, children = Array(_len7), _key9 = 0; _key9 < _len7; _key9++) {
                children[_key9] = arguments[_key9];
            }

            children = Utils.flatten(children);
            return this.applyFunctionToChildren(children, 'optional');
        }
    }, {
        key: 'forbiddenKeys',
        value: function forbiddenKeys() {
            for (var _len8 = arguments.length, children = Array(_len8), _key10 = 0; _key10 < _len8; _key10++) {
                children[_key10] = arguments[_key10];
            }

            children = Utils.flatten(children);
            return this.applyFunctionToChildren(children, 'forbidden');
        }
    }, {
        key: 'rename',
        value: function rename(from, to, options) {

            Utils.assert(typeof from === 'string' || from instanceof RegExp, 'Rename missing the from argument');
            Utils.assert(typeof to === 'string', 'Rename missing the to argument');
            Utils.assert(to !== from, 'Cannot rename key to same name:', from);

            for (var i = 0; i < this._inner.renames.length; ++i) {
                Utils.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
            }

            var obj = this.clone();

            obj._inner.renames.push({
                from: from,
                to: to,
                options: Utils.applyToDefaults(internals.renameDefaults, options || {}),
                isRegExp: from instanceof RegExp
            });

            return obj;
        }
    }, {
        key: 'applyFunctionToChildren',
        value: function applyFunctionToChildren(children, fn, args, root) {

            children = [].concat(children);
            Utils.assert(children.length > 0, 'expected at least one children');

            var groupedChildren = internals.groupChildren(children);
            var obj = void 0;

            if ('' in groupedChildren) {
                obj = this[fn].apply(this, args);
                delete groupedChildren[''];
            } else {
                obj = this.clone();
            }

            if (obj._inner.children) {
                root = root ? root + '.' : '';

                for (var i = 0; i < obj._inner.children.length; ++i) {
                    var child = obj._inner.children[i];
                    var group = groupedChildren[child.key];

                    if (group) {
                        obj._inner.children[i] = {
                            key: child.key,
                            _refs: child._refs,
                            schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
                        };

                        delete groupedChildren[child.key];
                    }
                }
            }

            var remaining = Object.keys(groupedChildren);
            Utils.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

            return obj;
        }
    }, {
        key: '_dependency',
        value: function _dependency(type, key, peers) {

            peers = [].concat(peers);
            for (var i = 0; i < peers.length; ++i) {
                Utils.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
            }

            var obj = this.clone();
            obj._inner.dependencies.push({ type: type, key: key, peers: peers });
            return obj;
        }
    }, {
        key: 'describe',
        value: function describe(shallow) {

            var description = Any.prototype.describe.call(this);

            if (description.rules) {
                for (var i = 0; i < description.rules.length; ++i) {
                    var rule = description.rules[i];
                    // Coverage off for future-proof descriptions, only object().assert() is use right now
                    if ( /* $lab:coverage:off$ */rule.arg && _typeof(rule.arg) === 'object' && rule.arg.schema && rule.arg.ref /* $lab:coverage:on$ */) {
                            rule.arg = {
                                schema: rule.arg.schema.describe(),
                                ref: rule.arg.ref.toString()
                            };
                        }
                }
            }

            if (this._inner.children && !shallow) {

                description.children = {};
                for (var _i9 = 0; _i9 < this._inner.children.length; ++_i9) {
                    var child = this._inner.children[_i9];
                    description.children[child.key] = child.schema.describe();
                }
            }

            if (this._inner.dependencies.length) {
                description.dependencies = Utils.clone(this._inner.dependencies);
            }

            if (this._inner.patterns.length) {
                description.patterns = [];

                for (var _i10 = 0; _i10 < this._inner.patterns.length; ++_i10) {
                    var pattern = this._inner.patterns[_i10];
                    description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
                }
            }

            if (this._inner.renames.length > 0) {
                description.renames = Utils.clone(this._inner.renames);
            }

            return description;
        }
    }, {
        key: 'assert',
        value: function assert(ref, schema, message) {

            ref = Cast.ref(ref);
            Utils.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
            message = message || 'pass the assertion test';

            try {
                schema = Cast.schema(this._currentJoi, schema);
            } catch (castErr) {
                if (castErr.hasOwnProperty('path')) {
                    castErr.message = castErr.message + '(' + castErr.path + ')';
                }

                throw castErr;
            }

            var key = ref.path[ref.path.length - 1];
            var path = ref.path.join('.');

            return this._test('assert', { schema: schema, ref: ref }, function (value, state, options) {

                var result = schema._validate(ref(value), null, options, value);
                if (!result.errors) {
                    return value;
                }

                var localState = Utils.merge({}, state);
                localState.key = key;
                localState.path = ref.path;
                return this.createError('object.assert', { ref: path, message: message }, localState, options);
            });
        }
    }, {
        key: 'type',
        value: function type(constructor) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constructor.name;


            Utils.assert(typeof constructor === 'function', 'type must be a constructor function');
            var typeData = {
                name: name,
                ctor: constructor
            };

            return this._test('type', typeData, function (value, state, options) {

                if (value instanceof constructor) {
                    return value;
                }

                return this.createError('object.type', { type: typeData.name }, state, options);
            });
        }
    }]);

    return _class;
}(Any);

internals.safeParse = function (value) {

    try {
        return JSON.parse(value);
    } catch (parseErr) {}

    return value;
};

internals.renameDefaults = {
    alias: false, // Keep old value in place
    multiple: false, // Allow renaming multiple keys into the same target
    override: false // Overrides an existing key
};

internals.groupChildren = function (children) {

    children.sort();

    var grouped = {};

    for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        Utils.assert(typeof child === 'string', 'children must be strings');
        var group = child.split('.')[0];
        var childGroup = grouped[group] = grouped[group] || [];
        childGroup.push(child.substring(group.length + 1));
    }

    return grouped;
};

internals.keysToLabels = function (schema, keys) {

    var children = schema._inner.children;

    if (!children) {
        return keys;
    }

    var findLabel = function findLabel(key) {

        var matchingChild = children.find(function (child) {
            return child.key === key;
        });
        return matchingChild ? matchingChild.schema._getLabel(key) : key;
    };

    if (Array.isArray(keys)) {
        return keys.map(findLabel);
    }

    return findLabel(keys);
};

internals.with = function (value, peers, parent, state, options) {

    if (value === undefined) {
        return value;
    }

    for (var i = 0; i < peers.length; ++i) {
        var peer = peers[i];
        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

            return this.createError('object.with', {
                main: state.key,
                mainWithLabel: internals.keysToLabels(this, state.key),
                peer: peer,
                peerWithLabel: internals.keysToLabels(this, peer)
            }, state, options);
        }
    }

    return value;
};

internals.without = function (value, peers, parent, state, options) {

    if (value === undefined) {
        return value;
    }

    for (var i = 0; i < peers.length; ++i) {
        var peer = peers[i];
        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

            return this.createError('object.without', {
                main: state.key,
                mainWithLabel: internals.keysToLabels(this, state.key),
                peer: peer,
                peerWithLabel: internals.keysToLabels(this, peer)
            }, state, options);
        }
    }

    return value;
};

internals.xor = function (value, peers, parent, state, options) {

    var present = [];
    for (var i = 0; i < peers.length; ++i) {
        var peer = peers[i];
        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

            present.push(peer);
        }
    }

    if (present.length === 1) {
        return value;
    }

    var context = { peers: peers, peersWithLabels: internals.keysToLabels(this, peers) };

    if (present.length === 0) {
        return this.createError('object.missing', context, state, options);
    }

    return this.createError('object.xor', context, state, options);
};

internals.or = function (value, peers, parent, state, options) {

    for (var i = 0; i < peers.length; ++i) {
        var peer = peers[i];
        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
            return value;
        }
    }

    return this.createError('object.missing', {
        peers: peers,
        peersWithLabels: internals.keysToLabels(this, peers)
    }, state, options);
};

internals.and = function (value, peers, parent, state, options) {

    var missing = [];
    var present = [];
    var count = peers.length;
    for (var i = 0; i < count; ++i) {
        var peer = peers[i];
        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

            missing.push(peer);
        } else {
            present.push(peer);
        }
    }

    var aon = missing.length === count || present.length === count;

    if (!aon) {

        return this.createError('object.and', {
            present: present,
            presentWithLabels: internals.keysToLabels(this, present),
            missing: missing,
            missingWithLabels: internals.keysToLabels(this, missing)
        }, state, options);
    }
};

internals.nand = function (value, peers, parent, state, options) {

    var present = [];
    for (var i = 0; i < peers.length; ++i) {
        var peer = peers[i];
        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

            present.push(peer);
        }
    }

    var values = Utils.clone(peers);
    var main = values.splice(0, 1)[0];
    var allPresent = present.length === peers.length;
    return allPresent ? this.createError('object.nand', {
        main: main,
        mainWithLabel: internals.keysToLabels(this, main),
        peers: values,
        peersWithLabels: internals.keysToLabels(this, values)
    }, state, options) : null;
};

module.exports = new internals.Object();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var Hoek = __webpack_require__(1);

// Declare internals

var internals = {};

exports = module.exports = internals.Topo = function () {

    this._items = [];
    this.nodes = [];
};

internals.Topo.prototype.add = function (nodes, options) {
    var _this = this;

    options = options || {};

    // Validate rules

    var before = [].concat(options.before || []);
    var after = [].concat(options.after || []);
    var group = options.group || '?';
    var sort = options.sort || 0; // Used for merging only

    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');

    [].concat(nodes).forEach(function (node, i) {

        var item = {
            seq: _this._items.length,
            sort: sort,
            before: before,
            after: after,
            group: group,
            node: node
        };

        _this._items.push(item);
    });

    // Insert event

    var error = this._sort();
    Hoek.assert(!error, 'item', group !== '?' ? 'added into group ' + group : '', 'created a dependencies error');

    return this.nodes;
};

internals.Topo.prototype.merge = function (others) {

    others = [].concat(others);
    for (var i = 0; i < others.length; ++i) {
        var other = others[i];
        if (other) {
            for (var j = 0; j < other._items.length; ++j) {
                var item = Hoek.shallow(other._items[j]);
                this._items.push(item);
            }
        }
    }

    // Sort items

    this._items.sort(internals.mergeSort);
    for (var _i = 0; _i < this._items.length; ++_i) {
        this._items[_i].seq = _i;
    }

    var error = this._sort();
    Hoek.assert(!error, 'merge created a dependencies error');

    return this.nodes;
};

internals.mergeSort = function (a, b) {

    return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
};

internals.Topo.prototype._sort = function () {

    // Construct graph

    var graph = {};
    var graphAfters = Object.create(null); // A prototype can bungle lookups w/ false positives
    var groups = Object.create(null);

    for (var i = 0; i < this._items.length; ++i) {
        var item = this._items[i];
        var seq = item.seq; // Unique across all items
        var group = item.group;

        // Determine Groups

        groups[group] = groups[group] || [];
        groups[group].push(seq);

        // Build intermediary graph using 'before'

        graph[seq] = item.before;

        // Build second intermediary graph with 'after'

        var after = item.after;
        for (var j = 0; j < after.length; ++j) {
            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
        }
    }

    // Expand intermediary graph

    var graphNodes = Object.keys(graph);
    for (var _i2 = 0; _i2 < graphNodes.length; ++_i2) {
        var node = graphNodes[_i2];
        var expandedGroups = [];

        var graphNodeItems = Object.keys(graph[node]);
        for (var _j = 0; _j < graphNodeItems.length; ++_j) {
            var _group = graph[node][graphNodeItems[_j]];
            groups[_group] = groups[_group] || [];

            for (var k = 0; k < groups[_group].length; ++k) {
                expandedGroups.push(groups[_group][k]);
            }
        }
        graph[node] = expandedGroups;
    }

    // Merge intermediary graph using graphAfters into final graph

    var afterNodes = Object.keys(graphAfters);
    for (var _i3 = 0; _i3 < afterNodes.length; ++_i3) {
        var _group2 = afterNodes[_i3];

        if (groups[_group2]) {
            for (var _j2 = 0; _j2 < groups[_group2].length; ++_j2) {
                var _node = groups[_group2][_j2];
                graph[_node] = graph[_node].concat(graphAfters[_group2]);
            }
        }
    }

    // Compile ancestors

    var children = void 0;
    var ancestors = {};
    graphNodes = Object.keys(graph);
    for (var _i4 = 0; _i4 < graphNodes.length; ++_i4) {
        var _node2 = graphNodes[_i4];
        children = graph[_node2];

        for (var _j3 = 0; _j3 < children.length; ++_j3) {
            ancestors[children[_j3]] = (ancestors[children[_j3]] || []).concat(_node2);
        }
    }

    // Topo sort

    var visited = {};
    var sorted = [];

    for (var _i5 = 0; _i5 < this._items.length; ++_i5) {
        // Really looping thru item.seq values out of order
        var next = _i5;

        if (ancestors[_i5]) {
            next = null;
            for (var _j4 = 0; _j4 < this._items.length; ++_j4) {
                // As above, these are item.seq values
                if (visited[_j4] === true) {
                    continue;
                }

                if (!ancestors[_j4]) {
                    ancestors[_j4] = [];
                }

                var shouldSeeCount = ancestors[_j4].length;
                var seenCount = 0;
                for (var _k = 0; _k < shouldSeeCount; ++_k) {
                    if (visited[ancestors[_j4][_k]]) {
                        ++seenCount;
                    }
                }

                if (seenCount === shouldSeeCount) {
                    next = _j4;
                    break;
                }
            }
        }

        if (next !== null) {
            visited[next] = true;
            sorted.push(next);
        }
    }

    if (sorted.length !== this._items.length) {
        return new Error('Invalid dependencies');
    }

    var seqIndex = {};
    for (var _i6 = 0; _i6 < this._items.length; ++_i6) {
        var _item = this._items[_i6];
        seqIndex[_item.seq] = _item;
    }

    var sortedNodes = [];
    this._items = sorted.map(function (value) {

        var sortedItem = seqIndex[value];
        sortedNodes.push(sortedItem.node);
        return sortedItem;
    });

    this.nodes = sortedNodes;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Any = __webpack_require__(2);
var Ref = __webpack_require__(4);
var Utils = __webpack_require__(1);

// Declare internals

var internals = {
    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
};

internals.Number = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'number';
        _this._invalids.add(Infinity);
        _this._invalids.add(-Infinity);
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            var result = {
                errors: null,
                value: value
            };

            if (typeof value === 'string' && options.convert) {

                var number = parseFloat(value);
                result.value = isNaN(number) || !isFinite(value) ? NaN : number;
            }

            var isNumber = typeof result.value === 'number' && !isNaN(result.value);

            if (options.convert && 'precision' in this._flags && isNumber) {

                // This is conceptually equivalent to using toFixed but it should be much faster
                var precision = Math.pow(10, this._flags.precision);
                result.value = Math.round(result.value * precision) / precision;
            }

            result.errors = isNumber ? null : this.createError('number.base', null, state, options);
            return result;
        }
    }, {
        key: 'multiple',
        value: function multiple(base) {

            var isRef = Ref.isRef(base);

            if (!isRef) {
                Utils.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
                Utils.assert(base > 0, 'multiple must be greater than 0');
            }

            return this._test('multiple', base, function (value, state, options) {

                var divisor = isRef ? base(state.reference || state.parent, options) : base;

                if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
                    return this.createError('number.ref', { ref: base.key }, state, options);
                }

                if (value % divisor === 0) {
                    return value;
                }

                return this.createError('number.multiple', { multiple: base, value: value }, state, options);
            });
        }
    }, {
        key: 'integer',
        value: function integer() {

            return this._test('integer', undefined, function (value, state, options) {

                return Number.isSafeInteger(value) ? value : this.createError('number.integer', { value: value }, state, options);
            });
        }
    }, {
        key: 'negative',
        value: function negative() {

            return this._test('negative', undefined, function (value, state, options) {

                if (value < 0) {
                    return value;
                }

                return this.createError('number.negative', { value: value }, state, options);
            });
        }
    }, {
        key: 'positive',
        value: function positive() {

            return this._test('positive', undefined, function (value, state, options) {

                if (value > 0) {
                    return value;
                }

                return this.createError('number.positive', { value: value }, state, options);
            });
        }
    }, {
        key: 'precision',
        value: function precision(limit) {

            Utils.assert(Number.isSafeInteger(limit), 'limit must be an integer');
            Utils.assert(!('precision' in this._flags), 'precision already set');

            var obj = this._test('precision', limit, function (value, state, options) {

                var places = value.toString().match(internals.precisionRx);
                var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
                if (decimals <= limit) {
                    return value;
                }

                return this.createError('number.precision', { limit: limit, value: value }, state, options);
            });

            obj._flags.precision = limit;
            return obj;
        }
    }, {
        key: 'port',
        value: function port() {

            return this._test('port', undefined, function (value, state, options) {

                if (!Number.isSafeInteger(value) || value < 0 || value > 65535) {
                    return this.createError('number.port', { value: value }, state, options);
                }

                return value;
            });
        }
    }]);

    return _class;
}(Any);

internals.compare = function (type, compare) {

    return function (limit) {

        var isRef = Ref.isRef(limit);
        var isNumber = typeof limit === 'number' && !isNaN(limit);

        Utils.assert(isNumber || isRef, 'limit must be a number or reference');

        return this._test(type, limit, function (value, state, options) {

            var compareTo = void 0;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
                    return this.createError('number.ref', { ref: limit.key }, state, options);
                }
            } else {
                compareTo = limit;
            }

            if (compare(value, compareTo)) {
                return value;
            }

            return this.createError('number.' + type, { limit: compareTo, value: value }, state, options);
        });
    };
};

internals.Number.prototype.min = internals.compare('min', function (value, limit) {
    return value >= limit;
});
internals.Number.prototype.max = internals.compare('max', function (value, limit) {
    return value <= limit;
});
internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {
    return value > limit;
});
internals.Number.prototype.less = internals.compare('less', function (value, limit) {
    return value < limit;
});

module.exports = new internals.Number();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = __webpack_require__(1);
var Isemail = void 0; // Loaded on demand
var Any = __webpack_require__(2);
var Ref = __webpack_require__(4);
var JoiDate = __webpack_require__(14);
var Uri = __webpack_require__(20);
var Ip = __webpack_require__(22);

// Declare internals

var internals = {
    uriRegex: Uri.createUriRegex(),
    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional'),
    guidBrackets: {
        '{': '}', '[': ']', '(': ')', '': ''
    },
    guidVersions: {
        uuidv1: '1',
        uuidv2: '2',
        uuidv3: '3',
        uuidv4: '4',
        uuidv5: '5'
    },
    cidrPresences: ['required', 'optional', 'forbidden'],
    normalizationForms: ['NFC', 'NFD', 'NFKC', 'NFKD']
};

internals.String = function (_Any) {
    _inherits(_class, _Any);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this._type = 'string';
        _this._invalids.add('');
        return _this;
    }

    _createClass(_class, [{
        key: '_base',
        value: function _base(value, state, options) {

            if (typeof value === 'string' && options.convert) {

                if (this._flags.normalize) {
                    value = value.normalize(this._flags.normalize);
                }

                if (this._flags.case) {
                    value = this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
                }

                if (this._flags.trim) {
                    value = value.trim();
                }

                if (this._inner.replacements) {

                    for (var i = 0; i < this._inner.replacements.length; ++i) {
                        var replacement = this._inner.replacements[i];
                        value = value.replace(replacement.pattern, replacement.replacement);
                    }
                }

                if (this._flags.truncate) {
                    for (var _i = 0; _i < this._tests.length; ++_i) {
                        var test = this._tests[_i];
                        if (test.name === 'max') {
                            value = value.slice(0, test.arg);
                            break;
                        }
                    }
                }
            }

            return {
                value: value,
                errors: typeof value === 'string' ? null : this.createError('string.base', { value: value }, state, options)
            };
        }
    }, {
        key: 'insensitive',
        value: function insensitive() {

            if (this._flags.insensitive) {
                return this;
            }

            var obj = this.clone();
            obj._flags.insensitive = true;
            return obj;
        }
    }, {
        key: 'creditCard',
        value: function creditCard() {

            return this._test('creditCard', undefined, function (value, state, options) {

                var i = value.length;
                var sum = 0;
                var mul = 1;

                while (i--) {
                    var char = value.charAt(i) * mul;
                    sum = sum + (char - (char > 9) * 9);
                    mul = mul ^ 3;
                }

                var check = sum % 10 === 0 && sum > 0;
                return check ? value : this.createError('string.creditCard', { value: value }, state, options);
            });
        }
    }, {
        key: 'regex',
        value: function regex(pattern, patternOptions) {

            Utils.assert(pattern instanceof RegExp, 'pattern must be a RegExp');

            var patternObject = {
                pattern: new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined) // Future version should break this and forbid unsupported regex flags
            };

            if (typeof patternOptions === 'string') {
                patternObject.name = patternOptions;
            } else if ((typeof patternOptions === 'undefined' ? 'undefined' : _typeof(patternOptions)) === 'object') {
                patternObject.invert = !!patternOptions.invert;

                if (patternOptions.name) {
                    patternObject.name = patternOptions.name;
                }
            }

            var errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');

            return this._test('regex', patternObject, function (value, state, options) {

                var patternMatch = patternObject.pattern.test(value);

                if (patternMatch ^ patternObject.invert) {
                    return value;
                }

                return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value: value }, state, options);
            });
        }
    }, {
        key: 'alphanum',
        value: function alphanum() {

            return this._test('alphanum', undefined, function (value, state, options) {

                if (/^[a-zA-Z0-9]+$/.test(value)) {
                    return value;
                }

                return this.createError('string.alphanum', { value: value }, state, options);
            });
        }
    }, {
        key: 'token',
        value: function token() {

            return this._test('token', undefined, function (value, state, options) {

                if (/^\w+$/.test(value)) {
                    return value;
                }

                return this.createError('string.token', { value: value }, state, options);
            });
        }
    }, {
        key: 'email',
        value: function email(isEmailOptions) {

            if (isEmailOptions) {
                Utils.assert((typeof isEmailOptions === 'undefined' ? 'undefined' : _typeof(isEmailOptions)) === 'object', 'email options must be an object');
                Utils.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
                Utils.assert(typeof isEmailOptions.tldWhitelist === 'undefined' || _typeof(isEmailOptions.tldWhitelist) === 'object', 'tldWhitelist must be an array or object');
                Utils.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' || Number.isSafeInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0, 'minDomainAtoms must be a positive integer');
                Utils.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' || Number.isSafeInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0, 'errorLevel must be a non-negative integer or boolean');
            }

            return this._test('email', isEmailOptions, function (value, state, options) {

                Isemail = Isemail || __webpack_require__(23);

                try {
                    var result = Isemail.validate(value, isEmailOptions);
                    if (result === true || result === 0) {
                        return value;
                    }
                } catch (e) {}

                return this.createError('string.email', { value: value }, state, options);
            });
        }
    }, {
        key: 'ip',
        value: function ip() {
            var ipOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            var regex = internals.ipRegex;
            Utils.assert((typeof ipOptions === 'undefined' ? 'undefined' : _typeof(ipOptions)) === 'object', 'options must be an object');

            if (ipOptions.cidr) {
                Utils.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
                ipOptions.cidr = ipOptions.cidr.toLowerCase();

                Utils.assert(Utils.contain(internals.cidrPresences, ipOptions.cidr), 'cidr must be one of ' + internals.cidrPresences.join(', '));

                // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
                if (!ipOptions.version && ipOptions.cidr !== 'optional') {
                    regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
                }
            } else {

                // Set our default cidr strategy
                ipOptions.cidr = 'optional';
            }

            var versions = void 0;
            if (ipOptions.version) {
                if (!Array.isArray(ipOptions.version)) {
                    ipOptions.version = [ipOptions.version];
                }

                Utils.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

                versions = [];
                for (var i = 0; i < ipOptions.version.length; ++i) {
                    var version = ipOptions.version[i];
                    Utils.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
                    version = version.toLowerCase();
                    Utils.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
                    versions.push(version);
                }

                // Make sure we have a set of versions
                versions = Utils.unique(versions);

                regex = Ip.createIpRegex(versions, ipOptions.cidr);
            }

            return this._test('ip', ipOptions, function (value, state, options) {

                if (regex.test(value)) {
                    return value;
                }

                if (versions) {
                    return this.createError('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
                }

                return this.createError('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
            });
        }
    }, {
        key: 'uri',
        value: function uri(uriOptions) {

            var customScheme = '';
            var allowRelative = false;
            var relativeOnly = false;
            var regex = internals.uriRegex;

            if (uriOptions) {
                Utils.assert((typeof uriOptions === 'undefined' ? 'undefined' : _typeof(uriOptions)) === 'object', 'options must be an object');

                if (uriOptions.scheme) {
                    Utils.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

                    if (!Array.isArray(uriOptions.scheme)) {
                        uriOptions.scheme = [uriOptions.scheme];
                    }

                    Utils.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

                    // Flatten the array into a string to be used to match the schemes.
                    for (var i = 0; i < uriOptions.scheme.length; ++i) {
                        var scheme = uriOptions.scheme[i];
                        Utils.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

                        // Add OR separators if a value already exists
                        customScheme = customScheme + (customScheme ? '|' : '');

                        // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
                        if (scheme instanceof RegExp) {
                            customScheme = customScheme + scheme.source;
                        } else {
                            Utils.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
                            customScheme = customScheme + Utils.escapeRegex(scheme);
                        }
                    }
                }

                if (uriOptions.allowRelative) {
                    allowRelative = true;
                }

                if (uriOptions.relativeOnly) {
                    relativeOnly = true;
                }
            }

            if (customScheme || allowRelative || relativeOnly) {
                regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly);
            }

            return this._test('uri', uriOptions, function (value, state, options) {

                if (regex.test(value)) {
                    return value;
                }

                if (relativeOnly) {
                    return this.createError('string.uriRelativeOnly', { value: value }, state, options);
                }

                if (customScheme) {
                    return this.createError('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
                }

                return this.createError('string.uri', { value: value }, state, options);
            });
        }
    }, {
        key: 'isoDate',
        value: function isoDate() {

            return this._test('isoDate', undefined, function (value, state, options) {

                if (JoiDate._isIsoDate(value)) {
                    if (!options.convert) {
                        return value;
                    }

                    var d = new Date(value);
                    if (!isNaN(d.getTime())) {
                        return d.toISOString();
                    }
                }

                return this.createError('string.isoDate', { value: value }, state, options);
            });
        }
    }, {
        key: 'guid',
        value: function guid(guidOptions) {

            var versionNumbers = '';

            if (guidOptions && guidOptions.version) {
                if (!Array.isArray(guidOptions.version)) {
                    guidOptions.version = [guidOptions.version];
                }

                Utils.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');
                var versions = new Set();

                for (var i = 0; i < guidOptions.version.length; ++i) {
                    var version = guidOptions.version[i];
                    Utils.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
                    version = version.toLowerCase();
                    var versionNumber = internals.guidVersions[version];
                    Utils.assert(versionNumber, 'version at position ' + i + ' must be one of ' + Object.keys(internals.guidVersions).join(', '));
                    Utils.assert(!versions.has(versionNumber), 'version at position ' + i + ' must not be a duplicate.');

                    versionNumbers += versionNumber;
                    versions.add(versionNumber);
                }
            }

            var guidRegex = new RegExp('^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[' + (versionNumbers || '0-9A-F') + '][0-9A-F]{3}\\2?[' + (versionNumbers ? '89AB' : '0-9A-F') + '][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$', 'i');

            return this._test('guid', guidOptions, function (value, state, options) {

                var results = guidRegex.exec(value);

                if (!results) {
                    return this.createError('string.guid', { value: value }, state, options);
                }

                // Matching braces
                if (internals.guidBrackets[results[1]] !== results[results.length - 1]) {
                    return this.createError('string.guid', { value: value }, state, options);
                }

                return value;
            });
        }
    }, {
        key: 'hex',
        value: function hex() {

            var regex = /^[a-f0-9]+$/i;

            return this._test('hex', regex, function (value, state, options) {

                if (regex.test(value)) {
                    return value;
                }

                return this.createError('string.hex', { value: value }, state, options);
            });
        }
    }, {
        key: 'base64',
        value: function base64() {
            var base64Options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            // Validation.
            Utils.assert((typeof base64Options === 'undefined' ? 'undefined' : _typeof(base64Options)) === 'object', 'base64 options must be an object');
            Utils.assert(typeof base64Options.paddingRequired === 'undefined' || typeof base64Options.paddingRequired === 'boolean', 'paddingRequired must be boolean');

            // Determine if padding is required.
            var paddingRequired = base64Options.paddingRequired === false ? base64Options.paddingRequired : base64Options.paddingRequired || true;

            // Set validation based on preference.
            var regex = paddingRequired ?
            // Padding is required.
            /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
            // Padding is optional.
            : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;

            return this._test('base64', regex, function (value, state, options) {

                if (regex.test(value)) {
                    return value;
                }

                return this.createError('string.base64', { value: value }, state, options);
            });
        }
    }, {
        key: 'hostname',
        value: function hostname() {

            var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

            return this._test('hostname', undefined, function (value, state, options) {

                if (value.length <= 255 && regex.test(value) || Utils.isIPv6(value)) {

                    return value;
                }

                return this.createError('string.hostname', { value: value }, state, options);
            });
        }
    }, {
        key: 'normalize',
        value: function normalize() {
            var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NFC';


            Utils.assert(Utils.contain(internals.normalizationForms, form), 'normalization form must be one of ' + internals.normalizationForms.join(', '));

            var obj = this._test('normalize', form, function (value, state, options) {

                if (options.convert || value === value.normalize(form)) {

                    return value;
                }

                return this.createError('string.normalize', { value: value, form: form }, state, options);
            });

            obj._flags.normalize = form;
            return obj;
        }
    }, {
        key: 'lowercase',
        value: function lowercase() {

            var obj = this._test('lowercase', undefined, function (value, state, options) {

                if (options.convert || value === value.toLocaleLowerCase()) {

                    return value;
                }

                return this.createError('string.lowercase', { value: value }, state, options);
            });

            obj._flags.case = 'lower';
            return obj;
        }
    }, {
        key: 'uppercase',
        value: function uppercase() {

            var obj = this._test('uppercase', undefined, function (value, state, options) {

                if (options.convert || value === value.toLocaleUpperCase()) {

                    return value;
                }

                return this.createError('string.uppercase', { value: value }, state, options);
            });

            obj._flags.case = 'upper';
            return obj;
        }
    }, {
        key: 'trim',
        value: function trim() {

            var obj = this._test('trim', undefined, function (value, state, options) {

                if (options.convert || value === value.trim()) {

                    return value;
                }

                return this.createError('string.trim', { value: value }, state, options);
            });

            obj._flags.trim = true;
            return obj;
        }
    }, {
        key: 'replace',
        value: function replace(pattern, replacement) {

            if (typeof pattern === 'string') {
                pattern = new RegExp(Utils.escapeRegex(pattern), 'g');
            }

            Utils.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
            Utils.assert(typeof replacement === 'string', 'replacement must be a String');

            // This can not be considere a test like trim, we can't "reject"
            // anything from this rule, so just clone the current object
            var obj = this.clone();

            if (!obj._inner.replacements) {
                obj._inner.replacements = [];
            }

            obj._inner.replacements.push({
                pattern: pattern,
                replacement: replacement
            });

            return obj;
        }
    }, {
        key: 'truncate',
        value: function truncate(enabled) {

            var value = enabled === undefined ? true : !!enabled;

            if (this._flags.truncate === value) {
                return this;
            }

            var obj = this.clone();
            obj._flags.truncate = value;
            return obj;
        }
    }]);

    return _class;
}(Any);

internals.compare = function (type, compare) {

    return function (limit, encoding) {

        var isRef = Ref.isRef(limit);

        Utils.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
        Utils.assert(!encoding, 'Invalid encoding:', encoding);

        return this._test(type, limit, function (value, state, options) {

            var compareTo = void 0;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!Number.isSafeInteger(compareTo)) {
                    return this.createError('string.ref', { ref: limit.key }, state, options);
                }
            } else {
                compareTo = limit;
            }

            if (compare(value, compareTo, encoding)) {
                return value;
            }

            return this.createError('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
        });
    };
};

internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {

    var length = value.length;
    return length >= limit;
});

internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {

    var length = value.length;
    return length <= limit;
});

internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {

    var length = value.length;
    return length === limit;
});

// Aliases

internals.String.prototype.uuid = internals.String.prototype.guid;

module.exports = new internals.String();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load Modules

var RFC3986 = __webpack_require__(21);

// Declare internals

var internals = {
    Uri: {
        createUriRegex: function createUriRegex(optionalScheme, allowRelative, relativeOnly) {

            var scheme = RFC3986.scheme;
            var prefix = void 0;

            if (relativeOnly) {
                prefix = '(?:' + RFC3986.relativeRef + ')';
            } else {
                // If we were passed a scheme, use it instead of the generic one
                if (optionalScheme) {

                    // Have to put this in a non-capturing group to handle the OR statements
                    scheme = '(?:' + optionalScheme + ')';
                }

                var withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';

                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
            }

            /**
             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
             *
             * OR
             *
             * relative-ref = relative-part [ "?" query ] [ "#" fragment ]
             */
            return new RegExp('^' + prefix + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
        }
    }
};

module.exports = internals.Uri;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules


// Delcare internals

var internals = {
  rfc3986: {}
};

internals.generate = function () {

  /**
   * elements separated by forward slash ("/") are alternatives.
   */
  var or = '|';

  /**
   * Rule to support zero-padded addresses.
   */
  var zeroPad = '0?';

  /**
   * DIGIT = %x30-39 ; 0-9
   */
  var digit = '0-9';
  var digitOnly = '[' + digit + ']';

  /**
   * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
   */
  var alpha = 'a-zA-Z';
  var alphaOnly = '[' + alpha + ']';

  /**
   * IPv4
   * cidr       = DIGIT                ; 0-9
   *            / %x31-32 DIGIT         ; 10-29
   *            / "3" %x30-32           ; 30-32
   */
  internals.rfc3986.ipv4Cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

  /**
   * IPv6
   * cidr       = DIGIT                 ; 0-9
   *            / %x31-39 DIGIT         ; 10-99
   *            / "1" %x0-1 DIGIT       ; 100-119
   *            / "12" %x0-8            ; 120-128
   */
  internals.rfc3986.ipv6Cidr = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + '[01]' + digitOnly + or + '12[0-8])';

  /**
   * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
   */
  var hexDigit = digit + 'A-Fa-f';
  var hexDigitOnly = '[' + hexDigit + ']';

  /**
   * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
   */
  var unreserved = alpha + digit + '-\\._~';

  /**
   * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
   */
  var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

  /**
   * pct-encoded = "%" HEXDIG HEXDIG
   */
  var pctEncoded = '%' + hexDigit;

  /**
   * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
   */
  var pchar = unreserved + pctEncoded + subDelims + ':@';
  var pcharOnly = '[' + pchar + ']';

  /**
   * dec-octet   = DIGIT                 ; 0-9
   *            / %x31-39 DIGIT         ; 10-99
   *            / "1" 2DIGIT            ; 100-199
   *            / "2" %x30-34 DIGIT     ; 200-249
   *            / "25" %x30-35          ; 250-255
   */
  var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

  /**
   * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
   */
  internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

  /**
   * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
   * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
   * IPv6address =                            6( h16 ":" ) ls32
   *             /                       "::" 5( h16 ":" ) ls32
   *             / [               h16 ] "::" 4( h16 ":" ) ls32
   *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
   *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
   *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
   *             / [ *4( h16 ":" ) h16 ] "::"              ls32
   *             / [ *5( h16 ":" ) h16 ] "::"              h16
   *             / [ *6( h16 ":" ) h16 ] "::"
   */
  var h16 = hexDigitOnly + '{1,4}';
  var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
  var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
  var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
  var IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
  var IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
  var IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
  var IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
  var IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
  var IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
  var IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
  internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

  /**
   * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
   */
  internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

  /**
   * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
   */
  internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

  /**
   * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
   */
  var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

  /**
   * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
   */
  var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

  /**
   * reg-name = *( unreserved / pct-encoded / sub-delims )
   */
  var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

  /**
   * host = IP-literal / IPv4address / reg-name
   */
  var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

  /**
   * port = *DIGIT
   */
  var port = digitOnly + '*';

  /**
   * authority   = [ userinfo "@" ] host [ ":" port ]
   */
  var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

  /**
   * segment       = *pchar
   * segment-nz    = 1*pchar
   * path          = path-abempty    ; begins with "/" or is empty
   *               / path-absolute   ; begins with "/" but not "//"
   *               / path-noscheme   ; begins with a non-colon segment
   *               / path-rootless   ; begins with a segment
   *               / path-empty      ; zero characters
   * path-abempty  = *( "/" segment )
   * path-absolute = "/" [ segment-nz *( "/" segment ) ]
   * path-rootless = segment-nz *( "/" segment )
   */
  var segment = pcharOnly + '*';
  var segmentNz = pcharOnly + '+';
  var segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
  var pathEmpty = '';
  var pathAbEmpty = '(?:\\/' + segment + ')*';
  var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
  var pathRootless = segmentNz + pathAbEmpty;
  var pathNoScheme = segmentNzNc + pathAbEmpty;

  /**
   * hier-part = "//" authority path
   */
  internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';

  /**
   * relative-part = "//" authority path-abempty
   *                 / path-absolute
   *                 / path-noscheme
   *                 / path-empty
   */
  internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';

  /**
   * query = *( pchar / "/" / "?" )
   */
  internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

  /**
   * fragment = *( pchar / "/" / "?" )
   */
  internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
};

internals.generate();

module.exports = internals.rfc3986;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var RFC3986 = __webpack_require__(21);

// Declare internals

var internals = {
    Ip: {
        cidrs: {
            ipv4: {
                required: '\\/(?:' + RFC3986.ipv4Cidr + ')',
                optional: '(?:\\/(?:' + RFC3986.ipv4Cidr + '))?',
                forbidden: ''
            },
            ipv6: {
                required: '\\/' + RFC3986.ipv6Cidr,
                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
                forbidden: ''
            },
            ipvfuture: {
                required: '\\/' + RFC3986.ipv6Cidr,
                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
                forbidden: ''
            }
        },
        versions: {
            ipv4: RFC3986.IPv4address,
            ipv6: RFC3986.IPv6address,
            ipvfuture: RFC3986.IPvFuture
        }
    }
};

internals.Ip.createIpRegex = function (versions, cidr) {

    var regex = void 0;
    for (var i = 0; i < versions.length; ++i) {
        var version = versions[i];
        if (!regex) {
            regex = '^(?:' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
        } else {
            regex += '|' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
        }
    }

    return new RegExp(regex + ')$');
};

module.exports = internals.Ip;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Punycode = __webpack_require__(24);

// Declare internals

var internals = {
    hasOwn: Object.prototype.hasOwnProperty,
    indexOf: Array.prototype.indexOf,
    defaultThreshold: 16,
    maxIPv6Groups: 8,

    categories: {
        valid: 1,
        dnsWarn: 7,
        rfc5321: 15,
        cfws: 31,
        deprecated: 63,
        rfc5322: 127,
        error: 255
    },

    diagnoses: {

        // Address is valid

        valid: 0,

        // Address is valid for SMTP but has unusual elements

        rfc5321TLD: 9,
        rfc5321TLDNumeric: 10,
        rfc5321QuotedString: 11,
        rfc5321AddressLiteral: 12,

        // Address is valid for message, but must be modified for envelope

        cfwsComment: 17,
        cfwsFWS: 18,

        // Address contains non-ASCII when the allowUnicode option is false
        // Has to be > internals.defaultThreshold so that it's rejected
        // without an explicit errorLevel:
        undesiredNonAscii: 25,

        // Address contains deprecated elements, but may still be valid in some contexts

        deprecatedLocalPart: 33,
        deprecatedFWS: 34,
        deprecatedQTEXT: 35,
        deprecatedQP: 36,
        deprecatedComment: 37,
        deprecatedCTEXT: 38,
        deprecatedIPv6: 39,
        deprecatedCFWSNearAt: 49,

        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid

        rfc5322Domain: 65,
        rfc5322TooLong: 66,
        rfc5322LocalTooLong: 67,
        rfc5322DomainTooLong: 68,
        rfc5322LabelTooLong: 69,
        rfc5322DomainLiteral: 70,
        rfc5322DomainLiteralOBSDText: 71,
        rfc5322IPv6GroupCount: 72,
        rfc5322IPv62x2xColon: 73,
        rfc5322IPv6BadCharacter: 74,
        rfc5322IPv6MaxGroups: 75,
        rfc5322IPv6ColonStart: 76,
        rfc5322IPv6ColonEnd: 77,

        // Address is invalid for any purpose

        errExpectingDTEXT: 129,
        errNoLocalPart: 130,
        errNoDomain: 131,
        errConsecutiveDots: 132,
        errATEXTAfterCFWS: 133,
        errATEXTAfterQS: 134,
        errATEXTAfterDomainLiteral: 135,
        errExpectingQPair: 136,
        errExpectingATEXT: 137,
        errExpectingQTEXT: 138,
        errExpectingCTEXT: 139,
        errBackslashEnd: 140,
        errDotStart: 141,
        errDotEnd: 142,
        errDomainHyphenStart: 143,
        errDomainHyphenEnd: 144,
        errUnclosedQuotedString: 145,
        errUnclosedComment: 146,
        errUnclosedDomainLiteral: 147,
        errFWSCRLFx2: 148,
        errFWSCRLFEnd: 149,
        errCRNoLF: 150,
        errUnknownTLD: 160,
        errDomainTooShort: 161
    },

    components: {
        localpart: 0,
        domain: 1,
        literal: 2,
        contextComment: 3,
        contextFWS: 4,
        contextQuotedString: 5,
        contextQuotedPair: 6
    }
};

internals.specials = function () {

    var specials = '()<>[]:;@\\,."'; // US-ASCII visible characters not valid for atext (http://tools.ietf.org/html/rfc5322#section-3.2.3)
    var lookup = new Array(0x100);
    lookup.fill(false);

    for (var i = 0; i < specials.length; ++i) {
        lookup[specials.codePointAt(i)] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.c0Controls = function () {

    var lookup = new Array(0x100);
    lookup.fill(false);

    // add C0 control characters

    for (var i = 0; i < 33; ++i) {
        lookup[i] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.c1Controls = function () {

    var lookup = new Array(0x100);
    lookup.fill(false);

    // add C1 control characters

    for (var i = 127; i < 160; ++i) {
        lookup[i] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.regex = {
    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipV6: /^[a-fA-F\d]{0,4}$/
};

// $lab:coverage:off$
internals.nulNormalize = function (email) {

    var emailPieces = email.split('\0');
    emailPieces = emailPieces.map(function (string) {

        return string.normalize('NFC');
    });

    return emailPieces.join('\0');
};
// $lab:coverage:on$


internals.checkIpV6 = function (items) {

    return items.every(function (value) {
        return internals.regex.ipV6.test(value);
    });
};

internals.validDomain = function (tldAtom, options) {

    if (options.tldBlacklist) {
        if (Array.isArray(options.tldBlacklist)) {
            return internals.indexOf.call(options.tldBlacklist, tldAtom) === -1;
        }

        return !internals.hasOwn.call(options.tldBlacklist, tldAtom);
    }

    if (Array.isArray(options.tldWhitelist)) {
        return internals.indexOf.call(options.tldWhitelist, tldAtom) !== -1;
    }

    return internals.hasOwn.call(options.tldWhitelist, tldAtom);
};

/**
 * Check that an email address conforms to RFCs 5321, 5322, 6530 and others
 *
 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
 * addr-spec as defined by RFC 5322. Depending on the context, either can be
 * regarded as a valid email address. The RFC 5321 Mailbox specification is
 * more restrictive (comments, white space and obsolete forms are not allowed).
 *
 * @param {string} email The email address to check. See README for specifics.
 * @param {Object} options The (optional) options:
 *   {*} errorLevel Determines the boundary between valid and invalid
 *     addresses.
 *   {*} tldBlacklist The set of domains to consider invalid.
 *   {*} tldWhitelist The set of domains to consider valid.
 *   {*} allowUnicode Whether to allow non-ASCII characters, defaults to true.
 *   {*} minDomainAtoms The minimum number of domain atoms which must be present
 *     for the address to be valid.
 * @param {function(number|boolean)} callback The (optional) callback handler.
 * @return {*}
 */

exports.validate = internals.validate = function (email, options, callback) {

    options = options || {};
    email = internals.normalize(email);

    if (typeof options === 'function') {
        callback = options;
        options = {};
    }

    if (typeof callback !== 'function') {
        callback = null;
    }

    var diagnose = void 0;
    var threshold = void 0;

    if (typeof options.errorLevel === 'number') {
        diagnose = true;
        threshold = options.errorLevel;
    } else {
        diagnose = !!options.errorLevel;
        threshold = internals.diagnoses.valid;
    }

    if (options.tldWhitelist) {
        if (typeof options.tldWhitelist === 'string') {
            options.tldWhitelist = [options.tldWhitelist];
        } else if (_typeof(options.tldWhitelist) !== 'object') {
            throw new TypeError('expected array or object tldWhitelist');
        }
    }

    if (options.tldBlacklist) {
        if (typeof options.tldBlacklist === 'string') {
            options.tldBlacklist = [options.tldBlacklist];
        } else if (_typeof(options.tldBlacklist) !== 'object') {
            throw new TypeError('expected array or object tldBlacklist');
        }
    }

    if (options.minDomainAtoms && (options.minDomainAtoms !== (+options.minDomainAtoms | 0) || options.minDomainAtoms < 0)) {
        throw new TypeError('expected positive integer minDomainAtoms');
    }

    var maxResult = internals.diagnoses.valid;
    var updateResult = function updateResult(value) {

        if (value > maxResult) {
            maxResult = value;
        }
    };

    var allowUnicode = options.allowUnicode === undefined || !!options.allowUnicode;
    if (!allowUnicode && /[^\x00-\x7f]/.test(email)) {
        updateResult(internals.diagnoses.undesiredNonAscii);
    }

    var context = {
        now: internals.components.localpart,
        prev: internals.components.localpart,
        stack: [internals.components.localpart]
    };

    var prevToken = '';

    var parseData = {
        local: '',
        domain: ''
    };
    var atomData = {
        locals: [''],
        domains: ['']
    };

    var elementCount = 0;
    var elementLength = 0;
    var crlfCount = 0;
    var charCode = void 0;

    var hyphenFlag = false;
    var assertEnd = false;

    var emailLength = email.length;

    var token = void 0; // Token is used outside the loop, must declare similarly
    for (var i = 0; i < emailLength; i += token.length) {
        // Utilize codepoints to account for Unicode surrogate pairs
        token = String.fromCodePoint(email.codePointAt(i));

        switch (context.now) {
            // Local-part
            case internals.components.localpart:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   local-part      =   dot-atom / quoted-string / obs-local-part
                //
                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
                //
                //   dot-atom-text   =   1*atext *("." 1*atext)
                //
                //   quoted-string   =   [CFWS]
                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
                //                       [CFWS]
                //
                //   obs-local-part  =   word *("." word)
                //
                //   word            =   atom / quoted-string
                //
                //   atom            =   [CFWS] 1*atext [CFWS]
                switch (token) {
                    // Comment
                    case '(':
                        if (elementLength === 0) {
                            // Comments are OK at the beginning of an element
                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
                        } else {
                            updateResult(internals.diagnoses.cfwsComment);
                            // Cannot start a comment in an element, should be end
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                    // Next dot-atom element
                    case '.':
                        if (elementLength === 0) {
                            // Another dot, already?
                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
                        } else {
                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
                            if (assertEnd) {
                                updateResult(internals.diagnoses.deprecatedLocalPart);
                            }

                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
                            assertEnd = false;
                            elementLength = 0;
                            ++elementCount;
                            parseData.local += token;
                            atomData.locals[elementCount] = '';
                        }

                        break;

                    // Quoted string
                    case '"':
                        if (elementLength === 0) {
                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

                            parseData.local += token;
                            atomData.locals[elementCount] += token;
                            elementLength += Buffer.byteLength(token, 'utf8');

                            // Quoted string must be the entire element
                            assertEnd = true;
                            context.stack.push(context.now);
                            context.now = internals.components.contextQuotedString;
                        } else {
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        }

                        break;

                    // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                    // Fallthrough

                    case ' ':
                    case '\t':
                        if (elementLength === 0) {
                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
                        } else {
                            // We can't start FWS in the middle of an element, better be end
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    case '@':
                        // At this point we should have a valid local-part
                        // $lab:coverage:off$
                        if (context.stack.length !== 1) {
                            throw new Error('unexpected item on context stack');
                        }
                        // $lab:coverage:on$

                        if (parseData.local.length === 0) {
                            // Fatal error
                            updateResult(internals.diagnoses.errNoLocalPart);
                        } else if (elementLength === 0) {
                            // Fatal error
                            updateResult(internals.diagnoses.errDotEnd);
                        }
                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
                        //    octets
                        else if (Buffer.byteLength(parseData.local, 'utf8') > 64) {
                                updateResult(internals.diagnoses.rfc5322LocalTooLong);
                            }
                            // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
                            //    addr-spec
                            //
                            // http://tools.ietf.org/html/rfc2119
                            // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
                            //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
                            //    and the case carefully weighed before implementing any behavior described with this label.
                            else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
                                    updateResult(internals.diagnoses.deprecatedCFWSNearAt);
                                }

                        // Clear everything down for the domain parsing
                        context.now = internals.components.domain;
                        context.stack[0] = internals.components.domain;
                        elementCount = 0;
                        elementLength = 0;
                        assertEnd = false; // CFWS can only appear at the end of the element
                        break;

                    // ATEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
                        //            "!" / "#" /     ;  characters not including
                        //            "$" / "%" /     ;  specials.  Used for atoms.
                        //            "&" / "'" /
                        //            "*" / "+" /
                        //            "-" / "/" /
                        //            "=" / "?" /
                        //            "^" / "_" /
                        //            "`" / "{" /
                        //            "|" / "}" /
                        //            "~"
                        if (assertEnd) {
                            // We have encountered atext where it is no longer valid
                            switch (context.prev) {
                                case internals.components.contextComment:
                                case internals.components.contextFWS:
                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
                                    break;

                                case internals.components.contextQuotedString:
                                    updateResult(internals.diagnoses.errATEXTAfterQS);
                                    break;

                                // $lab:coverage:off$
                                default:
                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
                                // $lab:coverage:on$
                            }
                        } else {
                            context.prev = context.now;
                            charCode = token.codePointAt(0);

                            // Especially if charCode == 10
                            if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {

                                // Fatal error
                                updateResult(internals.diagnoses.errExpectingATEXT);
                            }

                            parseData.local += token;
                            atomData.locals[elementCount] += token;
                            elementLength += Buffer.byteLength(token, 'utf8');
                        }
                }

                break;

            case internals.components.domain:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   domain          =   dot-atom / domain-literal / obs-domain
                //
                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
                //
                //   dot-atom-text   =   1*atext *("." 1*atext)
                //
                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
                //
                //   dtext           =   %d33-90 /          ; Printable US-ASCII
                //                       %d94-126 /         ;  characters not including
                //                       obs-dtext          ;  "[", "]", or "\"
                //
                //   obs-domain      =   atom *("." atom)
                //
                //   atom            =   [CFWS] 1*atext [CFWS]

                // http://tools.ietf.org/html/rfc5321#section-4.1.2
                //   Mailbox        = Local-part "@" ( Domain / address-literal )
                //
                //   Domain         = sub-domain *("." sub-domain)
                //
                //   address-literal  = "[" ( IPv4-address-literal /
                //                    IPv6-address-literal /
                //                    General-address-literal ) "]"
                //                    ; See Section 4.1.3

                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //      Note: A liberal syntax for the domain portion of addr-spec is
                //      given here.  However, the domain portion contains addressing
                //      information specified by and used in other protocols (e.g.,
                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
                //      incumbent upon implementations to conform to the syntax of
                //      addresses for the context in which they are used.
                //
                // is_email() author's note: it's not clear how to interpret this in
                // he context of a general email address validator. The conclusion I
                // have reached is this: "addressing information" must comply with
                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
                // invisible" must comply only with RFC 5322.
                switch (token) {
                    // Comment
                    case '(':
                        if (elementLength === 0) {
                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
                        } else {
                            // We can't start a comment mid-element, better be at the end
                            assertEnd = true;
                            updateResult(internals.diagnoses.cfwsComment);
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                    // Next dot-atom element
                    case '.':
                        var punycodeLength = Punycode.encode(atomData.domains[elementCount]).length;
                        if (elementLength === 0) {
                            // Another dot, already? Fatal error.
                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
                        } else if (hyphenFlag) {
                            // Previous subdomain ended in a hyphen. Fatal error.
                            updateResult(internals.diagnoses.errDomainHyphenEnd);
                        } else if (punycodeLength > 63) {
                            // RFC 5890 specifies that domain labels that are encoded using the Punycode algorithm
                            // must adhere to the <= 63 octet requirement.
                            // This includes string prefixes from the Punycode algorithm.
                            //
                            // https://tools.ietf.org/html/rfc5890#section-2.3.2.1
                            // labels          63 octets or less

                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
                        }

                        // CFWS is OK again now we're at the beginning of an element (although
                        // it may be obsolete CFWS)
                        assertEnd = false;
                        elementLength = 0;
                        ++elementCount;
                        atomData.domains[elementCount] = '';
                        parseData.domain += token;

                        break;

                    // Domain literal
                    case '[':
                        if (parseData.domain.length === 0) {
                            // Domain literal must be the only component
                            assertEnd = true;
                            elementLength += Buffer.byteLength(token, 'utf8');
                            context.stack.push(context.now);
                            context.now = internals.components.literal;
                            parseData.domain += token;
                            atomData.domains[elementCount] += token;
                            parseData.literal = '';
                        } else {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        }

                        break;

                    // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                    // Fallthrough

                    case ' ':
                    case '\t':
                        if (elementLength === 0) {
                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
                        } else {
                            // We can't start FWS in the middle of an element, so this better be the end
                            updateResult(internals.diagnoses.cfwsFWS);
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    // This must be ATEXT
                    default:
                        // RFC 5322 allows any atext...
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
                        //            "!" / "#" /     ;  characters not including
                        //            "$" / "%" /     ;  specials.  Used for atoms.
                        //            "&" / "'" /
                        //            "*" / "+" /
                        //            "-" / "/" /
                        //            "=" / "?" /
                        //            "^" / "_" /
                        //            "`" / "{" /
                        //            "|" / "}" /
                        //            "~"

                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
                        //   (RFCs 1034 & 1123)
                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
                        //   sub-domain     = Let-dig [Ldh-str]
                        //
                        //   Let-dig        = ALPHA / DIGIT
                        //
                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
                        //
                        if (assertEnd) {
                            // We have encountered ATEXT where it is no longer valid
                            switch (context.prev) {
                                case internals.components.contextComment:
                                case internals.components.contextFWS:
                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
                                    break;

                                case internals.components.literal:
                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
                                    break;

                                // $lab:coverage:off$
                                default:
                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
                                // $lab:coverage:on$
                            }
                        }

                        charCode = token.codePointAt(0);
                        // Assume this token isn't a hyphen unless we discover it is
                        hyphenFlag = false;

                        if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        } else if (token === '-') {
                            if (elementLength === 0) {
                                // Hyphens cannot be at the beginning of a subdomain, fatal error
                                updateResult(internals.diagnoses.errDomainHyphenStart);
                            }

                            hyphenFlag = true;
                        }
                        // Check if it's a neither a number nor a latin/unicode letter
                        else if (charCode < 48 || charCode > 122 && charCode < 192 || charCode > 57 && charCode < 65 || charCode > 90 && charCode < 97) {
                                // This is not an RFC 5321 subdomain, but still OK by RFC 5322
                                updateResult(internals.diagnoses.rfc5322Domain);
                            }

                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                break;

            // Domain literal
            case internals.components.literal:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
                //
                //   dtext           =   %d33-90 /          ; Printable US-ASCII
                //                       %d94-126 /         ;  characters not including
                //                       obs-dtext          ;  "[", "]", or "\"
                //
                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
                switch (token) {
                    // End of domain literal
                    case ']':
                        if (maxResult < internals.categories.deprecated) {
                            // Could be a valid RFC 5321 address literal, so let's check

                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
                            //   address-literal  = "[" ( IPv4-address-literal /
                            //                    IPv6-address-literal /
                            //                    General-address-literal ) "]"
                            //                    ; See Section 4.1.3
                            //
                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
                            //   IPv4-address-literal  = Snum 3("."  Snum)
                            //
                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
                            //
                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
                            //
                            //   Standardized-tag  = Ldh-str
                            //                     ; Standardized-tag MUST be specified in a
                            //                     ; Standards-Track RFC and registered with IANA
                            //
                            //   dcontent      = %d33-90 / ; Printable US-ASCII
                            //                 %d94-126 ; excl. "[", "\", "]"
                            //
                            //   Snum          = 1*3DIGIT
                            //                 ; representing a decimal integer
                            //                 ; value in the range 0 through 255
                            //
                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
                            //
                            //   IPv6-hex      = 1*4HEXDIG
                            //
                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
                            //
                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
                            //                 [IPv6-hex *5(":" IPv6-hex)]
                            //                 ; The "::" represents at least 2 16-bit groups of
                            //                 ; zeros.  No more than 6 groups in addition to the
                            //                 ; "::" may be present.
                            //
                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
                            //
                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
                            //                 IPv4-address-literal
                            //                 ; The "::" represents at least 2 16-bit groups of
                            //                 ; zeros.  No more than 4 groups in addition to the
                            //                 ; "::" and IPv4-address-literal may be present.

                            var index = -1;
                            var addressLiteral = parseData.literal;
                            var matchesIP = internals.regex.ipV4.exec(addressLiteral);

                            // Maybe extract IPv4 part from the end of the address-literal
                            if (matchesIP) {
                                index = matchesIP.index;
                                if (index !== 0) {
                                    // Convert IPv4 part to IPv6 format for futher testing
                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
                                }
                            }

                            if (index === 0) {
                                // Nothing there except a valid IPv4 address, so...
                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
                            } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
                            } else {
                                var match = addressLiteral.slice(5);
                                var maxGroups = internals.maxIPv6Groups;
                                var groups = match.split(':');
                                index = match.indexOf('::');

                                if (!~index) {
                                    // Need exactly the right number of groups
                                    if (groups.length !== maxGroups) {
                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
                                    }
                                } else if (index !== match.lastIndexOf('::')) {
                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
                                } else {
                                    if (index === 0 || index === match.length - 2) {
                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
                                        ++maxGroups;
                                    }

                                    if (groups.length > maxGroups) {
                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
                                    } else if (groups.length === maxGroups) {
                                        // Eliding a single "::"
                                        updateResult(internals.diagnoses.deprecatedIPv6);
                                    }
                                }

                                // IPv6 testing strategy
                                if (match[0] === ':' && match[1] !== ':') {
                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
                                } else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
                                } else if (internals.checkIpV6(groups)) {
                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
                                } else {
                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
                                }
                            }
                        } else {
                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
                        }

                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                    case '\\':
                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                    // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                    // Fallthrough

                    case ' ':
                    case '\t':
                        updateResult(internals.diagnoses.cfwsFWS);

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    // DTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
                        //                     %d94-126 / ;  characters not including
                        //                     obs-dtext  ;  "[", "]", or "\"
                        //
                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
                        //
                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
                        //                     %d11 /     ;  characters that do not
                        //                     %d12 /     ;  include the carriage
                        //                     %d14-31 /  ;  return, line feed, and
                        //                     %d127      ;  white space characters
                        charCode = token.codePointAt(0);

                        // '\r', '\n', ' ', and '\t' have already been parsed above
                        if (charCode !== 127 && internals.c1Controls(charCode) || charCode === 0 || token === '[') {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingDTEXT);
                            break;
                        } else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
                        }

                        parseData.literal += token;
                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                break;

            // Quoted string
            case internals.components.contextQuotedString:
                // http://tools.ietf.org/html/rfc5322#section-3.2.4
                //   quoted-string = [CFWS]
                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
                //                   [CFWS]
                //
                //   qcontent      = qtext / quoted-pair
                switch (token) {
                    // Quoted pair
                    case '\\':
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                    // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                    // Fallthrough

                    case '\t':
                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
                        //   a structured header field are semantically interpreted as a single
                        //   space character.

                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
                        //   semantically "invisible" and therefore not part of the
                        //   quoted-string

                        parseData.local += ' ';
                        atomData.locals[elementCount] += ' ';
                        elementLength += Buffer.byteLength(token, 'utf8');

                        updateResult(internals.diagnoses.cfwsFWS);
                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    // End of quoted string
                    case '"':
                        parseData.local += token;
                        atomData.locals[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                    // QTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
                        //   qtext          =   %d33 /             ; Printable US-ASCII
                        //                      %d35-91 /          ;  characters not including
                        //                      %d93-126 /         ;  "\" or the quote character
                        //                      obs-qtext
                        //
                        //   obs-qtext      =   obs-NO-WS-CTL
                        //
                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
                        //                      %d11 /             ;  characters that do not
                        //                      %d12 /             ;  include the carriage
                        //                      %d14-31 /          ;  return, line feed, and
                        //                      %d127              ;  white space characters
                        charCode = token.codePointAt(0);

                        if (charCode !== 127 && internals.c1Controls(charCode) || charCode === 0 || charCode === 10) {
                            updateResult(internals.diagnoses.errExpectingQTEXT);
                        } else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.deprecatedQTEXT);
                        }

                        parseData.local += token;
                        atomData.locals[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   If the string can be represented as a dot-atom (that is, it contains
                //   no characters other than atext characters or "." surrounded by atext
                //   characters), then the dot-atom form SHOULD be used and the quoted-
                //   string form SHOULD NOT be used.

                break;
            // Quoted pair
            case internals.components.contextQuotedPair:
                // http://tools.ietf.org/html/rfc5322#section-3.2.1
                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
                //
                //   VCHAR           =  %d33-126   ; visible (printing) characters
                //   WSP             =  SP / HTAB  ; white space
                //
                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
                //
                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
                //                       %d11 /    ;  characters that do not
                //                       %d12 /    ;  include the carriage
                //                       %d14-31 / ;  return, line feed, and
                //                       %d127     ;  white space characters
                //
                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
                charCode = token.codePointAt(0);

                if (charCode !== 127 && internals.c1Controls(charCode)) {
                    // Fatal error
                    updateResult(internals.diagnoses.errExpectingQPair);
                } else if (charCode < 31 && charCode !== 9 || charCode === 127) {
                    // ' ' and '\t' are allowed
                    updateResult(internals.diagnoses.deprecatedQP);
                }

                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
                // http://tools.ietf.org/html/rfc5321#section-4.1.2
                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

                context.prev = context.now;
                // End of qpair
                context.now = context.stack.pop();
                var escapeToken = '\\' + token;

                switch (context.now) {
                    case internals.components.contextComment:
                        break;

                    case internals.components.contextQuotedString:
                        parseData.local += escapeToken;
                        atomData.locals[elementCount] += escapeToken;

                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
                        elementLength += 2;
                        break;

                    case internals.components.literal:
                        parseData.domain += escapeToken;
                        atomData.domains[elementCount] += escapeToken;

                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
                        elementLength += 2;
                        break;

                    // $lab:coverage:off$
                    default:
                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
                    // $lab:coverage:on$
                }
                break;

            // Comment
            case internals.components.contextComment:
                // http://tools.ietf.org/html/rfc5322#section-3.2.2
                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
                //
                //   ccontent = ctext / quoted-pair / comment
                switch (token) {
                    // Nested comment
                    case '(':
                        // Nested comments are ok
                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                    // End of comment
                    case ')':
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                    // Quoted pair
                    case '\\':
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                    // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                    // Fallthrough

                    case ' ':
                    case '\t':
                        updateResult(internals.diagnoses.cfwsFWS);

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    // CTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //   ctext         = %d33-39 /  ; Printable US-ASCII
                        //                   %d42-91 /  ;  characters not including
                        //                   %d93-126 / ;  "(", ")", or "\"
                        //                   obs-ctext
                        //
                        //   obs-ctext     = obs-NO-WS-CTL
                        //
                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
                        //                   %d11 /     ;  characters that do not
                        //                   %d12 /     ;  include the carriage
                        //                   %d14-31 /  ;  return, line feed, and
                        //                   %d127      ;  white space characters
                        charCode = token.codePointAt(0);

                        if (charCode === 0 || charCode === 10 || charCode !== 127 && internals.c1Controls(charCode)) {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingCTEXT);
                            break;
                        } else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.deprecatedCTEXT);
                        }
                }

                break;

            // Folding white space
            case internals.components.contextFWS:
                // http://tools.ietf.org/html/rfc5322#section-3.2.2
                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
                //                                   ; Folding white space

                // But note the erratum:
                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
                //   In the obsolete syntax, any amount of folding white space MAY be
                //   inserted where the obs-FWS rule is allowed.  This creates the
                //   possibility of having two consecutive "folds" in a line, and
                //   therefore the possibility that a line which makes up a folded header
                //   field could be composed entirely of white space.
                //
                //   obs-FWS =   1*([CRLF] WSP)

                if (prevToken === '\r') {
                    if (token === '\r') {
                        // Fatal error
                        updateResult(internals.diagnoses.errFWSCRLFx2);
                        break;
                    }

                    if (++crlfCount > 1) {
                        // Multiple folds => obsolete FWS
                        updateResult(internals.diagnoses.deprecatedFWS);
                    } else {
                        crlfCount = 1;
                    }
                }

                switch (token) {
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                        }

                        break;

                    case ' ':
                    case '\t':
                        break;

                    default:
                        if (prevToken === '\r') {
                            // Fatal error
                            updateResult(internals.diagnoses.errFWSCRLFEnd);
                        }

                        crlfCount = 0;

                        // End of FWS
                        context.prev = context.now;
                        context.now = context.stack.pop();

                        // Look at this token again in the parent context
                        --i;
                }

                prevToken = token;
                break;

            // Unexpected context
            // $lab:coverage:off$
            default:
                throw new Error('unknown context: ' + context.now);
            // $lab:coverage:on$
        } // Primary state machine

        if (maxResult > internals.categories.rfc5322) {
            // Fatal error, no point continuing
            break;
        }
    } // Token loop

    // Check for errors
    if (maxResult < internals.categories.rfc5322) {
        var _punycodeLength = Punycode.encode(parseData.domain).length;
        // Fatal errors
        if (context.now === internals.components.contextQuotedString) {
            updateResult(internals.diagnoses.errUnclosedQuotedString);
        } else if (context.now === internals.components.contextQuotedPair) {
            updateResult(internals.diagnoses.errBackslashEnd);
        } else if (context.now === internals.components.contextComment) {
            updateResult(internals.diagnoses.errUnclosedComment);
        } else if (context.now === internals.components.literal) {
            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
        } else if (token === '\r') {
            updateResult(internals.diagnoses.errFWSCRLFEnd);
        } else if (parseData.domain.length === 0) {
            updateResult(internals.diagnoses.errNoDomain);
        } else if (elementLength === 0) {
            updateResult(internals.diagnoses.errDotEnd);
        } else if (hyphenFlag) {
            updateResult(internals.diagnoses.errDomainHyphenEnd);
        }

        // Other errors
        else if (_punycodeLength > 255) {
                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
                //   The maximum total length of a domain name or number is 255 octets.
                updateResult(internals.diagnoses.rfc5322DomainTooLong);
            } else if (Buffer.byteLength(parseData.local, 'utf8') + _punycodeLength + /* '@' */1 > 254) {
                // http://tools.ietf.org/html/rfc5321#section-4.1.2
                //   Forward-path   = Path
                //
                //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
                //
                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
                //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
                //
                // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
                // erratum to RFC 3696:
                //
                // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
                //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
                //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
                //   to be 254.
                updateResult(internals.diagnoses.rfc5322TooLong);
            } else if (elementLength > 63) {
                // http://tools.ietf.org/html/rfc1035#section-2.3.4
                // labels   63 octets or less
                updateResult(internals.diagnoses.rfc5322LabelTooLong);
            } else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
                updateResult(internals.diagnoses.errDomainTooShort);
            } else if (options.tldWhitelist || options.tldBlacklist) {
                var tldAtom = atomData.domains[elementCount];

                if (!internals.validDomain(tldAtom, options)) {
                    updateResult(internals.diagnoses.errUnknownTLD);
                }
            }
    } // Check for errors

    // Finish
    if (maxResult < internals.categories.dnsWarn) {
        // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
        var code = atomData.domains[elementCount].codePointAt(0);

        if (code <= 57) {
            updateResult(internals.diagnoses.rfc5321TLDNumeric);
        }
    }

    if (maxResult < threshold) {
        maxResult = internals.diagnoses.valid;
    }

    var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

    if (callback) {
        callback(finishResult);
    }

    return finishResult;
};

exports.diagnoses = internals.validate.diagnoses = function () {

    var diag = {};
    var keys = Object.keys(internals.diagnoses);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        diag[key] = internals.diagnoses[key];
    }

    return diag;
}();

exports.normalize = internals.normalize = function (email) {

    // $lab:coverage:off$
    if (process.version[1] === '4' && email.indexOf('\0') >= 0) {
        return internals.nulNormalize(email);
    }
    // $lab:coverage:on$


    return email.normalize('NFC');
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Highest positive signed 32-bit float value */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'

/** Regular expressions */
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
	var result = [];
	var length = array.length;
	while (length--) {
		result[length] = fn(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
	var parts = string.split('@');
	var result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		string = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	string = string.replace(regexSeparators, '\x2E');
	var labels = string.split('.');
	var encoded = map(labels, fn).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	while (counter < length) {
		var value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			var extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) {
				// Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
var ucs2encode = function ucs2encode(array) {
	return String.fromCodePoint.apply(String, _toConsumableArray(array));
};

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
var basicToDigit = function basicToDigit(codePoint) {
	if (codePoint - 0x30 < 0x0A) {
		return codePoint - 0x16;
	}
	if (codePoint - 0x41 < 0x1A) {
		return codePoint - 0x41;
	}
	if (codePoint - 0x61 < 0x1A) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
var digitToBasic = function digitToBasic(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
var adapt = function adapt(delta, numPoints, firstTime) {
	var k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
var decode = function decode(input) {
	// Don't use UCS-2.
	var output = [];
	var inputLength = input.length;
	var i = 0;
	var n = initialN;
	var bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	var basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (var j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		var oldi = i;
		for (var w = 1, k = base;; /* no condition */k += base) {

			if (index >= inputLength) {
				error('invalid-input');
			}

			var digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base || digit > floor((maxInt - i) / w)) {
				error('overflow');
			}

			i += digit * w;
			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

			if (digit < t) {
				break;
			}

			var baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error('overflow');
			}

			w *= baseMinusT;
		}

		var out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);
	}

	return String.fromCodePoint.apply(String, output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
var encode = function encode(input) {
	var output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	var inputLength = input.length;

	// Initialize the state.
	var n = initialN;
	var delta = 0;
	var bias = initialBias;

	// Handle the basic code points.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var currentValue = _step.value;

			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var basicLength = output.length;
	var handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		var m = maxInt;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _currentValue = _step2.value;

				if (_currentValue >= n && _currentValue < m) {
					m = _currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow.
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		var handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _currentValue2 = _step3.value;

				if (_currentValue2 < n && ++delta > maxInt) {
					error('overflow');
				}
				if (_currentValue2 == n) {
					// Represent delta as a generalized variable-length integer.
					var q = delta;
					for (var k = base;; /* no condition */k += base) {
						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						var qMinusT = q - t;
						var baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		++delta;
		++n;
	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
var toUnicode = function toUnicode(input) {
	return mapDomain(input, function (string) {
		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
var toASCII = function toASCII(input) {
	return mapDomain(input, function (string) {
		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
var punycode = {
	/**
  * A string representing the current Punycode.js version number.
  * @memberOf punycode
  * @type String
  */
	'version': '2.1.0',
	/**
  * An object of methods to convert from JavaScript's internal character
  * representation (UCS-2) to Unicode code points, and back.
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode
  * @type Object
  */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};

module.exports = punycode;

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = {"name":"joi","description":"Object schema validation","version":"13.1.2","homepage":"https://github.com/hapijs/joi","repository":"git://github.com/hapijs/joi","main":"dist/index.js","keywords":["hapi","schema","validation"],"engines":{"node":">=8.9.0"},"dependencies":{"isemail":"3.x.x","project-utils":"https://github.com/wohlgemuth-team/project-utils.git","topo":"3.x.x"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0","chalk":"^2.4.1","code":"5.x.x","hapitoc":"1.x.x","lab":"15.x.x","react-dev-utils":"^5.0.1","webpack":"^4.11.0"},"scripts":{"test":"lab -t 100 -a code -L","test-debug":"lab -a code","test-cov-html":"lab -r html -o coverage.html -a code","toc":"hapitoc","version":"npm run toc && git add API.md README.md","build":"node scripts/build.js"},"license":"BSD-3-Clause"};

/***/ })
/******/ ]);