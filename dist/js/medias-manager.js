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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@uppy/companion-client/lib/AuthError.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/AuthError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthError = function (_Error) {
  _inherits(AuthError, _Error);

  function AuthError() {
    _classCallCheck(this, AuthError);

    var _this = _possibleConstructorReturn(this, _Error.call(this, 'Authorization required'));

    _this.name = 'AuthError';
    _this.isAuthError = true;
    return _this;
  }

  return AuthError;
}(Error);

module.exports = AuthError;

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/Provider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Provider.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");
var tokenStorage = __webpack_require__(/*! ./tokenStorage */ "./node_modules/@uppy/companion-client/lib/tokenStorage.js");

var _getName = function _getName(id) {
  return id.split('-').map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(' ');
};

module.exports = function (_RequestClient) {
  _inherits(Provider, _RequestClient);

  function Provider(uppy, opts) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _RequestClient.call(this, uppy, opts));

    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.pluginId = _this.opts.pluginId;
    _this.tokenKey = 'companion-' + _this.pluginId + '-auth-token';
    return _this;
  }

  Provider.prototype.headers = function headers() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _RequestClient.prototype.headers.call(_this2).then(function (headers) {
        _this2.getAuthToken().then(function (token) {
          resolve(_extends({}, headers, { 'uppy-auth-token': token }));
        });
      }).catch(reject);
    });
  };

  Provider.prototype.onReceiveResponse = function onReceiveResponse(response) {
    response = _RequestClient.prototype.onReceiveResponse.call(this, response);
    var authenticated = response.status !== 401;
    this.uppy.getPlugin(this.pluginId).setPluginState({ authenticated: authenticated });
    return response;
  };

  // @todo(i.olarewaju) consider whether or not this method should be exposed


  Provider.prototype.setAuthToken = function setAuthToken(token) {
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
  };

  Provider.prototype.getAuthToken = function getAuthToken() {
    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
  };

  Provider.prototype.authUrl = function authUrl() {
    return this.hostname + '/' + this.id + '/connect';
  };

  Provider.prototype.fileUrl = function fileUrl(id) {
    return this.hostname + '/' + this.id + '/get/' + id;
  };

  Provider.prototype.list = function list(directory) {
    return this.get(this.id + '/list/' + (directory || ''));
  };

  Provider.prototype.logout = function logout() {
    var _this3 = this;

    var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;

    return new Promise(function (resolve, reject) {
      _this3.get(_this3.id + '/logout?redirect=' + redirect).then(function (res) {
        _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
          return resolve(res);
        }).catch(reject);
      }).catch(reject);
    });
  };

  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }

    if (opts.serverUrl || opts.serverPattern) {
      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }

    if (opts.companionAllowedHosts) {
      var pattern = opts.companionAllowedHosts;
      // validate companionAllowedHosts param
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        throw new TypeError(plugin.id + ': the option "companionAllowedHosts" must be one of string, Array, RegExp');
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else {
      // does not start with https://
      if (/^(?!https?:\/\/).*$/i.test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = 'https://' + opts.companionUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }

    plugin.storage = plugin.opts.storage || tokenStorage;
  };

  return Provider;
}(RequestClient);

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/RequestClient.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/RequestClient.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthError = __webpack_require__(/*! ./AuthError */ "./node_modules/@uppy/companion-client/lib/AuthError.js");

// Remove the trailing slash so we can always safely append /xyz.
function stripSlash(url) {
  return url.replace(/\/$/, '');
}

module.exports = function () {
  function RequestClient(uppy, opts) {
    _classCallCheck(this, RequestClient);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
  }

  RequestClient.prototype.headers = function headers() {
    return Promise.resolve(_extends({}, this.defaultHeaders, this.opts.serverHeaders || {}));
  };

  RequestClient.prototype._getPostResponseFunc = function _getPostResponseFunc(skip) {
    var _this = this;

    return function (response) {
      if (!skip) {
        return _this.onReceiveResponse(response);
      }

      return response;
    };
  };

  RequestClient.prototype.onReceiveResponse = function onReceiveResponse(response) {
    var state = this.uppy.getState();
    var companion = state.companion || {};
    var host = this.opts.companionUrl;
    var headers = response.headers;
    // Store the self-identified domain name for the Companion instance we just hit.
    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      var _extends2;

      this.uppy.setState({
        companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
      });
    }
    return response;
  };

  RequestClient.prototype._getUrl = function _getUrl(url) {
    if (/^(https?:|)\/\//.test(url)) {
      return url;
    }
    return this.hostname + '/' + url;
  };

  RequestClient.prototype._json = function _json(res) {
    if (res.status === 401) {
      throw new AuthError();
    }

    if (res.status < 200 || res.status > 300) {
      throw new Error('Failed request to ' + res.url + '. ' + res.statusText);
    }
    return res.json();
  };

  RequestClient.prototype.get = function get(path, skipPostResponse) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.headers().then(function (headers) {
        fetch(_this2._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).then(_this2._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this2._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error('Could not get ' + _this2._getUrl(path) + '. ' + err);
          reject(err);
        });
      });
    });
  };

  RequestClient.prototype.post = function post(path, data, skipPostResponse) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      _this3.headers().then(function (headers) {
        fetch(_this3._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).then(_this3._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this3._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error('Could not post ' + _this3._getUrl(path) + '. ' + err);
          reject(err);
        });
      });
    });
  };

  RequestClient.prototype.delete = function _delete(path, data, skipPostResponse) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      _this4.headers().then(function (headers) {
        fetch(_this4.hostname + '/' + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
          return _this4._json(res).then(resolve);
        }).catch(function (err) {
          err = err.isAuthError ? err : new Error('Could not delete ' + _this4._getUrl(path) + '. ' + err);
          reject(err);
        });
      });
    });
  };

  _createClass(RequestClient, [{
    key: 'hostname',
    get: function get() {
      var _uppy$getState = this.uppy.getState(),
          companion = _uppy$getState.companion;

      var host = this.opts.companionUrl;
      return stripSlash(companion && companion[host] ? companion[host] : host);
    }
  }, {
    key: 'defaultHeaders',
    get: function get() {
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    }
  }]);

  return RequestClient;
}();

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/Socket.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Socket.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");

module.exports = function () {
  function UppySocket(opts) {
    var _this = this;

    _classCallCheck(this, UppySocket);

    this.queued = [];
    this.isOpen = false;
    this.socket = new WebSocket(opts.target);
    this.emitter = ee();

    this.socket.onopen = function (e) {
      _this.isOpen = true;

      while (_this.queued.length > 0 && _this.isOpen) {
        var first = _this.queued[0];
        _this.send(first.action, first.payload);
        _this.queued = _this.queued.slice(1);
      }
    };

    this.socket.onclose = function (e) {
      _this.isOpen = false;
    };

    this._handleMessage = this._handleMessage.bind(this);

    this.socket.onmessage = this._handleMessage;

    this.close = this.close.bind(this);
    this.emit = this.emit.bind(this);
    this.on = this.on.bind(this);
    this.once = this.once.bind(this);
    this.send = this.send.bind(this);
  }

  UppySocket.prototype.close = function close() {
    return this.socket.close();
  };

  UppySocket.prototype.send = function send(action, payload) {
    // attach uuid

    if (!this.isOpen) {
      this.queued.push({ action: action, payload: payload });
      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
  };

  UppySocket.prototype.on = function on(action, handler) {
    this.emitter.on(action, handler);
  };

  UppySocket.prototype.emit = function emit(action, payload) {
    this.emitter.emit(action, payload);
  };

  UppySocket.prototype.once = function once(action, handler) {
    this.emitter.once(action, handler);
  };

  UppySocket.prototype._handleMessage = function _handleMessage(e) {
    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
  };

  return UppySocket;
}();

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'use-strict';
/**
 * Manages communications with Companion
 */

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");
var Provider = __webpack_require__(/*! ./Provider */ "./node_modules/@uppy/companion-client/lib/Provider.js");
var Socket = __webpack_require__(/*! ./Socket */ "./node_modules/@uppy/companion-client/lib/Socket.js");

module.exports = {
  RequestClient: RequestClient,
  Provider: Provider,
  Socket: Socket
};

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/tokenStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/tokenStorage.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module serves as an Async wrapper for LocalStorage
 */

module.exports.setItem = function (key, value) {
  return new Promise(function (resolve) {
    localStorage.setItem(key, value);
    resolve();
  });
};

module.exports.getItem = function (key) {
  return Promise.resolve(localStorage.getItem(key));
};

module.exports.removeItem = function (key) {
  return new Promise(function (resolve) {
    localStorage.removeItem(key);
    resolve();
  });
};

/***/ }),

/***/ "./node_modules/@uppy/core/dist/style.css":
/*!************************************************!*\
  !*** ./node_modules/@uppy/core/dist/style.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/core/dist/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@uppy/core/lib/Plugin.js":
/*!***********************************************!*\
  !*** ./node_modules/@uppy/core/lib/Plugin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var preact = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js");
var findDOMElement = __webpack_require__(/*! @uppy/utils/lib/findDOMElement */ "./node_modules/@uppy/utils/lib/findDOMElement.js");

/**
 * Defer a frequent call to the microtask queue.
 */
function debounce(fn) {
  var calling = null;
  var latestArgs = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(function () {
        calling = null;
        // At this point `args` may be different from the most
        // recent state, if multiple calls happened since this task
        // was queued. So we use the `latestArgs`, which definitely
        // is the most recent call.
        return fn.apply(undefined, latestArgs);
      });
    }
    return calling;
  };
}

/**
 * Boilerplate that all Plugins share - and should not be used
 * directly. It also shows which methods final plugins should implement/override,
 * this deciding on structure.
 *
 * @param {object} main Uppy core object
 * @param {object} object with plugin options
 * @return {array | string} files or success/fail message
 */
module.exports = function () {
  function Plugin(uppy, opts) {
    _classCallCheck(this, Plugin);

    this.uppy = uppy;
    this.opts = opts || {};

    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
  }

  Plugin.prototype.getPluginState = function getPluginState() {
    var _uppy$getState = this.uppy.getState(),
        plugins = _uppy$getState.plugins;

    return plugins[this.id] || {};
  };

  Plugin.prototype.setPluginState = function setPluginState(update) {
    var _extends2;

    var _uppy$getState2 = this.uppy.getState(),
        plugins = _uppy$getState2.plugins;

    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], update), _extends2))
    });
  };

  Plugin.prototype.update = function update(state) {
    if (typeof this.el === 'undefined') {
      return;
    }

    if (this._updateUI) {
      this._updateUI(state);
    }
  };

  /**
  * Called when plugin is mounted, whether in DOM or into another plugin.
  * Needed because sometimes plugins are mounted separately/after `install`,
  * so this.el and this.parent might not be available in `install`.
  * This is the case with @uppy/react plugins, for example.
  */


  Plugin.prototype.onMount = function onMount() {};

  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   *
   * @param {String|Object} target
   *
   */


  Plugin.prototype.mount = function mount(target, plugin) {
    var _this = this;

    var callerPluginName = plugin.id;

    var targetElement = findDOMElement(target);

    if (targetElement) {
      this.isTargetDOMEl = true;

      // API for plugins that require a synchronous rerender.
      this.rerender = function (state) {
        // plugin could be removed, but this.rerender is debounced below,
        // so it could still be called even after uppy.removePlugin or uppy.close
        // hence the check
        if (!_this.uppy.getPlugin(_this.id)) return;
        _this.el = preact.render(_this.render(state), targetElement, _this.el);
      };
      this._updateUI = debounce(this.rerender);

      this.uppy.log('Installing ' + callerPluginName + ' to a DOM element');

      // clear everything inside the target container
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }

      this.el = preact.render(this.render(this.uppy.getState()), targetElement);

      this.onMount();
      return this.el;
    }

    var targetPlugin = void 0;
    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target instanceof Plugin) {
      // Targeting a plugin *instance*
      targetPlugin = target;
    } else if (typeof target === 'function') {
      // Targeting a plugin type
      var Target = target;
      // Find the target plugin instance.
      this.uppy.iteratePlugins(function (plugin) {
        if (plugin instanceof Target) {
          targetPlugin = plugin;
          return false;
        }
      });
    }

    if (targetPlugin) {
      this.uppy.log('Installing ' + callerPluginName + ' to ' + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);

      this.onMount();
      return this.el;
    }

    this.uppy.log('Not installing ' + callerPluginName);
    throw new Error('Invalid target option given to ' + callerPluginName + '. Please make sure that the element \n      exists on the page, or that the plugin you are targeting has been installed. Check that the <script> tag initializing Uppy \n      comes at the bottom of the page, before the closing </body> tag (see https://github.com/transloadit/uppy/issues/1042).');
  };

  Plugin.prototype.render = function render(state) {
    throw new Error('Extend the render method to add your plugin to a DOM element');
  };

  Plugin.prototype.addTarget = function addTarget(plugin) {
    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
  };

  Plugin.prototype.unmount = function unmount() {
    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  };

  Plugin.prototype.install = function install() {};

  Plugin.prototype.uninstall = function uninstall() {
    this.unmount();
  };

  return Plugin;
}();

/***/ }),

/***/ "./node_modules/@uppy/core/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@uppy/core/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");
var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
// const throttle = require('lodash.throttle')
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var match = __webpack_require__(/*! mime-match */ "./node_modules/mime-match/index.js");
var DefaultStore = __webpack_require__(/*! @uppy/store-default */ "./node_modules/@uppy/store-default/lib/index.js");
var getFileType = __webpack_require__(/*! @uppy/utils/lib/getFileType */ "./node_modules/@uppy/utils/lib/getFileType.js");
var getFileNameAndExtension = __webpack_require__(/*! @uppy/utils/lib/getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var generateFileID = __webpack_require__(/*! @uppy/utils/lib/generateFileID */ "./node_modules/@uppy/utils/lib/generateFileID.js");
var getTimeStamp = __webpack_require__(/*! @uppy/utils/lib/getTimeStamp */ "./node_modules/@uppy/utils/lib/getTimeStamp.js");
var supportsUploadProgress = __webpack_require__(/*! ./supportsUploadProgress */ "./node_modules/@uppy/core/lib/supportsUploadProgress.js");
var Plugin = __webpack_require__(/*! ./Plugin */ "./node_modules/@uppy/core/lib/Plugin.js"); // Exported from here.

/**
 * Uppy Core module.
 * Manages plugins, state updates, acts as an event bus,
 * adds/removes files and metadata.
 */

var Uppy = function () {
  /**
  * Instantiate Uppy
  * @param {object} opts — Uppy options
  */
  function Uppy(opts) {
    var _this = this;

    _classCallCheck(this, Uppy);

    this.defaultLocale = {
      strings: {
        youCanOnlyUploadX: {
          0: 'You can only upload %{smart_count} file',
          1: 'You can only upload %{smart_count} files',
          2: 'You can only upload %{smart_count} files'
        },
        youHaveToAtLeastSelectX: {
          0: 'You have to select at least %{smart_count} file',
          1: 'You have to select at least %{smart_count} files',
          2: 'You have to select at least %{smart_count} files'
        },
        exceedsSize: 'This file exceeds maximum allowed size of',
        youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
        companionError: 'Connection with Companion failed',
        companionAuthError: 'Authorization required',
        failedToUpload: 'Failed to upload %{file}',
        noInternetConnection: 'No Internet connection',
        connectedToInternet: 'Connected to the Internet',
        // Strings for remote providers
        noFilesFound: 'You have no files or folders here',
        selectXFiles: {
          0: 'Select %{smart_count} file',
          1: 'Select %{smart_count} files',
          2: 'Select %{smart_count} files'
        },
        cancel: 'Cancel',
        logOut: 'Log out',
        filter: 'Filter',
        resetFilter: 'Reset filter',
        loading: 'Loading...',
        authenticateWithTitle: 'Please authenticate with %{pluginName} to select files',
        authenticateWith: 'Connect to %{pluginName}'
      }

      // set default options
    };var defaultOptions = {
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null,
        allowedFileTypes: null
      },
      meta: {},
      onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
        return currentFile;
      },
      onBeforeUpload: function onBeforeUpload(files) {
        return files;
      },
      store: DefaultStore()

      // Merge default options with the ones set by user
    };this.opts = _extends({}, defaultOptions, opts);
    this.opts.restrictions = _extends({}, defaultOptions.restrictions, this.opts.restrictions);

    // i18n
    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);

    // Container for different types of plugins
    this.plugins = {};

    this.getState = this.getState.bind(this);
    this.getPlugin = this.getPlugin.bind(this);
    this.setFileMeta = this.setFileMeta.bind(this);
    this.setFileState = this.setFileState.bind(this);
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this._calculateProgress = this._calculateProgress.bind(this);
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    this.resetProgress = this.resetProgress.bind(this);

    this.pauseAll = this.pauseAll.bind(this);
    this.resumeAll = this.resumeAll.bind(this);
    this.retryAll = this.retryAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.retryUpload = this.retryUpload.bind(this);
    this.upload = this.upload.bind(this);

    this.emitter = ee();
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.once = this.emitter.once.bind(this.emitter);
    this.emit = this.emitter.emit.bind(this.emitter);

    this.preProcessors = [];
    this.uploaders = [];
    this.postProcessors = [];

    this.store = this.opts.store;
    this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      totalProgress: 0,
      meta: _extends({}, this.opts.meta),
      info: {
        isHidden: true,
        type: 'info',
        message: ''
      }
    });

    this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
      _this.emit('state-update', prevState, nextState, patch);
      _this.updateAll(nextState);
    });

    // for debugging and testing
    // this.updateNum = 0
    if (this.opts.debug && typeof window !== 'undefined') {
      window['uppyLog'] = '';
      window[this.opts.id] = this;
    }

    this._addListeners();
  }

  Uppy.prototype.on = function on(event, callback) {
    this.emitter.on(event, callback);
    return this;
  };

  Uppy.prototype.off = function off(event, callback) {
    this.emitter.off(event, callback);
    return this;
  };

  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */


  Uppy.prototype.updateAll = function updateAll(state) {
    this.iteratePlugins(function (plugin) {
      plugin.update(state);
    });
  };

  /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */


  Uppy.prototype.setState = function setState(patch) {
    this.store.setState(patch);
  };

  /**
   * Returns current state.
   * @return {object}
   */


  Uppy.prototype.getState = function getState() {
    return this.store.getState();
  };

  /**
  * Back compat for when uppy.state is used instead of uppy.getState().
  */


  /**
  * Shorthand to set state for a specific file.
  */
  Uppy.prototype.setFileState = function setFileState(fileID, state) {
    var _extends2;

    if (!this.getState().files[fileID]) {
      throw new Error('Can\u2019t set state for ' + fileID + ' (the file could have been removed)');
    }

    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
  };

  Uppy.prototype.resetProgress = function resetProgress() {
    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: false
    };
    var files = _extends({}, this.getState().files);
    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
      var updatedFile = _extends({}, files[fileID]);
      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
    });

    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });

    // TODO Document on the website
    this.emit('reset-progress');
  };

  Uppy.prototype.addPreProcessor = function addPreProcessor(fn) {
    this.preProcessors.push(fn);
  };

  Uppy.prototype.removePreProcessor = function removePreProcessor(fn) {
    var i = this.preProcessors.indexOf(fn);
    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
  };

  Uppy.prototype.addPostProcessor = function addPostProcessor(fn) {
    this.postProcessors.push(fn);
  };

  Uppy.prototype.removePostProcessor = function removePostProcessor(fn) {
    var i = this.postProcessors.indexOf(fn);
    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
  };

  Uppy.prototype.addUploader = function addUploader(fn) {
    this.uploaders.push(fn);
  };

  Uppy.prototype.removeUploader = function removeUploader(fn) {
    var i = this.uploaders.indexOf(fn);
    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
  };

  Uppy.prototype.setMeta = function setMeta(data) {
    var updatedMeta = _extends({}, this.getState().meta, data);
    var updatedFiles = _extends({}, this.getState().files);

    Object.keys(updatedFiles).forEach(function (fileID) {
      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
    });

    this.log('Adding metadata:');
    this.log(data);

    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  };

  Uppy.prototype.setFileMeta = function setFileMeta(fileID, data) {
    var updatedFiles = _extends({}, this.getState().files);
    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that’s not with us anymore: ', fileID);
      return;
    }
    var newMeta = _extends({}, updatedFiles[fileID].meta, data);
    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({ files: updatedFiles });
  };

  /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */


  Uppy.prototype.getFile = function getFile(fileID) {
    return this.getState().files[fileID];
  };

  /**
   * Get all files in an array.
   */


  Uppy.prototype.getFiles = function getFiles() {
    var _getState = this.getState(),
        files = _getState.files;

    return Object.keys(files).map(function (fileID) {
      return files[fileID];
    });
  };

  /**
  * Check if minNumberOfFiles restriction is reached before uploading.
  *
  * @private
  */


  Uppy.prototype._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;

    if (Object.keys(files).length < minNumberOfFiles) {
      throw new Error('' + this.i18n('youHaveToAtLeastSelectX', { smart_count: minNumberOfFiles }));
    }
  };

  /**
  * Check if file passes a set of restrictions set in options: maxFileSize,
  * maxNumberOfFiles and allowedFileTypes.
  *
  * @param {object} file object to check
  * @private
  */


  Uppy.prototype._checkRestrictions = function _checkRestrictions(file) {
    var _opts$restrictions = this.opts.restrictions,
        maxFileSize = _opts$restrictions.maxFileSize,
        maxNumberOfFiles = _opts$restrictions.maxNumberOfFiles,
        allowedFileTypes = _opts$restrictions.allowedFileTypes;


    if (maxNumberOfFiles) {
      if (Object.keys(this.getState().files).length + 1 > maxNumberOfFiles) {
        throw new Error('' + this.i18n('youCanOnlyUploadX', { smart_count: maxNumberOfFiles }));
      }
    }

    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.some(function (type) {
        // if (!file.type) return false

        // is this is a mime-type
        if (type.indexOf('/') > -1) {
          if (!file.type) return false;
          return match(file.type, type);
        }

        // otherwise this is likely an extension
        if (type[0] === '.') {
          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }
        return false;
      });

      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
        throw new Error(this.i18n('youCanOnlyUploadFileTypes', { types: allowedFileTypesString }));
      }
    }

    // We can't check maxFileSize if the size is unknown.
    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
        throw new Error(this.i18n('exceedsSize') + ' ' + prettyBytes(maxFileSize));
      }
    }
  };

  /**
  * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
  * try to guess file type in a clever way, check file against restrictions,
  * and start an upload if `autoProceed === true`.
  *
  * @param {object} file object to add
  */


  Uppy.prototype.addFile = function addFile(file) {
    var _this2 = this,
        _extends3;

    var _getState2 = this.getState(),
        files = _getState2.files,
        allowNewUpload = _getState2.allowNewUpload;

    var onError = function onError(msg) {
      var err = (typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object' ? msg : new Error(msg);
      _this2.log(err.message);
      _this2.info(err.message, 'error', 5000);
      throw err;
    };

    if (allowNewUpload === false) {
      onError(new Error('Cannot add new files: already uploading.'));
    }

    var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);

    if (onBeforeFileAddedResult === false) {
      this.log('Not adding file because onBeforeFileAdded returned false');
      return;
    }

    if ((typeof onBeforeFileAddedResult === 'undefined' ? 'undefined' : _typeof(onBeforeFileAddedResult)) === 'object' && onBeforeFileAddedResult) {
      // warning after the change in 0.24
      if (onBeforeFileAddedResult.then) {
        throw new TypeError('onBeforeFileAdded() returned a Promise, but this is no longer supported. It must be synchronous.');
      }
      file = onBeforeFileAddedResult;
    }

    var fileType = getFileType(file);
    var fileName = void 0;
    if (file.name) {
      fileName = file.name;
    } else if (fileType.split('/')[0] === 'image') {
      fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
    } else {
      fileName = 'noname';
    }
    var fileExtension = getFileNameAndExtension(fileName).extension;
    var isRemote = file.isRemote || false;

    var fileID = generateFileID(file);

    var meta = file.meta || {};
    meta.name = fileName;
    meta.type = fileType;

    // `null` means the size is unknown.
    var size = isFinite(file.data.size) ? file.data.size : null;
    var newFile = {
      source: file.source || '',
      id: fileID,
      name: fileName,
      extension: fileExtension || '',
      meta: _extends({}, this.getState().meta, meta),
      type: fileType,
      data: file.data,
      progress: {
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: size,
        uploadComplete: false,
        uploadStarted: false
      },
      size: size,
      isRemote: isRemote,
      remote: file.remote || '',
      preview: file.preview
    };

    try {
      this._checkRestrictions(newFile);
    } catch (err) {
      this.emit('restriction-failed', newFile, err);
      onError(err);
    }

    this.setState({
      files: _extends({}, files, (_extends3 = {}, _extends3[fileID] = newFile, _extends3))
    });

    this.emit('file-added', newFile);
    this.log('Added file: ' + fileName + ', ' + fileID + ', mime type: ' + fileType);

    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
        _this2.scheduledAutoProceed = null;
        _this2.upload().catch(function (err) {
          console.error(err.stack || err.message || err);
        });
      }, 4);
    }
  };

  Uppy.prototype.removeFile = function removeFile(fileID) {
    var _this3 = this;

    var _getState3 = this.getState(),
        files = _getState3.files,
        currentUploads = _getState3.currentUploads;

    var updatedFiles = _extends({}, files);
    var removedFile = updatedFiles[fileID];
    delete updatedFiles[fileID];

    // Remove this file from its `currentUpload`.
    var updatedUploads = _extends({}, currentUploads);
    var removeUploads = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
      var newFileIDs = currentUploads[uploadID].fileIDs.filter(function (uploadFileID) {
        return uploadFileID !== fileID;
      });
      // Remove the upload if no files are associated with it anymore.
      if (newFileIDs.length === 0) {
        removeUploads.push(uploadID);
        return;
      }

      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
    });

    this.setState({
      currentUploads: updatedUploads,
      files: updatedFiles
    });

    removeUploads.forEach(function (uploadID) {
      _this3._removeUpload(uploadID);
    });

    this._calculateTotalProgress();
    this.emit('file-removed', removedFile);
    this.log('File removed: ' + removedFile.id);
  };

  Uppy.prototype.pauseResume = function pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      return;
    }

    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;

    this.setFileState(fileID, {
      isPaused: isPaused
    });

    this.emit('upload-pause', fileID, isPaused);

    return isPaused;
  };

  Uppy.prototype.pauseAll = function pauseAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });

    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({ files: updatedFiles });

    this.emit('pause-all');
  };

  Uppy.prototype.resumeAll = function resumeAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });

    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({ files: updatedFiles });

    this.emit('resume-all');
  };

  Uppy.prototype.retryAll = function retryAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
      return updatedFiles[file].error;
    });

    filesToRetry.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      error: null
    });

    this.emit('retry-all', filesToRetry);

    var uploadID = this._createUpload(filesToRetry);
    return this._runUpload(uploadID);
  };

  Uppy.prototype.cancelAll = function cancelAll() {
    var _this4 = this;

    this.emit('cancel-all');

    var files = Object.keys(this.getState().files);
    files.forEach(function (fileID) {
      _this4.removeFile(fileID);
    });

    this.setState({
      allowNewUpload: true,
      totalProgress: 0,
      error: null
    });
  };

  Uppy.prototype.retryUpload = function retryUpload(fileID) {
    var updatedFiles = _extends({}, this.getState().files);
    var updatedFile = _extends({}, updatedFiles[fileID], { error: null, isPaused: false });
    updatedFiles[fileID] = updatedFile;
    this.setState({
      files: updatedFiles
    });

    this.emit('upload-retry', fileID);

    var uploadID = this._createUpload([fileID]);
    return this._runUpload(uploadID);
  };

  Uppy.prototype.reset = function reset() {
    this.cancelAll();
  };

  Uppy.prototype._calculateProgress = function _calculateProgress(file, data) {
    if (!this.getFile(file.id)) {
      this.log('Not setting progress for a file that has been removed: ' + file.id);
      return;
    }

    // bytesTotal may be null or zero; in that case we can't divide by it
    var canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
    this.setFileState(file.id, {
      progress: _extends({}, this.getFile(file.id).progress, {
        bytesUploaded: data.bytesUploaded,
        bytesTotal: data.bytesTotal,
        percentage: canHavePercentage
        // TODO(goto-bus-stop) flooring this should probably be the choice of the UI?
        // we get more accurate calculations if we don't round this at all.
        ? Math.floor(data.bytesUploaded / data.bytesTotal * 100) : 0
      })
    });

    this._calculateTotalProgress();
  };

  Uppy.prototype._calculateTotalProgress = function _calculateTotalProgress() {
    // calculate total progress, using the number of files currently uploading,
    // multiplied by 100 and the summ of individual progress of each file
    var files = this.getFiles();

    var inProgress = files.filter(function (file) {
      return file.progress.uploadStarted;
    });

    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({ totalProgress: 0 });
      return;
    }

    var sizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal != null;
    });
    var unsizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal == null;
    });

    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
        return acc + file.progress.percentage;
      }, 0);
      var _totalProgress = Math.round(currentProgress / progressMax * 100);
      this.setState({ totalProgress: _totalProgress });
      return;
    }

    var totalSize = sizedFiles.reduce(function (acc, file) {
      return acc + file.progress.bytesTotal;
    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;

    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
      uploadedSize += file.progress.bytesUploaded;
    });
    unsizedFiles.forEach(function (file) {
      uploadedSize += averageSize * (file.progress.percentage || 0);
    });

    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);

    // hot fix, because:
    // uploadedSize ended up larger than totalSize, resulting in 1325% total
    if (totalProgress > 100) {
      totalProgress = 100;
    }

    this.setState({ totalProgress: totalProgress });
    this.emit('progress', totalProgress);
  };

  /**
   * Registers listeners for all global actions, like:
   * `error`, `file-removed`, `upload-progress`
   */


  Uppy.prototype._addListeners = function _addListeners() {
    var _this5 = this;

    this.on('error', function (error) {
      _this5.setState({ error: error.message });
    });

    this.on('upload-error', function (file, error, response) {
      _this5.setFileState(file.id, {
        error: error.message,
        response: response
      });

      _this5.setState({ error: error.message });

      var message = _this5.i18n('failedToUpload', { file: file.name });
      if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error.message) {
        message = { message: message, details: error.message };
      }
      _this5.info(message, 'error', 5000);
    });

    this.on('upload', function () {
      _this5.setState({ error: null });
    });

    this.on('upload-started', function (file, upload) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      });
    });

    // upload progress events can occur frequently, especially when you have a good
    // connection to the remote server. Therefore, we are throtteling them to
    // prevent accessive function calls.
    // see also: https://github.com/tus/tus-js-client/commit/9940f27b2361fd7e10ba58b09b60d82422183bbb
    // const _throttledCalculateProgress = throttle(this._calculateProgress, 100, { leading: true, trailing: true })

    this.on('upload-progress', this._calculateProgress);

    this.on('upload-success', function (file, uploadResp) {
      var currentProgress = _this5.getFile(file.id).progress;
      _this5.setFileState(file.id, {
        progress: _extends({}, currentProgress, {
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        }),
        response: uploadResp,
        uploadURL: uploadResp.uploadURL,
        isPaused: false
      });

      _this5._calculateTotalProgress();
    });

    this.on('preprocess-progress', function (file, progress) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: _extends({}, _this5.getFile(file.id).progress, {
          preprocess: progress
        })
      });
    });

    this.on('preprocess-complete', function (file) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      var files = _extends({}, _this5.getState().files);
      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.preprocess;

      _this5.setState({ files: files });
    });

    this.on('postprocess-progress', function (file, progress) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: _extends({}, _this5.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
    });

    this.on('postprocess-complete', function (file) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      var files = _extends({}, _this5.getState().files);
      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.postprocess;
      // TODO should we set some kind of `fullyComplete` property on the file object
      // so it's easier to see that the file is upload…fully complete…rather than
      // what we have to do now (`uploadComplete && !postprocess`)

      _this5.setState({ files: files });
    });

    this.on('restored', function () {
      // Files may have changed--ensure progress is still accurate.
      _this5._calculateTotalProgress();
    });

    // show informer if offline
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
        return _this5.updateOnlineStatus();
      });
      window.addEventListener('offline', function () {
        return _this5.updateOnlineStatus();
      });
      setTimeout(function () {
        return _this5.updateOnlineStatus();
      }, 3000);
    }
  };

  Uppy.prototype.updateOnlineStatus = function updateOnlineStatus() {
    var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;
    if (!online) {
      this.emit('is-offline');
      this.info(this.i18n('noInternetConnection'), 'error', 0);
      this.wasOffline = true;
    } else {
      this.emit('is-online');
      if (this.wasOffline) {
        this.emit('back-online');
        this.info(this.i18n('connectedToInternet'), 'success', 3000);
        this.wasOffline = false;
      }
    }
  };

  Uppy.prototype.getID = function getID() {
    return this.opts.id;
  };

  /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @return {Object} self for chaining
   */


  Uppy.prototype.use = function use(Plugin, opts) {
    if (typeof Plugin !== 'function') {
      var msg = 'Expected a plugin class, but got ' + (Plugin === null ? 'null' : typeof Plugin === 'undefined' ? 'undefined' : _typeof(Plugin)) + '.' + ' Please verify that the plugin was imported and spelled correctly.';
      throw new TypeError(msg);
    }

    // Instantiate
    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];

    if (!pluginId) {
      throw new Error('Your plugin must have an id');
    }

    if (!plugin.type) {
      throw new Error('Your plugin must have a type');
    }

    var existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      var _msg = 'Already found a plugin named \'' + existsPluginAlready.id + '\'. ' + ('Tried to use: \'' + pluginId + '\'.\n') + 'Uppy plugins must have unique \'id\' options. See https://uppy.io/docs/plugins/#id.';
      throw new Error(_msg);
    }

    this.plugins[plugin.type].push(plugin);
    plugin.install();

    return this;
  };

  /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @return {object | boolean}
   */


  Uppy.prototype.getPlugin = function getPlugin(id) {
    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
      if (plugin.id === id) {
        foundPlugin = plugin;
        return false;
      }
    });
    return foundPlugin;
  };

  /**
   * Iterate through all `use`d plugins.
   *
   * @param {function} method that will be run on each plugin
   */


  Uppy.prototype.iteratePlugins = function iteratePlugins(method) {
    var _this6 = this;

    Object.keys(this.plugins).forEach(function (pluginType) {
      _this6.plugins[pluginType].forEach(method);
    });
  };

  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */


  Uppy.prototype.removePlugin = function removePlugin(instance) {
    this.log('Removing plugin ' + instance.id);
    this.emit('plugin-remove', instance);

    if (instance.uninstall) {
      instance.uninstall();
    }

    var list = this.plugins[instance.type].slice();
    var index = list.indexOf(instance);
    if (index !== -1) {
      list.splice(index, 1);
      this.plugins[instance.type] = list;
    }

    var updatedState = this.getState();
    delete updatedState.plugins[instance.id];
    this.setState(updatedState);
  };

  /**
   * Uninstall all plugins and close down this Uppy instance.
   */


  Uppy.prototype.close = function close() {
    var _this7 = this;

    this.log('Closing Uppy instance ' + this.opts.id + ': removing all files and uninstalling plugins');

    this.reset();

    this._storeUnsubscribe();

    this.iteratePlugins(function (plugin) {
      _this7.removePlugin(plugin);
    });
  };

  /**
  * Set info message in `state.info`, so that UI plugins like `Informer`
  * can display the message.
  *
  * @param {string | object} message Message to be displayed by the informer
  * @param {string} [type]
  * @param {number} [duration]
  */

  Uppy.prototype.info = function info(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

    var isComplexMessage = (typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object';

    this.setState({
      info: {
        isHidden: false,
        type: type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }
    });

    this.emit('info-visible');

    clearTimeout(this.infoTimeoutID);
    if (duration === 0) {
      this.infoTimeoutID = undefined;
      return;
    }

    // hide the informer after `duration` milliseconds
    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
  };

  Uppy.prototype.hideInfo = function hideInfo() {
    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });
    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
  };

  /**
   * Logs stuff to console, only if `debug` is set to true. Silent in production.
   *
   * @param {String|Object} message to log
   * @param {String} [type] optional `error` or `warning`
   */


  Uppy.prototype.log = function log(message, type) {
    if (!this.opts.debug) {
      return;
    }

    var prefix = '[Uppy] [' + getTimeStamp() + ']';

    if (type === 'error') {
      console.error(prefix, message);
      return;
    }

    if (type === 'warning') {
      console.warn(prefix, message);
      return;
    }

    console.log(prefix, message);
  };

  /**
   * Obsolete, event listeners are now added in the constructor.
   */


  Uppy.prototype.run = function run() {
    this.log('Calling run() is no longer necessary.', 'warning');
    return this;
  };

  /**
   * Restore an upload by its ID.
   */


  Uppy.prototype.restore = function restore(uploadID) {
    this.log('Core: attempting to restore upload "' + uploadID + '"');

    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);
      return Promise.reject(new Error('Nonexistent upload'));
    }

    return this._runUpload(uploadID);
  };

  /**
   * Create an upload for a bunch of files.
   *
   * @param {Array<string>} fileIDs File IDs to include in this upload.
   * @return {string} ID of this upload.
   */


  Uppy.prototype._createUpload = function _createUpload(fileIDs) {
    var _extends4;

    var _getState4 = this.getState(),
        allowNewUpload = _getState4.allowNewUpload,
        currentUploads = _getState4.currentUploads;

    if (!allowNewUpload) {
      throw new Error('Cannot create a new upload: already uploading.');
    }

    var uploadID = cuid();

    this.emit('upload', {
      id: uploadID,
      fileIDs: fileIDs
    });

    this.setState({
      allowNewUpload: this.opts.allowMultipleUploads !== false,

      currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
        fileIDs: fileIDs,
        step: 0,
        result: {}
      }, _extends4))
    });

    return uploadID;
  };

  Uppy.prototype._getUpload = function _getUpload(uploadID) {
    var _getState5 = this.getState(),
        currentUploads = _getState5.currentUploads;

    return currentUploads[uploadID];
  };

  /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */


  Uppy.prototype.addResultData = function addResultData(uploadID, data) {
    var _extends5;

    if (!this._getUpload(uploadID)) {
      this.log('Not setting result for an upload that has been removed: ' + uploadID);
      return;
    }
    var currentUploads = this.getState().currentUploads;
    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });
    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
  };

  /**
   * Remove an upload, eg. if it has been canceled or completed.
   *
   * @param {string} uploadID The ID of the upload.
   */


  Uppy.prototype._removeUpload = function _removeUpload(uploadID) {
    var currentUploads = _extends({}, this.getState().currentUploads);
    delete currentUploads[uploadID];

    this.setState({
      currentUploads: currentUploads
    });
  };

  /**
   * Run an upload. This picks up where it left off in case the upload is being restored.
   *
   * @private
   */


  Uppy.prototype._runUpload = function _runUpload(uploadID) {
    var _this8 = this;

    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;

    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
      // Skip this step if we are restoring and have already completed this step before.
      if (step < restoreStep) {
        return;
      }

      lastStep = lastStep.then(function () {
        var _extends6;

        var _getState6 = _this8.getState(),
            currentUploads = _getState6.currentUploads;

        var currentUpload = _extends({}, currentUploads[uploadID], {
          step: step
        });
        _this8.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = currentUpload, _extends6))
        });

        // TODO give this the `currentUpload` object as its only parameter maybe?
        // Otherwise when more metadata may be added to the upload this would keep getting more parameters
        return fn(currentUpload.fileIDs, uploadID);
      }).then(function (result) {
        return null;
      });
    });

    // Not returning the `catch`ed promise, because we still want to return a rejected
    // promise from this method if the upload failed.
    lastStep.catch(function (err) {
      _this8.emit('error', err, uploadID);
      _this8._removeUpload(uploadID);
    });

    return lastStep.then(function () {
      // Set result data.
      var _getState7 = _this8.getState(),
          currentUploads = _getState7.currentUploads;

      var currentUpload = currentUploads[uploadID];
      if (!currentUpload) {
        return;
      }

      var files = currentUpload.fileIDs.map(function (fileID) {
        return _this8.getFile(fileID);
      });
      var successful = files.filter(function (file) {
        return !file.error;
      });
      var failed = files.filter(function (file) {
        return file.error;
      });
      _this8.addResultData(uploadID, { successful: successful, failed: failed, uploadID: uploadID });
    }).then(function () {
      // Emit completion events.
      // This is in a separate function so that the `currentUploads` variable
      // always refers to the latest state. In the handler right above it refers
      // to an outdated object without the `.result` property.
      var _getState8 = _this8.getState(),
          currentUploads = _getState8.currentUploads;

      if (!currentUploads[uploadID]) {
        return;
      }
      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;
      _this8.emit('complete', result);

      _this8._removeUpload(uploadID);

      return result;
    }).then(function (result) {
      if (result == null) {
        _this8.log('Not setting result for an upload that has been removed: ' + uploadID);
      }
      return result;
    });
  };

  /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @return {Promise}
   */


  Uppy.prototype.upload = function upload() {
    var _this9 = this;

    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }

    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);

    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }

    if (onBeforeUploadResult && (typeof onBeforeUploadResult === 'undefined' ? 'undefined' : _typeof(onBeforeUploadResult)) === 'object') {
      // warning after the change in 0.24
      if (onBeforeUploadResult.then) {
        throw new TypeError('onBeforeUpload() returned a Promise, but this is no longer supported. It must be synchronous.');
      }

      files = onBeforeUploadResult;
    }

    return Promise.resolve().then(function () {
      return _this9._checkMinNumberOfFiles(files);
    }).then(function () {
      var _getState9 = _this9.getState(),
          currentUploads = _getState9.currentUploads;
      // get a list of files that are currently assigned to uploads


      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
        return prev.concat(currentUploads[curr].fileIDs);
      }, []);

      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
        var file = _this9.getFile(fileID);
        // if the file hasn't started uploading and hasn't already been assigned to an upload..
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });

      var uploadID = _this9._createUpload(waitingFileIDs);
      return _this9._runUpload(uploadID);
    }).catch(function (err) {
      var message = (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err.message : err;
      var details = (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err.details : null;
      _this9.log(message + ' ' + details);
      _this9.info({ message: message, details: details }, 'error', 4000);
      return Promise.reject((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err : new Error(err));
    });
  };

  _createClass(Uppy, [{
    key: 'state',
    get: function get() {
      return this.getState();
    }
  }]);

  return Uppy;
}();

module.exports = function (opts) {
  return new Uppy(opts);
};

// Expose class constructor.
module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;

/***/ }),

