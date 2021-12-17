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
})({"3yY3J":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "83ff65fc1c21167c";
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

},{}],"7swJW":[function(require,module,exports) {
var _activateHamburgerMenu = require("./functions/activateHamburgerMenu");
var _randomQuotes = require("./functions/randomQuotes");
var _wishListDisplays = require("./functions/wishListDisplays");
var _createProductsCheckout = require("./functions/createProductsCheckout");
window.onload = function() {
    //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
    _activateHamburgerMenu.activateHamburgerMenu();
    //Slumpar fram citat om våra produkter, som står på index-sidan, byts vid refresh
    _randomQuotes.randomQuotes();
    //Skapar eventlisteners för att öppna/stänga wishlist
    _wishListDisplays.wishList();
    //Uppdaterar wishlist innehållet
    _wishListDisplays.refreshWishList();
    //Aktiverar och skapar HTML i checkout-dropdownen
    _createProductsCheckout.createProductsCheckout();
};

},{"./functions/activateHamburgerMenu":"4wXe7","./functions/randomQuotes":"kzhll","./functions/wishListDisplays":"6rkmj","./functions/createProductsCheckout":"j4N9p"}],"4wXe7":[function(require,module,exports) {
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

},{}],"kzhll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomQuotes", ()=>randomQuotes
);
var _quotes = require("../models/quotes");
function randomQuotes() {
    let q1 = new _quotes.quotes("Bought the Depressed Dog for Michelle and she loved it!", "Barack Obama");
    let q2 = new _quotes.quotes("I'm loving it (these posters)", "Ronald McDonald");
    let q3 = new _quotes.quotes("Herrrrrrrrrrrreguuuuuddd, vilka otroliga posters!", "Björn Ranelid");
    let q4 = new _quotes.quotes("These posters are even better than my paintings!", "Banksy");
    let q5 = new _quotes.quotes("I have a dream: to have all of these posters everywhere in  my house!", "Martin Luther King");
    let quotesList = [];
    quotesList.push(q1, q2, q3, q4, q5);
    let randomFirstQuote = quotesList[Math.floor(Math.random() * 5)];
    let randomSecondQuote = quotesList[Math.floor(Math.random() * 5)];
    if (randomFirstQuote === randomSecondQuote) {
        randomSecondQuote = quotesList[Math.floor(Math.random() * 5)];
        createRandomQuotes();
    } else createRandomQuotes();
    function createRandomQuotes() {
        let createFirstQuote = document.createElement("p");
        createFirstQuote.innerHTML = randomFirstQuote.quote;
        let createFirstName = document.createElement("p");
        createFirstName.innerHTML = "-" + randomFirstQuote.name;
        let createSecondQuote = document.createElement("p");
        createSecondQuote.innerHTML = randomSecondQuote.quote;
        let createSecondName = document.createElement("p");
        createSecondName.innerHTML = "-" + randomSecondQuote.name;
        document.getElementById("first-quote").appendChild(createFirstQuote);
        document.getElementById("first-quote").appendChild(createFirstName);
        document.getElementById("second-quote").appendChild(createSecondQuote);
        document.getElementById("second-quote").appendChild(createSecondName);
    }
}

},{"../models/quotes":"lQnXA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lQnXA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quotes", ()=>quotes
);
class quotes {
    constructor(quote, name){
        this.quote = quote;
        this.name = name;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6rkmj":[function(require,module,exports) {
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

},{"../models/products":"acInb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j4N9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProductsCheckout", ()=>createProductsCheckout
);
parcelHelpers.export(exports, "ifElse", ()=>ifElse
);
parcelHelpers.export(exports, "createHTML", ()=>createHTML
);
let totalPrice1 = 0;
let momsPrice = 0;
function createProductsCheckout() {
    document.getElementById("shopping-cart").addEventListener("click", ()=>{
        document.getElementById("dropdown-wrapper").style.display = "block";
    });
    document.getElementById("shopping-cart-phone").addEventListener("click", ()=>{
        document.getElementById("dropdown-wrapper").style.display = "block";
    });
    document.getElementById("close-checkout").addEventListener("click", ()=>{
        document.getElementById("dropdown-wrapper").style.display = "none";
    });
    document.getElementById("add-button").addEventListener("click", ()=>{
        if (!localStorage.getItem("cartList")) localStorage.setItem("cartList", "[]");
        else localStorage.setItem("cartList", JSON.stringify(listAsObject));
    });
    let cartListLS = localStorage.getItem("cartList");
    let listAsObject = JSON.parse(cartListLS);
    ifElse(listAsObject);
}
function ifElse(listAsObject) {
    if (listAsObject === null || listAsObject.length == 0) document.getElementById("empty-container").style.display = "block";
    else {
        document.getElementById("empty-container").style.display = "none";
        let productsRemove = document.getElementById("checkout-products-container");
        while(productsRemove.firstChild)productsRemove.removeChild(productsRemove.firstChild);
        //Tar bort de gamla HTML-elementen fär att ge plats åt en uppdaterad lista
        let momsRemove = document.getElementById("moms-price");
        while(momsRemove.firstChild)momsRemove.removeChild(momsRemove.firstChild);
        //Tar bort de gamla HTML-elementen fär att ge plats åt en uppdaterad lista
        let totalRemove = document.getElementById("total-price");
        while(totalRemove.firstChild)totalRemove.removeChild(totalRemove.firstChild);
        createHTML(listAsObject);
    }
}
function createHTML(listAsObject) {
    //Skapar HTML efter listan som är lagrad i localStorage
    totalPrice1 = 0;
    for(let i = 0; i < listAsObject.length; i++){
        let productWrapper = document.createElement("div");
        productWrapper.className = "checkout-products";
        let imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";
        imageWrapper.setAttribute("style", `background-image: url("${listAsObject[i].Iproduct.url}")`);
        imageWrapper.setAttribute("alt", `The picture of a ${listAsObject[i].Iproduct.name}`);
        let textWrapper = document.createElement("div");
        textWrapper.className = "text-wrapper";
        let productName = document.createElement("h1");
        productName.id = "name";
        productName.innerHTML = listAsObject[i].Iproduct.name;
        let productSize = document.createElement("p");
        productSize.id = "size";
        if (listAsObject[i].size === "s") productSize.innerHTML = "Storlek: Small";
        else if (listAsObject[i].size === "m") productSize.innerHTML = "Storlek: Medium";
        else productSize.innerHTML = "Storlek: Large";
        let productPrice = document.createElement("p");
        productPrice.id = "price";
        if (listAsObject[i].size === "s") productPrice.innerHTML = listAsObject[i].Iproduct.price.s * listAsObject[i].amount + " kr";
        else if (listAsObject[i].size === "m") productPrice.innerHTML = listAsObject[i].Iproduct.price.m * listAsObject[i].amount + " kr";
        else productPrice.innerHTML = listAsObject[i].Iproduct.price.l * listAsObject[i].amount + " kr";
        let inputContainer = document.createElement("div");
        inputContainer.id = "input-container";
        let label = document.createElement("p");
        label.innerHTML = "Antal:";
        label.id = "label";
        let amount = document.createElement("p");
        amount.innerHTML = listAsObject[i].amount + " st";
        let trashDiv = document.createElement("div");
        trashDiv.id = "trash-div";
        let trash = document.createElement("i");
        trash.className = "far fa-trash-alt";
        document.getElementById("checkout-products-container").appendChild(productWrapper);
        productWrapper.appendChild(imageWrapper);
        productWrapper.appendChild(textWrapper);
        textWrapper.appendChild(productName);
        textWrapper.appendChild(productSize);
        textWrapper.appendChild(productPrice);
        productWrapper.appendChild(inputContainer);
        inputContainer.appendChild(label);
        inputContainer.appendChild(amount);
        productWrapper.appendChild(trashDiv);
        trashDiv.appendChild(trash);
        //Varje produkts pris adderas för aqtt sen kunna räkna ut totalsumman
        totalPrice1 += parseInt(productPrice.innerHTML);
        trashDiv.addEventListener("click", ()=>{
            momsPrice = 0;
            // let indexRemove = listAsObject.indexOf(listAsObject[i]);
            listAsObject.splice(i, 1);
            let deleteList = document.getElementById("checkout-products-container");
            while(deleteList.firstChild)deleteList.removeChild(deleteList.firstChild);
            let deleteMomsList = document.getElementById("moms-price");
            while(deleteMomsList.firstChild)deleteMomsList.removeChild(deleteMomsList.firstChild);
            let deletTotalList = document.getElementById("total-price");
            while(deletTotalList.firstChild)deletTotalList.removeChild(deletTotalList.firstChild);
            let cartListString = JSON.stringify(listAsObject);
            localStorage.setItem("cartList", cartListString);
            if (listAsObject.length === 0) ifElse(listAsObject);
            else createHTML(listAsObject);
        });
    }
    createPrice(totalPrice1);
}
function createPrice(totalPrice) {
    momsPrice = 0.12 * totalPrice;
    momsPrice = Math.round(momsPrice);
    let totalText = document.createElement("p");
    totalText.innerHTML = "Totalsumma:";
    let momsText = document.createElement("p");
    momsText.innerHTML = "Varav moms:";
    let total = document.createElement("p");
    total.innerHTML = totalPrice.toString() + " kr";
    let moms = document.createElement("p");
    moms.innerHTML = momsPrice.toString() + " kr";
    document.getElementById("total-price").appendChild(totalText);
    document.getElementById("total-price").appendChild(total);
    document.getElementById("moms-price").appendChild(momsText);
    document.getElementById("moms-price").appendChild(moms);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["3yY3J","7swJW"], "7swJW", "parcelRequire5db4")

//# sourceMappingURL=index.1c21167c.js.map
