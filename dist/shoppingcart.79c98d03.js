// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kJsgt":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "fde16c2979c98d03";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8pjRH":[function(require,module,exports) {
var _activateHamburgerMenu = require("./functions/activateHamburgerMenu");
var _displayCart = require("./functions/displayCart");
var _wishListDisplays = require("./functions/wishListDisplays");
window.onload = ()=>{
    //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
    _activateHamburgerMenu.activateHamburgerMenu();
    // Funktionen visar vad du har lagt i varukorgen
    _displayCart.displayCart();
    //Skapar eventlisteners för att öppna/stänga wishlist
    _wishListDisplays.wishList();
    //Uppdaterar wishlist innehållet
    _wishListDisplays.refreshWishList();
};

},{"./functions/activateHamburgerMenu":"4wXe7","./functions/displayCart":"aPKpZ","./functions/wishListDisplays":"6rkmj"}],"4wXe7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activateHamburgerMenu", ()=>activateHamburgerMenu
);
function activateHamburgerMenu() {
    document.getElementById("hamburger-icon").addEventListener("click", ()=>{
        document.getElementById("hamburger").style.display = "block";
    });
    document.getElementById("close").addEventListener("click", ()=>{
        document.getElementById("hamburger").style.display = "none";
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aPKpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayCart", ()=>displayCart
);
var _removeModal = require("../functions/removeModal");
function displayCart() {
    let ul = document.getElementById("ul");
    let totalSum = 0;
    ul.innerHTML = "";
    // create/get cartList from localstorage
    if (!localStorage.getItem("cartList")) localStorage.setItem("cartList", "[]");
    if (localStorage.getItem("cartList").length == 2) {
        let wrapper = document.getElementById("wrapper");
        let noListSpan = document.createElement("span");
        noListSpan.className = "no-list-span";
        noListSpan.innerHTML = "Det finns inga produkter i varukorgen";
        let x = document.getElementById("total-container");
        wrapper.insertBefore(noListSpan, x);
    } else {
        let productCartList = localStorage.getItem("cartList");
        let productCartListObj = JSON.parse(productCartList);
        for(let i = 0; i < productCartListObj.length; i++){
            //#region declarations
            let li = document.createElement("li");
            let product = document.createElement("div");
            let productBoxLeft = document.createElement("div");
            let imgBox = document.createElement("div");
            let productImg = document.createElement("img");
            let productFact = document.createElement("div");
            let productName = document.createElement("h4");
            let productPrice = document.createElement("p");
            let productBoxRight = document.createElement("div");
            let sizeBox = document.createElement("div");
            let sizeSpan = document.createElement("span");
            let quantityBox = document.createElement("div");
            let reduceButton = document.createElement("div");
            let increaseButton = document.createElement("div");
            let quantityInput = document.createElement("input");
            let flexBoxRight = document.createElement("div");
            let removeButton = document.createElement("p");
            //#endregion
            // ID and classnames
            li.className = "li-shopping-cart";
            product.className = "product-shopping-cart";
            productBoxLeft.className = "product-box-left";
            imgBox.className = "imgBox";
            productImg.className = "productImg";
            productFact.className = "product-fact-shop-cart";
            productName.className = "product-name";
            sizeBox.className = "size-box";
            productPrice.className = "product-price";
            productBoxRight.className = "product-box-right";
            reduceButton.className = "reduce-button";
            increaseButton.className = "increase-button";
            quantityBox.className = "quantity-box";
            sizeSpan.className = "size-span";
            flexBoxRight.className = "flex-box-right";
            removeButton.className = "remove-button-shop-cart";
            quantityInput.className = "quantity-input";
            // innerHTML, value, src
            productImg.src = productCartListObj[i].Iproduct.url;
            productName.innerHTML = productCartListObj[i].Iproduct.name;
            quantityInput.value = productCartListObj[i].amount.toString();
            quantityInput.setAttribute("readonly", "true");
            reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
            increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
            removeButton.innerHTML = "<i class='fas fa-trash-alt'></i> Ta bort";
            sizeSpan.innerHTML = "Storlek: " + productCartListObj[i].size;
            // Display right size and price on product
            if (productCartListObj[i].size == "s") {
                productPrice.innerHTML = `Pris: ${productCartListObj[i].Iproduct.price.s * productCartListObj[i].amount}kr (${productCartListObj[i].Iproduct.price.s}kr x ${productCartListObj[i].amount})`;
                totalSum += productCartListObj[i].Iproduct.price.s * productCartListObj[i].amount;
            } else if (productCartListObj[i].size == "m") {
                productPrice.innerHTML = `Pris: ${productCartListObj[i].Iproduct.price.m * productCartListObj[i].amount}kr (${productCartListObj[i].Iproduct.price.m}kr x ${productCartListObj[i].amount}) `;
                totalSum += productCartListObj[i].Iproduct.price.m * productCartListObj[i].amount;
            } else {
                productPrice.innerHTML = `Pris: ${productCartListObj[i].Iproduct.price.l * productCartListObj[i].amount}kr (${productCartListObj[i].Iproduct.price.l}kr x ${productCartListObj[i].amount})`;
                totalSum += productCartListObj[i].Iproduct.price.l * productCartListObj[i].amount;
            }
            // appendChild
            ul.appendChild(li);
            li.appendChild(product);
            product.appendChild(productBoxLeft);
            productBoxLeft.appendChild(imgBox);
            imgBox.appendChild(productImg);
            productBoxRight.appendChild(productFact);
            productFact.appendChild(productName);
            productFact.appendChild(productPrice);
            product.appendChild(productBoxRight);
            productBoxRight.appendChild(quantityBox);
            quantityBox.appendChild(reduceButton);
            quantityBox.appendChild(quantityInput);
            quantityBox.appendChild(increaseButton);
            sizeBox.appendChild(sizeSpan);
            flexBoxRight.appendChild(sizeBox);
            flexBoxRight.appendChild(quantityBox);
            flexBoxRight.appendChild(removeButton);
            productBoxRight.appendChild(flexBoxRight);
            // increase quantity button
            increaseButton.addEventListener("click", ()=>{
                let currentValue = parseInt(quantityInput.value);
                if (currentValue < 15) currentValue++;
                quantityInput.value = currentValue.toString();
                productCartListObj[i].amount = currentValue;
                let productTostring = JSON.stringify(productCartListObj);
                localStorage.setItem("cartList", productTostring);
                displayCart();
            });
            // reduce quantity
            reduceButton.addEventListener("click", ()=>{
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) currentValue--;
                quantityInput.value = currentValue.toString();
                productCartListObj[i].amount = currentValue;
                let productTostring = JSON.stringify(productCartListObj);
                localStorage.setItem("cartList", productTostring);
                displayCart();
            });
            let title = productCartListObj[i].Iproduct.name;
            let image = productCartListObj[i].Iproduct.url;
            // call the removeModal function
            removeButton.addEventListener("click", ()=>{
                _removeModal.removeModal(image, title, i, productCartListObj);
            });
        }
    }
    // Totalsum
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = "Totalt: " + totalSum + " kr";
}

},{"../functions/removeModal":"dHMrp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dHMrp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeModal", ()=>removeModal
);
var _displayCart = require("./displayCart");
var _dispayCheckout = require("./dispayCheckout");
function removeModal(image, title, i, list) {
    //#region Declarations to "remove" modal
    let removeModalContainer = document.getElementById("container-modal");
    let productImage = document.getElementById("correctProduct");
    let buttonContainer = document.getElementById("modal-button-container");
    let productTitle = document.getElementById("product-title");
    let cancelButton = document.createElement("button");
    let confirmButton = document.createElement("button");
    //#endregion
    //Opens Modal
    removeModalContainer.className = "show-container-modal";
    cancelButton.className = "cancel-button";
    confirmButton.className = "confirm-button";
    cancelButton.innerHTML = "Avbryt";
    confirmButton.innerHTML = "Bekräfta";
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    let corretImage = image;
    let correctTitle = title;
    productImage.src = corretImage;
    productTitle.innerHTML = correctTitle;
    //confirm button - remove item from localstorage
    confirmButton.addEventListener("click", ()=>{
        list.splice(i, 1);
        buttonContainer.innerHTML = "";
        let productTostring = JSON.stringify(list);
        localStorage.setItem("cartList", productTostring);
        // run this function from shoppingcart page
        if (document.URL.includes("shoppingcart.html")) _displayCart.displayCart();
        else if (document.URL.includes("checkout.html")) _dispayCheckout.displayCheckout();
        removeModalContainer.className = "";
    });
    //Close the Modal
    cancelButton.addEventListener("click", ()=>{
        removeModalContainer.className = "";
        buttonContainer.innerHTML = "";
    });
}

},{"./displayCart":"aPKpZ","./dispayCheckout":"8PScy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8PScy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayCheckout", ()=>displayCheckout
);
parcelHelpers.export(exports, "cantConfirmOrder", ()=>cantConfirmOrder
);
var _removeModal = require("../functions/removeModal");
function displayCheckout() {
    let ul = document.getElementById("ul");
    let totalSum = 0;
    ul.innerHTML = "";
    if (!localStorage.getItem("cartList")) localStorage.setItem("cartList", "[]");
    if (localStorage.getItem("cartList").length == 2) {
        let wrapper = document.getElementById("shopping-container");
        let noListSpan = document.createElement("span");
        noListSpan.className = "no-list-span-checkout";
        noListSpan.innerHTML = "Det finns inga produkter i varukorgen";
        let x = document.getElementById("total-price");
        wrapper.insertBefore(noListSpan, x);
    } else {
        let productCartList = localStorage.getItem("cartList");
        let productCartListObject = JSON.parse(productCartList);
        for(let i = 0; i < productCartListObject.length; i++){
            let li = document.createElement("li");
            let productContainer = document.createElement("div");
            let productContainerLeft = document.createElement("div");
            let imageContainer = document.createElement("div");
            let productImage = document.createElement("img");
            let productFactContainer = document.createElement("div");
            let productTitle = document.createElement("h4");
            let productSize = document.createElement("p");
            let productPrice = document.createElement("p");
            let productContainerRight = document.createElement("div");
            let quantityBox = document.createElement("div");
            let quantityInput = document.createElement("input");
            let reduceButton = document.createElement("div");
            let increaseButton = document.createElement("div");
            let removeButton = document.createElement("p");
            // let factContainer: HTMLDivElement = document.createElement("div");
            let flexContainer = document.createElement("div");
            // ID and classnames
            li.className = "li-checkout";
            productContainer.className = "product-checkout";
            productContainerLeft.className = "product-box-left-checkout";
            imageContainer.className = "img-container-checkout";
            productImage.className = "product-image-checkout";
            productFactContainer.className = "product-fact-container";
            productTitle.className = "product-name-checkout";
            productSize.className = "product-size-checkout";
            productPrice.className = "product-price-checkout";
            productContainerRight.className = "product-box-right";
            quantityBox.className = "quantity-box-checkout";
            quantityInput.className = "quantity-input-checkout";
            reduceButton.className = "reduce-button-checkout";
            increaseButton.className = "increase-button-checkout";
            removeButton.className = "remove-button-checkout";
            flexContainer.className = "flex-container-checkout";
            // factContainer.className = "fact-container-checkout";
            //innerHTML , value, src
            reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
            increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
            removeButton.innerHTML = "<i class='fas fa-trash-alt'></i> Ta bort";
            productTitle.innerHTML = productCartListObject[i].Iproduct.name;
            quantityInput.value = productCartListObject[i].amount.toString();
            quantityInput.setAttribute("readonly", "true");
            productImage.src = productCartListObject[i].Iproduct.url;
            productSize.innerHTML = "Storlek: " + productCartListObject[i].size;
            // Rätt pris och storlek på produkten
            if (productCartListObject[i].size == "s") {
                productPrice.innerHTML = `Pris: ${productCartListObject[i].Iproduct.price.s * productCartListObject[i].amount}kr (${productCartListObject[i].Iproduct.price.s}kr x ${productCartListObject[i].amount})`;
                totalSum += productCartListObject[i].Iproduct.price.s * productCartListObject[i].amount;
            } else if (productCartListObject[i].size == "m") {
                productPrice.innerHTML = `Pris: ${productCartListObject[i].Iproduct.price.m * productCartListObject[i].amount}kr (${productCartListObject[i].Iproduct.price.m}kr x ${productCartListObject[i].amount}) `;
                totalSum += productCartListObject[i].Iproduct.price.m * productCartListObject[i].amount;
            } else {
                productPrice.innerHTML = `Pris: ${productCartListObject[i].Iproduct.price.l * productCartListObject[i].amount}kr (${productCartListObject[i].Iproduct.price.l}kr x ${productCartListObject[i].amount})`;
                totalSum += productCartListObject[i].Iproduct.price.l * productCartListObject[i].amount;
            }
            // Minska och öka antal
            increaseButton.addEventListener("click", ()=>{
                let currentValue = parseInt(quantityInput.value);
                if (currentValue < 15) currentValue++;
                quantityInput.value = currentValue.toString();
                productCartListObject[i].amount = currentValue;
                let productTostring = JSON.stringify(productCartListObject);
                localStorage.setItem("cartList", productTostring);
                displayCheckout();
            });
            reduceButton.addEventListener("click", ()=>{
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) currentValue--;
                quantityInput.value = currentValue.toString();
                productCartListObject[i].amount = currentValue;
                let productTostring = JSON.stringify(productCartListObject);
                localStorage.setItem("cartList", productTostring);
                displayCheckout();
            });
            //appendChild
            ul.appendChild(li);
            li.appendChild(productContainer);
            productContainer.appendChild(productContainerLeft);
            productContainer.appendChild(productFactContainer);
            productContainer.appendChild(productContainerRight);
            productContainerLeft.appendChild(imageContainer);
            imageContainer.appendChild(productImage);
            productContainerRight.appendChild(productFactContainer);
            productContainerRight.appendChild(flexContainer);
            productFactContainer.appendChild(productTitle);
            productFactContainer.appendChild(productPrice);
            flexContainer.appendChild(productSize);
            flexContainer.appendChild(quantityBox);
            flexContainer.appendChild(removeButton);
            quantityBox.appendChild(reduceButton);
            quantityBox.appendChild(quantityInput);
            quantityBox.appendChild(increaseButton);
            let title = productCartListObject[i].Iproduct.name;
            let image = productCartListObject[i].Iproduct.url;
            // call the removeModal function
            removeButton.addEventListener("click", ()=>{
                _removeModal.removeModal(image, title, i, productCartListObject);
            });
        }
    }
    // Totalsum
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = "Totalt: " + totalSum + " kr";
}
function cantConfirmOrder() {
    let submitButton = document.getElementById("submit-button");
    if (localStorage.getItem("cartList").length == 2) submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("Du har inga varor i varukorgen");
    });
}

},{"../functions/removeModal":"dHMrp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6rkmj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wishList", ()=>wishList
);
parcelHelpers.export(exports, "refreshWishList", ()=>refreshWishList
);
parcelHelpers.export(exports, "removeFromWishlist", ()=>removeFromWishlist
);
var _products = require("../models/products");
var _productsDisplay = require("./productsDisplay");
function wishList() {
    //Toggles the window and changes the icon. One mobile and one desktop
    //#region Declarations
    const wishListSwitch = document.getElementById("toggleWishlist");
    const wishListDropDown = document.querySelector(".wishlistDropDown");
    const mobileDropdown = document.querySelector(".wishlistDropDownMobile");
    const toggleIcon = document.getElementById("toggleWishlist");
    const mobileSwitch = document.getElementById("mobileToggleWishlist");
    let emptyHeart = true;
    //#endregion
    wishListSwitch.addEventListener("click", (e)=>{
        wishListDropDown.classList.toggle("showDropDown");
        if (emptyHeart === true) {
            toggleIcon.className = "fas fa-heart";
            emptyHeart = false;
        } else {
            toggleIcon.className = "far fa-heart";
            emptyHeart = true;
        }
    });
    mobileSwitch.addEventListener("click", (e)=>{
        mobileDropdown.classList.toggle("showDropDown");
        if (emptyHeart === true) {
            mobileSwitch.className = "fas fa-heart";
            emptyHeart = false;
        } else {
            mobileSwitch.className = "far fa-heart";
            emptyHeart = true;
        }
    });
}
function refreshWishList() {
    if (!localStorage.getItem("wishList")) localStorage.setItem("wishList", JSON.stringify(_products.products));
    //Displays all products from the LocalStorage that have .wishlist set to true
    //#region Declarations
    const desktopBody = document.getElementsByClassName("wishlistBody");
    const localStorageWishlist = JSON.parse(localStorage.getItem("wishList"));
    const h3 = document.createElement("h3");
    const h3x2 = document.createElement("h3");
    //#endregion
    desktopBody[0].innerHTML = "";
    desktopBody[1].innerHTML = "";
    h3.innerHTML = "Wishlist";
    h3x2.innerHTML = "Wishlist";
    desktopBody[0].appendChild(h3);
    desktopBody[1].appendChild(h3x2);
    let trueCount = 0;
    localStorageWishlist.forEach((item, index)=>{
        if (item.wishList === true) {
            trueCount++;
            const image = document.createElement("div");
            const heartContainer = document.createElement("div");
            const heart = document.createElement("i");
            image.className = "wishlistImageContainer";
            image.style.backgroundImage = `url(${item.url})`;
            heartContainer.className = "wishlistHeartContainer";
            heart.className = "fas fa-heart fa-2x";
            desktopBody[0].appendChild(image);
            image.appendChild(heartContainer);
            heartContainer.appendChild(heart);
            image.addEventListener("click", (e)=>{
                removeFromWishlist(desktopBody, index);
            });
        }
    });
    localStorageWishlist.forEach((item, index)=>{
        if (item.wishList === true) {
            const image = document.createElement("div");
            const heartContainer = document.createElement("div");
            const heart = document.createElement("i");
            image.className = "wishlistImageContainer";
            image.style.backgroundImage = `url(${item.url})`;
            heartContainer.className = "wishlistHeartContainer";
            heart.className = "fas fa-heart fa-2x";
            desktopBody[1].appendChild(image);
            image.appendChild(heartContainer);
            heartContainer.appendChild(heart);
            image.addEventListener("click", (e)=>{
                removeFromWishlist(desktopBody, index);
            });
        }
    });
    if (trueCount == 0) {
        const h5 = document.createElement("h5");
        h5.id = "h5";
        h5.innerHTML = "Du har tyvärr inga produkter i din önskelista!";
        desktopBody[0].appendChild(h5);
        const h5x2 = document.createElement("h5");
        h5x2.id = "h5x2";
        h5x2.innerHTML = "Du har tyvärr inga produkter i din önskelista!";
        desktopBody[1].appendChild(h5x2);
    }
    trueCount = 0;
}
function removeFromWishlist(desktopBody, index) {
    desktopBody[0].innerHTML = "";
    desktopBody[1].innerHTML = "";
    let localStorageArray = JSON.parse(localStorage.getItem("wishList"));
    localStorageArray[index].wishList = false;
    localStorage.setItem("wishList", JSON.stringify(localStorageArray));
    refreshWishList();
    _productsDisplay.createProducts();
}

},{"../models/products":"acInb","./productsDisplay":"52hqZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"acInb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products
);
parcelHelpers.export(exports, "StorageProduct", ()=>StorageProduct
);
let products = [
    {
        name: "Merge Conflicts",
        url: "https://i.ibb.co/1fKFDcB/image.jpg",
        wishList: false,
        price: {
            s: 10,
            m: 20,
            l: 30
        }
    },
    {
        name: "Parcel Error",
        url: "https://i.ibb.co/TBv3gf8/1.jpg",
        wishList: false,
        price: {
            s: 20,
            m: 33,
            l: 100
        }
    },
    {
        name: "Supportive Teammate",
        url: "https://i.ibb.co/B4BfBWD/2.jpg",
        wishList: false,
        price: {
            s: 13,
            m: 27,
            l: 45
        }
    },
    {
        name: "Undefined",
        url: "https://i.ibb.co/pWVBqmn/3.jpg",
        wishList: false,
        price: {
            s: 8,
            m: 30,
            l: 45
        }
    },
    {
        name: "Typescript",
        url: "https://i.ibb.co/vzgHDBr/4.jpg",
        wishList: false,
        price: {
            s: 15,
            m: 35,
            l: 60
        }
    },
    {
        name: "Skipped Feature-Branch",
        url: "https://i.ibb.co/fxJVc9v/5.jpg",
        wishList: false,
        price: {
            s: 100,
            m: 200,
            l: 300
        }
    },
    {
        name: "Type: any",
        url: "https://i.ibb.co/cJ1pLF5/4pexels-anna-shvets-4588027.jpg",
        wishList: false,
        price: {
            s: 19,
            m: 37,
            l: 45
        }
    },
    {
        name: "Structured Code",
        url: "https://i.ibb.co/WF264XK/7.jpg",
        wishList: false,
        price: {
            s: 23,
            m: 54,
            l: 76
        }
    },
    {
        name: "Cannot Read Properties Of Null",
        url: "https://i.ibb.co/KNp2fFh/2pexels-anna-shvets-4588455.jpg",
        wishList: false,
        price: {
            s: 9,
            m: 21,
            l: 32
        }
    },
    {
        name: ".splice(i,1)",
        url: "https://i.ibb.co/nfrLgqF/1pexels-anna-shvets-4588441.jpg",
        wishList: false,
        price: {
            s: 105,
            m: 267,
            l: 303
        }
    },
    {
        name: "Scrum Master",
        url: "https://i.ibb.co/6tLQKsB/10.jpg",
        wishList: false,
        price: {
            s: 12,
            m: 27,
            l: 33
        }
    },
    {
        name: "Passed A Cypress Test",
        url: "https://i.ibb.co/SvBnLFR/3pexels-anna-shvets-4580745.jpg",
        wishList: false,
        price: {
            s: 4,
            m: 16,
            l: 20
        }
    }, 
];
class StorageProduct {
    constructor(Iproduct, size, amount){
        this.Iproduct = Iproduct;
        this.size = size;
        this.amount = amount;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"52hqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProducts", ()=>createProducts
);
var _products = require("../models/products");
var _addToWishlist = require("./addToWishlist");
var _productModalDisplay = require("./productModalDisplay");
function createProducts() {
    const mainProducts = document.getElementById("mainProducts");
    mainProducts.innerHTML = "";
    _products.products.forEach((e1, index)=>{
        let productsDiv = document.createElement("div");
        let imgWrapperDiv = document.createElement("div");
        let heartDiv = document.createElement("div");
        let newImg = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        //Determines if the product is in the wishList or not.
        if (!localStorage.getItem("wishList")) localStorage.setItem("wishList", JSON.stringify(_products.products));
        else {
            let wishList = localStorage.getItem("wishList");
            let wishListObj = JSON.parse(wishList);
            if (wishListObj[index].wishList == true) heartDiv.className = "heartContainer filledHeart";
            if (wishListObj[index].wishList == false) heartDiv.className = "heartContainer emptyHeart";
        }
        //Creates all of the products by iterating the array of products.
        productsDiv.className = "product";
        imgWrapperDiv.className = "imgWrapper";
        newImg.src = e1.url;
        newImg.id = `${index}`;
        heartDiv.id = `${index}`;
        p1.innerHTML = e1.name;
        p1.id = "productTitle";
        p2.innerHTML = `Fr. ${e1.price.s}kr`;
        mainProducts.appendChild(productsDiv);
        productsDiv.appendChild(imgWrapperDiv);
        productsDiv.appendChild(heartDiv);
        imgWrapperDiv.appendChild(newImg);
        productsDiv.appendChild(p1);
        productsDiv.appendChild(p2);
        //Takes the ID of the clicked product and calls a function that displays a modal with the product which index equals the retrieved ID.
        imgWrapperDiv.addEventListener("click", (e)=>{
            let newE = e.target;
            let id = parseInt(newE.id);
            _productModalDisplay.displayProductModals(id);
        });
        heartDiv.addEventListener("click", ()=>{
            _addToWishlist.addToWishlist(e1, index);
        });
    });
}

},{"../models/products":"acInb","./addToWishlist":"9ejoJ","./productModalDisplay":"9Z6QU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9ejoJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToWishlist", ()=>addToWishlist
);
var _productsDisplay = require("../functions/productsDisplay");
var _wishListDisplays = require("./wishListDisplays");
function addToWishlist(e, index) {
    let wishListFromStorage = localStorage.getItem("wishList");
    let wishListAsObject = JSON.parse(wishListFromStorage);
    let collectionOfHeartDivs = document.getElementsByClassName("heartContainer");
    let arrayOfHeartDivs = Array.from(collectionOfHeartDivs);
    wishListAsObject.forEach((wishListItem)=>{
        if (wishListItem.name == e.name) wishListItem.wishList = !wishListItem.wishList;
    });
    let toStorage = JSON.stringify(wishListAsObject);
    localStorage.setItem("wishList", toStorage);
    _productsDisplay.createProducts();
    _wishListDisplays.refreshWishList();
}

},{"../functions/productsDisplay":"52hqZ","./wishListDisplays":"6rkmj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Z6QU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayProductModals", ()=>displayProductModals
);
var _products = require("../models/products");
function displayProductModals(Id) {
    //#region Declarations
    let modalContainer = document.getElementById("modalContainer");
    let modalImg = document.getElementById("modalImg");
    let modalTitle = document.getElementById("modalTitle");
    let modalTotalPrice = document.getElementById("modalTotal");
    let sizeInput = document.getElementById("productModalSize");
    let amountInput = document.getElementById("productModalAmount");
    let closeProductsModal = document.getElementById("closeProductsModal");
    //#endregion
    //Opens the Modal
    modalContainer.className = "showProductModal";
    //Produces the modal product based on which product was clicked on the website.
    modalImg.src = _products.products[Id].url;
    modalTitle.innerText = _products.products[Id].name;
    modalTotalPrice.innerText = `Totalbelopp: ${_products.products[Id].price.s}kr`;
    //Calculates and updates the totalprice based on product size and amount of products.
    let totalprice;
    sizeInput.addEventListener("input", (e)=>{
        if (!amountInput.value) return;
        if (sizeInput.value == "s") totalprice = parseInt(amountInput.value) * _products.products[Id].price.s;
        if (sizeInput.value == "m") totalprice = parseInt(amountInput.value) * _products.products[Id].price.m;
        if (sizeInput.value == "l") totalprice = parseInt(amountInput.value) * _products.products[Id].price.l;
        modalTotalPrice.innerText = `Totalbelopp: ${totalprice}kr`;
    });
    amountInput.addEventListener("input", (e)=>{
        if (!amountInput.value) return;
        if (sizeInput.value == "s") totalprice = parseInt(amountInput.value) * _products.products[Id].price.s;
        if (sizeInput.value == "m") totalprice = parseInt(amountInput.value) * _products.products[Id].price.m;
        if (sizeInput.value == "l") totalprice = parseInt(amountInput.value) * _products.products[Id].price.l;
        modalTotalPrice.innerText = `Totalbelopp: ${totalprice}kr`;
    });
    //Closes the Modal
    closeProductsModal.addEventListener("click", (e)=>{
        modalContainer.className = "";
    });
}

},{"../models/products":"acInb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kJsgt","8pjRH"], "8pjRH", "parcelRequire5db4")

//# sourceMappingURL=shoppingcart.79c98d03.js.map