/***/ "./node_modules/@uppy/core/lib/supportsUploadProgress.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/core/lib/supportsUploadProgress.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Edge 15.x does not fire 'progress' events on uploads.
// See https://github.com/transloadit/uppy/issues/945
// And https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12224510/
module.exports = function supportsUploadProgress(userAgent) {
  // Allow passing in userAgent for tests
  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  // Assume it works because basically everything supports progress events.
  if (!userAgent) return true;

  var m = /Edge\/(\d+\.\d+)/.exec(userAgent);
  if (!m) return true;

  var edgeVersion = m[1];

  var _edgeVersion$split = edgeVersion.split('.'),
      major = _edgeVersion$split[0],
      minor = _edgeVersion$split[1];

  major = parseInt(major, 10);
  minor = parseInt(minor, 10);

  // Worked before:
  // Edge 40.15063.0.0
  // Microsoft EdgeHTML 15.15063
  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  }

  // Fixed in:
  // Microsoft EdgeHTML 18.18218
  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  }

  // other versions don't work.
  return false;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/dist/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/dashboard/dist/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/dashboard/dist/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h,
    Component = _require.Component;

var ActionBrowseTagline = function (_Component) {
  _inherits(ActionBrowseTagline, _Component);

  function ActionBrowseTagline(props) {
    _classCallCheck(this, ActionBrowseTagline);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  ActionBrowseTagline.prototype.handleClick = function handleClick(ev) {
    this.input.click();
  };

  ActionBrowseTagline.prototype.render = function render() {
    var _this2 = this;

    var browse = h(
      "button",
      { type: "button", "class": "uppy-Dashboard-browse", onclick: this.handleClick },
      this.props.i18n('browse')
    );

    // empty value="" on file input, so that the input is cleared after a file is selected,
    // because Uppy will be handling the upload and so we can select same file
    // after removing — otherwise browser thinks it’s already selected
    return h(
      "div",
      { "class": "uppy-Dashboard-dropFilesTitle" },
      this.props.acquirers.length === 0 ? this.props.i18nArray('dropPaste', { browse: browse }) : this.props.i18nArray('dropPasteImport', { browse: browse }),
      h("input", { "class": "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabindex: -1,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onchange: this.props.handleInputChange,
        accept: this.props.allowedFileTypes,
        value: "",
        ref: function ref(input) {
          _this2.input = input;
        } })
    );
  };

  return ActionBrowseTagline;
}(Component);

module.exports = ActionBrowseTagline;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFiles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionBrowseTagline = __webpack_require__(/*! ./ActionBrowseTagline */ "./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js");

var _require = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    localIcon = _require.localIcon;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require2.h,
    Component = _require2.Component;

var poweredByUppy = function poweredByUppy(props) {
  return h(
    'a',
    { tabindex: '-1', href: 'https://uppy.io', rel: 'noreferrer noopener', target: '_blank', 'class': 'uppy-Dashboard-poweredBy' },
    props.i18n('poweredBy'),
    ' ',
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon uppy-Dashboard-poweredByIcon', width: '11', height: '11', viewBox: '0 0 11 11' },
      h('path', { d: 'M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z', 'fill-rule': 'evenodd' })
    ),
    h(
      'span',
      { 'class': 'uppy-Dashboard-poweredByUppy' },
      'Uppy'
    )
  );
};

var AddFiles = function (_Component) {
  _inherits(AddFiles, _Component);

  function AddFiles(props) {
    _classCallCheck(this, AddFiles);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  AddFiles.prototype.handleClick = function handleClick(ev) {
    this.input.click();
  };

  AddFiles.prototype.render = function render() {
    var _this2 = this;

    var hasAcquirers = this.props.acquirers.length !== 0;

    if (!hasAcquirers) {
      return h(
        'div',
        { 'class': 'uppy-DashboardAddFiles' },
        h(
          'div',
          { 'class': 'uppy-DashboardTabs' },
          h(ActionBrowseTagline, {
            acquirers: this.props.acquirers,
            handleInputChange: this.props.handleInputChange,
            i18n: this.props.i18n,
            i18nArray: this.props.i18nArray,
            allowedFileTypes: this.props.allowedFileTypes,
            maxNumberOfFiles: this.props.maxNumberOfFiles
          })
        ),
        h(
          'div',
          { 'class': 'uppy-DashboardAddFiles-info' },
          this.props.note && h(
            'div',
            { 'class': 'uppy-Dashboard-note' },
            this.props.note
          ),
          this.props.proudlyDisplayPoweredByUppy && poweredByUppy(this.props)
        )
      );
    }

    // empty value="" on file input, so that the input is cleared after a file is selected,
    // because Uppy will be handling the upload and so we can select same file
    // after removing — otherwise browser thinks it’s already selected
    return h(
      'div',
      { 'class': 'uppy-DashboardAddFiles' },
      h(
        'div',
        { 'class': 'uppy-DashboardTabs' },
        h(ActionBrowseTagline, {
          acquirers: this.props.acquirers,
          handleInputChange: this.props.handleInputChange,
          i18n: this.props.i18n,
          i18nArray: this.props.i18nArray,
          allowedFileTypes: this.props.allowedFileTypes,
          maxNumberOfFiles: this.props.maxNumberOfFiles
        }),
        h(
          'div',
          { 'class': 'uppy-DashboardTabs-list', role: 'tablist' },
          h(
            'div',
            { 'class': 'uppy-DashboardTab', role: 'presentation' },
            h(
              'button',
              { type: 'button',
                'class': 'uppy-DashboardTab-btn',
                role: 'tab',
                tabindex: 0,
                onclick: this.handleClick },
              localIcon(),
              h(
                'div',
                { 'class': 'uppy-DashboardTab-name' },
                this.props.i18n('myDevice')
              )
            ),
            h('input', { 'class': 'uppy-Dashboard-input',
              hidden: true,
              'aria-hidden': 'true',
              tabindex: -1,
              type: 'file',
              name: 'files[]',
              multiple: this.props.maxNumberOfFiles !== 1,
              accept: this.props.allowedFileTypes,
              onchange: this.props.handleInputChange,
              value: '',
              ref: function ref(input) {
                _this2.input = input;
              } })
          ),
          this.props.acquirers.map(function (target) {
            return h(
              'div',
              { 'class': 'uppy-DashboardTab', role: 'presentation' },
              h(
                'button',
                { 'class': 'uppy-DashboardTab-btn',
                  type: 'button',
                  role: 'tab',
                  tabindex: 0,
                  'aria-controls': 'uppy-DashboardContent-panel--' + target.id,
                  'aria-selected': _this2.props.activePickerPanel.id === target.id,
                  onclick: function onclick() {
                    return _this2.props.showPanel(target.id);
                  } },
                target.icon(),
                h(
                  'div',
                  { 'class': 'uppy-DashboardTab-name' },
                  target.name
                )
              )
            );
          })
        )
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardAddFiles-info' },
        this.props.note && h(
          'div',
          { 'class': 'uppy-Dashboard-note' },
          this.props.note
        ),
        this.props.proudlyDisplayPoweredByUppy && poweredByUppy(this.props)
      )
    );
  };

  return AddFiles;
}(Component);

module.exports = AddFiles;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");

var AddFilesPanel = function AddFilesPanel(props) {
  return h(
    'div',
    { 'class': 'uppy-Dashboard-AddFilesPanel',
      'data-uppy-panelType': 'AddFiles',
      'aria-hidden': props.showAddFilesPanel },
    h(
      'div',
      { 'class': 'uppy-DashboardContent-bar' },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
        props.i18n('addingMoreFiles')
      ),
      h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: function onclick(ev) {
            return props.toggleAddFilesPanel(false);
          } },
        props.i18n('back')
      )
    ),
    h(AddFiles, props)
  );
};

module.exports = AddFilesPanel;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/Dashboard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileList = __webpack_require__(/*! ./FileList */ "./node_modules/@uppy/dashboard/lib/components/FileList.js");
var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");
var AddFilesPanel = __webpack_require__(/*! ./AddFilesPanel */ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js");
var PickerPanelContent = __webpack_require__(/*! ./PickerPanelContent */ "./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js");
var PanelTopBar = __webpack_require__(/*! ./PickerPanelTopBar */ "./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js");
var FileCard = __webpack_require__(/*! ./FileCard */ "./node_modules/@uppy/dashboard/lib/components/FileCard.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var isTouchDevice = __webpack_require__(/*! @uppy/utils/lib/isTouchDevice */ "./node_modules/@uppy/utils/lib/isTouchDevice.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var PreactCSSTransitionGroup = __webpack_require__(/*! preact-css-transition-group */ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js");

// http://dev.edenspiekermann.com/2016/02/11/introducing-accessible-modal-dialog
// https://github.com/ghosh/micromodal

function TransitionWrapper(props) {
  return h(
    PreactCSSTransitionGroup,
    {
      transitionName: 'uppy-transition-slideDownUp',
      transitionEnterTimeout: 250,
      transitionLeaveTimeout: 250 },
    props.children
  );
}

module.exports = function Dashboard(props) {
  var noFiles = props.totalFileCount === 0;

  var dashboardClassName = classNames({ 'uppy-Root': props.isTargetDOMEl }, 'uppy-Dashboard', { 'Uppy--isTouchDevice': isTouchDevice() }, { 'uppy-Dashboard--animateOpenClose': props.animateOpenClose }, { 'uppy-Dashboard--isClosing': props.isClosing }, { 'uppy-Dashboard--isDraggingOver': props.isDraggingOver }, { 'uppy-Dashboard--modal': !props.inline }, { 'uppy-size--md': props.containerWidth > 576 }, { 'uppy-size--lg': props.containerWidth > 700 }, { 'uppy-size--xl': props.containerWidth > 900 }, { 'uppy-Dashboard--isAddFilesPanelVisible': props.showAddFilesPanel }, { 'uppy-Dashboard--isInnerWrapVisible': props.areInsidesReadyToBeVisible });

  return h(
    'div',
    { 'class': dashboardClassName,
      'aria-hidden': props.inline ? 'false' : props.isHidden,
      'aria-label': !props.inline ? props.i18n('dashboardWindowTitle') : props.i18n('dashboardTitle'),
      onpaste: props.handlePaste,

      onDragOver: props.handleDragOver,
      onDragLeave: props.handleDragLeave,
      onDrop: props.handleDrop
    },
    h('div', { 'class': 'uppy-Dashboard-overlay', tabindex: -1, onclick: props.handleClickOutside }),
    h(
      'div',
      { 'class': 'uppy-Dashboard-inner',
        'aria-modal': !props.inline && 'true',
        role: !props.inline && 'dialog',
        style: {
          width: props.inline && props.width ? props.width : '',
          height: props.inline && props.height ? props.height : ''
        } },
      !props.inline ? h(
        'button',
        { 'class': 'uppy-u-reset uppy-Dashboard-close',
          type: 'button',
          'aria-label': props.i18n('closeModal'),
          title: props.i18n('closeModal'),
          onclick: props.closeModal },
        h(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        )
      ) : null,
      h(
        'div',
        { 'class': 'uppy-Dashboard-innerWrap' },
        h(
          'div',
          { 'class': 'uppy-Dashboard-dropFilesHereHint' },
          props.i18n('dropHint')
        ),
        !noFiles && props.showSelectedFiles && h(PanelTopBar, props),
        props.showSelectedFiles ? noFiles ? h(AddFiles, props) : h(FileList, props) : h(AddFiles, props),
        h(
          TransitionWrapper,
          null,
          props.showAddFilesPanel ? h(AddFilesPanel, _extends({ key: 'AddFilesPanel' }, props)) : null
        ),
        h(
          TransitionWrapper,
          null,
          props.fileCardFor ? h(FileCard, _extends({ key: 'FileCard' }, props)) : null
        ),
        h(
          TransitionWrapper,
          null,
          props.activePickerPanel ? h(PickerPanelContent, _extends({ key: 'PickerPanelContent' }, props)) : null
        ),
        h(
          'div',
          { 'class': 'uppy-Dashboard-progressindicators' },
          props.progressindicators.map(function (target) {
            return props.getPlugin(target.id).render(props.state);
          })
        )
      )
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileCard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileCard.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");
var FilePreview = __webpack_require__(/*! ./FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");
var ignoreEvent = __webpack_require__(/*! ../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h,
    Component = _require.Component;

var FileCard = function (_Component) {
  _inherits(FileCard, _Component);

  function FileCard(props) {
    _classCallCheck(this, FileCard);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.meta = {};

    _this.tempStoreMetaOrSubmit = _this.tempStoreMetaOrSubmit.bind(_this);
    _this.renderMetaFields = _this.renderMetaFields.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  FileCard.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      if (!_this2.firstInput) return;
      _this2.firstInput.focus({ preventScroll: true });
    }, 150);
  };

  FileCard.prototype.tempStoreMetaOrSubmit = function tempStoreMetaOrSubmit(ev) {
    var file = this.props.files[this.props.fileCardFor];

    if (ev.keyCode === 13) {
      ev.stopPropagation();
      ev.preventDefault();
      this.props.saveFileCard(this.meta, file.id);
      return;
    }

    var value = ev.target.value;
    var name = ev.target.dataset.name;
    this.meta[name] = value;
  };

  FileCard.prototype.renderMetaFields = function renderMetaFields(file) {
    var _this3 = this;

    var metaFields = this.props.metaFields || [];
    return metaFields.map(function (field, i) {
      return h(
        'fieldset',
        { 'class': 'uppy-DashboardFileCard-fieldset' },
        h(
          'label',
          { 'class': 'uppy-DashboardFileCard-label' },
          field.name
        ),
        h('input', { 'class': 'uppy-u-reset uppy-c-textInput uppy-DashboardFileCard-input',
          type: 'text',
          'data-name': field.id,
          value: file.meta[field.id],
          placeholder: field.placeholder,
          onkeyup: _this3.tempStoreMetaOrSubmit,
          onkeydown: _this3.tempStoreMetaOrSubmit,
          onkeypress: _this3.tempStoreMetaOrSubmit,
          ref: function ref(el) {
            if (i === 0) _this3.firstInput = el;
          } })
      );
    });
  };

  FileCard.prototype.handleSave = function handleSave(ev) {
    var fileID = this.props.fileCardFor;
    this.props.saveFileCard(this.meta, fileID);
  };

  FileCard.prototype.handleCancel = function handleCancel(ev) {
    this.meta = {};
    this.props.toggleFileCard();
  };

  FileCard.prototype.render = function render() {
    var file = this.props.files[this.props.fileCardFor];

    return h(
      'div',
      { 'class': 'uppy-DashboardFileCard',
        'data-uppy-panelType': 'FileCard',
        onDragOver: ignoreEvent,
        onDragLeave: ignoreEvent,
        onDrop: ignoreEvent,
        onPaste: ignoreEvent },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-bar' },
        h(
          'div',
          { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
          this.props.i18nArray('editing', {
            file: h(
              'span',
              { 'class': 'uppy-DashboardContent-titleFile' },
              file.meta ? file.meta.name : file.name
            )
          })
        ),
        h(
          'button',
          { 'class': 'uppy-DashboardContent-back', type: 'button', title: this.props.i18n('finishEditingFile'),
            onclick: this.handleSave },
          this.props.i18n('done')
        )
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardFileCard-inner' },
        h(
          'div',
          { 'class': 'uppy-DashboardFileCard-preview', style: { backgroundColor: getFileTypeIcon(file.type).color } },
          h(FilePreview, { file: file })
        ),
        h(
          'div',
          { 'class': 'uppy-DashboardFileCard-info' },
          this.renderMetaFields(file)
        ),
        h(
          'div',
          { 'class': 'uppy-Dashboard-actions' },
          h(
            'button',
            { 'class': 'uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-actionsBtn',
              type: 'button',
              onclick: this.handleSave },
            this.props.i18n('saveChanges')
          ),
          h(
            'button',
            { 'class': 'uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-actionsBtn',
              type: 'button',
              onclick: this.handleCancel },
            this.props.i18n('cancel')
          )
        )
      )
    );
  };

  return FileCard;
}(Component);

module.exports = FileCard;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getFileNameAndExtension = __webpack_require__(/*! @uppy/utils/lib/getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var truncateString = __webpack_require__(/*! ../utils/truncateString */ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js");
var copyToClipboard = __webpack_require__(/*! ../utils/copyToClipboard */ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js");
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var FileItemProgress = __webpack_require__(/*! ./FileItemProgress */ "./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js");
var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");
var FilePreview = __webpack_require__(/*! ./FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");

var _require = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconRetry = _require.iconRetry;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require2.h;

function FileItemProgressWrapper(props) {
  if (props.hideRetryButton && props.error) {
    return;
  }

  if (props.isUploaded || props.hidePauseResumeCancelButtons && !props.error) {
    return h(
      'div',
      { 'class': 'uppy-DashboardItem-progressIndicator' },
      h(FileItemProgress, {
        progress: props.file.progress.percentage,
        fileID: props.file.id,
        hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons,
        individualCancellation: props.individualCancellation
      })
    );
  }

  return h(
    'button',
    {
      'class': 'uppy-DashboardItem-progressIndicator',
      type: 'button',
      'aria-label': props.progressIndicatorTitle,
      title: props.progressIndicatorTitle,
      onclick: props.onPauseResumeCancelRetry },
    props.error ? props.hideRetryButton ? null : iconRetry() : h(FileItemProgress, {
      progress: props.file.progress.percentage,
      fileID: props.file.id,
      individualCancellation: props.individualCancellation,
      hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons
    })
  );
}

module.exports = function FileItem(props) {
  var file = props.file;
  var acquirers = props.acquirers;

  var isProcessing = file.progress.preprocess || file.progress.postprocess;
  var isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
  var uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
  var uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
  var isPaused = file.isPaused || false;
  var error = file.error || false;

  var fileName = getFileNameAndExtension(file.meta.name).name;
  var truncatedFileName = props.isWide ? truncateString(fileName, 30) : fileName;

  function onPauseResumeCancelRetry(ev) {
    if (isUploaded) return;

    if (error && !props.hideRetryButton) {
      props.retryUpload(file.id);
      return;
    }

    if (props.hidePauseResumeCancelButtons) {
      return;
    }

    if (props.resumableUploads) {
      props.pauseUpload(file.id);
    } else if (props.individualCancellation) {
      props.cancelUpload(file.id);
    }
  }

  function progressIndicatorTitle(props) {
    if (isUploaded) {
      return props.i18n('uploadComplete');
    }

    if (error) {
      return props.i18n('retryUpload');
    }

    if (props.resumableUploads) {
      if (file.isPaused) {
        return props.i18n('resumeUpload');
      }
      return props.i18n('pauseUpload');
    } else if (props.individualCancellation) {
      return props.i18n('cancelUpload');
    }

    return '';
  }

  var dashboardItemClass = classNames('uppy-DashboardItem', { 'is-inprogress': uploadInProgress }, { 'is-processing': isProcessing }, { 'is-complete': isUploaded }, { 'is-paused': isPaused }, { 'is-error': error }, { 'is-resumable': props.resumableUploads }, { 'is-noIndividualCancellation': !props.individualCancellation });

  var showRemoveButton = props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;

  return h(
    'li',
    { 'class': dashboardItemClass, id: 'uppy_' + file.id, title: file.meta.name },
    h(
      'div',
      { 'class': 'uppy-DashboardItem-preview' },
      h(
        'div',
        { 'class': 'uppy-DashboardItem-previewInnerWrap', style: { backgroundColor: getFileTypeIcon(file.type).color } },
        props.showLinkToFileUploadResult && file.uploadURL ? h('a', { 'class': 'uppy-DashboardItem-previewLink', href: file.uploadURL, rel: 'noreferrer noopener', target: '_blank' }) : null,
        h(FilePreview, { file: file })
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardItem-progress' },
        h(FileItemProgressWrapper, _extends({
          progressIndicatorTitle: progressIndicatorTitle(props),
          onPauseResumeCancelRetry: onPauseResumeCancelRetry,
          file: file,
          error: error
        }, props))
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardItem-info' },
      h(
        'div',
        { 'class': 'uppy-DashboardItem-name', title: fileName },
        props.showLinkToFileUploadResult && file.uploadURL ? h(
          'a',
          { href: file.uploadURL, rel: 'noreferrer noopener', target: '_blank' },
          file.extension ? truncatedFileName + '.' + file.extension : truncatedFileName
        ) : file.extension ? truncatedFileName + '.' + file.extension : truncatedFileName
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardItem-status' },
        file.data.size ? h(
          'div',
          { 'class': 'uppy-DashboardItem-statusSize' },
          prettyBytes(file.data.size)
        ) : null,
        file.source && file.source !== props.id && h(
          'div',
          { 'class': 'uppy-DashboardItem-sourceIcon' },
          acquirers.map(function (acquirer) {
            if (acquirer.id === file.source) {
              return h(
                'span',
                { title: props.i18n('fileSource', { name: acquirer.name }) },
                acquirer.icon()
              );
            }
          })
        ),
        !uploadInProgressOrComplete && props.metaFields && props.metaFields.length ? h(
          'button',
          { 'class': 'uppy-u-reset uppy-DashboardItem-edit',
            type: 'button',
            'aria-label': props.i18n('editFile'),
            title: props.i18n('editFile'),
            onclick: function onclick(e) {
              return props.toggleFileCard(file.id);
            } },
          props.i18n('edit')
        ) : null,
        props.showLinkToFileUploadResult && file.uploadURL ? h(
          'button',
          { 'class': 'uppy-u-reset uppy-DashboardItem-copyLink',
            type: 'button',
            'aria-label': props.i18n('copyLink'),
            title: props.i18n('copyLink'),
            onclick: function onclick() {
              copyToClipboard(file.uploadURL, props.i18n('copyLinkToClipboardFallback')).then(function () {
                props.log('Link copied to clipboard.');
                props.info(props.i18n('copyLinkToClipboardSuccess'), 'info', 3000);
              }).catch(props.log);
            } },
          props.i18n('link')
        ) : ''
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardItem-action' },
      showRemoveButton && h(
        'button',
        { 'class': 'uppy-DashboardItem-remove',
          type: 'button',
          'aria-label': props.i18n('removeFile'),
          title: props.i18n('removeFile'),
          onclick: function onclick() {
            return props.removeFile(file.id);
          } },
        h(
          'svg',
          { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '18', height: '18', viewBox: '0 0 18 18' },
          h('path', { d: 'M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z' }),
          h('path', { fill: '#FFF', d: 'M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z' })
        )
      )
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

// http://codepen.io/Harkko/pen/rVxvNM
// https://css-tricks.com/svg-line-animation-works/
// https://gist.github.com/eswak/ad4ea57bcd5ff7aa5d42

// circle length equals 2 * PI * R


var circleLength = 2 * Math.PI * 15;

// stroke-dashoffset is a percentage of the progress from circleLength,
// substracted from circleLength, because its an offset
module.exports = function (props) {
  return h(
    "svg",
    { width: "70", height: "70", viewBox: "0 0 36 36", "class": "UppyIcon UppyIcon-progressCircle" },
    h(
      "g",
      { "class": "progress-group" },
      h("circle", { "class": "bg", r: "15", cx: "18", cy: "18", "stroke-width": "2", fill: "none" }),
      h("circle", { "class": "progress", r: "15", cx: "18", cy: "18", transform: "rotate(-90, 18, 18)", "stroke-width": "2", fill: "none",
        "stroke-dasharray": circleLength,
        "stroke-dashoffset": circleLength - circleLength / 100 * props.progress
      })
    ),
    !props.hidePauseResumeCancelButtons ? h(
      "g",
      null,
      h("polygon", { "class": "play", transform: "translate(3, 3)", points: "12 20 12 10 20 15" }),
      h(
        "g",
        { "class": "pause", transform: "translate(14.5, 13)" },
        h("rect", { x: "0", y: "0", width: "2", height: "10", rx: "0" }),
        h("rect", { x: "5", y: "0", width: "2", height: "10", rx: "0" })
      ),
      h("polygon", { "class": "cancel", transform: "translate(2, 2)", points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12" })
    ) : null,
    h("polygon", { "class": "check", transform: "translate(2, 3)", points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634" })
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileList.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileItem = __webpack_require__(/*! ./FileItem */ "./node_modules/@uppy/dashboard/lib/components/FileItem.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

module.exports = function (props) {
  var noFiles = props.totalFileCount === 0;
  var dashboardFilesClass = classNames('uppy-Dashboard-files', { 'uppy-Dashboard-files--noFiles': noFiles });

  return h(
    'ul',
    { 'class': dashboardFilesClass },
    Object.keys(props.files).map(function (fileID) {
      return h(FileItem, _extends({}, props, {
        acquirers: props.acquirers,
        file: props.files[fileID]
      }));
    })
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FilePreview.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

module.exports = function FilePreview(props) {
  var file = props.file;

  if (file.preview) {
    return h('img', { 'class': 'uppy-DashboardItem-previewImg', alt: file.name, src: file.preview });
  }

  var _getFileTypeIcon = getFileTypeIcon(file.type),
      color = _getFileTypeIcon.color,
      icon = _getFileTypeIcon.icon;

  return h(
    'div',
    { 'class': 'uppy-DashboardItem-previewIconWrap' },
    h(
      'span',
      { 'class': 'uppy-DashboardItem-previewIcon', style: { color: color } },
      icon
    ),
    h(
      'svg',
      { 'class': 'uppy-DashboardItem-previewIconBg', width: '58', height: '76', viewBox: '0 0 58 76' },
      h('rect', { fill: '#FFF', width: '58', height: '76', rx: '3', 'fill-rule': 'evenodd' })
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var ignoreEvent = __webpack_require__(/*! ../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

function PanelContent(props) {
  return h(
    'div',
    { 'class': 'uppy-DashboardContent-panel',
      role: 'tabpanel',
      'data-uppy-panelType': 'PickerPanel',
      id: props.activePickerPanel && 'uppy-DashboardContent-panel--' + props.activePickerPanel.id,
      onDragOver: ignoreEvent,
      onDragLeave: ignoreEvent,
      onDrop: ignoreEvent,
      onPaste: ignoreEvent },
    h(
      'div',
      { 'class': 'uppy-DashboardContent-bar' },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
        props.i18n('importFrom', { name: props.activePickerPanel.name })
      ),
      h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: props.hideAllPanels },
        props.i18n('done')
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardContent-panelBody' },
      props.getPlugin(props.activePickerPanel.id).render(props.state)
    )
  );
}

module.exports = PanelContent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

var uploadStates = {
  'STATE_ERROR': 'error',
  'STATE_WAITING': 'waiting',
  'STATE_PREPROCESSING': 'preprocessing',
  'STATE_UPLOADING': 'uploading',
  'STATE_POSTPROCESSING': 'postprocessing',
  'STATE_COMPLETE': 'complete',
  'STATE_PAUSED': 'paused'
};

function getUploadingState(isAllErrored, isAllComplete, isAllPaused) {
  var files = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }

  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }

  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }

  var state = uploadStates.STATE_WAITING;
  var fileIDs = Object.keys(files);
  for (var i = 0; i < fileIDs.length; i++) {
    var progress = files[fileIDs[i]].progress;
    // If ANY files are being uploaded right now, show the uploading state.
    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    }
    // If files are being preprocessed AND postprocessed at this time, we show the
    // preprocess state. If any files are being uploaded we show uploading.
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    // If NO files are being preprocessed or uploaded right now, but some files are
    // being postprocessed, show the postprocess state.
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
  return state;
}

function UploadStatus(props) {
  var uploadingState = getUploadingState(props.isAllErrored, props.isAllComplete, props.isAllPaused, props.files);

  switch (uploadingState) {
    case 'uploading':
      return props.i18n('uploadingXFiles', { smart_count: props.inProgressNotPausedFiles.length });
    case 'preprocessing':
    case 'postprocessing':
      return props.i18n('processingXFiles', { smart_count: props.processingFiles.length });
    case 'paused':
      return props.i18n('uploadPaused');
    case 'waiting':
      return props.i18n('xFilesSelected', { smart_count: props.newFiles.length });
    case 'complete':
      return props.i18n('uploadComplete');
  }
}

function PanelTopBar(props) {
  var allowNewUpload = props.allowNewUpload;
  // TODO maybe this should be done in ../index.js, then just pass that down as `allowNewUpload`
  if (allowNewUpload && props.maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }

  return h(
    'div',
    { 'class': 'uppy-DashboardContent-bar' },
    h(
      'div',
      null,
      !props.isAllComplete ? h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: props.cancelAll },
        props.i18n('cancel')
      ) : null
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
      h(UploadStatus, props)
    ),
    allowNewUpload && h(
      'button',
      { 'class': 'uppy-DashboardContent-addMore',
        type: 'button',
        'aria-label': props.i18n('addMoreFiles'),
        title: props.i18n('addMoreFiles'),
        onclick: function onclick() {
          return props.toggleAddFilesPanel(true);
        } },
      h(
        'svg',
        { 'class': 'UppyIcon', width: '15', height: '15', viewBox: '0 0 15 15' },
        h('path', { d: 'M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z' })
      )
    )
  );
}

module.exports = PanelTopBar;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/icons.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

// https://css-tricks.com/creating-svg-icon-system-react/

function defaultPickerIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", width: "30", height: "30", viewBox: "0 0 30 30" },
    h("path", { d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z" })
  );
}

function iconCopy() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "51", height: "51", viewBox: "0 0 51 51" },
    h("path", { d: "M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z" }),
    h("path", { d: "M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z" })
  );
}

function iconResume() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 44 44" },
    h("polygon", { "class": "play", transform: "translate(6, 5.5)", points: "13 21.6666667 13 11 21 16.3333333" })
  );
}

function iconPause() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25px", height: "25px", viewBox: "0 0 44 44" },
    h(
      "g",
      { transform: "translate(18, 17)", "class": "pause" },
      h("rect", { x: "0", y: "0", width: "2", height: "10", rx: "0" }),
      h("rect", { x: "6", y: "0", width: "2", height: "10", rx: "0" })
    )
  );
}

function localIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", fill: "#607d8b", width: "27", height: "25", viewBox: "0 0 27 25" },
    h("path", { d: "M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z" }),
    h("path", { d: "M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z" })
  );
}

function iconRetry() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon retry", width: "28", height: "31", viewBox: "0 0 16 19" },
    h("path", { d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z" }),
    h("path", { d: "M7.9 3H10v2H7.9z" }),
    h("path", { d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z" }),
    h("path", { d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z" })
  );
}

function checkIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon UppyIcon-check", width: "13", height: "9", viewBox: "0 0 13 9" },
    h("polygon", { points: "5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647" })
  );
}

function iconAudio() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 25 25" },
    h("path", { d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z", fill: "#049BCF", "fill-rule": "nonzero" })
  );
}

function iconVideo() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 25 25" },
    h("path", { d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z", fill: "#19AF67", "fill-rule": "nonzero" })
  );
}

function iconPDF() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 25 25" },
    h("path", { d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z", fill: "#E2514A", "fill-rule": "nonzero" })
  );
}

function iconFile() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 25 25" },
    h(
      "g",
      { fill: "#A7AFB7", "fill-rule": "nonzero" },
      h("path", { d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z" }),
      h("path", { d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z" })
    )
  );
}

function iconText() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 25 25" },
    h("path", { d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z", fill: "#5A5E69", "fill-rule": "nonzero" })
  );
}

module.exports = {
  defaultPickerIcon: defaultPickerIcon,
  iconCopy: iconCopy,
  iconResume: iconResume,
  iconPause: iconPause,
  iconRetry: iconRetry,
  localIcon: localIcon,
  checkIcon: checkIcon,
  iconAudio: iconAudio,
  iconVideo: iconVideo,
  iconPDF: iconPDF,
  iconFile: iconFile,
  iconText: iconText
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var DashboardUI = __webpack_require__(/*! ./components/Dashboard */ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js");
var StatusBar = __webpack_require__(/*! @uppy/status-bar */ "./node_modules/@uppy/status-bar/lib/index.js");
var Informer = __webpack_require__(/*! @uppy/informer */ "./node_modules/@uppy/informer/lib/index.js");
var ThumbnailGenerator = __webpack_require__(/*! @uppy/thumbnail-generator */ "./node_modules/@uppy/thumbnail-generator/lib/index.js");
var findAllDOMElements = __webpack_require__(/*! @uppy/utils/lib/findAllDOMElements */ "./node_modules/@uppy/utils/lib/findAllDOMElements.js");
var toArray = __webpack_require__(/*! @uppy/utils/lib/toArray */ "./node_modules/@uppy/utils/lib/toArray.js");
var getDroppedFiles = __webpack_require__(/*! @uppy/utils/lib/getDroppedFiles */ "./node_modules/@uppy/utils/lib/getDroppedFiles/index.js");
var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
var ResizeObserver = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js").default || __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _require2 = __webpack_require__(/*! ./components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    defaultPickerIcon = _require2.defaultPickerIcon;

// Some code for managing focus was adopted from https://github.com/ghosh/micromodal
// MIT licence, https://github.com/ghosh/micromodal/blob/master/LICENSE.md
// Copyright (c) 2017 Indrashish Ghosh


var FOCUSABLE_ELEMENTS = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'input:not([disabled]):not([inert]):not([aria-hidden])', 'select:not([disabled]):not([inert]):not([aria-hidden])', 'textarea:not([disabled]):not([inert]):not([aria-hidden])', 'button:not([disabled]):not([inert]):not([aria-hidden])', 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

var TAB_KEY = 9;
var ESC_KEY = 27;

function createPromise() {
  var o = {};
  o.promise = new Promise(function (resolve, reject) {
    o.resolve = resolve;
    o.reject = reject;
  });
  return o;
}

/**
 * Dashboard UI with previews, metadata editing, tabs for various services and more
 */
module.exports = function (_Plugin) {
  _inherits(Dashboard, _Plugin);

  function Dashboard(uppy, opts) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.id = _this.opts.id || 'Dashboard';
    _this.title = 'Dashboard';
    _this.type = 'orchestrator';
    _this.modalName = 'uppy-Dashboard-' + cuid();

    _this.defaultLocale = {
      strings: {
        closeModal: 'Close Modal',
        importFrom: 'Import from %{name}',
        addingMoreFiles: 'Adding more files',
        addMoreFiles: 'Add more files',
        dashboardWindowTitle: 'File Uploader Window (Press escape to close)',
        dashboardTitle: 'File Uploader',
        copyLinkToClipboardSuccess: 'Link copied to clipboard',
        copyLinkToClipboardFallback: 'Copy the URL below',
        copyLink: 'Copy link',
        link: 'Link',
        fileSource: 'File source: %{name}',
        done: 'Done',
        back: 'Back',
        removeFile: 'Remove file',
        editFile: 'Edit file',
        editing: 'Editing %{file}',
        edit: 'Edit',
        finishEditingFile: 'Finish editing file',
        saveChanges: 'Save changes',
        cancel: 'Cancel',
        myDevice: 'My Device',
        dropPasteImport: 'Drop files here, paste, %{browse} or import from',
        dropPaste: 'Drop files here, paste or %{browse}',
        dropHint: 'Drop your files here',
        browse: 'browse',
        emptyFolderAdded: 'No files were added from empty folder',
        uploadComplete: 'Upload complete',
        uploadPaused: 'Upload paused',
        resumeUpload: 'Resume upload',
        pauseUpload: 'Pause upload',
        retryUpload: 'Retry upload',
        cancelUpload: 'Cancel upload',
        xFilesSelected: {
          0: '%{smart_count} file selected',
          1: '%{smart_count} files selected',
          2: '%{smart_count} files selected'
        },
        uploadingXFiles: {
          0: 'Uploading %{smart_count} file',
          1: 'Uploading %{smart_count} files',
          2: 'Uploading %{smart_count} files'
        },
        processingXFiles: {
          0: 'Processing %{smart_count} file',
          1: 'Processing %{smart_count} files',
          2: 'Processing %{smart_count} files'
        },
        folderAdded: {
          0: 'Added %{smart_count} file from %{folder}',
          1: 'Added %{smart_count} files from %{folder}',
          2: 'Added %{smart_count} files from %{folder}'
        },
        poweredBy: 'Powered by'
      }

      // set default options
    };var defaultOptions = {
      target: 'body',
      metaFields: [],
      trigger: '#uppy-select-files',
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      defaultPickerIcon: defaultPickerIcon,
      showLinkToFileUploadResult: true,
      showProgressDetails: false,
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeCancelButtons: false,
      hideProgressAfterFinish: false,
      note: null,
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      disableStatusBar: false,
      disableInformer: false,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      proudlyDisplayPoweredByUppy: true,
      onRequestCloseModal: function onRequestCloseModal() {
        return _this.closeModal();
      },
      showSelectedFiles: true,
      browserBackButtonClose: false

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    // i18n
    _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.requestCloseModal = _this.requestCloseModal.bind(_this);
    _this.isModalOpen = _this.isModalOpen.bind(_this);

    _this.addTarget = _this.addTarget.bind(_this);
    _this.removeTarget = _this.removeTarget.bind(_this);
    _this.hideAllPanels = _this.hideAllPanels.bind(_this);
    _this.showPanel = _this.showPanel.bind(_this);
    _this.getFocusableNodes = _this.getFocusableNodes.bind(_this);
    _this.setFocusToFirstNode = _this.setFocusToFirstNode.bind(_this);
    _this.handlePopState = _this.handlePopState.bind(_this);
    _this.maintainFocus = _this.maintainFocus.bind(_this);

    _this.initEvents = _this.initEvents.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleFileAdded = _this.handleFileAdded.bind(_this);
    _this.handleComplete = _this.handleComplete.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.toggleFileCard = _this.toggleFileCard.bind(_this);
    _this.toggleAddFilesPanel = _this.toggleAddFilesPanel.bind(_this);
    _this.handlePaste = _this.handlePaste.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.render = _this.render.bind(_this);
    _this.install = _this.install.bind(_this);

    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);

    // Timeouts
    _this.makeDashboardInsidesVisibleAnywayTimeout = null;
    _this.removeDragOverClassTimeout = null;
    return _this;
  }

  Dashboard.prototype.removeTarget = function removeTarget(plugin) {
    var pluginState = this.getPluginState();
    // filter out the one we want to remove
    var newTargets = pluginState.targets.filter(function (target) {
      return target.id !== plugin.id;
    });

    this.setPluginState({
      targets: newTargets
    });
  };

  Dashboard.prototype.addTarget = function addTarget(plugin) {
    var callerPluginId = plugin.id || plugin.constructor.name;
    var callerPluginName = plugin.title || callerPluginId;
    var callerPluginType = plugin.type;

    if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
      var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
      this.uppy.log(msg);
      return;
    }

    var target = {
      id: callerPluginId,
      name: callerPluginName,
      type: callerPluginType
    };

    var state = this.getPluginState();
    var newTargets = state.targets.slice();
    newTargets.push(target);

    this.setPluginState({
      targets: newTargets
    });

    return this.el;
  };

  Dashboard.prototype.hideAllPanels = function hideAllPanels() {
    this.setPluginState({
      activePickerPanel: false,
      showAddFilesPanel: false,
      activeOverlayType: null
    });
  };

  Dashboard.prototype.showPanel = function showPanel(id) {
    var _getPluginState = this.getPluginState(),
        targets = _getPluginState.targets;

    var activePickerPanel = targets.filter(function (target) {
      return target.type === 'acquirer' && target.id === id;
    })[0];

    this.setPluginState({
      activePickerPanel: activePickerPanel,
      activeOverlayType: 'PickerPanel'
    });
  };

  Dashboard.prototype.requestCloseModal = function requestCloseModal() {
    if (this.opts.onRequestCloseModal) {
      return this.opts.onRequestCloseModal();
    }
    return this.closeModal();
  };

  Dashboard.prototype.getFocusableNodes = function getFocusableNodes() {
    // if an overlay is open, we should trap focus inside the overlay
    var activeOverlayType = this.getPluginState().activeOverlayType;
    if (activeOverlayType) {
      var activeOverlay = this.el.querySelector('[data-uppy-panelType="' + activeOverlayType + '"]');
      var _nodes = activeOverlay.querySelectorAll(FOCUSABLE_ELEMENTS);
      return Object.keys(_nodes).map(function (key) {
        return _nodes[key];
      });
    }

    var nodes = this.el.querySelectorAll(FOCUSABLE_ELEMENTS);
    return Object.keys(nodes).map(function (key) {
      return nodes[key];
    });
  };

  Dashboard.prototype.setFocusToFirstNode = function setFocusToFirstNode() {
    var focusableNodes = this.getFocusableNodes();
    if (focusableNodes.length) focusableNodes[0].focus();
  };

  Dashboard.prototype.updateBrowserHistory = function updateBrowserHistory() {
    // Ensure history state does not already contain our modal name to avoid double-pushing
    if (!history.state || !history.state[this.modalName]) {
      var _extends2;

      // Push to history so that the page is not lost on browser back button press
      history.pushState(_extends({}, history.state, (_extends2 = {}, _extends2[this.modalName] = true, _extends2)), '');
    }

    // Listen for back button presses
    window.addEventListener('popstate', this.handlePopState, false);
  };

  Dashboard.prototype.handlePopState = function handlePopState(event) {
    // Close the modal if the history state no longer contains our modal name
    if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) {
      this.closeModal({ manualClose: false });
    }

    // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
    // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
    // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
    if (!this.isModalOpen() && event.state && event.state[this.modalName]) {
      history.go(-1);
    }
  };

  Dashboard.prototype.setFocusToBrowse = function setFocusToBrowse() {
    var browseBtn = this.el.querySelector('.uppy-Dashboard-browse');
    if (browseBtn) browseBtn.focus();
  };

  Dashboard.prototype.maintainFocus = function maintainFocus(event) {
    var focusableNodes = this.getFocusableNodes();
    var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

    if (event.shiftKey && focusedItemIndex === 0) {
      focusableNodes[focusableNodes.length - 1].focus();
      event.preventDefault();
    }

    if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
      focusableNodes[0].focus();
      event.preventDefault();
    }
  };

  Dashboard.prototype.openModal = function openModal() {
    var _this2 = this;

    var _createPromise = createPromise(),
        promise = _createPromise.promise,
        resolve = _createPromise.resolve;
    // save scroll position


    this.savedScrollPosition = window.scrollY;
    // save active element, so we can restore focus when modal is closed
    this.savedActiveElement = document.activeElement;

    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.add('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
      var handler = function handler() {
        _this2.setPluginState({
          isHidden: false
        });
        _this2.el.removeEventListener('animationend', handler, false);
        resolve();
      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: false
      });
      resolve();
    }

    if (this.opts.browserBackButtonClose) {
      this.updateBrowserHistory();
    }

    // handle ESC and TAB keys in modal dialog
    document.addEventListener('keydown', this.handleKeyDown);

    // this.rerender(this.uppy.getState())
    this.setFocusToBrowse();

    return promise;
  };

  Dashboard.prototype.closeModal = function closeModal() {
    var _this3 = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _opts$manualClose = opts.manualClose,
        manualClose = _opts$manualClose === undefined ? true : _opts$manualClose;

    var _getPluginState2 = this.getPluginState(),
        isHidden = _getPluginState2.isHidden,
        isClosing = _getPluginState2.isClosing;

    if (isHidden || isClosing) {
      // short-circuit if animation is ongoing
      return;
    }

    var _createPromise2 = createPromise(),
        promise = _createPromise2.promise,
        resolve = _createPromise2.resolve;

    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.remove('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose) {
      this.setPluginState({
        isClosing: true
      });
      var handler = function handler() {
        _this3.setPluginState({
          isHidden: true,
          isClosing: false
        });
        _this3.el.removeEventListener('animationend', handler, false);
        resolve();
      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: true
      });
      resolve();
    }

    // handle ESC and TAB keys in modal dialog
    document.removeEventListener('keydown', this.handleKeyDown);

    this.savedActiveElement.focus();

    if (manualClose) {
      if (this.opts.browserBackButtonClose) {
        // Make sure that the latest entry in the history state is our modal name
        if (history.state && history.state[this.modalName]) {
          // Go back in history to clear out the entry we created (ultimately closing the modal)
          history.go(-1);
        }
      }
    }

    return promise;
  };

  Dashboard.prototype.isModalOpen = function isModalOpen() {
    return !this.getPluginState().isHidden || false;
  };

  Dashboard.prototype.handleKeyDown = function handleKeyDown(event) {
    // close modal on esc key press
    if (event.keyCode === ESC_KEY) this.requestCloseModal(event);
    // maintainFocus on tab key press
    if (event.keyCode === TAB_KEY) this.maintainFocus(event);
  };

  Dashboard.prototype.handleClickOutside = function handleClickOutside() {
    if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
  };

  Dashboard.prototype.handlePaste = function handlePaste(event) {
    var _this4 = this;

    // 1. Let any acquirer plugin (Url/Webcam/etc.) handle pastes to the root
    this.uppy.iteratePlugins(function (plugin) {
      if (plugin.type === 'acquirer') {
        // Every Plugin with .type acquirer can define handleRootPaste(event)
        plugin.handleRootPaste && plugin.handleRootPaste(event);
      }
    });

    // 2. Add all dropped files
    var files = toArray(event.clipboardData.files);
    files.forEach(function (file) {
      _this4.uppy.log('[Dashboard] File pasted');
      _this4.addFile(file);
    });
  };

  Dashboard.prototype.handleInputChange = function handleInputChange(event) {
    var _this5 = this;

    event.preventDefault();
    var files = toArray(event.target.files);
    files.forEach(function (file) {
      return _this5.addFile(file);
    });
  };

  Dashboard.prototype.addFile = function addFile(file) {
    try {
      this.uppy.addFile({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || null
        }
      });
    } catch (err) {
      // Nothing, restriction errors handled in Core
    }
  };

  // _Why make insides of Dashboard invisible until first ResizeObserver event is emitted?
  //  ResizeOberserver doesn't emit the first resize event fast enough, users can see the jump from one .uppy-size-- to another (e.g. in Safari)
  // _Why not apply visibility property to .uppy-Dashboard-inner?
  //  Because ideally, acc to specs, ResizeObserver should see invisible elements as of width 0. So even though applying invisibility to .uppy-Dashboard-inner works now, it may not work in the future.


  Dashboard.prototype.startListeningToResize = function startListeningToResize() {
    var _this6 = this;

    // Watch for Dashboard container (`.uppy-Dashboard-inner`) resize
    // and update containerWidth/containerHeight in plugin state accordingly.
    // Emits first event on initialization.
    this.resizeObserver = new ResizeObserver(function (entries, observer) {
      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var entry = _ref;
        var _entry$contentRect = entry.contentRect,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;


        _this6.uppy.log('[Dashboard] resized: ' + width + ' / ' + height);

        _this6.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
      }
    });
    this.resizeObserver.observe(this.el.querySelector('.uppy-Dashboard-inner'));

    // If ResizeObserver fails to emit an event telling us what size to use - default to the mobile view
    this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
      var pluginState = _this6.getPluginState();
      if (!pluginState.areInsidesReadyToBeVisible) {
        _this6.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout");

        _this6.setPluginState({
          areInsidesReadyToBeVisible: true
        });
      }
    }, 1000);
  };

  Dashboard.prototype.stopListeningToResize = function stopListeningToResize() {
    this.resizeObserver.disconnect();

    clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
  };

  Dashboard.prototype.handleDragOver = function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({ isDraggingOver: true });
  };

  Dashboard.prototype.handleDragLeave = function handleDragLeave(event) {
    var _this7 = this;

    event.preventDefault();
    event.stopPropagation();

    clearTimeout(this.removeDragOverClassTimeout);
    // Timeout against flickering, this solution is taken from drag-drop library. Solution with 'pointer-events: none' didn't work across browsers.
    this.removeDragOverClassTimeout = setTimeout(function () {
      _this7.setPluginState({ isDraggingOver: false });
    }, 50);
  };

  Dashboard.prototype.handleDrop = function handleDrop(event, dropCategory) {
    var _this8 = this;

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    // 1. Add a small (+) icon on drop
    event.dataTransfer.dropEffect = 'copy';

    // 2. Remove dragover class
    this.setPluginState({ isDraggingOver: false });

    // 3. Let any acquirer plugin (Url/Webcam/etc.) handle drops to the root
    this.uppy.iteratePlugins(function (plugin) {
      if (plugin.type === 'acquirer') {
        // Every Plugin with .type acquirer can define handleRootDrop(event)
        plugin.handleRootDrop && plugin.handleRootDrop(event);
      }
    });

    // 4. Add all dropped files
    getDroppedFiles(event.dataTransfer).then(function (files) {
      if (files.length > 0) {
        _this8.uppy.log('[Dashboard] Files were dropped');
        files.forEach(function (file) {
          return _this8.addFile(file);
        });
      }
    });
  };

  Dashboard.prototype.initEvents = function initEvents() {
    var _this9 = this;

    // Modal open button
    var showModalTrigger = findAllDOMElements(this.opts.trigger);
    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.addEventListener('click', _this9.openModal);
      });
    }

    if (!this.opts.inline && !showModalTrigger) {
      this.uppy.log('Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options unless you are planning to call openModal() method yourself', 'error');
    }

    this.startListeningToResize();

    this.uppy.on('plugin-remove', this.removeTarget);
    this.uppy.on('file-added', this.handleFileAdded);
    this.uppy.on('complete', this.handleComplete);
  };

  Dashboard.prototype.handleFileAdded = function handleFileAdded() {
    this.hideAllPanels();
  };

  Dashboard.prototype.handleComplete = function handleComplete(_ref2) {
    var failed = _ref2.failed,
        uploadID = _ref2.uploadID;

    if (this.opts.closeAfterFinish && failed.length === 0) {
      // All uploads are done
      this.requestCloseModal();
    }
  };

  Dashboard.prototype.removeEvents = function removeEvents() {
    var _this10 = this;

    var showModalTrigger = findAllDOMElements(this.opts.trigger);
    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.removeEventListener('click', _this10.openModal);
      });
    }

    this.stopListeningToResize();

    window.removeEventListener('popstate', this.handlePopState, false);
    this.uppy.off('plugin-remove', this.removeTarget);
    this.uppy.off('file-added', this.handleFileAdded);
    this.uppy.off('complete', this.handleComplete);
  };

  Dashboard.prototype.toggleFileCard = function toggleFileCard(fileId) {
    this.setPluginState({
      fileCardFor: fileId || null,
      activeOverlayType: fileId ? 'FileCard' : null
    });
  };

  Dashboard.prototype.toggleAddFilesPanel = function toggleAddFilesPanel(show) {
    this.setPluginState({
      showAddFilesPanel: show,
      activeOverlayType: show ? 'AddFiles' : null
    });
  };

  Dashboard.prototype.render = function render(state) {
    var _this11 = this;

    var pluginState = this.getPluginState();
    var files = state.files,
        capabilities = state.capabilities,
        allowNewUpload = state.allowNewUpload;

    // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var newFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadStarted;
    });

    var uploadStartedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted;
    });

    var pausedFiles = Object.keys(files).filter(function (file) {
      return files[file].isPaused;
    });

    var completeFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadComplete;
    });

    var erroredFiles = Object.keys(files).filter(function (file) {
      return files[file].error;
    });

    var inProgressFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
    });

    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !files[file].isPaused;
    });

    var processingFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var isUploadStarted = uploadStartedFiles.length > 0;

    var isAllComplete = state.totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;

    var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;

    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;

    var attachRenderFunctionToTarget = function attachRenderFunctionToTarget(target) {
      var plugin = _this11.uppy.getPlugin(target.id);
      return _extends({}, target, {
        icon: plugin.icon || _this11.opts.defaultPickerIcon,
        render: plugin.render
      });
    };

    var isSupported = function isSupported(target) {
      var plugin = _this11.uppy.getPlugin(target.id);
      // If the plugin does not provide a `supported` check, assume the plugin works everywhere.
      if (typeof plugin.isSupported !== 'function') {
        return true;
      }
      return plugin.isSupported();
    };

    var acquirers = pluginState.targets.filter(function (target) {
      return target.type === 'acquirer' && isSupported(target);
    }).map(attachRenderFunctionToTarget);

    var progressindicators = pluginState.targets.filter(function (target) {
      return target.type === 'progressindicator';
    }).map(attachRenderFunctionToTarget);

    var startUpload = function startUpload(ev) {
      _this11.uppy.upload().catch(function (err) {
        // Log error.
        _this11.uppy.log(err.stack || err.message || err);
      });
    };

    var cancelUpload = function cancelUpload(fileID) {
      _this11.uppy.removeFile(fileID);
    };

    var saveFileCard = function saveFileCard(meta, fileID) {
      _this11.uppy.setFileMeta(fileID, meta);
      _this11.toggleFileCard();
    };

    return DashboardUI({
      state: state,
      isHidden: pluginState.isHidden,
      files: files,
      newFiles: newFiles,
      uploadStartedFiles: uploadStartedFiles,
      completeFiles: completeFiles,
      erroredFiles: erroredFiles,
      inProgressFiles: inProgressFiles,
      inProgressNotPausedFiles: inProgressNotPausedFiles,
      processingFiles: processingFiles,
      isUploadStarted: isUploadStarted,
      isAllComplete: isAllComplete,
      isAllErrored: isAllErrored,
      isAllPaused: isAllPaused,
      totalFileCount: Object.keys(files).length,
      totalProgress: state.totalProgress,
      allowNewUpload: allowNewUpload,
      acquirers: acquirers,
      activePickerPanel: pluginState.activePickerPanel,
      animateOpenClose: this.opts.animateOpenClose,
      isClosing: pluginState.isClosing,
      getPlugin: this.uppy.getPlugin,
      progressindicators: progressindicators,
      autoProceed: this.uppy.opts.autoProceed,
      id: this.id,
      closeModal: this.requestCloseModal,
      handleClickOutside: this.handleClickOutside,
      handleInputChange: this.handleInputChange,
      handlePaste: this.handlePaste,
      inline: this.opts.inline,
      showPanel: this.showPanel,
      hideAllPanels: this.hideAllPanels,
      log: this.uppy.log,
      i18n: this.i18n,
      i18nArray: this.i18nArray,
      addFile: this.uppy.addFile,
      removeFile: this.uppy.removeFile,
      info: this.uppy.info,
      note: this.opts.note,
      metaFields: pluginState.metaFields,
      resumableUploads: capabilities.resumableUploads || false,
      individualCancellation: capabilities.individualCancellation,
      startUpload: startUpload,
      pauseUpload: this.uppy.pauseResume,
      retryUpload: this.uppy.retryUpload,
      cancelUpload: cancelUpload,
      cancelAll: this.uppy.cancelAll,
      fileCardFor: pluginState.fileCardFor,
      toggleFileCard: this.toggleFileCard,
      toggleAddFilesPanel: this.toggleAddFilesPanel,
      showAddFilesPanel: pluginState.showAddFilesPanel,
      saveFileCard: saveFileCard,
      width: this.opts.width,
      height: this.opts.height,
      showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
      proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
      currentWidth: pluginState.containerWidth,
      isWide: pluginState.containerWidth > 400,
      containerWidth: pluginState.containerWidth,
      areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
      isTargetDOMEl: this.isTargetDOMEl,
      parentElement: this.el,
      allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
      maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
      showSelectedFiles: this.opts.showSelectedFiles,
      // drag props
      isDraggingOver: pluginState.isDraggingOver,
      handleDragOver: this.handleDragOver,
      handleDragLeave: this.handleDragLeave,
      handleDrop: this.handleDrop
    });
  };

  Dashboard.prototype.discoverProviderPlugins = function discoverProviderPlugins() {
    var _this12 = this;

    this.uppy.iteratePlugins(function (plugin) {
      if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this12.constructor) {
        _this12.addTarget(plugin);
      }
    });
  };

  Dashboard.prototype.install = function install() {
    var _this13 = this;

    // Set default state for Dashboard
    this.setPluginState({
      isHidden: true,
      fileCardFor: null,
      activeOverlayType: null,
      showAddFilesPanel: false,
      activePickerPanel: false,
      metaFields: this.opts.metaFields,
      targets: [],
      // We'll make them visible once .containerWidth is determined
      areInsidesReadyToBeVisible: false
    });

    var _opts = this.opts,
        inline = _opts.inline,
        closeAfterFinish = _opts.closeAfterFinish;

    if (inline && closeAfterFinish) {
      throw new Error('[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.');
    }

    var allowMultipleUploads = this.uppy.opts.allowMultipleUploads;

    if (allowMultipleUploads && closeAfterFinish) {
      this.uppy.log('[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true', 'warning');
    }

    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this13.uppy.getPlugin(pluginID);
      if (plugin) {
        plugin.mount(_this13, plugin);
      }
    });

    if (!this.opts.disableStatusBar) {
      this.uppy.use(StatusBar, {
        id: this.id + ':StatusBar',
        target: this,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        showProgressDetails: this.opts.showProgressDetails,
        hideAfterFinish: this.opts.hideProgressAfterFinish,
        locale: this.opts.locale
      });
    }

    if (!this.opts.disableInformer) {
      this.uppy.use(Informer, {
        id: this.id + ':Informer',
        target: this
      });
    }

    if (!this.opts.disableThumbnailGenerator) {
      this.uppy.use(ThumbnailGenerator, {
        id: this.id + ':ThumbnailGenerator',
        thumbnailWidth: this.opts.thumbnailWidth
      });
    }

    this.discoverProviderPlugins();

    this.initEvents();
  };

  Dashboard.prototype.uninstall = function uninstall() {
    var _this14 = this;

    if (!this.opts.disableInformer) {
      var informer = this.uppy.getPlugin(this.id + ':Informer');
      // Checking if this plugin exists, in case it was removed by uppy-core
      // before the Dashboard was.
      if (informer) this.uppy.removePlugin(informer);
    }

    if (!this.opts.disableStatusBar) {
      var statusBar = this.uppy.getPlugin(this.id + ':StatusBar');
      if (statusBar) this.uppy.removePlugin(statusBar);
    }

    if (!this.opts.disableThumbnailGenerator) {
      var thumbnail = this.uppy.getPlugin(this.id + ':ThumbnailGenerator');
      if (thumbnail) this.uppy.removePlugin(thumbnail);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this14.uppy.getPlugin(pluginID);
      if (plugin) plugin.unmount();
    });

    this.unmount();
    this.removeEvents();
  };

  return Dashboard;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies text to clipboard by creating an almost invisible textarea,
 * adding text there, then running execCommand('copy').
 * Falls back to prompt() when the easy way fails (hello, Safari!)
 * From http://stackoverflow.com/a/30810322
 *
 * @param {String} textToCopy
 * @param {String} fallbackString
 * @return {Promise}
 */
