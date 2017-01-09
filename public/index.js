/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default({
  target: document.querySelector('#app')
});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fileInput = __webpack_require__(2);

var _fileInput2 = _interopRequireDefault(_fileInput);

var _numberInput = __webpack_require__(4);

var _numberInput2 = _interopRequireDefault(_numberInput);

var _map = __webpack_require__(3);

var _map2 = _interopRequireDefault(_map);

var _papaparse = __webpack_require__(5);

var _papaparse2 = _interopRequireDefault(_papaparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyComputations(state, newState, oldState) {
	if ('scaleH' in newState && _typeof(state.scaleH) === 'object' || state.scaleH !== oldState.scaleH || 'scaleV' in newState && _typeof(state.scaleV) === 'object' || state.scaleV !== oldState.scaleV || 'offsetX' in newState && _typeof(state.offsetX) === 'object' || state.offsetX !== oldState.offsetX || 'offsetY' in newState && _typeof(state.offsetY) === 'object' || state.offsetY !== oldState.offsetY) {
		state.modifiers = newState.modifiers = template.computed.modifiers(state.scaleH, state.scaleV, state.offsetX, state.offsetY);
	}

	if ('csvData' in newState && _typeof(state.csvData) === 'object' || state.csvData !== oldState.csvData || 'modifiers' in newState && _typeof(state.modifiers) === 'object' || state.modifiers !== oldState.modifiers || 'mapDimensions' in newState && _typeof(state.mapDimensions) === 'object' || state.mapDimensions !== oldState.mapDimensions) {
		state.spots = newState.spots = template.computed.spots(state.csvData, state.modifiers, state.mapDimensions);
	}
}

var template = function () {

	var forEach = function forEach(xs, acc) {
		return Array.prototype.forEach.call(xs, acc);
	};

	return {
		data: function data() {
			return {
				scaleH: 1.0,
				scaleV: 1.0,
				offsetX: 0,
				offsetY: 0,
				mapSrc: '',
				mapDimensions: null,
				csvData: []
			};
		},

		computed: {
			modifiers: function modifiers(scaleH, scaleV, offsetX, offsetY) {
				return {
					scaleH: parseFloat(scaleH),
					scaleV: parseFloat(scaleV),
					offsetX: parseFloat(offsetX),
					offsetY: parseFloat(offsetY)
				};
			},
			spots: function spots(csvData, modifiers, mapDimensions) {

				if (csvData.length == 0 || !mapDimensions) return [];

				var scaleH = modifiers.scaleH,
				    scaleV = modifiers.scaleV,
				    offsetX = modifiers.offsetX,
				    offsetY = modifiers.offsetY;
				var width = mapDimensions.width,
				    height = mapDimensions.height;

				var toPixel = function toPixel(max, value, scale, offset) {
					return max * value * scale + offset;
				};

				return csvData.map(function (_ref) {
					var _ref2 = _slicedToArray(_ref, 3),
					    name = _ref2[0],
					    valueX = _ref2[1],
					    valueY = _ref2[2];

					return {
						name: name,
						valueX: valueX,
						valueY: valueY,
						x: toPixel(width, valueX, scaleH, offsetX),
						y: toPixel(height, valueY, scaleV, offsetY)
					};
				});
			}
		},
		methods: {
			handleFiles: function handleFiles(files) {
				var component = this;
				forEach(files, function (file) {
					var ext = file.name.split('.').reverse()[0].toLowerCase();

					switch (ext) {
						case 'csv':
							component.handleCSVFile(file);
							break;
						case 'jpg':
						case 'jpeg':
						case 'png':
						case 'svg':
							component.handleMapFile(file);
							break;
						default:
							console.error('Unknown file ' + file.name);
					}
				});
			},
			handleCSVFile: function handleCSVFile(file) {
				var component = this;
				_papaparse2.default.parse(file, {
					complete: function complete(results) {
						var errors = results.errors,
						    data = results.data;

						if (errors && errors.length) {
							console.error('CSV parsing errors\n', errors);
						} else if (data) {
							component.set({ csvData: data });
						}
					}
				});
			},
			handleMapFile: function handleMapFile(file) {
				var component = this;
				var reader = new FileReader();
				reader.onload = function (event) {
					return component.set({ mapSrc: event.target.result });
				};
				reader.readAsDataURL(file);
			}
		},
		components: {
			FileInput: _fileInput2.default,
			NumberInput: _numberInput2.default,
			Map: _map2.default
		}
	};
}();

function renderMainFragment(root, component) {
	var div = createElement('div');
	div.className = "container";

	var div1 = createElement('div');
	div1.className = "row";

	appendNode(div1, div);

	var div2 = createElement('div');
	div2.className = "col-md-4";

	appendNode(div2, div1);

	var h3 = createElement('h3');

	appendNode(h3, div2);
	appendNode(createText("Inputs"), h3);
	appendNode(createText("\r\n      "), div2);

	var fileInput_initialData = {
		label: "Map and CSV files",
		name: "input"
	};
	var fileInput = new template.components.FileInput({
		target: div2,
		_root: component._root || component,
		data: fileInput_initialData
	});

	fileInput.on('change', function (event) {
		component.handleFiles(event.files);
	});

	appendNode(createText("\r\n      \r\n      "), div2);

	var label = createElement('label');

	appendNode(label, div2);
	appendNode(createText("Scale"), label);
	appendNode(createText("\r\n      "), div2);

	var div3 = createElement('div');
	div3.className = "row";

	appendNode(div3, div2);

	var div4 = createElement('div');
	div4.className = "col-sm-6";

	appendNode(div4, div3);

	var numberInput_initialData = {
		label: "horizontal",
		name: "horz",
		step: .1
	};

	if ('scaleH' in root) numberInput_initialData.value = root.scaleH;
	var numberInput = new template.components.NumberInput({
		target: div4,
		_root: component._root || component,
		data: numberInput_initialData
	});

	var numberInput_updating = false;

	component._bindings.push(function () {
		numberInput.observe('value', function (value) {
			numberInput_updating = true;
			component.set({ scaleH: value });
			numberInput_updating = false;
		});
	});

	appendNode(createText("\r\n        "), div3);

	var div5 = createElement('div');
	div5.className = "col-sm-6";

	appendNode(div5, div3);

	var numberInput1_initialData = {
		label: "vertical",
		name: "vert",
		step: .1
	};

	if ('scaleV' in root) numberInput1_initialData.value = root.scaleV;
	var numberInput1 = new template.components.NumberInput({
		target: div5,
		_root: component._root || component,
		data: numberInput1_initialData
	});

	var numberInput1_updating = false;

	component._bindings.push(function () {
		numberInput1.observe('value', function (value) {
			numberInput1_updating = true;
			component.set({ scaleV: value });
			numberInput1_updating = false;
		});
	});

	appendNode(createText("\r\n      \r\n      "), div2);

	var label1 = createElement('label');

	appendNode(label1, div2);
	appendNode(createText("Offset"), label1);
	appendNode(createText("\r\n      "), div2);

	var div6 = createElement('div');
	div6.className = "row";

	appendNode(div6, div2);

	var div7 = createElement('div');
	div7.className = "col-sm-6";

	appendNode(div7, div6);

	var numberInput2_initialData = {
		label: "X",
		name: "x"
	};

	if ('offsetX' in root) numberInput2_initialData.value = root.offsetX;
	var numberInput2 = new template.components.NumberInput({
		target: div7,
		_root: component._root || component,
		data: numberInput2_initialData
	});

	var numberInput2_updating = false;

	component._bindings.push(function () {
		numberInput2.observe('value', function (value) {
			numberInput2_updating = true;
			component.set({ offsetX: value });
			numberInput2_updating = false;
		});
	});

	appendNode(createText("\r\n        "), div6);

	var div8 = createElement('div');
	div8.className = "col-sm-6";

	appendNode(div8, div6);

	var numberInput3_initialData = {
		label: "Y",
		name: "y"
	};

	if ('offsetY' in root) numberInput3_initialData.value = root.offsetY;
	var numberInput3 = new template.components.NumberInput({
		target: div8,
		_root: component._root || component,
		data: numberInput3_initialData
	});

	var numberInput3_updating = false;

	component._bindings.push(function () {
		numberInput3.observe('value', function (value) {
			numberInput3_updating = true;
			component.set({ offsetY: value });
			numberInput3_updating = false;
		});
	});

	appendNode(createText("\r\n    "), div1);

	var div9 = createElement('div');
	div9.className = "col-md-8";

	appendNode(div9, div1);

	var h31 = createElement('h3');

	appendNode(h31, div9);
	appendNode(createText("View"), h31);
	appendNode(createText("\r\n      "), div9);

	var label2 = createElement('label');

	appendNode(label2, div9);
	appendNode(createText("foo"), label2);
	appendNode(createText("\r\n      "), div9);

	var map_initialData = {
		src: root.mapSrc,
		spots: root.spots
	};
	var map = new template.components.Map({
		target: div9,
		_root: component._root || component,
		data: map_initialData
	});

	map.on('loaded', function (event) {
		component.set({ mapDimensions: event.dimensions });
	});

	appendNode(createText("\r\n    "), div1);

	var div10 = createElement('div');
	div10.className = "col-sm-12";

	appendNode(div10, div1);

	var hr = createElement('hr');

	appendNode(hr, div10);
	appendNode(createText("\r\n      "), div10);

	var p = createElement('p');
	p.className = "text-center text-muted";

	appendNode(p, div10);
	appendNode(createText("Garage Map Util — HyperIn Inc."), p);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			if (!numberInput_updating && 'scaleH' in changed) {
				numberInput.set({ value: root.scaleH });
			}

			if (!numberInput1_updating && 'scaleV' in changed) {
				numberInput1.set({ value: root.scaleV });
			}

			if (!numberInput2_updating && 'offsetX' in changed) {
				numberInput2.set({ value: root.offsetX });
			}

			if (!numberInput3_updating && 'offsetY' in changed) {
				numberInput3.set({ value: root.offsetY });
			}

			var map_changes = {};

			if ('mapSrc' in changed) map_changes.src = root.mapSrc;
			if ('spots' in changed) map_changes.spots = root.spots;

			if (Object.keys(map_changes).length) map.set(map_changes);
		},

		teardown: function teardown(detach) {
			fileInput.teardown(false);
			numberInput.teardown(false);
			numberInput1.teardown(false);
			numberInput2.teardown(false);
			numberInput3.teardown(false);
			map.teardown(false);

			if (detach) {
				detachNode(div);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);
	applyComputations(this._state, this._state, {});

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];

	this._bindings = [];
	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
	while (this._bindings.length) {
		this._bindings.pop()();
	}while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);
	applyComputations(this._state, newState, oldState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._bindings.length) {
		this._bindings.pop()();
	}while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

exports.default = SvelteComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyComputations(state, newState, oldState) {
	if ('name' in newState && _typeof(state.name) === 'object' || state.name !== oldState.name) {
		state.id = newState.id = template.computed.id(state.name);
	}

	if ('files' in newState && _typeof(state.files) === 'object' || state.files !== oldState.files) {
		state.dropLabel = newState.dropLabel = template.computed.dropLabel(state.files);
	}
}

var template = function () {

	var isAdvanced = function () {
		var div = document.createElement('div');
		return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	}();

	var on = function on(element, type, handler) {
		return type.split(' ').forEach(function (t) {
			return element.addEventListener(t, handler);
		});
	};

	var init = function init(component) {
		if (isAdvanced) {
			(function () {
				var form = component.refs.form;

				on(form, 'drag dragstart dragend dragover dragenter dragleave drop', function (e) {
					e.preventDefault();
					e.stopPropagation();
				});
				on(form, 'dragover dragenter', function () {
					return form.classList.add('is-dragover');
				});
				on(form, 'dragleave dragend drop', function () {
					return form.classList.remove('is-dragover');
				});
				on(form, 'drop', function (e) {
					var files = e.dataTransfer.files;

					component.set({ files: files });
					component.fire('change', { files: files });
				});

				form.classList.add('file-drop-area--advanced');
			})();
		}
	};

	var map = function map(xs, acc) {
		return Array.prototype.map.call(xs, acc);
	};

	return {
		onrender: function onrender() {
			init(this);
		},
		data: function data() {
			return {
				name: '',
				files: [],
				label: 'foo',
				multiple: false
			};
		},

		computed: {
			id: function id(name) {
				return 'file-' + name;
			},
			dropLabel: function dropLabel(files) {
				var count = files.length;
				if (count == 0) return '<strong>Choose a file</strong><span class="file-drop-area__dragndrop"> or drag it here</span>.';else if (count <= 2) return map(files, function (f) {
					return f.name;
				}).join('<br>');else /* count > 1 */return count + ' files selected';
			}
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n.file-drop-area[svelte-1501672340], [svelte-1501672340] .file-drop-area {\r\n\tfont-size: 1.25em; \r\n\tbackground-color: #c8dadf;\r\n\tposition: relative;\r\n\tpadding: 100px 20px;\r\n  text-align: center;\r\n}\r\n\r\n.file-drop-area--advanced[svelte-1501672340], [svelte-1501672340] .file-drop-area--advanced {\r\n\toutline: 2px dashed #92b0b3;\r\n\toutline-offset: -10px;\r\n\r\n\t-webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\r\n\ttransition: outline-offset .15s ease-in-out, background-color .15s linear;\r\n}\r\n\r\n.file-drop-area.is-dragover[svelte-1501672340], [svelte-1501672340] .file-drop-area.is-dragover {\r\n\toutline-offset: -20px;\r\n\toutline-color: #c8dadf;\r\n\tbackground-color: #fff;\r\n}\r\n        \r\n.file-drop-area__dragndrop[svelte-1501672340], [svelte-1501672340] .file-drop-area__dragndrop, .file-drop-area__icon[svelte-1501672340], [svelte-1501672340] .file-drop-area__icon {\r\n\tdisplay: none;\r\n}\r\n.file-drop-area--advanced  .file-drop-area__dragndrop[svelte-1501672340], .file-drop-area--advanced  [svelte-1501672340] .file-drop-area__dragndrop, .file-drop-area--advanced[svelte-1501672340]  .file-drop-area__dragndrop, [svelte-1501672340] .file-drop-area--advanced  .file-drop-area__dragndrop {\r\n\tdisplay: inline;\r\n}\r\n.file-drop-area--advanced  .file-drop-area__icon[svelte-1501672340], .file-drop-area--advanced  [svelte-1501672340] .file-drop-area__icon, .file-drop-area--advanced[svelte-1501672340]  .file-drop-area__icon, [svelte-1501672340] .file-drop-area--advanced  .file-drop-area__icon {\r\n\twidth: 100%;\r\n\theight: 80px;\r\n\topacity: 0.25;\r\n\tdisplay: block;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.file-drop-area.is-uploading  .file-drop-area__input[svelte-1501672340], .file-drop-area.is-uploading  [svelte-1501672340] .file-drop-area__input, .file-drop-area.is-uploading[svelte-1501672340]  .file-drop-area__input, [svelte-1501672340] .file-drop-area.is-uploading  .file-drop-area__input, .file-drop-area.is-success  .file-drop-area__input[svelte-1501672340], .file-drop-area.is-success  [svelte-1501672340] .file-drop-area__input, .file-drop-area.is-success[svelte-1501672340]  .file-drop-area__input, [svelte-1501672340] .file-drop-area.is-success  .file-drop-area__input, .file-drop-area.is-error  .file-drop-area__input[svelte-1501672340], .file-drop-area.is-error  [svelte-1501672340] .file-drop-area__input, .file-drop-area.is-error[svelte-1501672340]  .file-drop-area__input, [svelte-1501672340] .file-drop-area.is-error  .file-drop-area__input {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.file-drop-area__uploading[svelte-1501672340], [svelte-1501672340] .file-drop-area__uploading, .file-drop-area__success[svelte-1501672340], [svelte-1501672340] .file-drop-area__success, .file-drop-area__error[svelte-1501672340], [svelte-1501672340] .file-drop-area__error {\r\n\tdisplay: none;\r\n}\r\n\r\n.file-drop-area.is-uploading  .file-drop-area__uploading[svelte-1501672340], .file-drop-area.is-uploading  [svelte-1501672340] .file-drop-area__uploading, .file-drop-area.is-uploading[svelte-1501672340]  .file-drop-area__uploading, [svelte-1501672340] .file-drop-area.is-uploading  .file-drop-area__uploading, .file-drop-area.is-success  .file-drop-area__success[svelte-1501672340], .file-drop-area.is-success  [svelte-1501672340] .file-drop-area__success, .file-drop-area.is-success[svelte-1501672340]  .file-drop-area__success, [svelte-1501672340] .file-drop-area.is-success  .file-drop-area__success, .file-drop-area.is-error  .file-drop-area__error[svelte-1501672340], .file-drop-area.is-error  [svelte-1501672340] .file-drop-area__error, .file-drop-area.is-error[svelte-1501672340]  .file-drop-area__error, [svelte-1501672340] .file-drop-area.is-error  .file-drop-area__error {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 0;\r\n\tleft: 0;\r\n\r\n\t-webkit-transform: translateY( -50% );\r\n\ttransform: translateY( -50% );\r\n}\r\n.file-drop-area__uploading[svelte-1501672340], [svelte-1501672340] .file-drop-area__uploading {\r\n\tfont-style: italic;\r\n}\r\n.file-drop-area__success[svelte-1501672340], [svelte-1501672340] .file-drop-area__success {\r\n\t-webkit-animation: appear-from-inside .25s ease-in-out;\r\n\tanimation: appear-from-inside .25s ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes appear-from-inside {\r\n\tfrom[svelte-1501672340], [svelte-1501672340] from { -webkit-transform: translateY( -50% ) scale( 0 ); }\r\n\t75%\t\t{ -webkit-transform: translateY( -50% ) scale( 1.1 ); }\r\n\tto[svelte-1501672340], [svelte-1501672340] to { -webkit-transform: translateY( -50% ) scale( 1 ); }\r\n}\r\n@keyframes appear-from-inside {\r\n\tfrom[svelte-1501672340], [svelte-1501672340] from { transform: translateY( -50% ) scale( 0 ); }\r\n\t75%\t\t{ transform: translateY( -50% ) scale( 1.1 ); }\r\n\tto[svelte-1501672340], [svelte-1501672340] to { transform: translateY( -50% ) scale( 1 ); }\r\n}\r\n\r\n.file-drop-area__restart[svelte-1501672340], [svelte-1501672340] .file-drop-area__restart {\r\n\tfont-weight: 700;\r\n}\r\n.file-drop-area__restart[svelte-1501672340]:focus, [svelte-1501672340] .file-drop-area__restart:focus, .file-drop-area__restart[svelte-1501672340]:hover, [svelte-1501672340] .file-drop-area__restart:hover {\r\n\tcolor: #39bfd3;\r\n}\r\n\r\n.js  .file-drop-area__file[svelte-1501672340], .js  [svelte-1501672340] .file-drop-area__file, .js[svelte-1501672340]  .file-drop-area__file, [svelte-1501672340] .js  .file-drop-area__file {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n.js  .file-drop-area__label[svelte-1501672340], .js  [svelte-1501672340] .file-drop-area__label, .js[svelte-1501672340]  .file-drop-area__label, [svelte-1501672340] .js  .file-drop-area__label {\r\n\tmax-width: 80%;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n  font-weight: 300;\r\n}\r\n\r\n.js  .file-drop-area__label:hover  strong[svelte-1501672340], .js  .file-drop-area__label:hover  [svelte-1501672340] strong, .js  .file-drop-area__label[svelte-1501672340]:hover  strong, .js  [svelte-1501672340] .file-drop-area__label:hover  strong, .js[svelte-1501672340]  .file-drop-area__label:hover  strong, [svelte-1501672340] .js  .file-drop-area__label:hover  strong, .file-drop-area__file:focus +  .file-drop-area__label  strong[svelte-1501672340], .file-drop-area__file:focus +  .file-drop-area__label  [svelte-1501672340] strong, .file-drop-area__file:focus +  .file-drop-area__label[svelte-1501672340]  strong, .file-drop-area__file:focus +  [svelte-1501672340] .file-drop-area__label  strong, .file-drop-area__file[svelte-1501672340]:focus + .file-drop-area__label  strong, [svelte-1501672340] .file-drop-area__file:focus +  .file-drop-area__label  strong, .file-drop-area__file.has-focus +  .file-drop-area__label  strong[svelte-1501672340], .file-drop-area__file.has-focus +  .file-drop-area__label  [svelte-1501672340] strong, .file-drop-area__file.has-focus +  .file-drop-area__label[svelte-1501672340]  strong, .file-drop-area__file.has-focus +  [svelte-1501672340] .file-drop-area__label  strong, .file-drop-area__file.has-focus[svelte-1501672340] + .file-drop-area__label  strong, [svelte-1501672340] .file-drop-area__file.has-focus +  .file-drop-area__label  strong {\r\n\tcolor: #39bfd3;\r\n}\r\n.js  .file-drop-area__file:focus +  .file-drop-area__label[svelte-1501672340], .js  .file-drop-area__file:focus +  [svelte-1501672340] .file-drop-area__label, .js  .file-drop-area__file[svelte-1501672340]:focus + .file-drop-area__label, .js  [svelte-1501672340] .file-drop-area__file:focus +  .file-drop-area__label, .js[svelte-1501672340]  .file-drop-area__file:focus +  .file-drop-area__label, [svelte-1501672340] .js  .file-drop-area__file:focus +  .file-drop-area__label, .js  .file-drop-area__file.has-focus +  .file-drop-area__label[svelte-1501672340], .js  .file-drop-area__file.has-focus +  [svelte-1501672340] .file-drop-area__label, .js  .file-drop-area__file.has-focus[svelte-1501672340] + .file-drop-area__label, .js  [svelte-1501672340] .file-drop-area__file.has-focus +  .file-drop-area__label, .js[svelte-1501672340]  .file-drop-area__file.has-focus +  .file-drop-area__label, [svelte-1501672340] .js  .file-drop-area__file.has-focus +  .file-drop-area__label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.no-js  .file-drop-area__label[svelte-1501672340], .no-js  [svelte-1501672340] .file-drop-area__label, .no-js[svelte-1501672340]  .file-drop-area__label, [svelte-1501672340] .no-js  .file-drop-area__label {\r\n\tdisplay: none;\r\n}\r\n\r\n.no-js  .file-drop-area__button[svelte-1501672340], .no-js  [svelte-1501672340] .file-drop-area__button, .no-js[svelte-1501672340]  .file-drop-area__button, [svelte-1501672340] .no-js  .file-drop-area__button {\r\n\tdisplay: block;\r\n}\r\n.file-drop-area__button[svelte-1501672340], [svelte-1501672340] .file-drop-area__button {\r\n\tfont-weight: 700;\r\n\tcolor: #e5edf1;\r\n\tbackground-color: #39bfd3;\r\n\tdisplay: none;\r\n\tpadding: 8px 16px;\r\n\tmargin: 40px auto 0;\r\n}\r\n.file-drop-area__button[svelte-1501672340]:hover, [svelte-1501672340] .file-drop-area__button:hover, .file-drop-area__button[svelte-1501672340]:focus, [svelte-1501672340] .file-drop-area__button:focus {\r\n\tbackground-color: #0f3c4b;\r\n}\r\n\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-1501672340', '');
	div.className = "form-group";

	var label = createElement('label');
	setAttribute(label, 'svelte-1501672340', '');

	appendNode(label, div);
	var text = createText(root.label);
	appendNode(text, label);
	appendNode(createText("\r\n  "), div);

	var form = createElement('form');
	setAttribute(form, 'svelte-1501672340', '');
	form.className = "file-drop-area";
	component.refs.form = form;

	appendNode(form, div);

	var div1 = createElement('div');
	setAttribute(div1, 'svelte-1501672340', '');
	div1.className = "file-drop-area__input";

	appendNode(div1, form);

	var img = createElement('img');
	setAttribute(img, 'svelte-1501672340', '');
	img.className = "file-drop-area__icon";
	img.src = "./images/ic_upload.svg";

	appendNode(img, div1);
	appendNode(createText("\r\n      "), div1);
	var ifBlock_anchor = createComment("#if multiple");
	appendNode(ifBlock_anchor, div1);

	function getBlock(root) {
		if (root.multiple) return renderIfBlock_0;
		return renderIfBlock_1;
	}

	var currentBlock = getBlock(root);
	var ifBlock = currentBlock && currentBlock(root, component);

	if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
	appendNode(createText("\r\n      "), div1);

	var label1 = createElement('label');
	setAttribute(label1, 'svelte-1501672340', '');
	label1.className = "file-drop-area__label";
	label1.htmlFor = root.id;

	appendNode(label1, div1);
	var raw_before = createElement('noscript');
	appendNode(raw_before, label1);
	var raw_after = createElement('noscript');
	appendNode(raw_after, label1);
	raw_before.insertAdjacentHTML('afterend', root.dropLabel);
	appendNode(createText("\r\n      "), div1);

	var button = createElement('button');
	setAttribute(button, 'svelte-1501672340', '');
	button.className = "file-drop-area__button";
	button.type = "submit";

	appendNode(button, div1);
	appendNode(createText("Upload"), button);
	appendNode(createText("\r\n    "), form);

	var div2 = createElement('div');
	setAttribute(div2, 'svelte-1501672340', '');
	div2.className = "file-drop-area__uploading";

	appendNode(div2, form);
	appendNode(createText("Uploading…"), div2);
	appendNode(createText("\r\n    "), form);

	var div3 = createElement('div');
	setAttribute(div3, 'svelte-1501672340', '');
	div3.className = "file-drop-area__success";

	appendNode(div3, form);
	appendNode(createText("Done!"), div3);
	appendNode(createText("\r\n    "), form);

	var div4 = createElement('div');
	setAttribute(div4, 'svelte-1501672340', '');
	div4.className = "file-drop-area__error";

	appendNode(div4, form);
	appendNode(createText("Error! "), div4);

	var span = createElement('span');
	setAttribute(span, 'svelte-1501672340', '');

	appendNode(span, div4);
	appendNode(createText("."), div4);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			text.data = root.label;

			var _currentBlock = currentBlock;
			currentBlock = getBlock(root);
			if (_currentBlock === currentBlock && ifBlock) {
				ifBlock.update(changed, root);
			} else {
				if (ifBlock) ifBlock.teardown(true);
				ifBlock = currentBlock && currentBlock(root, component);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
			}

			label1.htmlFor = root.id;

			while (raw_before.nextSibling && raw_before.nextSibling !== raw_after) {
				raw_before.parentNode.removeChild(raw_before.nextSibling);
			}

			raw_before.insertAdjacentHTML('afterend', root.dropLabel);
		},

		teardown: function teardown(detach) {
			if (component.refs.form === form) component.refs.form = null;
			if (ifBlock) ifBlock.teardown(false);

			if (detach) {
				while (raw_before.nextSibling && raw_before.nextSibling !== raw_after) {
					raw_before.parentNode.removeChild(raw_before.nextSibling);
				}

				detachNode(div);
			}
		}
	};
}

function renderIfBlock_1(root, component) {
	var input = createElement('input');
	setAttribute(input, 'svelte-1501672340', '');
	input.className = "file-drop-area__file";
	input.type = "file";
	input.name = root.id;
	input.id = root.id;

	return {
		mount: function mount(target, anchor) {
			insertNode(input, target, anchor);
		},

		update: function update(changed, root) {
			input.name = root.id;
			input.id = root.id;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(input);
			}
		}
	};
}

