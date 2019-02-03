(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["blacktie-inputs"] = factory();
	else
		root["blacktie-inputs"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ad5a956-vue-loader-template"}!/Users/shawnsandy/devboxes/blacktie/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/shawnsandy/devboxes/blacktie/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/shawnsandy/devboxes/blacktie/node_modules/vue-loader/lib??vue-loader-options!./src/components/input-elm.vue?vue&type=template&id=15328491&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",[_c('div',[_c('label',{attrs:{"label":_vm.name}},[_vm._v(_vm._s(_vm.label))])])],{validationMessage:_vm.validationMessage,isValid:_vm.isValid,hasError:_vm.hasError}),_c('input',_vm._g(_vm._b({class:_vm.elmClass,attrs:{"name":_vm.name,"aria-label":_vm.name},domProps:{"value":_vm.value},on:{"blur":function($event){_vm.validate($event)}}},'input',_vm.$attrs,false),_vm.listeners)),_vm._t("errors",[_c('div',[_c('small',[_vm._v(_vm._s(_vm.validationMessage))])])],{validationMessage:_vm.validationMessage,isValid:_vm.isValid,hasError:_vm.hasError})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input-elm.vue?vue&type=template&id=15328491&

// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./src/mixins/index.js


/**
 * @mixin
 */
/* harmony default export */ var mixins = ({
  inheritAttrs: false,
  props: {
    /**
     * Default from value
     */
    value: {
      default: null
    },

    /**
     * Default name for error class adds a red border on error style `.field-error` styling required .field-error `{ border: solid 1px red; }`
     */
    errorClass: {
      default: 'field-error'
    },

    /**
     * Default name for success class adds a red border on success style `.field-success` styling required .field-success `{ border: solid 1px red; }`
     */
    successClass: {
      default: 'field-success'
    },

    /**
     * Default input class
     */
    elmClass: {
      default: 'input-elm'
    },

    /**
     * Default error message
     */
    errorMessage: {
      default: null
    },

    /**
     * Turn custom validation on or off
     */
    enableValidation: {
      default: true
    },

    /**
     * Field Label text / value
     */
    label: {
      default: 'Field Name'
    },

    /**
     * Field name
     */
    name: {
      required: true,
      type: String
    }
  },
  methods: {
    /**
     * Validates the input on blur and adds/ removes error class
     * Emits and error-msg event that passes a validation msg and input type
     * @param {*} e - focus event
     */
    validate: function validate(e) {
      var _this = this;

      this.isValid = !e.target.validity.valid;

      if (!this.enableValidation) {
        return;
      }

      e.target.setCustomValidity('');

      if (!e.target.validity.valid) {
        this.hasError = true;

        if (e.target.validity.valueMissing && this.errorMessage) {
          e.target.setCustomValidity("".concat(this.errorMessage));
        }

        this.validationMessage = e.target.validationMessage.trim(); //console.log('element', e.target)
        // e.target.classList.add(this.errorClass)

        e.target.classList.remove(this.successClass);
        /**
         * Emits error on field validation event
         *
         * @event
         */

        this.$emit('error-msg', e.target, e.target.validationMessage.trim(), e.target.type, e.target.validity.valid);
        this.$nextTick(function () {
          // this.loadPopper()
          if (_this.hasError) {
            e.target.classList.remove(_this.successClass);
            e.target.classList.add(_this.errorClass);
          }
        });
      } else {
        this.isValid = false;
        this.hasError = false;
        this.validationMessage = null;
        this.$emit('error-msg', null, null, false);
        this.$nextTick(function () {
          if (!_this.hasError) {
            e.target.classList.remove(_this.errorClass);
            e.target.classList.add(_this.successClass);
          }
        });
      }
    }
  },
  data: function data() {
    return {
      isValid: false,
      hasError: false,
      validationMessage: ''
    };
  },
  computed: {
    listeners: function listeners() {
      var _this2 = this;

      return _objectSpread({}, this.$listeners, {
        input: function input(event) {
          return _this2.$emit('input', event.target.value);
        }
      });
    }
  }
});
// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/shawnsandy/devboxes/blacktie/node_modules/thread-loader/dist/cjs.js!/Users/shawnsandy/devboxes/blacktie/node_modules/babel-loader/lib!/Users/shawnsandy/devboxes/blacktie/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/shawnsandy/devboxes/blacktie/node_modules/vue-loader/lib??vue-loader-options!./src/components/input-elm.vue?vue&type=script&lang=js&
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

/**
 * BlackTie input element with baked in HTML5 validation, light fast and easy to cutomize
 */

/* harmony default export */ var input_elmvue_type_script_lang_js_ = ({
  name: 'InputElm',
  mixins: [mixins]
});
// CONCATENATED MODULE: ./src/components/input-elm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_input_elmvue_type_script_lang_js_ = (input_elmvue_type_script_lang_js_); 
// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/components/input-elm.vue





/* normalize component */

var component = normalizeComponent(
  components_input_elmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "input-elm.vue"
/* harmony default export */ var input_elm = (component.exports);
// CONCATENATED MODULE: /Users/shawnsandy/devboxes/blacktie/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (input_elm);



/***/ })

/******/ })["default"];
});