module.exports = function copyToClipboard(textToCopy, fallbackString) {
  fallbackString = fallbackString || 'Copy the URL below';

  return new Promise(function (resolve) {
    var textArea = document.createElement('textarea');
    textArea.setAttribute('style', {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '2em',
      height: '2em',
      padding: 0,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      background: 'transparent'
    });

    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    var magicCopyFailed = function magicCopyFailed() {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };

    try {
      var successful = document.execCommand('copy');
      if (!successful) {
        return magicCopyFailed('copy command unavailable');
      }
      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed(err);
    }
  });
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconFile = _require.iconFile,
    iconText = _require.iconText,
    iconAudio = _require.iconAudio,
    iconVideo = _require.iconVideo,
    iconPDF = _require.iconPDF;

module.exports = function getIconByMime(fileType) {
  var defaultChoice = {
    color: '#838999',
    icon: iconFile()
  };

  if (!fileType) return defaultChoice;

  var fileTypeGeneral = fileType.split('/')[0];
  var fileTypeSpecific = fileType.split('/')[1];

  if (fileTypeGeneral === 'text') {
    return {
      color: '#5a5e69',
      icon: iconText()
    };
  }

  if (fileTypeGeneral === 'audio') {
    return {
      color: '#068dbb',
      icon: iconAudio()
    };
  }

  if (fileTypeGeneral === 'video') {
    return {
      color: '#19af67',
      icon: iconVideo()
    };
  }

  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
    return {
      color: '#e25149',
      icon: iconPDF()
    };
  }

  if (fileTypeGeneral === 'image') {
    return {
      color: '#f2f2f2',
      icon: ''
    };
  }

  return defaultChoice;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ignore drop/paste events if they are not in input or textarea —
// otherwise when Url plugin adds drop/paste listeners to this.el,
// draging UI elements or pasting anything into any field triggers those events —
// Url treats them as URLs that need to be imported

function ignoreEvent(ev) {
  var tagName = ev.target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
}

module.exports = ignoreEvent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/truncateString.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function truncateString(str, length) {
  if (str.length > length) {
    return str.substr(0, length / 2) + '...' + str.substr(str.length - length / 4, str.length);
  }
  return str;

  // more precise version if needed
  // http://stackoverflow.com/a/831583
};

/***/ }),

/***/ "./node_modules/@uppy/informer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/informer/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require2.h;

/**
 * Informer
 * Shows rad message bubbles
 * used like this: `uppy.info('hello world', 'info', 5000)`
 * or for errors: `uppy.info('Error uploading img.jpg', 'error', 5000)`
 *
 */


module.exports = function (_Plugin) {
  _inherits(Informer, _Plugin);

  function Informer(uppy, opts) {
    _classCallCheck(this, Informer);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer';

    // set default options
    var defaultOptions = {
      typeColors: {
        info: {
          text: '#fff',
          bg: '#000'
        },
        warning: {
          text: '#fff',
          bg: '#F6A623'
        },
        error: {
          text: '#fff',
          bg: '#D32F2F'
        },
        success: {
          text: '#fff',
          bg: '#1BB240'
        }
      }

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    _this.render = _this.render.bind(_this);
    return _this;
  }

  Informer.prototype.render = function render(state) {
    var _state$info = state.info,
        isHidden = _state$info.isHidden,
        message = _state$info.message,
        details = _state$info.details;
    // const style = {
    //   backgroundColor: this.opts.typeColors[type].bg,
    //   color: this.opts.typeColors[type].text
    // }

    return h(
      'div',
      { 'class': 'uppy uppy-Informer',
        'aria-hidden': isHidden },
      h(
        'p',
        { role: 'alert' },
        message,
        ' ',
        details && h(
          'span',
          {
            'aria-label': details,
            'data-microtip-position': 'top-left',
            'data-microtip-size': 'medium',
            role: 'tooltip' },
          '?'
        )
      )
    );
  };

  Informer.prototype.install = function install() {
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
  };

  return Informer;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBar.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBar.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var prettyETA = __webpack_require__(/*! @uppy/utils/lib/prettyETA */ "./node_modules/@uppy/utils/lib/prettyETA.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js"),
    h = _require.h;

function calculateProcessingProgress(files) {
  // Collect pre or postprocessing progress states.
  var progresses = [];
  Object.keys(files).forEach(function (fileID) {
    var progress = files[fileID].progress;

    if (progress.preprocess) {
      progresses.push(progress.preprocess);
    }
    if (progress.postprocess) {
      progresses.push(progress.postprocess);
    }
  });

  // In the future we should probably do this differently. For now we'll take the
  // mode and message from the first file…
  var _progresses$ = progresses[0],
      mode = _progresses$.mode,
      message = _progresses$.message;

  var value = progresses.filter(isDeterminate).reduce(function (total, progress, index, all) {
    return total + progress.value / all.length;
  }, 0);
  function isDeterminate(progress) {
    return progress.mode === 'determinate';
  }

  return {
    mode: mode,
    message: message,
    value: value
  };
}

function togglePauseResume(props) {
  if (props.isAllComplete) return;

  if (!props.resumableUploads) {
    return props.cancelAll();
  }

  if (props.isAllPaused) {
    return props.resumeAll();
  }

  return props.pauseAll();
}

module.exports = function (props) {
  props = props || {};

  var _props = props,
      newFiles = _props.newFiles,
      allowNewUpload = _props.allowNewUpload,
      isUploadInProgress = _props.isUploadInProgress,
      isAllPaused = _props.isAllPaused,
      resumableUploads = _props.resumableUploads,
      error = _props.error,
      hideUploadButton = _props.hideUploadButton,
      hidePauseResumeButton = _props.hidePauseResumeButton,
      hideCancelButton = _props.hideCancelButton,
      hideRetryButton = _props.hideRetryButton;


  var uploadState = props.uploadState;

  var progressValue = props.totalProgress;
  var progressMode = void 0;
  var progressBarContent = void 0;

  if (uploadState === statusBarStates.STATE_PREPROCESSING || uploadState === statusBarStates.STATE_POSTPROCESSING) {
    var progress = calculateProcessingProgress(props.files);
    progressMode = progress.mode;
    if (progressMode === 'determinate') {
      progressValue = progress.value * 100;
    }

    progressBarContent = ProgressBarProcessing(progress);
  } else if (uploadState === statusBarStates.STATE_COMPLETE) {
    progressBarContent = ProgressBarComplete(props);
  } else if (uploadState === statusBarStates.STATE_UPLOADING) {
    if (!props.supportsUploadProgress) {
      progressMode = 'indeterminate';
      progressValue = null;
    }

    progressBarContent = ProgressBarUploading(props);
  } else if (uploadState === statusBarStates.STATE_ERROR) {
    progressValue = undefined;
    progressBarContent = ProgressBarError(props);
  }

  var width = typeof progressValue === 'number' ? progressValue : 100;
  var isHidden = uploadState === statusBarStates.STATE_WAITING && props.hideUploadButton || uploadState === statusBarStates.STATE_WAITING && !props.newFiles > 0 || uploadState === statusBarStates.STATE_COMPLETE && props.hideAfterFinish;

  var showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  var showCancelBtn = !hideCancelButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_PREPROCESSING && uploadState !== statusBarStates.STATE_POSTPROCESSING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showRetryBtn = error && !hideRetryButton;

  var progressClassNames = 'uppy-StatusBar-progress\n                           ' + (progressMode ? 'is-' + progressMode : '');

  var statusBarClassNames = classNames({ 'uppy-Root': props.isTargetDOMEl }, 'uppy-StatusBar', 'is-' + uploadState);

  return h(
    'div',
    { 'class': statusBarClassNames, 'aria-hidden': isHidden },
    h('div', { 'class': progressClassNames,
      style: { width: width + '%' },
      role: 'progressbar',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuenow': progressValue }),
    progressBarContent,
    h(
      'div',
      { 'class': 'uppy-StatusBar-actions' },
      showUploadBtn ? h(UploadBtn, _extends({}, props, { uploadState: uploadState })) : null,
      showRetryBtn ? h(RetryBtn, props) : null,
      showPauseResumeBtn ? h(PauseResumeButton, props) : null,
      showCancelBtn ? h(CancelBtn, props) : null
    )
  );
};

var UploadBtn = function UploadBtn(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--upload', { 'uppy-c-btn-primary': props.uploadState === statusBarStates.STATE_WAITING });

  return h(
    'button',
    { type: 'button',
      'class': uploadBtnClassNames,
      'aria-label': props.i18n('uploadXFiles', { smart_count: props.newFiles }),
      onclick: props.startUpload },
    props.newFiles && props.isUploadStarted ? props.i18n('uploadXNewFiles', { smart_count: props.newFiles }) : props.i18n('uploadXFiles', { smart_count: props.newFiles })
  );
};

var RetryBtn = function RetryBtn(props) {
  return h(
    'button',
    { type: 'button',
      'class': 'uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry', 'aria-label': props.i18n('retryUpload'), onclick: props.retryAll },
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '8', height: '10', viewBox: '0 0 8 10' },
      h('path', { d: 'M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z' })
    ),
    props.i18n('retry')
  );
};

var CancelBtn = function CancelBtn(props) {
  return h(
    'button',
    {
      type: 'button',
      'class': 'uppy-u-reset uppy-StatusBar-actionCircleBtn',
      title: props.i18n('cancel'),
      'aria-label': props.i18n('cancel'),
      onclick: props.cancelAll },
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '16', height: '16', viewBox: '0 0 16 16' },
      h(
        'g',
        { fill: 'none', 'fill-rule': 'evenodd' },
        h('circle', { fill: '#888', cx: '8', cy: '8', r: '8' }),
        h('path', { fill: '#FFF', d: 'M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z' })
      )
    )
  );
};

var PauseResumeButton = function PauseResumeButton(props) {
  var isAllPaused = props.isAllPaused,
      i18n = props.i18n;

  var title = isAllPaused ? i18n('resume') : i18n('pause');

  return h(
    'button',
    {
      title: title,
      'aria-label': title,
      'class': 'uppy-u-reset uppy-StatusBar-actionCircleBtn',
      type: 'button',
      onclick: function onclick() {
        return togglePauseResume(props);
      } },
    isAllPaused ? h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '16', height: '16', viewBox: '0 0 16 16' },
      h(
        'g',
        { fill: 'none', 'fill-rule': 'evenodd' },
        h('circle', { fill: '#888', cx: '8', cy: '8', r: '8' }),
        h('path', { fill: '#FFF', d: 'M6 4.25L11.5 8 6 11.75z' })
      )
    ) : h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '16', height: '16', viewBox: '0 0 16 16' },
      h(
        'g',
        { fill: 'none', 'fill-rule': 'evenodd' },
        h('circle', { fill: '#888', cx: '8', cy: '8', r: '8' }),
        h('path', { d: 'M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z', fill: '#FFF' })
      )
    )
  );
};

var LoadingSpinner = function LoadingSpinner(props) {
  return h(
    'svg',
    { 'class': 'uppy-StatusBar-spinner', width: '14', height: '14' },
    h('path', { d: 'M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0', 'fill-rule': 'evenodd' })
  );
};

var ProgressBarProcessing = function ProgressBarProcessing(props) {
  var value = Math.round(props.value * 100);

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content' },
    h(LoadingSpinner, props),
    props.mode === 'determinate' ? value + '% \xB7 ' : '',
    props.message
  );
};

var ProgressDetails = function ProgressDetails(props) {
  return h(
    'div',
    { 'class': 'uppy-StatusBar-statusSecondary' },
    props.numUploads > 1 && props.i18n('filesUploadedOfTotal', { complete: props.complete, smart_count: props.numUploads }) + ' \xB7 ',
    props.i18n('dataUploadedOfTotal', {
      complete: prettyBytes(props.totalUploadedSize),
      total: prettyBytes(props.totalSize)
    }) + ' \xB7 ',
    props.i18n('xTimeLeft', { time: prettyETA(props.totalETA) })
  );
};

var UnknownProgressDetails = function UnknownProgressDetails(props) {
  return h(
    'div',
    { 'class': 'uppy-StatusBar-statusSecondary' },
    props.i18n('filesUploadedOfTotal', { complete: props.complete, smart_count: props.numUploads })
  );
};

var UploadNewlyAddedFiles = function UploadNewlyAddedFiles(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn');

  return h(
    'div',
    { 'class': 'uppy-StatusBar-statusSecondary' },
    h(
      'div',
      { 'class': 'uppy-StatusBar-statusSecondaryHint' },
      props.i18n('xMoreFilesAdded', { smart_count: props.newFiles })
    ),
    h(
      'button',
      { type: 'button',
        'class': uploadBtnClassNames,
        'aria-label': props.i18n('uploadXFiles', { smart_count: props.newFiles }),
        onclick: props.startUpload },
      props.i18n('upload')
    )
  );
};

var ThrottledProgressDetails = throttle(ProgressDetails, 500, { leading: true, trailing: true });

var ProgressBarUploading = function ProgressBarUploading(props) {
  if (!props.isUploadStarted || props.isAllComplete) {
    return null;
  }

  var title = props.isAllPaused ? props.i18n('paused') : props.i18n('uploading');
  var showUploadNewlyAddedFiles = props.newFiles && props.isUploadStarted;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', 'aria-label': title, title: title },
    !props.isAllPaused ? h(LoadingSpinner, props) : null,
    h(
      'div',
      { 'class': 'uppy-StatusBar-status' },
      h(
        'div',
        { 'class': 'uppy-StatusBar-statusPrimary' },
        props.supportsUploadProgress ? title + ': ' + props.totalProgress + '%' : title
      ),
      !props.isAllPaused && !showUploadNewlyAddedFiles && props.showProgressDetails ? props.supportsUploadProgress ? h(ThrottledProgressDetails, props) : h(UnknownProgressDetails, props) : null,
      showUploadNewlyAddedFiles ? h(UploadNewlyAddedFiles, props) : null
    )
  );
};

