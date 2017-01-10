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

var _helpers = __webpack_require__(7);

var _storage = __webpack_require__(8);

var storage = _interopRequireWildcard(_storage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

	return {
		onrender: function onrender() {
			var _this = this;

			this.observe('modifiers', function (newValue, oldValue) {
				if (newValue != oldValue) {
					var id = _this.get('storageId');
					if (id) storage.save(id, newValue);
				}
			});
		},
		data: function data() {
			return {
				scaleH: 1.0,
				scaleV: 1.0,
				offsetX: 0,
				offsetY: 0,
				mapSrc: '',
				mapFile: null,
				mapDimensions: null,
				csvData: [],
				csvFile: null,
				storageId: null
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
				(0, _helpers.forEach)(files, function (file) {
					var ext = (0, _helpers.getFileExtension)(file);

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

				// Get id for file combination and check if there's saved modifiers
				var id = storage.getId(files);
				var data = storage.load(id);
				component.set({ storageId: id });
				if (data) {
					component.set(data);
				}
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
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(7);

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
				if (count == 0) return '<strong>Choose a file</strong><span class="file-drop-area__dragndrop"> or drag it here</span>.';else if (count <= 2) return (0, _helpers.map)(files, function (f) {
					return f.name;
				}).join('<br>');else /* count > 1 */return count + ' files selected';
			}
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n.file-drop-area[svelte-3956044991], [svelte-3956044991] .file-drop-area {\r\n\tfont-size: 1.25em; \r\n\tbackground-color: #c8dadf;\r\n\tposition: relative;\r\n\tpadding: 100px 20px;\r\n  text-align: center;\r\n}\r\n\r\n.file-drop-area--advanced[svelte-3956044991], [svelte-3956044991] .file-drop-area--advanced {\r\n\toutline: 2px dashed #92b0b3;\r\n\toutline-offset: -10px;\r\n\r\n\t-webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\r\n\ttransition: outline-offset .15s ease-in-out, background-color .15s linear;\r\n}\r\n\r\n.file-drop-area.is-dragover[svelte-3956044991], [svelte-3956044991] .file-drop-area.is-dragover {\r\n\toutline-offset: -20px;\r\n\toutline-color: #c8dadf;\r\n\tbackground-color: #fff;\r\n}\r\n        \r\n.file-drop-area__dragndrop[svelte-3956044991], [svelte-3956044991] .file-drop-area__dragndrop, .file-drop-area__icon[svelte-3956044991], [svelte-3956044991] .file-drop-area__icon {\r\n\tdisplay: none;\r\n}\r\n.file-drop-area--advanced  .file-drop-area__dragndrop[svelte-3956044991], .file-drop-area--advanced  [svelte-3956044991] .file-drop-area__dragndrop, .file-drop-area--advanced[svelte-3956044991]  .file-drop-area__dragndrop, [svelte-3956044991] .file-drop-area--advanced  .file-drop-area__dragndrop {\r\n\tdisplay: inline;\r\n}\r\n.file-drop-area--advanced  .file-drop-area__icon[svelte-3956044991], .file-drop-area--advanced  [svelte-3956044991] .file-drop-area__icon, .file-drop-area--advanced[svelte-3956044991]  .file-drop-area__icon, [svelte-3956044991] .file-drop-area--advanced  .file-drop-area__icon {\r\n\twidth: 100%;\r\n\theight: 80px;\r\n\topacity: 0.25;\r\n\tdisplay: block;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.file-drop-area.is-uploading  .file-drop-area__input[svelte-3956044991], .file-drop-area.is-uploading  [svelte-3956044991] .file-drop-area__input, .file-drop-area.is-uploading[svelte-3956044991]  .file-drop-area__input, [svelte-3956044991] .file-drop-area.is-uploading  .file-drop-area__input, .file-drop-area.is-success  .file-drop-area__input[svelte-3956044991], .file-drop-area.is-success  [svelte-3956044991] .file-drop-area__input, .file-drop-area.is-success[svelte-3956044991]  .file-drop-area__input, [svelte-3956044991] .file-drop-area.is-success  .file-drop-area__input, .file-drop-area.is-error  .file-drop-area__input[svelte-3956044991], .file-drop-area.is-error  [svelte-3956044991] .file-drop-area__input, .file-drop-area.is-error[svelte-3956044991]  .file-drop-area__input, [svelte-3956044991] .file-drop-area.is-error  .file-drop-area__input {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.file-drop-area__uploading[svelte-3956044991], [svelte-3956044991] .file-drop-area__uploading, .file-drop-area__success[svelte-3956044991], [svelte-3956044991] .file-drop-area__success, .file-drop-area__error[svelte-3956044991], [svelte-3956044991] .file-drop-area__error {\r\n\tdisplay: none;\r\n}\r\n\r\n.file-drop-area.is-uploading  .file-drop-area__uploading[svelte-3956044991], .file-drop-area.is-uploading  [svelte-3956044991] .file-drop-area__uploading, .file-drop-area.is-uploading[svelte-3956044991]  .file-drop-area__uploading, [svelte-3956044991] .file-drop-area.is-uploading  .file-drop-area__uploading, .file-drop-area.is-success  .file-drop-area__success[svelte-3956044991], .file-drop-area.is-success  [svelte-3956044991] .file-drop-area__success, .file-drop-area.is-success[svelte-3956044991]  .file-drop-area__success, [svelte-3956044991] .file-drop-area.is-success  .file-drop-area__success, .file-drop-area.is-error  .file-drop-area__error[svelte-3956044991], .file-drop-area.is-error  [svelte-3956044991] .file-drop-area__error, .file-drop-area.is-error[svelte-3956044991]  .file-drop-area__error, [svelte-3956044991] .file-drop-area.is-error  .file-drop-area__error {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 0;\r\n\tleft: 0;\r\n\r\n\t-webkit-transform: translateY( -50% );\r\n\ttransform: translateY( -50% );\r\n}\r\n.file-drop-area__uploading[svelte-3956044991], [svelte-3956044991] .file-drop-area__uploading {\r\n\tfont-style: italic;\r\n}\r\n.file-drop-area__success[svelte-3956044991], [svelte-3956044991] .file-drop-area__success {\r\n\t-webkit-animation: appear-from-inside .25s ease-in-out;\r\n\tanimation: appear-from-inside .25s ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes appear-from-inside {\r\n\tfrom[svelte-3956044991], [svelte-3956044991] from { -webkit-transform: translateY( -50% ) scale( 0 ); }\r\n\t75%\t\t{ -webkit-transform: translateY( -50% ) scale( 1.1 ); }\r\n\tto[svelte-3956044991], [svelte-3956044991] to { -webkit-transform: translateY( -50% ) scale( 1 ); }\r\n}\r\n@keyframes appear-from-inside {\r\n\tfrom[svelte-3956044991], [svelte-3956044991] from { transform: translateY( -50% ) scale( 0 ); }\r\n\t75%\t\t{ transform: translateY( -50% ) scale( 1.1 ); }\r\n\tto[svelte-3956044991], [svelte-3956044991] to { transform: translateY( -50% ) scale( 1 ); }\r\n}\r\n\r\n.file-drop-area__restart[svelte-3956044991], [svelte-3956044991] .file-drop-area__restart {\r\n\tfont-weight: 700;\r\n}\r\n.file-drop-area__restart[svelte-3956044991]:focus, [svelte-3956044991] .file-drop-area__restart:focus, .file-drop-area__restart[svelte-3956044991]:hover, [svelte-3956044991] .file-drop-area__restart:hover {\r\n\tcolor: #39bfd3;\r\n}\r\n\r\n.js  .file-drop-area__file[svelte-3956044991], .js  [svelte-3956044991] .file-drop-area__file, .js[svelte-3956044991]  .file-drop-area__file, [svelte-3956044991] .js  .file-drop-area__file {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n.js  .file-drop-area__label[svelte-3956044991], .js  [svelte-3956044991] .file-drop-area__label, .js[svelte-3956044991]  .file-drop-area__label, [svelte-3956044991] .js  .file-drop-area__label {\r\n\tmax-width: 80%;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n  font-weight: 300;\r\n}\r\n\r\n.js  .file-drop-area__label:hover  strong[svelte-3956044991], .js  .file-drop-area__label:hover  [svelte-3956044991] strong, .js  .file-drop-area__label[svelte-3956044991]:hover  strong, .js  [svelte-3956044991] .file-drop-area__label:hover  strong, .js[svelte-3956044991]  .file-drop-area__label:hover  strong, [svelte-3956044991] .js  .file-drop-area__label:hover  strong, .file-drop-area__file:focus +  .file-drop-area__label  strong[svelte-3956044991], .file-drop-area__file:focus +  .file-drop-area__label  [svelte-3956044991] strong, .file-drop-area__file:focus +  .file-drop-area__label[svelte-3956044991]  strong, .file-drop-area__file:focus +  [svelte-3956044991] .file-drop-area__label  strong, .file-drop-area__file[svelte-3956044991]:focus + .file-drop-area__label  strong, [svelte-3956044991] .file-drop-area__file:focus +  .file-drop-area__label  strong, .file-drop-area__file.has-focus +  .file-drop-area__label  strong[svelte-3956044991], .file-drop-area__file.has-focus +  .file-drop-area__label  [svelte-3956044991] strong, .file-drop-area__file.has-focus +  .file-drop-area__label[svelte-3956044991]  strong, .file-drop-area__file.has-focus +  [svelte-3956044991] .file-drop-area__label  strong, .file-drop-area__file.has-focus[svelte-3956044991] + .file-drop-area__label  strong, [svelte-3956044991] .file-drop-area__file.has-focus +  .file-drop-area__label  strong {\r\n\tcolor: #39bfd3;\r\n}\r\n.js  .file-drop-area__file:focus +  .file-drop-area__label[svelte-3956044991], .js  .file-drop-area__file:focus +  [svelte-3956044991] .file-drop-area__label, .js  .file-drop-area__file[svelte-3956044991]:focus + .file-drop-area__label, .js  [svelte-3956044991] .file-drop-area__file:focus +  .file-drop-area__label, .js[svelte-3956044991]  .file-drop-area__file:focus +  .file-drop-area__label, [svelte-3956044991] .js  .file-drop-area__file:focus +  .file-drop-area__label, .js  .file-drop-area__file.has-focus +  .file-drop-area__label[svelte-3956044991], .js  .file-drop-area__file.has-focus +  [svelte-3956044991] .file-drop-area__label, .js  .file-drop-area__file.has-focus[svelte-3956044991] + .file-drop-area__label, .js  [svelte-3956044991] .file-drop-area__file.has-focus +  .file-drop-area__label, .js[svelte-3956044991]  .file-drop-area__file.has-focus +  .file-drop-area__label, [svelte-3956044991] .js  .file-drop-area__file.has-focus +  .file-drop-area__label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.no-js  .file-drop-area__label[svelte-3956044991], .no-js  [svelte-3956044991] .file-drop-area__label, .no-js[svelte-3956044991]  .file-drop-area__label, [svelte-3956044991] .no-js  .file-drop-area__label {\r\n\tdisplay: none;\r\n}\r\n\r\n.no-js  .file-drop-area__button[svelte-3956044991], .no-js  [svelte-3956044991] .file-drop-area__button, .no-js[svelte-3956044991]  .file-drop-area__button, [svelte-3956044991] .no-js  .file-drop-area__button {\r\n\tdisplay: block;\r\n}\r\n.file-drop-area__button[svelte-3956044991], [svelte-3956044991] .file-drop-area__button {\r\n\tfont-weight: 700;\r\n\tcolor: #e5edf1;\r\n\tbackground-color: #39bfd3;\r\n\tdisplay: none;\r\n\tpadding: 8px 16px;\r\n\tmargin: 40px auto 0;\r\n}\r\n.file-drop-area__button[svelte-3956044991]:hover, [svelte-3956044991] .file-drop-area__button:hover, .file-drop-area__button[svelte-3956044991]:focus, [svelte-3956044991] .file-drop-area__button:focus {\r\n\tbackground-color: #0f3c4b;\r\n}\r\n\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-3956044991', '');
	div.className = "form-group";

	var label = createElement('label');
	setAttribute(label, 'svelte-3956044991', '');

	appendNode(label, div);
	var text = createText(root.label);
	appendNode(text, label);
	appendNode(createText("\r\n  "), div);

	var form = createElement('form');
	setAttribute(form, 'svelte-3956044991', '');
	form.className = "file-drop-area";
	component.refs.form = form;

	appendNode(form, div);

	var div1 = createElement('div');
	setAttribute(div1, 'svelte-3956044991', '');
	div1.className = "file-drop-area__input";

	appendNode(div1, form);

	var img = createElement('img');
	setAttribute(img, 'svelte-3956044991', '');
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
	setAttribute(label1, 'svelte-3956044991', '');
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
	setAttribute(button, 'svelte-3956044991', '');
	button.className = "file-drop-area__button";
	button.type = "submit";

	appendNode(button, div1);
	appendNode(createText("Upload"), button);
	appendNode(createText("\r\n    "), form);

	var div2 = createElement('div');
	setAttribute(div2, 'svelte-3956044991', '');
	div2.className = "file-drop-area__uploading";

	appendNode(div2, form);
	appendNode(createText("Uploading…"), div2);
	appendNode(createText("\r\n    "), form);

	var div3 = createElement('div');
	setAttribute(div3, 'svelte-3956044991', '');
	div3.className = "file-drop-area__success";

	appendNode(div3, form);
	appendNode(createText("Done!"), div3);
	appendNode(createText("\r\n    "), form);

	var div4 = createElement('div');
	setAttribute(div4, 'svelte-3956044991', '');
	div4.className = "file-drop-area__error";

	appendNode(div4, form);
	appendNode(createText("Error! "), div4);

	var span = createElement('span');
	setAttribute(span, 'svelte-3956044991', '');

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
	setAttribute(input, 'svelte-3956044991', '');
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
	setAttribute(input, 'svelte-3956044991', '');
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


/***/ },
/* 7 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var forEach = exports.forEach = function forEach(xs, acc) {
  return Array.prototype.forEach.call(xs, acc);
};

var map = exports.map = function map(xs, acc) {
  return Array.prototype.map.call(xs, acc);
};

var toArray = exports.toArray = function toArray(xs) {
  return [].slice.call(xs);
};

var getFileExtension = exports.getFileExtension = function getFileExtension(file) {
  return (file.name || file).split('.').reverse()[0].toLowerCase();
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.save = exports.getId = undefined;

var _helpers = __webpack_require__(7);

var getId = exports.getId = function getId(files) {
  var sorted = (0, _helpers.toArray)(files).sort(function (a, b) {
    return (0, _helpers.getFileExtension)(a).localeCompare((0, _helpers.getFileExtension)(b));
  });
  return sorted.map(function (file) {
    return file.name;
  }).join('__');
};

var save = exports.save = function save(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
};

var load = exports.load = function load(id) {
  var value = localStorage.getItem(id);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  return value;
};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI2NTkwZjAxOGQzNTU1OTcyMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ZpbGUtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21hcC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbnVtYmVyLWlucHV0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9wYXBhcGFyc2UvcGFwYXBhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLmpzIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJ4cyIsImFjYyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsIm1hcCIsInRvQXJyYXkiLCJzbGljZSIsImdldEZpbGVFeHRlbnNpb24iLCJmaWxlIiwibmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsInRvTG93ZXJDYXNlIiwiZ2V0SWQiLCJzb3J0ZWQiLCJmaWxlcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJqb2luIiwic2F2ZSIsImlkIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZCIsInZhbHVlIiwiZ2V0SXRlbSIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztB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QUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0EsZ0NBQWdDLDJDQUEyQztBQUMzRTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4QkFBOEIsZ0JBQWdCLEVBQUU7QUFDbEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4M0NNLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMO0FBQUEsU0FBYUMsTUFBTUMsU0FBTixDQUFnQkosT0FBaEIsQ0FBd0JLLElBQXhCLENBQTZCSixFQUE3QixFQUFpQ0MsR0FBakMsQ0FBYjtBQUFBLENBQWhCOztBQUVBLElBQU1JLG9CQUFNLFNBQU5BLEdBQU0sQ0FBQ0wsRUFBRCxFQUFLQyxHQUFMO0FBQUEsU0FBYUMsTUFBTUMsU0FBTixDQUFnQkUsR0FBaEIsQ0FBb0JELElBQXBCLENBQXlCSixFQUF6QixFQUE2QkMsR0FBN0IsQ0FBYjtBQUFBLENBQVo7O0FBRUEsSUFBTUssNEJBQVUsU0FBVkEsT0FBVSxDQUFDTixFQUFEO0FBQUEsU0FBUSxHQUFHTyxLQUFILENBQVNILElBQVQsQ0FBY0osRUFBZCxDQUFSO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTVEsOENBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUM5QixDQUFDQyxLQUFLQyxJQUFMLElBQWFELElBQWQsRUFBb0JFLEtBQXBCLENBQTBCLEdBQTFCLEVBQStCQyxPQUEvQixHQUF5QyxDQUF6QyxFQUE0Q0MsV0FBNUMsRUFEOEI7QUFBQSxDQUF6QixDOzs7Ozs7Ozs7Ozs7OztBQ1BQOztBQUVPLElBQU1DLHdCQUFRLFNBQVJBLEtBQVEsUUFBUztBQUM1QixNQUFNQyxTQUFTLHNCQUFRQyxLQUFSLEVBQWVDLElBQWYsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDakMsK0JBQWlCRCxDQUFqQixFQUFvQkUsYUFBcEIsQ0FBa0MsK0JBQWlCRCxDQUFqQixDQUFsQyxDQURpQztBQUFBLEdBQXBCLENBQWY7QUFHQSxTQUFPSixPQUFPVixHQUFQLENBQVc7QUFBQSxXQUFRSSxLQUFLQyxJQUFiO0FBQUEsR0FBWCxFQUE4QlcsSUFBOUIsQ0FBbUMsSUFBbkMsQ0FBUDtBQUNELENBTE07O0FBT0EsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBYztBQUNoQ0MsZUFBYUMsT0FBYixDQUFxQkgsRUFBckIsRUFBeUJJLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUF6QjtBQUNELENBRk07O0FBSUEsSUFBTUssc0JBQU8sU0FBUEEsSUFBTyxLQUFNO0FBQ3hCLE1BQU1DLFFBQVFMLGFBQWFNLE9BQWIsQ0FBcUJSLEVBQXJCLENBQWQ7QUFDQSxNQUFJTyxLQUFKLEVBQVc7QUFDVCxRQUFJO0FBQ0YsYUFBT0gsS0FBS0ssS0FBTCxDQUFXRixLQUFYLENBQVA7QUFDRCxLQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZDLGNBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPSCxLQUFQO0FBQ0QsQ0FYTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGI2NTkwZjAxOGQzNTU1OTcyMmEiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xyXG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgPGgzPklucHV0czwvaDM+XHJcbiAgICAgIDxGaWxlSW5wdXQgb246Y2hhbmdlPVwiaGFuZGxlRmlsZXMoZXZlbnQuZmlsZXMpXCIgbGFiZWw9XCJNYXAgYW5kIENTViBmaWxlc1wiIG5hbWU9XCJpbnB1dFwiIC8+XHJcbiAgICAgIFxyXG4gICAgICA8bGFiZWw+U2NhbGU8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXQgYmluZDp2YWx1ZT1cInNjYWxlSFwiIGxhYmVsPVwiaG9yaXpvbnRhbFwiIG5hbWU9XCJob3J6XCIgc3RlcD1cIi4xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgIDxOdW1iZXJJbnB1dCBiaW5kOnZhbHVlPVwic2NhbGVWXCIgbGFiZWw9XCJ2ZXJ0aWNhbFwiIG5hbWU9XCJ2ZXJ0XCIgc3RlcD1cIi4xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8bGFiZWw+T2Zmc2V0PC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0IGJpbmQ6dmFsdWU9XCJvZmZzZXRYXCIgbGFiZWw9XCJYXCIgbmFtZT1cInhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0IGJpbmQ6dmFsdWU9XCJvZmZzZXRZXCIgbGFiZWw9XCJZXCIgbmFtZT1cInlcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcbiAgICAgIDxoMz5WaWV3PC9oMz5cclxuICAgICAgPGxhYmVsPmZvbzwvbGFiZWw+XHJcbiAgICAgIDxNYXAgc3JjPVwie3ttYXBTcmN9fVwiIHNwb3RzPVwie3tzcG90c319XCIgb246bG9hZGVkPVwic2V0KHsgbWFwRGltZW5zaW9uczogZXZlbnQuZGltZW5zaW9ucyB9KVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgIEdhcmFnZSBNYXAgVXRpbCAmbWRhc2g7IEh5cGVySW4gSW5jLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IEZpbGVJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9maWxlLWlucHV0JztcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vY29tcG9uZW50L251bWJlci1pbnB1dCc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnQvbWFwJztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmltcG9ydCB7IGZvckVhY2gsIGdldEZpbGVFeHRlbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25yZW5kZXIoKSB7XHJcbiAgICB0aGlzLm9ic2VydmUoJ21vZGlmaWVycycsICggbmV3VmFsdWUsIG9sZFZhbHVlICkgPT4ge1xyXG4gICAgICBpZiAobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0KCdzdG9yYWdlSWQnKTtcclxuICAgICAgICBpZiAoaWQpIHN0b3JhZ2Uuc2F2ZShpZCwgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzY2FsZUg6IDEuMCxcclxuICAgICAgc2NhbGVWOiAxLjAsXHJcbiAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgIG9mZnNldFk6IDAsXHJcbiAgICAgIG1hcFNyYzogJycsXHJcbiAgICAgIG1hcEZpbGU6IG51bGwsXHJcbiAgICAgIG1hcERpbWVuc2lvbnM6IG51bGwsXHJcbiAgICAgIGNzdkRhdGE6IFtdLFxyXG4gICAgICBjc3ZGaWxlOiBudWxsLFxyXG4gICAgICBzdG9yYWdlSWQ6IG51bGxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgbW9kaWZpZXJzOiAoc2NhbGVILCBzY2FsZVYsIG9mZnNldFgsIG9mZnNldFkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzY2FsZUg6IHBhcnNlRmxvYXQoc2NhbGVIKSxcclxuICAgICAgICBzY2FsZVY6IHBhcnNlRmxvYXQoc2NhbGVWKSxcclxuICAgICAgICBvZmZzZXRYOiBwYXJzZUZsb2F0KG9mZnNldFgpLFxyXG4gICAgICAgIG9mZnNldFk6IHBhcnNlRmxvYXQob2Zmc2V0WSlcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzcG90czogKGNzdkRhdGEsIG1vZGlmaWVycywgbWFwRGltZW5zaW9ucykgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKGNzdkRhdGEubGVuZ3RoID09IDAgfHwgIW1hcERpbWVuc2lvbnMpIHJldHVybiBbXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHsgc2NhbGVILCBzY2FsZVYsIG9mZnNldFgsIG9mZnNldFkgfSA9IG1vZGlmaWVycztcclxuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBtYXBEaW1lbnNpb25zO1xyXG4gICAgICBjb25zdCB0b1BpeGVsID0gKG1heCwgdmFsdWUsIHNjYWxlLCBvZmZzZXQpID0+IG1heCAqIHZhbHVlICogc2NhbGUgKyBvZmZzZXQ7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gY3N2RGF0YS5tYXAoKFtuYW1lLCB2YWx1ZVgsIHZhbHVlWV0pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIHZhbHVlWCxcclxuICAgICAgICAgIHZhbHVlWSxcclxuICAgICAgICAgIHg6IHRvUGl4ZWwod2lkdGgsIHZhbHVlWCwgc2NhbGVILCBvZmZzZXRYKSxcclxuICAgICAgICAgIHk6IHRvUGl4ZWwoaGVpZ2h0LCB2YWx1ZVksIHNjYWxlViwgb2Zmc2V0WSlcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGhhbmRsZUZpbGVzKGZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgIGZvckVhY2goZmlsZXMsIGZpbGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IGdldEZpbGVFeHRlbnNpb24oZmlsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChleHQpIHtcclxuICAgICAgICBjYXNlICdjc3YnOlxyXG4gICAgICAgICAgY29tcG9uZW50LmhhbmRsZUNTVkZpbGUoZmlsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdqcGcnOlxyXG4gICAgICAgIGNhc2UgJ2pwZWcnOlxyXG4gICAgICAgIGNhc2UgJ3BuZyc6XHJcbiAgICAgICAgY2FzZSAnc3ZnJzpcclxuICAgICAgICAgIGNvbXBvbmVudC5oYW5kbGVNYXBGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVua25vd24gZmlsZSAke2ZpbGUubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgLy8gR2V0IGlkIGZvciBmaWxlIGNvbWJpbmF0aW9uIGFuZCBjaGVjayBpZiB0aGVyZSdzIHNhdmVkIG1vZGlmaWVyc1xyXG4gICAgICBjb25zdCBpZCA9IHN0b3JhZ2UuZ2V0SWQoZmlsZXMpO1xyXG4gICAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5sb2FkKGlkKTtcclxuICAgICAgY29tcG9uZW50LnNldCh7IHN0b3JhZ2VJZDogaWQgfSk7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50LnNldChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUNTVkZpbGUoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICBQYXBhLnBhcnNlKGZpbGUsIHtcclxuICAgICAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGVycm9ycywgZGF0YSB9ID0gcmVzdWx0cztcclxuICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDU1YgcGFyc2luZyBlcnJvcnNcXG4nLCBlcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KHsgY3N2RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZU1hcEZpbGUoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gZXZlbnQgPT4gY29tcG9uZW50LnNldCh7IG1hcFNyYzogZXZlbnQudGFyZ2V0LnJlc3VsdCB9KTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBGaWxlSW5wdXQsXHJcbiAgICBOdW1iZXJJbnB1dCxcclxuICAgIE1hcFxyXG4gIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuaHRtbCIsIlxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxyXG4gIDxmb3JtIGNsYXNzPVwiZmlsZS1kcm9wLWFyZWFcIiByZWY6Zm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9faW5wdXRcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19pY29uXCIgc3JjPVwiLi9pbWFnZXMvaWNfdXBsb2FkLnN2Z1wiPlxyXG4gICAgICB7eyNpZiBtdWx0aXBsZX19XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19maWxlXCIgdHlwZT1cImZpbGVcIiBuYW1lPVwie3tpZH19XCIgaWQ9XCJ7e2lkfX1cIiBtdWx0aXBsZSAvPlxyXG4gICAgICB7e2Vsc2V9fVxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fZmlsZVwiIHR5cGU9XCJmaWxlXCIgbmFtZT1cInt7aWR9fVwiIGlkPVwie3tpZH19XCIgLz5cclxuICAgICAge3svaWZ9fVxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fbGFiZWxcIiBmb3I9XCJ7e2lkfX1cIj57e3tkcm9wTGFiZWx9fX08L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZmlsZS1kcm9wLWFyZWFfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX191cGxvYWRpbmdcIj5VcGxvYWRpbmcmaGVsbGlwOzwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcC1hcmVhX19zdWNjZXNzXCI+RG9uZSE8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3AtYXJlYV9fZXJyb3JcIj5FcnJvciEgPHNwYW4+PC9zcGFuPi48L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5jb25zdCBpc0FkdmFuY2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG5cclxuY29uc3Qgb24gPSAoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikgPT4gXHJcbiAgdHlwZS5zcGxpdCgnICcpLmZvckVhY2godCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCwgaGFuZGxlcikpO1xyXG5cclxuY29uc3QgaW5pdCA9IChjb21wb25lbnQpID0+IHtcclxuICBpZiAoaXNBZHZhbmNlZCkge1xyXG4gICAgY29uc3QgeyBmb3JtIH0gPSBjb21wb25lbnQucmVmcztcclxuICAgIG9uKGZvcm0sICdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgIG9uKGZvcm0sICdkcmFnb3ZlciBkcmFnZW50ZXInLCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWRyYWdvdmVyJykpO1xyXG4gICAgb24oZm9ybSwgJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdvdmVyJykpO1xyXG4gICAgb24oZm9ybSwgJ2Ryb3AnLCBlID0+IHtcclxuICAgICAgY29uc3QgeyBmaWxlcyB9ID0gZS5kYXRhVHJhbnNmZXI7XHJcbiAgICAgIGNvbXBvbmVudC5zZXQoeyBmaWxlczogZmlsZXMgfSk7XHJcbiAgICAgIGNvbXBvbmVudC5maXJlKCdjaGFuZ2UnLCB7IGZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZmlsZS1kcm9wLWFyZWEtLWFkdmFuY2VkJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25yZW5kZXIoKSB7XHJcbiAgICBpbml0KHRoaXMpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBmaWxlczogW10sXHJcbiAgICAgIGxhYmVsOiAnZm9vJyxcclxuICAgICAgbXVsdGlwbGU6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGlkOiBuYW1lID0+IGBmaWxlLSR7bmFtZX1gLFxyXG4gICAgZHJvcExhYmVsOiBmaWxlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZmlsZXMubGVuZ3RoO1xyXG4gICAgICBpZiAoY291bnQgPT0gMCkgICAgICByZXR1cm4gJzxzdHJvbmc+Q2hvb3NlIGEgZmlsZTwvc3Ryb25nPjxzcGFuIGNsYXNzPVwiZmlsZS1kcm9wLWFyZWFfX2RyYWduZHJvcFwiPiBvciBkcmFnIGl0IGhlcmU8L3NwYW4+Lic7XHJcbiAgICAgIGVsc2UgaWYgKGNvdW50IDw9IDIpIHJldHVybiBtYXAoZmlsZXMsIGYgPT4gZi5uYW1lKS5qb2luKCc8YnI+Jyk7XHJcbiAgICAgIGVsc2UgLyogY291bnQgPiAxICovIHJldHVybiBgJHtjb3VudH0gZmlsZXMgc2VsZWN0ZWRgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZT5cclxuLmZpbGUtZHJvcC1hcmVhIHtcclxuXHRmb250LXNpemU6IDEuMjVlbTsgLyogMjAgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhkYWRmO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAxMDBweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbGUtZHJvcC1hcmVhLS1hZHZhbmNlZCB7XHJcblx0b3V0bGluZTogMnB4IGRhc2hlZCAjOTJiMGIzO1xyXG5cdG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcclxuXHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xyXG5cdHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5maWxlLWRyb3AtYXJlYS5pcy1kcmFnb3ZlciB7XHJcblx0b3V0bGluZS1vZmZzZXQ6IC0yMHB4O1xyXG5cdG91dGxpbmUtY29sb3I6ICNjOGRhZGY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4gICAgICAgIFxyXG4uZmlsZS1kcm9wLWFyZWFfX2RyYWduZHJvcCxcclxuLmZpbGUtZHJvcC1hcmVhX19pY29uIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYS0tYWR2YW5jZWQgLmZpbGUtZHJvcC1hcmVhX19kcmFnbmRyb3Age1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uZmlsZS1kcm9wLWFyZWEtLWFkdmFuY2VkIC5maWxlLWRyb3AtYXJlYV9faWNvbiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdG9wYWNpdHk6IDAuMjU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZpbGUtZHJvcC1hcmVhLmlzLXVwbG9hZGluZyAuZmlsZS1kcm9wLWFyZWFfX2lucHV0LFxyXG4uZmlsZS1kcm9wLWFyZWEuaXMtc3VjY2VzcyAuZmlsZS1kcm9wLWFyZWFfX2lucHV0LFxyXG4uZmlsZS1kcm9wLWFyZWEuaXMtZXJyb3IgLmZpbGUtZHJvcC1hcmVhX19pbnB1dCB7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZmlsZS1kcm9wLWFyZWFfX3VwbG9hZGluZyxcclxuLmZpbGUtZHJvcC1hcmVhX19zdWNjZXNzLFxyXG4uZmlsZS1kcm9wLWFyZWFfX2Vycm9yXHJcbntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZS1kcm9wLWFyZWEuaXMtdXBsb2FkaW5nIC5maWxlLWRyb3AtYXJlYV9fdXBsb2FkaW5nLFxyXG4uZmlsZS1kcm9wLWFyZWEuaXMtc3VjY2VzcyAuZmlsZS1kcm9wLWFyZWFfX3N1Y2Nlc3MsXHJcbi5maWxlLWRyb3AtYXJlYS5pcy1lcnJvciAuZmlsZS1kcm9wLWFyZWFfX2Vycm9yIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogMDtcclxuXHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKTtcclxufVxyXG4uZmlsZS1kcm9wLWFyZWFfX3VwbG9hZGluZyB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYV9fc3VjY2VzcyB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGFwcGVhci1mcm9tLWluc2lkZSAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdGFuaW1hdGlvbjogYXBwZWFyLWZyb20taW5zaWRlIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhcHBlYXItZnJvbS1pbnNpZGUge1xyXG5cdGZyb21cdHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKSBzY2FsZSggMCApOyB9XHJcblx0NzUlXHRcdHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKSBzY2FsZSggMS4xICk7IH1cclxuXHR0b1x0XHR7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtNTAlICkgc2NhbGUoIDEgKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYXBwZWFyLWZyb20taW5zaWRlIHtcclxuXHRmcm9tXHR7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApIHNjYWxlKCAwICk7IH1cclxuXHQ3NSVcdFx0eyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC01MCUgKSBzY2FsZSggMS4xICk7IH1cclxuXHR0b1x0XHR7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApIHNjYWxlKCAxICk7IH1cclxufVxyXG5cclxuLmZpbGUtZHJvcC1hcmVhX19yZXN0YXJ0IHtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5maWxlLWRyb3AtYXJlYV9fcmVzdGFydDpmb2N1cyxcclxuLmZpbGUtZHJvcC1hcmVhX19yZXN0YXJ0OmhvdmVyIHtcclxuXHRjb2xvcjogIzM5YmZkMztcclxufVxyXG5cclxuLmpzIC5maWxlLWRyb3AtYXJlYV9fZmlsZSB7XHJcblx0d2lkdGg6IDAuMXB4O1xyXG5cdGhlaWdodDogMC4xcHg7XHJcblx0b3BhY2l0eTogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG4uanMgLmZpbGUtZHJvcC1hcmVhX19sYWJlbCB7XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmpzIC5maWxlLWRyb3AtYXJlYV9fbGFiZWw6aG92ZXIgc3Ryb25nLFxyXG4uZmlsZS1kcm9wLWFyZWFfX2ZpbGU6Zm9jdXMgKyAuZmlsZS1kcm9wLWFyZWFfX2xhYmVsIHN0cm9uZyxcclxuLmZpbGUtZHJvcC1hcmVhX19maWxlLmhhcy1mb2N1cyArIC5maWxlLWRyb3AtYXJlYV9fbGFiZWwgc3Ryb25nIHtcclxuXHRjb2xvcjogIzM5YmZkMztcclxufVxyXG4uanMgLmZpbGUtZHJvcC1hcmVhX19maWxlOmZvY3VzICsgLmZpbGUtZHJvcC1hcmVhX19sYWJlbCxcclxuLmpzIC5maWxlLWRyb3AtYXJlYV9fZmlsZS5oYXMtZm9jdXMgKyAuZmlsZS1kcm9wLWFyZWFfX2xhYmVsIHtcclxuXHRvdXRsaW5lOiAxcHggZG90dGVkICMwMDA7XHJcblx0b3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xyXG59XHJcblxyXG4ubm8tanMgLmZpbGUtZHJvcC1hcmVhX19sYWJlbCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5vLWpzIC5maWxlLWRyb3AtYXJlYV9fYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZmlsZS1kcm9wLWFyZWFfX2J1dHRvbiB7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRjb2xvcjogI2U1ZWRmMTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzliZmQzO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cGFkZGluZzogOHB4IDE2cHg7XHJcblx0bWFyZ2luOiA0MHB4IGF1dG8gMDtcclxufVxyXG4uZmlsZS1kcm9wLWFyZWFfX2J1dHRvbjpob3ZlcixcclxuLmZpbGUtZHJvcC1hcmVhX19idXR0b246Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwZjNjNGI7XHJcbn1cclxuXHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9maWxlLWlucHV0Lmh0bWwiLCI8ZGl2IGNsYXNzPVwibWFwXCI+XHJcbiAge3sjaWYgc3JjfX1cclxuICAgIDxpbWcgY2xhc3M9XCJtYXBfX2ltYWdlXCIgc3JjPVwie3tzcmN9fVwiIG9uOmxvYWQ9XCJ1cGRhdGVEaW1lbnNpb24odGhpcylcIiAvPlxyXG4gICAge3sjaWYgZGltZW5zaW9uc319XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFwX19wb2ktbGF5ZXJcIiBzdHlsZT1cInt7cG9pTGF5ZXJTdHlsZXN9fVwiPlxyXG4gICAgICB7eyNlYWNoIHNwb3RzIGFzIHNwb3R9fVxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFwX19wb2lcIiBzdHlsZT1cInt7cG9pU3R5bGVzKHNwb3QsIGRpbWVuc2lvbnMpfX1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9pX19tYXJrZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9pX19sYWJlbFwiPlxyXG4gICAgICAgICAge3sjaWYgc3BvdC5uYW1lfX17e3Nwb3QubmFtZX19PGJyIC8+e3svaWZ9fVxyXG4gICAgICAgICAgeDp7e3Nwb3QudmFsdWVYIHx8ICctJ319IHk6e3tzcG90LnZhbHVlWSB8fCAnLSd9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3svZWFjaH19XHJcbiAgICA8L2Rpdj5cclxuICAgIHt7L2lmfX1cclxuICB7ey9pZn19XHJcbjwvZGl2PlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmNvbnN0IGdldERpbWVuc2lvbnMgPSBpbWcgPT4ge1xyXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1nO1xyXG4gIHJldHVybiB3aWR0aCAmJiBoZWlnaHQgPyB7IHdpZHRoLCBoZWlnaHQgfSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25yZW5kZXIoKSB7XHJcbiAgICB0aGlzLm9ic2VydmUoJ3NyYycsICggbmV3VmFsdWUsIG9sZFZhbHVlICkgPT4ge1xyXG4gICAgICBpZiAobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldCh7IGNhbGN1bGF0ZURpbWVuc2lvbnM6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNyYzogJycsXHJcbiAgICAgIHNwb3RzOiBbXSxcclxuICAgICAgZGltZW5zaW9uczogbnVsbCxcclxuICAgICAgY2FsY3VsYXRlRGltZW5zaW9uczogZmFsc2UsXHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIHNjYWxlSG9yaXpvbnRhbDogMS4wLFxyXG4gICAgICAgIHNjYWxlVmVydGljYWw6IDEuMCxcclxuICAgICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICAgIG9mZnNldFk6IDAsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcG9pTGF5ZXJTdHlsZXM6IChtb2RpZmllcnMsIGRpbWVuc2lvbnMpID0+IHtcclxuICAgICAgaWYgKGRpbWVuc2lvbnMpIHtcclxuICAgICAgICBjb25zdCB7IHNjYWxlSG9yaXpvbnRhbCwgc2NhbGVWZXJ0aWNhbCB9ID0gbW9kaWZpZXJzO1xyXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZGltZW5zaW9ucztcclxuICAgICAgICBjb25zdCBtb2RXaWR0aCA9IHdpZHRoICogc2NhbGVIb3Jpem9udGFsO1xyXG4gICAgICAgIGNvbnN0IG1vZEhlaWdodCA9IGhlaWdodCAqIHNjYWxlVmVydGljYWw7XHJcbiAgICAgICAgcmV0dXJuIGB3aWR0aDogJHt3aWR0aH1weDsgaGVpZ2h0OiAke2hlaWdodH1weDtgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9LFxyXG4gIGhlbHBlcnM6IHtcclxuICAgIHBvaVN0eWxlczogKHNwb3QsIGRpbWVuc2lvbnMpID0+IHtcclxuICAgICAgLy8gY29uc3QgeCA9IHNwb3QueChkaW1lbnNpb25zLndpZHRoKTtcclxuICAgICAgLy8gY29uc3QgeSA9IHNwb3QueShkaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHJldHVybiBgbGVmdDogJHtzcG90Lnh9cHg7IHRvcDogJHtzcG90Lnl9cHg7YDtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHVwZGF0ZURpbWVuc2lvbihpbWcpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0KCdjYWxjdWxhdGVEaW1lbnNpb25zJykpIHtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gZ2V0RGltZW5zaW9ucyhpbWcpO1xyXG4gICAgICAgIHRoaXMuc2V0KHsgZGltZW5zaW9ucywgY2FsY3VsYXRlRGltZW5zaW9uczogZmFsc2UgfSk7XHJcbiAgICAgICAgdGhpcy5maXJlKCdsb2FkZWQnLCB7IGRpbWVuc2lvbnMgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5tYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9pbV9ncmlkLnN2Zyk7XHJcbn1cclxuXHJcbi5tYXBfX2ltYWdlIHtcclxuICBvdXRsaW5lOiAycHggZGFzaGVkICNmYjI7XHJcbn1cclxuXHJcbi5tYXBfX3BvaS1sYXllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjYzAwO1xyXG59XHJcblxyXG4ubWFwX19wb2kge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMTBweCk7XHJcbn1cclxuXHJcbi5wb2lfX21hcmtlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOztcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG4ucG9pX19sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDJweCAzcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzkwMDtcclxuICBjb2xvcjogIzkwMDtcclxuICBmb250LXNpemU6IC43ODU3ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cywgY29sb3IgLjE1cywgb3BhY2l0eSAuMTVzO1xyXG59XHJcblxyXG4ubWFwX19wb2k6aG92ZXIgLnBvaV9fbWFya2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0O1xyXG59XHJcblxyXG4ubWFwX19wb2k6aG92ZXIgLnBvaV9fbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvbWFwLmh0bWwiLCI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIGlkPVwiaW5wdXQtJHtuYW1lfVwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1udW1iZXIgaW5wdXQtc21cIiB0eXBlPVwibnVtYmVyXCIgYmluZDp2YWx1ZSBzdGVwPXt7c3RlcH19IGFyaWEtZGVzY3JpYmVkYnk9XCJpbnB1dC0ke25hbWV9XCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6ICdbbGFiZWxdJyxcclxuICAgICAgbmFtZTogJ1tuYW1lXScsXHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICBzdGVwOiAxXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uaW5wdXQtbnVtYmVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvbnVtYmVyLWlucHV0Lmh0bWwiLCIvKiFcblx0UGFwYSBQYXJzZVxuXHR2NC4xLjJcblx0aHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuKi9cbihmdW5jdGlvbihnbG9iYWwpXG57XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBJU19XT1JLRVIgPSAhZ2xvYmFsLmRvY3VtZW50ICYmICEhZ2xvYmFsLnBvc3RNZXNzYWdlLFxuXHRcdElTX1BBUEFfV09SS0VSID0gSVNfV09SS0VSICYmIC8oXFw/fCYpcGFwYXdvcmtlcig9fCZ8JCkvLnRlc3QoZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCksXG5cdFx0TE9BREVEX1NZTkMgPSBmYWxzZSwgQVVUT19TQ1JJUFRfUEFUSDtcblx0dmFyIHdvcmtlcnMgPSB7fSwgd29ya2VySWRDb3VudGVyID0gMDtcblxuXHR2YXIgUGFwYSA9IHt9O1xuXG5cdFBhcGEucGFyc2UgPSBDc3ZUb0pzb247XG5cdFBhcGEudW5wYXJzZSA9IEpzb25Ub0NzdjtcblxuXHRQYXBhLlJFQ09SRF9TRVAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTtcblx0UGFwYS5VTklUX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzEpO1xuXHRQYXBhLkJZVEVfT1JERVJfTUFSSyA9IFwiXFx1ZmVmZlwiO1xuXHRQYXBhLkJBRF9ERUxJTUlURVJTID0gW1wiXFxyXCIsIFwiXFxuXCIsIFwiXFxcIlwiLCBQYXBhLkJZVEVfT1JERVJfTUFSS107XG5cdFBhcGEuV09SS0VSU19TVVBQT1JURUQgPSAhSVNfV09SS0VSICYmICEhZ2xvYmFsLldvcmtlcjtcblx0UGFwYS5TQ1JJUFRfUEFUSCA9IG51bGw7XHQvLyBNdXN0IGJlIHNldCBieSB5b3VyIGNvZGUgaWYgeW91IHVzZSB3b3JrZXJzIGFuZCB0aGlzIGxpYiBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHlcblxuXHQvLyBDb25maWd1cmFibGUgY2h1bmsgc2l6ZXMgZm9yIGxvY2FsIGFuZCByZW1vdGUgZmlsZXMsIHJlc3BlY3RpdmVseVxuXHRQYXBhLkxvY2FsQ2h1bmtTaXplID0gMTAyNCAqIDEwMjQgKiAxMDtcdC8vIDEwIE1CXG5cdFBhcGEuUmVtb3RlQ2h1bmtTaXplID0gMTAyNCAqIDEwMjQgKiA1O1x0Ly8gNSBNQlxuXHRQYXBhLkRlZmF1bHREZWxpbWl0ZXIgPSBcIixcIjtcdFx0XHQvLyBVc2VkIGlmIG5vdCBzcGVjaWZpZWQgYW5kIGRldGVjdGlvbiBmYWlsc1xuXG5cdC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcgYW5kIGRldmVsb3BtZW50IG9ubHlcblx0UGFwYS5QYXJzZXIgPSBQYXJzZXI7XG5cdFBhcGEuUGFyc2VySGFuZGxlID0gUGFyc2VySGFuZGxlO1xuXHRQYXBhLk5ldHdvcmtTdHJlYW1lciA9IE5ldHdvcmtTdHJlYW1lcjtcblx0UGFwYS5GaWxlU3RyZWFtZXIgPSBGaWxlU3RyZWFtZXI7XG5cdFBhcGEuU3RyaW5nU3RyZWFtZXIgPSBTdHJpbmdTdHJlYW1lcjtcblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpXG5cdHtcblx0XHQvLyBFeHBvcnQgdG8gTm9kZS4uLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gUGFwYTtcblx0fVxuXHRlbHNlIGlmIChpc0Z1bmN0aW9uKGdsb2JhbC5kZWZpbmUpICYmIGdsb2JhbC5kZWZpbmUuYW1kKVxuXHR7XG5cdFx0Ly8gV2lyZXVwIHdpdGggUmVxdWlyZUpTXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUGFwYTsgfSk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Ly8gLi4ub3IgYXMgYnJvd3NlciBnbG9iYWxcblx0XHRnbG9iYWwuUGFwYSA9IFBhcGE7XG5cdH1cblxuXHRpZiAoZ2xvYmFsLmpRdWVyeSlcblx0e1xuXHRcdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblx0XHQkLmZuLnBhcnNlID0gZnVuY3Rpb24ob3B0aW9ucylcblx0XHR7XG5cdFx0XHR2YXIgY29uZmlnID0gb3B0aW9ucy5jb25maWcgfHwge307XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKGlkeClcblx0XHRcdHtcblx0XHRcdFx0dmFyIHN1cHBvcnRlZCA9ICQodGhpcykucHJvcCgndGFnTmFtZScpLnRvVXBwZXJDYXNlKCkgPT0gXCJJTlBVVFwiXG5cdFx0XHRcdFx0XHRcdFx0JiYgJCh0aGlzKS5hdHRyKCd0eXBlJykudG9Mb3dlckNhc2UoKSA9PSBcImZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdCYmIGdsb2JhbC5GaWxlUmVhZGVyO1xuXG5cdFx0XHRcdGlmICghc3VwcG9ydGVkIHx8ICF0aGlzLmZpbGVzIHx8IHRoaXMuZmlsZXMubGVuZ3RoID09IDApXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHQvLyBjb250aW51ZSB0byBuZXh0IGlucHV0IGVsZW1lbnRcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRcdGZpbGU6IHRoaXMuZmlsZXNbaV0sXG5cdFx0XHRcdFx0XHRpbnB1dEVsZW06IHRoaXMsXG5cdFx0XHRcdFx0XHRpbnN0YW5jZUNvbmZpZzogJC5leHRlbmQoe30sIGNvbmZpZylcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHBhcnNlTmV4dEZpbGUoKTtcdC8vIGJlZ2luIHBhcnNpbmdcblx0XHRcdHJldHVybiB0aGlzO1x0XHQvLyBtYWludGFpbnMgY2hhaW5hYmlsaXR5XG5cblxuXHRcdFx0ZnVuY3Rpb24gcGFyc2VOZXh0RmlsZSgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChxdWV1ZS5sZW5ndGggPT0gMClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY29tcGxldGUpKVxuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmID0gcXVldWVbMF07XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5iZWZvcmUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJldHVybmVkID0gb3B0aW9ucy5iZWZvcmUoZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldHVybmVkID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAocmV0dXJuZWQuYWN0aW9uID09IFwiYWJvcnRcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IoXCJBYm9ydEVycm9yXCIsIGYuZmlsZSwgZi5pbnB1dEVsZW0sIHJldHVybmVkLnJlYXNvbik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcdC8vIEFib3J0cyBhbGwgcXVldWVkIGZpbGVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmIChyZXR1cm5lZC5hY3Rpb24gPT0gXCJza2lwXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1x0Ly8gcGFyc2UgdGhlIG5leHQgZmlsZSBpbiB0aGUgcXVldWUsIGlmIGFueVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgcmV0dXJuZWQuY29uZmlnID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRcdFx0Zi5pbnN0YW5jZUNvbmZpZyA9ICQuZXh0ZW5kKGYuaW5zdGFuY2VDb25maWcsIHJldHVybmVkLmNvbmZpZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHJldHVybmVkID09IFwic2tpcFwiKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1x0Ly8gcGFyc2UgdGhlIG5leHQgZmlsZSBpbiB0aGUgcXVldWUsIGlmIGFueVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdyYXAgdXAgdGhlIHVzZXIncyBjb21wbGV0ZSBjYWxsYmFjaywgaWYgYW55LCBzbyB0aGF0IG91cnMgYWxzbyBnZXRzIGV4ZWN1dGVkXG5cdFx0XHRcdHZhciB1c2VyQ29tcGxldGVGdW5jID0gZi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZTtcblx0XHRcdFx0Zi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZSA9IGZ1bmN0aW9uKHJlc3VsdHMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaXNGdW5jdGlvbih1c2VyQ29tcGxldGVGdW5jKSlcblx0XHRcdFx0XHRcdHVzZXJDb21wbGV0ZUZ1bmMocmVzdWx0cywgZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0UGFwYS5wYXJzZShmLmZpbGUsIGYuaW5zdGFuY2VDb25maWcpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlcnJvcihuYW1lLCBmaWxlLCBlbGVtLCByZWFzb24pXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuZXJyb3IpKVxuXHRcdFx0XHRcdG9wdGlvbnMuZXJyb3Ioe25hbWU6IG5hbWV9LCBmaWxlLCBlbGVtLCByZWFzb24pO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBmaWxlQ29tcGxldGUoKVxuXHRcdFx0e1xuXHRcdFx0XHRxdWV1ZS5zcGxpY2UoMCwgMSk7XG5cdFx0XHRcdHBhcnNlTmV4dEZpbGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdGlmIChJU19QQVBBX1dPUktFUilcblx0e1xuXHRcdGdsb2JhbC5vbm1lc3NhZ2UgPSB3b3JrZXJUaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdH1cblx0ZWxzZSBpZiAoUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0e1xuXHRcdEFVVE9fU0NSSVBUX1BBVEggPSBnZXRTY3JpcHRQYXRoKCk7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgc2NyaXB0IHdhcyBsb2FkZWQgc3luY2hyb25vdXNseVxuXHRcdGlmICghZG9jdW1lbnQuYm9keSlcblx0XHR7XG5cdFx0XHQvLyBCb2R5IGRvZXNuJ3QgZXhpc3QgeWV0LCBtdXN0IGJlIHN5bmNocm9ub3VzXG5cdFx0XHRMT0FERURfU1lOQyA9IHRydWU7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRMT0FERURfU1lOQyA9IHRydWU7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXG5cblxuXHRmdW5jdGlvbiBDc3ZUb0pzb24oX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0X2NvbmZpZyA9IF9jb25maWcgfHwge307XG5cblx0XHRpZiAoX2NvbmZpZy53b3JrZXIgJiYgUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0XHR7XG5cdFx0XHR2YXIgdyA9IG5ld1dvcmtlcigpO1xuXG5cdFx0XHR3LnVzZXJTdGVwID0gX2NvbmZpZy5zdGVwO1xuXHRcdFx0dy51c2VyQ2h1bmsgPSBfY29uZmlnLmNodW5rO1xuXHRcdFx0dy51c2VyQ29tcGxldGUgPSBfY29uZmlnLmNvbXBsZXRlO1xuXHRcdFx0dy51c2VyRXJyb3IgPSBfY29uZmlnLmVycm9yO1xuXG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBpc0Z1bmN0aW9uKF9jb25maWcuc3RlcCk7XG5cdFx0XHRfY29uZmlnLmNodW5rID0gaXNGdW5jdGlvbihfY29uZmlnLmNodW5rKTtcblx0XHRcdF9jb25maWcuY29tcGxldGUgPSBpc0Z1bmN0aW9uKF9jb25maWcuY29tcGxldGUpO1xuXHRcdFx0X2NvbmZpZy5lcnJvciA9IGlzRnVuY3Rpb24oX2NvbmZpZy5lcnJvcik7XG5cdFx0XHRkZWxldGUgX2NvbmZpZy53b3JrZXI7XHQvLyBwcmV2ZW50IGluZmluaXRlIGxvb3BcblxuXHRcdFx0dy5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdGlucHV0OiBfaW5wdXQsXG5cdFx0XHRcdGNvbmZpZzogX2NvbmZpZyxcblx0XHRcdFx0d29ya2VySWQ6IHcuaWRcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0cmVhbWVyID0gbnVsbDtcblx0XHRpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0aWYgKF9jb25maWcuZG93bmxvYWQpXG5cdFx0XHRcdHN0cmVhbWVyID0gbmV3IE5ldHdvcmtTdHJlYW1lcihfY29uZmlnKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0c3RyZWFtZXIgPSBuZXcgU3RyaW5nU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChnbG9iYWwuRmlsZSAmJiBfaW5wdXQgaW5zdGFuY2VvZiBGaWxlKSB8fCBfaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpXHQvLyAuLi5TYWZhcmkuIChzZWUgaXNzdWUgIzEwNilcblx0XHRcdHN0cmVhbWVyID0gbmV3IEZpbGVTdHJlYW1lcihfY29uZmlnKTtcblxuXHRcdHJldHVybiBzdHJlYW1lci5zdHJlYW0oX2lucHV0KTtcblx0fVxuXG5cblxuXG5cblxuXHRmdW5jdGlvbiBKc29uVG9Dc3YoX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0dmFyIF9vdXRwdXQgPSBcIlwiO1xuXHRcdHZhciBfZmllbGRzID0gW107XG5cblx0XHQvLyBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cblxuXHRcdC8qKiB3aGV0aGVyIHRvIHN1cnJvdW5kIGV2ZXJ5IGRhdHVtIHdpdGggcXVvdGVzICovXG5cdFx0dmFyIF9xdW90ZXMgPSBmYWxzZTtcblxuXHRcdC8qKiBkZWxpbWl0aW5nIGNoYXJhY3RlciAqL1xuXHRcdHZhciBfZGVsaW1pdGVyID0gXCIsXCI7XG5cblx0XHQvKiogbmV3bGluZSBjaGFyYWN0ZXIocykgKi9cblx0XHR2YXIgX25ld2xpbmUgPSBcIlxcclxcblwiO1xuXG5cdFx0dW5wYWNrQ29uZmlnKCk7XG5cblx0XHRpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0XHRfaW5wdXQgPSBKU09OLnBhcnNlKF9pbnB1dCk7XG5cblx0XHRpZiAoX2lucHV0IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0e1xuXHRcdFx0aWYgKCFfaW5wdXQubGVuZ3RoIHx8IF9pbnB1dFswXSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKG51bGwsIF9pbnB1dCk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgX2lucHV0WzBdID09PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShvYmplY3RLZXlzKF9pbnB1dFswXSksIF9pbnB1dCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBfaW5wdXQgPT09ICdvYmplY3QnKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgX2lucHV0LmRhdGEgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfaW5wdXQuZGF0YSA9IEpTT04ucGFyc2UoX2lucHV0LmRhdGEpO1xuXG5cdFx0XHRpZiAoX2lucHV0LmRhdGEgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKCFfaW5wdXQuZmllbGRzKVxuXHRcdFx0XHRcdF9pbnB1dC5maWVsZHMgPSBfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbnB1dC5maWVsZHNcblx0XHRcdFx0XHRcdFx0XHRcdDogb2JqZWN0S2V5cyhfaW5wdXQuZGF0YVswXSk7XG5cblx0XHRcdFx0aWYgKCEoX2lucHV0LmRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheSkgJiYgdHlwZW9mIF9pbnB1dC5kYXRhWzBdICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRfaW5wdXQuZGF0YSA9IFtfaW5wdXQuZGF0YV07XHQvLyBoYW5kbGVzIGlucHV0IGxpa2UgWzEsMiwzXSBvciBbXCJhc2RmXCJdXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXJpYWxpemUoX2lucHV0LmZpZWxkcyB8fCBbXSwgX2lucHV0LmRhdGEgfHwgW10pO1xuXHRcdH1cblxuXHRcdC8vIERlZmF1bHQgKGFueSB2YWxpZCBwYXRocyBzaG91bGQgcmV0dXJuIGJlZm9yZSB0aGlzKVxuXHRcdHRocm93IFwiZXhjZXB0aW9uOiBVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dFwiO1xuXG5cblx0XHRmdW5jdGlvbiB1bnBhY2tDb25maWcoKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZyAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLmRlbGltaXRlciA9PT0gJ3N0cmluZydcblx0XHRcdFx0JiYgX2NvbmZpZy5kZWxpbWl0ZXIubGVuZ3RoID09IDFcblx0XHRcdFx0JiYgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKF9jb25maWcuZGVsaW1pdGVyKSA9PSAtMSlcblx0XHRcdHtcblx0XHRcdFx0X2RlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcucXVvdGVzID09PSAnYm9vbGVhbidcblx0XHRcdFx0fHwgX2NvbmZpZy5xdW90ZXMgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0X3F1b3RlcyA9IF9jb25maWcucXVvdGVzO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcubmV3bGluZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9uZXdsaW5lID0gX2NvbmZpZy5uZXdsaW5lO1xuXHRcdH1cblxuXG5cdFx0LyoqIFR1cm5zIGFuIG9iamVjdCdzIGtleXMgaW50byBhbiBhcnJheSAqL1xuXHRcdGZ1bmN0aW9uIG9iamVjdEtleXMob2JqKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0dmFyIGtleXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvYmopXG5cdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0fVxuXG5cdFx0LyoqIFRoZSBkb3VibGUgZm9yIGxvb3AgdGhhdCBpdGVyYXRlcyB0aGUgZGF0YSBhbmQgd3JpdGVzIG91dCBhIENTViBzdHJpbmcgaW5jbHVkaW5nIGhlYWRlciByb3cgKi9cblx0XHRmdW5jdGlvbiBzZXJpYWxpemUoZmllbGRzLCBkYXRhKVxuXHRcdHtcblx0XHRcdHZhciBjc3YgPSBcIlwiO1xuXG5cdFx0XHRpZiAodHlwZW9mIGZpZWxkcyA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGZpZWxkcyA9IEpTT04ucGFyc2UoZmllbGRzKTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG5cdFx0XHR2YXIgaGFzSGVhZGVyID0gZmllbGRzIGluc3RhbmNlb2YgQXJyYXkgJiYgZmllbGRzLmxlbmd0aCA+IDA7XG5cdFx0XHR2YXIgZGF0YUtleWVkQnlGaWVsZCA9ICEoZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5KTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYSBoZWFkZXIgcm93LCB3cml0ZSBpdCBmaXJzdFxuXHRcdFx0aWYgKGhhc0hlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShmaWVsZHNbaV0sIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGVuIHdyaXRlIG91dCB0aGUgZGF0YVxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgZGF0YS5sZW5ndGg7IHJvdysrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWF4Q29sID0gaGFzSGVhZGVyID8gZmllbGRzLmxlbmd0aCA6IGRhdGFbcm93XS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbWF4Q29sOyBjb2wrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChjb2wgPiAwKVxuXHRcdFx0XHRcdFx0Y3N2ICs9IF9kZWxpbWl0ZXI7XG5cdFx0XHRcdFx0dmFyIGNvbElkeCA9IGhhc0hlYWRlciAmJiBkYXRhS2V5ZWRCeUZpZWxkID8gZmllbGRzW2NvbF0gOiBjb2w7XG5cdFx0XHRcdFx0Y3N2ICs9IHNhZmUoZGF0YVtyb3ddW2NvbElkeF0sIGNvbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocm93IDwgZGF0YS5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdGNzdiArPSBfbmV3bGluZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNzdjtcblx0XHR9XG5cblx0XHQvKiogRW5jbG9zZXMgYSB2YWx1ZSBhcm91bmQgcXVvdGVzIGlmIG5lZWRlZCAobWFrZXMgYSB2YWx1ZSBzYWZlIGZvciBDU1YgaW5zZXJ0aW9uKSAqL1xuXHRcdGZ1bmN0aW9uIHNhZmUoc3RyLCBjb2wpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBzdHIgPT09IFwidW5kZWZpbmVkXCIgfHwgc3RyID09PSBudWxsKVxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcblxuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcblxuXHRcdFx0dmFyIG5lZWRzUXVvdGVzID0gKHR5cGVvZiBfcXVvdGVzID09PSAnYm9vbGVhbicgJiYgX3F1b3Rlcylcblx0XHRcdFx0XHRcdFx0fHwgKF9xdW90ZXMgaW5zdGFuY2VvZiBBcnJheSAmJiBfcXVvdGVzW2NvbF0pXG5cdFx0XHRcdFx0XHRcdHx8IGhhc0FueShzdHIsIFBhcGEuQkFEX0RFTElNSVRFUlMpXG5cdFx0XHRcdFx0XHRcdHx8IHN0ci5pbmRleE9mKF9kZWxpbWl0ZXIpID4gLTFcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdCgwKSA9PSAnICdcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkgPT0gJyAnO1xuXG5cdFx0XHRyZXR1cm4gbmVlZHNRdW90ZXMgPyAnXCInICsgc3RyICsgJ1wiJyA6IHN0cjtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYXNBbnkoc3RyLCBzdWJzdHJpbmdzKVxuXHRcdHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGg7IGkrKylcblx0XHRcdFx0aWYgKHN0ci5pbmRleE9mKHN1YnN0cmluZ3NbaV0pID4gLTEpXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqIENodW5rU3RyZWFtZXIgaXMgdGhlIGJhc2UgcHJvdG90eXBlIGZvciB2YXJpb3VzIHN0cmVhbWVyIGltcGxlbWVudGF0aW9ucy4gKi9cblx0ZnVuY3Rpb24gQ2h1bmtTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHR0aGlzLl9oYW5kbGUgPSBudWxsO1xuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG5cdFx0dGhpcy5faW5wdXQgPSBudWxsO1xuXHRcdHRoaXMuX2Jhc2VJbmRleCA9IDA7XG5cdFx0dGhpcy5fcGFydGlhbExpbmUgPSBcIlwiO1xuXHRcdHRoaXMuX3Jvd0NvdW50ID0gMDtcblx0XHR0aGlzLl9zdGFydCA9IDA7XG5cdFx0dGhpcy5fbmV4dENodW5rID0gbnVsbDtcblx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IHRydWU7XG5cdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzID0ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXHRcdHJlcGxhY2VDb25maWcuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dGhpcy5wYXJzZUNodW5rID0gZnVuY3Rpb24oY2h1bmspXG5cdFx0e1xuXHRcdFx0Ly8gRmlyc3QgY2h1bmsgcHJlLXByb2Nlc3Npbmdcblx0XHRcdGlmICh0aGlzLmlzRmlyc3RDaHVuayAmJiBpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1vZGlmaWVkQ2h1bmsgPSB0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuayhjaHVuayk7XG5cdFx0XHRcdGlmIChtb2RpZmllZENodW5rICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdFx0Y2h1bmsgPSBtb2RpZmllZENodW5rO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc0ZpcnN0Q2h1bmsgPSBmYWxzZTtcblxuXHRcdFx0Ly8gUmVqb2luIHRoZSBsaW5lIHdlIGxpa2VseSBqdXN0IHNwbGl0IGluIHR3byBieSBjaHVua2luZyB0aGUgZmlsZVxuXHRcdFx0dmFyIGFnZ3JlZ2F0ZSA9IHRoaXMuX3BhcnRpYWxMaW5lICsgY2h1bms7XG5cdFx0XHR0aGlzLl9wYXJ0aWFsTGluZSA9IFwiXCI7XG5cblx0XHRcdHZhciByZXN1bHRzID0gdGhpcy5faGFuZGxlLnBhcnNlKGFnZ3JlZ2F0ZSwgdGhpcy5fYmFzZUluZGV4LCAhdGhpcy5fZmluaXNoZWQpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5faGFuZGxlLnBhdXNlZCgpIHx8IHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdFxuXHRcdFx0dmFyIGxhc3RJbmRleCA9IHJlc3VsdHMubWV0YS5jdXJzb3I7XG5cdFx0XHRcblx0XHRcdGlmICghdGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gYWdncmVnYXRlLnN1YnN0cmluZyhsYXN0SW5kZXggLSB0aGlzLl9iYXNlSW5kZXgpO1xuXHRcdFx0XHR0aGlzLl9iYXNlSW5kZXggPSBsYXN0SW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXN1bHRzICYmIHJlc3VsdHMuZGF0YSlcblx0XHRcdFx0dGhpcy5fcm93Q291bnQgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblxuXHRcdFx0dmFyIGZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyA9IHRoaXMuX2ZpbmlzaGVkIHx8ICh0aGlzLl9jb25maWcucHJldmlldyAmJiB0aGlzLl9yb3dDb3VudCA+PSB0aGlzLl9jb25maWcucHJldmlldyk7XG5cblx0XHRcdGlmIChJU19QQVBBX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRmaW5pc2hlZDogZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jb25maWcuY2h1bmsocmVzdWx0cywgdGhpcy5faGFuZGxlKTtcblx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdHJlc3VsdHMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9jb25maWcuc3RlcCAmJiAhdGhpcy5fY29uZmlnLmNodW5rKSB7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhID0gdGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KHJlc3VsdHMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChyZXN1bHRzLmVycm9ycyk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhID0gcmVzdWx0cy5tZXRhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbXBsZXRlKSAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5hYm9ydGVkKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cyk7XG5cblx0XHRcdGlmICghZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5tZXRhLnBhdXNlZCkpXG5cdFx0XHRcdHRoaXMuX25leHRDaHVuaygpO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdFx0dGhpcy5fc2VuZEVycm9yID0gZnVuY3Rpb24oZXJyb3IpXG5cdFx0e1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmVycm9yKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmVycm9yKGVycm9yKTtcblx0XHRcdGVsc2UgaWYgKElTX1BBUEFfV09SS0VSICYmIHRoaXMuX2NvbmZpZy5lcnJvcilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdFx0ZXJyb3I6IGVycm9yLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcmVwbGFjZUNvbmZpZyhjb25maWcpXG5cdFx0e1xuXHRcdFx0Ly8gRGVlcC1jb3B5IHRoZSBjb25maWcgc28gd2UgY2FuIGVkaXQgaXRcblx0XHRcdHZhciBjb25maWdDb3B5ID0gY29weShjb25maWcpO1xuXHRcdFx0Y29uZmlnQ29weS5jaHVua1NpemUgPSBwYXJzZUludChjb25maWdDb3B5LmNodW5rU2l6ZSk7XHQvLyBwYXJzZUludCBWRVJZIGltcG9ydGFudCBzbyB3ZSBkb24ndCBjb25jYXRlbmF0ZSBzdHJpbmdzIVxuXHRcdFx0aWYgKCFjb25maWcuc3RlcCAmJiAhY29uZmlnLmNodW5rKVxuXHRcdFx0XHRjb25maWdDb3B5LmNodW5rU2l6ZSA9IG51bGw7ICAvLyBkaXNhYmxlIFJhbmdlIGhlYWRlciBpZiBub3Qgc3RyZWFtaW5nOyBiYWQgdmFsdWVzIGJyZWFrIElJUyAtIHNlZSBpc3N1ZSAjMTk2XG5cdFx0XHR0aGlzLl9oYW5kbGUgPSBuZXcgUGFyc2VySGFuZGxlKGNvbmZpZ0NvcHkpO1xuXHRcdFx0dGhpcy5faGFuZGxlLnN0cmVhbWVyID0gdGhpcztcblx0XHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZ0NvcHk7XHQvLyBwZXJzaXN0IHRoZSBjb3B5IHRvIHRoZSBjYWxsZXJcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIE5ldHdvcmtTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0aWYgKCFjb25maWcuY2h1bmtTaXplKVxuXHRcdFx0Y29uZmlnLmNodW5rU2l6ZSA9IFBhcGEuUmVtb3RlQ2h1bmtTaXplO1xuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHhocjtcblxuXHRcdGlmIChJU19XT1JLRVIpXG5cdFx0e1xuXHRcdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKHVybClcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IHVybDtcblx0XHRcdHRoaXMuX25leHRDaHVuaygpO1x0Ly8gU3RhcnRzIHN0cmVhbWluZ1xuXHRcdH07XG5cblx0XHR0aGlzLl9yZWFkQ2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jaHVua0xvYWRlZCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0XG5cdFx0XHRpZiAoIUlTX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHhoci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbihcIkdFVFwiLCB0aGlzLl9pbnB1dCwgIUlTX1dPUktFUik7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gdGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplIC0gMTtcdC8vIG1pbnVzIG9uZSBiZWNhdXNlIGJ5dGUgcmFuZ2UgaXMgaW5jbHVzaXZlXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiUmFuZ2VcIiwgXCJieXRlcz1cIit0aGlzLl9zdGFydCtcIi1cIitlbmQpO1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIiwgXCJ3ZWJraXQtbm8tY2FjaGVcIik7IC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MjY3MlxuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR4aHIuc2VuZCgpO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0XHR0aGlzLl9jaHVua0Vycm9yKGVyci5tZXNzYWdlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKElTX1dPUktFUiAmJiB4aHIuc3RhdHVzID09IDApXG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5fc3RhcnQgKz0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDQwMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXRoaXMuX2NvbmZpZy5jaHVua1NpemUgfHwgdGhpcy5fc3RhcnQgPiBnZXRGaWxlU2l6ZSh4aHIpO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpXG5cdFx0e1xuXHRcdFx0dmFyIGVycm9yVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8IGVycm9yTWVzc2FnZTtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihlcnJvclRleHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEZpbGVTaXplKHhocilcblx0XHR7XG5cdFx0XHR2YXIgY29udGVudFJhbmdlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtcblx0XHRcdHJldHVybiBwYXJzZUludChjb250ZW50UmFuZ2Uuc3Vic3RyKGNvbnRlbnRSYW5nZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxKSk7XG5cdFx0fVxuXHR9XG5cdE5ldHdvcmtTdHJlYW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENodW5rU3RyZWFtZXIucHJvdG90eXBlKTtcblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5ldHdvcmtTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIEZpbGVTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0aWYgKCFjb25maWcuY2h1bmtTaXplKVxuXHRcdFx0Y29uZmlnLmNodW5rU2l6ZSA9IFBhcGEuTG9jYWxDaHVua1NpemU7XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgcmVhZGVyLCBzbGljZTtcblxuXHRcdC8vIEZpbGVSZWFkZXIgaXMgYmV0dGVyIHRoYW4gRmlsZVJlYWRlclN5bmMgKGV2ZW4gaW4gd29ya2VyKSAtIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yNDcwODY0OS8xMDQ4ODYyXG5cdFx0Ly8gQnV0IEZpcmVmb3ggaXMgYSBwaWxsLCB0b28gLSBzZWUgaXNzdWUgIzc2OiBodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlL2lzc3Vlcy83NlxuXHRcdHZhciB1c2luZ0FzeW5jUmVhZGVyID0gdHlwZW9mIEZpbGVSZWFkZXIgIT09ICd1bmRlZmluZWQnO1x0Ly8gU2FmYXJpIGRvZXNuJ3QgY29uc2lkZXIgaXQgYSBmdW5jdGlvbiAtIHNlZSBpc3N1ZSAjMTA1XG5cblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKGZpbGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSBmaWxlO1xuXHRcdFx0c2xpY2UgPSBmaWxlLnNsaWNlIHx8IGZpbGUud2Via2l0U2xpY2UgfHwgZmlsZS5tb3pTbGljZTtcblxuXHRcdFx0aWYgKHVzaW5nQXN5bmNSZWFkZXIpXG5cdFx0XHR7XG5cdFx0XHRcdHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHRcdC8vIFByZWZlcnJlZCBtZXRob2Qgb2YgcmVhZGluZyBmaWxlcywgZXZlbiBpbiB3b3JrZXJzXG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtMb2FkZWQsIHRoaXMpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0Vycm9yLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXJTeW5jKCk7XHQvLyBIYWNrIGZvciBydW5uaW5nIGluIGEgd2ViIHdvcmtlciBpbiBGaXJlZm94XG5cblx0XHRcdHRoaXMuX25leHRDaHVuaygpO1x0Ly8gU3RhcnRzIHN0cmVhbWluZ1xuXHRcdH07XG5cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKCF0aGlzLl9maW5pc2hlZCAmJiAoIXRoaXMuX2NvbmZpZy5wcmV2aWV3IHx8IHRoaXMuX3Jvd0NvdW50IDwgdGhpcy5fY29uZmlnLnByZXZpZXcpKVxuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9yZWFkQ2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dmFyIGlucHV0ID0gdGhpcy5faW5wdXQ7XG5cdFx0XHRpZiAodGhpcy5fY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIGVuZCA9IE1hdGgubWluKHRoaXMuX3N0YXJ0ICsgdGhpcy5fY29uZmlnLmNodW5rU2l6ZSwgdGhpcy5faW5wdXQuc2l6ZSk7XG5cdFx0XHRcdGlucHV0ID0gc2xpY2UuY2FsbChpbnB1dCwgdGhpcy5fc3RhcnQsIGVuZCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdHh0ID0gcmVhZGVyLnJlYWRBc1RleHQoaW5wdXQsIHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7XG5cdFx0XHRpZiAoIXVzaW5nQXN5bmNSZWFkZXIpXG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKHsgdGFyZ2V0OiB7IHJlc3VsdDogdHh0IH0gfSk7XHQvLyBtaW1pYyB0aGUgYXN5bmMgc2lnbmF0dXJlXG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtMb2FkZWQgPSBmdW5jdGlvbihldmVudClcblx0XHR7XG5cdFx0XHQvLyBWZXJ5IGltcG9ydGFudCB0byBpbmNyZW1lbnQgc3RhcnQgZWFjaCB0aW1lIGJlZm9yZSBoYW5kbGluZyByZXN1bHRzXG5cdFx0XHR0aGlzLl9zdGFydCArPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhdGhpcy5fY29uZmlnLmNodW5rU2l6ZSB8fCB0aGlzLl9zdGFydCA+PSB0aGlzLl9pbnB1dC5zaXplO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc2VuZEVycm9yKHJlYWRlci5lcnJvcik7XG5cdFx0fVxuXG5cdH1cblx0RmlsZVN0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsZVN0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gU3RyaW5nU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHN0cmluZztcblx0XHR2YXIgcmVtYWluaW5nO1xuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24ocylcblx0XHR7XG5cdFx0XHRzdHJpbmcgPSBzO1xuXHRcdFx0cmVtYWluaW5nID0gcztcblx0XHRcdHJldHVybiB0aGlzLl9uZXh0Q2h1bmsoKTtcblx0XHR9XG5cdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9maW5pc2hlZCkgcmV0dXJuO1xuXHRcdFx0dmFyIHNpemUgPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdFx0dmFyIGNodW5rID0gc2l6ZSA/IHJlbWFpbmluZy5zdWJzdHIoMCwgc2l6ZSkgOiByZW1haW5pbmc7XG5cdFx0XHRyZW1haW5pbmcgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cihzaXplKSA6ICcnO1xuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhcmVtYWluaW5nO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VDaHVuayhjaHVuayk7XG5cdFx0fVxuXHR9XG5cdFN0cmluZ1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RyaW5nU3RyZWFtZXIucHJvdG90eXBlKTtcblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nU3RyZWFtZXI7XG5cblxuXG5cdC8vIFVzZSBvbmUgUGFyc2VySGFuZGxlIHBlciBlbnRpcmUgQ1NWIGZpbGUgb3Igc3RyaW5nXG5cdGZ1bmN0aW9uIFBhcnNlckhhbmRsZShfY29uZmlnKVxuXHR7XG5cdFx0Ly8gT25lIGdvYWwgaXMgdG8gbWluaW1pemUgdGhlIHVzZSBvZiByZWd1bGFyIGV4cHJlc3Npb25zLi4uXG5cdFx0dmFyIEZMT0FUID0gL15cXHMqLT8oXFxkKlxcLj9cXGQrfFxcZCtcXC4/XFxkKikoZVstK10/XFxkKyk/XFxzKiQvaTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgX3N0ZXBDb3VudGVyID0gMDtcdC8vIE51bWJlciBvZiB0aW1lcyBzdGVwIHdhcyBjYWxsZWQgKG51bWJlciBvZiByb3dzIHBhcnNlZClcblx0XHR2YXIgX2lucHV0O1x0XHRcdFx0Ly8gVGhlIGlucHV0IGJlaW5nIHBhcnNlZFxuXHRcdHZhciBfcGFyc2VyO1x0XHRcdC8vIFRoZSBjb3JlIHBhcnNlciBiZWluZyB1c2VkXG5cdFx0dmFyIF9wYXVzZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgd2UgYXJlIHBhdXNlZCBvciBub3Rcblx0XHR2YXIgX2Fib3J0ZWQgPSBmYWxzZTsgICAvLyBXaGV0aGVyIHRoZSBwYXJzZXIgaGFzIGFib3J0ZWQgb3Igbm90XG5cdFx0dmFyIF9kZWxpbWl0ZXJFcnJvcjtcdC8vIFRlbXBvcmFyeSBzdGF0ZSBiZXR3ZWVuIGRlbGltaXRlciBkZXRlY3Rpb24gYW5kIHByb2Nlc3NpbmcgcmVzdWx0c1xuXHRcdHZhciBfZmllbGRzID0gW107XHRcdC8vIEZpZWxkcyBhcmUgZnJvbSB0aGUgaGVhZGVyIHJvdyBvZiB0aGUgaW5wdXQsIGlmIHRoZXJlIGlzIG9uZVxuXHRcdHZhciBfcmVzdWx0cyA9IHtcdFx0Ly8gVGhlIGxhc3QgcmVzdWx0cyByZXR1cm5lZCBmcm9tIHRoZSBwYXJzZXJcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0ZXJyb3JzOiBbXSxcblx0XHRcdG1ldGE6IHt9XG5cdFx0fTtcblxuXHRcdGlmIChpc0Z1bmN0aW9uKF9jb25maWcuc3RlcCkpXG5cdFx0e1xuXHRcdFx0dmFyIHVzZXJTdGVwID0gX2NvbmZpZy5zdGVwO1xuXHRcdFx0X2NvbmZpZy5zdGVwID0gZnVuY3Rpb24ocmVzdWx0cylcblx0XHRcdHtcblx0XHRcdFx0X3Jlc3VsdHMgPSByZXN1bHRzO1xuXG5cdFx0XHRcdGlmIChuZWVkc0hlYWRlclJvdygpKVxuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cdFx0XHRcdGVsc2VcdC8vIG9ubHkgY2FsbCB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhZnRlciBoZWFkZXIgcm93XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9jZXNzUmVzdWx0cygpO1xuXG5cdFx0XHRcdFx0Ly8gSXQncyBwb3NzYmlsZSB0aGF0IHRoaXMgbGluZSB3YXMgZW1wdHkgYW5kIHRoZXJlJ3Mgbm8gcm93IGhlcmUgYWZ0ZXIgYWxsXG5cdFx0XHRcdFx0aWYgKF9yZXN1bHRzLmRhdGEubGVuZ3RoID09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRfc3RlcENvdW50ZXIgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9zdGVwQ291bnRlciA+IF9jb25maWcucHJldmlldylcblx0XHRcdFx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR1c2VyU3RlcChfcmVzdWx0cywgc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUGFyc2VzIGlucHV0LiBNb3N0IHVzZXJzIHdvbid0IG5lZWQsIGFuZCBzaG91bGRuJ3QgbWVzcyB3aXRoLCB0aGUgYmFzZUluZGV4XG5cdFx0ICogYW5kIGlnbm9yZUxhc3RSb3cgcGFyYW1ldGVycy4gVGhleSBhcmUgdXNlZCBieSBzdHJlYW1lcnMgKHdyYXBwZXIgZnVuY3Rpb25zKVxuXHRcdCAqIHdoZW4gYW4gaW5wdXQgY29tZXMgaW4gbXVsdGlwbGUgY2h1bmtzLCBsaWtlIGZyb20gYSBmaWxlLlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KVxuXHRcdHtcblx0XHRcdGlmICghX2NvbmZpZy5uZXdsaW5lKVxuXHRcdFx0XHRfY29uZmlnLm5ld2xpbmUgPSBndWVzc0xpbmVFbmRpbmdzKGlucHV0KTtcblxuXHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHRpZiAoIV9jb25maWcuZGVsaW1pdGVyKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW1HdWVzcyA9IGd1ZXNzRGVsaW1pdGVyKGlucHV0KTtcblx0XHRcdFx0aWYgKGRlbGltR3Vlc3Muc3VjY2Vzc2Z1bClcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IGRlbGltR3Vlc3MuYmVzdERlbGltaXRlcjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2RlbGltaXRlckVycm9yID0gdHJ1ZTtcdC8vIGFkZCBlcnJvciBhZnRlciBwYXJzaW5nIChvdGhlcndpc2UgaXQgd291bGQgYmUgb3ZlcndyaXR0ZW4pXG5cdFx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBQYXBhLkRlZmF1bHREZWxpbWl0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3Jlc3VsdHMubWV0YS5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHBhcnNlckNvbmZpZyA9IGNvcHkoX2NvbmZpZyk7XG5cdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHRwYXJzZXJDb25maWcucHJldmlldysrO1x0Ly8gdG8gY29tcGVuc2F0ZSBmb3IgaGVhZGVyIHJvd1xuXG5cdFx0XHRfaW5wdXQgPSBpbnB1dDtcblx0XHRcdF9wYXJzZXIgPSBuZXcgUGFyc2VyKHBhcnNlckNvbmZpZyk7XG5cdFx0XHRfcmVzdWx0cyA9IF9wYXJzZXIucGFyc2UoX2lucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpO1xuXHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdHJldHVybiBfcGF1c2VkID8geyBtZXRhOiB7IHBhdXNlZDogdHJ1ZSB9IH0gOiAoX3Jlc3VsdHMgfHwgeyBtZXRhOiB7IHBhdXNlZDogZmFsc2UgfSB9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYXVzZWQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9wYXVzZWQ7XG5cdFx0fTtcblxuXHRcdHRoaXMucGF1c2UgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X3BhdXNlZCA9IHRydWU7XG5cdFx0XHRfcGFyc2VyLmFib3J0KCk7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuc3Vic3RyKF9wYXJzZXIuZ2V0Q2hhckluZGV4KCkpO1xuXHRcdH07XG5cblx0XHR0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfcGF1c2VkID0gZmFsc2U7XG5cdFx0XHRzZWxmLnN0cmVhbWVyLnBhcnNlQ2h1bmsoX2lucHV0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5hYm9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9hYm9ydGVkO1xuXHRcdH1cblxuXHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X2Fib3J0ZWQgPSB0cnVlO1xuXHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0X3Jlc3VsdHMubWV0YS5hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKF9jb25maWcuY29tcGxldGUpKVxuXHRcdFx0XHRfY29uZmlnLmNvbXBsZXRlKF9yZXN1bHRzKTtcblx0XHRcdF9pbnB1dCA9IFwiXCI7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHRzKClcblx0XHR7XG5cdFx0XHRpZiAoX3Jlc3VsdHMgJiYgX2RlbGltaXRlckVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHRhZGRFcnJvcihcIkRlbGltaXRlclwiLCBcIlVuZGV0ZWN0YWJsZURlbGltaXRlclwiLCBcIlVuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvICdcIitQYXBhLkRlZmF1bHREZWxpbWl0ZXIrXCInXCIpO1xuXHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKF9jb25maWcuc2tpcEVtcHR5TGluZXMpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX3Jlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGggPT0gMSAmJiBfcmVzdWx0cy5kYXRhW2ldWzBdID09IFwiXCIpXG5cdFx0XHRcdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmVlZHNIZWFkZXJSb3coKSlcblx0XHRcdFx0ZmlsbEhlYWRlckZpZWxkcygpO1xuXG5cdFx0XHRyZXR1cm4gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbmVlZHNIZWFkZXJSb3coKVxuXHRcdHtcblx0XHRcdHJldHVybiBfY29uZmlnLmhlYWRlciAmJiBfZmllbGRzLmxlbmd0aCA9PSAwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbGxIZWFkZXJGaWVsZHMoKVxuXHRcdHtcblx0XHRcdGlmICghX3Jlc3VsdHMpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBuZWVkc0hlYWRlclJvdygpICYmIGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0X2ZpZWxkcy5wdXNoKF9yZXN1bHRzLmRhdGFbaV1bal0pO1xuXHRcdFx0X3Jlc3VsdHMuZGF0YS5zcGxpY2UoMCwgMSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKClcblx0XHR7XG5cdFx0XHRpZiAoIV9yZXN1bHRzIHx8ICghX2NvbmZpZy5oZWFkZXIgJiYgIV9jb25maWcuZHluYW1pY1R5cGluZykpXG5cdFx0XHRcdHJldHVybiBfcmVzdWx0cztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93ID0ge307XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBfcmVzdWx0cy5kYXRhW2ldLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKF9jb25maWcuZHluYW1pY1R5cGluZylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgdmFsdWUgPSBfcmVzdWx0cy5kYXRhW2ldW2pdO1xuXHRcdFx0XHRcdFx0aWYgKHZhbHVlID09IFwidHJ1ZVwiIHx8IHZhbHVlID09IFwiVFJVRVwiKVxuXHRcdFx0XHRcdFx0XHRfcmVzdWx0cy5kYXRhW2ldW2pdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGVsc2UgaWYgKHZhbHVlID09IFwiZmFsc2VcIiB8fCB2YWx1ZSA9PSBcIkZBTFNFXCIpXG5cdFx0XHRcdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV1bal0gPSBmYWxzZTtcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YVtpXVtqXSA9IHRyeVBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAoaiA+PSBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWYgKCFyb3dbXCJfX3BhcnNlZF9leHRyYVwiXSlcblx0XHRcdFx0XHRcdFx0XHRyb3dbXCJfX3BhcnNlZF9leHRyYVwiXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRyb3dbXCJfX3BhcnNlZF9leHRyYVwiXS5wdXNoKF9yZXN1bHRzLmRhdGFbaV1bal0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRyb3dbX2ZpZWxkc1tqXV0gPSBfcmVzdWx0cy5kYXRhW2ldW2pdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV0gPSByb3c7XG5cdFx0XHRcdFx0aWYgKGogPiBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKFwiRmllbGRNaXNtYXRjaFwiLCBcIlRvb01hbnlGaWVsZHNcIiwgXCJUb28gbWFueSBmaWVsZHM6IGV4cGVjdGVkIFwiICsgX2ZpZWxkcy5sZW5ndGggKyBcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIiArIGosIGkpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGogPCBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKFwiRmllbGRNaXNtYXRjaFwiLCBcIlRvb0Zld0ZpZWxkc1wiLCBcIlRvbyBmZXcgZmllbGRzOiBleHBlY3RlZCBcIiArIF9maWVsZHMubGVuZ3RoICsgXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIgKyBqLCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2NvbmZpZy5oZWFkZXIgJiYgX3Jlc3VsdHMubWV0YSlcblx0XHRcdFx0X3Jlc3VsdHMubWV0YS5maWVsZHMgPSBfZmllbGRzO1xuXHRcdFx0cmV0dXJuIF9yZXN1bHRzO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGd1ZXNzRGVsaW1pdGVyKGlucHV0KVxuXHRcdHtcblx0XHRcdHZhciBkZWxpbUNob2ljZXMgPSBbXCIsXCIsIFwiXFx0XCIsIFwifFwiLCBcIjtcIiwgUGFwYS5SRUNPUkRfU0VQLCBQYXBhLlVOSVRfU0VQXTtcblx0XHRcdHZhciBiZXN0RGVsaW0sIGJlc3REZWx0YSwgZmllbGRDb3VudFByZXZSb3c7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVsaW1DaG9pY2VzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW0gPSBkZWxpbUNob2ljZXNbaV07XG5cdFx0XHRcdHZhciBkZWx0YSA9IDAsIGF2Z0ZpZWxkQ291bnQgPSAwO1xuXHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHR2YXIgcHJldmlldyA9IG5ldyBQYXJzZXIoe1xuXHRcdFx0XHRcdGRlbGltaXRlcjogZGVsaW0sXG5cdFx0XHRcdFx0cHJldmlldzogMTBcblx0XHRcdFx0fSkucGFyc2UoaW5wdXQpO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcHJldmlldy5kYXRhLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIGZpZWxkQ291bnQgPSBwcmV2aWV3LmRhdGFbal0ubGVuZ3RoO1xuXHRcdFx0XHRcdGF2Z0ZpZWxkQ291bnQgKz0gZmllbGRDb3VudDtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZmllbGRDb3VudFByZXZSb3cgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gZmllbGRDb3VudDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChmaWVsZENvdW50ID4gMSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkZWx0YSArPSBNYXRoLmFicyhmaWVsZENvdW50IC0gZmllbGRDb3VudFByZXZSb3cpO1xuXHRcdFx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSBmaWVsZENvdW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2aWV3LmRhdGEubGVuZ3RoID4gMClcblx0XHRcdFx0XHRhdmdGaWVsZENvdW50IC89IHByZXZpZXcuZGF0YS5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKCh0eXBlb2YgYmVzdERlbHRhID09PSAndW5kZWZpbmVkJyB8fCBkZWx0YSA8IGJlc3REZWx0YSlcblx0XHRcdFx0XHQmJiBhdmdGaWVsZENvdW50ID4gMS45OSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJlc3REZWx0YSA9IGRlbHRhO1xuXHRcdFx0XHRcdGJlc3REZWxpbSA9IGRlbGltO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gYmVzdERlbGltO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzZnVsOiAhIWJlc3REZWxpbSxcblx0XHRcdFx0YmVzdERlbGltaXRlcjogYmVzdERlbGltXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NMaW5lRW5kaW5ncyhpbnB1dClcblx0XHR7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnN1YnN0cigwLCAxMDI0KjEwMjQpO1x0Ly8gbWF4IGxlbmd0aCAxIE1CXG5cblx0XHRcdHZhciByID0gaW5wdXQuc3BsaXQoJ1xccicpO1xuXG5cdFx0XHRpZiAoci5sZW5ndGggPT0gMSlcblx0XHRcdFx0cmV0dXJuICdcXG4nO1xuXG5cdFx0XHR2YXIgbnVtV2l0aE4gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAocltpXVswXSA9PSAnXFxuJylcblx0XHRcdFx0XHRudW1XaXRoTisrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVtV2l0aE4gPj0gci5sZW5ndGggLyAyID8gJ1xcclxcbicgOiAnXFxyJztcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cnlQYXJzZUZsb2F0KHZhbClcblx0XHR7XG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBGTE9BVC50ZXN0KHZhbCk7XG5cdFx0XHRyZXR1cm4gaXNOdW1iZXIgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkRXJyb3IodHlwZSwgY29kZSwgbXNnLCByb3cpXG5cdFx0e1xuXHRcdFx0X3Jlc3VsdHMuZXJyb3JzLnB1c2goe1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRjb2RlOiBjb2RlLFxuXHRcdFx0XHRtZXNzYWdlOiBtc2csXG5cdFx0XHRcdHJvdzogcm93XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cblxuXG5cdC8qKiBUaGUgY29yZSBwYXJzZXIgaW1wbGVtZW50cyBzcGVlZHkgYW5kIGNvcnJlY3QgQ1NWIHBhcnNpbmcgKi9cblx0ZnVuY3Rpb24gUGFyc2VyKGNvbmZpZylcblx0e1xuXHRcdC8vIFVucGFjayB0aGUgY29uZmlnIG9iamVjdFxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHR2YXIgZGVsaW0gPSBjb25maWcuZGVsaW1pdGVyO1xuXHRcdHZhciBuZXdsaW5lID0gY29uZmlnLm5ld2xpbmU7XG5cdFx0dmFyIGNvbW1lbnRzID0gY29uZmlnLmNvbW1lbnRzO1xuXHRcdHZhciBzdGVwID0gY29uZmlnLnN0ZXA7XG5cdFx0dmFyIHByZXZpZXcgPSBjb25maWcucHJldmlldztcblx0XHR2YXIgZmFzdE1vZGUgPSBjb25maWcuZmFzdE1vZGU7XG5cblx0XHQvLyBEZWxpbWl0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmICh0eXBlb2YgZGVsaW0gIT09ICdzdHJpbmcnXG5cdFx0XHR8fCBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoZGVsaW0pID4gLTEpXG5cdFx0XHRkZWxpbSA9IFwiLFwiO1xuXG5cdFx0Ly8gQ29tbWVudCBjaGFyYWN0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmIChjb21tZW50cyA9PT0gZGVsaW0pXG5cdFx0XHR0aHJvdyBcIkNvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyXCI7XG5cdFx0ZWxzZSBpZiAoY29tbWVudHMgPT09IHRydWUpXG5cdFx0XHRjb21tZW50cyA9IFwiI1wiO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBjb21tZW50cyAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihjb21tZW50cykgPiAtMSlcblx0XHRcdGNvbW1lbnRzID0gZmFsc2U7XG5cblx0XHQvLyBOZXdsaW5lIG11c3QgYmUgdmFsaWQ6IFxcciwgXFxuLCBvciBcXHJcXG5cblx0XHRpZiAobmV3bGluZSAhPSAnXFxuJyAmJiBuZXdsaW5lICE9ICdcXHInICYmIG5ld2xpbmUgIT0gJ1xcclxcbicpXG5cdFx0XHRuZXdsaW5lID0gJ1xcbic7XG5cblx0XHQvLyBXZSdyZSBnb25uYSBuZWVkIHRoZXNlIGF0IHRoZSBQYXJzZXIgc2NvcGVcblx0XHR2YXIgY3Vyc29yID0gMDtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0Ly8gRm9yIHNvbWUgcmVhc29uLCBpbiBDaHJvbWUsIHRoaXMgc3BlZWRzIHRoaW5ncyB1cCAoIT8pXG5cdFx0XHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJylcblx0XHRcdFx0dGhyb3cgXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCI7XG5cblx0XHRcdC8vIFdlIGRvbid0IG5lZWQgdG8gY29tcHV0ZSBzb21lIG9mIHRoZXNlIGV2ZXJ5IHRpbWUgcGFyc2UoKSBpcyBjYWxsZWQsXG5cdFx0XHQvLyBidXQgaGF2aW5nIHRoZW0gaW4gYSBtb3JlIGxvY2FsIHNjb3BlIHNlZW1zIHRvIHBlcmZvcm0gYmV0dGVyXG5cdFx0XHR2YXIgaW5wdXRMZW4gPSBpbnB1dC5sZW5ndGgsXG5cdFx0XHRcdGRlbGltTGVuID0gZGVsaW0ubGVuZ3RoLFxuXHRcdFx0XHRuZXdsaW5lTGVuID0gbmV3bGluZS5sZW5ndGgsXG5cdFx0XHRcdGNvbW1lbnRzTGVuID0gY29tbWVudHMubGVuZ3RoO1xuXHRcdFx0dmFyIHN0ZXBJc0Z1bmN0aW9uID0gdHlwZW9mIHN0ZXAgPT09ICdmdW5jdGlvbic7XG5cblx0XHRcdC8vIEVzdGFibGlzaCBzdGFydGluZyBzdGF0ZVxuXHRcdFx0Y3Vyc29yID0gMDtcblx0XHRcdHZhciBkYXRhID0gW10sIGVycm9ycyA9IFtdLCByb3cgPSBbXSwgbGFzdEN1cnNvciA9IDA7XG5cblx0XHRcdGlmICghaW5wdXQpXG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cblx0XHRcdGlmIChmYXN0TW9kZSB8fCAoZmFzdE1vZGUgIT09IGZhbHNlICYmIGlucHV0LmluZGV4T2YoJ1wiJykgPT09IC0xKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJvd3MgPSBpbnB1dC5zcGxpdChuZXdsaW5lKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJvdyA9IHJvd3NbaV07XG5cdFx0XHRcdFx0Y3Vyc29yICs9IHJvdy5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKGkgIT09IHJvd3MubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRcdGN1cnNvciArPSBuZXdsaW5lLmxlbmd0aDtcblx0XHRcdFx0XHRlbHNlIGlmIChpZ25vcmVMYXN0Um93KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93LnN1YnN0cigwLCBjb21tZW50c0xlbikgPT0gY29tbWVudHMpXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IFtdO1xuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHB1c2hSb3cocm93LnNwbGl0KGRlbGltKSk7XG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgaSA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIHByZXZpZXcpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0dmFyIG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXG5cdFx0XHQvLyBQYXJzZXIgbG9vcFxuXHRcdFx0Zm9yICg7Oylcblx0XHRcdHtcblx0XHRcdFx0Ly8gRmllbGQgaGFzIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0aWYgKGlucHV0W2N1cnNvcl0gPT0gJ1wiJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIFN0YXJ0IG91ciBzZWFyY2ggZm9yIHRoZSBjbG9zaW5nIHF1b3RlIHdoZXJlIHRoZSBjdXJzb3IgaXNcblx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBjdXJzb3I7XG5cblx0XHRcdFx0XHQvLyBTa2lwIHRoZSBvcGVuaW5nIHF1b3RlXG5cdFx0XHRcdFx0Y3Vyc29yKys7XG5cblx0XHRcdFx0XHRmb3IgKDs7KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgY2xvc2luZyBxdW90ZVxuXHRcdFx0XHRcdFx0dmFyIHF1b3RlU2VhcmNoID0gaW5wdXQuaW5kZXhPZignXCInLCBxdW90ZVNlYXJjaCsxKTtcblxuXHRcdFx0XHRcdFx0aWYgKHF1b3RlU2VhcmNoID09PSAtMSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWYgKCFpZ25vcmVMYXN0Um93KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gTm8gY2xvc2luZyBxdW90ZS4uLiB3aGF0IGEgcGl0eVxuXHRcdFx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiUXVvdGVzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2RlOiBcIk1pc3NpbmdRdW90ZXNcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IFwiUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm93OiBkYXRhLmxlbmd0aCxcdC8vIHJvdyBoYXMgeWV0IHRvIGJlIGluc2VydGVkXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleDogY3Vyc29yXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZpbmlzaCgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IGlucHV0TGVuLTEpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgYXQgRU9GXG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKC9cIlwiL2csICdcIicpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhpcyBxdW90ZSBpcyBlc2NhcGVkLCBpdCdzIHBhcnQgb2YgdGhlIGRhdGE7IHNraXAgaXRcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PSAnXCInKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRxdW90ZVNlYXJjaCsrO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGlucHV0W3F1b3RlU2VhcmNoKzFdID09IGRlbGltKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQvLyBDbG9zaW5nIHF1b3RlIGZvbGxvd2VkIGJ5IGRlbGltaXRlclxuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZSgvXCJcIi9nLCAnXCInKSk7XG5cdFx0XHRcdFx0XHRcdGN1cnNvciA9IHF1b3RlU2VhcmNoICsgMSArIGRlbGltTGVuO1xuXHRcdFx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChpbnB1dC5zdWJzdHIocXVvdGVTZWFyY2grMSwgbmV3bGluZUxlbikgPT09IG5ld2xpbmUpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgZm9sbG93ZWQgYnkgbmV3bGluZVxuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZSgvXCJcIi9nLCAnXCInKSk7XG5cdFx0XHRcdFx0XHRcdHNhdmVSb3cocXVvdGVTZWFyY2ggKyAxICsgbmV3bGluZUxlbik7XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XHQvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHNraXBwZWQgdGhlIG5leHREZWxpbSBpbiB0aGUgcXVvdGVkIGZpZWxkXG5cblx0XHRcdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBkYXRhLmxlbmd0aCA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29tbWVudCBmb3VuZCBhdCBzdGFydCBvZiBuZXcgbGluZVxuXHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93Lmxlbmd0aCA9PT0gMCAmJiBpbnB1dC5zdWJzdHIoY3Vyc29yLCBjb21tZW50c0xlbikgPT09IGNvbW1lbnRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKG5leHROZXdsaW5lID09IC0xKVx0Ly8gQ29tbWVudCBlbmRzIGF0IEVPRlxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHRjdXJzb3IgPSBuZXh0TmV3bGluZSArIG5ld2xpbmVMZW47XG5cdFx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5leHQgZGVsaW1pdGVyIGNvbWVzIGJlZm9yZSBuZXh0IG5ld2xpbmUsIHNvIHdlJ3ZlIHJlYWNoZWQgZW5kIG9mIGZpZWxkXG5cdFx0XHRcdGlmIChuZXh0RGVsaW0gIT09IC0xICYmIChuZXh0RGVsaW0gPCBuZXh0TmV3bGluZSB8fCBuZXh0TmV3bGluZSA9PT0gLTEpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgbmV4dERlbGltKSk7XG5cdFx0XHRcdFx0Y3Vyc29yID0gbmV4dERlbGltICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEVuZCBvZiByb3dcblx0XHRcdFx0aWYgKG5leHROZXdsaW5lICE9PSAtMSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIG5leHROZXdsaW5lKSk7XG5cdFx0XHRcdFx0c2F2ZVJvdyhuZXh0TmV3bGluZSArIG5ld2xpbmVMZW4pO1xuXG5cdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgZGF0YS5sZW5ndGggPj0gcHJldmlldylcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKHRydWUpO1xuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXG5cdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cblxuXHRcdFx0ZnVuY3Rpb24gcHVzaFJvdyhyb3cpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEucHVzaChyb3cpO1xuXHRcdFx0XHRsYXN0Q3Vyc29yID0gY3Vyc29yO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFwcGVuZHMgdGhlIHJlbWFpbmluZyBpbnB1dCBmcm9tIGN1cnNvciB0byB0aGUgZW5kIGludG9cblx0XHRcdCAqIHJvdywgc2F2ZXMgdGhlIHJvdywgY2FsbHMgc3RlcCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdHMuXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIGZpbmlzaCh2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0dmFsdWUgPSBpbnB1dC5zdWJzdHIoY3Vyc29yKTtcblx0XHRcdFx0cm93LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjdXJzb3IgPSBpbnB1dExlbjtcdC8vIGltcG9ydGFudCBpbiBjYXNlIHBhcnNpbmcgaXMgcGF1c2VkXG5cdFx0XHRcdHB1c2hSb3cocm93KTtcblx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFwcGVuZHMgdGhlIGN1cnJlbnQgcm93IHRvIHRoZSByZXN1bHRzLiBJdCBzZXRzIHRoZSBjdXJzb3Jcblx0XHRcdCAqIHRvIG5ld0N1cnNvciBhbmQgZmluZHMgdGhlIG5leHROZXdsaW5lLiBUaGUgY2FsbGVyIHNob3VsZFxuXHRcdFx0ICogdGFrZSBjYXJlIHRvIGV4ZWN1dGUgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYW5kIGNoZWNrIGZvclxuXHRcdFx0ICogcHJldmlldyBhbmQgZW5kIHBhcnNpbmcgaWYgbmVjZXNzYXJ5LlxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBzYXZlUm93KG5ld0N1cnNvcilcblx0XHRcdHtcblx0XHRcdFx0Y3Vyc29yID0gbmV3Q3Vyc29yO1xuXHRcdFx0XHRwdXNoUm93KHJvdyk7XG5cdFx0XHRcdHJvdyA9IFtdO1xuXHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHJlc3VsdHMsIGVycm9ycywgYW5kIG1ldGEuICovXG5cdFx0XHRmdW5jdGlvbiByZXR1cm5hYmxlKHN0b3BwZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0XHRlcnJvcnM6IGVycm9ycyxcblx0XHRcdFx0XHRtZXRhOiB7XG5cdFx0XHRcdFx0XHRkZWxpbWl0ZXI6IGRlbGltLFxuXHRcdFx0XHRcdFx0bGluZWJyZWFrOiBuZXdsaW5lLFxuXHRcdFx0XHRcdFx0YWJvcnRlZDogYWJvcnRlZCxcblx0XHRcdFx0XHRcdHRydW5jYXRlZDogISFzdG9wcGVkLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBsYXN0Q3Vyc29yICsgKGJhc2VJbmRleCB8fCAwKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0LyoqIEV4ZWN1dGVzIHRoZSB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhbmQgcmVzZXRzIGRhdGEgJiBlcnJvcnMuICovXG5cdFx0XHRmdW5jdGlvbiBkb1N0ZXAoKVxuXHRcdFx0e1xuXHRcdFx0XHRzdGVwKHJldHVybmFibGUoKSk7XG5cdFx0XHRcdGRhdGEgPSBbXSwgZXJyb3JzID0gW107XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKiBTZXRzIHRoZSBhYm9ydCBmbGFnICovXG5cdFx0dGhpcy5hYm9ydCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRhYm9ydGVkID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0LyoqIEdldHMgdGhlIGN1cnNvciBwb3NpdGlvbiAqL1xuXHRcdHRoaXMuZ2V0Q2hhckluZGV4ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHJldHVybiBjdXJzb3I7XG5cdFx0fTtcblx0fVxuXG5cblx0Ly8gSWYgeW91IG5lZWQgdG8gbG9hZCBQYXBhIFBhcnNlIGFzeW5jaHJvbm91c2x5IGFuZCB5b3UgYWxzbyBuZWVkIHdvcmtlciB0aHJlYWRzLCBoYXJkLWNvZGVcblx0Ly8gdGhlIHNjcmlwdCBwYXRoIGhlcmUuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZS9pc3N1ZXMvODcjaXNzdWVjb21tZW50LTU3ODg1MzU4XG5cdGZ1bmN0aW9uIGdldFNjcmlwdFBhdGgoKVxuXHR7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0cmV0dXJuIHNjcmlwdHMubGVuZ3RoID8gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyYyA6ICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gbmV3V29ya2VyKClcblx0e1xuXHRcdGlmICghUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRpZiAoIUxPQURFRF9TWU5DICYmIFBhcGEuU0NSSVBUX1BBVEggPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdTY3JpcHQgcGF0aCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBhdXRvbWF0aWNhbGx5IHdoZW4gUGFwYSBQYXJzZSBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkuICcgK1xuXHRcdFx0XHQnWW91IG5lZWQgdG8gc2V0IFBhcGEuU0NSSVBUX1BBVEggbWFudWFsbHkuJ1xuXHRcdFx0KTtcblx0XHR2YXIgd29ya2VyVXJsID0gUGFwYS5TQ1JJUFRfUEFUSCB8fCBBVVRPX1NDUklQVF9QQVRIO1xuXHRcdC8vIEFwcGVuZCBcInBhcGF3b3JrZXJcIiB0byB0aGUgc2VhcmNoIHN0cmluZyB0byB0ZWxsIHBhcGFwYXJzZSB0aGF0IHRoaXMgaXMgb3VyIHdvcmtlci5cblx0XHR3b3JrZXJVcmwgKz0gKHdvcmtlclVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nKSArICdwYXBhd29ya2VyJztcblx0XHR2YXIgdyA9IG5ldyBnbG9iYWwuV29ya2VyKHdvcmtlclVybCk7XG5cdFx0dy5vbm1lc3NhZ2UgPSBtYWluVGhyZWFkUmVjZWl2ZWRNZXNzYWdlO1xuXHRcdHcuaWQgPSB3b3JrZXJJZENvdW50ZXIrKztcblx0XHR3b3JrZXJzW3cuaWRdID0gdztcblx0XHRyZXR1cm4gdztcblx0fVxuXG5cdC8qKiBDYWxsYmFjayB3aGVuIG1haW4gdGhyZWFkIHJlY2VpdmVzIGEgbWVzc2FnZSAqL1xuXHRmdW5jdGlvbiBtYWluVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXHRcdHZhciB3b3JrZXIgPSB3b3JrZXJzW21zZy53b3JrZXJJZF07XG5cdFx0dmFyIGFib3J0ZWQgPSBmYWxzZTtcblxuXHRcdGlmIChtc2cuZXJyb3IpXG5cdFx0XHR3b3JrZXIudXNlckVycm9yKG1zZy5lcnJvciwgbXNnLmZpbGUpO1xuXHRcdGVsc2UgaWYgKG1zZy5yZXN1bHRzICYmIG1zZy5yZXN1bHRzLmRhdGEpXG5cdFx0e1xuXHRcdFx0dmFyIGFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIHsgZGF0YTogW10sIGVycm9yczogW10sIG1ldGE6IHsgYWJvcnRlZDogdHJ1ZSB9IH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGhhbmRsZSA9IHtcblx0XHRcdFx0YWJvcnQ6IGFib3J0LFxuXHRcdFx0XHRwYXVzZTogbm90SW1wbGVtZW50ZWQsXG5cdFx0XHRcdHJlc3VtZTogbm90SW1wbGVtZW50ZWRcblx0XHRcdH07XG5cblx0XHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyU3RlcCkpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLnJlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHdvcmtlci51c2VyU3RlcCh7XG5cdFx0XHRcdFx0XHRkYXRhOiBbbXNnLnJlc3VsdHMuZGF0YVtpXV0sXG5cdFx0XHRcdFx0XHRlcnJvcnM6IG1zZy5yZXN1bHRzLmVycm9ycyxcblx0XHRcdFx0XHRcdG1ldGE6IG1zZy5yZXN1bHRzLm1ldGFcblx0XHRcdFx0XHR9LCBoYW5kbGUpO1xuXHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1x0Ly8gZnJlZSBtZW1vcnkgQVNBUFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih3b3JrZXIudXNlckNodW5rKSlcblx0XHRcdHtcblx0XHRcdFx0d29ya2VyLnVzZXJDaHVuayhtc2cucmVzdWx0cywgaGFuZGxlLCBtc2cuZmlsZSk7XG5cdFx0XHRcdGRlbGV0ZSBtc2cucmVzdWx0cztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobXNnLmZpbmlzaGVkICYmICFhYm9ydGVkKVxuXHRcdFx0Y29tcGxldGVXb3JrZXIobXNnLndvcmtlcklkLCBtc2cucmVzdWx0cyk7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21wbGV0ZVdvcmtlcih3b3JrZXJJZCwgcmVzdWx0cykge1xuXHRcdHZhciB3b3JrZXIgPSB3b3JrZXJzW3dvcmtlcklkXTtcblx0XHRpZiAoaXNGdW5jdGlvbih3b3JrZXIudXNlckNvbXBsZXRlKSlcblx0XHRcdHdvcmtlci51c2VyQ29tcGxldGUocmVzdWx0cyk7XG5cdFx0d29ya2VyLnRlcm1pbmF0ZSgpO1xuXHRcdGRlbGV0ZSB3b3JrZXJzW3dvcmtlcklkXTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKCkge1xuXHRcdHRocm93IFwiTm90IGltcGxlbWVudGVkLlwiO1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gd29ya2VyIHRocmVhZCByZWNlaXZlcyBhIG1lc3NhZ2UgKi9cblx0ZnVuY3Rpb24gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXG5cdFx0aWYgKHR5cGVvZiBQYXBhLldPUktFUl9JRCA9PT0gJ3VuZGVmaW5lZCcgJiYgbXNnKVxuXHRcdFx0UGFwYS5XT1JLRVJfSUQgPSBtc2cud29ya2VySWQ7XG5cblx0XHRpZiAodHlwZW9mIG1zZy5pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRyZXN1bHRzOiBQYXBhLnBhcnNlKG1zZy5pbnB1dCwgbXNnLmNvbmZpZyksXG5cdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIG1zZy5pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IG1zZy5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIHRoYW5rIHlvdSwgU2FmYXJpIChzZWUgaXNzdWUgIzEwNilcblx0XHR7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKTtcblx0XHRcdGlmIChyZXN1bHRzKVxuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBNYWtlcyBhIGRlZXAgY29weSBvZiBhbiBhcnJheSBvciBvYmplY3QgKG1vc3RseSkgKi9cblx0ZnVuY3Rpb24gY29weShvYmopXG5cdHtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdHZhciBjcHkgPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG5cdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdGNweVtrZXldID0gY29weShvYmpba2V5XSk7XG5cdFx0cmV0dXJuIGNweTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRGdW5jdGlvbihmLCBzZWxmKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBmLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpXG5cdHtcblx0XHRyZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG5cdH1cbn0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGFwYXBhcnNlL3BhcGFwYXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JFYWNoID0gKHhzLCBhY2MpID0+IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoeHMsIGFjYyk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwID0gKHhzLCBhY2MpID0+IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh4cywgYWNjKTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gKHhzKSA9PiBbXS5zbGljZS5jYWxsKHhzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxlRXh0ZW5zaW9uID0gZmlsZSA9PiBcclxuICAoZmlsZS5uYW1lIHx8IGZpbGUpLnNwbGl0KCcuJykucmV2ZXJzZSgpWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzLmpzIiwiXHJcbmltcG9ydCB7IHRvQXJyYXksIGdldEZpbGVFeHRlbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldElkID0gZmlsZXMgPT4ge1xyXG4gIGNvbnN0IHNvcnRlZCA9IHRvQXJyYXkoZmlsZXMpLnNvcnQoKGEsIGIpID0+IFxyXG4gICAgZ2V0RmlsZUV4dGVuc2lvbihhKS5sb2NhbGVDb21wYXJlKGdldEZpbGVFeHRlbnNpb24oYikpXHJcbiAgKTtcclxuICByZXR1cm4gc29ydGVkLm1hcChmaWxlID0+IGZpbGUubmFtZSkuam9pbignX18nKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlID0gKGlkLCBkYXRhKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkID0gaWQgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=