function renderIfBlock_0(root, component) {
	var input = createElement('input');
	setAttribute(input, 'svelte-1501672340', '');
	input.className = "file-drop-area__file";
	input.type = "file";
	input.name = root.id;
	input.id = root.id;
	input.multiple = true;

	return {
		mount: function mount(target, anchor) {
			insertNode(input, target, anchor);
		},

		update: function update(changed, root) {
			input.name = root.id;
			input.id = root.id;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(input);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this.refs = {};
	this._state = Object.assign(template.data(), options.data);
	applyComputations(this._state, this._state, {});

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	if (options._root) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call(this);
	}
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);
	applyComputations(this._state, newState, oldState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment(data) {
	return document.createComment(data);
}

exports.default = SvelteComponent;

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyComputations(state, newState, oldState) {
	if ('modifiers' in newState && _typeof(state.modifiers) === 'object' || state.modifiers !== oldState.modifiers || 'dimensions' in newState && _typeof(state.dimensions) === 'object' || state.dimensions !== oldState.dimensions) {
		state.poiLayerStyles = newState.poiLayerStyles = template.computed.poiLayerStyles(state.modifiers, state.dimensions);
	}
}

var template = function () {

	var getDimensions = function getDimensions(img) {
		var width = img.width,
		    height = img.height;

		return width && height ? { width: width, height: height } : null;
	};

	return {
		onrender: function onrender() {
			var _this = this;

			this.observe('src', function (newValue, oldValue) {
				if (newValue != oldValue) {
					_this.set({ calculateDimensions: true });
				}
			});
		},
		data: function data() {
			return {
				src: '',
				spots: [],
				dimensions: null,
				calculateDimensions: false,
				modifiers: {
					scaleHorizontal: 1.0,
					scaleVertical: 1.0,
					offsetX: 0,
					offsetY: 0
				}
			};
		},

		computed: {
			poiLayerStyles: function poiLayerStyles(modifiers, dimensions) {
				if (dimensions) {
					var scaleHorizontal = modifiers.scaleHorizontal,
					    scaleVertical = modifiers.scaleVertical;
					var width = dimensions.width,
					    height = dimensions.height;

					var modWidth = width * scaleHorizontal;
					var modHeight = height * scaleVertical;
					return 'width: ' + width + 'px; height: ' + height + 'px;';
				}
				return '';
			}
		},
		helpers: {
			poiStyles: function poiStyles(spot, dimensions) {
				// const x = spot.x(dimensions.width);
				// const y = spot.y(dimensions.height);
				return 'left: ' + spot.x + 'px; top: ' + spot.y + 'px;';
			}
		},
		methods: {
			updateDimension: function updateDimension(img) {
				if (this.get('calculateDimensions')) {
					var dimensions = getDimensions(img);
					this.set({ dimensions: dimensions, calculateDimensions: false });
					this.fire('loaded', { dimensions: dimensions });
				}
			}
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n\r\n.map[svelte-1454904426], [svelte-1454904426] .map {\r\n  position: relative;\r\n  min-width: 160px;\r\n  min-height: 160px;\r\n  background-image: url(./images/im_grid.svg);\r\n}\r\n\r\n.map__image[svelte-1454904426], [svelte-1454904426] .map__image {\r\n  outline: 2px dashed #fb2;\r\n}\r\n\r\n.map__poi-layer[svelte-1454904426], [svelte-1454904426] .map__poi-layer {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  outline: 2px dotted #c00;\r\n}\r\n\r\n.map__poi[svelte-1454904426], [svelte-1454904426] .map__poi {\r\n  position: absolute;\r\n  padding: 10px;\r\n  transform: translate(-10px, -10px);\r\n}\r\n\r\n.poi__marker[svelte-1454904426], [svelte-1454904426] .poi__marker {\r\n  position: absolute;;\r\n  width: 10px;\r\n  height: 10px;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #c00;\r\n  border-radius: 50%;\r\n  opacity: .75;\r\n}\r\n\r\n.poi__label[svelte-1454904426], [svelte-1454904426] .poi__label {\r\n  position: absolute;\r\n  padding: 2px 3px;\r\n  left: 15px;\r\n  border-top: 1px solid #900;\r\n  color: #900;\r\n  font-size: .7857em;\r\n  line-height: 1;\r\n  opacity: .25;\r\n  transition: background-color .15s, color .15s, opacity .15s;\r\n}\r\n\r\n.map__poi:hover  .poi__marker[svelte-1454904426], .map__poi:hover  [svelte-1454904426] .poi__marker, .map__poi[svelte-1454904426]:hover  .poi__marker, [svelte-1454904426] .map__poi:hover  .poi__marker {\r\n  background-color: #f44;\r\n}\r\n\r\n.map__poi:hover  .poi__label[svelte-1454904426], .map__poi:hover  [svelte-1454904426] .poi__label, .map__poi[svelte-1454904426]:hover  .poi__label, [svelte-1454904426] .map__poi:hover  .poi__label {\r\n  background-color: rgba(0,0,0,0.25);\r\n  color: #fff;\r\n  opacity: 0.8;\r\n  text-shadow: 0 0 5px #000;\r\n  z-index: 100;\r\n}\r\n\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-1454904426', '');
	div.className = "map";

	var ifBlock_anchor = createComment("#if src");
	appendNode(ifBlock_anchor, div);

	function getBlock(root) {
		if (root.src) return renderIfBlock_0;
		return null;
	}

	var currentBlock = getBlock(root);
	var ifBlock = currentBlock && currentBlock(root, component);

	if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock(root);
			if (_currentBlock === currentBlock && ifBlock) {
				ifBlock.update(changed, root);
			} else {
				if (ifBlock) ifBlock.teardown(true);
				ifBlock = currentBlock && currentBlock(root, component);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
			}
		},

		teardown: function teardown(detach) {
			if (ifBlock) ifBlock.teardown(false);

			if (detach) {
				detachNode(div);
			}
		}
	};
}

function renderIfBlock_0(root, component) {
	var img = createElement('img');
	setAttribute(img, 'svelte-1454904426', '');
	img.className = "map__image";
	img.src = root.src;

	function loadHandler(event) {
		component.updateDimension(this);
	}

	addEventListener(img, 'load', loadHandler);

	var text = createText("\r\n    ");
	var ifBlock1_anchor = createComment("#if dimensions");

	function getBlock1(root) {
		if (root.dimensions) return renderIfBlock1_0;
		return null;
	}

	var currentBlock1 = getBlock1(root);
	var ifBlock1 = currentBlock1 && currentBlock1(root, component);

	return {
		mount: function mount(target, anchor) {
			insertNode(img, target, anchor);
			insertNode(text, target, anchor);
			insertNode(ifBlock1_anchor, target, anchor);
			if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
		},

		update: function update(changed, root) {
			img.src = root.src;

			var _currentBlock1 = currentBlock1;
			currentBlock1 = getBlock1(root);
			if (_currentBlock1 === currentBlock1 && ifBlock1) {
				ifBlock1.update(changed, root);
			} else {
				if (ifBlock1) ifBlock1.teardown(true);
				ifBlock1 = currentBlock1 && currentBlock1(root, component);
				if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
			}
		},

		teardown: function teardown(detach) {
			removeEventListener(img, 'load', loadHandler);
			if (ifBlock1) ifBlock1.teardown(detach);

			if (detach) {
				detachNode(img);
				detachNode(text);
				detachNode(ifBlock1_anchor);
			}
		}
	};
}

function renderIfBlock1_0(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-1454904426', '');
	div.className = "map__poi-layer";
	div.style.cssText = root.poiLayerStyles;

	var eachBlock_anchor = createComment("#each spots");
	appendNode(eachBlock_anchor, div);
	var eachBlock_value = root.spots;
	var eachBlock_iterations = [];

	for (var i = 0; i < eachBlock_value.length; i += 1) {
		eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
		eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
	}

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			div.style.cssText = root.poiLayerStyles;

			var eachBlock_value = root.spots;

			for (var i = 0; i < eachBlock_value.length; i += 1) {
				if (!eachBlock_iterations[i]) {
					eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
					eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
				} else {
					eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
				}
			}

			for (var i = eachBlock_value.length; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].teardown(true);
			}

			eachBlock_iterations.length = eachBlock_value.length;
		},

		teardown: function teardown(detach) {
			for (var i = 0; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].teardown(false);
			}

			if (detach) {
				detachNode(div);
			}
		}
	};
}

function renderEachBlock(root, eachBlock_value, spot, spot__index, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-1454904426', '');
	div.className = "map__poi";
	div.style.cssText = template.helpers.poiStyles(spot, root.dimensions);

	var div1 = createElement('div');
	setAttribute(div1, 'svelte-1454904426', '');
	div1.className = "poi__marker";

	appendNode(div1, div);
	appendNode(createText("\r\n        "), div);

	var div2 = createElement('div');
	setAttribute(div2, 'svelte-1454904426', '');
	div2.className = "poi__label";

	appendNode(div2, div);
	var ifBlock2_anchor = createComment("#if spot.name");
	appendNode(ifBlock2_anchor, div2);

	function getBlock2(root, eachBlock_value, spot, spot__index) {
		if (spot.name) return renderIfBlock2_0;
		return null;
	}

	var currentBlock2 = getBlock2(root, eachBlock_value, spot, spot__index);
	var ifBlock2 = currentBlock2 && currentBlock2(root, eachBlock_value, spot, spot__index, component);

	if (ifBlock2) ifBlock2.mount(ifBlock2_anchor.parentNode, ifBlock2_anchor);
	appendNode(createText("\r\n          x:"), div2);
	var text2 = createText(spot.valueX || '-');
	appendNode(text2, div2);
	appendNode(createText(" y:"), div2);
	var text4 = createText(spot.valueY || '-');
	appendNode(text4, div2);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root, eachBlock_value, spot, spot__index) {
			var spot = eachBlock_value[spot__index];

			div.style.cssText = template.helpers.poiStyles(spot, root.dimensions);

			var _currentBlock2 = currentBlock2;
			currentBlock2 = getBlock2(root, eachBlock_value, spot, spot__index);
			if (_currentBlock2 === currentBlock2 && ifBlock2) {
				ifBlock2.update(changed, root, eachBlock_value, spot, spot__index);
			} else {
				if (ifBlock2) ifBlock2.teardown(true);
				ifBlock2 = currentBlock2 && currentBlock2(root, eachBlock_value, spot, spot__index, component);
				if (ifBlock2) ifBlock2.mount(ifBlock2_anchor.parentNode, ifBlock2_anchor);
			}

			text2.data = spot.valueX || '-';

			text4.data = spot.valueY || '-';
		},

		teardown: function teardown(detach) {
			if (ifBlock2) ifBlock2.teardown(false);

			if (detach) {
				detachNode(div);
			}
		}
	};
}