var ProgressBarComplete = function ProgressBarComplete(_ref) {
  var totalProgress = _ref.totalProgress,
      i18n = _ref.i18n;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', role: 'status', title: i18n('complete') },
    h(
      'div',
      { 'class': 'uppy-StatusBar-status' },
      h(
        'div',
        { 'class': 'uppy-StatusBar-statusPrimary' },
        h(
          'svg',
          { 'aria-hidden': 'true', 'class': 'uppy-StatusBar-statusIndicator UppyIcon', width: '15', height: '11', viewBox: '0 0 15 11' },
          h('path', { d: 'M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z' })
        ),
        i18n('complete')
      )
    )
  );
};

var ProgressBarError = function ProgressBarError(_ref2) {
  var error = _ref2.error,
      retryAll = _ref2.retryAll,
      hideRetryButton = _ref2.hideRetryButton,
      i18n = _ref2.i18n;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', role: 'alert', title: i18n('uploadFailed') },
    h(
      'div',
      { 'class': 'uppy-StatusBar-status' },
      h(
        'div',
        { 'class': 'uppy-StatusBar-statusPrimary' },
        h(
          'svg',
          { 'aria-hidden': 'true', 'class': 'uppy-StatusBar-statusIndicator UppyIcon', width: '11', height: '11', viewBox: '0 0 11 11' },
          h('path', { d: 'M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z' })
        ),
        i18n('uploadFailed')
      )
    ),
    h(
      'span',
      { 'class': 'uppy-StatusBar-details',
        'aria-label': error,
        'data-microtip-position': 'top-right',
        'data-microtip-size': 'medium',
        role: 'tooltip' },
      '?'
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBarStates.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'STATE_ERROR': 'error',
  'STATE_WAITING': 'waiting',
  'STATE_PREPROCESSING': 'preprocessing',
  'STATE_UPLOADING': 'uploading',
  'STATE_POSTPROCESSING': 'postprocessing',
  'STATE_COMPLETE': 'complete'
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var StatusBarUI = __webpack_require__(/*! ./StatusBar */ "./node_modules/@uppy/status-bar/lib/StatusBar.js");
var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");
var getSpeed = __webpack_require__(/*! @uppy/utils/lib/getSpeed */ "./node_modules/@uppy/utils/lib/getSpeed.js");
var getBytesRemaining = __webpack_require__(/*! @uppy/utils/lib/getBytesRemaining */ "./node_modules/@uppy/utils/lib/getBytesRemaining.js");

/**
 * StatusBar: renders a status bar with upload/pause/resume/cancel/retry buttons,
 * progress percentage and time remaining.
 */
module.exports = function (_Plugin) {
  _inherits(StatusBar, _Plugin);

  function StatusBar(uppy, opts) {
    _classCallCheck(this, StatusBar);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.id = _this.opts.id || 'StatusBar';
    _this.title = 'StatusBar';
    _this.type = 'progressindicator';

    _this.defaultLocale = {
      strings: {
        uploading: 'Uploading',
        upload: 'Upload',
        complete: 'Complete',
        uploadFailed: 'Upload failed',
        paused: 'Paused',
        retry: 'Retry',
        cancel: 'Cancel',
        pause: 'Pause',
        resume: 'Resume',
        filesUploadedOfTotal: {
          0: '%{complete} of %{smart_count} file uploaded',
          1: '%{complete} of %{smart_count} files uploaded',
          2: '%{complete} of %{smart_count} files uploaded'
        },
        dataUploadedOfTotal: '%{complete} of %{total}',
        xTimeLeft: '%{time} left',
        uploadXFiles: {
          0: 'Upload %{smart_count} file',
          1: 'Upload %{smart_count} files',
          2: 'Upload %{smart_count} files'
        },
        uploadXNewFiles: {
          0: 'Upload +%{smart_count} file',
          1: 'Upload +%{smart_count} files',
          2: 'Upload +%{smart_count} files'
        },
        xMoreFilesAdded: {
          0: '%{smart_count} more file added',
          1: '%{smart_count} more files added',
          2: '%{smart_count} more files added'
        }
      }

      // set default options
    };var defaultOptions = {
      target: 'body',
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      hideAfterFinish: true

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);

    _this.startUpload = _this.startUpload.bind(_this);
    _this.render = _this.render.bind(_this);
    _this.install = _this.install.bind(_this);
    return _this;
  }

  StatusBar.prototype.getTotalSpeed = function getTotalSpeed(files) {
    var totalSpeed = 0;
    files.forEach(function (file) {
      totalSpeed = totalSpeed + getSpeed(file.progress);
    });
    return totalSpeed;
  };

  StatusBar.prototype.getTotalETA = function getTotalETA(files) {
    var totalSpeed = this.getTotalSpeed(files);
    if (totalSpeed === 0) {
      return 0;
    }

    var totalBytesRemaining = files.reduce(function (total, file) {
      return total + getBytesRemaining(file.progress);
    }, 0);

    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
  };

  StatusBar.prototype.startUpload = function startUpload() {
    var _this2 = this;

    return this.uppy.upload().catch(function (err) {
      _this2.uppy.log(err.stack || err.message || err);
      // Ignore
    });
  };

  StatusBar.prototype.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
    if (isAllErrored) {
      return statusBarStates.STATE_ERROR;
    }

    if (isAllComplete) {
      return statusBarStates.STATE_COMPLETE;
    }

    var state = statusBarStates.STATE_WAITING;
    var fileIDs = Object.keys(files);
    for (var i = 0; i < fileIDs.length; i++) {
      var progress = files[fileIDs[i]].progress;
      // If ANY files are being uploaded right now, show the uploading state.
      if (progress.uploadStarted && !progress.uploadComplete) {
        return statusBarStates.STATE_UPLOADING;
      }
      // If files are being preprocessed AND postprocessed at this time, we show the
      // preprocess state. If any files are being uploaded we show uploading.
      if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
        state = statusBarStates.STATE_PREPROCESSING;
      }
      // If NO files are being preprocessed or uploaded right now, but some files are
      // being postprocessed, show the postprocess state.
      if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
        state = statusBarStates.STATE_POSTPROCESSING;
      }
    }
    return state;
  };

  StatusBar.prototype.render = function render(state) {
    var capabilities = state.capabilities,
        files = state.files,
        allowNewUpload = state.allowNewUpload,
        totalProgress = state.totalProgress,
        error = state.error;

    // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var newFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadStarted && !files[file].progress.preprocess && !files[file].progress.postprocess;
    });

    var uploadStartedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted;
    });

    var pausedFiles = uploadStartedFiles.filter(function (file) {
      return files[file].isPaused;
    });

    var completeFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadComplete;
    });

    var erroredFiles = Object.keys(files).filter(function (file) {
      return files[file].error;
    });

    var inProgressFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
    });

    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !files[file].isPaused;
    });

    var startedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted || files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var processingFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var inProgressNotPausedFilesArray = inProgressNotPausedFiles.map(function (file) {
      return files[file];
    });

    var totalETA = this.getTotalETA(inProgressNotPausedFilesArray);

    // total size and uploaded size
    var totalSize = 0;
    var totalUploadedSize = 0;
    inProgressNotPausedFilesArray.forEach(function (file) {
      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
    });

    var isUploadStarted = uploadStartedFiles.length > 0;

    var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;

    var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;

    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    // const isAllPaused = inProgressFiles.length === 0 &&
    //   !isAllComplete &&
    //   !isAllErrored &&
    //   uploadStartedFiles.length > 0

    var isUploadInProgress = inProgressFiles.length > 0;

    var resumableUploads = capabilities.resumableUploads || false;
    var supportsUploadProgress = capabilities.uploadProgress !== false;

    return StatusBarUI({
      error: error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || {}),
      allowNewUpload: allowNewUpload,
      totalProgress: totalProgress,
      totalSize: totalSize,
      totalUploadedSize: totalUploadedSize,
      isAllComplete: isAllComplete,
      isAllPaused: isAllPaused,
      isAllErrored: isAllErrored,
      isUploadStarted: isUploadStarted,
      isUploadInProgress: isUploadInProgress,
      complete: completeFiles.length,
      newFiles: newFiles.length,
      numUploads: startedFiles.length,
      totalETA: totalETA,
      files: files,
      i18n: this.i18n,
      pauseAll: this.uppy.pauseAll,
      resumeAll: this.uppy.resumeAll,
      retryAll: this.uppy.retryAll,
      cancelAll: this.uppy.cancelAll,
      startUpload: this.startUpload,
      resumableUploads: resumableUploads,
      supportsUploadProgress: supportsUploadProgress,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
  };

  StatusBar.prototype.install = function install() {
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
  };

  StatusBar.prototype.uninstall = function uninstall() {
    this.unmount();
  };

  return StatusBar;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/store-default/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/store-default/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Default store that keeps state in a simple object.
 */
var DefaultStore = function () {
  function DefaultStore() {
    _classCallCheck(this, DefaultStore);

    this.state = {};
    this.callbacks = [];
  }

  DefaultStore.prototype.getState = function getState() {
    return this.state;
  };

  DefaultStore.prototype.setState = function setState(patch) {
    var prevState = _extends({}, this.state);
    var nextState = _extends({}, this.state, patch);

    this.state = nextState;
    this._publish(prevState, nextState, patch);
  };

  DefaultStore.prototype.subscribe = function subscribe(listener) {
    var _this = this;

    this.callbacks.push(listener);
    return function () {
      // Remove the listener.
      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
    };
  };

  DefaultStore.prototype._publish = function _publish() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.callbacks.forEach(function (listener) {
      listener.apply(undefined, args);
    });
  };

  return DefaultStore;
}();

module.exports = function defaultStore() {
  return new DefaultStore();
};

/***/ }),

/***/ "./node_modules/@uppy/thumbnail-generator/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/thumbnail-generator/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var dataURItoBlob = __webpack_require__(/*! @uppy/utils/lib/dataURItoBlob */ "./node_modules/@uppy/utils/lib/dataURItoBlob.js");
var isObjectURL = __webpack_require__(/*! @uppy/utils/lib/isObjectURL */ "./node_modules/@uppy/utils/lib/isObjectURL.js");
var isPreviewSupported = __webpack_require__(/*! @uppy/utils/lib/isPreviewSupported */ "./node_modules/@uppy/utils/lib/isPreviewSupported.js");

/**
 * The Thumbnail Generator plugin
 */

module.exports = function (_Plugin) {
  _inherits(ThumbnailGenerator, _Plugin);

  function ThumbnailGenerator(uppy, opts) {
    _classCallCheck(this, ThumbnailGenerator);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'thumbnail';
    _this.id = _this.opts.id || 'ThumbnailGenerator';
    _this.title = 'Thumbnail Generator';
    _this.queue = [];
    _this.queueProcessing = false;
    _this.defaultThumbnailDimension = 200;

    var defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null
    };

    _this.opts = _extends({}, defaultOptions, opts);

    _this.onFileAdded = _this.onFileAdded.bind(_this);
    _this.onFileRemoved = _this.onFileRemoved.bind(_this);
    _this.onRestored = _this.onRestored.bind(_this);
    return _this;
  }

  /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} width
   * @return {Promise}
   */


  ThumbnailGenerator.prototype.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
    var _this2 = this;

    var originalUrl = URL.createObjectURL(file.data);

    var onload = new Promise(function (resolve, reject) {
      var image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', function () {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener('error', function (event) {
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
      });
    });

    return onload.then(function (image) {
      var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight);
      var canvas = _this2.resizeImage(image, dimensions.width, dimensions.height);
      return _this2.canvasToBlob(canvas, 'image/png');
    }).then(function (blob) {
      return URL.createObjectURL(blob);
    });
  };

  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */


  ThumbnailGenerator.prototype.getProportionalDimensions = function getProportionalDimensions(img, width, height) {
    var aspect = img.width / img.height;

    if (width != null) {
      return {
        width: width,
        height: Math.round(width / aspect)
      };
    }

    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height: height
      };
    }

    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  };

  /**
   * Make sure the image doesn’t exceed browser/device canvas limits.
   * For ios with 256 RAM and ie
   */


  ThumbnailGenerator.prototype.protect = function protect(image) {
    // https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element

    var ratio = image.width / image.height;

    var maxSquare = 5000000; // ios max canvas square
    var maxSize = 4096; // ie max canvas dimensions

    var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
    var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
    if (maxW > maxSize) {
      maxW = maxSize;
      maxH = Math.round(maxW / ratio);
    }
    if (maxH > maxSize) {
      maxH = maxSize;
      maxW = Math.round(ratio * maxH);
    }
    if (image.width > maxW) {
      var canvas = document.createElement('canvas');
      canvas.width = maxW;
      canvas.height = maxH;
      canvas.getContext('2d').drawImage(image, 0, 0, maxW, maxH);
      image = canvas;
    }

    return image;
  };

  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */


  ThumbnailGenerator.prototype.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
    // Resizing in steps refactored to use a solution from
    // https://blog.uploadcare.com/image-resize-in-browsers-is-broken-e38eed08df01

    image = this.protect(image);

    // Use the Polyfill for Math.log2() since IE doesn't support log2
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2#Polyfill
    var steps = Math.ceil(Math.log(image.width / targetWidth) * Math.LOG2E);
    if (steps < 1) {
      steps = 1;
    }
    var sW = targetWidth * Math.pow(2, steps - 1);
    var sH = targetHeight * Math.pow(2, steps - 1);
    var x = 2;

    while (steps--) {
      var canvas = document.createElement('canvas');
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext('2d').drawImage(image, 0, 0, sW, sH);
      image = canvas;

      sW = Math.round(sW / x);
      sH = Math.round(sH / x);
    }

    return image;
  };

  /**
   * Save a <canvas> element's content to a Blob object.
   *
   * @param {HTMLCanvasElement} canvas
   * @return {Promise}
   */


  ThumbnailGenerator.prototype.canvasToBlob = function canvasToBlob(canvas, type, quality) {
    try {
      canvas.getContext('2d').getImageData(0, 0, 1, 1);
    } catch (err) {
      if (err.code === 18) {
        return Promise.reject(new Error('cannot read image, probably an svg with external resources'));
      }
    }

    if (canvas.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(resolve, type, quality);
      }).then(function (blob) {
        if (blob === null) {
          throw new Error('cannot read image, probably an svg with external resources');
        }
        return blob;
      });
    }
    return Promise.resolve().then(function () {
      return dataURItoBlob(canvas.toDataURL(type, quality), {});
    });
  };

  /**
   * Set the preview URL for a file.
   */


  ThumbnailGenerator.prototype.setPreviewURL = function setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, { preview: preview });
  };

  ThumbnailGenerator.prototype.addToQueue = function addToQueue(item) {
    this.queue.push(item);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
  };

  ThumbnailGenerator.prototype.processQueue = function processQueue() {
    var _this3 = this;

    this.queueProcessing = true;
    if (this.queue.length > 0) {
      var current = this.queue.shift();
      return this.requestThumbnail(current).catch(function (err) {}) // eslint-disable-line handle-callback-err
      .then(function () {
        return _this3.processQueue();
      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }
  };

  ThumbnailGenerator.prototype.requestThumbnail = function requestThumbnail(file) {
    var _this4 = this;

    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
        _this4.setPreviewURL(file.id, preview);
        _this4.uppy.log('[ThumbnailGenerator] Generated thumbnail for ' + file.id);
        _this4.uppy.emit('thumbnail:generated', _this4.uppy.getFile(file.id), preview);
      }).catch(function (err) {
        _this4.uppy.log('[ThumbnailGenerator] Failed thumbnail for ' + file.id + ':', 'warning');
        _this4.uppy.log(err, 'warning');
        _this4.uppy.emit('thumbnail:error', _this4.uppy.getFile(file.id), err);
      });
    }
    return Promise.resolve();
  };

  ThumbnailGenerator.prototype.onFileAdded = function onFileAdded(file) {
    if (!file.preview) {
      this.addToQueue(file);
    }
  };

  ThumbnailGenerator.prototype.onFileRemoved = function onFileRemoved(file) {
    var index = this.queue.indexOf(file);
    if (index !== -1) {
      this.queue.splice(index, 1);
    }

    // Clean up object URLs.
    if (file.preview && isObjectURL(file.preview)) {
      URL.revokeObjectURL(file.preview);
    }
  };

  ThumbnailGenerator.prototype.onRestored = function onRestored() {
    var _this5 = this;

    var _uppy$getState = this.uppy.getState(),
        files = _uppy$getState.files;

    var fileIDs = Object.keys(files);
    fileIDs.forEach(function (fileID) {
      var file = _this5.uppy.getFile(fileID);
      if (!file.isRestored) return;
      // Only add blob URLs; they are likely invalid after being restored.
      if (!file.preview || isObjectURL(file.preview)) {
        _this5.addToQueue(file);
      }
    });
  };

  ThumbnailGenerator.prototype.install = function install() {
    this.uppy.on('file-added', this.onFileAdded);
    this.uppy.on('file-removed', this.onFileRemoved);
    this.uppy.on('restored', this.onRestored);
  };

  ThumbnailGenerator.prototype.uninstall = function uninstall() {
    this.uppy.off('file-added', this.onFileAdded);
    this.uppy.off('file-removed', this.onFileRemoved);
    this.uppy.off('restored', this.onRestored);
  };

  return ThumbnailGenerator;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/Translator.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/Translator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Translates strings with interpolation & pluralization support.
 * Extensible with custom dictionaries and pluralization functions.
 *
 * Borrows heavily from and inspired by Polyglot https://github.com/airbnb/polyglot.js,
 * basically a stripped-down version of it. Differences: pluralization functions are not hardcoded
 * and can be easily added among with dictionaries, nested objects are used for pluralization
 * as opposed to `||||` delimeter
 *
 * Usage example: `translator.translate('files_chosen', {smart_count: 3})`
 *
 * @param {object|Array<object>} locale Locale or list of locales.
 */
module.exports = function () {
  function Translator(locales) {
    var _this = this;

    _classCallCheck(this, Translator);

    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
        if (n === 1) {
          return 0;
        }
        return 1;
      }
    };

    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
        return _this._apply(locale);
      });
    } else {
      this._apply(locales);
    }
  }

  Translator.prototype._apply = function _apply(locale) {
    if (!locale || !locale.strings) {
      return;
    }

    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
  };

  /**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param {string} phrase that needs interpolation, with placeholders
   * @param {object} options with values that will be used to replace placeholders
   * @return {string} interpolated
   */


  Translator.prototype.interpolate = function interpolate(phrase, options) {
    var _String$prototype = String.prototype,
        split = _String$prototype.split,
        replace = _String$prototype.replace;

    var dollarRegex = /\$/g;
    var dollarBillsYall = '$$$$';
    var interpolated = [phrase];

    for (var arg in options) {
      if (arg !== '_' && options.hasOwnProperty(arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];
        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        }
        // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.
        interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }

    return interpolated;

    function insertReplacement(source, rx, replacement) {
      var newParts = [];
      source.forEach(function (chunk) {
        split.call(chunk, rx).forEach(function (raw, i, list) {
          if (raw !== '') {
            newParts.push(raw);
          }

          // Interlace with the `replacement` value
          if (i < list.length - 1) {
            newParts.push(replacement);
          }
        });
      });
      return newParts;
    }
  };

  /**
   * Public translate method
   *
   * @param {string} key
   * @param {object} options with values that will be used later to replace placeholders in string
   * @return {string} translated (and interpolated)
   */


  Translator.prototype.translate = function translate(key, options) {
    return this.translateArray(key, options).join('');
  };

  /**
   * Get a translation and return the translated and interpolated parts as an array.
   * @param {string} key
   * @param {object} options with values that will be used to replace placeholders
   * @return {Array} The translated and interpolated parts, in order.
   */


  Translator.prototype.translateArray = function translateArray(key, options) {
    if (options && typeof options.smart_count !== 'undefined') {
      var plural = this.locale.pluralize(options.smart_count);
      return this.interpolate(this.locale.strings[key][plural], options);
    }

    return this.interpolate(this.locale.strings[key], options);
  };

  return Translator;
}();

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/dataURItoBlob.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/dataURItoBlob.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
  // get the base64 data
  var data = dataURI.split(',')[1];

  // user may provide mime type, if not get it from data URI
  var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];

  // default to plain/text if data URI has no mimeType
  if (mimeType == null) {
    mimeType = 'plain/text';
  }

  var binary = atob(data);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  // Convert to a File?
  if (toFile) {
    return new File([new Uint8Array(array)], opts.name || '', { type: mimeType });
  }

  return new Blob([new Uint8Array(array)], { type: mimeType });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/emitSocketProgress.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/emitSocketProgress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

function _emitSocketProgress(uploader, progressData, file) {
  var progress = progressData.progress,
      bytesUploaded = progressData.bytesUploaded,
      bytesTotal = progressData.bytesTotal;

  if (progress) {
    uploader.uppy.log('Upload progress: ' + progress);
    uploader.uppy.emit('upload-progress', file, {
      uploader: uploader,
      bytesUploaded: bytesUploaded,
      bytesTotal: bytesTotal
    });
  }
}

module.exports = throttle(_emitSocketProgress, 300, { leading: true, trailing: true });

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findAllDOMElements.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findAllDOMElements.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");

/**
 * Find one or more DOM elements.
 *
 * @param {string} element
 * @return {Array|null}
 */
