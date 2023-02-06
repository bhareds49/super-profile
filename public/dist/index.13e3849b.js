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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"e2DJy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "49b7f63d13e3849b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"46yBE":[function(require,module,exports) {
//import editorjs
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs");
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
//const Header = require('@editorjs/header');
//const Quote = require('@editorjs/quote');
//const List = require('@editorjs/list');
//import Embed from "@editorjs/embed";
const editor = new (0, _editorjsDefault.default)({
    holder: "editorjs",
    autofocus: false
}); //onclick save button consolelog clicked!
 /* document.getElementById("save-btn").addEventListener("click", function () {
  console.log("clicked!");
  editor.save().then((outputData) => {
    console.log(outputData);
  });
});
 */ 

},{"@editorjs/editorjs":"4eyUD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eyUD":[function(require,module,exports) {
/*! For license information please see editor.js.LICENSE.txt */ !function(e, t1) {
    module.exports = t1();
}(window, function() {
    return function(e) {
        var t1 = {};
        function n(o) {
            if (t1[o]) return t1[o].exports;
            var r = t1[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = e, n.c = t1, n.d = function(e, t1, o) {
            n.o(e, t1) || Object.defineProperty(e, t1, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t1) {
            if (1 & t1 && (e = n(e)), 8 & t1) return e;
            if (4 & t1 && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t1 && "string" != typeof e) for(var r in e)n.d(o, r, (function(t1) {
                return e[t1];
            }).bind(null, r));
            return o;
        }, n.n = function(e) {
            var t1 = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t1, "a", t1), t1;
        }, n.o = function(e, t1) {
            return Object.prototype.hasOwnProperty.call(e, t1);
        }, n.p = "", n(n.s = 187);
    }([
        function(e, t1, n) {
            var o = n(10), r = n(16), i = n(27), a = n(23), s = n(31), l = function(e, t1, n) {
                var c, u, f, d, p = e & l.F, h = e & l.G, v = e & l.S, g = e & l.P, y = e & l.B, k = h ? o : v ? o[t1] || (o[t1] = {}) : (o[t1] || {}).prototype, b = h ? r : r[t1] || (r[t1] = {}), m = b.prototype || (b.prototype = {});
                for(c in h && (n = t1), n)f = ((u = !p && k && void 0 !== k[c]) ? k : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, k && a(k, c, f, e & l.U), b[c] != f && i(b, c, d), g && m[c] != f && (m[c] = f);
            };
            o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l;
        },
        function(e, t1) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e, t1) {
                if (!(e instanceof t1)) throw new TypeError("Cannot call a class as a function");
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            function n(e, t1) {
                for(var n = 0; n < t1.length; n++){
                    var o = t1[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            e.exports = function(e, t1, o) {
                return t1 && n(e.prototype, t1), o && n(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            function n(t1) {
                return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t1);
            }
            e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(111);
            e.exports = function(e, t1) {
                if ("function" != typeof t1 && null !== t1) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t1 && t1.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t1 && o(e, t1);
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(7).default, r = n(152);
            e.exports = function(e, t1) {
                if (t1 && ("object" === o(t1) || "function" == typeof t1)) return t1;
                if (void 0 !== t1) throw new TypeError("Derived constructors may only return object or undefined");
                return r(e);
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            function n(t1) {
                return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t1);
            }
            e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(372),
                n(21),
                n(403),
                n(19)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r, i, a) {
                "use strict";
                var s, l = n(1);
                function c(e, t1) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
                    if ("console" in window && window.console[n]) {
                        var i = [
                            "info",
                            "log",
                            "warn",
                            "error"
                        ].includes(n), a = [];
                        switch(c.logLevel){
                            case s.ERROR:
                                if ("error" !== n) return;
                                break;
                            case s.WARN:
                                if (![
                                    "error",
                                    "warn"
                                ].includes(n)) return;
                                break;
                            case s.INFO:
                                if (!i || e) return;
                        }
                        o && a.push(o);
                        var l = "Editor.js ".concat("2.26.5"), u = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                        e && (i ? (a.unshift(u, r), t1 = "%c".concat(l, "%c ").concat(t1)) : t1 = "( ".concat(l, " )").concat(t1));
                        try {
                            if (i) {
                                if (o) {
                                    var f;
                                    (f = console)[n].apply(f, [
                                        "".concat(t1, " %o")
                                    ].concat(a));
                                } else {
                                    var d;
                                    (d = console)[n].apply(d, [
                                        t1
                                    ].concat(a));
                                }
                            } else console[n](t1);
                        } catch (e) {}
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LogLevels = void 0, e.array = function(e) {
                    return Array.prototype.slice.call(e);
                }, e.beautifyShortcut = function(e) {
                    var t1 = y();
                    return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e = t1.mac ? e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
                }, e.cacheable = function(e, t1, n) {
                    var o = n.value ? "value" : "get", r = n[o], i = "#".concat(t1, "Cache");
                    if (n[o] = function() {
                        if (void 0 === this[i]) {
                            for(var e = arguments.length, t1 = new Array(e), n = 0; n < e; n++)t1[n] = arguments[n];
                            this[i] = r.apply.apply(r, [
                                this
                            ].concat(t1));
                        }
                        return this[i];
                    }, "get" === o && n.set) {
                        var a = n.set;
                        n.set = function(t1) {
                            delete e[i], a.apply(this, t1);
                        };
                    }
                    return n;
                }, e.capitalize = function(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }, e.copyTextToClipboard = function(e) {
                    var t1 = a.default.make("div", "codex-editor-clipboard", {
                        innerHTML: e
                    });
                    document.body.appendChild(t1);
                    var n = window.getSelection(), o = document.createRange();
                    o.selectNode(t1), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(t1);
                }, e.debounce = function(e, t1, n) {
                    var o, r = this;
                    return function() {
                        for(var i = arguments.length, a = new Array(i), s = 0; s < i; s++)a[s] = arguments[s];
                        var l = r, c = function() {
                            o = null, n || e.apply(l, a);
                        }, u = n && !o;
                        window.clearTimeout(o), o = window.setTimeout(c, t1), u && e.apply(l, a);
                    };
                }, e.deepMerge = function e(t1) {
                    for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i];
                    if (!r.length) return t1;
                    var a = r.shift();
                    if (h(t1) && h(a)) for(var s in a)h(a[s]) ? (t1[s] || Object.assign(t1, (0, o.default)({}, s, {})), e(t1[s], a[s])) : Object.assign(t1, (0, o.default)({}, s, a[s]));
                    return e.apply(void 0, [
                        t1
                    ].concat(r));
                }, e.delay = function(e, t1) {
                    return function() {
                        var n = this, o = arguments;
                        window.setTimeout(function() {
                            return e.apply(n, o);
                        }, t1);
                    };
                }, e.deprecationAssert = function(e, t1, n) {
                    var o = "\xab".concat(t1, "\xbb is deprecated and will be removed in the next major release. Please use the \xab").concat(n, "\xbb instead.");
                    e && f(o, "warn");
                }, e.equals = function(e, t1) {
                    var n = Array.isArray(e) || h(e), o = Array.isArray(t1) || h(t1);
                    return n || o ? JSON.stringify(e) === JSON.stringify(t1) : e === t1;
                }, e.generateBlockId = function() {
                    return (0, i.nanoid)(10);
                }, e.generateId = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "".concat(e).concat(Math.floor(1e8 * Math.random()).toString(16));
                }, e.getFileExtension = function(e) {
                    return e.name.split(".").pop();
                }, e.getUserOS = y, e.getValidUrl = function(e) {
                    try {
                        return new URL(e).href;
                    } catch (e) {}
                    return "//" === e.substring(0, 2) ? window.location.protocol + e : window.location.origin + e;
                }, e.isBoolean = function(e) {
                    return "boolean" === d(e);
                }, e.isClass = function(e) {
                    return p(e) && /^\s*class\s+/.test(e.toString());
                }, e.isEmpty = function(e) {
                    return !e || 0 === Object.keys(e).length && e.constructor === Object;
                }, e.isFunction = p, e.isIosDevice = void 0, e.isMobileScreen = function() {
                    return window.matchMedia("(max-width: ".concat(650, "px)")).matches;
                }, e.isNumber = function(e) {
                    return "number" === d(e);
                }, e.isObject = h, e.isPrintableKey = function(e) {
                    return e > 47 && e < 58 || 32 === e || 13 === e || 229 === e || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
                }, e.isPromise = function(e) {
                    return Promise.resolve(e) === e;
                }, e.isString = function(e) {
                    return "string" === d(e);
                }, e.isTouchSupported = void 0, e.isUndefined = v, e.isValidMimeType = function(e) {
                    return /^[-\w]+\/([-+\w]+|\*)$/.test(e);
                }, e.mouseButtons = e.mobileScreenBreakpoint = e.logLabeled = e.log = e.keyCodes = void 0, e.openTab = function(e) {
                    window.open(e, "_blank");
                }, e.sequence = function(e) {
                    return g.apply(this, arguments);
                }, e.setLogLevel = function(e) {
                    c.logLevel = e;
                }, e.throttle = function(e, t1) {
                    var n, o, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = null, s = 0;
                    i || (i = {});
                    var l = function() {
                        s = !1 === i.leading ? 0 : Date.now(), a = null, r = e.apply(n, o), a || (n = o = null);
                    };
                    return function() {
                        var c = Date.now();
                        s || !1 !== i.leading || (s = c);
                        var u = t1 - (c - s);
                        return n = this, o = arguments, u <= 0 || u > t1 ? (a && (clearTimeout(a), a = null), s = c, r = e.apply(n, o), a || (n = o = null)) : a || !1 === i.trailing || (a = setTimeout(l, u)), r;
                    };
                }, e.typeOf = d, t1 = l(t1), o = l(o), r = l(r), a = l(a), e.LogLevels = s, function(e) {
                    e.VERBOSE = "VERBOSE", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR";
                }(s || (e.LogLevels = s = {})), e.keyCodes = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    DOWN: 40,
                    RIGHT: 39,
                    DELETE: 46,
                    META: 91
                }, e.mouseButtons = {
                    LEFT: 0,
                    WHEEL: 1,
                    RIGHT: 2,
                    BACKWARD: 3,
                    FORWARD: 4
                }, c.logLevel = s.VERBOSE;
                var u = c.bind(window, !1);
                e.log = u;
                var f = c.bind(window, !0);
                function d(e) {
                    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                }
                function p(e) {
                    return "function" === d(e) || "asyncfunction" === d(e);
                }
                function h(e) {
                    return "object" === d(e);
                }
                function v(e) {
                    return "undefined" === d(e);
                }
                function g() {
                    return (g = (0, r.default)(t1.default.mark(function e(n) {
                        var o, i, a, s, l = arguments;
                        return t1.default.wrap(function(e) {
                            for(;;)switch(e.prev = e.next){
                                case 0:
                                    return s = function() {
                                        return (s = (0, r.default)(t1.default.mark(function e(n, o, r) {
                                            return t1.default.wrap(function(e) {
                                                for(;;)switch(e.prev = e.next){
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, n.function(n.data);
                                                    case 3:
                                                        return e.next = 5, o(v(n.data) ? {} : n.data);
                                                    case 5:
                                                        e.next = 10;
                                                        break;
                                                    case 7:
                                                        e.prev = 7, e.t0 = e.catch(0), r(v(n.data) ? {} : n.data);
                                                    case 10:
                                                    case "end":
                                                        return e.stop();
                                                }
                                            }, e, null, [
                                                [
                                                    0,
                                                    7
                                                ]
                                            ]);
                                        }))).apply(this, arguments);
                                    }, a = function(e, t1, n) {
                                        return s.apply(this, arguments);
                                    }, o = l.length > 1 && void 0 !== l[1] ? l[1] : function() {}, i = l.length > 2 && void 0 !== l[2] ? l[2] : function() {}, e.abrupt("return", n.reduce(function() {
                                        var e = (0, r.default)(t1.default.mark(function e(n, r) {
                                            return t1.default.wrap(function(e) {
                                                for(;;)switch(e.prev = e.next){
                                                    case 0:
                                                        return e.next = 2, n;
                                                    case 2:
                                                        return e.abrupt("return", a(r, o, i));
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t1, n) {
                                            return e.apply(this, arguments);
                                        };
                                    }(), Promise.resolve()));
                                case 5:
                                case "end":
                                    return e.stop();
                            }
                        }, e);
                    }))).apply(this, arguments);
                }
                function y() {
                    var e = {
                        win: !1,
                        mac: !1,
                        x11: !1,
                        linux: !1
                    }, t1 = Object.keys(e).find(function(e) {
                        return -1 !== window.navigator.appVersion.toLowerCase().indexOf(e);
                    });
                    return t1 ? (e[t1] = !0, e) : e;
                }
                e.logLabeled = f;
                var k = "ontouchstart" in document.documentElement;
                e.isTouchSupported = k, e.mobileScreenBreakpoint = 650;
                var b = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
                e.isIosDevice = b;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(112)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                function l(e, t1) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t1) {
                            if (e) {
                                if ("string" == typeof e) return c(e, t1);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t1) : void 0;
                            }
                        }(e)) || t1 && e && "number" == typeof e.length) {
                            n && (e = n);
                            var o = 0, r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return o >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[o++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: r
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i, a = !0, s = !1;
                    return {
                        s: function() {
                            n = n.call(e);
                        },
                        n: function() {
                            var e = n.next();
                            return a = e.done, e;
                        },
                        e: function(e) {
                            s = !0, i = e;
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return();
                            } finally{
                                if (s) throw i;
                            }
                        }
                    };
                }
                function c(e, t1) {
                    (null == t1 || t1 > e.length) && (t1 = e.length);
                    for(var n = 0, o = new Array(t1); n < t1; n++)o[n] = e[n];
                    return o;
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var u = function() {
                    function e(t1) {
                        var n = this, o = t1.config, i = t1.eventsDispatcher;
                        if ((0, r.default)(this, e), this.nodes = {}, this.listeners = new a.default, this.readOnlyMutableListeners = {
                            on: function(e, t1, o) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                n.mutableListenerIds.push(n.listeners.on(e, t1, o, r));
                            },
                            clearAll: function() {
                                var e, t1 = l(n.mutableListenerIds);
                                try {
                                    for(t1.s(); !(e = t1.n()).done;){
                                        var o = e.value;
                                        n.listeners.offById(o);
                                    }
                                } catch (e) {
                                    t1.e(e);
                                } finally{
                                    t1.f();
                                }
                                n.mutableListenerIds = [];
                            }
                        }, this.mutableListenerIds = [], (this instanceof e ? this.constructor : void 0) === e) throw new TypeError("Constructors for abstract class Module are not allowed.");
                        this.config = o, this.eventsDispatcher = i;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "state",
                            set: function(e) {
                                this.Editor = e;
                            }
                        },
                        {
                            key: "removeAllNodes",
                            value: function() {
                                for(var e in this.nodes){
                                    var t1 = this.nodes[e];
                                    t1 instanceof HTMLElement && t1.remove();
                                }
                            }
                        },
                        {
                            key: "isRtl",
                            get: function() {
                                return "rtl" === this.config.i18n.direction;
                            }
                        }
                    ]), e;
                }();
                o.default = u, u.displayName = "Module", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n);
        },
        function(e, t1) {
            e.exports = function(e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function(e, t1, n) {
            var o = n(13);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e;
            };
        },
        function(e, t1) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
            };
        },
        function(e, t1, n) {
            var o = n(70)("wks"), r = n(45), i = n(10).Symbol, a = "function" == typeof i;
            (e.exports = function(e) {
                return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e));
            }).store = o;
        },
        function(e, t1, n) {
            var o = n(33), r = Math.min;
            e.exports = function(e) {
                return e > 0 ? r(o(e), 9007199254740991) : 0;
            };
        },
        function(e, t1) {
            var n = e.exports = {
                version: "2.6.12"
            };
            "number" == typeof __e && (__e = n);
        },
        function(e, t1, n) {
            e.exports = !n(11)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(e, t1, n) {
            var o = n(12), r = n(117), i = n(42), a = Object.defineProperty;
            t1.f = n(17) ? Object.defineProperty : function(e, t1, n) {
                if (o(e), t1 = i(t1, !0), o(n), r) try {
                    return a(e, t1, n);
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t1] = n.value), e;
            };
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(41),
                n(2),
                n(3),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l) {
                "use strict";
                var c = n(1);
                function u(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (u = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), s = c(s), l = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = u(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(l);
                var f = function() {
                    function e() {
                        (0, i.default)(this, e);
                    }
                    return (0, s.default)(e, null, [
                        {
                            key: "isSingleTag",
                            value: function(e) {
                                return e.tagName && [
                                    "AREA",
                                    "BASE",
                                    "BR",
                                    "COL",
                                    "COMMAND",
                                    "EMBED",
                                    "HR",
                                    "IMG",
                                    "INPUT",
                                    "KEYGEN",
                                    "LINK",
                                    "META",
                                    "PARAM",
                                    "SOURCE",
                                    "TRACK",
                                    "WBR"
                                ].includes(e.tagName);
                            }
                        },
                        {
                            key: "isLineBreakTag",
                            value: function(e) {
                                return e && e.tagName && [
                                    "BR",
                                    "WBR"
                                ].includes(e.tagName);
                            }
                        },
                        {
                            key: "make",
                            value: function(e) {
                                var t1, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = document.createElement(e);
                                for(var a in Array.isArray(n) ? (t1 = i.classList).add.apply(t1, (0, r.default)(n)) : n && i.classList.add(n), o)Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
                                return i;
                            }
                        },
                        {
                            key: "text",
                            value: function(e) {
                                return document.createTextNode(e);
                            }
                        },
                        {
                            key: "append",
                            value: function(e, t1) {
                                Array.isArray(t1) ? t1.forEach(function(t1) {
                                    return e.appendChild(t1);
                                }) : e.appendChild(t1);
                            }
                        },
                        {
                            key: "prepend",
                            value: function(e, t1) {
                                Array.isArray(t1) ? (t1 = t1.reverse()).forEach(function(t1) {
                                    return e.prepend(t1);
                                }) : e.prepend(t1);
                            }
                        },
                        {
                            key: "swap",
                            value: function(e, t1) {
                                var n = document.createElement("div"), o = e.parentNode;
                                o.insertBefore(n, e), o.insertBefore(e, t1), o.insertBefore(t1, n), o.removeChild(n);
                            }
                        },
                        {
                            key: "find",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t1 = arguments.length > 1 ? arguments[1] : void 0;
                                return e.querySelector(t1);
                            }
                        },
                        {
                            key: "get",
                            value: function(e) {
                                return document.getElementById(e);
                            }
                        },
                        {
                            key: "findAll",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t1 = arguments.length > 1 ? arguments[1] : void 0;
                                return e.querySelectorAll(t1);
                            }
                        },
                        {
                            key: "allInputsSelector",
                            get: function() {
                                return "[contenteditable=true], textarea, input:not([type]), " + [
                                    "text",
                                    "password",
                                    "email",
                                    "number",
                                    "search",
                                    "tel",
                                    "url"
                                ].map(function(e) {
                                    return 'input[type="'.concat(e, '"]');
                                }).join(", ");
                            }
                        },
                        {
                            key: "findAllInputs",
                            value: function(t1) {
                                return l.array(t1.querySelectorAll(e.allInputsSelector)).reduce(function(t1, n) {
                                    return e.isNativeInput(n) || e.containsOnlyInlineElements(n) ? [].concat((0, r.default)(t1), [
                                        n
                                    ]) : [].concat((0, r.default)(t1), (0, r.default)(e.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getDeepestNode",
                            value: function(t1) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = n ? "lastChild" : "firstChild", r = n ? "previousSibling" : "nextSibling";
                                if (t1 && t1.nodeType === Node.ELEMENT_NODE && t1[o]) {
                                    var i = t1[o];
                                    if (e.isSingleTag(i) && !e.isNativeInput(i) && !e.isLineBreakTag(i)) {
                                        if (i[r]) i = i[r];
                                        else {
                                            if (!i.parentNode[r]) return i.parentNode;
                                            i = i.parentNode[r];
                                        }
                                    }
                                    return this.getDeepestNode(i, n);
                                }
                                return t1;
                            }
                        },
                        {
                            key: "isElement",
                            value: function(e) {
                                return !l.isNumber(e) && e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isFragment",
                            value: function(e) {
                                return !l.isNumber(e) && e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                            }
                        },
                        {
                            key: "isContentEditable",
                            value: function(e) {
                                return "true" === e.contentEditable;
                            }
                        },
                        {
                            key: "isNativeInput",
                            value: function(e) {
                                return !(!e || !e.tagName) && [
                                    "INPUT",
                                    "TEXTAREA"
                                ].includes(e.tagName);
                            }
                        },
                        {
                            key: "canSetCaret",
                            value: function(t1) {
                                var n = !0;
                                if (e.isNativeInput(t1)) switch(t1.type){
                                    case "file":
                                    case "checkbox":
                                    case "radio":
                                    case "hidden":
                                    case "submit":
                                    case "button":
                                    case "image":
                                    case "reset":
                                        n = !1;
                                }
                                else n = e.isContentEditable(t1);
                                return n;
                            }
                        },
                        {
                            key: "isNodeEmpty",
                            value: function(e) {
                                return !(this.isSingleTag(e) && !this.isLineBreakTag(e)) && 0 === (this.isElement(e) && this.isNativeInput(e) ? e.value : e.textContent.replace("​", "")).trim().length;
                            }
                        },
                        {
                            key: "isLeaf",
                            value: function(e) {
                                return !!e && 0 === e.childNodes.length;
                            }
                        },
                        {
                            key: "isEmpty",
                            value: function(e) {
                                e.normalize();
                                for(var t1 = [
                                    e
                                ]; t1.length > 0;)if (e = t1.shift()) {
                                    if (this.isLeaf(e) && !this.isNodeEmpty(e)) return !1;
                                    e.childNodes && t1.push.apply(t1, (0, r.default)(Array.from(e.childNodes)));
                                }
                                return !0;
                            }
                        },
                        {
                            key: "isHTMLString",
                            value: function(t1) {
                                var n = e.make("div");
                                return n.innerHTML = t1, n.childElementCount > 0;
                            }
                        },
                        {
                            key: "getContentLength",
                            value: function(t1) {
                                return e.isNativeInput(t1) ? t1.value.length : t1.nodeType === Node.TEXT_NODE ? t1.length : t1.textContent.length;
                            }
                        },
                        {
                            key: "blockElements",
                            get: function() {
                                return [
                                    "address",
                                    "article",
                                    "aside",
                                    "blockquote",
                                    "canvas",
                                    "div",
                                    "dl",
                                    "dt",
                                    "fieldset",
                                    "figcaption",
                                    "figure",
                                    "footer",
                                    "form",
                                    "h1",
                                    "h2",
                                    "h3",
                                    "h4",
                                    "h5",
                                    "h6",
                                    "header",
                                    "hgroup",
                                    "hr",
                                    "li",
                                    "main",
                                    "nav",
                                    "noscript",
                                    "ol",
                                    "output",
                                    "p",
                                    "pre",
                                    "ruby",
                                    "section",
                                    "table",
                                    "tbody",
                                    "thead",
                                    "tr",
                                    "tfoot",
                                    "ul",
                                    "video"
                                ];
                            }
                        },
                        {
                            key: "containsOnlyInlineElements",
                            value: function(t1) {
                                var n;
                                return l.isString(t1) ? (n = document.createElement("div")).innerHTML = t1 : n = t1, Array.from(n.children).every(function t1(n) {
                                    return !e.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(t1);
                                });
                            }
                        },
                        {
                            key: "getDeepestBlockElements",
                            value: function(t1) {
                                return e.containsOnlyInlineElements(t1) ? [
                                    t1
                                ] : Array.from(t1.children).reduce(function(t1, n) {
                                    return [].concat((0, r.default)(t1), (0, r.default)(e.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getHolder",
                            value: function(e) {
                                return l.isString(e) ? document.getElementById(e) : e;
                            }
                        },
                        {
                            key: "isExtensionNode",
                            value: function(e) {
                                return e && [
                                    "GRAMMARLY-EXTENSION"
                                ].includes(e.nodeName);
                            }
                        },
                        {
                            key: "isAnchor",
                            value: function(e) {
                                return "a" === e.tagName.toLowerCase();
                            }
                        },
                        {
                            key: "offset",
                            value: function(e) {
                                var t1 = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, r = t1.top + o, i = t1.left + n;
                                return {
                                    top: r,
                                    left: i,
                                    bottom: r + t1.height,
                                    right: i + t1.width
                                };
                            }
                        }
                    ]), e;
                }();
                o.default = f, f.displayName = "Dom", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(368)();
            e.exports = o;
            try {
                regeneratorRuntime = o;
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o);
            }
        },
        function(e, t1) {
            function n(e, t1, n, o, r, i, a) {
                try {
                    var s = e[i](a), l = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t1(l) : Promise.resolve(l).then(o, r);
            }
            e.exports = function(e) {
                return function() {
                    var t1 = this, o = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t1, o);
                        function s(e) {
                            n(a, r, i, s, l, "next", e);
                        }
                        function l(e) {
                            n(a, r, i, s, l, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(39);
            e.exports = function(e) {
                return Object(o(e));
            };
        },
        function(e, t1, n) {
            var o = n(10), r = n(27), i = n(26), a = n(45)("src"), s = n(192), l = ("" + s).split("toString");
            n(16).inspectSource = function(e) {
                return s.call(e);
            }, (e.exports = function(e, t1, n, s) {
                var c = "function" == typeof n;
                c && (i(n, "name") || r(n, "name", t1)), e[t1] !== n && (c && (i(n, a) || r(n, a, e[t1] ? "" + e[t1] : l.join(String(t1)))), e === o ? e[t1] = n : s ? e[t1] ? e[t1] = n : r(e, t1, n) : (delete e[t1], r(e, t1, n)));
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this);
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(11), i = n(39), a = /"/g, s = function(e, t1, n, o) {
                var r = String(i(e)), s = "<" + t1;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + t1 + ">";
            };
            e.exports = function(e, t1) {
                var n = {};
                n[e] = t1(s), o(o.P + o.F * r(function() {
                    var t1 = ""[e]('"');
                    return t1 !== t1.toLowerCase() || t1.split('"').length > 3;
                }), "String", n);
            };
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8),
                n(19)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l) {
                "use strict";
                var c = n(1);
                function u(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (u = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), s = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = u(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(s), l = c(l);
                var f = function() {
                    function e() {
                        (0, r.default)(this, e), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
                    }
                    return (0, i.default)(e, [
                        {
                            key: "removeFakeBackground",
                            value: function() {
                                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
                            }
                        },
                        {
                            key: "setFakeBackground",
                            value: function() {
                                document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                this.savedSelectionRange = e.range;
                            }
                        },
                        {
                            key: "restore",
                            value: function() {
                                if (this.savedSelectionRange) {
                                    var e = window.getSelection();
                                    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
                                }
                            }
                        },
                        {
                            key: "clearSaved",
                            value: function() {
                                this.savedSelectionRange = null;
                            }
                        },
                        {
                            key: "collapseToEnd",
                            value: function() {
                                var e = window.getSelection(), t1 = document.createRange();
                                t1.selectNodeContents(e.focusNode), t1.collapse(!1), e.removeAllRanges(), e.addRange(t1);
                            }
                        },
                        {
                            key: "findParentTag",
                            value: function(e, t1) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o = window.getSelection(), r = null;
                                if (!o || !o.anchorNode || !o.focusNode) return null;
                                var i = [
                                    o.anchorNode,
                                    o.focusNode
                                ];
                                return i.forEach(function(o) {
                                    for(var i = n; i > 0 && o.parentNode && (o.tagName !== e || (r = o, t1 && o.classList && !o.classList.contains(t1) && (r = null), !r));)o = o.parentNode, i--;
                                }), r;
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(e) {
                                var t1 = window.getSelection();
                                t1.removeAllRanges();
                                var n = document.createRange();
                                n.selectNodeContents(e), t1.addRange(n);
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorZone: "codex-editor__redactor"
                                };
                            }
                        },
                        {
                            key: "anchorNode",
                            get: function() {
                                var e = window.getSelection();
                                return e ? e.anchorNode : null;
                            }
                        },
                        {
                            key: "anchorElement",
                            get: function() {
                                var e = window.getSelection();
                                if (!e) return null;
                                var t1 = e.anchorNode;
                                return t1 ? l.default.isElement(t1) ? t1 : t1.parentElement : null;
                            }
                        },
                        {
                            key: "anchorOffset",
                            get: function() {
                                var e = window.getSelection();
                                return e ? e.anchorOffset : null;
                            }
                        },
                        {
                            key: "isCollapsed",
                            get: function() {
                                var e = window.getSelection();
                                return e ? e.isCollapsed : null;
                            }
                        },
                        {
                            key: "isAtEditor",
                            get: function() {
                                return this.isSelectionAtEditor(e.get());
                            }
                        },
                        {
                            key: "isSelectionAtEditor",
                            value: function(t1) {
                                if (!t1) return !1;
                                var n = t1.anchorNode || t1.focusNode;
                                n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                var o = null;
                                return n && n instanceof Element && (o = n.closest(".".concat(e.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isRangeAtEditor",
                            value: function(t1) {
                                if (t1) {
                                    var n = t1.startContainer;
                                    n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                    var o = null;
                                    return n && n instanceof Element && (o = n.closest(".".concat(e.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                                }
                            }
                        },
                        {
                            key: "isSelectionExists",
                            get: function() {
                                return !!e.get().anchorNode;
                            }
                        },
                        {
                            key: "range",
                            get: function() {
                                return this.getRangeFromSelection(this.get());
                            }
                        },
                        {
                            key: "getRangeFromSelection",
                            value: function(e) {
                                return e && e.rangeCount ? e.getRangeAt(0) : null;
                            }
                        },
                        {
                            key: "rect",
                            get: function() {
                                var e, t1 = document.selection, n = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                };
                                if (t1 && "Control" !== t1.type) return e = t1.createRange(), n.x = e.boundingLeft, n.y = e.boundingTop, n.width = e.boundingWidth, n.height = e.boundingHeight, n;
                                if (!window.getSelection) return s.log("Method window.getSelection is not supported", "warn"), n;
                                if (null === (t1 = window.getSelection()).rangeCount || isNaN(t1.rangeCount)) return s.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                                if (0 === t1.rangeCount) return n;
                                if ((e = t1.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = e.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                                    var o = document.createElement("span");
                                    if (o.getBoundingClientRect) {
                                        o.appendChild(document.createTextNode("​")), e.insertNode(o), n = o.getBoundingClientRect();
                                        var r = o.parentNode;
                                        r.removeChild(o), r.normalize();
                                    }
                                }
                                return n;
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return window.getSelection ? window.getSelection().toString() : "";
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return window.getSelection();
                            }
                        },
                        {
                            key: "setCursor",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = document.createRange(), o = window.getSelection();
                                if (l.default.isNativeInput(e)) {
                                    if (!l.default.canSetCaret(e)) return;
                                    return e.focus(), e.selectionStart = e.selectionEnd = t1, e.getBoundingClientRect();
                                }
                                return n.setStart(e, t1), n.setEnd(e, t1), o.removeAllRanges(), o.addRange(n), n.getBoundingClientRect();
                            }
                        },
                        {
                            key: "addFakeCursor",
                            value: function(t1) {
                                var n = e.range, o = l.default.make("span", "codex-editor__fake-cursor");
                                o.dataset.mutationFree = "true", !n || t1 && !t1.contains(n.startContainer) || (n.collapse(), n.insertNode(o));
                            }
                        },
                        {
                            key: "removeFakeCursor",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, t1 = l.default.find(e, ".codex-editor__fake-cursor");
                                t1 && t1.remove();
                            }
                        }
                    ]), e;
                }();
                o.default = f, f.displayName = "SelectionUtils", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t1) {
                return n.call(e, t1);
            };
        },
        function(e, t1, n) {
            var o = n(18), r = n(44);
            e.exports = n(17) ? function(e, t1, n) {
                return o.f(e, t1, r(1, n));
            } : function(e, t1, n) {
                return e[t1] = n, e;
            };
        },
        function(e, t1, n) {
            var o = n(62), r = n(39);
            e.exports = function(e) {
                return o(r(e));
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(11);
            e.exports = function(e, t1) {
                return !!e && o(function() {
                    t1 ? e.call(null, function() {}, 1) : e.call(null);
                });
            };
        },
        function(e, t1, n) {
            var o = n(362), r = n(363), i = n(148), a = n(364);
            e.exports = function(e, t1) {
                return o(e) || r(e, t1) || i(e, t1) || a();
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(32);
            e.exports = function(e, t1, n) {
                if (o(e), void 0 === t1) return e;
                switch(n){
                    case 1:
                        return function(n) {
                            return e.call(t1, n);
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t1, n, o);
                        };
                    case 3:
                        return function(n, o, r) {
                            return e.call(t1, n, o, r);
                        };
                }
                return function() {
                    return e.apply(t1, arguments);
                };
            };
        },
        function(e, t1) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e;
            };
        },
        function(e, t1) {
            var n = Math.ceil, o = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e);
            };
        },
        function(e, t1, n) {
            var o = n(63), r = n(44), i = n(28), a = n(42), s = n(26), l = n(117), c = Object.getOwnPropertyDescriptor;
            t1.f = n(17) ? c : function(e, t1) {
                if (e = i(e), t1 = a(t1, !0), l) try {
                    return c(e, t1);
                } catch (e) {}
                if (s(e, t1)) return r(!o.f.call(e, t1), e[t1]);
            };
        },
        function(e, t1, n) {
            var o = n(0), r = n(16), i = n(11);
            e.exports = function(e, t1) {
                var n = (r.Object || {})[e] || Object[e], a = {};
                a[e] = t1(n), o(o.S + o.F * i(function() {
                    n(1);
                }), "Object", a);
            };
        },
        function(e, t1, n) {
            var o = n(31), r = n(62), i = n(22), a = n(15), s = n(133);
            e.exports = function(e, t1) {
                var n = 1 == e, l = 2 == e, c = 3 == e, u = 4 == e, f = 6 == e, d = 5 == e || f, p = t1 || s;
                return function(t1, s, h) {
                    for(var v, g, y = i(t1), k = r(y), b = o(s, h, 3), m = a(k.length), w = 0, x = n ? p(t1, m) : l ? p(t1, 0) : void 0; m > w; w++)if ((d || w in k) && (g = b(v = k[w], w, y), e)) {
                        if (n) x[w] = g;
                        else if (g) switch(e){
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return w;
                            case 2:
                                x.push(v);
                        }
                        else if (u) return !1;
                    }
                    return f ? -1 : c || u ? u : x;
                };
            };
        },
        function(e, t1, n) {
            "use strict";
            n.r(t1), n.d(t1, "IconAddBackground", function() {
                return c;
            }), n.d(t1, "IconAddBorder", function() {
                return u;
            }), n.d(t1, "IconAlignCenter", function() {
                return f;
            }), n.d(t1, "IconAlignJustify", function() {
                return d;
            }), n.d(t1, "IconAlignLeft", function() {
                return p;
            }), n.d(t1, "IconAlignRight", function() {
                return h;
            }), n.d(t1, "IconBold", function() {
                return v;
            }), n.d(t1, "IconBrackets", function() {
                return g;
            }), n.d(t1, "IconChecklist", function() {
                return y;
            }), n.d(t1, "IconChevronDown", function() {
                return k;
            }), n.d(t1, "IconChevronLeft", function() {
                return b;
            }), n.d(t1, "IconChevronRight", function() {
                return m;
            }), n.d(t1, "IconChevronUp", function() {
                return w;
            }), n.d(t1, "IconClipboard", function() {
                return x;
            }), n.d(t1, "IconCollapse", function() {
                return C;
            }), n.d(t1, "IconColor", function() {
                return S;
            }), n.d(t1, "IconCopy", function() {
                return T;
            }), n.d(t1, "IconCross", function() {
                return E;
            }), n.d(t1, "IconCurlyBrackets", function() {
                return B;
            }), n.d(t1, "IconDelimiter", function() {
                return M;
            }), n.d(t1, "IconDirectionDownRight", function() {
                return _;
            }), n.d(t1, "IconDirectionLeftDown", function() {
                return O;
            }), n.d(t1, "IconDirectionRightDown", function() {
                return I;
            }), n.d(t1, "IconDirectionUpRight", function() {
                return L;
            }), n.d(t1, "IconDotCircle", function() {
                return P;
            }), n.d(t1, "IconEtcHorisontal", function() {
                return j;
            }), n.d(t1, "IconEtcVertical", function() {
                return R;
            }), n.d(t1, "IconFile", function() {
                return A;
            }), n.d(t1, "IconGift", function() {
                return N;
            }), n.d(t1, "IconGlobe", function() {
                return D;
            }), n.d(t1, "IconH1", function() {
                return o;
            }), n.d(t1, "IconH2", function() {
                return r;
            }), n.d(t1, "IconH3", function() {
                return i;
            }), n.d(t1, "IconH4", function() {
                return a;
            }), n.d(t1, "IconH5", function() {
                return s;
            }), n.d(t1, "IconH6", function() {
                return l;
            }), n.d(t1, "IconHeading", function() {
                return F;
            }), n.d(t1, "IconHeart", function() {
                return H;
            }), n.d(t1, "IconHidden", function() {
                return W;
            }), n.d(t1, "IconHtml", function() {
                return U;
            }), n.d(t1, "IconInstagram", function() {
                return z;
            }), n.d(t1, "IconItalic", function() {
                return V;
            }), n.d(t1, "IconLink", function() {
                return Y;
            }), n.d(t1, "IconLinkedin", function() {
                return X;
            }), n.d(t1, "IconListBulleted", function() {
                return G;
            }), n.d(t1, "IconListNumbered", function() {
                return K;
            }), n.d(t1, "IconMarker", function() {
                return Z;
            }), n.d(t1, "IconMenu", function() {
                return J;
            }), n.d(t1, "IconMenuSmall", function() {
                return q;
            }), n.d(t1, "IconPicture", function() {
                return $;
            }), n.d(t1, "IconPlay", function() {
                return Q;
            }), n.d(t1, "IconPlus", function() {
                return ee;
            }), n.d(t1, "IconQuestion", function() {
                return te;
            }), n.d(t1, "IconQuote", function() {
                return ne;
            }), n.d(t1, "IconRedo", function() {
                return oe;
            }), n.d(t1, "IconRemoveBackground", function() {
                return re;
            }), n.d(t1, "IconReplace", function() {
                return ie;
            }), n.d(t1, "IconSave", function() {
                return ae;
            }), n.d(t1, "IconSearch", function() {
                return se;
            }), n.d(t1, "IconStar", function() {
                return le;
            }), n.d(t1, "IconStretch", function() {
                return ce;
            }), n.d(t1, "IconStrikethrough", function() {
                return ue;
            }), n.d(t1, "IconTable", function() {
                return pe;
            }), n.d(t1, "IconTableWithHeadings", function() {
                return fe;
            }), n.d(t1, "IconTableWithoutHeadings", function() {
                return de;
            }), n.d(t1, "IconText", function() {
                return he;
            }), n.d(t1, "IconTranslate", function() {
                return ve;
            }), n.d(t1, "IconTrash", function() {
                return ge;
            }), n.d(t1, "IconTwitter", function() {
                return ye;
            }), n.d(t1, "IconUnderline", function() {
                return ke;
            }), n.d(t1, "IconUndo", function() {
                return be;
            }), n.d(t1, "IconUnlink", function() {
                return me;
            }), n.d(t1, "IconUser", function() {
                return we;
            }), n.d(t1, "IconUsersGroup", function() {
                return xe;
            }), n.d(t1, "IconWarning", function() {
                return Ce;
            });
            const o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', s = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', c = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', f = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 12L6 12"/></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 7L7 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17H7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 12L11 12"/></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>', y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', b = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', m = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', w = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.42857 7H7.71429C7.25963 7 6.82359 7.15804 6.5021 7.43934C6.18061 7.72064 6 8.10218 6 8.5V17.5C6 17.8978 6.18061 18.2794 6.5021 18.5607C6.82359 18.842 7.25963 19 7.71429 19H16.2857C16.7404 19 17.1764 18.842 17.4979 18.5607C17.8194 18.2794 18 17.8978 18 17.5V8.5C18 8.10218 17.8194 7.72064 17.4979 7.43934C17.1764 7.15804 16.7404 7 16.2857 7H14.5714"/><rect width="5.15789" height="3.36842" x="9.42105" y="5" stroke="currentColor" stroke-width="2" rx="1.5"/></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5.24296 11.4075C5.23167 10.6253 5.52446 9.8395 6.12132 9.24264L9.65686 5.70711C10.0474 5.31658 10.6809 5.31693 11.0714 5.70745L16.0205 10.6565C16.2268 10.8629 16.3243 11.1371 16.3126 11.4075M5.24296 11.4075C5.25382 12.1607 5.54661 12.9106 6.12132 13.4853L8 15.364M5.24296 11.4075H11.9565M16.3126 11.4075C16.3022 11.6487 16.205 11.8869 16.0208 12.0711L12.4853 15.6066C11.3137 16.7782 9.41421 16.7782 8.24264 15.6066L8 15.364M16.3126 11.4075H11.9565M8 15.364L11.9565 11.4075"/><path stroke="currentColor" stroke-width="2" d="M20 17.4615C20 18.3112 19.3284 19 18.5 19C17.6716 19 17 18.3112 17 17.4615C17 16.6119 17.9 15.6154 18.5 15C19.1 15.6154 20 16.6119 20 17.4615Z"/></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.5H10.25C9.2835 8.5 8.5 9.2835 8.5 10.25V17.25C8.5 18.2165 9.2835 19 10.25 19H17.25C18.2165 19 19 18.2165 19 17.25V10.25C19 9.2835 18.2165 8.5 17.25 8.5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.5V6.75C15.5 6.28587 15.3156 5.84075 14.9874 5.51256C14.6592 5.18437 14.2141 5 13.75 5H6.75C6.28587 5 5.84075 5.18437 5.51256 5.51256C5.18437 5.84075 5 6.28587 5 6.75V13.75C5 14.2141 5.18437 14.6592 5.51256 14.9874C5.84075 15.3156 6.28587 15.5 6.75 15.5H8.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L15.5 12"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.5L15.5 15.5"/></svg>', E = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17C7 17 7 15.2536 7 13.5L5.5 12L7 10.5C7 8.74644 7 7 9 7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17C17 17 17 15.2536 17 13.5L18.5 12L17 10.5C17 8.74644 17 7 15 7"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', _ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M7.30499 11.995L7.30499 12.005M12.005 11.995V12.005M16.705 11.995L16.705 12.005"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.29999H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 12H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 16.7H12"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="12" height="6" x="6" y="13" stroke="currentColor" stroke-width="2" rx="2"/><line x1="12" x2="12" y1="9" y2="19" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-width="2" d="M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11V11C19 12.1046 18.1046 13 17 13H7C5.89543 13 5 12.1046 5 11V11Z"/><path stroke="currentColor" stroke-width="2" d="M16 9C16 7.89543 16 6 14 6C12 6 12 7.89543 12 9C12 7.89543 12 6 10 6C8 6 8 7.89543 8 9"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12M18 12H6M11.7 6C11.7 6 9.7 7.63811 9.7 12C9.7 16.9 11.7 18 11.7 18M12.3 6C12.3 6 14.3 7.63811 14.3 12C14.3 16.9 12.3 18 12.3 18"/></svg>', F = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M6.6 7.50001C5.27451 8.82549 5.19999 10.6 6.59999 12.3C8 14 12.2 17.9 12.2 17.9C12.2 17.9 16.5 14 17.8 12.3C19.1 10.6 19.1255 8.82549 17.8 7.5C16.4745 6.17452 14.3255 6.17452 13 7.5L12.2 8.30001L11.4 7.50001C10.0745 6.17453 7.92548 6.17453 6.6 7.50001Z"/></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.77778 6L18.5 17.7222"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.687 10C10.2473 10.4392 10.0002 11.035 10 11.6564C9.99978 12.2777 10.2465 12.8737 10.6858 13.3132C11.1251 13.7527 11.7211 13.9998 12.3427 14C12.9642 14.0002 13.5604 13.7536 14 13.3144"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7C17 11.1666 20 11.17 20 11.67C20 12.17 19 13.17 19 13.17M8.2424 8.80936C7.59317 9.22876 6.97961 9.76732 6.4017 10.4251C5.70398 11.2193 5.35512 11.6164 5.35513 12.3702C5.35514 13.124 5.70406 13.5211 6.40191 14.3154C7.99587 16.1297 9.8618 17.0367 12 17.0367C13.1102 17.0367 14.1466 16.7917 15.1111 16.3024"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.9 8.1V8.11"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', X = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="9" x2="9" y1="11.4" y2="15.4" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8.7V8.71"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 11.4V12M12 15.4V12M12 12C14 11.5 15 11.3611 15 12.5C15 13.5 15 15.4 15 15.4"/></svg>', G = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', K = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>', Z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3535 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3535 9.31802L7.96729 12.7043C7.40889 13.2627 7.02826 13.9739 6.87339 14.7482L6.69798 15.6253C6.55803 16.325 7.17495 16.942 7.87467 16.802L8.75175 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3535 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', J = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', Q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 10.5606V13.4394C10 14.4777 11.1572 15.0971 12.0211 14.5211L14.1803 13.0817C14.9536 12.5661 14.9503 11.4317 14.18 10.9181L12.0214 9.47907C11.1591 8.9042 10 9.5203 10 10.5606Z"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', ee = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', te = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.52V15.51"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.0024 9.97655C10.1567 9.01858 11 8.5 12 8.5C13 8.5 13.6857 9.17188 13.8693 9.70703C14.0529 10.2422 14.0135 11.0514 13.5067 11.5159C13 11.9805 12.7344 11.832 12.2784 12.3168C12.1134 12.4923 12 12.7476 12 12.7476"/></svg>', ne = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', oe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.6667 13.6667L18 10.3333L14.6667 7M18 10.3333H8.83333C7.94928 10.3333 7.10143 10.6845 6.47631 11.3096C5.85119 11.9348 5.5 12.7826 5.5 13.6667C5.5 14.5507 5.85119 15.3986 6.47631 16.0237C7.10143 16.6488 7.94928 17 8.83333 17H9.66667"/></svg>', re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.1187 14.8787L16.9974 17M14.876 19.1213L16.9974 17M19.1187 19.1213L16.9974 17M16.9974 17L14.876 14.8787"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', ie = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M15.078 5.62637L15.6153 4.78296L15.078 5.62637C15.4261 5.84808 15.7393 6.15354 16.5711 6.98528L17.2782 6.27817L16.5711 6.98528L17.5251 7.93934C17.8347 8.2489 17.9496 8.36494 18.0489 8.48177C18.5907 9.11982 18.9188 9.91178 18.9868 10.7461C18.9992 10.8989 19 11.0622 19 11.5V12C19 13.4166 18.9992 14.419 18.9352 15.2026C18.8721 15.9745 18.7527 16.4457 18.564 16.816C18.1805 17.5686 17.5686 18.1805 16.816 18.564C16.4457 18.7527 15.9745 18.8721 15.2026 18.9352C14.419 18.9992 13.4166 19 12 19C10.5834 19 9.58104 18.9992 8.79744 18.9352C8.02552 18.8721 7.55435 18.7527 7.18404 18.564C6.43139 18.1805 5.81947 17.5686 5.43597 16.816C5.24729 16.4457 5.12787 15.9745 5.0648 15.2026C5.00078 14.419 5 13.4166 5 12V11.7782C5 10.4673 5.00067 9.53987 5.05572 8.81299C5.10998 8.09655 5.21284 7.65673 5.37487 7.3093C5.77229 6.45718 6.45718 5.77229 7.3093 5.37487C7.65673 5.21284 8.09655 5.10998 8.81299 5.05572C9.53986 5.00067 10.4673 5 11.7782 5C12.9544 5 13.3919 5.00552 13.7948 5.09484C14.2503 5.19583 14.6846 5.37572 15.078 5.62637Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5.5V7C14 7.55228 13.5523 8 13 8H11C10.4477 8 10 7.55228 10 7V5.2"/></svg>', se = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', le = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96022 17.922L8.7052 13.8388C8.71728 13.7726 8.69523 13.7047 8.64652 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"/></svg>', ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', ue = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.50001C13.5 7 10.935 6.66476 9.75315 7.79706C9.27092 8.25909 9 8.88574 9 9.53915C9 10.1926 9.27092 10.8192 9.75315 11.2812C10.9835 12.46 13.0165 11.5457 14.2468 12.7244C14.7291 13.1865 15 13.8131 15 14.4665C15 15.1199 14.7291 15.7466 14.2468 16.2086C12.8659 17.5317 10 17.5 9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12H18"/></svg>', fe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', de = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', pe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', he = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', ve = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 17C8 14.5 12 12 13 9"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 11C8.5 11 10 14 12.5 15"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7.7H16M11 7.7V5.7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 18L15.2143 16M15.2143 16L16.9159 11.2354C16.9663 11.0942 17.1001 11 17.25 11C17.3999 11 17.5337 11.0942 17.5841 11.2354L19.2857 16M15.2143 16H19.2857M20 18L19.2857 16"/></svg>', ge = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>', ye = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.7893 7.87697C17.5 8 18.5 8 18.5 8C18.5 8 17.5 9.5 17.5 10C18.5 18.5 11.5 20.5 5.5 16.5C6.99996 16.6712 8.04617 16.5163 9.25234 15.6024C7.99546 15.58 5.36548 13.6033 5 12.5C6.5 13 8 12 8 12C6.52134 11.0446 4.93005 9.24114 5.97461 7.50832C7.39125 9.18838 9.50766 10.2939 11.8948 10.4097C11.2198 7.60755 14.9218 5.95341 16.7893 7.87697Z"/></svg>', ke = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>', be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.33333 13.6667L6 10.3333L9.33333 7M6 10.3333H15.1667C16.0507 10.3333 16.8986 10.6845 17.5237 11.3096C18.1488 11.9348 18.5 12.7826 18.5 13.6667C18.5 14.5507 18.1488 15.3986 17.5237 16.0237C16.8986 16.6488 16.0507 17 15.1667 17H14.3333"/></svg>', me = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', we = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M12 10C12.7145 10 13.239 9.56559 13.5392 9.11536C13.844 8.65814 14 8.0841 14 7.5C14 6.9159 13.844 6.34186 13.5392 5.88464C13.239 5.43441 12.7145 5 12 5C11.2855 5 10.761 5.43441 10.4608 5.88464C10.156 6.34186 10 6.9159 10 7.5C10 8.0841 10.156 8.65814 10.4608 9.11536C10.761 9.56559 11.2855 10 12 10Z"/><ellipse cx="12" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 12 16)"/></svg>', xe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 10C10.7145 10 11.239 9.56559 11.5392 9.11536C11.844 8.65814 12 8.0841 12 7.5C12 6.9159 11.844 6.34186 11.5392 5.88464C11.239 5.43441 10.7145 5 10 5C9.28547 5 8.761 5.43441 8.46084 5.88464C8.15603 6.34186 8 6.9159 8 7.5C8 8.0841 8.15603 8.65814 8.46084 9.11536C8.761 9.56559 9.28547 10 10 10Z"/><ellipse cx="10" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 10 16)"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.5555 10.2222C16.5374 10.2222 17.3333 9.42629 17.3333 8.44445C17.3333 7.46261 16.5374 6.66667 15.5555 6.66667"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.5 13C21 14.5 20.5 18 18 18.5"/></svg>', Ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
        },
        function(e, t1) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1);
            };
        },
        function(e, t1) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e;
            };
        },
        function(e, t1, n) {
            "use strict";
            if (n(17)) {
                var o = n(46), r = n(10), i = n(11), a = n(0), s = n(81), l = n(110), c = n(31), u = n(59), f = n(44), d = n(27), p = n(60), h = n(33), v = n(15), g = n(144), y = n(48), k = n(42), b = n(26), m = n(64), w = n(13), x = n(22), C = n(102), S = n(49), T = n(51), E = n(50).f, B = n(104), M = n(45), _ = n(14), O = n(36), I = n(71), L = n(65), P = n(106), j = n(57), R = n(74), A = n(58), N = n(105), D = n(135), F = n(18), H = n(34), W = F.f, U = H.f, z = r.RangeError, V = r.TypeError, Y = r.Uint8Array, X = Array.prototype, G = l.ArrayBuffer, K = l.DataView, Z = O(0), q = O(2), J = O(3), $ = O(4), Q = O(5), ee = O(6), te = I(!0), ne = I(!1), oe = P.values, re = P.keys, ie = P.entries, ae = X.lastIndexOf, se = X.reduce, le = X.reduceRight, ce = X.join, ue = X.sort, fe = X.slice, de = X.toString, pe = X.toLocaleString, he = _("iterator"), ve = _("toStringTag"), ge = M("typed_constructor"), ye = M("def_constructor"), ke = s.CONSTR, be = s.TYPED, me = s.VIEW, we = O(1, function(e, t1) {
                    return Ee(L(e, e[ye]), t1);
                }), xe = i(function() {
                    return 1 === new Y(new Uint16Array([
                        1
                    ]).buffer)[0];
                }), Ce = !!Y && !!Y.prototype.set && i(function() {
                    new Y(1).set({});
                }), Se = function(e, t1) {
                    var n = h(e);
                    if (n < 0 || n % t1) throw z("Wrong offset!");
                    return n;
                }, Te = function(e) {
                    if (w(e) && be in e) return e;
                    throw V(e + " is not a typed array!");
                }, Ee = function(e, t1) {
                    if (!w(e) || !(ge in e)) throw V("It is not a typed array constructor!");
                    return new e(t1);
                }, Be = function(e, t1) {
                    return Me(L(e, e[ye]), t1);
                }, Me = function(e, t1) {
                    for(var n = 0, o = t1.length, r = Ee(e, o); o > n;)r[n] = t1[n++];
                    return r;
                }, _e = function(e, t1, n) {
                    W(e, t1, {
                        get: function() {
                            return this._d[n];
                        }
                    });
                }, Oe = function(e) {
                    var t1, n, o, r, i, a, s = x(e), l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, d = B(s);
                    if (null != d && !C(d)) {
                        for(a = d.call(s), o = [], t1 = 0; !(i = a.next()).done; t1++)o.push(i.value);
                        s = o;
                    }
                    for(f && l > 2 && (u = c(u, arguments[2], 2)), t1 = 0, n = v(s.length), r = Ee(this, n); n > t1; t1++)r[t1] = f ? u(s[t1], t1) : s[t1];
                    return r;
                }, Ie = function() {
                    for(var e = 0, t1 = arguments.length, n = Ee(this, t1); t1 > e;)n[e] = arguments[e++];
                    return n;
                }, Le = !!Y && i(function() {
                    pe.call(new Y(1));
                }), Pe = function() {
                    return pe.apply(Le ? fe.call(Te(this)) : Te(this), arguments);
                }, je = {
                    copyWithin: function(e, t1) {
                        return D.call(Te(this), e, t1, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    every: function(e) {
                        return $(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    fill: function(e) {
                        return N.apply(Te(this), arguments);
                    },
                    filter: function(e) {
                        return Be(this, q(Te(this), e, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    find: function(e) {
                        return Q(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    findIndex: function(e) {
                        return ee(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    forEach: function(e) {
                        Z(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    indexOf: function(e) {
                        return ne(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    includes: function(e) {
                        return te(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    join: function(e) {
                        return ce.apply(Te(this), arguments);
                    },
                    lastIndexOf: function(e) {
                        return ae.apply(Te(this), arguments);
                    },
                    map: function(e) {
                        return we(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    reduce: function(e) {
                        return se.apply(Te(this), arguments);
                    },
                    reduceRight: function(e) {
                        return le.apply(Te(this), arguments);
                    },
                    reverse: function() {
                        for(var e, t1 = Te(this).length, n = Math.floor(t1 / 2), o = 0; o < n;)e = this[o], this[o++] = this[--t1], this[t1] = e;
                        return this;
                    },
                    some: function(e) {
                        return J(Te(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    sort: function(e) {
                        return ue.call(Te(this), e);
                    },
                    subarray: function(e, t1) {
                        var n = Te(this), o = n.length, r = y(e, o);
                        return new (L(n, n[ye]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === t1 ? o : y(t1, o)) - r));
                    }
                }, Re = function(e, t1) {
                    return Be(this, fe.call(Te(this), e, t1));
                }, Ae = function(e) {
                    Te(this);
                    var t1 = Se(arguments[1], 1), n = this.length, o = x(e), r = v(o.length), i = 0;
                    if (r + t1 > n) throw z("Wrong length!");
                    for(; i < r;)this[t1 + i] = o[i++];
                }, Ne = {
                    entries: function() {
                        return ie.call(Te(this));
                    },
                    keys: function() {
                        return re.call(Te(this));
                    },
                    values: function() {
                        return oe.call(Te(this));
                    }
                }, De = function(e, t1) {
                    return w(e) && e[be] && "symbol" != typeof t1 && t1 in e && String(+t1) == String(t1);
                }, Fe = function(e, t1) {
                    return De(e, t1 = k(t1, !0)) ? f(2, e[t1]) : U(e, t1);
                }, He = function(e, t1, n) {
                    return !(De(e, t1 = k(t1, !0)) && w(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? W(e, t1, n) : (e[t1] = n.value, e);
                };
                ke || (H.f = Fe, F.f = He), a(a.S + a.F * !ke, "Object", {
                    getOwnPropertyDescriptor: Fe,
                    defineProperty: He
                }), i(function() {
                    de.call({});
                }) && (de = pe = function() {
                    return ce.call(this);
                });
                var We = p({}, je);
                p(We, Ne), d(We, he, Ne.values), p(We, {
                    slice: Re,
                    set: Ae,
                    constructor: function() {},
                    toString: de,
                    toLocaleString: Pe
                }), _e(We, "buffer", "b"), _e(We, "byteOffset", "o"), _e(We, "byteLength", "l"), _e(We, "length", "e"), W(We, ve, {
                    get: function() {
                        return this[be];
                    }
                }), e.exports = function(e, t1, n, l) {
                    var c = e + ((l = !!l) ? "Clamped" : "") + "Array", f = "get" + e, p = "set" + e, h = r[c], y = h || {}, k = h && T(h), b = !h || !s.ABV, x = {}, C = h && h.prototype, B = function(e, n) {
                        W(e, n, {
                            get: function() {
                                return function(e, n) {
                                    var o = e._d;
                                    return o.v[f](n * t1 + o.o, xe);
                                }(this, n);
                            },
                            set: function(e) {
                                return function(e, n, o) {
                                    var r = e._d;
                                    l && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p](n * t1 + r.o, o, xe);
                                }(this, n, e);
                            },
                            enumerable: !0
                        });
                    };
                    b ? (h = n(function(e, n, o, r) {
                        u(e, h, c, "_d");
                        var i, a, s, l, f = 0, p = 0;
                        if (w(n)) {
                            if (!(n instanceof G || "ArrayBuffer" == (l = m(n)) || "SharedArrayBuffer" == l)) return be in n ? Me(h, n) : Oe.call(h, n);
                            i = n, p = Se(o, t1);
                            var y = n.byteLength;
                            if (void 0 === r) {
                                if (y % t1) throw z("Wrong length!");
                                if ((a = y - p) < 0) throw z("Wrong length!");
                            } else if ((a = v(r) * t1) + p > y) throw z("Wrong length!");
                            s = a / t1;
                        } else s = g(n), i = new G(a = s * t1);
                        for(d(e, "_d", {
                            b: i,
                            o: p,
                            l: a,
                            e: s,
                            v: new K(i)
                        }); f < s;)B(e, f++);
                    }), C = h.prototype = S(We), d(C, "constructor", h)) : i(function() {
                        h(1);
                    }) && i(function() {
                        new h(-1);
                    }) && R(function(e) {
                        new h, new h(null), new h(1.5), new h(e);
                    }, !0) || (h = n(function(e, n, o, r) {
                        var i;
                        return u(e, h, c), w(n) ? n instanceof G || "ArrayBuffer" == (i = m(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y(n, Se(o, t1), r) : void 0 !== o ? new y(n, Se(o, t1)) : new y(n) : be in n ? Me(h, n) : Oe.call(h, n) : new y(g(n));
                    }), Z(k !== Function.prototype ? E(y).concat(E(k)) : E(y), function(e) {
                        e in h || d(h, e, y[e]);
                    }), h.prototype = C, o || (C.constructor = h));
                    var M = C[he], _ = !!M && ("values" == M.name || null == M.name), O = Ne.values;
                    d(h, ge, !0), d(C, be, c), d(C, me, !0), d(C, ye, h), (l ? new h(1)[ve] == c : ve in C) || W(C, ve, {
                        get: function() {
                            return c;
                        }
                    }), x[c] = h, a(a.G + a.W + a.F * (h != y), x), a(a.S, c, {
                        BYTES_PER_ELEMENT: t1
                    }), a(a.S + a.F * i(function() {
                        y.of.call(h, 1);
                    }), c, {
                        from: Oe,
                        of: Ie
                    }), "BYTES_PER_ELEMENT" in C || d(C, "BYTES_PER_ELEMENT", t1), a(a.P, c, je), A(c), a(a.P + a.F * Ce, c, {
                        set: Ae
                    }), a(a.P + a.F * !_, c, Ne), o || C.toString == de || (C.toString = de), a(a.P + a.F * i(function() {
                        new h(1).slice();
                    }), c, {
                        slice: Re
                    }), a(a.P + a.F * (i(function() {
                        return [
                            1,
                            2
                        ].toLocaleString() != new h([
                            1,
                            2
                        ]).toLocaleString();
                    }) || !i(function() {
                        C.toLocaleString.call([
                            1,
                            2
                        ]);
                    })), c, {
                        toLocaleString: Pe
                    }), j[c] = _ ? M : O, o || _ || d(C, he, O);
                };
            } else e.exports = function() {};
        },
        function(e, t1, n) {
            var o = n(369), r = n(370), i = n(148), a = n(371);
            e.exports = function(e) {
                return o(e) || r(e) || i(e) || a();
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(13);
            e.exports = function(e, t1) {
                if (!o(e)) return e;
                var n, r;
                if (t1 && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
                if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
                if (!t1 && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(e, t1, n) {
            var o = n(45)("meta"), r = n(13), i = n(26), a = n(18).f, s = 0, l = Object.isExtensible || function() {
                return !0;
            }, c = !n(11)(function() {
                return l(Object.preventExtensions({}));
            }), u = function(e) {
                a(e, o, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                });
            }, f = e.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(e, t1) {
                    if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, o)) {
                        if (!l(e)) return "F";
                        if (!t1) return "E";
                        u(e);
                    }
                    return e[o].i;
                },
                getWeak: function(e, t1) {
                    if (!i(e, o)) {
                        if (!l(e)) return !0;
                        if (!t1) return !1;
                        u(e);
                    }
                    return e[o].w;
                },
                onFreeze: function(e) {
                    return c && f.NEED && l(e) && !i(e, o) && u(e), e;
                }
            };
        },
        function(e, t1) {
            e.exports = function(e, t1) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t1
                };
            };
        },
        function(e, t1) {
            var n = 0, o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
            };
        },
        function(e, t1) {
            e.exports = !1;
        },
        function(e, t1, n) {
            var o = n(119), r = n(89);
            e.exports = Object.keys || function(e) {
                return o(e, r);
            };
        },
        function(e, t1, n) {
            var o = n(33), r = Math.max, i = Math.min;
            e.exports = function(e, t1) {
                return (e = o(e)) < 0 ? r(e + t1, 0) : i(e, t1);
            };
        },
        function(e, t1, n) {
            var o = n(12), r = n(120), i = n(89), a = n(88)("IE_PROTO"), s = function() {}, l = function() {
                var e, t1 = n(86)("iframe"), o = i.length;
                for(t1.style.display = "none", n(90).appendChild(t1), t1.src = "javascript:", (e = t1.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), l = e.F; o--;)delete l.prototype[i[o]];
                return l();
            };
            e.exports = Object.create || function(e, t1) {
                var n;
                return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t1 ? n : r(n, t1);
            };
        },
        function(e, t1, n) {
            var o = n(119), r = n(89).concat("length", "prototype");
            t1.f = Object.getOwnPropertyNames || function(e) {
                return o(e, r);
            };
        },
        function(e, t1, n) {
            var o = n(26), r = n(22), i = n(88)("IE_PROTO"), a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
        },
        function(e, t1, n) {
            var o = n(14)("unscopables"), r = Array.prototype;
            null == r[o] && n(27)(r, o, {}), e.exports = function(e) {
                r[o][e] = !0;
            };
        },
        function(e, t1, n) {
            var o = n(13);
            e.exports = function(e, t1) {
                if (!o(e) || e._t !== t1) throw TypeError("Incompatible receiver, " + t1 + " required!");
                return e;
            };
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(150)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e);
                    }
                    return (0, i.default)(e, null, [
                        {
                            key: "ui",
                            value: function(t1, n) {
                                return e._t(t1, n);
                            }
                        },
                        {
                            key: "t",
                            value: function(t1, n) {
                                return e._t(t1, n);
                            }
                        },
                        {
                            key: "setDictionary",
                            value: function(t1) {
                                e.currentDictionary = t1;
                            }
                        },
                        {
                            key: "_t",
                            value: function(t1, n) {
                                var o = e.getNamespace(t1);
                                return o && o[n] ? o[n] : n;
                            }
                        },
                        {
                            key: "getNamespace",
                            value: function(t1) {
                                return t1.split(".").reduce(function(e, t1) {
                                    return e && Object.keys(e).length ? e[t1] : {};
                                }, e.currentDictionary);
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "I18n", l.currentDictionary = a.default, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(18).f, r = n(26), i = n(14)("toStringTag");
            e.exports = function(e, t1, n) {
                e && !r(e = n ? e : e.prototype, i) && o(e, i, {
                    configurable: !0,
                    value: t1
                });
            };
        },
        function(e, t1, n) {
            var o = n(0), r = n(39), i = n(11), a = n(92), s = "[" + a + "]", l = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), u = function(e, t1, n) {
                var r = {}, s = i(function() {
                    return !!a[e]() || "​\x85" != "​\x85"[e]();
                }), l = r[e] = s ? t1(f) : a[e];
                n && (r[n] = l), o(o.P + o.F * s, "String", r);
            }, f = u.trim = function(e, t1) {
                return e = String(r(e)), 1 & t1 && (e = e.replace(l, "")), 2 & t1 && (e = e.replace(c, "")), e;
            };
            e.exports = u;
        },
        function(e, t1) {
            e.exports = {};
        },
        function(e, t1, n) {
            "use strict";
            var o = n(10), r = n(18), i = n(17), a = n(14)("species");
            e.exports = function(e) {
                var t1 = o[e];
                i && t1 && !t1[a] && r.f(t1, a, {
                    configurable: !0,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        function(e, t1) {
            e.exports = function(e, t1, n, o) {
                if (!(e instanceof t1) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
                return e;
            };
        },
        function(e, t1, n) {
            var o = n(23);
            e.exports = function(e, t1, n) {
                for(var r in t1)o(e, r, t1[r], n);
                return e;
            };
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(30),
                n(21),
                n(41),
                n(2),
                n(3),
                n(152),
                n(114),
                n(5),
                n(6),
                n(4),
                n(19),
                n(8),
                n(113),
                n(25),
                n(82)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r, i, s, l, c, u, f, d, p, h, v, g, y, k) {
                "use strict";
                var b, m = n(1);
                function w(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (w = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function x(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = e.BlockToolAPI = void 0, t1 = m(t1), o = m(o), r = m(r), i = m(i), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = m(h), v = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = w(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(v), g = m(g), y = m(y), k = m(k), e.BlockToolAPI = b, function(e) {
                    e.APPEND_CALLBACK = "appendCallback", e.RENDERED = "rendered", e.MOVED = "moved", e.UPDATED = "updated", e.REMOVED = "removed", e.ON_PASTE = "onPaste";
                }(b || (e.BlockToolAPI = b = {}));
                var C = function(e) {
                    (0, f.default)(w, e);
                    var n, a, d, k, m = x(w);
                    function w(e) {
                        var t1, n = e.id, o = void 0 === n ? v.generateBlockId() : n, r = e.data, a = e.tool, l = e.api, u = e.readOnly, f = e.tunesData;
                        return (0, s.default)(this, w), (t1 = m.call(this)).cachedInputs = [], t1.tunesInstances = new Map, t1.defaultTunesInstances = new Map, t1.unavailableTunesData = {}, t1.inputIndex = 0, t1.modificationDebounceTimer = 450, t1.didMutated = v.debounce(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = e instanceof InputEvent || !e.some(function(e) {
                                var t1 = e.addedNodes, n = void 0 === t1 ? [] : t1, o = e.removedNodes;
                                return [].concat((0, i.default)(Array.from(n)), (0, i.default)(Array.from(o))).some(function(e) {
                                    return h.default.isElement(e) && "true" === e.dataset.mutationFree;
                                });
                            });
                            n && (t1.cachedInputs = [], t1.updateCurrentInput(), t1.call(b.UPDATED), t1.emit("didMutated", (0, c.default)(t1)));
                        }, t1.modificationDebounceTimer), t1.handleFocus = function() {
                            t1.cachedInputs = [], t1.updateCurrentInput();
                        }, t1.name = a.name, t1.id = o, t1.settings = a.settings, t1.config = a.settings.config || {}, t1.api = l, t1.blockAPI = new g.default((0, c.default)(t1)), t1.mutationObserver = new MutationObserver(t1.didMutated), t1.tool = a, t1.toolInstance = a.create(r, t1.blockAPI, u), t1.tunes = a.tunes, t1.composeTunes(f), t1.holder = t1.compose(), t1;
                    }
                    return (0, l.default)(w, [
                        {
                            key: "inputs",
                            get: function() {
                                if (0 !== this.cachedInputs.length) return this.cachedInputs;
                                var e = h.default.findAllInputs(this.holder);
                                return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
                            }
                        },
                        {
                            key: "currentInput",
                            get: function() {
                                return this.inputs[this.inputIndex];
                            },
                            set: function(e) {
                                var t1 = this.inputs.findIndex(function(t1) {
                                    return t1 === e || t1.contains(e);
                                });
                                -1 !== t1 && (this.inputIndex = t1);
                            }
                        },
                        {
                            key: "firstInput",
                            get: function() {
                                return this.inputs[0];
                            }
                        },
                        {
                            key: "lastInput",
                            get: function() {
                                var e = this.inputs;
                                return e[e.length - 1];
                            }
                        },
                        {
                            key: "nextInput",
                            get: function() {
                                return this.inputs[this.inputIndex + 1];
                            }
                        },
                        {
                            key: "previousInput",
                            get: function() {
                                return this.inputs[this.inputIndex - 1];
                            }
                        },
                        {
                            key: "data",
                            get: function() {
                                return this.save().then(function(e) {
                                    return e && !v.isEmpty(e.data) ? e.data : {};
                                });
                            }
                        },
                        {
                            key: "sanitize",
                            get: function() {
                                return this.tool.sanitizeConfig;
                            }
                        },
                        {
                            key: "mergeable",
                            get: function() {
                                return v.isFunction(this.toolInstance.merge);
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                var e = h.default.isEmpty(this.pluginsContent), t1 = !this.hasMedia;
                                return e && t1;
                            }
                        },
                        {
                            key: "hasMedia",
                            get: function() {
                                return !!this.holder.querySelector([
                                    "img",
                                    "iframe",
                                    "video",
                                    "audio",
                                    "source",
                                    "input",
                                    "textarea",
                                    "twitterwidget"
                                ].join(","));
                            }
                        },
                        {
                            key: "focused",
                            get: function() {
                                return this.holder.classList.contains(w.CSS.focused);
                            },
                            set: function(e) {
                                this.holder.classList.toggle(w.CSS.focused, e);
                            }
                        },
                        {
                            key: "selected",
                            get: function() {
                                return this.holder.classList.contains(w.CSS.selected);
                            },
                            set: function(e) {
                                e ? (this.holder.classList.add(w.CSS.selected), y.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(w.CSS.selected), y.default.removeFakeCursor(this.holder));
                            }
                        },
                        {
                            key: "stretched",
                            get: function() {
                                return this.holder.classList.contains(w.CSS.wrapperStretched);
                            },
                            set: function(e) {
                                this.holder.classList.toggle(w.CSS.wrapperStretched, e);
                            }
                        },
                        {
                            key: "dropTarget",
                            set: function(e) {
                                this.holder.classList.toggle(w.CSS.dropTarget, e);
                            }
                        },
                        {
                            key: "pluginsContent",
                            get: function() {
                                var e = this.holder.querySelector(".".concat(w.CSS.content));
                                if (e && e.childNodes.length) for(var t1 = e.childNodes.length - 1; t1 >= 0; t1--){
                                    var n = e.childNodes[t1];
                                    if (!h.default.isExtensionNode(n)) return n;
                                }
                                return null;
                            }
                        },
                        {
                            key: "call",
                            value: function(e, t1) {
                                if (v.isFunction(this.toolInstance[e])) {
                                    e === b.APPEND_CALLBACK && v.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                                    try {
                                        this.toolInstance[e].call(this.toolInstance, t1);
                                    } catch (t1) {
                                        v.log("Error during '".concat(e, "' call: ").concat(t1.message), "error");
                                    }
                                }
                            }
                        },
                        {
                            key: "mergeWith",
                            value: (k = (0, r.default)(t1.default.mark(function e(n) {
                                return t1.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return e.next = 2, this.toolInstance.merge(n);
                                        case 2:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "save",
                            value: (d = (0, r.default)(t1.default.mark(function e() {
                                var n, r, a, s, l = this;
                                return t1.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return e.next = 2, this.toolInstance.save(this.pluginsContent);
                                        case 2:
                                            return n = e.sent, r = this.unavailableTunesData, [].concat((0, i.default)(this.tunesInstances.entries()), (0, i.default)(this.defaultTunesInstances.entries())).forEach(function(e) {
                                                var t1 = (0, o.default)(e, 2), n = t1[0], i = t1[1];
                                                if (v.isFunction(i.save)) try {
                                                    r[n] = i.save();
                                                } catch (e) {
                                                    v.log("Tune ".concat(i.constructor.name, " save method throws an Error %o"), "warn", e);
                                                }
                                            }), a = window.performance.now(), e.abrupt("return", Promise.resolve(n).then(function(e) {
                                                return s = window.performance.now(), {
                                                    id: l.id,
                                                    tool: l.name,
                                                    data: e,
                                                    tunes: r,
                                                    time: s - a
                                                };
                                            }).catch(function(e) {
                                                v.log("Saving process for ".concat(l.name, " tool failed due to the ").concat(e), "log", "red");
                                            }));
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return d.apply(this, arguments);
                            })
                        },
                        {
                            key: "validate",
                            value: (a = (0, r.default)(t1.default.mark(function e(n) {
                                var o;
                                return t1.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = !0, !(this.toolInstance.validate instanceof Function)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.next = 4, this.toolInstance.validate(n);
                                        case 4:
                                            o = e.sent;
                                        case 5:
                                            return e.abrupt("return", o);
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return a.apply(this, arguments);
                            })
                        },
                        {
                            key: "getTunes",
                            value: function() {
                                var e = document.createElement("div"), t1 = [];
                                return [
                                    "function" == typeof this.toolInstance.renderSettings ? this.toolInstance.renderSettings() : [],
                                    [].concat((0, i.default)(this.tunesInstances.values()), (0, i.default)(this.defaultTunesInstances.values())).map(function(e) {
                                        return e.render();
                                    })
                                ].flat().forEach(function(n) {
                                    h.default.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t1.push.apply(t1, (0, i.default)(n)) : t1.push(n);
                                }), [
                                    t1,
                                    e
                                ];
                            }
                        },
                        {
                            key: "updateCurrentInput",
                            value: function() {
                                this.currentInput = h.default.isNativeInput(document.activeElement) || !y.default.anchorNode ? document.activeElement : y.default.anchorNode;
                            }
                        },
                        {
                            key: "willSelect",
                            value: function() {
                                this.mutationObserver.observe(this.holder.firstElementChild, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), this.addInputEvents();
                            }
                        },
                        {
                            key: "willUnselect",
                            value: function() {
                                this.mutationObserver.disconnect(), this.removeInputEvents();
                            }
                        },
                        {
                            key: "dispatchChange",
                            value: function() {
                                this.didMutated();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                (0, u.default)((0, p.default)(w.prototype), "destroy", this).call(this), v.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
                            }
                        },
                        {
                            key: "getActiveToolboxEntry",
                            value: (n = (0, r.default)(t1.default.mark(function e() {
                                var n, r, i;
                                return t1.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (1 !== (n = this.tool.toolbox).length) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return", Promise.resolve(this.tool.toolbox[0]));
                                        case 3:
                                            return e.next = 5, this.data;
                                        case 5:
                                            return r = e.sent, i = n, e.abrupt("return", i.find(function(e) {
                                                return Object.entries(e.data).some(function(e) {
                                                    var t1 = (0, o.default)(e, 2), n = t1[0], i = t1[1];
                                                    return r[n] && v.equals(r[n], i);
                                                });
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "compose",
                            value: function() {
                                var e = h.default.make("div", w.CSS.wrapper), t1 = h.default.make("div", w.CSS.content), n = this.toolInstance.render();
                                t1.appendChild(n);
                                var o = t1;
                                return [].concat((0, i.default)(this.tunesInstances.values()), (0, i.default)(this.defaultTunesInstances.values())).forEach(function(e) {
                                    if (v.isFunction(e.wrap)) try {
                                        o = e.wrap(o);
                                    } catch (t1) {
                                        v.log("Tune ".concat(e.constructor.name, " wrap method throws an Error %o"), "warn", t1);
                                    }
                                }), e.appendChild(o), e;
                            }
                        },
                        {
                            key: "composeTunes",
                            value: function(e) {
                                var t1 = this;
                                Array.from(this.tunes.values()).forEach(function(n) {
                                    (n.isInternal ? t1.defaultTunesInstances : t1.tunesInstances).set(n.name, n.create(e[n.name], t1.blockAPI));
                                }), Object.entries(e).forEach(function(e) {
                                    var n = (0, o.default)(e, 2), r = n[0], i = n[1];
                                    t1.tunesInstances.has(r) || (t1.unavailableTunesData[r] = i);
                                });
                            }
                        },
                        {
                            key: "addInputEvents",
                            value: function() {
                                var e = this;
                                this.inputs.forEach(function(t1) {
                                    t1.addEventListener("focus", e.handleFocus), h.default.isNativeInput(t1) && t1.addEventListener("input", e.didMutated);
                                });
                            }
                        },
                        {
                            key: "removeInputEvents",
                            value: function() {
                                var e = this;
                                this.inputs.forEach(function(t1) {
                                    t1.removeEventListener("focus", e.handleFocus), h.default.isNativeInput(t1) && t1.removeEventListener("input", e.didMutated);
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-block",
                                    wrapperStretched: "ce-block--stretched",
                                    content: "ce-block__content",
                                    focused: "ce-block--focused",
                                    selected: "ce-block--selected",
                                    dropTarget: "ce-block--drop-target"
                                };
                            }
                        }
                    ]), w;
                }(k.default);
                e.default = C, C.displayName = "Block";
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(38);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == o(e) ? e.split("") : Object(e);
            };
        },
        function(e, t1) {
            t1.f = ({}).propertyIsEnumerable;
        },
        function(e, t1, n) {
            var o = n(38), r = n(14)("toStringTag"), i = "Arguments" == o(function() {
                return arguments;
            }());
            e.exports = function(e) {
                var t1, n, a;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t1) {
                    try {
                        return e[t1];
                    } catch (e) {}
                }(t1 = Object(e), r)) ? n : i ? o(t1) : "Object" == (a = o(t1)) && "function" == typeof t1.callee ? "Arguments" : a;
            };
        },
        function(e, t1, n) {
            var o = n(12), r = n(32), i = n(14)("species");
            e.exports = function(e, t1) {
                var n, a = o(e).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? t1 : r(n);
            };
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(8),
                n(380)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o) {
                "use strict";
                var r = n(1);
                function i(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (i = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function s(e) {
                    var t1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        tags: t1
                    }, r = new o.default(n);
                    return r.clean(e);
                }
                function l(e, n) {
                    var o, r, i;
                    return Array.isArray(e) ? (i = n, e.map(function(e) {
                        return l(e, i);
                    })) : t1.isObject(e) ? function(e, n) {
                        var o, r = {};
                        for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = e[i], s = (o = n[i], t1.isObject(o) || t1.isBoolean(o) || t1.isFunction(o) ? n[i] : n);
                            r[i] = l(a, s);
                        }
                        return r;
                    }(e, n) : t1.isString(e) ? (o = e, r = n, t1.isObject(r) ? s(o, r) : !1 === r ? s(o, {}) : o) : e;
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.clean = s, e.sanitizeBlocks = function(e, n) {
                    return e.map(function(e) {
                        var o = t1.isFunction(n) ? n(e.tool) : n;
                        return t1.isEmpty(o) || (e.data = l(e.data, o)), e;
                    });
                }, t1 = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = i(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var s in e)if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        l && (l.get || l.set) ? Object.defineProperty(o, s, l) : o[s] = e[s];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(t1), o = r(o);
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(382),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l) {
                "use strict";
                var c = n(1);
                function u(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (u = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), s = c(s), l = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = u(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(l);
                var f = function() {
                    function e(t1) {
                        var n = this;
                        (0, r.default)(this, e), this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = function(t1) {
                            if (n.isEventReadyForHandling(t1)) switch(e.usedKeys.includes(t1.keyCode) && t1.preventDefault(), t1.keyCode){
                                case l.keyCodes.TAB:
                                    n.handleTabPress(t1);
                                    break;
                                case l.keyCodes.LEFT:
                                case l.keyCodes.UP:
                                    n.flipLeft();
                                    break;
                                case l.keyCodes.RIGHT:
                                case l.keyCodes.DOWN:
                                    n.flipRight();
                                    break;
                                case l.keyCodes.ENTER:
                                    n.handleEnterPress(t1);
                            }
                        }, this.iterator = new s.default(t1.items, t1.focusedItemClass), this.activateCallback = t1.activateCallback, this.allowedKeys = t1.allowedKeys || e.usedKeys;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "isActivated",
                            get: function() {
                                return this.activated;
                            }
                        },
                        {
                            key: "activate",
                            value: function(e, t1) {
                                this.activated = !0, e && this.iterator.setItems(e), void 0 !== t1 && this.iterator.setCursor(t1), document.addEventListener("keydown", this.onKeyDown, !0);
                            }
                        },
                        {
                            key: "deactivate",
                            value: function() {
                                this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "focusFirst",
                            value: function() {
                                this.dropCursor(), this.flipRight();
                            }
                        },
                        {
                            key: "flipLeft",
                            value: function() {
                                this.iterator.previous(), this.flipCallback();
                            }
                        },
                        {
                            key: "flipRight",
                            value: function() {
                                this.iterator.next(), this.flipCallback();
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                return !!this.iterator.currentItem;
                            }
                        },
                        {
                            key: "onFlip",
                            value: function(e) {
                                this.flipCallbacks.push(e);
                            }
                        },
                        {
                            key: "removeOnFlip",
                            value: function(e) {
                                this.flipCallbacks = this.flipCallbacks.filter(function(t1) {
                                    return t1 !== e;
                                });
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                this.iterator.dropCursor();
                            }
                        },
                        {
                            key: "isEventReadyForHandling",
                            value: function(e) {
                                return this.activated && this.allowedKeys.includes(e.keyCode);
                            }
                        },
                        {
                            key: "handleTabPress",
                            value: function(e) {
                                switch(e.shiftKey ? s.default.directions.LEFT : s.default.directions.RIGHT){
                                    case s.default.directions.RIGHT:
                                        this.flipRight();
                                        break;
                                    case s.default.directions.LEFT:
                                        this.flipLeft();
                                }
                            }
                        },
                        {
                            key: "handleEnterPress",
                            value: function(e) {
                                this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), l.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
                            }
                        },
                        {
                            key: "flipCallback",
                            value: function() {
                                this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach(function(e) {
                                    return e();
                                });
                            }
                        }
                    ], [
                        {
                            key: "usedKeys",
                            get: function() {
                                return [
                                    l.keyCodes.TAB,
                                    l.keyCodes.LEFT,
                                    l.keyCodes.RIGHT,
                                    l.keyCodes.ENTER,
                                    l.keyCodes.UP,
                                    l.keyCodes.DOWN
                                ];
                            }
                        }
                    ]), e;
                }();
                o.default = f, f.displayName = "Flipper", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(30),
                n(150),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r) {
                "use strict";
                var i = n(1);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.I18nInternalNS = void 0, t1 = i(t1);
                var a = function e(n, o) {
                    var i = {};
                    return Object.entries(n).forEach(function(n) {
                        var a = (0, t1.default)(n, 2), s = a[0], l = a[1];
                        if ((0, r.isObject)(l)) {
                            var c = o ? "".concat(o, ".").concat(s) : s, u = Object.values(l).every(function(e) {
                                return (0, r.isString)(e);
                            });
                            i[s] = u ? c : e(l, c);
                        } else i[s] = l;
                    }), i;
                }((o = i(o)).default);
                e.I18nInternalNS = a;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r) {
                "use strict";
                var i, s, l, c, u, f, d = n(1);
                function p(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (p = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = e.UserSettings = e.ToolType = e.InternalTuneSettings = e.InternalInlineToolSettings = e.InternalBlockToolSettings = e.CommonInternalSettings = void 0, t1 = d(t1), o = d(o), r = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(r), e.ToolType = i, function(e) {
                    e[e.Block = 0] = "Block", e[e.Inline = 1] = "Inline", e[e.Tune = 2] = "Tune";
                }(i || (e.ToolType = i = {})), e.UserSettings = s, function(e) {
                    e.Shortcut = "shortcut", e.Toolbox = "toolbox", e.EnabledInlineTools = "inlineToolbar", e.EnabledBlockTunes = "tunes", e.Config = "config";
                }(s || (e.UserSettings = s = {})), e.CommonInternalSettings = l, function(e) {
                    e.Shortcut = "shortcut", e.SanitizeConfig = "sanitize";
                }(l || (e.CommonInternalSettings = l = {})), e.InternalBlockToolSettings = c, function(e) {
                    e.IsEnabledLineBreaks = "enableLineBreaks", e.Toolbox = "toolbox", e.ConversionConfig = "conversionConfig", e.IsReadOnlySupported = "isReadOnlySupported", e.PasteConfig = "pasteConfig";
                }(c || (e.InternalBlockToolSettings = c = {})), e.InternalInlineToolSettings = u, function(e) {
                    e.IsInline = "isInline", e.Title = "title";
                }(u || (e.InternalInlineToolSettings = u = {})), e.InternalTuneSettings = f, function(e) {
                    e.IsTune = "isTune";
                }(f || (e.InternalTuneSettings = f = {}));
                var h = function() {
                    function e(n) {
                        var o = n.name, r = n.constructable, i = n.config, a = n.api, s = n.isDefault, l = n.isInternal, c = void 0 !== l && l, u = n.defaultPlaceholder;
                        (0, t1.default)(this, e), this.api = a, this.name = o, this.constructable = r, this.config = i, this.isDefault = s, this.isInternal = c, this.defaultPlaceholder = u;
                    }
                    return (0, o.default)(e, [
                        {
                            key: "settings",
                            get: function() {
                                var e = this.config[s.Config] || {};
                                return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
                            }
                        },
                        {
                            key: "reset",
                            value: function() {
                                if (r.isFunction(this.constructable.reset)) return this.constructable.reset();
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                if (r.isFunction(this.constructable.prepare)) return this.constructable.prepare({
                                    toolName: this.name,
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                var e = this.constructable[l.Shortcut];
                                return this.config[s.Shortcut] || e;
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                return this.constructable[l.SanitizeConfig] || {};
                            }
                        },
                        {
                            key: "isInline",
                            value: function() {
                                return this.type === i.Inline;
                            }
                        },
                        {
                            key: "isBlock",
                            value: function() {
                                return this.type === i.Block;
                            }
                        },
                        {
                            key: "isTune",
                            value: function() {
                                return this.type === i.Tune;
                            }
                        }
                    ]), e;
                }();
                e.default = h, h.displayName = "BaseTool";
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(16), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            (e.exports = function(e, t1) {
                return i[e] || (i[e] = void 0 !== t1 ? t1 : {});
            })("versions", []).push({
                version: o.version,
                mode: n(46) ? "pure" : "global",
                copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
            });
        },
        function(e, t1, n) {
            var o = n(28), r = n(15), i = n(48);
            e.exports = function(e) {
                return function(t1, n, a) {
                    var s, l = o(t1), c = r(l.length), u = i(a, c);
                    if (e && n != n) {
                        for(; c > u;)if ((s = l[u++]) != s) return !0;
                    } else for(; c > u; u++)if ((e || u in l) && l[u] === n) return e || u || 0;
                    return !e && -1;
                };
            };
        },
        function(e, t1) {
            t1.f = Object.getOwnPropertySymbols;
        },
        function(e, t1, n) {
            var o = n(38);
            e.exports = Array.isArray || function(e) {
                return "Array" == o(e);
            };
        },
        function(e, t1, n) {
            var o = n(14)("iterator"), r = !1;
            try {
                var i = [
                    7
                ][o]();
                i.return = function() {
                    r = !0;
                }, Array.from(i, function() {
                    throw 2;
                });
            } catch (e) {}
            e.exports = function(e, t1) {
                if (!t1 && !r) return !1;
                var n = !1;
                try {
                    var i = [
                        7
                    ], a = i[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        };
                    }, i[o] = function() {
                        return a;
                    }, e(i);
                } catch (e) {}
                return n;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(12);
            e.exports = function() {
                var e = o(this), t1 = "";
                return e.global && (t1 += "g"), e.ignoreCase && (t1 += "i"), e.multiline && (t1 += "m"), e.unicode && (t1 += "u"), e.sticky && (t1 += "y"), t1;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(64), r = RegExp.prototype.exec;
            e.exports = function(e, t1) {
                var n = e.exec;
                if ("function" == typeof n) {
                    var i = n.call(e, t1);
                    if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return i;
                }
                if ("RegExp" !== o(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return r.call(e, t1);
            };
        },
        function(e, t1, n) {
            "use strict";
            n(137);
            var o = n(23), r = n(27), i = n(11), a = n(39), s = n(14), l = n(107), c = s("species"), u = !i(function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e;
                }, "7" !== "".replace(e, "$<a>");
            }), f = function() {
                var e = /(?:)/, t1 = e.exec;
                e.exec = function() {
                    return t1.apply(this, arguments);
                };
                var n = "ab".split(e);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            }();
            e.exports = function(e, t1, n) {
                var d = s(e), p = !i(function() {
                    var t1 = {};
                    return t1[d] = function() {
                        return 7;
                    }, 7 != ""[e](t1);
                }), h = p ? !i(function() {
                    var t1 = !1, n = /a/;
                    return n.exec = function() {
                        return t1 = !0, null;
                    }, "split" === e && (n.constructor = {}, n.constructor[c] = function() {
                        return n;
                    }), n[d](""), !t1;
                }) : void 0;
                if (!p || !h || "replace" === e && !u || "split" === e && !f) {
                    var v = /./[d], g = n(a, d, ""[e], function(e, t1, n, o, r) {
                        return t1.exec === l ? p && !r ? {
                            done: !0,
                            value: v.call(t1, n, o)
                        } : {
                            done: !0,
                            value: e.call(n, t1, o)
                        } : {
                            done: !1
                        };
                    }), y = g[0], k = g[1];
                    o(String.prototype, e, y), r(RegExp.prototype, d, 2 == t1 ? function(e, t1) {
                        return k.call(e, this, t1);
                    } : function(e) {
                        return k.call(e, this);
                    });
                }
            };
        },
        function(e, t1, n) {
            var o = n(31), r = n(132), i = n(102), a = n(12), s = n(15), l = n(104), c = {}, u = {};
            (t1 = e.exports = function(e, t1, n, f, d) {
                var p, h, v, g, y = d ? function() {
                    return e;
                } : l(e), k = o(n, f, t1 ? 2 : 1), b = 0;
                if ("function" != typeof y) throw TypeError(e + " is not iterable!");
                if (i(y)) {
                    for(p = s(e.length); p > b; b++)if ((g = t1 ? k(a(h = e[b])[0], h[1]) : k(e[b])) === c || g === u) return g;
                } else for(v = y.call(e); !(h = v.next()).done;)if ((g = r(v, k, h.value, t1)) === c || g === u) return g;
            }).BREAK = c, t1.RETURN = u;
        },
        function(e, t1, n) {
            var o = n(10).navigator;
            e.exports = o && o.userAgent || "";
        },
        function(e, t1, n) {
            "use strict";
            var o = n(10), r = n(0), i = n(23), a = n(60), s = n(43), l = n(78), c = n(59), u = n(13), f = n(11), d = n(74), p = n(55), h = n(93);
            e.exports = function(e, t1, n, v, g, y) {
                var k = o[e], b = k, m = g ? "set" : "add", w = b && b.prototype, x = {}, C = function(e) {
                    var t1 = w[e];
                    i(w, e, "delete" == e || "has" == e ? function(e) {
                        return !(y && !u(e)) && t1.call(this, 0 === e ? 0 : e);
                    } : "get" == e ? function(e) {
                        return y && !u(e) ? void 0 : t1.call(this, 0 === e ? 0 : e);
                    } : "add" == e ? function(e) {
                        return t1.call(this, 0 === e ? 0 : e), this;
                    } : function(e, n) {
                        return t1.call(this, 0 === e ? 0 : e, n), this;
                    });
                };
                if ("function" == typeof b && (y || w.forEach && !f(function() {
                    (new b).entries().next();
                }))) {
                    var S = new b, T = S[m](y ? {} : -0, 1) != S, E = f(function() {
                        S.has(1);
                    }), B = d(function(e) {
                        new b(e);
                    }), M = !y && f(function() {
                        for(var e = new b, t1 = 5; t1--;)e[m](t1, t1);
                        return !e.has(-0);
                    });
                    B || ((b = t1(function(t1, n) {
                        c(t1, b, e);
                        var o = h(new k, t1, b);
                        return null != n && l(n, g, o[m], o), o;
                    })).prototype = w, w.constructor = b), (E || M) && (C("delete"), C("has"), g && C("get")), (M || T) && C(m), y && w.clear && delete w.clear;
                } else b = v.getConstructor(t1, e, g, m), a(b.prototype, n), s.NEED = !0;
                return p(b, e), x[e] = b, r(r.G + r.W + r.F * (b != k), x), y || v.setStrong(b, e, g), b;
            };
        },
        function(e, t1, n) {
            for(var o, r = n(10), i = n(27), a = n(45), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, l, !0)) : u = !1;
            e.exports = {
                ABV: c,
                CONSTR: u,
                TYPED: s,
                VIEW: l
            };
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e), this.subscribers = {};
                    }
                    return (0, i.default)(e, [
                        {
                            key: "on",
                            value: function(e, t1) {
                                e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t1);
                            }
                        },
                        {
                            key: "once",
                            value: function(e, t1) {
                                var n = this;
                                e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(function o(r) {
                                    var i = t1(r), a = n.subscribers[e].indexOf(o);
                                    return -1 !== a && n.subscribers[e].splice(a, 1), i;
                                });
                            }
                        },
                        {
                            key: "emit",
                            value: function(e, t1) {
                                !(0, a.isEmpty)(this.subscribers) && this.subscribers[e] && this.subscribers[e].reduce(function(e, t1) {
                                    return t1(e) || e;
                                }, t1);
                            }
                        },
                        {
                            key: "off",
                            value: function(e, t1) {
                                for(var n = 0; n < this.subscribers[e].length; n++)if (this.subscribers[e][n] === t1) {
                                    delete this.subscribers[e][n];
                                    break;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.subscribers = null;
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "EventsDispatcher", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    blocks: this.Editor.BlocksAPI.methods,
                                    caret: this.Editor.CaretAPI.methods,
                                    events: this.Editor.EventsAPI.methods,
                                    listeners: this.Editor.ListenersAPI.methods,
                                    notifier: this.Editor.NotifierAPI.methods,
                                    sanitizer: this.Editor.SanitizerAPI.methods,
                                    saver: this.Editor.SaverAPI.methods,
                                    selection: this.Editor.SelectionAPI.methods,
                                    styles: this.Editor.StylesAPI.classes,
                                    toolbar: this.Editor.ToolbarAPI.methods,
                                    inlineToolbar: this.Editor.InlineToolbarAPI.methods,
                                    tooltip: this.Editor.TooltipAPI.methods,
                                    i18n: this.Editor.I18nAPI.methods,
                                    readOnly: this.Editor.ReadOnlyAPI.methods,
                                    ui: this.Editor.UiAPI.methods
                                };
                            }
                        },
                        {
                            key: "getMethodsForTool",
                            value: function(e) {
                                return Object.assign(this.methods, {
                                    i18n: this.Editor.I18nAPI.getMethodsForTool(e)
                                });
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "API", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(8),
                n(54),
                n(68),
                n(115),
                n(386),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y) {
                "use strict";
                var k = n(1);
                function b(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (b = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function m(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }
                function w(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = k(r), i = k(i), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = m(d), p = k(p), v = k(v), g = m(g);
                var x = function(e) {
                    (0, s.default)(n, e);
                    var t1 = w(n);
                    function n(e) {
                        var o, i = e.config, a = e.eventsDispatcher;
                        return (0, r.default)(this, n), (o = t1.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new v.default, o;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbar: "ce-toolbar",
                                    content: "ce-toolbar__content",
                                    actions: "ce-toolbar__actions",
                                    actionsOpened: "ce-toolbar__actions--opened",
                                    toolbarOpened: "ce-toolbar--opened",
                                    openedToolboxHolderModifier: "codex-editor--toolbox-opened",
                                    plusButton: "ce-toolbar__plus",
                                    plusButtonShortcut: "ce-toolbar__plus-shortcut",
                                    settingsToggler: "ce-toolbar__settings-btn",
                                    settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var e = this;
                                return {
                                    opened: this.toolboxInstance.opened,
                                    close: function() {
                                        e.toolboxInstance.close();
                                    },
                                    open: function() {
                                        e.Editor.BlockManager.currentBlock = e.hoveredBlock, e.toolboxInstance.open();
                                    },
                                    toggle: function() {
                                        return e.toolboxInstance.toggle();
                                    },
                                    hasFocus: function() {
                                        return e.toolboxInstance.hasFocus();
                                    }
                                };
                            }
                        },
                        {
                            key: "blockActions",
                            get: function() {
                                var e = this;
                                return {
                                    hide: function() {
                                        e.nodes.actions.classList.remove(e.CSS.actionsOpened);
                                    },
                                    show: function() {
                                        e.nodes.actions.classList.add(e.CSS.actionsOpened);
                                    }
                                };
                            }
                        },
                        {
                            key: "blockTunesToggler",
                            get: function() {
                                var e = this;
                                return {
                                    hide: function() {
                                        return e.nodes.settingsToggler.classList.add(e.CSS.settingsTogglerHidden);
                                    },
                                    show: function() {
                                        return e.nodes.settingsToggler.classList.remove(e.CSS.settingsTogglerHidden);
                                    }
                                };
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
                            }
                        },
                        {
                            key: "moveAndOpen",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                                if (this.toolboxInstance.close(), this.Editor.BlockSettings.close(), e) {
                                    this.hoveredBlock = e;
                                    var t1, n = e.holder, o = this.Editor.UI.isMobile, r = e.pluginsContent, i = window.getComputedStyle(r), a = parseInt(i.paddingTop, 10), s = n.offsetHeight;
                                    t1 = o ? n.offsetTop + s : n.offsetTop + a, this.nodes.wrapper.style.top = "".concat(Math.floor(t1), "px"), 1 === this.Editor.BlockManager.blocks.length && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
                                }
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var e = this, t1 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                d.delay(function() {
                                    e.nodes.wrapper.classList.add(e.CSS.toolbarOpened), t1 ? e.blockActions.show() : e.blockActions.hide();
                                }, 50)();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var e = this;
                                this.nodes.wrapper = f.default.make("div", this.CSS.toolbar), [
                                    "content",
                                    "actions"
                                ].forEach(function(t1) {
                                    e.nodes[t1] = f.default.make("div", e.CSS[t1]);
                                }), f.default.append(this.nodes.wrapper, this.nodes.content), f.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = f.default.make("div", this.CSS.plusButton, {
                                    innerHTML: y.IconPlus
                                }), f.default.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                                    e.tooltip.hide(!0), e.plusButtonClicked();
                                }, !1);
                                var t1 = f.default.make("div");
                                t1.appendChild(document.createTextNode(p.default.ui(h.I18nInternalNS.ui.toolbar.toolbox, "Add"))), t1.appendChild(f.default.make("div", this.CSS.plusButtonShortcut, {
                                    textContent: "⇥ Tab"
                                })), this.tooltip.onHover(this.nodes.plusButton, t1, {
                                    hidingDelay: 400
                                }), this.nodes.settingsToggler = f.default.make("span", this.CSS.settingsToggler, {
                                    innerHTML: y.IconMenu
                                }), f.default.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, p.default.ui(h.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), {
                                    hidingDelay: 400
                                }), f.default.append(this.nodes.actions, this.makeToolbox()), f.default.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
                            }
                        },
                        {
                            key: "makeToolbox",
                            value: function() {
                                var e = this;
                                return this.toolboxInstance = new g.default({
                                    api: this.Editor.API.methods,
                                    tools: this.Editor.Tools.blockTools,
                                    i18nLabels: {
                                        filter: p.default.ui(h.I18nInternalNS.ui.popover, "Filter"),
                                        nothingFound: p.default.ui(h.I18nInternalNS.ui.popover, "Nothing found")
                                    }
                                }), this.toolboxInstance.on(g.ToolboxEvent.Opened, function() {
                                    e.Editor.UI.nodes.wrapper.classList.add(e.CSS.openedToolboxHolderModifier);
                                }), this.toolboxInstance.on(g.ToolboxEvent.Closed, function() {
                                    e.Editor.UI.nodes.wrapper.classList.remove(e.CSS.openedToolboxHolderModifier);
                                }), this.toolboxInstance.on(g.ToolboxEvent.BlockAdded, function(t1) {
                                    var n = t1.block, o = e.Editor, r = o.BlockManager, i = o.Caret, a = r.getBlockById(n.id);
                                    0 === a.inputs.length && (a === r.lastBlock ? (r.insertAtEnd(), i.setToBlock(r.lastBlock)) : i.setToBlock(r.nextBlock));
                                }), this.toolboxInstance.make();
                            }
                        },
                        {
                            key: "plusButtonClicked",
                            value: function() {
                                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var e = this;
                                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(t1) {
                                    t1.stopPropagation(), e.settingsTogglerClicked(), e.toolboxInstance.close(), e.tooltip.hide(!0);
                                }, !0), d.isMobileScreen() || this.eventsDispatcher.on(this.Editor.UI.events.blockHovered, function(t1) {
                                    e.Editor.BlockSettings.opened || e.toolboxInstance.opened || e.moveAndOpen(t1.block);
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "settingsTogglerClicked",
                            value: function() {
                                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
                            }
                        },
                        {
                            key: "drawUI",
                            value: function() {
                                this.Editor.BlockSettings.make(), this.make();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = x, x.displayName = "Toolbar", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(41),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(7),
                n(19),
                n(112),
                n(67),
                n(387),
                n(82),
                n(8),
                n(388),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r, i, a, s, l, c, u, f, d, p, h, v, g) {
                "use strict";
                var y = n(1);
                function k(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, s.default)(e);
                        if (t1) {
                            var r = (0, s.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, a.default)(this, n);
                    };
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = e.PopoverEvent = void 0, t1 = y(t1), o = y(o), r = y(r), i = y(i), a = y(a), s = y(s), l = y(l), c = y(c), u = y(u), f = y(f), d = y(d), p = y(p), v = y(v);
                var b, m = function(e, t1, n, o) {
                    var r, i = arguments.length, a = i < 3 ? t1 : null === o ? o = Object.getOwnPropertyDescriptor(t1, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, l.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t1, n, o);
                    else for(var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t1, n, a) : r(t1, n)) || a);
                    return i > 3 && a && Object.defineProperty(t1, n, a), a;
                };
                e.PopoverEvent = b, function(e) {
                    e.OverlayClicked = "overlay-clicked", e.Close = "close";
                }(b || (e.PopoverEvent = b = {}));
                var w = function(e) {
                    (0, i.default)(a, e);
                    var n = k(a);
                    function a(e) {
                        var t1, r = e.items, i = e.className, s = e.searchable, l = e.filterLabel, c = e.nothingFoundLabel, f = e.customContent, d = e.customContentFlippableItems, p = e.scopeElement;
                        return (0, o.default)(this, a), (t1 = n.call(this)).customContentFlippableItems = [], t1.isShown = !1, t1.nodes = {
                            wrapper: null,
                            popover: null,
                            items: null,
                            nothingFound: null,
                            overlay: null
                        }, t1.scrollLocker = new v.default, t1.itemsRequiringConfirmation = {}, t1.removeSpecialHoverBehavior = function() {
                            var e = t1.nodes.items.querySelector(".".concat(a.CSS.itemNoHover));
                            e && e.classList.remove(a.CSS.itemNoHover);
                        }, t1.onFlip = function() {
                            t1.disableSpecialHoverAndFocusBehavior();
                        }, t1.items = r, t1.customContent = f, t1.customContentFlippableItems = d, t1.className = i || "", t1.searchable = s, t1.listeners = new u.default, t1.scopeElement = p, t1.filterLabel = l, t1.nothingFoundLabel = c, t1.render(), t1.enableFlipper(), t1;
                    }
                    return (0, r.default)(a, [
                        {
                            key: "getElement",
                            value: function() {
                                return this.nodes.wrapper;
                            }
                        },
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.shouldOpenPopoverBottom || (this.nodes.wrapper.style.setProperty("--popover-height", this.calculateHeight() + "px"), this.nodes.wrapper.classList.add(this.className + "--opened-top")), this.search && this.search.clear(), this.nodes.items.scrollTop = 0, this.nodes.popover.classList.add(a.CSS.popoverOpened), this.nodes.overlay.classList.remove(a.CSS.popoverOverlayHidden), this.flipper.activate(this.flippableElements), this.searchable && setTimeout(function() {
                                    e.search.focus();
                                }, 100), (0, h.isMobileScreen)() && this.scrollLocker.lock(), this.isShown = !0;
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                var e = this;
                                this.isShown && (this.nodes.popover.classList.remove(a.CSS.popoverOpened), this.nodes.overlay.classList.add(a.CSS.popoverOverlayHidden), this.flipper.deactivate(), (0, h.isMobileScreen)() && this.scrollLocker.unlock(), this.isShown = !1, this.nodes.wrapper.classList.remove(this.className + "--opened-top"), Array.from(this.nodes.items.querySelectorAll(".".concat(a.CSS.itemConfirmation))).forEach(function(t1) {
                                    return e.cleanUpConfirmationStateForItem(t1);
                                }), this.disableSpecialHoverAndFocusBehavior(), this.emit(b.Close));
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper.deactivate(), this.listeners.removeAll(), this.disableSpecialHoverAndFocusBehavior(), (0, h.isMobileScreen)() && this.scrollLocker.unlock();
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                return this.flipper.hasFocus();
                            }
                        },
                        {
                            key: "calculateHeight",
                            value: function() {
                                var e, t1 = this.nodes.popover.cloneNode(!0);
                                return t1.style.visibility = "hidden", t1.style.position = "absolute", t1.style.top = "-1000px", t1.classList.add(a.CSS.popoverOpened), document.body.appendChild(t1), e = t1.offsetHeight, t1.remove(), e;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                this.nodes.wrapper = c.default.make("div", this.className), this.nodes.popover = c.default.make("div", a.CSS.popover), this.nodes.wrapper.appendChild(this.nodes.popover), this.nodes.overlay = c.default.make("div", [
                                    a.CSS.popoverOverlay,
                                    a.CSS.popoverOverlayHidden
                                ]), this.nodes.wrapper.appendChild(this.nodes.overlay), this.searchable && this.addSearch(this.nodes.popover), this.customContent && (this.customContent.classList.add(a.CSS.customContent), this.nodes.popover.appendChild(this.customContent)), this.nodes.items = c.default.make("div", a.CSS.itemsWrapper), this.items.forEach(function(t1) {
                                    e.nodes.items.appendChild(e.createItem(t1));
                                }), this.nodes.popover.appendChild(this.nodes.items), this.nodes.nothingFound = c.default.make("div", [
                                    a.CSS.noFoundMessage
                                ], {
                                    textContent: this.nothingFoundLabel
                                }), this.nodes.popover.appendChild(this.nodes.nothingFound), this.listeners.on(this.nodes.popover, "click", function(t1) {
                                    var n = t1.target.closest(".".concat(a.CSS.item));
                                    n && e.itemClicked(n, t1);
                                }), this.listeners.on(this.nodes.overlay, "click", function() {
                                    e.emit(b.OverlayClicked);
                                });
                            }
                        },
                        {
                            key: "addSearch",
                            value: function(e) {
                                var t1 = this;
                                this.search = new d.default({
                                    items: this.items,
                                    placeholder: this.filterLabel,
                                    onSearch: function(e) {
                                        var n = [];
                                        t1.items.forEach(function(o, r) {
                                            var i = t1.nodes.items.children[r];
                                            e.includes(o) ? (n.push(i), i.classList.remove(a.CSS.itemHidden)) : i.classList.add(a.CSS.itemHidden);
                                        }), t1.nodes.nothingFound.classList.toggle(a.CSS.noFoundMessageShown, 0 === n.length);
                                        var o = e.length === t1.items.length, r = o ? t1.flippableElements : n;
                                        t1.customContent && t1.customContent.classList.toggle(a.CSS.customContentHidden, !o), t1.flipper.isActivated && (t1.reactivateFlipper(r), t1.flipper.focusFirst());
                                    }
                                });
                                var n = this.search.getElement();
                                e.appendChild(n);
                            }
                        },
                        {
                            key: "createItem",
                            value: function(e) {
                                var t1 = c.default.make("div", a.CSS.item);
                                e.name && (t1.dataset.itemName = e.name);
                                var n = c.default.make("div", a.CSS.itemLabel, {
                                    innerHTML: e.title || ""
                                });
                                return t1.appendChild(c.default.make("div", a.CSS.itemIcon, {
                                    innerHTML: e.icon || g.IconDotCircle
                                })), t1.appendChild(n), e.secondaryLabel && t1.appendChild(c.default.make("div", a.CSS.itemSecondaryLabel, {
                                    textContent: e.secondaryLabel
                                })), e.isActive && t1.classList.add(a.CSS.itemActive), e.isDisabled && t1.classList.add(a.CSS.itemDisabled), t1;
                            }
                        },
                        {
                            key: "itemClicked",
                            value: function(e, t1) {
                                var n = this, o = Array.from(this.nodes.items.children), r = o.indexOf(e), i = this.items[r];
                                i.isDisabled || (o.filter(function(t1) {
                                    return t1 !== e;
                                }).forEach(function(e) {
                                    n.cleanUpConfirmationStateForItem(e);
                                }), i.confirmation ? this.enableConfirmationStateForItem(i, e, r) : (i.onActivate(i, t1), this.toggleIfNeeded(r, o), i.closeOnActivate && this.hide()));
                            }
                        },
                        {
                            key: "toggleIfNeeded",
                            value: function(e, t1) {
                                var n = this, o = this.items[e];
                                if (!0 === o.toggle) return o.isActive = !o.isActive, void t1[e].classList.toggle(a.CSS.itemActive);
                                if ("string" == typeof o.toggle) {
                                    var r = this.items.filter(function(e) {
                                        return e.toggle === o.toggle;
                                    });
                                    if (1 === r.length) return o.isActive = !o.isActive, void t1[e].classList.toggle(a.CSS.itemActive);
                                    r.forEach(function(e) {
                                        var r = n.items.indexOf(e), i = e === o;
                                        e.isActive = i, t1[r].classList.toggle(a.CSS.itemActive, i);
                                    });
                                }
                            }
                        },
                        {
                            key: "enableConfirmationStateForItem",
                            value: function(e, n, o) {
                                var r;
                                void 0 === this.itemsRequiringConfirmation[o] && (this.itemsRequiringConfirmation[o] = e);
                                var i = Object.assign(Object.assign(Object.assign({}, e), e.confirmation), {
                                    confirmation: e.confirmation.confirmation
                                });
                                this.items[o] = i;
                                var s = this.createItem(i);
                                (r = s.classList).add.apply(r, [
                                    a.CSS.itemConfirmation
                                ].concat((0, t1.default)(Array.from(n.classList)))), n.parentElement.replaceChild(s, n), this.enableSpecialHoverAndFocusBehavior(s), this.reactivateFlipper(this.flippableElements, this.flippableElements.indexOf(s));
                            }
                        },
                        {
                            key: "cleanUpConfirmationStateForItem",
                            value: function(e) {
                                var t1 = Array.from(this.nodes.items.children).indexOf(e), n = this.itemsRequiringConfirmation[t1];
                                if (void 0 !== n) {
                                    var o = this.createItem(n);
                                    e.parentElement.replaceChild(o, e), this.items[t1] = n, delete this.itemsRequiringConfirmation[t1], e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior), this.disableSpecialHoverAndFocusBehavior(), this.reactivateFlipper(this.flippableElements, this.flippableElements.indexOf(o));
                                }
                            }
                        },
                        {
                            key: "enableSpecialHoverAndFocusBehavior",
                            value: function(e) {
                                e.classList.add(a.CSS.itemNoHover), e.classList.add(a.CSS.itemNoFocus), e.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
                                    once: !0
                                }), this.flipper.onFlip(this.onFlip);
                            }
                        },
                        {
                            key: "disableSpecialHoverAndFocusBehavior",
                            value: function() {
                                this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.flipper.removeOnFlip(this.onFlip);
                            }
                        },
                        {
                            key: "removeSpecialFocusBehavior",
                            value: function() {
                                var e = this.nodes.items.querySelector(".".concat(a.CSS.itemNoFocus));
                                e && e.classList.remove(a.CSS.itemNoFocus);
                            }
                        },
                        {
                            key: "reactivateFlipper",
                            value: function(e, t1) {
                                this.flipper.deactivate(), this.flipper.activate(e, t1);
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new f.default({
                                    items: this.flippableElements,
                                    focusedItemClass: a.CSS.itemFocused,
                                    allowedKeys: [
                                        h.keyCodes.TAB,
                                        h.keyCodes.UP,
                                        h.keyCodes.DOWN,
                                        h.keyCodes.ENTER
                                    ]
                                });
                            }
                        },
                        {
                            key: "flippableElements",
                            get: function() {
                                var e = Array.from(this.nodes.wrapper.querySelectorAll(".".concat(a.CSS.item)));
                                return (this.customContentFlippableItems || []).concat(e);
                            }
                        },
                        {
                            key: "shouldOpenPopoverBottom",
                            get: function() {
                                var e = this.nodes.wrapper.getBoundingClientRect(), t1 = this.scopeElement.getBoundingClientRect(), n = this.calculateHeight(), o = e.top + n, r = e.top - n, i = Math.min(window.innerHeight, t1.bottom);
                                return r < t1.top || o <= i;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    popover: "ce-popover",
                                    popoverOpened: "ce-popover--opened",
                                    itemsWrapper: "ce-popover__items",
                                    item: "ce-popover__item",
                                    itemHidden: "ce-popover__item--hidden",
                                    itemFocused: "ce-popover__item--focused",
                                    itemActive: "ce-popover__item--active",
                                    itemDisabled: "ce-popover__item--disabled",
                                    itemConfirmation: "ce-popover__item--confirmation",
                                    itemNoHover: "ce-popover__item--no-visible-hover",
                                    itemNoFocus: "ce-popover__item--no-visible-focus",
                                    itemLabel: "ce-popover__item-label",
                                    itemIcon: "ce-popover__item-icon",
                                    itemSecondaryLabel: "ce-popover__item-secondary-label",
                                    noFoundMessage: "ce-popover__no-found",
                                    noFoundMessageShown: "ce-popover__no-found--shown",
                                    popoverOverlay: "ce-popover__overlay",
                                    popoverOverlayHidden: "ce-popover__overlay--hidden",
                                    customContent: "ce-popover__custom-content",
                                    customContentHidden: "ce-popover__custom-content--hidden"
                                };
                            }
                        }
                    ]), a;
                }(p.default);
                e.default = w, w.displayName = "Popover", m([
                    h.cacheable
                ], w.prototype, "calculateHeight", null);
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
            e.exports = function(e) {
                return i ? r.createElement(e) : {};
            };
        },
        function(e, t1, n) {
            t1.f = n(14);
        },
        function(e, t1, n) {
            var o = n(70)("keys"), r = n(45);
            e.exports = function(e) {
                return o[e] || (o[e] = r(e));
            };
        },
        function(e, t1) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function(e, t1, n) {
            var o = n(10).document;
            e.exports = o && o.documentElement;
        },
        function(e, t1, n) {
            var o = n(13), r = n(12), i = function(e, t1) {
                if (r(e), !o(t1) && null !== t1) throw TypeError(t1 + ": can't set as prototype!");
            };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t1, o) {
                    try {
                        (o = n(31)(Function.call, n(34).f(Object.prototype, "__proto__").set, 2))(e, []), t1 = !(e instanceof Array);
                    } catch (e) {
                        t1 = !0;
                    }
                    return function(e, n) {
                        return i(e, n), t1 ? e.__proto__ = n : o(e, n), e;
                    };
                }({}, !1) : void 0),
                check: i
            };
        },
        function(e, t1) {
            e.exports = "	\n\v\f\r \xa0 ᠎             　\u2028\u2029\uFEFF";
        },
        function(e, t1, n) {
            var o = n(13), r = n(91).set;
            e.exports = function(e, t1, n) {
                var i, a = t1.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(e, i), e;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(33), r = n(39);
            e.exports = function(e) {
                var t1 = String(r(this)), n = "", i = o(e);
                if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
                for(; i > 0; (i >>>= 1) && (t1 += t1))1 & i && (n += t1);
                return n;
            };
        },
        function(e, t1) {
            e.exports = Math.sign || function(e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
            };
        },
        function(e, t1) {
            var n = Math.expm1;
            e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -0.00000000000000002 != n(-0.00000000000000002) ? function(e) {
                return 0 == (e = +e) ? e : e > -0.000001 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1;
            } : n;
        },
        function(e, t1, n) {
            var o = n(33), r = n(39);
            e.exports = function(e) {
                return function(t1, n) {
                    var i, a, s = String(r(t1)), l = o(n), c = s.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
                };
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(46), r = n(0), i = n(23), a = n(27), s = n(57), l = n(131), c = n(55), u = n(51), f = n(14)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
                return this;
            };
            e.exports = function(e, t1, n, h, v, g, y) {
                l(n, t1, h);
                var k, b, m, w = function(e) {
                    if (!d && e in T) return T[e];
                    switch(e){
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e);
                            };
                    }
                    return function() {
                        return new n(this, e);
                    };
                }, x = t1 + " Iterator", C = "values" == v, S = !1, T = e.prototype, E = T[f] || T["@@iterator"] || v && T[v], B = E || w(v), M = v ? C ? w("entries") : B : void 0, _ = "Array" == t1 && T.entries || E;
                if (_ && (m = u(_.call(new e))) !== Object.prototype && m.next && (c(m, x, !0), o || "function" == typeof m[f] || a(m, f, p)), C && E && "values" !== E.name && (S = !0, B = function() {
                    return E.call(this);
                }), o && !y || !d && !S && T[f] || a(T, f, B), s[t1] = B, s[x] = p, v) {
                    if (k = {
                        values: C ? B : w("values"),
                        keys: g ? B : w("keys"),
                        entries: M
                    }, y) for(b in k)b in T || i(T, b, k[b]);
                    else r(r.P + r.F * (d || S), t1, k);
                }
                return k;
            };
        },
        function(e, t1, n) {
            var o = n(100), r = n(39);
            e.exports = function(e, t1, n) {
                if (o(t1)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(r(e));
            };
        },
        function(e, t1, n) {
            var o = n(13), r = n(38), i = n(14)("match");
            e.exports = function(e) {
                var t1;
                return o(e) && (void 0 !== (t1 = e[i]) ? !!t1 : "RegExp" == r(e));
            };
        },
        function(e, t1, n) {
            var o = n(14)("match");
            e.exports = function(e) {
                var t1 = /./;
                try {
                    "/./"[e](t1);
                } catch (n) {
                    try {
                        return t1[o] = !1, !"/./"[e](t1);
                    } catch (e) {}
                }
                return !0;
            };
        },
        function(e, t1, n) {
            var o = n(57), r = n(14)("iterator"), i = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || i[r] === e);
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(18), r = n(44);
            e.exports = function(e, t1, n) {
                t1 in e ? o.f(e, t1, r(0, n)) : e[t1] = n;
            };
        },
        function(e, t1, n) {
            var o = n(64), r = n(14)("iterator"), i = n(57);
            e.exports = n(16).getIteratorMethod = function(e) {
                if (null != e) return e[r] || e["@@iterator"] || i[o(e)];
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(22), r = n(48), i = n(15);
            e.exports = function(e) {
                for(var t1 = o(this), n = i(t1.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;)t1[s++] = e;
                return t1;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(52), r = n(136), i = n(57), a = n(28);
            e.exports = n(98)(Array, "Array", function(e, t1) {
                this._t = a(e), this._i = 0, this._k = t1;
            }, function() {
                var e = this._t, t1 = this._k, n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t1 ? n : "values" == t1 ? e[n] : [
                    n,
                    e[n]
                ]);
            }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        },
        function(e, t1, n) {
            "use strict";
            var o, r, i = n(75), a = RegExp.prototype.exec, s = String.prototype.replace, l = a, c = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex), u = void 0 !== /()??/.exec("")[1];
            (c || u) && (l = function(e) {
                var t1, n, o, r, l = this;
                return u && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), c && (t1 = l.lastIndex), o = a.call(l, e), c && o && (l.lastIndex = l.global ? o.index + o[0].length : t1), u && o && o.length > 1 && s.call(o[0], n, function() {
                    for(r = 1; r < arguments.length - 2; r++)void 0 === arguments[r] && (o[r] = void 0);
                }), o;
            }), e.exports = l;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(97)(!0);
            e.exports = function(e, t1, n) {
                return t1 + (n ? o(e, t1).length : 1);
            };
        },
        function(e, t1, n) {
            var o, r, i, a = n(31), s = n(125), l = n(90), c = n(86), u = n(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {}, k = function() {
                var e = +this;
                if (y.hasOwnProperty(e)) {
                    var t1 = y[e];
                    delete y[e], t1();
                }
            }, b = function(e) {
                k.call(e.data);
            };
            d && p || (d = function(e) {
                for(var t1 = [], n = 1; arguments.length > n;)t1.push(arguments[n++]);
                return y[++g] = function() {
                    s("function" == typeof e ? e : Function(e), t1);
                }, o(g), g;
            }, p = function(e) {
                delete y[e];
            }, "process" == n(38)(f) ? o = function(e) {
                f.nextTick(a(k, e, 1));
            } : v && v.now ? o = function(e) {
                v.now(a(k, e, 1));
            } : h ? (i = (r = new h).port2, r.port1.onmessage = b, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e) {
                u.postMessage(e + "", "*");
            }, u.addEventListener("message", b, !1)) : o = "onreadystatechange" in c("script") ? function(e) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), k.call(e);
                };
            } : function(e) {
                setTimeout(a(k, e, 1), 0);
            }), e.exports = {
                set: d,
                clear: p
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(10), r = n(17), i = n(46), a = n(81), s = n(27), l = n(60), c = n(11), u = n(59), f = n(33), d = n(15), p = n(144), h = n(50).f, v = n(18).f, g = n(105), y = n(55), k = o.ArrayBuffer, b = o.DataView, m = o.Math, w = o.RangeError, x = o.Infinity, C = k, S = m.abs, T = m.pow, E = m.floor, B = m.log, M = m.LN2, _ = r ? "_b" : "buffer", O = r ? "_l" : "byteLength", I = r ? "_o" : "byteOffset";
            function L(e, t1, n) {
                var o, r, i, a = new Array(n), s = 8 * n - t1 - 1, l = (1 << s) - 1, c = l >> 1, u = 23 === t1 ? T(2, -24) - T(2, -77) : 0, f = 0, d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for((e = S(e)) != e || e === x ? (r = e != e ? 1 : 0, o = l) : (o = E(B(e) / M), e * (i = T(2, -o)) < 1 && (o--, i *= 2), (e += o + c >= 1 ? u / i : u * T(2, 1 - c)) * i >= 2 && (o++, i /= 2), o + c >= l ? (r = 0, o = l) : o + c >= 1 ? (r = (e * i - 1) * T(2, t1), o += c) : (r = e * T(2, c - 1) * T(2, t1), o = 0)); t1 >= 8; a[f++] = 255 & r, r /= 256, t1 -= 8);
                for(o = o << t1 | r, s += t1; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
                return a[--f] |= 128 * d, a;
            }
            function P(e, t1, n) {
                var o, r = 8 * n - t1 - 1, i = (1 << r) - 1, a = i >> 1, s = r - 7, l = n - 1, c = e[l--], u = 127 & c;
                for(c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
                for(o = u & (1 << -s) - 1, u >>= -s, s += t1; s > 0; o = 256 * o + e[l], l--, s -= 8);
                if (0 === u) u = 1 - a;
                else {
                    if (u === i) return o ? NaN : c ? -x : x;
                    o += T(2, t1), u -= a;
                }
                return (c ? -1 : 1) * o * T(2, u - t1);
            }
            function j(e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
            }
            function R(e) {
                return [
                    255 & e
                ];
            }
            function A(e) {
                return [
                    255 & e,
                    e >> 8 & 255
                ];
            }
            function N(e) {
                return [
                    255 & e,
                    e >> 8 & 255,
                    e >> 16 & 255,
                    e >> 24 & 255
                ];
            }
            function D(e) {
                return L(e, 52, 8);
            }
            function F(e) {
                return L(e, 23, 4);
            }
            function H(e, t1, n) {
                v(e.prototype, t1, {
                    get: function() {
                        return this[n];
                    }
                });
            }
            function W(e, t1, n, o) {
                var r = p(+n);
                if (r + t1 > e[O]) throw w("Wrong index!");
                var i = e[_]._b, a = r + e[I], s = i.slice(a, a + t1);
                return o ? s : s.reverse();
            }
            function U(e, t1, n, o, r, i) {
                var a = p(+n);
                if (a + t1 > e[O]) throw w("Wrong index!");
                for(var s = e[_]._b, l = a + e[I], c = o(+r), u = 0; u < t1; u++)s[l + u] = c[i ? u : t1 - u - 1];
            }
            if (a.ABV) {
                if (!c(function() {
                    k(1);
                }) || !c(function() {
                    new k(-1);
                }) || c(function() {
                    return new k, new k(1.5), new k(NaN), "ArrayBuffer" != k.name;
                })) {
                    for(var z, V = (k = function(e) {
                        return u(this, k), new C(p(e));
                    }).prototype = C.prototype, Y = h(C), X = 0; Y.length > X;)(z = Y[X++]) in k || s(k, z, C[z]);
                    i || (V.constructor = k);
                }
                var G = new b(new k(2)), K = b.prototype.setInt8;
                G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || l(b.prototype, {
                    setInt8: function(e, t1) {
                        K.call(this, e, t1 << 24 >> 24);
                    },
                    setUint8: function(e, t1) {
                        K.call(this, e, t1 << 24 >> 24);
                    }
                }, !0);
            } else k = function(e) {
                u(this, k, "ArrayBuffer");
                var t1 = p(e);
                this._b = g.call(new Array(t1), 0), this[O] = t1;
            }, b = function(e, t1, n) {
                u(this, b, "DataView"), u(e, k, "DataView");
                var o = e[O], r = f(t1);
                if (r < 0 || r > o) throw w("Wrong offset!");
                if (r + (n = void 0 === n ? o - r : d(n)) > o) throw w("Wrong length!");
                this[_] = e, this[I] = r, this[O] = n;
            }, r && (H(k, "byteLength", "_l"), H(b, "buffer", "_b"), H(b, "byteLength", "_l"), H(b, "byteOffset", "_o")), l(b.prototype, {
                getInt8: function(e) {
                    return W(this, 1, e)[0] << 24 >> 24;
                },
                getUint8: function(e) {
                    return W(this, 1, e)[0];
                },
                getInt16: function(e) {
                    var t1 = W(this, 2, e, arguments[1]);
                    return (t1[1] << 8 | t1[0]) << 16 >> 16;
                },
                getUint16: function(e) {
                    var t1 = W(this, 2, e, arguments[1]);
                    return t1[1] << 8 | t1[0];
                },
                getInt32: function(e) {
                    return j(W(this, 4, e, arguments[1]));
                },
                getUint32: function(e) {
                    return j(W(this, 4, e, arguments[1])) >>> 0;
                },
                getFloat32: function(e) {
                    return P(W(this, 4, e, arguments[1]), 23, 4);
                },
                getFloat64: function(e) {
                    return P(W(this, 8, e, arguments[1]), 52, 8);
                },
                setInt8: function(e, t1) {
                    U(this, 1, e, R, t1);
                },
                setUint8: function(e, t1) {
                    U(this, 1, e, R, t1);
                },
                setInt16: function(e, t1) {
                    U(this, 2, e, A, t1, arguments[2]);
                },
                setUint16: function(e, t1) {
                    U(this, 2, e, A, t1, arguments[2]);
                },
                setInt32: function(e, t1) {
                    U(this, 4, e, N, t1, arguments[2]);
                },
                setUint32: function(e, t1) {
                    U(this, 4, e, N, t1, arguments[2]);
                },
                setFloat32: function(e, t1) {
                    U(this, 4, e, F, t1, arguments[2]);
                },
                setFloat64: function(e, t1) {
                    U(this, 8, e, D, t1, arguments[2]);
                }
            });
            y(k, "ArrayBuffer"), y(b, "DataView"), s(b.prototype, a.VIEW, !0), t1.ArrayBuffer = k, t1.DataView = b;
        },
        function(e, t1) {
            function n(t1, o) {
                return e.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t1) {
                    return e.__proto__ = t1, e;
                }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t1, o);
            }
            e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s) {
                "use strict";
                var l = n(1);
                function c(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (c = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = l(r), i = l(i), s = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = c(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(s);
                var u = function() {
                    function e() {
                        (0, r.default)(this, e), this.allListeners = [];
                    }
                    return (0, i.default)(e, [
                        {
                            key: "on",
                            value: function(e, t1, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = s.generateId("l"), i = {
                                    id: r,
                                    element: e,
                                    eventType: t1,
                                    handler: n,
                                    options: o
                                }, a = this.findOne(e, t1, n);
                                if (!a) return this.allListeners.push(i), e.addEventListener(t1, n, o), r;
                            }
                        },
                        {
                            key: "off",
                            value: function(e, t1, n, o) {
                                var r = this, i = this.findAll(e, t1, n);
                                i.forEach(function(e, t1) {
                                    var n = r.allListeners.indexOf(i[t1]);
                                    n > -1 && (r.allListeners.splice(n, 1), e.element.removeEventListener(e.eventType, e.handler, e.options));
                                });
                            }
                        },
                        {
                            key: "offById",
                            value: function(e) {
                                var t1 = this.findById(e);
                                t1 && t1.element.removeEventListener(t1.eventType, t1.handler, t1.options);
                            }
                        },
                        {
                            key: "findOne",
                            value: function(e, t1, n) {
                                var o = this.findAll(e, t1, n);
                                return o.length > 0 ? o[0] : null;
                            }
                        },
                        {
                            key: "findAll",
                            value: function(e, t1, n) {
                                var o = e ? this.findByEventTarget(e) : [];
                                return e && t1 && n ? o.filter(function(e) {
                                    return e.eventType === t1 && e.handler === n;
                                }) : e && t1 ? o.filter(function(e) {
                                    return e.eventType === t1;
                                }) : o;
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.allListeners.map(function(e) {
                                    e.element.removeEventListener(e.eventType, e.handler, e.options);
                                }), this.allListeners = [];
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAll();
                            }
                        },
                        {
                            key: "findByEventTarget",
                            value: function(e) {
                                return this.allListeners.filter(function(t1) {
                                    if (t1.element === e) return t1;
                                });
                            }
                        },
                        {
                            key: "findByType",
                            value: function(e) {
                                return this.allListeners.filter(function(t1) {
                                    if (t1.eventType === e) return t1;
                                });
                            }
                        },
                        {
                            key: "findByHandler",
                            value: function(e) {
                                return this.allListeners.filter(function(t1) {
                                    if (t1.handler === e) return t1;
                                });
                            }
                        },
                        {
                            key: "findById",
                            value: function(e) {
                                return this.allListeners.find(function(t1) {
                                    return t1.id === e;
                                });
                            }
                        }
                    ]), e;
                }();
                o.default = u, u.displayName = "Listeners", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1
            ], void 0 === (i = "function" == typeof (o = function(n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = function(e) {
                    var t1 = {
                        get id () {
                            return e.id;
                        },
                        get name () {
                            return e.name;
                        },
                        get config () {
                            return e.config;
                        },
                        get holder () {
                            return e.holder;
                        },
                        get isEmpty () {
                            return e.isEmpty;
                        },
                        get selected () {
                            return e.selected;
                        },
                        set stretched (t){
                            e.stretched = t;
                        },
                        get stretched () {
                            return e.stretched;
                        },
                        call: function(t1, n) {
                            return e.call(t1, n);
                        },
                        save: function() {
                            return e.save();
                        },
                        validate: function(t1) {
                            return e.validate(t1);
                        },
                        dispatchChange: function() {
                            e.dispatchChange();
                        }
                    };
                    Object.setPrototypeOf(this, t1);
                };
                n.default = o, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(377);
            function r() {
                return "undefined" != typeof Reflect && Reflect.get ? (e.exports = r = Reflect.get.bind(), e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = r = function(e, t1, n) {
                    var r = o(e, t1);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t1);
                        return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports), r.apply(this, arguments);
            }
            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(381)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e), this.lib = new a.default;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "destroy",
                            value: function() {
                                this.lib.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(e, t1, n) {
                                this.lib.show(e, t1, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.lib.hide(e);
                            }
                        },
                        {
                            key: "onHover",
                            value: function(e, t1, n) {
                                this.lib.onHover(e, t1, n);
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "Tooltip", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(41),
                n(2),
                n(3),
                n(385)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s) {
                "use strict";
                var l = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
                var c = function() {
                    function e() {
                        (0, i.default)(this, e), this.registeredShortcuts = new Map;
                    }
                    return (0, a.default)(e, [
                        {
                            key: "add",
                            value: function(e) {
                                if (this.findShortcut(e.on, e.name)) throw Error("Shortcut ".concat(e.name, " is already registered for ").concat(e.on, ". Please remove it before add a new handler."));
                                var t1 = new s.default({
                                    name: e.name,
                                    on: e.on,
                                    callback: e.handler
                                }), n = this.registeredShortcuts.get(e.on) || [];
                                this.registeredShortcuts.set(e.on, [].concat((0, r.default)(n), [
                                    t1
                                ]));
                            }
                        },
                        {
                            key: "remove",
                            value: function(e, t1) {
                                var n = this.findShortcut(e, t1);
                                if (n) {
                                    n.remove();
                                    var o = this.registeredShortcuts.get(e);
                                    this.registeredShortcuts.set(e, o.filter(function(e) {
                                        return e !== n;
                                    }));
                                }
                            }
                        },
                        {
                            key: "findShortcut",
                            value: function(e, t1) {
                                return (this.registeredShortcuts.get(e) || []).find(function(e) {
                                    return e.name === t1;
                                });
                            }
                        }
                    ]), e;
                }();
                c.displayName = "Shortcuts";
                var u = new c;
                o.default = u, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            e.exports = !n(17) && !n(11)(function() {
                return 7 != Object.defineProperty(n(86)("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(e, t1, n) {
            var o = n(10), r = n(16), i = n(46), a = n(87), s = n(18).f;
            e.exports = function(e) {
                var t1 = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
                "_" == e.charAt(0) || e in t1 || s(t1, e, {
                    value: a.f(e)
                });
            };
        },
        function(e, t1, n) {
            var o = n(26), r = n(28), i = n(71)(!1), a = n(88)("IE_PROTO");
            e.exports = function(e, t1) {
                var n, s = r(e), l = 0, c = [];
                for(n in s)n != a && o(s, n) && c.push(n);
                for(; t1.length > l;)o(s, n = t1[l++]) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function(e, t1, n) {
            var o = n(18), r = n(12), i = n(47);
            e.exports = n(17) ? Object.defineProperties : function(e, t1) {
                r(e);
                for(var n, a = i(t1), s = a.length, l = 0; s > l;)o.f(e, n = a[l++], t1[n]);
                return e;
            };
        },
        function(e, t1, n) {
            var o = n(28), r = n(50).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return a && "[object Window]" == i.call(e) ? function(e) {
                    try {
                        return r(e);
                    } catch (e) {
                        return a.slice();
                    }
                }(e) : r(o(e));
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(17), r = n(47), i = n(72), a = n(63), s = n(22), l = n(62), c = Object.assign;
            e.exports = !c || n(11)(function() {
                var e = {}, t1 = {}, n = Symbol(), o = "abcdefghijklmnopqrst";
                return e[n] = 7, o.split("").forEach(function(e) {
                    t1[e] = e;
                }), 7 != c({}, e)[n] || Object.keys(c({}, t1)).join("") != o;
            }) ? function(e, t1) {
                for(var n = s(e), c = arguments.length, u = 1, f = i.f, d = a.f; c > u;)for(var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y;)p = v[y++], o && !d.call(h, p) || (n[p] = h[p]);
                return n;
            } : c;
        },
        function(e, t1) {
            e.exports = Object.is || function(e, t1) {
                return e === t1 ? 0 !== e || 1 / e == 1 / t1 : e != e && t1 != t1;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(32), r = n(13), i = n(125), a = [].slice, s = {}, l = function(e, t1, n) {
                if (!(t1 in s)) {
                    for(var o = [], r = 0; r < t1; r++)o[r] = "a[" + r + "]";
                    s[t1] = Function("F,a", "return new F(" + o.join(",") + ")");
                }
                return s[t1](e, n);
            };
            e.exports = Function.bind || function(e) {
                var t1 = o(this), n = a.call(arguments, 1), s = function() {
                    var o = n.concat(a.call(arguments));
                    return this instanceof s ? l(t1, o.length, o) : i(t1, o, e);
                };
                return r(t1.prototype) && (s.prototype = t1.prototype), s;
            };
        },
        function(e, t1) {
            e.exports = function(e, t1, n) {
                var o = void 0 === n;
                switch(t1.length){
                    case 0:
                        return o ? e() : e.call(n);
                    case 1:
                        return o ? e(t1[0]) : e.call(n, t1[0]);
                    case 2:
                        return o ? e(t1[0], t1[1]) : e.call(n, t1[0], t1[1]);
                    case 3:
                        return o ? e(t1[0], t1[1], t1[2]) : e.call(n, t1[0], t1[1], t1[2]);
                    case 4:
                        return o ? e(t1[0], t1[1], t1[2], t1[3]) : e.call(n, t1[0], t1[1], t1[2], t1[3]);
                }
                return e.apply(n, t1);
            };
        },
        function(e, t1, n) {
            var o = n(10).parseInt, r = n(56).trim, i = n(92), a = /^[-+]?0[xX]/;
            e.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(e, t1) {
                var n = r(String(e), 3);
                return o(n, t1 >>> 0 || (a.test(n) ? 16 : 10));
            } : o;
        },
        function(e, t1, n) {
            var o = n(10).parseFloat, r = n(56).trim;
            e.exports = 1 / o(n(92) + "-0") != -1 / 0 ? function(e) {
                var t1 = r(String(e), 3), n = o(t1);
                return 0 === n && "-" == t1.charAt(0) ? -0 : n;
            } : o;
        },
        function(e, t1, n) {
            var o = n(38);
            e.exports = function(e, t1) {
                if ("number" != typeof e && "Number" != o(e)) throw TypeError(t1);
                return +e;
            };
        },
        function(e, t1, n) {
            var o = n(13), r = Math.floor;
            e.exports = function(e) {
                return !o(e) && isFinite(e) && r(e) === e;
            };
        },
        function(e, t1) {
            e.exports = Math.log1p || function(e) {
                return (e = +e) > -0.00000001 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e);
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(49), r = n(44), i = n(55), a = {};
            n(27)(a, n(14)("iterator"), function() {
                return this;
            }), e.exports = function(e, t1, n) {
                e.prototype = o(a, {
                    next: r(1, n)
                }), i(e, t1 + " Iterator");
            };
        },
        function(e, t1, n) {
            var o = n(12);
            e.exports = function(e, t1, n, r) {
                try {
                    return r ? t1(o(n)[0], n[1]) : t1(n);
                } catch (t1) {
                    var i = e.return;
                    throw void 0 !== i && o(i.call(e)), t1;
                }
            };
        },
        function(e, t1, n) {
            var o = n(282);
            e.exports = function(e, t1) {
                return new (o(e))(t1);
            };
        },
        function(e, t1, n) {
            var o = n(32), r = n(22), i = n(62), a = n(15);
            e.exports = function(e, t1, n, s, l) {
                o(t1);
                var c = r(e), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
                if (n < 2) for(;;){
                    if (d in u) {
                        s = u[d], d += p;
                        break;
                    }
                    if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
                }
                for(; l ? d >= 0 : f > d; d += p)d in u && (s = t1(s, u[d], d, c));
                return s;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(22), r = n(48), i = n(15);
            e.exports = [].copyWithin || function(e, t1) {
                var n = o(this), a = i(n.length), s = r(e, a), l = r(t1, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
                for(l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
                return n;
            };
        },
        function(e, t1) {
            e.exports = function(e, t1) {
                return {
                    value: t1,
                    done: !!e
                };
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(107);
            n(0)({
                target: "RegExp",
                proto: !0,
                forced: o !== /./.exec
            }, {
                exec: o
            });
        },
        function(e, t1, n) {
            n(17) && "g" != /./g.flags && n(18).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(75)
            });
        },
        function(e, t1, n) {
            "use strict";
            var o, r, i, a, s = n(46), l = n(10), c = n(31), u = n(64), f = n(0), d = n(13), p = n(32), h = n(59), v = n(78), g = n(65), y = n(109).set, k = n(302)(), b = n(140), m = n(303), w = n(79), x = n(141), C = l.TypeError, S = l.process, T = S && S.versions, E = T && T.v8 || "", B = l.Promise, M = "process" == u(S), _ = function() {}, O = r = b.f, I = !!function() {
                try {
                    var e = B.resolve(1), t1 = (e.constructor = {})[n(14)("species")] = function(e) {
                        e(_, _);
                    };
                    return (M || "function" == typeof PromiseRejectionEvent) && e.then(_) instanceof t1 && 0 !== E.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
                } catch (e) {}
            }(), L = function(e) {
                var t1;
                return !(!d(e) || "function" != typeof (t1 = e.then)) && t1;
            }, P = function(e, t1) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    k(function() {
                        for(var o = e._v, r = 1 == e._s, i = 0, a = function(t1) {
                            var n, i, a, s = r ? t1.ok : t1.fail, l = t1.resolve, c = t1.reject, u = t1.domain;
                            try {
                                s ? (r || (2 == e._h && A(e), e._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === t1.promise ? c(C("Promise-chain cycle")) : (i = L(n)) ? i.call(n, l, c) : l(n)) : c(o);
                            } catch (e) {
                                u && !a && u.exit(), c(e);
                            }
                        }; n.length > i;)a(n[i++]);
                        e._c = [], e._n = !1, t1 && !e._h && j(e);
                    });
                }
            }, j = function(e) {
                y.call(l, function() {
                    var t1, n, o, r = e._v, i = R(e);
                    if (i && (t1 = m(function() {
                        M ? S.emit("unhandledRejection", r, e) : (n = l.onunhandledrejection) ? n({
                            promise: e,
                            reason: r
                        }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", r);
                    }), e._h = M || R(e) ? 2 : 1), e._a = void 0, i && t1.e) throw t1.v;
                });
            }, R = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
            }, A = function(e) {
                y.call(l, function() {
                    var t1;
                    M ? S.emit("rejectionHandled", e) : (t1 = l.onrejectionhandled) && t1({
                        promise: e,
                        reason: e._v
                    });
                });
            }, N = function(e) {
                var t1 = this;
                t1._d || (t1._d = !0, (t1 = t1._w || t1)._v = e, t1._s = 2, t1._a || (t1._a = t1._c.slice()), P(t1, !0));
            }, D = function(e) {
                var t1, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw C("Promise can't be resolved itself");
                        (t1 = L(e)) ? k(function() {
                            var o = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t1.call(e, c(D, o, 1), c(N, o, 1));
                            } catch (e) {
                                N.call(o, e);
                            }
                        }) : (n._v = e, n._s = 1, P(n, !1));
                    } catch (e) {
                        N.call({
                            _w: n,
                            _d: !1
                        }, e);
                    }
                }
            };
            I || (B = function(e) {
                h(this, B, "Promise", "_h"), p(e), o.call(this);
                try {
                    e(c(D, this, 1), c(N, this, 1));
                } catch (e) {
                    N.call(this, e);
                }
            }, (o = function(e) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
            }).prototype = n(60)(B.prototype, {
                then: function(e, t1) {
                    var n = O(g(this, B));
                    return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t1 && t1, n.domain = M ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise;
                },
                catch: function(e) {
                    return this.then(void 0, e);
                }
            }), i = function() {
                var e = new o;
                this.promise = e, this.resolve = c(D, e, 1), this.reject = c(N, e, 1);
            }, b.f = O = function(e) {
                return e === B || e === a ? new i(e) : r(e);
            }), f(f.G + f.W + f.F * !I, {
                Promise: B
            }), n(55)(B, "Promise"), n(58)("Promise"), a = n(16).Promise, f(f.S + f.F * !I, "Promise", {
                reject: function(e) {
                    var t1 = O(this);
                    return (0, t1.reject)(e), t1.promise;
                }
            }), f(f.S + f.F * (s || !I), "Promise", {
                resolve: function(e) {
                    return x(s && this === a ? B : this, e);
                }
            }), f(f.S + f.F * !(I && n(74)(function(e) {
                B.all(e).catch(_);
            })), "Promise", {
                all: function(e) {
                    var t1 = this, n = O(t1), o = n.resolve, r = n.reject, i = m(function() {
                        var n = [], i = 0, a = 1;
                        v(e, !1, function(e) {
                            var s = i++, l = !1;
                            n.push(void 0), a++, t1.resolve(e).then(function(e) {
                                l || (l = !0, n[s] = e, --a || o(n));
                            }, r);
                        }), --a || o(n);
                    });
                    return i.e && r(i.v), n.promise;
                },
                race: function(e) {
                    var t1 = this, n = O(t1), o = n.reject, r = m(function() {
                        v(e, !1, function(e) {
                            t1.resolve(e).then(n.resolve, o);
                        });
                    });
                    return r.e && o(r.v), n.promise;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(32);
            function r(e) {
                var t1, n;
                this.promise = new e(function(e, o) {
                    if (void 0 !== t1 || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t1 = e, n = o;
                }), this.resolve = o(t1), this.reject = o(n);
            }
            e.exports.f = function(e) {
                return new r(e);
            };
        },
        function(e, t1, n) {
            var o = n(12), r = n(13), i = n(140);
            e.exports = function(e, t1) {
                if (o(e), r(t1) && t1.constructor === e) return t1;
                var n = i.f(e);
                return (0, n.resolve)(t1), n.promise;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(18).f, r = n(49), i = n(60), a = n(31), s = n(59), l = n(78), c = n(98), u = n(136), f = n(58), d = n(17), p = n(43).fastKey, h = n(53), v = d ? "_s" : "size", g = function(e, t1) {
                var n, o = p(t1);
                if ("F" !== o) return e._i[o];
                for(n = e._f; n; n = n.n)if (n.k == t1) return n;
            };
            e.exports = {
                getConstructor: function(e, t1, n, c) {
                    var u = e(function(e, o) {
                        s(e, u, t1, "_i"), e._t = t1, e._i = r(null), e._f = void 0, e._l = void 0, e[v] = 0, null != o && l(o, n, e[c], e);
                    });
                    return i(u.prototype, {
                        clear: function() {
                            for(var e = h(this, t1), n = e._i, o = e._f; o; o = o.n)o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                            e._f = e._l = void 0, e[v] = 0;
                        },
                        delete: function(e) {
                            var n = h(this, t1), o = g(n, e);
                            if (o) {
                                var r = o.n, i = o.p;
                                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--;
                            }
                            return !!o;
                        },
                        forEach: function(e) {
                            h(this, t1);
                            for(var n, o = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)for(o(n.v, n.k, this); n && n.r;)n = n.p;
                        },
                        has: function(e) {
                            return !!g(h(this, t1), e);
                        }
                    }), d && o(u.prototype, "size", {
                        get: function() {
                            return h(this, t1)[v];
                        }
                    }), u;
                },
                def: function(e, t1, n) {
                    var o, r, i = g(e, t1);
                    return i ? i.v = n : (e._l = i = {
                        i: r = p(t1, !0),
                        k: t1,
                        v: n,
                        p: o = e._l,
                        n: void 0,
                        r: !1
                    }, e._f || (e._f = i), o && (o.n = i), e[v]++, "F" !== r && (e._i[r] = i)), e;
                },
                getEntry: g,
                setStrong: function(e, t1, n) {
                    c(e, t1, function(e, n) {
                        this._t = h(e, t1), this._k = n, this._l = void 0;
                    }, function() {
                        for(var e = this._k, t1 = this._l; t1 && t1.r;)t1 = t1.p;
                        return this._t && (this._l = t1 = t1 ? t1.n : this._t._f) ? u(0, "keys" == e ? t1.k : "values" == e ? t1.v : [
                            t1.k,
                            t1.v
                        ]) : (this._t = void 0, u(1));
                    }, n ? "entries" : "values", !n, !0), f(t1);
                }
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(60), r = n(43).getWeak, i = n(12), a = n(13), s = n(59), l = n(78), c = n(36), u = n(26), f = n(53), d = c(5), p = c(6), h = 0, v = function(e) {
                return e._l || (e._l = new g);
            }, g = function() {
                this.a = [];
            }, y = function(e, t1) {
                return d(e.a, function(e) {
                    return e[0] === t1;
                });
            };
            g.prototype = {
                get: function(e) {
                    var t1 = y(this, e);
                    if (t1) return t1[1];
                },
                has: function(e) {
                    return !!y(this, e);
                },
                set: function(e, t1) {
                    var n = y(this, e);
                    n ? n[1] = t1 : this.a.push([
                        e,
                        t1
                    ]);
                },
                delete: function(e) {
                    var t1 = p(this.a, function(t1) {
                        return t1[0] === e;
                    });
                    return ~t1 && this.a.splice(t1, 1), !!~t1;
                }
            }, e.exports = {
                getConstructor: function(e, t1, n, i) {
                    var c = e(function(e, o) {
                        s(e, c, t1, "_i"), e._t = t1, e._i = h++, e._l = void 0, null != o && l(o, n, e[i], e);
                    });
                    return o(c.prototype, {
                        delete: function(e) {
                            if (!a(e)) return !1;
                            var n = r(e);
                            return !0 === n ? v(f(this, t1)).delete(e) : n && u(n, this._i) && delete n[this._i];
                        },
                        has: function(e) {
                            if (!a(e)) return !1;
                            var n = r(e);
                            return !0 === n ? v(f(this, t1)).has(e) : n && u(n, this._i);
                        }
                    }), c;
                },
                def: function(e, t1, n) {
                    var o = r(i(t1), !0);
                    return !0 === o ? v(e).set(t1, n) : o[e._i] = n, e;
                },
                ufstore: v
            };
        },
        function(e, t1, n) {
            var o = n(33), r = n(15);
            e.exports = function(e) {
                if (void 0 === e) return 0;
                var t1 = o(e), n = r(t1);
                if (t1 !== n) throw RangeError("Wrong length!");
                return n;
            };
        },
        function(e, t1, n) {
            var o = n(50), r = n(72), i = n(12), a = n(10).Reflect;
            e.exports = a && a.ownKeys || function(e) {
                var t1 = o.f(i(e)), n = r.f;
                return n ? t1.concat(n(e)) : t1;
            };
        },
        function(e, t1, n) {
            var o = n(15), r = n(94), i = n(39);
            e.exports = function(e, t1, n, a) {
                var s = String(i(e)), l = s.length, c = void 0 === n ? " " : String(n), u = o(t1);
                if (u <= l || "" == c) return s;
                var f = u - l, d = r.call(c, Math.ceil(f / c.length));
                return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
            };
        },
        function(e, t1, n) {
            var o = n(17), r = n(47), i = n(28), a = n(63).f;
            e.exports = function(e) {
                return function(t1) {
                    for(var n, s = i(t1), l = r(s), c = l.length, u = 0, f = []; c > u;)n = l[u++], o && !a.call(s, n) || f.push(e ? [
                        n,
                        s[n]
                    ] : s[n]);
                    return f;
                };
            };
        },
        function(e, t1, n) {
            var o = n(149);
            e.exports = function(e, t1) {
                if (e) {
                    if ("string" == typeof e) return o(e, t1);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t1) : void 0;
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e, t1) {
                (null == t1 || t1 > e.length) && (t1 = e.length);
                for(var n = 0, o = new Array(t1); n < t1; n++)o[n] = e[n];
                return o;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e) {
            e.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}},"popover":{"Filter":"","Nothing found":""}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":"","Click to delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(3),
                n(2),
                n(5),
                n(6),
                n(4),
                n(153)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r, i, a, s) {
                "use strict";
                var l = n(1);
                function c(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, a.default)(e);
                        if (t1) {
                            var r = (0, a.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, i.default)(this, n);
                    };
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CriticalError = void 0, t1 = l(t1), o = l(o), r = l(r), i = l(i), a = l(a);
                var u = function(e) {
                    (0, r.default)(i, e);
                    var n = c(i);
                    function i() {
                        return (0, o.default)(this, i), n.apply(this, arguments);
                    }
                    return (0, t1.default)(i);
                }((0, (s = l(s)).default)(Error));
                e.CriticalError = u, u.displayName = "CriticalError";
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(4), r = n(111), i = n(373), a = n(374);
            function s(t1) {
                var n = "function" == typeof Map ? new Map : void 0;
                return e.exports = s = function(e) {
                    if (null === e || !i(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, t1);
                    }
                    function t1() {
                        return a(e, arguments, o(this).constructor);
                    }
                    return t1.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(t1, e);
                }, e.exports.__esModule = !0, e.exports.default = e.exports, s(t1);
            }
            e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(8),
                n(113),
                n(9),
                n(61)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v) {
                "use strict";
                var g = n(1);
                function y(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (y = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function k(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = g(r), i = g(i), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(d), p = g(p), h = g(h), v = g(v);
                var b = function(e) {
                    (0, c.default)(n, e);
                    var t1 = k(n);
                    function n() {
                        var e;
                        return (0, s.default)(this, n), (e = t1.apply(this, arguments)).insert = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.config.defaultBlock, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = arguments.length > 6 ? arguments[6] : void 0, s = e.Editor.BlockManager.insert({
                                id: a,
                                tool: t1,
                                data: n,
                                index: o,
                                needToFocus: r,
                                replace: i
                            });
                            return new p.default(s);
                        }, e.composeBlockData = function() {
                            var t1 = (0, i.default)(r.default.mark(function t1(n) {
                                var o, i;
                                return r.default.wrap(function(t1) {
                                    for(;;)switch(t1.prev = t1.next){
                                        case 0:
                                            return o = e.Editor.Tools.blockTools.get(n), i = new v.default({
                                                tool: o,
                                                api: e.Editor.API,
                                                readOnly: !0,
                                                data: {},
                                                tunesData: {}
                                            }), t1.abrupt("return", i.data);
                                        case 3:
                                        case "end":
                                            return t1.stop();
                                    }
                                }, t1);
                            }));
                            return function(e) {
                                return t1.apply(this, arguments);
                            };
                        }(), e.update = function(t1, n) {
                            var o = e.Editor.BlockManager, r = o.getBlockById(t1);
                            if (r) {
                                var i = o.getBlockIndex(r);
                                o.insert({
                                    id: r.id,
                                    tool: r.name,
                                    data: n,
                                    index: i,
                                    replace: !0,
                                    tunes: r.tunes
                                });
                            } else d.log("blocks.update(): Block with passed id was not found", "warn");
                        }, e;
                    }
                    return (0, l.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    clear: function() {
                                        return e.clear();
                                    },
                                    render: function(t1) {
                                        return e.render(t1);
                                    },
                                    renderFromHTML: function(t1) {
                                        return e.renderFromHTML(t1);
                                    },
                                    delete: function(t1) {
                                        return e.delete(t1);
                                    },
                                    swap: function(t1, n) {
                                        return e.swap(t1, n);
                                    },
                                    move: function(t1, n) {
                                        return e.move(t1, n);
                                    },
                                    getBlockByIndex: function(t1) {
                                        return e.getBlockByIndex(t1);
                                    },
                                    getById: function(t1) {
                                        return e.getById(t1);
                                    },
                                    getCurrentBlockIndex: function() {
                                        return e.getCurrentBlockIndex();
                                    },
                                    getBlockIndex: function(t1) {
                                        return e.getBlockIndex(t1);
                                    },
                                    getBlocksCount: function() {
                                        return e.getBlocksCount();
                                    },
                                    stretchBlock: function(t1) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        return e.stretchBlock(t1, n);
                                    },
                                    insertNewBlock: function() {
                                        return e.insertNewBlock();
                                    },
                                    insert: this.insert,
                                    update: this.update,
                                    composeBlockData: this.composeBlockData
                                };
                            }
                        },
                        {
                            key: "getBlocksCount",
                            value: function() {
                                return this.Editor.BlockManager.blocks.length;
                            }
                        },
                        {
                            key: "getCurrentBlockIndex",
                            value: function() {
                                return this.Editor.BlockManager.currentBlockIndex;
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(e) {
                                var t1 = this.Editor.BlockManager.getBlockById(e);
                                if (t1) return this.Editor.BlockManager.getBlockIndex(t1);
                                d.logLabeled("There is no block with id `" + e + "`", "warn");
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(e) {
                                var t1 = this.Editor.BlockManager.getBlockByIndex(e);
                                if (void 0 !== t1) return new p.default(t1);
                                d.logLabeled("There is no block at index `" + e + "`", "warn");
                            }
                        },
                        {
                            key: "getById",
                            value: function(e) {
                                var t1 = this.Editor.BlockManager.getBlockById(e);
                                return void 0 === t1 ? (d.logLabeled("There is no block with id `" + e + "`", "warn"), null) : new p.default(t1);
                            }
                        },
                        {
                            key: "swap",
                            value: function(e, t1) {
                                d.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(e, t1);
                            }
                        },
                        {
                            key: "move",
                            value: function(e, t1) {
                                this.Editor.BlockManager.move(e, t1);
                            }
                        },
                        {
                            key: "delete",
                            value: function(e) {
                                try {
                                    this.Editor.BlockManager.removeBlock(e);
                                } catch (e) {
                                    return void d.logLabeled(e, "warn");
                                }
                                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "render",
                            value: function(e) {
                                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(e.blocks);
                            }
                        },
                        {
                            key: "renderFromHTML",
                            value: function(e) {
                                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
                            }
                        },
                        {
                            key: "stretchBlock",
                            value: function(e) {
                                var t1 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                d.deprecationAssert(!0, "blocks.stretchBlock()", "BlockAPI");
                                var n = this.Editor.BlockManager.getBlockByIndex(e);
                                n && (n.stretched = t1);
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function() {
                                d.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
                            }
                        }
                    ]), n;
                }(h.default);
                o.default = b, b.displayName = "BlocksAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).setToFirstBlock = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!e.Editor.BlockManager.firstBlock && (e.Editor.Caret.setToBlock(e.Editor.BlockManager.firstBlock, t1, n), !0);
                        }, e.setToLastBlock = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!e.Editor.BlockManager.lastBlock && (e.Editor.Caret.setToBlock(e.Editor.BlockManager.lastBlock, t1, n), !0);
                        }, e.setToPreviousBlock = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!e.Editor.BlockManager.previousBlock && (e.Editor.Caret.setToBlock(e.Editor.BlockManager.previousBlock, t1, n), !0);
                        }, e.setToNextBlock = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!e.Editor.BlockManager.nextBlock && (e.Editor.Caret.setToBlock(e.Editor.BlockManager.nextBlock, t1, n), !0);
                        }, e.setToBlock = function(t1) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.Editor.Caret.positions.DEFAULT, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return !!e.Editor.BlockManager.blocks[t1] && (e.Editor.Caret.setToBlock(e.Editor.BlockManager.blocks[t1], n, o), !0);
                        }, e.focus = function() {
                            var t1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return t1 ? e.setToLastBlock(e.Editor.Caret.positions.END) : e.setToFirstBlock(e.Editor.Caret.positions.START);
                        }, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    setToFirstBlock: this.setToFirstBlock,
                                    setToLastBlock: this.setToLastBlock,
                                    setToPreviousBlock: this.setToPreviousBlock,
                                    setToNextBlock: this.setToNextBlock,
                                    setToBlock: this.setToBlock,
                                    focus: this.focus
                                };
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "CaretAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    emit: function(t1, n) {
                                        return e.emit(t1, n);
                                    },
                                    off: function(t1, n) {
                                        return e.off(t1, n);
                                    },
                                    on: function(t1, n) {
                                        return e.on(t1, n);
                                    }
                                };
                            }
                        },
                        {
                            key: "on",
                            value: function(e, t1) {
                                this.eventsDispatcher.on(e, t1);
                            }
                        },
                        {
                            key: "emit",
                            value: function(e, t1) {
                                this.eventsDispatcher.emit(e, t1);
                            }
                        },
                        {
                            key: "off",
                            value: function(e, t1) {
                                this.eventsDispatcher.off(e, t1);
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "EventsAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(54),
                n(8),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u, f) {
                "use strict";
                var d = n(1);
                function p(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c);
                var h = function(e) {
                    (0, a.default)(n, e);
                    var t1 = p(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    t: function() {
                                        (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                                    }
                                };
                            }
                        },
                        {
                            key: "getMethodsForTool",
                            value: function(e) {
                                return Object.assign(this.methods, {
                                    t: function(t1) {
                                        return c.default.t(n.getNamespace(e), t1);
                                    }
                                });
                            }
                        }
                    ], [
                        {
                            key: "getNamespace",
                            value: function(e) {
                                return e.isTune() ? "blockTunes.".concat(e.name) : "tools.".concat(e.name);
                            }
                        }
                    ]), n;
                }((f = d(f)).default);
                o.default = h, h.displayName = "I18nAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    close: function() {
                                        return e.close();
                                    },
                                    open: function() {
                                        return e.open();
                                    }
                                };
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.Editor.InlineToolbar.tryToShow();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.InlineToolbar.close();
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "InlineToolbarAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    on: function(t1, n, o, r) {
                                        return e.on(t1, n, o, r);
                                    },
                                    off: function(t1, n, o, r) {
                                        return e.off(t1, n, o, r);
                                    },
                                    offById: function(t1) {
                                        return e.offById(t1);
                                    }
                                };
                            }
                        },
                        {
                            key: "on",
                            value: function(e, t1, n, o) {
                                return this.listeners.on(e, t1, n, o);
                            }
                        },
                        {
                            key: "off",
                            value: function(e, t1, n, o) {
                                this.listeners.off(e, t1, n, o);
                            }
                        },
                        {
                            key: "offById",
                            value: function(e) {
                                this.listeners.offById(e);
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "ListenersAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(378),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(e) {
                    (0, a.default)(n, e);
                    var t1 = d(n);
                    function n(e) {
                        var o, i = e.config, a = e.eventsDispatcher;
                        return (0, r.default)(this, n), (o = t1.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).notifier = new c.default, o;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    show: function(t1) {
                                        return e.show(t1);
                                    }
                                };
                            }
                        },
                        {
                            key: "show",
                            value: function(e) {
                                return this.notifier.show(e);
                            }
                        }
                    ]), n;
                }((u = f(u)).default);
                o.default = p, p.displayName = "NotifierAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    toggle: function(t1) {
                                        return e.toggle(t1);
                                    },
                                    get isEnabled () {
                                        return e.isEnabled;
                                    }
                                };
                            }
                        },
                        {
                            key: "toggle",
                            value: function(e) {
                                return this.Editor.ReadOnly.toggle(e);
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.Editor.ReadOnly.isEnabled;
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "ReadOnlyAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(66)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(e) {
                    (0, a.default)(n, e);
                    var t1 = d(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    clean: function(t1, n) {
                                        return e.clean(t1, n);
                                    }
                                };
                            }
                        },
                        {
                            key: "clean",
                            value: function(e, t1) {
                                return (0, u.clean)(e, t1);
                            }
                        }
                    ]), n;
                }((c = f(c)).default);
                o.default = p, p.displayName = "SanitizerAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(8),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f) {
                "use strict";
                var d = n(1);
                function p(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (p = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function h(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = d(r), i = d(i), s = d(s), l = d(l), c = d(c), u = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(u);
                var v = function(e) {
                    (0, s.default)(n, e);
                    var t1 = h(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    save: function() {
                                        return e.save();
                                    }
                                };
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                var e = "Editor's content can not be saved in read-only mode";
                                return this.Editor.ReadOnly.isEnabled ? (u.logLabeled(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
                            }
                        }
                    ]), n;
                }((f = d(f)).default);
                o.default = v, v.displayName = "SaverAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(25),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(e) {
                    (0, a.default)(n, e);
                    var t1 = d(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    findParentTag: function(t1, n) {
                                        return e.findParentTag(t1, n);
                                    },
                                    expandToTag: function(t1) {
                                        return e.expandToTag(t1);
                                    }
                                };
                            }
                        },
                        {
                            key: "findParentTag",
                            value: function(e, t1) {
                                return (new c.default).findParentTag(e, t1);
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(e) {
                                (new c.default).expandToTag(e);
                            }
                        }
                    ]), n;
                }((u = f(u)).default);
                o.default = p, p.displayName = "SelectionAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "classes",
                            get: function() {
                                return {
                                    block: "cdx-block",
                                    inlineToolButton: "ce-inline-tool",
                                    inlineToolButtonActive: "ce-inline-tool--active",
                                    input: "cdx-input",
                                    loader: "cdx-loader",
                                    button: "cdx-button",
                                    settingsButton: "cdx-settings-button",
                                    settingsButtonActive: "cdx-settings-button--active"
                                };
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "StylesAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f) {
                "use strict";
                var d = n(1);
                function p(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (p = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function h(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = d(r), i = d(i), s = d(s), l = d(l), c = d(c), u = d(u), f = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(f);
                var v = function(e) {
                    (0, s.default)(n, e);
                    var t1 = h(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    close: function() {
                                        return e.close();
                                    },
                                    open: function() {
                                        return e.open();
                                    },
                                    toggleBlockSettings: function(t1) {
                                        return e.toggleBlockSettings(t1);
                                    }
                                };
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.Editor.Toolbar.moveAndOpen();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "toggleBlockSettings",
                            value: function(e) {
                                -1 !== this.Editor.BlockManager.currentBlockIndex ? (null != e ? e : !this.Editor.BlockSettings.opened) ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close() : f.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = v, v.displayName = "ToolbarAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(115)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);
                var p = function(e) {
                    (0, a.default)(n, e);
                    var t1 = d(n);
                    function n(e) {
                        var o, i = e.config, a = e.eventsDispatcher;
                        return (0, r.default)(this, n), (o = t1.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new u.default, o;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "destroy",
                            value: function() {
                                this.tooltip.destroy();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var e = this;
                                return {
                                    show: function(t1, n, o) {
                                        return e.show(t1, n, o);
                                    },
                                    hide: function() {
                                        return e.hide();
                                    },
                                    onHover: function(t1, n, o) {
                                        return e.onHover(t1, n, o);
                                    }
                                };
                            }
                        },
                        {
                            key: "show",
                            value: function(e, t1, n) {
                                this.tooltip.show(e, t1, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.tooltip.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(e, t1, n) {
                                this.tooltip.onHover(e, t1, n);
                            }
                        }
                    ]), n;
                }(c.default);
                o.default = p, p.displayName = "TooltipAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, l.default)(e);
                        if (t1) {
                            var r = (0, l.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, s.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(e) {
                    (0, a.default)(n, e);
                    var t1 = f(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    nodes: this.editorNodes
                                };
                            }
                        },
                        {
                            key: "editorNodes",
                            get: function() {
                                return {
                                    wrapper: this.Editor.UI.nodes.wrapper,
                                    redactor: this.Editor.UI.nodes.redactor
                                };
                            }
                        }
                    ]), n;
                }((c = u(c)).default);
                o.default = d, d.displayName = "UiAPI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8),
                n(25),
                n(67)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p) {
                "use strict";
                var h = n(1);
                function v(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (v = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function g(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = h(r), i = h(i), s = h(s), l = h(l), c = h(c), u = h(u), f = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(f), d = h(d), p = h(p);
                var y = function(e) {
                    (0, s.default)(n, e);
                    var t1 = g(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "keydown",
                            value: function(e) {
                                switch(this.beforeKeydownProcessing(e), e.keyCode){
                                    case f.keyCodes.BACKSPACE:
                                        this.backspace(e);
                                        break;
                                    case f.keyCodes.ENTER:
                                        this.enter(e);
                                        break;
                                    case f.keyCodes.DOWN:
                                    case f.keyCodes.RIGHT:
                                        this.arrowRightAndDown(e);
                                        break;
                                    case f.keyCodes.UP:
                                    case f.keyCodes.LEFT:
                                        this.arrowLeftAndUp(e);
                                        break;
                                    case f.keyCodes.TAB:
                                        this.tabPressed(e);
                                }
                            }
                        },
                        {
                            key: "beforeKeydownProcessing",
                            value: function(e) {
                                this.needToolbarClosing(e) && f.isPrintableKey(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
                            }
                        },
                        {
                            key: "keyup",
                            value: function(e) {
                                e.shiftKey || this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "tabPressed",
                            value: function(e) {
                                this.Editor.BlockSelection.clearSelection(e);
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.InlineToolbar, r = t1.ConversionToolbar, i = n.currentBlock;
                                if (i) {
                                    var a = i.isEmpty, s = i.tool.isDefault && a, l = !a && r.opened, c = !a && !d.default.isCollapsed && o.opened, u = !l && !c;
                                    s ? this.activateToolbox() : u && this.activateBlockSettings();
                                }
                            }
                        },
                        {
                            key: "dragOver",
                            value: function(e) {
                                this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget = !0;
                            }
                        },
                        {
                            key: "dragLeave",
                            value: function(e) {
                                this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget = !1;
                            }
                        },
                        {
                            key: "handleCommandC",
                            value: function(e) {
                                var t1 = this.Editor.BlockSelection;
                                t1.anyBlockSelected && t1.copySelectedBlocks(e);
                            }
                        },
                        {
                            key: "handleCommandX",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockSelection, o = t1.BlockManager, r = t1.Caret;
                                n.anyBlockSelected && n.copySelectedBlocks(e).then(function() {
                                    var t1 = o.removeSelectedBlocks(), i = o.insertDefaultBlockAtIndex(t1, !0);
                                    r.setToBlock(i, r.positions.START), n.clearSelection(e);
                                });
                            }
                        },
                        {
                            key: "enter",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.UI;
                                if (!n.currentBlock.tool.isLineBreaksEnabled && !(o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey)) {
                                    var r = this.Editor.BlockManager.currentBlock;
                                    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r), e.preventDefault();
                                }
                            }
                        },
                        {
                            key: "backspace",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.BlockSelection, r = t1.Caret, i = n.currentBlock, a = i.tool;
                                if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                                    e.preventDefault();
                                    var s = n.currentBlockIndex;
                                    return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(e);
                                }
                                if (!a.isLineBreaksEnabled || r.isAtStart) {
                                    var l = 0 === n.currentBlockIndex;
                                    r.isAtStart && d.default.isCollapsed && i.currentInput === i.firstInput && !l && (e.preventDefault(), this.mergeBlocks());
                                }
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: function() {
                                var e = this.Editor, t1 = e.BlockManager, n = e.Caret, o = e.Toolbar, r = t1.previousBlock, i = t1.currentBlock;
                                if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (t1.removeBlock(t1.currentBlockIndex - 1), n.setToBlock(t1.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
                                n.createShadow(r.pluginsContent), t1.mergeBlocks(r, i).then(function() {
                                    n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close();
                                });
                            }
                        },
                        {
                            key: "arrowRightAndDown",
                            value: function(e) {
                                var t1 = this, n = p.default.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === f.keyCodes.TAB);
                                if (!this.Editor.UI.someToolbarOpened || !n) {
                                    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                    var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                                    e.shiftKey && e.keyCode === f.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((e.keyCode === f.keyCodes.DOWN || e.keyCode === f.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : f.delay(function() {
                                        t1.Editor.BlockManager.currentBlock && t1.Editor.BlockManager.currentBlock.updateCurrentInput();
                                    }, 20)(), this.Editor.BlockSelection.clearSelection(e));
                                }
                            }
                        },
                        {
                            key: "arrowLeftAndUp",
                            value: function(e) {
                                var t1 = this;
                                if (this.Editor.UI.someToolbarOpened) {
                                    if (p.default.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === f.keyCodes.TAB)) return;
                                    this.Editor.UI.closeAllToolbars();
                                }
                                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                                e.shiftKey && e.keyCode === f.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : ((e.keyCode === f.keyCodes.UP || e.keyCode === f.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : f.delay(function() {
                                    t1.Editor.BlockManager.currentBlock && t1.Editor.BlockManager.currentBlock.updateCurrentInput();
                                }, 20)(), this.Editor.BlockSelection.clearSelection(e));
                            }
                        },
                        {
                            key: "needToolbarClosing",
                            value: function(e) {
                                var t1 = e.keyCode === f.keyCodes.ENTER && this.Editor.Toolbar.toolbox.opened, n = e.keyCode === f.keyCodes.ENTER && this.Editor.BlockSettings.opened, o = e.keyCode === f.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r = e.keyCode === f.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i = e.keyCode === f.keyCodes.TAB;
                                return !(e.shiftKey || i || t1 || n || o || r);
                            }
                        },
                        {
                            key: "activateToolbox",
                            value: function() {
                                this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
                            }
                        },
                        {
                            key: "activateBlockSettings",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = y, y.displayName = "BlockEvents", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(61),
                n(9),
                n(19),
                n(8),
                n(383),
                n(113),
                n(384)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y, k) {
                "use strict";
                var b = n(1);
                function m(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (m = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function w(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }
                function x(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = b(r), i = b(i), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = w(d), p = b(p), h = b(h), v = w(v), g = b(g), y = b(y);
                var C = function(e) {
                    (0, c.default)(a, e);
                    var t1, n, o = x(a);
                    function a() {
                        var e;
                        return (0, s.default)(this, a), (e = o.apply(this, arguments))._currentBlockIndex = -1, e._blocks = null, e;
                    }
                    return (0, l.default)(a, [
                        {
                            key: "currentBlockIndex",
                            get: function() {
                                return this._currentBlockIndex;
                            },
                            set: function(e) {
                                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[e] && this._blocks[e].willSelect(), this._currentBlockIndex = e;
                            }
                        },
                        {
                            key: "firstBlock",
                            get: function() {
                                return this._blocks[0];
                            }
                        },
                        {
                            key: "lastBlock",
                            get: function() {
                                return this._blocks[this._blocks.length - 1];
                            }
                        },
                        {
                            key: "currentBlock",
                            get: function() {
                                return this._blocks[this.currentBlockIndex];
                            },
                            set: function(e) {
                                this.currentBlockIndex = this.getBlockIndex(e);
                            }
                        },
                        {
                            key: "nextBlock",
                            get: function() {
                                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
                            }
                        },
                        {
                            key: "nextContentfulBlock",
                            get: function() {
                                return this.blocks.slice(this.currentBlockIndex + 1).find(function(e) {
                                    return !!e.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousContentfulBlock",
                            get: function() {
                                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(e) {
                                    return !!e.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousBlock",
                            get: function() {
                                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
                            }
                        },
                        {
                            key: "blocks",
                            get: function() {
                                return this._blocks.array;
                            }
                        },
                        {
                            key: "isEditorEmpty",
                            get: function() {
                                return this.blocks.every(function(e) {
                                    return e.isEmpty;
                                });
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                var e = this, t1 = new g.default(this.Editor.UI.nodes.redactor);
                                this._blocks = new Proxy(t1, {
                                    set: g.default.set,
                                    get: g.default.get
                                }), this.listeners.on(document, "copy", function(t1) {
                                    return e.Editor.BlockEvents.handleCommandC(t1);
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "composeBlock",
                            value: function(e) {
                                var t1 = e.tool, n = e.data, o = void 0 === n ? {} : n, r = e.id, i = void 0 === r ? void 0 : r, a = e.tunes, s = void 0 === a ? {} : a, l = this.Editor.ReadOnly.isEnabled, c = this.Editor.Tools.blockTools.get(t1), u = new d.default({
                                    id: i,
                                    data: o,
                                    tool: c,
                                    api: this.Editor.API,
                                    readOnly: l,
                                    tunesData: s
                                });
                                return l || this.bindBlockEvents(u), u;
                            }
                        },
                        {
                            key: "insert",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t1 = e.id, n = void 0 === t1 ? void 0 : t1, o = e.tool, r = void 0 === o ? this.config.defaultBlock : o, i = e.data, a = void 0 === i ? {} : i, s = e.index, l = e.needToFocus, c = void 0 === l || l, u = e.replace, f = void 0 !== u && u, d = e.tunes, p = void 0 === d ? {} : d, h = s;
                                void 0 === h && (h = this.currentBlockIndex + (f ? 0 : 1));
                                var v = this.composeBlock({
                                    id: n,
                                    tool: r,
                                    data: a,
                                    tunes: p
                                });
                                return f && this.blockDidMutated(k.BlockMutationType.Removed, this.getBlockByIndex(h), {
                                    index: h
                                }), this._blocks.insert(h, v, f), this.blockDidMutated(k.BlockMutationType.Added, v, {
                                    index: h
                                }), c ? this.currentBlockIndex = h : h <= this.currentBlockIndex && this.currentBlockIndex++, v;
                            }
                        },
                        {
                            key: "replace",
                            value: function(e) {
                                var t1 = e.tool, n = void 0 === t1 ? this.config.defaultBlock : t1, o = e.data, r = void 0 === o ? {} : o;
                                return this.insert({
                                    tool: n,
                                    data: r,
                                    index: this.currentBlockIndex,
                                    replace: !0
                                });
                            }
                        },
                        {
                            key: "paste",
                            value: function(e, t1) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.insert({
                                    tool: e,
                                    replace: n
                                });
                                try {
                                    o.call(d.BlockToolAPI.ON_PASTE, t1);
                                } catch (t1) {
                                    v.log("".concat(e, ": onPaste callback call is failed"), "error", t1);
                                }
                                return o;
                            }
                        },
                        {
                            key: "insertDefaultBlockAtIndex",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.composeBlock({
                                    tool: this.config.defaultBlock
                                });
                                return this._blocks[e] = n, this.blockDidMutated(k.BlockMutationType.Added, n, {
                                    index: e
                                }), t1 ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, n;
                            }
                        },
                        {
                            key: "insertAtEnd",
                            value: function() {
                                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: (n = (0, i.default)(r.default.mark(function e(t1, n) {
                                var o, i;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = this._blocks.indexOf(n), !n.isEmpty) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return e.next = 5, n.data;
                                        case 5:
                                            if (i = e.sent, v.isEmpty(i)) {
                                                e.next = 9;
                                                break;
                                            }
                                            return e.next = 9, t1.mergeWith(i);
                                        case 9:
                                            this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(t1);
                                        case 11:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e, t1) {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "removeBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                                if (!this.validateIndex(e)) throw new Error("Can't find a Block to remove");
                                var t1 = this._blocks[e];
                                t1.destroy(), this._blocks.remove(e), this.blockDidMutated(k.BlockMutationType.Removed, t1, {
                                    index: e
                                }), this.currentBlockIndex >= e && this.currentBlockIndex--, this.blocks.length ? 0 === e && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
                            }
                        },
                        {
                            key: "removeSelectedBlocks",
                            value: function() {
                                for(var e, t1 = this.blocks.length - 1; t1 >= 0; t1--)this.blocks[t1].selected && (this.removeBlock(t1), e = t1);
                                return e;
                            }
                        },
                        {
                            key: "removeAllBlocks",
                            value: function() {
                                for(var e = this.blocks.length - 1; e >= 0; e--)this._blocks.remove(e);
                                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
                            }
                        },
                        {
                            key: "split",
                            value: function() {
                                var e = this.Editor.Caret.extractFragmentFromCaretPosition(), t1 = h.default.make("div");
                                t1.appendChild(e);
                                var n = {
                                    text: h.default.isEmpty(t1) ? "" : t1.innerHTML
                                };
                                return this.insert({
                                    data: n
                                });
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(e) {
                                return -1 === e && (e = this._blocks.length - 1), this._blocks[e];
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(e) {
                                return this._blocks.indexOf(e);
                            }
                        },
                        {
                            key: "getBlockById",
                            value: function(e) {
                                return this._blocks.array.find(function(t1) {
                                    return t1.id === e;
                                });
                            }
                        },
                        {
                            key: "getBlock",
                            value: function(e) {
                                h.default.isElement(e) || (e = e.parentNode);
                                var t1 = this._blocks.nodes, n = e.closest(".".concat(d.default.CSS.wrapper)), o = t1.indexOf(n);
                                if (o >= 0) return this._blocks[o];
                            }
                        },
                        {
                            key: "highlightCurrentNode",
                            value: function() {
                                this.clearFocused(), this.currentBlock.focused = !0;
                            }
                        },
                        {
                            key: "clearFocused",
                            value: function() {
                                this.blocks.forEach(function(e) {
                                    e.focused = !1;
                                });
                            }
                        },
                        {
                            key: "setCurrentBlockByChildNode",
                            value: function(e) {
                                h.default.isElement(e) || (e = e.parentNode);
                                var t1 = e.closest(".".concat(d.default.CSS.wrapper));
                                if (t1) {
                                    var n = t1.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                                    if (null == n ? void 0 : n.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t1), this.currentBlock.updateCurrentInput(), this.currentBlock;
                                }
                            }
                        },
                        {
                            key: "getBlockByChildNode",
                            value: function(e) {
                                h.default.isElement(e) || (e = e.parentNode);
                                var t1 = e.closest(".".concat(d.default.CSS.wrapper));
                                return this.blocks.find(function(e) {
                                    return e.holder === t1;
                                });
                            }
                        },
                        {
                            key: "swap",
                            value: function(e, t1) {
                                this._blocks.swap(e, t1), this.currentBlockIndex = t1;
                            }
                        },
                        {
                            key: "move",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                                isNaN(e) || isNaN(t1) ? v.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(e) && this.validateIndex(t1) ? (this._blocks.move(e, t1), this.currentBlockIndex = e, this.blockDidMutated(k.BlockMutationType.Moved, this.currentBlock, {
                                    fromIndex: t1,
                                    toIndex: e
                                })) : v.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
                            }
                        },
                        {
                            key: "dropPointer",
                            value: function() {
                                this.currentBlockIndex = -1, this.clearFocused();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this._blocks.removeAll(), this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "destroy",
                            value: (t1 = (0, i.default)(r.default.mark(function e() {
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return e.next = 2, Promise.all(this.blocks.map(function(e) {
                                                return e.destroy();
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "bindBlockEvents",
                            value: function(e) {
                                var t1 = this, n = this.Editor.BlockEvents;
                                this.readOnlyMutableListeners.on(e.holder, "keydown", function(e) {
                                    n.keydown(e);
                                }), this.readOnlyMutableListeners.on(e.holder, "keyup", function(e) {
                                    n.keyup(e);
                                }), this.readOnlyMutableListeners.on(e.holder, "dragover", function(e) {
                                    n.dragOver(e);
                                }), this.readOnlyMutableListeners.on(e.holder, "dragleave", function(e) {
                                    n.dragLeave(e);
                                }), e.on("didMutated", function(e) {
                                    return t1.blockDidMutated(k.BlockMutationType.Changed, e, {
                                        index: t1.getBlockIndex(e)
                                    });
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var e = this;
                                this.readOnlyMutableListeners.on(document, "cut", function(t1) {
                                    return e.Editor.BlockEvents.handleCommandX(t1);
                                }), this.blocks.forEach(function(t1) {
                                    e.bindBlockEvents(t1);
                                });
                            }
                        },
                        {
                            key: "validateIndex",
                            value: function(e) {
                                return !(e < 0 || e >= this._blocks.length);
                            }
                        },
                        {
                            key: "blockDidMutated",
                            value: function(e, t1) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = new CustomEvent(e, {
                                    detail: Object.assign({
                                        target: new y.default(t1)
                                    }, n)
                                });
                                return this.Editor.ModificationsObserver.onChange(o), t1;
                            }
                        }
                    ]), a;
                }(p.default);
                o.default = C, C.displayName = "BlockManager", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8),
                n(19),
                n(116),
                n(25),
                n(66)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v) {
                "use strict";
                var g = n(1);
                function y(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (y = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function k(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = g(r), i = g(i), s = g(s), l = g(l), c = g(c), u = g(u), f = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(f), d = g(d), p = g(p), h = g(h);
                var b = function(e) {
                    (0, s.default)(n, e);
                    var t1 = k(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).anyBlockSelectedCache = null, e.needToSelectAll = !1, e.nativeInputSelected = !1, e.readyToBlockSelection = !1, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "sanitizerConfig",
                            get: function() {
                                return {
                                    p: {},
                                    h1: {},
                                    h2: {},
                                    h3: {},
                                    h4: {},
                                    h5: {},
                                    h6: {},
                                    ol: {},
                                    ul: {},
                                    li: {},
                                    br: !0,
                                    img: {
                                        src: !0,
                                        width: !0,
                                        height: !0
                                    },
                                    a: {
                                        href: !0
                                    },
                                    b: {},
                                    i: {},
                                    u: {}
                                };
                            }
                        },
                        {
                            key: "allBlocksSelected",
                            get: function() {
                                return this.Editor.BlockManager.blocks.every(function(e) {
                                    return !0 === e.selected;
                                });
                            },
                            set: function(e) {
                                this.Editor.BlockManager.blocks.forEach(function(t1) {
                                    t1.selected = e;
                                }), this.clearCache();
                            }
                        },
                        {
                            key: "anyBlockSelected",
                            get: function() {
                                var e = this.Editor.BlockManager;
                                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = e.blocks.some(function(e) {
                                    return !0 === e.selected;
                                })), this.anyBlockSelectedCache;
                            }
                        },
                        {
                            key: "selectedBlocks",
                            get: function() {
                                return this.Editor.BlockManager.blocks.filter(function(e) {
                                    return e.selected;
                                });
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                var e = this;
                                this.selection = new h.default, p.default.add({
                                    name: "CMD+A",
                                    handler: function(t1) {
                                        var n = e.Editor, o = n.BlockManager;
                                        if (n.ReadOnly.isEnabled) return t1.preventDefault(), void e.selectAllBlocks();
                                        o.currentBlock && e.handleCommandA(t1);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function() {
                                h.default.get().removeAllRanges(), this.allBlocksSelected = !1;
                            }
                        },
                        {
                            key: "unSelectBlockByIndex",
                            value: function(e) {
                                var t1 = this.Editor.BlockManager;
                                (isNaN(e) ? t1.currentBlock : t1.getBlockByIndex(e)).selected = !1, this.clearCache();
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.Editor, o = n.BlockManager, r = n.Caret, i = n.RectangleSelection;
                                this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
                                var a = e && e instanceof KeyboardEvent, s = a && f.isPrintableKey(e.keyCode);
                                if (this.anyBlockSelected && a && s && !h.default.isSelectionExists) {
                                    var l = o.removeSelectedBlocks();
                                    o.insertDefaultBlockAtIndex(l, !0), r.setToBlock(o.currentBlock), f.delay(function() {
                                        var t1 = e.key;
                                        r.insertContentAtCaretPosition(t1.length > 1 ? "" : t1);
                                    }, 20)();
                                }
                                this.Editor.CrossBlockSelection.clear(e), this.anyBlockSelected && !i.isRectActivated() ? (t1 && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
                            }
                        },
                        {
                            key: "copySelectedBlocks",
                            value: function(e) {
                                var t1 = this;
                                e.preventDefault();
                                var n = d.default.make("div");
                                this.selectedBlocks.forEach(function(e) {
                                    var o = (0, v.clean)(e.holder.innerHTML, t1.sanitizerConfig), r = d.default.make("p");
                                    r.innerHTML = o, n.appendChild(r);
                                });
                                var o = Array.from(n.childNodes).map(function(e) {
                                    return e.textContent;
                                }).join("\n\n"), r = n.innerHTML;
                                return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", r), Promise.all(this.selectedBlocks.map(function(e) {
                                    return e.save();
                                })).then(function(n) {
                                    try {
                                        e.clipboardData.setData(t1.Editor.Paste.MIME_TYPE, JSON.stringify(n));
                                    } catch (e) {}
                                });
                            }
                        },
                        {
                            key: "selectBlockByIndex",
                            value: function(e) {
                                var t1, n = this.Editor.BlockManager;
                                n.clearFocused(), t1 = isNaN(e) ? n.currentBlock : n.getBlockByIndex(e), this.selection.save(), h.default.get().removeAllRanges(), t1.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "clearCache",
                            value: function() {
                                this.anyBlockSelectedCache = null;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                p.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
                            }
                        },
                        {
                            key: "handleCommandA",
                            value: function(e) {
                                if (this.Editor.RectangleSelection.clearSelection(), !d.default.isNativeInput(e.target) || this.readyToBlockSelection) {
                                    var t1 = this.Editor.BlockManager.getBlock(e.target).inputs;
                                    t1.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== t1.length || this.needToSelectAll ? this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
                                } else this.readyToBlockSelection = !0;
                            }
                        },
                        {
                            key: "selectAllBlocks",
                            value: function() {
                                this.selection.save(), h.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = b, b.displayName = "BlockSelection", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(25),
                n(9),
                n(19),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p) {
                "use strict";
                var h = n(1);
                function v(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (v = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function g(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = h(r), i = h(i), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = h(d), p = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(p);
                var y = function(e) {
                    (0, s.default)(n, e);
                    var t1 = g(n);
                    function n() {
                        return (0, r.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, i.default)(n, [
                        {
                            key: "positions",
                            get: function() {
                                return {
                                    START: "start",
                                    END: "end",
                                    DEFAULT: "default"
                                };
                            }
                        },
                        {
                            key: "isAtStart",
                            get: function() {
                                var e = u.default.get(), t1 = d.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n = e.focusNode;
                                if (d.default.isNativeInput(t1)) return 0 === t1.selectionEnd;
                                if (!e.anchorNode) return !1;
                                var o = n.textContent.search(/\S/);
                                -1 === o && (o = 0);
                                var r = e.focusOffset;
                                return n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[r] ? (n = n.childNodes[r], r = 0) : r = (n = n.childNodes[r - 1]).textContent.length), !(!d.default.isLineBreakTag(t1) && !d.default.isEmpty(t1) || !this.getHigherLevelSiblings(n, "left").every(function(e) {
                                    var t1 = d.default.isLineBreakTag(e), n = 1 === e.children.length && d.default.isLineBreakTag(e.children[0]), o = t1 || n;
                                    return d.default.isEmpty(e) && !o;
                                }) || r !== o) || null === t1 || n === t1 && r <= o;
                            }
                        },
                        {
                            key: "isAtEnd",
                            get: function() {
                                var e = u.default.get(), t1 = e.focusNode, n = d.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                                if (d.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                                if (!e.focusNode) return !1;
                                var o = e.focusOffset;
                                if (t1.nodeType !== Node.TEXT_NODE && t1.childNodes.length && (t1.childNodes[o - 1] ? o = (t1 = t1.childNodes[o - 1]).textContent.length : (t1 = t1.childNodes[0], o = 0)), d.default.isLineBreakTag(n) || d.default.isEmpty(n)) {
                                    var r = this.getHigherLevelSiblings(t1, "right");
                                    if (r.every(function(e, t1) {
                                        return t1 === r.length - 1 && d.default.isLineBreakTag(e) || d.default.isEmpty(e) && !d.default.isLineBreakTag(e);
                                    }) && o === t1.textContent.length) return !0;
                                }
                                var i = n.textContent.replace(/\s+$/, "");
                                return t1 === n && o >= i.length;
                            }
                        },
                        {
                            key: "setToBlock",
                            value: function(e) {
                                var t1, n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = this.Editor.BlockManager;
                                switch(o){
                                    case this.positions.START:
                                        t1 = e.firstInput;
                                        break;
                                    case this.positions.END:
                                        t1 = e.lastInput;
                                        break;
                                    default:
                                        t1 = e.currentInput;
                                }
                                if (t1) {
                                    var a = d.default.getDeepestNode(t1, o === this.positions.END), s = d.default.getContentLength(a);
                                    switch(!0){
                                        case o === this.positions.START:
                                            r = 0;
                                            break;
                                        case o === this.positions.END:
                                        case r > s:
                                            r = s;
                                    }
                                    p.delay(function() {
                                        n.set(a, r);
                                    }, 20)(), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = t1;
                                }
                            }
                        },
                        {
                            key: "setToInput",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = this.Editor.BlockManager.currentBlock, r = d.default.getDeepestNode(e);
                                switch(t1){
                                    case this.positions.START:
                                        this.set(r, 0);
                                        break;
                                    case this.positions.END:
                                        this.set(r, d.default.getContentLength(r));
                                        break;
                                    default:
                                        n && this.set(r, n);
                                }
                                o.currentInput = e;
                            }
                        },
                        {
                            key: "set",
                            value: function(e) {
                                var t1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = u.default.setCursor(e, t1), o = n.top, r = n.bottom, i = window, a = i.innerHeight;
                                o < 0 && window.scrollBy(0, o), r > a && window.scrollBy(0, r - a);
                            }
                        },
                        {
                            key: "setToTheLastBlock",
                            value: function() {
                                var e = this.Editor.BlockManager.lastBlock;
                                if (e) {
                                    if (e.tool.isDefault && e.isEmpty) this.setToBlock(e);
                                    else {
                                        var t1 = this.Editor.BlockManager.insertAtEnd();
                                        this.setToBlock(t1);
                                    }
                                }
                            }
                        },
                        {
                            key: "extractFragmentFromCaretPosition",
                            value: function() {
                                var e = u.default.get();
                                if (e.rangeCount) {
                                    var t1 = e.getRangeAt(0), n = this.Editor.BlockManager.currentBlock.currentInput;
                                    if (t1.deleteContents(), n) {
                                        if (d.default.isNativeInput(n)) {
                                            var o = n, r = document.createDocumentFragment(), i = o.value.substring(0, o.selectionStart), a = o.value.substring(o.selectionStart);
                                            return r.textContent = a, o.value = i, r;
                                        }
                                        var s = t1.cloneRange();
                                        return s.selectNodeContents(n), s.setStart(t1.endContainer, t1.endOffset), s.extractContents();
                                    }
                                }
                            }
                        },
                        {
                            key: "navigateNext",
                            value: function() {
                                var e = this.Editor.BlockManager, t1 = e.currentBlock, n = e.nextContentfulBlock, o = t1.nextInput, r = this.isAtEnd, i = n;
                                if (!i && !o) {
                                    if (t1.tool.isDefault || !r) return !1;
                                    i = e.insertAtEnd();
                                }
                                return !!r && (o ? this.setToInput(o, this.positions.START) : this.setToBlock(i, this.positions.START), !0);
                            }
                        },
                        {
                            key: "navigatePrevious",
                            value: function() {
                                var e = this.Editor.BlockManager, t1 = e.currentBlock, n = e.previousContentfulBlock;
                                if (!t1) return !1;
                                var o = t1.previousInput;
                                return !(!n && !o || !this.isAtStart || (o ? this.setToInput(o, this.positions.END) : this.setToBlock(n, this.positions.END), 0));
                            }
                        },
                        {
                            key: "createShadow",
                            value: function(e) {
                                var t1 = document.createElement("span");
                                t1.classList.add(n.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t1);
                            }
                        },
                        {
                            key: "restoreCaret",
                            value: function(e) {
                                var t1 = e.querySelector(".".concat(n.CSS.shadowCaret));
                                t1 && ((new u.default).expandToTag(t1), setTimeout(function() {
                                    var e = document.createRange();
                                    e.selectNode(t1), e.extractContents();
                                }, 50));
                            }
                        },
                        {
                            key: "insertContentAtCaretPosition",
                            value: function(e) {
                                var t1 = document.createDocumentFragment(), n = document.createElement("div"), o = u.default.get(), r = u.default.range;
                                n.innerHTML = e, Array.from(n.childNodes).forEach(function(e) {
                                    return t1.appendChild(e);
                                }), 0 === t1.childNodes.length && t1.appendChild(new Text);
                                var i = t1.lastChild;
                                r.deleteContents(), r.insertNode(t1);
                                var a = document.createRange();
                                a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a);
                            }
                        },
                        {
                            key: "getHigherLevelSiblings",
                            value: function(e, t1) {
                                for(var n = e, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;)n = n.parentNode;
                                for(var r = "left" === t1 ? "previousSibling" : "nextSibling"; n[r];)n = n[r], o.push(n);
                                return o;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    shadowCaret: "cdx-shadow-caret"
                                };
                            }
                        }
                    ]), n;
                }(f.default);
                o.default = y, y.displayName = "Caret", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(25),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n(1);
                function g(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (g = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function y(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = v(r), i = v(i), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = v(p), h = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(h);
                var k = function(e) {
                    (0, c.default)(o, e);
                    var t1, n = y(o);
                    function o() {
                        var e;
                        return (0, s.default)(this, o), (e = n.apply(this, arguments)).onMouseUp = function() {
                            e.listeners.off(document, "mouseover", e.onMouseOver), e.listeners.off(document, "mouseup", e.onMouseUp);
                        }, e.onMouseOver = function(t1) {
                            var n = e.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.getBlockByChildNode(t1.relatedTarget) || e.lastSelectedBlock, a = o.getBlockByChildNode(t1.target);
                            if (i && a && a !== i) {
                                if (i === e.firstSelectedBlock) return p.default.get().removeAllRanges(), i.selected = !0, a.selected = !0, void r.clearCache();
                                if (a === e.firstSelectedBlock) return i.selected = !1, a.selected = !1, void r.clearCache();
                                e.Editor.InlineToolbar.close(), e.toggleBlocksSelectedState(i, a), e.lastSelectedBlock = a;
                            }
                        }, e;
                    }
                    return (0, l.default)(o, [
                        {
                            key: "prepare",
                            value: (t1 = (0, i.default)(r.default.mark(function e() {
                                var t1 = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            this.listeners.on(document, "mousedown", function(e) {
                                                t1.enableCrossBlockSelection(e);
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "watchSelection",
                            value: function(e) {
                                if (e.button === h.mouseButtons.LEFT) {
                                    var t1 = this.Editor.BlockManager;
                                    this.firstSelectedBlock = t1.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                                }
                            }
                        },
                        {
                            key: "isCrossBlockSelectionStarted",
                            get: function() {
                                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
                            }
                        },
                        {
                            key: "toggleBlockSelectedState",
                            value: function() {
                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t1 = this.Editor, n = t1.BlockManager, o = t1.BlockSelection;
                                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), p.default.get().removeAllRanges());
                                var r = n.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), i = n.blocks[r];
                                i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
                                    block: "nearest"
                                }));
                            }
                        },
                        {
                            key: "clear",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.BlockSelection, r = t1.Caret, i = n.blocks.indexOf(this.firstSelectedBlock), a = n.blocks.indexOf(this.lastSelectedBlock);
                                if (o.anyBlockSelected && i > -1 && a > -1) {
                                    if (e && e instanceof KeyboardEvent) switch(e.keyCode){
                                        case h.keyCodes.DOWN:
                                        case h.keyCodes.RIGHT:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                            break;
                                        case h.keyCodes.UP:
                                        case h.keyCodes.LEFT:
                                            r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                            break;
                                        default:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    }
                                    else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                }
                                this.firstSelectedBlock = this.lastSelectedBlock = null;
                            }
                        },
                        {
                            key: "enableCrossBlockSelection",
                            value: function(e) {
                                var t1 = this.Editor.UI;
                                p.default.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t1.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
                            }
                        },
                        {
                            key: "toggleBlocksSelectedState",
                            value: function(e, t1) {
                                for(var n = this.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.blocks.indexOf(e), a = o.blocks.indexOf(t1), s = e.selected !== t1.selected, l = Math.min(i, a); l <= Math.max(i, a); l++){
                                    var c = o.blocks[l];
                                    c !== this.firstSelectedBlock && c !== (s ? e : t1) && (o.blocks[l].selected = !o.blocks[l].selected, r.clearCache());
                                }
                            }
                        }
                    ]), o;
                }(d.default);
                o.default = k, k.displayName = "CrossBlockSelection", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(25),
                n(9)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u, f, d) {
                "use strict";
                var p = n(1);
                function h(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, u.default)(e);
                        if (t1) {
                            var r = (0, u.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, c.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f);
                var v = function(e) {
                    (0, l.default)(o, e);
                    var t1, n = h(o);
                    function o() {
                        var e;
                        return (0, a.default)(this, o), (e = n.apply(this, arguments)).isStartedAtEditor = !1, e;
                    }
                    return (0, s.default)(o, [
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var e = this, t1 = this.Editor.UI;
                                this.readOnlyMutableListeners.on(t1.nodes.holder, "drop", function() {
                                    var t1 = (0, i.default)(r.default.mark(function t1(n) {
                                        return r.default.wrap(function(t1) {
                                            for(;;)switch(t1.prev = t1.next){
                                                case 0:
                                                    return t1.next = 2, e.processDrop(n);
                                                case 2:
                                                case "end":
                                                    return t1.stop();
                                            }
                                        }, t1);
                                    }));
                                    return function(e) {
                                        return t1.apply(this, arguments);
                                    };
                                }(), !0), this.readOnlyMutableListeners.on(t1.nodes.holder, "dragstart", function() {
                                    e.processDragStart();
                                }), this.readOnlyMutableListeners.on(t1.nodes.holder, "dragover", function(t1) {
                                    e.processDragOver(t1);
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "processDrop",
                            value: (t1 = (0, i.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s, l;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Paste, t1.preventDefault(), o.blocks.forEach(function(e) {
                                                e.dropTarget = !1;
                                            }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1, (s = o.setCurrentBlockByChildNode(t1.target)) ? this.Editor.Caret.setToBlock(s, i.positions.END) : (l = o.setCurrentBlockByChildNode(o.lastBlock.holder), this.Editor.Caret.setToBlock(l, i.positions.END)), e.next = 9, a.processDataTransfer(t1.dataTransfer, !0);
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "processDragStart",
                            value: function() {
                                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "processDragOver",
                            value: function(e) {
                                e.preventDefault();
                            }
                        }
                    ]), o;
                }((d = p(d)).default);
                o.default = v, v.displayName = "DragNDrop", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f) {
                "use strict";
                var d = n(1);
                function p(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (p = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function h(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = d(r), i = d(i), s = d(s), l = d(l), c = d(c), u = d(u), f = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(f);
                var v = function(e) {
                    (0, s.default)(n, e);
                    var t1 = h(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).disabled = !1, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "enable",
                            value: function() {
                                this.disabled = !1;
                            }
                        },
                        {
                            key: "disable",
                            value: function() {
                                this.disabled = !0;
                            }
                        },
                        {
                            key: "onChange",
                            value: function(e) {
                                !this.disabled && f.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, e);
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = v, v.displayName = "ModificationsObserver", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(30),
                n(41),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(8),
                n(66)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y) {
                "use strict";
                var k = n(1);
                function b(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (b = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function m(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = k(r), i = k(i), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = k(h), v = k(v), g = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(g);
                var w = function(e) {
                    (0, f.default)(w, e);
                    var t1, n, o, a, d, p, h, k, b = m(w);
                    function w() {
                        var e;
                        return (0, c.default)(this, w), (e = b.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", e.toolsTags = {}, e.tagsByTool = {}, e.toolsPatterns = [], e.toolsFiles = {}, e.exceptionList = [], e.processTool = function(t1) {
                            try {
                                var n = t1.create({}, {}, !1);
                                if (!1 === t1.pasteConfig) return void e.exceptionList.push(t1.name);
                                if (!g.isFunction(n.onPaste)) return;
                                e.getTagsConfig(t1), e.getFilesConfig(t1), e.getPatternsConfig(t1);
                            } catch (e) {
                                g.log("Paste handling for \xab".concat(t1.name, "\xbb Tool hasn't been set up because of the error"), "warn", e);
                            }
                        }, e.handlePasteEvent = function() {
                            var t1 = (0, l.default)(r.default.mark(function t1(n) {
                                var o, i, a;
                                return r.default.wrap(function(t1) {
                                    for(;;)switch(t1.prev = t1.next){
                                        case 0:
                                            if (o = e.Editor, i = o.BlockManager, a = o.Toolbar, i.currentBlock && (!e.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                                                t1.next = 3;
                                                break;
                                            }
                                            return t1.abrupt("return");
                                        case 3:
                                            if (!i.currentBlock || !e.exceptionList.includes(i.currentBlock.name)) {
                                                t1.next = 5;
                                                break;
                                            }
                                            return t1.abrupt("return");
                                        case 5:
                                            n.preventDefault(), e.processDataTransfer(n.clipboardData), i.clearFocused(), a.close();
                                        case 9:
                                        case "end":
                                            return t1.stop();
                                    }
                                }, t1);
                            }));
                            return function(e) {
                                return t1.apply(this, arguments);
                            };
                        }(), e;
                    }
                    return (0, u.default)(w, [
                        {
                            key: "prepare",
                            value: (k = (0, l.default)(r.default.mark(function e() {
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            this.processTools();
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? this.unsetCallback() : this.setCallback();
                            }
                        },
                        {
                            key: "processDataTransfer",
                            value: (h = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s, l, c, u, f, d = this, p = arguments;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = p.length > 1 && void 0 !== p[1] && p[1], o = this.Editor.Tools, !((i = t1.types).includes ? i.includes("Files") : i.contains("Files")) || g.isEmpty(this.toolsFiles)) {
                                                e.next = 8;
                                                break;
                                            }
                                            return e.next = 7, this.processFiles(t1.files);
                                        case 7:
                                            return e.abrupt("return");
                                        case 8:
                                            if (a = t1.getData(this.MIME_TYPE), s = t1.getData("text/plain"), l = t1.getData("text/html"), !a) {
                                                e.next = 19;
                                                break;
                                            }
                                            return e.prev = 12, this.insertEditorJSData(JSON.parse(a)), e.abrupt("return");
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(12);
                                        case 19:
                                            if (n && s.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : s) + "</p>"), c = Object.keys(this.toolsTags).reduce(function(e, t1) {
                                                var n;
                                                return e[t1.toLowerCase()] = null !== (n = d.toolsTags[t1].sanitizationConfig) && void 0 !== n ? n : {}, e;
                                            }, {}), u = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), {
                                                br: {}
                                            }), (f = (0, y.clean)(l, u)).trim() && f.trim() !== s && v.default.isHTMLString(f)) {
                                                e.next = 28;
                                                break;
                                            }
                                            return e.next = 26, this.processText(s);
                                        case 26:
                                            e.next = 30;
                                            break;
                                        case 28:
                                            return e.next = 30, this.processText(f, !0);
                                        case 30:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        12,
                                        17
                                    ]
                                ]);
                            })), function(e) {
                                return h.apply(this, arguments);
                            })
                        },
                        {
                            key: "processText",
                            value: (p = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s, c, u, f = this, d = arguments;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor, i = o.Caret, a = o.BlockManager, (s = n ? this.processHTML(t1) : this.processPlain(t1)).length) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            if (1 !== s.length) {
                                                e.next = 8;
                                                break;
                                            }
                                            return s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop()), e.abrupt("return");
                                        case 8:
                                            c = a.currentBlock && a.currentBlock.tool.isDefault, u = c && a.currentBlock.isEmpty, s.map(function() {
                                                var e = (0, l.default)(r.default.mark(function e(t1, n) {
                                                    return r.default.wrap(function(e) {
                                                        for(;;)switch(e.prev = e.next){
                                                            case 0:
                                                                return e.abrupt("return", f.insertBlock(t1, 0 === n && u));
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                    }, e);
                                                }));
                                                return function(t1, n) {
                                                    return e.apply(this, arguments);
                                                };
                                            }()), a.currentBlock && i.setToBlock(a.currentBlock, i.positions.END);
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return p.apply(this, arguments);
                            })
                        },
                        {
                            key: "setCallback",
                            value: function() {
                                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "unsetCallback",
                            value: function() {
                                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "processTools",
                            value: function() {
                                var e = this.Editor.Tools.blockTools;
                                Array.from(e.values()).forEach(this.processTool);
                            }
                        },
                        {
                            key: "collectTagNames",
                            value: function(e) {
                                return g.isString(e) ? [
                                    e
                                ] : g.isObject(e) ? Object.keys(e) : [];
                            }
                        },
                        {
                            key: "getTagsConfig",
                            value: function(e) {
                                var t1 = this, n = e.pasteConfig.tags || [], o = [];
                                n.forEach(function(n) {
                                    var r = t1.collectTagNames(n);
                                    o.push.apply(o, (0, s.default)(r)), r.forEach(function(o) {
                                        if (Object.prototype.hasOwnProperty.call(t1.toolsTags, o)) g.log("Paste handler for \xab".concat(e.name, "\xbb Tool on \xab").concat(o, "\xbb tag is skipped ") + "because it is already used by \xab".concat(t1.toolsTags[o].tool.name, "\xbb Tool."), "warn");
                                        else {
                                            var r = g.isObject(n) ? n[o] : null;
                                            t1.toolsTags[o.toUpperCase()] = {
                                                tool: e,
                                                sanitizationConfig: r
                                            };
                                        }
                                    });
                                }), this.tagsByTool[e.name] = o.map(function(e) {
                                    return e.toUpperCase();
                                });
                            }
                        },
                        {
                            key: "getFilesConfig",
                            value: function(e) {
                                var t1 = e.pasteConfig.files, n = void 0 === t1 ? {} : t1, o = n.extensions, r = n.mimeTypes;
                                (o || r) && (o && !Array.isArray(o) && (g.log("\xabextensions\xbb property of the onDrop config for \xab".concat(e.name, "\xbb Tool should be an array")), o = []), r && !Array.isArray(r) && (g.log("\xabmimeTypes\xbb property of the onDrop config for \xab".concat(e.name, "\xbb Tool should be an array")), r = []), r && (r = r.filter(function(t1) {
                                    return !!g.isValidMimeType(t1) || (g.log("MIME type value \xab".concat(t1, "\xbb for the \xab").concat(e.name, "\xbb Tool is not a valid MIME type"), "warn"), !1);
                                })), this.toolsFiles[e.name] = {
                                    extensions: o || [],
                                    mimeTypes: r || []
                                });
                            }
                        },
                        {
                            key: "getPatternsConfig",
                            value: function(e) {
                                var t1 = this;
                                e.pasteConfig.patterns && !g.isEmpty(e.pasteConfig.patterns) && Object.entries(e.pasteConfig.patterns).forEach(function(n) {
                                    var o = (0, i.default)(n, 2), r = o[0], a = o[1];
                                    a instanceof RegExp || g.log("Pattern ".concat(a, " for \xab").concat(e.name, "\xbb Tool is skipped because it should be a Regexp instance."), "warn"), t1.toolsPatterns.push({
                                        key: r,
                                        pattern: a,
                                        tool: e
                                    });
                                });
                            }
                        },
                        {
                            key: "isNativeBehaviour",
                            value: function(e) {
                                return v.default.isNativeInput(e);
                            }
                        },
                        {
                            key: "processFiles",
                            value: (d = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return n = this.Editor.BlockManager, e.next = 3, Promise.all(Array.from(t1).map(function(e) {
                                                return s.processFile(e);
                                            }));
                                        case 3:
                                            o = (o = e.sent).filter(function(e) {
                                                return !!e;
                                            }), i = n.currentBlock.tool.isDefault, a = i && n.currentBlock.isEmpty, o.forEach(function(e, t1) {
                                                n.paste(e.type, e.event, 0 === t1 && a);
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return d.apply(this, arguments);
                            })
                        },
                        {
                            key: "processFile",
                            value: (a = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, a, s, l;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = g.getFileExtension(t1), o = Object.entries(this.toolsFiles).find(function(e) {
                                                var o = (0, i.default)(e, 2), r = (o[0], o[1]), a = r.mimeTypes, s = r.extensions, l = t1.type.split("/"), c = (0, i.default)(l, 2), u = c[0], f = c[1], d = s.find(function(e) {
                                                    return e.toLowerCase() === n.toLowerCase();
                                                }), p = a.find(function(e) {
                                                    var t1 = e.split("/"), n = (0, i.default)(t1, 2), o = n[0], r = n[1];
                                                    return o === u && (r === f || "*" === r);
                                                });
                                                return !!d || !!p;
                                            })) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return a = (0, i.default)(o, 1), s = a[0], l = this.composePasteEvent("file", {
                                                file: t1
                                            }), e.abrupt("return", {
                                                event: l,
                                                type: s
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return a.apply(this, arguments);
                            })
                        },
                        {
                            key: "processHTML",
                            value: function(e) {
                                var t1 = this, n = this.Editor.Tools, o = v.default.make("DIV");
                                return o.innerHTML = e, this.getNodes(o).map(function(e) {
                                    var o, r = n.defaultTool, i = !1;
                                    switch(e.nodeType){
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            (o = v.default.make("div")).appendChild(e);
                                            break;
                                        case Node.ELEMENT_NODE:
                                            o = e, i = !0, t1.toolsTags[o.tagName] && (r = t1.toolsTags[o.tagName].tool);
                                    }
                                    var a = r.pasteConfig.tags.reduce(function(e, n) {
                                        return t1.collectTagNames(n).forEach(function(t1) {
                                            var o = g.isObject(n) ? n[t1] : null;
                                            e[t1.toLowerCase()] = o || {};
                                        }), e;
                                    }, {}), s = Object.assign({}, a, r.baseSanitizeConfig);
                                    if ("table" === o.tagName.toLowerCase()) {
                                        var l = (0, y.clean)(o.outerHTML, s);
                                        o = v.default.make("div", void 0, {
                                            innerHTML: l
                                        }).firstChild;
                                    } else o.innerHTML = (0, y.clean)(o.innerHTML, s);
                                    var c = t1.composePasteEvent("tag", {
                                        data: o
                                    });
                                    return {
                                        content: o,
                                        isBlock: i,
                                        tool: r.name,
                                        event: c
                                    };
                                }).filter(function(e) {
                                    var t1 = v.default.isEmpty(e.content), n = v.default.isSingleTag(e.content);
                                    return !t1 || n;
                                });
                            }
                        },
                        {
                            key: "processPlain",
                            value: function(e) {
                                var t1 = this, n = this.config.defaultBlock;
                                if (!e) return [];
                                var o = n;
                                return e.split(/\r?\n/).filter(function(e) {
                                    return e.trim();
                                }).map(function(e) {
                                    var n = v.default.make("div");
                                    n.textContent = e;
                                    var r = t1.composePasteEvent("tag", {
                                        data: n
                                    });
                                    return {
                                        content: n,
                                        tool: o,
                                        isBlock: !1,
                                        event: r
                                    };
                                });
                            }
                        },
                        {
                            key: "processSingleBlock",
                            value: (o = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, i, a;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Caret, i = n.BlockManager, (a = i.currentBlock) && t1.tool === a.name && v.default.containsOnlyInlineElements(t1.content.innerHTML)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return this.insertBlock(t1, (null == a ? void 0 : a.tool.isDefault) && a.isEmpty), e.abrupt("return");
                                        case 5:
                                            o.insertContentAtCaretPosition(t1.content.innerHTML);
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return o.apply(this, arguments);
                            })
                        },
                        {
                            key: "processInlinePaste",
                            value: (n = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s, l, c, u;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = this.Editor, o = n.BlockManager, i = n.Caret, a = t1.content, !(o.currentBlock && o.currentBlock.tool.isDefault && a.textContent.length < w.PATTERN_PROCESSING_MAX_LENGTH)) {
                                                e.next = 12;
                                                break;
                                            }
                                            return e.next = 6, this.processPattern(a.textContent);
                                        case 6:
                                            if (!(s = e.sent)) {
                                                e.next = 12;
                                                break;
                                            }
                                            return l = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, c = o.paste(s.tool, s.event, l), i.setToBlock(c, i.positions.END), e.abrupt("return");
                                        case 12:
                                            o.currentBlock && o.currentBlock.currentInput ? (u = o.currentBlock.tool.baseSanitizeConfig, document.execCommand("insertHTML", !1, (0, y.clean)(a.innerHTML, u))) : this.insertBlock(t1);
                                        case 13:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "processPattern",
                            value: (t1 = (0, l.default)(r.default.mark(function e(t1) {
                                var n, o;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (n = this.toolsPatterns.find(function(e) {
                                                var n = e.pattern.exec(t1);
                                                return !!n && t1 === n.shift();
                                            })) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return o = this.composePasteEvent("pattern", {
                                                key: n.key,
                                                data: t1
                                            }), e.abrupt("return", {
                                                event: o,
                                                tool: n.tool.name
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: function(e) {
                                var t1, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.Editor, r = o.BlockManager, i = o.Caret, a = r.currentBlock;
                                if (n && a && a.isEmpty) return t1 = r.paste(e.tool, e.event, !0), void i.setToBlock(t1, i.positions.END);
                                t1 = r.paste(e.tool, e.event), i.setToBlock(t1, i.positions.END);
                            }
                        },
                        {
                            key: "insertEditorJSData",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.Caret, r = t1.Tools;
                                (0, y.sanitizeBlocks)(e, function(e) {
                                    return r.blockTools.get(e).sanitizeConfig;
                                }).forEach(function(e, t1) {
                                    var r = e.tool, i = e.data, a = !1;
                                    0 === t1 && (a = n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty);
                                    var s = n.insert({
                                        tool: r,
                                        data: i,
                                        replace: a
                                    });
                                    o.setToBlock(s, o.positions.END);
                                });
                            }
                        },
                        {
                            key: "processElementNode",
                            value: function(e, t1, n) {
                                var o = Object.keys(this.toolsTags), r = e, i = (this.toolsTags[r.tagName] || {}).tool, a = this.tagsByTool[null == i ? void 0 : i.name] || [], l = o.includes(r.tagName), c = v.default.blockElements.includes(r.tagName.toLowerCase()), u = Array.from(r.children).some(function(e) {
                                    var t1 = e.tagName;
                                    return o.includes(t1) && !a.includes(t1);
                                }), f = Array.from(r.children).some(function(e) {
                                    var t1 = e.tagName;
                                    return v.default.blockElements.includes(t1.toLowerCase());
                                });
                                return c || l || u ? l && !u || c && !f && !u ? [].concat((0, s.default)(t1), [
                                    n,
                                    r
                                ]) : void 0 : (n.appendChild(r), [].concat((0, s.default)(t1), [
                                    n
                                ]));
                            }
                        },
                        {
                            key: "getNodes",
                            value: function(e) {
                                var t1, n = this;
                                return Array.from(e.childNodes).reduce(function e(o, r) {
                                    if (v.default.isEmpty(r) && !v.default.isSingleTag(r)) return o;
                                    var i = o[o.length - 1], a = new DocumentFragment;
                                    switch(i && v.default.isFragment(i) && (a = o.pop()), r.nodeType){
                                        case Node.ELEMENT_NODE:
                                            if (t1 = n.processElementNode(r, o, a)) return t1;
                                            break;
                                        case Node.TEXT_NODE:
                                            return a.appendChild(r), [].concat((0, s.default)(o), [
                                                a
                                            ]);
                                        default:
                                            return [].concat((0, s.default)(o), [
                                                a
                                            ]);
                                    }
                                    return [].concat((0, s.default)(o), (0, s.default)(Array.from(r.childNodes).reduce(e, [])));
                                }, []);
                            }
                        },
                        {
                            key: "composePasteEvent",
                            value: function(e, t1) {
                                return new CustomEvent(e, {
                                    detail: t1
                                });
                            }
                        }
                    ]), w;
                }(h.default);
                o.default = w, w.displayName = "Paste", w.PATTERN_PROCESSING_MAX_LENGTH = 450, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(30),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(151)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u, f, d, p) {
                "use strict";
                var h = n(1);
                function v(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f);
                var g = function(e) {
                    (0, c.default)(u, e);
                    var t1, n, o = v(u);
                    function u() {
                        var e;
                        return (0, s.default)(this, u), (e = o.apply(this, arguments)).toolsDontSupportReadOnly = [], e.readOnlyEnabled = !1, e;
                    }
                    return (0, l.default)(u, [
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.readOnlyEnabled;
                            }
                        },
                        {
                            key: "prepare",
                            value: (n = (0, a.default)(r.default.mark(function e() {
                                var t1, n, o;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            t1 = this.Editor.Tools, n = t1.blockTools, o = [], Array.from(n.entries()).forEach(function(e) {
                                                var t1 = (0, i.default)(e, 2), n = t1[0];
                                                t1[1].isReadOnlySupported || o.push(n);
                                            }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggle",
                            value: (t1 = (0, a.default)(r.default.mark(function e() {
                                var t1, n, o, i, a = arguments;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            (t1 = a.length > 0 && void 0 !== a[0] ? a[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n = this.readOnlyEnabled, this.readOnlyEnabled = t1, e.t0 = r.default.keys(this.Editor);
                                        case 5:
                                            if ((e.t1 = e.t0()).done) {
                                                e.next = 12;
                                                break;
                                            }
                                            if (o = e.t1.value, this.Editor[o].toggleReadOnly) {
                                                e.next = 9;
                                                break;
                                            }
                                            return e.abrupt("continue", 5);
                                        case 9:
                                            this.Editor[o].toggleReadOnly(t1), e.next = 5;
                                            break;
                                        case 12:
                                            if (n !== t1) {
                                                e.next = 14;
                                                break;
                                            }
                                            return e.abrupt("return", this.readOnlyEnabled);
                                        case 14:
                                            return e.next = 16, this.Editor.Saver.save();
                                        case 16:
                                            return i = e.sent, e.next = 19, this.Editor.BlockManager.clear();
                                        case 19:
                                            return e.next = 21, this.Editor.Renderer.render(i.blocks);
                                        case 21:
                                            return e.abrupt("return", this.readOnlyEnabled);
                                        case 22:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "throwCriticalError",
                            value: function() {
                                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
                            }
                        }
                    ]), u;
                }((d = h(d)).default);
                o.default = g, g.displayName = "ReadOnly", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(25),
                n(61),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n(1);
                function g(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (g = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function y(e, t1) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t1) {
                            if (e) {
                                if ("string" == typeof e) return k(e, t1);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t1) : void 0;
                            }
                        }(e)) || t1 && e && "number" == typeof e.length) {
                            n && (e = n);
                            var o = 0, r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return o >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[o++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: r
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i, a = !0, s = !1;
                    return {
                        s: function() {
                            n = n.call(e);
                        },
                        n: function() {
                            var e = n.next();
                            return a = e.done, e;
                        },
                        e: function(e) {
                            s = !0, i = e;
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return();
                            } finally{
                                if (s) throw i;
                            }
                        }
                    };
                }
                function k(e, t1) {
                    (null == t1 || t1 > e.length) && (t1 = e.length);
                    for(var n = 0, o = new Array(t1); n < t1; n++)o[n] = e[n];
                    return o;
                }
                function b(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = v(r), i = v(i), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = v(p), h = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(h);
                var m = function(e) {
                    (0, s.default)(n, e);
                    var t1 = b(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).isRectSelectionActivated = !1, e.SCROLL_SPEED = 3, e.HEIGHT_OF_SCROLL_ZONE = 40, e.BOTTOM_SCROLL_ZONE = 1, e.TOP_SCROLL_ZONE = 2, e.MAIN_MOUSE_BUTTON = 0, e.mousedown = !1, e.isScrolling = !1, e.inScrollZone = null, e.startX = 0, e.startY = 0, e.mouseX = 0, e.mouseY = 0, e.stackOfSelected = [], e.listenerIds = [], e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "prepare",
                            value: function() {
                                this.enableModuleBindings();
                            }
                        },
                        {
                            key: "startSelection",
                            value: function(e, t1) {
                                var n = document.elementFromPoint(e - window.pageXOffset, t1 - window.pageYOffset);
                                n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
                                var o = [
                                    ".".concat(p.default.CSS.content),
                                    ".".concat(this.Editor.Toolbar.CSS.toolbar),
                                    ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)
                                ], r = n.closest("." + this.Editor.UI.CSS.editorWrapper), i = o.some(function(e) {
                                    return !!n.closest(e);
                                });
                                r && !i && (this.mousedown = !0, this.startX = e, this.startY = t1);
                            }
                        },
                        {
                            key: "endSelection",
                            value: function() {
                                this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
                            }
                        },
                        {
                            key: "isRectActivated",
                            value: function() {
                                return this.isRectSelectionActivated;
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function() {
                                this.isRectSelectionActivated = !1;
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var e = this, t1 = this.genHTML().container;
                                this.listeners.on(t1, "mousedown", function(t1) {
                                    e.processMouseDown(t1);
                                }, !1), this.listeners.on(document.body, "mousemove", h.throttle(function(t1) {
                                    e.processMouseMove(t1);
                                }, 10), {
                                    passive: !0
                                }), this.listeners.on(document.body, "mouseleave", function() {
                                    e.processMouseLeave();
                                }), this.listeners.on(window, "scroll", h.throttle(function(t1) {
                                    e.processScroll(t1);
                                }, 10), {
                                    passive: !0
                                }), this.listeners.on(document.body, "mouseup", function() {
                                    e.processMouseUp();
                                }, !1);
                            }
                        },
                        {
                            key: "processMouseDown",
                            value: function(e) {
                                e.button === this.MAIN_MOUSE_BUTTON && (null !== e.target.closest(f.default.allInputsSelector) || this.startSelection(e.pageX, e.pageY));
                            }
                        },
                        {
                            key: "processMouseMove",
                            value: function(e) {
                                this.changingRectangle(e), this.scrollByZones(e.clientY);
                            }
                        },
                        {
                            key: "processMouseLeave",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "processScroll",
                            value: function(e) {
                                this.changingRectangle(e);
                            }
                        },
                        {
                            key: "processMouseUp",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "scrollByZones",
                            value: function(e) {
                                this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
                            }
                        },
                        {
                            key: "genHTML",
                            value: function() {
                                var e = this.Editor.UI, t1 = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = f.default.make("div", n.CSS.overlay, {}), r = f.default.make("div", n.CSS.overlayContainer, {}), i = f.default.make("div", n.CSS.rect, {});
                                return r.appendChild(i), o.appendChild(r), t1.appendChild(o), this.overlayRectangle = i, {
                                    container: t1,
                                    overlay: o
                                };
                            }
                        },
                        {
                            key: "scrollVertical",
                            value: function(e) {
                                var t1 = this;
                                if (this.inScrollZone && this.mousedown) {
                                    var n = window.pageYOffset;
                                    window.scrollBy(0, e), this.mouseY += window.pageYOffset - n, setTimeout(function() {
                                        t1.scrollVertical(e);
                                    }, 0);
                                }
                            }
                        },
                        {
                            key: "changingRectangle",
                            value: function(e) {
                                if (this.mousedown) {
                                    void 0 !== e.pageY && (this.mouseX = e.pageX, this.mouseY = e.pageY);
                                    var t1 = this.genInfoForMouseSelection(), n = t1.rightPos, o = t1.leftPos, r = t1.index, i = this.startX > n && this.mouseX > n, a = this.startX < o && this.mouseX < o;
                                    this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), d.default.get().removeAllRanges());
                                }
                            }
                        },
                        {
                            key: "shrinkRectangleToPoint",
                            value: function() {
                                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
                            }
                        },
                        {
                            key: "inverseSelection",
                            value: function() {
                                var e = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                                if (this.rectCrossesBlocks && !e) {
                                    var t1, n = y(this.stackOfSelected);
                                    try {
                                        for(n.s(); !(t1 = n.n()).done;){
                                            var o = t1.value;
                                            this.Editor.BlockSelection.selectBlockByIndex(o);
                                        }
                                    } catch (e) {
                                        n.e(e);
                                    } finally{
                                        n.f();
                                    }
                                }
                                if (!this.rectCrossesBlocks && e) {
                                    var r, i = y(this.stackOfSelected);
                                    try {
                                        for(i.s(); !(r = i.n()).done;){
                                            var a = r.value;
                                            this.Editor.BlockSelection.unSelectBlockByIndex(a);
                                        }
                                    } catch (e) {
                                        i.e(e);
                                    } finally{
                                        i.f();
                                    }
                                }
                            }
                        },
                        {
                            key: "updateRectangleSize",
                            value: function() {
                                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
                            }
                        },
                        {
                            key: "genInfoForMouseSelection",
                            value: function() {
                                var e, t1 = document.body.offsetWidth / 2, n = this.mouseY - window.pageYOffset, o = document.elementFromPoint(t1, n), r = this.Editor.BlockManager.getBlockByChildNode(o);
                                void 0 !== r && (e = this.Editor.BlockManager.blocks.findIndex(function(e) {
                                    return e.holder === r.holder;
                                }));
                                var i = this.Editor.BlockManager.lastBlock.holder.querySelector("." + p.default.CSS.content), a = Number.parseInt(window.getComputedStyle(i).width, 10) / 2;
                                return {
                                    index: e,
                                    leftPos: t1 - a,
                                    rightPos: t1 + a
                                };
                            }
                        },
                        {
                            key: "addBlockInSelection",
                            value: function(e) {
                                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
                            }
                        },
                        {
                            key: "trySelectNextBlock",
                            value: function(e) {
                                var t1 = this, n = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length;
                                if (!n) {
                                    var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0, i = 0;
                                    o > 1 && (i = r ? 1 : -1);
                                    var a = e > this.stackOfSelected[o - 1] && 1 === i, s = e < this.stackOfSelected[o - 1] && -1 === i, l = !(a || s || 0 === i);
                                    if (l || !(e > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                        if (!l && e < this.stackOfSelected[o - 1]) for(var c = this.stackOfSelected[o - 1] - 1; c >= e; c--)this.addBlockInSelection(c);
                                        else if (l) {
                                            var u, f = o - 1;
                                            for(u = e > this.stackOfSelected[o - 1] ? function() {
                                                return e > t1.stackOfSelected[f];
                                            } : function() {
                                                return e < t1.stackOfSelected[f];
                                            }; u();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                                        }
                                    } else for(var d = this.stackOfSelected[o - 1] + 1 || e; d <= e; d++)this.addBlockInSelection(d);
                                }
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    overlay: "codex-editor-overlay",
                                    overlayContainer: "codex-editor-overlay__container",
                                    rect: "codex-editor-overlay__rectangle",
                                    topScrollZone: "codex-editor-overlay__scroll-zone--top",
                                    bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
                                };
                            }
                        }
                    ]), n;
                }(u.default);
                o.default = m, m.displayName = "RectangleSelection", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p) {
                "use strict";
                var h = n(1);
                function v(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (v = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function g(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = h(r), i = h(i), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = h(d), p = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(p);
                var y = function(e) {
                    (0, c.default)(a, e);
                    var t1, n, o = g(a);
                    function a() {
                        return (0, s.default)(this, a), o.apply(this, arguments);
                    }
                    return (0, l.default)(a, [
                        {
                            key: "render",
                            value: (n = (0, i.default)(r.default.mark(function e(t1) {
                                var n, o, i = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return n = t1.map(function(e) {
                                                return {
                                                    function: function() {
                                                        return i.insertBlock(e);
                                                    }
                                                };
                                            }), this.Editor.ModificationsObserver.disable(), e.next = 4, p.sequence(n);
                                        case 4:
                                            return o = e.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), e.abrupt("return", o);
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: (t1 = (0, i.default)(r.default.mark(function e(t1) {
                                var n, o, i, a, s, l, c, u, f, d, h;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = this.Editor, i = o.Tools, a = o.BlockManager, s = t1.type, l = t1.data, c = t1.tunes, u = t1.id, !i.available.has(s)) {
                                                e.next = 13;
                                                break;
                                            }
                                            e.prev = 3, a.insert({
                                                id: u,
                                                tool: s,
                                                data: l,
                                                tunes: c
                                            }), e.next = 11;
                                            break;
                                        case 7:
                                            throw e.prev = 7, e.t0 = e.catch(3), p.log("Block \xab".concat(s, "\xbb skipped because of plugins error"), "warn", l), Error(e.t0);
                                        case 11:
                                            e.next = 18;
                                            break;
                                        case 13:
                                            f = {
                                                savedData: {
                                                    id: u,
                                                    type: s,
                                                    data: l
                                                },
                                                title: s
                                            }, i.unavailable.has(s) && (d = i.unavailable.get(s).toolbox, h = null === (n = d[0]) || void 0 === n ? void 0 : n.title, f.title = h || f.title), a.insert({
                                                id: u,
                                                tool: i.stubTool,
                                                data: f
                                            }).stretched = !0, p.log("Tool \xab".concat(s, "\xbb is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                        case 18:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        3,
                                        7
                                    ]
                                ]);
                            })), function(e) {
                                return t1.apply(this, arguments);
                            })
                        }
                    ]), a;
                }(d.default);
                o.default = y, y.displayName = "Renderer", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(8),
                n(66)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n(1);
                function g(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (g = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function y(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, f.default)(e);
                        if (t1) {
                            var r = (0, f.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, u.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = v(r), i = v(i), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(p);
                var k = function(e) {
                    (0, c.default)(a, e);
                    var t1, n, o = y(a);
                    function a() {
                        return (0, s.default)(this, a), o.apply(this, arguments);
                    }
                    return (0, l.default)(a, [
                        {
                            key: "save",
                            value: (n = (0, i.default)(r.default.mark(function e() {
                                var t1, n, o, i, a, s, l, c = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return t1 = this.Editor, n = t1.BlockManager, o = t1.Tools, i = n.blocks, a = [], e.prev = 2, i.forEach(function(e) {
                                                a.push(c.getSavedData(e));
                                            }), e.next = 6, Promise.all(a);
                                        case 6:
                                            return s = e.sent, e.next = 9, (0, h.sanitizeBlocks)(s, function(e) {
                                                return o.blockTools.get(e).sanitizeConfig;
                                            });
                                        case 9:
                                            return l = e.sent, e.abrupt("return", this.makeOutput(l));
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(2), p.logLabeled("Saving failed due to the Error %o", "error", e.t0);
                                        case 16:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        2,
                                        13
                                    ]
                                ]);
                            })), function() {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "getSavedData",
                            value: (t1 = (0, i.default)(r.default.mark(function e(t1) {
                                var n, o;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return e.next = 2, t1.save();
                                        case 2:
                                            if (n = e.sent, e.t0 = n, !e.t0) {
                                                e.next = 8;
                                                break;
                                            }
                                            return e.next = 7, t1.validate(n.data);
                                        case 7:
                                            e.t0 = e.sent;
                                        case 8:
                                            return o = e.t0, e.abrupt("return", Object.assign(Object.assign({}, n), {
                                                isValid: o
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e);
                            })), function(e) {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "makeOutput",
                            value: function(e) {
                                var t1 = this, n = 0, o = [];
                                return p.log("[Editor.js saving]:", "groupCollapsed"), e.forEach(function(e) {
                                    var r = e.id, i = e.tool, a = e.data, s = e.tunes, l = e.time, c = e.isValid;
                                    if (n += l, p.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !c) return p.log("Block \xab".concat(i, "\xbb skipped because saved data is invalid")), void p.log(void 0, "groupEnd");
                                    if (p.log(a), p.log(void 0, "groupEnd"), i !== t1.Editor.Tools.stubTool) {
                                        var u = Object.assign({
                                            id: r,
                                            type: i,
                                            data: a
                                        }, !p.isEmpty(s) && {
                                            tunes: s
                                        });
                                        o.push(u);
                                    } else o.push(a);
                                }), p.log("Total", "log", n), p.log(void 0, "groupEnd"), {
                                    time: +new Date,
                                    blocks: o,
                                    version: "2.26.5"
                                };
                            }
                        }
                    ]), a;
                }(d.default);
                o.default = k, k.displayName = "Saver", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(30),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(25),
                n(85),
                n(54),
                n(68),
                n(389)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y) {
                "use strict";
                var k = n(1);
                function b(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (b = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function m(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, u.default)(e);
                        if (t1) {
                            var r = (0, u.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, c.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = k(r), i = k(i), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(h), v = k(v);
                var w = function(e) {
                    (0, l.default)(n, e);
                    var t1 = m(n);
                    function n() {
                        var e;
                        return (0, i.default)(this, n), (e = t1.apply(this, arguments)).opened = !1, e.selection = new p.default, e.onOverlayClicked = function() {
                            e.close();
                        }, e;
                    }
                    return (0, s.default)(n, [
                        {
                            key: "events",
                            get: function() {
                                return {
                                    opened: "block-settings-opened",
                                    closed: "block-settings-closed"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    settings: "ce-settings"
                                };
                            }
                        },
                        {
                            key: "flipper",
                            get: function() {
                                var e;
                                return null === (e = this.popover) || void 0 === e ? void 0 : e.flipper;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = d.default.make("div");
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAllNodes();
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var e = this, t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                                this.opened = !0, this.selection.save(), t1.selected = !0, this.Editor.BlockSelection.clearCache();
                                var n = t1.getTunes(), o = (0, r.default)(n, 2), i = o[0], a = o[1];
                                this.eventsDispatcher.emit(this.events.opened), this.popover = new h.default({
                                    className: this.CSS.settings,
                                    searchable: !0,
                                    filterLabel: v.default.ui(g.I18nInternalNS.ui.popover, "Filter"),
                                    nothingFoundLabel: v.default.ui(g.I18nInternalNS.ui.popover, "Nothing found"),
                                    items: i.map(function(t1) {
                                        return e.resolveTuneAliases(t1);
                                    }),
                                    customContent: a,
                                    customContentFlippableItems: this.getControls(a),
                                    scopeElement: this.Editor.API.methods.ui.nodes.redactor
                                }), this.popover.on(h.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.popover.on(h.PopoverEvent.Close, function() {
                                    return e.close();
                                }), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
                            }
                        },
                        {
                            key: "getElement",
                            value: function() {
                                return this.nodes.wrapper;
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.opened = !1, p.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(h.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
                            }
                        },
                        {
                            key: "getControls",
                            value: function(e) {
                                var t1 = this.Editor.StylesAPI, n = e.querySelectorAll(".".concat(t1.classes.settingsButton, ", ").concat(d.default.allInputsSelector));
                                return Array.from(n);
                            }
                        },
                        {
                            key: "resolveTuneAliases",
                            value: function(e) {
                                var t1 = (0, y.resolveAliases)(e, {
                                    label: "title"
                                });
                                return e.confirmation && (t1.confirmation = this.resolveTuneAliases(e.confirmation)), t1;
                            }
                        }
                    ]), n;
                }(f.default);
                o.default = w, w.displayName = "BlockSettings", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(30),
                n(21),
                n(41),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(8),
                n(67),
                n(54),
                n(68),
                n(66)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y, k, b, m) {
                "use strict";
                var w = n(1);
                function x(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (x = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function C(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = w(r), i = w(i), s = w(s), l = w(l), c = w(c), u = w(u), f = w(f), d = w(d), p = w(p), h = w(h), v = w(v), g = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = x(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(g), y = w(y), k = w(k);
                var S = function(e) {
                    (0, f.default)(a, e);
                    var t1, n, o = C(a);
                    function a() {
                        var e;
                        return (0, c.default)(this, a), (e = o.apply(this, arguments)).opened = !1, e.tools = [], e.flipper = null, e.togglingCallback = null, e;
                    }
                    return (0, u.default)(a, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = v.default.make("div", [
                                    a.CSS.conversionToolbarWrapper
                                ].concat((0, l.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.tools = v.default.make("div", a.CSS.conversionToolbarTools);
                                var e = v.default.make("div", a.CSS.conversionToolbarLabel, {
                                    textContent: k.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to")
                                });
                                return this.addTools(), this.enableFlipper(), v.default.append(this.nodes.wrapper, e), v.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "toggle",
                            value: function(e) {
                                this.opened ? this.close() : this.open(), g.isFunction(e) && (this.togglingCallback = e);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var e = this;
                                this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(a.CSS.conversionToolbarShowed), window.requestAnimationFrame(function() {
                                    e.flipper.activate(e.tools.map(function(e) {
                                        return e.button;
                                    }).filter(function(e) {
                                        return !e.classList.contains(a.CSS.conversionToolHidden);
                                    })), e.flipper.focusFirst(), g.isFunction(e.togglingCallback) && e.togglingCallback(!0);
                                });
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(a.CSS.conversionToolbarShowed), g.isFunction(this.togglingCallback) && this.togglingCallback(!1);
                            }
                        },
                        {
                            key: "hasTools",
                            value: function() {
                                return 1 !== this.tools.length || this.tools[0].name !== this.config.defaultBlock;
                            }
                        },
                        {
                            key: "replaceWithBlock",
                            value: (n = (0, s.default)(r.default.mark(function e(t1, n) {
                                var o, i, a, s, l, c, u, f, d, p = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return o = this.Editor.BlockManager.currentBlock.tool, e.next = 3, this.Editor.BlockManager.currentBlock.save();
                                        case 3:
                                            if (i = e.sent, a = i.data, s = this.Editor.Tools.blockTools.get(t1), l = "", c = o.conversionConfig.export, !g.isFunction(c)) {
                                                e.next = 12;
                                                break;
                                            }
                                            l = c(a), e.next = 18;
                                            break;
                                        case 12:
                                            if (!g.isString(c)) {
                                                e.next = 16;
                                                break;
                                            }
                                            l = a[c], e.next = 18;
                                            break;
                                        case 16:
                                            return g.log("Conversion \xabexport\xbb property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), e.abrupt("return");
                                        case 18:
                                            if (u = (0, m.clean)(l, s.sanitizeConfig), f = {}, d = s.conversionConfig.import, !g.isFunction(d)) {
                                                e.next = 25;
                                                break;
                                            }
                                            f = d(u), e.next = 31;
                                            break;
                                        case 25:
                                            if (!g.isString(d)) {
                                                e.next = 29;
                                                break;
                                            }
                                            f[d] = u, e.next = 31;
                                            break;
                                        case 29:
                                            return g.log("Conversion \xabimport\xbb property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), e.abrupt("return");
                                        case 31:
                                            n && (f = Object.assign(f, n)), this.Editor.BlockManager.replace({
                                                tool: t1,
                                                data: f
                                            }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), g.delay(function() {
                                                p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock);
                                            }, 10)();
                                        case 37:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e, t1) {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var e = this, t1 = this.Editor.Tools.blockTools;
                                Array.from(t1.entries()).forEach(function(t1) {
                                    var n = (0, i.default)(t1, 2), o = n[0], r = n[1], a = r.conversionConfig;
                                    a && a.import && r.toolbox.forEach(function(t1) {
                                        return e.addToolIfValid(o, t1);
                                    });
                                });
                            }
                        },
                        {
                            key: "addToolIfValid",
                            value: function(e, t1) {
                                !g.isEmpty(t1) && t1.icon && this.addTool(e, t1);
                            }
                        },
                        {
                            key: "addTool",
                            value: function(e, t1) {
                                var n = this, o = v.default.make("div", [
                                    a.CSS.conversionTool
                                ]), i = v.default.make("div", [
                                    a.CSS.conversionToolIcon
                                ]);
                                o.dataset.tool = e, i.innerHTML = t1.icon, v.default.append(o, i), v.default.append(o, v.default.text(k.default.t(b.I18nInternalNS.toolNames, t1.title || g.capitalize(e)))), v.default.append(this.nodes.tools, o), this.tools.push({
                                    name: e,
                                    button: o,
                                    toolboxItem: t1
                                }), this.listeners.on(o, "click", (0, s.default)(r.default.mark(function o() {
                                    return r.default.wrap(function(o) {
                                        for(;;)switch(o.prev = o.next){
                                            case 0:
                                                return o.next = 2, n.replaceWithBlock(e, t1.data);
                                            case 2:
                                            case "end":
                                                return o.stop();
                                        }
                                    }, o);
                                })));
                            }
                        },
                        {
                            key: "filterTools",
                            value: (t1 = (0, s.default)(r.default.mark(function e() {
                                var t1, n, o;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return o = function(e, t1) {
                                                return e.icon === t1.icon && e.title === t1.title;
                                            }, t1 = this.Editor.BlockManager.currentBlock, e.next = 4, t1.getActiveToolboxEntry();
                                        case 4:
                                            n = e.sent, this.tools.forEach(function(e) {
                                                var r = !1;
                                                if (n) {
                                                    var i = o(n, e.toolboxItem);
                                                    r = e.button.dataset.tool === t1.name && i;
                                                }
                                                e.button.hidden = r, e.button.classList.toggle(a.CSS.conversionToolHidden, r);
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new y.default({
                                    focusedItemClass: a.CSS.conversionToolFocused
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    conversionToolbarWrapper: "ce-conversion-toolbar",
                                    conversionToolbarShowed: "ce-conversion-toolbar--showed",
                                    conversionToolbarTools: "ce-conversion-toolbar__tools",
                                    conversionToolbarLabel: "ce-conversion-toolbar__label",
                                    conversionTool: "ce-conversion-tool",
                                    conversionToolHidden: "ce-conversion-tool--hidden",
                                    conversionToolIcon: "ce-conversion-tool__icon",
                                    conversionToolFocused: "ce-conversion-tool--focused",
                                    conversionToolActive: "ce-conversion-tool--active"
                                };
                            }
                        }
                    ]), a;
                }(h.default);
                o.default = S, S.displayName = "ConversionToolbar", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(41),
                n(30),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(25),
                n(8),
                n(67),
                n(54),
                n(68),
                n(116),
                n(115),
                n(69),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y, k, b, m, w, x, C, S) {
                "use strict";
                var T = n(1);
                function E(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (E = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function B(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = T(r), i = T(i), s = T(s), l = T(l), c = T(c), u = T(u), f = T(f), d = T(d), p = T(p), h = T(h), v = T(v), g = T(g), y = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = E(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(y), k = T(k), b = T(b), w = T(w), x = T(x);
                var M = function(e) {
                    (0, f.default)(o, e);
                    var t1, n = B(o);
                    function o(e) {
                        var t1, r = e.config, i = e.eventsDispatcher;
                        return (0, c.default)(this, o), (t1 = n.call(this, {
                            config: r,
                            eventsDispatcher: i
                        })).CSS = {
                            inlineToolbar: "ce-inline-toolbar",
                            inlineToolbarShowed: "ce-inline-toolbar--showed",
                            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
                            buttonsWrapper: "ce-inline-toolbar__buttons",
                            actionsWrapper: "ce-inline-toolbar__actions",
                            inlineToolButton: "ce-inline-tool",
                            inputField: "cdx-input",
                            focusedButton: "ce-inline-tool--focused",
                            conversionToggler: "ce-inline-toolbar__dropdown",
                            conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
                            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
                            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
                            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
                        }, t1.opened = !1, t1.toolbarVerticalMargin = y.isMobileScreen() ? 20 : 6, t1.buttonsList = null, t1.width = 0, t1.flipper = null, t1.tooltip = new x.default, t1;
                    }
                    return (0, u.default)(o, [
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
                            }
                        },
                        {
                            key: "tryToShow",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t1 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this.allowedToShow() ? (this.move(), this.open(t1), this.Editor.Toolbar.close()) : e && this.close();
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var e = g.default.rect, t1 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n = {
                                    x: e.x - t1.left,
                                    y: e.y + e.height - t1.top + this.toolbarVerticalMargin
                                };
                                e.width && (n.x += Math.floor(e.width / 2));
                                var o = n.x - this.width / 2, r = n.x + this.width / 2;
                                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                var e = this;
                                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(t1) {
                                    var n = (0, l.default)(t1, 2), o = n[0], r = n[1], i = e.getToolShortcut(o);
                                    i && w.default.remove(e.Editor.UI.nodes.redactor, i), y.isFunction(r.clear) && r.clear();
                                }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (!this.opened) {
                                    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
                                    var t1 = Array.from(this.buttonsList);
                                    t1.unshift(this.nodes.conversionToggler), t1 = t1.filter(function(e) {
                                        return !e.hidden;
                                    }), this.flipper.activate(t1);
                                }
                            }
                        },
                        {
                            key: "containsNode",
                            value: function(e) {
                                return this.nodes.wrapper.contains(e);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var e = this;
                                this.nodes.wrapper = v.default.make("div", [
                                    this.CSS.inlineToolbar
                                ].concat((0, s.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.togglerAndButtonsWrapper = v.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = v.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = v.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(t1) {
                                    t1.target.closest(".".concat(e.CSS.actionsWrapper)) || t1.preventDefault();
                                }), v.default.append(this.nodes.wrapper, [
                                    this.nodes.togglerAndButtonsWrapper,
                                    this.nodes.actions
                                ]), v.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), v.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
                            }
                        },
                        {
                            key: "allowedToShow",
                            value: function() {
                                var e = g.default.get(), t1 = g.default.text;
                                if (!e || !e.anchorNode) return !1;
                                if (e.isCollapsed || t1.length < 1) return !1;
                                var n = v.default.isElement(e.anchorNode) ? e.anchorNode : e.anchorNode.parentElement;
                                if (e && [
                                    "IMG",
                                    "INPUT"
                                ].includes(n.tagName)) return !1;
                                if (null === n.closest('[contenteditable="true"]')) return !1;
                                var o = this.Editor.BlockManager.getBlock(e.anchorNode);
                                return !!o && 0 !== o.tool.inlineTools.size;
                            }
                        },
                        {
                            key: "recalculateWidth",
                            value: function() {
                                this.width = this.nodes.wrapper.offsetWidth;
                            }
                        },
                        {
                            key: "addConversionToggler",
                            value: function() {
                                var e = this;
                                this.nodes.conversionToggler = v.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = v.default.make("div", this.CSS.conversionTogglerContent);
                                var t1 = v.default.make("div", this.CSS.conversionTogglerArrow, {
                                    innerHTML: S.IconChevronDown
                                });
                                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(t1), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                                    e.Editor.ConversionToolbar.toggle(function(t1) {
                                        !t1 && e.opened ? e.flipper.activate() : e.opened && e.flipper.deactivate();
                                    });
                                }), !1 === y.isMobileScreen() && this.tooltip.onHover(this.nodes.conversionToggler, b.default.ui(m.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), {
                                    placement: "top",
                                    hidingDelay: 100
                                });
                            }
                        },
                        {
                            key: "setConversionTogglerContent",
                            value: (t1 = (0, i.default)(r.default.mark(function e() {
                                var t1, n, o, i, a, s;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return t1 = this.Editor.BlockManager, n = t1.currentBlock, o = n.name, i = n.tool.conversionConfig, a = i && i.export, this.nodes.conversionToggler.hidden = !a, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !a), e.next = 9, n.getActiveToolboxEntry();
                                        case 9:
                                            if (e.t0 = e.sent, e.t0) {
                                                e.next = 12;
                                                break;
                                            }
                                            e.t0 = {};
                                        case 12:
                                            s = e.t0, this.nodes.conversionTogglerContent.innerHTML = s.icon || s.title || y.capitalize(o);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "prepareConversionToolbar",
                            value: function() {
                                var e = this.Editor.ConversionToolbar.make();
                                v.default.append(this.nodes.wrapper, e);
                            }
                        },
                        {
                            key: "addToolsFiltered",
                            value: function() {
                                var e = this, t1 = g.default.get(), n = this.Editor.BlockManager.getBlock(t1.anchorNode);
                                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, Array.from(n.tool.inlineTools.values()).forEach(function(t1) {
                                    e.addTool(t1);
                                }), this.recalculateWidth();
                            }
                        },
                        {
                            key: "addTool",
                            value: function(e) {
                                var t1 = this, n = e.create(), o = n.render();
                                if (o) {
                                    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, n), y.isFunction(n.renderActions)) {
                                        var r = n.renderActions();
                                        this.nodes.actions.appendChild(r);
                                    }
                                    this.listeners.on(o, "click", function(e) {
                                        t1.toolClicked(n), e.preventDefault();
                                    });
                                    var i = this.getToolShortcut(e.name);
                                    if (i) try {
                                        this.enableShortcuts(n, i);
                                    } catch (e) {}
                                    var a = v.default.make("div"), s = b.default.t(m.I18nInternalNS.toolNames, e.title || y.capitalize(e.name));
                                    a.appendChild(v.default.text(s)), i && a.appendChild(v.default.make("div", this.CSS.inlineToolbarShortcut, {
                                        textContent: y.beautifyShortcut(i)
                                    })), !1 === y.isMobileScreen() && this.tooltip.onHover(o, a, {
                                        placement: "top",
                                        hidingDelay: 100
                                    }), n.checkState(g.default.get());
                                } else y.log("Render method must return an instance of Node", "warn", e.name);
                            }
                        },
                        {
                            key: "getToolShortcut",
                            value: function(e) {
                                var t1 = this.Editor.Tools, n = t1.inlineTools.get(e), o = t1.internal.inlineTools;
                                return Array.from(o.keys()).includes(e) ? this.inlineTools[e][C.CommonInternalSettings.Shortcut] : n.shortcut;
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function(e, t1) {
                                var n = this;
                                w.default.add({
                                    name: t1,
                                    handler: function(t1) {
                                        var o = n.Editor.BlockManager.currentBlock;
                                        o && o.tool.enabledInlineTools && (t1.preventDefault(), n.toolClicked(e));
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toolClicked",
                            value: function(e) {
                                var t1 = g.default.range;
                                e.surround(t1), this.checkToolsState(), void 0 !== e.renderActions && this.flipper.deactivate();
                            }
                        },
                        {
                            key: "checkToolsState",
                            value: function() {
                                this.toolsInstances.forEach(function(e) {
                                    e.checkState(g.default.get());
                                });
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                var e = {};
                                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(t1) {
                                    var n = (0, l.default)(t1, 2), o = n[0], r = n[1];
                                    e[o] = r.create();
                                }), e;
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new k.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    allowedKeys: [
                                        y.keyCodes.ENTER,
                                        y.keyCodes.TAB
                                    ]
                                });
                            }
                        }
                    ]), o;
                }(h.default);
                o.default = M, M.displayName = "InlineToolbar", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(41),
                n(30),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(7),
                n(390),
                n(9),
                n(8),
                n(391),
                n(392),
                n(393),
                n(394),
                n(395),
                n(399),
                n(400),
                n(401),
                n(185)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y, k, b, m, w, x, C, S, T, E) {
                "use strict";
                var B = n(1);
                function M(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (M = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function _(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = B(r), i = B(i), s = B(s), l = B(l), c = B(c), u = B(u), f = B(f), d = B(d), p = B(p), h = B(h), v = B(v), g = B(g), y = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(y), k = B(k), b = B(b), m = B(m), w = B(w), x = B(x), C = B(C), S = B(S), T = B(T), E = B(E);
                var O = function(e, t1, n, o) {
                    var r, i = arguments.length, a = i < 3 ? t1 : null === o ? o = Object.getOwnPropertyDescriptor(t1, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, h.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t1, n, o);
                    else for(var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t1, n, a) : r(t1, n)) || a);
                    return i > 3 && a && Object.defineProperty(t1, n, a), a;
                }, I = function(e) {
                    (0, f.default)(o, e);
                    var t1, n = _(o);
                    function o() {
                        var e;
                        return (0, c.default)(this, o), (e = n.apply(this, arguments)).stubTool = "stub", e.toolsAvailable = new E.default, e.toolsUnavailable = new E.default, e;
                    }
                    return (0, u.default)(o, [
                        {
                            key: "available",
                            get: function() {
                                return this.toolsAvailable;
                            }
                        },
                        {
                            key: "unavailable",
                            get: function() {
                                return this.toolsUnavailable;
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return this.available.inlineTools;
                            }
                        },
                        {
                            key: "blockTools",
                            get: function() {
                                return this.available.blockTools;
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return this.available.blockTunes;
                            }
                        },
                        {
                            key: "defaultTool",
                            get: function() {
                                return this.blockTools.get(this.config.defaultBlock);
                            }
                        },
                        {
                            key: "internal",
                            get: function() {
                                return this.available.internalTools;
                            }
                        },
                        {
                            key: "prepare",
                            value: (t1 = (0, l.default)(r.default.mark(function e() {
                                var t1, n, o = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (this.validateTools(), this.config.tools = y.deepMerge({}, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                                                e.next = 4;
                                                break;
                                            }
                                            throw Error("Can't start without tools");
                                        case 4:
                                            if (t1 = this.prepareConfig(), this.factory = new x.default(t1, this.config, this.Editor.API), 0 !== (n = this.getListOfPrepareFunctions(t1)).length) {
                                                e.next = 9;
                                                break;
                                            }
                                            return e.abrupt("return", Promise.resolve());
                                        case 9:
                                            return e.next = 11, y.sequence(n, function(e) {
                                                o.toolPrepareMethodSuccess(e);
                                            }, function(e) {
                                                o.toolPrepareMethodFallback(e);
                                            });
                                        case 11:
                                            this.prepareBlockTools();
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "getAllInlineToolsSanitizeConfig",
                            value: function() {
                                var e = {};
                                return Array.from(this.inlineTools.values()).forEach(function(t1) {
                                    Object.assign(e, t1.sanitizeConfig);
                                }), e;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                Object.values(this.available).forEach(function() {
                                    var e = (0, l.default)(r.default.mark(function e(t1) {
                                        return r.default.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    if (!y.isFunction(t1.reset)) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return e.next = 3, t1.reset();
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t1) {
                                        return e.apply(this, arguments);
                                    };
                                }());
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return {
                                    bold: {
                                        class: k.default,
                                        isInternal: !0
                                    },
                                    italic: {
                                        class: b.default,
                                        isInternal: !0
                                    },
                                    link: {
                                        class: m.default,
                                        isInternal: !0
                                    },
                                    paragraph: {
                                        class: v.default,
                                        inlineToolbar: !0,
                                        isInternal: !0
                                    },
                                    stub: {
                                        class: w.default,
                                        isInternal: !0
                                    },
                                    moveUp: {
                                        class: T.default,
                                        isInternal: !0
                                    },
                                    delete: {
                                        class: S.default,
                                        isInternal: !0
                                    },
                                    moveDown: {
                                        class: C.default,
                                        isInternal: !0
                                    }
                                };
                            }
                        },
                        {
                            key: "toolPrepareMethodSuccess",
                            value: function(e) {
                                var t1 = this.factory.get(e.toolName);
                                if (t1.isInline()) {
                                    var n = [
                                        "render",
                                        "surround",
                                        "checkState"
                                    ].filter(function(e) {
                                        return !t1.create()[e];
                                    });
                                    if (n.length) return y.log("Incorrect Inline Tool: ".concat(t1.name, ". Some of required methods is not implemented %o"), "warn", n), void this.toolsUnavailable.set(t1.name, t1);
                                }
                                this.toolsAvailable.set(t1.name, t1);
                            }
                        },
                        {
                            key: "toolPrepareMethodFallback",
                            value: function(e) {
                                this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
                            }
                        },
                        {
                            key: "getListOfPrepareFunctions",
                            value: function(e) {
                                var t1 = [];
                                return Object.entries(e).forEach(function(e) {
                                    var n = (0, s.default)(e, 2), o = n[0], r = n[1];
                                    t1.push({
                                        function: y.isFunction(r.class.prepare) ? r.class.prepare : function() {},
                                        data: {
                                            toolName: o,
                                            config: r.config
                                        }
                                    });
                                }), t1;
                            }
                        },
                        {
                            key: "prepareBlockTools",
                            value: function() {
                                var e = this;
                                Array.from(this.blockTools.values()).forEach(function(t1) {
                                    e.assignInlineToolsToBlockTool(t1), e.assignBlockTunesToBlockTool(t1);
                                });
                            }
                        },
                        {
                            key: "assignInlineToolsToBlockTool",
                            value: function(e) {
                                var t1 = this;
                                !1 !== this.config.inlineToolbar && (!0 !== e.enabledInlineTools ? Array.isArray(e.enabledInlineTools) && (e.inlineTools = new E.default(e.enabledInlineTools.map(function(e) {
                                    return [
                                        e,
                                        t1.inlineTools.get(e)
                                    ];
                                }))) : e.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(e) {
                                    return [
                                        e,
                                        t1.inlineTools.get(e)
                                    ];
                                }) : Array.from(this.inlineTools.entries())));
                            }
                        },
                        {
                            key: "assignBlockTunesToBlockTool",
                            value: function(e) {
                                var t1 = this;
                                if (!1 !== e.enabledBlockTunes) {
                                    if (Array.isArray(e.enabledBlockTunes)) {
                                        var n = new E.default(e.enabledBlockTunes.map(function(e) {
                                            return [
                                                e,
                                                t1.blockTunes.get(e)
                                            ];
                                        }));
                                        e.tunes = new E.default([].concat((0, i.default)(n), (0, i.default)(this.blockTunes.internalTools)));
                                    } else if (Array.isArray(this.config.tunes)) {
                                        var o = new E.default(this.config.tunes.map(function(e) {
                                            return [
                                                e,
                                                t1.blockTunes.get(e)
                                            ];
                                        }));
                                        e.tunes = new E.default([].concat((0, i.default)(o), (0, i.default)(this.blockTunes.internalTools)));
                                    } else e.tunes = this.blockTunes.internalTools;
                                }
                            }
                        },
                        {
                            key: "validateTools",
                            value: function() {
                                for(var e in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
                                    if (e in this.internalTools) return;
                                    var t1 = this.config.tools[e];
                                    if (!y.isFunction(t1) && !y.isFunction(t1.class)) throw Error("Tool \xab".concat(e, "\xbb must be a constructor function or an object with function in the \xabclass\xbb property"));
                                }
                            }
                        },
                        {
                            key: "prepareConfig",
                            value: function() {
                                var e = {};
                                for(var t1 in this.config.tools)y.isObject(this.config.tools[t1]) ? e[t1] = this.config.tools[t1] : e[t1] = {
                                    class: this.config.tools[t1]
                                };
                                return e;
                            }
                        }
                    ]), o;
                }(g.default);
                o.default = I, I.displayName = "Tools", O([
                    y.cacheable
                ], I.prototype, "getAllInlineToolsSanitizeConfig", null), e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(30),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(153)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(e) {
                    (0, s.default)(n, e);
                    var t1 = d(n);
                    function n() {
                        return (0, i.default)(this, n), t1.apply(this, arguments);
                    }
                    return (0, a.default)(n, [
                        {
                            key: "blockTools",
                            get: function() {
                                return new n(Array.from(this.entries()).filter(function(e) {
                                    return (0, r.default)(e, 2)[1].isBlock();
                                }));
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return new n(Array.from(this.entries()).filter(function(e) {
                                    return (0, r.default)(e, 2)[1].isInline();
                                }));
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return new n(Array.from(this.entries()).filter(function(e) {
                                    return (0, r.default)(e, 2)[1].isTune();
                                }));
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return new n(Array.from(this.entries()).filter(function(e) {
                                    return (0, r.default)(e, 2)[1].isInternal;
                                }));
                            }
                        },
                        {
                            key: "externalTools",
                            get: function() {
                                return new n(Array.from(this.entries()).filter(function(e) {
                                    return !(0, r.default)(e, 2)[1].isInternal;
                                }));
                            }
                        }
                    ]), n;
                }((0, (u = f(u)).default)(Map));
                o.default = p, p.displayName = "ToolsCollection", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(41),
                n(30),
                n(21),
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(9),
                n(19),
                n(8),
                n(25),
                n(61),
                n(67)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h, v, g, y, k, b) {
                "use strict";
                var m = n(1);
                function w(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (w = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function x(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, p.default)(e);
                        if (t1) {
                            var r = (0, p.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, d.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = m(r), i = m(i), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = m(h), v = m(v), g = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = w(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(g), y = m(y), k = m(k), b = m(b);
                var C = function(e) {
                    (0, f.default)(a, e);
                    var t1, o = x(a);
                    function a() {
                        var e;
                        return (0, c.default)(this, a), (e = o.apply(this, arguments)).isMobile = !1, e.contentRectCache = void 0, e.resizeDebouncer = g.debounce(function() {
                            e.windowResize();
                        }, 200), e;
                    }
                    return (0, u.default)(a, [
                        {
                            key: "events",
                            get: function() {
                                return {
                                    blockHovered: "block-hovered"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorWrapperNarrow: "codex-editor--narrow",
                                    editorZone: "codex-editor__redactor",
                                    editorZoneHidden: "codex-editor__redactor--hidden",
                                    editorLoader: "codex-editor__loader",
                                    editorEmpty: "codex-editor--empty",
                                    editorRtlFix: "codex-editor--rtl"
                                };
                            }
                        },
                        {
                            key: "contentRect",
                            get: function() {
                                if (this.contentRectCache) return this.contentRectCache;
                                var e = this.nodes.wrapper.querySelector(".".concat(k.default.CSS.content));
                                return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
                                    width: 650,
                                    left: 0,
                                    right: 0
                                };
                            }
                        },
                        {
                            key: "addLoader",
                            value: function() {
                                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "removeLoader",
                            value: function() {
                                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "prepare",
                            value: (t1 = (0, l.default)(r.default.mark(function e() {
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            this.checkIsMobile(), this.make(), this.addLoader(), this.loadStyles();
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(e) {
                                e ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "checkEmptiness",
                            value: function() {
                                var e = this.Editor.BlockManager;
                                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
                            }
                        },
                        {
                            key: "someToolbarOpened",
                            get: function() {
                                var e = this.Editor, t1 = e.Toolbar, n = e.BlockSettings, o = e.InlineToolbar, r = e.ConversionToolbar;
                                return n.opened || o.opened || r.opened || t1.toolbox.opened;
                            }
                        },
                        {
                            key: "someFlipperButtonFocused",
                            get: function() {
                                return !!this.Editor.Toolbar.toolbox.hasFocus() || Object.entries(this.Editor).filter(function(e) {
                                    var t1 = (0, s.default)(e, 2);
                                    return t1[0], t1[1].flipper instanceof b.default;
                                }).some(function(e) {
                                    var t1 = (0, s.default)(e, 2);
                                    return t1[0], t1[1].flipper.hasFocus();
                                });
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.nodes.holder.innerHTML = "";
                            }
                        },
                        {
                            key: "closeAllToolbars",
                            value: function() {
                                var e = this.Editor, t1 = e.Toolbar, n = e.BlockSettings, o = e.InlineToolbar, r = e.ConversionToolbar;
                                n.close(), o.close(), r.close(), t1.toolbox.close();
                            }
                        },
                        {
                            key: "checkIsMobile",
                            value: function() {
                                this.isMobile = window.innerWidth < g.mobileScreenBreakpoint;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [
                                    this.CSS.editorWrapper
                                ].concat((0, i.default)(this.isRtl ? [
                                    this.CSS.editorRtlFix
                                ] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
                            }
                        },
                        {
                            key: "loadStyles",
                            value: function() {
                                var e = n(402);
                                if (!v.default.get("editor-js-styles")) {
                                    var t1 = v.default.make("style", null, {
                                        id: "editor-js-styles",
                                        textContent: e.toString()
                                    });
                                    v.default.prepend(document.head, t1);
                                }
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var e = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(t1) {
                                    e.redactorClicked(t1);
                                }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(t1) {
                                    e.documentTouched(t1);
                                }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(t1) {
                                    e.documentTouched(t1);
                                }, !0), this.readOnlyMutableListeners.on(document, "keydown", function(t1) {
                                    e.documentKeydown(t1);
                                }, !0), this.readOnlyMutableListeners.on(document, "mousedown", function(t1) {
                                    e.documentClicked(t1);
                                }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", function() {
                                    e.selectionChanged();
                                }, !0), this.readOnlyMutableListeners.on(window, "resize", function() {
                                    e.resizeDebouncer();
                                }, {
                                    passive: !0
                                }), this.watchBlockHoveredEvents();
                            }
                        },
                        {
                            key: "watchBlockHoveredEvents",
                            value: function() {
                                var e, t1 = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", g.throttle(function(n) {
                                    var o = n.target.closest(".ce-block");
                                    t1.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, t1.eventsDispatcher.emit(t1.events.blockHovered, {
                                        block: t1.Editor.BlockManager.getBlockByChildNode(o)
                                    }));
                                }, 20), {
                                    passive: !0
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "windowResize",
                            value: function() {
                                this.contentRectCache = null, this.checkIsMobile();
                            }
                        },
                        {
                            key: "documentKeydown",
                            value: function(e) {
                                switch(e.keyCode){
                                    case g.keyCodes.ENTER:
                                        this.enterPressed(e);
                                        break;
                                    case g.keyCodes.BACKSPACE:
                                        this.backspacePressed(e);
                                        break;
                                    case g.keyCodes.ESC:
                                        this.escapePressed(e);
                                        break;
                                    default:
                                        this.defaultBehaviour(e);
                                }
                            }
                        },
                        {
                            key: "defaultBehaviour",
                            value: function(e) {
                                var t1 = this.Editor.BlockManager.currentBlock, n = e.target.closest(".".concat(this.CSS.editorWrapper)), o = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                                void 0 === t1 || null !== n ? n || t1 && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(e);
                            }
                        },
                        {
                            key: "backspacePressed",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.BlockSelection, r = t1.Caret;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) {
                                    var i = n.removeSelectedBlocks();
                                    r.setToBlock(n.insertDefaultBlockAtIndex(i, !0), r.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
                                }
                            }
                        },
                        {
                            key: "escapePressed",
                            value: function(e) {
                                this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(e) {
                                var t1 = this.Editor, n = t1.BlockManager, o = t1.BlockSelection, r = n.currentBlockIndex >= 0;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) return o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), void e.stopPropagation();
                                if (!this.someToolbarOpened && r && "BODY" === e.target.tagName) {
                                    var i = this.Editor.BlockManager.insert();
                                    this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i);
                                }
                                this.Editor.BlockSelection.clearSelection(e);
                            }
                        },
                        {
                            key: "documentClicked",
                            value: function(e) {
                                if (e.isTrusted) {
                                    var t1 = e.target;
                                    this.nodes.holder.contains(t1) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
                                    var n = this.Editor.BlockSettings.nodes.wrapper.contains(t1), o = this.Editor.Toolbar.nodes.settingsToggler.contains(t1), r = n || o;
                                    if (this.Editor.BlockSettings.opened && !r) {
                                        this.Editor.BlockSettings.close();
                                        var i = this.Editor.BlockManager.getBlockByChildNode(t1);
                                        this.Editor.Toolbar.moveAndOpen(i);
                                    }
                                    this.Editor.BlockSelection.clearSelection(e);
                                }
                            }
                        },
                        {
                            key: "documentTouched",
                            value: function(e) {
                                var t1 = e.target;
                                if (t1 === this.nodes.redactor) {
                                    var n = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, o = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
                                    t1 = document.elementFromPoint(n, o);
                                }
                                try {
                                    this.Editor.BlockManager.setCurrentBlockByChildNode(t1), this.Editor.BlockManager.highlightCurrentNode();
                                } catch (e) {
                                    this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                                }
                                this.Editor.Toolbar.moveAndOpen();
                            }
                        },
                        {
                            key: "redactorClicked",
                            value: function(e) {
                                var t1 = this.Editor.BlockSelection;
                                if (y.default.isCollapsed) {
                                    var n = function() {
                                        e.stopImmediatePropagation(), e.stopPropagation();
                                    }, o = e.target, r = e.metaKey || e.ctrlKey;
                                    if (v.default.isAnchor(o) && r) {
                                        n();
                                        var i = o.getAttribute("href"), a = g.getValidUrl(i);
                                        g.openTab(a);
                                    } else {
                                        var s = this.Editor.BlockManager.getBlockByIndex(-1), l = v.default.offset(s.holder).bottom, c = e.pageY;
                                        if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && !t1.anyBlockSelected && l < c) {
                                            n();
                                            var u = this.Editor, f = u.BlockManager, d = u.Caret, p = u.Toolbar;
                                            f.lastBlock.tool.isDefault && f.lastBlock.isEmpty || f.insertAtEnd(), d.setToTheLastBlock(), p.moveAndOpen(f.lastBlock);
                                        }
                                    }
                                }
                            }
                        },
                        {
                            key: "selectionChanged",
                            value: function() {
                                var e = this.Editor, t1 = e.CrossBlockSelection, n = e.BlockSelection, o = y.default.anchorElement;
                                if (t1.isCrossBlockSelectionStarted && n.anyBlockSelected && y.default.get().removeAllRanges(), o) {
                                    var r = null === o.closest(".".concat(k.default.CSS.content));
                                    if (r && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), "true" !== o.dataset.inlineToolbar)) return;
                                    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
                                    var i = !0 !== r;
                                    this.Editor.InlineToolbar.tryToShow(!0, i);
                                } else y.default.range || this.Editor.InlineToolbar.close();
                            }
                        }
                    ]), a;
                }(h.default);
                o.default = C, C.displayName = "UI", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            n(188), e.exports = n(361);
        },
        function(e, t1, n) {
            n(189);
        },
        function(e, t1, n) {
            "use strict";
            n(190), n(333), n(335), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(354), n(356), n(360);
        },
        function(e, t1, n) {
            n(191), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(272), n(273), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(106), n(296), n(137), n(297), n(138), n(298), n(299), n(300), n(301), n(139), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), e.exports = n(16);
        },
        function(e, t1, n) {
            "use strict";
            var o = n(10), r = n(26), i = n(17), a = n(0), s = n(23), l = n(43).KEY, c = n(11), u = n(70), f = n(55), d = n(45), p = n(14), h = n(87), v = n(118), g = n(193), y = n(73), k = n(12), b = n(13), m = n(22), w = n(28), x = n(42), C = n(44), S = n(49), T = n(121), E = n(34), B = n(72), M = n(18), _ = n(47), O = E.f, I = M.f, L = T.f, P = o.Symbol, j = o.JSON, R = j && j.stringify, A = p("_hidden"), N = p("toPrimitive"), D = {}.propertyIsEnumerable, F = u("symbol-registry"), H = u("symbols"), W = u("op-symbols"), U = Object.prototype, z = "function" == typeof P && !!B.f, V = o.QObject, Y = !V || !V.prototype || !V.prototype.findChild, X = i && c(function() {
                return 7 != S(I({}, "a", {
                    get: function() {
                        return I(this, "a", {
                            value: 7
                        }).a;
                    }
                })).a;
            }) ? function(e, t1, n) {
                var o = O(U, t1);
                o && delete U[t1], I(e, t1, n), o && e !== U && I(U, t1, o);
            } : I, G = function(e) {
                var t1 = H[e] = S(P.prototype);
                return t1._k = e, t1;
            }, K = z && "symbol" == typeof P.iterator ? function(e) {
                return "symbol" == typeof e;
            } : function(e) {
                return e instanceof P;
            }, Z = function(e, t1, n) {
                return e === U && Z(W, t1, n), k(e), t1 = x(t1, !0), k(n), r(H, t1) ? (n.enumerable ? (r(e, A) && e[A][t1] && (e[A][t1] = !1), n = S(n, {
                    enumerable: C(0, !1)
                })) : (r(e, A) || I(e, A, C(1, {})), e[A][t1] = !0), X(e, t1, n)) : I(e, t1, n);
            }, q = function(e, t1) {
                k(e);
                for(var n, o = g(t1 = w(t1)), r = 0, i = o.length; i > r;)Z(e, n = o[r++], t1[n]);
                return e;
            }, J = function(e) {
                var t1 = D.call(this, e = x(e, !0));
                return !(this === U && r(H, e) && !r(W, e)) && (!(t1 || !r(this, e) || !r(H, e) || r(this, A) && this[A][e]) || t1);
            }, $ = function(e, t1) {
                if (e = w(e), t1 = x(t1, !0), e !== U || !r(H, t1) || r(W, t1)) {
                    var n = O(e, t1);
                    return !n || !r(H, t1) || r(e, A) && e[A][t1] || (n.enumerable = !0), n;
                }
            }, Q = function(e) {
                for(var t1, n = L(w(e)), o = [], i = 0; n.length > i;)r(H, t1 = n[i++]) || t1 == A || t1 == l || o.push(t1);
                return o;
            }, ee = function(e) {
                for(var t1, n = e === U, o = L(n ? W : w(e)), i = [], a = 0; o.length > a;)!r(H, t1 = o[a++]) || n && !r(U, t1) || i.push(H[t1]);
                return i;
            };
            z || (s((P = function() {
                if (this instanceof P) throw TypeError("Symbol is not a constructor!");
                var e = d(arguments.length > 0 ? arguments[0] : void 0), t1 = function(n) {
                    this === U && t1.call(W, n), r(this, A) && r(this[A], e) && (this[A][e] = !1), X(this, e, C(1, n));
                };
                return i && Y && X(U, e, {
                    configurable: !0,
                    set: t1
                }), G(e);
            }).prototype, "toString", function() {
                return this._k;
            }), E.f = $, M.f = Z, n(50).f = T.f = Q, n(63).f = J, B.f = ee, i && !n(46) && s(U, "propertyIsEnumerable", J, !0), h.f = function(e) {
                return G(p(e));
            }), a(a.G + a.W + a.F * !z, {
                Symbol: P
            });
            for(var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;)p(te[ne++]);
            for(var oe = _(p.store), re = 0; oe.length > re;)v(oe[re++]);
            a(a.S + a.F * !z, "Symbol", {
                for: function(e) {
                    return r(F, e += "") ? F[e] : F[e] = P(e);
                },
                keyFor: function(e) {
                    if (!K(e)) throw TypeError(e + " is not a symbol!");
                    for(var t1 in F)if (F[t1] === e) return t1;
                },
                useSetter: function() {
                    Y = !0;
                },
                useSimple: function() {
                    Y = !1;
                }
            }), a(a.S + a.F * !z, "Object", {
                create: function(e, t1) {
                    return void 0 === t1 ? S(e) : q(S(e), t1);
                },
                defineProperty: Z,
                defineProperties: q,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: ee
            });
            var ie = c(function() {
                B.f(1);
            });
            a(a.S + a.F * ie, "Object", {
                getOwnPropertySymbols: function(e) {
                    return B.f(m(e));
                }
            }), j && a(a.S + a.F * (!z || c(function() {
                var e = P();
                return "[null]" != R([
                    e
                ]) || "{}" != R({
                    a: e
                }) || "{}" != R(Object(e));
            })), "JSON", {
                stringify: function(e) {
                    for(var t1, n, o = [
                        e
                    ], r = 1; arguments.length > r;)o.push(arguments[r++]);
                    if (n = t1 = o[1], (b(t1) || void 0 !== e) && !K(e)) return y(t1) || (t1 = function(e, t1) {
                        if ("function" == typeof n && (t1 = n.call(this, e, t1)), !K(t1)) return t1;
                    }), o[1] = t1, R.apply(j, o);
                }
            }), P.prototype[N] || n(27)(P.prototype, N, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0);
        },
        function(e, t1, n) {
            e.exports = n(70)("native-function-to-string", Function.toString);
        },
        function(e, t1, n) {
            var o = n(47), r = n(72), i = n(63);
            e.exports = function(e) {
                var t1 = o(e), n = r.f;
                if (n) for(var a, s = n(e), l = i.f, c = 0; s.length > c;)l.call(e, a = s[c++]) && t1.push(a);
                return t1;
            };
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Object", {
                create: n(49)
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S + o.F * !n(17), "Object", {
                defineProperty: n(18).f
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S + o.F * !n(17), "Object", {
                defineProperties: n(120)
            });
        },
        function(e, t1, n) {
            var o = n(28), r = n(34).f;
            n(35)("getOwnPropertyDescriptor", function() {
                return function(e, t1) {
                    return r(o(e), t1);
                };
            });
        },
        function(e, t1, n) {
            var o = n(22), r = n(51);
            n(35)("getPrototypeOf", function() {
                return function(e) {
                    return r(o(e));
                };
            });
        },
        function(e, t1, n) {
            var o = n(22), r = n(47);
            n(35)("keys", function() {
                return function(e) {
                    return r(o(e));
                };
            });
        },
        function(e, t1, n) {
            n(35)("getOwnPropertyNames", function() {
                return n(121).f;
            });
        },
        function(e, t1, n) {
            var o = n(13), r = n(43).onFreeze;
            n(35)("freeze", function(e) {
                return function(t1) {
                    return e && o(t1) ? e(r(t1)) : t1;
                };
            });
        },
        function(e, t1, n) {
            var o = n(13), r = n(43).onFreeze;
            n(35)("seal", function(e) {
                return function(t1) {
                    return e && o(t1) ? e(r(t1)) : t1;
                };
            });
        },
        function(e, t1, n) {
            var o = n(13), r = n(43).onFreeze;
            n(35)("preventExtensions", function(e) {
                return function(t1) {
                    return e && o(t1) ? e(r(t1)) : t1;
                };
            });
        },
        function(e, t1, n) {
            var o = n(13);
            n(35)("isFrozen", function(e) {
                return function(t1) {
                    return !o(t1) || !!e && e(t1);
                };
            });
        },
        function(e, t1, n) {
            var o = n(13);
            n(35)("isSealed", function(e) {
                return function(t1) {
                    return !o(t1) || !!e && e(t1);
                };
            });
        },
        function(e, t1, n) {
            var o = n(13);
            n(35)("isExtensible", function(e) {
                return function(t1) {
                    return !!o(t1) && (!e || e(t1));
                };
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S + o.F, "Object", {
                assign: n(122)
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Object", {
                is: n(123)
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Object", {
                setPrototypeOf: n(91).set
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(64), r = {};
            r[n(14)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
                return "[object " + o(this) + "]";
            }, !0);
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.P, "Function", {
                bind: n(124)
            });
        },
        function(e, t1, n) {
            var o = n(18).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
            "name" in r || n(17) && o(r, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(i)[1];
                    } catch (e) {
                        return "";
                    }
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(13), r = n(51), i = n(14)("hasInstance"), a = Function.prototype;
            i in a || n(18).f(a, i, {
                value: function(e) {
                    if ("function" != typeof this || !o(e)) return !1;
                    if (!o(this.prototype)) return e instanceof this;
                    for(; e = r(e);)if (this.prototype === e) return !0;
                    return !1;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(126);
            o(o.G + o.F * (parseInt != r), {
                parseInt: r
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(127);
            o(o.G + o.F * (parseFloat != r), {
                parseFloat: r
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(10), r = n(26), i = n(38), a = n(93), s = n(42), l = n(11), c = n(50).f, u = n(34).f, f = n(18).f, d = n(56).trim, p = o.Number, h = p, v = p.prototype, g = "Number" == i(n(49)(v)), y = "trim" in String.prototype, k = function(e) {
                var t1 = s(e, !1);
                if ("string" == typeof t1 && t1.length > 2) {
                    var n, o, r, i = (t1 = y ? t1.trim() : d(t1, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = t1.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === i) {
                        switch(t1.charCodeAt(1)){
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +t1;
                        }
                        for(var a, l = t1.slice(2), c = 0, u = l.length; c < u; c++)if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                        return parseInt(l, o);
                    }
                }
                return +t1;
            };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function(e) {
                    var t1 = arguments.length < 1 ? 0 : e, n = this;
                    return n instanceof p && (g ? l(function() {
                        v.valueOf.call(n);
                    }) : "Number" != i(n)) ? a(new h(k(t1)), n, p) : k(t1);
                };
                for(var b, m = n(17) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; m.length > w; w++)r(h, b = m[w]) && !r(p, b) && f(p, b, u(h, b));
                p.prototype = v, v.constructor = p, n(23)(o, "Number", p);
            }
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(33), i = n(128), a = n(94), s = 1..toFixed, l = Math.floor, c = [
                0,
                0,
                0,
                0,
                0,
                0
            ], u = "Number.toFixed: incorrect invocation!", f = function(e, t1) {
                for(var n = -1, o = t1; ++n < 6;)o += e * c[n], c[n] = o % 1e7, o = l(o / 1e7);
            }, d = function(e) {
                for(var t1 = 6, n = 0; --t1 >= 0;)n += c[t1], c[t1] = l(n / e), n = n % e * 1e7;
            }, p = function() {
                for(var e = 6, t1 = ""; --e >= 0;)if ("" !== t1 || 0 === e || 0 !== c[e]) {
                    var n = String(c[e]);
                    t1 = "" === t1 ? n : t1 + a.call("0", 7 - n.length) + n;
                }
                return t1;
            }, h = function(e, t1, n) {
                return 0 === t1 ? n : t1 % 2 == 1 ? h(e, t1 - 1, n * e) : h(e * e, t1 / 2, n);
            };
            o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(11)(function() {
                s.call({});
            })), "Number", {
                toFixed: function(e) {
                    var t1, n, o, s, l = i(this, u), c = r(e), v = "", g = "0";
                    if (c < 0 || c > 20) throw RangeError(u);
                    if (l != l) return "NaN";
                    if (l <= -1000000000000000000000 || l >= 1e21) return String(l);
                    if (l < 0 && (v = "-", l = -l), l > 1e-21) {
                        if (n = (t1 = function(e) {
                            for(var t1 = 0, n = e; n >= 4096;)t1 += 12, n /= 4096;
                            for(; n >= 2;)t1 += 1, n /= 2;
                            return t1;
                        }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -t1, 1) : l / h(2, t1, 1), n *= 4503599627370496, (t1 = 52 - t1) > 0) {
                            for(f(0, n), o = c; o >= 7;)f(1e7, 0), o -= 7;
                            for(f(h(10, o, 1), 0), o = t1 - 1; o >= 23;)d(8388608), o -= 23;
                            d(1 << o), f(1, 1), d(2), g = p();
                        } else f(0, n), f(1 << -t1, 0), g = p() + a.call("0", c);
                    }
                    return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(11), i = n(128), a = 1..toPrecision;
            o(o.P + o.F * (r(function() {
                return "1" !== a.call(1, void 0);
            }) || !r(function() {
                a.call({});
            })), "Number", {
                toPrecision: function(e) {
                    var t1 = i(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === e ? a.call(t1) : a.call(t1, e);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Number", {
                EPSILON: Math.pow(2, -52)
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(10).isFinite;
            o(o.S, "Number", {
                isFinite: function(e) {
                    return "number" == typeof e && r(e);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Number", {
                isInteger: n(129)
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Number", {
                isNaN: function(e) {
                    return e != e;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(129), i = Math.abs;
            o(o.S, "Number", {
                isSafeInteger: function(e) {
                    return r(e) && i(e) <= 9007199254740991;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(127);
            o(o.S + o.F * (Number.parseFloat != r), "Number", {
                parseFloat: r
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(126);
            o(o.S + o.F * (Number.parseInt != r), "Number", {
                parseInt: r
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(130), i = Math.sqrt, a = Math.acosh;
            o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function(e) {
                    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : r(e - 1 + i(e - 1) * i(e + 1));
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = Math.asinh;
            o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
                asinh: function e(t1) {
                    return isFinite(t1 = +t1) && 0 != t1 ? t1 < 0 ? -e(-t1) : Math.log(t1 + Math.sqrt(t1 * t1 + 1)) : t1;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = Math.atanh;
            o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
                atanh: function(e) {
                    return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(95);
            o(o.S, "Math", {
                cbrt: function(e) {
                    return r(e = +e) * Math.pow(Math.abs(e), 1 / 3);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                clz32: function(e) {
                    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = Math.exp;
            o(o.S, "Math", {
                cosh: function(e) {
                    return (r(e = +e) + r(-e)) / 2;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(96);
            o(o.S + o.F * (r != Math.expm1), "Math", {
                expm1: r
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                fround: n(236)
            });
        },
        function(e, t1, n) {
            var o = n(95), r = Math.pow, i = r(2, -52), a = r(2, -23), s = r(2, 127) * (2 - a), l = r(2, -126);
            e.exports = Math.fround || function(e) {
                var t1, n, r = Math.abs(e), c = o(e);
                return r < l ? c * (r / l / a + 1 / i - 1 / i) * l * a : (n = (t1 = (1 + a / i) * r) - (t1 - r)) > s || n != n ? c * (1 / 0) : c * n;
            };
        },
        function(e, t1, n) {
            var o = n(0), r = Math.abs;
            o(o.S, "Math", {
                hypot: function(e, t1) {
                    for(var n, o, i = 0, a = 0, s = arguments.length, l = 0; a < s;)l < (n = r(arguments[a++])) ? (i = i * (o = l / n) * o + 1, l = n) : i += n > 0 ? (o = n / l) * o : n;
                    return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = Math.imul;
            o(o.S + o.F * n(11)(function() {
                return -5 != r(4294967295, 5) || 2 != r.length;
            }), "Math", {
                imul: function(e, t1) {
                    var n = +e, o = +t1, r = 65535 & n, i = 65535 & o;
                    return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                log10: function(e) {
                    return Math.log(e) * Math.LOG10E;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                log1p: n(130)
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                log2: function(e) {
                    return Math.log(e) / Math.LN2;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                sign: n(95)
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(96), i = Math.exp;
            o(o.S + o.F * n(11)(function() {
                return -0.00000000000000002 != !Math.sinh(-0.00000000000000002);
            }), "Math", {
                sinh: function(e) {
                    return Math.abs(e = +e) < 1 ? (r(e) - r(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(96), i = Math.exp;
            o(o.S, "Math", {
                tanh: function(e) {
                    var t1 = r(e = +e), n = r(-e);
                    return t1 == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t1 - n) / (i(e) + i(-e));
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Math", {
                trunc: function(e) {
                    return (e > 0 ? Math.floor : Math.ceil)(e);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(48), i = String.fromCharCode, a = String.fromCodePoint;
            o(o.S + o.F * (!!a && 1 != a.length), "String", {
                fromCodePoint: function(e) {
                    for(var t1, n = [], o = arguments.length, a = 0; o > a;){
                        if (t1 = +arguments[a++], r(t1, 1114111) !== t1) throw RangeError(t1 + " is not a valid code point");
                        n.push(t1 < 65536 ? i(t1) : i(55296 + ((t1 -= 65536) >> 10), t1 % 1024 + 56320));
                    }
                    return n.join("");
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(28), i = n(15);
            o(o.S, "String", {
                raw: function(e) {
                    for(var t1 = r(e.raw), n = i(t1.length), o = arguments.length, a = [], s = 0; n > s;)a.push(String(t1[s++])), s < o && a.push(String(arguments[s]));
                    return a.join("");
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            n(56)("trim", function(e) {
                return function() {
                    return e(this, 3);
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(97)(!0);
            n(98)(String, "String", function(e) {
                this._t = String(e), this._i = 0;
            }, function() {
                var e, t1 = this._t, n = this._i;
                return n >= t1.length ? {
                    value: void 0,
                    done: !0
                } : (e = o(t1, n), this._i += e.length, {
                    value: e,
                    done: !1
                });
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(97)(!1);
            o(o.P, "String", {
                codePointAt: function(e) {
                    return r(this, e);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(15), i = n(99), a = "".endsWith;
            o(o.P + o.F * n(101)("endsWith"), "String", {
                endsWith: function(e) {
                    var t1 = i(this, e, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, o = r(t1.length), s = void 0 === n ? o : Math.min(r(n), o), l = String(e);
                    return a ? a.call(t1, l, s) : t1.slice(s - l.length, s) === l;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(99);
            o(o.P + o.F * n(101)("includes"), "String", {
                includes: function(e) {
                    return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.P, "String", {
                repeat: n(94)
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(15), i = n(99), a = "".startsWith;
            o(o.P + o.F * n(101)("startsWith"), "String", {
                startsWith: function(e) {
                    var t1 = i(this, e, "startsWith"), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t1.length)), o = String(e);
                    return a ? a.call(t1, o, n) : t1.slice(n, n + o.length) === o;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("anchor", function(e) {
                return function(t1) {
                    return e(this, "a", "name", t1);
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("big", function(e) {
                return function() {
                    return e(this, "big", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("blink", function(e) {
                return function() {
                    return e(this, "blink", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("bold", function(e) {
                return function() {
                    return e(this, "b", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("fixed", function(e) {
                return function() {
                    return e(this, "tt", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("fontcolor", function(e) {
                return function(t1) {
                    return e(this, "font", "color", t1);
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("fontsize", function(e) {
                return function(t1) {
                    return e(this, "font", "size", t1);
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("italics", function(e) {
                return function() {
                    return e(this, "i", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("link", function(e) {
                return function(t1) {
                    return e(this, "a", "href", t1);
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("small", function(e) {
                return function() {
                    return e(this, "small", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("strike", function(e) {
                return function() {
                    return e(this, "strike", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("sub", function(e) {
                return function() {
                    return e(this, "sub", "", "");
                };
            });
        },
        function(e, t1, n) {
            "use strict";
            n(24)("sup", function(e) {
                return function() {
                    return e(this, "sup", "", "");
                };
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Date", {
                now: function() {
                    return (new Date).getTime();
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(22), i = n(42);
            o(o.P + o.F * n(11)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1;
                    }
                });
            }), "Date", {
                toJSON: function(e) {
                    var t1 = r(this), n = i(t1);
                    return "number" != typeof n || isFinite(n) ? t1.toISOString() : null;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(271);
            o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
                toISOString: r
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(e) {
                return e > 9 ? e : "0" + e;
            };
            e.exports = o(function() {
                return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
            }) || !o(function() {
                i.call(new Date(NaN));
            }) ? function() {
                if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
                var e = this, t1 = e.getUTCFullYear(), n = e.getUTCMilliseconds(), o = t1 < 0 ? "-" : t1 > 9999 ? "+" : "";
                return o + ("00000" + Math.abs(t1)).slice(o ? -6 : -4) + "-" + a(e.getUTCMonth() + 1) + "-" + a(e.getUTCDate()) + "T" + a(e.getUTCHours()) + ":" + a(e.getUTCMinutes()) + ":" + a(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
            } : i;
        },
        function(e, t1, n) {
            var o = Date.prototype, r = o.toString, i = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", function() {
                var e = i.call(this);
                return e == e ? r.call(this) : "Invalid Date";
            });
        },
        function(e, t1, n) {
            var o = n(14)("toPrimitive"), r = Date.prototype;
            o in r || n(27)(r, o, n(274));
        },
        function(e, t1, n) {
            "use strict";
            var o = n(12), r = n(42);
            e.exports = function(e) {
                if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
                return r(o(this), "number" != e);
            };
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Array", {
                isArray: n(73)
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(31), r = n(0), i = n(22), a = n(132), s = n(102), l = n(15), c = n(103), u = n(104);
            r(r.S + r.F * !n(74)(function(e) {
                Array.from(e);
            }), "Array", {
                from: function(e) {
                    var t1, n, r, f, d = i(e), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, k = u(d);
                    if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == k || p == Array && s(k)) for(n = new p(t1 = l(d.length)); t1 > y; y++)c(n, y, g ? v(d[y], y) : d[y]);
                    else for(f = k.call(d), n = new p; !(r = f.next()).done; y++)c(n, y, g ? a(f, v, [
                        r.value,
                        y
                    ], !0) : r.value);
                    return n.length = y, n;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(103);
            o(o.S + o.F * n(11)(function() {
                function e() {}
                return !(Array.of.call(e) instanceof e);
            }), "Array", {
                of: function() {
                    for(var e = 0, t1 = arguments.length, n = new ("function" == typeof this ? this : Array)(t1); t1 > e;)r(n, e, arguments[e++]);
                    return n.length = t1, n;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(28), i = [].join;
            o(o.P + o.F * (n(62) != Object || !n(29)(i)), "Array", {
                join: function(e) {
                    return i.call(r(this), void 0 === e ? "," : e);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(90), i = n(38), a = n(48), s = n(15), l = [].slice;
            o(o.P + o.F * n(11)(function() {
                r && l.call(r);
            }), "Array", {
                slice: function(e, t1) {
                    var n = s(this.length), o = i(this);
                    if (t1 = void 0 === t1 ? n : t1, "Array" == o) return l.call(this, e, t1);
                    for(var r = a(e, n), c = a(t1, n), u = s(c - r), f = new Array(u), d = 0; d < u; d++)f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                    return f;
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(32), i = n(22), a = n(11), s = [].sort, l = [
                1,
                2,
                3
            ];
            o(o.P + o.F * (a(function() {
                l.sort(void 0);
            }) || !a(function() {
                l.sort(null);
            }) || !n(29)(s)), "Array", {
                sort: function(e) {
                    return void 0 === e ? s.call(i(this)) : s.call(i(this), r(e));
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(0), i = n(29)([].forEach, !0);
            o(o.P + o.F * !i, "Array", {
                forEach: function(e) {
                    return r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            var o = n(13), r = n(73), i = n(14)("species");
            e.exports = function(e) {
                var t1;
                return r(e) && ("function" != typeof (t1 = e.constructor) || t1 !== Array && !r(t1.prototype) || (t1 = void 0), o(t1) && null === (t1 = t1[i]) && (t1 = void 0)), void 0 === t1 ? Array : t1;
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(1);
            o(o.P + o.F * !n(29)([].map, !0), "Array", {
                map: function(e) {
                    return r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(2);
            o(o.P + o.F * !n(29)([].filter, !0), "Array", {
                filter: function(e) {
                    return r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(3);
            o(o.P + o.F * !n(29)([].some, !0), "Array", {
                some: function(e) {
                    return r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(4);
            o(o.P + o.F * !n(29)([].every, !0), "Array", {
                every: function(e) {
                    return r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(134);
            o(o.P + o.F * !n(29)([].reduce, !0), "Array", {
                reduce: function(e) {
                    return r(this, e, arguments.length, arguments[1], !1);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(134);
            o(o.P + o.F * !n(29)([].reduceRight, !0), "Array", {
                reduceRight: function(e) {
                    return r(this, e, arguments.length, arguments[1], !0);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(71)(!1), i = [].indexOf, a = !!i && 1 / [
                1
            ].indexOf(1, -0) < 0;
            o(o.P + o.F * (a || !n(29)(i)), "Array", {
                indexOf: function(e) {
                    return a ? i.apply(this, arguments) || 0 : r(this, e, arguments[1]);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(28), i = n(33), a = n(15), s = [].lastIndexOf, l = !!s && 1 / [
                1
            ].lastIndexOf(1, -0) < 0;
            o(o.P + o.F * (l || !n(29)(s)), "Array", {
                lastIndexOf: function(e) {
                    if (l) return s.apply(this, arguments) || 0;
                    var t1 = r(this), n = a(t1.length), o = n - 1;
                    for(arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)if (o in t1 && t1[o] === e) return o || 0;
                    return -1;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.P, "Array", {
                copyWithin: n(135)
            }), n(52)("copyWithin");
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.P, "Array", {
                fill: n(105)
            }), n(52)("fill");
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(5), i = !0;
            "find" in [] && Array(1).find(function() {
                i = !1;
            }), o(o.P + o.F * i, "Array", {
                find: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(52)("find");
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(36)(6), i = "findIndex", a = !0;
            i in [] && Array(1)[i](function() {
                a = !1;
            }), o(o.P + o.F * a, "Array", {
                findIndex: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(52)(i);
        },
        function(e, t1, n) {
            n(58)("Array");
        },
        function(e, t1, n) {
            var o = n(10), r = n(93), i = n(18).f, a = n(50).f, s = n(100), l = n(75), c = o.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
            if (n(17) && (!h || n(11)(function() {
                return p[n(14)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
            }))) {
                c = function(e, t1) {
                    var n = this instanceof c, o = s(e), i = void 0 === t1;
                    return !n && o && e.constructor === c && i ? e : r(h ? new u(o && !i ? e.source : e, t1) : u((o = e instanceof c) ? e.source : e, o && i ? l.call(e) : t1), n ? this : f, c);
                };
                for(var v = function(e) {
                    (e in c) || i(c, e, {
                        configurable: !0,
                        get: function() {
                            return u[e];
                        },
                        set: function(t1) {
                            u[e] = t1;
                        }
                    });
                }, g = a(u), y = 0; g.length > y;)v(g[y++]);
                f.constructor = c, c.prototype = f, n(23)(o, "RegExp", c);
            }
            n(58)("RegExp");
        },
        function(e, t1, n) {
            "use strict";
            n(138);
            var o = n(12), r = n(75), i = n(17), a = /./.toString, s = function(e) {
                n(23)(RegExp.prototype, "toString", e, !0);
            };
            n(11)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                });
            }) ? s(function() {
                var e = o(this);
                return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? r.call(e) : void 0);
            }) : "toString" != a.name && s(function() {
                return a.call(this);
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(12), r = n(15), i = n(108), a = n(76);
            n(77)("match", 1, function(e, t1, n, s) {
                return [
                    function(n) {
                        var o = e(this), r = null == n ? void 0 : n[t1];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[t1](String(o));
                    },
                    function(e) {
                        var t1 = s(n, e, this);
                        if (t1.done) return t1.value;
                        var l = o(e), c = String(this);
                        if (!l.global) return a(l, c);
                        var u = l.unicode;
                        l.lastIndex = 0;
                        for(var f, d = [], p = 0; null !== (f = a(l, c));){
                            var h = String(f[0]);
                            d[p] = h, "" === h && (l.lastIndex = i(c, r(l.lastIndex), u)), p++;
                        }
                        return 0 === p ? null : d;
                    }
                ];
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(12), r = n(22), i = n(15), a = n(33), s = n(108), l = n(76), c = Math.max, u = Math.min, f = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
            n(77)("replace", 2, function(e, t1, n, h) {
                return [
                    function(o, r) {
                        var i = e(this), a = null == o ? void 0 : o[t1];
                        return void 0 !== a ? a.call(o, i, r) : n.call(String(i), o, r);
                    },
                    function(e, t1) {
                        var r = h(n, e, this, t1);
                        if (r.done) return r.value;
                        var f = o(e), d = String(this), p = "function" == typeof t1;
                        p || (t1 = String(t1));
                        var g = f.global;
                        if (g) {
                            var y = f.unicode;
                            f.lastIndex = 0;
                        }
                        for(var k = [];;){
                            var b = l(f, d);
                            if (null === b) break;
                            if (k.push(b), !g) break;
                            "" === String(b[0]) && (f.lastIndex = s(d, i(f.lastIndex), y));
                        }
                        for(var m, w = "", x = 0, C = 0; C < k.length; C++){
                            b = k[C];
                            for(var S = String(b[0]), T = c(u(a(b.index), d.length), 0), E = [], B = 1; B < b.length; B++)E.push(void 0 === (m = b[B]) ? m : String(m));
                            var M = b.groups;
                            if (p) {
                                var _ = [
                                    S
                                ].concat(E, T, d);
                                void 0 !== M && _.push(M);
                                var O = String(t1.apply(void 0, _));
                            } else O = v(S, d, T, E, M, t1);
                            T >= x && (w += d.slice(x, T) + O, x = T + S.length);
                        }
                        return w + d.slice(x);
                    }
                ];
                function v(e, t1, o, i, a, s) {
                    var l = o + e.length, c = i.length, u = p;
                    return void 0 !== a && (a = r(a), u = d), n.call(s, u, function(n, r) {
                        var s;
                        switch(r.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return t1.slice(0, o);
                            case "'":
                                return t1.slice(l);
                            case "<":
                                s = a[r.slice(1, -1)];
                                break;
                            default:
                                var u = +r;
                                if (0 === u) return n;
                                if (u > c) {
                                    var d = f(u / 10);
                                    return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n;
                                }
                                s = i[u - 1];
                        }
                        return void 0 === s ? "" : s;
                    });
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(12), r = n(123), i = n(76);
            n(77)("search", 1, function(e, t1, n, a) {
                return [
                    function(n) {
                        var o = e(this), r = null == n ? void 0 : n[t1];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[t1](String(o));
                    },
                    function(e) {
                        var t1 = a(n, e, this);
                        if (t1.done) return t1.value;
                        var s = o(e), l = String(this), c = s.lastIndex;
                        r(c, 0) || (s.lastIndex = 0);
                        var u = i(s, l);
                        return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
                    }
                ];
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(100), r = n(12), i = n(65), a = n(108), s = n(15), l = n(76), c = n(107), u = n(11), f = Math.min, d = [].push, p = "length", h = !u(function() {
                RegExp(4294967295, "y");
            });
            n(77)("split", 2, function(e, t1, n, u) {
                var v;
                return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(e, t1) {
                    var r = String(this);
                    if (void 0 === e && 0 === t1) return [];
                    if (!o(e)) return n.call(r, e, t1);
                    for(var i, a, s, l = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, h = void 0 === t1 ? 4294967295 : t1 >>> 0, v = new RegExp(e.source, u + "g"); (i = c.call(v, r)) && !((a = v.lastIndex) > f && (l.push(r.slice(f, i.index)), i[p] > 1 && i.index < r[p] && d.apply(l, i.slice(1)), s = i[0][p], f = a, l[p] >= h));)v.lastIndex === i.index && v.lastIndex++;
                    return f === r[p] ? !s && v.test("") || l.push("") : l.push(r.slice(f)), l[p] > h ? l.slice(0, h) : l;
                } : "0".split(void 0, 0)[p] ? function(e, t1) {
                    return void 0 === e && 0 === t1 ? [] : n.call(this, e, t1);
                } : n, [
                    function(n, o) {
                        var r = e(this), i = null == n ? void 0 : n[t1];
                        return void 0 !== i ? i.call(n, r, o) : v.call(String(r), n, o);
                    },
                    function(e, t1) {
                        var o = u(v, e, this, t1, v !== n);
                        if (o.done) return o.value;
                        var c = r(e), d = String(this), p = i(c, RegExp), g = c.unicode, y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h ? "y" : "g"), k = new p(h ? c : "^(?:" + c.source + ")", y), b = void 0 === t1 ? 4294967295 : t1 >>> 0;
                        if (0 === b) return [];
                        if (0 === d.length) return null === l(k, d) ? [
                            d
                        ] : [];
                        for(var m = 0, w = 0, x = []; w < d.length;){
                            k.lastIndex = h ? w : 0;
                            var C, S = l(k, h ? d : d.slice(w));
                            if (null === S || (C = f(s(k.lastIndex + (h ? 0 : w)), d.length)) === m) w = a(d, w, g);
                            else {
                                if (x.push(d.slice(m, w)), x.length === b) return x;
                                for(var T = 1; T <= S.length - 1; T++)if (x.push(S[T]), x.length === b) return x;
                                w = m = C;
                            }
                        }
                        return x.push(d.slice(m)), x;
                    }
                ];
            });
        },
        function(e, t1, n) {
            var o = n(10), r = n(109).set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process, s = o.Promise, l = "process" == n(38)(a);
            e.exports = function() {
                var e, t1, n, c = function() {
                    var o, r;
                    for(l && (o = a.domain) && o.exit(); e;){
                        r = e.fn, e = e.next;
                        try {
                            r();
                        } catch (o) {
                            throw e ? n() : t1 = void 0, o;
                        }
                    }
                    t1 = void 0, o && o.enter();
                };
                if (l) n = function() {
                    a.nextTick(c);
                };
                else if (!i || o.navigator && o.navigator.standalone) {
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c);
                        };
                    } else n = function() {
                        r.call(o, c);
                    };
                } else {
                    var f = !0, d = document.createTextNode("");
                    new i(c).observe(d, {
                        characterData: !0
                    }), n = function() {
                        d.data = f = !f;
                    };
                }
                return function(o) {
                    var r = {
                        fn: o,
                        next: void 0
                    };
                    t1 && (t1.next = r), e || (e = r, n()), t1 = r;
                };
            };
        },
        function(e, t1) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    };
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    };
                }
            };
        },
        function(e, t1, n) {
            "use strict";
            var o = n(142), r = n(53);
            e.exports = n(80)("Map", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                get: function(e) {
                    var t1 = o.getEntry(r(this, "Map"), e);
                    return t1 && t1.v;
                },
                set: function(e, t1) {
                    return o.def(r(this, "Map"), 0 === e ? 0 : e, t1);
                }
            }, o, !0);
        },
        function(e, t1, n) {
            "use strict";
            var o = n(142), r = n(53);
            e.exports = n(80)("Set", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(e) {
                    return o.def(r(this, "Set"), e = 0 === e ? 0 : e, e);
                }
            }, o);
        },
        function(e, t1, n) {
            "use strict";
            var o, r = n(10), i = n(36)(0), a = n(23), s = n(43), l = n(122), c = n(143), u = n(13), f = n(53), d = n(53), p = !r.ActiveXObject && "ActiveXObject" in r, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, k = {
                get: function(e) {
                    if (u(e)) {
                        var t1 = h(e);
                        return !0 === t1 ? g(f(this, "WeakMap")).get(e) : t1 ? t1[this._i] : void 0;
                    }
                },
                set: function(e, t1) {
                    return c.def(f(this, "WeakMap"), e, t1);
                }
            }, b = e.exports = n(80)("WeakMap", y, k, c, !0, !0);
            d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, k), s.NEED = !0, i([
                "delete",
                "has",
                "get",
                "set"
            ], function(e) {
                var t1 = b.prototype, n = t1[e];
                a(t1, e, function(t1, r) {
                    if (u(t1) && !v(t1)) {
                        this._f || (this._f = new o);
                        var i = this._f[e](t1, r);
                        return "set" == e ? this : i;
                    }
                    return n.call(this, t1, r);
                });
            }));
        },
        function(e, t1, n) {
            "use strict";
            var o = n(143), r = n(53);
            n(80)("WeakSet", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(e) {
                    return o.def(r(this, "WeakSet"), e, !0);
                }
            }, o, !1, !0);
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(81), i = n(110), a = n(12), s = n(48), l = n(15), c = n(13), u = n(10).ArrayBuffer, f = n(65), d = i.ArrayBuffer, p = i.DataView, h = r.ABV && u.isView, v = d.prototype.slice, g = r.VIEW;
            o(o.G + o.W + o.F * (u !== d), {
                ArrayBuffer: d
            }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", {
                isView: function(e) {
                    return h && h(e) || c(e) && g in e;
                }
            }), o(o.P + o.U + o.F * n(11)(function() {
                return !new d(2).slice(1, void 0).byteLength;
            }), "ArrayBuffer", {
                slice: function(e, t1) {
                    if (void 0 !== v && void 0 === t1) return v.call(a(this), e);
                    for(var n = a(this).byteLength, o = s(e, n), r = s(void 0 === t1 ? n : t1, n), i = new (f(this, d))(l(r - o)), c = new p(this), u = new p(i), h = 0; o < r;)u.setUint8(h++, c.getUint8(o++));
                    return i;
                }
            }), n(58)("ArrayBuffer");
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.G + o.W + o.F * !n(81).ABV, {
                DataView: n(110).DataView
            });
        },
        function(e, t1, n) {
            n(40)("Int8", 1, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Uint8", 1, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Uint8", 1, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            }, !0);
        },
        function(e, t1, n) {
            n(40)("Int16", 2, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Uint16", 2, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Int32", 4, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Uint32", 4, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Float32", 4, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            n(40)("Float64", 8, function(e) {
                return function(t1, n, o) {
                    return e(this, t1, n, o);
                };
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(32), i = n(12), a = (n(10).Reflect || {}).apply, s = Function.apply;
            o(o.S + o.F * !n(11)(function() {
                a(function() {});
            }), "Reflect", {
                apply: function(e, t1, n) {
                    var o = r(e), l = i(n);
                    return a ? a(o, t1, l) : s.call(o, t1, l);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(49), i = n(32), a = n(12), s = n(13), l = n(11), c = n(124), u = (n(10).Reflect || {}).construct, f = l(function() {
                function e() {}
                return !(u(function() {}, [], e) instanceof e);
            }), d = !l(function() {
                u(function() {});
            });
            o(o.S + o.F * (f || d), "Reflect", {
                construct: function(e, t1) {
                    i(e), a(t1);
                    var n = arguments.length < 3 ? e : i(arguments[2]);
                    if (d && !f) return u(e, t1, n);
                    if (e == n) {
                        switch(t1.length){
                            case 0:
                                return new e;
                            case 1:
                                return new e(t1[0]);
                            case 2:
                                return new e(t1[0], t1[1]);
                            case 3:
                                return new e(t1[0], t1[1], t1[2]);
                            case 4:
                                return new e(t1[0], t1[1], t1[2], t1[3]);
                        }
                        var o = [
                            null
                        ];
                        return o.push.apply(o, t1), new (c.apply(e, o));
                    }
                    var l = n.prototype, p = r(s(l) ? l : Object.prototype), h = Function.apply.call(e, p, t1);
                    return s(h) ? h : p;
                }
            });
        },
        function(e, t1, n) {
            var o = n(18), r = n(0), i = n(12), a = n(42);
            r(r.S + r.F * n(11)(function() {
                Reflect.defineProperty(o.f({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                });
            }), "Reflect", {
                defineProperty: function(e, t1, n) {
                    i(e), t1 = a(t1, !0), i(n);
                    try {
                        return o.f(e, t1, n), !0;
                    } catch (e) {
                        return !1;
                    }
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(34).f, i = n(12);
            o(o.S, "Reflect", {
                deleteProperty: function(e, t1) {
                    var n = r(i(e), t1);
                    return !(n && !n.configurable) && delete e[t1];
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(12), i = function(e) {
                this._t = r(e), this._i = 0;
                var t1, n = this._k = [];
                for(t1 in e)n.push(t1);
            };
            n(131)(i, "Object", function() {
                var e, t1 = this._k;
                do {
                    if (this._i >= t1.length) return {
                        value: void 0,
                        done: !0
                    };
                }while (!((e = t1[this._i++]) in this._t));
                return {
                    value: e,
                    done: !1
                };
            }), o(o.S, "Reflect", {
                enumerate: function(e) {
                    return new i(e);
                }
            });
        },
        function(e, t1, n) {
            var o = n(34), r = n(51), i = n(26), a = n(0), s = n(13), l = n(12);
            a(a.S, "Reflect", {
                get: function e(t1, n) {
                    var a, c, u = arguments.length < 3 ? t1 : arguments[2];
                    return l(t1) === u ? t1[n] : (a = o.f(t1, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = r(t1)) ? e(c, n, u) : void 0;
                }
            });
        },
        function(e, t1, n) {
            var o = n(34), r = n(0), i = n(12);
            r(r.S, "Reflect", {
                getOwnPropertyDescriptor: function(e, t1) {
                    return o.f(i(e), t1);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(51), i = n(12);
            o(o.S, "Reflect", {
                getPrototypeOf: function(e) {
                    return r(i(e));
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                has: function(e, t1) {
                    return t1 in e;
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(12), i = Object.isExtensible;
            o(o.S, "Reflect", {
                isExtensible: function(e) {
                    return r(e), !i || i(e);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                ownKeys: n(145)
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(12), i = Object.preventExtensions;
            o(o.S, "Reflect", {
                preventExtensions: function(e) {
                    r(e);
                    try {
                        return i && i(e), !0;
                    } catch (e) {
                        return !1;
                    }
                }
            });
        },
        function(e, t1, n) {
            var o = n(18), r = n(34), i = n(51), a = n(26), s = n(0), l = n(44), c = n(12), u = n(13);
            s(s.S, "Reflect", {
                set: function e(t1, n, s) {
                    var f, d, p = arguments.length < 4 ? t1 : arguments[3], h = r.f(c(t1), n);
                    if (!h) {
                        if (u(d = i(t1))) return e(d, n, s, p);
                        h = l(0);
                    }
                    if (a(h, "value")) {
                        if (!1 === h.writable || !u(p)) return !1;
                        if (f = r.f(p, n)) {
                            if (f.get || f.set || !1 === f.writable) return !1;
                            f.value = s, o.f(p, n, f);
                        } else o.f(p, n, l(0, s));
                        return !0;
                    }
                    return void 0 !== h.set && (h.set.call(p, s), !0);
                }
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(91);
            r && o(o.S, "Reflect", {
                setPrototypeOf: function(e, t1) {
                    r.check(e, t1);
                    try {
                        return r.set(e, t1), !0;
                    } catch (e) {
                        return !1;
                    }
                }
            });
        },
        function(e, t1, n) {
            n(334), e.exports = n(16).Array.includes;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(71)(!0);
            o(o.P, "Array", {
                includes: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(52)("includes");
        },
        function(e, t1, n) {
            n(336), e.exports = n(16).Array.flatMap;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(337), i = n(22), a = n(15), s = n(32), l = n(133);
            o(o.P, "Array", {
                flatMap: function(e) {
                    var t1, n, o = i(this);
                    return s(e), t1 = a(o.length), n = l(o, 0), r(n, o, o, t1, 0, 1, e, arguments[1]), n;
                }
            }), n(52)("flatMap");
        },
        function(e, t1, n) {
            "use strict";
            var o = n(73), r = n(13), i = n(15), a = n(31), s = n(14)("isConcatSpreadable");
            e.exports = function e(t1, n, l, c, u, f, d, p) {
                for(var h, v, g = u, y = 0, k = !!d && a(d, p, 3); y < c;){
                    if (y in l) {
                        if (h = k ? k(l[y], y, n) : l[y], v = !1, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = e(t1, n, h, i(h.length), g, f - 1) - 1;
                        else {
                            if (g >= 9007199254740991) throw TypeError();
                            t1[g] = h;
                        }
                        g++;
                    }
                    y++;
                }
                return g;
            };
        },
        function(e, t1, n) {
            n(339), e.exports = n(16).String.padStart;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(146), i = n(79), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padStart: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
                }
            });
        },
        function(e, t1, n) {
            n(341), e.exports = n(16).String.padEnd;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(146), i = n(79), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padEnd: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
                }
            });
        },
        function(e, t1, n) {
            n(343), e.exports = n(16).String.trimLeft;
        },
        function(e, t1, n) {
            "use strict";
            n(56)("trimLeft", function(e) {
                return function() {
                    return e(this, 1);
                };
            }, "trimStart");
        },
        function(e, t1, n) {
            n(345), e.exports = n(16).String.trimRight;
        },
        function(e, t1, n) {
            "use strict";
            n(56)("trimRight", function(e) {
                return function() {
                    return e(this, 2);
                };
            }, "trimEnd");
        },
        function(e, t1, n) {
            n(347), e.exports = n(87).f("asyncIterator");
        },
        function(e, t1, n) {
            n(118)("asyncIterator");
        },
        function(e, t1, n) {
            n(349), e.exports = n(16).Object.getOwnPropertyDescriptors;
        },
        function(e, t1, n) {
            var o = n(0), r = n(145), i = n(28), a = n(34), s = n(103);
            o(o.S, "Object", {
                getOwnPropertyDescriptors: function(e) {
                    for(var t1, n, o = i(e), l = a.f, c = r(o), u = {}, f = 0; c.length > f;)void 0 !== (n = l(o, t1 = c[f++])) && s(u, t1, n);
                    return u;
                }
            });
        },
        function(e, t1, n) {
            n(351), e.exports = n(16).Object.values;
        },
        function(e, t1, n) {
            var o = n(0), r = n(147)(!1);
            o(o.S, "Object", {
                values: function(e) {
                    return r(e);
                }
            });
        },
        function(e, t1, n) {
            n(353), e.exports = n(16).Object.entries;
        },
        function(e, t1, n) {
            var o = n(0), r = n(147)(!0);
            o(o.S, "Object", {
                entries: function(e) {
                    return r(e);
                }
            });
        },
        function(e, t1, n) {
            "use strict";
            n(139), n(355), e.exports = n(16).Promise.finally;
        },
        function(e, t1, n) {
            "use strict";
            var o = n(0), r = n(16), i = n(10), a = n(65), s = n(141);
            o(o.P + o.R, "Promise", {
                finally: function(e) {
                    var t1 = a(this, r.Promise || i.Promise), n = "function" == typeof e;
                    return this.then(n ? function(n) {
                        return s(t1, e()).then(function() {
                            return n;
                        });
                    } : e, n ? function(n) {
                        return s(t1, e()).then(function() {
                            throw n;
                        });
                    } : e);
                }
            });
        },
        function(e, t1, n) {
            n(357), n(358), n(359), e.exports = n(16);
        },
        function(e, t1, n) {
            var o = n(10), r = n(0), i = n(79), a = [].slice, s = /MSIE .\./.test(i), l = function(e) {
                return function(t1, n) {
                    var o = arguments.length > 2, r = !!o && a.call(arguments, 2);
                    return e(o ? function() {
                        ("function" == typeof t1 ? t1 : Function(t1)).apply(this, r);
                    } : t1, n);
                };
            };
            r(r.G + r.B + r.F * s, {
                setTimeout: l(o.setTimeout),
                setInterval: l(o.setInterval)
            });
        },
        function(e, t1, n) {
            var o = n(0), r = n(109);
            o(o.G + o.B, {
                setImmediate: r.set,
                clearImmediate: r.clear
            });
        },
        function(e, t1, n) {
            for(var o = n(106), r = n(47), i = n(23), a = n(10), s = n(27), l = n(57), c = n(14), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), v = 0; v < h.length; v++){
                var g, y = h[v], k = p[y], b = a[y], m = b && b.prototype;
                if (m && (m[u] || s(m, u, d), m[f] || s(m, f, y), l[y] = d, k)) for(g in o)m[g] || i(m, g, o[g], !0);
            }
        },
        function(e, t1, n) {
            var o = function(e) {
                "use strict";
                var t1 = Object.prototype, n = t1.hasOwnProperty, o = Object.defineProperty || function(e, t1, n) {
                    e[t1] = n.value;
                }, r = "function" == typeof Symbol ? Symbol : {}, i = r.iterator || "@@iterator", a = r.asyncIterator || "@@asyncIterator", s = r.toStringTag || "@@toStringTag";
                function l(e, t1, n) {
                    return Object.defineProperty(e, t1, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t1];
                }
                try {
                    l({}, "");
                } catch (e) {
                    l = function(e, t1, n) {
                        return e[t1] = n;
                    };
                }
                function c(e, t1, n, r) {
                    var i = t1 && t1.prototype instanceof d ? t1 : d, a = Object.create(i.prototype), s = new T(r || []);
                    return o(a, "_invoke", {
                        value: w(e, n, s)
                    }), a;
                }
                function u(e, t1, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t1, n)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                e.wrap = c;
                var f = {};
                function d() {}
                function p() {}
                function h() {}
                var v = {};
                l(v, i, function() {
                    return this;
                });
                var g = Object.getPrototypeOf, y = g && g(g(E([])));
                y && y !== t1 && n.call(y, i) && (v = y);
                var k = h.prototype = d.prototype = Object.create(v);
                function b(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t1) {
                        l(e, t1, function(e) {
                            return this._invoke(t1, e);
                        });
                    });
                }
                function m(e, t1) {
                    var r;
                    o(this, "_invoke", {
                        value: function(o, i) {
                            function a() {
                                return new t1(function(r, a) {
                                    !function o(r, i, a, s) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var c = l.arg, f = c.value;
                                            return f && "object" == typeof f && n.call(f, "__await") ? t1.resolve(f.__await).then(function(e) {
                                                o("next", e, a, s);
                                            }, function(e) {
                                                o("throw", e, a, s);
                                            }) : t1.resolve(f).then(function(e) {
                                                c.value = e, a(c);
                                            }, function(e) {
                                                return o("throw", e, a, s);
                                            });
                                        }
                                        s(l.arg);
                                    }(o, i, r, a);
                                });
                            }
                            return r = r ? r.then(a, a) : a();
                        }
                    });
                }
                function w(e, t1, n) {
                    var o = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === r) throw i;
                            return B();
                        }
                        for(n.method = r, n.arg = i;;){
                            var a = n.delegate;
                            if (a) {
                                var s = x(a, n);
                                if (s) {
                                    if (s === f) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === o) throw o = "completed", n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = "executing";
                            var l = u(e, t1, n);
                            if ("normal" === l.type) {
                                if (o = n.done ? "completed" : "suspendedYield", l.arg === f) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                };
                            }
                            "throw" === l.type && (o = "completed", n.method = "throw", n.arg = l.arg);
                        }
                    };
                }
                function x(e, t1) {
                    var n = t1.method, o = e.iterator[n];
                    if (void 0 === o) return t1.delegate = null, "throw" === n && e.iterator.return && (t1.method = "return", t1.arg = void 0, x(e, t1), "throw" === t1.method) || "return" !== n && (t1.method = "throw", t1.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                    var r = u(o, e.iterator, t1.arg);
                    if ("throw" === r.type) return t1.method = "throw", t1.arg = r.arg, t1.delegate = null, f;
                    var i = r.arg;
                    return i ? i.done ? (t1[e.resultName] = i.value, t1.next = e.nextLoc, "return" !== t1.method && (t1.method = "next", t1.arg = void 0), t1.delegate = null, f) : i : (t1.method = "throw", t1.arg = new TypeError("iterator result is not an object"), t1.delegate = null, f);
                }
                function C(e) {
                    var t1 = {
                        tryLoc: e[0]
                    };
                    1 in e && (t1.catchLoc = e[1]), 2 in e && (t1.finallyLoc = e[2], t1.afterLoc = e[3]), this.tryEntries.push(t1);
                }
                function S(e) {
                    var t1 = e.completion || {};
                    t1.type = "normal", delete t1.arg, e.completion = t1;
                }
                function T(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(C, this), this.reset(!0);
                }
                function E(e) {
                    if (e) {
                        var t1 = e[i];
                        if (t1) return t1.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, r = function t1() {
                                for(; ++o < e.length;)if (n.call(e, o)) return t1.value = e[o], t1.done = !1, t1;
                                return t1.value = void 0, t1.done = !0, t1;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: B
                    };
                }
                function B() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return p.prototype = h, o(k, "constructor", {
                    value: h,
                    configurable: !0
                }), o(h, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = l(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t1 = "function" == typeof e && e.constructor;
                    return !!t1 && (t1 === p || "GeneratorFunction" === (t1.displayName || t1.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, b(m.prototype), l(m.prototype, a, function() {
                    return this;
                }), e.AsyncIterator = m, e.async = function(t1, n, o, r, i) {
                    void 0 === i && (i = Promise);
                    var a = new m(c(t1, n, o, r), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then(function(e) {
                        return e.done ? e.value : a.next();
                    });
                }, b(k), l(k, s, "Generator"), l(k, i, function() {
                    return this;
                }), l(k, "toString", function() {
                    return "[object Generator]";
                }), e.keys = function(e) {
                    var t1 = Object(e), n = [];
                    for(var o in t1)n.push(o);
                    return n.reverse(), function e() {
                        for(; n.length;){
                            var o = n.pop();
                            if (o in t1) return e.value = o, e.done = !1, e;
                        }
                        return e.done = !0, e;
                    };
                }, e.values = E, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e) for(var t1 in this)"t" === t1.charAt(0) && n.call(this, t1) && !isNaN(+t1.slice(1)) && (this[t1] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t1 = this;
                        function o(n, o) {
                            return a.type = "throw", a.arg = e, t1.next = n, o && (t1.method = "next", t1.arg = void 0), !!o;
                        }
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r], a = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"), l = n.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t1) {
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var r = this.tryEntries[o];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t1 && t1 <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t1, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a);
                    },
                    complete: function(e, t1) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t1 && (this.next = t1), f;
                    },
                    finish: function(e) {
                        for(var t1 = this.tryEntries.length - 1; t1 >= 0; --t1){
                            var n = this.tryEntries[t1];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), f;
                        }
                    },
                    catch: function(e) {
                        for(var t1 = this.tryEntries.length - 1; t1 >= 0; --t1){
                            var n = this.tryEntries[t1];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    S(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t1, n) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t1,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), f;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = o;
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o);
            }
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(30),
                n(2),
                n(3),
                n(365),
                n(366),
                n(367),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f) {
                "use strict";
                var d = n(1);
                function p(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (p = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = d(r), i = d(i), s = d(s), u = d(u), f = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(f);
                var h = function() {
                    function e(t1) {
                        var n = this;
                        (0, i.default)(this, e);
                        var o = function() {};
                        f.isObject(t1) && f.isFunction(t1.onReady) && (o = t1.onReady);
                        var r = new u.default(t1);
                        this.isReady = r.isReady.then(function() {
                            n.exportAPI(r), o();
                        });
                    }
                    return (0, s.default)(e, [
                        {
                            key: "exportAPI",
                            value: function(e) {
                                var t1 = this;
                                [
                                    "configuration"
                                ].forEach(function(n) {
                                    t1[n] = e[n];
                                }), this.destroy = function() {
                                    for(var n in Object.values(e.moduleInstances).forEach(function(e) {
                                        f.isFunction(e.destroy) && e.destroy(), e.listeners.removeAll();
                                    }), e = null, t1)Object.prototype.hasOwnProperty.call(t1, n) && delete t1[n];
                                    Object.setPrototypeOf(t1, null);
                                }, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                                    blocks: {
                                        clear: "clear",
                                        render: "render"
                                    },
                                    caret: {
                                        focus: "focus"
                                    },
                                    events: {
                                        on: "on",
                                        off: "off",
                                        emit: "emit"
                                    },
                                    saver: {
                                        save: "save"
                                    }
                                }).forEach(function(n) {
                                    var o = (0, r.default)(n, 2), i = o[0], a = o[1];
                                    Object.entries(a).forEach(function(n) {
                                        var o = (0, r.default)(n, 2), a = o[0], s = o[1];
                                        t1[s] = e.moduleInstances.API.methods[i][a];
                                    });
                                });
                            }
                        }
                    ], [
                        {
                            key: "version",
                            get: function() {
                                return "2.26.5";
                            }
                        }
                    ]), e;
                }();
                o.default = h, h.displayName = "EditorJS", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e, t1) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var o, r, i = [], a = !0, s = !1;
                    try {
                        for(n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value), !t1 || i.length !== t1); a = !0);
                    } catch (e) {
                        s = !0, r = e;
                    } finally{
                        try {
                            a || null == n.return || n.return();
                        } finally{
                            if (s) throw r;
                        }
                    }
                    return i;
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            function n() {}
            e.exports = Object.assign(n, {
                default: n,
                register: n,
                revert: function() {},
                __esModule: !0
            });
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [], void 0 === (i = "function" == typeof (o = function() {
                "use strict";
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                    for(var t1 = (this.document || this.ownerDocument).querySelectorAll(e), n = t1.length; --n >= 0 && t1.item(n) !== this;);
                    return n > -1;
                }), Element.prototype.closest || (Element.prototype.closest = function(e) {
                    var t1 = this;
                    if (!document.documentElement.contains(t1)) return null;
                    do {
                        if (t1.matches(e)) return t1;
                        t1 = t1.parentElement || t1.parentNode;
                    }while (null !== t1);
                    return null;
                }), Element.prototype.prepend || (Element.prototype.prepend = function(e) {
                    var t1 = document.createDocumentFragment();
                    Array.isArray(e) || (e = [
                        e
                    ]), e.forEach(function(e) {
                        var n = e instanceof Node;
                        t1.appendChild(n ? e : document.createTextNode(e));
                    }), this.insertBefore(t1, this.firstChild);
                }), Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(e) {
                    e = 0 === arguments.length || !!e;
                    var t1 = this.parentNode, n = window.getComputedStyle(t1, null), o = parseInt(n.getPropertyValue("border-top-width")), r = parseInt(n.getPropertyValue("border-left-width")), i = this.offsetTop - t1.offsetTop < t1.scrollTop, a = this.offsetTop - t1.offsetTop + this.clientHeight - o > t1.scrollTop + t1.clientHeight, s = this.offsetLeft - t1.offsetLeft < t1.scrollLeft, l = this.offsetLeft - t1.offsetLeft + this.clientWidth - r > t1.scrollLeft + t1.clientWidth, c = i && !a;
                    (i || a) && e && (t1.scrollTop = this.offsetTop - t1.offsetTop - t1.clientHeight / 2 - o + this.clientHeight / 2), (s || l) && e && (t1.scrollLeft = this.offsetLeft - t1.offsetLeft - t1.clientWidth / 2 - r + this.clientWidth / 2), (i || a || s || l) && !e && this.scrollIntoView(c);
                });
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(19),
                n(8),
                n(54),
                n(151),
                n(82)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p) {
                "use strict";
                var h = n(1);
                function v(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (v = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = h(r), i = h(i), s = h(s), l = h(l), c = h(c), u = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(u), f = h(f), p = h(p);
                var g = n(376), y = [];
                g.keys().forEach(function(e) {
                    e.match(/^\.\/[^_][\w/]*\.([tj])s$/) && y.push(g(e));
                });
                var k = function() {
                    function e(t1) {
                        var n, o, a = this;
                        (0, s.default)(this, e), this.moduleInstances = {}, this.eventsDispatcher = new p.default, this.isReady = new Promise(function(e, t1) {
                            n = e, o = t1;
                        }), Promise.resolve().then((0, i.default)(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return a.configuration = t1, e.next = 3, a.validate();
                                    case 3:
                                        return e.next = 5, a.init();
                                    case 5:
                                        return e.next = 7, a.start();
                                    case 7:
                                        u.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout((0, i.default)(r.default.mark(function e() {
                                            var t1, o, i;
                                            return r.default.wrap(function(e) {
                                                for(;;)switch(e.prev = e.next){
                                                    case 0:
                                                        return e.next = 2, a.render();
                                                    case 2:
                                                        a.configuration.autofocus && (t1 = a.moduleInstances, o = t1.BlockManager, (i = t1.Caret).setToBlock(o.blocks[0], i.positions.START), o.highlightCurrentNode()), a.moduleInstances.UI.removeLoader(), n();
                                                    case 5:
                                                    case "end":
                                                        return e.stop();
                                                }
                                            }, e);
                                        })), 500);
                                    case 9:
                                    case "end":
                                        return e.stop();
                                }
                            }, e);
                        }))).catch(function(e) {
                            u.log("Editor.js is not ready because of ".concat(e), "error"), o(e);
                        });
                    }
                    var t1, n;
                    return (0, l.default)(e, [
                        {
                            key: "configuration",
                            get: function() {
                                return this.config;
                            },
                            set: function(e) {
                                var t1, n;
                                u.isObject(e) ? this.config = Object.assign({}, e) : this.config = {
                                    holder: e
                                }, u.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = u.LogLevels.VERBOSE), u.setLogLevel(this.config.logLevel), u.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                                var o = {
                                    type: this.config.defaultBlock,
                                    data: {}
                                };
                                this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                                    p: !0,
                                    b: !0,
                                    a: !0
                                }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || {
                                    blocks: []
                                }, this.config.onReady = this.config.onReady || function() {}, this.config.onChange = this.config.onChange || function() {}, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !u.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = {
                                    blocks: [
                                        o
                                    ]
                                }), this.config.readOnly = this.config.readOnly || !1, (null === (t1 = this.config.i18n) || void 0 === t1 ? void 0 : t1.messages) && f.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n = this.config.i18n) || void 0 === n ? void 0 : n.direction) || "ltr";
                            }
                        },
                        {
                            key: "validate",
                            value: (n = (0, i.default)(r.default.mark(function e() {
                                var t1, n, o;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t1 = this.config, n = t1.holderId, o = t1.holder, !n || !o) {
                                                e.next = 3;
                                                break;
                                            }
                                            throw Error("\xabholderId\xbb and \xabholder\xbb param can't assign at the same time.");
                                        case 3:
                                            if (!u.isString(o) || c.default.get(o)) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw Error("element with ID \xab".concat(o, "\xbb is missing. Pass correct holder's ID."));
                                        case 5:
                                            if (!o || !u.isObject(o) || c.default.isElement(o)) {
                                                e.next = 7;
                                                break;
                                            }
                                            throw Error("\xabholder\xbb value must be an Element node");
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "init",
                            value: function() {
                                this.constructModules(), this.configureModules();
                            }
                        },
                        {
                            key: "start",
                            value: (t1 = (0, i.default)(r.default.mark(function e() {
                                var t1, n = this;
                                return r.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return t1 = [
                                                "Tools",
                                                "UI",
                                                "BlockManager",
                                                "Paste",
                                                "BlockSelection",
                                                "RectangleSelection",
                                                "CrossBlockSelection",
                                                "ReadOnly"
                                            ], e.next = 3, t1.reduce(function(e, t1) {
                                                return e.then((0, i.default)(r.default.mark(function e() {
                                                    return r.default.wrap(function(e) {
                                                        for(;;)switch(e.prev = e.next){
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, n.moduleInstances[t1].prepare();
                                                            case 3:
                                                                e.next = 10;
                                                                break;
                                                            case 5:
                                                                if (e.prev = 5, e.t0 = e.catch(0), !(e.t0 instanceof d.CriticalError)) {
                                                                    e.next = 9;
                                                                    break;
                                                                }
                                                                throw new Error(e.t0.message);
                                                            case 9:
                                                                u.log("Module ".concat(t1, " was skipped because of %o"), "warn", e.t0);
                                                            case 10:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                    }, e, null, [
                                                        [
                                                            0,
                                                            5
                                                        ]
                                                    ]);
                                                })));
                                            }, Promise.resolve());
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e);
                            })), function() {
                                return t1.apply(this, arguments);
                            })
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.moduleInstances.Renderer.render(this.config.data.blocks);
                            }
                        },
                        {
                            key: "constructModules",
                            value: function() {
                                var e = this;
                                y.forEach(function(t1) {
                                    var n = u.isFunction(t1) ? t1 : t1.default;
                                    try {
                                        e.moduleInstances[n.displayName] = new n({
                                            config: e.configuration,
                                            eventsDispatcher: e.eventsDispatcher
                                        });
                                    } catch (e) {
                                        u.log("Module ".concat(n.displayName, " skipped because"), "error", e);
                                    }
                                });
                            }
                        },
                        {
                            key: "configureModules",
                            value: function() {
                                for(var e in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
                            }
                        },
                        {
                            key: "getModulesDiff",
                            value: function(e) {
                                var t1 = {};
                                for(var n in this.moduleInstances)n !== e && (t1[n] = this.moduleInstances[n]);
                                return t1;
                            }
                        }
                    ]), e;
                }();
                o.default = k, k.displayName = "Core", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o = n(7).default;
            function r() {
                "use strict";
                e.exports = r = function() {
                    return t1;
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t1 = {}, n = Object.prototype, i = n.hasOwnProperty, a = Object.defineProperty || function(e, t1, n) {
                    e[t1] = n.value;
                }, s = "function" == typeof Symbol ? Symbol : {}, l = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", u = s.toStringTag || "@@toStringTag";
                function f(e, t1, n) {
                    return Object.defineProperty(e, t1, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t1];
                }
                try {
                    f({}, "");
                } catch (e) {
                    f = function(e, t1, n) {
                        return e[t1] = n;
                    };
                }
                function d(e, t1, n, o) {
                    var r = t1 && t1.prototype instanceof v ? t1 : v, i = Object.create(r.prototype), s = new M(o || []);
                    return a(i, "_invoke", {
                        value: S(e, n, s)
                    }), i;
                }
                function p(e, t1, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t1, n)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                t1.wrap = d;
                var h = {};
                function v() {}
                function g() {}
                function y() {}
                var k = {};
                f(k, l, function() {
                    return this;
                });
                var b = Object.getPrototypeOf, m = b && b(b(_([])));
                m && m !== n && i.call(m, l) && (k = m);
                var w = y.prototype = v.prototype = Object.create(k);
                function x(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t1) {
                        f(e, t1, function(e) {
                            return this._invoke(t1, e);
                        });
                    });
                }
                function C(e, t1) {
                    var n;
                    a(this, "_invoke", {
                        value: function(r, a) {
                            function s() {
                                return new t1(function(n, s) {
                                    !function n(r, a, s, l) {
                                        var c = p(e[r], e, a);
                                        if ("throw" !== c.type) {
                                            var u = c.arg, f = u.value;
                                            return f && "object" == o(f) && i.call(f, "__await") ? t1.resolve(f.__await).then(function(e) {
                                                n("next", e, s, l);
                                            }, function(e) {
                                                n("throw", e, s, l);
                                            }) : t1.resolve(f).then(function(e) {
                                                u.value = e, s(u);
                                            }, function(e) {
                                                return n("throw", e, s, l);
                                            });
                                        }
                                        l(c.arg);
                                    }(r, a, n, s);
                                });
                            }
                            return n = n ? n.then(s, s) : s();
                        }
                    });
                }
                function S(e, t1, n) {
                    var o = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === r) throw i;
                            return O();
                        }
                        for(n.method = r, n.arg = i;;){
                            var a = n.delegate;
                            if (a) {
                                var s = T(a, n);
                                if (s) {
                                    if (s === h) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === o) throw o = "completed", n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = "executing";
                            var l = p(e, t1, n);
                            if ("normal" === l.type) {
                                if (o = n.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                };
                            }
                            "throw" === l.type && (o = "completed", n.method = "throw", n.arg = l.arg);
                        }
                    };
                }
                function T(e, t1) {
                    var n = e.iterator[t1.method];
                    if (void 0 === n) {
                        if (t1.delegate = null, "throw" === t1.method) {
                            if (e.iterator.return && (t1.method = "return", t1.arg = void 0, T(e, t1), "throw" === t1.method)) return h;
                            t1.method = "throw", t1.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return h;
                    }
                    var o = p(n, e.iterator, t1.arg);
                    if ("throw" === o.type) return t1.method = "throw", t1.arg = o.arg, t1.delegate = null, h;
                    var r = o.arg;
                    return r ? r.done ? (t1[e.resultName] = r.value, t1.next = e.nextLoc, "return" !== t1.method && (t1.method = "next", t1.arg = void 0), t1.delegate = null, h) : r : (t1.method = "throw", t1.arg = new TypeError("iterator result is not an object"), t1.delegate = null, h);
                }
                function E(e) {
                    var t1 = {
                        tryLoc: e[0]
                    };
                    1 in e && (t1.catchLoc = e[1]), 2 in e && (t1.finallyLoc = e[2], t1.afterLoc = e[3]), this.tryEntries.push(t1);
                }
                function B(e) {
                    var t1 = e.completion || {};
                    t1.type = "normal", delete t1.arg, e.completion = t1;
                }
                function M(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(E, this), this.reset(!0);
                }
                function _(e) {
                    if (e) {
                        var t1 = e[l];
                        if (t1) return t1.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, o = function t1() {
                                for(; ++n < e.length;)if (i.call(e, n)) return t1.value = e[n], t1.done = !1, t1;
                                return t1.value = void 0, t1.done = !0, t1;
                            };
                            return o.next = o;
                        }
                    }
                    return {
                        next: O
                    };
                }
                function O() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return g.prototype = y, a(w, "constructor", {
                    value: y,
                    configurable: !0
                }), a(y, "constructor", {
                    value: g,
                    configurable: !0
                }), g.displayName = f(y, u, "GeneratorFunction"), t1.isGeneratorFunction = function(e) {
                    var t1 = "function" == typeof e && e.constructor;
                    return !!t1 && (t1 === g || "GeneratorFunction" === (t1.displayName || t1.name));
                }, t1.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, f(e, u, "GeneratorFunction")), e.prototype = Object.create(w), e;
                }, t1.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, x(C.prototype), f(C.prototype, c, function() {
                    return this;
                }), t1.AsyncIterator = C, t1.async = function(e, n, o, r, i) {
                    void 0 === i && (i = Promise);
                    var a = new C(d(e, n, o, r), i);
                    return t1.isGeneratorFunction(n) ? a : a.next().then(function(e) {
                        return e.done ? e.value : a.next();
                    });
                }, x(w), f(w, u, "Generator"), f(w, l, function() {
                    return this;
                }), f(w, "toString", function() {
                    return "[object Generator]";
                }), t1.keys = function(e) {
                    var t1 = Object(e), n = [];
                    for(var o in t1)n.push(o);
                    return n.reverse(), function e() {
                        for(; n.length;){
                            var o = n.pop();
                            if (o in t1) return e.value = o, e.done = !1, e;
                        }
                        return e.done = !0, e;
                    };
                }, t1.values = _, M.prototype = {
                    constructor: M,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(B), !e) for(var t1 in this)"t" === t1.charAt(0) && i.call(this, t1) && !isNaN(+t1.slice(1)) && (this[t1] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t1 = this;
                        function n(n, o) {
                            return a.type = "throw", a.arg = e, t1.next = n, o && (t1.method = "next", t1.arg = void 0), !!o;
                        }
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var r = this.tryEntries[o], a = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var s = i.call(r, "catchLoc"), l = i.call(r, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                                } else if (s) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t1) {
                        for(var n = this.tryEntries.length - 1; n >= 0; --n){
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break;
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t1 && t1 <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = e, a.arg = t1, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(a);
                    },
                    complete: function(e, t1) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t1 && (this.next = t1), h;
                    },
                    finish: function(e) {
                        for(var t1 = this.tryEntries.length - 1; t1 >= 0; --t1){
                            var n = this.tryEntries[t1];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), B(n), h;
                        }
                    },
                    catch: function(e) {
                        for(var t1 = this.tryEntries.length - 1; t1 >= 0; --t1){
                            var n = this.tryEntries[t1];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    B(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t1, n) {
                        return this.delegate = {
                            iterator: _(e),
                            resultName: t1,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), h;
                    }
                }, t1;
            }
            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(149);
            e.exports = function(e) {
                if (Array.isArray(e)) return o(e);
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e, t1, n) {
                return t1 in e ? Object.defineProperty(e, t1, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t1] = n, e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]");
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = n(111), r = n(375);
            function i(t1, n, a) {
                return r() ? (e.exports = i = Reflect.construct.bind(), e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = i = function(e, t1, n) {
                    var r = [
                        null
                    ];
                    r.push.apply(r, t1);
                    var i = new (Function.bind.apply(e, r));
                    return n && o(i, n.prototype), i;
                }, e.exports.__esModule = !0, e.exports.default = e.exports), i.apply(null, arguments);
            }
            e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1) {
            e.exports = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                    return !1;
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o = {
                "./api": 83,
                "./api/": 83,
                "./api/blocks": 154,
                "./api/blocks.ts": 154,
                "./api/caret": 155,
                "./api/caret.ts": 155,
                "./api/events": 156,
                "./api/events.ts": 156,
                "./api/i18n": 157,
                "./api/i18n.ts": 157,
                "./api/index": 83,
                "./api/index.ts": 83,
                "./api/inlineToolbar": 158,
                "./api/inlineToolbar.ts": 158,
                "./api/listeners": 159,
                "./api/listeners.ts": 159,
                "./api/notifier": 160,
                "./api/notifier.ts": 160,
                "./api/readonly": 161,
                "./api/readonly.ts": 161,
                "./api/sanitizer": 162,
                "./api/sanitizer.ts": 162,
                "./api/saver": 163,
                "./api/saver.ts": 163,
                "./api/selection": 164,
                "./api/selection.ts": 164,
                "./api/styles": 165,
                "./api/styles.ts": 165,
                "./api/toolbar": 166,
                "./api/toolbar.ts": 166,
                "./api/tooltip": 167,
                "./api/tooltip.ts": 167,
                "./api/ui": 168,
                "./api/ui.ts": 168,
                "./blockEvents": 169,
                "./blockEvents.ts": 169,
                "./blockManager": 170,
                "./blockManager.ts": 170,
                "./blockSelection": 171,
                "./blockSelection.ts": 171,
                "./caret": 172,
                "./caret.ts": 172,
                "./crossBlockSelection": 173,
                "./crossBlockSelection.ts": 173,
                "./dragNDrop": 174,
                "./dragNDrop.ts": 174,
                "./modificationsObserver": 175,
                "./modificationsObserver.ts": 175,
                "./paste": 176,
                "./paste.ts": 176,
                "./readonly": 177,
                "./readonly.ts": 177,
                "./rectangleSelection": 178,
                "./rectangleSelection.ts": 178,
                "./renderer": 179,
                "./renderer.ts": 179,
                "./saver": 180,
                "./saver.ts": 180,
                "./toolbar": 84,
                "./toolbar/": 84,
                "./toolbar/blockSettings": 181,
                "./toolbar/blockSettings.ts": 181,
                "./toolbar/conversion": 182,
                "./toolbar/conversion.ts": 182,
                "./toolbar/index": 84,
                "./toolbar/index.ts": 84,
                "./toolbar/inline": 183,
                "./toolbar/inline.ts": 183,
                "./tools": 184,
                "./tools.ts": 184,
                "./ui": 186,
                "./ui.ts": 186
            };
            function r(e) {
                var t1 = i(e);
                return n(t1);
            }
            function i(e) {
                if (!n.o(o, e)) {
                    var t1 = new Error("Cannot find module '" + e + "'");
                    throw t1.code = "MODULE_NOT_FOUND", t1;
                }
                return o[e];
            }
            r.keys = function() {
                return Object.keys(o);
            }, r.resolve = i, e.exports = r, r.id = 376;
        },
        function(e, t1, n) {
            var o = n(4);
            e.exports = function(e, t1) {
                for(; !Object.prototype.hasOwnProperty.call(e, t1) && null !== (e = o(e)););
                return e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(379)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e);
                    }
                    return (0, i.default)(e, [
                        {
                            key: "show",
                            value: function(e) {
                                a.default.show(e);
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "Notifier", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            window, e.exports = function(e) {
                var t1 = {};
                function n(o) {
                    if (t1[o]) return t1[o].exports;
                    var r = t1[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = e, n.c = t1, n.d = function(e, t1, o) {
                    n.o(e, t1) || Object.defineProperty(e, t1, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t1) {
                    if (1 & t1 && (e = n(e)), 8 & t1) return e;
                    if (4 & t1 && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t1 && "string" != typeof e) for(var r in e)n.d(o, r, (function(t1) {
                        return e[t1];
                    }).bind(null, r));
                    return o;
                }, n.n = function(e) {
                    var t1 = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t1, "a", t1), t1;
                }, n.o = function(e, t1) {
                    return Object.prototype.hasOwnProperty.call(e, t1);
                }, n.p = "/", n(n.s = 0);
            }([
                function(e, t1, n) {
                    "use strict";
                    n(1), e.exports = function() {
                        var e = n(6), t1 = null;
                        return {
                            show: function(n) {
                                if (n.message) {
                                    !function() {
                                        if (t1) return !0;
                                        t1 = e.getWrapper(), document.body.appendChild(t1);
                                    }();
                                    var o = null, r = n.time || 8e3;
                                    switch(n.type){
                                        case "confirm":
                                            o = e.confirm(n);
                                            break;
                                        case "prompt":
                                            o = e.prompt(n);
                                            break;
                                        default:
                                            o = e.alert(n), window.setTimeout(function() {
                                                o.remove();
                                            }, r);
                                    }
                                    t1.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                                }
                            }
                        };
                    }();
                },
                function(e, t1, n) {
                    var o = n(2);
                    "string" == typeof o && (o = [
                        [
                            e.i,
                            o,
                            ""
                        ]
                    ]), n(4)(o, {
                        hmr: !0,
                        transform: void 0,
                        insertInto: void 0
                    }), o.locals && (e.exports = o.locals);
                },
                function(e, t1, n) {
                    (e.exports = n(3)(!1)).push([
                        e.i,
                        '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',
                        ""
                    ]);
                },
                function(e, t1) {
                    e.exports = function(e) {
                        var t1 = [];
                        return t1.toString = function() {
                            return this.map(function(t1) {
                                var n = function(e, t1) {
                                    var n, o = e[1] || "", r = e[3];
                                    if (!r) return o;
                                    if (t1 && "function" == typeof btoa) {
                                        var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), a = r.sources.map(function(e) {
                                            return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                        });
                                        return [
                                            o
                                        ].concat(a).concat([
                                            i
                                        ]).join("\n");
                                    }
                                    return [
                                        o
                                    ].join("\n");
                                }(t1, e);
                                return t1[2] ? "@media " + t1[2] + "{" + n + "}" : n;
                            }).join("");
                        }, t1.i = function(e, n) {
                            "string" == typeof e && (e = [
                                [
                                    null,
                                    e,
                                    ""
                                ]
                            ]);
                            for(var o = {}, r = 0; r < this.length; r++){
                                var i = this[r][0];
                                "number" == typeof i && (o[i] = !0);
                            }
                            for(r = 0; r < e.length; r++){
                                var a = e[r];
                                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t1.push(a));
                            }
                        }, t1;
                    };
                },
                function(e, t1, n) {
                    var o, r, i = {}, a = (o = function() {
                        return window && document && document.all && !window.atob;
                    }, function() {
                        return void 0 === r && (r = o.apply(this, arguments)), r;
                    }), s = function(e) {
                        var t1 = {};
                        return function(e) {
                            if ("function" == typeof e) return e();
                            if (void 0 === t1[e]) {
                                var n = (function(e) {
                                    return document.querySelector(e);
                                }).call(this, e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                                t1[e] = n;
                            }
                            return t1[e];
                        };
                    }(), l = null, c = 0, u = [], f = n(5);
                    function d(e, t1) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n], r = i[o.id];
                            if (r) {
                                r.refs++;
                                for(var a = 0; a < r.parts.length; a++)r.parts[a](o.parts[a]);
                                for(; a < o.parts.length; a++)r.parts.push(k(o.parts[a], t1));
                            } else {
                                var s = [];
                                for(a = 0; a < o.parts.length; a++)s.push(k(o.parts[a], t1));
                                i[o.id] = {
                                    id: o.id,
                                    refs: 1,
                                    parts: s
                                };
                            }
                        }
                    }
                    function p(e, t1) {
                        for(var n = [], o = {}, r = 0; r < e.length; r++){
                            var i = e[r], a = t1.base ? i[0] + t1.base : i[0], s = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            };
                            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                                id: a,
                                parts: [
                                    s
                                ]
                            });
                        }
                        return n;
                    }
                    function h(e, t1) {
                        var n = s(e.insertInto);
                        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var o = u[u.length - 1];
                        if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t1, o.nextSibling) : n.appendChild(t1) : n.insertBefore(t1, n.firstChild), u.push(t1);
                        else if ("bottom" === e.insertAt) n.appendChild(t1);
                        else {
                            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                            var r = s(e.insertInto + " " + e.insertAt.before);
                            n.insertBefore(t1, r);
                        }
                    }
                    function v(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                        var t1 = u.indexOf(e);
                        t1 >= 0 && u.splice(t1, 1);
                    }
                    function g(e) {
                        var t1 = document.createElement("style");
                        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), y(t1, e.attrs), h(e, t1), t1;
                    }
                    function y(e, t1) {
                        Object.keys(t1).forEach(function(n) {
                            e.setAttribute(n, t1[n]);
                        });
                    }
                    function k(e, t1) {
                        var n, o, r, i;
                        if (t1.transform && e.css) {
                            if (!(i = t1.transform(e.css))) return function() {};
                            e.css = i;
                        }
                        if (t1.singleton) {
                            var a = c++;
                            n = l || (l = g(t1)), o = w.bind(null, n, a, !1), r = w.bind(null, n, a, !0);
                        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                            var t1 = document.createElement("link");
                            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t1, e.attrs), h(e, t1), t1;
                        }(t1), o = (function(e, t1, n) {
                            var o = n.css, r = n.sourceMap, i = void 0 === t1.convertToAbsoluteUrls && r;
                            (t1.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                            var a = new Blob([
                                o
                            ], {
                                type: "text/css"
                            }), s = e.href;
                            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                        }).bind(null, n, t1), r = function() {
                            v(n), n.href && URL.revokeObjectURL(n.href);
                        }) : (n = g(t1), o = (function(e, t1) {
                            var n = t1.css, o = t1.media;
                            if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;
                            else {
                                for(; e.firstChild;)e.removeChild(e.firstChild);
                                e.appendChild(document.createTextNode(n));
                            }
                        }).bind(null, n), r = function() {
                            v(n);
                        });
                        return o(e), function(t1) {
                            if (t1) {
                                if (t1.css === e.css && t1.media === e.media && t1.sourceMap === e.sourceMap) return;
                                o(e = t1);
                            } else r();
                        };
                    }
                    e.exports = function(e, t1) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        (t1 = t1 || {}).attrs = "object" == typeof t1.attrs ? t1.attrs : {}, t1.singleton || "boolean" == typeof t1.singleton || (t1.singleton = a()), t1.insertInto || (t1.insertInto = "head"), t1.insertAt || (t1.insertAt = "bottom");
                        var n = p(e, t1);
                        return d(n, t1), function(e) {
                            for(var o = [], r = 0; r < n.length; r++){
                                var a = n[r];
                                (s = i[a.id]).refs--, o.push(s);
                            }
                            for(e && d(p(e, t1), t1), r = 0; r < o.length; r++){
                                var s;
                                if (0 === (s = o[r]).refs) {
                                    for(var l = 0; l < s.parts.length; l++)s.parts[l]();
                                    delete i[s.id];
                                }
                            }
                        };
                    };
                    var b, m = (b = [], function(e, t1) {
                        return b[e] = t1, b.filter(Boolean).join("\n");
                    });
                    function w(e, t1, n, o) {
                        var r = n ? "" : o.css;
                        if (e.styleSheet) e.styleSheet.cssText = m(t1, r);
                        else {
                            var i = document.createTextNode(r), a = e.childNodes;
                            a[t1] && e.removeChild(a[t1]), a.length ? e.insertBefore(i, a[t1]) : e.appendChild(i);
                        }
                    }
                },
                function(e, t1) {
                    e.exports = function(e) {
                        var t1 = "undefined" != typeof window && window.location;
                        if (!t1) throw new Error("fixUrls requires window.location");
                        if (!e || "string" != typeof e) return e;
                        var n = t1.protocol + "//" + t1.host, o = n + t1.pathname.replace(/\/[^\/]*$/, "/");
                        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t1) {
                            var r, i = t1.trim().replace(/^"(.*)"$/, function(e, t1) {
                                return t1;
                            }).replace(/^'(.*)'$/, function(e, t1) {
                                return t1;
                            });
                            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
                        });
                    };
                },
                function(e, t1, n) {
                    "use strict";
                    var o, r, i, a, s, l;
                    e.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                        alert: l = function(e) {
                            var t1 = document.createElement("DIV"), n = document.createElement("DIV"), i = e.message, a = e.style;
                            return t1.classList.add(o), a && t1.classList.add(o + "--" + a), t1.innerHTML = i, n.classList.add(r), n.addEventListener("click", t1.remove.bind(t1)), t1.appendChild(n), t1;
                        },
                        confirm: function(e) {
                            var t1 = l(e), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("button"), u = t1.querySelector("." + r), f = e.cancelHandler, d = e.okHandler;
                            return n.classList.add(s), o.innerHTML = e.okText || "Confirm", c.innerHTML = e.cancelText || "Cancel", o.classList.add(a), c.classList.add(a), o.classList.add(i), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", t1.remove.bind(t1)), c.addEventListener("click", t1.remove.bind(t1)), n.appendChild(o), n.appendChild(c), t1.appendChild(n), t1;
                        },
                        prompt: function(e) {
                            var t1 = l(e), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("input"), u = t1.querySelector("." + r), f = e.cancelHandler, d = e.okHandler;
                            return n.classList.add(s), o.innerHTML = e.okText || "Ok", o.classList.add(a), o.classList.add(i), c.classList.add("cdx-notify__input"), e.placeholder && c.setAttribute("placeholder", e.placeholder), e.default && (c.value = e.default), e.inputType && (c.type = e.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function() {
                                d(c.value);
                            }), o.addEventListener("click", t1.remove.bind(t1)), n.appendChild(c), n.appendChild(o), t1.appendChild(n), t1;
                        },
                        getWrapper: function() {
                            var e = document.createElement("DIV");
                            return e.classList.add("cdx-notifies"), e;
                        }
                    });
                }
            ]);
        },
        function(e, t1, n) {
            var o, r;
            void 0 === (r = "function" == typeof (o = function() {
                function e(e) {
                    var t1 = e.tags;
                    if (!Object.keys(t1).map(function(e) {
                        return typeof t1[e];
                    }).every(function(e) {
                        return "object" === e || "boolean" === e || "function" === e;
                    })) throw new Error("The configuration was invalid");
                    this.config = e;
                }
                var t1 = [
                    "P",
                    "LI",
                    "TD",
                    "TH",
                    "DIV",
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
                    "H6",
                    "PRE"
                ];
                function n(e) {
                    return -1 !== t1.indexOf(e.nodeName);
                }
                var o = [
                    "A",
                    "B",
                    "STRONG",
                    "I",
                    "EM",
                    "SUB",
                    "SUP",
                    "U",
                    "STRIKE"
                ];
                function r(e) {
                    return -1 !== o.indexOf(e.nodeName);
                }
                function i(e, t1, n) {
                    return "function" == typeof e.tags[t1] ? e.tags[t1](n) : e.tags[t1];
                }
                function a(e, t1) {
                    return void 0 === t1 || "boolean" == typeof t1 && !t1;
                }
                function s(e, t1, n) {
                    var o = e.name.toLowerCase();
                    return !0 !== t1 && ("function" == typeof t1[o] ? !t1[o](e.value, n) : void 0 === t1[o] || !1 === t1[o] || "string" == typeof t1[o] && t1[o] !== e.value);
                }
                return e.prototype.clean = function(e) {
                    const t1 = document.implementation.createHTMLDocument(), n = t1.createElement("div");
                    return n.innerHTML = e, this._sanitize(t1, n), n.innerHTML;
                }, e.prototype._sanitize = function(e, t1) {
                    var o = function(e, t1) {
                        return e.createTreeWalker(t1, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
                    }(e, t1), l = o.firstChild();
                    if (l) do {
                        if (l.nodeType !== Node.TEXT_NODE) {
                            if (l.nodeType === Node.COMMENT_NODE) {
                                t1.removeChild(l), this._sanitize(e, t1);
                                break;
                            }
                            var c, u = r(l);
                            u && (c = Array.prototype.some.call(l.childNodes, n));
                            var f = !!t1.parentNode, d = n(t1) && n(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for(; l.childNodes.length > 0;)t1.insertBefore(l.childNodes[0], l);
                                t1.removeChild(l), this._sanitize(e, t1);
                                break;
                            }
                            for(var v = 0; v < l.attributes.length; v += 1){
                                var g = l.attributes[v];
                                s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                            }
                            this._sanitize(e, l);
                        } else if ("" === l.data.trim() && (l.previousElementSibling && n(l.previousElementSibling) || l.nextElementSibling && n(l.nextElementSibling))) {
                            t1.removeChild(l), this._sanitize(e, t1);
                            break;
                        }
                    }while (l = o.nextSibling());
                }, e;
            }) ? o.call(t1, n, t1, e) : o) || (e.exports = r);
        },
        function(e, t1, n) {
            window, e.exports = function(e) {
                var t1 = {};
                function n(o) {
                    if (t1[o]) return t1[o].exports;
                    var r = t1[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = e, n.c = t1, n.d = function(e, t1, o) {
                    n.o(e, t1) || Object.defineProperty(e, t1, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t1) {
                    if (1 & t1 && (e = n(e)), 8 & t1) return e;
                    if (4 & t1 && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t1 && "string" != typeof e) for(var r in e)n.d(o, r, (function(t1) {
                        return e[t1];
                    }).bind(null, r));
                    return o;
                }, n.n = function(e) {
                    var t1 = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t1, "a", t1), t1;
                }, n.o = function(e, t1) {
                    return Object.prototype.hasOwnProperty.call(e, t1);
                }, n.p = "", n(n.s = 0);
            }([
                function(e, t1, n) {
                    e.exports = n(1);
                },
                function(e, t1, n) {
                    "use strict";
                    n.r(t1), n.d(t1, "default", function() {
                        return o;
                    });
                    class o {
                        constructor(){
                            this.nodes = {
                                wrapper: null,
                                content: null
                            }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                                this.showed && this.hide(!0);
                            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                                passive: !0
                            });
                        }
                        get CSS() {
                            return {
                                tooltip: "ct",
                                tooltipContent: "ct__content",
                                tooltipShown: "ct--shown",
                                placement: {
                                    left: "ct--left",
                                    bottom: "ct--bottom",
                                    right: "ct--right",
                                    top: "ct--top"
                                }
                            };
                        }
                        show(e, t1, n) {
                            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                            const o = Object.assign({
                                placement: "bottom",
                                marginTop: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                delay: 70,
                                hidingDelay: 0
                            }, n);
                            if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof t1) this.nodes.content.appendChild(document.createTextNode(t1));
                            else {
                                if (!(t1 instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xabcontent\xbb passed. It should be an instance of Node or String. But " + typeof t1 + " given.");
                                this.nodes.content.appendChild(t1);
                            }
                            switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement){
                                case "top":
                                    this.placeTop(e, o);
                                    break;
                                case "left":
                                    this.placeLeft(e, o);
                                    break;
                                case "right":
                                    this.placeRight(e, o);
                                    break;
                                case "bottom":
                                default:
                                    this.placeBottom(e, o);
                            }
                            o && o.delay ? this.showingTimeout = setTimeout(()=>{
                                this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                            }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                        }
                        hide(e = !1) {
                            if (this.hidingDelay && !e) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                                this.hide(!0);
                            }, this.hidingDelay));
                            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                        }
                        onHover(e, t1, n) {
                            e.addEventListener("mouseenter", ()=>{
                                this.show(e, t1, n);
                            }), e.addEventListener("mouseleave", ()=>{
                                this.hide();
                            });
                        }
                        destroy() {
                            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                        }
                        prepare() {
                            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                        }
                        loadStyles() {
                            const e = "codex-tooltips-style";
                            if (document.getElementById(e)) return;
                            const t1 = n(2), o = this.make("style", null, {
                                textContent: t1.toString(),
                                id: e
                            });
                            this.prepend(document.head, o);
                        }
                        placeBottom(e, t1) {
                            const n = e.getBoundingClientRect(), o = n.left + e.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.bottom + window.pageYOffset + this.offsetTop + t1.marginTop;
                            this.applyPlacement("bottom", o, r);
                        }
                        placeTop(e, t1) {
                            const n = e.getBoundingClientRect(), o = n.left + e.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                            this.applyPlacement("top", o, r);
                        }
                        placeLeft(e, t1) {
                            const n = e.getBoundingClientRect(), o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - t1.marginLeft, r = n.top + window.pageYOffset + e.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("left", o, r);
                        }
                        placeRight(e, t1) {
                            const n = e.getBoundingClientRect(), o = n.right + this.offsetRight + t1.marginRight, r = n.top + window.pageYOffset + e.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("right", o, r);
                        }
                        applyPlacement(e, t1, n) {
                            this.nodes.wrapper.classList.add(this.CSS.placement[e]), this.nodes.wrapper.style.left = t1 + "px", this.nodes.wrapper.style.top = n + "px";
                        }
                        make(e, t1 = null, n = {}) {
                            const o = document.createElement(e);
                            Array.isArray(t1) ? o.classList.add(...t1) : t1 && o.classList.add(t1);
                            for(const e in n)n.hasOwnProperty(e) && (o[e] = n[e]);
                            return o;
                        }
                        append(e, t1) {
                            Array.isArray(t1) ? t1.forEach((t1)=>e.appendChild(t1)) : e.appendChild(t1);
                        }
                        prepend(e, t1) {
                            Array.isArray(t1) ? (t1 = t1.reverse()).forEach((t1)=>e.prepend(t1)) : e.prepend(t1);
                        }
                    }
                },
                function(e, t1) {
                    e.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
                }
            ]).default;
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(19),
                n(8),
                n(25)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (f = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), s = u(s), l = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(l), c = u(c);
                var d = function() {
                    function e(t1, n) {
                        (0, r.default)(this, e), this.cursor = -1, this.items = [], this.items = t1 || [], this.focusedCssClass = n;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "currentItem",
                            get: function() {
                                return -1 === this.cursor ? null : this.items[this.cursor];
                            }
                        },
                        {
                            key: "setCursor",
                            value: function(e) {
                                e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
                            }
                        },
                        {
                            key: "setItems",
                            value: function(e) {
                                this.items = e;
                            }
                        },
                        {
                            key: "next",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(e.directions.RIGHT);
                            }
                        },
                        {
                            key: "previous",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(e.directions.LEFT);
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
                            }
                        },
                        {
                            key: "leafNodesAndReturnIndex",
                            value: function(t1) {
                                var n = this;
                                if (0 === this.items.length) return this.cursor;
                                var o = this.cursor;
                                return -1 === o ? o = t1 === e.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), o = t1 === e.directions.RIGHT ? (o + 1) % this.items.length : (this.items.length + o - 1) % this.items.length, s.default.canSetCaret(this.items[o]) && l.delay(function() {
                                    return c.default.setCursor(n.items[o]);
                                }, 50)(), this.items[o].classList.add(this.focusedCssClass), o;
                            }
                        }
                    ]), e;
                }();
                o.default = d, d.displayName = "DomIterator", d.directions = {
                    RIGHT: "right",
                    LEFT: "left"
                }, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8),
                n(19),
                n(61)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (f = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), s = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(s), l = u(l);
                var d = function() {
                    function e(t1) {
                        (0, r.default)(this, e), this.blocks = [], this.workingArea = t1;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "length",
                            get: function() {
                                return this.blocks.length;
                            }
                        },
                        {
                            key: "array",
                            get: function() {
                                return this.blocks;
                            }
                        },
                        {
                            key: "nodes",
                            get: function() {
                                return s.array(this.workingArea.children);
                            }
                        },
                        {
                            key: "push",
                            value: function(e) {
                                this.blocks.push(e), this.insertToDOM(e);
                            }
                        },
                        {
                            key: "swap",
                            value: function(e, t1) {
                                var n = this.blocks[t1];
                                l.default.swap(this.blocks[e].holder, n.holder), this.blocks[t1] = this.blocks[e], this.blocks[e] = n;
                            }
                        },
                        {
                            key: "move",
                            value: function(e, t1) {
                                var n = this.blocks.splice(t1, 1)[0], o = e - 1, r = Math.max(0, o), i = this.blocks[r];
                                e > 0 ? this.insertToDOM(n, "afterend", i) : this.insertToDOM(n, "beforebegin", i), this.blocks.splice(e, 0, n);
                                var a = this.composeBlockEvent("move", {
                                    fromIndex: t1,
                                    toIndex: e
                                });
                                n.call(c.BlockToolAPI.MOVED, a);
                            }
                        },
                        {
                            key: "insert",
                            value: function(e, t1) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (this.length) {
                                    e > this.length && (e = this.length), n && (this.blocks[e].holder.remove(), this.blocks[e].call(c.BlockToolAPI.REMOVED));
                                    var o = n ? 1 : 0;
                                    if (this.blocks.splice(e, o, t1), e > 0) {
                                        var r = this.blocks[e - 1];
                                        this.insertToDOM(t1, "afterend", r);
                                    } else {
                                        var i = this.blocks[e + 1];
                                        i ? this.insertToDOM(t1, "beforebegin", i) : this.insertToDOM(t1);
                                    }
                                } else this.push(t1);
                            }
                        },
                        {
                            key: "remove",
                            value: function(e) {
                                isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(c.BlockToolAPI.REMOVED), this.blocks.splice(e, 1);
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.workingArea.innerHTML = "", this.blocks.forEach(function(e) {
                                    return e.call(c.BlockToolAPI.REMOVED);
                                }), this.blocks.length = 0;
                            }
                        },
                        {
                            key: "insertAfter",
                            value: function(e, t1) {
                                var n = this.blocks.indexOf(e);
                                this.insert(n + 1, t1);
                            }
                        },
                        {
                            key: "get",
                            value: function(e) {
                                return this.blocks[e];
                            }
                        },
                        {
                            key: "indexOf",
                            value: function(e) {
                                return this.blocks.indexOf(e);
                            }
                        },
                        {
                            key: "insertToDOM",
                            value: function(e, t1, n) {
                                t1 ? n.holder.insertAdjacentElement(t1, e.holder) : this.workingArea.appendChild(e.holder), e.call(c.BlockToolAPI.RENDERED);
                            }
                        },
                        {
                            key: "composeBlockEvent",
                            value: function(e, t1) {
                                return new CustomEvent(e, {
                                    detail: t1
                                });
                            }
                        }
                    ], [
                        {
                            key: "set",
                            value: function(e, t1, n) {
                                return isNaN(Number(t1)) ? (Reflect.set(e, t1, n), !0) : (e.insert(+t1, n), !0);
                            }
                        },
                        {
                            key: "get",
                            value: function(e, t1) {
                                return isNaN(Number(t1)) ? Reflect.get(e, t1) : e.get(+t1);
                            }
                        }
                    ]), e;
                }();
                o.default = d, d.displayName = "Blocks", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1
            ], void 0 === (i = "function" == typeof (o = function(e) {
                "use strict";
                var t1;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BlockMutationType = void 0, e.BlockMutationType = t1, function(e) {
                    e.Added = "block-added", e.Removed = "block-removed", e.Moved = "block-moved", e.Changed = "block-changed";
                }(t1 || (e.BlockMutationType = t1 = {}));
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            window, e.exports = function(e) {
                var t1 = {};
                function n(o) {
                    if (t1[o]) return t1[o].exports;
                    var r = t1[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = e, n.c = t1, n.d = function(e, t1, o) {
                    n.o(e, t1) || Object.defineProperty(e, t1, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t1) {
                    if (1 & t1 && (e = n(e)), 8 & t1) return e;
                    if (4 & t1 && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t1 && "string" != typeof e) for(var r in e)n.d(o, r, (function(t1) {
                        return e[t1];
                    }).bind(null, r));
                    return o;
                }, n.n = function(e) {
                    var t1 = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t1, "a", t1), t1;
                }, n.o = function(e, t1) {
                    return Object.prototype.hasOwnProperty.call(e, t1);
                }, n.p = "", n(n.s = 0);
            }([
                function(e, t1, n) {
                    "use strict";
                    function o(e, t1) {
                        for(var n = 0; n < t1.length; n++){
                            var o = t1[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    function r(e, t1, n) {
                        return t1 && o(e.prototype, t1), n && o(e, n), e;
                    }
                    n.r(t1);
                    var i = function() {
                        function e(t1) {
                            var n = this;
                            !function(e, t1) {
                                if (!(e instanceof t1)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.commands = {}, this.keys = {}, this.name = t1.name, this.parseShortcutName(t1.name), this.element = t1.on, this.callback = t1.callback, this.executeShortcut = function(e) {
                                n.execute(e);
                            }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                        }
                        return r(e, null, [
                            {
                                key: "supportedCommands",
                                get: function() {
                                    return {
                                        SHIFT: [
                                            "SHIFT"
                                        ],
                                        CMD: [
                                            "CMD",
                                            "CONTROL",
                                            "COMMAND",
                                            "WINDOWS",
                                            "CTRL"
                                        ],
                                        ALT: [
                                            "ALT",
                                            "OPTION"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "keyCodes",
                                get: function() {
                                    return {
                                        0: 48,
                                        1: 49,
                                        2: 50,
                                        3: 51,
                                        4: 52,
                                        5: 53,
                                        6: 54,
                                        7: 55,
                                        8: 56,
                                        9: 57,
                                        A: 65,
                                        B: 66,
                                        C: 67,
                                        D: 68,
                                        E: 69,
                                        F: 70,
                                        G: 71,
                                        H: 72,
                                        I: 73,
                                        J: 74,
                                        K: 75,
                                        L: 76,
                                        M: 77,
                                        N: 78,
                                        O: 79,
                                        P: 80,
                                        Q: 81,
                                        R: 82,
                                        S: 83,
                                        T: 84,
                                        U: 85,
                                        V: 86,
                                        W: 87,
                                        X: 88,
                                        Y: 89,
                                        Z: 90,
                                        BACKSPACE: 8,
                                        ENTER: 13,
                                        ESCAPE: 27,
                                        LEFT: 37,
                                        UP: 38,
                                        RIGHT: 39,
                                        DOWN: 40,
                                        INSERT: 45,
                                        DELETE: 46,
                                        ".": 190
                                    };
                                }
                            }
                        ]), r(e, [
                            {
                                key: "parseShortcutName",
                                value: function(t1) {
                                    t1 = t1.split("+");
                                    for(var n = 0; n < t1.length; n++){
                                        t1[n] = t1[n].toUpperCase();
                                        var o = !1;
                                        for(var r in e.supportedCommands)if (e.supportedCommands[r].includes(t1[n])) {
                                            o = this.commands[r] = !0;
                                            break;
                                        }
                                        o || (this.keys[t1[n]] = !0);
                                    }
                                    for(var i in e.supportedCommands)this.commands[i] || (this.commands[i] = !1);
                                }
                            },
                            {
                                key: "execute",
                                value: function(t1) {
                                    var n, o = {
                                        CMD: t1.ctrlKey || t1.metaKey,
                                        SHIFT: t1.shiftKey,
                                        ALT: t1.altKey
                                    }, r = !0;
                                    for(n in this.commands)this.commands[n] !== o[n] && (r = !1);
                                    var i, a = !0;
                                    for(i in this.keys)a = a && t1.keyCode === e.keyCodes[i];
                                    r && a && this.callback(t1);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    this.element.removeEventListener("keydown", this.executeShortcut);
                                }
                            }
                        ]), e;
                    }();
                    t1.default = i;
                }
            ]).default;
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(20),
                n(21),
                n(2),
                n(3),
                n(114),
                n(5),
                n(6),
                n(4),
                n(7),
                n(8),
                n(61),
                n(116),
                n(82),
                n(85),
                n(54),
                n(68)
            ], void 0 === (i = "function" == typeof (o = function(e, t1, o, r, i, s, l, c, u, f, d, p, h, v, g, y, k) {
                "use strict";
                var b = n(1);
                function m(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (m = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function w(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }
                function x(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, u.default)(e);
                        if (t1) {
                            var r = (0, u.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, c.default)(this, n);
                    };
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = e.ToolboxEvent = void 0, t1 = b(t1), o = b(o), r = b(r), i = b(i), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = w(d), h = b(h), v = b(v), g = w(g), y = b(y);
                var C, S = function(e, t1, n, o) {
                    var r, i = arguments.length, a = i < 3 ? t1 : null === o ? o = Object.getOwnPropertyDescriptor(t1, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, f.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t1, n, o);
                    else for(var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t1, n, a) : r(t1, n)) || a);
                    return i > 3 && a && Object.defineProperty(t1, n, a), a;
                };
                e.ToolboxEvent = C, function(e) {
                    e.Opened = "toolbox-opened", e.Closed = "toolbox-closed", e.BlockAdded = "toolbox-block-added";
                }(C || (e.ToolboxEvent = C = {}));
                var T = function(e) {
                    (0, l.default)(c, e);
                    var n, a = x(c);
                    function c(e) {
                        var t1, n = e.api, o = e.tools, i = e.i18nLabels;
                        return (0, r.default)(this, c), (t1 = a.call(this)).opened = !1, t1.nodes = {
                            toolbox: null
                        }, t1.onOverlayClicked = function() {
                            t1.close();
                        }, t1.api = n, t1.tools = o, t1.i18nLabels = i, t1;
                    }
                    return (0, i.default)(c, [
                        {
                            key: "isEmpty",
                            get: function() {
                                return 0 === this.toolsToBeDisplayed.length;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                return this.popover = new g.default({
                                    scopeElement: this.api.ui.nodes.redactor,
                                    className: c.CSS.toolbox,
                                    searchable: !0,
                                    filterLabel: this.i18nLabels.filter,
                                    nothingFoundLabel: this.i18nLabels.nothingFound,
                                    items: this.toolboxItemsToBeDisplayed
                                }), this.popover.on(g.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox;
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                var e;
                                return null === (e = this.popover) || void 0 === e ? void 0 : e.hasFocus();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                var e;
                                (0, s.default)((0, u.default)(c.prototype), "destroy", this).call(this), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), null === (e = this.popover) || void 0 === e || e.off(g.PopoverEvent.OverlayClicked, this.onOverlayClicked);
                            }
                        },
                        {
                            key: "toolButtonActivated",
                            value: function(e, t1) {
                                this.insertNewBlock(e, t1);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var e;
                                this.isEmpty || (null === (e = this.popover) || void 0 === e || e.show(), this.opened = !0, this.emit(C.Opened));
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                var e;
                                null === (e = this.popover) || void 0 === e || e.hide(), this.opened = !1, this.emit(C.Closed);
                            }
                        },
                        {
                            key: "toggle",
                            value: function() {
                                this.opened ? this.close() : this.open();
                            }
                        },
                        {
                            key: "toolsToBeDisplayed",
                            get: function() {
                                var e = [];
                                return this.tools.forEach(function(t1) {
                                    t1.toolbox && e.push(t1);
                                }), e;
                            }
                        },
                        {
                            key: "toolboxItemsToBeDisplayed",
                            get: function() {
                                var e = this, t1 = function(t1, n) {
                                    return {
                                        icon: t1.icon,
                                        title: y.default.t(k.I18nInternalNS.toolNames, t1.title || d.capitalize(n.name)),
                                        name: n.name,
                                        onActivate: function() {
                                            e.toolButtonActivated(n.name, t1.data);
                                        },
                                        secondaryLabel: n.shortcut ? d.beautifyShortcut(n.shortcut) : ""
                                    };
                                };
                                return this.toolsToBeDisplayed.reduce(function(e, n) {
                                    return Array.isArray(n.toolbox) ? n.toolbox.forEach(function(o) {
                                        e.push(t1(o, n));
                                    }) : void 0 !== n.toolbox && e.push(t1(n.toolbox, n)), e;
                                }, []);
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function() {
                                var e = this;
                                this.toolsToBeDisplayed.forEach(function(t1) {
                                    var n = t1.shortcut;
                                    n && e.enableShortcutForTool(t1.name, n);
                                });
                            }
                        },
                        {
                            key: "enableShortcutForTool",
                            value: function(e, t1) {
                                var n = this;
                                h.default.add({
                                    name: t1,
                                    on: this.api.ui.nodes.redactor,
                                    handler: function(t1) {
                                        t1.preventDefault(), n.insertNewBlock(e);
                                    }
                                });
                            }
                        },
                        {
                            key: "removeAllShortcuts",
                            value: function() {
                                var e = this;
                                this.toolsToBeDisplayed.forEach(function(t1) {
                                    var n = t1.shortcut;
                                    n && h.default.remove(e.api.ui.nodes.redactor, n);
                                });
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: (n = (0, o.default)(t1.default.mark(function e(n, o) {
                                var r, i, a, s, l, c;
                                return t1.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (r = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(r)) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (a = i.isEmpty ? r : r + 1, !o) {
                                                e.next = 10;
                                                break;
                                            }
                                            return e.next = 8, this.api.blocks.composeBlockData(n);
                                        case 8:
                                            l = e.sent, s = Object.assign(l, o);
                                        case 10:
                                            (c = this.api.blocks.insert(n, s, void 0, a, void 0, i.isEmpty)).call(p.BlockToolAPI.APPEND_CALLBACK), this.api.caret.setToBlock(a), this.emit(C.BlockAdded, {
                                                block: c
                                            }), this.api.toolbar.close();
                                        case 15:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e, t1) {
                                return n.apply(this, arguments);
                            })
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbox: "ce-toolbox"
                                };
                            }
                        }
                    ]), c;
                }(v.default);
                e.default = T, T.displayName = "Toolbox", S([
                    d.cacheable
                ], T.prototype, "toolsToBeDisplayed", null), S([
                    d.cacheable
                ], T.prototype, "toolboxItemsToBeDisplayed", null);
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(19),
                n(112),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l) {
                "use strict";
                var c = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);
                var u = function() {
                    function e(t1) {
                        var n = t1.items, o = t1.onSearch, i = t1.placeholder;
                        (0, r.default)(this, e), this.listeners = new s.default, this.items = n, this.onSearch = o, this.render(i);
                    }
                    return (0, i.default)(e, [
                        {
                            key: "getElement",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "focus",
                            value: function() {
                                this.input.focus();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.input.value = "", this.searchQuery = "", this.onSearch(this.foundItems);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.listeners.removeAll();
                            }
                        },
                        {
                            key: "render",
                            value: function(t1) {
                                var n = this;
                                this.wrapper = a.default.make("div", e.CSS.wrapper);
                                var o = a.default.make("div", e.CSS.icon, {
                                    innerHTML: l.IconSearch
                                });
                                this.input = a.default.make("input", e.CSS.input, {
                                    placeholder: t1
                                }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", function() {
                                    n.searchQuery = n.input.value, n.onSearch(n.foundItems);
                                });
                            }
                        },
                        {
                            key: "foundItems",
                            get: function() {
                                var e = this;
                                return this.items.filter(function(t1) {
                                    return e.checkItem(t1);
                                });
                            }
                        },
                        {
                            key: "checkItem",
                            value: function(e) {
                                var t1, n = (null === (t1 = e.title) || void 0 === t1 ? void 0 : t1.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
                                return n.includes(o);
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "cdx-search-field",
                                    icon: "cdx-search-field__icon",
                                    input: "cdx-search-field__input"
                                };
                            }
                        }
                    ]), e;
                }();
                o.default = u, u.displayName = "SearchInput", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(8)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e);
                    }
                    return (0, i.default)(e, [
                        {
                            key: "lock",
                            value: function() {
                                a.isIosDevice ? this.lockHard() : document.body.classList.add(e.CSS.scrollLocked);
                            }
                        },
                        {
                            key: "unlock",
                            value: function() {
                                a.isIosDevice ? this.unlockHard() : document.body.classList.remove(e.CSS.scrollLocked);
                            }
                        },
                        {
                            key: "lockHard",
                            value: function() {
                                this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", "".concat(this.scrollPosition, "px")), document.body.classList.add(e.CSS.scrollLockedHard);
                            }
                        },
                        {
                            key: "unlockHard",
                            value: function() {
                                document.body.classList.remove(e.CSS.scrollLockedHard), null !== this.scrollPosition && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "ScrollLocker", l.CSS = {
                    scrollLocked: "ce-scroll-locked",
                    scrollLockedHard: "ce-scroll-locked--hard"
                }, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1
            ], void 0 === (i = "function" == typeof (o = function(e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.resolveAliases = function(e, t1) {
                    var n = {};
                    return Object.keys(e).forEach(function(o) {
                        var r = t1[o];
                        void 0 !== r ? n[r] = e[o] : n[o] = e[o];
                    }), n;
                };
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            window, e.exports = function(e) {
                var t1 = {};
                function n(o) {
                    if (t1[o]) return t1[o].exports;
                    var r = t1[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = e, n.c = t1, n.d = function(e, t1, o) {
                    n.o(e, t1) || Object.defineProperty(e, t1, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t1) {
                    if (1 & t1 && (e = n(e)), 8 & t1) return e;
                    if (4 & t1 && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t1 && "string" != typeof e) for(var r in e)n.d(o, r, (function(t1) {
                        return e[t1];
                    }).bind(null, r));
                    return o;
                }, n.n = function(e) {
                    var t1 = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t1, "a", t1), t1;
                }, n.o = function(e, t1) {
                    return Object.prototype.hasOwnProperty.call(e, t1);
                }, n.p = "/", n(n.s = 4);
            }([
                function(e, t1, n) {
                    var o = n(1), r = n(2);
                    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
                        [
                            e.i,
                            r,
                            ""
                        ]
                    ]), o(r, {
                        insert: "head",
                        singleton: !1
                    }), e.exports = r.locals || {};
                },
                function(e, t1, n) {
                    "use strict";
                    var o, r = function() {
                        var e = {};
                        return function(t1) {
                            if (void 0 === e[t1]) {
                                var n = document.querySelector(t1);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                                e[t1] = n;
                            }
                            return e[t1];
                        };
                    }(), i = [];
                    function a(e) {
                        for(var t1 = -1, n = 0; n < i.length; n++)if (i[n].identifier === e) {
                            t1 = n;
                            break;
                        }
                        return t1;
                    }
                    function s(e, t1) {
                        for(var n = {}, o = [], r = 0; r < e.length; r++){
                            var s = e[r], l = t1.base ? s[0] + t1.base : s[0], c = n[l] || 0, u = "".concat(l, " ").concat(c);
                            n[l] = c + 1;
                            var f = a(u), d = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3]
                            };
                            -1 !== f ? (i[f].references++, i[f].updater(d)) : i.push({
                                identifier: u,
                                updater: v(d, t1),
                                references: 1
                            }), o.push(u);
                        }
                        return o;
                    }
                    function l(e) {
                        var t1 = document.createElement("style"), o = e.attributes || {};
                        if (void 0 === o.nonce) {
                            var i = n.nc;
                            i && (o.nonce = i);
                        }
                        if (Object.keys(o).forEach(function(e) {
                            t1.setAttribute(e, o[e]);
                        }), "function" == typeof e.insert) e.insert(t1);
                        else {
                            var a = r(e.insert || "head");
                            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                            a.appendChild(t1);
                        }
                        return t1;
                    }
                    var c, u = (c = [], function(e, t1) {
                        return c[e] = t1, c.filter(Boolean).join("\n");
                    });
                    function f(e, t1, n, o) {
                        var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                        if (e.styleSheet) e.styleSheet.cssText = u(t1, r);
                        else {
                            var i = document.createTextNode(r), a = e.childNodes;
                            a[t1] && e.removeChild(a[t1]), a.length ? e.insertBefore(i, a[t1]) : e.appendChild(i);
                        }
                    }
                    function d(e, t1, n) {
                        var o = n.css, r = n.media, i = n.sourceMap;
                        if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o;
                        else {
                            for(; e.firstChild;)e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(o));
                        }
                    }
                    var p = null, h = 0;
                    function v(e, t1) {
                        var n, o, r;
                        if (t1.singleton) {
                            var i = h++;
                            n = p || (p = l(t1)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
                        } else n = l(t1), o = d.bind(null, n, t1), r = function() {
                            !function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            }(n);
                        };
                        return o(e), function(t1) {
                            if (t1) {
                                if (t1.css === e.css && t1.media === e.media && t1.sourceMap === e.sourceMap) return;
                                o(e = t1);
                            } else r();
                        };
                    }
                    e.exports = function(e, t1) {
                        (t1 = t1 || {}).singleton || "boolean" == typeof t1.singleton || (t1.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
                        var n = s(e = e || [], t1);
                        return function(e) {
                            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                                for(var o = 0; o < n.length; o++){
                                    var r = a(n[o]);
                                    i[r].references--;
                                }
                                for(var l = s(e, t1), c = 0; c < n.length; c++){
                                    var u = a(n[c]);
                                    0 === i[u].references && (i[u].updater(), i.splice(u, 1));
                                }
                                n = l;
                            }
                        };
                    };
                },
                function(e, t1, n) {
                    (t1 = n(3)(!1)).push([
                        e.i,
                        ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",
                        ""
                    ]), e.exports = t1;
                },
                function(e, t1, n) {
                    "use strict";
                    e.exports = function(e) {
                        var t1 = [];
                        return t1.toString = function() {
                            return this.map(function(t1) {
                                var n = function(e, t1) {
                                    var n, o, r, i = e[1] || "", a = e[3];
                                    if (!a) return i;
                                    if (t1 && "function" == typeof btoa) {
                                        var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(e) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */");
                                        });
                                        return [
                                            i
                                        ].concat(l).concat([
                                            s
                                        ]).join("\n");
                                    }
                                    return [
                                        i
                                    ].join("\n");
                                }(t1, e);
                                return t1[2] ? "@media ".concat(t1[2], " {").concat(n, "}") : n;
                            }).join("");
                        }, t1.i = function(e, n, o) {
                            "string" == typeof e && (e = [
                                [
                                    null,
                                    e,
                                    ""
                                ]
                            ]);
                            var r = {};
                            if (o) for(var i = 0; i < this.length; i++){
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                            for(var s = 0; s < e.length; s++){
                                var l = [].concat(e[s]);
                                o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t1.push(l));
                            }
                        }, t1;
                    };
                },
                function(e, t1, n) {
                    "use strict";
                    function o(e, t1) {
                        for(var n = 0; n < t1.length; n++){
                            var o = t1[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    function r(e, t1, n) {
                        return t1 && o(e.prototype, t1), n && o(e, n), e;
                    }
                    n.r(t1), n.d(t1, "default", function() {
                        return i;
                    }), n(0);
                    var i = function() {
                        function e(t1) {
                            var n = t1.data, o = t1.config, r = t1.api, i = t1.readOnly;
                            !function(e, t1) {
                                if (!(e instanceof t1)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.api = r, this.readOnly = i, this._CSS = {
                                block: this.api.styles.block,
                                wrapper: "ce-paragraph"
                            }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : e.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = void 0 !== o.preserveBlank && o.preserveBlank, this.data = n;
                        }
                        return r(e, null, [
                            {
                                key: "DEFAULT_PLACEHOLDER",
                                get: function() {
                                    return "";
                                }
                            }
                        ]), r(e, [
                            {
                                key: "onKeyUp",
                                value: function(e) {
                                    "Backspace" !== e.code && "Delete" !== e.code || "" === this._element.textContent && (this._element.innerHTML = "");
                                }
                            },
                            {
                                key: "drawView",
                                value: function() {
                                    var e = document.createElement("DIV");
                                    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = !1, e.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (e.contentEditable = !0, e.addEventListener("keyup", this.onKeyUp)), e;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this._element;
                                }
                            },
                            {
                                key: "merge",
                                value: function(e) {
                                    var t1 = {
                                        text: this.data.text + e.text
                                    };
                                    this.data = t1;
                                }
                            },
                            {
                                key: "validate",
                                value: function(e) {
                                    return !("" === e.text.trim() && !this._preserveBlank);
                                }
                            },
                            {
                                key: "save",
                                value: function(e) {
                                    return {
                                        text: e.innerHTML
                                    };
                                }
                            },
                            {
                                key: "onPaste",
                                value: function(e) {
                                    var t1 = {
                                        text: e.detail.data.innerHTML
                                    };
                                    this.data = t1;
                                }
                            },
                            {
                                key: "data",
                                get: function() {
                                    var e = this._element.innerHTML;
                                    return this._data.text = e, this._data;
                                },
                                set: function(e) {
                                    this._data = e || {}, this._element.innerHTML = this._data.text || "";
                                }
                            }
                        ], [
                            {
                                key: "conversionConfig",
                                get: function() {
                                    return {
                                        export: "text",
                                        import: "text"
                                    };
                                }
                            },
                            {
                                key: "sanitize",
                                get: function() {
                                    return {
                                        text: {
                                            br: !0
                                        }
                                    };
                                }
                            },
                            {
                                key: "isReadOnlySupported",
                                get: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "pasteConfig",
                                get: function() {
                                    return {
                                        tags: [
                                            "P"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "toolbox",
                                get: function() {
                                    return {
                                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>',
                                        title: "Text"
                                    };
                                }
                            }
                        ]), e;
                    }();
                }
            ]).default;
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e), this.commandName = "bold", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--bold"
                        }, this.nodes = {
                            button: void 0
                        };
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = a.IconBold, this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function() {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function() {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+B";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    b: {}
                                };
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function e() {
                        (0, r.default)(this, e), this.commandName = "italic", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--italic"
                        }, this.nodes = {
                            button: null
                        };
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = a.IconItalic, this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function() {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function() {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+I";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    i: {}
                                };
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(25),
                n(8),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c) {
                "use strict";
                var u = n(1);
                function f(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (f = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), s = u(s), l = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(l);
                var d = function() {
                    function e(t1) {
                        var n = t1.api;
                        (0, r.default)(this, e), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--link",
                            buttonUnlink: "ce-inline-tool--unlink",
                            input: "ce-inline-tool-input",
                            inputShowed: "ce-inline-tool-input--showed"
                        }, this.nodes = {
                            button: null,
                            input: null
                        }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.i18n = n.i18n, this.selection = new s.default;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = c.IconLink, this.nodes.button;
                            }
                        },
                        {
                            key: "renderActions",
                            value: function() {
                                var e = this;
                                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(t1) {
                                    t1.keyCode === e.ENTER_KEY && e.enterPressed(t1);
                                }), this.nodes.input;
                            }
                        },
                        {
                            key: "surround",
                            value: function(e) {
                                if (e) {
                                    this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                                    var t1 = this.selection.findParentTag("A");
                                    if (t1) return this.selection.expandToTag(t1), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                                }
                                this.toggleActions();
                            }
                        },
                        {
                            key: "checkState",
                            value: function() {
                                var e = this.selection.findParentTag("A");
                                if (e) {
                                    this.nodes.button.innerHTML = c.IconUnlink, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                                    var t1 = e.getAttribute("href");
                                    this.nodes.input.value = "null" !== t1 ? t1 : "", this.selection.save();
                                } else this.nodes.button.innerHTML = c.IconLink, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                                return !!e;
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.closeActions();
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+K";
                            }
                        },
                        {
                            key: "toggleActions",
                            value: function() {
                                this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
                            }
                        },
                        {
                            key: "openActions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
                            }
                        },
                        {
                            key: "closeActions",
                            value: function() {
                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (this.selection.isFakeBackgroundEnabled) {
                                    var t1 = new s.default;
                                    t1.save(), this.selection.restore(), this.selection.removeFakeBackground(), t1.restore();
                                }
                                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(e) {
                                var t1 = this.nodes.input.value || "";
                                return t1.trim() ? this.validateURL(t1) ? (t1 = this.prepareLink(t1), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t1), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({
                                    message: "Pasted link is not valid.",
                                    style: "error"
                                }), void l.log("Incorrect Link pasted", "warn", t1)) : (this.selection.restore(), this.unlink(), e.preventDefault(), void this.closeActions());
                            }
                        },
                        {
                            key: "validateURL",
                            value: function(e) {
                                return !/\s/.test(e);
                            }
                        },
                        {
                            key: "prepareLink",
                            value: function(e) {
                                return e = e.trim(), e = this.addProtocol(e);
                            }
                        },
                        {
                            key: "addProtocol",
                            value: function(e) {
                                if (/^(\w+):(\/\/)?/.test(e)) return e;
                                var t1 = /^\/[^/\s]/.test(e), n = "#" === e.substring(0, 1), o = /^\/\/[^/\s]/.test(e);
                                return t1 || n || o || (e = "http://" + e), e;
                            }
                        },
                        {
                            key: "insertLink",
                            value: function(e) {
                                var t1 = this.selection.findParentTag("A");
                                t1 && this.selection.expandToTag(t1), document.execCommand(this.commandLink, !1, e);
                            }
                        },
                        {
                            key: "unlink",
                            value: function() {
                                document.execCommand(this.commandUnlink);
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    a: {
                                        href: !0,
                                        target: "_blank",
                                        rel: "nofollow"
                                    }
                                };
                            }
                        }
                    ]), e;
                }();
                o.default = d, d.displayName = "LinkInlineTool", d.isInline = !0, d.title = "Link", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(19)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function e(t1) {
                        var n = t1.data, o = t1.api;
                        (0, r.default)(this, e), this.CSS = {
                            wrapper: "ce-stub",
                            info: "ce-stub__info",
                            title: "ce-stub__title",
                            subtitle: "ce-stub__subtitle"
                        }, this.api = o, this.title = n.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n.savedData, this.wrapper = this.make();
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                return this.savedData;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var e = a.default.make("div", this.CSS.wrapper), t1 = a.default.make("div", this.CSS.info), n = a.default.make("div", this.CSS.title, {
                                    textContent: this.title
                                }), o = a.default.make("div", this.CSS.subtitle, {
                                    textContent: this.subtitle
                                });
                                return e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/></svg>', t1.appendChild(n), t1.appendChild(o), e.appendChild(t1), e;
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "Stub", l.isReadOnlySupported = !0, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(69),
                n(396),
                n(397),
                n(398)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s, l, c) {
                "use strict";
                var u = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = u(r), i = u(i), s = u(s), l = u(l), c = u(c);
                var f = function(e, t1) {
                    var n = {};
                    for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && t1.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for(o = Object.getOwnPropertySymbols(e); r < o.length; r++)t1.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                    }
                    return n;
                }, d = function() {
                    function e(t1, n, o) {
                        (0, r.default)(this, e), this.api = o, this.config = t1, this.editorConfig = n;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "get",
                            value: function(e) {
                                var t1 = this.config[e], n = t1.class, o = t1.isInternal, r = void 0 !== o && o, i = f(t1, [
                                    "class",
                                    "isInternal"
                                ]);
                                return new (this.getConstructor(n))({
                                    name: e,
                                    constructable: n,
                                    config: i,
                                    api: this.api,
                                    isDefault: e === this.editorConfig.defaultBlock,
                                    defaultPlaceholder: this.editorConfig.placeholder,
                                    isInternal: r
                                });
                            }
                        },
                        {
                            key: "getConstructor",
                            value: function(e) {
                                switch(!0){
                                    case e[a.InternalInlineToolSettings.IsInline]:
                                        return s.default;
                                    case e[a.InternalTuneSettings.IsTune]:
                                        return l.default;
                                    default:
                                        return c.default;
                                }
                            }
                        }
                    ]), e;
                }();
                o.default = d, d.displayName = "ToolsFactory", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(69)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (d = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function p(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), s = f(s), l = f(l), c = f(c);
                var h = function(e) {
                    (0, s.default)(n, e);
                    var t1 = p(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).type = u.ToolType.Inline, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "title",
                            get: function() {
                                return this.constructable[u.InternalInlineToolSettings.Title];
                            }
                        },
                        {
                            key: "create",
                            value: function() {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        }
                    ]), n;
                }((u = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(u)).default);
                o.default = h, h.displayName = "InlineTool", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(5),
                n(6),
                n(4),
                n(69)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u) {
                "use strict";
                var f = n(1);
                function d(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (d = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function p(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, c.default)(e);
                        if (t1) {
                            var r = (0, c.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, l.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = f(r), i = f(i), s = f(s), l = f(l), c = f(c);
                var h = function(e) {
                    (0, s.default)(n, e);
                    var t1 = p(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).type = u.ToolType.Tune, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "create",
                            value: function(e, t1) {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings,
                                    block: t1,
                                    data: e
                                });
                            }
                        }
                    ]), n;
                }((u = function(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }(u)).default);
                o.default = h, h.displayName = "BlockTune", e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i, a = n(7);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(114),
                n(5),
                n(6),
                n(4),
                n(7),
                n(69),
                n(8),
                n(185)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n(1);
                function g(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t1 = new WeakMap, n = new WeakMap;
                    return (g = function(e) {
                        return e ? n : t1;
                    })(e);
                }
                function y(e, t1) {
                    if (!t1 && e && e.__esModule) return e;
                    if (null === e || "object" !== a(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t1);
                    if (n && n.has(e)) return n.get(e);
                    var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var i in e)if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
                    }
                    return o.default = e, n && n.set(e, o), o;
                }
                function k(e) {
                    var t1 = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function() {
                        var n, o = (0, u.default)(e);
                        if (t1) {
                            var r = (0, u.default)(this).constructor;
                            n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return (0, c.default)(this, n);
                    };
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = v(r), i = v(i), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = y(d), p = y(p), h = v(h);
                var b = function(e, t1, n, o) {
                    var r, i = arguments.length, a = i < 3 ? t1 : null === o ? o = Object.getOwnPropertyDescriptor(t1, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, f.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t1, n, o);
                    else for(var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t1, n, a) : r(t1, n)) || a);
                    return i > 3 && a && Object.defineProperty(t1, n, a), a;
                }, m = function(e) {
                    (0, l.default)(n, e);
                    var t1 = k(n);
                    function n() {
                        var e;
                        return (0, r.default)(this, n), (e = t1.apply(this, arguments)).type = d.ToolType.Block, e.inlineTools = new h.default, e.tunes = new h.default, e;
                    }
                    return (0, i.default)(n, [
                        {
                            key: "create",
                            value: function(e, t1, n) {
                                return new this.constructable({
                                    data: e,
                                    block: t1,
                                    readOnly: n,
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isReadOnlySupported",
                            get: function() {
                                return !0 === this.constructable[d.InternalBlockToolSettings.IsReadOnlySupported];
                            }
                        },
                        {
                            key: "isLineBreaksEnabled",
                            get: function() {
                                return this.constructable[d.InternalBlockToolSettings.IsEnabledLineBreaks];
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var e = this.constructable[d.InternalBlockToolSettings.Toolbox], t1 = this.config[d.UserSettings.Toolbox];
                                if (!p.isEmpty(e) && !1 !== t1) return t1 ? Array.isArray(e) ? Array.isArray(t1) ? t1.map(function(t1, n) {
                                    var o = e[n];
                                    return o ? Object.assign(Object.assign({}, o), t1) : t1;
                                }) : [
                                    t1
                                ] : Array.isArray(t1) ? t1 : [
                                    Object.assign(Object.assign({}, e), t1)
                                ] : Array.isArray(e) ? e : [
                                    e
                                ];
                            }
                        },
                        {
                            key: "conversionConfig",
                            get: function() {
                                return this.constructable[d.InternalBlockToolSettings.ConversionConfig];
                            }
                        },
                        {
                            key: "enabledInlineTools",
                            get: function() {
                                return this.config[d.UserSettings.EnabledInlineTools] || !1;
                            }
                        },
                        {
                            key: "enabledBlockTunes",
                            get: function() {
                                return this.config[d.UserSettings.EnabledBlockTunes];
                            }
                        },
                        {
                            key: "pasteConfig",
                            get: function() {
                                return this.constructable[d.InternalBlockToolSettings.PasteConfig] || {};
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                var e = (0, s.default)((0, u.default)(n.prototype), "sanitizeConfig", this), t1 = this.baseSanitizeConfig;
                                if (p.isEmpty(e)) return t1;
                                var o = {};
                                for(var r in e)if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    var i = e[r];
                                    p.isObject(i) ? o[r] = Object.assign({}, t1, i) : o[r] = i;
                                }
                                return o;
                            }
                        },
                        {
                            key: "baseSanitizeConfig",
                            get: function() {
                                var e = {};
                                return Array.from(this.inlineTools.values()).forEach(function(t1) {
                                    return Object.assign(e, t1.sanitizeConfig);
                                }), Array.from(this.tunes.values()).forEach(function(t1) {
                                    return Object.assign(e, t1.sanitizeConfig);
                                }), e;
                            }
                        }
                    ]), n;
                }(d.default);
                o.default = m, m.displayName = "BlockTool", b([
                    p.cacheable
                ], m.prototype, "sanitizeConfig", null), b([
                    p.cacheable
                ], m.prototype, "baseSanitizeConfig", null), e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(85),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s) {
                "use strict";
                var l = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = l(r), i = l(i), a = l(a);
                var c = function() {
                    function e(t1) {
                        var n = t1.api;
                        (0, r.default)(this, e), this.CSS = {
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                return {
                                    icon: s.IconChevronDown,
                                    title: this.api.i18n.t("Move down"),
                                    onActivate: function(t1, n) {
                                        return e.handleClick(n);
                                    },
                                    name: "move-down"
                                };
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(e) {
                                var t1 = this, n = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(n + 1);
                                if (!o) {
                                    var r = e.target.closest("." + a.default.CSS.item).querySelector("." + a.default.CSS.itemIcon);
                                    return r.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                        r.classList.remove(t1.CSS.animation);
                                    }, 500);
                                }
                                var i = o.holder, s = i.getBoundingClientRect(), l = Math.abs(window.innerHeight - i.offsetHeight);
                                s.top < window.innerHeight && (l = window.scrollY + i.offsetHeight), window.scrollTo(0, l), this.api.blocks.move(n + 1), this.api.toolbar.toggleBlockSettings(!0);
                            }
                        }
                    ]), e;
                }();
                o.default = c, c.displayName = "MoveDownTune", c.isTune = !0, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function e(t1) {
                        var n = t1.api;
                        (0, r.default)(this, e), this.api = n;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                return {
                                    icon: a.IconCross,
                                    title: this.api.i18n.t("Delete"),
                                    name: "delete",
                                    confirmation: {
                                        title: this.api.i18n.t("Click to delete"),
                                        onActivate: function() {
                                            return e.handleClick();
                                        }
                                    }
                                };
                            }
                        },
                        {
                            key: "handleClick",
                            value: function() {
                                this.api.blocks.delete();
                            }
                        }
                    ]), e;
                }();
                o.default = l, l.displayName = "DeleteTune", l.isTune = !0, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                t1,
                n(2),
                n(3),
                n(85),
                n(37)
            ], void 0 === (i = "function" == typeof (o = function(o, r, i, a, s) {
                "use strict";
                var l = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = l(r), i = l(i), a = l(a);
                var c = function() {
                    function e(t1) {
                        var n = t1.api;
                        (0, r.default)(this, e), this.CSS = {
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i.default)(e, [
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                return {
                                    icon: s.IconChevronUp,
                                    title: this.api.i18n.t("Move up"),
                                    onActivate: function(t1, n) {
                                        return e.handleClick(n);
                                    },
                                    name: "move-up"
                                };
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(e) {
                                var t1 = this, n = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(n), r = this.api.blocks.getBlockByIndex(n - 1);
                                if (0 === n || !o || !r) {
                                    var i = e.target.closest("." + a.default.CSS.item).querySelector("." + a.default.CSS.itemIcon);
                                    return i.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                        i.classList.remove(t1.CSS.animation);
                                    }, 500);
                                }
                                var s, l = o.holder, c = r.holder, u = l.getBoundingClientRect(), f = c.getBoundingClientRect();
                                s = f.top > 0 ? Math.abs(u.top) - Math.abs(f.top) : window.innerHeight - Math.abs(u.top) + Math.abs(f.top), window.scrollBy(0, -1 * s), this.api.blocks.move(n - 1), this.api.toolbar.toggleBlockSettings(!0);
                            }
                        }
                    ]), e;
                }();
                o.default = c, c.displayName = "MoveUpTune", c.isTune = !0, e.exports = t1.default;
            }) ? o.apply(t1, r) : o) || (e.exports = i);
        },
        function(e, t1) {
            e.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(var(--window-scroll-offset)*-1);position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-toolbar__plus{position:static}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__settings-btn{margin-left:3px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (min-width:651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-toolbar__settings-btn{position:static}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(var(--gap)*-1 + var(--popover-height)*-1)}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{--y-offset:8px;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translateX(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translateX(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translateX(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover:hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-arrow,.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-arrow svg,.ce-inline-toolbar__dropdown-content svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.ce-inline-tool svg{width:20px;height:20px}@media (max-width:650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover:hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool{border-radius:0;line-height:normal}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width:650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width:650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;z-index:2;--gap:8px}@media (min-width:651px){.ce-settings{position:absolute;top:calc(26px + var(--gap));left:0}.ce-settings--opened-top{top:calc(var(--gap)*-1 + var(--popover-height)*-1)}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.ce-settings__button svg{width:20px;height:20px}@media (max-width:650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover:hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.cdx-settings-button svg{width:20px;height:20px}@media (max-width:650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover:hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button{min-width:26px;min-height:26px}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width:650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}@media (hover:hover){.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;pointer-events:none;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--opened{opacity:1;max-height:270px;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{--offset:5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset)*2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}@media (hover:hover){.ce-popover__item:hover:not(.ce-popover__item--no-visible-hover){background-color:#eff2f5}.ce-popover__item:hover .ce-popover__item-icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover__item--disabled{color:#707684;cursor:default;pointer-events:none}.ce-popover__item--disabled .ce-popover__item-icon{-webkit-box-shadow:0 0 0 1px #eff0f1;box-shadow:0 0 0 1px #eff0f1}.ce-popover__item--focused:not(.ce-popover__item--no-visible-focus){-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item--active{background:rgba(56,138,229,.1);color:#388ae5}.ce-popover__item--confirmation{background:#e24a4a}.ce-popover__item--confirmation .ce-popover__item-icon{color:#e24a4a}.ce-popover__item--confirmation .ce-popover__item-label{color:#fff}@media (hover:hover){.ce-popover__item--confirmation:not(.ce-popover__item--no-visible-hover):hover{background:#ce4343}}.ce-popover__item--confirmation:not(.ce-popover__item--no-visible-focus).ce-popover__item--focused{background:#ce4343!important}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-popover__item-icon svg{width:20px;height:20px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}.ce-popover__item-icon svg{width:28px;height:28px}}.ce-popover__item-label{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__item--active .ce-popover__item-icon,.ce-popover__item--confirmation .ce-popover__item-icon,.ce-popover__item--focused .ce-popover__item-icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width:651px){.ce-popover__custom-content:not(:empty){margin-top:5px;padding:0}}.ce-popover__custom-content--hidden{display:none}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}';
        },
        function(e, t1, n) {
            "use strict";
            n.r(t1), n.d(t1, "nanoid", function() {
                return s;
            }), n.d(t1, "customAlphabet", function() {
                return a;
            }), n.d(t1, "customRandom", function() {
                return i;
            }), n.d(t1, "urlAlphabet", function() {
                return o;
            }), n.d(t1, "random", function() {
                return r;
            });
            let o = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
            let r = (e)=>crypto.getRandomValues(new Uint8Array(e)), i = (e, t1, n)=>{
                let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, r = -~(1.6 * o * t1 / e.length);
                return ()=>{
                    let i = "";
                    for(;;){
                        let a = n(r), s = r;
                        for(; s--;)if (i += e[a[s] & o] || "", i.length === t1) return i;
                    }
                };
            }, a = (e, t1)=>i(e, t1, r), s = (e = 21)=>{
                let t1 = "", n = crypto.getRandomValues(new Uint8Array(e));
                for(; e--;){
                    let o = 63 & n[e];
                    t1 += o < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o < 63 ? "_" : "-";
                }
                return t1;
            };
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}]},["e2DJy","46yBE"], "46yBE", "parcelRequire8fd9")

//# sourceMappingURL=index.13e3849b.js.map