function renderIfBlock2_0(root, eachBlock_value, spot, spot__index, component) {
	var text = createText(spot.name);

	var br = createElement('br');
	setAttribute(br, 'svelte-1454904426', '');

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(br, target, anchor);
		},

		update: function update(changed, root, eachBlock_value, spot, spot__index) {
			text.data = spot.name;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(text);
				detachNode(br);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);
	applyComputations(this._state, this._state, {});

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	if (options._root) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call(this);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);
	applyComputations(this._state, newState, oldState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment(data) {
	return document.createComment(data);
}

function appendNode(node, target) {
	target.appendChild(node);
}

exports.default = SvelteComponent;

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {

	return {
		data: function data() {
			return {
				label: '[label]',
				name: '[name]',
				value: 1,
				step: 1
			};
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n.input-number[svelte-4254076537], [svelte-4254076537] .input-number {\r\n  text-align: right;\r\n}\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-4254076537', '');
	div.className = "form-group";

	var div1 = createElement('div');
	setAttribute(div1, 'svelte-4254076537', '');
	div1.className = "input-group";

	appendNode(div1, div);

	var span = createElement('span');
	setAttribute(span, 'svelte-4254076537', '');
	span.className = "input-group-addon";
	span.id = "input-${name}";

	appendNode(span, div1);
	var text = createText(root.label);
	appendNode(text, span);
	appendNode(createText("\r\n    "), div1);

	var input = createElement('input');
	setAttribute(input, 'svelte-4254076537', '');
	input.className = "form-control input-number input-sm";
	input.type = "number";

	var input_updating = false;

	function inputChangeHandler() {
		input_updating = true;
		component.set({ value: input.value });
		input_updating = false;
	}

	addEventListener(input, 'change', inputChangeHandler);
	input.value = root.value;

	input.step = root.step;
	setAttribute(input, 'aria-describedby', "input-${name}");

	appendNode(input, div1);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			text.data = root.label;

			if (!input_updating) input.value = root.value;
			input.step = root.step;
		},

		teardown: function teardown(detach) {
			removeEventListener(input, 'change', inputChangeHandler);

			if (detach) {
				detachNode(div);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

exports.default = SvelteComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Papa Parse
	v4.1.2
	https://github.com/mholt/PapaParse
*/
(function(global)
{
	"use strict";

	var IS_WORKER = !global.document && !!global.postMessage,
		IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
		LOADED_SYNC = false, AUTO_SCRIPT_PATH;
	var workers = {}, workerIdCounter = 0;

	var Papa = {};

	Papa.parse = CsvToJson;
	Papa.unparse = JsonToCsv;

	Papa.RECORD_SEP = String.fromCharCode(30);
	Papa.UNIT_SEP = String.fromCharCode(31);
	Papa.BYTE_ORDER_MARK = "\ufeff";
	Papa.BAD_DELIMITERS = ["\r", "\n", "\"", Papa.BYTE_ORDER_MARK];
	Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
	Papa.SCRIPT_PATH = null;	// Must be set by your code if you use workers and this lib is loaded asynchronously

	// Configurable chunk sizes for local and remote files, respectively
	Papa.LocalChunkSize = 1024 * 1024 * 10;	// 10 MB
	Papa.RemoteChunkSize = 1024 * 1024 * 5;	// 5 MB
	Papa.DefaultDelimiter = ",";			// Used if not specified and detection fails

	// Exposed for testing and development only
	Papa.Parser = Parser;
	Papa.ParserHandle = ParserHandle;
	Papa.NetworkStreamer = NetworkStreamer;
	Papa.FileStreamer = FileStreamer;
	Papa.StringStreamer = StringStreamer;

	if (typeof module !== 'undefined' && module.exports)
	{
		// Export to Node...
		module.exports = Papa;
	}
	else if (isFunction(global.define) && global.define.amd)
	{
		// Wireup with RequireJS
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Papa; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else
	{
		// ...or as browser global
		global.Papa = Papa;
	}

	if (global.jQuery)
	{
		var $ = global.jQuery;
		$.fn.parse = function(options)
		{
			var config = options.config || {};
			var queue = [];

			this.each(function(idx)
			{
				var supported = $(this).prop('tagName').toUpperCase() == "INPUT"
								&& $(this).attr('type').toLowerCase() == "file"
								&& global.FileReader;

				if (!supported || !this.files || this.files.length == 0)
					return true;	// continue to next input element

				for (var i = 0; i < this.files.length; i++)
				{
					queue.push({
						file: this.files[i],
						inputElem: this,
						instanceConfig: $.extend({}, config)
					});
				}
			});

			parseNextFile();	// begin parsing
			return this;		// maintains chainability


			function parseNextFile()
			{
				if (queue.length == 0)
				{
					if (isFunction(options.complete))
						options.complete();
					return;
				}

				var f = queue[0];

				if (isFunction(options.before))
				{
					var returned = options.before(f.file, f.inputElem);

					if (typeof returned === 'object')
					{
						if (returned.action == "abort")
						{
							error("AbortError", f.file, f.inputElem, returned.reason);
							return;	// Aborts all queued files immediately
						}
						else if (returned.action == "skip")
						{
							fileComplete();	// parse the next file in the queue, if any
							return;
						}
						else if (typeof returned.config === 'object')
							f.instanceConfig = $.extend(f.instanceConfig, returned.config);
					}
					else if (returned == "skip")
					{
						fileComplete();	// parse the next file in the queue, if any
						return;
					}
				}

				// Wrap up the user's complete callback, if any, so that ours also gets executed
				var userCompleteFunc = f.instanceConfig.complete;
				f.instanceConfig.complete = function(results)
				{
					if (isFunction(userCompleteFunc))
						userCompleteFunc(results, f.file, f.inputElem);
					fileComplete();
				};

				Papa.parse(f.file, f.instanceConfig);
			}

			function error(name, file, elem, reason)
			{
				if (isFunction(options.error))
					options.error({name: name}, file, elem, reason);
			}

			function fileComplete()
			{
				queue.splice(0, 1);
				parseNextFile();
			}
		}
	}


	if (IS_PAPA_WORKER)
	{
		global.onmessage = workerThreadReceivedMessage;
	}
	else if (Papa.WORKERS_SUPPORTED)
	{
		AUTO_SCRIPT_PATH = getScriptPath();

		// Check if the script was loaded synchronously
		if (!document.body)
		{
			// Body doesn't exist yet, must be synchronous
			LOADED_SYNC = true;
		}
		else
		{
			document.addEventListener('DOMContentLoaded', function () {
				LOADED_SYNC = true;
			}, true);
		}
	}




	function CsvToJson(_input, _config)
	{
		_config = _config || {};

		if (_config.worker && Papa.WORKERS_SUPPORTED)
		{
			var w = newWorker();

			w.userStep = _config.step;
			w.userChunk = _config.chunk;
			w.userComplete = _config.complete;
			w.userError = _config.error;

			_config.step = isFunction(_config.step);
			_config.chunk = isFunction(_config.chunk);
			_config.complete = isFunction(_config.complete);
			_config.error = isFunction(_config.error);
			delete _config.worker;	// prevent infinite loop

			w.postMessage({
				input: _input,
				config: _config,
				workerId: w.id
			});

			return;
		}

		var streamer = null;
		if (typeof _input === 'string')
		{
			if (_config.download)
				streamer = new NetworkStreamer(_config);
			else
				streamer = new StringStreamer(_config);
		}
		else if ((global.File && _input instanceof File) || _input instanceof Object)	// ...Safari. (see issue #106)
			streamer = new FileStreamer(_config);

		return streamer.stream(_input);
	}






	function JsonToCsv(_input, _config)
	{
		var _output = "";
		var _fields = [];

		// Default configuration

		/** whether to surround every datum with quotes */
		var _quotes = false;

		/** delimiting character */
		var _delimiter = ",";

		/** newline character(s) */
		var _newline = "\r\n";

		unpackConfig();

		if (typeof _input === 'string')
			_input = JSON.parse(_input);

		if (_input instanceof Array)
		{
			if (!_input.length || _input[0] instanceof Array)
				return serialize(null, _input);
			else if (typeof _input[0] === 'object')
				return serialize(objectKeys(_input[0]), _input);
		}
		else if (typeof _input === 'object')
		{
			if (typeof _input.data === 'string')
				_input.data = JSON.parse(_input.data);

			if (_input.data instanceof Array)
			{
				if (!_input.fields)
					_input.fields = _input.data[0] instanceof Array
									? _input.fields
									: objectKeys(_input.data[0]);

				if (!(_input.data[0] instanceof Array) && typeof _input.data[0] !== 'object')
					_input.data = [_input.data];	// handles input like [1,2,3] or ["asdf"]
			}

			return serialize(_input.fields || [], _input.data || []);
		}

		// Default (any valid paths should return before this)
		throw "exception: Unable to serialize unrecognized input";


		function unpackConfig()
		{
			if (typeof _config !== 'object')
				return;

			if (typeof _config.delimiter === 'string'
				&& _config.delimiter.length == 1
				&& Papa.BAD_DELIMITERS.indexOf(_config.delimiter) == -1)
			{
				_delimiter = _config.delimiter;
			}

			if (typeof _config.quotes === 'boolean'
				|| _config.quotes instanceof Array)
				_quotes = _config.quotes;

			if (typeof _config.newline === 'string')
				_newline = _config.newline;
		}


		/** Turns an object's keys into an array */
		function objectKeys(obj)
		{
			if (typeof obj !== 'object')
				return [];
			var keys = [];
			for (var key in obj)
				keys.push(key);
			return keys;
		}

		/** The double for loop that iterates the data and writes out a CSV string including header row */
		function serialize(fields, data)
		{
			var csv = "";

			if (typeof fields === 'string')
				fields = JSON.parse(fields);
			if (typeof data === 'string')
				data = JSON.parse(data);

			var hasHeader = fields instanceof Array && fields.length > 0;
			var dataKeyedByField = !(data[0] instanceof Array);

			// If there a header row, write it first
			if (hasHeader)
			{
				for (var i = 0; i < fields.length; i++)
				{
					if (i > 0)
						csv += _delimiter;
					csv += safe(fields[i], i);
				}
				if (data.length > 0)
					csv += _newline;
			}

			// Then write out the data
			for (var row = 0; row < data.length; row++)
			{
				var maxCol = hasHeader ? fields.length : data[row].length;

				for (var col = 0; col < maxCol; col++)
				{
					if (col > 0)
						csv += _delimiter;
					var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
					csv += safe(data[row][colIdx], col);
				}

				if (row < data.length - 1)
					csv += _newline;
			}

			return csv;
		}

		/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
		function safe(str, col)
		{
			if (typeof str === "undefined" || str === null)
				return "";

			str = str.toString().replace(/"/g, '""');

			var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
							|| (_quotes instanceof Array && _quotes[col])
							|| hasAny(str, Papa.BAD_DELIMITERS)
							|| str.indexOf(_delimiter) > -1
							|| str.charAt(0) == ' '
							|| str.charAt(str.length - 1) == ' ';

			return needsQuotes ? '"' + str + '"' : str;
		}

		function hasAny(str, substrings)
		{
			for (var i = 0; i < substrings.length; i++)
				if (str.indexOf(substrings[i]) > -1)
					return true;
			return false;
		}
	}

	/** ChunkStreamer is the base prototype for various streamer implementations. */
	function ChunkStreamer(config)
	{
		this._handle = null;
		this._paused = false;
		this._finished = false;
		this._input = null;
		this._baseIndex = 0;
		this._partialLine = "";
		this._rowCount = 0;
		this._start = 0;
		this._nextChunk = null;
		this.isFirstChunk = true;
		this._completeResults = {
			data: [],
			errors: [],
			meta: {}
		};
		replaceConfig.call(this, config);

		this.parseChunk = function(chunk)
		{
			// First chunk pre-processing
			if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
			{
				var modifiedChunk = this._config.beforeFirstChunk(chunk);
				if (modifiedChunk !== undefined)
					chunk = modifiedChunk;
			}
			this.isFirstChunk = false;

			// Rejoin the line we likely just split in two by chunking the file
			var aggregate = this._partialLine + chunk;
			this._partialLine = "";

			var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
			
			if (this._handle.paused() || this._handle.aborted())
				return;
			
			var lastIndex = results.meta.cursor;
			
			if (!this._finished)
			{
				this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
				this._baseIndex = lastIndex;
			}

			if (results && results.data)
				this._rowCount += results.data.length;

			var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

			if (IS_PAPA_WORKER)
			{
				global.postMessage({
					results: results,
					workerId: Papa.WORKER_ID,
					finished: finishedIncludingPreview
				});
			}
			else if (isFunction(this._config.chunk))
			{
				this._config.chunk(results, this._handle);
				if (this._paused)
					return;
				results = undefined;
				this._completeResults = undefined;
			}

			if (!this._config.step && !this._config.chunk) {
				this._completeResults.data = this._completeResults.data.concat(results.data);
				this._completeResults.errors = this._completeResults.errors.concat(results.errors);
				this._completeResults.meta = results.meta;
			}

			if (finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted))
				this._config.complete(this._completeResults);

			if (!finishedIncludingPreview && (!results || !results.meta.paused))
				this._nextChunk();

			return results;
		};

		this._sendError = function(error)
		{
			if (isFunction(this._config.error))
				this._config.error(error);
			else if (IS_PAPA_WORKER && this._config.error)
			{
				global.postMessage({
					workerId: Papa.WORKER_ID,
					error: error,
					finished: false
				});
			}
		};

		function replaceConfig(config)
		{
			// Deep-copy the config so we can edit it
			var configCopy = copy(config);
			configCopy.chunkSize = parseInt(configCopy.chunkSize);	// parseInt VERY important so we don't concatenate strings!
			if (!config.step && !config.chunk)
				configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
			this._handle = new ParserHandle(configCopy);
			this._handle.streamer = this;
			this._config = configCopy;	// persist the copy to the caller
		}
	}


	function NetworkStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.RemoteChunkSize;
		ChunkStreamer.call(this, config);

		var xhr;

		if (IS_WORKER)
		{
			this._nextChunk = function()
			{
				this._readChunk();
				this._chunkLoaded();
			};
		}
		else
		{
			this._nextChunk = function()
			{
				this._readChunk();
			};
		}

		this.stream = function(url)
		{
			this._input = url;
			this._nextChunk();	// Starts streaming
		};

		this._readChunk = function()
		{
			if (this._finished)
			{
				this._chunkLoaded();
				return;
			}

			xhr = new XMLHttpRequest();
			
			if (!IS_WORKER)
			{
				xhr.onload = bindFunction(this._chunkLoaded, this);
				xhr.onerror = bindFunction(this._chunkError, this);
			}

			xhr.open("GET", this._input, !IS_WORKER);
			
			if (this._config.chunkSize)
			{
				var end = this._start + this._config.chunkSize - 1;	// minus one because byte range is inclusive
				xhr.setRequestHeader("Range", "bytes="+this._start+"-"+end);
				xhr.setRequestHeader("If-None-Match", "webkit-no-cache"); // https://bugs.webkit.org/show_bug.cgi?id=82672
			}

			try {
				xhr.send();
			}
			catch (err) {
				this._chunkError(err.message);
			}

			if (IS_WORKER && xhr.status == 0)
				this._chunkError();
			else
				this._start += this._config.chunkSize;
		}

		this._chunkLoaded = function()
		{
			if (xhr.readyState != 4)
				return;

			if (xhr.status < 200 || xhr.status >= 400)
			{
				this._chunkError();
				return;
			}

			this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
			this.parseChunk(xhr.responseText);
		}

		this._chunkError = function(errorMessage)
		{
			var errorText = xhr.statusText || errorMessage;
			this._sendError(errorText);
		}

		function getFileSize(xhr)
		{
			var contentRange = xhr.getResponseHeader("Content-Range");
			return parseInt(contentRange.substr(contentRange.lastIndexOf("/") + 1));
		}
	}
	NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
	NetworkStreamer.prototype.constructor = NetworkStreamer;


	function FileStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.LocalChunkSize;
		ChunkStreamer.call(this, config);

		var reader, slice;

		// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
		// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
		var usingAsyncReader = typeof FileReader !== 'undefined';	// Safari doesn't consider it a function - see issue #105

		this.stream = function(file)
		{
			this._input = file;
			slice = file.slice || file.webkitSlice || file.mozSlice;

			if (usingAsyncReader)
			{
				reader = new FileReader();		// Preferred method of reading files, even in workers
				reader.onload = bindFunction(this._chunkLoaded, this);
				reader.onerror = bindFunction(this._chunkError, this);
			}
			else
				reader = new FileReaderSync();	// Hack for running in a web worker in Firefox

			this._nextChunk();	// Starts streaming
		};

		this._nextChunk = function()
		{
			if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
				this._readChunk();
		}

		this._readChunk = function()
		{
			var input = this._input;
			if (this._config.chunkSize)
			{
				var end = Math.min(this._start + this._config.chunkSize, this._input.size);
				input = slice.call(input, this._start, end);
			}
			var txt = reader.readAsText(input, this._config.encoding);
			if (!usingAsyncReader)
				this._chunkLoaded({ target: { result: txt } });	// mimic the async signature
		}

		this._chunkLoaded = function(event)
		{
			// Very important to increment start each time before handling results
			this._start += this._config.chunkSize;
			this._finished = !this._config.chunkSize || this._start >= this._input.size;
			this.parseChunk(event.target.result);
		}

		this._chunkError = function()
		{
			this._sendError(reader.error);
		}

	}
	FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
	FileStreamer.prototype.constructor = FileStreamer;


	function StringStreamer(config)
	{
		config = config || {};
		ChunkStreamer.call(this, config);

		var string;
		var remaining;
		this.stream = function(s)
		{
			string = s;
			remaining = s;
			return this._nextChunk();
		}
		this._nextChunk = function()
		{
			if (this._finished) return;
			var size = this._config.chunkSize;
			var chunk = size ? remaining.substr(0, size) : remaining;
			remaining = size ? remaining.substr(size) : '';
			this._finished = !remaining;
			return this.parseChunk(chunk);
		}
	}
	StringStreamer.prototype = Object.create(StringStreamer.prototype);
	StringStreamer.prototype.constructor = StringStreamer;



	// Use one ParserHandle per entire CSV file or string
	function ParserHandle(_config)
	{
		// One goal is to minimize the use of regular expressions...
		var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;

		var self = this;
		var _stepCounter = 0;	// Number of times step was called (number of rows parsed)
		var _input;				// The input being parsed
		var _parser;			// The core parser being used
		var _paused = false;	// Whether we are paused or not
		var _aborted = false;   // Whether the parser has aborted or not
		var _delimiterError;	// Temporary state between delimiter detection and processing results
		var _fields = [];		// Fields are from the header row of the input, if there is one
		var _results = {		// The last results returned from the parser
			data: [],
			errors: [],
			meta: {}
		};

		if (isFunction(_config.step))
		{
			var userStep = _config.step;
			_config.step = function(results)
			{
				_results = results;

				if (needsHeaderRow())
					processResults();
				else	// only call user's step function after header row
				{
					processResults();

					// It's possbile that this line was empty and there's no row here after all
					if (_results.data.length == 0)
						return;

					_stepCounter += results.data.length;
					if (_config.preview && _stepCounter > _config.preview)
						_parser.abort();
					else
						userStep(_results, self);
				}
			};
		}

		/**
		 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
		 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
		 * when an input comes in multiple chunks, like from a file.
		 */
		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			if (!_config.newline)
				_config.newline = guessLineEndings(input);

			_delimiterError = false;
			if (!_config.delimiter)
			{
				var delimGuess = guessDelimiter(input);
				if (delimGuess.successful)
					_config.delimiter = delimGuess.bestDelimiter;
				else
				{
					_delimiterError = true;	// add error after parsing (otherwise it would be overwritten)
					_config.delimiter = Papa.DefaultDelimiter;
				}
				_results.meta.delimiter = _config.delimiter;
			}

			var parserConfig = copy(_config);
			if (_config.preview && _config.header)
				parserConfig.preview++;	// to compensate for header row

			_input = input;
			_parser = new Parser(parserConfig);
			_results = _parser.parse(_input, baseIndex, ignoreLastRow);
			processResults();
			return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
		};

		this.paused = function()
		{
			return _paused;
		};

		this.pause = function()
		{
			_paused = true;
			_parser.abort();
			_input = _input.substr(_parser.getCharIndex());
		};

		this.resume = function()
		{
			_paused = false;
			self.streamer.parseChunk(_input);
		};

		this.aborted = function () {
			return _aborted;
		}

		this.abort = function()
		{
			_aborted = true;
			_parser.abort();
			_results.meta.aborted = true;
			if (isFunction(_config.complete))
				_config.complete(_results);
			_input = "";
		};

		function processResults()
		{
			if (_results && _delimiterError)
			{
				addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '"+Papa.DefaultDelimiter+"'");
				_delimiterError = false;
			}

			if (_config.skipEmptyLines)
			{
				for (var i = 0; i < _results.data.length; i++)
					if (_results.data[i].length == 1 && _results.data[i][0] == "")
						_results.data.splice(i--, 1);
			}

			if (needsHeaderRow())
				fillHeaderFields();

			return applyHeaderAndDynamicTyping();
		}

		function needsHeaderRow()
		{
			return _config.header && _fields.length == 0;
		}

		function fillHeaderFields()
		{
			if (!_results)
				return;
			for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
				for (var j = 0; j < _results.data[i].length; j++)
					_fields.push(_results.data[i][j]);
			_results.data.splice(0, 1);
		}

		function applyHeaderAndDynamicTyping()
		{
			if (!_results || (!_config.header && !_config.dynamicTyping))
				return _results;

			for (var i = 0; i < _results.data.length; i++)
			{
				var row = {};

				for (var j = 0; j < _results.data[i].length; j++)
				{
					if (_config.dynamicTyping)
					{
						var value = _results.data[i][j];
						if (value == "true" || value == "TRUE")
							_results.data[i][j] = true;
						else if (value == "false" || value == "FALSE")
							_results.data[i][j] = false;
						else
							_results.data[i][j] = tryParseFloat(value);
					}

					if (_config.header)
					{
						if (j >= _fields.length)
						{
							if (!row["__parsed_extra"])
								row["__parsed_extra"] = [];
							row["__parsed_extra"].push(_results.data[i][j]);
						}
						else
							row[_fields[j]] = _results.data[i][j];
					}
				}

				if (_config.header)
				{
					_results.data[i] = row;
					if (j > _fields.length)
						addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + _fields.length + " fields but parsed " + j, i);
					else if (j < _fields.length)
						addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + _fields.length + " fields but parsed " + j, i);
				}
			}

			if (_config.header && _results.meta)
				_results.meta.fields = _fields;
			return _results;
		}

		function guessDelimiter(input)
		{
			var delimChoices = [",", "\t", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i = 0; i < delimChoices.length; i++)
			{
				var delim = delimChoices[i];
				var delta = 0, avgFieldCount = 0;
				fieldCountPrevRow = undefined;

				var preview = new Parser({
					delimiter: delim,
					preview: 10
				}).parse(input);

				for (var j = 0; j < preview.data.length; j++)
				{
					var fieldCount = preview.data[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined')
					{
						fieldCountPrevRow = fieldCount;
						continue;
					}
					else if (fieldCount > 1)
					{
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				if (preview.data.length > 0)
					avgFieldCount /= preview.data.length;

				if ((typeof bestDelta === 'undefined' || delta < bestDelta)
					&& avgFieldCount > 1.99)
				{
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return {
				successful: !!bestDelim,
				bestDelimiter: bestDelim
			}
		}

		function guessLineEndings(input)
		{
			input = input.substr(0, 1024*1024);	// max length 1 MB

			var r = input.split('\r');

			if (r.length == 1)
				return '\n';

			var numWithN = 0;
			for (var i = 0; i < r.length; i++)
			{
				if (r[i][0] == '\n')
					numWithN++;
			}

			return numWithN >= r.length / 2 ? '\r\n' : '\r';
		}

		function tryParseFloat(val)
		{
			var isNumber = FLOAT.test(val);
			return isNumber ? parseFloat(val) : val;
		}

		function addError(type, code, msg, row)
		{
			_results.errors.push({
				type: type,
				code: code,
				message: msg,
				row: row
			});
		}
	}





	/** The core parser implements speedy and correct CSV parsing */
	function Parser(config)
	{
		// Unpack the config object
		config = config || {};
		var delim = config.delimiter;
		var newline = config.newline;
		var comments = config.comments;
		var step = config.step;
		var preview = config.preview;
		var fastMode = config.fastMode;

		// Delimiter must be valid
		if (typeof delim !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(delim) > -1)
			delim = ",";

		// Comment character must be valid
		if (comments === delim)
			throw "Comment character same as delimiter";
		else if (comments === true)
			comments = "#";
		else if (typeof comments !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(comments) > -1)
			comments = false;

		// Newline must be valid: \r, \n, or \r\n
		if (newline != '\n' && newline != '\r' && newline != '\r\n')
			newline = '\n';

		// We're gonna need these at the Parser scope
		var cursor = 0;
		var aborted = false;

		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			// For some reason, in Chrome, this speeds things up (!?)
			if (typeof input !== 'string')
				throw "Input must be a string";

			// We don't need to compute some of these every time parse() is called,
			// but having them in a more local scope seems to perform better
			var inputLen = input.length,
				delimLen = delim.length,
				newlineLen = newline.length,
				commentsLen = comments.length;
			var stepIsFunction = typeof step === 'function';

			// Establish starting state
			cursor = 0;
			var data = [], errors = [], row = [], lastCursor = 0;

			if (!input)
				return returnable();

			if (fastMode || (fastMode !== false && input.indexOf('"') === -1))
			{
				var rows = input.split(newline);
				for (var i = 0; i < rows.length; i++)
				{
					var row = rows[i];
					cursor += row.length;
					if (i !== rows.length - 1)
						cursor += newline.length;
					else if (ignoreLastRow)
						return returnable();
					if (comments && row.substr(0, commentsLen) == comments)
						continue;
					if (stepIsFunction)
					{
						data = [];
						pushRow(row.split(delim));
						doStep();
						if (aborted)
							return returnable();
					}
					else
						pushRow(row.split(delim));
					if (preview && i >= preview)
					{
						data = data.slice(0, preview);
						return returnable(true);
					}
				}
				return returnable();
			}

			var nextDelim = input.indexOf(delim, cursor);
			var nextNewline = input.indexOf(newline, cursor);

			// Parser loop
			for (;;)
			{
				// Field has opening quote
				if (input[cursor] == '"')
				{
					// Start our search for the closing quote where the cursor is
					var quoteSearch = cursor;

					// Skip the opening quote
					cursor++;

					for (;;)
					{
						// Find closing quote
						var quoteSearch = input.indexOf('"', quoteSearch+1);

						if (quoteSearch === -1)
						{
							if (!ignoreLastRow) {
								// No closing quote... what a pity
								errors.push({
									type: "Quotes",
									code: "MissingQuotes",
									message: "Quoted field unterminated",
									row: data.length,	// row has yet to be inserted
									index: cursor
								});
							}
							return finish();
						}

						if (quoteSearch === inputLen-1)
						{
							// Closing quote at EOF
							var value = input.substring(cursor, quoteSearch).replace(/""/g, '"');
							return finish(value);
						}

						// If this quote is escaped, it's part of the data; skip it
						if (input[quoteSearch+1] == '"')
						{
							quoteSearch++;
							continue;
						}

						if (input[quoteSearch+1] == delim)
						{
							// Closing quote followed by delimiter
							row.push(input.substring(cursor, quoteSearch).replace(/""/g, '"'));
							cursor = quoteSearch + 1 + delimLen;
							nextDelim = input.indexOf(delim, cursor);
							nextNewline = input.indexOf(newline, cursor);
							break;
						}

						if (input.substr(quoteSearch+1, newlineLen) === newline)
						{
							// Closing quote followed by newline
							row.push(input.substring(cursor, quoteSearch).replace(/""/g, '"'));
							saveRow(quoteSearch + 1 + newlineLen);
							nextDelim = input.indexOf(delim, cursor);	// because we may have skipped the nextDelim in the quoted field

							if (stepIsFunction)
							{
								doStep();
								if (aborted)
									return returnable();
							}
							
							if (preview && data.length >= preview)
								return returnable(true);

							break;
						}
					}

					continue;
				}

				// Comment found at start of new line
				if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
				{
					if (nextNewline == -1)	// Comment ends at EOF
						return returnable();
					cursor = nextNewline + newlineLen;
					nextNewline = input.indexOf(newline, cursor);
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// Next delimiter comes before next newline, so we've reached end of field
				if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
				{
					row.push(input.substring(cursor, nextDelim));
					cursor = nextDelim + delimLen;
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// End of row
				if (nextNewline !== -1)
				{
					row.push(input.substring(cursor, nextNewline));
					saveRow(nextNewline + newlineLen);

					if (stepIsFunction)
					{
						doStep();
						if (aborted)
							return returnable();
					}

					if (preview && data.length >= preview)
						return returnable(true);

					continue;
				}

				break;
			}


			return finish();


			function pushRow(row)
			{
				data.push(row);
				lastCursor = cursor;
			}

			/**
			 * Appends the remaining input from cursor to the end into
			 * row, saves the row, calls step, and returns the results.
			 */
			function finish(value)
			{
				if (ignoreLastRow)
					return returnable();
				if (typeof value === 'undefined')
					value = input.substr(cursor);
				row.push(value);
				cursor = inputLen;	// important in case parsing is paused
				pushRow(row);
				if (stepIsFunction)
					doStep();
				return returnable();
			}

			/**
			 * Appends the current row to the results. It sets the cursor
			 * to newCursor and finds the nextNewline. The caller should
			 * take care to execute user's step function and check for
			 * preview and end parsing if necessary.
			 */
			function saveRow(newCursor)
			{
				cursor = newCursor;
				pushRow(row);
				row = [];
				nextNewline = input.indexOf(newline, cursor);
			}

			/** Returns an object with the results, errors, and meta. */
			function returnable(stopped)
			{
				return {
					data: data,
					errors: errors,
					meta: {
						delimiter: delim,
						linebreak: newline,
						aborted: aborted,
						truncated: !!stopped,
						cursor: lastCursor + (baseIndex || 0)
					}
				};
			}

			/** Executes the user's step function and resets data & errors. */
			function doStep()
			{
				step(returnable());
				data = [], errors = [];
			}
		};

		/** Sets the abort flag */
		this.abort = function()
		{
			aborted = true;
		};

		/** Gets the cursor position */
		this.getCharIndex = function()
		{
			return cursor;
		};
	}


	// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
	// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
	function getScriptPath()
	{
		var scripts = document.getElementsByTagName('script');
		return scripts.length ? scripts[scripts.length - 1].src : '';
	}

	function newWorker()
	{
		if (!Papa.WORKERS_SUPPORTED)
			return false;
		if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
			throw new Error(
				'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
				'You need to set Papa.SCRIPT_PATH manually.'
			);
		var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
		// Append "papaworker" to the search string to tell papaparse that this is our worker.
		workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
		var w = new global.Worker(workerUrl);
		w.onmessage = mainThreadReceivedMessage;
		w.id = workerIdCounter++;
		workers[w.id] = w;
		return w;
	}

	/** Callback when main thread receives a message */
	function mainThreadReceivedMessage(e)
	{
		var msg = e.data;
		var worker = workers[msg.workerId];
		var aborted = false;

		if (msg.error)
			worker.userError(msg.error, msg.file);
		else if (msg.results && msg.results.data)
		{
			var abort = function() {
				aborted = true;
				completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
			};

			var handle = {
				abort: abort,
				pause: notImplemented,
				resume: notImplemented
			};

			if (isFunction(worker.userStep))
			{
				for (var i = 0; i < msg.results.data.length; i++)
				{
					worker.userStep({
						data: [msg.results.data[i]],
						errors: msg.results.errors,
						meta: msg.results.meta
					}, handle);
					if (aborted)
						break;
				}
				delete msg.results;	// free memory ASAP
			}
			else if (isFunction(worker.userChunk))
			{
				worker.userChunk(msg.results, handle, msg.file);
				delete msg.results;
			}
		}

		if (msg.finished && !aborted)
			completeWorker(msg.workerId, msg.results);
	}

	function completeWorker(workerId, results) {
		var worker = workers[workerId];
		if (isFunction(worker.userComplete))
			worker.userComplete(results);
		worker.terminate();
		delete workers[workerId];
	}

	function notImplemented() {
		throw "Not implemented.";
	}

	/** Callback when worker thread receives a message */
	function workerThreadReceivedMessage(e)
	{
		var msg = e.data;

		if (typeof Papa.WORKER_ID === 'undefined' && msg)
			Papa.WORKER_ID = msg.workerId;

		if (typeof msg.input === 'string')
		{
			global.postMessage({
				workerId: Papa.WORKER_ID,
				results: Papa.parse(msg.input, msg.config),
				finished: true
			});
		}
		else if ((global.File && msg.input instanceof File) || msg.input instanceof Object)	// thank you, Safari (see issue #106)
		{
			var results = Papa.parse(msg.input, msg.config);
			if (results)
				global.postMessage({
					workerId: Papa.WORKER_ID,
					results: results,
					finished: true
				});
		}
	}

	/** Makes a deep copy of an array or object (mostly) */
	function copy(obj)
	{
		if (typeof obj !== 'object')
			return obj;
		var cpy = obj instanceof Array ? [] : {};
		for (var key in obj)
			cpy[key] = copy(obj[key]);
		return cpy;
	}

	function bindFunction(f, self)
	{
		return function() { f.apply(self, arguments); };
	}

	function isFunction(func)
	{
		return typeof func === 'function';
	}
})(typeof window !== 'undefined' ? window : this);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI3ODBkMWFmYmEyOTE1NTdhMjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ZpbGUtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21hcC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbnVtYmVyLWlucHV0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9wYXBhcGFyc2UvcGFwYXBhcnNlLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7Ozs7OztBQUVBLElBQU1BLE1BQU0sa0JBQVE7QUFDbEJDLFVBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkI7QUFEVSxDQUFSLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQzJDNkI7O0FBRTdCLEtBQWEsMkJBQU0sSUFBSztBQUFSLFNBQWtCLE1BQVUsVUFBUSxRQUFLLEtBQUcs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QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhCQUE4QixnQkFBZ0IsRUFBRTtBQUNsRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTI3ODBkMWFmYmEyOTE1NTdhMjUiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xyXG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgPGgzPklucHV0czwvaDM+XHJcbiAgICAgIDxGaWxlSW5wdXQgb246Y2hhbmdlPVwiaGFuZGxlRmlsZXMoZXZlbnQuZmlsZXMpXCIgbGFiZWw9XCJNYXAgYW5kIENTViBmaWxlc1wiIG5hbWU9XCJpbnB1dFwiIC8+XHJcbiAgICAgIFxyXG4gICAgICA8bGFiZWw+U2NhbGU8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXQgYmluZDp2YWx1ZT1cInNjYWxlSFwiIGxhYmVsPVwiaG9yaXpvbnRhbFwiIG5hbWU9XCJob3J6XCIgc3RlcD1cIi4xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgIDxOdW1iZXJJbnB1dCBiaW5kOnZhbHVlPVwic2NhbGVWXCIgbGFiZWw9XCJ2ZXJ0aWNhbFwiIG5hbWU9XCJ2ZXJ0XCIgc3RlcD1cIi4xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8bGFiZWw+T2Zmc2V0PC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0IGJpbmQ6dmFsdWU9XCJvZmZzZXRYXCIgbGFiZWw9XCJYXCIgbmFtZT1cInhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0IGJpbmQ6dmFsdWU9XCJvZmZzZXRZXCIgbGFiZWw9XCJZXCIgbmFtZT1cInlcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcbiAgICAgIDxoMz5WaWV3PC9oMz5cclxuICAgICAgPGxhYmVsPmZvbzwvbGFiZWw+XHJcbiAgICAgIDxNYXAgc3JjPVwie3ttYXBTcmN9fVwiIHNwb3RzPVwie3tzcG90c319XCIgb246bG9hZGVkPVwic2V0KHsgbWFwRGltZW5zaW9uczogZXZlbnQuZGltZW5zaW9ucyB9KVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgIEdhcmFnZSBNYXAgVXRpbCAmbWRhc2g7IEh5cGVySW4gSW5jLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IEZpbGVJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9maWxlLWlucHV0JztcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vY29tcG9uZW50L251bWJlci1pbnB1dCc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnQvbWFwJztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IGZvckVhY2ggPSAoeHMsIGFjYykgPT4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh4cywgYWNjKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2NhbGVIOiAxLjAsXHJcbiAgICAgIHNjYWxlVjogMS4wLFxyXG4gICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICBtYXBTcmM6ICcnLFxyXG4gICAgICBtYXBEaW1lbnNpb25zOiBudWxsLFxyXG4gICAgICBjc3ZEYXRhOiBbXVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBtb2RpZmllcnM6IChzY2FsZUgsIHNjYWxlViwgb2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNjYWxlSDogcGFyc2VGbG9hdChzY2FsZUgpLFxyXG4gICAgICAgIHNjYWxlVjogcGFyc2VGbG9hdChzY2FsZVYpLFxyXG4gICAgICAgIG9mZnNldFg6IHBhcnNlRmxvYXQob2Zmc2V0WCksXHJcbiAgICAgICAgb2Zmc2V0WTogcGFyc2VGbG9hdChvZmZzZXRZKVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNwb3RzOiAoY3N2RGF0YSwgbW9kaWZpZXJzLCBtYXBEaW1lbnNpb25zKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY3N2RGF0YS5sZW5ndGggPT0gMCB8fCAhbWFwRGltZW5zaW9ucykgcmV0dXJuIFtdO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgeyBzY2FsZUgsIHNjYWxlViwgb2Zmc2V0WCwgb2Zmc2V0WSB9ID0gbW9kaWZpZXJzO1xyXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1hcERpbWVuc2lvbnM7XHJcbiAgICAgIGNvbnN0IHRvUGl4ZWwgPSAobWF4LCB2YWx1ZSwgc2NhbGUsIG9mZnNldCkgPT4gbWF4ICogdmFsdWUgKiBzY2FsZSArIG9mZnNldDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBjc3ZEYXRhLm1hcCgoW25hbWUsIHZhbHVlWCwgdmFsdWVZXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgdmFsdWVYLFxyXG4gICAgICAgICAgdmFsdWVZLFxyXG4gICAgICAgICAgeDogdG9QaXhlbCh3aWR0aCwgdmFsdWVYLCBzY2FsZUgsIG9mZnNldFgpLFxyXG4gICAgICAgICAgeTogdG9QaXhlbChoZWlnaHQsIHZhbHVlWSwgc2NhbGVWLCBvZmZzZXRZKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcclxuICAgICAgZm9yRWFjaChmaWxlcywgZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzBdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChleHQpIHtcclxuICAgICAgICBjYXNlICdjc3YnOlxyXG4gICAgICAgICAgY29tcG9uZW50LmhhbmRsZUNTVkZpbGUoZmlsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdqcGcnOlxyXG4gICAgICAgIGNhc2UgJ2pwZWcnOlxyXG4gICAgICAgIGNhc2UgJ3BuZyc6XHJcbiAgICAgICAgY2FzZSAnc3ZnJzpcclxuICAgICAgICAgIGNvbXBvbmVudC5oYW5kbGVNYXBGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVua25vd24gZmlsZSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUNTVkZpbGUoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICBQYXBhLnBhcnNlKGZpbGUsIHtcclxuICAgICAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGVycm9ycywgZGF0YSB9ID0gcmVzdWx0cztcclxuICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDU1YgcGFyc2luZyBlcnJvcnNcXG4nLCBlcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KHsgY3N2RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZU1hcEZpbGUoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gZXZlbnQgPT4gY29tcG9uZW50LnNldCh7IG1hcFNyYzogZXZlbnQudGFyZ2V0LnJlc3VsdCB9KTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBGaWxlSW5wdXQsXHJcbiAgICBOdW1iZXJJbnB1dCxcclxuICAgIE1hcFxyXG4gIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuaHRtbCIsIlxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxyXG4gIDxmb3JtIGNsYXNzPVwiZmlsZS1kcm9wLWFyZWFcIiByZWY6Zm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9faW5wdXRcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19pY29uXCIgc3JjPVwiLi9pbWFnZXMvaWNfdXBsb2FkLnN2Z1wiPlxyXG4gICAgICB7eyNpZiBtdWx0aXBsZX19XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19maWxlXCIgdHlwZT1cImZpbGVcIiBuYW1lPVwie3tpZH19XCIgaWQ9XCJ7e2lkfX1cIiBtdWx0aXBsZSAvPlxyXG4gICAgICB7e2Vsc2V9fVxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fZmlsZVwiIHR5cGU9XCJmaWxlXCIgbmFtZT1cInt7aWR9fVwiIGlkPVwie3tpZH19XCIgLz5cclxuICAgICAge3svaWZ9fVxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fbGFiZWxcIiBmb3I9XCJ7e2lkfX1cIj57e3tkcm9wTGFiZWx9fX08L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZmlsZS1kcm9wLWFyZWFfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX191cGxvYWRpbmdcIj5VcGxvYWRpbmcmaGVsbGlwOzwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19zdWNjZXNzXCI+RG9uZSE8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fZXJyb3JcIj5FcnJvciEgPHNwYW4+PC9zcGFuPi48L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5jb25zdCBpc0FkdmFuY2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG5cclxuY29uc3Qgb24gPSAoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikgPT4gXHJcbiAgdHlwZS5zcGxpdCgnICcpLmZvckVhY2godCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCwgaGFuZGxlcikpO1xyXG5cclxuY29uc3QgaW5pdCA9IChjb21wb25lbnQpID0+IHtcclxuICBpZiAoaXNBZHZhbmNlZCkge1xyXG4gICAgY29uc3QgeyBmb3JtIH0gPSBjb21wb25lbnQucmVmcztcclxuICAgIG9uKGZvcm0sICdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgIG9uKGZvcm0sICdkcmFnb3ZlciBkcmFnZW50ZXInLCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWRyYWdvdmVyJykpO1xyXG4gICAgb24oZm9ybSwgJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdvdmVyJykpO1xyXG4gICAgb24oZm9ybSwgJ2Ryb3AnLCBlID0+IHtcclxuICAgICAgY29uc3QgeyBmaWxlcyB9ID0gZS5kYXRhVHJhbnNmZXI7XHJcbiAgICAgIGNvbXBvbmVudC5zZXQoeyBmaWxlczogZmlsZXMgfSk7XHJcbiAgICAgIGNvbXBvbmVudC5maXJlKCdjaGFuZ2UnLCB7IGZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZmlsZS1kcm9wLWFyZWEtLWFkdmFuY2VkJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFwID0gKHhzLCBhY2MpID0+IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh4cywgYWNjKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvbnJlbmRlcigpIHtcclxuICAgIGluaXQodGhpcyk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgbGFiZWw6ICdmb28nLFxyXG4gICAgICBtdWx0aXBsZTogZmFsc2VcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaWQ6IG5hbWUgPT4gYGZpbGUtJHtuYW1lfWAsXHJcbiAgICBkcm9wTGFiZWw6IGZpbGVzID0+IHtcclxuICAgICAgY29uc3QgY291bnQgPSBmaWxlcy5sZW5ndGg7XHJcbiAgICAgIGlmIChjb3VudCA9PSAwKSAgICAgIHJldHVybiAnPHN0cm9uZz5DaG9vc2UgYSBmaWxlPC9zdHJvbmc+PHNwYW4gY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fZHJhZ25kcm9wXCI+IG9yIGRyYWcgaXQgaGVyZTwvc3Bhbj4uJztcclxuICAgICAgZWxzZSBpZiAoY291bnQgPD0gMikgcmV0dXJuIG1hcChmaWxlcywgZiA9PiBmLm5hbWUpLmpvaW4oJzxicj4nKTtcclxuICAgICAgZWxzZSAvKiBjb3VudCA+IDEgKi8gcmV0dXJuIGAke2NvdW50fSBmaWxlcyBzZWxlY3RlZGA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHN0eWxlPlxyXG4uZmlsZS1kcm9wLWFyZWEge1xyXG5cdGZvbnQtc2l6ZTogMS4yNWVtOyAvKiAyMCAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6IDEwMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlsZS1kcm9wLWFyZWEtLWFkdmFuY2VkIHtcclxuXHRvdXRsaW5lOiAycHggZGFzaGVkICM5MmIwYjM7XHJcblx0b3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xyXG5cclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XHJcblx0dHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLmZpbGUtZHJvcC1hcmVhLmlzLWRyYWdvdmVyIHtcclxuXHRvdXRsaW5lLW9mZnNldDogLTIwcHg7XHJcblx0b3V0bGluZS1jb2xvcjogI2M4ZGFkZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbiAgICAgICAgXHJcbi5maWxlLWRyb3AtYXJlYV9fZHJhZ25kcm9wLFxyXG4uZmlsZS1kcm9wLWFyZWFfX2ljb24ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZpbGUtZHJvcC1hcmVhLS1hZHZhbmNlZCAuZmlsZS1kcm9wLWFyZWFfX2RyYWduZHJvcCB7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYS0tYWR2YW5jZWQgLmZpbGUtZHJvcC1hcmVhX19pY29uIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0b3BhY2l0eTogMC4yNTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZmlsZS1kcm9wLWFyZWEuaXMtdXBsb2FkaW5nIC5maWxlLWRyb3AtYXJlYV9faW5wdXQsXHJcbi5maWxlLWRyb3AtYXJlYS5pcy1zdWNjZXNzIC5maWxlLWRyb3AtYXJlYV9faW5wdXQsXHJcbi5maWxlLWRyb3AtYXJlYS5pcy1lcnJvciAuZmlsZS1kcm9wLWFyZWFfX2lucHV0IHtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5maWxlLWRyb3AtYXJlYV9fdXBsb2FkaW5nLFxyXG4uZmlsZS1kcm9wLWFyZWFfX3N1Y2Nlc3MsXHJcbi5maWxlLWRyb3AtYXJlYV9fZXJyb3Jcclxue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maWxlLWRyb3AtYXJlYS5pcy11cGxvYWRpbmcgLmZpbGUtZHJvcC1hcmVhX191cGxvYWRpbmcsXHJcbi5maWxlLWRyb3AtYXJlYS5pcy1zdWNjZXNzIC5maWxlLWRyb3AtYXJlYV9fc3VjY2VzcyxcclxuLmZpbGUtZHJvcC1hcmVhLmlzLWVycm9yIC5maWxlLWRyb3AtYXJlYV9fZXJyb3Ige1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYV9fdXBsb2FkaW5nIHtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLmZpbGUtZHJvcC1hcmVhX19zdWNjZXNzIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogYXBwZWFyLWZyb20taW5zaWRlIC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0YW5pbWF0aW9uOiBhcHBlYXItZnJvbS1pbnNpZGUgLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFwcGVhci1mcm9tLWluc2lkZSB7XHJcblx0ZnJvbVx0eyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApIHNjYWxlKCAwICk7IH1cclxuXHQ3NSVcdFx0eyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApIHNjYWxlKCAxLjEgKTsgfVxyXG5cdHRvXHRcdHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKSBzY2FsZSggMSApOyB9XHJcbn1cclxuQGtleWZyYW1lcyBhcHBlYXItZnJvbS1pbnNpZGUge1xyXG5cdGZyb21cdHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtNTAlICkgc2NhbGUoIDAgKTsgfVxyXG5cdDc1JVx0XHR7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApIHNjYWxlKCAxLjEgKTsgfVxyXG5cdHRvXHRcdHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtNTAlICkgc2NhbGUoIDEgKTsgfVxyXG59XHJcblxyXG4uZmlsZS1kcm9wLWFyZWFfX3Jlc3RhcnQge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmZpbGUtZHJvcC1hcmVhX19yZXN0YXJ0OmZvY3VzLFxyXG4uZmlsZS1kcm9wLWFyZWFfX3Jlc3RhcnQ6aG92ZXIge1xyXG5cdGNvbG9yOiAjMzliZmQzO1xyXG59XHJcblxyXG4uanMgLmZpbGUtZHJvcC1hcmVhX19maWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbi5qcyAuZmlsZS1kcm9wLWFyZWFfX2xhYmVsIHtcclxuXHRtYXgtd2lkdGg6IDgwJTtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uanMgLmZpbGUtZHJvcC1hcmVhX19sYWJlbDpob3ZlciBzdHJvbmcsXHJcbi5maWxlLWRyb3AtYXJlYV9fZmlsZTpmb2N1cyArIC5maWxlLWRyb3AtYXJlYV9fbGFiZWwgc3Ryb25nLFxyXG4uZmlsZS1kcm9wLWFyZWFfX2ZpbGUuaGFzLWZvY3VzICsgLmZpbGUtZHJvcC1hcmVhX19sYWJlbCBzdHJvbmcge1xyXG5cdGNvbG9yOiAjMzliZmQzO1xyXG59XHJcbi5qcyAuZmlsZS1kcm9wLWFyZWFfX2ZpbGU6Zm9jdXMgKyAuZmlsZS1kcm9wLWFyZWFfX2xhYmVsLFxyXG4uanMgLmZpbGUtZHJvcC1hcmVhX19maWxlLmhhcy1mb2N1cyArIC5maWxlLWRyb3AtYXJlYV9fbGFiZWwge1xyXG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgIzAwMDtcclxuXHRvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XHJcbn1cclxuXHJcbi5uby1qcyAuZmlsZS1kcm9wLWFyZWFfX2xhYmVsIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubm8tanMgLmZpbGUtZHJvcC1hcmVhX19idXR0b24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYV9fYnV0dG9uIHtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjZTVlZGYxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzOWJmZDM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRwYWRkaW5nOiA4cHggMTZweDtcclxuXHRtYXJnaW46IDQwcHggYXV0byAwO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYV9fYnV0dG9uOmhvdmVyLFxyXG4uZmlsZS1kcm9wLWFyZWFfX2J1dHRvbjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzBmM2M0YjtcclxufVxyXG5cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L2ZpbGUtaW5wdXQuaHRtbCIsIjxkaXYgY2xhc3M9XCJtYXBcIj5cclxuICB7eyNpZiBzcmN9fVxyXG4gICAgPGltZyBjbGFzcz1cIm1hcF9faW1hZ2VcIiBzcmM9XCJ7e3NyY319XCIgb246bG9hZD1cInVwZGF0ZURpbWVuc2lvbih0aGlzKVwiIC8+XHJcbiAgICB7eyNpZiBkaW1lbnNpb25zfX1cclxuICAgIDxkaXYgY2xhc3M9XCJtYXBfX3BvaS1sYXllclwiIHN0eWxlPVwie3twb2lMYXllclN0eWxlc319XCI+XHJcbiAgICAgIHt7I2VhY2ggc3BvdHMgYXMgc3BvdH19XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3BvaVwiIHN0eWxlPVwie3twb2lTdHlsZXMoc3BvdCwgZGltZW5zaW9ucyl9fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2lfX21hcmtlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2lfX2xhYmVsXCI+XHJcbiAgICAgICAgICB7eyNpZiBzcG90Lm5hbWV9fXt7c3BvdC5uYW1lfX08YnIgLz57ey9pZn19XHJcbiAgICAgICAgICB4Ont7c3BvdC52YWx1ZVggfHwgJy0nfX0geTp7e3Nwb3QudmFsdWVZIHx8ICctJ319XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7ey9lYWNofX1cclxuICAgIDwvZGl2PlxyXG4gICAge3svaWZ9fVxyXG4gIHt7L2lmfX1cclxuPC9kaXY+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuY29uc3QgZ2V0RGltZW5zaW9ucyA9IGltZyA9PiB7XHJcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWc7XHJcbiAgcmV0dXJuIHdpZHRoICYmIGhlaWdodCA/IHsgd2lkdGgsIGhlaWdodCB9IDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvbnJlbmRlcigpIHtcclxuICAgIHRoaXMub2JzZXJ2ZSgnc3JjJywgKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSA9PiB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0KHsgY2FsY3VsYXRlRGltZW5zaW9uczogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3JjOiAnJyxcclxuICAgICAgc3BvdHM6IFtdLFxyXG4gICAgICBkaW1lbnNpb25zOiBudWxsLFxyXG4gICAgICBjYWxjdWxhdGVEaW1lbnNpb25zOiBmYWxzZSxcclxuICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgc2NhbGVIb3Jpem9udGFsOiAxLjAsXHJcbiAgICAgICAgc2NhbGVWZXJ0aWNhbDogMS4wLFxyXG4gICAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwb2lMYXllclN0eWxlczogKG1vZGlmaWVycywgZGltZW5zaW9ucykgPT4ge1xyXG4gICAgICBpZiAoZGltZW5zaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHsgc2NhbGVIb3Jpem9udGFsLCBzY2FsZVZlcnRpY2FsIH0gPSBtb2RpZmllcnM7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBkaW1lbnNpb25zO1xyXG4gICAgICAgIGNvbnN0IG1vZFdpZHRoID0gd2lkdGggKiBzY2FsZUhvcml6b250YWw7XHJcbiAgICAgICAgY29uc3QgbW9kSGVpZ2h0ID0gaGVpZ2h0ICogc2NhbGVWZXJ0aWNhbDtcclxuICAgICAgICByZXR1cm4gYHdpZHRoOiAke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4O2A7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGVscGVyczoge1xyXG4gICAgcG9pU3R5bGVzOiAoc3BvdCwgZGltZW5zaW9ucykgPT4ge1xyXG4gICAgICAvLyBjb25zdCB4ID0gc3BvdC54KGRpbWVuc2lvbnMud2lkdGgpO1xyXG4gICAgICAvLyBjb25zdCB5ID0gc3BvdC55KGRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgcmV0dXJuIGBsZWZ0OiAke3Nwb3QueH1weDsgdG9wOiAke3Nwb3QueX1weDtgO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlRGltZW5zaW9uKGltZykge1xyXG4gICAgICBpZiAodGhpcy5nZXQoJ2NhbGN1bGF0ZURpbWVuc2lvbnMnKSkge1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBnZXREaW1lbnNpb25zKGltZyk7XHJcbiAgICAgICAgdGhpcy5zZXQoeyBkaW1lbnNpb25zLCBjYWxjdWxhdGVEaW1lbnNpb25zOiBmYWxzZSB9KTtcclxuICAgICAgICB0aGlzLmZpcmUoJ2xvYWRlZCcsIHsgZGltZW5zaW9ucyB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLm1hcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2ltX2dyaWQuc3ZnKTtcclxufVxyXG5cclxuLm1hcF9faW1hZ2Uge1xyXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgI2ZiMjtcclxufVxyXG5cclxuLm1hcF9fcG9pLWxheWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdXRsaW5lOiAycHggZG90dGVkICNjMDA7XHJcbn1cclxuXHJcbi5tYXBfX3BvaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC0xMHB4KTtcclxufVxyXG5cclxuLnBvaV9fbWFya2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvcGFjaXR5OiAuNzU7XHJcbn1cclxuXHJcbi5wb2lfX2xhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMnB4IDNweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTAwO1xyXG4gIGNvbG9yOiAjOTAwO1xyXG4gIGZvbnQtc2l6ZTogLjc4NTdlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBvcGFjaXR5OiAuMjU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzLCBjb2xvciAuMTVzLCBvcGFjaXR5IC4xNXM7XHJcbn1cclxuXHJcbi5tYXBfX3BvaTpob3ZlciAucG9pX19tYXJrZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQ7XHJcbn1cclxuXHJcbi5tYXBfX3BvaTpob3ZlciAucG9pX19sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9tYXAuaHRtbCIsIjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgaWQ9XCJpbnB1dC0ke25hbWV9XCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LW51bWJlciBpbnB1dC1zbVwiIHR5cGU9XCJudW1iZXJcIiBiaW5kOnZhbHVlIHN0ZXA9e3tzdGVwfX0gYXJpYS1kZXNjcmliZWRieT1cImlucHV0LSR7bmFtZX1cIj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogJ1tsYWJlbF0nLFxyXG4gICAgICBuYW1lOiAnW25hbWVdJyxcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIHN0ZXA6IDFcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5pbnB1dC1udW1iZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9udW1iZXItaW5wdXQuaHRtbCIsIi8qIVxuXHRQYXBhIFBhcnNlXG5cdHY0LjEuMlxuXHRodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG4qL1xuKGZ1bmN0aW9uKGdsb2JhbClcbntcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIElTX1dPUktFUiA9ICFnbG9iYWwuZG9jdW1lbnQgJiYgISFnbG9iYWwucG9zdE1lc3NhZ2UsXG5cdFx0SVNfUEFQQV9XT1JLRVIgPSBJU19XT1JLRVIgJiYgLyhcXD98JilwYXBhd29ya2VyKD18JnwkKS8udGVzdChnbG9iYWwubG9jYXRpb24uc2VhcmNoKSxcblx0XHRMT0FERURfU1lOQyA9IGZhbHNlLCBBVVRPX1NDUklQVF9QQVRIO1xuXHR2YXIgd29ya2VycyA9IHt9LCB3b3JrZXJJZENvdW50ZXIgPSAwO1xuXG5cdHZhciBQYXBhID0ge307XG5cblx0UGFwYS5wYXJzZSA9IENzdlRvSnNvbjtcblx0UGFwYS51bnBhcnNlID0gSnNvblRvQ3N2O1xuXG5cdFBhcGEuUkVDT1JEX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApO1xuXHRQYXBhLlVOSVRfU0VQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMSk7XG5cdFBhcGEuQllURV9PUkRFUl9NQVJLID0gXCJcXHVmZWZmXCI7XG5cdFBhcGEuQkFEX0RFTElNSVRFUlMgPSBbXCJcXHJcIiwgXCJcXG5cIiwgXCJcXFwiXCIsIFBhcGEuQllURV9PUkRFUl9NQVJLXTtcblx0UGFwYS5XT1JLRVJTX1NVUFBPUlRFRCA9ICFJU19XT1JLRVIgJiYgISFnbG9iYWwuV29ya2VyO1xuXHRQYXBhLlNDUklQVF9QQVRIID0gbnVsbDtcdC8vIE11c3QgYmUgc2V0IGJ5IHlvdXIgY29kZSBpZiB5b3UgdXNlIHdvcmtlcnMgYW5kIHRoaXMgbGliIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseVxuXG5cdC8vIENvbmZpZ3VyYWJsZSBjaHVuayBzaXplcyBmb3IgbG9jYWwgYW5kIHJlbW90ZSBmaWxlcywgcmVzcGVjdGl2ZWx5XG5cdFBhcGEuTG9jYWxDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDEwO1x0Ly8gMTAgTUJcblx0UGFwYS5SZW1vdGVDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDU7XHQvLyA1IE1CXG5cdFBhcGEuRGVmYXVsdERlbGltaXRlciA9IFwiLFwiO1x0XHRcdC8vIFVzZWQgaWYgbm90IHNwZWNpZmllZCBhbmQgZGV0ZWN0aW9uIGZhaWxzXG5cblx0Ly8gRXhwb3NlZCBmb3IgdGVzdGluZyBhbmQgZGV2ZWxvcG1lbnQgb25seVxuXHRQYXBhLlBhcnNlciA9IFBhcnNlcjtcblx0UGFwYS5QYXJzZXJIYW5kbGUgPSBQYXJzZXJIYW5kbGU7XG5cdFBhcGEuTmV0d29ya1N0cmVhbWVyID0gTmV0d29ya1N0cmVhbWVyO1xuXHRQYXBhLkZpbGVTdHJlYW1lciA9IEZpbGVTdHJlYW1lcjtcblx0UGFwYS5TdHJpbmdTdHJlYW1lciA9IFN0cmluZ1N0cmVhbWVyO1xuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cylcblx0e1xuXHRcdC8vIEV4cG9ydCB0byBOb2RlLi4uXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBQYXBhO1xuXHR9XG5cdGVsc2UgaWYgKGlzRnVuY3Rpb24oZ2xvYmFsLmRlZmluZSkgJiYgZ2xvYmFsLmRlZmluZS5hbWQpXG5cdHtcblx0XHQvLyBXaXJldXAgd2l0aCBSZXF1aXJlSlNcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQYXBhOyB9KTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvLyAuLi5vciBhcyBicm93c2VyIGdsb2JhbFxuXHRcdGdsb2JhbC5QYXBhID0gUGFwYTtcblx0fVxuXG5cdGlmIChnbG9iYWwualF1ZXJ5KVxuXHR7XG5cdFx0dmFyICQgPSBnbG9iYWwualF1ZXJ5O1xuXHRcdCQuZm4ucGFyc2UgPSBmdW5jdGlvbihvcHRpb25zKVxuXHRcdHtcblx0XHRcdHZhciBjb25maWcgPSBvcHRpb25zLmNvbmZpZyB8fCB7fTtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oaWR4KVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgc3VwcG9ydGVkID0gJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykudG9VcHBlckNhc2UoKSA9PSBcIklOUFVUXCJcblx0XHRcdFx0XHRcdFx0XHQmJiAkKHRoaXMpLmF0dHIoJ3R5cGUnKS50b0xvd2VyQ2FzZSgpID09IFwiZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0JiYgZ2xvYmFsLkZpbGVSZWFkZXI7XG5cblx0XHRcdFx0aWYgKCFzdXBwb3J0ZWQgfHwgIXRoaXMuZmlsZXMgfHwgdGhpcy5maWxlcy5sZW5ndGggPT0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcdC8vIGNvbnRpbnVlIHRvIG5leHQgaW5wdXQgZWxlbWVudFxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdFx0ZmlsZTogdGhpcy5maWxlc1tpXSxcblx0XHRcdFx0XHRcdGlucHV0RWxlbTogdGhpcyxcblx0XHRcdFx0XHRcdGluc3RhbmNlQ29uZmlnOiAkLmV4dGVuZCh7fSwgY29uZmlnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cGFyc2VOZXh0RmlsZSgpO1x0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdFx0cmV0dXJuIHRoaXM7XHRcdC8vIG1haW50YWlucyBjaGFpbmFiaWxpdHlcblxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZU5leHRGaWxlKClcblx0XHRcdHtcblx0XHRcdFx0aWYgKHF1ZXVlLmxlbmd0aCA9PSAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jb21wbGV0ZSkpXG5cdFx0XHRcdFx0XHRvcHRpb25zLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGYgPSBxdWV1ZVswXTtcblxuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmJlZm9yZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBvcHRpb25zLmJlZm9yZShmLmZpbGUsIGYuaW5wdXRFbGVtKTtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0dXJuZWQgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChyZXR1cm5lZC5hY3Rpb24gPT0gXCJhYm9ydFwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRlcnJvcihcIkFib3J0RXJyb3JcIiwgZi5maWxlLCBmLmlucHV0RWxlbSwgcmV0dXJuZWQucmVhc29uKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1x0Ly8gQWJvcnRzIGFsbCBxdWV1ZWQgZmlsZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHJldHVybmVkLmFjdGlvbiA9PSBcInNraXBcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiByZXR1cm5lZC5jb25maWcgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnID0gJC5leHRlbmQoZi5pbnN0YW5jZUNvbmZpZywgcmV0dXJuZWQuY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocmV0dXJuZWQgPT0gXCJza2lwXCIpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV3JhcCB1cCB0aGUgdXNlcidzIGNvbXBsZXRlIGNhbGxiYWNrLCBpZiBhbnksIHNvIHRoYXQgb3VycyBhbHNvIGdldHMgZXhlY3V0ZWRcblx0XHRcdFx0dmFyIHVzZXJDb21wbGV0ZUZ1bmMgPSBmLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO1xuXHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlID0gZnVuY3Rpb24ocmVzdWx0cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKHVzZXJDb21wbGV0ZUZ1bmMpKVxuXHRcdFx0XHRcdFx0dXNlckNvbXBsZXRlRnVuYyhyZXN1bHRzLCBmLmZpbGUsIGYuaW5wdXRFbGVtKTtcblx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRQYXBhLnBhcnNlKGYuZmlsZSwgZi5pbnN0YW5jZUNvbmZpZyk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVycm9yKG5hbWUsIGZpbGUsIGVsZW0sIHJlYXNvbilcblx0XHRcdHtcblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5lcnJvcikpXG5cdFx0XHRcdFx0b3B0aW9ucy5lcnJvcih7bmFtZTogbmFtZX0sIGZpbGUsIGVsZW0sIHJlYXNvbik7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGZpbGVDb21wbGV0ZSgpXG5cdFx0XHR7XG5cdFx0XHRcdHF1ZXVlLnNwbGljZSgwLCAxKTtcblx0XHRcdFx0cGFyc2VOZXh0RmlsZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0aWYgKElTX1BBUEFfV09SS0VSKVxuXHR7XG5cdFx0Z2xvYmFsLm9ubWVzc2FnZSA9IHdvcmtlclRocmVhZFJlY2VpdmVkTWVzc2FnZTtcblx0fVxuXHRlbHNlIGlmIChQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHR7XG5cdFx0QVVUT19TQ1JJUFRfUEFUSCA9IGdldFNjcmlwdFBhdGgoKTtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBzY3JpcHQgd2FzIGxvYWRlZCBzeW5jaHJvbm91c2x5XG5cdFx0aWYgKCFkb2N1bWVudC5ib2R5KVxuXHRcdHtcblx0XHRcdC8vIEJvZHkgZG9lc24ndCBleGlzdCB5ZXQsIG11c3QgYmUgc3luY2hyb25vdXNcblx0XHRcdExPQURFRF9TWU5DID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdExPQURFRF9TWU5DID0gdHJ1ZTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cblxuXG5cdGZ1bmN0aW9uIENzdlRvSnNvbihfaW5wdXQsIF9jb25maWcpXG5cdHtcblx0XHRfY29uZmlnID0gX2NvbmZpZyB8fCB7fTtcblxuXHRcdGlmIChfY29uZmlnLndvcmtlciAmJiBQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHRcdHtcblx0XHRcdHZhciB3ID0gbmV3V29ya2VyKCk7XG5cblx0XHRcdHcudXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHR3LnVzZXJDaHVuayA9IF9jb25maWcuY2h1bms7XG5cdFx0XHR3LnVzZXJDb21wbGV0ZSA9IF9jb25maWcuY29tcGxldGU7XG5cdFx0XHR3LnVzZXJFcnJvciA9IF9jb25maWcuZXJyb3I7XG5cblx0XHRcdF9jb25maWcuc3RlcCA9IGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKTtcblx0XHRcdF9jb25maWcuY2h1bmsgPSBpc0Z1bmN0aW9uKF9jb25maWcuY2h1bmspO1xuXHRcdFx0X2NvbmZpZy5jb21wbGV0ZSA9IGlzRnVuY3Rpb24oX2NvbmZpZy5jb21wbGV0ZSk7XG5cdFx0XHRfY29uZmlnLmVycm9yID0gaXNGdW5jdGlvbihfY29uZmlnLmVycm9yKTtcblx0XHRcdGRlbGV0ZSBfY29uZmlnLndvcmtlcjtcdC8vIHByZXZlbnQgaW5maW5pdGUgbG9vcFxuXG5cdFx0XHR3LnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0aW5wdXQ6IF9pbnB1dCxcblx0XHRcdFx0Y29uZmlnOiBfY29uZmlnLFxuXHRcdFx0XHR3b3JrZXJJZDogdy5pZFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc3RyZWFtZXIgPSBudWxsO1xuXHRcdGlmICh0eXBlb2YgX2lucHV0ID09PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRpZiAoX2NvbmZpZy5kb3dubG9hZClcblx0XHRcdFx0c3RyZWFtZXIgPSBuZXcgTmV0d29ya1N0cmVhbWVyKF9jb25maWcpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdHJlYW1lciA9IG5ldyBTdHJpbmdTdHJlYW1lcihfY29uZmlnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIF9pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IF9pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIC4uLlNhZmFyaS4gKHNlZSBpc3N1ZSAjMTA2KVxuXHRcdFx0c3RyZWFtZXIgPSBuZXcgRmlsZVN0cmVhbWVyKF9jb25maWcpO1xuXG5cdFx0cmV0dXJuIHN0cmVhbWVyLnN0cmVhbShfaW5wdXQpO1xuXHR9XG5cblxuXG5cblxuXG5cdGZ1bmN0aW9uIEpzb25Ub0NzdihfaW5wdXQsIF9jb25maWcpXG5cdHtcblx0XHR2YXIgX291dHB1dCA9IFwiXCI7XG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgY29uZmlndXJhdGlvblxuXG5cdFx0LyoqIHdoZXRoZXIgdG8gc3Vycm91bmQgZXZlcnkgZGF0dW0gd2l0aCBxdW90ZXMgKi9cblx0XHR2YXIgX3F1b3RlcyA9IGZhbHNlO1xuXG5cdFx0LyoqIGRlbGltaXRpbmcgY2hhcmFjdGVyICovXG5cdFx0dmFyIF9kZWxpbWl0ZXIgPSBcIixcIjtcblxuXHRcdC8qKiBuZXdsaW5lIGNoYXJhY3RlcihzKSAqL1xuXHRcdHZhciBfbmV3bGluZSA9IFwiXFxyXFxuXCI7XG5cblx0XHR1bnBhY2tDb25maWcoKTtcblxuXHRcdGlmICh0eXBlb2YgX2lucHV0ID09PSAnc3RyaW5nJylcblx0XHRcdF9pbnB1dCA9IEpTT04ucGFyc2UoX2lucHV0KTtcblxuXHRcdGlmIChfaW5wdXQgaW5zdGFuY2VvZiBBcnJheSlcblx0XHR7XG5cdFx0XHRpZiAoIV9pbnB1dC5sZW5ndGggfHwgX2lucHV0WzBdIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUobnVsbCwgX2lucHV0KTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBfaW5wdXRbMF0gPT09ICdvYmplY3QnKVxuXHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKG9iamVjdEtleXMoX2lucHV0WzBdKSwgX2lucHV0KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ29iamVjdCcpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfaW5wdXQuZGF0YSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9pbnB1dC5kYXRhID0gSlNPTi5wYXJzZShfaW5wdXQuZGF0YSk7XG5cblx0XHRcdGlmIChfaW5wdXQuZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoIV9pbnB1dC5maWVsZHMpXG5cdFx0XHRcdFx0X2lucHV0LmZpZWxkcyA9IF9pbnB1dC5kYXRhWzBdIGluc3RhbmNlb2YgQXJyYXlcblx0XHRcdFx0XHRcdFx0XHRcdD8gX2lucHV0LmZpZWxkc1xuXHRcdFx0XHRcdFx0XHRcdFx0OiBvYmplY3RLZXlzKF9pbnB1dC5kYXRhWzBdKTtcblxuXHRcdFx0XHRpZiAoIShfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5KSAmJiB0eXBlb2YgX2lucHV0LmRhdGFbMF0gIT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdF9pbnB1dC5kYXRhID0gW19pbnB1dC5kYXRhXTtcdC8vIGhhbmRsZXMgaW5wdXQgbGlrZSBbMSwyLDNdIG9yIFtcImFzZGZcIl1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShfaW5wdXQuZmllbGRzIHx8IFtdLCBfaW5wdXQuZGF0YSB8fCBbXSk7XG5cdFx0fVxuXG5cdFx0Ly8gRGVmYXVsdCAoYW55IHZhbGlkIHBhdGhzIHNob3VsZCByZXR1cm4gYmVmb3JlIHRoaXMpXG5cdFx0dGhyb3cgXCJleGNlcHRpb246IFVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0XCI7XG5cblxuXHRcdGZ1bmN0aW9uIHVucGFja0NvbmZpZygpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcuZGVsaW1pdGVyID09PSAnc3RyaW5nJ1xuXHRcdFx0XHQmJiBfY29uZmlnLmRlbGltaXRlci5sZW5ndGggPT0gMVxuXHRcdFx0XHQmJiBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoX2NvbmZpZy5kZWxpbWl0ZXIpID09IC0xKVxuXHRcdFx0e1xuXHRcdFx0XHRfZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5xdW90ZXMgPT09ICdib29sZWFuJ1xuXHRcdFx0XHR8fCBfY29uZmlnLnF1b3RlcyBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRfcXVvdGVzID0gX2NvbmZpZy5xdW90ZXM7XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5uZXdsaW5lID09PSAnc3RyaW5nJylcblx0XHRcdFx0X25ld2xpbmUgPSBfY29uZmlnLm5ld2xpbmU7XG5cdFx0fVxuXG5cblx0XHQvKiogVHVybnMgYW4gb2JqZWN0J3Mga2V5cyBpbnRvIGFuIGFycmF5ICovXG5cdFx0ZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmopXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKVxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRyZXR1cm4ga2V5cztcblx0XHR9XG5cblx0XHQvKiogVGhlIGRvdWJsZSBmb3IgbG9vcCB0aGF0IGl0ZXJhdGVzIHRoZSBkYXRhIGFuZCB3cml0ZXMgb3V0IGEgQ1NWIHN0cmluZyBpbmNsdWRpbmcgaGVhZGVyIHJvdyAqL1xuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZShmaWVsZHMsIGRhdGEpXG5cdFx0e1xuXHRcdFx0dmFyIGNzdiA9IFwiXCI7XG5cblx0XHRcdGlmICh0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZmllbGRzID0gSlNPTi5wYXJzZShmaWVsZHMpO1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cblx0XHRcdHZhciBoYXNIZWFkZXIgPSBmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSAmJiBmaWVsZHMubGVuZ3RoID4gMDtcblx0XHRcdHZhciBkYXRhS2V5ZWRCeUZpZWxkID0gIShkYXRhWzBdIGluc3RhbmNlb2YgQXJyYXkpO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhIGhlYWRlciByb3csIHdyaXRlIGl0IGZpcnN0XG5cdFx0XHRpZiAoaGFzSGVhZGVyKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpID4gMClcblx0XHRcdFx0XHRcdGNzdiArPSBfZGVsaW1pdGVyO1xuXHRcdFx0XHRcdGNzdiArPSBzYWZlKGZpZWxkc1tpXSwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMClcblx0XHRcdFx0XHRjc3YgKz0gX25ld2xpbmU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZW4gd3JpdGUgb3V0IHRoZSBkYXRhXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBkYXRhLmxlbmd0aDsgcm93KyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYXhDb2wgPSBoYXNIZWFkZXIgPyBmaWVsZHMubGVuZ3RoIDogZGF0YVtyb3ddLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtYXhDb2w7IGNvbCsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGNvbCA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHR2YXIgY29sSWR4ID0gaGFzSGVhZGVyICYmIGRhdGFLZXllZEJ5RmllbGQgPyBmaWVsZHNbY29sXSA6IGNvbDtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShkYXRhW3Jvd11bY29sSWR4XSwgY29sKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyb3cgPCBkYXRhLmxlbmd0aCAtIDEpXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3N2O1xuXHRcdH1cblxuXHRcdC8qKiBFbmNsb3NlcyBhIHZhbHVlIGFyb3VuZCBxdW90ZXMgaWYgbmVlZGVkIChtYWtlcyBhIHZhbHVlIHNhZmUgZm9yIENTViBpbnNlcnRpb24pICovXG5cdFx0ZnVuY3Rpb24gc2FmZShzdHIsIGNvbClcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBzdHIgPT09IG51bGwpXG5cdFx0XHRcdHJldHVybiBcIlwiO1xuXG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpO1xuXG5cdFx0XHR2YXIgbmVlZHNRdW90ZXMgPSAodHlwZW9mIF9xdW90ZXMgPT09ICdib29sZWFuJyAmJiBfcXVvdGVzKVxuXHRcdFx0XHRcdFx0XHR8fCAoX3F1b3RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIF9xdW90ZXNbY29sXSlcblx0XHRcdFx0XHRcdFx0fHwgaGFzQW55KHN0ciwgUGFwYS5CQURfREVMSU1JVEVSUylcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmluZGV4T2YoX2RlbGltaXRlcikgPiAtMVxuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KDApID09ICcgJ1xuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSA9PSAnICc7XG5cblx0XHRcdHJldHVybiBuZWVkc1F1b3RlcyA/ICdcIicgKyBzdHIgKyAnXCInIDogc3RyO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhc0FueShzdHIsIHN1YnN0cmluZ3MpXG5cdFx0e1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzdHJpbmdzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRpZiAoc3RyLmluZGV4T2Yoc3Vic3RyaW5nc1tpXSkgPiAtMSlcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKiogQ2h1bmtTdHJlYW1lciBpcyB0aGUgYmFzZSBwcm90b3R5cGUgZm9yIHZhcmlvdXMgc3RyZWFtZXIgaW1wbGVtZW50YXRpb25zLiAqL1xuXHRmdW5jdGlvbiBDaHVua1N0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdHRoaXMuX2hhbmRsZSA9IG51bGw7XG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cdFx0dGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9pbnB1dCA9IG51bGw7XG5cdFx0dGhpcy5fYmFzZUluZGV4ID0gMDtcblx0XHR0aGlzLl9wYXJ0aWFsTGluZSA9IFwiXCI7XG5cdFx0dGhpcy5fcm93Q291bnQgPSAwO1xuXHRcdHRoaXMuX3N0YXJ0ID0gMDtcblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBudWxsO1xuXHRcdHRoaXMuaXNGaXJzdENodW5rID0gdHJ1ZTtcblx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yczogW10sXG5cdFx0XHRtZXRhOiB7fVxuXHRcdH07XG5cdFx0cmVwbGFjZUNvbmZpZy5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnBhcnNlQ2h1bmsgPSBmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHQvLyBGaXJzdCBjaHVuayBwcmUtcHJvY2Vzc2luZ1xuXHRcdFx0aWYgKHRoaXMuaXNGaXJzdENodW5rICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbW9kaWZpZWRDaHVuayA9IHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGNodW5rKTtcblx0XHRcdFx0aWYgKG1vZGlmaWVkQ2h1bmsgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRjaHVuayA9IG1vZGlmaWVkQ2h1bms7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IGZhbHNlO1xuXG5cdFx0XHQvLyBSZWpvaW4gdGhlIGxpbmUgd2UgbGlrZWx5IGp1c3Qgc3BsaXQgaW4gdHdvIGJ5IGNodW5raW5nIHRoZSBmaWxlXG5cdFx0XHR2YXIgYWdncmVnYXRlID0gdGhpcy5fcGFydGlhbExpbmUgKyBjaHVuaztcblx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gXCJcIjtcblxuXHRcdFx0dmFyIHJlc3VsdHMgPSB0aGlzLl9oYW5kbGUucGFyc2UoYWdncmVnYXRlLCB0aGlzLl9iYXNlSW5kZXgsICF0aGlzLl9maW5pc2hlZCk7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLl9oYW5kbGUucGF1c2VkKCkgfHwgdGhpcy5faGFuZGxlLmFib3J0ZWQoKSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XG5cdFx0XHR2YXIgbGFzdEluZGV4ID0gcmVzdWx0cy5tZXRhLmN1cnNvcjtcblx0XHRcdFxuXHRcdFx0aWYgKCF0aGlzLl9maW5pc2hlZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcGFydGlhbExpbmUgPSBhZ2dyZWdhdGUuc3Vic3RyaW5nKGxhc3RJbmRleCAtIHRoaXMuX2Jhc2VJbmRleCk7XG5cdFx0XHRcdHRoaXMuX2Jhc2VJbmRleCA9IGxhc3RJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5kYXRhKVxuXHRcdFx0XHR0aGlzLl9yb3dDb3VudCArPSByZXN1bHRzLmRhdGEubGVuZ3RoO1xuXG5cdFx0XHR2YXIgZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ID0gdGhpcy5fZmluaXNoZWQgfHwgKHRoaXMuX2NvbmZpZy5wcmV2aWV3ICYmIHRoaXMuX3Jvd0NvdW50ID49IHRoaXMuX2NvbmZpZy5wcmV2aWV3KTtcblxuXHRcdFx0aWYgKElTX1BBUEFfV09SS0VSKVxuXHRcdFx0e1xuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHJlc3VsdHM6IHJlc3VsdHMsXG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdGZpbmlzaGVkOiBmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5jaHVuaykpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5jaHVuayhyZXN1bHRzLCB0aGlzLl9oYW5kbGUpO1xuXHRcdFx0XHRpZiAodGhpcy5fcGF1c2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0cmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX2NvbmZpZy5zdGVwICYmICF0aGlzLl9jb25maWcuY2h1bmspIHtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YS5jb25jYXQocmVzdWx0cy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycyA9IHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMuY29uY2F0KHJlc3VsdHMuZXJyb3JzKTtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLm1ldGEgPSByZXN1bHRzLm1ldGE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXcgJiYgaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY29tcGxldGUpICYmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5tZXRhLmFib3J0ZWQpKVxuXHRcdFx0XHR0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzKTtcblxuXHRcdFx0aWYgKCFmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXcgJiYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLm1ldGEucGF1c2VkKSlcblx0XHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XG5cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0XHR0aGlzLl9zZW5kRXJyb3IgPSBmdW5jdGlvbihlcnJvcilcblx0XHR7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuZXJyb3IpKVxuXHRcdFx0XHR0aGlzLl9jb25maWcuZXJyb3IoZXJyb3IpO1xuXHRcdFx0ZWxzZSBpZiAoSVNfUEFQQV9XT1JLRVIgJiYgdGhpcy5fY29uZmlnLmVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRlcnJvcjogZXJyb3IsXG5cdFx0XHRcdFx0ZmluaXNoZWQ6IGZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiByZXBsYWNlQ29uZmlnKGNvbmZpZylcblx0XHR7XG5cdFx0XHQvLyBEZWVwLWNvcHkgdGhlIGNvbmZpZyBzbyB3ZSBjYW4gZWRpdCBpdFxuXHRcdFx0dmFyIGNvbmZpZ0NvcHkgPSBjb3B5KGNvbmZpZyk7XG5cdFx0XHRjb25maWdDb3B5LmNodW5rU2l6ZSA9IHBhcnNlSW50KGNvbmZpZ0NvcHkuY2h1bmtTaXplKTtcdC8vIHBhcnNlSW50IFZFUlkgaW1wb3J0YW50IHNvIHdlIGRvbid0IGNvbmNhdGVuYXRlIHN0cmluZ3MhXG5cdFx0XHRpZiAoIWNvbmZpZy5zdGVwICYmICFjb25maWcuY2h1bmspXG5cdFx0XHRcdGNvbmZpZ0NvcHkuY2h1bmtTaXplID0gbnVsbDsgIC8vIGRpc2FibGUgUmFuZ2UgaGVhZGVyIGlmIG5vdCBzdHJlYW1pbmc7IGJhZCB2YWx1ZXMgYnJlYWsgSUlTIC0gc2VlIGlzc3VlICMxOTZcblx0XHRcdHRoaXMuX2hhbmRsZSA9IG5ldyBQYXJzZXJIYW5kbGUoY29uZmlnQ29weSk7XG5cdFx0XHR0aGlzLl9oYW5kbGUuc3RyZWFtZXIgPSB0aGlzO1xuXHRcdFx0dGhpcy5fY29uZmlnID0gY29uZmlnQ29weTtcdC8vIHBlcnNpc3QgdGhlIGNvcHkgdG8gdGhlIGNhbGxlclxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gTmV0d29ya1N0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5SZW1vdGVDaHVua1NpemU7XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgeGhyO1xuXG5cdFx0aWYgKElTX1dPUktFUilcblx0XHR7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdFx0XHR0aGlzLl9jaHVua0xvYWRlZCgpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24odXJsKVxuXHRcdHtcblx0XHRcdHRoaXMuX2lucHV0ID0gdXJsO1xuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0eGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRcblx0XHRcdGlmICghSVNfV09SS0VSKVxuXHRcdFx0e1xuXHRcdFx0XHR4aHIub25sb2FkID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rTG9hZGVkLCB0aGlzKTtcblx0XHRcdFx0eGhyLm9uZXJyb3IgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtFcnJvciwgdGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdHhoci5vcGVuKFwiR0VUXCIsIHRoaXMuX2lucHV0LCAhSVNfV09SS0VSKTtcblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBlbmQgPSB0aGlzLl9zdGFydCArIHRoaXMuX2NvbmZpZy5jaHVua1NpemUgLSAxO1x0Ly8gbWludXMgb25lIGJlY2F1c2UgYnl0ZSByYW5nZSBpcyBpbmNsdXNpdmVcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLCBcImJ5dGVzPVwiK3RoaXMuX3N0YXJ0K1wiLVwiK2VuZCk7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLCBcIndlYmtpdC1uby1jYWNoZVwiKTsgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgyNjcyXG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHhoci5zZW5kKCk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoSVNfV09SS0VSICYmIHhoci5zdGF0dXMgPT0gMClcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLl9zdGFydCArPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rTG9hZGVkID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gNDAwKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jaHVua0Vycm9yKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhdGhpcy5fY29uZmlnLmNodW5rU2l6ZSB8fCB0aGlzLl9zdGFydCA+IGdldEZpbGVTaXplKHhocik7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSlcblx0XHR7XG5cdFx0XHR2YXIgZXJyb3JUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgZXJyb3JNZXNzYWdlO1xuXHRcdFx0dGhpcy5fc2VuZEVycm9yKGVycm9yVGV4dCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0RmlsZVNpemUoeGhyKVxuXHRcdHtcblx0XHRcdHZhciBjb250ZW50UmFuZ2UgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVJhbmdlXCIpO1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KGNvbnRlbnRSYW5nZS5zdWJzdHIoY29udGVudFJhbmdlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpKTtcblx0XHR9XG5cdH1cblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHROZXR3b3JrU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV0d29ya1N0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gRmlsZVN0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5Mb2NhbENodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciByZWFkZXIsIHNsaWNlO1xuXG5cdFx0Ly8gRmlsZVJlYWRlciBpcyBiZXR0ZXIgdGhhbiBGaWxlUmVhZGVyU3luYyAoZXZlbiBpbiB3b3JrZXIpIC0gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzI0NzA4NjQ5LzEwNDg4NjJcblx0XHQvLyBCdXQgRmlyZWZveCBpcyBhIHBpbGwsIHRvbyAtIHNlZSBpc3N1ZSAjNzY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzc2XG5cdFx0dmFyIHVzaW5nQXN5bmNSZWFkZXIgPSB0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCc7XHQvLyBTYWZhcmkgZG9lc24ndCBjb25zaWRlciBpdCBhIGZ1bmN0aW9uIC0gc2VlIGlzc3VlICMxMDVcblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24oZmlsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IGZpbGU7XG5cdFx0XHRzbGljZSA9IGZpbGUuc2xpY2UgfHwgZmlsZS53ZWJraXRTbGljZSB8fCBmaWxlLm1velNsaWNlO1xuXG5cdFx0XHRpZiAodXNpbmdBc3luY1JlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcdFx0Ly8gUHJlZmVycmVkIG1ldGhvZCBvZiByZWFkaW5nIGZpbGVzLCBldmVuIGluIHdvcmtlcnNcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHJlYWRlci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZWFkZXIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcdC8vIEhhY2sgZm9yIHJ1bm5pbmcgaW4gYSB3ZWIgd29ya2VyIGluIEZpcmVmb3hcblxuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoIXRoaXMuX2ZpbmlzaGVkICYmICghdGhpcy5fY29uZmlnLnByZXZpZXcgfHwgdGhpcy5fcm93Q291bnQgPCB0aGlzLl9jb25maWcucHJldmlldykpXG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dDtcblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gTWF0aC5taW4odGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplLCB0aGlzLl9pbnB1dC5zaXplKTtcblx0XHRcdFx0aW5wdXQgPSBzbGljZS5jYWxsKGlucHV0LCB0aGlzLl9zdGFydCwgZW5kKTtcblx0XHRcdH1cblx0XHRcdHZhciB0eHQgPSByZWFkZXIucmVhZEFzVGV4dChpbnB1dCwgdGhpcy5fY29uZmlnLmVuY29kaW5nKTtcblx0XHRcdGlmICghdXNpbmdBc3luY1JlYWRlcilcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoeyB0YXJnZXQ6IHsgcmVzdWx0OiB0eHQgfSB9KTtcdC8vIG1pbWljIHRoZSBhc3luYyBzaWduYXR1cmVcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKGV2ZW50KVxuXHRcdHtcblx0XHRcdC8vIFZlcnkgaW1wb3J0YW50IHRvIGluY3JlbWVudCBzdGFydCBlYWNoIHRpbWUgYmVmb3JlIGhhbmRsaW5nIHJlc3VsdHNcblx0XHRcdHRoaXMuX3N0YXJ0ICs9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICF0aGlzLl9jb25maWcuY2h1bmtTaXplIHx8IHRoaXMuX3N0YXJ0ID49IHRoaXMuX2lucHV0LnNpemU7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IocmVhZGVyLmVycm9yKTtcblx0XHR9XG5cblx0fVxuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdEZpbGVTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBTdHJpbmdTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgc3RyaW5nO1xuXHRcdHZhciByZW1haW5pbmc7XG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzKVxuXHRcdHtcblx0XHRcdHN0cmluZyA9IHM7XG5cdFx0XHRyZW1haW5pbmcgPSBzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX25leHRDaHVuaygpO1xuXHRcdH1cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKSByZXR1cm47XG5cdFx0XHR2YXIgc2l6ZSA9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR2YXIgY2h1bmsgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cigwLCBzaXplKSA6IHJlbWFpbmluZztcblx0XHRcdHJlbWFpbmluZyA9IHNpemUgPyByZW1haW5pbmcuc3Vic3RyKHNpemUpIDogJyc7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICFyZW1haW5pbmc7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNodW5rKGNodW5rKTtcblx0XHR9XG5cdH1cblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdTdHJlYW1lcjtcblxuXG5cblx0Ly8gVXNlIG9uZSBQYXJzZXJIYW5kbGUgcGVyIGVudGlyZSBDU1YgZmlsZSBvciBzdHJpbmdcblx0ZnVuY3Rpb24gUGFyc2VySGFuZGxlKF9jb25maWcpXG5cdHtcblx0XHQvLyBPbmUgZ29hbCBpcyB0byBtaW5pbWl6ZSB0aGUgdXNlIG9mIHJlZ3VsYXIgZXhwcmVzc2lvbnMuLi5cblx0XHR2YXIgRkxPQVQgPSAvXlxccyotPyhcXGQqXFwuP1xcZCt8XFxkK1xcLj9cXGQqKShlWy0rXT9cXGQrKT9cXHMqJC9pO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBfc3RlcENvdW50ZXIgPSAwO1x0Ly8gTnVtYmVyIG9mIHRpbWVzIHN0ZXAgd2FzIGNhbGxlZCAobnVtYmVyIG9mIHJvd3MgcGFyc2VkKVxuXHRcdHZhciBfaW5wdXQ7XHRcdFx0XHQvLyBUaGUgaW5wdXQgYmVpbmcgcGFyc2VkXG5cdFx0dmFyIF9wYXJzZXI7XHRcdFx0Ly8gVGhlIGNvcmUgcGFyc2VyIGJlaW5nIHVzZWRcblx0XHR2YXIgX3BhdXNlZCA9IGZhbHNlO1x0Ly8gV2hldGhlciB3ZSBhcmUgcGF1c2VkIG9yIG5vdFxuXHRcdHZhciBfYWJvcnRlZCA9IGZhbHNlOyAgIC8vIFdoZXRoZXIgdGhlIHBhcnNlciBoYXMgYWJvcnRlZCBvciBub3Rcblx0XHR2YXIgX2RlbGltaXRlckVycm9yO1x0Ly8gVGVtcG9yYXJ5IHN0YXRlIGJldHdlZW4gZGVsaW1pdGVyIGRldGVjdGlvbiBhbmQgcHJvY2Vzc2luZyByZXN1bHRzXG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcdFx0Ly8gRmllbGRzIGFyZSBmcm9tIHRoZSBoZWFkZXIgcm93IG9mIHRoZSBpbnB1dCwgaWYgdGhlcmUgaXMgb25lXG5cdFx0dmFyIF9yZXN1bHRzID0ge1x0XHQvLyBUaGUgbGFzdCByZXN1bHRzIHJldHVybmVkIGZyb20gdGhlIHBhcnNlclxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXG5cdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKSlcblx0XHR7XG5cdFx0XHR2YXIgdXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0e1xuXHRcdFx0XHRfcmVzdWx0cyA9IHJlc3VsdHM7XG5cblx0XHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdFx0ZWxzZVx0Ly8gb25seSBjYWxsIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFmdGVyIGhlYWRlciByb3dcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cblx0XHRcdFx0XHQvLyBJdCdzIHBvc3NiaWxlIHRoYXQgdGhpcyBsaW5lIHdhcyBlbXB0eSBhbmQgdGhlcmUncyBubyByb3cgaGVyZSBhZnRlciBhbGxcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YS5sZW5ndGggPT0gMClcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdF9zdGVwQ291bnRlciArPSByZXN1bHRzLmRhdGEubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChfY29uZmlnLnByZXZpZXcgJiYgX3N0ZXBDb3VudGVyID4gX2NvbmZpZy5wcmV2aWV3KVxuXHRcdFx0XHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHVzZXJTdGVwKF9yZXN1bHRzLCBzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBQYXJzZXMgaW5wdXQuIE1vc3QgdXNlcnMgd29uJ3QgbmVlZCwgYW5kIHNob3VsZG4ndCBtZXNzIHdpdGgsIHRoZSBiYXNlSW5kZXhcblx0XHQgKiBhbmQgaWdub3JlTGFzdFJvdyBwYXJhbWV0ZXJzLiBUaGV5IGFyZSB1c2VkIGJ5IHN0cmVhbWVycyAod3JhcHBlciBmdW5jdGlvbnMpXG5cdFx0ICogd2hlbiBhbiBpbnB1dCBjb21lcyBpbiBtdWx0aXBsZSBjaHVua3MsIGxpa2UgZnJvbSBhIGZpbGUuXG5cdFx0ICovXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0aWYgKCFfY29uZmlnLm5ld2xpbmUpXG5cdFx0XHRcdF9jb25maWcubmV3bGluZSA9IGd1ZXNzTGluZUVuZGluZ3MoaW5wdXQpO1xuXG5cdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSBmYWxzZTtcblx0XHRcdGlmICghX2NvbmZpZy5kZWxpbWl0ZXIpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBkZWxpbUd1ZXNzID0gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQpO1xuXHRcdFx0XHRpZiAoZGVsaW1HdWVzcy5zdWNjZXNzZnVsKVxuXHRcdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gZGVsaW1HdWVzcy5iZXN0RGVsaW1pdGVyO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSB0cnVlO1x0Ly8gYWRkIGVycm9yIGFmdGVyIHBhcnNpbmcgKG90aGVyd2lzZSBpdCB3b3VsZCBiZSBvdmVyd3JpdHRlbilcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IFBhcGEuRGVmYXVsdERlbGltaXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGFyc2VyQ29uZmlnID0gY29weShfY29uZmlnKTtcblx0XHRcdGlmIChfY29uZmlnLnByZXZpZXcgJiYgX2NvbmZpZy5oZWFkZXIpXG5cdFx0XHRcdHBhcnNlckNvbmZpZy5wcmV2aWV3Kys7XHQvLyB0byBjb21wZW5zYXRlIGZvciBoZWFkZXIgcm93XG5cblx0XHRcdF9pbnB1dCA9IGlucHV0O1xuXHRcdFx0X3BhcnNlciA9IG5ldyBQYXJzZXIocGFyc2VyQ29uZmlnKTtcblx0XHRcdF9yZXN1bHRzID0gX3BhcnNlci5wYXJzZShfaW5wdXQsIGJhc2VJbmRleCwgaWdub3JlTGFzdFJvdyk7XG5cdFx0XHRwcm9jZXNzUmVzdWx0cygpO1xuXHRcdFx0cmV0dXJuIF9wYXVzZWQgPyB7IG1ldGE6IHsgcGF1c2VkOiB0cnVlIH0gfSA6IChfcmVzdWx0cyB8fCB7IG1ldGE6IHsgcGF1c2VkOiBmYWxzZSB9IH0pO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhdXNlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX3BhdXNlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYXVzZSA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfcGF1c2VkID0gdHJ1ZTtcblx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5zdWJzdHIoX3BhcnNlci5nZXRDaGFySW5kZXgoKSk7XG5cdFx0fTtcblxuXHRcdHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9wYXVzZWQgPSBmYWxzZTtcblx0XHRcdHNlbGYuc3RyZWFtZXIucGFyc2VDaHVuayhfaW5wdXQpO1xuXHRcdH07XG5cblx0XHR0aGlzLmFib3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX2Fib3J0ZWQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5hYm9ydCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRfcGFyc2VyLmFib3J0KCk7XG5cdFx0XHRfcmVzdWx0cy5tZXRhLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5jb21wbGV0ZSkpXG5cdFx0XHRcdF9jb25maWcuY29tcGxldGUoX3Jlc3VsdHMpO1xuXHRcdFx0X2lucHV0ID0gXCJcIjtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdHMoKVxuXHRcdHtcblx0XHRcdGlmIChfcmVzdWx0cyAmJiBfZGVsaW1pdGVyRXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGFkZEVycm9yKFwiRGVsaW1pdGVyXCIsIFwiVW5kZXRlY3RhYmxlRGVsaW1pdGVyXCIsIFwiVW5hYmxlIHRvIGF1dG8tZGV0ZWN0IGRlbGltaXRpbmcgY2hhcmFjdGVyOyBkZWZhdWx0ZWQgdG8gJ1wiK1BhcGEuRGVmYXVsdERlbGltaXRlcitcIidcIik7XG5cdFx0XHRcdF9kZWxpbWl0ZXJFcnJvciA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2NvbmZpZy5za2lwRW1wdHlMaW5lcylcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGlmIChfcmVzdWx0cy5kYXRhW2ldLmxlbmd0aCA9PSAxICYmIF9yZXN1bHRzLmRhdGFbaV1bMF0gPT0gXCJcIilcblx0XHRcdFx0XHRcdF9yZXN1bHRzLmRhdGEuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZWVkc0hlYWRlclJvdygpKVxuXHRcdFx0XHRmaWxsSGVhZGVyRmllbGRzKCk7XG5cblx0XHRcdHJldHVybiBhcHBseUhlYWRlckFuZER5bmFtaWNUeXBpbmcoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBuZWVkc0hlYWRlclJvdygpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9jb25maWcuaGVhZGVyICYmIF9maWVsZHMubGVuZ3RoID09IDA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmlsbEhlYWRlckZpZWxkcygpXG5cdFx0e1xuXHRcdFx0aWYgKCFfcmVzdWx0cylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IG5lZWRzSGVhZGVyUm93KCkgJiYgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRfZmllbGRzLnB1c2goX3Jlc3VsdHMuZGF0YVtpXVtqXSk7XG5cdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZSgwLCAxKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhcHBseUhlYWRlckFuZER5bmFtaWNUeXBpbmcoKVxuXHRcdHtcblx0XHRcdGlmICghX3Jlc3VsdHMgfHwgKCFfY29uZmlnLmhlYWRlciAmJiAhX2NvbmZpZy5keW5hbWljVHlwaW5nKSlcblx0XHRcdFx0cmV0dXJuIF9yZXN1bHRzO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByb3cgPSB7fTtcblxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5keW5hbWljVHlwaW5nKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IF9yZXN1bHRzLmRhdGFbaV1bal07XG5cdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gXCJ0cnVlXCIgfHwgdmFsdWUgPT0gXCJUUlVFXCIpXG5cdFx0XHRcdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV1bal0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodmFsdWUgPT0gXCJmYWxzZVwiIHx8IHZhbHVlID09IFwiRkFMU0VcIilcblx0XHRcdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YVtpXVtqXSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRfcmVzdWx0cy5kYXRhW2ldW2pdID0gdHJ5UGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChqID49IF9maWVsZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZiAoIXJvd1tcIl9fcGFyc2VkX2V4dHJhXCJdKVxuXHRcdFx0XHRcdFx0XHRcdHJvd1tcIl9fcGFyc2VkX2V4dHJhXCJdID0gW107XG5cdFx0XHRcdFx0XHRcdHJvd1tcIl9fcGFyc2VkX2V4dHJhXCJdLnB1c2goX3Jlc3VsdHMuZGF0YVtpXVtqXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdHJvd1tfZmllbGRzW2pdXSA9IF9yZXN1bHRzLmRhdGFbaV1bal07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YVtpXSA9IHJvdztcblx0XHRcdFx0XHRpZiAoaiA+IF9maWVsZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0YWRkRXJyb3IoXCJGaWVsZE1pc21hdGNoXCIsIFwiVG9vTWFueUZpZWxkc1wiLCBcIlRvbyBtYW55IGZpZWxkczogZXhwZWN0ZWQgXCIgKyBfZmllbGRzLmxlbmd0aCArIFwiIGZpZWxkcyBidXQgcGFyc2VkIFwiICsgaiwgaSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaiA8IF9maWVsZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0YWRkRXJyb3IoXCJGaWVsZE1pc21hdGNoXCIsIFwiVG9vRmV3RmllbGRzXCIsIFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiICsgX2ZpZWxkcy5sZW5ndGggKyBcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIiArIGosIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLmhlYWRlciAmJiBfcmVzdWx0cy5tZXRhKVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmZpZWxkcyA9IF9maWVsZHM7XG5cdFx0XHRyZXR1cm4gX3Jlc3VsdHM7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQpXG5cdFx0e1xuXHRcdFx0dmFyIGRlbGltQ2hvaWNlcyA9IFtcIixcIiwgXCJcXHRcIiwgXCJ8XCIsIFwiO1wiLCBQYXBhLlJFQ09SRF9TRVAsIFBhcGEuVU5JVF9TRVBdO1xuXHRcdFx0dmFyIGJlc3REZWxpbSwgYmVzdERlbHRhLCBmaWVsZENvdW50UHJldlJvdztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWxpbUNob2ljZXMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBkZWxpbSA9IGRlbGltQ2hvaWNlc1tpXTtcblx0XHRcdFx0dmFyIGRlbHRhID0gMCwgYXZnRmllbGRDb3VudCA9IDA7XG5cdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdHZhciBwcmV2aWV3ID0gbmV3IFBhcnNlcih7XG5cdFx0XHRcdFx0ZGVsaW1pdGVyOiBkZWxpbSxcblx0XHRcdFx0XHRwcmV2aWV3OiAxMFxuXHRcdFx0XHR9KS5wYXJzZShpbnB1dCk7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwcmV2aWV3LmRhdGEubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgZmllbGRDb3VudCA9IHByZXZpZXcuZGF0YVtqXS5sZW5ndGg7XG5cdFx0XHRcdFx0YXZnRmllbGRDb3VudCArPSBmaWVsZENvdW50O1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBmaWVsZENvdW50UHJldlJvdyA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSBmaWVsZENvdW50O1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKGZpZWxkQ291bnQgPiAxKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRlbHRhICs9IE1hdGguYWJzKGZpZWxkQ291bnQgLSBmaWVsZENvdW50UHJldlJvdyk7XG5cdFx0XHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IGZpZWxkQ291bnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZpZXcuZGF0YS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdGF2Z0ZpZWxkQ291bnQgLz0gcHJldmlldy5kYXRhLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoKHR5cGVvZiBiZXN0RGVsdGEgPT09ICd1bmRlZmluZWQnIHx8IGRlbHRhIDwgYmVzdERlbHRhKVxuXHRcdFx0XHRcdCYmIGF2Z0ZpZWxkQ291bnQgPiAxLjk5KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YmVzdERlbHRhID0gZGVsdGE7XG5cdFx0XHRcdFx0YmVzdERlbGltID0gZGVsaW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBiZXN0RGVsaW07XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN1Y2Nlc3NmdWw6ICEhYmVzdERlbGltLFxuXHRcdFx0XHRiZXN0RGVsaW1pdGVyOiBiZXN0RGVsaW1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBndWVzc0xpbmVFbmRpbmdzKGlucHV0KVxuXHRcdHtcblx0XHRcdGlucHV0ID0gaW5wdXQuc3Vic3RyKDAsIDEwMjQqMTAyNCk7XHQvLyBtYXggbGVuZ3RoIDEgTUJcblxuXHRcdFx0dmFyIHIgPSBpbnB1dC5zcGxpdCgnXFxyJyk7XG5cblx0XHRcdGlmIChyLmxlbmd0aCA9PSAxKVxuXHRcdFx0XHRyZXR1cm4gJ1xcbic7XG5cblx0XHRcdHZhciBudW1XaXRoTiA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChyW2ldWzBdID09ICdcXG4nKVxuXHRcdFx0XHRcdG51bVdpdGhOKys7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudW1XaXRoTiA+PSByLmxlbmd0aCAvIDIgPyAnXFxyXFxuJyA6ICdcXHInO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyeVBhcnNlRmxvYXQodmFsKVxuXHRcdHtcblx0XHRcdHZhciBpc051bWJlciA9IEZMT0FULnRlc3QodmFsKTtcblx0XHRcdHJldHVybiBpc051bWJlciA/IHBhcnNlRmxvYXQodmFsKSA6IHZhbDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRFcnJvcih0eXBlLCBjb2RlLCBtc2csIHJvdylcblx0XHR7XG5cdFx0XHRfcmVzdWx0cy5lcnJvcnMucHVzaCh7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGNvZGU6IGNvZGUsXG5cdFx0XHRcdG1lc3NhZ2U6IG1zZyxcblx0XHRcdFx0cm93OiByb3dcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblxuXG5cblx0LyoqIFRoZSBjb3JlIHBhcnNlciBpbXBsZW1lbnRzIHNwZWVkeSBhbmQgY29ycmVjdCBDU1YgcGFyc2luZyAqL1xuXHRmdW5jdGlvbiBQYXJzZXIoY29uZmlnKVxuXHR7XG5cdFx0Ly8gVW5wYWNrIHRoZSBjb25maWcgb2JqZWN0XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdHZhciBkZWxpbSA9IGNvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0dmFyIG5ld2xpbmUgPSBjb25maWcubmV3bGluZTtcblx0XHR2YXIgY29tbWVudHMgPSBjb25maWcuY29tbWVudHM7XG5cdFx0dmFyIHN0ZXAgPSBjb25maWcuc3RlcDtcblx0XHR2YXIgcHJldmlldyA9IGNvbmZpZy5wcmV2aWV3O1xuXHRcdHZhciBmYXN0TW9kZSA9IGNvbmZpZy5mYXN0TW9kZTtcblxuXHRcdC8vIERlbGltaXRlciBtdXN0IGJlIHZhbGlkXG5cdFx0aWYgKHR5cGVvZiBkZWxpbSAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihkZWxpbSkgPiAtMSlcblx0XHRcdGRlbGltID0gXCIsXCI7XG5cblx0XHQvLyBDb21tZW50IGNoYXJhY3RlciBtdXN0IGJlIHZhbGlkXG5cdFx0aWYgKGNvbW1lbnRzID09PSBkZWxpbSlcblx0XHRcdHRocm93IFwiQ29tbWVudCBjaGFyYWN0ZXIgc2FtZSBhcyBkZWxpbWl0ZXJcIjtcblx0XHRlbHNlIGlmIChjb21tZW50cyA9PT0gdHJ1ZSlcblx0XHRcdGNvbW1lbnRzID0gXCIjXCI7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGNvbW1lbnRzICE9PSAnc3RyaW5nJ1xuXHRcdFx0fHwgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKGNvbW1lbnRzKSA+IC0xKVxuXHRcdFx0Y29tbWVudHMgPSBmYWxzZTtcblxuXHRcdC8vIE5ld2xpbmUgbXVzdCBiZSB2YWxpZDogXFxyLCBcXG4sIG9yIFxcclxcblxuXHRcdGlmIChuZXdsaW5lICE9ICdcXG4nICYmIG5ld2xpbmUgIT0gJ1xccicgJiYgbmV3bGluZSAhPSAnXFxyXFxuJylcblx0XHRcdG5ld2xpbmUgPSAnXFxuJztcblxuXHRcdC8vIFdlJ3JlIGdvbm5hIG5lZWQgdGhlc2UgYXQgdGhlIFBhcnNlciBzY29wZVxuXHRcdHZhciBjdXJzb3IgPSAwO1xuXHRcdHZhciBhYm9ydGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGJhc2VJbmRleCwgaWdub3JlTGFzdFJvdylcblx0XHR7XG5cdFx0XHQvLyBGb3Igc29tZSByZWFzb24sIGluIENocm9tZSwgdGhpcyBzcGVlZHMgdGhpbmdzIHVwICghPylcblx0XHRcdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKVxuXHRcdFx0XHR0aHJvdyBcIklucHV0IG11c3QgYmUgYSBzdHJpbmdcIjtcblxuXHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCB0byBjb21wdXRlIHNvbWUgb2YgdGhlc2UgZXZlcnkgdGltZSBwYXJzZSgpIGlzIGNhbGxlZCxcblx0XHRcdC8vIGJ1dCBoYXZpbmcgdGhlbSBpbiBhIG1vcmUgbG9jYWwgc2NvcGUgc2VlbXMgdG8gcGVyZm9ybSBiZXR0ZXJcblx0XHRcdHZhciBpbnB1dExlbiA9IGlucHV0Lmxlbmd0aCxcblx0XHRcdFx0ZGVsaW1MZW4gPSBkZWxpbS5sZW5ndGgsXG5cdFx0XHRcdG5ld2xpbmVMZW4gPSBuZXdsaW5lLmxlbmd0aCxcblx0XHRcdFx0Y29tbWVudHNMZW4gPSBjb21tZW50cy5sZW5ndGg7XG5cdFx0XHR2YXIgc3RlcElzRnVuY3Rpb24gPSB0eXBlb2Ygc3RlcCA9PT0gJ2Z1bmN0aW9uJztcblxuXHRcdFx0Ly8gRXN0YWJsaXNoIHN0YXJ0aW5nIHN0YXRlXG5cdFx0XHRjdXJzb3IgPSAwO1xuXHRcdFx0dmFyIGRhdGEgPSBbXSwgZXJyb3JzID0gW10sIHJvdyA9IFtdLCBsYXN0Q3Vyc29yID0gMDtcblxuXHRcdFx0aWYgKCFpbnB1dClcblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblxuXHRcdFx0aWYgKGZhc3RNb2RlIHx8IChmYXN0TW9kZSAhPT0gZmFsc2UgJiYgaW5wdXQuaW5kZXhPZignXCInKSA9PT0gLTEpKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93cyA9IGlucHV0LnNwbGl0KG5ld2xpbmUpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcm93ID0gcm93c1tpXTtcblx0XHRcdFx0XHRjdXJzb3IgKz0gcm93Lmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoaSAhPT0gcm93cy5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdFx0Y3Vyc29yICs9IG5ld2xpbmUubGVuZ3RoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cuc3Vic3RyKDAsIGNvbW1lbnRzTGVuKSA9PSBjb21tZW50cylcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkYXRhID0gW107XG5cdFx0XHRcdFx0XHRwdXNoUm93KHJvdy5zcGxpdChkZWxpbSkpO1xuXHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBpID49IHByZXZpZXcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IGRhdGEuc2xpY2UoMCwgcHJldmlldyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHR2YXIgbmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cblx0XHRcdC8vIFBhcnNlciBsb29wXG5cdFx0XHRmb3IgKDs7KVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBGaWVsZCBoYXMgb3BlbmluZyBxdW90ZVxuXHRcdFx0XHRpZiAoaW5wdXRbY3Vyc29yXSA9PSAnXCInKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gU3RhcnQgb3VyIHNlYXJjaCBmb3IgdGhlIGNsb3NpbmcgcXVvdGUgd2hlcmUgdGhlIGN1cnNvciBpc1xuXHRcdFx0XHRcdHZhciBxdW90ZVNlYXJjaCA9IGN1cnNvcjtcblxuXHRcdFx0XHRcdC8vIFNraXAgdGhlIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0XHRjdXJzb3IrKztcblxuXHRcdFx0XHRcdGZvciAoOzspXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly8gRmluZCBjbG9zaW5nIHF1b3RlXG5cdFx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBpbnB1dC5pbmRleE9mKCdcIicsIHF1b3RlU2VhcmNoKzEpO1xuXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IC0xKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlnbm9yZUxhc3RSb3cpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBObyBjbG9zaW5nIHF1b3RlLi4uIHdoYXQgYSBwaXR5XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJRdW90ZXNcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvZGU6IFwiTWlzc2luZ1F1b3Rlc1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogXCJRdW90ZWQgZmllbGQgdW50ZXJtaW5hdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4OiBjdXJzb3Jcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChxdW90ZVNlYXJjaCA9PT0gaW5wdXRMZW4tMSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBhdCBFT0Zcblx0XHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgcXVvdGVTZWFyY2gpLnJlcGxhY2UoL1wiXCIvZywgJ1wiJyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmaW5pc2godmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGlzIHF1b3RlIGlzIGVzY2FwZWQsIGl0J3MgcGFydCBvZiB0aGUgZGF0YTsgc2tpcCBpdFxuXHRcdFx0XHRcdFx0aWYgKGlucHV0W3F1b3RlU2VhcmNoKzFdID09ICdcIicpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHF1b3RlU2VhcmNoKys7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXRbcXVvdGVTZWFyY2grMV0gPT0gZGVsaW0pXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgZm9sbG93ZWQgYnkgZGVsaW1pdGVyXG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKC9cIlwiL2csICdcIicpKTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yID0gcXVvdGVTZWFyY2ggKyAxICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGlucHV0LnN1YnN0cihxdW90ZVNlYXJjaCsxLCBuZXdsaW5lTGVuKSA9PT0gbmV3bGluZSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBuZXdsaW5lXG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKC9cIlwiL2csICdcIicpKTtcblx0XHRcdFx0XHRcdFx0c2F2ZVJvdyhxdW90ZVNlYXJjaCArIDEgKyBuZXdsaW5lTGVuKTtcblx0XHRcdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcdC8vIGJlY2F1c2Ugd2UgbWF5IGhhdmUgc2tpcHBlZCB0aGUgbmV4dERlbGltIGluIHRoZSBxdW90ZWQgZmllbGRcblxuXHRcdFx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGRhdGEubGVuZ3RoID49IHByZXZpZXcpXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb21tZW50IGZvdW5kIGF0IHN0YXJ0IG9mIG5ldyBsaW5lXG5cdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cubGVuZ3RoID09PSAwICYmIGlucHV0LnN1YnN0cihjdXJzb3IsIGNvbW1lbnRzTGVuKSA9PT0gY29tbWVudHMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAobmV4dE5ld2xpbmUgPT0gLTEpXHQvLyBDb21tZW50IGVuZHMgYXQgRU9GXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGN1cnNvciA9IG5leHROZXdsaW5lICsgbmV3bGluZUxlbjtcblx0XHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTmV4dCBkZWxpbWl0ZXIgY29tZXMgYmVmb3JlIG5leHQgbmV3bGluZSwgc28gd2UndmUgcmVhY2hlZCBlbmQgb2YgZmllbGRcblx0XHRcdFx0aWYgKG5leHREZWxpbSAhPT0gLTEgJiYgKG5leHREZWxpbSA8IG5leHROZXdsaW5lIHx8IG5leHROZXdsaW5lID09PSAtMSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBuZXh0RGVsaW0pKTtcblx0XHRcdFx0XHRjdXJzb3IgPSBuZXh0RGVsaW0gKyBkZWxpbUxlbjtcblx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRW5kIG9mIHJvd1xuXHRcdFx0XHRpZiAobmV4dE5ld2xpbmUgIT09IC0xKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgbmV4dE5ld2xpbmUpKTtcblx0XHRcdFx0XHRzYXZlUm93KG5leHROZXdsaW5lICsgbmV3bGluZUxlbik7XG5cblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBkYXRhLmxlbmd0aCA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cblx0XHRcdHJldHVybiBmaW5pc2goKTtcblxuXG5cdFx0XHRmdW5jdGlvbiBwdXNoUm93KHJvdylcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5wdXNoKHJvdyk7XG5cdFx0XHRcdGxhc3RDdXJzb3IgPSBjdXJzb3I7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQXBwZW5kcyB0aGUgcmVtYWluaW5nIGlucHV0IGZyb20gY3Vyc29yIHRvIHRoZSBlbmQgaW50b1xuXHRcdFx0ICogcm93LCBzYXZlcyB0aGUgcm93LCBjYWxscyBzdGVwLCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0cy5cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gZmluaXNoKHZhbHVlKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaWdub3JlTGFzdFJvdylcblx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0XHR2YWx1ZSA9IGlucHV0LnN1YnN0cihjdXJzb3IpO1xuXHRcdFx0XHRyb3cucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGN1cnNvciA9IGlucHV0TGVuO1x0Ly8gaW1wb3J0YW50IGluIGNhc2UgcGFyc2luZyBpcyBwYXVzZWRcblx0XHRcdFx0cHVzaFJvdyhyb3cpO1xuXHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQXBwZW5kcyB0aGUgY3VycmVudCByb3cgdG8gdGhlIHJlc3VsdHMuIEl0IHNldHMgdGhlIGN1cnNvclxuXHRcdFx0ICogdG8gbmV3Q3Vyc29yIGFuZCBmaW5kcyB0aGUgbmV4dE5ld2xpbmUuIFRoZSBjYWxsZXIgc2hvdWxkXG5cdFx0XHQgKiB0YWtlIGNhcmUgdG8gZXhlY3V0ZSB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhbmQgY2hlY2sgZm9yXG5cdFx0XHQgKiBwcmV2aWV3IGFuZCBlbmQgcGFyc2luZyBpZiBuZWNlc3NhcnkuXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHNhdmVSb3cobmV3Q3Vyc29yKVxuXHRcdFx0e1xuXHRcdFx0XHRjdXJzb3IgPSBuZXdDdXJzb3I7XG5cdFx0XHRcdHB1c2hSb3cocm93KTtcblx0XHRcdFx0cm93ID0gW107XG5cdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgcmVzdWx0cywgZXJyb3JzLCBhbmQgbWV0YS4gKi9cblx0XHRcdGZ1bmN0aW9uIHJldHVybmFibGUoc3RvcHBlZClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdGVycm9yczogZXJyb3JzLFxuXHRcdFx0XHRcdG1ldGE6IHtcblx0XHRcdFx0XHRcdGRlbGltaXRlcjogZGVsaW0sXG5cdFx0XHRcdFx0XHRsaW5lYnJlYWs6IG5ld2xpbmUsXG5cdFx0XHRcdFx0XHRhYm9ydGVkOiBhYm9ydGVkLFxuXHRcdFx0XHRcdFx0dHJ1bmNhdGVkOiAhIXN0b3BwZWQsXG5cdFx0XHRcdFx0XHRjdXJzb3I6IGxhc3RDdXJzb3IgKyAoYmFzZUluZGV4IHx8IDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogRXhlY3V0ZXMgdGhlIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFuZCByZXNldHMgZGF0YSAmIGVycm9ycy4gKi9cblx0XHRcdGZ1bmN0aW9uIGRvU3RlcCgpXG5cdFx0XHR7XG5cdFx0XHRcdHN0ZXAocmV0dXJuYWJsZSgpKTtcblx0XHRcdFx0ZGF0YSA9IFtdLCBlcnJvcnMgPSBbXTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqIFNldHMgdGhlIGFib3J0IGZsYWcgKi9cblx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGFib3J0ZWQgPSB0cnVlO1xuXHRcdH07XG5cblx0XHQvKiogR2V0cyB0aGUgY3Vyc29yIHBvc2l0aW9uICovXG5cdFx0dGhpcy5nZXRDaGFySW5kZXggPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGN1cnNvcjtcblx0XHR9O1xuXHR9XG5cblxuXHQvLyBJZiB5b3UgbmVlZCB0byBsb2FkIFBhcGEgUGFyc2UgYXN5bmNocm9ub3VzbHkgYW5kIHlvdSBhbHNvIG5lZWQgd29ya2VyIHRocmVhZHMsIGhhcmQtY29kZVxuXHQvLyB0aGUgc2NyaXB0IHBhdGggaGVyZS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlL2lzc3Vlcy84NyNpc3N1ZWNvbW1lbnQtNTc4ODUzNThcblx0ZnVuY3Rpb24gZ2V0U2NyaXB0UGF0aCgpXG5cdHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRyZXR1cm4gc2NyaXB0cy5sZW5ndGggPyBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjIDogJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBuZXdXb3JrZXIoKVxuXHR7XG5cdFx0aWYgKCFQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdGlmICghTE9BREVEX1NZTkMgJiYgUGFwYS5TQ1JJUFRfUEFUSCA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J1NjcmlwdCBwYXRoIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgd2hlbiBQYXBhIFBhcnNlIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseS4gJyArXG5cdFx0XHRcdCdZb3UgbmVlZCB0byBzZXQgUGFwYS5TQ1JJUFRfUEFUSCBtYW51YWxseS4nXG5cdFx0XHQpO1xuXHRcdHZhciB3b3JrZXJVcmwgPSBQYXBhLlNDUklQVF9QQVRIIHx8IEFVVE9fU0NSSVBUX1BBVEg7XG5cdFx0Ly8gQXBwZW5kIFwicGFwYXdvcmtlclwiIHRvIHRoZSBzZWFyY2ggc3RyaW5nIHRvIHRlbGwgcGFwYXBhcnNlIHRoYXQgdGhpcyBpcyBvdXIgd29ya2VyLlxuXHRcdHdvcmtlclVybCArPSAod29ya2VyVXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPycpICsgJ3BhcGF3b3JrZXInO1xuXHRcdHZhciB3ID0gbmV3IGdsb2JhbC5Xb3JrZXIod29ya2VyVXJsKTtcblx0XHR3Lm9ubWVzc2FnZSA9IG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdFx0dy5pZCA9IHdvcmtlcklkQ291bnRlcisrO1xuXHRcdHdvcmtlcnNbdy5pZF0gPSB3O1xuXHRcdHJldHVybiB3O1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gbWFpbiB0aHJlYWQgcmVjZWl2ZXMgYSBtZXNzYWdlICovXG5cdGZ1bmN0aW9uIG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbbXNnLndvcmtlcklkXTtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKG1zZy5lcnJvcilcblx0XHRcdHdvcmtlci51c2VyRXJyb3IobXNnLmVycm9yLCBtc2cuZmlsZSk7XG5cdFx0ZWxzZSBpZiAobXNnLnJlc3VsdHMgJiYgbXNnLnJlc3VsdHMuZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0XHRcdGNvbXBsZXRlV29ya2VyKG1zZy53b3JrZXJJZCwgeyBkYXRhOiBbXSwgZXJyb3JzOiBbXSwgbWV0YTogeyBhYm9ydGVkOiB0cnVlIH0gfSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgaGFuZGxlID0ge1xuXHRcdFx0XHRhYm9ydDogYWJvcnQsXG5cdFx0XHRcdHBhdXNlOiBub3RJbXBsZW1lbnRlZCxcblx0XHRcdFx0cmVzdW1lOiBub3RJbXBsZW1lbnRlZFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJTdGVwKSlcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2cucmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d29ya2VyLnVzZXJTdGVwKHtcblx0XHRcdFx0XHRcdGRhdGE6IFttc2cucmVzdWx0cy5kYXRhW2ldXSxcblx0XHRcdFx0XHRcdGVycm9yczogbXNnLnJlc3VsdHMuZXJyb3JzLFxuXHRcdFx0XHRcdFx0bWV0YTogbXNnLnJlc3VsdHMubWV0YVxuXHRcdFx0XHRcdH0sIGhhbmRsZSk7XG5cdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgbXNnLnJlc3VsdHM7XHQvLyBmcmVlIG1lbW9yeSBBU0FQXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR3b3JrZXIudXNlckNodW5rKG1zZy5yZXN1bHRzLCBoYW5kbGUsIG1zZy5maWxlKTtcblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtc2cuZmluaXNoZWQgJiYgIWFib3J0ZWQpXG5cdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIG1zZy5yZXN1bHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBsZXRlV29ya2VyKHdvcmtlcklkLCByZXN1bHRzKSB7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbd29ya2VySWRdO1xuXHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ29tcGxldGUpKVxuXHRcdFx0d29ya2VyLnVzZXJDb21wbGV0ZShyZXN1bHRzKTtcblx0XHR3b3JrZXIudGVybWluYXRlKCk7XG5cdFx0ZGVsZXRlIHdvcmtlcnNbd29ya2VySWRdO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG5cdFx0dGhyb3cgXCJOb3QgaW1wbGVtZW50ZWQuXCI7XG5cdH1cblxuXHQvKiogQ2FsbGJhY2sgd2hlbiB3b3JrZXIgdGhyZWFkIHJlY2VpdmVzIGEgbWVzc2FnZSAqL1xuXHRmdW5jdGlvbiB3b3JrZXJUaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cblx0XHRpZiAodHlwZW9mIFBhcGEuV09SS0VSX0lEID09PSAndW5kZWZpbmVkJyAmJiBtc2cpXG5cdFx0XHRQYXBhLldPUktFUl9JRCA9IG1zZy53b3JrZXJJZDtcblxuXHRcdGlmICh0eXBlb2YgbXNnLmlucHV0ID09PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdHJlc3VsdHM6IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKSxcblx0XHRcdFx0ZmluaXNoZWQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoZ2xvYmFsLkZpbGUgJiYgbXNnLmlucHV0IGluc3RhbmNlb2YgRmlsZSkgfHwgbXNnLmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KVx0Ly8gdGhhbmsgeW91LCBTYWZhcmkgKHNlZSBpc3N1ZSAjMTA2KVxuXHRcdHtcblx0XHRcdHZhciByZXN1bHRzID0gUGFwYS5wYXJzZShtc2cuaW5wdXQsIG1zZy5jb25maWcpO1xuXHRcdFx0aWYgKHJlc3VsdHMpXG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdHJlc3VsdHM6IHJlc3VsdHMsXG5cdFx0XHRcdFx0ZmluaXNoZWQ6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIE1ha2VzIGEgZGVlcCBjb3B5IG9mIGFuIGFycmF5IG9yIG9iamVjdCAobW9zdGx5KSAqL1xuXHRmdW5jdGlvbiBjb3B5KG9iailcblx0e1xuXHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jylcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0dmFyIGNweSA9IG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTtcblx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0Y3B5W2tleV0gPSBjb3B5KG9ialtrZXldKTtcblx0XHRyZXR1cm4gY3B5O1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZEZ1bmN0aW9uKGYsIHNlbGYpXG5cdHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGYuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYylcblx0e1xuXHRcdHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJztcblx0fVxufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXBhcGFyc2UvcGFwYXBhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=