module.exports = function findAllDOMElements(element) {
  if (typeof element === 'string') {
    var elements = [].slice.call(document.querySelectorAll(element));
    return elements.length > 0 ? elements : null;
  }

  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && isDOMElement(element)) {
    return [element];
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findDOMElement.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findDOMElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");

/**
 * Find a DOM element.
 *
 * @param {Node|string} element
 * @return {Node|null}
 */
module.exports = function findDOMElement(element) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (typeof element === 'string') {
    return context.querySelector(element);
  }

  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && isDOMElement(element)) {
    return element;
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/generateFileID.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/generateFileID.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Takes a file object and turns it into fileID, by converting file.name to lowercase,
 * removing extra characters and adding type, size and lastModified
 *
 * @param {Object} file
 * @return {String} the fileID
 *
 */
module.exports = function generateFileID(file) {
  // filter is needed to not join empty values with `-`
  return ['uppy', file.name ? file.name.toLowerCase().replace(/[^A-Z0-9]/ig, '') : '', file.type, file.data.size, file.data.lastModified].filter(function (val) {
    return val;
  }).join('-');
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getBytesRemaining.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getBytesRemaining.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getBytesRemaining(fileProgress) {
  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var webkitGetAsEntryApi = __webpack_require__(/*! ./utils/webkitGetAsEntryApi */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi.js");
var fallbackApi = __webpack_require__(/*! ./utils/fallbackApi */ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js");

// Returns a promise that resolves to the array of dropped files (if a folder is dropped, and browser supports folder parsing - promise resolves to the flat array of all files in all directories).
// Each file has .relativePath prop appended to it (e.g. "/docs/Prague/ticket_from_prague_to_ufa.pdf") if browser supports it. Otherwise it's undefined.
//
// @param {DataTransfer} dataTransfer
// @returns {Promise} - Array<File>
module.exports = function getDroppedFiles(dataTransfer) {
  // Get all files from all subdirs. Works (at least) in Chrome, Mozilla, and Safari
  if (dataTransfer.items[0] && 'webkitGetAsEntry' in dataTransfer.items[0]) {
    return webkitGetAsEntryApi(dataTransfer);
    // Otherwise just return all first-order files
  } else {
    return fallbackApi(dataTransfer);
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(/*! ../../toArray */ "./node_modules/@uppy/utils/lib/toArray.js");

// .files fallback, should be implemented in any browser
module.exports = function fallbackApi(dataTransfer) {
  var files = toArray(dataTransfer.files);
  return Promise.resolve(files);
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(/*! ../../toArray */ "./node_modules/@uppy/utils/lib/toArray.js");

// Recursive function, calls the original callback() when the directory is entirely parsed.
// @param {function} callback - called with ([ all files and directories in that directoryReader ])
function readEntries(directoryReader, oldEntries, callback) {
  directoryReader.readEntries(function (entries) {
    var newEntries = [].concat(oldEntries, entries);
    // According to the FileSystem API spec, readEntries() must be called until it calls the callback with an empty array.
    if (entries.length) {
      setTimeout(function () {
        readEntries(directoryReader, newEntries, callback);
      }, 0);
      // Done iterating this particular directory
    } else {
      callback(newEntries);
    }
  },
  // Make sure we resolve on error anyway
  function () {
    return callback(oldEntries);
  });
}

// @param {function} resolve - function that will be called when :files array is appended with a file
// @param {Array<File>} files - array of files to enhance
// @param {FileSystemFileEntry} fileEntry
function addEntryToFiles(resolve, files, fileEntry) {
  // Creates a new File object which can be used to read the file.
  fileEntry.file(function (file) {
    // Preserve the relative path from the FileSystemFileEntry#fullPath, because File#webkitRelativePath is always '', at least onDrop.
    // => "/docs/Prague/ticket_from_prague_to_ufa.pdf"
    file.relativePath = fileEntry.fullPath;
    files.push(file);
    resolve();
  },
  // Make sure we resolve on error anyway
  function () {
    return resolve();
  });
}

// @param {function} resolve - function that will be called when :directoryEntry is done being recursively parsed
// @param {Array<File>} files - array of files to enhance
// @param {FileSystemDirectoryEntry} directoryEntry
function recursivelyAddFilesFromDirectory(resolve, files, directoryEntry) {
  var directoryReader = directoryEntry.createReader();
  readEntries(directoryReader, [], function (entries) {
    var promises = entries.map(function (entry) {
      return createPromiseToAddFileOrParseDirectory(files, entry);
    });
    Promise.all(promises).then(function () {
      return resolve();
    });
  });
}

// @param {Array<File>} files - array of files to enhance
// @param {(FileSystemFileEntry|FileSystemDirectoryEntry)} entry
function createPromiseToAddFileOrParseDirectory(files, entry) {
  return new Promise(function (resolve) {
    if (entry.isFile) {
      addEntryToFiles(resolve, files, entry);
    } else if (entry.isDirectory) {
      recursivelyAddFilesFromDirectory(resolve, files, entry);
    }
  });
}

module.exports = function webkitGetAsEntryApi(dataTransfer) {
  var files = [];

  var rootPromises = [];

  toArray(dataTransfer.items).forEach(function (item) {
    var entry = item.webkitGetAsEntry();
    // :entry can be null when we drop the url e.g.
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(files, entry));
    }
  });

  return Promise.all(rootPromises).then(function () {
    return files;
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileNameAndExtension.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Takes a full filename string and returns an object {name, extension}
*
* @param {string} fullFileName
* @return {object} {name, extension}
*/
module.exports = function getFileNameAndExtension(fullFileName) {
  var re = /(?:\.([^.]+))?$/;
  var fileExt = re.exec(fullFileName)[1];
  var fileName = fullFileName.replace('.' + fileExt, '');
  return {
    name: fileName,
    extension: fileExt
  };
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileType.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileType.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileNameAndExtension = __webpack_require__(/*! ./getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var mimeTypes = __webpack_require__(/*! ./mimeTypes */ "./node_modules/@uppy/utils/lib/mimeTypes.js");

module.exports = function getFileType(file) {
  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;

  if (file.isRemote) {
    // some remote providers do not support file types
    return file.type ? file.type : mimeTypes[fileExtension];
  }

  // check if mime type is set in the file object
  if (file.type) {
    return file.type;
  }

  // see if we can map extension to a mime type
  if (fileExtension && mimeTypes[fileExtension]) {
    return mimeTypes[fileExtension];
  }

  // if all fails, fall back to a generic byte stream type
  return 'application/octet-stream';
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSocketHost.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSocketHost.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSocketHost(url) {
  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  var host = regex.exec(url)[1];
  var socketProtocol = /^http:\/\//i.test(url) ? 'ws' : 'wss';

  return socketProtocol + '://' + host;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSpeed.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSpeed.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSpeed(fileProgress) {
  if (!fileProgress.bytesUploaded) return 0;

  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
  return uploadSpeed;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getTimeStamp.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getTimeStamp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a timestamp in the format of `hours:minutes:seconds`
*/
module.exports = function getTimeStamp() {
  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
  return hours + ':' + minutes + ':' + seconds;
};

/**
 * Adds zero to strings shorter than two characters
*/
function pad(str) {
  return str.length !== 2 ? 0 + str : str;
}

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isDOMElement.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isDOMElement.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Check if an object is a DOM element. Duck-typing based on `nodeType`.
 *
 * @param {*} obj
 */
module.exports = function isDOMElement(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.nodeType === Node.ELEMENT_NODE;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isObjectURL.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isObjectURL.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if a URL string is an object URL from `URL.createObjectURL`.
 *
 * @param {string} url
 * @return {boolean}
 */
module.exports = function isObjectURL(url) {
  return url.indexOf('blob:') === 0;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isPreviewSupported.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isPreviewSupported.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isPreviewSupported(fileType) {
  if (!fileType) return false;
  var fileTypeSpecific = fileType.split('/')[1];
  // list of images that browsers can preview
  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp)$/.test(fileTypeSpecific)) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isTouchDevice.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isTouchDevice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isTouchDevice() {
  return 'ontouchstart' in window || // works on most browsers
  navigator.maxTouchPoints; // works on IE10/11 and Surface
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/limitPromises.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/limitPromises.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Limit the amount of simultaneously pending Promises.
 * Returns a function that, when passed a function `fn`,
 * will make sure that at most `limit` calls to `fn` are pending.
 *
 * @param {number} limit
 * @return {function()}
 */
module.exports = function limitPromises(limit) {
  var pending = 0;
  var queue = [];
  return function (fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var call = function call() {
        pending++;
        var promise = fn.apply(undefined, args);
        promise.then(onfinish, onfinish);
        return promise;
      };

      if (pending >= limit) {
        return new Promise(function (resolve, reject) {
          queue.push(function () {
            call().then(resolve, reject);
          });
        });
      }
      return call();
    };
  };
  function onfinish() {
    pending--;
    var next = queue.shift();
    if (next) next();
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/mimeTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/mimeTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ___Why not add the mime-types package?
//    It's 19.7kB gzipped, and we only need mime types for well-known extensions (for file previews).
// ___Where to take new extensions from?
//    https://github.com/jshttp/mime-db/blob/master/db.json

module.exports = {
  'md': 'text/markdown',
  'markdown': 'text/markdown',
  'mp4': 'video/mp4',
  'mp3': 'audio/mp3',
  'svg': 'image/svg+xml',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'yaml': 'text/yaml',
  'yml': 'text/yaml',
  'csv': 'text/csv',
  'avi': 'video/x-msvideo',
  'mks': 'video/x-matroska',
  'mkv': 'video/x-matroska',
  'mov': 'video/quicktime',
  'doc': 'application/msword',
  'docm': 'application/vnd.ms-word.document.macroenabled.12',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'dot': 'application/msword',
  'dotm': 'application/vnd.ms-word.template.macroenabled.12',
  'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'xla': 'application/vnd.ms-excel',
  'xlam': 'application/vnd.ms-excel.addin.macroenabled.12',
  'xlc': 'application/vnd.ms-excel',
  'xlf': 'application/x-xliff+xml',
  'xlm': 'application/vnd.ms-excel',
  'xls': 'application/vnd.ms-excel',
  'xlsb': 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  'xlsm': 'application/vnd.ms-excel.sheet.macroenabled.12',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'xlt': 'application/vnd.ms-excel',
  'xltm': 'application/vnd.ms-excel.template.macroenabled.12',
  'xltx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'xlw': 'application/vnd.ms-excel',
  'txt': 'text/plain',
  'text': 'text/plain',
  'conf': 'text/plain',
  'log': 'text/plain',
  'pdf': 'application/pdf'
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/prettyETA.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/prettyETA.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var secondsToTime = __webpack_require__(/*! ./secondsToTime */ "./node_modules/@uppy/utils/lib/secondsToTime.js");

module.exports = function prettyETA(seconds) {
  var time = secondsToTime(seconds);

  // Only display hours and minutes if they are greater than 0 but always
  // display minutes if hours is being displayed
  // Display a leading zero if the there is a preceding unit: 1m 05s, but 5s
  var hoursStr = time.hours ? time.hours + 'h ' : '';
  var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  var minutesStr = minutesVal ? minutesVal + 'm' : '';
  var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  var secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';

  return '' + hoursStr + minutesStr + secondsStr;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/secondsToTime.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/secondsToTime.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function secondsToTime(rawSeconds) {
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);

  return { hours: hours, minutes: minutes, seconds: seconds };
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/settle.js":
/*!************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/settle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function settle(promises) {
  var resolutions = [];
  var rejections = [];
  function resolved(value) {
    resolutions.push(value);
  }
  function rejected(error) {
    rejections.push(error);
  }

  var wait = Promise.all(promises.map(function (promise) {
    return promise.then(resolved, rejected);
  }));

  return wait.then(function () {
    return {
      successful: resolutions,
      failed: rejections
    };
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/toArray.js":
/*!*************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/toArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts list into array
*/
module.exports = function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
};

/***/ }),

/***/ "./node_modules/@uppy/xhr-upload/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/xhr-upload/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var _require2 = __webpack_require__(/*! @uppy/companion-client */ "./node_modules/@uppy/companion-client/lib/index.js"),
    Provider = _require2.Provider,
    RequestClient = _require2.RequestClient,
    Socket = _require2.Socket;

var emitSocketProgress = __webpack_require__(/*! @uppy/utils/lib/emitSocketProgress */ "./node_modules/@uppy/utils/lib/emitSocketProgress.js");
var getSocketHost = __webpack_require__(/*! @uppy/utils/lib/getSocketHost */ "./node_modules/@uppy/utils/lib/getSocketHost.js");
var settle = __webpack_require__(/*! @uppy/utils/lib/settle */ "./node_modules/@uppy/utils/lib/settle.js");
var limitPromises = __webpack_require__(/*! @uppy/utils/lib/limitPromises */ "./node_modules/@uppy/utils/lib/limitPromises.js");

function buildResponseError(xhr, error) {
  // No error message
  if (!error) error = new Error('Upload error');
  // Got an error message string
  if (typeof error === 'string') error = new Error(error);
  // Got something else
  if (!(error instanceof Error)) {
    error = _extends(new Error('Upload error'), { data: error });
  }

  error.request = xhr;
  return error;
}

module.exports = function (_Plugin) {
  _inherits(XHRUpload, _Plugin);

  function XHRUpload(uppy, opts) {
    _classCallCheck(this, XHRUpload);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'uploader';
    _this.id = 'XHRUpload';
    _this.title = 'XHRUpload';

    _this.defaultLocale = {
      strings: {
        timedOut: 'Upload stalled for %{seconds} seconds, aborting.'
      }

      // Default options
    };var defaultOptions = {
      formData: true,
      fieldName: 'files[]',
      method: 'post',
      metaFields: null,
      responseUrlFieldName: 'url',
      bundle: false,
      headers: {},
      timeout: 30 * 1000,
      limit: 0,
      withCredentials: false,
      responseType: '',
      /**
       * @typedef respObj
       * @property {string} responseText
       * @property {number} status
       * @property {string} statusText
       * @property {Object.<string, string>} headers
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseData: function getResponseData(responseText, response) {
        var parsedResponse = {};
        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }

        return parsedResponse;
      },

      /**
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseError: function getResponseError(responseText, response) {
        return new Error('Upload error');
      },

      /**
       * @param {number} status the response status code
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      validateStatus: function validateStatus(status, responseText, response) {
        return status >= 200 && status < 300;
      }
    };

    // Merge default options with the ones set by user
    _this.opts = _extends({}, defaultOptions, opts);

    // i18n
    _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

    _this.handleUpload = _this.handleUpload.bind(_this);

    // Simultaneous upload limiting is shared across all uploads with this plugin.
    if (typeof _this.opts.limit === 'number' && _this.opts.limit !== 0) {
      _this.limitUploads = limitPromises(_this.opts.limit);
    } else {
      _this.limitUploads = function (fn) {
        return fn;
      };
    }

    if (_this.opts.bundle && !_this.opts.formData) {
      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }
    return _this;
  }

  XHRUpload.prototype.getOptions = function getOptions(file) {
    var overrides = this.uppy.getState().xhrUpload;
    var opts = _extends({}, this.opts, overrides || {}, file.xhrUpload || {});
    opts.headers = {};
    _extends(opts.headers, this.opts.headers);
    if (overrides) {
      _extends(opts.headers, overrides.headers);
    }
    if (file.xhrUpload) {
      _extends(opts.headers, file.xhrUpload.headers);
    }

    return opts;
  };

  // Helper to abort upload requests if there has not been any progress for `timeout` ms.
  // Create an instance using `timer = createProgressTimeout(10000, onTimeout)`
  // Call `timer.progress()` to signal that there has been progress of any kind.
  // Call `timer.done()` when the upload has completed.


  XHRUpload.prototype.createProgressTimeout = function createProgressTimeout(timeout, timeoutHandler) {
    var uppy = this.uppy;
    var self = this;
    var isDone = false;

    function onTimedOut() {
      uppy.log('[XHRUpload] timed out');
      var error = new Error(self.i18n('timedOut', { seconds: Math.ceil(timeout / 1000) }));
      timeoutHandler(error);
    }

    var aliveTimer = null;
    function progress() {
      // Some browsers fire another progress event when the upload is
      // cancelled, so we have to ignore progress after the timer was
      // told to stop.
      if (isDone) return;

      if (timeout > 0) {
        if (aliveTimer) clearTimeout(aliveTimer);
        aliveTimer = setTimeout(onTimedOut, timeout);
      }
    }

    function done() {
      uppy.log('[XHRUpload] timer done');
      if (aliveTimer) {
        clearTimeout(aliveTimer);
        aliveTimer = null;
      }
      isDone = true;
    }

    return {
      progress: progress,
      done: done
    };
  };

  XHRUpload.prototype.createFormDataUpload = function createFormDataUpload(file, opts) {
    var formPost = new FormData();

    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields
    // Send along all fields by default.
    : Object.keys(file.meta);
    metaFields.forEach(function (item) {
      formPost.append(item, file.meta[item]);
    });

    if (file.name) {
      formPost.append(opts.fieldName, file.data, file.name);
    } else {
      formPost.append(opts.fieldName, file.data);
    }

    return formPost;
  };

  XHRUpload.prototype.createBareUpload = function createBareUpload(file, opts) {
    return file.data;
  };

  XHRUpload.prototype.upload = function upload(file, current, total) {
    var _this2 = this;

    var opts = this.getOptions(file);

    this.uppy.log('uploading ' + current + ' of ' + total);
    return new Promise(function (resolve, reject) {
      var data = opts.formData ? _this2.createFormDataUpload(file, opts) : _this2.createBareUpload(file, opts);

      var timer = _this2.createProgressTimeout(opts.timeout, function (error) {
        xhr.abort();
        _this2.uppy.emit('upload-error', file, error);
        reject(error);
      });

      var xhr = new XMLHttpRequest();

      var id = cuid();

      xhr.upload.addEventListener('loadstart', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' started');
      });

      xhr.upload.addEventListener('progress', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' progress: ' + ev.loaded + ' / ' + ev.total);
        // Begin checking for timeouts when progress starts, instead of loading,
        // to avoid timing out requests on browser concurrency queue
        timer.progress();

        if (ev.lengthComputable) {
          _this2.uppy.emit('upload-progress', file, {
            uploader: _this2,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
      });

      xhr.addEventListener('load', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' finished');
        timer.done();

        if (opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = opts.getResponseData(xhr.responseText, xhr);
          var uploadURL = body[opts.responseUrlFieldName];

          var uploadResp = {
            status: ev.target.status,
            body: body,
            uploadURL: uploadURL
          };

          _this2.uppy.emit('upload-success', file, uploadResp);

          if (uploadURL) {
            _this2.uppy.log('Download ' + file.name + ' from ' + uploadURL);
          }

          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);
          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

          var response = {
            status: ev.target.status,
            body: _body
          };

          _this2.uppy.emit('upload-error', file, error, response);
          return reject(error);
        }
      });

      xhr.addEventListener('error', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' errored');
        timer.done();

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        _this2.uppy.emit('upload-error', file, error);
        return reject(error);
      });

      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      // IE10 does not allow setting `withCredentials` and `responseType`
      // before `open()` is called.
      xhr.withCredentials = opts.withCredentials;
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      Object.keys(opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, opts.headers[header]);
      });

      xhr.send(data);

      _this2.uppy.on('file-removed', function (removedFile) {
        if (removedFile.id === file.id) {
          timer.done();
          xhr.abort();
          reject(new Error('File removed'));
        }
      });

      _this2.uppy.on('cancel-all', function () {
        timer.done();
        xhr.abort();
        reject(new Error('Upload cancelled'));
      });
    });
  };

  XHRUpload.prototype.uploadRemote = function uploadRemote(file, current, total) {
    var _this3 = this;

    var opts = this.getOptions(file);
    return new Promise(function (resolve, reject) {
      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields
      // Send along all fields by default.
      : Object.keys(file.meta);

      metaFields.forEach(function (name) {
        fields[name] = file.meta[name];
      });

      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: fields,
        headers: opts.headers
      })).then(function (res) {
        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({ target: host + '/api/' + token });

        socket.on('progress', function (progressData) {
          return emitSocketProgress(_this3, progressData, file);
        });

        socket.on('success', function (data) {
          var body = opts.getResponseData(data.response.responseText, data.response);
          var uploadURL = body[opts.responseUrlFieldName];

          var uploadResp = {
            status: data.response.status,
            body: body,
            uploadURL: uploadURL
          };

          _this3.uppy.emit('upload-success', file, uploadResp);
          socket.close();
          return resolve();
        });

        socket.on('error', function (errData) {
          var resp = errData.response;
          var error = resp ? opts.getResponseError(resp.responseText, resp) : _extends(new Error(errData.error.message), { cause: errData.error });
          _this3.uppy.emit('upload-error', file, error);
          reject(error);
        });
      });
    });
  };

  XHRUpload.prototype.uploadBundle = function uploadBundle(files) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      var endpoint = _this4.opts.endpoint;
      var method = _this4.opts.method;

      var formData = new FormData();
      files.forEach(function (file, i) {
        var opts = _this4.getOptions(file);

        if (file.name) {
          formData.append(opts.fieldName, file.data, file.name);
        } else {
          formData.append(opts.fieldName, file.data);
        }
      });

      var xhr = new XMLHttpRequest();

      var timer = _this4.createProgressTimeout(_this4.opts.timeout, function (error) {
        xhr.abort();
        emitError(error);
        reject(error);
      });

      var emitError = function emitError(error) {
        files.forEach(function (file) {
          _this4.uppy.emit('upload-error', file, error);
        });
      };

      xhr.upload.addEventListener('loadstart', function (ev) {
        _this4.uppy.log('[XHRUpload] started uploading bundle');
        timer.progress();
      });

      xhr.upload.addEventListener('progress', function (ev) {
        timer.progress();

        if (!ev.lengthComputable) return;

        files.forEach(function (file) {
          _this4.uppy.emit('upload-progress', file, {
            uploader: _this4,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });
        });
      });

      xhr.addEventListener('load', function (ev) {
        timer.done();

        if (_this4.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = _this4.opts.getResponseData(xhr.responseText, xhr);
          var uploadResp = {
            status: ev.target.status,
            body: body
          };
          files.forEach(function (file) {
            _this4.uppy.emit('upload-success', file, uploadResp);
          });
          return resolve();
        }

        var error = _this4.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
        return reject(error);
      });

      xhr.addEventListener('error', function (ev) {
        timer.done();

        var error = _this4.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
        return reject(error);
      });

      _this4.uppy.on('cancel-all', function () {
        timer.done();
        xhr.abort();
      });

      xhr.open(method.toUpperCase(), endpoint, true);
      // IE10 does not allow setting `withCredentials` and `responseType`
      // before `open()` is called.
      xhr.withCredentials = _this4.opts.withCredentials;
      if (_this4.opts.responseType !== '') {
        xhr.responseType = _this4.opts.responseType;
      }

      Object.keys(_this4.opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, _this4.opts.headers[header]);
      });

      xhr.send(formData);

      files.forEach(function (file) {
        _this4.uppy.emit('upload-started', file);
      });
    });
  };

  XHRUpload.prototype.uploadFiles = function uploadFiles(files) {
    var _this5 = this;

    var actions = files.map(function (file, i) {
      var current = parseInt(i, 10) + 1;
      var total = files.length;

      if (file.error) {
        return function () {
          return Promise.reject(new Error(file.error));
        };
      } else if (file.isRemote) {
        // We emit upload-started here, so that it's also emitted for files
        // that have to wait due to the `limit` option.
        _this5.uppy.emit('upload-started', file);
        return _this5.uploadRemote.bind(_this5, file, current, total);
      } else {
        _this5.uppy.emit('upload-started', file);
        return _this5.upload.bind(_this5, file, current, total);
      }
    });

    var promises = actions.map(function (action) {
      var limitedAction = _this5.limitUploads(action);
      return limitedAction();
    });

    return settle(promises);
  };

  XHRUpload.prototype.handleUpload = function handleUpload(fileIDs) {
    var _this6 = this;

    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
      return Promise.resolve();
    }

    this.uppy.log('[XHRUpload] Uploading...');
    var files = fileIDs.map(function (fileID) {
      return _this6.uppy.getFile(fileID);
    });

    if (this.opts.bundle) {
      return this.uploadBundle(files);
    }

    return this.uploadFiles(files).then(function () {
      return null;
    });
  };

  XHRUpload.prototype.install = function install() {
    if (this.opts.bundle) {
      var _uppy$getState = this.uppy.getState(),
          capabilities = _uppy$getState.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: false
        })
      });
    }

    this.uppy.addUploader(this.handleUpload);
  };

  XHRUpload.prototype.uninstall = function uninstall() {
    if (this.opts.bundle) {
      var _uppy$getState2 = this.uppy.getState(),
          capabilities = _uppy$getState2.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: true
        })
      });
    }

    this.uppy.removeUploader(this.handleUpload);
  };

  return XHRUpload;
}(Plugin);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_FolderFx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/FolderFx */ "./resources/js/Classes/FolderFx.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FolderCard",
  props: ['folder'],
  mounted: function mounted() {
    new _Classes_FolderFx__WEBPACK_IMPORTED_MODULE_0__["default"](this.$refs.folder);
  },
  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageCard",
  props: ['media'],
  methods: {
    getType: function getType() {
      if (this.media.mime_type.startsWith('image/')) {
        return 'image';
      } else {
        return 'other';
      }
    }
  },
  computed: {
    isImage: function isImage() {
      return this.getType();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCard */ "./resources/js/components/ImageCard.vue");
/* harmony import */ var _FolderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolderCard */ "./resources/js/components/FolderCard.vue");
/* harmony import */ var _uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uppy/core/dist/style.css */ "./node_modules/@uppy/core/dist/style.css");
/* harmony import */ var _uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uppy/dashboard/dist/style.css */ "./node_modules/@uppy/dashboard/dist/style.css");
/* harmony import */ var _uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.js */ "./resources/js/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Uppy = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js");

var Dashboard = __webpack_require__(/*! @uppy/dashboard */ "./node_modules/@uppy/dashboard/lib/index.js");

var XhrUpload = __webpack_require__(/*! @uppy/xhr-upload */ "./node_modules/@uppy/xhr-upload/lib/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['folder'],
  mounted: function mounted() {
    var _this = this;

    this.uppy = Uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxFileSize: 1000000,
        minNumberOfFiles: 1,
        maxNumberOfFiles: 10,
        allowedFileTypes: ['image/*', 'video/*']
      },
      meta: {
        folderId: this.folderId
      }
    }).use(Dashboard, {
      trigger: '#UppyModalOpenerBtn',
      inline: false,
      showProgressDetails: true,
      closeAfterFinish: true,
      note: 'Files, 1–10 files, up to 1 MB',
      height: 470,
      metaFields: [{
        id: 'name',
        name: 'Name',
        placeholder: 'file name'
      }, {
        id: 'caption',
        name: 'Caption',
        placeholder: 'describe what the image is about'
      }],
      browserBackButtonClose: true
    }).use(XhrUpload, {
      endpoint: '/vendor/nova-medias-manager/upload',
      formData: true,
      fieldToto: 'toto'
    });
    this.uppy.on('complete', function (result) {
      _this.uppy.reset();

      _this.$emit('uploadComplete');
    });
  },
  components: {
    FolderCard: _FolderCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    ImageCard: _ImageCard__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      search: null,
      uppy: null
    };
  },
  methods: {
    searchItems: _.debounce(function (e) {
      this.search = e.target.value; //this.getSearchData();
    }, 300),
    openFormFolder: function openFormFolder() {
      var _this2 = this;

      this.$swal({
        title: 'Folder name',
        input: 'text',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm(name) {
          return Object(_api_js__WEBPACK_IMPORTED_MODULE_4__["storeFolder"])({
            name: name,
            folder: _this2.folder.id
          }).then(function (response) {
            return response;
          })["catch"](function (error) {
            _this2.$swal.showValidationMessage("Request failed: ".concat(error));
          });
        },
        allowOutsideClick: function allowOutsideClick() {
          return !Swal.isLoading();
        }
      }).then(function (response) {
        _this2.$emit('newFolder');
      });
    }
  },
  computed: {
    folderName: function folderName() {
      return this.folder ? this.folder.name : null;
    },
    folderPathArray: function folderPathArray() {
      return this.folder ? this.folder.path_array : [];
    },
    folderMedias: function folderMedias() {
      return this.folder ? this.folder.medias : [];
    },
    folderId: function folderId() {
      return this.folder ? this.folder : null;
    },
    folderFolders: function folderFolders() {
      return this.folder ? this.folder.folders : [];
    }
  },
  watch: {
    'folder.id': function folderId(id) {
      this.uppy.setMeta({
        folderId: id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediasManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediasManager */ "./resources/js/components/MediasManager.vue");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ "./resources/js/api.js");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MediasManager: _MediasManager__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.initRoot();
  },
  data: function data() {
    return {
      folder: null
    };
  },
  methods: {
    initRoot: function initRoot() {
      var _this = this;

      Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["getRoot"])().then(function (response) {
        _this.folder = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    reloadInfoFolder: function reloadInfoFolder() {
      var _this2 = this;

      Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["getFolder"])(this.folder.id).then(function (response) {
        _this2.folder = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/core/dist/style.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@uppy/core/dist/style.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n* General Uppy styles that apply to everything inside the .Uppy container\n*/\n.uppy-Root {\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: left;\n  position: relative;\n  color: #333; }\n\n.uppy-Root *, .uppy-Root *:before, .uppy-Root *:after {\n  box-sizing: inherit; }\n\n.uppy-Root [hidden] {\n  display: none; }\n\n.UppyIcon {\n  max-width: 100%;\n  max-height: 100%;\n  fill: currentColor;\n  /* no !important */\n  display: inline-block;\n  overflow: hidden; }\n\n.UppyIcon--svg-baseline {\n  bottom: -0.125em;\n  position: relative; }\n\n.uppy-u-reset {\n  -webkit-appearance: none;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  background: none;\n  border: medium none currentColor;\n  border-collapse: separate;\n  -o-border-image: none;\n     border-image: none;\n  border-radius: 0;\n  border-spacing: 0;\n  box-shadow: none;\n  clear: none;\n  cursor: auto;\n  display: inline;\n  empty-cells: show;\n  float: none;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  -webkit-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  left: auto;\n  letter-spacing: normal;\n  list-style: none;\n  margin: 0;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  opacity: 1;\n  outline: medium none invert;\n  overflow: visible;\n  overflow-x: visible;\n  overflow-y: visible;\n  text-align: left;\n  text-decoration: none;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  top: auto;\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transform-origin: 50% 50% 0;\n          transform-origin: 50% 50% 0;\n  -webkit-transform-style: flat;\n          transform-style: flat;\n  transition: none 0s ease 0s;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  visibility: visible;\n  white-space: normal;\n  z-index: auto; }\n\n.uppy-c-textInput {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1.5;\n  padding: 6px 8px;\n  background-color: #fff; }\n\n.uppy-size--md .uppy-c-textInput {\n  padding: 8px 10px; }\n\n.uppy-c-textInput:focus {\n  border-color: rgba(34, 117, 215, 0.6);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.15); }\n\n.uppy-c-btn {\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  transition: background-color 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.uppy-c-btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.uppy-c-btn::-moz-focus-inner {\n  border: 0; }\n\n.uppy-c-btn-primary {\n  font-size: 14px;\n  padding: 10px 18px;\n  border-radius: 4px;\n  background-color: #2275d7;\n  color: #fff; }\n\n.uppy-size--md .uppy-c-btn-primary {\n  padding: 13px 22px; }\n\n.uppy-c-btn-primary:hover {\n  background-color: #1b5dab; }\n\n.uppy-c-btn-primary:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4); }\n\n.uppy-c-btn-link {\n  font-size: 14px;\n  line-height: 1;\n  padding: 10px 15px;\n  border-radius: 4px;\n  background-color: transparent;\n  color: #525252; }\n\n.uppy-size--md .uppy-c-btn-link {\n  padding: 13px 18px; }\n\n.uppy-c-btn-link:hover {\n  color: #333; }\n\n.uppy-c-btn-link:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.25); }\n\n.uppy-c-btn--small {\n  font-size: 0.9em;\n  padding: 7px 16px;\n  border-radius: 2px; }\n\n.uppy-size--md .uppy-c-btn--small {\n  padding: 8px 10px;\n  border-radius: 2px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@uppy/dashboard/dist/style.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@uppy/dashboard/dist/style.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uppy-Informer {\n  position: absolute;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  opacity: 1;\n  -webkit-transform: none;\n          transform: none;\n  transition: all 250ms ease-in;\n  z-index: 1005; }\n\n.uppy-Informer[aria-hidden=true] {\n  opacity: 0;\n  -webkit-transform: translateY(350%);\n          transform: translateY(350%);\n  transition: all 300ms ease-in;\n  z-index: -1000; }\n\n.uppy-Informer p {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  line-height: 1.4;\n  font-weight: 400;\n  padding: 6px 15px;\n  background-color: #757575;\n  /* no !important */\n  color: #fff;\n  border-radius: 18px;\n  max-width: 90%; }\n  .uppy-size--md .uppy-Informer p {\n    font-size: 14px;\n    line-height: 1.3;\n    max-width: 500px;\n    padding: 10px 20px; }\n\n.uppy-Informer span {\n  line-height: 12px;\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #525252;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  top: -1px;\n  left: 3px;\n  font-size: 10px;\n  margin-left: -1px; }\n\n.uppy-Informer span:hover {\n  cursor: help; }\n\n.uppy-Informer span:after {\n  line-height: 1.3;\n  word-wrap: break-word; }\n\n/* -------------------------------------------------------------------\n  Microtip\n\n  Modern, lightweight css-only tooltips\n  Just 1kb minified and gzipped\n\n  @author Ghosh\n  @package Microtip\n\n----------------------------------------------------------------------\n  1. Base Styles\n  2. Direction Modifiers\n  3. Position Modifiers\n--------------------------------------------------------------------*/\n/* ------------------------------------------------\n  [1] Base Styles\n-------------------------------------------------*/\n.uppy-Root [aria-label][role~=\"tooltip\"] {\n  /* no important */\n  position: relative; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  will-change: transform;\n  opacity: 0;\n  pointer-events: none;\n  transition: all var(--microtip-transition-duration, 0.18s) var(--microtip-transition-easing, ease-in-out) var(--microtip-transition-delay, 0s);\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 10;\n  -webkit-transform-origin: top;\n          transform-origin: top; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::before {\n  /* no important */\n  background-size: 100% auto !important;\n  content: \"\"; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]::after {\n  /* no important */\n  background: rgba(17, 17, 17, 0.9);\n  border-radius: 4px;\n  color: #ffffff;\n  content: attr(aria-label);\n  font-size: var(--microtip-font-size, 13px);\n  font-weight: var(--microtip-font-weight, normal);\n  text-transform: var(--microtip-text-transform, none);\n  padding: .5em 1em;\n  white-space: nowrap;\n  box-sizing: content-box; }\n\n.uppy-Root [aria-label][role~=\"tooltip\"]:hover::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]:hover::after,\n.uppy-Root [aria-label][role~=\"tooltip\"]:focus::before,\n.uppy-Root [aria-label][role~=\"tooltip\"]:focus::after {\n  /* no important */\n  opacity: 1;\n  pointer-events: auto; }\n\n/* ------------------------------------------------\n  [2] Position Modifiers\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 6px;\n  width: 18px;\n  margin-bottom: 5px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\n  /* no important */\n  margin-bottom: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\n  /* no important */\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n  bottom: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]:hover::before {\n  /* no important */\n  -webkit-transform: translate3d(-50%, -5px, 0);\n          transform: translate3d(-50%, -5px, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n  bottom: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(-50%, -5px, 0);\n          transform: translate3d(-50%, -5px, 0); }\n\n/* ------------------------------------------------\n  [2.1] Top Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-left\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(-100% + 16px), 0, 0);\n          transform: translate3d(calc(-100% + 16px), 0, 0);\n  bottom: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-left\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(-100% + 16px), -5px, 0);\n          transform: translate3d(calc(-100% + 16px), -5px, 0); }\n\n/* ------------------------------------------------\n  [2.2] Top Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-right\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(0% + -16px), 0, 0);\n          transform: translate3d(calc(0% + -16px), 0, 0);\n  bottom: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"top-right\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(0% + -16px), -5px, 0);\n          transform: translate3d(calc(0% + -16px), -5px, 0); }\n\n/* ------------------------------------------------\n  [2.3] Bottom\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 6px;\n  width: 18px;\n  margin-top: 5px;\n  margin-bottom: 0; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\n  /* no important */\n  margin-top: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\n  /* no important */\n  -webkit-transform: translate3d(-50%, -10px, 0);\n          transform: translate3d(-50%, -10px, 0);\n  bottom: auto;\n  left: 50%;\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]:hover::before {\n  /* no important */\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(-50%, -10px, 0);\n          transform: translate3d(-50%, -10px, 0);\n  top: 100%;\n  left: 50%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0); }\n\n/* ------------------------------------------------\n  [2.4] Bottom Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(-100% + 16px), -10px, 0);\n          transform: translate3d(calc(-100% + 16px), -10px, 0);\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(-100% + 16px), 0, 0);\n          transform: translate3d(calc(-100% + 16px), 0, 0); }\n\n/* ------------------------------------------------\n  [2.5] Bottom Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(0% + -16px), -10px, 0);\n          transform: translate3d(calc(0% + -16px), -10px, 0);\n  top: 100%; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(calc(0% + -16px), 0, 0);\n          transform: translate3d(calc(0% + -16px), 0, 0); }\n\n/* ------------------------------------------------\n  [2.6] Left\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\n  /* no important */\n  bottom: auto;\n  left: auto;\n  right: 100%;\n  top: 50%;\n  -webkit-transform: translate3d(10px, -50%, 0);\n          transform: translate3d(10px, -50%, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 18px;\n  width: 6px;\n  margin-right: 5px;\n  margin-bottom: 0; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\n  /* no important */\n  margin-right: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0); }\n\n/* ------------------------------------------------\n  [2.7] Right\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\n  /* no important */\n  bottom: auto;\n  left: 100%;\n  top: 50%;\n  -webkit-transform: translate3d(-10px, -50%, 0);\n          transform: translate3d(-10px, -50%, 0); }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::before {\n  /* no important */\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\n  height: 18px;\n  width: 6px;\n  margin-bottom: 0;\n  margin-left: 5px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\n  /* no important */\n  margin-left: 11px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::before,\n.uppy-Root [role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::after {\n  /* no important */\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0); }\n\n/* ------------------------------------------------\n  [3] Size\n-------------------------------------------------*/\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"small\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 80px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"medium\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 150px; }\n\n.uppy-Root [role~=\"tooltip\"][data-microtip-size=\"large\"]::after {\n  /* no important */\n  white-space: initial;\n  width: 260px; }\n\n.uppy-StatusBar {\n  display: flex;\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #fff;\n  background-color: #fff;\n  z-index: 1001;\n  transition: height .2s; }\n\n.uppy-size--md .uppy-StatusBar {\n  height: 46px; }\n\n.uppy-StatusBar:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #eaeaea; }\n\n.uppy-StatusBar[aria-hidden=true] {\n  overflow-y: hidden;\n  height: 0; }\n\n.uppy-StatusBar.is-complete .uppy-StatusBar-progress {\n  background-color: #1bb240; }\n\n.uppy-StatusBar.is-error .uppy-StatusBar-progress {\n  background-color: #e32437; }\n\n.uppy-StatusBar.is-complete .uppy-StatusBar-statusIndicator {\n  color: #1bb240; }\n\n.uppy-StatusBar.is-error .uppy-StatusBar-statusIndicator {\n  color: #e32437; }\n\n.uppy-StatusBar:not([aria-hidden=true]).is-waiting {\n  background-color: #fff;\n  height: 65px;\n  border-top: 1px solid #eaeaea; }\n\n.uppy-StatusBar-progress {\n  background-color: #2275d7;\n  height: 2px;\n  position: absolute;\n  z-index: 1001;\n  transition: background-color, width .3s ease-out; }\n  .uppy-StatusBar-progress.is-indeterminate {\n    background-size: 64px 64px;\n    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent);\n    -webkit-animation: uppy-StatusBar-ProgressStripes 1s linear infinite;\n            animation: uppy-StatusBar-ProgressStripes 1s linear infinite; }\n\n@-webkit-keyframes uppy-StatusBar-ProgressStripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 64px 0; } }\n\n@keyframes uppy-StatusBar-ProgressStripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 64px 0; } }\n\n.uppy-StatusBar.is-preprocessing .uppy-StatusBar-progress,\n.uppy-StatusBar.is-postprocessing .uppy-StatusBar-progress {\n  background-color: #f6a623; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-progress {\n  display: none; }\n\n.uppy-StatusBar-content {\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1002;\n  padding-left: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #333;\n  height: 100%; }\n  .uppy-size--md .uppy-StatusBar-content {\n    padding-left: 15px; }\n\n.uppy-StatusBar-status {\n  line-height: 1.4;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 170px;\n  overflow-x: hidden;\n  padding-right: 0.3em; }\n  .uppy-size--md .uppy-StatusBar-status {\n    max-width: 400px; }\n\n.uppy-StatusBar-statusPrimary {\n  font-weight: 500; }\n\n.uppy-StatusBar-statusSecondary {\n  margin-top: 1px;\n  font-size: 11px;\n  line-height: 1.2;\n  display: inline-block;\n  color: #757575;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden; }\n\n.uppy-StatusBar-statusSecondaryHint {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n  line-height: 1; }\n  .uppy-size--md .uppy-StatusBar-statusSecondaryHint {\n    margin-right: 8px; }\n\n.uppy-StatusBar-statusIndicator {\n  position: relative;\n  top: 1px;\n  color: #525252;\n  margin-right: 7px; }\n  .uppy-StatusBar-statusIndicator svg {\n    vertical-align: text-bottom; }\n\n.uppy-StatusBar-actions {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 10px;\n  z-index: 1004; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actions {\n  width: 100%;\n  position: static;\n  padding: 0 15px;\n  background-color: #fafafa; }\n\n.uppy-StatusBar-actionCircleBtn {\n  line-height: 1;\n  cursor: pointer;\n  padding: 3px;\n  opacity: 0.9; }\n  .uppy-StatusBar-actionCircleBtn:hover {\n    opacity: 1; }\n\n.uppy-StatusBar-actionCircleBtn svg {\n  vertical-align: bottom; }\n\n.uppy-StatusBar-actionBtn {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 10px;\n  line-height: inherit;\n  color: #2275d7; }\n  .uppy-size--md .uppy-StatusBar-actionBtn {\n    font-size: 11px; }\n\n.uppy-StatusBar-actionBtn--retry {\n  height: 16px;\n  border-radius: 8px;\n  margin-right: 6px;\n  background-color: #ff4b23;\n  line-height: 1;\n  color: #fff;\n  padding: 1px 6px 3px 18px;\n  position: relative; }\n  .uppy-StatusBar-actionBtn--retry:hover {\n    background-color: #f92d00; }\n  .uppy-StatusBar-actionBtn--retry svg {\n    position: absolute;\n    top: 3px;\n    left: 6px; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {\n  font-size: 14px;\n  width: 100%;\n  padding: 15px 10px;\n  color: #fff;\n  background-color: #1bb240;\n  line-height: 1; }\n\n.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover {\n  background-color: #148630; }\n\n.uppy-size--md .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {\n  padding: 13px 22px;\n  width: auto; }\n\n.uppy-StatusBar:not(.is-waiting) .uppy-StatusBar-actionBtn--upload {\n  background-color: transparent;\n  color: #2275d7; }\n\n.uppy-StatusBar-details {\n  line-height: 12px;\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #fff;\n  background-color: #939393;\n  border-radius: 50%;\n  position: relative;\n  top: 0;\n  left: 2px;\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n  cursor: help; }\n\n.uppy-StatusBar-details:after {\n  line-height: 1.3;\n  word-wrap: break-word; }\n\n.uppy-StatusBar-spinner {\n  -webkit-animation-name: uppy-StatusBar-spinnerAnimation;\n          animation-name: uppy-StatusBar-spinnerAnimation;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  margin-right: 10px;\n  fill: #2275d7; }\n\n.uppy-StatusBar.is-preprocessing .uppy-StatusBar-spinner,\n.uppy-StatusBar.is-postprocessing .uppy-StatusBar-spinner {\n  fill: #f6a623; }\n\n@-webkit-keyframes uppy-StatusBar-spinnerAnimation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes uppy-StatusBar-spinnerAnimation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.uppy-DashboardContent-panelBody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1; }\n\n.uppy-Provider-auth,\n.uppy-Provider-error,\n.uppy-Provider-loading,\n.uppy-Provider-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  flex: 1;\n  color: #939393; }\n\n.uppy-Provider-empty {\n  color: #939393; }\n\n.uppy-Provider-authIcon svg {\n  width: 100px;\n  height: 75px;\n  margin-bottom: 15px; }\n\n.uppy-Provider-authTitle {\n  font-size: 17px;\n  line-height: 1.4;\n  font-weight: 400;\n  margin-bottom: 30px;\n  padding: 0 15px;\n  max-width: 500px;\n  text-align: center;\n  color: #757575; }\n  .uppy-size--md .uppy-Provider-authTitle {\n    font-size: 20px; }\n\n.uppy-Provider-breadcrumbs {\n  flex: 1;\n  color: #525252;\n  font-size: 12px;\n  margin-bottom: 10px;\n  text-align: left; }\n  .uppy-size--md .uppy-Provider-breadcrumbs {\n    margin-bottom: 0; }\n\n.uppy-Provider-breadcrumbsIcon {\n  display: inline-block;\n  color: #525252;\n  vertical-align: bottom;\n  margin-right: 8px;\n  line-height: 1; }\n\n.uppy-Provider-breadcrumbsIcon svg {\n  width: 13px;\n  height: 13px;\n  fill: #525252; }\n\n.uppy-Provider-breadcrumbs button {\n  display: inline-block;\n  line-height: inherit; }\n\n.uppy-Provider-breadcrumbs button:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.uppy-ProviderBrowser {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  font-size: 14px;\n  font-weight: 400;\n  height: 100%; }\n\n.uppy-ProviderBrowser-user {\n  margin: 0 8px 0 0;\n  font-weight: 500;\n  color: #333; }\n\n.uppy-ProviderBrowser-user:after {\n  content: '\\B7';\n  position: relative;\n  left: 4px;\n  color: #939393;\n  font-weight: normal; }\n\n.uppy-ProviderBrowser-header {\n  z-index: 1001;\n  border-bottom: 1px solid #eaeaea;\n  position: relative; }\n\n.uppy-ProviderBrowser-headerBar {\n  padding: 12px 15px;\n  background-color: #fafafa;\n  z-index: 1001;\n  color: #757575;\n  line-height: 1.4;\n  font-size: 12px; }\n  .uppy-size--md .uppy-ProviderBrowser-headerBar {\n    display: flex;\n    align-items: center;\n    padding: 12px 15px; }\n\n.uppy-ProviderBrowser-headerBar--simple {\n  text-align: center;\n  display: block;\n  justify-content: center; }\n\n.uppy-ProviderBrowser-headerBar--simple .uppy-Provider-breadcrumbsWrap {\n  flex: none;\n  display: inline-block;\n  vertical-align: middle; }\n\n.uppy-ProviderBrowser-search {\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n  height: 30px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center; }\n\n.uppy-ProviderBrowser-searchIcon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: 16px;\n  z-index: 1002;\n  color: #bbb; }\n\n.uppy-ProviderBrowser-searchInput {\n  width: 100%;\n  height: 30px;\n  background-color: transparent;\n  outline: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 12px;\n  line-height: 1.4;\n  border: 0;\n  margin: 0 8px;\n  padding-left: 27px;\n  z-index: 1001;\n  border-radius: 4px; }\n\n.uppy-ProviderBrowser-searchInput:focus {\n  outline: 0;\n  background-color: #f4f4f4; }\n\n.uppy-ProviderBrowser-searchClose {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  padding: 6px;\n  right: 12px;\n  top: 4px;\n  z-index: 1002;\n  color: #939393;\n  cursor: pointer; }\n  .uppy-ProviderBrowser-searchClose:hover {\n    color: #757575; }\n\n.uppy-ProviderBrowser-searchClose svg {\n  vertical-align: text-top; }\n\n.uppy-ProviderBrowser-searchInput::-ms-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::-webkit-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::-moz-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput:-ms-input-placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-searchInput::placeholder {\n  color: #939393;\n  opacity: 1; }\n\n.uppy-ProviderBrowser-userLogout {\n  cursor: pointer;\n  line-height: inherit;\n  color: #2275d7; }\n  .uppy-ProviderBrowser-userLogout:hover {\n    text-decoration: underline; }\n\n.uppy-ProviderBrowser-body {\n  flex: 1;\n  position: relative; }\n\n.uppy-ProviderBrowser-list {\n  flex: 1;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-spacing: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.uppy-ProviderBrowserItem-inner {\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 13px; }\n\n.uppy-ProviderBrowser-viewType--list {\n  background-color: #fff; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem {\n    display: flex;\n    padding: 7px 15px;\n    margin: 0; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox {\n    vertical-align: middle; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox label:before {\n    border-color: #cfcfcf; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox input:checked + label:before {\n    border-color: #2275d7; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    text-align: left;\n    line-height: 1.4; }\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img,\n  .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg {\n    vertical-align: middle;\n    margin-right: 8px;\n    max-width: 20px;\n    max-height: 20px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowser-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 6px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowser-list:after {\n  content: '';\n  flex: auto; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem {\n  display: inline-block;\n  width: 50%;\n  position: relative;\n  margin: 0; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem:before {\n  content: '';\n  padding-top: 100%;\n  display: block; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner {\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  text-align: center; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.9); }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem img,\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem svg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--selected img,\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--selected svg {\n  opacity: 0.85; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner {\n  background-color: rgba(147, 147, 147, 0.3); }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--noPreview svg {\n  fill: rgba(0, 0, 0, 0.7);\n  width: 30%;\n  height: 30%; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  top: 16px;\n  right: 16px;\n  display: block;\n  margin-right: 0;\n  z-index: 1002; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox label:before {\n  background-color: #2275d7;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  top: 0; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox label:after {\n  width: 12px;\n  height: 7px;\n  left: 7px;\n  top: 8px; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox input + label {\n  opacity: 0; }\n\n.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox input:checked + label {\n  opacity: 1; }\n\n.uppy-size--md .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem {\n  width: 33.3333%; }\n\n.uppy-size--lg .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem {\n  width: 25%; }\n\n.uppy-ProviderBrowserItem-checkbox input {\n  opacity: 0; }\n\n.uppy-ProviderBrowserItem-checkbox {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px; }\n\n.uppy-ProviderBrowserItem-checkbox label {\n  display: block; }\n\n.uppy-ProviderBrowserItem-checkbox label::before,\n.uppy-ProviderBrowserItem-checkbox label::after {\n  position: absolute;\n  cursor: pointer; }\n\n.uppy-ProviderBrowserItem-checkbox label:before {\n  content: \"\";\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  top: 2px;\n  border: 1px solid #2275d7;\n  background-color: #fff;\n  border-radius: 3px; }\n\n.uppy-ProviderBrowserItem-checkbox label:after {\n  content: '';\n  display: inline-block;\n  height: 5px;\n  width: 9px;\n  left: 4px;\n  top: 7px;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.uppy-ProviderBrowserItem-checkbox input + label::after {\n  content: none; }\n\n.uppy-ProviderBrowserItem-checkbox input:checked + label::after {\n  content: ''; }\n\n.uppy-ProviderBrowserItem-checkbox input:checked + label::before {\n  background-color: #2275d7; }\n\n.uppy-ProviderBrowserItem-checkbox input:focus + label::before {\n  outline: #3b99fc auto 5px; }\n\n.uppy-ProviderBrowser-footer {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  height: 65px;\n  border-top: 1px solid #eaeaea;\n  padding: 0 15px; }\n  .uppy-ProviderBrowser-footer button {\n    margin-right: 8px; }\n\n.uppy-transition-slideDownUp-enter {\n  opacity: 0.01;\n  -webkit-transform: translate3d(0, -105%, 0);\n          transform: translate3d(0, -105%, 0);\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out; }\n\n.uppy-transition-slideDownUp-enter.uppy-transition-slideDownUp-enter-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.uppy-transition-slideDownUp-leave {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out; }\n\n.uppy-transition-slideDownUp-leave.uppy-transition-slideDownUp-leave-active {\n  opacity: 0.01;\n  -webkit-transform: translate3d(0, -105%, 0);\n          transform: translate3d(0, -105%, 0); }\n\n.uppy-Dashboard--modal {\n  z-index: 1001; }\n\n.uppy-Dashboard--modal[aria-hidden=true] {\n  display: none; }\n\n@-webkit-keyframes uppy-Dashboard-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes uppy-Dashboard-slideDownAndFadeIn {\n  from {\n    -webkit-transform: translate3d(-50%, -70%, 0);\n            transform: translate3d(-50%, -70%, 0);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-slideDownAndFadeIn {\n  from {\n    -webkit-transform: translate3d(-50%, -70%, 0);\n            transform: translate3d(-50%, -70%, 0);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-slideDownAndFadeIn--small {\n  from {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@keyframes uppy-Dashboard-slideDownAndFadeIn--small {\n  from {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes uppy-Dashboard-slideUpFadeOut {\n  from {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(-50%, -70%, 0);\n            transform: translate3d(-50%, -70%, 0);\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-slideUpFadeOut {\n  from {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(-50%, -70%, 0);\n            transform: translate3d(-50%, -70%, 0);\n    opacity: 0; } }\n\n@-webkit-keyframes uppy-Dashboard-slideUpFadeOut--small {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0; } }\n\n@keyframes uppy-Dashboard-slideUpFadeOut--small {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0; } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-inner {\n  -webkit-animation: uppy-Dashboard-slideDownAndFadeIn--small 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-slideDownAndFadeIn--small 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-inner {\n      -webkit-animation: uppy-Dashboard-slideDownAndFadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n              animation: uppy-Dashboard-slideDownAndFadeIn 0.3s cubic-bezier(0, 0, 0.2, 1); } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose > .uppy-Dashboard-overlay {\n  -webkit-animation: uppy-Dashboard-fadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-fadeIn 0.3s cubic-bezier(0, 0, 0.2, 1); }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-inner {\n  -webkit-animation: uppy-Dashboard-slideUpFadeOut--small 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-slideUpFadeOut--small 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-inner {\n      -webkit-animation: uppy-Dashboard-slideUpFadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n              animation: uppy-Dashboard-slideUpFadeOut 0.3s cubic-bezier(0, 0, 0.2, 1); } }\n\n.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing > .uppy-Dashboard-overlay {\n  -webkit-animation: uppy-Dashboard-fadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n          animation: uppy-Dashboard-fadeOut 0.3s cubic-bezier(0, 0, 0.2, 1); }\n\n.uppy-Dashboard-isFixed {\n  overflow: hidden;\n  height: 100vh; }\n\n.uppy-Dashboard--modal .uppy-Dashboard-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1001; }\n\n.uppy-Dashboard-inner {\n  position: relative;\n  background-color: #fafafa;\n  max-width: 100%;\n  /* no !important */\n  max-height: 100%;\n  /* no !important */\n  min-height: 450px;\n  outline: none;\n  border: 1px solid #eaeaea;\n  border-radius: 5px; }\n  .uppy-size--md .uppy-Dashboard-inner {\n    min-height: auto; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard-inner {\n      width: 750px;\n      /* no !important */\n      height: 550px;\n      /* no !important */ } }\n  .uppy-Dashboard--modal .uppy-Dashboard-inner {\n    z-index: 1002; }\n\n.uppy-Dashboard-innerWrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: 5px;\n  opacity: 0; }\n\n.uppy-Dashboard--isInnerWrapVisible .uppy-Dashboard-innerWrap {\n  opacity: 1; }\n\n.uppy-Dashboard--modal .uppy-Dashboard-inner {\n  position: fixed;\n  top: 35px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border: none; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard--modal .uppy-Dashboard-inner {\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      box-shadow: 0 5px 15px 4px rgba(0, 0, 0, 0.15); } }\n\n.uppy-Dashboard-close {\n  display: block;\n  position: absolute;\n  top: -33px;\n  right: -2px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 27px;\n  z-index: 1005; }\n  @media only screen and (min-width: 820px) {\n    .uppy-Dashboard-close {\n      font-size: 35px;\n      top: -10px;\n      right: -35px; } }\n\n.uppy-DashboardAddFiles {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n  text-align: center;\n  flex: 1;\n  margin: 7px;\n  border: 1px dashed #dfdfdf;\n  border-radius: 3px; }\n  .uppy-Dashboard-AddFilesPanel .uppy-DashboardAddFiles {\n    border: none; }\n  .uppy-Dashboard--modal .uppy-DashboardAddFiles {\n    border-color: #cfcfcf; }\n\n.uppy-DashboardTabs {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%; }\n  .uppy-size--md .uppy-DashboardTabs {\n    align-items: center; }\n\n.uppy-DashboardTabs-title {\n  font-size: 14px;\n  line-height: 30px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  color: #525252; }\n  .uppy-size--md .uppy-DashboardTabs-title {\n    font-size: 16px;\n    line-height: 40px; }\n\n.uppy-DashboardAddFiles-info {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n  .uppy-size--md .uppy-DashboardAddFiles-info {\n    position: absolute;\n    bottom: 30px;\n    left: 0;\n    right: 0;\n    padding-top: 30px;\n    padding-bottom: 0; }\n\n.uppy-Dashboard-browse {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  color: rgba(34, 117, 215, 0.9); }\n  .uppy-Dashboard-browse:hover {\n    text-decoration: underline; }\n\n.uppy-Dashboard-browse:focus {\n  outline: none;\n  border-bottom: 2px solid #2275d7; }\n\n.uppy-DashboardTabs-list {\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  margin-top: 10px;\n  padding: 2px 0; }\n  .uppy-size--md .uppy-DashboardTabs-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 600px;\n    overflow-x: initial;\n    margin-top: 15px;\n    padding-top: 0; }\n\n.uppy-DashboardTab {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 0px 2px; }\n  .uppy-size--md .uppy-DashboardTab {\n    width: initial;\n    margin-bottom: 20px;\n    border-bottom: none;\n    padding: 0; }\n\n.uppy-DashboardTab-btn {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  color: #525252;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 20px;\n  line-height: 1;\n  text-align: center; }\n  .uppy-size--md .uppy-DashboardTab-btn {\n    width: 86px;\n    margin-right: 1px;\n    flex-direction: column;\n    padding: 10px 3px;\n    border-radius: 5px; }\n\n.uppy-DashboardTab-btn::-moz-focus-inner {\n  border: 0; }\n\n.uppy-DashboardTab-btn:hover {\n  background-color: #f1f3f6; }\n\n.uppy-DashboardTab-btn:active,\n.uppy-DashboardTab-btn:focus {\n  background-color: #ebeef2;\n  outline: none; }\n\n.uppy-DashboardTab-btn svg {\n  margin-right: 10px; }\n  .uppy-size--md .uppy-DashboardTab-btn svg {\n    margin-right: 0; }\n\n.uppy-DashboardTab-btn svg {\n  max-width: 100%;\n  max-height: 100%;\n  display: inline-block;\n  vertical-align: text-top;\n  overflow: hidden;\n  transition: -webkit-transform ease-in-out .15s;\n  transition: transform ease-in-out .15s;\n  transition: transform ease-in-out .15s, -webkit-transform ease-in-out .15s; }\n\n.uppy-DashboardTab-name {\n  font-size: 14px;\n  font-weight: 500; }\n  .uppy-size--md .uppy-DashboardTab-name {\n    font-size: 11px;\n    line-height: 14px;\n    margin-top: 8px;\n    margin-bottom: 0; }\n\n.uppy-DashboardTab svg {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle; }\n  .uppy-size--md .uppy-DashboardTab svg {\n    width: 27px;\n    height: 27px; }\n\n.uppy-Dashboard-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.uppy-DashboardContent-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 40px;\n  width: 100%;\n  border-bottom: 1px solid #eaeaea;\n  z-index: 1004;\n  background-color: #fafafa;\n  padding: 0 10px; }\n  .uppy-size--md .uppy-DashboardContent-bar {\n    height: 50px;\n    padding: 0 15px; }\n\n.uppy-DashboardContent-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 12px;\n  line-height: 40px;\n  font-weight: 500;\n  max-width: 170px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  margin: auto; }\n  .uppy-size--md .uppy-DashboardContent-title {\n    font-size: 14px;\n    line-height: 50px;\n    max-width: 300px; }\n\n.uppy-DashboardContent-back {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  cursor: pointer;\n  color: #2275d7;\n  padding: 7px 6px;\n  margin-left: -6px;\n  border-radius: 3px; }\n  .uppy-DashboardContent-back:hover {\n    color: #1a58a2; }\n  .uppy-size--md .uppy-DashboardContent-back {\n    font-size: 14px; }\n\n.uppy-DashboardContent-addMore {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  display: inline-block;\n  font-weight: 500;\n  cursor: pointer;\n  color: #2275d7;\n  width: 27px;\n  height: 27px;\n  padding: 6px;\n  margin-right: -6px;\n  border-radius: 3px; }\n  .uppy-DashboardContent-addMore:hover {\n    color: #1a58a2; }\n\n.uppy-DashboardContent-addMore svg {\n  vertical-align: text-top; }\n\n.uppy-DashboardContent-panel {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: whitesmoke;\n  overflow: hidden;\n  z-index: 1005;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n.uppy-Dashboard-AddFilesPanel {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fafafa;\n  background: linear-gradient(0deg, #fafafa 35%, rgba(250, 250, 250, 0.85) 100%);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  z-index: 1005;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column; }\n\n.uppy-Dashboard--isAddFilesPanelVisible .uppy-Dashboard-files {\n  -webkit-filter: blur(2px);\n          filter: blur(2px); }\n\n.uppy-Dashboard-progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 12%; }\n\n.uppy-Dashboard-progressBarContainer.is-active {\n  z-index: 1004;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.uppy-Dashboard-filesContainer {\n  position: relative;\n  overflow-y: hidden;\n  margin: 0;\n  flex: 1; }\n  .uppy-Dashboard-filesContainer:after {\n    content: '';\n    display: table;\n    clear: both; }\n\n.uppy-Dashboard-files {\n  margin: 0;\n  padding: 0 0 10px 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  flex: 1; }\n\n.uppy-size--md .uppy-Dashboard-files {\n  padding-top: 10px; }\n\n.uppy-Dashboard-dropFilesHereHint {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  bottom: 7px;\n  left: 7px;\n  padding-top: 90px;\n  border: 1px dashed #2275d7;\n  border-radius: 3px;\n  z-index: 2000;\n  text-align: center;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2V1zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0v1zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7z' fill='%232275D7' fill-rule='nonzero'/%3E%3C/svg%3E\");\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  color: #707070;\n  font-size: 16px; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-dropFilesHereHint {\n  visibility: visible; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardContent-bar,\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-files,\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-progressindicators {\n  opacity: 0.15; }\n\n.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardAddFiles {\n  opacity: 0.03; }\n\n.uppy-Dashboard-dropFilesTitle {\n  max-width: 300px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1.45;\n  font-weight: 400;\n  color: #525252;\n  margin: auto;\n  padding: 0 15px;\n  padding-top: 20px; }\n  .uppy-size--md .uppy-Dashboard-dropFilesTitle {\n    max-width: 470px;\n    font-size: 27px; }\n\n.uppy-Dashboard-note {\n  font-size: 14px;\n  line-height: 1.25;\n  text-align: center;\n  color: #757575;\n  max-width: 350px;\n  margin: auto;\n  padding: 0 15px; }\n  .uppy-size--md .uppy-Dashboard-note {\n    font-size: 16px;\n    line-height: 1.35;\n    max-width: 600px; }\n\na.uppy-Dashboard-poweredBy {\n  display: inline-block;\n  text-align: center;\n  font-size: 11px;\n  color: #939393;\n  text-decoration: none;\n  margin-top: 8px; }\n\n.uppy-Dashboard-poweredByIcon {\n  stroke: #939393;\n  fill: none;\n  margin-left: 1px;\n  margin-right: 1px;\n  position: relative;\n  top: 1px;\n  opacity: 0.9;\n  vertical-align: text-top; }\n\n.uppy-DashboardItem {\n  list-style: none;\n  margin: 10px 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding-bottom: 10px;\n  padding-left: 10px; }\n  .uppy-size--md .uppy-DashboardItem {\n    float: left;\n    margin: 5px 15px;\n    width: calc(33.333% - 15px - 15px);\n    height: 170px;\n    flex-direction: column;\n    background-color: initial;\n    border: 0;\n    border-bottom: none;\n    padding-bottom: 0;\n    padding-left: 0; }\n  .uppy-size--lg .uppy-DashboardItem {\n    width: calc(25% - 15px - 15px);\n    height: 190px; }\n  .uppy-size--xl .uppy-DashboardItem {\n    width: calc(20% - 15px - 15px);\n    height: 210px; }\n\n.uppy-DashboardItem-preview {\n  width: 50px;\n  height: 50px;\n  border-bottom: 0;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .uppy-size--md .uppy-DashboardItem-preview {\n    width: 100%;\n    height: 100px;\n    border: 0; }\n  .uppy-size--lg .uppy-DashboardItem-preview {\n    height: 120px; }\n  .uppy-size--xl .uppy-DashboardItem-preview {\n    height: 140px; }\n\n.uppy-DashboardItem-previewLink {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1002; }\n\n.uppy-DashboardItem-sourceIcon {\n  display: inline-block;\n  vertical-align: bottom;\n  color: #939393; }\n\n.uppy-DashboardItem-sourceIcon svg,\n.uppy-DashboardItem-sourceIcon svg * {\n  max-width: 100%;\n  max-height: 100%;\n  display: inline-block;\n  vertical-align: text-bottom;\n  overflow: hidden;\n  fill: currentColor;\n  width: 11px;\n  height: 12px; }\n\n.uppy-DashboardItem-previewInnerWrap {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 3px; }\n  .uppy-size--md .uppy-DashboardItem-previewInnerWrap {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); }\n\n.uppy-DashboardItem-previewInnerWrap:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n  display: none;\n  z-index: 1001; }\n\n.uppy-DashboardItem-preview img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.uppy-DashboardItem-previewIconWrap {\n  height: 76px;\n  max-height: 75%;\n  position: relative; }\n\n.uppy-DashboardItem-previewIconBg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 1px);\n          filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 1px); }\n\n.uppy-DashboardItem-previewIcon {\n  width: 25px;\n  height: 25px;\n  z-index: 100;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .uppy-size--md .uppy-DashboardItem-previewIcon {\n    width: 38px;\n    height: 38px; }\n  .uppy-DashboardItem-previewIcon svg {\n    width: 100%;\n    height: 100%; }\n\n.uppy-DashboardItem-previewType {\n  position: absolute;\n  bottom: 14px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  text-transform: uppercase;\n  font-size: 9px;\n  letter-spacing: 1px;\n  color: #525252;\n  z-index: 100;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.uppy-DashboardItem-info {\n  padding-left: 15px;\n  position: relative;\n  max-width: 65%; }\n  .uppy-size--md .uppy-DashboardItem-info {\n    width: 100%;\n    max-width: 100%;\n    flex: 1;\n    padding: 8px 0 0;\n    border-top: 0; }\n\n.uppy-DashboardItem-name {\n  font-size: 12px;\n  line-height: 1.3;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n  .uppy-size--md .uppy-DashboardItem-name {\n    word-break: break-all;\n    white-space: normal;\n    overflow: initial; }\n\n.uppy-DashboardItem-name a {\n  text-decoration: none;\n  color: #333; }\n\n.uppy-DashboardItem-status {\n  font-size: 11px;\n  line-height: 1.3;\n  font-weight: normal;\n  color: #757575;\n  margin-bottom: 4px; }\n\n.uppy-DashboardItem-statusSize {\n  display: inline-block;\n  vertical-align: bottom;\n  text-transform: uppercase; }\n\n.uppy-DashboardItem-edit,\n.uppy-DashboardItem-copyLink {\n  display: inline-block;\n  vertical-align: bottom;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit; }\n  .uppy-DashboardItem-edit:hover,\n  .uppy-DashboardItem-copyLink:hover {\n    text-decoration: underline; }\n\n.uppy-DashboardItem-edit:not(:first-child),\n.uppy-DashboardItem-copyLink:not(:first-child),\n.uppy-DashboardItem-sourceIcon:not(:first-child) {\n  position: relative;\n  margin-left: 14px; }\n  .uppy-DashboardItem-edit:not(:first-child):before,\n  .uppy-DashboardItem-copyLink:not(:first-child):before,\n  .uppy-DashboardItem-sourceIcon:not(:first-child):before {\n    content: '\\B7';\n    position: absolute;\n    top: 0;\n    left: -9px;\n    color: #757575; }\n\n.uppy-DashboardItem-action {\n  position: absolute;\n  top: 18px;\n  right: 10px;\n  z-index: 1002; }\n  .uppy-size--md .uppy-DashboardItem-action {\n    top: -8px;\n    right: -8px; }\n\n.uppy-DashboardItem-remove {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  color: #1f1f1f;\n  width: 20px;\n  height: 20px;\n  padding: 1px;\n  opacity: 0.9; }\n  .uppy-DashboardItem-remove:hover {\n    opacity: 1; }\n\n.uppy-DashboardItem.is-inprogress:not(.is-resumable) .uppy-DashboardItem-remove {\n  display: none; }\n\n.uppy-DashboardItem-progress {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 1002;\n  color: #fff;\n  text-align: center;\n  width: 120px;\n  display: none;\n  transition: all .35 ease; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progress {\n  -webkit-transform: initial;\n          transform: initial;\n  top: -9px;\n  right: -8px;\n  left: initial;\n  width: auto; }\n\n.uppy-DashboardItem.is-inprogress .uppy-DashboardItem-progress,\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progress,\n.uppy-DashboardItem.is-error .uppy-DashboardItem-progress {\n  display: block; }\n\n.uppy-DashboardItem-progressIndicator {\n  background: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  color: inherit;\n  display: inline-block;\n  width: 38px;\n  height: 38px;\n  opacity: 0.9; }\n  .uppy-size--md .uppy-DashboardItem-progressIndicator {\n    width: 55px;\n    height: 55px; }\n\nbutton.uppy-DashboardItem-progressIndicator {\n  cursor: pointer; }\n\n.uppy-DashboardItem.is-error .uppy-DashboardItem-progressIndicator {\n  width: 18px;\n  height: 18px; }\n  .uppy-size--md .uppy-DashboardItem.is-error .uppy-DashboardItem-progressIndicator {\n    width: 28px;\n    height: 28px; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n  width: 18px;\n  height: 18px;\n  opacity: 1; }\n  .uppy-size--md .uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n    width: 22px;\n    height: 22px; }\n\n.uppy-DashboardItem-progressInfo {\n  font-size: 9px;\n  line-height: 1;\n  font-weight: 500;\n  height: 10px;\n  display: none;\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  width: 100%;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); }\n  .uppy-size--md .uppy-DashboardItem-progressInfo {\n    display: block; }\n\n.UppyIcon-progressCircle {\n  width: 100%;\n  height: 100%; }\n\n.uppy-DashboardItem .bg {\n  stroke: rgba(255, 255, 255, 0.4);\n  opacity: 0; }\n\n.uppy-DashboardItem .progress {\n  stroke: #fff;\n  transition: stroke-dashoffset .5s ease-out;\n  opacity: 0; }\n\n.uppy-DashboardItem .play {\n  stroke: #fff;\n  fill: #fff;\n  opacity: 0;\n  transition: all 0.2s;\n  display: none; }\n\n.uppy-DashboardItem .cancel {\n  fill: #fff;\n  opacity: 0;\n  transition: all 0.2s; }\n\n.uppy-DashboardItem .pause {\n  stroke: #fff;\n  fill: #fff;\n  opacity: 0;\n  transition: all 0.2s;\n  display: none; }\n\n.uppy-DashboardItem.is-error .retry {\n  fill: #fff; }\n\n.uppy-DashboardItem.is-resumable .pause, .uppy-DashboardItem.is-resumable .play {\n  display: block; }\n\n.uppy-DashboardItem.is-resumable .cancel {\n  display: none; }\n\n.UppyIcon-progressCircle .check {\n  opacity: 0;\n  fill: #fff;\n  transition: all 0.2s; }\n\n.uppy-DashboardItem.is-inprogress .bg, .uppy-DashboardItem.is-inprogress .progress, .uppy-DashboardItem.is-inprogress .pause, .uppy-DashboardItem.is-inprogress .cancel {\n  opacity: 1; }\n\n.uppy-DashboardItem.is-inprogress .uppy-DashboardItem-previewInnerWrap:after {\n  display: block; }\n\n.uppy-DashboardItem.is-error .uppy-DashboardItem-previewInnerWrap:after {\n  display: block; }\n\n.uppy-DashboardItem.is-paused .pause {\n  opacity: 0; }\n\n.uppy-DashboardItem.is-paused .play {\n  opacity: 1; }\n\n.uppy-DashboardItem.is-noIndividualCancellation .uppy-DashboardItem-progressIndicator {\n  cursor: default; }\n\n.uppy-DashboardItem.is-noIndividualCancellation .cancel {\n  display: none; }\n\n.uppy-DashboardItem.is-processing .uppy-DashboardItem-progress {\n  opacity: 0; }\n\n.uppy-DashboardItem.is-complete .uppy-DashboardItem-progressIndicator {\n  cursor: default; }\n\n.uppy-DashboardItem.is-complete .progress {\n  stroke: #1bb240;\n  fill: #1bb240;\n  opacity: 1; }\n\n.uppy-DashboardItem.is-complete .check {\n  opacity: 1; }\n\n.uppy-DashboardItem-progressNum {\n  position: relative;\n  z-index: 1001; }\n\n.uppy-DashboardItem-progressInner {\n  height: 15px;\n  background-color: #2275d7;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.uppy-Dashboard-actions {\n  height: 55px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  background-color: #fafafa; }\n\n.uppy-size--md .uppy-Dashboard-actions {\n  height: 65px; }\n\n.uppy-Dashboard-actionsBtn {\n  margin-right: 10px; }\n\n.uppy-Dashboard-pauseResume .UppyIcon {\n  width: 100%;\n  height: 100%; }\n\n.uppy-Dashboard-upload {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .uppy-size--md .uppy-Dashboard-upload {\n    width: 60px;\n    height: 60px; }\n\n.uppy-Dashboard-upload .UppyIcon {\n  position: relative;\n  top: 1px;\n  width: 50%; }\n\n.uppy-Dashboard-uploadCount {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  background-color: #1bb240;\n  color: #fff;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 8px; }\n  .uppy-size--md .uppy-Dashboard-uploadCount {\n    width: 18px;\n    height: 18px;\n    line-height: 18px;\n    font-size: 9px; }\n\n.uppy-DashboardFileCard {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1005;\n  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  display: flex;\n  flex-direction: column; }\n\n.uppy-DashboardFileCard-inner {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1; }\n\n.uppy-DashboardFileCard-preview {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  border-bottom: 1px solid #eaeaea;\n  background-color: #fafafa;\n  /* no !important */\n  position: relative; }\n\n.uppy-DashboardFileCard-preview img {\n  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15);\n  max-width: 90%;\n  max-height: 90%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 3px;\n  position: absolute; }\n\n.uppy-DashboardFileCard-info {\n  padding: 30px 20px 20px 20px;\n  max-height: 40%;\n  flex-grow: 1;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.uppy-DashboardFileCard-fieldset {\n  font-size: 0;\n  border: 0;\n  padding: 0;\n  max-width: 640px;\n  margin: auto;\n  margin-bottom: 12px; }\n\n.uppy-DashboardFileCard-label {\n  display: inline-block;\n  vertical-align: middle;\n  width: 22%;\n  font-size: 12px;\n  color: #525252; }\n  .uppy-size--md .uppy-DashboardFileCard-label {\n    font-size: 14px; }\n\n.uppy-DashboardFileCard-input {\n  display: inline-block;\n  vertical-align: middle;\n  width: 78%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"\\61F\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:root {\n    --folder-width: 6em;\n    --folder-height: calc(0.8 * var(--folder-width));\n    --folder-deco-width: calc(var(--folder-width) / 3.5);\n    --folder-cover-height: calc(0.7 * var(--folder-width));\n    --folder-slip-height: calc(var(--folder-height) - var(--folder-cover-height));\n    --folder-border-radius: calc(var(--folder-width) / 10);\n    --folder-title-size: calc(0.16 * var(--folder-width));\n    --thumb-width: calc(0.6 * var(--folder-width));\n}\n\n/* ardra */\n.content--ardra {\n    background-color: #2b2d31;\n    color: #4c4e52;\n}\n.content--ardra::after {\n    color: #396fc5;\n}\n.folder--ardra .folder__icon-img--back {\n    color: #234e91;\n}\n.folder--ardra .folder__icon-img--cover {\n    color: #396fc5;\n}\n.folder--ardra .folder__icon-svg--deco {\n    color: #234e91;\n}\n.folder--ardra .folder__caption {\n    color: #396fc5;\n}\n\n/* Folder */\n.folder {\n    position: relative;\n    z-index: 100;\n    width: var(--folder-width);\n}\n.folder__feedback {\n    position: absolute;\n    width: var(--thumb-width);\n    height: var(--thumb-width);\n    border-radius: 50%;\n    background: #181a1c;\n    top: 50%;\n    left: 50%;\n    margin: calc(var(--thumb-width) / -2 + var(--folder-slip-height) / 2) 0 0 calc(var(--thumb-width) / -2);\n    pointer-events: none;\n    opacity: 0;\n}\n.folder__icon {\n    position: relative;\n    width: 100%;\n    height: var(--folder-height);\n    cursor: pointer;\n}\n.folder__icon--perspective {\n    -webkit-perspective: 800px;\n            perspective: 800px;\n}\n.folder__icon-img {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n}\n.folder__icon-img,\n.folder__icon-svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.folder__icon--perspective .folder__icon-img,\n.folder__icon--perspective .folder__icon-svg {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n.folder__icon-svg {\n    fill: currentColor;\n}\n.folder__icon-svg--deco {\n    color: #76767f;\n    width: var(--folder-deco-width);\n    height: var(--folder-deco-width);\n    top: 50%;\n    left: 50%;\n    margin: calc( (var(--folder-deco-width) / -2) + var(--folder-slip-height) / 2 ) 0 0 calc(var(--folder-deco-width) / -2);\n}\n\n/* Inner paper sheets */\n.folder__icon-deco {\n    position: absolute;\n    bottom: 2px;\n    left: 2px;\n    width: calc(var(--folder-width) - 4px);\n    height: calc(var(--folder-cover-height) - 4px);\n    border-radius: var(--folder-border-radius);\n    background-color: #fff;\n}\n.folder__preview {\n    pointer-events: none;\n    position: absolute;\n}\n.folder__preview--thumbs {\n    width: var(--thumb-width);\n    height: var(--thumb-width);\n    top: calc((var(--folder-height) + var(--folder-slip-height)) / 2 - var(--thumb-width) / 2);\n    left: calc(var(--folder-width) / 2 - var(--thumb-width) / 2);\n}\n.folder__preview--text {\n    position: absolute;\n    left: 100%;\n    top: var(--folder-slip-height);\n    padding: 0 2em;\n    opacity: 0;\n}\n.folder__preview--magnifier {\n    top: 50%;\n    text-align: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n    align-content: space-between;\n    left: 50%;\n    background: #fff;\n    width: calc(var(--thumb-width) * 5);\n    height: calc(var(--thumb-width) * 5);\n    margin: calc(var(--thumb-width) * 5 / -2) 0 0 calc(var(--thumb-width) * 5 / -2);\n    padding: 3.5em;\n    border-radius: 50%;\n    opacity: 0;\n}\n.folder__preview--bar {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n.folder__thumb {\n    max-width: 100%;\n    display: block;\n    position: absolute;\n    opacity: 0;\n}\n.folder__detail {\n    margin: 0;\n}\n.folder__detail-svg {\n    width: 2em;\n    height: 2em;\n    position: relative;\n    fill: #ddd;\n}\n.folder__detail-svg--gif {\n    fill: #5cc7be;\n}\n.folder__detail-svg--txt {\n    fill: #b8d8fb;\n}\n.folder__detail-svg--mp3 {\n    fill: #fbcf7b;\n}\n.folder__detail-text {\n    display: block;\n    font-size: 68.5%;\n}\n.folder__caption {\n    position: relative;\n    display: inline-block;\n    line-height: 1.15;\n    margin: 0.75em 0 0;\n    font-size: var(--folder-title-size); /* dynamic font sizing depending on the folder dimension */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-block[data-v-7eac9fb0] {\n    /* c: url(http://localhost/storage/1/car%401x.png); */\n    height: 150px;\n    width: 200px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Scoped Styles */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Scoped Styles */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/cuid/index.js":
/*!************************************!*\
  !*** ./node_modules/cuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

var fingerprint = __webpack_require__(/*! ./lib/fingerprint.js */ "./node_modules/cuid/lib/fingerprint.browser.js");
var pad = __webpack_require__(/*! ./lib/pad.js */ "./node_modules/cuid/lib/pad.js");
var getRandomValue = __webpack_require__(/*! ./lib/getRandomValue.js */ "./node_modules/cuid/lib/getRandomValue.browser.js");

var c = 0,
  blockSize = 4,
  base = 36,
  discreteValues = Math.pow(base, blockSize);

function randomBlock () {
  return pad((getRandomValue() *
    discreteValues << 0)
    .toString(base), blockSize);
}

function safeCounter () {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

function cuid () {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c', // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = (new Date().getTime()).toString(base),

    // Prevent same-machine collisions.
    counter = pad(safeCounter().toString(base), blockSize),

    // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = fingerprint(),

    // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

  return letter + timestamp + counter + print + random;
}

cuid.slug = function slug () {
  var date = new Date().getTime().toString(36),
    counter = safeCounter().toString(36).slice(-4),
    print = fingerprint().slice(0, 1) +
      fingerprint().slice(-1),
    random = randomBlock().slice(-2);

  return date.slice(-2) +
    counter + print + random;
};

cuid.isCuid = function isCuid (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  if (stringToCheck.startsWith('c')) return true;
  return false;
};

cuid.isSlug = function isSlug (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10) return true;
  return false;
};

cuid.fingerprint = fingerprint;

module.exports = cuid;


/***/ }),

/***/ "./node_modules/cuid/lib/fingerprint.browser.js":
/*!******************************************************!*\
  !*** ./node_modules/cuid/lib/fingerprint.browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(/*! ./pad.js */ "./node_modules/cuid/lib/pad.js");

var env = typeof window === 'object' ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};


/***/ }),

/***/ "./node_modules/cuid/lib/getRandomValue.browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/cuid/lib/getRandomValue.browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var getRandomValue;

var crypto = window.crypto || window.msCrypto;

if (crypto) {
    var lim = Math.pow(2, 32) - 1;
    getRandomValue = function () {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
    };
} else {
    getRandomValue = Math.random;
}

module.exports = getRandomValue;


/***/ }),

/***/ "./node_modules/cuid/lib/pad.js":
/*!**************************************!*\
  !*** ./node_modules/cuid/lib/pad.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mime-match/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-match/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wildcard = __webpack_require__(/*! wildcard */ "./node_modules/wildcard/index.js");
var reMimePartSplit = /[\/\+\.]/;

/**
  # mime-match

  A simple function to checker whether a target mime type matches a mime-type
  pattern (e.g. image/jpeg matches image/jpeg OR image/*).

  ## Example Usage

  <<< example.js

**/
module.exports = function(target, pattern) {
  function test(pattern) {
    var result = wildcard(pattern, target, reMimePartSplit);

    // ensure that we have a valid mime type (should have two parts)
    return result && result.length >= 2;
  }

  return pattern ? test(pattern.split(';')[0]) : test;
};


/***/ }),

/***/ "./node_modules/namespace-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/namespace-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Create an event emitter with namespaces
* @name createNamespaceEmitter
* @example
* var emitter = require('./index')()
*
* emitter.on('*', function () {
*   console.log('all events emitted', this.event)
* })
*
* emitter.on('example', function () {
*   console.log('example event emitted')
* })
*/
module.exports = function createNamespaceEmitter () {
  var emitter = {}
  var _fns = emitter._fns = {}

  /**
  * Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`
  * @name emit
  * @param {String} event – the name of the event, with optional namespace
  * @param {...*} data – up to 6 arguments that are passed to the event listener
  * @example
  * emitter.emit('example')
  * emitter.emit('demo:test')
  * emitter.emit('data', { example: true}, 'a string', 1)
  */
  emitter.emit = function emit (event, arg1, arg2, arg3, arg4, arg5, arg6) {
    var toEmit = getListeners(event)

    if (toEmit.length) {
      emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6])
    }
  }

  /**
  * Create en event listener.
  * @name on
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.on('example', function () {})
  * emitter.on('demo', function () {})
  */
  emitter.on = function on (event, fn) {
    if (!_fns[event]) {
      _fns[event] = []
    }

    _fns[event].push(fn)
  }

  /**
  * Create en event listener that fires once.
  * @name once
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.once('example', function () {})
  * emitter.once('demo', function () {})
  */
  emitter.once = function once (event, fn) {
    function one () {
      fn.apply(this, arguments)
      emitter.off(event, one)
    }
    this.on(event, one)
  }

  /**
  * Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
  * You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener,
  * `emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener
  * @name off
  * @param {String} event
  * @param {Function} [fn] – the specific handler
  * @example
  * emitter.off('example')
  * emitter.off('demo', function () {})
  */
  emitter.off = function off (event, fn) {
    var keep = []

    if (event && fn) {
      var fns = this._fns[event]
      var i = 0
      var l = fns ? fns.length : 0

      for (i; i < l; i++) {
        if (fns[i] !== fn) {
          keep.push(fns[i])
        }
      }
    }

    keep.length ? this._fns[event] = keep : delete this._fns[event]
  }

  function getListeners (e) {
    var out = _fns[e] ? _fns[e] : []
    var idx = e.indexOf(':')
    var args = (idx === -1) ? [e] : [e.substring(0, idx), e.substring(idx + 1)]

    var keys = Object.keys(_fns)
    var i = 0
    var l = keys.length

    for (i; i < l; i++) {
      var key = keys[i]
      if (key === '*') {
        out = out.concat(_fns[key])
      }

      if (args.length === 2 && args[0] === key) {
        out = out.concat(_fns[key])
        break
      }
    }

    return out
  }

  function emitAll (e, fns, args) {
    var i = 0
    var l = fns.length

    for (i; i < l; i++) {
      if (!fns[i]) break
      fns[i].event = e
      fns[i].apply(fns[i], args)
    }
  }

  return emitter
}


/***/ }),

/***/ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.esm.js")) :
  undefined;
}(this, (function (preact) { 'use strict';

function getKey(vnode) {
	return vnode.attributes && vnode.attributes.key;
}

function getComponentBase(component) {
	return component.base;
}

function onlyChild(children) {
	return children && children[0];
}

function filterNullChildren(children) {
	return children && children.filter(function (i) {
		return i !== null;
	});
}

function find(arr, iter) {
	for (var i = arr.length; i--;) {
		if (iter(arr[i])) return true;
	}
	return false;
}

function inChildrenByKey(children, key) {
	return find(children, function (c) {
		return getKey(c) === key;
	});
}

function inChildren(children, child) {
	return inChildrenByKey(children, getKey(child));
}

function isShownInChildrenByKey(children, key, showProp) {
	return find(children, function (c) {
		return getKey(c) === key && c.props[showProp];
	});
}

function isShownInChildren(children, child, showProp) {
	return isShownInChildrenByKey(children, getKey(child), showProp);
}

function mergeChildMappings(prev, next) {
	var ret = [];

	var nextChildrenPending = {},
	    pendingChildren = [];
	prev.forEach(function (c) {
		var key = getKey(c);
		if (inChildrenByKey(next, key)) {
			if (pendingChildren.length) {
				nextChildrenPending[key] = pendingChildren;
				pendingChildren = [];
			}
		} else {
			pendingChildren.push(c);
		}
	});

	next.forEach(function (c) {
		var key = getKey(c);
		if (nextChildrenPending.hasOwnProperty(key)) {
			ret = ret.concat(nextChildrenPending[key]);
		}
		ret.push(c);
	});

	return ret.concat(pendingChildren);
}

var SPACE = ' ';
var RE_CLASS = /[\n\t\r]+/g;

var norm = function (elemClass) {
	return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

function addClass(elem, className) {
	if (elem.classList) {
		var _elem$classList;

		(_elem$classList = elem.classList).add.apply(_elem$classList, className.split(' '));
	} else {
		elem.className += ' ' + className;
	}
}

function removeClass(elem, needle) {
	needle = needle.trim();
	if (elem.classList) {
		var _elem$classList2;

		(_elem$classList2 = elem.classList).remove.apply(_elem$classList2, needle.split(' '));
	} else {
		var elemClass = elem.className.trim();
		var className = norm(elemClass);
		needle = SPACE + needle + SPACE;
		while (className.indexOf(needle) >= 0) {
			className = className.replace(needle, SPACE);
		}
		elem.className = className.trim();
	}
}

var EVENT_NAME_MAP = {
	transitionend: {
		transition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'mozTransitionEnd',
		OTransition: 'oTransitionEnd',
		msTransition: 'MSTransitionEnd'
	},

	animationend: {
		animation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
		MozAnimation: 'mozAnimationEnd',
		OAnimation: 'oAnimationEnd',
		msAnimation: 'MSAnimationEnd'
	}
};

var endEvents = [];

function detectEvents() {
	var testEl = document.createElement('div'),
	    style = testEl.style;

	if (!('AnimationEvent' in window)) {
		delete EVENT_NAME_MAP.animationend.animation;
	}

	if (!('TransitionEvent' in window)) {
		delete EVENT_NAME_MAP.transitionend.transition;
	}

	for (var baseEventName in EVENT_NAME_MAP) {
		var baseEvents = EVENT_NAME_MAP[baseEventName];
		for (var styleName in baseEvents) {
			if (styleName in style) {
				endEvents.push(baseEvents[styleName]);
				break;
			}
		}
	}
}

if (typeof window !== 'undefined') {
	detectEvents();
}

function addEndEventListener(node, eventListener) {
	if (!endEvents.length) {
		return window.setTimeout(eventListener, 0);
	}
	endEvents.forEach(function (endEvent) {
		node.addEventListener(endEvent, eventListener, false);
	});
}

function removeEndEventListener(node, eventListener) {
	if (!endEvents.length) return;
	endEvents.forEach(function (endEvent) {
		node.removeEventListener(endEvent, eventListener, false);
	});
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TICK = 17;

var CSSTransitionGroupChild = function (_Component) {
	inherits(CSSTransitionGroupChild, _Component);

	function CSSTransitionGroupChild() {
		var _temp, _this, _ret;

		classCallCheck(this, CSSTransitionGroupChild);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.flushClassNameQueue = function () {
			if (getComponentBase(_this)) {
				addClass(getComponentBase(_this), _this.classNameQueue.join(' '));
			}
			_this.classNameQueue.length = 0;
			_this.timeout = null;
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
		var _this2 = this;

		var node = getComponentBase(this);

		var className = this.props.name[animationType] || this.props.name + '-' + animationType;
		var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
		var timer = null;

		if (this.endListener) {
			this.endListener();
		}

		this.endListener = function (e) {
			if (e && e.target !== node) return;

			clearTimeout(timer);
			removeClass(node, className);
			removeClass(node, activeClassName);
			removeEndEventListener(node, _this2.endListener);
			_this2.endListener = null;

			if (finishCallback) {
				finishCallback();
			}
		};

		if (timeout) {
			timer = setTimeout(this.endListener, timeout);
			this.transitionTimeouts.push(timer);
		} else {
			addEndEventListener(node, this.endListener);
		}

		addClass(node, className);

		this.queueClass(activeClassName);
	};

	CSSTransitionGroupChild.prototype.queueClass = function queueClass(className) {
		this.classNameQueue.push(className);

		if (!this.timeout) {
			this.timeout = setTimeout(this.flushClassNameQueue, TICK);
		}
	};

	CSSTransitionGroupChild.prototype.stop = function stop() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.classNameQueue.length = 0;
			this.timeout = null;
		}
		if (this.endListener) {
			this.endListener();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
		this.classNameQueue = [];
		this.transitionTimeouts = [];
	};

	CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.transitionTimeouts.forEach(function (timeout) {
			clearTimeout(timeout);
		});
	};

	CSSTransitionGroupChild.prototype.componentWillEnter = function componentWillEnter(done) {
		if (this.props.enter) {
			this.transition('enter', done, this.props.enterTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillLeave = function componentWillLeave(done) {
		if (this.props.leave) {
			this.transition('leave', done, this.props.leaveTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.render = function render() {
		return onlyChild(this.props.children);
	};

	return CSSTransitionGroupChild;
}(preact.Component);

var CSSTransitionGroup = function (_Component) {
	inherits(CSSTransitionGroup, _Component);

	function CSSTransitionGroup(props) {
		classCallCheck(this, CSSTransitionGroup);

		var _this = possibleConstructorReturn(this, _Component.call(this));

		_this.renderChild = function (child) {
			var _this$props = _this.props;
			var transitionName = _this$props.transitionName;
			var transitionEnter = _this$props.transitionEnter;
			var transitionLeave = _this$props.transitionLeave;
			var transitionEnterTimeout = _this$props.transitionEnterTimeout;
			var transitionLeaveTimeout = _this$props.transitionLeaveTimeout;
			var key = getKey(child);
			return preact.h(
				CSSTransitionGroupChild,
				{
					key: key,
					ref: function (c) {
						if (!(_this.refs[key] = c)) child = null;
					},
					name: transitionName,
					enter: transitionEnter,
					leave: transitionLeave,
					enterTimeout: transitionEnterTimeout,
					leaveTimeout: transitionLeaveTimeout },
				child
			);
		};

		_this.refs = {};
		_this.state = {
			children: (props.children || []).slice()
		};
		return _this;
	}

	CSSTransitionGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate(_, _ref) {
		var children = _ref.children;

		return children !== this.state.children;
	};

	CSSTransitionGroup.prototype.componentWillMount = function componentWillMount() {
		this.currentlyTransitioningKeys = {};
		this.keysToEnter = [];
		this.keysToLeave = [];
	};

	CSSTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
		var _this2 = this;

		var children = _ref2.children;
		var exclusive = _ref2.exclusive;
		var showProp = _ref2.showProp;

		var nextChildMapping = filterNullChildren(children || []).slice();

		var prevChildMapping = filterNullChildren(exclusive ? this.props.children : this.state.children);

		var newChildren = mergeChildMappings(prevChildMapping, nextChildMapping);

		if (showProp) {
			newChildren = newChildren.map(function (c) {
				if (!c.props[showProp] && isShownInChildren(prevChildMapping, c, showProp)) {
					var _cloneElement;

					c = preact.cloneElement(c, (_cloneElement = {}, _cloneElement[showProp] = true, _cloneElement));
				}
				return c;
			});
		}

		if (exclusive) {
			newChildren.forEach(function (c) {
				return _this2.stop(getKey(c));
			});
		}

		this.setState({ children: newChildren });
		this.forceUpdate();

		nextChildMapping.forEach(function (c) {
			var key = c.key;
			var hasPrev = prevChildMapping && inChildren(prevChildMapping, c);
			if (showProp) {
				if (hasPrev) {
					var showInPrev = isShownInChildren(prevChildMapping, c, showProp),
					    showInNow = c.props[showProp];
					if (!showInPrev && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToEnter.push(key);
					}
				}
			} else if (!hasPrev && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToEnter.push(key);
			}
		});

		prevChildMapping.forEach(function (c) {
			var key = c.key;
			var hasNext = nextChildMapping && inChildren(nextChildMapping, c);
			if (showProp) {
				if (hasNext) {
					var showInNext = isShownInChildren(nextChildMapping, c, showProp);
					var showInNow = c.props[showProp];
					if (!showInNext && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToLeave.push(key);
					}
				}
			} else if (!hasNext && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToLeave.push(key);
			}
		});
	};

	CSSTransitionGroup.prototype.performEnter = function performEnter(key) {
		var _this3 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component.componentWillEnter) {
			component.componentWillEnter(function () {
				return _this3._handleDoneEntering(key);
			});
		} else {
			this._handleDoneEntering(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneEntering = function _handleDoneEntering(key) {
		delete this.currentlyTransitioningKeys[key];
		var currentChildMapping = filterNullChildren(this.props.children),
		    showProp = this.props.showProp;
		if (!currentChildMapping || !showProp && !inChildrenByKey(currentChildMapping, key) || showProp && !isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performLeave(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.stop = function stop(key) {
		delete this.currentlyTransitioningKeys[key];
		var component = this.refs[key];
		if (component) component.stop();
	};

	CSSTransitionGroup.prototype.performLeave = function performLeave(key) {
		var _this4 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component && component.componentWillLeave) {
			component.componentWillLeave(function () {
				return _this4._handleDoneLeaving(key);
			});
		} else {
			this._handleDoneLeaving(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneLeaving = function _handleDoneLeaving(key) {
		delete this.currentlyTransitioningKeys[key];
		var showProp = this.props.showProp,
		    currentChildMapping = filterNullChildren(this.props.children);
		if (showProp && currentChildMapping && isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performEnter(key);
		} else if (!showProp && currentChildMapping && inChildrenByKey(currentChildMapping, key)) {
			this.performEnter(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
		var _this5 = this;

		var keysToEnter = this.keysToEnter;
		var keysToLeave = this.keysToLeave;

		this.keysToEnter = [];
		keysToEnter.forEach(function (k) {
			return _this5.performEnter(k);
		});
		this.keysToLeave = [];
		keysToLeave.forEach(function (k) {
			return _this5.performLeave(k);
		});
	};

	CSSTransitionGroup.prototype.render = function render(_ref3, _ref4) {
		var Component = _ref3.component;
		var transitionName = _ref3.transitionName;
		var transitionEnter = _ref3.transitionEnter;
		var transitionLeave = _ref3.transitionLeave;
		var transitionEnterTimeout = _ref3.transitionEnterTimeout;
		var transitionLeaveTimeout = _ref3.transitionLeaveTimeout;
		var c = _ref3.children;
		var props = objectWithoutProperties(_ref3, ['component', 'transitionName', 'transitionEnter', 'transitionLeave', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'children']);
		var children = _ref4.children;

		return preact.h(
			Component,
			props,
			filterNullChildren(children).map(this.renderChild)
		);
	};

	return CSSTransitionGroup;
}(preact.Component);
CSSTransitionGroup.defaultProps = {
	component: 'span',
	transitionEnter: true,
	transitionLeave: true
};

return CSSTransitionGroup;

})));
//# sourceMappingURL=preact-css-transition-group.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.esm.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.esm.js ***!
  \************************************************/
/*! exports provided: default, h, createElement, cloneElement, Component, render, rerender, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virtual DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.esm.js.map


/***/ }),

/***/ "./node_modules/prettier-bytes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/prettier-bytes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = prettierBytes

function prettierBytes (num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Expected a number, got ' + typeof num)
  }

  var neg = num < 0
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (neg) {
    num = -num
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B'
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
  num = Number(num / Math.pow(1000, exponent))
  var unit = units[exponent]

  if (num >= 10 || num % 1 === 0) {
    // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit
  } else {
    return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit
  }
}


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManager.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManagerTool.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./sweetalert2.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sweetalert2/dist/sweetalert2.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function p(e){return Object.keys(e).map(function(t){return e[t]})}function m(t){return Array.prototype.slice.call(t)}function g(t){console.error("".concat(e," ").concat(t))}function h(t,e){!function(t){-1===n.indexOf(t)&&(n.push(t),y(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function v(t){return t&&Promise.resolve(t)===t}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function b(e,t,n){m(e.classList).forEach(function(t){-1===p(k).indexOf(t)&&-1===p(B).indexOf(t)&&e.classList.remove(t)}),t&&t[n]&&nt(e,t[n])}var e="SweetAlert2:",y=function(t){console.warn("".concat(e," ").concat(t))},n=[],w=function(t){return"function"==typeof t?t():t},C=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),k=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),B=t(["success","warning","info","question","error"]),x={previousBodyPadding:null},S=function(t,e){return t.classList.contains(e)};function P(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return it(t,k[e]);case"checkbox":return t.querySelector(".".concat(k.checkbox," input"));case"radio":return t.querySelector(".".concat(k.radio," input:checked"))||t.querySelector(".".concat(k.radio," input:first-child"));case"range":return t.querySelector(".".concat(k.range," input"));default:return it(t,k.input)}}function A(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function L(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function E(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)}function T(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function O(t){t.style.opacity="",t.style.display="none"}function M(t,e,n){e?T(t,n):O(t)}function V(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function j(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function q(){return document.body.querySelector("."+k.container)}function H(t){var e=q();return e?e.querySelector(t):null}function I(t){return H("."+t)}function R(){var t=rt();return m(t.querySelectorAll("."+k.icon))}function N(){var t=R().filter(function(t){return V(t)});return t.length?t[0]:null}function D(){return I(k.title)}function U(){return I(k.content)}function _(){return I(k.image)}function z(){return I(k["progress-steps"])}function W(){return I(k["validation-message"])}function K(){return H("."+k.actions+" ."+k.confirm)}function F(){return H("."+k.actions+" ."+k.cancel)}function Z(){return I(k.actions)}function Q(){return I(k.header)}function Y(){return I(k.footer)}function $(){return I(k.close)}function J(){var t=m(rt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=m(rt().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return V(t)})}function X(){return"undefined"==typeof window||"undefined"==typeof document}function G(t){ce.isVisible()&&et!==t.target.value&&ce.resetValidationMessage(),et=t.target.value}function tt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===f(t)?lt(e,t):t&&(e.innerHTML=t)}var et,nt=function(t,e){L(t,e,!0)},ot=function(t,e){L(t,e,!1)},it=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(S(t.childNodes[n],e))return t.childNodes[n]},rt=function(){return I(k.popup)},at=function(){return!st()&&!document.body.classList.contains(k["no-backdrop"])},st=function(){return document.body.classList.contains(k["toast-shown"])},ut='\n <div aria-labelledby="'.concat(k.title,'" aria-describedby="').concat(k.content,'" class="').concat(k.popup,'" tabindex="-1">\n   <div class="').concat(k.header,'">\n     <ul class="').concat(k["progress-steps"],'"></ul>\n     <div class="').concat(k.icon," ").concat(B.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon," ").concat(B.question,'"></div>\n     <div class="').concat(k.icon," ").concat(B.warning,'"></div>\n     <div class="').concat(k.icon," ").concat(B.info,'"></div>\n     <div class="').concat(k.icon," ").concat(B.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image,'" />\n     <h2 class="').concat(k.title,'" id="').concat(k.title,'"></h2>\n     <button type="button" class="').concat(k.close,'">&times;</button>\n   </div>\n   <div class="').concat(k.content,'">\n     <div id="').concat(k.content,'"></div>\n     <input class="').concat(k.input,'" />\n     <input type="file" class="').concat(k.file,'" />\n     <div class="').concat(k.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select,'"></select>\n     <div class="').concat(k.radio,'"></div>\n     <label for="').concat(k.checkbox,'" class="').concat(k.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(k.label,'"></span>\n     </label>\n     <textarea class="').concat(k.textarea,'"></textarea>\n     <div class="').concat(k["validation-message"],'" id="').concat(k["validation-message"],'"></div>\n   </div>\n   <div class="').concat(k.actions,'">\n     <button type="button" class="').concat(k.confirm,'">OK</button>\n     <button type="button" class="').concat(k.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(k.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ct=function(t){if(function(){var t=q();t&&(t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k["no-backdrop"],k["toast-shown"],k["has-column"]]))}(),X())g("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=k.container,e.innerHTML=ut;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=rt();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&nt(q(),k.rtl)}(n),function(){var t=U(),e=it(t,k.input),n=it(t,k.file),o=t.querySelector(".".concat(k.range," input")),i=t.querySelector(".".concat(k.range," output")),r=it(t,k.select),a=t.querySelector(".".concat(k.checkbox," input")),s=it(t,k.textarea);e.oninput=G,n.onchange=G,r.onchange=G,a.onchange=G,s.oninput=G,o.oninput=function(t){G(t),i.value=o.value},o.onchange=function(t){G(t),o.nextSibling.value=o.value}}()}},lt=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},dt=function(){if(X())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];return!1}();function pt(t,e,n){M(t,n["showC"+e.substring(1)+"Button"],"inline-block"),t.innerHTML=n[e+"ButtonText"],t.setAttribute("aria-label",n[e+"ButtonAriaLabel"]),t.className=k[e],b(t,n.customClass,e+"Button"),nt(t,n[e+"ButtonClass"])}function ft(t,e){var n=Z(),o=K(),i=F();e.showConfirmButton||e.showCancelButton?T(n):O(n),b(n,e.customClass,"actions"),pt(o,"confirm",e),pt(i,"cancel",e),e.buttonsStyling?function(t,e,n){nt([t,e],k.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(ot([o,i],k.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor="")}function mt(t,e){var n=q();n&&(function(t,e){"string"==typeof e?t.style.background=e:e||nt([document.documentElement,document.body],k["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in k?nt(t,k[e]):(y('The "position" parameter is not valid, defaulting to "center"'),nt(t,k.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-"+e;n in k&&nt(t,k[n])}}(n,e.grow),b(n,e.customClass,"container"),e.customContainerClass&&nt(n,e.customContainerClass))}function gt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var ht={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},vt=function(t,e){var n=P(U(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},bt=function(t,e,n){t.className=e,n.inputClass&&nt(t,n.inputClass),n.customClass&&nt(t,n.customClass.input)},yt={};yt.text=yt.email=yt.password=yt.number=yt.tel=yt.url=function(t){var e=it(U(),k.input);return"string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:v(t.inputValue)||y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(t.inputValue),'"')),gt(e,t),e.type=t.input,e},yt.file=function(t){var e=it(U(),k.file);return gt(e,t),e.type=t.input,e},yt.range=function(t){var e=it(U(),k.range),n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,e},yt.select=function(t){var e=it(U(),k.select);if(e.innerHTML="",t.inputPlaceholder){var n=document.createElement("option");n.innerHTML=t.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return e},yt.radio=function(){var t=it(U(),k.radio);return t.innerHTML="",t},yt.checkbox=function(t){var e=it(U(),k.checkbox),n=P(U(),"checkbox");return n.type="checkbox",n.value=1,n.id=k.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span").innerHTML=t.inputPlaceholder,e},yt.textarea=function(t){var e=it(U(),k.textarea);return e.value=t.inputValue,gt(e,t),e};function wt(t,e){var n=U().querySelector("#"+k.content);e.html?(tt(e.html,n),T(n,"block")):e.text?(n.textContent=e.text,T(n,"block")):O(n),function(t,e){for(var n=ht.innerParams.get(t),o=!n||e.input!==n.input,i=U(),r=["input","file","range","select","radio","checkbox","textarea"],a=0;a<r.length;a++){var s=k[r[a]],u=it(i,s);vt(r[a],e.inputAttributes),bt(u,s,e),o&&O(u)}if(e.input){if(!yt[e.input])return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));if(o){var c=yt[e.input](e);T(c)}}}(t,e),b(U(),e.customClass,"content")}function Ct(t,i){var r=z();if(!i.progressSteps||0===i.progressSteps.length)return O(r);T(r),r.innerHTML="";var a=parseInt(null===i.currentProgressStep?ce.getQueueStep():i.currentProgressStep);a>=i.progressSteps.length&&y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(t,e){var n=function(t){var e=document.createElement("li");return nt(e,k["progress-step"]),e.innerHTML=t,e}(t);if(r.appendChild(n),e===a&&nt(n,k["active-progress-step"]),e!==i.progressSteps.length-1){var o=function(t){var e=document.createElement("li");return nt(e,k["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);r.appendChild(o)}})}function kt(t,e){var n=Q();b(n,e.customClass,"header"),Ct(0,e),function(t,e){var n=ht.innerParams.get(t);if(n&&e.type===n.type&&N())b(N(),e.customClass,"icon");else if(xt(),e.type)if(St(),-1!==Object.keys(B).indexOf(e.type)){var o=H(".".concat(k.icon,".").concat(B[e.type]));T(o),b(o,e.customClass,"icon"),L(o,"swal2-animate-".concat(e.type,"-icon"),e.animation)}else g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t,e),function(t,e){var n=_();if(!e.imageUrl)return O(n);T(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),E(n,"width",e.imageWidth),E(n,"height",e.imageHeight),n.className=k.image,b(n,e.customClass,"image"),e.imageClass&&nt(n,e.imageClass)}(0,e),function(t,e){var n=D();M(n,e.title||e.titleText),e.title&&tt(e.title,n),e.titleText&&(n.innerText=e.titleText),b(n,e.customClass,"title")}(0,e),function(t,e){var n=$();b(n,e.customClass,"closeButton"),M(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}function Bt(t,e){!function(t,e){var n=rt();E(n,"width",e.width),E(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=k.popup,e.toast?(nt([document.documentElement,document.body],k["toast-shown"]),nt(n,k.toast)):nt(n,k.modal),b(n,e.customClass,"popup"),"string"==typeof e.customClass&&nt(n,e.customClass),L(n,k.noanimation,!e.animation)}(0,e),mt(0,e),kt(t,e),wt(t,e),ft(0,e),function(t,e){var n=Y();M(n,e.footer),e.footer&&tt(e.footer,n),b(n,e.customClass,"footer")}(0,e)}var xt=function(){for(var t=R(),e=0;e<t.length;e++)O(t[e])},St=function(){for(var t=rt(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e};function Pt(){var t=rt();t||ce.fire(""),t=rt();var e=Z(),n=K(),o=F();T(e),T(n),nt([t,e],k.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function At(t){return Mt.hasOwnProperty(t)}function Lt(t){return jt[t]}var Et=[],Tt={},Ot=function(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Tt.restoreFocusTimeout=setTimeout(function(){Tt.previousActiveElement&&Tt.previousActiveElement.focus?(Tt.previousActiveElement.focus(),Tt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})},Mt={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},Vt=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],jt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},qt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Ht=Object.freeze({isValidParameter:At,isUpdatableParameter:function(t){return-1!==Vt.indexOf(t)},isDeprecatedParameter:Lt,argsToParams:function(n){var o={};switch(f(n[0])){case"object":a(o,n[0]);break;default:["title","html","type"].forEach(function(t,e){switch(f(n[e])){case"string":o[t]=n[e];break;case"undefined":break;default:g("Unexpected type of ".concat(t,'! Expected "string", got ').concat(f(n[e])))}})}return o},isVisible:function(){return V(rt())},clickConfirm:function(){return K()&&K().click()},clickCancel:function(){return F()&&F().click()},getContainer:q,getPopup:rt,getTitle:D,getContent:U,getImage:_,getIcon:N,getIcons:R,getCloseButton:$,getActions:Z,getConfirmButton:K,getCancelButton:F,getHeader:Q,getFooter:Y,getFocusableElements:J,getValidationMessage:W,isLoading:function(){return rt().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),r(e,[{key:"_main",value:function(t){return d(s(e.prototype),"_main",this).call(this,a({},n,t))}}]),e}(this)},queue:function(t){var r=this;Et=t;function a(t,e){Et=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}var s=[];return new Promise(function(i){!function e(n,o){n<Et.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Et[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<Et.length?Et.splice(e,0,t):Et.push(t)},deleteQueueStep:function(t){void 0!==Et[t]&&Et.splice(t,1)},showLoading:Pt,enableLoading:Pt,getTimerLeft:function(){return Tt.timeout&&Tt.timeout.getTimerLeft()},stopTimer:function(){return Tt.timeout&&Tt.timeout.stop()},resumeTimer:function(){return Tt.timeout&&Tt.timeout.start()},toggleTimer:function(){var t=Tt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return Tt.timeout&&Tt.timeout.increase(t)},isTimerRunning:function(){return Tt.timeout&&Tt.timeout.isRunning()}});function It(){var t=ht.innerParams.get(this),e=ht.domCache.get(this);t.showConfirmButton||(O(e.confirmButton),t.showCancelButton||O(e.actions)),ot([e.popup,e.actions],k.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}function Rt(){null===x.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(x.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=x.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px")}function Nt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Dt(){var t=q(),e=rt();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var Ut=function(){null!==x.previousBodyPadding&&(document.body.style.paddingRight=x.previousBodyPadding+"px",x.previousBodyPadding=null)},_t=function(){var e,n=q();n.ontouchstart=function(t){e=t.target===n||!function(t){return!!(t.scrollHeight>t.clientHeight)}(n)&&"INPUT"!==t.target.tagName},n.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},zt=function(){if(S(document.body,k.iosfix)){var t=parseInt(document.body.style.top,10);ot(document.body,k.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Wt=function(){"undefined"!=typeof window&&Nt()&&window.removeEventListener("resize",Dt)},Kt=function(){m(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Ft={swalPromiseResolve:new WeakMap};function Zt(t,e,n){e?$t(n):(Ot().then(function(){return $t(n)}),Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),delete Tt.keydownHandler,delete Tt.keydownTarget,t.parentNode&&t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k.shown,k["height-auto"],k["no-backdrop"],k["toast-shown"],k["toast-column"]]),at()&&(Ut(),zt(),Wt(),Kt())}function Qt(t){var e=q(),n=rt();if(n&&!S(n,k.hide)){var o=ht.innerParams.get(this),i=Ft.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;ot(n,k.show),nt(n,k.hide),dt&&j(n)?n.addEventListener(dt,function(t){t.target===n&&function(t,e,n,o){S(t,k.hide)&&Zt(e,n,o),Yt(ht),Yt(Ft)}(n,e,st(),a)}):Zt(e,st(),a),null!==r&&"function"==typeof r&&r(n),i(t||{}),delete this.params}}var Yt=function(t){for(var e in t)t[e]=new WeakMap},$t=function(t){null!==t&&"function"==typeof t&&setTimeout(function(){t()})};function Jt(t,e,n){var o=ht.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Xt(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Gt=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return r(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),te={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function ee(t,e){t.removeEventListener(dt,ee),e.style.overflowY="auto"}function ne(t){var e=q(),n=rt();null!==t.onBeforeOpen&&"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),t.animation&&(nt(n,k.show),nt(e,k.fade)),T(n),dt&&j(n)?(e.style.overflowY="hidden",n.addEventListener(dt,ee.bind(null,n,e))):e.style.overflowY="auto",nt([document.documentElement,document.body,e],k.shown),t.heightAuto&&t.backdrop&&!t.toast&&nt([document.documentElement,document.body],k["height-auto"]),at()&&(t.scrollbarPadding&&Rt(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!S(document.body,k.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",nt(document.body,k.iosfix),_t()}}(),"undefined"!=typeof window&&Nt()&&(Dt(),window.addEventListener("resize",Dt)),m(document.body.children).forEach(function(t){t===q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),setTimeout(function(){e.scrollTop=0})),st()||Tt.previousActiveElement||(Tt.previousActiveElement=document.activeElement),null!==t.onOpen&&"function"==typeof t.onOpen&&setTimeout(function(){t.onOpen(n)})}var oe=void 0,ie={select:function(t,e,i){var r=it(t,k.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var s=it(t,k.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=k.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=k.label,i.appendChild(o),i.appendChild(r),s.appendChild(i)});var n=s.querySelectorAll("input");n.length&&n[0].focus()}},re=function(e){var n=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n};var ae,se=Object.freeze({hideLoading:It,disableLoading:It,getInput:function(t){var e=ht.innerParams.get(t||this);return P(ht.domCache.get(t||this).content,e.input)},close:Qt,closePopup:Qt,closeModal:Qt,closeToast:Qt,enableButtons:function(){Jt(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Jt(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){h("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),Jt(this,["confirmButton"],!1)},disableConfirmButton:function(){h("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),Jt(this,["confirmButton"],!0)},enableInput:function(){return Xt(this.getInput(),!1)},disableInput:function(){return Xt(this.getInput(),!0)},showValidationMessage:function(t){var e=ht.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),T(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",k["validation-message"]),A(o),nt(o,k.inputerror))},resetValidationMessage:function(){var t=ht.domCache.get(this);t.validationMessage&&O(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ot(e,k.inputerror))},getProgressSteps:function(){return h("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),ht.innerParams.get(this).progressSteps},setProgressSteps:function(t){h("Swal.setProgressSteps()","Swal.update()");var e=a({},ht.innerParams.get(this),{progressSteps:t});Ct(0,e),ht.innerParams.set(this,e)},showProgressSteps:function(){var t=ht.domCache.get(this);T(t.progressSteps)},hideProgressSteps:function(){var t=ht.domCache.get(this);O(t.progressSteps)},_main:function(t){var c=this;!function(t){for(var e in t)At(i=e)||y('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==qt.indexOf(o)&&y('The parameter "'.concat(o,'" is incompatible with toasts'))),Lt(n=void 0)&&h(n,Lt(n));var n,o,i}(t);var l=a({},Mt,t);!function(e){e.inputValidator||Object.keys(te).forEach(function(t){e.input===t&&(e.inputValidator=te[t])}),e.showLoaderOnConfirm&&!e.preConfirm&&y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),e.animation=w(e.animation),e.target&&("string"!=typeof e.target||document.querySelector(e.target))&&("string"==typeof e.target||e.target.appendChild)||(y('Target parameter is not valid, defaulting to "body"'),e.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t=rt(),n="string"==typeof e.target?document.querySelector(e.target):e.target;(!t||t&&n&&t.parentNode!==n.parentNode)&&ct(e)}(l),Object.freeze(l),Tt.timeout&&(Tt.timeout.stop(),delete Tt.timeout),clearTimeout(Tt.restoreFocusTimeout);var d={popup:rt(),container:q(),content:U(),actions:Z(),confirmButton:K(),cancelButton:F(),closeButton:$(),validationMessage:W(),progressSteps:z()};ht.domCache.set(this,d),Bt(this,l),ht.innerParams.set(this,l);var p=this.constructor;return new Promise(function(t){function n(t){c.closePopup({value:t})}function s(t){c.closePopup({dismiss:t})}Ft.swalPromiseResolve.set(c,t),l.timer&&(Tt.timeout=new Gt(function(){s("timer"),delete Tt.timeout},l.timer));l.input&&setTimeout(function(){var t=c.getInput();t&&A(t)},0);for(var u=function(e){(l.showLoaderOnConfirm&&p.showLoading(),l.preConfirm)?(c.resetValidationMessage(),Promise.resolve().then(function(){return l.preConfirm(e,l.validationMessage)}).then(function(t){V(d.validationMessage)||!1===t?c.hideLoading():n(void 0===t?e:t)})):n(e)},e=function(t){var e=t.target,n=d.confirmButton,o=d.cancelButton,i=n&&(n===e||n.contains(e)),r=o&&(o===e||o.contains(e));switch(t.type){case"click":if(i)if(c.disableButtons(),l.input){var a=function(){var t=c.getInput();if(!t)return null;switch(l.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return l.inputAutoTrim?t.value.trim():t.value}}();if(l.inputValidator)c.disableInput(),Promise.resolve().then(function(){return l.inputValidator(a,l.validationMessage)}).then(function(t){c.enableButtons(),c.enableInput(),t?c.showValidationMessage(t):u(a)});else c.getInput().checkValidity()?u(a):(c.enableButtons(),c.showValidationMessage(l.validationMessage))}else u(!0);else r&&(c.disableButtons(),s(p.DismissReason.cancel))}},o=d.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=e,o[i].onmouseover=e,o[i].onmouseout=e,o[i].onmousedown=e;if(d.closeButton.onclick=function(){s(p.DismissReason.close)},l.toast)d.popup.onclick=function(){l.showConfirmButton||l.showCancelButton||l.showCloseButton||l.input||s(p.DismissReason.close)};else{var r=!1;d.popup.onmousedown=function(){d.container.onmouseup=function(t){d.container.onmouseup=void 0,t.target===d.container&&(r=!0)}},d.container.onmousedown=function(){d.popup.onmouseup=function(t){d.popup.onmouseup=void 0,t.target!==d.popup&&!d.popup.contains(t.target)||(r=!0)}},d.container.onclick=function(t){r?r=!1:t.target===d.container&&w(l.allowOutsideClick)&&s(p.DismissReason.backdrop)}}l.reverseButtons?d.confirmButton.parentNode.insertBefore(d.cancelButton,d.confirmButton):d.confirmButton.parentNode.insertBefore(d.confirmButton,d.cancelButton);function a(t,e){for(var n=J(l.focusCancel),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();d.popup.focus()}Tt.keydownTarget&&Tt.keydownHandlerAdded&&(Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),l.toast||(Tt.keydownHandler=function(t){return function(t,e){e.stopKeydownPropagation&&t.stopPropagation();if("Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var n=t.target,o=J(e.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?a(i,-1):a(i,1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===d.confirmButton&&V(d.cancelButton)?d.cancelButton.focus():document.activeElement===d.cancelButton&&V(d.confirmButton)&&d.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==w(e.allowEscapeKey)||(t.preventDefault(),s(p.DismissReason.esc));else if(t.target&&c.getInput()&&t.target.outerHTML===c.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;p.clickConfirm(),t.preventDefault()}}(t,l)},Tt.keydownTarget=l.keydownListenerCapture?window:d.popup,Tt.keydownListenerCapture=l.keydownListenerCapture,Tt.keydownTarget.addEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!0),c.enableButtons(),c.hideLoading(),c.resetValidationMessage(),l.toast&&(l.input||l.footer||l.showCloseButton)?nt(document.body,k["toast-column"]):ot(document.body,k["toast-column"]),"select"===l.input||"radio"===l.input?function(e,n){function o(t){return ie[n.input](i,re(t),n)}var i=U();v(n.inputOptions)?(Pt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===f(n.inputOptions)?o(n.inputOptions):g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(f(n.inputOptions)))}(c,l):-1!==["text","email","number","tel","textarea"].indexOf(l.input)&&v(l.inputValue)&&function(e,n){var o=e.getInput();O(o),n.inputValue.then(function(t){o.value="number"===n.input?parseFloat(t)||0:t+"",T(o),o.focus(),e.hideLoading()}).catch(function(t){g("Error in inputValue promise: "+t),o.value="",T(o),o.focus(),oe.hideLoading()})}(c,l),ne(l),l.toast||(w(l.allowEnterKey)?l.focusCancel&&V(d.cancelButton)?d.cancelButton.focus():l.focusConfirm&&V(d.confirmButton)?d.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),d.container.scrollTop=0})},update:function(e){var n={};Object.keys(e).forEach(function(t){ce.isUpdatableParameter(t)?n[t]=e[t]:y('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var t=a({},ht.innerParams.get(this),n);Bt(this,t),ht.innerParams.set(this,t),Object.defineProperties(this,{params:{value:a({},this.params,e),writable:!1,enumerable:!0}})}});function ue(){if("undefined"!=typeof window){"undefined"==typeof Promise&&g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),ae=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);ht.promise.set(this,i)}}ue.prototype.then=function(t){return ht.promise.get(this).then(t)},ue.prototype.finally=function(t){return ht.promise.get(this).finally(t)},a(ue.prototype,se),a(ue,Ht),Object.keys(se).forEach(function(e){ue[e]=function(){var t;if(ae)return(t=ae)[e].apply(t,arguments)}}),ue.DismissReason=C,ue.version="8.11.7";var ce=ue;return ce.default=ce}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "w-1/6 h-40 px-2 mb-3" }, [
      _c("svg", { staticStyle: { display: "none" } }, [
        _c("symbol", { attrs: { id: "icon-arrow", viewBox: "0 0 24 24" } }, [
          _c("title", [_vm._v("arrow")]),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              points:
                "6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "
            }
          })
        ]),
        _vm._v(" "),
        _c("symbol", { attrs: { id: "icon-drop", viewBox: "0 0 24 24" } }, [
          _c("title", [_vm._v("drop")]),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"
            }
          }),
          _c("path", {
            attrs: {
              d:
                "M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "symbol",
          { attrs: { id: "icon-folderback", viewBox: "0 0 20 16" } },
          [
            _c("title", [_vm._v("folder-back")]),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "symbol",
          { attrs: { id: "icon-foldercover", viewBox: "0 0 20 16" } },
          [
            _c("title", [_vm._v("folder-cover")]),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "symbol",
          { attrs: { id: "icon-folderdummy", viewBox: "0 0 20 16" } },
          [
            _c("title", [_vm._v("folder-dummy")]),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("symbol", { attrs: { id: "icon-users", viewBox: "0 0 24 24" } }, [
          _c("title", [_vm._v("users")]),
          _vm._v(" "),
          _c("path", {
            staticStyle: { opacity: "0.3" },
            attrs: {
              d:
                "M22.2,17.7l-4-2c-0.5-0.3-0.8-0.8-0.8-1.3v-1.6c0.1-0.1,0.2-0.3,0.4-0.5c0.5-0.8,0.9-1.6,1.2-2.5\n\t\t\t\tc0.5-0.2,0.9-0.6,0.9-1.2V7c0-0.4-0.2-0.7-0.4-0.9V3.7c0,0,0.5-3.7-4.6-3.7c-5,0-4.6,3.7-4.6,3.7v2.4C10.1,6.3,9.9,6.7,9.9,7v1.7\n\t\t\t\tc0,0.4,0.2,0.8,0.6,1c0.4,1.8,1.5,3.1,1.5,3.1v1.5c0,0.6-0.3,1.1-0.8,1.3l-3.7,2c-1.1,0.6-1.7,1.7-1.7,2.9v1.3H24v-1.3\n\t\t\t\tC24,19.4,23.3,18.3,22.2,17.7z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticStyle: { opacity: "0.5" },
            attrs: {
              d:
                "M7.5,17.7l2.5-1.3c0,0,0,0,0,0l1.2-0.7c0.5-0.3,0.8-0.8,0.8-1.3v-1.5c0,0-0.4-0.5-0.9-1.4l0,0c0,0,0,0,0,0\n\t\t\t\tc-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.4c0,0,0-0.1,0-0.1\n\t\t\t\tc0-0.1-0.1-0.3-0.1-0.4c-0.3-0.2-0.6-0.6-0.6-1V7c0-0.4,0.2-0.7,0.4-0.9V3.8C9.8,3.3,8.9,2.9,7.4,2.9c-4,0-4.1,3.3-4.1,3.3v2.1\n\t\t\t\tC3.1,8.5,2.9,8.8,2.9,9.1v1.4c0,0.4,0.2,0.7,0.5,0.9c0.4,1.6,1.6,2.7,1.6,2.7v1.3c0,0.5-0.3,0.9-0.7,1.1l-2.8,1.7\n\t\t\t\tC0.6,18.8,0,19.7,0,20.8v1.2h5.8v-1.3C5.8,19.4,6.5,18.3,7.5,17.7z"
            }
          })
        ]),
        _vm._v(" "),
        _c("symbol", { attrs: { id: "icon-file", viewBox: "0 0 20 26.8" } }, [
          _c("title", [_vm._v("file")]),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M2.3,0C1,0,0,1,0,2.3v22.2c0,1.2,1,2.3,2.3,2.3h15.4c1.2,0,2.3-1,2.3-2.3V6l-6-6H2.3z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticStyle: { opacity: "0.1", fill: "#000" },
            attrs: { d: "M13.9,3.7V0l6,6h-3.7C14.9,6,13.9,5,13.9,3.7z" }
          })
        ]),
        _vm._v(" "),
        _c(
          "symbol",
          { attrs: { id: "icon-padlock", viewBox: "0 0 24 33.6" } },
          [
            _c("title", [_vm._v("padlock")]),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M23,13.5h-1.7V9.4C21.4,4.2,17.2,0,12,0C6.8,0,2.6,4.2,2.6,9.4v4.1H1c-0.5,0-1,0.4-1,1v18.2c0,0.5,0.4,1,1,1H23c0.5,0,1-0.4,1-1V14.4C24,13.9,23.6,13.5,23,13.5z M13.5,24.5v3.9c0,0.3-0.3,0.6-0.6,0.6h-1.8c-0.3,0-0.6-0.3-0.6-0.6v-3.9c-0.7-0.5-1.1-1.3-1.1-2.1c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6C14.6,23.3,14.2,24.1,13.5,24.5z M16.9,13.5H7.1V9.4c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9V13.5z"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("symbol", { attrs: { id: "icon-cloud", viewBox: "0 0 24 22.2" } }, [
          _c("title", [_vm._v("cloud")]),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M19.5,5.8c-0.3-1.5-1-2.9-2.2-4c-1.3-1.2-3-1.8-4.7-1.8C11.3,0,10,0.4,8.9,1.1C8,1.7,7.2,2.5,6.6,3.5c-0.2,0-0.5-0.1-0.7-0.1c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.5,0.1,0.8C0.8,9,0,10.6,0,12.3C0,13.6,0.5,15,1.4,16c1,1.1,2.2,1.7,3.6,1.8c0,0,0,0,0,0h4.2c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H5c-2-0.1-3.7-2-3.7-4.2c0-1.4,0.8-2.7,2-3.4c0.3-0.2,0.4-0.5,0.3-0.8C3.5,7.8,3.4,7.5,3.4,7.2c0-1.4,1.1-2.5,2.5-2.5c0.3,0,0.6,0,0.8,0.1c0.3,0.1,0.7,0,0.8-0.3c0.9-2,2.9-3.2,5.1-3.2c2.9,0,5.3,2.2,5.6,5.1c0,0.3,0.3,0.5,0.6,0.6c2.2,0.4,3.9,2.4,3.9,4.7c0,2.5-1.9,4.6-4.3,4.8h-3.6c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h3.7c0,0,0,0,0,0c1.5-0.1,2.9-0.8,4-2c1-1.1,1.6-2.6,1.6-4.1C24,8.9,22.1,6.5,19.5,5.8z M16,12.9c0.3-0.3,0.3-0.7,0-0.9l-3.5-3.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2L8,12c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l2.4-2.4v11c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-11l2.4,2.4C15.3,13.2,15.7,13.2,16,12.9z"
            }
          })
        ]),
        _vm._v(" "),
        _c("symbol", { attrs: { id: "icon-globe", viewBox: "0 0 24 24" } }, [
          _c("title", [_vm._v("globe")]),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M9.7,4.3l0.6,0.2V3.7l0.2-0.2L10.7,4l0.4,0.5L11,4.8l-0.7,0.2V4.5L9.7,4.9L9.5,4.7L9.7,4.3z M1,11.7c0.1-2.3,0.8-4.5,2.1-6.2c0,0,0.1,0,0.1,0c0,0.2-0.2,0.2,0,0.6c0.3,0.5,0,0.8,0,0.8S2.6,7.4,2.5,7.5C2.3,7.6,2,8.1,2.2,7.9C2.4,7.8,2.7,7.7,2.5,8C2.3,8.3,1.9,8.9,1.8,9.1c-0.1,0.2-0.5,0.7-0.5,1s-0.2,0.7-0.1,1C1.2,11.1,1.1,11.6,1,11.7z M5.3,18.6l-0.2,0.6l0.2,0.5c0,0-0.2,0.2-0.4,0.2c-0.2,0-0.2,0.1-0.4,0.1c-1.6-1.5-2.7-3.4-3.2-5.6c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.2,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.5,0.3s0.2,0,0.5,0.4C3.4,16,3.3,16,3.4,16.2c0.1,0.2,0.2,0.4,0.3,0.5C3.8,16.9,4,16.9,4.2,17c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.5,0.4,0.7,0.4c0.2,0,0.2,0.5,0.2,0.5L5.3,18.6z M7,2.7C6.4,3.3,6.6,3.1,6.4,3.3C6.3,3.4,6.3,3.5,6.1,3.7C5.8,3.9,5.6,4.1,5.6,4.1L5.2,4.3L4.8,4.1c0,0-0.3,0.1-0.3,0c0,0,0-0.1,0-0.1c1-0.9,2.2-1.7,3.5-2.2C8,1.9,7.8,2.1,7.8,2.1S7.5,2.1,7,2.7z M19.6,17.5c0,0.2-0.1,0.5-0.2,0.6c0,0.2-0.2,0.5-0.4,0.6c-0.1,0.1-0.3,0.3-0.5,0.4c-0.1,0-0.2-0.3-0.2-0.5c0-0.2,0.2-0.6,0.2-0.6s0-0.2,0.1-0.4c0-0.2,0.5-0.4,0.5-0.4l0.3-0.6c0,0,0,0.2,0,0.3C19.7,17,19.6,17.4,19.6,17.5z M19.7,13.6c-0.1,0.1-0.3,0.5-0.5,0.6c-0.1,0.2-0.3,0.4-0.5,0.6c-0.2,0.2-0.2,0.4-0.4,0.6C18.2,15.6,18,16,18,16s0.1,0.8,0.1,1c0,0.2-0.3,0.6-0.3,0.6L17.5,18L17,18.6l0,0.6c0,0-0.4,0.3-0.6,0.5c-0.2,0.2-0.2,0.3-0.3,0.5c-0.2,0.2-0.6,0.5-0.8,0.5c-0.2,0-0.9,0.2-0.9,0.2v-0.4L14.3,20c0,0-0.2-0.5-0.4-0.7c-0.1-0.2-0.1-0.4-0.3-0.6c-0.2-0.2-0.3-0.4-0.3-0.5c0-0.1,0-0.5,0-0.5s0.2-0.5,0.2-0.6c0.1-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.6-0.1-0.7c0-0.1-0.3-0.3-0.5-0.5c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.2-0.1-0.5-0.1-0.8c0-0.3-0.4-0.1-0.6,0c-0.2,0.1-0.4-0.1-0.4-0.3c0-0.2-0.5,0-0.7,0.1c-0.3,0.2-0.6,0.2-1,0.3c-0.3,0.1-0.5-0.1-0.5-0.1S9.2,13.8,9,13.7c-0.2-0.1-0.4-0.4-0.6-0.6c-0.2-0.2-0.6-0.8-0.6-1.1c0-0.2,0-0.4,0-0.7c0-0.3,0-0.5,0-0.7c0-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.6-0.5,0.7-0.5C8.9,9.4,9.2,9.2,9.2,9c0-0.2,0.2-0.2,0.2-0.4C9.5,8.4,9.8,8,10.2,8.2c0,0,0.3,0,0.5-0.1c0.1,0,0.5-0.2,0.6-0.2c0.2-0.1,0.6-0.1,0.6-0.1s0.3,0.1,0.4,0.1c0.1,0,0.5-0.1,0.5-0.1S13,8.4,13,8.5c0,0.1,0.1,0.2,0.3,0.3c0.2,0.1,1.2,0.3,1.6,0c0.1-0.1,0.4,0.1,0.4,0.1s1,0.2,1.2,0.3c0.2,0.1,0.5,0.2,0.5,0.3c0.1,0.1,0.4,0.5,0.4,0.6c0,0.1,0.2,0.6,0.3,0.7c0,0.2,0.2,0.6,0.3,0.8c0.1,0.2,0.8,1.1,1.1,1.5l0.7-0.1C19.9,13.1,19.8,13.5,19.7,13.6z M22.7,12.1c0-0.2-0.3-0.7-0.3-0.7S22.2,11,22,10.9c-0.2-0.1-0.3-0.3-0.6-0.5c-0.3-0.2-0.4-0.2-0.7-0.2c-0.2,0-0.5-0.3-0.8-0.5c-0.3-0.2-0.3-0.1-0.3-0.1s0.3,0.5,0.3,0.6s0.4,0.3,0.7,0.2c0,0,0.2,0.5,0.4,0.6s0,0.2-0.3,0.4c-0.2,0.2-0.2,0.1-0.3,0.2c-0.1,0.1-0.5,0.3-0.7,0.4c-0.1,0.1-0.6,0.3-0.9,0.1c-0.1-0.1-0.1-0.4-0.2-0.5c-0.1-0.2-0.9-1.4-1.4-2c-0.1-0.1-0.2-0.4-0.4-0.5c-0.1-0.1,0.3-0.1,0.3-0.1s0-0.3,0-0.5c0-0.2,0-0.5,0-0.5s-0.4,0.2-0.5,0.3c-0.1,0.1-0.2-0.2-0.4-0.4c-0.2-0.2-0.3-0.5-0.4-0.7c0-0.2,0.2-0.3,0.2-0.3l0.4-0.2c0,0,0.5-0.1,0.7,0c0.3,0,0.7,0.1,0.7,0.1s0.1-0.3,0-0.4c-0.2-0.1-0.5-0.3-0.7-0.3c-0.2,0,0.1-0.2,0.3-0.4l-0.5-0.1c0,0-0.4,0.2-0.5,0.2c-0.1,0-0.3,0.1-0.5,0.3C16,6.6,16.2,6.9,16,6.9c-0.2,0.1-0.3,0.1-0.4,0.2c-0.1,0-0.5,0-0.5,0c-0.4,0-0.2,0.4,0,0.5l-0.3-0.4l-0.2-0.6c0,0-0.4-0.2-0.5-0.3c-0.2-0.1-0.7-0.4-0.7-0.4l0,0.4l0.5,0.5l0,0l0.3,0.3l-0.5,0V6.9c-0.8-0.1-0.4-0.3-0.5-0.3c-0.1-0.1-0.4-0.3-0.4-0.3s-0.5,0.1-0.6,0.1c-0.1,0-0.2,0.2-0.4,0.2c-0.2,0.1-0.4,0.2-0.4,0.3s-0.4,0.5-0.5,0.7c-0.2,0.2-0.5,0.1-0.6,0.1c-0.1,0-0.7-0.2-0.7-0.2V6.9c0,0,0.1-0.4,0-0.5l0.4-0.1l0.6-0.1l0.2-0.1l0.3-0.3c0,0-0.3-0.2-0.1-0.5c0.1-0.1,0.5-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.4-0.2s0.3-0.2,0.6-0.5c0,0,0.2-0.1,0.5-0.2c0,0,0.7,0.6,0.8,0.6s0.6-0.3,0.6-0.3s0.1-0.4,0.1-0.5c0-0.1-0.2-0.5-0.2-0.5S14,3.5,13.8,3.7C13.7,3.8,13.6,4,13.6,4S13,4,13,3.9c0-0.1-0.1-0.3-0.2-0.5c0-0.1-0.4-0.1-0.6,0c-0.2,0.1,0-0.4,0-0.4s0.2-0.3,0.4-0.3c0.2,0,0.5-0.2,0.7-0.3C13.5,2.3,14,2,14.2,2c0.2,0,0.5,0,0.6,0c0.1,0,0.6,0,0.6,0L16.3,2c0,0,0.7,0.3,0.5,0.5c0,0,0.3,0.2,0.4,0.3c0.1,0.1,0.4-0.1,0.6-0.2C20.9,4.6,23,8.1,23,12c0,0.2,0,0.4,0,0.6C22.9,12.4,22.7,12.2,22.7,12.1z M9.9,4.5L9.9,4.5L9.9,4.5L9.9,4.5z"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { ref: "folder", staticClass: "folder folder--ardra" }, [
        _c("div", { staticClass: "folder__feedback" }),
        _vm._v(" "),
        _c("div", { staticClass: "folder__preview folder__preview--thumbs" }, [
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "folder__thumb",
            attrs: { src: "https://www.fillmurray.com/640/360" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "folder__icon" }, [
          _c(
            "div",
            { staticClass: "folder__icon-img folder__icon-img--back" },
            [
              _c("svg", { staticClass: "folder__icon-svg" }, [
                _c("use", { attrs: { "xlink:href": "#icon-folderback" } })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "folder__icon-img folder__icon-img--cover" },
            [
              _c("svg", { staticClass: "folder__icon-svg" }, [
                _c("use", { attrs: { "xlink:href": "#icon-foldercover" } })
              ]),
              _vm._v(" "),
              _c(
                "svg",
                { staticClass: "folder__icon-svg folder__icon-svg--deco" },
                [_c("use", { attrs: { "xlink:href": "#icon-globe" } })]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "folder__caption" }, [_vm._v("Ardra")])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "w-1/6 h-40 px-2 mb-3" }, [
      _vm._v("\n        IMAGE\n        ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container card relative" }, [
    _c(
      "div",
      {
        staticClass: "p-3 flex items-center justify-between border-b border-50"
      },
      [
        _c("div", { staticClass: "w-full flex flex-wrap" }, [
          _c("div", { staticClass: "w-2/3 flex flex-wrap justify-start" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-default btn-small btn-primary text-white mr-3",
                on: {
                  click: function($event) {
                    return _vm.$emit("uploadComplete")
                  }
                }
              },
              [_vm._v("Reload")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-default btn-small btn-primary text-white mr-3",
                attrs: { id: "UppyModalOpenerBtn" }
              },
              [_vm._v("\n                    Upload\n                ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-default btn-small btn-primary text-white mr-3",
                on: { click: _vm.openFormFolder }
              },
              [_vm._v("Create folder")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/3 flex flex-wrap justify-end" }, [
            _c("div", { staticClass: "relative z-50 w-full max-w-xs" }, [
              _c("div", { staticClass: "relative" }, [
                _c("div", { staticClass: "relative" }, [
                  _c(
                    "svg",
                    {
                      staticClass:
                        "fill-current absolute search-icon-center ml-3 text-70",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        "aria-labelledby": "search",
                        role: "presentation"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "nonzero",
                          d:
                            "M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search"
                      }
                    ],
                    staticClass:
                      "pl-search form-control form-input form-input-bordered w-full",
                    attrs: {
                      dusk: "filemanager-search",
                      type: "search",
                      placeholder: "Search"
                    },
                    domProps: { value: _vm.search },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        },
                        _vm.searchItems
                      ]
                    }
                  })
                ])
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "p-3" },
      [
        _c(
          "nav",
          { staticClass: "bg-grey-light rounded font-sans w-full m-4" },
          [
            _c(
              "ol",
              { staticClass: "list-reset flex text-grey-dark" },
              [
                _vm._l(_vm.folderPathArray, function(pathArray, index) {
                  return [
                    _c("li", [
                      _c(
                        "span",
                        { staticClass: "text-blue font-bold cursor-pointer" },
                        [_vm._v(_vm._s(pathArray.name))]
                      )
                    ]),
                    _vm._v(" "),
                    index !== _vm.folderPathArray.length - 1
                      ? _c("li", [
                          _c("span", { staticClass: "mx-2" }, [_vm._v("/")])
                        ])
                      : _vm._e()
                  ]
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c("div", { staticClass: "px-2" }, [
            _c(
              "div",
              { staticClass: "flex flex-wrap mx-2" },
              [
                _vm._l(_vm.folderFolders, function(childFolder) {
                  return _c("folder-card", {
                    key: childFolder.id,
                    attrs: { folder: childFolder }
                  })
                }),
                _vm._v(" "),
                _vm._l(_vm.folderMedias, function(media) {
                  return _c("image-card", {
                    key: media.id,
                    attrs: { media: media }
                  })
                })
              ],
              2
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("heading", { staticClass: "mb-6" }, [_vm._v("Medias manager")]),
      _vm._v(" "),
      _c("medias-manager", {
        attrs: { folder: _vm.folder },
        on: {
          uploadComplete: _vm.reloadInfoFolder,
          newFolder: _vm.reloadInfoFolder
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-sweetalert2/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-sweetalert2/dist/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var VueSweetalert2 = (function () {
    function VueSweetalert2() {
    }
    VueSweetalert2.install = function (Vue, options) {
        options = __assign({
            includeCss: true
        }, options);
        if (options.includeCss !== false) {
            __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.css */ "./node_modules/sweetalert2/dist/sweetalert2.min.css");
        }
        var _swal = options ? sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.mixin(options).fire.bind(sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0___default.a) : sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.fire.bind(sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_0___default.a);
        Vue['swal'] = _swal;
        if (!Vue.prototype.hasOwnProperty('$swal')) {
            Vue.prototype.$swal = _swal;
        }
    };
    return VueSweetalert2;
}());
/* harmony default export */ __webpack_exports__["default"] = (VueSweetalert2);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/wildcard/index.js":
/*!****************************************!*\
  !*** ./node_modules/wildcard/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true */


/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

  ## Usage

  It works with strings:

  <<< examples/strings.js

  Arrays:

  <<< examples/arrays.js

  Objects (matching against keys):

  <<< examples/objects.js

  While the library works in Node, if you are are looking for file-based
  wildcard matching then you should have a look at:

  <https://github.com/isaacs/node-glob>
**/

function WildcardMatcher(text, separator) {
  this.text = text = text || '';
  this.hasWild = ~text.indexOf('*');
  this.separator = separator;
  this.parts = text.split(separator);
}

WildcardMatcher.prototype.match = function(input) {
  var matches = true;
  var parts = this.parts;
  var ii;
  var partsCount = parts.length;
  var testParts;

  if (typeof input == 'string' || input instanceof String) {
    if (!this.hasWild && this.text != input) {
      matches = false;
    } else {
      testParts = (input || '').split(this.separator);
      for (ii = 0; matches && ii < partsCount; ii++) {
        if (parts[ii] === '*')  {
          continue;
        } else if (ii < testParts.length) {
          matches = parts[ii] === testParts[ii];
        } else {
          matches = false;
        }
      }

      // If matches, then return the component parts
      matches = matches && testParts;
    }
  }
  else if (typeof input.splice == 'function') {
    matches = [];

    for (ii = input.length; ii--; ) {
      if (this.match(input[ii])) {
        matches[matches.length] = input[ii];
      }
    }
  }
  else if (typeof input == 'object') {
    matches = {};

    for (var key in input) {
      if (this.match(key)) {
        matches[key] = input[key];
      }
    }
  }

  return matches;
};

module.exports = function(text, test, separator) {
  var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
  if (typeof test != 'undefined') {
    return matcher.match(test);
  }

  return matcher;
};


/***/ }),

/***/ "./resources/js/Classes/FolderFx.js":
/*!******************************************!*\
  !*** ./resources/js/Classes/FolderFx.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FolderFx; });
/* harmony import */ var _anime_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anime.min */ "./resources/js/anime.min.js");
/* harmony import */ var _anime_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_anime_min__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FolderFx =
/*#__PURE__*/
function () {
  function FolderFx(el) {
    _classCallCheck(this, FolderFx);

    this.DOM = {};
    this.DOM.el = el;
    this.DOM.wrapper = this.DOM.el.querySelector('.folder__icon');
    this.DOM.back = this.DOM.wrapper.querySelector('.folder__icon-img--back');
    this.DOM.cover = this.DOM.wrapper.querySelector('.folder__icon-img--cover');
    this.DOM.feedback = this.DOM.el.querySelector('.folder__feedback');
    this.DOM.preview = this.DOM.el.querySelector('.folder__preview');
    this.DOM.previewElems = this.DOM.preview.children;
    this.totalPreview = this.DOM.previewElems.length;

    this._initEvents();
  }

  _createClass(FolderFx, [{
    key: "_initEvents",
    value: function _initEvents() {
      var self = this;

      this._mouseenterFn = function () {
        self.intimeout = setTimeout(function () {
          self._removeAnimeTargets();

          self._in();
        }, 75);
      };

      this._mouseleaveFn = function () {
        clearTimeout(self.intimeout);

        self._removeAnimeTargets();

        self._out();
      };

      this.DOM.wrapper.addEventListener('mouseenter', this._mouseenterFn);
      this.DOM.wrapper.addEventListener('mouseleave', this._mouseleaveFn);
    }
  }, {
    key: "_removeAnimeTargets",
    value: function _removeAnimeTargets() {
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.preview);
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.previewElems);
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.wrapper);
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.cover);
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.el);

      if (this.DOM.feedback) {
        _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.feedback);
        this.DOM.feedback.style.opacity = 0;
      }

      if (this.DOM.letters) {
        _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.DOM.letters);
      }
    }
  }, {
    key: "_in",
    value: function _in() {
      var self = this;
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: this.DOM.previewElems,
        duration: 500,
        easing: [0.1, 1, 0.3, 1],
        translateY: function translateY(t, i, c) {
          var radius = _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.random(110, 120);
          return Math.round(radius * Math.sin(2 * (i + 1) * Math.PI / c)) + 'px';
        },
        translateX: function translateX(t, i, c) {
          var radius = _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.random(110, 120);
          return Math.round(radius * Math.cos(2 * (i + 1) * Math.PI / c)) + 'px';
        },
        rotate: function rotate(t, i, c) {
          return [0, _anime_min__WEBPACK_IMPORTED_MODULE_0___default.a.random(-3, 3) + 'deg'];
        },
        scale: [0.4, 1],
        opacity: {
          value: 1,
          duration: 10,
          easing: 'linear'
        }
      });
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: this.DOM.wrapper,
        duration: 500,
        easing: [0.1, 1, 0.3, 1],
        scale: [1, 0.8]
      });
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: this.DOM.feedback,
        easing: [0.1, 1, 0.3, 1],
        opacity: [{
          value: 1,
          duration: 10
        }, {
          value: 0,
          duration: 400,
          delay: 50
        }],
        scale: {
          value: [1, 7],
          duration: 900
        }
      });
    }
  }, {
    key: "_out",
    value: function _out() {
      var self = this;
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: this.DOM.previewElems,
        duration: 500,
        easing: [0.1, 1, 0.3, 1],
        translateY: 0,
        translateX: 0,
        rotate: 0,
        scale: [1, 0.4],
        opacity: {
          value: 0,
          duration: 250,
          delay: 250,
          easing: 'linear'
        }
      });
      _anime_min__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: this.DOM.wrapper,
        duration: 500,
        easing: [0.1, 1, 0.3, 1],
        scale: [0.8, 1]
      });
    }
  }]);

  return FolderFx;
}();



/***/ }),

/***/ "./resources/js/anime.min.js":
/*!***********************************!*\
  !*** ./resources/js/anime.min.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = this;

(function (u, r) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  function u(a) {
    if (!g.col(a)) try {
      return document.querySelectorAll(a);
    } catch (b) {}
  }

  function r(a) {
    return a.reduce(function (a, c) {
      return a.concat(g.arr(c) ? r(c) : c);
    }, []);
  }

  function v(a) {
    if (g.arr(a)) return a;
    g.str(a) && (a = u(a) || a);
    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }

  function E(a, b) {
    return a.some(function (a) {
      return a === b;
    });
  }

  function z(a) {
    var b = {},
        c;

    for (c in a) {
      b[c] = a[c];
    }

    return b;
  }

  function F(a, b) {
    var c = z(a),
        d;

    for (d in a) {
      c[d] = b.hasOwnProperty(d) ? b[d] : a[d];
    }

    return c;
  }

  function A(a, b) {
    var c = z(a),
        d;

    for (d in b) {
      c[d] = g.und(a[d]) ? b[d] : a[d];
    }

    return c;
  }

  function R(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, h) {
      return b + b + c + c + h + h;
    });
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(b[1], 16);
    var c = parseInt(b[2], 16),
        b = parseInt(b[3], 16);
    return "rgb(" + a + "," + c + "," + b + ")";
  }

  function S(a) {
    function b(a, b, c) {
      0 > c && (c += 1);
      1 < c && --c;
      return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
    }

    var c = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
    a = parseInt(c[1]) / 360;
    var d = parseInt(c[2]) / 100,
        c = parseInt(c[3]) / 100;
    if (0 == d) d = c = a = c;else {
      var e = .5 > c ? c * (1 + d) : c + d - c * d,
          k = 2 * c - e,
          d = b(k, e, a + 1 / 3),
          c = b(k, e, a);
      a = b(k, e, a - 1 / 3);
    }
    return "rgb(" + 255 * d + "," + 255 * c + "," + 255 * a + ")";
  }

  function w(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2];
  }

  function T(a) {
    if (-1 < a.indexOf("translate")) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }

  function G(a, b) {
    return g.fnc(a) ? a(b.target, b.id, b.total) : a;
  }

  function B(a, b) {
    if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }

  function H(a, b) {
    if (g.dom(a) && E(U, b)) return "transform";
    if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";
    if (g.dom(a) && "transform" !== b && B(a, b)) return "css";
    if (null != a[b]) return "object";
  }

  function V(a, b) {
    var c = T(b),
        c = -1 < b.indexOf("scale") ? 1 : 0 + c;
    a = a.style.transform;
    if (!a) return c;

    for (var d = [], e = [], k = [], h = /(\w+)\((.+?)\)/g; d = h.exec(a);) {
      e.push(d[1]), k.push(d[2]);
    }

    a = k.filter(function (a, c) {
      return e[c] === b;
    });
    return a.length ? a[0] : c;
  }

  function I(a, b) {
    switch (H(a, b)) {
      case "transform":
        return V(a, b);

      case "css":
        return B(a, b);

      case "attribute":
        return a.getAttribute(b);
    }

    return a[b] || 0;
  }

  function J(a, b) {
    var c = /^(\*=|\+=|-=)/.exec(a);
    if (!c) return a;
    b = parseFloat(b);
    a = parseFloat(a.replace(c[0], ""));

    switch (c[0][0]) {
      case "+":
        return b + a;

      case "-":
        return b - a;

      case "*":
        return b * a;
    }
  }

  function C(a) {
    return g.obj(a) && a.hasOwnProperty("totalLength");
  }

  function W(a, b) {
    function c(c) {
      c = void 0 === c ? 0 : c;
      return a.el.getPointAtLength(1 <= b + c ? b + c : 0);
    }

    var d = c(),
        e = c(-1),
        k = c(1);

    switch (a.property) {
      case "x":
        return d.x;

      case "y":
        return d.y;

      case "angle":
        return 180 * Math.atan2(k.y - e.y, k.x - e.x) / Math.PI;
    }
  }

  function K(a, b) {
    var c = /-?\d*\.?\d+/g;
    a = C(a) ? a.totalLength : a;
    if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? R(a) : g.hsl(a) ? S(a) : void 0;else {
      var d = w(a);
      a = d ? a.substr(0, a.length - d.length) : a;
      b = b ? a + b : a;
    }
    b += "";
    return {
      original: b,
      numbers: b.match(c) ? b.match(c).map(Number) : [0],
      strings: b.split(c)
    };
  }

  function X(a, b) {
    return b.reduce(function (b, d, e) {
      return b + a[e - 1] + d;
    });
  }

  function L(a) {
    return (a ? r(g.arr(a) ? a.map(v) : v(a)) : []).filter(function (a, c, d) {
      return d.indexOf(a) === c;
    });
  }

  function Y(a) {
    var b = L(a);
    return b.map(function (a, d) {
      return {
        target: a,
        id: d,
        total: b.length
      };
    });
  }

  function Z(a, b) {
    var c = z(b);

    if (g.arr(a)) {
      var d = a.length;
      2 !== d || g.obj(a[0]) ? g.fnc(b.duration) || (c.duration = b.duration / d) : a = {
        value: a
      };
    }

    return v(a).map(function (a, c) {
      c = c ? 0 : b.delay;
      a = g.obj(a) && !C(a) ? a : {
        value: a
      };
      g.und(a.delay) && (a.delay = c);
      return a;
    }).map(function (a) {
      return A(a, c);
    });
  }

  function aa(a, b) {
    var c = {},
        d;

    for (d in a) {
      var e = G(a[d], b);
      g.arr(e) && (e = e.map(function (a) {
        return G(a, b);
      }), 1 === e.length && (e = e[0]));
      c[d] = e;
    }

    c.duration = parseFloat(c.duration);
    c.delay = parseFloat(c.delay);
    return c;
  }

  function ba(a) {
    return g.arr(a) ? x.apply(this, a) : M[a];
  }

  function ca(a, b) {
    var c;
    return a.tweens.map(function (d) {
      d = aa(d, b);
      var e = d.value,
          k = I(b.target, a.name),
          h = c ? c.to.original : k,
          h = g.arr(e) ? e[0] : h,
          n = J(g.arr(e) ? e[1] : e, h),
          k = w(n) || w(h) || w(k);
      d.isPath = C(e);
      d.from = K(h, k);
      d.to = K(n, k);
      d.start = c ? c.end : a.offset;
      d.end = d.start + d.delay + d.duration;
      d.easing = ba(d.easing);
      d.elasticity = (1E3 - Math.min(Math.max(d.elasticity, 1), 999)) / 1E3;
      g.col(d.from.original) && (d.round = 1);
      return c = d;
    });
  }

  function da(a, b) {
    return r(a.map(function (a) {
      return b.map(function (b) {
        var c = H(a.target, b.name);

        if (c) {
          var d = ca(b, a);
          b = {
            type: c,
            property: b.name,
            animatable: a,
            tweens: d,
            duration: d[d.length - 1].end,
            delay: d[0].delay
          };
        } else b = void 0;

        return b;
      });
    })).filter(function (a) {
      return !g.und(a);
    });
  }

  function N(a, b, c) {
    var d = "delay" === a ? Math.min : Math.max;
    return b.length ? d.apply(Math, b.map(function (b) {
      return b[a];
    })) : c[a];
  }

  function ea(a) {
    var b = F(fa, a),
        c = F(ga, a),
        d = Y(a.targets),
        e = [],
        g = A(b, c),
        h;

    for (h in a) {
      g.hasOwnProperty(h) || "targets" === h || e.push({
        name: h,
        offset: g.offset,
        tweens: Z(a[h], c)
      });
    }

    a = da(d, e);
    return A(b, {
      animatables: d,
      animations: a,
      duration: N("duration", a, c),
      delay: N("delay", a, c)
    });
  }

  function m(a) {
    function b() {
      return window.Promise && new Promise(function (a) {
        return P = a;
      });
    }

    function c(a) {
      return f.reversed ? f.duration - a : a;
    }

    function d(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        var g = d[b],
            h = g.animatable,
            n = g.tweens;
        e.tween = n.filter(function (b) {
          return a < b.end;
        })[0] || n[n.length - 1];
        e.isPath$0 = e.tween.isPath;
        e.round = e.tween.round;
        e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
        n = X(e.tween.to.numbers.map(function (a) {
          return function (b, c) {
            c = a.isPath$0 ? 0 : a.tween.from.numbers[c];
            b = c + a.eased * (b - c);
            a.isPath$0 && (b = W(a.tween.value, b));
            a.round && (b = Math.round(b * a.round) / a.round);
            return b;
          };
        }(e)), e.tween.to.strings);
        ha[g.type](h.target, g.property, n, c, h.id);
        g.currentValue = n;
        b++;
        e = {
          isPath$0: e.isPath$0,
          tween: e.tween,
          eased: e.eased,
          round: e.round
        };
      }

      if (c) for (var k in c) {
        D || (D = B(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[D] = c[k].join(" ");
      }
      f.currentTime = a;
      f.progress = a / f.duration * 100;
    }

    function e(a) {
      if (f[a]) f[a](f);
    }

    function g() {
      f.remaining && !0 !== f.remaining && f.remaining--;
    }

    function h(a) {
      var h = f.duration,
          k = f.offset,
          m = f.delay,
          O = f.currentTime,
          p = f.reversed,
          q = c(a),
          q = Math.min(Math.max(q, 0), h);
      q > k && q < h ? (d(q), !f.began && q >= m && (f.began = !0, e("begin")), e("run")) : (q <= k && 0 !== O && (d(0), p && g()), q >= h && O !== h && (d(h), p || g()));
      a >= h && (f.remaining ? (t = n, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), P(), Q = b(), f.completed || (f.completed = !0, e("complete"))), l = 0);
      if (f.children) for (a = f.children, h = 0; h < a.length; h++) {
        a[h].seek(q);
      }
      e("update");
    }

    a = void 0 === a ? {} : a;
    var n,
        t,
        l = 0,
        P = null,
        Q = b(),
        f = ea(a);

    f.reset = function () {
      var a = f.direction,
          b = f.loop;
      f.currentTime = 0;
      f.progress = 0;
      f.paused = !0;
      f.began = !1;
      f.completed = !1;
      f.reversed = "reverse" === a;
      f.remaining = "alternate" === a && 1 === b ? 2 : b;
    };

    f.tick = function (a) {
      n = a;
      t || (t = n);
      h((l + n - t) * m.speed);
    };

    f.seek = function (a) {
      h(c(a));
    };

    f.pause = function () {
      var a = p.indexOf(f);
      -1 < a && p.splice(a, 1);
      f.paused = !0;
    };

    f.play = function () {
      f.paused && (f.paused = !1, t = 0, l = f.completed ? 0 : c(f.currentTime), p.push(f), y || ia());
    };

    f.reverse = function () {
      f.reversed = !f.reversed;
      t = 0;
      l = c(f.currentTime);
    };

    f.restart = function () {
      f.pause();
      f.reset();
      f.play();
    };

    f.finished = Q;
    f.reset();
    f.autoplay && f.play();
    return f;
  }

  var fa = {
    update: void 0,
    begin: void 0,
    run: void 0,
    complete: void 0,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    offset: 0
  },
      ga = {
    duration: 1E3,
    delay: 0,
    easing: "easeOutElastic",
    elasticity: 500,
    round: 0
  },
      U = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
      D,
      g = {
    arr: function arr(a) {
      return Array.isArray(a);
    },
    obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    svg: function svg(a) {
      return a instanceof SVGElement;
    },
    dom: function dom(a) {
      return a.nodeType || g.svg(a);
    },
    str: function str(a) {
      return "string" === typeof a;
    },
    fnc: function fnc(a) {
      return "function" === typeof a;
    },
    und: function und(a) {
      return "undefined" === typeof a;
    },
    hex: function hex(a) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function rgb(a) {
      return /^rgb/.test(a);
    },
    hsl: function hsl(a) {
      return /^hsl/.test(a);
    },
    col: function col(a) {
      return g.hex(a) || g.rgb(a) || g.hsl(a);
    }
  },
      x = function () {
    function a(a, c, d) {
      return (((1 - 3 * d + 3 * c) * a + (3 * d - 6 * c)) * a + 3 * c) * a;
    }

    return function (b, c, d, e) {
      if (0 <= b && 1 >= b && 0 <= d && 1 >= d) {
        var g = new Float32Array(11);
        if (b !== c || d !== e) for (var h = 0; 11 > h; ++h) {
          g[h] = a(.1 * h, b, d);
        }
        return function (h) {
          if (b === c && d === e) return h;
          if (0 === h) return 0;
          if (1 === h) return 1;

          for (var k = 0, l = 1; 10 !== l && g[l] <= h; ++l) {
            k += .1;
          }

          --l;
          var l = k + (h - g[l]) / (g[l + 1] - g[l]) * .1,
              n = 3 * (1 - 3 * d + 3 * b) * l * l + 2 * (3 * d - 6 * b) * l + 3 * b;

          if (.001 <= n) {
            for (k = 0; 4 > k; ++k) {
              n = 3 * (1 - 3 * d + 3 * b) * l * l + 2 * (3 * d - 6 * b) * l + 3 * b;
              if (0 === n) break;
              var m = a(l, b, d) - h,
                  l = l - m / n;
            }

            h = l;
          } else if (0 === n) h = l;else {
            var l = k,
                k = k + .1,
                f = 0;

            do {
              m = l + (k - l) / 2, n = a(m, b, d) - h, 0 < n ? k = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++f);

            h = m;
          }

          return a(h, c, e);
        };
      }
    };
  }(),
      M = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }

    var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        c = {
      In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a],
      Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }],
      InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }]
    },
        d = {
      linear: x(.25, .25, .75, .75)
    },
        e = {},
        k;

    for (k in c) {
      e.type = k, c[e.type].forEach(function (a) {
        return function (c, e) {
          d["ease" + a.type + b[e]] = g.fnc(c) ? c : x.apply($jscomp$this, c);
        };
      }(e)), e = {
        type: e.type
      };
    }

    return d;
  }(),
      ha = {
    css: function css(a, b, c) {
      return a.style[b] = c;
    },
    attribute: function attribute(a, b, c) {
      return a.setAttribute(b, c);
    },
    object: function object(a, b, c) {
      return a[b] = c;
    },
    transform: function transform(a, b, c, d, e) {
      d[e] || (d[e] = []);
      d[e].push(b + "(" + c + ")");
    }
  },
      p = [],
      y = 0,
      ia = function () {
    function a() {
      y = requestAnimationFrame(b);
    }

    function b(b) {
      var c = p.length;

      if (c) {
        for (var e = 0; e < c;) {
          p[e] && p[e].tick(b), e++;
        }

        a();
      } else cancelAnimationFrame(y), y = 0;
    }

    return a;
  }();

  m.version = "2.0.1";
  m.speed = 1;
  m.running = p;

  m.remove = function (a) {
    a = L(a);

    for (var b = p.length - 1; 0 <= b; b--) {
      for (var c = p[b], d = c.animations, e = d.length - 1; 0 <= e; e--) {
        E(a, d[e].animatable.target) && (d.splice(e, 1), d.length || c.pause());
      }
    }
  };

  m.getValue = I;

  m.path = function (a, b) {
    var c = g.str(a) ? u(a)[0] : a,
        d = b || 100;
    return function (a) {
      return {
        el: c,
        property: a,
        totalLength: c.getTotalLength() * (d / 100)
      };
    };
  };

  m.setDashoffset = function (a) {
    var b = a.getTotalLength();
    a.setAttribute("stroke-dasharray", b);
    return b;
  };

  m.bezier = x;
  m.easings = M;

  m.timeline = function (a) {
    var b = m(a);
    b.duration = 0;
    b.children = [];

    b.add = function (a) {
      v(a).forEach(function (a) {
        var c = a.offset,
            d = b.duration;
        a.autoplay = !1;
        a.offset = g.und(c) ? d : J(c, d);
        a = m(a);
        a.duration > d && (b.duration = a.duration);
        b.children.push(a);
      });
      return b;
    };

    return b;
  };

  m.random = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };

  return m;
});

/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/*! exports provided: getRoot, getFolder, storeFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFolder", function() { return getFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFolder", function() { return storeFolder; });
function getRoot() {
  return window.axios.get('/vendor/nova-medias-manager/root').then(function (response) {
    return response.data;
  });
}
function getFolder(folderId) {
  return window.axios.get('/vendor/nova-medias-manager/folders/' + folderId).then(function (response) {
    return response.data;
  });
}
function storeFolder(folder) {
  return window.axios.post('/vendor/nova-medias-manager/folders', folder).then(function (response) {
    return response.data;
  });
}

/***/ }),

/***/ "./resources/js/components/FolderCard.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FolderCard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolderCard.vue?vue&type=template&id=70315b6e& */ "./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e&");
/* harmony import */ var _FolderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolderCard.vue?vue&type=script&lang=js& */ "./resources/js/components/FolderCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolderCard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FolderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FolderCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FolderCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FolderCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderCard.vue?vue&type=template&id=70315b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderCard.vue?vue&type=template&id=70315b6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCard_vue_vue_type_template_id_70315b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ImageCard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ImageCard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true& */ "./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true&");
/* harmony import */ var _ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCard.vue?vue&type=script&lang=js& */ "./resources/js/components/ImageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& */ "./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7eac9fb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImageCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImageCard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ImageCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=style&index=0&id=7eac9fb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_7eac9fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageCard.vue?vue&type=template&id=7eac9fb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_7eac9fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MediasManager.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MediasManager.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediasManager.vue?vue&type=template&id=3f6b3843& */ "./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843&");
/* harmony import */ var _MediasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediasManager.vue?vue&type=script&lang=js& */ "./resources/js/components/MediasManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediasManager.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MediasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MediasManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MediasManager.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/MediasManager.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManager.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManager.vue?vue&type=template&id=3f6b3843& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManager.vue?vue&type=template&id=3f6b3843&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManager_vue_vue_type_template_id_3f6b3843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MediasManagerTool.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/MediasManagerTool.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediasManagerTool.vue?vue&type=template&id=cbc6a70a& */ "./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a&");
/* harmony import */ var _MediasManagerTool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediasManagerTool.vue?vue&type=script&lang=js& */ "./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediasManagerTool.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MediasManagerTool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MediasManagerTool.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManagerTool.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManagerTool.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MediasManagerTool.vue?vue&type=template&id=cbc6a70a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediasManagerTool.vue?vue&type=template&id=cbc6a70a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediasManagerTool_vue_vue_type_template_id_cbc6a70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/medias-manager.js":
/*!****************************************!*\
  !*** ./resources/js/medias-manager.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");

Nova.booting(function (Vue, router) {
  Vue.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_0__["default"]);
  router.addRoutes([{
    name: 'medias-manager',
    path: '/medias-manager',
    component: __webpack_require__(/*! ./components/MediasManagerTool */ "./resources/js/components/MediasManagerTool.vue")["default"]
  }]);
});

/***/ }),

/***/ "./resources/sass/medias-manager.scss":
/*!********************************************!*\
  !*** ./resources/sass/medias-manager.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./resources/js/medias-manager.js ./resources/sass/medias-manager.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ltiollier/Desktop/NovaFilemanager/packages/LTiollier/NovaMediasManager/resources/js/medias-manager.js */"./resources/js/medias-manager.js");
module.exports = __webpack_require__(/*! /Users/ltiollier/Desktop/NovaFilemanager/packages/LTiollier/NovaMediasManager/resources/sass/medias-manager.scss */"./resources/sass/medias-manager.scss");


/***/ })

/******/ });