import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/highcharts/highcharts.js
var require_highcharts = __commonJS({
  "node_modules/highcharts/highcharts.js"(exports, module) {
    (function(U, M) {
      "object" === typeof module && module.exports ? (M["default"] = M, module.exports = U.document ? M(U) : M) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function() {
        return M(U);
      }) : (U.Highcharts && U.Highcharts.error(16, true), U.Highcharts = M(U));
    })("undefined" !== typeof window ? window : exports, function(U) {
      function M(a2, y, I, L) {
        a2.hasOwnProperty(y) || (a2[y] = L.apply(null, I), "function" === typeof CustomEvent && U.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: y, module: a2[y] } })));
      }
      var a = {};
      M(a, "Core/Globals.js", [], function() {
        var a2;
        (function(a3) {
          a3.SVG_NS = "http://www.w3.org/2000/svg";
          a3.product = "Highcharts";
          a3.version = "11.1.0";
          a3.win = "undefined" !== typeof U ? U : {};
          a3.doc = a3.win.document;
          a3.svg = a3.doc && a3.doc.createElementNS && !!a3.doc.createElementNS(a3.SVG_NS, "svg").createSVGRect;
          a3.userAgent = a3.win.navigator && a3.win.navigator.userAgent || "";
          a3.isChrome = -1 !== a3.userAgent.indexOf("Chrome");
          a3.isFirefox = -1 !== a3.userAgent.indexOf("Firefox");
          a3.isMS = /(edge|msie|trident)/i.test(a3.userAgent) && !a3.win.opera;
          a3.isSafari = !a3.isChrome && -1 !== a3.userAgent.indexOf("Safari");
          a3.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a3.userAgent);
          a3.isWebKit = -1 !== a3.userAgent.indexOf("AppleWebKit");
          a3.deg2rad = 2 * Math.PI / 360;
          a3.hasBidiBug = a3.isFirefox && 4 > parseInt(a3.userAgent.split("Firefox/")[1], 10);
          a3.hasTouch = !!a3.win.TouchEvent;
          a3.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
          a3.noop = function() {
          };
          a3.supportsPassiveEvents = function() {
            let x = false;
            if (!a3.isMS) {
              const y = Object.defineProperty({}, "passive", { get: function() {
                x = true;
              } });
              a3.win.addEventListener && a3.win.removeEventListener && (a3.win.addEventListener("testPassive", a3.noop, y), a3.win.removeEventListener("testPassive", a3.noop, y));
            }
            return x;
          }();
          a3.charts = [];
          a3.dateFormats = {};
          a3.seriesTypes = {};
          a3.symbolSizes = {};
          a3.chartCount = 0;
        })(a2 || (a2 = {}));
        "";
        return a2;
      });
      M(a, "Core/Utilities.js", [a["Core/Globals.js"]], function(a2) {
        function x(c, b2, f2, k2) {
          const n = b2 ? "Highcharts error" : "Highcharts warning";
          32 === c && (c = `${n}: Deprecated member`);
          const r2 = u(c);
          let e2 = r2 ? `${n} #${c}: www.highcharts.com/errors/${c}/` : c.toString();
          if ("undefined" !== typeof k2) {
            let c2 = "";
            r2 && (e2 += "?");
            E(k2, function(b3, n2) {
              c2 += `
 - ${n2}: ${b3}`;
              r2 && (e2 += encodeURI(n2) + "=" + encodeURI(b3));
            });
            e2 += c2;
          }
          d(a2, "displayError", { chart: f2, code: c, message: e2, params: k2 }, function() {
            if (b2)
              throw Error(e2);
            q.console && -1 === x.messages.indexOf(e2) && console.warn(e2);
          });
          x.messages.push(e2);
        }
        function I(c, b2) {
          return parseInt(c, b2 || 10);
        }
        function L(c) {
          return "string" === typeof c;
        }
        function C(c) {
          c = Object.prototype.toString.call(c);
          return "[object Array]" === c || "[object Array Iterator]" === c;
        }
        function z(c, b2) {
          return !!c && "object" === typeof c && (!b2 || !C(c));
        }
        function H(c) {
          return z(c) && "number" === typeof c.nodeType;
        }
        function B(c) {
          const b2 = c && c.constructor;
          return !(!z(c, true) || H(c) || !b2 || !b2.name || "Object" === b2.name);
        }
        function u(c) {
          return "number" === typeof c && !isNaN(c) && Infinity > c && -Infinity < c;
        }
        function v(c) {
          return "undefined" !== typeof c && null !== c;
        }
        function l(c, b2, f2) {
          const n = L(b2) && !v(f2);
          let d2;
          const k2 = (b3, f3) => {
            v(b3) ? c.setAttribute(f3, b3) : n ? (d2 = c.getAttribute(f3)) || "class" !== f3 || (d2 = c.getAttribute(f3 + "Name")) : c.removeAttribute(f3);
          };
          L(b2) ? k2(f2, b2) : E(b2, k2);
          return d2;
        }
        function p(c) {
          return C(c) ? c : [c];
        }
        function t(c, b2) {
          let n;
          c || (c = {});
          for (n in b2)
            c[n] = b2[n];
          return c;
        }
        function m() {
          const c = arguments, b2 = c.length;
          for (let n = 0; n < b2; n++) {
            const b3 = c[n];
            if ("undefined" !== typeof b3 && null !== b3)
              return b3;
          }
        }
        function h(c, b2) {
          a2.isMS && !a2.svg && b2 && v(b2.opacity) && (b2.filter = `alpha(opacity=${100 * b2.opacity})`);
          t(c.style, b2);
        }
        function g(c) {
          return Math.pow(10, Math.floor(Math.log(c) / Math.LN10));
        }
        function e(c, b2) {
          return 1e14 < c ? c : parseFloat(c.toPrecision(b2 || 14));
        }
        function w(c, b2, f2) {
          let n;
          if ("width" === b2)
            return b2 = Math.min(c.offsetWidth, c.scrollWidth), f2 = c.getBoundingClientRect && c.getBoundingClientRect().width, f2 < b2 && f2 >= b2 - 1 && (b2 = Math.floor(f2)), Math.max(0, b2 - (w(c, "padding-left", true) || 0) - (w(c, "padding-right", true) || 0));
          if ("height" === b2)
            return Math.max(0, Math.min(c.offsetHeight, c.scrollHeight) - (w(c, "padding-top", true) || 0) - (w(c, "padding-bottom", true) || 0));
          if (c = q.getComputedStyle(c, void 0))
            n = c.getPropertyValue(b2), m(f2, "opacity" !== b2) && (n = I(n));
          return n;
        }
        function E(c, b2, f2) {
          for (const n in c)
            Object.hasOwnProperty.call(
              c,
              n
            ) && b2.call(f2 || c[n], c[n], n, c);
        }
        function F(c, b2, f2) {
          function n(b3, n2) {
            const f3 = c.removeEventListener;
            f3 && f3.call(c, b3, n2, false);
          }
          function d2(f3) {
            let d3, K;
            c.nodeName && (b2 ? (d3 = {}, d3[b2] = true) : d3 = f3, E(d3, function(c2, b3) {
              if (f3[b3])
                for (K = f3[b3].length; K--; )
                  n(b3, f3[b3][K].fn);
            }));
          }
          var k2 = "function" === typeof c && c.prototype || c;
          if (Object.hasOwnProperty.call(k2, "hcEvents")) {
            const c2 = k2.hcEvents;
            b2 ? (k2 = c2[b2] || [], f2 ? (c2[b2] = k2.filter(function(c3) {
              return f2 !== c3.fn;
            }), n(b2, f2)) : (d2(c2), c2[b2] = [])) : (d2(c2), delete k2.hcEvents);
          }
        }
        function d(c, b2, f2, d2) {
          f2 = f2 || {};
          if (r.createEvent && (c.dispatchEvent || c.fireEvent && c !== a2)) {
            var n = r.createEvent("Events");
            n.initEvent(b2, true, true);
            f2 = t(n, f2);
            c.dispatchEvent ? c.dispatchEvent(f2) : c.fireEvent(b2, f2);
          } else if (c.hcEvents) {
            f2.target || t(f2, { preventDefault: function() {
              f2.defaultPrevented = true;
            }, target: c, type: b2 });
            n = [];
            let d3 = c, K = false;
            for (; d3.hcEvents; )
              Object.hasOwnProperty.call(d3, "hcEvents") && d3.hcEvents[b2] && (n.length && (K = true), n.unshift.apply(n, d3.hcEvents[b2])), d3 = Object.getPrototypeOf(d3);
            K && n.sort((c2, b3) => c2.order - b3.order);
            n.forEach((b3) => {
              false === b3.fn.call(c, f2) && f2.preventDefault();
            });
          }
          d2 && !f2.defaultPrevented && d2.call(c, f2);
        }
        const { charts: k, doc: r, win: q } = a2;
        (x || (x = {})).messages = [];
        Math.easeInOutSine = function(c) {
          return -0.5 * (Math.cos(Math.PI * c) - 1);
        };
        var G = Array.prototype.find ? function(c, b2) {
          return c.find(b2);
        } : function(c, b2) {
          let f2;
          const n = c.length;
          for (f2 = 0; f2 < n; f2++)
            if (b2(c[f2], f2))
              return c[f2];
        };
        E({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(c, b2) {
          a2[b2] = function(f2) {
            x(32, false, void 0, { [`Highcharts.${b2}`]: `use Array.${c}` });
            return Array.prototype[c].apply(f2, [].slice.call(
              arguments,
              1
            ));
          };
        });
        let b;
        const f = function() {
          const c = Math.random().toString(36).substring(2, 9) + "-";
          let f2 = 0;
          return function() {
            return "highcharts-" + (b ? "" : c) + f2++;
          };
        }();
        q.jQuery && (q.jQuery.fn.highcharts = function() {
          const c = [].slice.call(arguments);
          if (this[0])
            return c[0] ? (new a2[L(c[0]) ? c.shift() : "Chart"](this[0], c[0], c[1]), this) : k[l(this[0], "data-highcharts-chart")];
        });
        G = { addEvent: function(c, b2, f2, d2 = {}) {
          var n = "function" === typeof c && c.prototype || c;
          Object.hasOwnProperty.call(n, "hcEvents") || (n.hcEvents = {});
          n = n.hcEvents;
          a2.Point && c instanceof a2.Point && c.series && c.series.chart && (c.series.chart.runTrackerClick = true);
          const k2 = c.addEventListener;
          k2 && k2.call(c, b2, f2, a2.supportsPassiveEvents ? { passive: void 0 === d2.passive ? -1 !== b2.indexOf("touch") : d2.passive, capture: false } : false);
          n[b2] || (n[b2] = []);
          n[b2].push({ fn: f2, order: "number" === typeof d2.order ? d2.order : Infinity });
          n[b2].sort((c2, b3) => c2.order - b3.order);
          return function() {
            F(c, b2, f2);
          };
        }, arrayMax: function(c) {
          let b2 = c.length, f2 = c[0];
          for (; b2--; )
            c[b2] > f2 && (f2 = c[b2]);
          return f2;
        }, arrayMin: function(c) {
          let b2 = c.length, f2 = c[0];
          for (; b2--; )
            c[b2] < f2 && (f2 = c[b2]);
          return f2;
        }, attr: l, clamp: function(c, b2, f2) {
          return c > b2 ? c < f2 ? c : f2 : b2;
        }, clearTimeout: function(c) {
          v(c) && clearTimeout(c);
        }, correctFloat: e, createElement: function(c, b2, f2, d2, K) {
          c = r.createElement(c);
          b2 && t(c, b2);
          K && h(c, { padding: "0", border: "none", margin: "0" });
          f2 && h(c, f2);
          d2 && d2.appendChild(c);
          return c;
        }, css: h, defined: v, destroyObjectProperties: function(c, b2) {
          E(c, function(f2, n) {
            f2 && f2 !== b2 && f2.destroy && f2.destroy();
            delete c[n];
          });
        }, diffObjects: function(c, b2, f2, d2) {
          function n(b3, c2, K, k3) {
            const A = f2 ? c2 : b3;
            E(b3, function(f3, q2) {
              if (!k3 && d2 && -1 < d2.indexOf(q2) && c2[q2]) {
                f3 = p(f3);
                K[q2] = [];
                for (let b4 = 0; b4 < Math.max(f3.length, c2[q2].length); b4++)
                  c2[q2][b4] && (void 0 === f3[b4] ? K[q2][b4] = c2[q2][b4] : (K[q2][b4] = {}, n(f3[b4], c2[q2][b4], K[q2][b4], k3 + 1)));
              } else if (z(f3, true) && !f3.nodeType)
                K[q2] = C(f3) ? [] : {}, n(f3, c2[q2] || {}, K[q2], k3 + 1), 0 !== Object.keys(K[q2]).length || "colorAxis" === q2 && 0 === k3 || delete K[q2];
              else if (b3[q2] !== c2[q2] || q2 in b3 && !(q2 in c2))
                K[q2] = A[q2];
            });
          }
          const k2 = {};
          n(c, b2, k2, 0);
          return k2;
        }, discardElement: function(b2) {
          b2 && b2.parentElement && b2.parentElement.removeChild(b2);
        }, erase: function(b2, f2) {
          let c = b2.length;
          for (; c--; )
            if (b2[c] === f2) {
              b2.splice(c, 1);
              break;
            }
        }, error: x, extend: t, extendClass: function(b2, f2) {
          const c = function() {
          };
          c.prototype = new b2();
          t(c.prototype, f2);
          return c;
        }, find: G, fireEvent: d, getClosestDistance: function(b2, f2) {
          const c = !f2;
          let d2, n, k2, q2;
          b2.forEach((b3) => {
            if (1 < b3.length)
              for (q2 = n = b3.length - 1; 0 < q2; q2--)
                k2 = b3[q2] - b3[q2 - 1], 0 > k2 && !c ? (null === f2 || void 0 === f2 ? void 0 : f2(), f2 = void 0) : k2 && ("undefined" === typeof d2 || k2 < d2) && (d2 = k2);
          });
          return d2;
        }, getMagnitude: g, getNestedProperty: function(b2, f2) {
          for (b2 = b2.split("."); b2.length && v(f2); ) {
            const c = b2.shift();
            if ("undefined" === typeof c || "__proto__" === c)
              return;
            if ("this" === c) {
              let b3;
              z(f2) && (b3 = f2["@this"]);
              return null !== b3 && void 0 !== b3 ? b3 : f2;
            }
            f2 = f2[c];
            if (!v(f2) || "function" === typeof f2 || "number" === typeof f2.nodeType || f2 === q)
              return;
          }
          return f2;
        }, getStyle: w, inArray: function(b2, f2, d2) {
          x(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
          return f2.indexOf(b2, d2);
        }, insertItem: function(b2, f2) {
          const c = b2.options.index, d2 = f2.length;
          let n;
          for (n = b2.options.isInternal ? d2 : 0; n < d2 + 1; n++)
            if (!f2[n] || u(c) && c < m(f2[n].options.index, f2[n]._i) || f2[n].options.isInternal) {
              f2.splice(
                n,
                0,
                b2
              );
              break;
            }
          return n;
        }, isArray: C, isClass: B, isDOMElement: H, isFunction: function(b2) {
          return "function" === typeof b2;
        }, isNumber: u, isObject: z, isString: L, keys: function(b2) {
          x(32, false, void 0, { "Highcharts.keys": "use Object.keys" });
          return Object.keys(b2);
        }, merge: function() {
          let b2, f2 = arguments, d2 = {};
          const k2 = function(b3, c) {
            "object" !== typeof b3 && (b3 = {});
            E(c, function(f3, d3) {
              "__proto__" !== d3 && "constructor" !== d3 && (!z(f3, true) || B(f3) || H(f3) ? b3[d3] = c[d3] : b3[d3] = k2(b3[d3] || {}, f3));
            });
            return b3;
          };
          true === f2[0] && (d2 = f2[1], f2 = Array.prototype.slice.call(f2, 2));
          const K = f2.length;
          for (b2 = 0; b2 < K; b2++)
            d2 = k2(d2, f2[b2]);
          return d2;
        }, normalizeTickInterval: function(b2, f2, d2, k2, K) {
          let c = b2;
          d2 = m(d2, g(b2));
          const n = b2 / d2;
          f2 || (f2 = K ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === k2 && (1 === d2 ? f2 = f2.filter(function(b3) {
            return 0 === b3 % 1;
          }) : 0.1 >= d2 && (f2 = [1 / d2])));
          for (k2 = 0; k2 < f2.length && !(c = f2[k2], K && c * d2 >= b2 || !K && n <= (f2[k2] + (f2[k2 + 1] || f2[k2])) / 2); k2++)
            ;
          return c = e(c * d2, -Math.round(Math.log(1e-3) / Math.LN10));
        }, objectEach: E, offset: function(b2) {
          const c = r.documentElement;
          b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : {
            top: 0,
            left: 0,
            width: 0,
            height: 0
          };
          return { top: b2.top + (q.pageYOffset || c.scrollTop) - (c.clientTop || 0), left: b2.left + (q.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), width: b2.width, height: b2.height };
        }, pad: function(b2, f2, d2) {
          return Array((f2 || 2) + 1 - String(b2).replace("-", "").length).join(d2 || "0") + b2;
        }, pick: m, pInt: I, pushUnique: function(b2, f2) {
          return 0 > b2.indexOf(f2) && !!b2.push(f2);
        }, relativeLength: function(b2, f2, d2) {
          return /%$/.test(b2) ? f2 * parseFloat(b2) / 100 + (d2 || 0) : parseFloat(b2);
        }, removeEvent: F, splat: p, stableSort: function(b2, f2) {
          const c = b2.length;
          let d2, k2;
          for (k2 = 0; k2 < c; k2++)
            b2[k2].safeI = k2;
          b2.sort(function(b3, c2) {
            d2 = f2(b3, c2);
            return 0 === d2 ? b3.safeI - c2.safeI : d2;
          });
          for (k2 = 0; k2 < c; k2++)
            delete b2[k2].safeI;
        }, syncTimeout: function(b2, f2, d2) {
          if (0 < f2)
            return setTimeout(b2, f2, d2);
          b2.call(0, d2);
          return -1;
        }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: f, useSerialIds: function(c) {
          return b = m(c, b);
        }, wrap: function(b2, f2, d2) {
          const c = b2[f2];
          b2[f2] = function() {
            const b3 = arguments, f3 = this;
            return d2.apply(this, [function() {
              return c.apply(
                f3,
                arguments.length ? arguments : b3
              );
            }].concat([].slice.call(arguments)));
          };
        } };
        "";
        return G;
      });
      M(a, "Core/Chart/ChartDefaults.js", [], function() {
        return {
          alignThresholds: false,
          panning: { enabled: false, type: "x" },
          styledMode: false,
          borderRadius: 0,
          colorCount: 10,
          allowMutatingData: true,
          ignoreHiddenSeries: true,
          spacing: [10, 10, 15, 10],
          resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } },
          reflow: true,
          type: "line",
          zooming: { singleTouch: false, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } },
          width: null,
          height: null,
          borderColor: "#334eff",
          backgroundColor: "#ffffff",
          plotBorderColor: "#cccccc"
        };
      });
      M(a, "Core/Color/Color.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y) {
        const { isNumber: x, merge: L, pInt: C } = y;
        class z {
          static parse(a3) {
            return a3 ? new z(a3) : z.None;
          }
          constructor(x2) {
            this.rgba = [NaN, NaN, NaN, NaN];
            this.input = x2;
            const B = a2.Color;
            if (B && B !== z)
              return new B(x2);
            this.init(x2);
          }
          init(a3) {
            let B;
            let u;
            if ("object" === typeof a3 && "undefined" !== typeof a3.stops)
              this.stops = a3.stops.map((l2) => new z(l2[1]));
            else if ("string" === typeof a3) {
              this.input = a3 = z.names[a3.toLowerCase()] || a3;
              if ("#" === a3.charAt(0)) {
                var v = a3.length;
                var l = parseInt(a3.substr(1), 16);
                7 === v ? B = [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255, 1] : 4 === v && (B = [(l & 3840) >> 4 | (l & 3840) >> 8, (l & 240) >> 4 | l & 240, (l & 15) << 4 | l & 15, 1]);
              }
              if (!B)
                for (l = z.parsers.length; l-- && !B; )
                  u = z.parsers[l], (v = u.regex.exec(a3)) && (B = u.parse(v));
            }
            B && (this.rgba = B);
          }
          get(a3) {
            const B = this.input, u = this.rgba;
            if ("object" === typeof B && "undefined" !== typeof this.stops) {
              const v = L(B);
              v.stops = [].slice.call(v.stops);
              this.stops.forEach((l, p) => {
                v.stops[p] = [
                  v.stops[p][0],
                  l.get(a3)
                ];
              });
              return v;
            }
            return u && x(u[0]) ? "rgb" === a3 || !a3 && 1 === u[3] ? "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")" : "a" === a3 ? `${u[3]}` : "rgba(" + u.join(",") + ")" : B;
          }
          brighten(a3) {
            const B = this.rgba;
            if (this.stops)
              this.stops.forEach(function(u) {
                u.brighten(a3);
              });
            else if (x(a3) && 0 !== a3)
              for (let u = 0; 3 > u; u++)
                B[u] += C(255 * a3), 0 > B[u] && (B[u] = 0), 255 < B[u] && (B[u] = 255);
            return this;
          }
          setOpacity(a3) {
            this.rgba[3] = a3;
            return this;
          }
          tweenTo(a3, B) {
            const u = this.rgba, v = a3.rgba;
            if (!x(u[0]) || !x(v[0]))
              return a3.input || "none";
            a3 = 1 !== v[3] || 1 !== u[3];
            return (a3 ? "rgba(" : "rgb(") + Math.round(v[0] + (u[0] - v[0]) * (1 - B)) + "," + Math.round(v[1] + (u[1] - v[1]) * (1 - B)) + "," + Math.round(v[2] + (u[2] - v[2]) * (1 - B)) + (a3 ? "," + (v[3] + (u[3] - v[3]) * (1 - B)) : "") + ")";
          }
        }
        z.names = { white: "#ffffff", black: "#000000" };
        z.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(a3) {
          return [C(a3[1]), C(a3[2]), C(a3[3]), parseFloat(a3[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(a3) {
          return [
            C(a3[1]),
            C(a3[2]),
            C(a3[3]),
            1
          ];
        } }];
        z.None = new z("");
        "";
        return z;
      });
      M(a, "Core/Color/Palettes.js", [], function() {
        return { colors: "#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(" ") };
      });
      M(a, "Core/Time.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y) {
        const { win: x } = a2, { defined: L, error: C, extend: z, isObject: H, merge: B, objectEach: u, pad: v, pick: l, splat: p, timeUnits: t } = y, m = a2.isSafari && x.Intl && x.Intl.DateTimeFormat.prototype.formatRange, h = a2.isSafari && x.Intl && !x.Intl.DateTimeFormat.prototype.formatRange;
        class g {
          constructor(e) {
            this.options = {};
            this.variableTimezone = this.useUTC = false;
            this.Date = x.Date;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.update(e);
          }
          get(e, g2) {
            if (this.variableTimezone || this.timezoneOffset) {
              const h2 = g2.getTime(), m2 = h2 - this.getTimezoneOffset(g2);
              g2.setTime(m2);
              e = g2["getUTC" + e]();
              g2.setTime(h2);
              return e;
            }
            return this.useUTC ? g2["getUTC" + e]() : g2["get" + e]();
          }
          set(e, g2, h2) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === e || "Seconds" === e || "Minutes" === e && 0 === this.getTimezoneOffset(g2) % 36e5)
                return g2["setUTC" + e](h2);
              var w = this.getTimezoneOffset(g2);
              w = g2.getTime() - w;
              g2.setTime(w);
              g2["setUTC" + e](h2);
              e = this.getTimezoneOffset(g2);
              w = g2.getTime() + e;
              return g2.setTime(w);
            }
            return this.useUTC || m && "FullYear" === e ? g2["setUTC" + e](h2) : g2["set" + e](h2);
          }
          update(e = {}) {
            const g2 = l(e.useUTC, true);
            this.options = e = B(true, this.options, e);
            this.Date = e.Date || x.Date || Date;
            this.timezoneOffset = (this.useUTC = g2) && e.timezoneOffset || void 0;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.variableTimezone = g2 && !(!e.getTimezoneOffset && !e.timezone);
          }
          makeTime(e, g2, m2, p2, d, k) {
            let r, q, w;
            this.useUTC ? (r = this.Date.UTC.apply(0, arguments), q = this.getTimezoneOffset(r), r += q, w = this.getTimezoneOffset(r), q !== w ? r += w - q : q - 36e5 !== this.getTimezoneOffset(r - 36e5) || h || (r -= 36e5)) : r = new this.Date(e, g2, l(m2, 1), l(p2, 0), l(d, 0), l(k, 0)).getTime();
            return r;
          }
          timezoneOffsetFunction() {
            const e = this, g2 = this.options, h2 = g2.getTimezoneOffset, m2 = g2.moment || x.moment;
            if (!this.useUTC)
              return function(d) {
                return 6e4 * new Date(d.toString()).getTimezoneOffset();
              };
            if (g2.timezone) {
              if (m2)
                return function(d) {
                  return 6e4 * -m2.tz(d, g2.timezone).utcOffset();
                };
              C(25);
            }
            return this.useUTC && h2 ? function(d) {
              return 6e4 * h2(d.valueOf());
            } : function() {
              return 6e4 * (e.timezoneOffset || 0);
            };
          }
          dateFormat(e, g2, h2) {
            if (!L(g2) || isNaN(g2))
              return a2.defaultOptions.lang && a2.defaultOptions.lang.invalidDate || "";
            e = l(e, "%Y-%m-%d %H:%M:%S");
            const m2 = this;
            var d = new this.Date(g2);
            const k = this.get("Hours", d), r = this.get("Day", d), q = this.get("Date", d), w = this.get("Month", d), b = this.get("FullYear", d), f = a2.defaultOptions.lang, c = f && f.weekdays, n = f && f.shortWeekdays;
            d = z({ a: n ? n[r] : c[r].substr(0, 3), A: c[r], d: v(q), e: v(q, 2, " "), w: r, b: f.shortMonths[w], B: f.months[w], m: v(w + 1), o: w + 1, y: b.toString().substr(2, 2), Y: b, H: v(k), k, I: v(k % 12 || 12), l: k % 12 || 12, M: v(this.get("Minutes", d)), p: 12 > k ? "AM" : "PM", P: 12 > k ? "am" : "pm", S: v(d.getSeconds()), L: v(Math.floor(g2 % 1e3), 3) }, a2.dateFormats);
            u(d, function(b2, c2) {
              for (; -1 !== e.indexOf("%" + c2); )
                e = e.replace("%" + c2, "function" === typeof b2 ? b2.call(m2, g2) : b2);
            });
            return h2 ? e.substr(0, 1).toUpperCase() + e.substr(1) : e;
          }
          resolveDTLFormat(e) {
            return H(e, true) ? e : (e = p(e), {
              main: e[0],
              from: e[1],
              to: e[2]
            });
          }
          getTimeTicks(e, g2, h2, m2) {
            const d = this, k = [], r = {};
            var q = new d.Date(g2);
            const w = e.unitRange, b = e.count || 1;
            let f;
            m2 = l(m2, 1);
            if (L(g2)) {
              d.set("Milliseconds", q, w >= t.second ? 0 : b * Math.floor(d.get("Milliseconds", q) / b));
              w >= t.second && d.set("Seconds", q, w >= t.minute ? 0 : b * Math.floor(d.get("Seconds", q) / b));
              w >= t.minute && d.set("Minutes", q, w >= t.hour ? 0 : b * Math.floor(d.get("Minutes", q) / b));
              w >= t.hour && d.set("Hours", q, w >= t.day ? 0 : b * Math.floor(d.get("Hours", q) / b));
              w >= t.day && d.set("Date", q, w >= t.month ? 1 : Math.max(1, b * Math.floor(d.get(
                "Date",
                q
              ) / b)));
              if (w >= t.month) {
                d.set("Month", q, w >= t.year ? 0 : b * Math.floor(d.get("Month", q) / b));
                var c = d.get("FullYear", q);
              }
              w >= t.year && d.set("FullYear", q, c - c % b);
              w === t.week && (c = d.get("Day", q), d.set("Date", q, d.get("Date", q) - c + m2 + (c < m2 ? -7 : 0)));
              c = d.get("FullYear", q);
              m2 = d.get("Month", q);
              const n = d.get("Date", q), e2 = d.get("Hours", q);
              g2 = q.getTime();
              !d.variableTimezone && d.useUTC || !L(h2) || (f = h2 - g2 > 4 * t.month || d.getTimezoneOffset(g2) !== d.getTimezoneOffset(h2));
              g2 = q.getTime();
              for (q = 1; g2 < h2; )
                k.push(g2), g2 = w === t.year ? d.makeTime(c + q * b, 0) : w === t.month ? d.makeTime(c, m2 + q * b) : !f || w !== t.day && w !== t.week ? f && w === t.hour && 1 < b ? d.makeTime(c, m2, n, e2 + q * b) : g2 + w * b : d.makeTime(c, m2, n + q * b * (w === t.day ? 1 : 7)), q++;
              k.push(g2);
              w <= t.hour && 1e4 > k.length && k.forEach(function(b2) {
                0 === b2 % 18e5 && "000000000" === d.dateFormat("%H%M%S%L", b2) && (r[b2] = "day");
              });
            }
            k.info = z(e, { higherRanks: r, totalRange: w * b });
            return k;
          }
          getDateFormat(e, g2, h2, m2) {
            const d = this.dateFormat("%m-%d %H:%M:%S.%L", g2), k = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 };
            let r, q = "millisecond";
            for (r in t) {
              if (e === t.week && +this.dateFormat(
                "%w",
                g2
              ) === h2 && "00:00:00.000" === d.substr(6)) {
                r = "week";
                break;
              }
              if (t[r] > e) {
                r = q;
                break;
              }
              if (k[r] && d.substr(k[r]) !== "01-01 00:00:00.000".substr(k[r]))
                break;
              "week" !== r && (q = r);
            }
            return this.resolveDTLFormat(m2[r]).main;
          }
        }
        "";
        return g;
      });
      M(a, "Core/Defaults.js", [a["Core/Chart/ChartDefaults.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palettes.js"], a["Core/Time.js"], a["Core/Utilities.js"]], function(a2, y, I, L, C, z) {
        const { isTouchDevice: x, svg: B } = I, { merge: u } = z, v = {
          colors: L.colors,
          symbols: [
            "circle",
            "diamond",
            "square",
            "triangle",
            "triangle-down"
          ],
          lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " },
          global: {},
          time: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: true
          },
          chart: a2,
          title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
          subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "center", widthAdjust: -44 },
          caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" },
          plotOptions: {},
          legend: {
            enabled: true,
            align: "center",
            alignColumns: true,
            className: "highcharts-no-tooltip",
            layout: "horizontal",
            itemMarginBottom: 2,
            itemMarginTop: 2,
            labelFormatter: function() {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" },
            itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" },
            itemHoverStyle: { color: "#000000" },
            itemHiddenStyle: { color: "#666666", textDecoration: "line-through" },
            shadow: false,
            itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
            squareSymbol: true,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: { style: { fontSize: "0.8em", fontWeight: "bold" } }
          },
          loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } },
          tooltip: {
            enabled: true,
            animation: B,
            borderRadius: 3,
            dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: false,
            snap: x ? 25 : 10,
            headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: "#ffffff",
            borderWidth: void 0,
            shadow: true,
            stickOnContact: false,
            style: { color: "#333333", cursor: "default", fontSize: "0.8em" },
            useHTML: false
          },
          credits: {
            enabled: true,
            href: "https://www.highcharts.com?credits",
            position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
            style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" },
            text: "Highcharts.com"
          }
        };
        v.chart.styledMode = false;
        "";
        const l = new C(v.time);
        a2 = { defaultOptions: v, defaultTime: l, getOptions: function() {
          return v;
        }, setOptions: function(a3) {
          u(true, v, a3);
          if (a3.time || a3.global)
            I.time ? I.time.update(u(v.global, v.time, a3.global, a3.time)) : I.time = l;
          return v;
        } };
        "";
        return a2;
      });
      M(a, "Core/Animation/Fx.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { parse: x } = a2, { win: C } = y, { isNumber: z, objectEach: H } = I;
        class B {
          constructor(a3, v, l) {
            this.pos = NaN;
            this.options = v;
            this.elem = a3;
            this.prop = l;
          }
          dSetter() {
            var a3 = this.paths;
            const v = a3 && a3[0];
            a3 = a3 && a3[1];
            const l = this.now || 0;
            let p = [];
            if (1 !== l && v && a3)
              if (v.length === a3.length && 1 > l)
                for (let t = 0; t < a3.length; t++) {
                  const m = v[t], h = a3[t], g = [];
                  for (let e = 0; e < h.length; e++) {
                    const w = m[e], a4 = h[e];
                    z(w) && z(a4) && ("A" !== h[0] || 4 !== e && 5 !== e) ? g[e] = w + l * (a4 - w) : g[e] = a4;
                  }
                  p.push(g);
                }
              else
                p = a3;
            else
              p = this.toD || [];
            this.elem.attr("d", p, void 0, true);
          }
          update() {
            const a3 = this.elem, v = this.prop, l = this.now, p = this.options.step;
            if (this[v + "Setter"])
              this[v + "Setter"]();
            else
              a3.attr ? a3.element && a3.attr(v, l, null, true) : a3.style[v] = l + this.unit;
            p && p.call(a3, l, this);
          }
          run(a3, v, l) {
            const p = this, t = p.options, m = function(e) {
              return m.stopped ? false : p.step(e);
            }, h = C.requestAnimationFrame || function(e) {
              setTimeout(e, 13);
            }, g = function() {
              for (let e = 0; e < B.timers.length; e++)
                B.timers[e]() || B.timers.splice(e--, 1);
              B.timers.length && h(g);
            };
            a3 !== v || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = a3, this.end = v, this.unit = l, this.now = this.start, this.pos = 0, m.elem = this.elem, m.prop = this.prop, m() && 1 === B.timers.push(m) && h(g)) : (delete t.curAnim[this.prop], t.complete && 0 === Object.keys(t.curAnim).length && t.complete.call(this.elem));
          }
          step(a3) {
            const v = +/* @__PURE__ */ new Date(), l = this.options, p = this.elem, t = l.complete, m = l.duration, h = l.curAnim;
            let g;
            p.attr && !p.element ? a3 = false : a3 || v >= m + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), g = h[this.prop] = true, H(h, function(e) {
              true !== e && (g = false);
            }), g && t && t.call(p), a3 = false) : (this.pos = l.easing((v - this.startTime) / m), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a3 = true);
            return a3;
          }
          initPath(a3, v, l) {
            function p(d, k) {
              for (; d.length < E; ) {
                var r = d[0];
                const q = k[E - d.length];
                q && "M" === r[0] && (d[0] = "C" === q[0] ? ["C", r[1], r[2], r[1], r[2], r[1], r[2]] : ["L", r[1], r[2]]);
                d.unshift(r);
                g && (r = d.pop(), d.push(d[d.length - 1], r));
              }
            }
            function t(d, k) {
              for (; d.length < E; )
                if (k = d[Math.floor(d.length / e) - 1].slice(), "C" === k[0] && (k[1] = k[5], k[2] = k[6]), g) {
                  const r = d[Math.floor(d.length / e)].slice();
                  d.splice(d.length / 2, 0, k, r);
                } else
                  d.push(k);
            }
            const m = a3.startX, h = a3.endX;
            l = l.slice();
            const g = a3.isArea, e = g ? 2 : 1;
            let w, E, F;
            v = v && v.slice();
            if (!v)
              return [
                l,
                l
              ];
            if (m && h && h.length) {
              for (a3 = 0; a3 < m.length; a3++)
                if (m[a3] === h[0]) {
                  w = a3;
                  break;
                } else if (m[0] === h[h.length - m.length + a3]) {
                  w = a3;
                  F = true;
                  break;
                } else if (m[m.length - 1] === h[h.length - m.length + a3]) {
                  w = m.length - a3;
                  break;
                }
              "undefined" === typeof w && (v = []);
            }
            v.length && z(w) && (E = l.length + w * e, F ? (p(v, l), t(l, v)) : (p(l, v), t(v, l)));
            return [v, l];
          }
          fillSetter() {
            B.prototype.strokeSetter.apply(this, arguments);
          }
          strokeSetter() {
            this.elem.attr(this.prop, x(this.start).tweenTo(x(this.end), this.pos), void 0, true);
          }
        }
        B.timers = [];
        return B;
      });
      M(
        a,
        "Core/Animation/AnimationUtilities.js",
        [a["Core/Animation/Fx.js"], a["Core/Utilities.js"]],
        function(a2, y) {
          function x(a3) {
            return u(a3) ? v({ duration: 500, defer: 0 }, a3) : { duration: a3 ? 500 : 0, defer: 0 };
          }
          function L(l2, m) {
            let h = a2.timers.length;
            for (; h--; )
              a2.timers[h].elem !== l2 || m && m !== a2.timers[h].prop || (a2.timers[h].stopped = true);
          }
          const { defined: C, getStyle: z, isArray: H, isNumber: B, isObject: u, merge: v, objectEach: l, pick: p } = y;
          return { animate: function(p2, m, h) {
            let g, e = "", w, E, F;
            u(h) || (F = arguments, h = { duration: F[2], easing: F[3], complete: F[4] });
            B(h.duration) || (h.duration = 400);
            h.easing = "function" === typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine;
            h.curAnim = v(m);
            l(m, function(d, k) {
              L(p2, k);
              E = new a2(p2, h, k);
              w = void 0;
              "d" === k && H(m.d) ? (E.paths = E.initPath(p2, p2.pathArray, m.d), E.toD = m.d, g = 0, w = 1) : p2.attr ? g = p2.attr(k) : (g = parseFloat(z(p2, k)) || 0, "opacity" !== k && (e = "px"));
              w || (w = d);
              "string" === typeof w && w.match("px") && (w = w.replace(/px/g, ""));
              E.run(g, w, e);
            });
          }, animObject: x, getDeferredAnimation: function(a3, m, h) {
            const g = x(m);
            let e = 0, w = 0;
            (h ? [h] : a3.series).forEach((h2) => {
              h2 = x(h2.options.animation);
              e = m && C(m.defer) ? g.defer : Math.max(e, h2.duration + h2.defer);
              w = Math.min(g.duration, h2.duration);
            });
            a3.renderer.forExport && (e = 0);
            return { defer: Math.max(0, e - w), duration: Math.min(e, w) };
          }, setAnimation: function(a3, m) {
            m.renderer.globalAnimation = p(a3, m.options.chart.animation, true);
          }, stop: L };
        }
      );
      M(a, "Core/Renderer/HTML/AST.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y) {
        const { SVG_NS: x, win: L } = a2, { attr: C, createElement: z, css: H, error: B, isFunction: u, isString: v, objectEach: l, splat: p } = y;
        ({ trustedTypes: y } = L);
        const t = y && u(y.createPolicy) && y.createPolicy("highcharts", { createHTML: (e) => e });
        y = t ? t.createHTML("") : "";
        try {
          var m = !!new DOMParser().parseFromString(y, "text/html");
        } catch (e) {
          m = false;
        }
        const h = m;
        class g {
          static filterUserAttributes(e) {
            l(e, (h2, m2) => {
              let a3 = true;
              -1 === g.allowedAttributes.indexOf(m2) && (a3 = false);
              -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(m2) && (a3 = v(h2) && g.allowedReferences.some((d) => 0 === h2.indexOf(d)));
              a3 || (B(33, false, void 0, { "Invalid attribute in config": `${m2}` }), delete e[m2]);
              v(h2) && e[m2] && (e[m2] = h2.replace(
                /</g,
                "&lt;"
              ));
            });
            return e;
          }
          static parseStyle(e) {
            return e.split(";").reduce((e2, g2) => {
              g2 = g2.split(":").map((d) => d.trim());
              const h2 = g2.shift();
              h2 && g2.length && (e2[h2.replace(/-([a-z])/g, (d) => d[1].toUpperCase())] = g2.join(":"));
              return e2;
            }, {});
          }
          static setElementHTML(e, h2) {
            e.innerHTML = g.emptyHTML;
            h2 && new g(h2).addToDOM(e);
          }
          constructor(e) {
            this.nodes = "string" === typeof e ? this.parseMarkup(e) : e;
          }
          addToDOM(e) {
            function h2(e2, m2) {
              let d;
              p(e2).forEach(function(k) {
                var e3 = k.tagName;
                const q = k.textContent ? a2.doc.createTextNode(k.textContent) : void 0, w = g.bypassHTMLFiltering;
                let b;
                if (e3)
                  if ("#text" === e3)
                    b = q;
                  else if (-1 !== g.allowedTags.indexOf(e3) || w) {
                    e3 = a2.doc.createElementNS("svg" === e3 ? x : m2.namespaceURI || x, e3);
                    const f = k.attributes || {};
                    l(k, function(b2, d2) {
                      "tagName" !== d2 && "attributes" !== d2 && "children" !== d2 && "style" !== d2 && "textContent" !== d2 && (f[d2] = b2);
                    });
                    C(e3, w ? f : g.filterUserAttributes(f));
                    k.style && H(e3, k.style);
                    q && e3.appendChild(q);
                    h2(k.children || [], e3);
                    b = e3;
                  } else
                    B(33, false, void 0, { "Invalid tagName in config": e3 });
                b && m2.appendChild(b);
                d = b;
              });
              return d;
            }
            return h2(this.nodes, e);
          }
          parseMarkup(e) {
            const m2 = [];
            e = e.trim().replace(/ style=(["'])/g, " data-style=$1");
            if (h)
              e = new DOMParser().parseFromString(t ? t.createHTML(e) : e, "text/html");
            else {
              const g2 = z("div");
              g2.innerHTML = e;
              e = { body: g2 };
            }
            const a3 = (e2, d) => {
              var k = e2.nodeName.toLowerCase();
              const r = { tagName: k };
              "#text" === k && (r.textContent = e2.textContent || "");
              if (k = e2.attributes) {
                const d2 = {};
                [].forEach.call(k, (k2) => {
                  "data-style" === k2.name ? r.style = g.parseStyle(k2.value) : d2[k2.name] = k2.value;
                });
                r.attributes = d2;
              }
              if (e2.childNodes.length) {
                const d2 = [];
                [].forEach.call(e2.childNodes, (k2) => {
                  a3(
                    k2,
                    d2
                  );
                });
                d2.length && (r.children = d2);
              }
              d.push(r);
            };
            [].forEach.call(e.body.childNodes, (e2) => a3(e2, m2));
            return m2;
          }
        }
        g.allowedAttributes = "alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
        g.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
        g.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" ");
        g.emptyHTML = y;
        g.bypassHTMLFiltering = false;
        "";
        return g;
      });
      M(a, "Core/Templating.js", [a["Core/Defaults.js"], a["Core/Utilities.js"]], function(a2, y) {
        function x(h = "", g, e) {
          const a3 = /\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g, l2 = /\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g, v2 = [], d = /f$/, k = /\.([0-9])/, r = C.lang, q = e && e.time || z, G = e && e.numberFormatter || L, b = (b2 = "") => {
            let c2;
            return "true" === b2 ? true : "false" === b2 ? false : (c2 = Number(b2)).toString() === b2 ? c2 : B(b2, g);
          };
          let f, c, n = 0, P;
          for (; null !== (f = a3.exec(h)); ) {
            const b2 = l2.exec(f[1]);
            b2 && (f = b2, P = true);
            c && c.isBlock || (c = {
              ctx: g,
              expression: f[1],
              find: f[0],
              isBlock: "#" === f[1].charAt(0),
              start: f.index,
              startInner: f.index + f[0].length,
              length: f[0].length
            });
            var D = f[1].split(" ")[0].replace("#", "");
            m[D] && (c.isBlock && D === c.fn && n++, c.fn || (c.fn = D));
            D = "else" === f[1];
            if (c.isBlock && c.fn && (f[1] === `/${c.fn}` || D))
              if (n)
                D || n--;
              else {
                var K = c.startInner;
                K = h.substr(K, f.index - K);
                void 0 === c.body ? (c.body = K, c.startInner = f.index + f[0].length) : c.elseBody = K;
                c.find += K + f[0];
                D || (v2.push(c), c = void 0);
              }
            else
              c.isBlock || v2.push(c);
            if (b2 && (null === c || void 0 === c || !c.isBlock))
              break;
          }
          v2.forEach((c2) => {
            const { body: f2, elseBody: n2, expression: K2, fn: e2 } = c2;
            var A;
            if (e2) {
              var a4 = [c2], w = K2.split(" ");
              for (A = m[e2].length; A--; )
                a4.unshift(b(w[A + 1]));
              A = m[e2].apply(g, a4);
              c2.isBlock && "boolean" === typeof A && (A = x(A ? f2 : n2, g));
            } else
              a4 = K2.split(":"), A = b(a4.shift() || ""), a4.length && "number" === typeof A && (a4 = a4.join(":"), d.test(a4) ? (w = parseInt((a4.match(k) || ["", "-1"])[1], 10), null !== A && (A = G(A, w, r.decimalPoint, -1 < a4.indexOf(",") ? r.thousandsSep : ""))) : A = q.dateFormat(a4, A));
            h = h.replace(c2.find, p(A, ""));
          });
          return P ? x(h, g, e) : h;
        }
        function L(h, g, e, a3) {
          h = +h || 0;
          g = +g;
          const m2 = C.lang;
          var w = (h.toString().split(".")[1] || "").split("e")[0].length;
          const d = h.toString().split("e"), k = g;
          if (-1 === g)
            g = Math.min(w, 20);
          else if (!v(g))
            g = 2;
          else if (g && d[1] && 0 > d[1]) {
            var r = g + +d[1];
            0 <= r ? (d[0] = (+d[0]).toExponential(r).split("e")[0], g = r) : (d[0] = d[0].split(".")[0] || 0, h = 20 > g ? (d[0] * Math.pow(10, d[1])).toFixed(g) : 0, d[1] = 0);
          }
          r = (Math.abs(d[1] ? d[0] : h) + Math.pow(10, -Math.max(g, w) - 1)).toFixed(g);
          w = String(t(r));
          const q = 3 < w.length ? w.length % 3 : 0;
          e = p(e, m2.decimalPoint);
          a3 = p(a3, m2.thousandsSep);
          h = (0 > h ? "-" : "") + (q ? w.substr(0, q) + a3 : "");
          h = 0 > +d[1] && !k ? "0" : h + w.substr(q).replace(/(\d{3})(?=\d)/g, "$1" + a3);
          g && (h += e + r.slice(-g));
          d[1] && 0 !== +h && (h += "e" + d[1]);
          return h;
        }
        const { defaultOptions: C, defaultTime: z } = a2, { extend: H, getNestedProperty: B, isArray: u, isNumber: v, isObject: l, pick: p, pInt: t } = y, m = { add: (h, g) => h + g, divide: (h, g) => 0 !== g ? h / g : "", eq: (h, g) => h == g, each: function(h) {
          const g = arguments[arguments.length - 1];
          return u(h) ? h.map((e, a3) => x(g.body, H(l(e) ? e : { "@this": e }, { "@index": a3, "@first": 0 === a3, "@last": a3 === h.length - 1 }))).join("") : false;
        }, ge: (h, g) => h >= g, gt: (h, g) => h > g, "if": (h) => !!h, le: (h, g) => h <= g, lt: (h, g) => h < g, multiply: (h, g) => h * g, ne: (h, g) => h != g, subtract: (h, g) => h - g, unless: (h) => !h };
        return { dateFormat: function(h, g, e) {
          return z.dateFormat(h, g, e);
        }, format: x, helpers: m, numberFormat: L };
      });
      M(a, "Core/Renderer/RendererUtilities.js", [a["Core/Utilities.js"]], function(a2) {
        const { clamp: x, pick: I, stableSort: L } = a2;
        var C;
        (function(a3) {
          function y(a4, u, v) {
            const l = a4;
            var p = l.reducedLen || u, t = (e2, g2) => (g2.rank || 0) - (e2.rank || 0);
            const m = (e2, g2) => e2.target - g2.target;
            let h, g = true, e = [], w = 0;
            for (h = a4.length; h--; )
              w += a4[h].size;
            if (w > p) {
              L(a4, t);
              for (w = h = 0; w <= p; )
                w += a4[h].size, h++;
              e = a4.splice(h - 1, a4.length);
            }
            L(a4, m);
            for (a4 = a4.map((e2) => ({ size: e2.size, targets: [e2.target], align: I(e2.align, 0.5) })); g; ) {
              for (h = a4.length; h--; )
                p = a4[h], t = (Math.min.apply(0, p.targets) + Math.max.apply(0, p.targets)) / 2, p.pos = x(t - p.size * p.align, 0, u - p.size);
              h = a4.length;
              for (g = false; h--; )
                0 < h && a4[h - 1].pos + a4[h - 1].size > a4[h].pos && (a4[h - 1].size += a4[h].size, a4[h - 1].targets = a4[h - 1].targets.concat(a4[h].targets), a4[h - 1].align = 0.5, a4[h - 1].pos + a4[h - 1].size > u && (a4[h - 1].pos = u - a4[h - 1].size), a4.splice(h, 1), g = true);
            }
            l.push.apply(l, e);
            h = 0;
            a4.some((e2) => {
              let g2 = 0;
              return (e2.targets || []).some(() => {
                l[h].pos = e2.pos + g2;
                if ("undefined" !== typeof v && Math.abs(l[h].pos - l[h].target) > v)
                  return l.slice(0, h + 1).forEach((d) => delete d.pos), l.reducedLen = (l.reducedLen || u) - 0.1 * u, l.reducedLen > 0.1 * u && y(l, u, v), true;
                g2 += l[h].size;
                h++;
                return false;
              });
            });
            L(l, m);
            return l;
          }
          a3.distribute = y;
        })(C || (C = {}));
        return C;
      });
      M(a, "Core/Renderer/SVG/SVGElement.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L) {
        const { animate: x, animObject: z, stop: H } = a2, { deg2rad: B, doc: u, svg: v, SVG_NS: l, win: p } = I, { addEvent: t, attr: m, createElement: h, css: g, defined: e, erase: w, extend: E, fireEvent: F, isArray: d, isFunction: k, isObject: r, isString: q, merge: G, objectEach: b, pick: f, pInt: c, syncTimeout: n, uniqueKey: P } = L;
        class D {
          constructor() {
            this.element = void 0;
            this.onEvents = {};
            this.opacity = 1;
            this.renderer = void 0;
            this.SVG_NS = l;
          }
          _defaultGetter(b2) {
            b2 = f(this[b2 + "Value"], this[b2], this.element ? this.element.getAttribute(b2) : null, 0);
            /^[\-0-9\.]+$/.test(b2) && (b2 = parseFloat(b2));
            return b2;
          }
          _defaultSetter(b2, c2, f2) {
            f2.setAttribute(c2, b2);
          }
          add(b2) {
            const c2 = this.renderer, f2 = this.element;
            let d2;
            b2 && (this.parentGroup = b2);
            "undefined" !== typeof this.textStr && "text" === this.element.nodeName && c2.buildText(this);
            this.added = true;
            if (!b2 || b2.handleZ || this.zIndex)
              d2 = this.zIndexSetter();
            d2 || (b2 ? b2.element : c2.box).appendChild(f2);
            if (this.onAdd)
              this.onAdd();
            return this;
          }
          addClass(b2, c2) {
            const f2 = c2 ? "" : this.attr("class") || "";
            b2 = (b2 || "").split(/ /g).reduce(function(b3, c3) {
              -1 === f2.indexOf(c3) && b3.push(c3);
              return b3;
            }, f2 ? [f2] : []).join(" ");
            b2 !== f2 && this.attr("class", b2);
            return this;
          }
          afterSetters() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          }
          align(b2, c2, d2) {
            const k2 = {};
            var n2 = this.renderer, e2 = n2.alignedObjects, A;
            let K, g2;
            if (b2) {
              if (this.alignOptions = b2, this.alignByTranslate = c2, !d2 || q(d2))
                this.alignTo = A = d2 || "renderer", w(e2, this), e2.push(this), d2 = void 0;
            } else
              b2 = this.alignOptions, c2 = this.alignByTranslate, A = this.alignTo;
            d2 = f(d2, n2[A], "scrollablePlotBox" === A ? n2.plotBox : void 0, n2);
            A = b2.align;
            const a3 = b2.verticalAlign;
            n2 = (d2.x || 0) + (b2.x || 0);
            e2 = (d2.y || 0) + (b2.y || 0);
            "right" === A ? K = 1 : "center" === A && (K = 2);
            K && (n2 += (d2.width - (b2.width || 0)) / K);
            k2[c2 ? "translateX" : "x"] = Math.round(n2);
            "bottom" === a3 ? g2 = 1 : "middle" === a3 && (g2 = 2);
            g2 && (e2 += (d2.height - (b2.height || 0)) / g2);
            k2[c2 ? "translateY" : "y"] = Math.round(e2);
            this[this.placed ? "animate" : "attr"](k2);
            this.placed = true;
            this.alignAttr = k2;
            return this;
          }
          alignSetter(b2) {
            const c2 = { left: "start", center: "middle", right: "end" };
            c2[b2] && (this.alignValue = b2, this.element.setAttribute("text-anchor", c2[b2]));
          }
          animate(c2, d2, k2) {
            const e2 = z(f(d2, this.renderer.globalAnimation, true));
            d2 = e2.defer;
            u.hidden && (e2.duration = 0);
            0 !== e2.duration ? (k2 && (e2.complete = k2), n(() => {
              this.element && x(this, c2, e2);
            }, d2)) : (this.attr(c2, void 0, k2 || e2.complete), b(c2, function(b2, c3) {
              e2.step && e2.step.call(this, b2, { prop: c3, pos: 1, elem: this });
            }, this));
            return this;
          }
          applyTextOutline(b2) {
            const c2 = this.element;
            -1 !== b2.indexOf("contrast") && (b2 = b2.replace(/contrast/g, this.renderer.getContrast(c2.style.fill)));
            var f2 = b2.split(" ");
            b2 = f2[f2.length - 1];
            if ((f2 = f2[0]) && "none" !== f2 && I.svg) {
              this.fakeTS = true;
              f2 = f2.replace(/(^[\d\.]+)(.*?)$/g, function(b3, c3, f3) {
                return 2 * Number(c3) + f3;
              });
              this.removeTextOutline();
              const d2 = u.createElementNS(l, "tspan");
              m(d2, { "class": "highcharts-text-outline", fill: b2, stroke: b2, "stroke-width": f2, "stroke-linejoin": "round" });
              b2 = c2.querySelector("textPath") || c2;
              [].forEach.call(b2.childNodes, (b3) => {
                const c3 = b3.cloneNode(true);
                c3.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((b4) => c3.removeAttribute(b4));
                d2.appendChild(c3);
              });
              let k2 = 0;
              [].forEach.call(b2.querySelectorAll("text tspan"), (b3) => {
                k2 += Number(b3.getAttribute("dy"));
              });
              f2 = u.createElementNS(l, "tspan");
              f2.textContent = "​";
              m(f2, { x: Number(c2.getAttribute("x")), dy: -k2 });
              d2.appendChild(f2);
              b2.insertBefore(d2, b2.firstChild);
            }
          }
          attr(c2, f2, d2, k2) {
            const n2 = this.element, e2 = D.symbolCustomAttribs;
            let A, q2, g2 = this, a3, K;
            "string" === typeof c2 && "undefined" !== typeof f2 && (A = c2, c2 = {}, c2[A] = f2);
            "string" === typeof c2 ? g2 = (this[c2 + "Getter"] || this._defaultGetter).call(this, c2, n2) : (b(c2, function(b2, f3) {
              a3 = false;
              k2 || H(this, f3);
              this.symbolName && -1 !== e2.indexOf(f3) && (q2 || (this.symbolAttr(c2), q2 = true), a3 = true);
              !this.rotation || "x" !== f3 && "y" !== f3 || (this.doTransform = true);
              a3 || (K = this[f3 + "Setter"] || this._defaultSetter, K.call(this, b2, f3, n2));
            }, this), this.afterSetters());
            d2 && d2.call(this);
            return g2;
          }
          clip(b2) {
            return this.attr("clip-path", b2 ? "url(" + this.renderer.url + "#" + b2.id + ")" : "none");
          }
          crisp(b2, c2) {
            c2 = c2 || b2.strokeWidth || 0;
            const f2 = Math.round(c2) % 2 / 2;
            b2.x = Math.floor(b2.x || this.x || 0) + f2;
            b2.y = Math.floor(b2.y || this.y || 0) + f2;
            b2.width = Math.floor((b2.width || this.width || 0) - 2 * f2);
            b2.height = Math.floor((b2.height || this.height || 0) - 2 * f2);
            e(b2.strokeWidth) && (b2.strokeWidth = c2);
            return b2;
          }
          complexColor(c2, f2, k2) {
            const n2 = this.renderer;
            let q2, g2, A, a3, r2, K, h2, J, m2, O, w2 = [], l2;
            F(this.renderer, "complexColor", { args: arguments }, function() {
              c2.radialGradient ? g2 = "radialGradient" : c2.linearGradient && (g2 = "linearGradient");
              if (g2) {
                A = c2[g2];
                r2 = n2.gradients;
                K = c2.stops;
                m2 = k2.radialReference;
                d(A) && (c2[g2] = A = { x1: A[0], y1: A[1], x2: A[2], y2: A[3], gradientUnits: "userSpaceOnUse" });
                "radialGradient" === g2 && m2 && !e(A.gradientUnits) && (a3 = A, A = G(A, n2.getRadialAttr(m2, a3), { gradientUnits: "userSpaceOnUse" }));
                b(A, function(b2, c3) {
                  "id" !== c3 && w2.push(c3, b2);
                });
                b(K, function(b2) {
                  w2.push(b2);
                });
                w2 = w2.join(",");
                if (r2[w2])
                  O = r2[w2].attr("id");
                else {
                  A.id = O = P();
                  const b2 = r2[w2] = n2.createElement(g2).attr(A).add(n2.defs);
                  b2.radAttr = a3;
                  b2.stops = [];
                  K.forEach(function(c3) {
                    0 === c3[1].indexOf("rgba") ? (q2 = y.parse(c3[1]), h2 = q2.get("rgb"), J = q2.get("a")) : (h2 = c3[1], J = 1);
                    c3 = n2.createElement("stop").attr({ offset: c3[0], "stop-color": h2, "stop-opacity": J }).add(b2);
                    b2.stops.push(c3);
                  });
                }
                l2 = "url(" + n2.url + "#" + O + ")";
                k2.setAttribute(f2, l2);
                k2.gradient = w2;
                c2.toString = function() {
                  return l2;
                };
              }
            });
          }
          css(f2) {
            const d2 = this.styles, k2 = {}, n2 = this.element;
            let e2, q2 = !d2;
            d2 && b(f2, function(b2, c2) {
              d2 && d2[c2] !== b2 && (k2[c2] = b2, q2 = true);
            });
            if (q2) {
              d2 && (f2 = E(d2, k2));
              null === f2.width || "auto" === f2.width ? delete this.textWidth : "text" === n2.nodeName.toLowerCase() && f2.width && (e2 = this.textWidth = c(f2.width));
              this.styles = f2;
              e2 && !v && this.renderer.forExport && delete f2.width;
              const b2 = G(f2);
              n2.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((c2) => b2 && delete b2[c2]), b2.color && (b2.fill = b2.color));
              g(n2, b2);
            }
            this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), f2.textOutline && this.applyTextOutline(f2.textOutline));
            return this;
          }
          dashstyleSetter(b2) {
            let d2 = this["stroke-width"];
            "inherit" === d2 && (d2 = 1);
            if (b2 = b2 && b2.toLowerCase()) {
              const k2 = b2.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (b2 = k2.length; b2--; )
                k2[b2] = "" + c(k2[b2]) * f(d2, NaN);
              b2 = k2.join(",").replace(/NaN/g, "none");
              this.element.setAttribute(
                "stroke-dasharray",
                b2
              );
            }
          }
          destroy() {
            const c2 = this;
            var f2 = c2.element || {};
            const d2 = c2.renderer;
            var k2 = f2.ownerSVGElement;
            let n2 = "SPAN" === f2.nodeName && c2.parentGroup || void 0;
            f2.onclick = f2.onmouseout = f2.onmouseover = f2.onmousemove = f2.point = null;
            H(c2);
            if (c2.clipPath && k2) {
              const b2 = c2.clipPath;
              [].forEach.call(k2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(c3) {
                -1 < c3.getAttribute("clip-path").indexOf(b2.element.id) && c3.removeAttribute("clip-path");
              });
              c2.clipPath = b2.destroy();
            }
            if (c2.stops) {
              for (k2 = 0; k2 < c2.stops.length; k2++)
                c2.stops[k2].destroy();
              c2.stops.length = 0;
              c2.stops = void 0;
            }
            for (c2.safeRemoveChild(f2); n2 && n2.div && 0 === n2.div.childNodes.length; )
              f2 = n2.parentGroup, c2.safeRemoveChild(n2.div), delete n2.div, n2 = f2;
            c2.alignTo && w(d2.alignedObjects, c2);
            b(c2, function(b2, f3) {
              c2[f3] && c2[f3].parentGroup === c2 && c2[f3].destroy && c2[f3].destroy();
              delete c2[f3];
            });
          }
          dSetter(b2, c2, f2) {
            d(b2) && ("string" === typeof b2[0] && (b2 = this.renderer.pathToSegments(b2)), this.pathArray = b2, b2 = b2.reduce((b3, c3, f3) => c3 && c3.join ? (f3 ? b3 + " " : "") + c3.join(" ") : (c3 || "").toString(), ""));
            /(NaN| {2}|^$)/.test(b2) && (b2 = "M 0 0");
            this[c2] !== b2 && (f2.setAttribute(
              c2,
              b2
            ), this[c2] = b2);
          }
          fadeOut(b2) {
            const c2 = this;
            c2.animate({ opacity: 0 }, { duration: f(b2, 150), complete: function() {
              c2.hide();
            } });
          }
          fillSetter(b2, c2, f2) {
            "string" === typeof b2 ? f2.setAttribute(c2, b2) : b2 && this.complexColor(b2, c2, f2);
          }
          getBBox(b2, c2) {
            const { alignValue: d2, element: n2, renderer: q2, styles: a3, textStr: A } = this, { cache: r2, cacheKeys: h2 } = q2;
            var m2 = n2.namespaceURI === this.SVG_NS;
            c2 = f(c2, this.rotation, 0);
            var K = q2.styledMode ? n2 && D.prototype.getStyle.call(n2, "font-size") : a3 && a3.fontSize;
            let J;
            let N;
            e(A) && (N = A.toString(), -1 === N.indexOf("<") && (N = N.replace(
              /[0-9]/g,
              "0"
            )), N += ["", q2.rootFontSize, K, c2, this.textWidth, d2, a3 && a3.textOverflow, a3 && a3.fontWeight].join());
            N && !b2 && (J = r2[N]);
            if (!J) {
              if (m2 || q2.forExport) {
                try {
                  var O = this.fakeTS && function(b3) {
                    const c3 = n2.querySelector(".highcharts-text-outline");
                    c3 && g(c3, { display: b3 });
                  };
                  k(O) && O("none");
                  J = n2.getBBox ? E({}, n2.getBBox()) : { width: n2.offsetWidth, height: n2.offsetHeight, x: 0, y: 0 };
                  k(O) && O("");
                } catch (fa) {
                  "";
                }
                if (!J || 0 > J.width)
                  J = { x: 0, y: 0, width: 0, height: 0 };
              } else
                J = this.htmlGetBBox();
              O = J.width;
              b2 = J.height;
              m2 && (J.height = b2 = { "11px,17": 14, "13px,20": 16 }[`${K || ""},${Math.round(b2)}`] || b2);
              if (c2) {
                m2 = Number(n2.getAttribute("y") || 0) - J.y;
                K = { right: 1, center: 0.5 }[d2 || 0] || 0;
                var w2 = c2 * B, l2 = (c2 - 90) * B, p2 = O * Math.cos(w2);
                c2 = O * Math.sin(w2);
                var G2 = Math.cos(l2);
                w2 = Math.sin(l2);
                O = J.x + K * (O - p2) + m2 * G2;
                l2 = O + p2;
                G2 = l2 - b2 * G2;
                p2 = G2 - p2;
                m2 = J.y + m2 - K * c2 + m2 * w2;
                K = m2 + c2;
                b2 = K - b2 * w2;
                c2 = b2 - c2;
                J.x = Math.min(O, l2, G2, p2);
                J.y = Math.min(m2, K, b2, c2);
                J.width = Math.max(O, l2, G2, p2) - J.x;
                J.height = Math.max(m2, K, b2, c2) - J.y;
              }
            }
            if (N && ("" === A || 0 < J.height)) {
              for (; 250 < h2.length; )
                delete r2[h2.shift()];
              r2[N] || h2.push(N);
              r2[N] = J;
            }
            return J;
          }
          getStyle(b2) {
            return p.getComputedStyle(this.element || this, "").getPropertyValue(b2);
          }
          hasClass(b2) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(b2);
          }
          hide() {
            return this.attr({ visibility: "hidden" });
          }
          htmlGetBBox() {
            return { height: 0, width: 0, x: 0, y: 0 };
          }
          init(b2, c2) {
            this.element = "span" === c2 ? h(c2) : u.createElementNS(this.SVG_NS, c2);
            this.renderer = b2;
            F(this, "afterInit");
          }
          on(b2, c2) {
            const { onEvents: f2 } = this;
            if (f2[b2])
              f2[b2]();
            f2[b2] = t(this.element, b2, c2);
            return this;
          }
          opacitySetter(b2, c2, f2) {
            this.opacity = b2 = Number(Number(b2).toFixed(3));
            f2.setAttribute(c2, b2);
          }
          removeClass(b2) {
            return this.attr(
              "class",
              ("" + this.attr("class")).replace(q(b2) ? new RegExp(`(^| )${b2}( |$)`) : b2, " ").replace(/ +/g, " ").trim()
            );
          }
          removeTextOutline() {
            const b2 = this.element.querySelector("tspan.highcharts-text-outline");
            b2 && this.safeRemoveChild(b2);
          }
          safeRemoveChild(b2) {
            const c2 = b2.parentNode;
            c2 && c2.removeChild(b2);
          }
          setRadialReference(b2) {
            const c2 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            this.element.radialReference = b2;
            c2 && c2.radAttr && c2.animate(this.renderer.getRadialAttr(b2, c2.radAttr));
            return this;
          }
          setTextPath(b2, c2) {
            c2 = G(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, c2);
            const f2 = this.renderer.url, d2 = this.text || this, k2 = d2.textPath, { attributes: n2, enabled: A } = c2;
            b2 = b2 || k2 && k2.path;
            k2 && k2.undo();
            b2 && A ? (c2 = t(d2, "afterModifyTree", (c3) => {
              if (b2 && A) {
                let A2 = b2.attr("id");
                A2 || b2.attr("id", A2 = P());
                var k3 = { x: 0, y: 0 };
                e(n2.dx) && (k3.dx = n2.dx, delete n2.dx);
                e(n2.dy) && (k3.dy = n2.dy, delete n2.dy);
                d2.attr(k3);
                this.attr({ transform: "" });
                this.box && (this.box = this.box.destroy());
                k3 = c3.nodes.slice(0);
                c3.nodes.length = 0;
                c3.nodes[0] = { tagName: "textPath", attributes: E(
                  n2,
                  { "text-anchor": n2.textAnchor, href: `${f2}#${A2}` }
                ), children: k3 };
              }
            }), d2.textPath = { path: b2, undo: c2 }) : (d2.attr({ dx: 0, dy: 0 }), delete d2.textPath);
            this.added && (d2.textCache = "", this.renderer.buildText(d2));
            return this;
          }
          shadow(b2) {
            var c2;
            const { renderer: f2 } = this, d2 = G(90 === (null === (c2 = this.parentGroup) || void 0 === c2 ? void 0 : c2.rotation) ? { offsetX: -1, offsetY: -1 } : {}, r(b2) ? b2 : {});
            c2 = f2.shadowDefinition(d2);
            return this.attr({ filter: b2 ? `url(${f2.url}#${c2})` : "none" });
          }
          show(b2 = true) {
            return this.attr({ visibility: b2 ? "inherit" : "visible" });
          }
          ["stroke-widthSetter"](b2, c2, f2) {
            this[c2] = b2;
            f2.setAttribute(c2, b2);
          }
          strokeWidth() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            const b2 = this.getStyle("stroke-width");
            let f2 = 0, d2;
            b2.indexOf("px") === b2.length - 2 ? f2 = c(b2) : "" !== b2 && (d2 = u.createElementNS(l, "rect"), m(d2, { width: b2, "stroke-width": 0 }), this.element.parentNode.appendChild(d2), f2 = d2.getBBox().width, d2.parentNode.removeChild(d2));
            return f2;
          }
          symbolAttr(b2) {
            const c2 = this;
            D.symbolCustomAttribs.forEach(function(d2) {
              c2[d2] = f(b2[d2], c2[d2]);
            });
            c2.attr({ d: c2.renderer.symbols[c2.symbolName](
              c2.x,
              c2.y,
              c2.width,
              c2.height,
              c2
            ) });
          }
          textSetter(b2) {
            b2 !== this.textStr && (delete this.textPxLength, this.textStr = b2, this.added && this.renderer.buildText(this));
          }
          titleSetter(b2) {
            const c2 = this.element, d2 = c2.getElementsByTagName("title")[0] || u.createElementNS(this.SVG_NS, "title");
            c2.insertBefore ? c2.insertBefore(d2, c2.firstChild) : c2.appendChild(d2);
            d2.textContent = String(f(b2, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          }
          toFront() {
            const b2 = this.element;
            b2.parentNode.appendChild(b2);
            return this;
          }
          translate(b2, c2) {
            return this.attr({
              translateX: b2,
              translateY: c2
            });
          }
          updateTransform() {
            const { element: b2, matrix: c2, rotation: d2 = 0, scaleX: k2, scaleY: n2, translateX: q2 = 0, translateY: A = 0 } = this, g2 = ["translate(" + q2 + "," + A + ")"];
            e(c2) && g2.push("matrix(" + c2.join(",") + ")");
            d2 && g2.push("rotate(" + d2 + " " + f(this.rotationOriginX, b2.getAttribute("x"), 0) + " " + f(this.rotationOriginY, b2.getAttribute("y") || 0) + ")");
            (e(k2) || e(n2)) && g2.push("scale(" + f(k2, 1) + " " + f(n2, 1) + ")");
            g2.length && !(this.text || this).textPath && b2.setAttribute("transform", g2.join(" "));
          }
          visibilitySetter(b2, c2, f2) {
            "inherit" === b2 ? f2.removeAttribute(c2) : this[c2] !== b2 && f2.setAttribute(c2, b2);
            this[c2] = b2;
          }
          xGetter(b2) {
            "circle" === this.element.nodeName && ("x" === b2 ? b2 = "cx" : "y" === b2 && (b2 = "cy"));
            return this._defaultGetter(b2);
          }
          zIndexSetter(b2, f2) {
            var d2 = this.renderer, k2 = this.parentGroup;
            const n2 = (k2 || d2).element || d2.box, q2 = this.element;
            d2 = n2 === d2.box;
            let A = false, g2;
            var a3 = this.added;
            let r2;
            e(b2) ? (q2.setAttribute("data-z-index", b2), b2 = +b2, this[f2] === b2 && (a3 = false)) : e(this[f2]) && q2.removeAttribute("data-z-index");
            this[f2] = b2;
            if (a3) {
              (b2 = this.zIndex) && k2 && (k2.handleZ = true);
              f2 = n2.childNodes;
              for (r2 = f2.length - 1; 0 <= r2 && !A; r2--)
                if (k2 = f2[r2], a3 = k2.getAttribute("data-z-index"), g2 = !e(a3), k2 !== q2) {
                  if (0 > b2 && g2 && !d2 && !r2)
                    n2.insertBefore(q2, f2[r2]), A = true;
                  else if (c(a3) <= b2 || g2 && (!e(b2) || 0 <= b2))
                    n2.insertBefore(q2, f2[r2 + 1]), A = true;
                }
              A || (n2.insertBefore(q2, f2[d2 ? 3 : 0]), A = true);
            }
            return A;
          }
        }
        D.symbolCustomAttribs = "anchorX anchorY clockwise end height innerR r start width x y".split(" ");
        D.prototype.strokeSetter = D.prototype.fillSetter;
        D.prototype.yGetter = D.prototype.xGetter;
        D.prototype.matrixSetter = D.prototype.rotationOriginXSetter = D.prototype.rotationOriginYSetter = D.prototype.rotationSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.verticalAlignSetter = function(b2, c2) {
          this[c2] = b2;
          this.doTransform = true;
        };
        "";
        return D;
      });
      M(a, "Core/Renderer/RendererRegistry.js", [a["Core/Globals.js"]], function(a2) {
        var x;
        (function(x2) {
          x2.rendererTypes = {};
          let y;
          x2.getRendererType = function(a3 = y) {
            return x2.rendererTypes[a3] || x2.rendererTypes[y];
          };
          x2.registerRendererType = function(C, z, H) {
            x2.rendererTypes[C] = z;
            if (!y || H)
              y = C, a2.Renderer = z;
          };
        })(x || (x = {}));
        return x;
      });
      M(a, "Core/Renderer/SVG/SVGLabel.js", [a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, y) {
        const { defined: x, extend: L, isNumber: C, merge: z, pick: H, removeEvent: B } = y;
        class u extends a2 {
          constructor(a3, l, p, t, m, h, g, e, w, E) {
            super();
            this.paddingRightSetter = this.paddingLeftSetter = this.paddingSetter;
            this.init(a3, "g");
            this.textStr = l;
            this.x = p;
            this.y = t;
            this.anchorX = h;
            this.anchorY = g;
            this.baseline = w;
            this.className = E;
            this.addClass("button" === E ? "highcharts-no-tooltip" : "highcharts-label");
            E && this.addClass("highcharts-" + E);
            this.text = a3.text(void 0, 0, 0, e).attr({ zIndex: 1 });
            let v;
            "string" === typeof m && ((v = /^url\((.*?)\)$/.test(m)) || this.renderer.symbols[m]) && (this.symbolKey = m);
            this.bBox = u.emptyBBox;
            this.padding = 3;
            this.baselineOffset = 0;
            this.needsBox = a3.styledMode || v;
            this.deferredAttr = {};
            this.alignFactor = 0;
          }
          alignSetter(a3) {
            a3 = { left: 0, center: 0.5, right: 1 }[a3];
            a3 !== this.alignFactor && (this.alignFactor = a3, this.bBox && C(this.xSetting) && this.attr({ x: this.xSetting }));
          }
          anchorXSetter(a3, l) {
            this.anchorX = a3;
            this.boxAttr(l, Math.round(a3) - this.getCrispAdjust() - this.xSetting);
          }
          anchorYSetter(a3, l) {
            this.anchorY = a3;
            this.boxAttr(l, a3 - this.ySetting);
          }
          boxAttr(a3, l) {
            this.box ? this.box.attr(a3, l) : this.deferredAttr[a3] = l;
          }
          css(v) {
            if (v) {
              const a3 = {};
              v = z(v);
              u.textProps.forEach((l) => {
                "undefined" !== typeof v[l] && (a3[l] = v[l], delete v[l]);
              });
              this.text.css(a3);
              "fontSize" in a3 || "fontWeight" in a3 ? this.updateTextPadding() : ("width" in a3 || "textOverflow" in a3) && this.updateBoxSize();
            }
            return a2.prototype.css.call(this, v);
          }
          destroy() {
            B(this.element, "mouseenter");
            B(this.element, "mouseleave");
            this.text && this.text.destroy();
            this.box && (this.box = this.box.destroy());
            a2.prototype.destroy.call(this);
          }
          fillSetter(a3, l) {
            a3 && (this.needsBox = true);
            this.fill = a3;
            this.boxAttr(l, a3);
          }
          getBBox() {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            const a3 = this.padding, l = H(this.paddingLeft, a3);
            return { width: this.width, height: this.height, x: this.bBox.x - l, y: this.bBox.y - a3 };
          }
          getCrispAdjust() {
            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          }
          heightSetter(a3) {
            this.heightSetting = a3;
          }
          onAdd() {
            this.text.add(this);
            this.attr({ text: H(this.textStr, ""), x: this.x || 0, y: this.y || 0 });
            this.box && x(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
          }
          paddingSetter(a3, l) {
            C(a3) ? a3 !== this[l] && (this[l] = a3, this.updateTextPadding()) : this[l] = void 0;
          }
          rSetter(a3, l) {
            this.boxAttr(l, a3);
          }
          strokeSetter(a3, l) {
            this.stroke = a3;
            this.boxAttr(l, a3);
          }
          ["stroke-widthSetter"](a3, l) {
            a3 && (this.needsBox = true);
            this["stroke-width"] = a3;
            this.boxAttr(l, a3);
          }
          ["text-alignSetter"](a3) {
            this.textAlign = a3;
          }
          textSetter(a3) {
            "undefined" !== typeof a3 && this.text.attr({ text: a3 });
            this.updateTextPadding();
          }
          updateBoxSize() {
            var a3 = this.text;
            const l = {}, p = this.padding, t = this.bBox = C(this.widthSetting) && C(this.heightSetting) && !this.textAlign || !x(a3.textStr) ? u.emptyBBox : a3.getBBox();
            this.width = this.getPaddedWidth();
            this.height = (this.heightSetting || t.height || 0) + 2 * p;
            const m = this.renderer.fontMetrics(a3);
            this.baselineOffset = p + Math.min((this.text.firstLineMetrics || m).b, t.height || Infinity);
            this.heightSetting && (this.baselineOffset += (this.heightSetting - m.h) / 2);
            this.needsBox && !a3.textPath && (this.box || (a3 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), a3.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a3.add(this)), a3 = this.getCrispAdjust(), l.x = a3, l.y = (this.baseline ? -this.baselineOffset : 0) + a3, l.width = Math.round(this.width), l.height = Math.round(this.height), this.box.attr(L(l, this.deferredAttr)), this.deferredAttr = {});
          }
          updateTextPadding() {
            const a3 = this.text;
            if (!a3.textPath) {
              this.updateBoxSize();
              const l = this.baseline ? 0 : this.baselineOffset;
              let p = H(this.paddingLeft, this.padding);
              x(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (p += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
              if (p !== a3.x || l !== a3.y)
                a3.attr("x", p), a3.hasBoxWidthChanged && (this.bBox = a3.getBBox(true)), "undefined" !== typeof l && a3.attr("y", l);
              a3.x = p;
              a3.y = l;
            }
          }
          widthSetter(a3) {
            this.widthSetting = C(a3) ? a3 : void 0;
          }
          getPaddedWidth() {
            var a3 = this.padding;
            const l = H(this.paddingLeft, a3);
            a3 = H(
              this.paddingRight,
              a3
            );
            return (this.widthSetting || this.bBox.width || 0) + l + a3;
          }
          xSetter(a3) {
            this.x = a3;
            this.alignFactor && (a3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true);
            this.xSetting = Math.round(a3);
            this.attr("translateX", this.xSetting);
          }
          ySetter(a3) {
            this.ySetting = this.y = Math.round(a3);
            this.attr("translateY", this.ySetting);
          }
        }
        u.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
        u.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(" ");
        return u;
      });
      M(a, "Core/Renderer/SVG/Symbols.js", [a["Core/Utilities.js"]], function(a2) {
        function x(a3, u, v, l, p) {
          const t = [];
          if (p) {
            const m = p.start || 0, h = H(p.r, v);
            v = H(p.r, l || v);
            l = (p.end || 0) - 1e-3;
            const g = p.innerR, e = H(p.open, 1e-3 > Math.abs((p.end || 0) - m - 2 * Math.PI)), w = Math.cos(m), E = Math.sin(m), F = Math.cos(l), d = Math.sin(l), k = H(p.longArc, 1e-3 > l - m - Math.PI ? 0 : 1);
            let r = ["A", h, v, 0, k, H(p.clockwise, 1), a3 + h * F, u + v * d];
            r.params = { start: m, end: l, cx: a3, cy: u };
            t.push(["M", a3 + h * w, u + v * E], r);
            C(g) && (r = ["A", g, g, 0, k, C(p.clockwise) ? 1 - p.clockwise : 0, a3 + g * w, u + g * E], r.params = { start: l, end: m, cx: a3, cy: u }, t.push(e ? ["M", a3 + g * F, u + g * d] : ["L", a3 + g * F, u + g * d], r));
            e || t.push(["Z"]);
          }
          return t;
        }
        function I(a3, u, v, l, p) {
          return p && p.r ? L(a3, u, v, l, p) : [["M", a3, u], ["L", a3 + v, u], ["L", a3 + v, u + l], ["L", a3, u + l], ["Z"]];
        }
        function L(a3, u, v, l, p) {
          p = (null === p || void 0 === p ? void 0 : p.r) || 0;
          return [["M", a3 + p, u], ["L", a3 + v - p, u], ["A", p, p, 0, 0, 1, a3 + v, u + p], ["L", a3 + v, u + l - p], ["A", p, p, 0, 0, 1, a3 + v - p, u + l], ["L", a3 + p, u + l], ["A", p, p, 0, 0, 1, a3, u + l - p], ["L", a3, u + p], ["A", p, p, 0, 0, 1, a3 + p, u], ["Z"]];
        }
        const { defined: C, isNumber: z, pick: H } = a2;
        return { arc: x, callout: function(a3, u, v, l, p) {
          const t = Math.min(p && p.r || 0, v, l), m = t + 6, h = p && p.anchorX;
          p = p && p.anchorY || 0;
          const g = L(a3, u, v, l, { r: t });
          if (!z(h))
            return g;
          a3 + h >= v ? p > u + m && p < u + l - m ? g.splice(3, 1, ["L", a3 + v, p - 6], ["L", a3 + v + 6, p], ["L", a3 + v, p + 6], ["L", a3 + v, u + l - t]) : g.splice(3, 1, ["L", a3 + v, l / 2], ["L", h, p], ["L", a3 + v, l / 2], ["L", a3 + v, u + l - t]) : 0 >= a3 + h ? p > u + m && p < u + l - m ? g.splice(7, 1, ["L", a3, p + 6], ["L", a3 - 6, p], ["L", a3, p - 6], ["L", a3, u + t]) : g.splice(7, 1, ["L", a3, l / 2], ["L", h, p], ["L", a3, l / 2], ["L", a3, u + t]) : p && p > l && h > a3 + m && h < a3 + v - m ? g.splice(5, 1, [
            "L",
            h + 6,
            u + l
          ], ["L", h, u + l + 6], ["L", h - 6, u + l], ["L", a3 + t, u + l]) : p && 0 > p && h > a3 + m && h < a3 + v - m && g.splice(1, 1, ["L", h - 6, u], ["L", h, u - 6], ["L", h + 6, u], ["L", v - t, u]);
          return g;
        }, circle: function(a3, u, v, l) {
          return x(a3 + v / 2, u + l / 2, v / 2, l / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
        }, diamond: function(a3, u, v, l) {
          return [["M", a3 + v / 2, u], ["L", a3 + v, u + l / 2], ["L", a3 + v / 2, u + l], ["L", a3, u + l / 2], ["Z"]];
        }, rect: I, roundedRect: L, square: I, triangle: function(a3, u, v, l) {
          return [["M", a3 + v / 2, u], ["L", a3 + v, u + l], ["L", a3, u + l], ["Z"]];
        }, "triangle-down": function(a3, u, v, l) {
          return [[
            "M",
            a3,
            u
          ], ["L", a3 + v, u], ["L", a3 + v / 2, u + l], ["Z"]];
        } };
      });
      M(a, "Core/Renderer/SVG/TextBuilder.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { doc: x, SVG_NS: C, win: z } = y, { attr: H, extend: B, fireEvent: u, isString: v, objectEach: l, pick: p } = I;
        class t {
          constructor(a3) {
            const h = a3.styles;
            this.renderer = a3.renderer;
            this.svgElement = a3;
            this.width = a3.textWidth;
            this.textLineHeight = h && h.lineHeight;
            this.textOutline = h && h.textOutline;
            this.ellipsis = !(!h || "ellipsis" !== h.textOverflow);
            this.noWrap = !(!h || "nowrap" !== h.whiteSpace);
          }
          buildSVG() {
            const m = this.svgElement, h = m.element;
            var g = m.renderer, e = p(m.textStr, "").toString();
            const w = -1 !== e.indexOf("<"), l2 = h.childNodes;
            g = !m.added && g.box;
            const t2 = /<br.*?>/g;
            var d = [e, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, m.getStyle("font-size"), this.width].join();
            if (d !== m.textCache) {
              m.textCache = d;
              delete m.actualWidth;
              for (d = l2.length; d--; )
                h.removeChild(l2[d]);
              w || this.ellipsis || this.width || m.textPath || -1 !== e.indexOf(" ") && (!this.noWrap || t2.test(e)) ? "" !== e && (g && g.appendChild(h), e = new a2(e), this.modifyTree(e.nodes), e.addToDOM(h), this.modifyDOM(), this.ellipsis && -1 !== (h.textContent || "").indexOf("…") && m.attr("title", this.unescapeEntities(m.textStr || "", ["&lt;", "&gt;"])), g && g.removeChild(h)) : h.appendChild(x.createTextNode(this.unescapeEntities(e)));
              v(this.textOutline) && m.applyTextOutline && m.applyTextOutline(this.textOutline);
            }
          }
          modifyDOM() {
            const a3 = this.svgElement, h = H(a3.element, "x");
            a3.firstLineMetrics = void 0;
            let g;
            for (; g = a3.element.firstChild; )
              if (/^[\s\u200B]*$/.test(g.textContent || " "))
                a3.element.removeChild(g);
              else
                break;
            [].forEach.call(a3.element.querySelectorAll("tspan.highcharts-br"), (e2, d) => {
              e2.nextSibling && e2.previousSibling && (0 === d && 1 === e2.previousSibling.nodeType && (a3.firstLineMetrics = a3.renderer.fontMetrics(e2.previousSibling)), H(e2, { dy: this.getLineHeight(e2.nextSibling), x: h }));
            });
            const e = this.width || 0;
            if (e) {
              var w = (g2, d) => {
                var k = g2.textContent || "";
                const r = k.replace(/([^\^])-/g, "$1- ").split(" ");
                var q = !this.noWrap && (1 < r.length || 1 < a3.element.childNodes.length);
                const m = this.getLineHeight(d);
                let b = 0, f = a3.actualWidth;
                if (this.ellipsis)
                  k && this.truncate(g2, k, void 0, 0, Math.max(0, e - 0.8 * m), (b2, f2) => b2.substring(0, f2) + "…");
                else if (q) {
                  k = [];
                  for (q = []; d.firstChild && d.firstChild !== g2; )
                    q.push(d.firstChild), d.removeChild(d.firstChild);
                  for (; r.length; )
                    r.length && !this.noWrap && 0 < b && (k.push(g2.textContent || ""), g2.textContent = r.join(" ").replace(/- /g, "-")), this.truncate(g2, void 0, r, 0 === b ? f || 0 : 0, e, (b2, f2) => r.slice(0, f2).join(" ").replace(/- /g, "-")), f = a3.actualWidth, b++;
                  q.forEach((b2) => {
                    d.insertBefore(b2, g2);
                  });
                  k.forEach((b2) => {
                    d.insertBefore(x.createTextNode(b2), g2);
                    b2 = x.createElementNS(C, "tspan");
                    b2.textContent = "​";
                    H(b2, { dy: m, x: h });
                    d.insertBefore(b2, g2);
                  });
                }
              }, l2 = (e2) => {
                [].slice.call(e2.childNodes).forEach((d) => {
                  d.nodeType === z.Node.TEXT_NODE ? w(d, e2) : (-1 !== d.className.baseVal.indexOf("highcharts-br") && (a3.actualWidth = 0), l2(d));
                });
              };
              l2(a3.element);
            }
          }
          getLineHeight(a3) {
            a3 = a3.nodeType === z.Node.TEXT_NODE ? a3.parentElement : a3;
            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(a3 || this.svgElement.element).h;
          }
          modifyTree(a3) {
            const h = (g, e) => {
              const { attributes: m = {}, children: l2, style: p2 = {}, tagName: d } = g, k = this.renderer.styledMode;
              if ("b" === d || "strong" === d)
                k ? m["class"] = "highcharts-strong" : p2.fontWeight = "bold";
              else if ("i" === d || "em" === d)
                k ? m["class"] = "highcharts-emphasized" : p2.fontStyle = "italic";
              p2 && p2.color && (p2.fill = p2.color);
              "br" === d ? (m["class"] = "highcharts-br", g.textContent = "​", (e = a3[e + 1]) && e.textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))) : "a" === d && l2 && l2.some((d2) => "#text" === d2.tagName) && (g.children = [{ children: l2, tagName: "tspan" }]);
              "#text" !== d && "a" !== d && (g.tagName = "tspan");
              B(g, { attributes: m, style: p2 });
              l2 && l2.filter((d2) => "#text" !== d2.tagName).forEach(h);
            };
            a3.forEach(h);
            u(this.svgElement, "afterModifyTree", { nodes: a3 });
          }
          truncate(a3, h, g, e, l2, p2) {
            const m = this.svgElement, { rotation: d } = m, k = [];
            let r = g ? 1 : 0, q = (h || g || "").length, w = q, b, f;
            const c = function(b2, c2) {
              b2 = c2 || b2;
              if ((c2 = a3.parentNode) && "undefined" === typeof k[b2] && c2.getSubStringLength)
                try {
                  k[b2] = e + c2.getSubStringLength(0, g ? b2 + 1 : b2);
                } catch (D) {
                  "";
                }
              return k[b2];
            };
            m.rotation = 0;
            f = c(a3.textContent.length);
            if (e + f > l2) {
              for (; r <= q; )
                w = Math.ceil((r + q) / 2), g && (b = p2(g, w)), f = c(w, b && b.length - 1), r === q ? r = q + 1 : f > l2 ? q = w - 1 : r = w;
              0 === q ? a3.textContent = "" : h && q === h.length - 1 || (a3.textContent = b || p2(h || g, w));
            }
            g && g.splice(0, w);
            m.actualWidth = f;
            m.rotation = d;
          }
          unescapeEntities(a3, h) {
            l(this.renderer.escapes, function(g, e) {
              h && -1 !== h.indexOf(g) || (a3 = a3.toString().replace(new RegExp(g, "g"), e));
            });
            return a3;
          }
        }
        return t;
      });
      M(a, "Core/Renderer/SVG/SVGRenderer.js", [
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGLabel.js"],
        a["Core/Renderer/SVG/Symbols.js"],
        a["Core/Renderer/SVG/TextBuilder.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C, z, H, B, u) {
        const { charts: v, deg2rad: l, doc: p, isFirefox: t, isMS: m, isWebKit: h, noop: g, SVG_NS: e, symbolSizes: w, win: E } = I, { addEvent: F, attr: d, createElement: k, css: r, defined: q, destroyObjectProperties: G, extend: b, isArray: f, isNumber: c, isObject: n, isString: P, merge: D, pick: K, pInt: x, uniqueKey: T } = u;
        let Z;
        class V {
          constructor(b2, c2, f2, d2, a3, k2, n2) {
            this.width = this.url = this.style = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
            this.init(b2, c2, f2, d2, a3, k2, n2);
          }
          init(b2, c2, f2, a3, k2, n2, J) {
            const A = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), e2 = A.element;
            J || A.css(this.getStyle(a3));
            b2.appendChild(e2);
            d(b2, "dir", "ltr");
            -1 === b2.innerHTML.indexOf("xmlns") && d(e2, "xmlns", this.SVG_NS);
            this.box = e2;
            this.boxWrapper = A;
            this.alignedObjects = [];
            this.url = this.getReferenceURL();
            this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 11.1.0"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = n2;
            this.forExport = k2;
            this.styledMode = J;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.rootFontSize = A.getStyle("font-size");
            this.setSize(c2, f2, false);
            let q2;
            t && b2.getBoundingClientRect && (c2 = function() {
              r(b2, { left: 0, top: 0 });
              q2 = b2.getBoundingClientRect();
              r(b2, { left: Math.ceil(q2.left) - q2.left + "px", top: Math.ceil(q2.top) - q2.top + "px" });
            }, c2(), this.unSubPixelFix = F(E, "resize", c2));
          }
          definition(b2) {
            return new a2([b2]).addToDOM(this.defs.element);
          }
          getReferenceURL() {
            if ((t || h) && p.getElementsByTagName("base").length) {
              if (!q(Z)) {
                var b2 = T();
                b2 = new a2([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: b2 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${b2})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(p.body);
                r(b2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                const c2 = p.elementFromPoint(6, 6);
                Z = "hitme" === (c2 && c2.id);
                p.body.removeChild(b2);
              }
              if (Z)
                return E.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
            }
            return "";
          }
          getStyle(c2) {
            return this.style = b({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, c2);
          }
          setStyle(b2) {
            this.boxWrapper.css(this.getStyle(b2));
          }
          isHidden() {
            return !this.boxWrapper.getBBox().width;
          }
          destroy() {
            const b2 = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            G(this.gradients || {});
            this.gradients = null;
            this.defs = b2.destroy();
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          }
          createElement(b2) {
            const c2 = new this.Element();
            c2.init(this, b2);
            return c2;
          }
          getRadialAttr(b2, c2) {
            return { cx: b2[0] - b2[2] / 2 + (c2.cx || 0) * b2[2], cy: b2[1] - b2[2] / 2 + (c2.cy || 0) * b2[2], r: (c2.r || 0) * b2[2] };
          }
          shadowDefinition(b2) {
            const c2 = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(b2).map((c3) => b2[c3])].join("-").replace(/[^a-z0-9\-]/g, ""), f2 = D({
              color: "#000000",
              offsetX: 1,
              offsetY: 1,
              opacity: 0.15,
              width: 5
            }, b2);
            this.defs.element.querySelector(`#${c2}`) || this.definition({ tagName: "filter", attributes: { id: c2 }, children: [{ tagName: "feDropShadow", attributes: { dx: f2.offsetX, dy: f2.offsetY, "flood-color": f2.color, "flood-opacity": Math.min(5 * f2.opacity, 1), stdDeviation: f2.width / 2 } }] });
            return c2;
          }
          buildText(b2) {
            new B(b2).buildSVG();
          }
          getContrast(b2) {
            b2 = y.parse(b2).rgba.map((b3) => {
              b3 /= 255;
              return 0.03928 >= b3 ? b3 / 12.92 : Math.pow((b3 + 0.055) / 1.055, 2.4);
            });
            b2 = 0.2126 * b2[0] + 0.7152 * b2[1] + 0.0722 * b2[2];
            return 1.05 / (b2 + 0.05) > (b2 + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          button(c2, f2, d2, k2, e2 = {}, q2, J, g2, r2, h2) {
            const A = this.label(c2, f2, d2, r2, void 0, void 0, h2, void 0, "button"), O = this.styledMode;
            c2 = e2.states || {};
            let N = 0;
            e2 = D(e2);
            delete e2.states;
            const l2 = D({ color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, e2.style);
            delete e2.style;
            let w2 = a2.filterUserAttributes(e2);
            A.attr(D({ padding: 8, r: 2 }, w2));
            let p2, G2, R;
            O || (w2 = D({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, w2), q2 = D(w2, { fill: "#e6e6e6" }, a2.filterUserAttributes(q2 || c2.hover || {})), p2 = q2.style, delete q2.style, J = D(w2, { fill: "#e6e9ff", style: {
              color: "#000000",
              fontWeight: "bold"
            } }, a2.filterUserAttributes(J || c2.select || {})), G2 = J.style, delete J.style, g2 = D(w2, { style: { color: "#cccccc" } }, a2.filterUserAttributes(g2 || c2.disabled || {})), R = g2.style, delete g2.style);
            F(A.element, m ? "mouseover" : "mouseenter", function() {
              3 !== N && A.setState(1);
            });
            F(A.element, m ? "mouseout" : "mouseleave", function() {
              3 !== N && A.setState(N);
            });
            A.setState = function(b2) {
              1 !== b2 && (A.state = N = b2);
              A.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
                "normal",
                "hover",
                "pressed",
                "disabled"
              ][b2 || 0]);
              O || (A.attr([w2, q2, J, g2][b2 || 0]), b2 = [l2, p2, G2, R][b2 || 0], n(b2) && A.css(b2));
            };
            O || (A.attr(w2).css(b({ cursor: "default" }, l2)), h2 && A.text.css({ pointerEvents: "none" }));
            return A.on("touchstart", (b2) => b2.stopPropagation()).on("click", function(b2) {
              3 !== N && k2.call(A, b2);
            });
          }
          crispLine(b2, c2, f2 = "round") {
            const d2 = b2[0], a3 = b2[1];
            q(d2[1]) && d2[1] === a3[1] && (d2[1] = a3[1] = Math[f2](d2[1]) - c2 % 2 / 2);
            q(d2[2]) && d2[2] === a3[2] && (d2[2] = a3[2] = Math[f2](d2[2]) + c2 % 2 / 2);
            return b2;
          }
          path(c2) {
            const d2 = this.styledMode ? {} : { fill: "none" };
            f(c2) ? d2.d = c2 : n(c2) && b(d2, c2);
            return this.createElement("path").attr(d2);
          }
          circle(b2, c2, f2) {
            b2 = n(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: c2, r: f2 };
            c2 = this.createElement("circle");
            c2.xSetter = c2.ySetter = function(b3, c3, f3) {
              f3.setAttribute("c" + c3, b3);
            };
            return c2.attr(b2);
          }
          arc(b2, c2, f2, d2, a3, k2) {
            n(b2) ? (d2 = b2, c2 = d2.y, f2 = d2.r, b2 = d2.x) : d2 = { innerR: d2, start: a3, end: k2 };
            b2 = this.symbol("arc", b2, c2, f2, f2, d2);
            b2.r = f2;
            return b2;
          }
          rect(c2, f2, a3, k2, e2, q2) {
            c2 = n(c2) ? c2 : "undefined" === typeof c2 ? {} : { x: c2, y: f2, r: e2, width: Math.max(a3 || 0, 0), height: Math.max(k2 || 0, 0) };
            const A = this.createElement("rect");
            this.styledMode || ("undefined" !== typeof q2 && (c2["stroke-width"] = q2, b(c2, A.crisp(c2))), c2.fill = "none");
            A.rSetter = function(b2, c3, f3) {
              A.r = b2;
              d(f3, { rx: b2, ry: b2 });
            };
            A.rGetter = function() {
              return A.r || 0;
            };
            return A.attr(c2);
          }
          roundedRect(b2) {
            return this.symbol("roundedRect").attr(b2);
          }
          setSize(b2, c2, f2) {
            this.width = b2;
            this.height = c2;
            this.boxWrapper.animate({ width: b2, height: c2 }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: K(f2, true) ? void 0 : 0 });
            this.alignElements();
          }
          g(b2) {
            const c2 = this.createElement("g");
            return b2 ? c2.attr({ "class": "highcharts-" + b2 }) : c2;
          }
          image(b2, f2, d2, a3, k2, n2) {
            const A = { preserveAspectRatio: "none" };
            c(f2) && (A.x = f2);
            c(d2) && (A.y = d2);
            c(a3) && (A.width = a3);
            c(k2) && (A.height = k2);
            const e2 = this.createElement("image").attr(A);
            f2 = function(c2) {
              e2.attr({ href: b2 });
              n2.call(e2, c2);
            };
            n2 ? (e2.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }), d2 = new E.Image(), F(d2, "load", f2), d2.src = b2, d2.complete && f2({})) : e2.attr({ href: b2 });
            return e2;
          }
          symbol(c2, f2, a3, n2, e2, g2) {
            const A = this, h2 = /^url\((.*?)\)$/, O = h2.test(c2), m2 = !O && (this.symbols[c2] ? c2 : "circle"), l2 = m2 && this.symbols[m2];
            let D2, G2, P2, t2;
            if (l2)
              "number" === typeof f2 && (G2 = l2.call(this.symbols, Math.round(f2 || 0), Math.round(a3 || 0), n2 || 0, e2 || 0, g2)), D2 = this.path(G2), A.styledMode || D2.attr("fill", "none"), b(D2, { symbolName: m2 || void 0, x: f2, y: a3, width: n2, height: e2 }), g2 && b(D2, g2);
            else if (O) {
              P2 = c2.match(h2)[1];
              const b2 = D2 = this.image(P2);
              b2.imgwidth = K(g2 && g2.width, w[P2] && w[P2].width);
              b2.imgheight = K(g2 && g2.height, w[P2] && w[P2].height);
              t2 = (b3) => b3.attr({ width: b3.width, height: b3.height });
              ["width", "height"].forEach(function(c3) {
                b2[c3 + "Setter"] = function(b3, c4) {
                  this[c4] = b3;
                  const {
                    alignByTranslate: f3,
                    element: a4,
                    width: k2,
                    height: A2,
                    imgwidth: n3,
                    imgheight: e3
                  } = this;
                  b3 = this["img" + c4];
                  if (q(b3)) {
                    let J = 1;
                    g2 && "within" === g2.backgroundSize && k2 && A2 ? (J = Math.min(k2 / n3, A2 / e3), d(a4, { width: Math.round(n3 * J), height: Math.round(e3 * J) })) : a4 && a4.setAttribute(c4, b3);
                    f3 || this.translate(((k2 || 0) - n3 * J) / 2, ((A2 || 0) - e3 * J) / 2);
                  }
                };
              });
              q(f2) && b2.attr({ x: f2, y: a3 });
              b2.isImg = true;
              q(b2.imgwidth) && q(b2.imgheight) ? t2(b2) : (b2.attr({ width: 0, height: 0 }), k("img", { onload: function() {
                const c3 = v[A.chartIndex];
                0 === this.width && (r(this, { position: "absolute", top: "-999em" }), p.body.appendChild(this));
                w[P2] = {
                  width: this.width,
                  height: this.height
                };
                b2.imgwidth = this.width;
                b2.imgheight = this.height;
                b2.element && t2(b2);
                this.parentNode && this.parentNode.removeChild(this);
                A.imgCount--;
                if (!A.imgCount && c3 && !c3.hasLoaded)
                  c3.onload();
              }, src: P2 }), this.imgCount++);
            }
            return D2;
          }
          clipRect(b2, c2, f2, d2) {
            const a3 = T() + "-", k2 = this.createElement("clipPath").attr({ id: a3 }).add(this.defs);
            b2 = this.rect(b2, c2, f2, d2, 0).add(k2);
            b2.id = a3;
            b2.clipPath = k2;
            b2.count = 0;
            return b2;
          }
          text(b2, c2, f2, d2) {
            const a3 = {};
            if (d2 && (this.allowHTML || !this.forExport))
              return this.html(b2, c2, f2);
            a3.x = Math.round(c2 || 0);
            f2 && (a3.y = Math.round(f2));
            q(b2) && (a3.text = b2);
            b2 = this.createElement("text").attr(a3);
            if (!d2 || this.forExport && !this.allowHTML)
              b2.xSetter = function(b3, c3, f3) {
                const d3 = f3.getElementsByTagName("tspan"), a4 = f3.getAttribute(c3);
                for (let f4 = 0, k2; f4 < d3.length; f4++)
                  k2 = d3[f4], k2.getAttribute(c3) === a4 && k2.setAttribute(c3, b3);
                f3.setAttribute(c3, b3);
              };
            return b2;
          }
          fontMetrics(b2) {
            b2 = x(C.prototype.getStyle.call(b2, "font-size") || 0);
            const c2 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
            return { h: c2, b: Math.round(0.8 * c2), f: b2 };
          }
          rotCorr(b2, c2, f2) {
            let d2 = b2;
            c2 && f2 && (d2 = Math.max(d2 * Math.cos(c2 * l), 4));
            return { x: -b2 / 3 * Math.sin(c2 * l), y: d2 };
          }
          pathToSegments(b2) {
            const f2 = [], d2 = [], a3 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
            for (let k2 = 0; k2 < b2.length; k2++)
              P(d2[0]) && c(b2[k2]) && d2.length === a3[d2[0].toUpperCase()] && b2.splice(k2, 0, d2[0].replace("M", "L").replace("m", "l")), "string" === typeof b2[k2] && (d2.length && f2.push(d2.slice(0)), d2.length = 0), d2.push(b2[k2]);
            f2.push(d2.slice(0));
            return f2;
          }
          label(b2, c2, f2, d2, a3, k2, n2, e2, q2) {
            return new z(this, b2, c2, f2, d2, a3, k2, n2, e2, q2);
          }
          alignElements() {
            this.alignedObjects.forEach((b2) => b2.align());
          }
        }
        b(V.prototype, {
          Element: C,
          SVG_NS: e,
          escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
          symbols: H,
          draw: g
        });
        L.registerRendererType("svg", V, true);
        "";
        return V;
      });
      M(a, "Core/Renderer/HTML/HTMLElement.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { isFirefox: x, isMS: C, isWebKit: z, win: H } = a2, { css: B, defined: u, extend: v, pick: l, pInt: p } = I, t = [];
        class m extends y {
          static compose(a3) {
            if (I.pushUnique(t, a3)) {
              const g = m.prototype, e = a3.prototype;
              e.getSpanCorrection = g.getSpanCorrection;
              e.htmlCss = g.htmlCss;
              e.htmlGetBBox = g.htmlGetBBox;
              e.htmlUpdateTransform = g.htmlUpdateTransform;
              e.setSpanRotation = g.setSpanRotation;
            }
            return a3;
          }
          getSpanCorrection(a3, g, e) {
            this.xCorr = -a3 * e;
            this.yCorr = -g;
          }
          htmlCss(a3) {
            const g = "SPAN" === this.element.tagName && a3 && "width" in a3, e = l(g && a3.width, void 0);
            let h;
            g && (delete a3.width, this.textWidth = e, h = true);
            a3 && "ellipsis" === a3.textOverflow && (a3.whiteSpace = "nowrap", a3.overflow = "hidden");
            this.styles = v(this.styles, a3);
            B(this.element, a3);
            h && this.htmlUpdateTransform();
            return this;
          }
          htmlGetBBox() {
            const a3 = this.element;
            return { x: a3.offsetLeft, y: a3.offsetTop, width: a3.offsetWidth, height: a3.offsetHeight };
          }
          htmlUpdateTransform() {
            if (this.added) {
              var a3 = this.renderer, g = this.element, e = this.x || 0, m2 = this.y || 0, l2 = this.textAlign || "left", t2 = { left: 0, center: 0.5, right: 1 }[l2], d = this.styles, k = d && d.whiteSpace;
              B(g, { marginLeft: this.translateX || 0, marginTop: this.translateY || 0 });
              if ("SPAN" === g.tagName) {
                d = this.rotation;
                const q = this.textWidth && p(this.textWidth), h = [d, l2, g.innerHTML, this.textWidth, this.textAlign].join();
                let b = false;
                if (q !== this.oldTextWidth) {
                  if (this.textPxLength)
                    var r = this.textPxLength;
                  else
                    B(g, { width: "", whiteSpace: k || "nowrap" }), r = g.offsetWidth;
                  (q > this.oldTextWidth || r > q) && (/[ \-]/.test(g.textContent || g.innerText) || "ellipsis" === g.style.textOverflow) && (B(g, { width: r > q || d ? q + "px" : "auto", display: "block", whiteSpace: k || "normal" }), this.oldTextWidth = q, b = true);
                }
                this.hasBoxWidthChanged = b;
                h !== this.cTT && (a3 = a3.fontMetrics(g).b, !u(d) || d === (this.oldRotation || 0) && l2 === this.oldAlign || this.setSpanRotation(d, t2, a3), this.getSpanCorrection(!u(d) && this.textPxLength || g.offsetWidth, a3, t2, d, l2));
                B(g, { left: e + (this.xCorr || 0) + "px", top: m2 + (this.yCorr || 0) + "px" });
                this.cTT = h;
                this.oldRotation = d;
                this.oldAlign = l2;
              }
            } else
              this.alignOnAdd = true;
          }
          setSpanRotation(a3, g, e) {
            const h = {}, m2 = C && !/Edge/.test(H.navigator.userAgent) ? "-ms-transform" : z ? "-webkit-transform" : x ? "MozTransform" : H.opera ? "-o-transform" : void 0;
            m2 && (h[m2] = h.transform = "rotate(" + a3 + "deg)", h[m2 + (x ? "Origin" : "-origin")] = h.transformOrigin = 100 * g + "% " + e + "px", B(this.element, h));
          }
        }
        return m;
      });
      M(a, "Core/Renderer/HTML/HTMLRenderer.js", [
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L) {
        const { attr: x, createElement: z, extend: H, pick: B } = L, u = [];
        class v extends I {
          static compose(a3) {
            L.pushUnique(u, a3) && (a3.prototype.html = v.prototype.html);
            return a3;
          }
          html(l, p, t) {
            const m = this.createElement("span"), h = m.element, g = m.renderer, e = function(a3, e2) {
              ["opacity", "visibility"].forEach(function(g2) {
                a3[g2 + "Setter"] = function(d, k, r) {
                  const q = a3.div ? a3.div.style : e2;
                  y.prototype[g2 + "Setter"].call(this, d, k, r);
                  q && (q[k] = d);
                };
              });
              a3.addedSetters = true;
            };
            m.textSetter = function(e2) {
              e2 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a2.setElementHTML(this.element, B(e2, "")), this.textStr = e2, m.doTransform = true);
            };
            e(m, m.element.style);
            m.xSetter = m.ySetter = m.alignSetter = m.rotationSetter = function(a3, e2) {
              "align" === e2 ? m.alignValue = m.textAlign = a3 : m[e2] = a3;
              m.doTransform = true;
            };
            m.afterSetters = function() {
              this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
            };
            m.attr({ text: l, x: Math.round(p), y: Math.round(t) }).css({ position: "absolute" });
            g.styledMode || m.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
            h.style.whiteSpace = "nowrap";
            m.css = m.htmlCss;
            m.add = function(a3) {
              const l2 = g.box.parentNode, w = [];
              let d;
              if (this.parentGroup = a3) {
                if (d = a3.div, !d) {
                  for (; a3; )
                    w.push(a3), a3 = a3.parentGroup;
                  w.reverse().forEach(function(a4) {
                    function k(f, c) {
                      a4[c] = f;
                      "translateX" === c ? b.left = f + "px" : b.top = f + "px";
                      a4.doTransform = true;
                    }
                    const q = x(a4.element, "class"), g2 = a4.styles || {};
                    d = a4.div = a4.div || z("div", q ? { className: q } : void 0, { position: "absolute", left: (a4.translateX || 0) + "px", top: (a4.translateY || 0) + "px", display: a4.display, opacity: a4.opacity, visibility: a4.visibility }, d || l2);
                    const b = d.style;
                    H(a4, { classSetter: function(b2) {
                      return function(c) {
                        this.element.setAttribute("class", c);
                        b2.className = c;
                      };
                    }(d), css: function(f) {
                      m.css.call(a4, f);
                      ["cursor", "pointerEvents"].forEach((c) => {
                        f[c] && (b[c] = f[c]);
                      });
                      return a4;
                    }, on: function() {
                      w[0].div && m.on.apply({ element: w[0].div, onEvents: a4.onEvents }, arguments);
                      return a4;
                    }, translateXSetter: k, translateYSetter: k });
                    a4.addedSetters || e(a4);
                    a4.css(g2);
                  });
                }
              } else
                d = l2;
              d.appendChild(h);
              m.added = true;
              m.alignOnAdd && m.htmlUpdateTransform();
              return m;
            };
            return m;
          }
        }
        return v;
      });
      M(a, "Core/Axis/AxisDefaults.js", [], function() {
        var a2;
        (function(a3) {
          a3.defaultXAxisOptions = {
            alignTicks: true,
            allowDecimals: void 0,
            panningEnabled: true,
            zIndex: 2,
            zoomEnabled: true,
            dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e %b" }, week: { main: "%e %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } },
            endOnTick: false,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: { autoRotation: void 0, autoRotationLimit: 80, distance: 15, enabled: true, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: false, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em" } },
            maxPadding: 0.01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minorTicksPerMajor: 5,
            minPadding: 0.01,
            offset: void 0,
            opposite: false,
            reversed: void 0,
            reversedStacks: false,
            showEmpty: true,
            showFirstLabel: true,
            showLastLabel: true,
            startOfWeek: 1,
            startOnTick: false,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: { align: "middle", rotation: 0, useHTML: false, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } },
            type: "linear",
            uniqueNames: true,
            visible: true,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#333333",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#333333"
          };
          a3.defaultYAxisOptions = {
            reversedStacks: true,
            endOnTick: true,
            maxPadding: 0.05,
            minPadding: 0.05,
            tickPixelInterval: 72,
            showLastLabel: true,
            labels: { x: void 0 },
            startOnTick: true,
            title: { rotation: 270, text: "Values" },
            stackLabels: { animation: {}, allowOverlap: false, enabled: false, crop: true, overflow: "justify", formatter: function() {
              const { numberFormatter: a4 } = this.axis.chart;
              return a4(this.total || 0, -1);
            }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } },
            gridLineWidth: 1,
            lineWidth: 0
          };
          a3.defaultLeftAxisOptions = { title: { rotation: 270 } };
          a3.defaultRightAxisOptions = { title: { rotation: 90 } };
          a3.defaultBottomAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } };
          a3.defaultTopAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } };
        })(a2 || (a2 = {}));
        return a2;
      });
      M(a, "Core/Foundation.js", [a["Core/Utilities.js"]], function(a2) {
        const { addEvent: x, isFunction: I, objectEach: L, removeEvent: C } = a2;
        var z;
        (function(a3) {
          a3.registerEventOptions = function(a4, u) {
            a4.eventOptions = a4.eventOptions || {};
            L(u.events, function(v, l) {
              a4.eventOptions[l] !== v && (a4.eventOptions[l] && (C(a4, l, a4.eventOptions[l]), delete a4.eventOptions[l]), I(v) && (a4.eventOptions[l] = v, x(a4, l, v, { order: 0 })));
            });
          };
        })(z || (z = {}));
        return z;
      });
      M(a, "Core/Axis/Tick.js", [a["Core/Templating.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { deg2rad: x } = y, { clamp: C, correctFloat: z, defined: H, destroyObjectProperties: B, extend: u, fireEvent: v, isNumber: l, merge: p, objectEach: t, pick: m } = I;
        class h {
          constructor(a3, e, h2, m2, l2) {
            this.isNewLabel = this.isNew = true;
            this.axis = a3;
            this.pos = e;
            this.type = h2 || "";
            this.parameters = l2 || {};
            this.tickmarkOffset = this.parameters.tickmarkOffset;
            this.options = this.parameters.options;
            v(this, "init");
            h2 || m2 || this.addLabel();
          }
          addLabel() {
            const g = this, e = g.axis;
            var h2 = e.options;
            const p2 = e.chart;
            var t2 = e.categories;
            const d = e.logarithmic, k = e.names, r = g.pos, q = m(g.options && g.options.labels, h2.labels);
            var G = e.tickPositions;
            const b = r === G[0], f = r === G[G.length - 1], c = (!q.step || 1 === q.step) && 1 === e.tickInterval;
            G = G.info;
            let n = g.label, P, D, K;
            t2 = this.parameters.category || (t2 ? m(t2[r], k[r], r) : r);
            d && l(t2) && (t2 = z(d.lin2log(t2)));
            e.dateTime && (G ? (D = p2.time.resolveDTLFormat(h2.dateTimeLabelFormats[!h2.grid && G.higherRanks[r] || G.unitName]), P = D.main) : l(t2) && (P = e.dateTime.getXDateFormat(t2, h2.dateTimeLabelFormats || {})));
            g.isFirst = b;
            g.isLast = f;
            const x2 = { axis: e, chart: p2, dateTimeLabelFormat: P, isFirst: b, isLast: f, pos: r, tick: g, tickPositionInfo: G, value: t2 };
            v(this, "labelFormat", x2);
            const B2 = (b2) => q.formatter ? q.formatter.call(b2, b2) : q.format ? (b2.text = e.defaultLabelFormatter.call(b2, b2), a2.format(q.format, b2, p2)) : e.defaultLabelFormatter.call(b2, b2);
            h2 = B2.call(x2, x2);
            const y2 = D && D.list;
            g.shortenLabel = y2 ? function() {
              for (K = 0; K < y2.length; K++)
                if (u(
                  x2,
                  { dateTimeLabelFormat: y2[K] }
                ), n.attr({ text: B2.call(x2, x2) }), n.getBBox().width < e.getSlotWidth(g) - 2 * q.padding)
                  return;
              n.attr({ text: "" });
            } : void 0;
            c && e._addedPlotLB && g.moveLabel(h2, q);
            H(n) || g.movedLabel ? n && n.textStr !== h2 && !c && (!n.textWidth || q.style.width || n.styles.width || n.css({ width: null }), n.attr({ text: h2 }), n.textPxLength = n.getBBox().width) : (g.label = n = g.createLabel({ x: 0, y: 0 }, h2, q), g.rotation = 0);
          }
          createLabel(a3, e, h2) {
            const g = this.axis, m2 = g.chart;
            if (a3 = H(e) && h2.enabled ? m2.renderer.text(e, a3.x, a3.y, h2.useHTML).add(g.labelGroup) : null)
              m2.styledMode || a3.css(p(h2.style)), a3.textPxLength = a3.getBBox().width;
            return a3;
          }
          destroy() {
            B(this, this.axis);
          }
          getPosition(a3, e, h2, m2) {
            const g = this.axis, d = g.chart, k = m2 && d.oldChartHeight || d.chartHeight;
            a3 = { x: a3 ? z(g.translate(e + h2, void 0, void 0, m2) + g.transB) : g.left + g.offset + (g.opposite ? (m2 && d.oldChartWidth || d.chartWidth) - g.right - g.left : 0), y: a3 ? k - g.bottom + g.offset - (g.opposite ? g.height : 0) : z(k - g.translate(e + h2, void 0, void 0, m2) - g.transB) };
            a3.y = C(a3.y, -1e5, 1e5);
            v(this, "afterGetPosition", { pos: a3 });
            return a3;
          }
          getLabelPosition(a3, e, h2, l2, p2, d, k, r) {
            const q = this.axis, g = q.transA, b = q.isLinked && q.linkedParent ? q.linkedParent.reversed : q.reversed, f = q.staggerLines, c = q.tickRotCorr || { x: 0, y: 0 }, n = l2 || q.reserveSpaceDefault ? 0 : -q.labelOffset * ("center" === q.labelAlign ? 0.5 : 1), w = p2.distance, D = {};
            h2 = 0 === q.side ? h2.rotation ? -w : -h2.getBBox().height : 2 === q.side ? c.y + w : Math.cos(h2.rotation * x) * (c.y - h2.getBBox(false, 0).height / 2);
            H(p2.y) && (h2 = 0 === q.side && q.horiz ? p2.y + h2 : p2.y);
            a3 = a3 + m(p2.x, [0, 1, 0, -1][q.side] * w) + n + c.x - (d && l2 ? d * g * (b ? -1 : 1) : 0);
            e = e + h2 - (d && !l2 ? d * g * (b ? 1 : -1) : 0);
            f && (l2 = k / (r || 1) % f, q.opposite && (l2 = f - l2 - 1), e += q.labelOffset / f * l2);
            D.x = a3;
            D.y = Math.round(e);
            v(this, "afterGetLabelPosition", { pos: D, tickmarkOffset: d, index: k });
            return D;
          }
          getLabelSize() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          }
          getMarkPath(a3, e, h2, m2, l2, d) {
            return d.crispLine([["M", a3, e], ["L", a3 + (l2 ? 0 : -h2), e + (l2 ? h2 : 0)]], m2);
          }
          handleOverflow(a3) {
            const e = this.axis, g = e.options.labels, h2 = a3.x;
            var l2 = e.chart.chartWidth, d = e.chart.spacing;
            const k = m(e.labelLeft, Math.min(e.pos, d[3]));
            d = m(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, l2 - d[1]));
            const r = this.label, q = this.rotation, p2 = { left: 0, center: 0.5, right: 1 }[e.labelAlign || r.attr("align")], b = r.getBBox().width, f = e.getSlotWidth(this), c = {};
            let n = f, t2 = 1, D;
            if (q || "justify" !== g.overflow)
              0 > q && h2 - p2 * b < k ? D = Math.round(h2 / Math.cos(q * x) - k) : 0 < q && h2 + p2 * b > d && (D = Math.round((l2 - h2) / Math.cos(q * x)));
            else if (l2 = h2 + (1 - p2) * b, h2 - p2 * b < k ? n = a3.x + n * (1 - p2) - k : l2 > d && (n = d - a3.x + n * p2, t2 = -1), n = Math.min(f, n), n < f && "center" === e.labelAlign && (a3.x += t2 * (f - n - p2 * (f - Math.min(b, n)))), b > n || e.autoRotation && (r.styles || {}).width)
              D = n;
            D && (this.shortenLabel ? this.shortenLabel() : (c.width = Math.floor(D) + "px", (g.style || {}).textOverflow || (c.textOverflow = "ellipsis"), r.css(c)));
          }
          moveLabel(a3, e) {
            const g = this;
            var h2 = g.label;
            const m2 = g.axis;
            let d = false;
            h2 && h2.textStr === a3 ? (g.movedLabel = h2, d = true, delete g.label) : t(m2.ticks, function(k) {
              d || k.isNew || k === g || !k.label || k.label.textStr !== a3 || (g.movedLabel = k.label, d = true, k.labelPos = g.movedLabel.xy, delete k.label);
            });
            d || !g.labelPos && !h2 || (h2 = g.labelPos || h2.xy, g.movedLabel = g.createLabel(h2, a3, e), g.movedLabel && g.movedLabel.attr({ opacity: 0 }));
          }
          render(a3, e, h2) {
            var g = this.axis, l2 = g.horiz, d = this.pos, k = m(this.tickmarkOffset, g.tickmarkOffset);
            d = this.getPosition(l2, d, k, e);
            k = d.x;
            const r = d.y;
            g = l2 && k === g.pos + g.len || !l2 && r === g.pos ? -1 : 1;
            l2 = m(h2, this.label && this.label.newOpacity, 1);
            h2 = m(h2, 1);
            this.isActive = true;
            this.renderGridLine(e, h2, g);
            this.renderMark(d, h2, g);
            this.renderLabel(d, e, l2, a3);
            this.isNew = false;
            v(this, "afterRender");
          }
          renderGridLine(a3, e, h2) {
            const g = this.axis, l2 = g.options, d = {}, k = this.pos, r = this.type, q = m(this.tickmarkOffset, g.tickmarkOffset), p2 = g.chart.renderer;
            let b = this.gridLine, f = l2.gridLineWidth, c = l2.gridLineColor, n = l2.gridLineDashStyle;
            "minor" === this.type && (f = l2.minorGridLineWidth, c = l2.minorGridLineColor, n = l2.minorGridLineDashStyle);
            b || (g.chart.styledMode || (d.stroke = c, d["stroke-width"] = f || 0, d.dashstyle = n), r || (d.zIndex = 1), a3 && (e = 0), this.gridLine = b = p2.path().attr(d).addClass("highcharts-" + (r ? r + "-" : "") + "grid-line").add(g.gridGroup));
            if (b && (h2 = g.getPlotLinePath({ value: k + q, lineWidth: b.strokeWidth() * h2, force: "pass", old: a3, acrossPanes: false })))
              b[a3 || this.isNew ? "attr" : "animate"]({ d: h2, opacity: e });
          }
          renderMark(a3, e, h2) {
            const g = this.axis;
            var l2 = g.options;
            const d = g.chart.renderer, k = this.type, r = g.tickSize(k ? k + "Tick" : "tick"), q = a3.x;
            a3 = a3.y;
            const p2 = m(l2["minor" !== k ? "tickWidth" : "minorTickWidth"], !k && g.isXAxis ? 1 : 0);
            l2 = l2["minor" !== k ? "tickColor" : "minorTickColor"];
            let b = this.mark;
            const f = !b;
            r && (g.opposite && (r[0] = -r[0]), b || (this.mark = b = d.path().addClass("highcharts-" + (k ? k + "-" : "") + "tick").add(g.axisGroup), g.chart.styledMode || b.attr({ stroke: l2, "stroke-width": p2 })), b[f ? "attr" : "animate"]({ d: this.getMarkPath(q, a3, r[0], b.strokeWidth() * h2, g.horiz, d), opacity: e }));
          }
          renderLabel(a3, e, h2, p2) {
            var g = this.axis;
            const d = g.horiz, k = g.options, r = this.label, q = k.labels, t2 = q.step;
            g = m(this.tickmarkOffset, g.tickmarkOffset);
            const b = a3.x;
            a3 = a3.y;
            let f = true;
            r && l(b) && (r.xy = a3 = this.getLabelPosition(b, a3, r, d, q, g, p2, t2), this.isFirst && !this.isLast && !k.showFirstLabel || this.isLast && !this.isFirst && !k.showLastLabel ? f = false : !d || q.step || q.rotation || e || 0 === h2 || this.handleOverflow(a3), t2 && p2 % t2 && (f = false), f && l(a3.y) ? (a3.opacity = h2, r[this.isNewLabel ? "attr" : "animate"](a3).show(true), this.isNewLabel = false) : (r.hide(), this.isNewLabel = true));
          }
          replaceMovedLabel() {
            const a3 = this.label, e = this.axis;
            a3 && !this.isNew && (a3.animate({ opacity: 0 }, void 0, a3.destroy), delete this.label);
            e.isDirty = true;
            this.label = this.movedLabel;
            delete this.movedLabel;
          }
        }
        "";
        return h;
      });
      M(a, "Core/Axis/Axis.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/AxisDefaults.js"], a["Core/Color/Color.js"], a["Core/Defaults.js"], a["Core/Foundation.js"], a["Core/Globals.js"], a["Core/Axis/Tick.js"], a["Core/Utilities.js"]], function(a2, y, I, L, C, z, H, B) {
        const { animObject: u } = a2, { defaultOptions: v } = L, { registerEventOptions: l } = C, { deg2rad: p } = z, { arrayMax: t, arrayMin: m, clamp: h, correctFloat: g, defined: e, destroyObjectProperties: w, erase: x, error: F, extend: d, fireEvent: k, getClosestDistance: r, insertItem: q, isArray: G, isNumber: b, isString: f, merge: c, normalizeTickInterval: n, objectEach: P, pick: D, relativeLength: K, removeEvent: X, splat: T, syncTimeout: Z } = B, V = (b2, c2) => n(c2, void 0, void 0, D(b2.options.allowDecimals, 0.5 > c2 || void 0 !== b2.tickAmount), !!b2.tickAmount);
        class Y {
          constructor(b2, c2, f2) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.index = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0;
            this.init(b2, c2, f2);
          }
          init(c2, f2, a3 = this.coll) {
            const d2 = "xAxis" === a3;
            this.chart = c2;
            this.horiz = this.isZAxis || (c2.inverted ? !d2 : d2);
            this.isXAxis = d2;
            this.coll = a3;
            k(this, "init", { userOptions: f2 });
            this.opposite = D(f2.opposite, this.opposite);
            this.side = D(f2.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(f2);
            a3 = this.options;
            const A = a3.labels, n2 = a3.type;
            this.userOptions = f2;
            this.minPixelPadding = 0;
            this.reversed = D(a3.reversed, this.reversed);
            this.visible = a3.visible;
            this.zoomEnabled = a3.zoomEnabled;
            this.hasNames = "category" === n2 || true === a3.categories;
            this.categories = a3.categories || (this.hasNames ? [] : void 0);
            this.names || (this.names = [], this.names.keys = {});
            this.plotLinesAndBandsGroups = {};
            this.positiveValuesOnly = !!this.logarithmic;
            this.isLinked = e(a3.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = a3.minRange || a3.maxZoom;
            this.range = a3.range;
            this.offset = a3.offset || 0;
            this.min = this.max = null;
            f2 = D(a3.crosshair, T(c2.options.tooltip.crosshairs)[d2 ? 0 : 1]);
            this.crosshair = true === f2 ? {} : f2;
            -1 === c2.axes.indexOf(this) && (d2 ? c2.axes.splice(c2.xAxis.length, 0, this) : c2.axes.push(this), q(this, c2[this.coll]));
            c2.orderItems(this.coll);
            this.series = this.series || [];
            c2.inverted && !this.isZAxis && d2 && "undefined" === typeof this.reversed && (this.reversed = true);
            this.labelRotation = b(A.rotation) ? A.rotation : void 0;
            l(this, a3);
            k(this, "afterInit");
          }
          setOptions(b2) {
            this.options = c(y.defaultXAxisOptions, "yAxis" === this.coll && y.defaultYAxisOptions, [y.defaultTopAxisOptions, y.defaultRightAxisOptions, y.defaultBottomAxisOptions, y.defaultLeftAxisOptions][this.side], c(v[this.coll], b2));
            k(this, "afterSetOptions", { userOptions: b2 });
          }
          defaultLabelFormatter(c2) {
            var f2 = this.axis;
            ({ numberFormatter: c2 } = this.chart);
            const a3 = b(this.value) ? this.value : NaN, d2 = f2.chart.time, k2 = this.dateTimeLabelFormat;
            var n2 = v.lang;
            const A = n2.numericSymbols;
            n2 = n2.numericSymbolMagnitude || 1e3;
            const e2 = f2.logarithmic ? Math.abs(a3) : f2.tickInterval;
            let q2 = A && A.length, g2;
            if (f2.categories)
              g2 = `${this.value}`;
            else if (k2)
              g2 = d2.dateFormat(k2, a3);
            else if (q2 && 1e3 <= e2)
              for (; q2-- && "undefined" === typeof g2; )
                f2 = Math.pow(n2, q2 + 1), e2 >= f2 && 0 === 10 * a3 % f2 && null !== A[q2] && 0 !== a3 && (g2 = c2(a3 / f2, -1) + A[q2]);
            "undefined" === typeof g2 && (g2 = 1e4 <= Math.abs(a3) ? c2(a3, -1) : c2(a3, -1, void 0, ""));
            return g2;
          }
          getSeriesExtremes() {
            const c2 = this, f2 = c2.chart;
            let a3;
            k(this, "getSeriesExtremes", null, function() {
              c2.hasVisibleSeries = false;
              c2.dataMin = c2.dataMax = c2.threshold = null;
              c2.softThreshold = !c2.isXAxis;
              c2.series.forEach(function(d2) {
                if (d2.visible || !f2.options.chart.ignoreHiddenSeries) {
                  var k2 = d2.options;
                  let f3 = k2.threshold, n2, A;
                  c2.hasVisibleSeries = true;
                  c2.positiveValuesOnly && 0 >= f3 && (f3 = null);
                  if (c2.isXAxis)
                    (k2 = d2.xData) && k2.length && (k2 = c2.logarithmic ? k2.filter((b2) => 0 < b2) : k2, a3 = d2.getXExtremes(k2), n2 = a3.min, A = a3.max, b(n2) || n2 instanceof Date || (k2 = k2.filter(b), a3 = d2.getXExtremes(k2), n2 = a3.min, A = a3.max), k2.length && (c2.dataMin = Math.min(D(c2.dataMin, n2), n2), c2.dataMax = Math.max(D(
                      c2.dataMax,
                      A
                    ), A)));
                  else if (d2 = d2.applyExtremes(), b(d2.dataMin) && (n2 = d2.dataMin, c2.dataMin = Math.min(D(c2.dataMin, n2), n2)), b(d2.dataMax) && (A = d2.dataMax, c2.dataMax = Math.max(D(c2.dataMax, A), A)), e(f3) && (c2.threshold = f3), !k2.softThreshold || c2.positiveValuesOnly)
                    c2.softThreshold = false;
                }
              });
            });
            k(this, "afterGetSeriesExtremes");
          }
          translate(c2, f2, a3, d2, k2, n2) {
            const e2 = this.linkedParent || this, A = d2 && e2.old ? e2.old.min : e2.min;
            if (!b(A))
              return NaN;
            const q2 = e2.minPixelPadding;
            k2 = (e2.isOrdinal || e2.brokenAxis && e2.brokenAxis.hasBreaks || e2.logarithmic && k2) && e2.lin2val;
            let J = 1, h2 = 0;
            d2 = d2 && e2.old ? e2.old.transA : e2.transA;
            d2 || (d2 = e2.transA);
            a3 && (J *= -1, h2 = e2.len);
            e2.reversed && (J *= -1, h2 -= J * (e2.sector || e2.len));
            f2 ? (n2 = (c2 * J + h2 - q2) / d2 + A, k2 && (n2 = e2.lin2val(n2))) : (k2 && (c2 = e2.val2lin(c2)), c2 = J * (c2 - A) * d2, n2 = (e2.isRadial ? c2 : g(c2)) + h2 + J * q2 + (b(n2) ? d2 * n2 : 0));
            return n2;
          }
          toPixels(b2, c2) {
            return this.translate(b2, false, !this.horiz, void 0, true) + (c2 ? 0 : this.pos);
          }
          toValue(b2, c2) {
            return this.translate(b2 - (c2 ? 0 : this.pos), true, !this.horiz, void 0, true);
          }
          getPlotLinePath(c2) {
            function f2(b2, c3, f3) {
              "pass" !== t2 && (b2 < c3 || b2 > f3) && (t2 ? b2 = h(b2, c3, f3) : K2 = true);
              return b2;
            }
            const a3 = this, d2 = a3.chart, n2 = a3.left, e2 = a3.top, A = c2.old, q2 = c2.value, g2 = c2.lineWidth, r2 = A && d2.oldChartHeight || d2.chartHeight, m2 = A && d2.oldChartWidth || d2.chartWidth, l2 = a3.transB;
            let p2 = c2.translatedValue, t2 = c2.force, P2, w2, R, Q, K2;
            c2 = { value: q2, lineWidth: g2, old: A, force: t2, acrossPanes: c2.acrossPanes, translatedValue: p2 };
            k(this, "getPlotLinePath", c2, function(c3) {
              p2 = D(p2, a3.translate(q2, void 0, void 0, A));
              p2 = h(p2, -1e5, 1e5);
              P2 = R = Math.round(p2 + l2);
              w2 = Q = Math.round(r2 - p2 - l2);
              b(p2) ? a3.horiz ? (w2 = e2, Q = r2 - a3.bottom, P2 = R = f2(P2, n2, n2 + a3.width)) : (P2 = n2, R = m2 - a3.right, w2 = Q = f2(w2, e2, e2 + a3.height)) : (K2 = true, t2 = false);
              c3.path = K2 && !t2 ? null : d2.renderer.crispLine([["M", P2, w2], ["L", R, Q]], g2 || 1);
            });
            return c2.path;
          }
          getLinearTickPositions(b2, c2, f2) {
            const a3 = g(Math.floor(c2 / b2) * b2);
            f2 = g(Math.ceil(f2 / b2) * b2);
            const d2 = [];
            let k2, n2;
            g(a3 + b2) === a3 && (n2 = 20);
            if (this.single)
              return [c2];
            for (c2 = a3; c2 <= f2; ) {
              d2.push(c2);
              c2 = g(c2 + b2, n2);
              if (c2 === k2)
                break;
              k2 = c2;
            }
            return d2;
          }
          getMinorTickInterval() {
            const b2 = this.options;
            return true === b2.minorTicks ? D(b2.minorTickInterval, "auto") : false === b2.minorTicks ? null : b2.minorTickInterval;
          }
          getMinorTickPositions() {
            var b2 = this.options;
            const c2 = this.tickPositions, f2 = this.minorTickInterval;
            var a3 = this.pointRangePadding || 0;
            const d2 = this.min - a3;
            a3 = this.max + a3;
            const k2 = a3 - d2;
            let n2 = [];
            if (k2 && k2 / f2 < this.len / 3) {
              const k3 = this.logarithmic;
              if (k3)
                this.paddedTicks.forEach(function(b3, c3, a4) {
                  c3 && n2.push.apply(n2, k3.getLogTickPositions(f2, a4[c3 - 1], a4[c3], true));
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                n2 = n2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(f2), d2, a3, b2.startOfWeek));
              else
                for (b2 = d2 + (c2[0] - d2) % f2; b2 <= a3 && b2 !== n2[0]; b2 += f2)
                  n2.push(b2);
            }
            0 !== n2.length && this.trimTicks(n2);
            return n2;
          }
          adjustForMinRange() {
            const b2 = this.options, c2 = this.logarithmic;
            let f2 = this.min;
            var a3 = this.max;
            let d2, k2;
            if (this.isXAxis && "undefined" === typeof this.minRange && !c2)
              if (e(b2.min) || e(b2.max) || e(b2.floor) || e(b2.ceiling))
                this.minRange = null;
              else {
                var n2 = r(this.series.map((b3) => {
                  var c3;
                  return (b3.xIncrement ? null === (c3 = b3.xData) || void 0 === c3 ? void 0 : c3.slice(0, 2) : b3.xData) || [];
                })) || 0;
                this.minRange = Math.min(5 * n2, this.dataMax - this.dataMin);
              }
            a3 - f2 < this.minRange && (n2 = this.dataMax - this.dataMin >= this.minRange, k2 = this.minRange, a3 = (k2 - a3 + f2) / 2, d2 = [f2 - a3, D(b2.min, f2 - a3)], n2 && (d2[2] = c2 ? c2.log2lin(this.dataMin) : this.dataMin), f2 = t(d2), a3 = [f2 + k2, D(b2.max, f2 + k2)], n2 && (a3[2] = c2 ? c2.log2lin(this.dataMax) : this.dataMax), a3 = m(a3), a3 - f2 < k2 && (d2[0] = a3 - k2, d2[1] = D(b2.min, a3 - k2), f2 = t(d2)));
            this.min = f2;
            this.max = a3;
          }
          getClosest() {
            let b2, c2;
            if (this.categories)
              c2 = 1;
            else {
              const f2 = [];
              this.series.forEach(function(b3) {
                var a3;
                const d2 = b3.closestPointRange, k2 = b3.visible || !b3.chart.options.chart.ignoreHiddenSeries;
                1 === (null === (a3 = b3.xData) || void 0 === a3 ? void 0 : a3.length) ? f2.push(b3.xData[0]) : !b3.noSharedTooltip && e(d2) && k2 && (c2 = e(c2) ? Math.min(c2, d2) : d2);
              });
              f2.length && (f2.sort((b3, c3) => b3 - c3), b2 = r([f2]));
            }
            return b2 && c2 ? Math.min(b2, c2) : b2 || c2;
          }
          nameToX(b2) {
            const c2 = G(this.options.categories), f2 = c2 ? this.categories : this.names;
            let a3 = b2.options.x, d2;
            b2.series.requireSorting = false;
            e(a3) || (a3 = this.options.uniqueNames && f2 ? c2 ? f2.indexOf(b2.name) : D(f2.keys[b2.name], -1) : b2.series.autoIncrement());
            -1 === a3 ? !c2 && f2 && (d2 = f2.length) : d2 = a3;
            "undefined" !== typeof d2 ? (this.names[d2] = b2.name, this.names.keys[b2.name] = d2) : b2.x && (d2 = b2.x);
            return d2;
          }
          updateNames() {
            const b2 = this, c2 = this.names;
            0 < c2.length && (Object.keys(c2.keys).forEach(function(b3) {
              delete c2.keys[b3];
            }), c2.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(c3) {
              c3.xIncrement = null;
              if (!c3.points || c3.isDirtyData)
                b2.max = Math.max(b2.max, c3.xData.length - 1), c3.processData(), c3.generatePoints();
              c3.data.forEach(function(f2, a3) {
                let d2;
                f2 && f2.options && "undefined" !== typeof f2.name && (d2 = b2.nameToX(f2), "undefined" !== typeof d2 && d2 !== f2.x && (f2.x = d2, c3.xData[a3] = d2));
              });
            }));
          }
          setAxisTranslation() {
            const b2 = this, c2 = b2.max - b2.min;
            var a3 = b2.linkedParent;
            const d2 = !!b2.categories, n2 = b2.isXAxis;
            let e2 = b2.axisPointRange || 0, q2, g2 = 0, h2 = 0, r2 = b2.transA;
            if (n2 || d2 || e2)
              q2 = b2.getClosest(), a3 ? (g2 = a3.minPointOffset, h2 = a3.pointRangePadding) : b2.series.forEach(function(c3) {
                const a4 = d2 ? 1 : n2 ? D(c3.options.pointRange, q2, 0) : b2.axisPointRange || 0, k2 = c3.options.pointPlacement;
                e2 = Math.max(e2, a4);
                if (!b2.single || d2)
                  c3 = c3.is("xrange") ? !n2 : n2, g2 = Math.max(g2, c3 && f(k2) ? 0 : a4 / 2), h2 = Math.max(h2, c3 && "on" === k2 ? 0 : a4);
              }), a3 = b2.ordinal && b2.ordinal.slope && q2 ? b2.ordinal.slope / q2 : 1, b2.minPointOffset = g2 *= a3, b2.pointRangePadding = h2 *= a3, b2.pointRange = Math.min(e2, b2.single && d2 ? 1 : c2), n2 && q2 && (b2.closestPointRange = q2);
            b2.translationSlope = b2.transA = r2 = b2.staticScale || b2.len / (c2 + h2 || 1);
            b2.transB = b2.horiz ? b2.left : b2.bottom;
            b2.minPixelPadding = r2 * g2;
            k(this, "afterSetAxisTranslation");
          }
          minFromRange() {
            return this.max - this.range;
          }
          setTickInterval(c2) {
            var f2 = this.chart;
            const a3 = this.logarithmic, d2 = this.options, n2 = this.isXAxis, q2 = this.isLinked, h2 = d2.tickPixelInterval, A = this.categories, r2 = this.softThreshold;
            let m2 = d2.maxPadding, l2 = d2.minPadding;
            let p2 = b(d2.tickInterval) && 0 <= d2.tickInterval ? d2.tickInterval : void 0, t2 = b(this.threshold) ? this.threshold : null, P2, w2, K2;
            this.dateTime || A || q2 || this.getTickAmount();
            w2 = D(this.userMin, d2.min);
            K2 = D(this.userMax, d2.max);
            if (q2) {
              this.linkedParent = f2[this.coll][d2.linkedTo];
              var R = this.linkedParent.getExtremes();
              this.min = D(R.min, R.dataMin);
              this.max = D(R.max, R.dataMax);
              d2.type !== this.linkedParent.options.type && F(11, 1, f2);
            } else
              r2 && e(t2) && (this.dataMin >= t2 ? (R = t2, l2 = 0) : this.dataMax <= t2 && (P2 = t2, m2 = 0)), this.min = D(w2, R, this.dataMin), this.max = D(K2, P2, this.dataMax);
            a3 && (this.positiveValuesOnly && !c2 && 0 >= Math.min(this.min, D(
              this.dataMin,
              this.min
            )) && F(10, 1, f2), this.min = g(a3.log2lin(this.min), 16), this.max = g(a3.log2lin(this.max), 16));
            this.range && e(this.max) && (this.userMin = this.min = w2 = Math.max(this.dataMin, this.minFromRange()), this.userMax = K2 = this.max, this.range = null);
            k(this, "foundExtremes");
            this.beforePadding && this.beforePadding();
            this.adjustForMinRange();
            !b(this.userMin) && b(d2.softMin) && d2.softMin < this.min && (this.min = w2 = d2.softMin);
            !b(this.userMax) && b(d2.softMax) && d2.softMax > this.max && (this.max = K2 = d2.softMax);
            !(A || this.axisPointRange || this.stacking && this.stacking.usePercentage || q2) && e(this.min) && e(this.max) && (f2 = this.max - this.min) && (!e(w2) && l2 && (this.min -= f2 * l2), !e(K2) && m2 && (this.max += f2 * m2));
            !b(this.userMin) && b(d2.floor) && (this.min = Math.max(this.min, d2.floor));
            !b(this.userMax) && b(d2.ceiling) && (this.max = Math.min(this.max, d2.ceiling));
            r2 && e(this.dataMin) && (t2 = t2 || 0, !e(w2) && this.min < t2 && this.dataMin >= t2 ? this.min = this.options.minRange ? Math.min(t2, this.max - this.minRange) : t2 : !e(K2) && this.max > t2 && this.dataMax <= t2 && (this.max = this.options.minRange ? Math.max(t2, this.min + this.minRange) : t2));
            b(this.min) && b(this.max) && !this.chart.polar && this.min > this.max && (e(this.options.min) ? this.max = this.min : e(this.options.max) && (this.min = this.max));
            this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : q2 && this.linkedParent && !p2 && h2 === this.linkedParent.options.tickPixelInterval ? p2 = this.linkedParent.tickInterval : D(p2, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, A ? 1 : (this.max - this.min) * h2 / Math.max(this.len, h2));
            if (n2 && !c2) {
              const b2 = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
              this.series.forEach(function(c3) {
                c3.forceCrop = c3.forceCropping && c3.forceCropping();
                c3.processData(b2);
              });
              k(this, "postProcessData", { hasExtremesChanged: b2 });
            }
            this.setAxisTranslation();
            k(this, "initialAxisTranslation");
            this.pointRange && !p2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            c2 = D(d2.minTickInterval, this.dateTime && !this.series.some((b2) => b2.noSharedTooltip) ? this.closestPointRange : 0);
            !p2 && this.tickInterval < c2 && (this.tickInterval = c2);
            this.dateTime || this.logarithmic || p2 || (this.tickInterval = V(this, this.tickInterval));
            this.tickAmount || (this.tickInterval = this.unsquish());
            this.setTickPositions();
          }
          setTickPositions() {
            var c2 = this.options;
            const f2 = c2.tickPositions, a3 = c2.tickPositioner;
            var d2 = this.getMinorTickInterval(), n2 = this.hasVerticalPanning(), q2 = "colorAxis" === this.coll;
            const g2 = (q2 || !n2) && c2.startOnTick;
            n2 = (q2 || !n2) && c2.endOnTick;
            q2 = [];
            let h2;
            this.tickmarkOffset = this.categories && "between" === c2.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
            this.minorTickInterval = "auto" === d2 && this.tickInterval ? this.tickInterval / c2.minorTicksPerMajor : d2;
            this.single = this.min === this.max && e(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== c2.allowDecimals);
            if (f2)
              q2 = f2.slice();
            else if (b(this.min) && b(this.max)) {
              if (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)))
                if (this.dateTime)
                  q2 = this.getTimeTicks(
                    this.dateTime.normalizeTimeTickInterval(this.tickInterval, c2.units),
                    this.min,
                    this.max,
                    c2.startOfWeek,
                    this.ordinal && this.ordinal.positions,
                    this.closestPointRange,
                    true
                  );
                else if (this.logarithmic)
                  q2 = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                else
                  for (d2 = c2 = this.tickInterval; d2 <= 2 * c2; )
                    if (q2 = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && q2.length > this.tickAmount)
                      this.tickInterval = V(this, d2 *= 1.1);
                    else
                      break;
              else
                q2 = [this.min, this.max], F(19, false, this.chart);
              q2.length > this.len && (q2 = [q2[0], q2[q2.length - 1]], q2[0] === q2[1] && (q2.length = 1));
              a3 && (this.tickPositions = q2, (h2 = a3.apply(this, [this.min, this.max])) && (q2 = h2));
            }
            this.tickPositions = q2;
            this.paddedTicks = q2.slice(0);
            this.trimTicks(q2, g2, n2);
            !this.isLinked && b(this.min) && b(this.max) && (this.single && 2 > q2.length && !this.categories && !this.series.some((b2) => b2.is("heatmap") && "between" === b2.options.pointPlacement) && (this.min -= 0.5, this.max += 0.5), f2 || h2 || this.adjustTickAmount());
            k(this, "afterSetTickPositions");
          }
          trimTicks(b2, c2, f2) {
            const a3 = b2[0], d2 = b2[b2.length - 1], n2 = !this.isOrdinal && this.minPointOffset || 0;
            k(this, "trimTicks");
            if (!this.isLinked) {
              if (c2 && -Infinity !== a3)
                this.min = a3;
              else
                for (; this.min - n2 > b2[0]; )
                  b2.shift();
              if (f2)
                this.max = d2;
              else
                for (; this.max + n2 < b2[b2.length - 1]; )
                  b2.pop();
              0 === b2.length && e(a3) && !this.options.tickPositions && b2.push((d2 + a3) / 2);
            }
          }
          alignToOthers() {
            const c2 = this, f2 = [this], a3 = c2.options, d2 = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, k2 = [];
            let n2;
            c2.thresholdAlignment = void 0;
            if ((false !== this.chart.options.chart.alignTicks && a3.alignTicks || d2) && false !== a3.startOnTick && false !== a3.endOnTick && !c2.logarithmic) {
              const b2 = (b3) => {
                const { horiz: c3, options: f3 } = b3;
                return [c3 ? f3.left : f3.top, f3.width, f3.height, f3.pane].join();
              }, a4 = b2(this);
              this.chart[this.coll].forEach(function(d3) {
                const { series: k3 } = d3;
                k3.length && k3.some((b3) => b3.visible) && d3 !== c2 && b2(d3) === a4 && (n2 = true, f2.push(d3));
              });
            }
            if (n2 && d2) {
              f2.forEach((f3) => {
                f3 = f3.getThresholdAlignment(c2);
                b(f3) && k2.push(f3);
              });
              const a4 = 1 < k2.length ? k2.reduce((b2, c3) => b2 + c3, 0) / k2.length : void 0;
              f2.forEach((b2) => {
                b2.thresholdAlignment = a4;
              });
            }
            return n2;
          }
          getThresholdAlignment(c2) {
            (!b(this.dataMin) || this !== c2 && this.series.some((b2) => b2.isDirty || b2.isDirtyData)) && this.getSeriesExtremes();
            if (b(this.threshold))
              return c2 = h((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (c2 = 1 - c2), c2;
          }
          getTickAmount() {
            const b2 = this.options, c2 = b2.tickPixelInterval;
            let f2 = b2.tickAmount;
            !e(b2.tickInterval) && !f2 && this.len < c2 && !this.isRadial && !this.logarithmic && b2.startOnTick && b2.endOnTick && (f2 = 2);
            !f2 && this.alignToOthers() && (f2 = Math.ceil(this.len / c2) + 1);
            4 > f2 && (this.finalTickAmt = f2, f2 = 5);
            this.tickAmount = f2;
          }
          adjustTickAmount() {
            const c2 = this, { finalTickAmt: f2, max: a3, min: d2, options: k2, tickPositions: n2, tickAmount: q2, thresholdAlignment: h2 } = c2, r2 = n2 && n2.length;
            var m2 = D(c2.threshold, c2.softThreshold ? 0 : null);
            var l2 = c2.tickInterval;
            let p2;
            b(h2) && (p2 = 0.5 > h2 ? Math.ceil(h2 * (q2 - 1)) : Math.floor(h2 * (q2 - 1)), k2.reversed && (p2 = q2 - 1 - p2));
            if (c2.hasData() && b(d2) && b(a3)) {
              const h3 = () => {
                c2.transA *= (r2 - 1) / (q2 - 1);
                c2.min = k2.startOnTick ? n2[0] : Math.min(d2, n2[0]);
                c2.max = k2.endOnTick ? n2[n2.length - 1] : Math.max(a3, n2[n2.length - 1]);
              };
              if (b(p2) && b(c2.threshold)) {
                for (; n2[p2] !== m2 || n2.length !== q2 || n2[0] > d2 || n2[n2.length - 1] < a3; ) {
                  n2.length = 0;
                  for (n2.push(c2.threshold); n2.length < q2; )
                    void 0 === n2[p2] || n2[p2] > c2.threshold ? n2.unshift(g(n2[0] - l2)) : n2.push(g(n2[n2.length - 1] + l2));
                  if (l2 > 8 * c2.tickInterval)
                    break;
                  l2 *= 2;
                }
                h3();
              } else if (r2 < q2) {
                for (; n2.length < q2; )
                  n2.length % 2 || d2 === m2 ? n2.push(g(n2[n2.length - 1] + l2)) : n2.unshift(g(n2[0] - l2));
                h3();
              }
              if (e(f2)) {
                for (l2 = m2 = n2.length; l2--; )
                  (3 === f2 && 1 === l2 % 2 || 2 >= f2 && 0 < l2 && l2 < m2 - 1) && n2.splice(l2, 1);
                c2.finalTickAmt = void 0;
              }
            }
          }
          setScale() {
            let b2 = false, c2 = false;
            this.series.forEach(function(f3) {
              b2 = b2 || f3.isDirtyData || f3.isDirty;
              c2 = c2 || f3.xAxis && f3.xAxis.isDirty || false;
            });
            this.setAxisSize();
            const f2 = this.len !== (this.old && this.old.len);
            f2 || b2 || c2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && (this.stacking.resetStacks(), this.stacking.buildStacks()), this.forceRedraw = false, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = f2 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
            b2 && this.panningState && (this.panningState.isDirty = true);
            k(this, "afterSetScale");
          }
          setExtremes(b2, c2, f2, a3, n2) {
            const e2 = this, q2 = e2.chart;
            f2 = D(f2, true);
            e2.series.forEach(function(b3) {
              delete b3.kdTree;
            });
            n2 = d(n2, { min: b2, max: c2 });
            k(e2, "setExtremes", n2, function() {
              e2.userMin = b2;
              e2.userMax = c2;
              e2.eventArgs = n2;
              f2 && q2.redraw(a3);
            });
          }
          zoom(b2, c2) {
            const f2 = this, a3 = this.dataMin, d2 = this.dataMax, n2 = this.options, q2 = Math.min(a3, D(n2.min, a3)), g2 = Math.max(d2, D(n2.max, d2));
            b2 = { newMin: b2, newMax: c2 };
            k(this, "zoom", b2, function(b3) {
              let c3 = b3.newMin, n3 = b3.newMax;
              if (c3 !== f2.min || n3 !== f2.max)
                f2.allowZoomOutside || (e(a3) && (c3 < q2 && (c3 = q2), c3 > g2 && (c3 = g2)), e(d2) && (n3 < q2 && (n3 = q2), n3 > g2 && (n3 = g2))), f2.displayBtn = "undefined" !== typeof c3 || "undefined" !== typeof n3, f2.setExtremes(c3, n3, false, void 0, { trigger: "zoom" });
              b3.zoomed = true;
            });
            return b2.zoomed;
          }
          setAxisSize() {
            const b2 = this.chart;
            var c2 = this.options;
            const f2 = c2.offsets || [0, 0, 0, 0], a3 = this.horiz, d2 = this.width = Math.round(K(D(c2.width, b2.plotWidth - f2[3] + f2[1]), b2.plotWidth)), n2 = this.height = Math.round(K(D(c2.height, b2.plotHeight - f2[0] + f2[2]), b2.plotHeight)), k2 = this.top = Math.round(K(D(c2.top, b2.plotTop + f2[0]), b2.plotHeight, b2.plotTop));
            c2 = this.left = Math.round(K(
              D(c2.left, b2.plotLeft + f2[3]),
              b2.plotWidth,
              b2.plotLeft
            ));
            this.bottom = b2.chartHeight - n2 - k2;
            this.right = b2.chartWidth - d2 - c2;
            this.len = Math.max(a3 ? d2 : n2, 0);
            this.pos = a3 ? c2 : k2;
          }
          getExtremes() {
            const b2 = this.logarithmic;
            return { min: b2 ? g(b2.lin2log(this.min)) : this.min, max: b2 ? g(b2.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
          }
          getThreshold(b2) {
            var c2 = this.logarithmic;
            const f2 = c2 ? c2.lin2log(this.min) : this.min;
            c2 = c2 ? c2.lin2log(this.max) : this.max;
            null === b2 || -Infinity === b2 ? b2 = f2 : Infinity === b2 ? b2 = c2 : f2 > b2 ? b2 = f2 : c2 < b2 && (b2 = c2);
            return this.translate(
              b2,
              0,
              1,
              0,
              1
            );
          }
          autoLabelAlign(b2) {
            const c2 = (D(b2, 0) - 90 * this.side + 720) % 360;
            b2 = { align: "center" };
            k(this, "autoLabelAlign", b2, function(b3) {
              15 < c2 && 165 > c2 ? b3.align = "right" : 195 < c2 && 345 > c2 && (b3.align = "left");
            });
            return b2.align;
          }
          tickSize(b2) {
            const c2 = this.options, f2 = D(c2["tick" === b2 ? "tickWidth" : "minorTickWidth"], "tick" === b2 && this.isXAxis && !this.categories ? 1 : 0);
            let a3 = c2["tick" === b2 ? "tickLength" : "minorTickLength"], d2;
            f2 && a3 && ("inside" === c2[b2 + "Position"] && (a3 = -a3), d2 = [a3, f2]);
            b2 = { tickSize: d2 };
            k(this, "afterTickSize", b2);
            return b2.tickSize;
          }
          labelMetrics() {
            const b2 = this.chart.renderer;
            var c2 = this.ticks;
            c2 = c2[Object.keys(c2)[0]] || {};
            return this.chart.renderer.fontMetrics(c2.label || c2.movedLabel || b2.box);
          }
          unsquish() {
            const c2 = this.options.labels;
            var f2 = this.horiz;
            const a3 = this.tickInterval, d2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / a3), n2 = c2.rotation, k2 = 0.75 * this.labelMetrics().h, e2 = Math.max(this.max - this.min, 0), q2 = function(b2) {
              let c3 = b2 / (d2 || 1);
              c3 = 1 < c3 ? Math.ceil(c3) : 1;
              c3 * a3 > e2 && Infinity !== b2 && Infinity !== d2 && e2 && (c3 = Math.ceil(e2 / a3));
              return g(c3 * a3);
            };
            let h2 = a3, r2, l2 = Number.MAX_VALUE, m2;
            if (f2) {
              if (c2.staggerLines || (b(n2) ? m2 = [n2] : d2 < c2.autoRotationLimit && (m2 = c2.autoRotation)), m2) {
                let b2;
                for (const c3 of m2)
                  if (c3 === n2 || c3 && -90 <= c3 && 90 >= c3)
                    f2 = q2(Math.abs(k2 / Math.sin(p * c3))), b2 = f2 + Math.abs(c3 / 360), b2 < l2 && (l2 = b2, r2 = c3, h2 = f2);
              }
            } else
              h2 = q2(k2);
            this.autoRotation = m2;
            this.labelRotation = D(r2, b(n2) ? n2 : 0);
            return c2.step ? a3 : h2;
          }
          getSlotWidth(c2) {
            const f2 = this.chart, a3 = this.horiz, d2 = this.options.labels, n2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), k2 = f2.margin[3];
            if (c2 && b(c2.slotWidth))
              return c2.slotWidth;
            if (a3 && 2 > d2.step)
              return d2.rotation ? 0 : (this.staggerLines || 1) * this.len / n2;
            if (!a3) {
              c2 = d2.style.width;
              if (void 0 !== c2)
                return parseInt(String(c2), 10);
              if (k2)
                return k2 - f2.spacing[3];
            }
            return 0.33 * f2.chartWidth;
          }
          renderUnsquish() {
            const b2 = this.chart, c2 = b2.renderer, a3 = this.tickPositions, d2 = this.ticks, n2 = this.options.labels, k2 = n2.style, e2 = this.horiz, q2 = this.getSlotWidth();
            var g2 = Math.max(1, Math.round(q2 - 2 * n2.padding));
            const h2 = {}, r2 = this.labelMetrics(), m2 = k2.textOverflow;
            let l2, p2, D2 = 0;
            f(n2.rotation) || (h2.rotation = n2.rotation || 0);
            a3.forEach(function(b3) {
              b3 = d2[b3];
              b3.movedLabel && b3.replaceMovedLabel();
              b3 && b3.label && b3.label.textPxLength > D2 && (D2 = b3.label.textPxLength);
            });
            this.maxLabelLength = D2;
            if (this.autoRotation)
              D2 > g2 && D2 > r2.h ? h2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (q2 && (l2 = g2, !m2))
              for (p2 = "clip", g2 = a3.length; !e2 && g2--; ) {
                var t2 = a3[g2];
                if (t2 = d2[t2].label)
                  t2.styles && "ellipsis" === t2.styles.textOverflow ? t2.css({ textOverflow: "clip" }) : t2.textPxLength > q2 && t2.css({ width: q2 + "px" }), t2.getBBox().height > this.len / a3.length - (r2.h - r2.f) && (t2.specificTextOverflow = "ellipsis");
              }
            h2.rotation && (l2 = D2 > 0.5 * b2.chartHeight ? 0.33 * b2.chartHeight : D2, m2 || (p2 = "ellipsis"));
            if (this.labelAlign = n2.align || this.autoLabelAlign(this.labelRotation))
              h2.align = this.labelAlign;
            a3.forEach(function(b3) {
              const c3 = (b3 = d2[b3]) && b3.label, f2 = k2.width, a4 = {};
              c3 && (c3.attr(h2), b3.shortenLabel ? b3.shortenLabel() : l2 && !f2 && "nowrap" !== k2.whiteSpace && (l2 < c3.textPxLength || "SPAN" === c3.element.tagName) ? (a4.width = l2 + "px", m2 || (a4.textOverflow = c3.specificTextOverflow || p2), c3.css(a4)) : c3.styles && c3.styles.width && !a4.width && !f2 && c3.css({ width: null }), delete c3.specificTextOverflow, b3.rotation = h2.rotation);
            }, this);
            this.tickRotCorr = c2.rotCorr(
              r2.b,
              this.labelRotation || 0,
              0 !== this.side
            );
          }
          hasData() {
            return this.series.some(function(b2) {
              return b2.hasData();
            }) || this.options.showEmpty && e(this.min) && e(this.max);
          }
          addTitle(b2) {
            const f2 = this.chart.renderer, a3 = this.horiz, d2 = this.opposite, n2 = this.options.title, k2 = this.chart.styledMode;
            let e2;
            this.axisTitle || ((e2 = n2.textAlign) || (e2 = (a3 ? { low: "left", middle: "center", high: "right" } : { low: d2 ? "right" : "left", middle: "center", high: d2 ? "left" : "right" })[n2.align]), this.axisTitle = f2.text(n2.text || "", 0, 0, n2.useHTML).attr({
              zIndex: 7,
              rotation: n2.rotation,
              align: e2
            }).addClass("highcharts-axis-title"), k2 || this.axisTitle.css(c(n2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
            k2 || n2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
            this.axisTitle[b2 ? "show" : "hide"](b2);
          }
          generateTick(b2) {
            const c2 = this.ticks;
            c2[b2] ? c2[b2].addLabel() : c2[b2] = new H(this, b2);
          }
          getOffset() {
            const c2 = this, { chart: f2, horiz: a3, options: d2, side: n2, ticks: q2, tickPositions: g2, coll: h2, axisParent: r2 } = c2, m2 = f2.renderer, l2 = f2.inverted && !c2.isZAxis ? [1, 0, 3, 2][n2] : n2;
            var p2 = c2.hasData();
            const t2 = d2.title;
            var w2 = d2.labels;
            const K2 = b(d2.crossing);
            var G2 = f2.axisOffset;
            const R = f2.clipOffset, Q = [-1, 1, 1, -1][n2], v2 = d2.className;
            let ja, u2 = 0, x2;
            var E = 0;
            let F2 = 0;
            c2.showAxis = ja = p2 || d2.showEmpty;
            c2.staggerLines = c2.horiz && w2.staggerLines || void 0;
            if (!c2.axisGroup) {
              const b2 = (b3, c3, f3) => m2.g(b3).attr({ zIndex: f3 }).addClass(`highcharts-${h2.toLowerCase()}${c3} ` + (this.isRadial ? `highcharts-radial-axis${c3} ` : "") + (v2 || "")).add(r2);
              c2.gridGroup = b2("grid", "-grid", d2.gridZIndex);
              c2.axisGroup = b2("axis", "", d2.zIndex);
              c2.labelGroup = b2(
                "axis-labels",
                "-labels",
                w2.zIndex
              );
            }
            p2 || c2.isLinked ? (g2.forEach(function(b2) {
              c2.generateTick(b2);
            }), c2.renderUnsquish(), c2.reserveSpaceDefault = 0 === n2 || 2 === n2 || { 1: "left", 3: "right" }[n2] === c2.labelAlign, D(w2.reserveSpace, K2 ? false : null, "center" === c2.labelAlign ? true : null, c2.reserveSpaceDefault) && g2.forEach(function(b2) {
              F2 = Math.max(q2[b2].getLabelSize(), F2);
            }), c2.staggerLines && (F2 *= c2.staggerLines), c2.labelOffset = F2 * (c2.opposite ? -1 : 1)) : P(q2, function(b2, c3) {
              b2.destroy();
              delete q2[c3];
            });
            t2 && t2.text && false !== t2.enabled && (c2.addTitle(ja), ja && !K2 && false !== t2.reserveSpace && (c2.titleOffset = u2 = c2.axisTitle.getBBox()[a3 ? "height" : "width"], x2 = t2.offset, E = e(x2) ? 0 : D(t2.margin, a3 ? 5 : 10)));
            c2.renderLine();
            c2.offset = Q * D(d2.offset, G2[n2] ? G2[n2] + (d2.margin || 0) : 0);
            c2.tickRotCorr = c2.tickRotCorr || { x: 0, y: 0 };
            p2 = 0 === n2 ? -c2.labelMetrics().h : 2 === n2 ? c2.tickRotCorr.y : 0;
            E = Math.abs(F2) + E;
            F2 && (E = E - p2 + Q * (a3 ? D(w2.y, c2.tickRotCorr.y + Q * w2.distance) : D(w2.x, Q * w2.distance)));
            c2.axisTitleMargin = D(x2, E);
            c2.getMaxLabelDimensions && (c2.maxLabelDimensions = c2.getMaxLabelDimensions(q2, g2));
            "colorAxis" !== h2 && (w2 = this.tickSize("tick"), G2[n2] = Math.max(G2[n2], (c2.axisTitleMargin || 0) + u2 + Q * c2.offset, E, g2 && g2.length && w2 ? w2[0] + Q * c2.offset : 0), G2 = !c2.axisLine || d2.offset ? 0 : 2 * Math.floor(c2.axisLine.strokeWidth() / 2), R[l2] = Math.max(R[l2], G2));
            k(this, "afterGetOffset");
          }
          getLinePath(b2) {
            const c2 = this.chart, f2 = this.opposite;
            var a3 = this.offset;
            const d2 = this.horiz, n2 = this.left + (f2 ? this.width : 0) + a3;
            a3 = c2.chartHeight - this.bottom - (f2 ? this.height : 0) + a3;
            f2 && (b2 *= -1);
            return c2.renderer.crispLine([["M", d2 ? this.left : n2, d2 ? a3 : this.top], ["L", d2 ? c2.chartWidth - this.right : n2, d2 ? a3 : c2.chartHeight - this.bottom]], b2);
          }
          renderLine() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          }
          getTitlePosition(b2) {
            var c2 = this.horiz, f2 = this.left;
            const a3 = this.top;
            var d2 = this.len;
            const n2 = this.options.title, e2 = c2 ? f2 : a3, q2 = this.opposite, g2 = this.offset, h2 = n2.x, r2 = n2.y, l2 = this.chart.renderer.fontMetrics(b2);
            b2 = b2 ? Math.max(b2.getBBox(false, 0).height - l2.h - 1, 0) : 0;
            d2 = { low: e2 + (c2 ? 0 : d2), middle: e2 + d2 / 2, high: e2 + (c2 ? d2 : 0) }[n2.align];
            f2 = (c2 ? a3 + this.height : f2) + (c2 ? 1 : -1) * (q2 ? -1 : 1) * (this.axisTitleMargin || 0) + [-b2, b2, l2.f, -b2][this.side];
            c2 = { x: c2 ? d2 + h2 : f2 + (q2 ? this.width : 0) + g2 + h2, y: c2 ? f2 + r2 - (q2 ? this.height : 0) + g2 : d2 + r2 };
            k(this, "afterGetTitlePosition", { titlePosition: c2 });
            return c2;
          }
          renderMinorTick(b2, c2) {
            const f2 = this.minorTicks;
            f2[b2] || (f2[b2] = new H(this, b2, "minor"));
            c2 && f2[b2].isNew && f2[b2].render(null, true);
            f2[b2].render(null, false, 1);
          }
          renderTick(b2, c2, f2) {
            const a3 = this.ticks;
            if (!this.isLinked || b2 >= this.min && b2 <= this.max || this.grid && this.grid.isColumn)
              a3[b2] || (a3[b2] = new H(
                this,
                b2
              )), f2 && a3[b2].isNew && a3[b2].render(c2, true, -1), a3[b2].render(c2);
          }
          render() {
            const c2 = this, f2 = c2.chart, a3 = c2.logarithmic, d2 = c2.options, n2 = c2.isLinked, e2 = c2.tickPositions, q2 = c2.axisTitle, g2 = c2.ticks, h2 = c2.minorTicks, r2 = c2.alternateBands, l2 = d2.stackLabels, m2 = d2.alternateGridColor;
            var p2 = d2.crossing;
            const D2 = c2.tickmarkOffset, t2 = c2.axisLine, w2 = c2.showAxis, K2 = u(f2.renderer.globalAnimation);
            let Q, G2;
            c2.labelEdge.length = 0;
            c2.overlap = false;
            [g2, h2, r2].forEach(function(b2) {
              P(b2, function(b3) {
                b3.isActive = false;
              });
            });
            if (b(p2)) {
              const b2 = this.isXAxis ? f2.yAxis[0] : f2.xAxis[0], a4 = [1, -1, -1, 1][this.side];
              b2 && (p2 = b2.toPixels(p2, true), c2.horiz && (p2 = b2.len - p2), c2.offset = a4 * p2);
            }
            if (c2.hasData() || n2) {
              const n3 = c2.chart.hasRendered && c2.old && b(c2.old.min);
              c2.minorTickInterval && !c2.categories && c2.getMinorTickPositions().forEach(function(b2) {
                c2.renderMinorTick(b2, n3);
              });
              e2.length && (e2.forEach(function(b2, f3) {
                c2.renderTick(b2, f3, n3);
              }), D2 && (0 === c2.min || c2.single) && (g2[-1] || (g2[-1] = new H(c2, -1, null, true)), g2[-1].render(-1)));
              m2 && e2.forEach(function(b2, d3) {
                G2 = "undefined" !== typeof e2[d3 + 1] ? e2[d3 + 1] + D2 : c2.max - D2;
                0 === d3 % 2 && b2 < c2.max && G2 <= c2.max + (f2.polar ? -D2 : D2) && (r2[b2] || (r2[b2] = new z.PlotLineOrBand(c2)), Q = b2 + D2, r2[b2].options = { from: a3 ? a3.lin2log(Q) : Q, to: a3 ? a3.lin2log(G2) : G2, color: m2, className: "highcharts-alternate-grid" }, r2[b2].render(), r2[b2].isActive = true);
              });
              c2._addedPlotLB || (c2._addedPlotLB = true, (d2.plotLines || []).concat(d2.plotBands || []).forEach(function(b2) {
                c2.addPlotBandOrLine(b2);
              }));
            }
            [g2, h2, r2].forEach(function(b2) {
              const c3 = [], a4 = K2.duration;
              P(b2, function(b3, f3) {
                b3.isActive || (b3.render(f3, false, 0), b3.isActive = false, c3.push(f3));
              });
              Z(function() {
                let f3 = c3.length;
                for (; f3--; )
                  b2[c3[f3]] && !b2[c3[f3]].isActive && (b2[c3[f3]].destroy(), delete b2[c3[f3]]);
              }, b2 !== r2 && f2.hasRendered && a4 ? a4 : 0);
            });
            t2 && (t2[t2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(t2.strokeWidth()) }), t2.isPlaced = true, t2[w2 ? "show" : "hide"](w2));
            q2 && w2 && (q2[q2.isNew ? "attr" : "animate"](c2.getTitlePosition(q2)), q2.isNew = false);
            l2 && l2.enabled && c2.stacking && c2.stacking.renderStackTotals();
            c2.old = { len: c2.len, max: c2.max, min: c2.min, transA: c2.transA, userMax: c2.userMax, userMin: c2.userMin };
            c2.isDirty = false;
            k(this, "afterRender");
          }
          redraw() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b2) {
              b2.render();
            }));
            this.series.forEach(function(b2) {
              b2.isDirty = true;
            });
          }
          getKeepProps() {
            return this.keepProps || Y.keepProps;
          }
          destroy(b2) {
            const c2 = this, f2 = c2.plotLinesAndBands, a3 = this.eventOptions;
            k(this, "destroy", { keepEvents: b2 });
            b2 || X(c2);
            [c2.ticks, c2.minorTicks, c2.alternateBands].forEach(function(b3) {
              w(b3);
            });
            if (f2)
              for (b2 = f2.length; b2--; )
                f2[b2].destroy();
            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b3) {
              c2[b3] && (c2[b3] = c2[b3].destroy());
            });
            for (const b3 in c2.plotLinesAndBandsGroups)
              c2.plotLinesAndBandsGroups[b3] = c2.plotLinesAndBandsGroups[b3].destroy();
            P(c2, function(b3, f3) {
              -1 === c2.getKeepProps().indexOf(f3) && delete c2[f3];
            });
            this.eventOptions = a3;
          }
          drawCrosshair(b2, c2) {
            const f2 = this.crosshair;
            var a3 = D(f2 && f2.snap, true);
            const n2 = this.chart;
            let q2, g2 = this.cross;
            k(this, "drawCrosshair", { e: b2, point: c2 });
            b2 || (b2 = this.cross && this.cross.e);
            if (f2 && false !== (e(c2) || !a3)) {
              a3 ? e(c2) && (q2 = D("colorAxis" !== this.coll ? c2.crosshairPos : null, this.isXAxis ? c2.plotX : this.len - c2.plotY)) : q2 = b2 && (this.horiz ? b2.chartX - this.pos : this.len - b2.chartY + this.pos);
              if (e(q2)) {
                var h2 = { value: c2 && (this.isXAxis ? c2.x : D(c2.stackY, c2.y)), translatedValue: q2 };
                n2.polar && d(h2, { isCrosshair: true, chartX: b2 && b2.chartX, chartY: b2 && b2.chartY, point: c2 });
                h2 = this.getPlotLinePath(h2) || null;
              }
              if (!e(h2)) {
                this.hideCrosshair();
                return;
              }
              a3 = this.categories && !this.isRadial;
              g2 || (this.cross = g2 = n2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a3 ? "category " : "thin ") + (f2.className || "")).attr({ zIndex: D(f2.zIndex, 2) }).add(), n2.styledMode || (g2.attr({ stroke: f2.color || (a3 ? I.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": D(
                f2.width,
                1
              ) }).css({ "pointer-events": "none" }), f2.dashStyle && g2.attr({ dashstyle: f2.dashStyle })));
              g2.show().attr({ d: h2 });
              a3 && !f2.width && g2.attr({ "stroke-width": this.transA });
              this.cross.e = b2;
            } else
              this.hideCrosshair();
            k(this, "afterDrawCrosshair", { e: b2, point: c2 });
          }
          hideCrosshair() {
            this.cross && this.cross.hide();
            k(this, "afterHideCrosshair");
          }
          hasVerticalPanning() {
            const b2 = this.chart.options.chart.panning;
            return !!(b2 && b2.enabled && /y/.test(b2.type));
          }
          update(b2, f2) {
            const a3 = this.chart;
            b2 = c(this.userOptions, b2);
            this.destroy(true);
            this.init(a3, b2);
            a3.isDirtyBox = true;
            D(f2, true) && a3.redraw();
          }
          remove(b2) {
            const c2 = this.chart, f2 = this.coll, a3 = this.series;
            let d2 = a3.length;
            for (; d2--; )
              a3[d2] && a3[d2].remove(false);
            x(c2.axes, this);
            x(c2[f2] || [], this);
            c2.orderItems(f2);
            this.destroy();
            c2.isDirtyBox = true;
            D(b2, true) && c2.redraw();
          }
          setTitle(b2, c2) {
            this.update({ title: b2 }, c2);
          }
          setCategories(b2, c2) {
            this.update({ categories: b2 }, c2);
          }
        }
        Y.defaultOptions = y.defaultXAxisOptions;
        Y.keepProps = "coll extKey hcEvents names series userMax userMin".split(" ");
        "";
        return Y;
      });
      M(
        a,
        "Core/Axis/DateTimeAxis.js",
        [a["Core/Utilities.js"]],
        function(a2) {
          const { addEvent: x, getMagnitude: I, normalizeTickInterval: L, timeUnits: C } = a2;
          var z;
          (function(y) {
            function B() {
              return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            }
            function u(a3) {
              "datetime" !== a3.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new l(this));
            }
            const v = [];
            y.compose = function(l2) {
              a2.pushUnique(v, l2) && (l2.keepProps.push("dateTime"), l2.prototype.getTimeTicks = B, x(l2, "init", u));
              return l2;
            };
            class l {
              constructor(a3) {
                this.axis = a3;
              }
              normalizeTimeTickInterval(a3, l2) {
                const m = l2 || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
                l2 = m[m.length - 1];
                let h = C[l2[0]], g = l2[1], e;
                for (e = 0; e < m.length && !(l2 = m[e], h = C[l2[0]], g = l2[1], m[e + 1] && a3 <= (h * g[g.length - 1] + C[m[e + 1][0]]) / 2); e++)
                  ;
                h === C.year && a3 < 5 * h && (g = [1, 2, 5]);
                a3 = L(a3 / h, g, "year" === l2[0] ? Math.max(I(a3 / h), 1) : 1);
                return { unitRange: h, count: a3, unitName: l2[0] };
              }
              getXDateFormat(a3, l2) {
                const { axis: m } = this, h = m.chart.time;
                return m.closestPointRange ? h.getDateFormat(m.closestPointRange, a3, m.options.startOfWeek, l2) || h.resolveDTLFormat(l2.year).main : h.resolveDTLFormat(l2.day).main;
              }
            }
            y.Additions = l;
          })(z || (z = {}));
          return z;
        }
      );
      M(a, "Core/Axis/LogarithmicAxis.js", [a["Core/Utilities.js"]], function(a2) {
        const { addEvent: x, normalizeTickInterval: I, pick: L } = a2;
        var C;
        (function(y) {
          function H(a3) {
            let l = this.logarithmic;
            "logarithmic" !== a3.userOptions.type ? this.logarithmic = void 0 : l || (this.logarithmic = new v(this));
          }
          function B() {
            const a3 = this.logarithmic;
            a3 && (this.lin2val = function(l) {
              return a3.lin2log(l);
            }, this.val2lin = function(l) {
              return a3.log2lin(l);
            });
          }
          const u = [];
          y.compose = function(l) {
            a2.pushUnique(u, l) && (l.keepProps.push("logarithmic"), x(l, "init", H), x(l, "afterInit", B));
            return l;
          };
          class v {
            constructor(a3) {
              this.axis = a3;
            }
            getLogTickPositions(a3, p, t, m) {
              const h = this.axis;
              var g = h.len, e = h.options;
              let l = [];
              m || (this.minorAutoInterval = void 0);
              if (0.5 <= a3)
                a3 = Math.round(a3), l = h.getLinearTickPositions(a3, p, t);
              else if (0.08 <= a3) {
                e = Math.floor(p);
                let h2, w, d, k, r;
                for (g = 0.3 < a3 ? [1, 2, 4] : 0.15 < a3 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < t + 1 && !r; e++)
                  for (w = g.length, h2 = 0; h2 < w && !r; h2++)
                    d = this.log2lin(this.lin2log(e) * g[h2]), d > p && (!m || k <= t) && "undefined" !== typeof k && l.push(k), k > t && (r = true), k = d;
              } else
                p = this.lin2log(p), t = this.lin2log(t), a3 = m ? h.getMinorTickInterval() : e.tickInterval, a3 = L("auto" === a3 ? null : a3, this.minorAutoInterval, e.tickPixelInterval / (m ? 5 : 1) * (t - p) / ((m ? g / h.tickPositions.length : g) || 1)), a3 = I(a3), l = h.getLinearTickPositions(a3, p, t).map(this.log2lin), m || (this.minorAutoInterval = a3 / 5);
              m || (h.tickInterval = a3);
              return l;
            }
            lin2log(a3) {
              return Math.pow(
                10,
                a3
              );
            }
            log2lin(a3) {
              return Math.log(a3) / Math.LN10;
            }
          }
          y.Additions = v;
        })(C || (C = {}));
        return C;
      });
      M(a, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [a["Core/Utilities.js"]], function(a2) {
        const { erase: x, extend: I, isNumber: L } = a2;
        var C;
        (function(y) {
          function H(a3) {
            return this.addPlotBandOrLine(a3, "plotBands");
          }
          function B(a3, e) {
            const g = this.userOptions;
            let l2 = new h(this, a3);
            this.visible && (l2 = l2.render());
            if (l2) {
              this._addedPlotLB || (this._addedPlotLB = true, (g.plotLines || []).concat(g.plotBands || []).forEach((a4) => {
                this.addPlotBandOrLine(a4);
              }));
              if (e) {
                const h2 = g[e] || [];
                h2.push(a3);
                g[e] = h2;
              }
              this.plotLinesAndBands.push(l2);
            }
            return l2;
          }
          function u(a3) {
            return this.addPlotBandOrLine(a3, "plotLines");
          }
          function v(a3, e, h2 = this.options) {
            const g = this.getPlotLinePath({ value: e, force: true, acrossPanes: h2.acrossPanes }), l2 = [], d = this.horiz;
            e = !L(this.min) || !L(this.max) || a3 < this.min && e < this.min || a3 > this.max && e > this.max;
            a3 = this.getPlotLinePath({ value: a3, force: true, acrossPanes: h2.acrossPanes });
            h2 = 1;
            let k;
            if (a3 && g)
              for (e && (k = a3.toString() === g.toString(), h2 = 0), e = 0; e < a3.length; e += 2) {
                const r = a3[e], q = a3[e + 1], m2 = g[e], b = g[e + 1];
                "M" !== r[0] && "L" !== r[0] || "M" !== q[0] && "L" !== q[0] || "M" !== m2[0] && "L" !== m2[0] || "M" !== b[0] && "L" !== b[0] || (d && m2[1] === r[1] ? (m2[1] += h2, b[1] += h2) : d || m2[2] !== r[2] || (m2[2] += h2, b[2] += h2), l2.push(["M", r[1], r[2]], ["L", q[1], q[2]], ["L", b[1], b[2]], ["L", m2[1], m2[2]], ["Z"]));
                l2.isFlat = k;
              }
            return l2;
          }
          function l(a3) {
            this.removePlotBandOrLine(a3);
          }
          function p(a3) {
            const e = this.plotLinesAndBands, g = this.options, h2 = this.userOptions;
            if (e) {
              let l2 = e.length;
              for (; l2--; )
                e[l2].id === a3 && e[l2].destroy();
              [
                g.plotLines || [],
                h2.plotLines || [],
                g.plotBands || [],
                h2.plotBands || []
              ].forEach(function(d) {
                for (l2 = d.length; l2--; )
                  (d[l2] || {}).id === a3 && x(d, d[l2]);
              });
            }
          }
          function t(a3) {
            this.removePlotBandOrLine(a3);
          }
          const m = [];
          let h;
          y.compose = function(g, e) {
            h || (h = g);
            a2.pushUnique(m, e) && I(e.prototype, { addPlotBand: H, addPlotLine: u, addPlotBandOrLine: B, getPlotBandPath: v, removePlotBand: l, removePlotLine: t, removePlotBandOrLine: p });
            return e;
          };
        })(C || (C = {}));
        return C;
      });
      M(
        a,
        "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
        [a["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], a["Core/Utilities.js"]],
        function(a2, y) {
          const { arrayMax: x, arrayMin: L, defined: C, destroyObjectProperties: z, erase: H, fireEvent: B, merge: u, objectEach: v, pick: l } = y;
          class p {
            static compose(l2) {
              return a2.compose(p, l2);
            }
            constructor(a3, l2) {
              this.axis = a3;
              l2 && (this.options = l2, this.id = l2.id);
            }
            render() {
              B(this, "render");
              const a3 = this, m = a3.axis, h = m.horiz;
              var g = m.logarithmic;
              const e = a3.options, p2 = e.color, x2 = l(e.zIndex, 0), F = e.events, d = {}, k = m.chart.renderer;
              let r = e.label, q = a3.label, G = e.to, b = e.from, f = e.value, c = a3.svgElem;
              var n = [];
              const P = C(b) && C(G);
              n = C(f);
              const D = !c, K = { "class": "highcharts-plot-" + (P ? "band " : "line ") + (e.className || "") };
              let X = P ? "bands" : "lines";
              g && (b = g.log2lin(b), G = g.log2lin(G), f = g.log2lin(f));
              m.chart.styledMode || (n ? (K.stroke = p2 || "#999999", K["stroke-width"] = l(e.width, 1), e.dashStyle && (K.dashstyle = e.dashStyle)) : P && (K.fill = p2 || "#e6e9ff", e.borderWidth && (K.stroke = e.borderColor, K["stroke-width"] = e.borderWidth)));
              d.zIndex = x2;
              X += "-" + x2;
              (g = m.plotLinesAndBandsGroups[X]) || (m.plotLinesAndBandsGroups[X] = g = k.g("plot-" + X).attr(d).add());
              D && (a3.svgElem = c = k.path().attr(K).add(g));
              if (n)
                n = m.getPlotLinePath({ value: f, lineWidth: c.strokeWidth(), acrossPanes: e.acrossPanes });
              else if (P)
                n = m.getPlotBandPath(b, G, e);
              else
                return;
              !a3.eventsAdded && F && (v(F, function(b2, f2) {
                c.on(f2, function(b3) {
                  F[f2].apply(a3, [b3]);
                });
              }), a3.eventsAdded = true);
              (D || !c.d) && n && n.length ? c.attr({ d: n }) : c && (n ? (c.show(), c.animate({ d: n })) : c.d && (c.hide(), q && (a3.label = q = q.destroy())));
              r && (C(r.text) || C(r.formatter)) && n && n.length && 0 < m.width && 0 < m.height && !n.isFlat ? (r = u({ align: h && P && "center", x: h ? !P && 4 : 10, verticalAlign: !h && P && "middle", y: h ? P ? 16 : 10 : P ? 6 : -4, rotation: h && !P && 90 }, r), this.renderLabel(r, n, P, x2)) : q && q.hide();
              return a3;
            }
            renderLabel(a3, l2, h, g) {
              const e = this.axis;
              var m = e.chart.renderer;
              let p2 = this.label;
              p2 || (this.label = p2 = m.text(this.getLabelText(a3), 0, 0, a3.useHTML).attr({ align: a3.textAlign || a3.align, rotation: a3.rotation, "class": "highcharts-plot-" + (h ? "band" : "line") + "-label " + (a3.className || ""), zIndex: g }).add(), e.chart.styledMode || p2.css(u({ fontSize: "0.8em", textOverflow: "ellipsis" }, a3.style)));
              g = l2.xBounds || [l2[0][1], l2[1][1], h ? l2[2][1] : l2[0][1]];
              l2 = l2.yBounds || [l2[0][2], l2[1][2], h ? l2[2][2] : l2[0][2]];
              h = L(g);
              m = L(l2);
              p2.align(a3, false, { x: h, y: m, width: x(g) - h, height: x(l2) - m });
              p2.alignValue && "left" !== p2.alignValue || (a3 = a3.clip ? e.width : e.chart.chartWidth, p2.css({ width: (90 === p2.rotation ? e.height - (p2.alignAttr.y - e.top) : a3 - (p2.alignAttr.x - e.left)) + "px" }));
              p2.show(true);
            }
            getLabelText(a3) {
              return C(a3.formatter) ? a3.formatter.call(this) : a3.text;
            }
            destroy() {
              H(this.axis.plotLinesAndBands, this);
              delete this.axis;
              z(this);
            }
          }
          "";
          "";
          return p;
        }
      );
      M(a, "Core/Tooltip.js", [
        a["Core/Templating.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C) {
        const { format: x } = a2, { doc: H, isSafari: B } = y, { distribute: u } = I, { addEvent: v, clamp: l, css: p, discardElement: t, extend: m, fireEvent: h, isArray: g, isNumber: e, isString: w, merge: E, pick: F, splat: d, syncTimeout: k } = C;
        class r {
          constructor(a3, d2) {
            this.allowShared = true;
            this.container = void 0;
            this.crosshairs = [];
            this.distance = 0;
            this.isHidden = true;
            this.isSticky = false;
            this.now = {};
            this.options = {};
            this.outside = false;
            this.chart = a3;
            this.init(a3, d2);
          }
          bodyFormatter(a3) {
            return a3.map(function(a4) {
              const b = a4.series.tooltipOptions;
              return (b[(a4.point.formatPrefix || "point") + "Formatter"] || a4.point.tooltipFormatter).call(a4.point, b[(a4.point.formatPrefix || "point") + "Format"] || "");
            });
          }
          cleanSplit(a3) {
            this.chart.series.forEach(function(d2) {
              const b = d2 && d2.tt;
              b && (!b.isActive || a3 ? d2.tt = b.destroy() : b.isActive = false);
            });
          }
          defaultFormatter(a3) {
            const k2 = this.points || d(this);
            let b;
            b = [a3.tooltipFooterHeaderFormatter(k2[0])];
            b = b.concat(a3.bodyFormatter(k2));
            b.push(a3.tooltipFooterHeaderFormatter(
              k2[0],
              true
            ));
            return b;
          }
          destroy() {
            this.label && (this.label = this.label.destroy());
            this.split && (this.cleanSplit(true), this.tt && (this.tt = this.tt.destroy()));
            this.renderer && (this.renderer = this.renderer.destroy(), t(this.container));
            C.clearTimeout(this.hideTimer);
            C.clearTimeout(this.tooltipTimeout);
          }
          getAnchor(a3, k2) {
            var b = this.chart;
            const f = b.pointer, c = b.inverted, n = b.plotTop;
            b = b.plotLeft;
            a3 = d(a3);
            a3[0].series && a3[0].series.yAxis && !a3[0].series.yAxis.options.reversedStacks && (a3 = a3.slice().reverse());
            if (this.followPointer && k2)
              "undefined" === typeof k2.chartX && (k2 = f.normalize(k2)), a3 = [k2.chartX - b, k2.chartY - n];
            else if (a3[0].tooltipPos)
              a3 = a3[0].tooltipPos;
            else {
              let f2 = 0, d2 = 0;
              a3.forEach(function(b2) {
                if (b2 = b2.pos(true))
                  f2 += b2[0], d2 += b2[1];
              });
              f2 /= a3.length;
              d2 /= a3.length;
              this.shared && 1 < a3.length && k2 && (c ? f2 = k2.chartX : d2 = k2.chartY);
              a3 = [f2 - b, d2 - n];
            }
            return a3.map(Math.round);
          }
          getClassName(a3, d2, b) {
            const f = a3.series, c = f.options;
            return [this.options.className, "highcharts-label", b && "highcharts-tooltip-header", d2 ? "highcharts-tooltip-box" : "highcharts-tooltip", !b && "highcharts-color-" + F(
              a3.colorIndex,
              f.colorIndex
            ), c && c.className].filter(w).join(" ");
          }
          getLabel() {
            const a3 = this, d2 = this.chart.styledMode, b = this.options, f = this.split && this.allowShared, c = b.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none");
            let n, k2 = this.chart.renderer;
            if (this.label) {
              var e2 = !this.label.hasClass("highcharts-label");
              (!f && e2 || f && !e2) && this.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                e2 = this.chart.options.chart.style;
                const b2 = L.getRendererType();
                this.container = n = y.doc.createElement("div");
                n.className = "highcharts-tooltip-container";
                p(n, { position: "absolute", top: "1px", pointerEvents: c, zIndex: Math.max(this.options.style.zIndex || 0, (e2 && e2.zIndex || 0) + 3) });
                y.doc.body.appendChild(n);
                this.renderer = k2 = new b2(n, 0, 0, e2, void 0, void 0, k2.styledMode);
              }
              f ? this.label = k2.g("tooltip") : (this.label = k2.label("", 0, 0, b.shape, void 0, void 0, b.useHTML, void 0, "tooltip").attr({ padding: b.padding, r: b.borderRadius }), d2 || this.label.attr({ fill: b.backgroundColor, "stroke-width": b.borderWidth || 0 }).css(b.style).css({ pointerEvents: c }));
              if (a3.outside) {
                const b2 = this.label, {
                  xSetter: c2,
                  ySetter: f2
                } = b2;
                b2.xSetter = function(f3) {
                  c2.call(b2, a3.distance);
                  n.style.left = f3 + "px";
                };
                b2.ySetter = function(c3) {
                  f2.call(b2, a3.distance);
                  n.style.top = c3 + "px";
                };
              }
              this.label.attr({ zIndex: 8 }).shadow(b.shadow).add();
            }
            return this.label;
          }
          getPlayingField() {
            const { body: a3, documentElement: d2 } = H, { chart: b, distance: f, outside: c } = this;
            return { width: c ? Math.max(a3.scrollWidth, d2.scrollWidth, a3.offsetWidth, d2.offsetWidth, d2.clientWidth) - 2 * f : b.chartWidth, height: c ? Math.max(a3.scrollHeight, d2.scrollHeight, a3.offsetHeight, d2.offsetHeight, d2.clientHeight) : b.chartHeight };
          }
          getPosition(a3, d2, b) {
            const f = this.chart, c = this.distance, n = {}, k2 = f.inverted && b.h || 0, e2 = this.outside;
            var q = this.getPlayingField();
            const g2 = q.width, h2 = q.height, r2 = f.pointer.getChartPosition();
            q = (n2) => {
              const k3 = "x" === n2;
              return [n2, k3 ? g2 : h2, k3 ? a3 : d2].concat(e2 ? [k3 ? a3 * r2.scaleX : d2 * r2.scaleY, k3 ? r2.left - c + (b.plotX + f.plotLeft) * r2.scaleX : r2.top - c + (b.plotY + f.plotTop) * r2.scaleY, 0, k3 ? g2 : h2] : [k3 ? a3 : d2, k3 ? b.plotX + f.plotLeft : b.plotY + f.plotTop, k3 ? f.plotLeft : f.plotTop, k3 ? f.plotLeft + f.plotWidth : f.plotTop + f.plotHeight]);
            };
            let l2 = q("y"), m2 = q("x"), p2;
            q = !!b.negative;
            !f.polar && f.hoverSeries && f.hoverSeries.yAxis && f.hoverSeries.yAxis.reversed && (q = !q);
            const t2 = !this.followPointer && F(b.ttBelow, !f.inverted === q), w2 = function(b2, a4, f2, d3, q2, g3, h3) {
              const l3 = e2 ? "y" === b2 ? c * r2.scaleY : c * r2.scaleX : c, m3 = (f2 - d3) / 2, p3 = d3 < q2 - c, J2 = q2 + c + d3 < a4, D = q2 - l3 - f2 + m3;
              q2 = q2 + l3 - m3;
              if (t2 && J2)
                n[b2] = q2;
              else if (!t2 && p3)
                n[b2] = D;
              else if (p3)
                n[b2] = Math.min(h3 - d3, 0 > D - k2 ? D : D - k2);
              else if (J2)
                n[b2] = Math.max(g3, q2 + k2 + f2 > a4 ? q2 : q2 + k2);
              else
                return false;
            }, G = function(b2, a4, f2, d3, k3) {
              let e3;
              k3 < c || k3 > a4 - c ? e3 = false : n[b2] = k3 < f2 / 2 ? 1 : k3 > a4 - d3 / 2 ? a4 - d3 - 2 : k3 - f2 / 2;
              return e3;
            }, v2 = function(b2) {
              const c2 = l2;
              l2 = m2;
              m2 = c2;
              p2 = b2;
            }, J = function() {
              false !== w2.apply(0, l2) ? false !== G.apply(0, m2) || p2 || (v2(true), J()) : p2 ? n.x = n.y = 0 : (v2(true), J());
            };
            (f.inverted || 1 < this.len) && v2();
            J();
            return n;
          }
          hide(a3) {
            const d2 = this;
            C.clearTimeout(this.hideTimer);
            a3 = F(a3, this.options.hideDelay);
            this.isHidden || (this.hideTimer = k(function() {
              d2.getLabel().fadeOut(a3 ? void 0 : a3);
              d2.isHidden = true;
            }, a3));
          }
          init(a3, d2) {
            this.chart = a3;
            this.options = d2;
            this.crosshairs = [];
            this.now = { x: 0, y: 0 };
            this.isHidden = true;
            this.split = d2.split && !a3.inverted && !a3.polar;
            this.shared = d2.shared || this.split;
            this.outside = F(d2.outside, !(!a3.scrollablePixelsX && !a3.scrollablePixelsY));
          }
          shouldStickOnContact(a3) {
            return !(this.followPointer || !this.options.stickOnContact || a3 && !this.chart.pointer.inClass(a3.target, "highcharts-tooltip"));
          }
          move(a3, d2, b, f) {
            const c = this, n = c.now, k2 = false !== c.options.animation && !c.isHidden && (1 < Math.abs(a3 - n.x) || 1 < Math.abs(d2 - n.y)), e2 = c.followPointer || 1 < c.len;
            m(n, { x: k2 ? (2 * n.x + a3) / 3 : a3, y: k2 ? (n.y + d2) / 2 : d2, anchorX: e2 ? void 0 : k2 ? (2 * n.anchorX + b) / 3 : b, anchorY: e2 ? void 0 : k2 ? (n.anchorY + f) / 2 : f });
            c.getLabel().attr(n);
            c.drawTracker();
            k2 && (C.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              c && c.move(a3, d2, b, f);
            }, 32));
          }
          refresh(a3, k2) {
            const b = this.chart, f = this.options, c = b.pointer, n = d(a3), e2 = n[0], q = [];
            var r2 = f.format, l2 = f.formatter || this.defaultFormatter;
            const m2 = this.shared, p2 = b.styledMode;
            let t2 = {};
            if (f.enabled && e2.series) {
              C.clearTimeout(this.hideTimer);
              this.allowShared = !(!g(a3) && a3.series && a3.series.noSharedTooltip);
              this.followPointer = !this.split && e2.series.tooltipOptions.followPointer;
              a3 = this.getAnchor(a3, k2);
              var v2 = a3[0], G = a3[1];
              m2 && this.allowShared ? (c.applyInactiveState(n), n.forEach(function(b2) {
                b2.setState("hover");
                q.push(b2.getLabelConfig());
              }), t2 = e2.getLabelConfig(), t2.points = q) : t2 = e2.getLabelConfig();
              this.len = q.length;
              r2 = w(r2) ? x(r2, t2, b) : l2.call(t2, this);
              l2 = e2.series;
              this.distance = F(l2.tooltipOptions.distance, 16);
              if (false === r2)
                this.hide();
              else {
                if (this.split && this.allowShared)
                  this.renderSplit(r2, n);
                else {
                  let d2 = v2, g2 = G;
                  k2 && c.isDirectTouch && (d2 = k2.chartX - b.plotLeft, g2 = k2.chartY - b.plotTop);
                  if (b.polar || false === l2.options.clip || n.some((b2) => c.isDirectTouch || b2.series.shouldShowTooltip(
                    d2,
                    g2
                  )))
                    k2 = this.getLabel(), f.style.width && !p2 || k2.css({ width: (this.outside ? this.getPlayingField() : b.spacingBox).width + "px" }), k2.attr({ text: r2 && r2.join ? r2.join("") : r2 }), k2.addClass(this.getClassName(e2), true), p2 || k2.attr({ stroke: f.borderColor || e2.color || l2.color || "#666666" }), this.updatePosition({ plotX: v2, plotY: G, negative: e2.negative, ttBelow: e2.ttBelow, h: a3[2] || 0 });
                  else {
                    this.hide();
                    return;
                  }
                }
                this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                this.isHidden = false;
              }
              h(this, "refresh");
            }
          }
          renderSplit(a3, d2) {
            function b(b2, c2, a4, d3, n2 = true) {
              a4 ? (c2 = S ? 0 : z, b2 = l(b2 - d3 / 2, J.left, J.right - d3 - (f.outside ? W : 0))) : (c2 -= da, b2 = n2 ? b2 - d3 - x2 : b2 + x2, b2 = l(b2, n2 ? b2 : J.left, J.right));
              return { x: b2, y: c2 };
            }
            const f = this, { chart: c, chart: { chartWidth: n, chartHeight: k2, plotHeight: e2, plotLeft: g2, plotTop: h2, pointer: q, scrollablePixelsY: r2 = 0, scrollablePixelsX: p2, scrollingContainer: { scrollLeft: t2, scrollTop: v2 } = { scrollLeft: 0, scrollTop: 0 }, styledMode: G }, distance: x2, options: E2, options: { positioner: y2 } } = f, J = f.outside && "number" !== typeof p2 ? H.documentElement.getBoundingClientRect() : {
              left: t2,
              right: t2 + n,
              top: v2,
              bottom: v2 + k2
            }, N = f.getLabel(), O = this.renderer || c.renderer, S = !(!c.xAxis[0] || !c.xAxis[0].opposite), { left: W, top: ha } = q.getChartPosition();
            let da = h2 + v2, C2 = 0, z = e2 - r2;
            w(a3) && (a3 = [false, a3]);
            a3 = a3.slice(0, d2.length + 1).reduce(function(c2, a4, n2) {
              if (false !== a4 && "" !== a4) {
                n2 = d2[n2 - 1] || { isHeader: true, plotX: d2[0].plotX, plotY: e2, series: {} };
                const D = n2.isHeader;
                var k3 = D ? f : n2.series, q2;
                {
                  var r3 = n2;
                  a4 = a4.toString();
                  var m2 = k3.tt;
                  const { isHeader: b2, series: c3 } = r3;
                  m2 || (m2 = { padding: E2.padding, r: E2.borderRadius }, G || (m2.fill = E2.backgroundColor, m2["stroke-width"] = null !== (q2 = E2.borderWidth) && void 0 !== q2 ? q2 : 1), m2 = O.label("", 0, 0, E2[b2 ? "headerShape" : "shape"], void 0, void 0, E2.useHTML).addClass(f.getClassName(r3, true, b2)).attr(m2).add(N));
                  m2.isActive = true;
                  m2.attr({ text: a4 });
                  G || m2.css(E2.style).attr({ stroke: E2.borderColor || r3.color || c3.color || "#333333" });
                  q2 = m2;
                }
                q2 = k3.tt = q2;
                r3 = q2.getBBox();
                k3 = r3.width + q2.strokeWidth();
                D && (C2 = r3.height, z += C2, S && (da -= C2));
                {
                  const { isHeader: b2, plotX: c3 = 0, plotY: f2 = 0, series: d3 } = n2;
                  if (b2) {
                    a4 = g2 + c3;
                    var p3 = h2 + e2 / 2;
                  } else {
                    const { xAxis: b3, yAxis: n3 } = d3;
                    a4 = b3.pos + l(c3, -x2, b3.len + x2);
                    d3.shouldShowTooltip(0, n3.pos - h2 + f2, { ignoreX: true }) && (p3 = n3.pos + f2);
                  }
                  a4 = l(a4, J.left - x2, J.right + x2);
                  p3 = { anchorX: a4, anchorY: p3 };
                }
                const { anchorX: t3, anchorY: Q2 } = p3;
                "number" === typeof Q2 ? (p3 = r3.height + 1, r3 = y2 ? y2.call(f, k3, p3, n2) : b(t3, Q2, D, k3), c2.push({ align: y2 ? 0 : void 0, anchorX: t3, anchorY: Q2, boxWidth: k3, point: n2, rank: F(r3.rank, D ? 1 : 0), size: p3, target: r3.y, tt: q2, x: r3.x })) : q2.isActive = false;
              }
              return c2;
            }, []);
            !y2 && a3.some((b2) => {
              var { outside: c2 } = f;
              c2 = (c2 ? W : 0) + b2.anchorX;
              return c2 < J.left && c2 + b2.boxWidth < J.right ? true : c2 < W - J.left + b2.boxWidth && J.right - c2 > c2;
            }) && (a3 = a3.map((c2) => {
              const { x: a4, y: f2 } = b(
                c2.anchorX,
                c2.anchorY,
                c2.point.isHeader,
                c2.boxWidth,
                false
              );
              return m(c2, { target: f2, x: a4 });
            }));
            f.cleanSplit();
            u(a3, z);
            var ca = W, L2 = W;
            a3.forEach(function(b2) {
              const { x: c2, boxWidth: a4, isHeader: d3 } = b2;
              d3 || (f.outside && W + c2 < ca && (ca = W + c2), !d3 && f.outside && ca + a4 > L2 && (L2 = W + c2));
            });
            a3.forEach(function(b2) {
              const { x: c2, anchorX: a4, anchorY: d3, pos: n2, point: { isHeader: k3 } } = b2, e3 = { visibility: "undefined" === typeof n2 ? "hidden" : "inherit", x: c2, y: (n2 || 0) + da, anchorX: a4, anchorY: d3 };
              if (f.outside && c2 < a4) {
                const b3 = W - ca;
                0 < b3 && (k3 || (e3.x = c2 + b3, e3.anchorX = a4 + b3), k3 && (e3.x = (L2 - ca) / 2, e3.anchorX = a4 + b3));
              }
              b2.tt.attr(e3);
            });
            const {
              container: R,
              outside: Q,
              renderer: la
            } = f;
            if (Q && R && la) {
              const { width: b2, height: c2, x: a4, y: f2 } = N.getBBox();
              la.setSize(b2 + a4, c2 + f2, false);
              R.style.left = ca + "px";
              R.style.top = ha + "px";
            }
            B && N.attr({ opacity: 1 === N.opacity ? 0.999 : 1 });
          }
          drawTracker() {
            if (this.shouldStickOnContact()) {
              var a3 = this.chart, d2 = this.label, b = this.shared ? a3.hoverPoints : a3.hoverPoint;
              if (d2 && b) {
                var f = { x: 0, y: 0, width: 0, height: 0 };
                b = this.getAnchor(b);
                var c = d2.getBBox();
                b[0] += a3.plotLeft - d2.translateX;
                b[1] += a3.plotTop - d2.translateY;
                f.x = Math.min(0, b[0]);
                f.y = Math.min(0, b[1]);
                f.width = 0 > b[0] ? Math.max(Math.abs(b[0]), c.width - b[0]) : Math.max(Math.abs(b[0]), c.width);
                f.height = 0 > b[1] ? Math.max(Math.abs(b[1]), c.height - Math.abs(b[1])) : Math.max(Math.abs(b[1]), c.height);
                this.tracker ? this.tracker.attr(f) : (this.tracker = d2.renderer.rect(f).addClass("highcharts-tracker").add(d2), a3.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
              }
            } else
              this.tracker && (this.tracker = this.tracker.destroy());
          }
          styledModeFormat(a3) {
            return a3.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(
              /style="color:{(point|series)\.color}"/g,
              'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
            );
          }
          tooltipFooterHeaderFormatter(a3, d2) {
            const b = a3.series, f = b.tooltipOptions;
            var c = b.xAxis;
            const n = c && c.dateTime;
            c = { isFooter: d2, labelConfig: a3 };
            let k2 = f.xDateFormat, g2 = f[d2 ? "footerFormat" : "headerFormat"];
            h(this, "headerFormatter", c, function(c2) {
              n && !k2 && e(a3.key) && (k2 = n.getXDateFormat(a3.key, f.dateTimeLabelFormats));
              n && k2 && (a3.point && a3.point.tooltipDateKeys || ["key"]).forEach(function(b2) {
                g2 = g2.replace("{point." + b2 + "}", "{point." + b2 + ":" + k2 + "}");
              });
              b.chart.styledMode && (g2 = this.styledModeFormat(g2));
              c2.text = x(g2, { point: a3, series: b }, this.chart);
            });
            return c.text;
          }
          update(a3) {
            this.destroy();
            this.init(this.chart, E(true, this.options, a3));
          }
          updatePosition(a3) {
            const { chart: d2, distance: b, options: f } = this;
            var c = d2.pointer;
            const n = this.getLabel(), { left: k2, top: e2, scaleX: g2, scaleY: h2 } = c.getChartPosition();
            c = (f.positioner || this.getPosition).call(this, n.width, n.height, a3);
            let q = (a3.plotX || 0) + d2.plotLeft;
            a3 = (a3.plotY || 0) + d2.plotTop;
            let r2;
            if (this.outside) {
              f.positioner && (c.x += k2 - b, c.y += e2 - b);
              r2 = (f.borderWidth || 0) + 2 * b;
              this.renderer.setSize(n.width + r2, n.height + r2, false);
              if (1 !== g2 || 1 !== h2)
                p(this.container, { transform: `scale(${g2}, ${h2})` }), q *= g2, a3 *= h2;
              q += k2 - c.x;
              a3 += e2 - c.y;
            }
            this.move(Math.round(c.x), Math.round(c.y || 0), q, a3);
          }
        }
        (function(a3) {
          const d2 = [];
          a3.compose = function(b) {
            C.pushUnique(d2, b) && v(b, "afterInit", function() {
              const b2 = this.chart;
              b2.options.tooltip && (b2.tooltip = new a3(b2, b2.options.tooltip));
            });
          };
        })(r || (r = {}));
        "";
        return r;
      });
      M(a, "Core/Series/Point.js", [
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Defaults.js"],
        a["Core/Templating.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C) {
        const { animObject: x } = y, { defaultOptions: H } = I, { format: B } = L, { addEvent: u, defined: v, erase: l, extend: p, fireEvent: t, getNestedProperty: m, isArray: h, isFunction: g, isNumber: e, isObject: w, merge: E, objectEach: F, pick: d, syncTimeout: k, removeEvent: r, uniqueKey: q } = C;
        class G {
          constructor() {
            this.category = void 0;
            this.destroyed = false;
            this.formatPrefix = "point";
            this.id = void 0;
            this.isNull = false;
            this.percentage = this.options = this.name = void 0;
            this.selected = false;
            this.total = this.shapeArgs = this.series = void 0;
            this.visible = true;
            this.x = void 0;
          }
          animateBeforeDestroy() {
            const b = this, a3 = { x: b.startXPos, opacity: 0 }, c = b.getGraphicalProps();
            c.singular.forEach(function(c2) {
              b[c2] = b[c2].animate("dataLabel" === c2 ? { x: b[c2].startXPos, y: b[c2].startYPos, opacity: 0 } : a3);
            });
            c.plural.forEach(function(c2) {
              b[c2].forEach(function(c3) {
                c3.element && c3.animate(p({ x: b.startXPos }, c3.startYPos ? { x: c3.startXPos, y: c3.startYPos } : {}));
              });
            });
          }
          applyOptions(b, a3) {
            const c = this.series, f = c.options.pointValKey || c.pointValKey;
            b = G.prototype.optionsToObject.call(this, b);
            p(this, b);
            this.options = this.options ? p(this.options, b) : b;
            b.group && delete this.group;
            b.dataLabels && delete this.dataLabels;
            f && (this.y = G.prototype.getNestedProperty.call(this, f));
            this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point";
            this.selected && (this.state = "select");
            "name" in this && "undefined" === typeof a3 && c.xAxis && c.xAxis.hasNames && (this.x = c.xAxis.nameToX(this));
            "undefined" === typeof this.x && c ? this.x = "undefined" === typeof a3 ? c.autoIncrement() : a3 : e(b.x) && c.options.relativeXValue && (this.x = c.autoIncrement(b.x));
            return this;
          }
          destroy() {
            if (!this.destroyed) {
              const a3 = this;
              var b = a3.series;
              const c = b.chart;
              b = b.options.dataSorting;
              const d2 = c.hoverPoints, e2 = x(a3.series.chart.renderer.globalAnimation), g2 = () => {
                if (a3.graphic || a3.graphics || a3.dataLabel || a3.dataLabels)
                  r(a3), a3.destroyElements();
                for (const b2 in a3)
                  delete a3[b2];
              };
              a3.legendItem && c.legend.destroyItem(a3);
              d2 && (a3.setState(), l(d2, a3), d2.length || (c.hoverPoints = null));
              if (a3 === c.hoverPoint)
                a3.onMouseOut();
              b && b.enabled ? (this.animateBeforeDestroy(), k(g2, e2.duration)) : g2();
              c.pointCount--;
            }
            this.destroyed = true;
          }
          destroyElements(b) {
            const a3 = this;
            b = a3.getGraphicalProps(b);
            b.singular.forEach(function(b2) {
              a3[b2] = a3[b2].destroy();
            });
            b.plural.forEach(function(b2) {
              a3[b2].forEach(function(b3) {
                b3 && b3.element && b3.destroy();
              });
              delete a3[b2];
            });
          }
          firePointEvent(b, a3, c) {
            const f = this, d2 = this.series.options;
            (d2.point.events[b] || f.options && f.options.events && f.options.events[b]) && f.importEvents();
            "click" === b && d2.allowPointSelect && (c = function(b2) {
              f.select && f.select(null, b2.ctrlKey || b2.metaKey || b2.shiftKey);
            });
            t(f, b, a3, c);
          }
          getClassName() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          }
          getGraphicalProps(b) {
            const a3 = this, c = [], d2 = { singular: [], plural: [] };
            let k2, e2;
            b = b || { graphic: 1, dataLabel: 1 };
            b.graphic && c.push("graphic");
            b.dataLabel && c.push("dataLabel", "dataLabelPath", "dataLabelUpper", "connector");
            for (e2 = c.length; e2--; )
              k2 = c[e2], a3[k2] && d2.singular.push(k2);
            ["graphic", "dataLabel", "connector"].forEach(function(c2) {
              const f = c2 + "s";
              b[c2] && a3[f] && d2.plural.push(f);
            });
            return d2;
          }
          getLabelConfig() {
            return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
          }
          getNestedProperty(b) {
            if (b)
              return 0 === b.indexOf("custom.") ? m(b, this.options) : this[b];
          }
          getZone() {
            var b = this.series;
            const a3 = b.zones;
            b = b.zoneAxis || "y";
            let c, d2 = 0;
            for (c = a3[d2]; this[b] >= c.value; )
              c = a3[++d2];
            this.nonZonedColor || (this.nonZonedColor = this.color);
            this.color = c && c.color && !this.options.color ? c.color : this.nonZonedColor;
            return c;
          }
          hasNewShapeType() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          }
          init(b, a3, c) {
            this.series = b;
            this.applyOptions(a3, c);
            this.id = v(this.id) ? this.id : q();
            this.resolveColor();
            b.chart.pointCount++;
            t(this, "afterInit");
            return this;
          }
          isValid() {
            return null !== this.x && e(this.y);
          }
          optionsToObject(b) {
            var a3 = this.series;
            const c = a3.options.keys, d2 = c || a3.pointArrayMap || ["y"], k2 = d2.length;
            let g2 = {}, q2 = 0, r2 = 0;
            if (e(b) || null === b)
              g2[d2[0]] = b;
            else if (h(b))
              for (!c && b.length > k2 && (a3 = typeof b[0], "string" === a3 ? g2.name = b[0] : "number" === a3 && (g2.x = b[0]), q2++); r2 < k2; )
                c && "undefined" === typeof b[q2] || (0 < d2[r2].indexOf(".") ? G.prototype.setNestedProperty(g2, b[q2], d2[r2]) : g2[d2[r2]] = b[q2]), q2++, r2++;
            else
              "object" === typeof b && (g2 = b, b.dataLabels && (a3._hasPointLabels = true), b.marker && (a3._hasPointMarkers = true));
            return g2;
          }
          pos(b, a3 = this.plotY) {
            if (!this.destroyed) {
              const { plotX: c, series: f } = this, { chart: d2, xAxis: k2, yAxis: g2 } = f;
              let h2 = 0, q2 = 0;
              if (e(c) && e(a3))
                return b && (h2 = k2 ? k2.pos : d2.plotLeft, q2 = g2 ? g2.pos : d2.plotTop), d2.inverted && k2 && g2 ? [g2.len - a3 + q2, k2.len - c + h2] : [c + h2, a3 + q2];
            }
          }
          resolveColor() {
            const b = this.series;
            var a3 = b.chart.styledMode;
            let c;
            var k2 = b.chart.options.chart.colorCount;
            delete this.nonZonedColor;
            b.options.colorByPoint ? (a3 || (k2 = b.options.colors || b.chart.options.colors, c = k2[b.colorCounter], k2 = k2.length), a3 = b.colorCounter, b.colorCounter++, b.colorCounter === k2 && (b.colorCounter = 0)) : (a3 || (c = b.color), a3 = b.colorIndex);
            this.colorIndex = d(this.options.colorIndex, a3);
            this.color = d(this.options.color, c);
          }
          setNestedProperty(b, a3, c) {
            c.split(".").reduce(function(b2, c2, f, d2) {
              b2[c2] = d2.length - 1 === f ? a3 : w(b2[c2], true) ? b2[c2] : {};
              return b2[c2];
            }, b);
            return b;
          }
          shouldDraw() {
            return !this.isNull;
          }
          tooltipFormatter(b) {
            const a3 = this.series, c = a3.tooltipOptions, k2 = d(c.valueDecimals, ""), e2 = c.valuePrefix || "", g2 = c.valueSuffix || "";
            a3.chart.styledMode && (b = a3.chart.tooltip.styledModeFormat(b));
            (a3.pointArrayMap || ["y"]).forEach(function(c2) {
              c2 = "{point." + c2;
              if (e2 || g2)
                b = b.replace(RegExp(c2 + "}", "g"), e2 + c2 + "}" + g2);
              b = b.replace(RegExp(c2 + "}", "g"), c2 + ":,." + k2 + "f}");
            });
            return B(b, { point: this, series: this.series }, a3.chart);
          }
          update(b, a3, c, k2) {
            function f() {
              n.applyOptions(b);
              var f2 = g2 && n.hasMockGraphic;
              f2 = null === n.y ? !f2 : f2;
              g2 && f2 && (n.graphic = g2.destroy(), delete n.hasMockGraphic);
              w(b, true) && (g2 && g2.element && b && b.marker && "undefined" !== typeof b.marker.symbol && (n.graphic = g2.destroy()), b && b.dataLabels && n.dataLabel && (n.dataLabel = n.dataLabel.destroy()), n.connector && (n.connector = n.connector.destroy()));
              r2 = n.index;
              e2.updateParallelArrays(n, r2);
              q2.data[r2] = w(q2.data[r2], true) || w(b, true) ? n.options : d(b, q2.data[r2]);
              e2.isDirty = e2.isDirtyData = true;
              !e2.fixedBox && e2.hasCartesianSeries && (h2.isDirtyBox = true);
              "point" === q2.legendType && (h2.isDirtyLegend = true);
              a3 && h2.redraw(c);
            }
            const n = this, e2 = n.series, g2 = n.graphic, h2 = e2.chart, q2 = e2.options;
            let r2;
            a3 = d(a3, true);
            false === k2 ? f() : n.firePointEvent("update", { options: b }, f);
          }
          remove(b, a3) {
            this.series.removePoint(
              this.series.data.indexOf(this),
              b,
              a3
            );
          }
          select(b, a3) {
            const c = this, f = c.series, k2 = f.chart;
            this.selectedStaging = b = d(b, !c.selected);
            c.firePointEvent(b ? "select" : "unselect", { accumulate: a3 }, function() {
              c.selected = c.options.selected = b;
              f.options.data[f.data.indexOf(c)] = c.options;
              c.setState(b && "select");
              a3 || k2.getSelectedPoints().forEach(function(b2) {
                const a4 = b2.series;
                b2.selected && b2 !== c && (b2.selected = b2.options.selected = false, a4.options.data[a4.data.indexOf(b2)] = b2.options, b2.setState(k2.hoverPoints && a4.options.inactiveOtherPoints ? "inactive" : ""), b2.firePointEvent("unselect"));
              });
            });
            delete this.selectedStaging;
          }
          onMouseOver(b) {
            const a3 = this.series.chart, c = a3.pointer;
            b = b ? c.normalize(b) : c.getChartCoordinatesFromPoint(this, a3.inverted);
            c.runPointActions(b, this);
          }
          onMouseOut() {
            const b = this.series.chart;
            this.firePointEvent("mouseOut");
            this.series.options.inactiveOtherPoints || (b.hoverPoints || []).forEach(function(b2) {
              b2.setState();
            });
            b.hoverPoints = b.hoverPoint = null;
          }
          importEvents() {
            if (!this.hasImportedEvents) {
              const b = this, a3 = E(b.series.options.point, b.options).events;
              b.events = a3;
              F(a3, function(c, a4) {
                g(c) && u(b, a4, c);
              });
              this.hasImportedEvents = true;
            }
          }
          setState(b, f) {
            const c = this.series;
            var k2 = this.state, g2 = c.options.states[b || "normal"] || {}, h2 = H.plotOptions[c.type].marker && c.options.marker;
            const q2 = h2 && false === h2.enabled, r2 = h2 && h2.states && h2.states[b || "normal"] || {}, l2 = false === r2.enabled, m2 = this.marker || {}, w2 = c.chart, v2 = h2 && c.markerAttribs;
            let G2 = c.halo;
            var u2;
            let x2;
            var E2 = c.stateMarkerGraphic;
            b = b || "";
            if (!(b === this.state && !f || this.selected && "select" !== b || false === g2.enabled || b && (l2 || q2 && false === r2.enabled) || b && m2.states && m2.states[b] && false === m2.states[b].enabled)) {
              this.state = b;
              v2 && (u2 = c.markerAttribs(this, b));
              if (this.graphic && !this.hasMockGraphic) {
                k2 && this.graphic.removeClass("highcharts-point-" + k2);
                b && this.graphic.addClass("highcharts-point-" + b);
                if (!w2.styledMode) {
                  k2 = c.pointAttribs(this, b);
                  x2 = d(w2.options.chart.animation, g2.animation);
                  const a3 = k2.opacity;
                  c.options.inactiveOtherPoints && e(a3) && ((this.dataLabels || []).forEach(function(b2) {
                    b2 && !b2.hasClass("highcharts-data-label-hidden") && b2.animate({ opacity: a3 }, x2);
                  }), this.connector && this.connector.animate({ opacity: a3 }, x2));
                  this.graphic.animate(
                    k2,
                    x2
                  );
                }
                u2 && this.graphic.animate(u2, d(w2.options.chart.animation, r2.animation, h2.animation));
                E2 && E2.hide();
              } else {
                if (b && r2) {
                  h2 = m2.symbol || c.symbol;
                  E2 && E2.currentSymbol !== h2 && (E2 = E2.destroy());
                  if (u2)
                    if (E2)
                      E2[f ? "animate" : "attr"]({ x: u2.x, y: u2.y });
                    else
                      h2 && (c.stateMarkerGraphic = E2 = w2.renderer.symbol(h2, u2.x, u2.y, u2.width, u2.height).add(c.markerGroup), E2.currentSymbol = h2);
                  !w2.styledMode && E2 && "inactive" !== this.state && E2.attr(c.pointAttribs(this, b));
                }
                E2 && (E2[b && this.isInside ? "show" : "hide"](), E2.element.point = this, E2.addClass(this.getClassName(), true));
              }
              g2 = g2.halo;
              u2 = (E2 = this.graphic || E2) && E2.visibility || "inherit";
              g2 && g2.size && E2 && "hidden" !== u2 && !this.isCluster ? (G2 || (c.halo = G2 = w2.renderer.path().add(E2.parentGroup)), G2.show()[f ? "animate" : "attr"]({ d: this.haloPath(g2.size) }), G2.attr({ "class": "highcharts-halo highcharts-color-" + d(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""), visibility: u2, zIndex: -1 }), G2.point = this, w2.styledMode || G2.attr(p({ fill: this.color || c.color, "fill-opacity": g2.opacity }, a2.filterUserAttributes(g2.attributes || {})))) : G2 && G2.point && G2.point.haloPath && G2.animate({ d: G2.point.haloPath(0) }, null, G2.hide);
              t(this, "afterSetState", { state: b });
            }
          }
          haloPath(b) {
            const a3 = this.pos();
            return a3 ? this.series.chart.renderer.symbols.circle(Math.floor(a3[0]) - b, a3[1] - b, 2 * b, 2 * b) : [];
          }
        }
        "";
        return G;
      });
      M(a, "Core/Pointer.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { parse: x } = a2, { charts: C, noop: z } = y, { addEvent: H, attr: B, css: u, defined: v, extend: l, find: p, fireEvent: t, isNumber: m, isObject: h, objectEach: g, offset: e, pick: w, splat: E } = I;
        class F {
          constructor(a3, k) {
            this.lastValidTouch = {};
            this.pinchDown = [];
            this.runChartClick = false;
            this.eventsToUnbind = [];
            this.chart = a3;
            this.hasDragged = false;
            this.options = k;
            this.init(a3, k);
          }
          applyInactiveState(a3) {
            let d = [], e2;
            (a3 || []).forEach(function(a4) {
              e2 = a4.series;
              d.push(e2);
              e2.linkedParent && d.push(e2.linkedParent);
              e2.linkedSeries && (d = d.concat(e2.linkedSeries));
              e2.navigatorSeries && d.push(e2.navigatorSeries);
            });
            this.chart.series.forEach(function(a4) {
              -1 === d.indexOf(a4) ? a4.setState("inactive", true) : a4.options.inactiveOtherPoints && a4.setAllPointsToState("inactive");
            });
          }
          destroy() {
            const a3 = this;
            this.eventsToUnbind.forEach((a4) => a4());
            this.eventsToUnbind = [];
            y.chartCount || (F.unbindDocumentMouseUp && (F.unbindDocumentMouseUp = F.unbindDocumentMouseUp()), F.unbindDocumentTouchEnd && (F.unbindDocumentTouchEnd = F.unbindDocumentTouchEnd()));
            clearInterval(a3.tooltipTimeout);
            g(a3, function(d, e2) {
              a3[e2] = void 0;
            });
          }
          getSelectionMarkerAttrs(a3, k) {
            const d = { args: { chartX: a3, chartY: k }, attrs: {}, shapeType: "rect" };
            t(this, "getSelectionMarkerAttrs", d, (d2) => {
              const { chart: e2, mouseDownX: b = 0, mouseDownY: f = 0, zoomHor: c, zoomVert: n } = this;
              d2 = d2.attrs;
              let g2;
              d2.x = e2.plotLeft;
              d2.y = e2.plotTop;
              d2.width = c ? 1 : e2.plotWidth;
              d2.height = n ? 1 : e2.plotHeight;
              c && (g2 = a3 - b, d2.width = Math.abs(g2), d2.x = (0 < g2 ? 0 : g2) + b);
              n && (g2 = k - f, d2.height = Math.abs(g2), d2.y = (0 < g2 ? 0 : g2) + f);
            });
            return d;
          }
          drag(a3) {
            const d = this.chart, e2 = d.options.chart;
            var g2 = d.plotLeft;
            const l2 = d.plotTop, b = d.plotWidth, f = d.plotHeight, c = this.mouseDownX || 0, n = this.mouseDownY || 0, m2 = h(e2.panning) ? e2.panning && e2.panning.enabled : e2.panning, p2 = e2.panKey && a3[e2.panKey + "Key"];
            let t2 = a3.chartX, w2 = a3.chartY, v2 = this.selectionMarker;
            if (!v2 || !v2.touch) {
              if (t2 < g2 ? t2 = g2 : t2 > g2 + b && (t2 = g2 + b), w2 < l2 ? w2 = l2 : w2 > l2 + f && (w2 = l2 + f), this.hasDragged = Math.sqrt(Math.pow(c - t2, 2) + Math.pow(n - w2, 2)), 10 < this.hasDragged) {
                g2 = d.isInsidePlot(c - g2, n - l2, { visiblePlotOnly: true });
                const { shapeType: b2, attrs: f2 } = this.getSelectionMarkerAttrs(t2, w2);
                !d.hasCartesianSeries && !d.mapView || !this.zoomX && !this.zoomY || !g2 || p2 || v2 || (this.selectionMarker = v2 = d.renderer[b2](), v2.attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), d.styledMode || v2.attr({ fill: e2.selectionMarkerFill || x("#334eff").setOpacity(0.25).get() }));
                v2 && v2.attr(f2);
                g2 && !v2 && m2 && d.pan(a3, e2.panning);
              }
            }
          }
          dragStart(a3) {
            const d = this.chart;
            d.mouseIsDown = a3.type;
            d.cancelClick = false;
            d.mouseDownX = this.mouseDownX = a3.chartX;
            d.mouseDownY = this.mouseDownY = a3.chartY;
          }
          getSelectionBox(a3) {
            const d = { args: { marker: a3 }, result: {} };
            t(this, "getSelectionBox", d, (d2) => {
              d2.result = { x: a3.attr ? +a3.attr("x") : a3.x, y: a3.attr ? +a3.attr("y") : a3.y, width: a3.attr ? a3.attr("width") : a3.width, height: a3.attr ? a3.attr("height") : a3.height };
            });
            return d.result;
          }
          drop(a3) {
            const d = this, e2 = this.chart, g2 = this.hasPinched;
            if (this.selectionMarker) {
              const {
                x: k,
                y: b,
                width: f,
                height: c
              } = this.getSelectionBox(this.selectionMarker), n = { originalEvent: a3, xAxis: [], yAxis: [], x: k, y: b, width: f, height: c };
              let h2 = !!e2.mapView;
              if (this.hasDragged || g2)
                e2.axes.forEach(function(e3) {
                  if (e3.zoomEnabled && v(e3.min) && (g2 || d[{ xAxis: "zoomX", yAxis: "zoomY" }[e3.coll]]) && m(k) && m(b) && m(f) && m(c)) {
                    var q = e3.horiz;
                    const d2 = "touchend" === a3.type ? e3.minPixelPadding : 0, g3 = e3.toValue((q ? k : b) + d2);
                    q = e3.toValue((q ? k + f : b + c) - d2);
                    n[e3.coll].push({ axis: e3, min: Math.min(g3, q), max: Math.max(g3, q) });
                    h2 = true;
                  }
                }), h2 && t(e2, "selection", n, function(b2) {
                  e2.zoom(l(
                    b2,
                    g2 ? { animation: false } : null
                  ));
                });
              m(e2.index) && (this.selectionMarker = this.selectionMarker.destroy());
              g2 && this.scaleGroups();
            }
            e2 && m(e2.index) && (u(e2.container, { cursor: e2._cursor }), e2.cancelClick = 10 < this.hasDragged, e2.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
          }
          findNearestKDPoint(a3, k, e2) {
            let d;
            a3.forEach(function(a4) {
              var b = !(a4.noSharedTooltip && k) && 0 > a4.options.findNearestPointBy.indexOf("y");
              a4 = a4.searchPoint(e2, b);
              if ((b = h(a4, true) && a4.series) && !(b = !h(d, true))) {
                {
                  b = d.distX - a4.distX;
                  const f = d.dist - a4.dist, c = (a4.series.group && a4.series.group.zIndex) - (d.series.group && d.series.group.zIndex);
                  b = 0 !== b && k ? b : 0 !== f ? f : 0 !== c ? c : d.series.index > a4.series.index ? -1 : 1;
                }
                b = 0 < b;
              }
              b && (d = a4);
            });
            return d;
          }
          getChartCoordinatesFromPoint(a3, k) {
            var d = a3.series;
            const e2 = d.xAxis;
            d = d.yAxis;
            const g2 = a3.shapeArgs;
            if (e2 && d) {
              let b = w(a3.clientX, a3.plotX), f = a3.plotY || 0;
              a3.isNode && g2 && m(g2.x) && m(g2.y) && (b = g2.x, f = g2.y);
              return k ? { chartX: d.len + d.pos - f, chartY: e2.len + e2.pos - b } : { chartX: b + e2.pos, chartY: f + d.pos };
            }
            if (g2 && g2.x && g2.y)
              return { chartX: g2.x, chartY: g2.y };
          }
          getChartPosition() {
            if (this.chartPosition)
              return this.chartPosition;
            var { container: a3 } = this.chart;
            const k = e(a3);
            this.chartPosition = { left: k.left, top: k.top, scaleX: 1, scaleY: 1 };
            const g2 = a3.offsetWidth;
            a3 = a3.offsetHeight;
            2 < g2 && 2 < a3 && (this.chartPosition.scaleX = k.width / g2, this.chartPosition.scaleY = k.height / a3);
            return this.chartPosition;
          }
          getCoordinates(a3) {
            const d = { xAxis: [], yAxis: [] };
            this.chart.axes.forEach(function(k) {
              d[k.isXAxis ? "xAxis" : "yAxis"].push({ axis: k, value: k.toValue(a3[k.horiz ? "chartX" : "chartY"]) });
            });
            return d;
          }
          getHoverData(a3, k, e2, g2, l2, b) {
            const f = [];
            g2 = !(!g2 || !a3);
            const c = function(b2) {
              return b2.visible && !(!l2 && b2.directTouch) && w(b2.options.enableMouseTracking, true);
            };
            let d, q = { chartX: b ? b.chartX : void 0, chartY: b ? b.chartY : void 0, shared: l2 };
            t(this, "beforeGetHoverData", q);
            d = k && !k.stickyTracking ? [k] : e2.filter((b2) => b2.stickyTracking && (q.filter || c)(b2));
            const r = g2 || !b ? a3 : this.findNearestKDPoint(d, l2, b);
            k = r && r.series;
            r && (l2 && !k.noSharedTooltip ? (d = e2.filter(function(b2) {
              return q.filter ? q.filter(b2) : c(b2) && !b2.noSharedTooltip;
            }), d.forEach(function(b2) {
              let c2 = p(b2.points, function(b3) {
                return b3.x === r.x && !b3.isNull;
              });
              h(c2) && (b2.boosted && b2.boost && (c2 = b2.boost.getPoint(c2)), f.push(c2));
            })) : f.push(r));
            q = { hoverPoint: r };
            t(this, "afterGetHoverData", q);
            return { hoverPoint: q.hoverPoint, hoverSeries: k, hoverPoints: f };
          }
          getPointFromEvent(a3) {
            a3 = a3.target;
            let d;
            for (; a3 && !d; )
              d = a3.point, a3 = a3.parentNode;
            return d;
          }
          onTrackerMouseOut(a3) {
            a3 = a3.relatedTarget;
            const d = this.chart.hoverSeries;
            this.isDirectTouch = false;
            if (!(!d || !a3 || d.stickyTracking || this.inClass(a3, "highcharts-tooltip") || this.inClass(a3, "highcharts-series-" + d.index) && this.inClass(a3, "highcharts-tracker")))
              d.onMouseOut();
          }
          inClass(a3, k) {
            let d;
            for (; a3; ) {
              if (d = B(a3, "class")) {
                if (-1 !== d.indexOf(k))
                  return true;
                if (-1 !== d.indexOf("highcharts-container"))
                  return false;
              }
              a3 = a3.parentElement;
            }
          }
          init(a3, k) {
            this.options = k;
            this.chart = a3;
            this.runChartClick = !(!k.chart.events || !k.chart.events.click);
            this.pinchDown = [];
            this.lastValidTouch = {};
            this.setDOMEvents();
            t(this, "afterInit");
          }
          normalize(a3, k) {
            var d = a3.touches, e2 = d ? d.length ? d.item(0) : w(d.changedTouches, a3.changedTouches)[0] : a3;
            k || (k = this.getChartPosition());
            d = e2.pageX - k.left;
            e2 = e2.pageY - k.top;
            d /= k.scaleX;
            e2 /= k.scaleY;
            return l(a3, { chartX: Math.round(d), chartY: Math.round(e2) });
          }
          onContainerClick(a3) {
            const d = this.chart, e2 = d.hoverPoint;
            a3 = this.normalize(a3);
            const g2 = d.plotLeft, h2 = d.plotTop;
            d.cancelClick || (e2 && this.inClass(a3.target, "highcharts-tracker") ? (t(e2.series, "click", l(a3, { point: e2 })), d.hoverPoint && e2.firePointEvent("click", a3)) : (l(a3, this.getCoordinates(a3)), d.isInsidePlot(a3.chartX - g2, a3.chartY - h2, { visiblePlotOnly: true }) && t(d, "click", a3)));
          }
          onContainerMouseDown(a3) {
            const d = 1 === ((a3.buttons || a3.button) & 1);
            a3 = this.normalize(a3);
            if (y.isFirefox && 0 !== a3.button)
              this.onContainerMouseMove(a3);
            if ("undefined" === typeof a3.button || d)
              this.zoomOption(a3), d && a3.preventDefault && a3.preventDefault(), this.dragStart(a3);
          }
          onContainerMouseLeave(a3) {
            const d = C[w(F.hoverChartIndex, -1)];
            a3 = this.normalize(a3);
            d && a3.relatedTarget && !this.inClass(a3.relatedTarget, "highcharts-tooltip") && (d.pointer.reset(), d.pointer.chartPosition = void 0);
          }
          onContainerMouseEnter(a3) {
            delete this.chartPosition;
          }
          onContainerMouseMove(a3) {
            const d = this.chart, e2 = d.tooltip;
            a3 = this.normalize(a3);
            this.setHoverChartIndex();
            ("mousedown" === d.mouseIsDown || this.touchSelect(a3)) && this.drag(a3);
            d.openMenu || !this.inClass(a3.target, "highcharts-tracker") && !d.isInsidePlot(a3.chartX - d.plotLeft, a3.chartY - d.plotTop, { visiblePlotOnly: true }) || e2 && e2.shouldStickOnContact(a3) || (this.inClass(a3.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(a3));
          }
          onDocumentTouchEnd(a3) {
            const d = C[w(F.hoverChartIndex, -1)];
            d && d.pointer.drop(a3);
          }
          onContainerTouchMove(a3) {
            if (this.touchSelect(a3))
              this.onContainerMouseMove(a3);
            else
              this.touch(a3);
          }
          onContainerTouchStart(a3) {
            if (this.touchSelect(a3))
              this.onContainerMouseDown(a3);
            else
              this.zoomOption(a3), this.touch(a3, true);
          }
          onDocumentMouseMove(a3) {
            const d = this.chart, e2 = d.tooltip, g2 = this.chartPosition;
            a3 = this.normalize(a3, g2);
            !g2 || d.isInsidePlot(a3.chartX - d.plotLeft, a3.chartY - d.plotTop, { visiblePlotOnly: true }) || e2 && e2.shouldStickOnContact(a3) || this.inClass(a3.target, "highcharts-tracker") || this.reset();
          }
          onDocumentMouseUp(a3) {
            const d = C[w(F.hoverChartIndex, -1)];
            d && d.pointer.drop(a3);
          }
          pinch(a3) {
            const d = this, e2 = d.chart, g2 = d.pinchDown, h2 = a3.touches || [], b = h2.length, f = d.lastValidTouch, c = d.hasZoom, n = {}, m2 = 1 === b && (d.inClass(a3.target, "highcharts-tracker") && e2.runTrackerClick || d.runChartClick), p2 = {};
            var v2 = d.chart.tooltip;
            v2 = 1 === b && w(v2 && v2.options.followTouchMove, true);
            let u2 = d.selectionMarker;
            1 < b ? d.initiated = true : v2 && (d.initiated = false);
            c && d.initiated && !m2 && false !== a3.cancelable && a3.preventDefault();
            [].map.call(h2, function(b2) {
              return d.normalize(b2);
            });
            "touchstart" === a3.type ? ([].forEach.call(h2, function(b2, a4) {
              g2[a4] = { chartX: b2.chartX, chartY: b2.chartY };
            }), f.x = [g2[0].chartX, g2[1] && g2[1].chartX], f.y = [g2[0].chartY, g2[1] && g2[1].chartY], e2.axes.forEach(function(b2) {
              if (b2.zoomEnabled) {
                const a4 = e2.bounds[b2.horiz ? "h" : "v"], c2 = b2.minPixelPadding, f2 = b2.toPixels(Math.min(w(b2.options.min, b2.dataMin), b2.dataMin)), d2 = b2.toPixels(Math.max(w(b2.options.max, b2.dataMax), b2.dataMax)), n2 = Math.max(f2, d2);
                a4.min = Math.min(b2.pos, Math.min(f2, d2) - c2);
                a4.max = Math.max(b2.pos + b2.len, n2 + c2);
              }
            }), d.res = true) : v2 ? this.runPointActions(d.normalize(a3)) : g2.length && (t(e2, "touchpan", { originalEvent: a3 }, () => {
              u2 || (d.selectionMarker = u2 = l({ destroy: z, touch: true }, e2.plotBox));
              d.pinchTranslate(g2, h2, n, u2, p2, f);
              d.hasPinched = c;
              d.scaleGroups(n, p2);
            }), d.res && (d.res = false, this.reset(
              false,
              0
            )));
          }
          pinchTranslate(a3, e2, g2, h2, l2, b) {
            this.zoomHor && this.pinchTranslateDirection(true, a3, e2, g2, h2, l2, b);
            this.zoomVert && this.pinchTranslateDirection(false, a3, e2, g2, h2, l2, b);
          }
          pinchTranslateDirection(a3, e2, g2, h2, l2, b, f, c) {
            const d = this.chart, k = a3 ? "x" : "y", q = a3 ? "X" : "Y", m2 = "chart" + q, r = a3 ? "width" : "height", p2 = d["plot" + (a3 ? "Left" : "Top")], t2 = d.inverted, w2 = d.bounds[a3 ? "h" : "v"], v2 = 1 === e2.length, u2 = e2[0][m2], x2 = !v2 && e2[1][m2];
            e2 = function() {
              "number" === typeof N && 20 < Math.abs(u2 - x2) && (F2 = c || Math.abs(J - N) / Math.abs(u2 - x2));
              E2 = (p2 - J) / F2 + u2;
              G = d["plot" + (a3 ? "Width" : "Height")] / F2;
            };
            let G, E2, F2 = c || 1, J = g2[0][m2], N = !v2 && g2[1][m2], O;
            e2();
            g2 = E2;
            g2 < w2.min ? (g2 = w2.min, O = true) : g2 + G > w2.max && (g2 = w2.max - G, O = true);
            O ? (J -= 0.8 * (J - f[k][0]), "number" === typeof N && (N -= 0.8 * (N - f[k][1])), e2()) : f[k] = [J, N];
            t2 || (b[k] = E2 - p2, b[r] = G);
            b = t2 ? 1 / F2 : F2;
            l2[r] = G;
            l2[k] = g2;
            h2[t2 ? a3 ? "scaleY" : "scaleX" : "scale" + q] = F2;
            h2["translate" + q] = b * p2 + (J - b * u2);
          }
          reset(a3, e2) {
            const d = this.chart, k = d.hoverSeries, g2 = d.hoverPoint, b = d.hoverPoints, f = d.tooltip, c = f && f.shared ? b : g2;
            a3 && c && E(c).forEach(function(b2) {
              b2.series.isCartesian && "undefined" === typeof b2.plotX && (a3 = false);
            });
            if (a3)
              f && c && E(c).length && (f.refresh(c), f.shared && b ? b.forEach(function(b2) {
                b2.setState(b2.state, true);
                b2.series.isCartesian && (b2.series.xAxis.crosshair && b2.series.xAxis.drawCrosshair(null, b2), b2.series.yAxis.crosshair && b2.series.yAxis.drawCrosshair(null, b2));
              }) : g2 && (g2.setState(g2.state, true), d.axes.forEach(function(b2) {
                b2.crosshair && g2.series[b2.coll] === b2 && b2.drawCrosshair(null, g2);
              })));
            else {
              if (g2)
                g2.onMouseOut();
              b && b.forEach(function(b2) {
                b2.setState();
              });
              if (k)
                k.onMouseOut();
              f && f.hide(e2);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              d.axes.forEach(function(b2) {
                b2.hideCrosshair();
              });
              this.hoverX = d.hoverPoints = d.hoverPoint = null;
            }
          }
          runPointActions(a3, e2, g2) {
            const d = this.chart, k = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0, b = k ? k.shared : false;
            let f = e2 || d.hoverPoint, c = f && f.series || d.hoverSeries;
            e2 = this.getHoverData(f, c, d.series, (!a3 || "touchmove" !== a3.type) && (!!e2 || c && c.directTouch && this.isDirectTouch), b, a3);
            f = e2.hoverPoint;
            c = e2.hoverSeries;
            const n = e2.hoverPoints;
            e2 = c && c.tooltipOptions.followPointer && !c.tooltipOptions.split;
            const h2 = b && c && !c.noSharedTooltip;
            if (f && (g2 || f !== d.hoverPoint || k && k.isHidden)) {
              (d.hoverPoints || []).forEach(function(b2) {
                -1 === n.indexOf(b2) && b2.setState();
              });
              if (d.hoverSeries !== c)
                c.onMouseOver();
              this.applyInactiveState(n);
              (n || []).forEach(function(b2) {
                b2.setState("hover");
              });
              d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
              if (!f.series)
                return;
              d.hoverPoints = n;
              d.hoverPoint = f;
              f.firePointEvent("mouseOver", void 0, () => {
                k && f && k.refresh(h2 ? n : f, a3);
              });
            } else
              e2 && k && !k.isHidden && (g2 = k.getAnchor([{}], a3), d.isInsidePlot(g2[0], g2[1], { visiblePlotOnly: true }) && k.updatePosition({
                plotX: g2[0],
                plotY: g2[1]
              }));
            this.unDocMouseMove || (this.unDocMouseMove = H(d.container.ownerDocument, "mousemove", function(b2) {
              const a4 = C[F.hoverChartIndex];
              if (a4)
                a4.pointer.onDocumentMouseMove(b2);
            }), this.eventsToUnbind.push(this.unDocMouseMove));
            d.axes.forEach(function(b2) {
              const c2 = w((b2.crosshair || {}).snap, true);
              let f2;
              c2 && ((f2 = d.hoverPoint) && f2.series[b2.coll] === b2 || (f2 = p(n, (a4) => a4.series && a4.series[b2.coll] === b2)));
              f2 || !c2 ? b2.drawCrosshair(a3, f2) : b2.hideCrosshair();
            });
          }
          scaleGroups(a3, e2) {
            const d = this.chart;
            d.series.forEach(function(k) {
              const g2 = a3 || k.getPlotBox();
              k.group && (k.xAxis && k.xAxis.zoomEnabled || d.mapView) && (k.group.attr(g2), k.markerGroup && (k.markerGroup.attr(g2), k.markerGroup.clip(e2 ? d.clipRect : null)), k.dataLabelsGroup && k.dataLabelsGroup.attr(g2));
            });
            d.clipRect.attr(e2 || d.clipBox);
          }
          setDOMEvents() {
            const a3 = this.chart.container, e2 = a3.ownerDocument;
            a3.onmousedown = this.onContainerMouseDown.bind(this);
            a3.onmousemove = this.onContainerMouseMove.bind(this);
            a3.onclick = this.onContainerClick.bind(this);
            this.eventsToUnbind.push(H(a3, "mouseenter", this.onContainerMouseEnter.bind(this)));
            this.eventsToUnbind.push(H(a3, "mouseleave", this.onContainerMouseLeave.bind(this)));
            F.unbindDocumentMouseUp || (F.unbindDocumentMouseUp = H(e2, "mouseup", this.onDocumentMouseUp.bind(this)));
            let g2 = this.chart.renderTo.parentElement;
            for (; g2 && "BODY" !== g2.tagName; )
              this.eventsToUnbind.push(H(g2, "scroll", () => {
                delete this.chartPosition;
              })), g2 = g2.parentElement;
            y.hasTouch && (this.eventsToUnbind.push(H(a3, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(H(
              a3,
              "touchmove",
              this.onContainerTouchMove.bind(this),
              { passive: false }
            )), F.unbindDocumentTouchEnd || (F.unbindDocumentTouchEnd = H(e2, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
          }
          setHoverChartIndex() {
            const a3 = this.chart, e2 = y.charts[w(F.hoverChartIndex, -1)];
            if (e2 && e2 !== a3)
              e2.pointer.onContainerMouseLeave({ relatedTarget: a3.container });
            e2 && e2.mouseIsDown || (F.hoverChartIndex = a3.index);
          }
          touch(a3, e2) {
            const d = this.chart;
            let g2, k;
            this.setHoverChartIndex();
            1 === a3.touches.length ? (a3 = this.normalize(a3), (k = d.isInsidePlot(a3.chartX - d.plotLeft, a3.chartY - d.plotTop, { visiblePlotOnly: true })) && !d.openMenu ? (e2 && this.runPointActions(a3), "touchmove" === a3.type && (e2 = this.pinchDown, g2 = e2[0] ? 4 <= Math.sqrt(Math.pow(e2[0].chartX - a3.chartX, 2) + Math.pow(e2[0].chartY - a3.chartY, 2)) : false), w(g2, true) && this.pinch(a3)) : e2 && this.reset()) : 2 === a3.touches.length && this.pinch(a3);
          }
          touchSelect(a3) {
            return !(!this.chart.zooming.singleTouch || !a3.touches || 1 !== a3.touches.length);
          }
          zoomOption(a3) {
            const d = this.chart, e2 = d.inverted;
            var g2 = d.zooming.type || "";
            /touch/.test(a3.type) && (g2 = w(d.zooming.pinchType, g2));
            this.zoomX = a3 = /x/.test(g2);
            this.zoomY = g2 = /y/.test(g2);
            this.zoomHor = a3 && !e2 || g2 && e2;
            this.zoomVert = g2 && !e2 || a3 && e2;
            this.hasZoom = a3 || g2;
          }
        }
        (function(a3) {
          const d = [], e2 = [];
          a3.compose = function(d2) {
            I.pushUnique(e2, d2) && H(d2, "beforeRender", function() {
              this.pointer = new a3(this, this.options);
            });
          };
          a3.dissolve = function() {
            for (let a4 = 0, e3 = d.length; a4 < e3; ++a4)
              d[a4]();
            d.length = 0;
          };
        })(F || (F = {}));
        "";
        return F;
      });
      M(
        a,
        "Core/Legend/Legend.js",
        [a["Core/Animation/AnimationUtilities.js"], a["Core/Templating.js"], a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Renderer/RendererUtilities.js"], a["Core/Utilities.js"]],
        function(a2, y, I, L, C, z) {
          const { animObject: x, setAnimation: B } = a2, { format: u } = y, { marginNames: v } = I, { distribute: l } = C, { addEvent: p, createElement: t, css: m, defined: h, discardElement: g, find: e, fireEvent: w, isNumber: E, merge: F, pick: d, relativeLength: k, stableSort: r, syncTimeout: q } = z;
          class G {
            constructor(b, a3) {
              this.allItems = [];
              this.contentGroup = this.box = void 0;
              this.display = false;
              this.group = void 0;
              this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
              this.options = void 0;
              this.padding = 0;
              this.pages = [];
              this.proximate = false;
              this.scrollGroup = void 0;
              this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
              this.chart = b;
              this.init(b, a3);
            }
            init(b, a3) {
              this.chart = b;
              this.setOptions(a3);
              a3.enabled && (this.render(), p(this.chart, "endResize", function() {
                this.legend.positionCheckboxes();
              }), p(this.chart, "render", () => {
                this.proximate && (this.proximatePositions(), this.positionItems());
              }));
            }
            setOptions(b) {
              const a3 = d(b.padding, 8);
              this.options = b;
              this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = F(this.itemStyle, b.itemHiddenStyle));
              this.itemMarginTop = b.itemMarginTop;
              this.itemMarginBottom = b.itemMarginBottom;
              this.padding = a3;
              this.initialItemY = a3 - 5;
              this.symbolWidth = d(b.symbolWidth, 16);
              this.pages = [];
              this.proximate = "proximate" === b.layout && !this.chart.inverted;
              this.baseline = void 0;
            }
            update(b, a3) {
              const c = this.chart;
              this.setOptions(F(true, this.options, b));
              this.destroy();
              c.isDirtyLegend = c.isDirtyBox = true;
              d(a3, true) && c.redraw();
              w(this, "afterUpdate");
            }
            colorizeItem(b, a3) {
              const { group: c, label: f, line: d2, symbol: e2 } = b.legendItem || {};
              if (c)
                c[a3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
              if (!this.chart.styledMode) {
                const { itemHiddenStyle: c2 } = this, g2 = c2.color, k2 = a3 ? b.color || g2 : g2, n = b.options && b.options.marker;
                let h2 = { fill: k2 };
                null === f || void 0 === f ? void 0 : f.css(F(a3 ? this.itemStyle : c2));
                null === d2 || void 0 === d2 ? void 0 : d2.attr({ stroke: k2 });
                e2 && (n && e2.isMarker && (h2 = b.pointAttribs(), a3 || (h2.stroke = h2.fill = g2)), e2.attr(h2));
              }
              w(this, "afterColorizeItem", { item: b, visible: a3 });
            }
            positionItems() {
              this.allItems.forEach(this.positionItem, this);
              this.chart.isResizing || this.positionCheckboxes();
            }
            positionItem(b) {
              const { group: a3, x: c = 0, y: d2 = 0 } = b.legendItem || {};
              var e2 = this.options, g2 = e2.symbolPadding;
              const k2 = !e2.rtl;
              e2 = b.checkbox;
              a3 && a3.element && (g2 = { translateX: k2 ? c : this.legendWidth - c - 2 * g2 - 4, translateY: d2 }, a3[h(a3.translateY) ? "animate" : "attr"](g2, void 0, () => {
                w(this, "afterPositionItem", { item: b });
              }));
              e2 && (e2.x = c, e2.y = d2);
            }
            destroyItem(b) {
              const a3 = b.checkbox, c = b.legendItem || {};
              for (const b2 of ["group", "label", "line", "symbol"])
                c[b2] && (c[b2] = c[b2].destroy());
              a3 && g(a3);
              b.legendItem = void 0;
            }
            destroy() {
              for (const b of this.getAllItems())
                this.destroyItem(b);
              for (const b of "clipRect up down pager nav box title group".split(" "))
                this[b] && (this[b] = this[b].destroy());
              this.display = null;
            }
            positionCheckboxes() {
              const b = this.group && this.group.alignAttr, a3 = this.clipHeight || this.legendHeight, c = this.titleHeight;
              let d2;
              b && (d2 = b.translateY, this.allItems.forEach(function(f) {
                const e2 = f.checkbox;
                let g2;
                e2 && (g2 = d2 + c + e2.y + (this.scrollOffset || 0) + 3, m(e2, { left: b.translateX + f.checkboxOffset + e2.x - 20 + "px", top: g2 + "px", display: this.proximate || g2 > d2 - 6 && g2 < d2 + a3 - 6 ? "" : "none" }));
              }, this));
            }
            renderTitle() {
              var b = this.options;
              const a3 = this.padding, c = b.title;
              let d2 = 0;
              c.text && (this.title || (this.title = this.chart.renderer.label(c.text, a3 - 3, a3 - 4, void 0, void 0, void 0, b.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(c.style), this.title.add(this.group)), c.width || this.title.css({ width: this.maxLegendWidth + "px" }), b = this.title.getBBox(), d2 = b.height, this.offsetWidth = b.width, this.contentGroup.attr({ translateY: d2 }));
              this.titleHeight = d2;
            }
            setText(b) {
              const a3 = this.options;
              b.legendItem.label.attr({ text: a3.labelFormat ? u(a3.labelFormat, b, this.chart) : a3.labelFormatter.call(b) });
            }
            renderItem(b) {
              const a3 = b.legendItem = b.legendItem || {};
              var c = this.chart, e2 = c.renderer;
              const g2 = this.options, k2 = this.symbolWidth, h2 = g2.symbolPadding || 0, l2 = this.itemStyle, m2 = this.itemHiddenStyle, q2 = "horizontal" === g2.layout ? d(g2.itemDistance, 20) : 0, r2 = !g2.rtl, p2 = !b.series, t2 = !p2 && b.series.drawLegendSymbol ? b.series : b;
              var w2 = t2.options;
              const v2 = this.createCheckboxForItem && w2 && w2.showCheckbox, u2 = g2.useHTML, x2 = b.options.className;
              let J = a3.label;
              w2 = k2 + h2 + q2 + (v2 ? 20 : 0);
              J || (a3.group = e2.g("legend-item").addClass("highcharts-" + t2.type + "-series highcharts-color-" + b.colorIndex + (x2 ? " " + x2 : "") + (p2 ? " highcharts-series-" + b.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a3.label = J = e2.text("", r2 ? k2 + h2 : -h2, this.baseline || 0, u2), c.styledMode || J.css(F(b.visible ? l2 : m2)), J.attr({ align: r2 ? "left" : "right", zIndex: 2 }).add(a3.group), this.baseline || (this.fontMetrics = e2.fontMetrics(J), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, J.attr("y", this.baseline), this.symbolHeight = d(g2.symbolHeight, this.fontMetrics.f), g2.squareSymbol && (this.symbolWidth = d(g2.symbolWidth, Math.max(this.symbolHeight, 16)), w2 = this.symbolWidth + h2 + q2 + (v2 ? 20 : 0), r2 && J.attr("x", this.symbolWidth + h2))), t2.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, J, u2));
              v2 && !b.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b);
              this.colorizeItem(
                b,
                b.visible
              );
              !c.styledMode && l2.width || J.css({ width: (g2.itemWidth || this.widthOption || c.spacingBox.width) - w2 + "px" });
              this.setText(b);
              c = J.getBBox();
              e2 = this.fontMetrics && this.fontMetrics.h || 0;
              b.itemWidth = b.checkboxOffset = g2.itemWidth || a3.labelWidth || c.width + w2;
              this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
              this.totalItemWidth += b.itemWidth;
              this.itemHeight = b.itemHeight = Math.round(a3.labelHeight || (c.height > 1.5 * e2 ? c.height : e2));
            }
            layoutItem(b) {
              var a3 = this.options;
              const c = this.padding, e2 = "horizontal" === a3.layout, g2 = b.itemHeight, k2 = this.itemMarginBottom, h2 = this.itemMarginTop, l2 = e2 ? d(a3.itemDistance, 20) : 0, m2 = this.maxLegendWidth;
              a3 = a3.alignColumns && this.totalItemWidth > m2 ? this.maxItemWidth : b.itemWidth;
              const q2 = b.legendItem || {};
              e2 && this.itemX - c + a3 > m2 && (this.itemX = c, this.lastLineHeight && (this.itemY += h2 + this.lastLineHeight + k2), this.lastLineHeight = 0);
              this.lastItemY = h2 + this.itemY + k2;
              this.lastLineHeight = Math.max(g2, this.lastLineHeight);
              q2.x = this.itemX;
              q2.y = this.itemY;
              e2 ? this.itemX += a3 : (this.itemY += h2 + g2 + k2, this.lastLineHeight = g2);
              this.offsetWidth = this.widthOption || Math.max((e2 ? this.itemX - c - (b.checkbox ? 0 : l2) : a3) + c, this.offsetWidth);
            }
            getAllItems() {
              let b = [];
              this.chart.series.forEach(function(a3) {
                const c = a3 && a3.options;
                a3 && d(c.showInLegend, h(c.linkedTo) ? false : void 0, true) && (b = b.concat((a3.legendItem || {}).labels || ("point" === c.legendType ? a3.data : a3)));
              });
              w(this, "afterGetAllItems", { allItems: b });
              return b;
            }
            getAlignment() {
              const b = this.options;
              return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
            }
            adjustMargins(b, a3) {
              const c = this.chart, f = this.options, e2 = this.getAlignment();
              e2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(g2, k2) {
                g2.test(e2) && !h(b[k2]) && (c[v[k2]] = Math.max(c[v[k2]], c.legend[(k2 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][k2] * f[k2 % 2 ? "x" : "y"] + d(f.margin, 12) + a3[k2] + (c.titleOffset[k2] || 0)));
              });
            }
            proximatePositions() {
              const b = this.chart, a3 = [], c = "left" === this.options.align;
              this.allItems.forEach(function(d3) {
                var f;
                var g2 = c;
                let k2;
                d3.yAxis && (d3.xAxis.options.reversed && (g2 = !g2), d3.points && (f = e(g2 ? d3.points : d3.points.slice(0).reverse(), function(b2) {
                  return E(b2.plotY);
                })), g2 = this.itemMarginTop + d3.legendItem.label.getBBox().height + this.itemMarginBottom, k2 = d3.yAxis.top - b.plotTop, d3.visible ? (f = f ? f.plotY : d3.yAxis.height, f += k2 - 0.3 * g2) : f = k2 + d3.yAxis.height, a3.push({ target: f, size: g2, item: d3 }));
              }, this);
              let d2;
              for (const c2 of l(a3, b.plotHeight))
                d2 = c2.item.legendItem || {}, E(c2.pos) && (d2.y = b.plotTop - b.spacing[0] + c2.pos);
            }
            render() {
              const b = this.chart, a3 = b.renderer, c = this.options, d2 = this.padding;
              var e2 = this.getAllItems();
              let g2, h2 = this.group, l2 = this.box;
              this.itemX = d2;
              this.itemY = this.initialItemY;
              this.lastItemY = this.offsetWidth = 0;
              this.widthOption = k(c.width, b.spacingBox.width - d2);
              var m2 = b.spacingBox.width - 2 * d2 - c.x;
              -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (m2 /= 2);
              this.maxLegendWidth = this.widthOption || m2;
              h2 || (this.group = h2 = a3.g("legend").addClass(c.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = a3.g().attr({ zIndex: 1 }).add(h2), this.scrollGroup = a3.g().add(this.contentGroup));
              this.renderTitle();
              r(e2, (b2, a4) => (b2.options && b2.options.legendIndex || 0) - (a4.options && a4.options.legendIndex || 0));
              c.reversed && e2.reverse();
              this.allItems = e2;
              this.display = m2 = !!e2.length;
              this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
              e2.forEach(this.renderItem, this);
              e2.forEach(this.layoutItem, this);
              e2 = (this.widthOption || this.offsetWidth) + d2;
              g2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
              g2 = this.handleOverflow(g2);
              g2 += d2;
              l2 || (this.box = l2 = a3.rect().addClass("highcharts-legend-box").attr({ r: c.borderRadius }).add(h2));
              b.styledMode || l2.attr({
                stroke: c.borderColor,
                "stroke-width": c.borderWidth || 0,
                fill: c.backgroundColor || "none"
              }).shadow(c.shadow);
              if (0 < e2 && 0 < g2)
                l2[l2.placed ? "animate" : "attr"](l2.crisp.call({}, { x: 0, y: 0, width: e2, height: g2 }, l2.strokeWidth()));
              h2[m2 ? "show" : "hide"]();
              b.styledMode && "none" === h2.getStyle("display") && (e2 = g2 = 0);
              this.legendWidth = e2;
              this.legendHeight = g2;
              m2 && this.align();
              this.proximate || this.positionItems();
              w(this, "afterRender");
            }
            align(b = this.chart.spacingBox) {
              const a3 = this.chart, c = this.options;
              let d2 = b.y;
              /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a3.titleOffset[0] ? d2 += a3.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < a3.titleOffset[2] && (d2 -= a3.titleOffset[2]);
              d2 !== b.y && (b = F(b, { y: d2 }));
              a3.hasRendered || (this.group.placed = false);
              this.group.align(F(c, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : c.verticalAlign }), true, b);
            }
            handleOverflow(b) {
              const a3 = this, c = this.chart, e2 = c.renderer, g2 = this.options;
              var k2 = g2.y;
              const h2 = "top" === g2.verticalAlign, l2 = this.padding, m2 = g2.maxHeight, q2 = g2.navigation, r2 = d(q2.animation, true), p2 = q2.arrowSize || 12, t2 = this.pages, w2 = this.allItems, v2 = function(b2) {
                "number" === typeof b2 ? E2.attr({ height: b2 }) : E2 && (a3.clipRect = E2.destroy(), a3.contentGroup.clip());
                a3.contentGroup.div && (a3.contentGroup.div.style.clip = b2 ? "rect(" + l2 + "px,9999px," + (l2 + b2) + "px,0)" : "auto");
              }, u2 = function(b2) {
                a3[b2] = e2.circle(0, 0, 1.3 * p2).translate(p2 / 2, p2 / 2).add(O);
                c.styledMode || a3[b2].attr("fill", "rgba(0,0,0,0.0001)");
                return a3[b2];
              };
              let x2, J, N;
              k2 = c.spacingBox.height + (h2 ? -k2 : k2) - l2;
              let O = this.nav, E2 = this.clipRect;
              "horizontal" !== g2.layout || "middle" === g2.verticalAlign || g2.floating || (k2 /= 2);
              m2 && (k2 = Math.min(k2, m2));
              t2.length = 0;
              b && 0 < k2 && b > k2 && false !== q2.enabled ? (this.clipHeight = x2 = Math.max(k2 - 20 - this.titleHeight - l2, 0), this.currentPage = d(this.currentPage, 1), this.fullHeight = b, w2.forEach((b2, a4) => {
                N = b2.legendItem || {};
                b2 = N.y || 0;
                const c2 = Math.round(N.label.getBBox().height);
                let d2 = t2.length;
                if (!d2 || b2 - t2[d2 - 1] > x2 && (J || b2) !== t2[d2 - 1])
                  t2.push(J || b2), d2++;
                N.pageIx = d2 - 1;
                J && ((w2[a4 - 1].legendItem || {}).pageIx = d2 - 1);
                a4 === w2.length - 1 && b2 + c2 - t2[d2 - 1] > x2 && b2 > t2[d2 - 1] && (t2.push(b2), N.pageIx = d2);
                b2 !== J && (J = b2);
              }), E2 || (E2 = a3.clipRect = e2.clipRect(0, l2 - 2, 9999, 0), a3.contentGroup.clip(E2)), v2(x2), O || (this.nav = O = e2.g().attr({ zIndex: 1 }).add(this.group), this.up = e2.symbol("triangle", 0, 0, p2, p2).add(O), u2("upTracker").on("click", function() {
                a3.scroll(-1, r2);
              }), this.pager = e2.text("", 15, 10).addClass("highcharts-legend-navigation"), !c.styledMode && q2.style && this.pager.css(q2.style), this.pager.add(O), this.down = e2.symbol("triangle-down", 0, 0, p2, p2).add(O), u2("downTracker").on("click", function() {
                a3.scroll(1, r2);
              })), a3.scroll(0), b = k2) : O && (v2(), this.nav = O.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
              return b;
            }
            scroll(b, a3) {
              const c = this.chart, f = this.pages, e2 = f.length, g2 = this.clipHeight, k2 = this.options.navigation, h2 = this.pager, l2 = this.padding;
              let m2 = this.currentPage + b;
              m2 > e2 && (m2 = e2);
              0 < m2 && ("undefined" !== typeof a3 && B(a3, c), this.nav.attr({ translateX: l2, translateY: g2 + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(b2) {
                b2.attr({ "class": 1 === m2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }), h2.attr({ text: m2 + "/" + e2 }), [this.down, this.downTracker].forEach(function(b2) {
                b2.attr({ x: 18 + this.pager.getBBox().width, "class": m2 === e2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }, this), c.styledMode || (this.up.attr({ fill: 1 === m2 ? k2.inactiveColor : k2.activeColor }), this.upTracker.css({ cursor: 1 === m2 ? "default" : "pointer" }), this.down.attr({ fill: m2 === e2 ? k2.inactiveColor : k2.activeColor }), this.downTracker.css({ cursor: m2 === e2 ? "default" : "pointer" })), this.scrollOffset = -f[m2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = m2, this.positionCheckboxes(), b = x(d(a3, c.renderer.globalAnimation, true)), q(() => {
                w(this, "afterScroll", { currentPage: m2 });
              }, b.duration));
            }
            setItemEvents(b, a3, c) {
              const d2 = this, f = b.legendItem || {}, e2 = d2.chart.renderer.boxWrapper, g2 = b instanceof L, k2 = "highcharts-legend-" + (g2 ? "point" : "series") + "-active", h2 = d2.chart.styledMode;
              c = c ? [a3, f.symbol] : [f.group];
              const l2 = (a4) => {
                d2.allItems.forEach((c2) => {
                  b !== c2 && [c2].concat(c2.linkedSeries || []).forEach((b2) => {
                    b2.setState(a4, !g2);
                  });
                });
              };
              for (const f2 of c)
                if (f2)
                  f2.on("mouseover", function() {
                    b.visible && l2("inactive");
                    b.setState("hover");
                    b.visible && e2.addClass(k2);
                    h2 || a3.css(d2.options.itemHoverStyle);
                  }).on("mouseout", function() {
                    d2.chart.styledMode || a3.css(F(b.visible ? d2.itemStyle : d2.itemHiddenStyle));
                    l2("");
                    e2.removeClass(k2);
                    b.setState();
                  }).on("click", function(a4) {
                    const c2 = function() {
                      b.setVisible && b.setVisible();
                      l2(b.visible ? "inactive" : "");
                    };
                    e2.removeClass(k2);
                    a4 = { browserEvent: a4 };
                    b.firePointEvent ? b.firePointEvent("legendItemClick", a4, c2) : w(b, "legendItemClick", a4, c2);
                  });
            }
            createCheckboxForItem(b) {
              b.checkbox = t("input", {
                type: "checkbox",
                className: "highcharts-legend-checkbox",
                checked: b.selected,
                defaultChecked: b.selected
              }, this.options.itemCheckboxStyle, this.chart.container);
              p(b.checkbox, "click", function(a3) {
                w(b.series || b, "checkboxClick", { checked: a3.target.checked, item: b }, function() {
                  b.select();
                });
              });
            }
          }
          (function(b) {
            const a3 = [];
            b.compose = function(c) {
              z.pushUnique(a3, c) && p(c, "beforeMargins", function() {
                this.legend = new b(this, this.options.legend);
              });
            };
          })(G || (G = {}));
          "";
          return G;
        }
      );
      M(a, "Core/Legend/LegendSymbol.js", [a["Core/Utilities.js"]], function(a2) {
        const { extend: x, merge: I, pick: L } = a2;
        var C;
        (function(a3) {
          a3.lineMarker = function(a4, B) {
            B = this.legendItem = this.legendItem || {};
            var u = this.options;
            const v = a4.symbolWidth, l = a4.symbolHeight, p = l / 2, t = this.chart.renderer, m = B.group;
            a4 = a4.baseline - Math.round(0.3 * a4.fontMetrics.b);
            let h = {}, g = u.marker, e = 0;
            this.chart.styledMode || (h = { "stroke-width": Math.min(u.lineWidth || 0, 24) }, u.dashStyle ? h.dashstyle = u.dashStyle : "square" !== u.linecap && (h["stroke-linecap"] = "round"));
            B.line = t.path().addClass("highcharts-graph").attr(h).add(m);
            h["stroke-linecap"] && (e = Math.min(
              B.line.strokeWidth(),
              v
            ) / 2);
            v && B.line.attr({ d: [["M", e, a4], ["L", v - e, a4]] });
            g && false !== g.enabled && v && (u = Math.min(L(g.radius, p), p), 0 === this.symbol.indexOf("url") && (g = I(g, { width: l, height: l }), u = 0), B.symbol = B = t.symbol(this.symbol, v / 2 - u, a4 - u, 2 * u, 2 * u, x({ context: "legend" }, g)).addClass("highcharts-point").add(m), B.isMarker = true);
          };
          a3.rectangle = function(a4, x2) {
            x2 = x2.legendItem || {};
            const u = a4.symbolHeight, v = a4.options.squareSymbol;
            x2.symbol = this.chart.renderer.rect(v ? (a4.symbolWidth - u) / 2 : 0, a4.baseline - u + 1, v ? u : a4.symbolWidth, u, L(
              a4.options.symbolRadius,
              u / 2
            )).addClass("highcharts-point").attr({ zIndex: 3 }).add(x2.group);
          };
        })(C || (C = {}));
        return C;
      });
      M(a, "Core/Series/SeriesDefaults.js", [], function() {
        return {
          lineWidth: 1,
          allowPointSelect: false,
          crisp: true,
          showCheckbox: false,
          animation: { duration: 1e3 },
          enableMouseTracking: true,
          events: {},
          marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: true }, hover: { animation: { duration: 150 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } },
          point: { events: {} },
          dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: true, formatter: function() {
            const { numberFormatter: a2 } = this.series.chart;
            return "number" !== typeof this.y ? "" : a2(this.y, -1);
          }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: true,
          states: {
            normal: { animation: true },
            hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } },
            select: { animation: { duration: 0 } },
            inactive: { animation: { duration: 150 }, opacity: 0.2 }
          },
          stickyTracking: true,
          turboThreshold: 1e3,
          findNearestPointBy: "x"
        };
      });
      M(a, "Core/Series/SeriesRegistry.js", [a["Core/Globals.js"], a["Core/Defaults.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, y, I, L) {
        const { defaultOptions: x } = y, { extendClass: z, merge: H } = L;
        var B;
        (function(u) {
          function v(a3, p) {
            const l = x.plotOptions || {}, m = p.defaultOptions, h = p.prototype;
            h.type = a3;
            h.pointClass || (h.pointClass = I);
            m && (l[a3] = m);
            u.seriesTypes[a3] = p;
          }
          u.seriesTypes = a2.seriesTypes;
          u.registerSeriesType = v;
          u.seriesType = function(a3, p, t, m, h) {
            const g = x.plotOptions || {};
            p = p || "";
            g[a3] = H(g[p], t);
            v(a3, z(u.seriesTypes[p] || function() {
            }, m));
            u.seriesTypes[a3].prototype.type = a3;
            h && (u.seriesTypes[a3].prototype.pointClass = z(I, h));
            return u.seriesTypes[a3];
          };
        })(B || (B = {}));
        return B;
      });
      M(a, "Core/Series/Series.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Defaults.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/Point.js"],
        a["Core/Series/SeriesDefaults.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C, z, H, B, u, v) {
        const { animObject: l, setAnimation: p } = a2, { defaultOptions: t } = y, { registerEventOptions: m } = I, { hasTouch: h, svg: g, win: e } = L, { seriesTypes: w } = B, {
          arrayMax: x,
          arrayMin: F,
          clamp: d,
          correctFloat: k,
          defined: r,
          diffObjects: q,
          erase: G,
          error: b,
          extend: f,
          find: c,
          fireEvent: n,
          getClosestDistance: P,
          getNestedProperty: D,
          insertItem: K,
          isArray: X,
          isNumber: T,
          isString: Z,
          merge: V,
          objectEach: Y,
          pick: A,
          removeEvent: M2,
          splat: ia,
          syncTimeout: ba
        } = v;
        class aa {
          constructor() {
            this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
          }
          init(b2, a3) {
            n(this, "init", { options: a3 });
            const c2 = this, d2 = b2.series;
            this.eventsToUnbind = [];
            c2.chart = b2;
            c2.options = c2.setOptions(a3);
            a3 = c2.options;
            c2.linkedSeries = [];
            c2.bindAxes();
            f(c2, { name: a3.name, state: "", visible: false !== a3.visible, selected: true === a3.selected });
            m(this, a3);
            const e2 = a3.events;
            if (e2 && e2.click || a3.point && a3.point.events && a3.point.events.click || a3.allowPointSelect)
              b2.runTrackerClick = true;
            c2.getColor();
            c2.getSymbol();
            c2.parallelArrays.forEach(function(b3) {
              c2[b3 + "Data"] || (c2[b3 + "Data"] = []);
            });
            c2.isCartesian && (b2.hasCartesianSeries = true);
            let g2;
            d2.length && (g2 = d2[d2.length - 1]);
            c2._i = A(g2 && g2._i, -1) + 1;
            c2.opacity = c2.options.opacity;
            b2.orderItems("series", K(this, d2));
            a3.dataSorting && a3.dataSorting.enabled ? c2.setDataSortingOptions() : c2.points || c2.data || c2.setData(a3.data, false);
            n(
              this,
              "afterInit"
            );
          }
          is(b2) {
            return w[b2] && this instanceof w[b2];
          }
          bindAxes() {
            const a3 = this, c2 = a3.options, d2 = a3.chart;
            let f2;
            n(this, "bindAxes", null, function() {
              (a3.axisTypes || []).forEach(function(e2) {
                d2[e2].forEach(function(b2) {
                  f2 = b2.options;
                  if (A(c2[e2], 0) === b2.index || "undefined" !== typeof c2[e2] && c2[e2] === f2.id)
                    K(a3, b2.series), a3[e2] = b2, b2.isDirty = true;
                });
                a3[e2] || a3.optionalAxis === e2 || b(18, true, d2);
              });
            });
            n(this, "afterBindAxes");
          }
          updateParallelArrays(b2, a3, c2) {
            const d2 = b2.series, f2 = T(a3) ? function(c3) {
              const f3 = "y" === c3 && d2.toYData ? d2.toYData(b2) : b2[c3];
              d2[c3 + "Data"][a3] = f3;
            } : function(b3) {
              Array.prototype[a3].apply(d2[b3 + "Data"], c2);
            };
            d2.parallelArrays.forEach(f2);
          }
          hasData() {
            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
          }
          autoIncrement(b2) {
            var a3 = this.options;
            const c2 = a3.pointIntervalUnit, d2 = a3.relativeXValue, f2 = this.chart.time;
            let e2 = this.xIncrement, g2;
            e2 = A(e2, a3.pointStart, 0);
            this.pointInterval = g2 = A(this.pointInterval, a3.pointInterval, 1);
            d2 && T(b2) && (g2 *= b2);
            c2 && (a3 = new f2.Date(e2), "day" === c2 ? f2.set("Date", a3, f2.get(
              "Date",
              a3
            ) + g2) : "month" === c2 ? f2.set("Month", a3, f2.get("Month", a3) + g2) : "year" === c2 && f2.set("FullYear", a3, f2.get("FullYear", a3) + g2), g2 = a3.getTime() - e2);
            if (d2 && T(b2))
              return e2 + g2;
            this.xIncrement = e2 + g2;
            return e2;
          }
          setDataSortingOptions() {
            const b2 = this.options;
            f(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
            r(b2.pointRange) || (b2.pointRange = 1);
          }
          setOptions(b2) {
            var a3, c2;
            const d2 = this.chart;
            var f2 = d2.options.plotOptions, e2 = d2.userOptions || {};
            const g2 = V(b2);
            b2 = d2.styledMode;
            const k2 = { plotOptions: f2, userOptions: g2 };
            n(
              this,
              "setOptions",
              k2
            );
            const h2 = k2.plotOptions[this.type];
            e2 = e2.plotOptions || {};
            const l2 = e2.series || {}, m2 = t.plotOptions[this.type] || {}, q2 = e2[this.type] || {};
            this.userOptions = k2.userOptions;
            f2 = V(h2, f2.series, q2, g2);
            this.tooltipOptions = V(t.tooltip, null === (a3 = t.plotOptions.series) || void 0 === a3 ? void 0 : a3.tooltip, null === m2 || void 0 === m2 ? void 0 : m2.tooltip, d2.userOptions.tooltip, null === (c2 = e2.series) || void 0 === c2 ? void 0 : c2.tooltip, q2.tooltip, g2.tooltip);
            this.stickyTracking = A(g2.stickyTracking, q2.stickyTracking, l2.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : f2.stickyTracking);
            null === h2.marker && delete f2.marker;
            this.zoneAxis = f2.zoneAxis;
            c2 = this.zones = (f2.zones || []).slice();
            !f2.negativeColor && !f2.negativeFillColor || f2.zones || (a3 = { value: f2[this.zoneAxis + "Threshold"] || f2.threshold || 0, className: "highcharts-negative" }, b2 || (a3.color = f2.negativeColor, a3.fillColor = f2.negativeFillColor), c2.push(a3));
            c2.length && r(c2[c2.length - 1].value) && c2.push(b2 ? {} : { color: this.color, fillColor: this.fillColor });
            n(this, "afterSetOptions", { options: f2 });
            return f2;
          }
          getName() {
            return A(
              this.options.name,
              "Series " + (this.index + 1)
            );
          }
          getCyclic(b2, a3, c2) {
            const d2 = this.chart, f2 = `${b2}Index`, e2 = `${b2}Counter`, g2 = (null === c2 || void 0 === c2 ? void 0 : c2.length) || d2.options.chart.colorCount;
            if (!a3) {
              var k2 = A("color" === b2 ? this.options.colorIndex : void 0, this[f2]);
              r(k2) || (d2.series.length || (d2[e2] = 0), k2 = d2[e2] % g2, d2[e2] += 1);
              c2 && (a3 = c2[k2]);
            }
            "undefined" !== typeof k2 && (this[f2] = k2);
            this[b2] = a3;
          }
          getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic(
              "color",
              this.options.color || t.plotOptions[this.type].color,
              this.chart.options.colors
            );
          }
          getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          }
          getSymbol() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
          }
          findPointIndex(b2, a3) {
            const d2 = b2.id, f2 = b2.x, e2 = this.points;
            var g2 = this.options.dataSorting, k2;
            let h2, n2;
            if (d2)
              g2 = this.chart.get(d2), g2 instanceof z && (k2 = g2);
            else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              if (k2 = (a4) => !a4.touched && a4.index === b2.index, g2 && g2.matchByName ? k2 = (a4) => !a4.touched && a4.name === b2.name : this.options.relativeXValue && (k2 = (a4) => !a4.touched && a4.options.x === b2.x), k2 = c(e2, k2), !k2)
                return;
            }
            k2 && (n2 = k2 && k2.index, "undefined" !== typeof n2 && (h2 = true));
            "undefined" === typeof n2 && T(f2) && (n2 = this.xData.indexOf(f2, a3));
            -1 !== n2 && "undefined" !== typeof n2 && this.cropped && (n2 = n2 >= this.cropStart ? n2 - this.cropStart : n2);
            !h2 && T(n2) && e2[n2] && e2[n2].touched && (n2 = void 0);
            return n2;
          }
          updateData(b2, a3) {
            const c2 = this.options, d2 = c2.dataSorting, f2 = this.points, e2 = [], g2 = this.requireSorting, k2 = b2.length === f2.length;
            let n2, h2, l2, m2 = true;
            this.xIncrement = null;
            b2.forEach(function(b3, a4) {
              var h3 = r(b3) && this.pointClass.prototype.optionsToObject.call({ series: this }, b3) || {};
              const m3 = h3.x;
              if (h3.id || T(m3)) {
                if (h3 = this.findPointIndex(h3, l2), -1 === h3 || "undefined" === typeof h3 ? e2.push(b3) : f2[h3] && b3 !== c2.data[h3] ? (f2[h3].update(b3, false, null, false), f2[h3].touched = true, g2 && (l2 = h3 + 1)) : f2[h3] && (f2[h3].touched = true), !k2 || a4 !== h3 || d2 && d2.enabled || this.hasDerivedData)
                  n2 = true;
              } else
                e2.push(b3);
            }, this);
            if (n2)
              for (b2 = f2.length; b2--; )
                (h2 = f2[b2]) && !h2.touched && h2.remove && h2.remove(false, a3);
            else
              !k2 || d2 && d2.enabled ? m2 = false : (b2.forEach(function(b3, a4) {
                b3 === f2[a4].y || f2[a4].destroyed || f2[a4].update(b3, false, null, false);
              }), e2.length = 0);
            f2.forEach(function(b3) {
              b3 && (b3.touched = false);
            });
            if (!m2)
              return false;
            e2.forEach(function(b3) {
              this.addPoint(b3, false, null, null, false);
            }, this);
            null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement());
            return true;
          }
          setData(a3, c2 = true, d2, f2) {
            var e2;
            const g2 = this, k2 = g2.points, h2 = k2 && k2.length || 0, n2 = g2.options, l2 = g2.chart, m2 = n2.dataSorting, q2 = g2.xAxis, p2 = n2.turboThreshold, r2 = this.xData, t2 = this.yData;
            var w2 = g2.pointArrayMap;
            w2 = w2 && w2.length;
            const J = n2.keys;
            let v2, u2 = 0, O = 1, x2 = null;
            if (!l2.options.chart.allowMutatingData) {
              n2.data && delete g2.options.data;
              g2.userOptions.data && delete g2.userOptions.data;
              var N = V(true, a3);
            }
            a3 = N || a3 || [];
            N = a3.length;
            m2 && m2.enabled && (a3 = this.sortData(a3));
            l2.options.chart.allowMutatingData && false !== f2 && N && h2 && !g2.cropped && !g2.hasGroupedData && g2.visible && !g2.boosted && (v2 = this.updateData(a3, d2));
            if (!v2) {
              g2.xIncrement = null;
              g2.colorCounter = 0;
              this.parallelArrays.forEach(function(b2) {
                g2[b2 + "Data"].length = 0;
              });
              if (p2 && N > p2)
                if (x2 = g2.getFirstValidPoint(a3), T(x2))
                  for (d2 = 0; d2 < N; d2++)
                    r2[d2] = this.autoIncrement(), t2[d2] = a3[d2];
                else if (X(x2))
                  if (w2)
                    if (x2.length === w2)
                      for (d2 = 0; d2 < N; d2++)
                        r2[d2] = this.autoIncrement(), t2[d2] = a3[d2];
                    else
                      for (d2 = 0; d2 < N; d2++)
                        f2 = a3[d2], r2[d2] = f2[0], t2[d2] = f2.slice(1, w2 + 1);
                  else if (J && (u2 = J.indexOf("x"), O = J.indexOf("y"), u2 = 0 <= u2 ? u2 : 0, O = 0 <= O ? O : 1), 1 === x2.length && (O = 0), u2 === O)
                    for (d2 = 0; d2 < N; d2++)
                      r2[d2] = this.autoIncrement(), t2[d2] = a3[d2][O];
                  else
                    for (d2 = 0; d2 < N; d2++)
                      f2 = a3[d2], r2[d2] = f2[u2], t2[d2] = f2[O];
                else
                  b(12, false, l2);
              else
                for (d2 = 0; d2 < N; d2++)
                  f2 = { series: g2 }, g2.pointClass.prototype.applyOptions.apply(f2, [a3[d2]]), g2.updateParallelArrays(f2, d2);
              t2 && Z(t2[0]) && b(
                14,
                true,
                l2
              );
              g2.data = [];
              g2.options.data = g2.userOptions.data = a3;
              for (d2 = h2; d2--; )
                null === (e2 = k2[d2]) || void 0 === e2 ? void 0 : e2.destroy();
              q2 && (q2.minRange = q2.userMinRange);
              g2.isDirty = l2.isDirtyBox = true;
              g2.isDirtyData = !!k2;
              d2 = false;
            }
            "point" === n2.legendType && (this.processData(), this.generatePoints());
            c2 && l2.redraw(d2);
          }
          sortData(b2) {
            const a3 = this, c2 = a3.options.dataSorting.sortKey || "y", d2 = function(b3, a4) {
              return r(a4) && b3.pointClass.prototype.optionsToObject.call({ series: b3 }, a4) || {};
            };
            b2.forEach(function(c3, f2) {
              b2[f2] = d2(a3, c3);
              b2[f2].index = f2;
            }, this);
            b2.concat().sort((b3, a4) => {
              b3 = D(c2, b3);
              a4 = D(c2, a4);
              return a4 < b3 ? -1 : a4 > b3 ? 1 : 0;
            }).forEach(function(b3, a4) {
              b3.x = a4;
            }, this);
            a3.linkedSeries && a3.linkedSeries.forEach(function(a4) {
              const c3 = a4.options, f2 = c3.data;
              c3.dataSorting && c3.dataSorting.enabled || !f2 || (f2.forEach(function(c4, e2) {
                f2[e2] = d2(a4, c4);
                b2[e2] && (f2[e2].x = b2[e2].x, f2[e2].index = e2);
              }), a4.setData(f2, false));
            });
            return b2;
          }
          getProcessedData(a3) {
            const c2 = this;
            var d2 = c2.xAxis, f2 = c2.options;
            const e2 = f2.cropThreshold, g2 = a3 || c2.getExtremesFromAll || f2.getExtremesFromAll, k2 = null === d2 || void 0 === d2 ? void 0 : d2.logarithmic, h2 = c2.isCartesian;
            let n2 = 0;
            let l2;
            a3 = c2.xData;
            f2 = c2.yData;
            let m2 = false;
            const q2 = a3.length;
            if (d2) {
              var r2 = d2.getExtremes();
              l2 = r2.min;
              r2 = r2.max;
              m2 = !(!d2.categories || d2.names.length);
            }
            if (h2 && c2.sorted && !g2 && (!e2 || q2 > e2 || c2.forceCrop)) {
              if (a3[q2 - 1] < l2 || a3[0] > r2)
                a3 = [], f2 = [];
              else if (c2.yData && (a3[0] < l2 || a3[q2 - 1] > r2)) {
                var p2 = this.cropData(c2.xData, c2.yData, l2, r2);
                a3 = p2.xData;
                f2 = p2.yData;
                n2 = p2.start;
                p2 = true;
              }
            }
            d2 = P([k2 ? a3.map(k2.log2lin) : a3], () => c2.requireSorting && !m2 && b(15, false, c2.chart));
            return { xData: a3, yData: f2, cropped: p2, cropStart: n2, closestPointRange: d2 };
          }
          processData(b2) {
            const a3 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !a3.isDirty && !this.yAxis.isDirty && !b2)
              return false;
            b2 = this.getProcessedData();
            this.cropped = b2.cropped;
            this.cropStart = b2.cropStart;
            this.processedXData = b2.xData;
            this.processedYData = b2.yData;
            this.closestPointRange = this.basePointRange = b2.closestPointRange;
            n(this, "afterProcessData");
          }
          cropData(b2, a3, c2, d2, f2) {
            const e2 = b2.length;
            let g2, k2 = 0, h2 = e2;
            f2 = A(f2, this.cropShoulder);
            for (g2 = 0; g2 < e2; g2++)
              if (b2[g2] >= c2) {
                k2 = Math.max(0, g2 - f2);
                break;
              }
            for (c2 = g2; c2 < e2; c2++)
              if (b2[c2] > d2) {
                h2 = c2 + f2;
                break;
              }
            return {
              xData: b2.slice(k2, h2),
              yData: a3.slice(k2, h2),
              start: k2,
              end: h2
            };
          }
          generatePoints() {
            var b2 = this.options;
            const a3 = this.processedData || b2.data, c2 = this.processedXData, d2 = this.processedYData, e2 = this.pointClass, g2 = c2.length, k2 = this.cropStart || 0, h2 = this.hasGroupedData, l2 = b2.keys, m2 = [];
            b2 = b2.dataGrouping && b2.dataGrouping.groupAll ? k2 : 0;
            let q2;
            let r2, p2, t2 = this.data;
            if (!t2 && !h2) {
              var w2 = [];
              w2.length = a3.length;
              t2 = this.data = w2;
            }
            l2 && h2 && (this.options.keys = false);
            for (p2 = 0; p2 < g2; p2++)
              w2 = k2 + p2, h2 ? (r2 = new e2().init(this, [c2[p2]].concat(ia(d2[p2]))), r2.dataGroup = this.groupMap[b2 + p2], r2.dataGroup.options && (r2.options = r2.dataGroup.options, f(r2, r2.dataGroup.options), delete r2.dataLabels)) : (r2 = t2[w2]) || "undefined" === typeof a3[w2] || (t2[w2] = r2 = new e2().init(this, a3[w2], c2[p2])), r2 && (r2.index = h2 ? b2 + p2 : w2, m2[p2] = r2);
            this.options.keys = l2;
            if (t2 && (g2 !== (q2 = t2.length) || h2))
              for (p2 = 0; p2 < q2; p2++)
                p2 !== k2 || h2 || (p2 += g2), t2[p2] && (t2[p2].destroyElements(), t2[p2].plotX = void 0);
            this.data = t2;
            this.points = m2;
            n(this, "afterGeneratePoints");
          }
          getXExtremes(b2) {
            return { min: F(b2), max: x(b2) };
          }
          getExtremes(b2, a3) {
            const c2 = this.xAxis;
            var d2 = this.yAxis;
            const f2 = this.processedXData || this.xData, e2 = [], g2 = this.requireSorting ? this.cropShoulder : 0;
            d2 = d2 ? d2.positiveValuesOnly : false;
            let k2, h2 = 0, l2 = 0, m2 = 0;
            b2 = b2 || this.stackedYData || this.processedYData || [];
            const q2 = b2.length;
            if (c2) {
              var p2 = c2.getExtremes();
              h2 = p2.min;
              l2 = p2.max;
            }
            for (k2 = 0; k2 < q2; k2++) {
              var r2 = f2[k2];
              p2 = b2[k2];
              var t2 = (T(p2) || X(p2)) && (p2.length || 0 < p2 || !d2);
              r2 = a3 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !c2 || (f2[k2 + g2] || r2) >= h2 && (f2[k2 - g2] || r2) <= l2;
              if (t2 && r2)
                if (t2 = p2.length)
                  for (; t2--; )
                    T(p2[t2]) && (e2[m2++] = p2[t2]);
                else
                  e2[m2++] = p2;
            }
            b2 = { activeYData: e2, dataMin: F(e2), dataMax: x(e2) };
            n(this, "afterGetExtremes", { dataExtremes: b2 });
            return b2;
          }
          applyExtremes() {
            const b2 = this.getExtremes();
            this.dataMin = b2.dataMin;
            this.dataMax = b2.dataMax;
            return b2;
          }
          getFirstValidPoint(b2) {
            const a3 = b2.length;
            let c2 = 0, d2 = null;
            for (; null === d2 && c2 < a3; )
              d2 = b2[c2], c2++;
            return d2;
          }
          translate() {
            var b2;
            this.processedXData || this.processData();
            this.generatePoints();
            var a3 = this.options;
            const c2 = a3.stacking, f2 = this.xAxis, e2 = f2.categories, g2 = this.enabledDataSorting, h2 = this.yAxis, l2 = this.points, m2 = l2.length, q2 = this.pointPlacementToXValue(), p2 = !!q2, t2 = a3.threshold;
            a3 = a3.startFromThreshold ? t2 : 0;
            let w2, v2, u2, x2, D2 = Number.MAX_VALUE;
            for (w2 = 0; w2 < m2; w2++) {
              const n2 = l2[w2], m3 = n2.x;
              let J, Q, R = n2.y, O = n2.low;
              const E = c2 && (null === (b2 = h2.stacking) || void 0 === b2 ? void 0 : b2.stacks[(this.negStacks && R < (a3 ? 0 : t2) ? "-" : "") + this.stackKey]);
              v2 = f2.translate(m3, false, false, false, true, q2);
              n2.plotX = T(v2) ? k(d(v2, -1e5, 1e5)) : void 0;
              c2 && this.visible && E && E[m3] && (x2 = this.getStackIndicator(x2, m3, this.index), !n2.isNull && x2.key && (J = E[m3], Q = J.points[x2.key]), J && X(Q) && (O = Q[0], R = Q[1], O === a3 && x2.key === E[m3].base && (O = A(T(t2) ? t2 : h2.min)), h2.positiveValuesOnly && r(O) && 0 >= O && (O = void 0), n2.total = n2.stackTotal = A(J.total), n2.percentage = r(n2.y) && J.total ? n2.y / J.total * 100 : void 0, n2.stackY = R, this.irregularWidths || J.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis)));
              n2.yBottom = r(O) ? d(h2.translate(O, false, true, false, true), -1e5, 1e5) : void 0;
              this.dataModify && (R = this.dataModify.modifyValue(R, w2));
              let N;
              T(R) && void 0 !== n2.plotX && (N = h2.translate(R, false, true, false, true), N = T(N) ? d(N, -1e5, 1e5) : void 0);
              n2.plotY = N;
              n2.isInside = this.isPointInside(n2);
              n2.clientX = p2 ? k(f2.translate(m3, false, false, false, true, q2)) : v2;
              n2.negative = (n2.y || 0) < (t2 || 0);
              n2.category = A(e2 && e2[n2.x], n2.x);
              n2.isNull || false === n2.visible || ("undefined" !== typeof u2 && (D2 = Math.min(D2, Math.abs(v2 - u2))), u2 = v2);
              n2.zone = this.zones.length ? n2.getZone() : void 0;
              !n2.graphic && this.group && g2 && (n2.isNew = true);
            }
            this.closestPointRangePx = D2;
            n(this, "afterTranslate");
          }
          getValidPoints(b2, a3, c2) {
            const d2 = this.chart;
            return (b2 || this.points || []).filter(function(b3) {
              const { plotX: f2, plotY: e2 } = b3;
              return !c2 && (b3.isNull || !T(e2)) || a3 && !d2.isInsidePlot(f2, e2, { inverted: d2.inverted }) ? false : false !== b3.visible;
            });
          }
          getClipBox() {
            const { chart: b2, xAxis: a3, yAxis: c2 } = this, d2 = V(b2.clipBox);
            a3 && a3.len !== b2.plotSizeX && (d2.width = a3.len);
            c2 && c2.len !== b2.plotSizeY && (d2.height = c2.len);
            return d2;
          }
          getSharedClipKey() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
          }
          setClip() {
            const { chart: b2, group: a3, markerGroup: c2 } = this, d2 = b2.sharedClips, f2 = b2.renderer, e2 = this.getClipBox(), g2 = this.getSharedClipKey();
            let k2 = d2[g2];
            k2 ? k2.animate(e2) : d2[g2] = k2 = f2.clipRect(e2);
            a3 && a3.clip(false === this.options.clip ? void 0 : k2);
            c2 && c2.clip();
          }
          animate(b2) {
            const { chart: a3, group: c2, markerGroup: d2 } = this, f2 = a3.inverted;
            var e2 = l(this.options.animation), g2 = [this.getSharedClipKey(), e2.duration, e2.easing, e2.defer].join();
            let k2 = a3.sharedClips[g2], n2 = a3.sharedClips[g2 + "m"];
            if (b2 && c2)
              e2 = this.getClipBox(), k2 ? k2.attr("height", e2.height) : (e2.width = 0, f2 && (e2.x = a3.plotHeight), k2 = a3.renderer.clipRect(e2), a3.sharedClips[g2] = k2, n2 = a3.renderer.clipRect({ x: -99, y: -99, width: f2 ? a3.plotWidth + 199 : 99, height: f2 ? 99 : a3.plotHeight + 199 }), a3.sharedClips[g2 + "m"] = n2), c2.clip(k2), d2 && d2.clip(n2);
            else if (k2 && !k2.hasClass("highcharts-animating")) {
              g2 = this.getClipBox();
              const b3 = e2.step;
              d2 && d2.element.childNodes.length && (e2.step = function(a4, c3) {
                b3 && b3.apply(c3, arguments);
                "width" === c3.prop && n2 && n2.element && n2.attr(f2 ? "height" : "width", a4 + 99);
              });
              k2.addClass("highcharts-animating").animate(g2, e2);
            }
          }
          afterAnimate() {
            this.setClip();
            Y(this.chart.sharedClips, (b2, a3, c2) => {
              b2 && !this.chart.container.querySelector(`[clip-path="url(#${b2.id})"]`) && (b2.destroy(), delete c2[a3]);
            });
            this.finishedAnimating = true;
            n(this, "afterAnimate");
          }
          drawPoints(b2 = this.points) {
            const a3 = this.chart, c2 = a3.styledMode, { colorAxis: d2, options: f2 } = this, e2 = f2.marker, g2 = this[this.specialGroup || "markerGroup"], k2 = this.xAxis, n2 = A(e2.enabled, !k2 || k2.isRadial ? true : null, this.closestPointRangePx >= e2.enabledThreshold * e2.radius);
            let h2, l2, m2, q2;
            let p2, r2;
            if (false !== e2.enabled || this._hasPointMarkers)
              for (h2 = 0; h2 < b2.length; h2++) {
                l2 = b2[h2];
                q2 = (m2 = l2.graphic) ? "animate" : "attr";
                var t2 = l2.marker || {};
                p2 = !!l2.marker;
                if ((n2 && "undefined" === typeof t2.enabled || t2.enabled) && !l2.isNull && false !== l2.visible) {
                  const b3 = A(t2.symbol, this.symbol, "rect");
                  r2 = this.markerAttribs(l2, l2.selected && "select");
                  this.enabledDataSorting && (l2.startXPos = k2.reversed ? -(r2.width || 0) : k2.width);
                  const f3 = false !== l2.isInside;
                  !m2 && f3 && (0 < (r2.width || 0) || l2.hasImage) && (l2.graphic = m2 = a3.renderer.symbol(b3, r2.x, r2.y, r2.width, r2.height, p2 ? t2 : e2).add(g2), this.enabledDataSorting && a3.hasRendered && (m2.attr({ x: l2.startXPos }), q2 = "animate"));
                  m2 && "animate" === q2 && m2[f3 ? "show" : "hide"](f3).animate(r2);
                  if (m2)
                    if (t2 = this.pointAttribs(l2, c2 || !l2.selected ? void 0 : "select"), c2)
                      d2 && m2.css({ fill: t2.fill });
                    else
                      m2[q2](t2);
                  m2 && m2.addClass(l2.getClassName(), true);
                } else
                  m2 && (l2.graphic = m2.destroy());
              }
          }
          markerAttribs(b2, a3) {
            const c2 = this.options;
            var d2 = c2.marker;
            const f2 = b2.marker || {}, e2 = f2.symbol || d2.symbol, g2 = {};
            let k2 = A(f2.radius, d2 && d2.radius);
            a3 && (d2 = d2.states[a3], a3 = f2.states && f2.states[a3], k2 = A(a3 && a3.radius, d2 && d2.radius, k2 && k2 + (d2 && d2.radiusPlus || 0)));
            b2.hasImage = e2 && 0 === e2.indexOf("url");
            b2.hasImage && (k2 = 0);
            b2 = b2.pos();
            T(k2) && b2 && (g2.x = b2[0] - k2, g2.y = b2[1] - k2, c2.crisp && (g2.x = Math.floor(g2.x)));
            k2 && (g2.width = g2.height = 2 * k2);
            return g2;
          }
          pointAttribs(b2, a3) {
            var c2 = this.options.marker, d2 = b2 && b2.options;
            const f2 = d2 && d2.marker || {};
            var e2 = d2 && d2.color, g2 = b2 && b2.color;
            const k2 = b2 && b2.zone && b2.zone.color;
            let n2 = this.color;
            b2 = A(f2.lineWidth, c2.lineWidth);
            d2 = 1;
            n2 = e2 || k2 || g2 || n2;
            e2 = f2.fillColor || c2.fillColor || n2;
            g2 = f2.lineColor || c2.lineColor || n2;
            a3 = a3 || "normal";
            c2 = c2.states[a3] || {};
            a3 = f2.states && f2.states[a3] || {};
            b2 = A(a3.lineWidth, c2.lineWidth, b2 + A(a3.lineWidthPlus, c2.lineWidthPlus, 0));
            e2 = a3.fillColor || c2.fillColor || e2;
            g2 = a3.lineColor || c2.lineColor || g2;
            d2 = A(a3.opacity, c2.opacity, d2);
            return { stroke: g2, "stroke-width": b2, fill: e2, opacity: d2 };
          }
          destroy(b2) {
            const a3 = this, c2 = a3.chart, d2 = /AppleWebKit\/533/.test(e.navigator.userAgent), f2 = a3.data || [];
            let g2, k2, h2, l2;
            n(a3, "destroy", { keepEventsForUpdate: b2 });
            this.removeEvents(b2);
            (a3.axisTypes || []).forEach(function(b3) {
              (l2 = a3[b3]) && l2.series && (G(l2.series, a3), l2.isDirty = l2.forceRedraw = true);
            });
            a3.legendItem && a3.chart.legend.destroyItem(a3);
            for (k2 = f2.length; k2--; )
              (h2 = f2[k2]) && h2.destroy && h2.destroy();
            a3.clips && a3.clips.forEach((b3) => b3.destroy());
            v.clearTimeout(a3.animationTimeout);
            Y(a3, function(b3, a4) {
              b3 instanceof u && !b3.survive && (g2 = d2 && "group" === a4 ? "hide" : "destroy", b3[g2]());
            });
            c2.hoverSeries === a3 && (c2.hoverSeries = void 0);
            G(c2.series, a3);
            c2.orderItems("series");
            Y(a3, function(c3, d3) {
              b2 && "hcEvents" === d3 || delete a3[d3];
            });
          }
          applyZones() {
            const b2 = this, a3 = this.chart, c2 = a3.renderer, f2 = this.zones, e2 = this.clips || [], g2 = this.graph, k2 = this.area, n2 = Math.max(a3.plotWidth, a3.plotHeight), h2 = this[(this.zoneAxis || "y") + "Axis"], l2 = a3.inverted;
            let m2, q2, p2, r2, t2, w2, v2, u2, x2, D2, E, G2 = false;
            f2.length && (g2 || k2) && h2 && "undefined" !== typeof h2.min ? (t2 = h2.reversed, w2 = h2.horiz, g2 && !this.showLine && g2.hide(), k2 && k2.hide(), r2 = h2.getExtremes(), f2.forEach(function(f3, Q) {
              m2 = t2 ? w2 ? a3.plotWidth : 0 : w2 ? 0 : h2.toPixels(r2.min) || 0;
              m2 = d(A(q2, m2), 0, n2);
              q2 = d(Math.round(h2.toPixels(A(f3.value, r2.max), true) || 0), 0, n2);
              G2 && (m2 = q2 = h2.toPixels(r2.max));
              v2 = Math.abs(m2 - q2);
              u2 = Math.min(m2, q2);
              x2 = Math.max(m2, q2);
              h2.isXAxis ? (p2 = { x: l2 ? x2 : u2, y: 0, width: v2, height: n2 }, w2 || (p2.x = a3.plotHeight - p2.x)) : (p2 = { x: 0, y: l2 ? x2 : u2, width: n2, height: v2 }, w2 && (p2.y = a3.plotWidth - p2.y));
              e2[Q] ? e2[Q].animate(p2) : e2[Q] = c2.clipRect(p2);
              D2 = b2["zone-area-" + Q];
              E = b2["zone-graph-" + Q];
              g2 && E && E.clip(e2[Q]);
              k2 && D2 && D2.clip(e2[Q]);
              G2 = f3.value > r2.max;
              b2.resetZones && 0 === q2 && (q2 = void 0);
            }), this.clips = e2) : b2.visible && (g2 && g2.show(), k2 && k2.show());
          }
          plotGroup(b2, a3, c2, d2, f2) {
            let e2 = this[b2];
            const g2 = !e2;
            c2 = { visibility: c2, zIndex: d2 || 0.1 };
            "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c2.opacity = this.opacity);
            g2 && (this[b2] = e2 = this.chart.renderer.g().add(f2));
            e2.addClass("highcharts-" + a3 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (r(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
            e2.attr(c2)[g2 ? "attr" : "animate"](this.getPlotBox(a3));
            return e2;
          }
          getPlotBox(b2) {
            let a3 = this.xAxis, c2 = this.yAxis;
            const d2 = this.chart;
            b2 = d2.inverted && !d2.polar && a3 && false !== this.invertible && "series" === b2;
            d2.inverted && (a3 = c2, c2 = this.xAxis);
            return { translateX: a3 ? a3.left : d2.plotLeft, translateY: c2 ? c2.top : d2.plotTop, rotation: b2 ? 90 : 0, rotationOriginX: b2 ? (a3.len - c2.len) / 2 : 0, rotationOriginY: b2 ? (a3.len + c2.len) / 2 : 0, scaleX: b2 ? -1 : 1, scaleY: 1 };
          }
          removeEvents(b2) {
            b2 || M2(this);
            this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(b3) {
              b3();
            }), this.eventsToUnbind.length = 0);
          }
          render() {
            const b2 = this;
            var a3 = b2.chart;
            const c2 = b2.options, d2 = l(c2.animation), f2 = b2.visible ? "inherit" : "hidden", e2 = c2.zIndex, g2 = b2.hasRendered;
            a3 = a3.seriesGroup;
            let k2 = b2.finishedAnimating ? 0 : d2.duration;
            n(this, "render");
            b2.plotGroup("group", "series", f2, e2, a3);
            b2.markerGroup = b2.plotGroup("markerGroup", "markers", f2, e2, a3);
            false !== c2.clip && b2.setClip();
            b2.animate && k2 && b2.animate(true);
            b2.drawGraph && (b2.drawGraph(), b2.applyZones());
            b2.visible && b2.drawPoints();
            b2.drawDataLabels && b2.drawDataLabels();
            b2.redrawPoints && b2.redrawPoints();
            b2.drawTracker && c2.enableMouseTracking && b2.drawTracker();
            b2.animate && k2 && b2.animate();
            g2 || (k2 && d2.defer && (k2 += d2.defer), b2.animationTimeout = ba(function() {
              b2.afterAnimate();
            }, k2 || 0));
            b2.isDirty = false;
            b2.hasRendered = true;
            n(b2, "afterRender");
          }
          redraw() {
            const b2 = this.isDirty || this.isDirtyData;
            this.translate();
            this.render();
            b2 && delete this.kdTree;
          }
          searchPoint(b2, a3) {
            const c2 = this.xAxis, d2 = this.yAxis, f2 = this.chart.inverted;
            return this.searchKDTree({ clientX: f2 ? c2.len - b2.chartY + c2.pos : b2.chartX - c2.pos, plotY: f2 ? d2.len - b2.chartX + d2.pos : b2.chartY - d2.pos }, a3, b2);
          }
          buildKDTree(b2) {
            function a3(b3, d3, f2) {
              var e2 = b3 && b3.length;
              let g2;
              if (e2)
                return g2 = c2.kdAxisArray[d3 % f2], b3.sort(function(b4, a4) {
                  return b4[g2] - a4[g2];
                }), e2 = Math.floor(e2 / 2), { point: b3[e2], left: a3(b3.slice(0, e2), d3 + 1, f2), right: a3(b3.slice(e2 + 1), d3 + 1, f2) };
            }
            this.buildingKdTree = true;
            const c2 = this, d2 = -1 < c2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete c2.kdTree;
            ba(function() {
              c2.kdTree = a3(c2.getValidPoints(null, !c2.directTouch), d2, d2);
              c2.buildingKdTree = false;
            }, c2.options.kdNow || b2 && "touchstart" === b2.type ? 0 : 1);
          }
          searchKDTree(b2, a3, c2) {
            function d2(b3, a4, c3, n2) {
              const h2 = a4.point;
              var l2 = f2.kdAxisArray[c3 % n2];
              let m2 = h2;
              var q2 = r(b3[e2]) && r(h2[e2]) ? Math.pow(b3[e2] - h2[e2], 2) : null;
              var p2 = r(b3[g2]) && r(h2[g2]) ? Math.pow(b3[g2] - h2[g2], 2) : null;
              p2 = (q2 || 0) + (p2 || 0);
              h2.dist = r(p2) ? Math.sqrt(p2) : Number.MAX_VALUE;
              h2.distX = r(q2) ? Math.sqrt(q2) : Number.MAX_VALUE;
              l2 = b3[l2] - h2[l2];
              p2 = 0 > l2 ? "left" : "right";
              q2 = 0 > l2 ? "right" : "left";
              a4[p2] && (p2 = d2(b3, a4[p2], c3 + 1, n2), m2 = p2[k2] < m2[k2] ? p2 : h2);
              a4[q2] && Math.sqrt(l2 * l2) < m2[k2] && (b3 = d2(b3, a4[q2], c3 + 1, n2), m2 = b3[k2] < m2[k2] ? b3 : m2);
              return m2;
            }
            const f2 = this, e2 = this.kdAxisArray[0], g2 = this.kdAxisArray[1], k2 = a3 ? "distX" : "dist";
            a3 = -1 < f2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            this.kdTree || this.buildingKdTree || this.buildKDTree(c2);
            if (this.kdTree)
              return d2(
                b2,
                this.kdTree,
                a3,
                a3
              );
          }
          pointPlacementToXValue() {
            const { options: { pointPlacement: b2, pointRange: a3 }, xAxis: c2 } = this;
            let d2 = b2;
            "between" === d2 && (d2 = c2.reversed ? -0.5 : 0.5);
            return T(d2) ? d2 * (a3 || c2.pointRange) : 0;
          }
          isPointInside(b2) {
            const { chart: a3, xAxis: c2, yAxis: d2 } = this;
            return "undefined" !== typeof b2.plotY && "undefined" !== typeof b2.plotX && 0 <= b2.plotY && b2.plotY <= (d2 ? d2.len : a3.plotHeight) && 0 <= b2.plotX && b2.plotX <= (c2 ? c2.len : a3.plotWidth);
          }
          drawTracker() {
            const b2 = this, a3 = b2.options, c2 = a3.trackByArea, d2 = [].concat(c2 ? b2.areaPath : b2.graphPath), f2 = b2.chart, e2 = f2.pointer, k2 = f2.renderer, l2 = f2.options.tooltip.snap, m2 = b2.tracker, q2 = function(c3) {
              if (a3.enableMouseTracking && f2.hoverSeries !== b2)
                b2.onMouseOver();
            }, p2 = "rgba(192,192,192," + (g ? 1e-4 : 2e-3) + ")";
            m2 ? m2.attr({ d: d2 }) : b2.graph && (b2.tracker = k2.path(d2).attr({ visibility: b2.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(c2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(b2.group), f2.styledMode || b2.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: p2, fill: c2 ? p2 : "none", "stroke-width": b2.graph.strokeWidth() + (c2 ? 0 : 2 * l2) }), [
              b2.tracker,
              b2.markerGroup,
              b2.dataLabelsGroup
            ].forEach(function(b3) {
              if (b3 && (b3.addClass("highcharts-tracker").on("mouseover", q2).on("mouseout", function(b4) {
                e2.onTrackerMouseOut(b4);
              }), a3.cursor && !f2.styledMode && b3.css({ cursor: a3.cursor }), h))
                b3.on("touchstart", q2);
            }));
            n(this, "afterDrawTracker");
          }
          addPoint(b2, a3, c2, d2, f2) {
            const e2 = this.options, g2 = this.data, k2 = this.chart;
            var h2 = this.xAxis;
            h2 = h2 && h2.hasNames && h2.names;
            const l2 = e2.data, m2 = this.xData;
            let q2, p2;
            a3 = A(a3, true);
            const r2 = { series: this };
            this.pointClass.prototype.applyOptions.apply(r2, [b2]);
            const t2 = r2.x;
            p2 = m2.length;
            if (this.requireSorting && t2 < m2[p2 - 1])
              for (q2 = true; p2 && m2[p2 - 1] > t2; )
                p2--;
            this.updateParallelArrays(r2, "splice", [p2, 0, 0]);
            this.updateParallelArrays(r2, p2);
            h2 && r2.name && (h2[t2] = r2.name);
            l2.splice(p2, 0, b2);
            if (q2 || this.processedData)
              this.data.splice(p2, 0, null), this.processData();
            "point" === e2.legendType && this.generatePoints();
            c2 && (g2[0] && g2[0].remove ? g2[0].remove(false) : (g2.shift(), this.updateParallelArrays(r2, "shift"), l2.shift()));
            false !== f2 && n(this, "addPoint", { point: r2 });
            this.isDirtyData = this.isDirty = true;
            a3 && k2.redraw(d2);
          }
          removePoint(b2, a3, c2) {
            const d2 = this, f2 = d2.data, e2 = f2[b2], g2 = d2.points, k2 = d2.chart, h2 = function() {
              g2 && g2.length === f2.length && g2.splice(b2, 1);
              f2.splice(b2, 1);
              d2.options.data.splice(b2, 1);
              d2.updateParallelArrays(e2 || { series: d2 }, "splice", [b2, 1]);
              e2 && e2.destroy();
              d2.isDirty = true;
              d2.isDirtyData = true;
              a3 && k2.redraw();
            };
            p(c2, k2);
            a3 = A(a3, true);
            e2 ? e2.firePointEvent("remove", null, h2) : h2();
          }
          remove(b2, a3, c2, d2) {
            function f2() {
              e2.destroy(d2);
              g2.isDirtyLegend = g2.isDirtyBox = true;
              g2.linkSeries(d2);
              A(b2, true) && g2.redraw(a3);
            }
            const e2 = this, g2 = e2.chart;
            false !== c2 ? n(e2, "remove", null, f2) : f2();
          }
          update(a3, c2) {
            a3 = q(a3, this.userOptions);
            n(this, "update", { options: a3 });
            const d2 = this, e2 = d2.chart;
            var g2 = d2.userOptions;
            const k2 = d2.initialType || d2.type;
            var h2 = e2.options.plotOptions;
            const l2 = w[k2].prototype;
            var m2 = d2.finishedAnimating && { animation: false };
            const p2 = {};
            let r2, t2 = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], v2 = a3.type || g2.type || e2.options.chart.type;
            const u2 = !(this.hasDerivedData || v2 && v2 !== this.type || "undefined" !== typeof a3.pointStart || "undefined" !== typeof a3.pointInterval || "undefined" !== typeof a3.relativeXValue || a3.joinBy || a3.mapData || d2.hasOptionChanged("dataGrouping") || d2.hasOptionChanged("pointStart") || d2.hasOptionChanged("pointInterval") || d2.hasOptionChanged("pointIntervalUnit") || d2.hasOptionChanged("keys"));
            v2 = v2 || k2;
            u2 && (t2.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), false !== a3.visible && t2.push("area", "graph"), d2.parallelArrays.forEach(function(b2) {
              t2.push(b2 + "Data");
            }), a3.data && (a3.dataSorting && f(d2.options.dataSorting, a3.dataSorting), this.setData(a3.data, false)));
            a3 = V(g2, m2, { index: "undefined" === typeof g2.index ? d2.index : g2.index, pointStart: A(h2 && h2.series && h2.series.pointStart, g2.pointStart, d2.xData[0]) }, !u2 && { data: d2.options.data }, a3);
            u2 && a3.data && (a3.data = d2.options.data);
            t2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(t2);
            t2.forEach(function(b2) {
              t2[b2] = d2[b2];
              delete d2[b2];
            });
            h2 = false;
            if (w[v2]) {
              if (h2 = v2 !== d2.type, d2.remove(false, false, false, true), h2)
                if (Object.setPrototypeOf)
                  Object.setPrototypeOf(
                    d2,
                    w[v2].prototype
                  );
                else {
                  m2 = Object.hasOwnProperty.call(d2, "hcEvents") && d2.hcEvents;
                  for (r2 in l2)
                    d2[r2] = void 0;
                  f(d2, w[v2].prototype);
                  m2 ? d2.hcEvents = m2 : delete d2.hcEvents;
                }
            } else
              b(17, true, e2, { missingModuleFor: v2 });
            t2.forEach(function(b2) {
              d2[b2] = t2[b2];
            });
            d2.init(e2, a3);
            if (u2 && this.points) {
              a3 = d2.options;
              if (false === a3.visible)
                p2.graphic = 1, p2.dataLabel = 1;
              else if (!d2._hasPointLabels) {
                const { marker: b2, dataLabels: c3 } = a3;
                g2 = g2.marker || {};
                !b2 || false !== b2.enabled && g2.symbol === b2.symbol && g2.height === b2.height && g2.width === b2.width || (p2.graphic = 1);
                c3 && false === c3.enabled && (p2.dataLabel = 1);
              }
              for (const b2 of this.points)
                b2 && b2.series && (b2.resolveColor(), Object.keys(p2).length && b2.destroyElements(p2), false === a3.showInLegend && b2.legendItem && e2.legend.destroyItem(b2));
            }
            d2.initialType = k2;
            e2.linkSeries();
            h2 && d2.linkedSeries.length && (d2.isDirtyData = true);
            n(this, "afterUpdate");
            A(c2, true) && e2.redraw(u2 ? void 0 : false);
          }
          setName(b2) {
            this.name = this.options.name = this.userOptions.name = b2;
            this.chart.isDirtyLegend = true;
          }
          hasOptionChanged(b2) {
            const a3 = this.options[b2], c2 = this.chart.options.plotOptions, d2 = this.userOptions[b2];
            return d2 ? a3 !== d2 : a3 !== A(c2 && c2[this.type] && c2[this.type][b2], c2 && c2.series && c2.series[b2], a3);
          }
          onMouseOver() {
            const b2 = this.chart, a3 = b2.hoverSeries;
            b2.pointer.setHoverChartIndex();
            if (a3 && a3 !== this)
              a3.onMouseOut();
            this.options.events.mouseOver && n(this, "mouseOver");
            this.setState("hover");
            b2.hoverSeries = this;
          }
          onMouseOut() {
            const b2 = this.options, a3 = this.chart, c2 = a3.tooltip, d2 = a3.hoverPoint;
            a3.hoverSeries = null;
            if (d2)
              d2.onMouseOut();
            this && b2.events.mouseOut && n(this, "mouseOut");
            !c2 || this.stickyTracking || c2.shared && !this.noSharedTooltip || c2.hide();
            a3.series.forEach(function(b3) {
              b3.setState(
                "",
                true
              );
            });
          }
          setState(b2, a3) {
            const c2 = this;
            var d2 = c2.options;
            const f2 = c2.graph, e2 = d2.inactiveOtherPoints, g2 = d2.states, k2 = A(g2[b2 || "normal"] && g2[b2 || "normal"].animation, c2.chart.options.chart.animation);
            let h2 = d2.lineWidth, n2 = 0, l2 = d2.opacity;
            b2 = b2 || "";
            if (c2.state !== b2 && ([c2.group, c2.markerGroup, c2.dataLabelsGroup].forEach(function(a4) {
              a4 && (c2.state && a4.removeClass("highcharts-series-" + c2.state), b2 && a4.addClass("highcharts-series-" + b2));
            }), c2.state = b2, !c2.chart.styledMode)) {
              if (g2[b2] && false === g2[b2].enabled)
                return;
              b2 && (h2 = g2[b2].lineWidth || h2 + (g2[b2].lineWidthPlus || 0), l2 = A(g2[b2].opacity, l2));
              if (f2 && !f2.dashstyle && T(h2))
                for (d2 = { "stroke-width": h2 }, f2.animate(d2, k2); c2["zone-graph-" + n2]; )
                  c2["zone-graph-" + n2].animate(d2, k2), n2 += 1;
              e2 || [c2.group, c2.markerGroup, c2.dataLabelsGroup, c2.labelBySeries].forEach(function(b3) {
                b3 && b3.animate({ opacity: l2 }, k2);
              });
            }
            a3 && e2 && c2.points && c2.setAllPointsToState(b2 || void 0);
          }
          setAllPointsToState(b2) {
            this.points.forEach(function(a3) {
              a3.setState && a3.setState(b2);
            });
          }
          setVisible(b2, a3) {
            const c2 = this, d2 = c2.chart, f2 = d2.options.chart.ignoreHiddenSeries, e2 = c2.visible, g2 = (c2.visible = b2 = c2.options.visible = c2.userOptions.visible = "undefined" === typeof b2 ? !e2 : b2) ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(b3) {
              if (c2[b3])
                c2[b3][g2]();
            });
            if (d2.hoverSeries === c2 || (d2.hoverPoint && d2.hoverPoint.series) === c2)
              c2.onMouseOut();
            c2.legendItem && d2.legend.colorizeItem(c2, b2);
            c2.isDirty = true;
            c2.options.stacking && d2.series.forEach(function(b3) {
              b3.options.stacking && b3.visible && (b3.isDirty = true);
            });
            c2.linkedSeries.forEach(function(a4) {
              a4.setVisible(b2, false);
            });
            f2 && (d2.isDirtyBox = true);
            n(c2, g2);
            false !== a3 && d2.redraw();
          }
          show() {
            this.setVisible(true);
          }
          hide() {
            this.setVisible(false);
          }
          select(b2) {
            this.selected = b2 = this.options.selected = "undefined" === typeof b2 ? !this.selected : b2;
            this.checkbox && (this.checkbox.checked = b2);
            n(this, b2 ? "select" : "unselect");
          }
          shouldShowTooltip(b2, a3, c2 = {}) {
            c2.series = this;
            c2.visiblePlotOnly = true;
            return this.chart.isInsidePlot(b2, a3, c2);
          }
          drawLegendSymbol(b2, a3) {
            var c2;
            null === (c2 = C[this.options.legendSymbol || "rectangle"]) || void 0 === c2 ? void 0 : c2.call(this, b2, a3);
          }
        }
        aa.defaultOptions = H;
        aa.types = B.seriesTypes;
        aa.registerType = B.registerSeriesType;
        f(aa.prototype, {
          axisTypes: ["xAxis", "yAxis"],
          coll: "series",
          colorCounter: 0,
          cropShoulder: 1,
          directTouch: false,
          isCartesian: true,
          kdAxisArray: ["clientX", "plotY"],
          parallelArrays: ["x", "y"],
          pointClass: z,
          requireSorting: true,
          sorted: true
        });
        B.series = aa;
        "";
        "";
        return aa;
      });
      M(a, "Core/Chart/Chart.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Defaults.js"],
        a["Core/Templating.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Time.js"],
        a["Core/Utilities.js"],
        a["Core/Renderer/HTML/AST.js"]
      ], function(a2, y, I, L, C, z, H, B, u, v, l, p, t) {
        const { animate: m, animObject: h, setAnimation: g } = a2, { defaultOptions: e, defaultTime: w } = I, { numberFormat: x } = L, { registerEventOptions: F } = C, { charts: d, doc: k, marginNames: r, svg: q, win: G } = z, { seriesTypes: b } = u, {
          addEvent: f,
          attr: c,
          createElement: n,
          css: P,
          defined: D,
          diffObjects: K,
          discardElement: X,
          erase: T,
          error: Z,
          extend: V,
          find: Y,
          fireEvent: A,
          getStyle: M2,
          isArray: ia,
          isNumber: ba,
          isObject: aa,
          isString: J,
          merge: N,
          objectEach: O,
          pick: S,
          pInt: W,
          relativeLength: ha,
          removeEvent: da,
          splat: fa,
          syncTimeout: ka,
          uniqueKey: ca
        } = p;
        class ea {
          static chart(b2, a3, c2) {
            return new ea(b2, a3, c2);
          }
          constructor(b2, a3, c2) {
            this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
            this.sharedClips = {};
            this.zooming = this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
            this.getArgs(b2, a3, c2);
          }
          getArgs(b2, a3, c2) {
            J(b2) || b2.nodeName ? (this.renderTo = b2, this.init(a3, c2)) : this.init(b2, a3);
          }
          setZoomOptions() {
            const b2 = this.options.chart, a3 = b2.zooming;
            this.zooming = Object.assign(Object.assign({}, a3), { type: S(b2.zoomType, a3.type), key: S(b2.zoomKey, a3.key), pinchType: S(b2.pinchType, a3.pinchType), singleTouch: S(
              b2.zoomBySingleTouch,
              a3.singleTouch,
              false
            ), resetButton: N(a3.resetButton, b2.resetZoomButton) });
          }
          init(b2, a3) {
            A(this, "init", { args: arguments }, function() {
              const c2 = N(e, b2), f2 = c2.chart;
              this.userOptions = V({}, b2);
              this.margin = [];
              this.spacing = [];
              this.bounds = { h: {}, v: {} };
              this.labelCollectors = [];
              this.callback = a3;
              this.isResizing = 0;
              this.options = c2;
              this.axes = [];
              this.series = [];
              this.time = b2.time && Object.keys(b2.time).length ? new l(b2.time) : z.time;
              this.numberFormatter = f2.numberFormatter || x;
              this.styledMode = f2.styledMode;
              this.hasCartesianSeries = f2.showAxes;
              this.index = d.length;
              d.push(this);
              z.chartCount++;
              F(this, f2);
              this.xAxis = [];
              this.yAxis = [];
              this.pointCount = this.colorCounter = this.symbolCounter = 0;
              this.setZoomOptions();
              A(this, "afterInit");
              this.firstRender();
            });
          }
          initSeries(a3) {
            var c2 = this.options.chart;
            c2 = a3.type || c2.type;
            const d2 = b[c2];
            d2 || Z(17, true, this, { missingModuleFor: c2 });
            c2 = new d2();
            "function" === typeof c2.init && c2.init(this, a3);
            return c2;
          }
          setSeriesData() {
            this.getSeriesOrderByLinks().forEach(function(b2) {
              b2.points || b2.data || !b2.enabledDataSorting || b2.setData(b2.options.data, false);
            });
          }
          getSeriesOrderByLinks() {
            return this.series.concat().sort(function(b2, a3) {
              return b2.linkedSeries.length || a3.linkedSeries.length ? a3.linkedSeries.length - b2.linkedSeries.length : 0;
            });
          }
          orderItems(b2, a3 = 0) {
            const c2 = this[b2], d2 = this.options[b2] = fa(this.options[b2]).slice();
            b2 = this.userOptions[b2] = this.userOptions[b2] ? fa(this.userOptions[b2]).slice() : [];
            this.hasRendered && (d2.splice(a3), b2.splice(a3));
            if (c2) {
              for (let f2 = a3, e2 = c2.length; f2 < e2; ++f2)
                if (a3 = c2[f2])
                  a3.index = f2, a3 instanceof B && (a3.name = a3.getName()), a3.options.isInternal || (d2[f2] = a3.options, b2[f2] = a3.userOptions);
            }
          }
          isInsidePlot(b2, a3, c2 = {}) {
            const {
              inverted: d2,
              plotBox: f2,
              plotLeft: e2,
              plotTop: g2,
              scrollablePlotBox: k2
            } = this;
            var h2 = 0;
            let n2 = 0;
            c2.visiblePlotOnly && this.scrollingContainer && ({ scrollLeft: h2, scrollTop: n2 } = this.scrollingContainer);
            const l2 = c2.series, m2 = c2.visiblePlotOnly && k2 || f2;
            var q2 = c2.inverted ? a3 : b2;
            a3 = c2.inverted ? b2 : a3;
            b2 = { x: q2, y: a3, isInsidePlot: true, options: c2 };
            if (!c2.ignoreX) {
              const a4 = l2 && (d2 && !this.polar ? l2.yAxis : l2.xAxis) || { pos: e2, len: Infinity };
              q2 = c2.paneCoordinates ? a4.pos + q2 : e2 + q2;
              q2 >= Math.max(h2 + e2, a4.pos) && q2 <= Math.min(h2 + e2 + m2.width, a4.pos + a4.len) || (b2.isInsidePlot = false);
            }
            !c2.ignoreY && b2.isInsidePlot && (h2 = !d2 && c2.axis && !c2.axis.isXAxis && c2.axis || l2 && (d2 ? l2.xAxis : l2.yAxis) || { pos: g2, len: Infinity }, c2 = c2.paneCoordinates ? h2.pos + a3 : g2 + a3, c2 >= Math.max(n2 + g2, h2.pos) && c2 <= Math.min(n2 + g2 + m2.height, h2.pos + h2.len) || (b2.isInsidePlot = false));
            A(this, "afterIsInsidePlot", b2);
            return b2.isInsidePlot;
          }
          redraw(b2) {
            A(this, "beforeRedraw");
            const a3 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], c2 = this.series, d2 = this.pointer, f2 = this.legend, e2 = this.userOptions.legend, k2 = this.renderer, h2 = k2.isHidden(), n2 = [];
            let l2, m2, q2 = this.isDirtyBox, p2 = this.isDirtyLegend, r2;
            k2.rootFontSize = k2.boxWrapper.getStyle("font-size");
            this.setResponsive && this.setResponsive(false);
            g(this.hasRendered ? b2 : false, this);
            h2 && this.temporaryDisplay();
            this.layOutTitles(false);
            for (b2 = c2.length; b2--; )
              if (r2 = c2[b2], r2.options.stacking || r2.options.centerInCategory) {
                if (m2 = true, r2.isDirty) {
                  l2 = true;
                  break;
                }
              }
            if (l2)
              for (b2 = c2.length; b2--; )
                r2 = c2[b2], r2.options.stacking && (r2.isDirty = true);
            c2.forEach(function(b3) {
              b3.isDirty && ("point" === b3.options.legendType ? ("function" === typeof b3.updateTotals && b3.updateTotals(), p2 = true) : e2 && (e2.labelFormatter || e2.labelFormat) && (p2 = true));
              b3.isDirtyData && A(b3, "updatedData");
            });
            p2 && f2 && f2.options.enabled && (f2.render(), this.isDirtyLegend = false);
            m2 && this.getStacks();
            a3.forEach(function(b3) {
              b3.updateNames();
              b3.setScale();
            });
            this.getMargins();
            a3.forEach(function(b3) {
              b3.isDirty && (q2 = true);
            });
            a3.forEach(function(b3) {
              const a4 = b3.min + "," + b3.max;
              b3.extKey !== a4 && (b3.extKey = a4, n2.push(function() {
                A(b3, "afterSetExtremes", V(b3.eventArgs, b3.getExtremes()));
                delete b3.eventArgs;
              }));
              (q2 || m2) && b3.redraw();
            });
            q2 && this.drawChartBox();
            A(this, "predraw");
            c2.forEach(function(b3) {
              (q2 || b3.isDirty) && b3.visible && b3.redraw();
              b3.isDirtyData = false;
            });
            d2 && d2.reset(true);
            k2.draw();
            A(this, "redraw");
            A(this, "render");
            h2 && this.temporaryDisplay(true);
            n2.forEach(function(b3) {
              b3.call();
            });
          }
          get(b2) {
            function a3(a4) {
              return a4.id === b2 || a4.options && a4.options.id === b2;
            }
            const c2 = this.series;
            let d2 = Y(this.axes, a3) || Y(this.series, a3);
            for (let b3 = 0; !d2 && b3 < c2.length; b3++)
              d2 = Y(c2[b3].points || [], a3);
            return d2;
          }
          getAxes() {
            const b2 = this.options;
            A(this, "getAxes");
            for (const a3 of ["xAxis", "yAxis"]) {
              const c2 = b2[a3] = fa(b2[a3] || {});
              for (const b3 of c2)
                new y(this, b3, a3);
            }
            A(this, "afterGetAxes");
          }
          getSelectedPoints() {
            return this.series.reduce((b2, a3) => {
              a3.getPointsCollection().forEach((a4) => {
                S(a4.selectedStaging, a4.selected) && b2.push(a4);
              });
              return b2;
            }, []);
          }
          getSelectedSeries() {
            return this.series.filter(function(b2) {
              return b2.selected;
            });
          }
          setTitle(b2, a3, c2) {
            this.applyDescription("title", b2);
            this.applyDescription("subtitle", a3);
            this.applyDescription("caption", void 0);
            this.layOutTitles(c2);
          }
          applyDescription(b2, a3) {
            const c2 = this, d2 = this.options[b2] = N(this.options[b2], a3);
            let f2 = this[b2];
            f2 && a3 && (this[b2] = f2 = f2.destroy());
            d2 && !f2 && (f2 = this.renderer.text(d2.text, 0, 0, d2.useHTML).attr({
              align: d2.align,
              "class": "highcharts-" + b2,
              zIndex: d2.zIndex || 4
            }).add(), f2.update = function(a4, d3) {
              c2.applyDescription(b2, a4);
              c2.layOutTitles(d3);
            }, this.styledMode || f2.css(V("title" === b2 ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, d2.style)), this[b2] = f2);
          }
          layOutTitles(b2 = true) {
            const a3 = [0, 0, 0], c2 = this.renderer, d2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(b3) {
              const f3 = this[b3], e2 = this.options[b3], g2 = e2.verticalAlign || "top";
              b3 = "title" === b3 ? "top" === g2 ? -3 : 0 : "top" === g2 ? a3[0] + 2 : 0;
              if (f3) {
                f3.css({ width: (e2.width || d2.width + (e2.widthAdjust || 0)) + "px" });
                const k2 = c2.fontMetrics(f3).b, h2 = Math.round(f3.getBBox(e2.useHTML).height);
                f3.align(V({ y: "bottom" === g2 ? k2 : b3 + k2, height: h2 }, e2), false, "spacingBox");
                e2.floating || ("top" === g2 ? a3[0] = Math.ceil(a3[0] + h2) : "bottom" === g2 && (a3[2] = Math.ceil(a3[2] + h2)));
              }
            }, this);
            a3[0] && "top" === (this.options.title.verticalAlign || "top") && (a3[0] += this.options.title.margin);
            a3[2] && "bottom" === this.options.caption.verticalAlign && (a3[2] += this.options.caption.margin);
            const f2 = !this.titleOffset || this.titleOffset.join(",") !== a3.join(",");
            this.titleOffset = a3;
            A(this, "afterLayOutTitles");
            !this.isDirtyBox && f2 && (this.isDirtyBox = this.isDirtyLegend = f2, this.hasRendered && b2 && this.isDirtyBox && this.redraw());
          }
          getContainerBox() {
            return { width: M2(this.renderTo, "width", true) || 0, height: M2(this.renderTo, "height", true) || 0 };
          }
          getChartSize() {
            var b2 = this.options.chart;
            const a3 = b2.width;
            b2 = b2.height;
            const c2 = this.getContainerBox();
            this.chartWidth = Math.max(0, a3 || c2.width || 600);
            this.chartHeight = Math.max(0, ha(b2, this.chartWidth) || (1 < c2.height ? c2.height : 400));
            this.containerBox = c2;
          }
          temporaryDisplay(b2) {
            let a3 = this.renderTo;
            if (b2)
              for (; a3 && a3.style; )
                a3.hcOrigStyle && (P(a3, a3.hcOrigStyle), delete a3.hcOrigStyle), a3.hcOrigDetached && (k.body.removeChild(a3), a3.hcOrigDetached = false), a3 = a3.parentNode;
            else
              for (; a3 && a3.style; ) {
                k.body.contains(a3) || a3.parentNode || (a3.hcOrigDetached = true, k.body.appendChild(a3));
                if ("none" === M2(a3, "display", false) || a3.hcOricDetached)
                  a3.hcOrigStyle = { display: a3.style.display, height: a3.style.height, overflow: a3.style.overflow }, b2 = { display: "block", overflow: "hidden" }, a3 !== this.renderTo && (b2.height = 0), P(a3, b2), a3.offsetWidth || a3.style.setProperty(
                    "display",
                    "block",
                    "important"
                  );
                a3 = a3.parentNode;
                if (a3 === k.body)
                  break;
              }
          }
          setClassName(b2) {
            this.container.className = "highcharts-container " + (b2 || "");
          }
          getContainer() {
            const b2 = this.options, a3 = b2.chart;
            var f2 = ca();
            let e2, h2 = this.renderTo;
            h2 || (this.renderTo = h2 = a3.renderTo);
            J(h2) && (this.renderTo = h2 = k.getElementById(h2));
            h2 || Z(13, true, this);
            var l2 = W(c(h2, "data-highcharts-chart"));
            ba(l2) && d[l2] && d[l2].hasRendered && d[l2].destroy();
            c(h2, "data-highcharts-chart", this.index);
            h2.innerHTML = t.emptyHTML;
            a3.skipClone || h2.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            l2 = this.chartWidth;
            const m2 = this.chartHeight;
            P(h2, { overflow: "hidden" });
            this.styledMode || (e2 = V({ position: "relative", overflow: "hidden", width: l2 + "px", height: m2 + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, a3.style || {}));
            this.container = f2 = n("div", { id: f2 }, e2, h2);
            this._cursor = f2.style.cursor;
            this.renderer = new (a3.renderer || !q ? H.getRendererType(a3.renderer) : v)(
              f2,
              l2,
              m2,
              void 0,
              a3.forExport,
              b2.exporting && b2.exporting.allowHTML,
              this.styledMode
            );
            this.containerBox = this.getContainerBox();
            g(void 0, this);
            this.setClassName(a3.className);
            if (this.styledMode)
              for (const a4 in b2.defs)
                this.renderer.definition(b2.defs[a4]);
            else
              this.renderer.setStyle(a3.style);
            this.renderer.chartIndex = this.index;
            A(this, "afterGetContainer");
          }
          getMargins(b2) {
            const { spacing: a3, margin: c2, titleOffset: d2 } = this;
            this.resetMargins();
            d2[0] && !D(c2[0]) && (this.plotTop = Math.max(this.plotTop, d2[0] + a3[0]));
            d2[2] && !D(c2[2]) && (this.marginBottom = Math.max(
              this.marginBottom,
              d2[2] + a3[2]
            ));
            this.legend && this.legend.display && this.legend.adjustMargins(c2, a3);
            A(this, "getMargins");
            b2 || this.getAxisMargins();
          }
          getAxisMargins() {
            const b2 = this, a3 = b2.axisOffset = [0, 0, 0, 0], c2 = b2.colorAxis, d2 = b2.margin, f2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.getOffset();
              });
            };
            b2.hasCartesianSeries ? f2(b2.axes) : c2 && c2.length && f2(c2);
            r.forEach(function(c3, f3) {
              D(d2[f3]) || (b2[c3] += a3[f3]);
            });
            b2.setChartSize();
          }
          getOptions() {
            return K(this.userOptions, e);
          }
          reflow(b2) {
            const a3 = this;
            var c2 = a3.options.chart;
            c2 = D(c2.width) && D(c2.height);
            const d2 = a3.containerBox, f2 = a3.getContainerBox();
            delete a3.pointer.chartPosition;
            if (!c2 && !a3.isPrinting && d2 && f2.width) {
              if (f2.width !== d2.width || f2.height !== d2.height)
                p.clearTimeout(a3.reflowTimeout), a3.reflowTimeout = ka(function() {
                  a3.container && a3.setSize(void 0, void 0, false);
                }, b2 ? 100 : 0);
              a3.containerBox = f2;
            }
          }
          setReflow() {
            const b2 = this;
            var a3 = (a4) => {
              var c2;
              (null === (c2 = b2.options) || void 0 === c2 ? 0 : c2.chart.reflow) && b2.hasLoaded && b2.reflow(a4);
            };
            "function" === typeof ResizeObserver ? new ResizeObserver(a3).observe(b2.renderTo) : (a3 = f(G, "resize", a3), f(
              this,
              "destroy",
              a3
            ));
          }
          setSize(b2, a3, c2) {
            const d2 = this, f2 = d2.renderer;
            d2.isResizing += 1;
            g(c2, d2);
            c2 = f2.globalAnimation;
            d2.oldChartHeight = d2.chartHeight;
            d2.oldChartWidth = d2.chartWidth;
            "undefined" !== typeof b2 && (d2.options.chart.width = b2);
            "undefined" !== typeof a3 && (d2.options.chart.height = a3);
            d2.getChartSize();
            d2.styledMode || (c2 ? m : P)(d2.container, { width: d2.chartWidth + "px", height: d2.chartHeight + "px" }, c2);
            d2.setChartSize(true);
            f2.setSize(d2.chartWidth, d2.chartHeight, c2);
            d2.axes.forEach(function(b3) {
              b3.isDirty = true;
              b3.setScale();
            });
            d2.isDirtyLegend = true;
            d2.isDirtyBox = true;
            d2.layOutTitles();
            d2.getMargins();
            d2.redraw(c2);
            d2.oldChartHeight = null;
            A(d2, "resize");
            ka(function() {
              d2 && A(d2, "endResize", null, function() {
                --d2.isResizing;
              });
            }, h(c2).duration);
          }
          setChartSize(b2) {
            var a3 = this.inverted;
            const c2 = this.renderer;
            var d2 = this.chartWidth, f2 = this.chartHeight;
            const e2 = this.options.chart, g2 = this.spacing, k2 = this.clipOffset;
            let h2, n2, l2, m2;
            this.plotLeft = h2 = Math.round(this.plotLeft);
            this.plotTop = n2 = Math.round(this.plotTop);
            this.plotWidth = l2 = Math.max(0, Math.round(d2 - h2 - this.marginRight));
            this.plotHeight = m2 = Math.max(
              0,
              Math.round(f2 - n2 - this.marginBottom)
            );
            this.plotSizeX = a3 ? m2 : l2;
            this.plotSizeY = a3 ? l2 : m2;
            this.plotBorderWidth = e2.plotBorderWidth || 0;
            this.spacingBox = c2.spacingBox = { x: g2[3], y: g2[0], width: d2 - g2[3] - g2[1], height: f2 - g2[0] - g2[2] };
            this.plotBox = c2.plotBox = { x: h2, y: n2, width: l2, height: m2 };
            a3 = 2 * Math.floor(this.plotBorderWidth / 2);
            d2 = Math.ceil(Math.max(a3, k2[3]) / 2);
            f2 = Math.ceil(Math.max(a3, k2[0]) / 2);
            this.clipBox = { x: d2, y: f2, width: Math.floor(this.plotSizeX - Math.max(a3, k2[1]) / 2 - d2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a3, k2[2]) / 2 - f2)) };
            b2 || (this.axes.forEach(function(b3) {
              b3.setAxisSize();
              b3.setAxisTranslation();
            }), c2.alignElements());
            A(this, "afterSetChartSize", { skipAxes: b2 });
          }
          resetMargins() {
            A(this, "resetMargins");
            const b2 = this, a3 = b2.options.chart;
            ["margin", "spacing"].forEach(function(c2) {
              const d2 = a3[c2], f2 = aa(d2) ? d2 : [d2, d2, d2, d2];
              ["Top", "Right", "Bottom", "Left"].forEach(function(d3, e2) {
                b2[c2][e2] = S(a3[c2 + d3], f2[e2]);
              });
            });
            r.forEach(function(a4, c2) {
              b2[a4] = S(b2.margin[c2], b2.spacing[c2]);
            });
            b2.axisOffset = [0, 0, 0, 0];
            b2.clipOffset = [0, 0, 0, 0];
          }
          drawChartBox() {
            const b2 = this.options.chart, a3 = this.renderer, c2 = this.chartWidth, d2 = this.chartHeight, f2 = this.styledMode, e2 = this.plotBGImage;
            var g2 = b2.backgroundColor;
            const k2 = b2.plotBackgroundColor, h2 = b2.plotBackgroundImage, n2 = this.plotLeft, l2 = this.plotTop, m2 = this.plotWidth, q2 = this.plotHeight, p2 = this.plotBox, r2 = this.clipRect, t2 = this.clipBox;
            let w2 = this.chartBackground, v2 = this.plotBackground, u2 = this.plotBorder, x2, D2, E = "animate";
            w2 || (this.chartBackground = w2 = a3.rect().addClass("highcharts-background").add(), E = "attr");
            if (f2)
              x2 = D2 = w2.strokeWidth();
            else {
              x2 = b2.borderWidth || 0;
              D2 = x2 + (b2.shadow ? 8 : 0);
              g2 = { fill: g2 || "none" };
              if (x2 || w2["stroke-width"])
                g2.stroke = b2.borderColor, g2["stroke-width"] = x2;
              w2.attr(g2).shadow(b2.shadow);
            }
            w2[E]({ x: D2 / 2, y: D2 / 2, width: c2 - D2 - x2 % 2, height: d2 - D2 - x2 % 2, r: b2.borderRadius });
            E = "animate";
            v2 || (E = "attr", this.plotBackground = v2 = a3.rect().addClass("highcharts-plot-background").add());
            v2[E](p2);
            f2 || (v2.attr({ fill: k2 || "none" }).shadow(b2.plotShadow), h2 && (e2 ? (h2 !== e2.attr("href") && e2.attr("href", h2), e2.animate(p2)) : this.plotBGImage = a3.image(h2, n2, l2, m2, q2).add()));
            r2 ? r2.animate({ width: t2.width, height: t2.height }) : this.clipRect = a3.clipRect(t2);
            E = "animate";
            u2 || (E = "attr", this.plotBorder = u2 = a3.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
            f2 || u2.attr({ stroke: b2.plotBorderColor, "stroke-width": b2.plotBorderWidth || 0, fill: "none" });
            u2[E](u2.crisp({ x: n2, y: l2, width: m2, height: q2 }, -u2.strokeWidth()));
            this.isDirtyBox = false;
            A(this, "afterDrawChartBox");
          }
          propFromSeries() {
            const a3 = this, c2 = a3.options.chart, d2 = a3.options.series;
            let f2, e2, g2;
            ["inverted", "angular", "polar"].forEach(function(k2) {
              e2 = b[c2.type];
              g2 = c2[k2] || e2 && e2.prototype[k2];
              for (f2 = d2 && d2.length; !g2 && f2--; )
                (e2 = b[d2[f2].type]) && e2.prototype[k2] && (g2 = true);
              a3[k2] = g2;
            });
          }
          linkSeries(b2) {
            const a3 = this, c2 = a3.series;
            c2.forEach(function(b3) {
              b3.linkedSeries.length = 0;
            });
            c2.forEach(function(b3) {
              let c3 = b3.options.linkedTo;
              J(c3) && (c3 = ":previous" === c3 ? a3.series[b3.index - 1] : a3.get(c3)) && c3.linkedParent !== b3 && (c3.linkedSeries.push(b3), b3.linkedParent = c3, c3.enabledDataSorting && b3.setDataSortingOptions(), b3.visible = S(b3.options.visible, c3.options.visible, b3.visible));
            });
            A(this, "afterLinkSeries", { isUpdating: b2 });
          }
          renderSeries() {
            this.series.forEach(function(b2) {
              b2.translate();
              b2.render();
            });
          }
          render() {
            const b2 = this.axes, a3 = this.colorAxis, c2 = this.renderer, d2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.render();
              });
            };
            let f2 = 0;
            this.setTitle();
            A(this, "beforeMargins");
            this.getStacks && this.getStacks();
            this.getMargins(true);
            this.setChartSize();
            const e2 = this.plotWidth;
            b2.some(function(b3) {
              if (b3.horiz && b3.visible && b3.options.labels.enabled && b3.series.length)
                return f2 = 21, true;
            });
            const g2 = this.plotHeight = Math.max(this.plotHeight - f2, 0);
            b2.forEach(function(b3) {
              b3.setScale();
            });
            this.getAxisMargins();
            const k2 = 1.1 < e2 / this.plotWidth, h2 = 1.05 < g2 / this.plotHeight;
            if (k2 || h2)
              b2.forEach(function(b3) {
                (b3.horiz && k2 || !b3.horiz && h2) && b3.setTickInterval(true);
              }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? d2(b2) : a3 && a3.length && d2(a3);
            this.seriesGroup || (this.seriesGroup = c2.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add());
            this.renderSeries();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.hasRendered = true;
          }
          addCredits(b2) {
            const a3 = this, c2 = N(true, this.options.credits, b2);
            c2.enabled && !this.credits && (this.credits = this.renderer.text(c2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              c2.href && (G.location.href = c2.href);
            }).attr({ align: c2.position.align, zIndex: 8 }), a3.styledMode || this.credits.css(c2.style), this.credits.add().align(c2.position), this.credits.update = function(b3) {
              a3.credits = a3.credits.destroy();
              a3.addCredits(b3);
            });
          }
          destroy() {
            const b2 = this, a3 = b2.axes, c2 = b2.series, f2 = b2.container, e2 = f2 && f2.parentNode;
            let g2;
            A(b2, "destroy");
            b2.renderer.forExport ? T(d, b2) : d[b2.index] = void 0;
            z.chartCount--;
            b2.renderTo.removeAttribute("data-highcharts-chart");
            da(b2);
            for (g2 = a3.length; g2--; )
              a3[g2] = a3[g2].destroy();
            this.scroller && this.scroller.destroy && this.scroller.destroy();
            for (g2 = c2.length; g2--; )
              c2[g2] = c2[g2].destroy();
            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a4) {
              const c3 = b2[a4];
              c3 && c3.destroy && (b2[a4] = c3.destroy());
            });
            f2 && (f2.innerHTML = t.emptyHTML, da(f2), e2 && X(f2));
            O(b2, function(a4, c3) {
              delete b2[c3];
            });
          }
          firstRender() {
            const b2 = this, a3 = b2.options;
            b2.getContainer();
            b2.resetMargins();
            b2.setChartSize();
            b2.propFromSeries();
            b2.getAxes();
            const c2 = ia(a3.series) ? a3.series : [];
            a3.series = [];
            c2.forEach(function(a4) {
              b2.initSeries(a4);
            });
            b2.linkSeries();
            b2.setSeriesData();
            A(b2, "beforeRender");
            b2.render();
            b2.pointer.getChartPosition();
            if (!b2.renderer.imgCount && !b2.hasLoaded)
              b2.onload();
            b2.temporaryDisplay(true);
          }
          onload() {
            this.callbacks.concat([this.callback]).forEach(function(b2) {
              b2 && "undefined" !== typeof this.index && b2.apply(this, [this]);
            }, this);
            A(this, "load");
            A(this, "render");
            D(this.index) && this.setReflow();
            this.warnIfA11yModuleNotLoaded();
            this.hasLoaded = true;
          }
          warnIfA11yModuleNotLoaded() {
            const { options: b2, title: a3 } = this;
            b2 && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (a3 && a3.element.textContent || "").replace(/</g, "&lt;") }), b2.accessibility && false === b2.accessibility.enabled || Z(
              'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
              false,
              this
            ));
          }
          addSeries(b2, a3, c2) {
            const d2 = this;
            let f2;
            b2 && (a3 = S(a3, true), A(d2, "addSeries", { options: b2 }, function() {
              f2 = d2.initSeries(b2);
              d2.isDirtyLegend = true;
              d2.linkSeries();
              f2.enabledDataSorting && f2.setData(b2.data, false);
              A(d2, "afterAddSeries", { series: f2 });
              a3 && d2.redraw(c2);
            }));
            return f2;
          }
          addAxis(b2, a3, c2, d2) {
            return this.createAxis(a3 ? "xAxis" : "yAxis", { axis: b2, redraw: c2, animation: d2 });
          }
          addColorAxis(b2, a3, c2) {
            return this.createAxis("colorAxis", { axis: b2, redraw: a3, animation: c2 });
          }
          createAxis(b2, a3) {
            b2 = new y(this, a3.axis, b2);
            S(a3.redraw, true) && this.redraw(a3.animation);
            return b2;
          }
          showLoading(b2) {
            const a3 = this, c2 = a3.options, d2 = c2.loading, e2 = function() {
              g2 && P(g2, { left: a3.plotLeft + "px", top: a3.plotTop + "px", width: a3.plotWidth + "px", height: a3.plotHeight + "px" });
            };
            let g2 = a3.loadingDiv, k2 = a3.loadingSpan;
            g2 || (a3.loadingDiv = g2 = n("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, a3.container));
            k2 || (a3.loadingSpan = k2 = n("span", { className: "highcharts-loading-inner" }, null, g2), f(a3, "redraw", e2));
            g2.className = "highcharts-loading";
            t.setElementHTML(k2, S(b2, c2.lang.loading, ""));
            a3.styledMode || (P(
              g2,
              V(d2.style, { zIndex: 10 })
            ), P(k2, d2.labelStyle), a3.loadingShown || (P(g2, { opacity: 0, display: "" }), m(g2, { opacity: d2.style.opacity || 0.5 }, { duration: d2.showDuration || 0 })));
            a3.loadingShown = true;
            e2();
          }
          hideLoading() {
            const b2 = this.options, a3 = this.loadingDiv;
            a3 && (a3.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || m(a3, { opacity: 0 }, { duration: b2.loading.hideDuration || 100, complete: function() {
              P(a3, { display: "none" });
            } }));
            this.loadingShown = false;
          }
          update(b2, a3, c2, d2) {
            const f2 = this, e2 = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption"
            }, g2 = b2.isResponsiveOptions, k2 = [];
            let h2, n2;
            A(f2, "update", { options: b2 });
            g2 || f2.setResponsive(false, true);
            b2 = K(b2, f2.options);
            f2.userOptions = N(f2.userOptions, b2);
            var m2 = b2.chart;
            if (m2) {
              N(true, f2.options.chart, m2);
              this.setZoomOptions();
              "className" in m2 && f2.setClassName(m2.className);
              if ("inverted" in m2 || "polar" in m2 || "type" in m2) {
                f2.propFromSeries();
                var q2 = true;
              }
              "alignTicks" in m2 && (q2 = true);
              "events" in m2 && F(this, m2);
              O(m2, function(b3, a4) {
                -1 !== f2.propsRequireUpdateSeries.indexOf("chart." + a4) && (h2 = true);
                -1 !== f2.propsRequireDirtyBox.indexOf(a4) && (f2.isDirtyBox = true);
                -1 !== f2.propsRequireReflow.indexOf(a4) && (g2 ? f2.isDirtyBox = true : n2 = true);
              });
              !f2.styledMode && m2.style && f2.renderer.setStyle(f2.options.chart.style || {});
            }
            !f2.styledMode && b2.colors && (this.options.colors = b2.colors);
            b2.time && (this.time === w && (this.time = new l(b2.time)), N(true, f2.options.time, b2.time));
            O(b2, function(a4, c3) {
              if (f2[c3] && "function" === typeof f2[c3].update)
                f2[c3].update(a4, false);
              else if ("function" === typeof f2[e2[c3]])
                f2[e2[c3]](a4);
              else
                "colors" !== c3 && -1 === f2.collectionsWithUpdate.indexOf(c3) && N(true, f2.options[c3], b2[c3]);
              "chart" !== c3 && -1 !== f2.propsRequireUpdateSeries.indexOf(c3) && (h2 = true);
            });
            this.collectionsWithUpdate.forEach(function(a4) {
              b2[a4] && (fa(b2[a4]).forEach(function(b3, d3) {
                const e3 = D(b3.id);
                let g3;
                e3 && (g3 = f2.get(b3.id));
                !g3 && f2[a4] && (g3 = f2[a4][S(b3.index, d3)]) && (e3 && D(g3.options.id) || g3.options.isInternal) && (g3 = void 0);
                g3 && g3.coll === a4 && (g3.update(b3, false), c2 && (g3.touched = true));
                !g3 && c2 && f2.collectionsWithInit[a4] && (f2.collectionsWithInit[a4][0].apply(f2, [b3].concat(f2.collectionsWithInit[a4][1] || []).concat([false])).touched = true);
              }), c2 && f2[a4].forEach(function(b3) {
                b3.touched || b3.options.isInternal ? delete b3.touched : k2.push(b3);
              }));
            });
            k2.forEach(function(b3) {
              b3.chart && b3.remove && b3.remove(false);
            });
            q2 && f2.axes.forEach(function(b3) {
              b3.update({}, false);
            });
            h2 && f2.getSeriesOrderByLinks().forEach(function(b3) {
              b3.chart && b3.update({}, false);
            }, this);
            q2 = m2 && m2.width;
            m2 = m2 && (J(m2.height) ? ha(m2.height, q2 || f2.chartWidth) : m2.height);
            n2 || ba(q2) && q2 !== f2.chartWidth || ba(m2) && m2 !== f2.chartHeight ? f2.setSize(q2, m2, d2) : S(a3, true) && f2.redraw(d2);
            A(f2, "afterUpdate", { options: b2, redraw: a3, animation: d2 });
          }
          setSubtitle(b2, a3) {
            this.applyDescription(
              "subtitle",
              b2
            );
            this.layOutTitles(a3);
          }
          setCaption(b2, a3) {
            this.applyDescription("caption", b2);
            this.layOutTitles(a3);
          }
          showResetZoom() {
            function b2() {
              a3.zoomOut();
            }
            const a3 = this, c2 = e.lang, d2 = a3.zooming.resetButton, f2 = d2.theme, g2 = "chart" === d2.relativeTo || "spacingBox" === d2.relativeTo ? null : "scrollablePlotBox";
            A(this, "beforeShowResetZoom", null, function() {
              a3.resetZoomButton = a3.renderer.button(c2.resetZoom, null, null, b2, f2).attr({ align: d2.position.align, title: c2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d2.position, false, g2);
            });
            A(
              this,
              "afterShowResetZoom"
            );
          }
          zoomOut() {
            A(this, "selection", { resetSelection: true }, this.zoom);
          }
          zoom(b2) {
            const a3 = this, c2 = a3.pointer;
            let d2 = false, f2;
            !b2 || b2.resetSelection ? (a3.axes.forEach(function(b3) {
              f2 = b3.zoom();
            }), c2.initiated = false) : b2.xAxis.concat(b2.yAxis).forEach(function(b3) {
              const e3 = b3.axis;
              if (c2[e3.isXAxis ? "zoomX" : "zoomY"] && D(c2.mouseDownX) && D(c2.mouseDownY) && a3.isInsidePlot(c2.mouseDownX - a3.plotLeft, c2.mouseDownY - a3.plotTop, { axis: e3 }) || !D(a3.inverted ? c2.mouseDownX : c2.mouseDownY))
                f2 = e3.zoom(b3.min, b3.max), e3.displayBtn && (d2 = true);
            });
            const e2 = a3.resetZoomButton;
            d2 && !e2 ? a3.showResetZoom() : !d2 && aa(e2) && (a3.resetZoomButton = e2.destroy());
            f2 && a3.redraw(S(a3.options.chart.animation, b2 && b2.animation, 100 > a3.pointCount));
          }
          pan(b2, a3) {
            const c2 = this, d2 = c2.hoverPoints;
            a3 = "object" === typeof a3 ? a3 : { enabled: a3, type: "x" };
            const f2 = c2.options.chart;
            f2 && f2.panning && (f2.panning = a3);
            const e2 = a3.type;
            let g2;
            A(this, "pan", { originalEvent: b2 }, function() {
              d2 && d2.forEach(function(b3) {
                b3.setState();
              });
              let a4 = c2.xAxis;
              "xy" === e2 ? a4 = a4.concat(c2.yAxis) : "y" === e2 && (a4 = c2.yAxis);
              const f3 = {};
              a4.forEach(function(a5) {
                if (a5.options.panningEnabled && !a5.options.isInternal) {
                  var d3 = a5.horiz, k2 = b2[d3 ? "chartX" : "chartY"];
                  d3 = d3 ? "mouseDownX" : "mouseDownY";
                  var h2 = c2[d3], n2 = a5.minPointOffset || 0, l2 = a5.reversed && !c2.inverted || !a5.reversed && c2.inverted ? -1 : 1, m2 = a5.getExtremes(), q2 = a5.toValue(h2 - k2, true) + n2 * l2, p2 = a5.toValue(h2 + a5.len - k2, true) - (n2 * l2 || a5.isXAxis && a5.pointRangePadding || 0), r2 = p2 < q2;
                  l2 = a5.hasVerticalPanning();
                  h2 = r2 ? p2 : q2;
                  q2 = r2 ? q2 : p2;
                  var t2 = a5.panningState;
                  !l2 || a5.isXAxis || t2 && !t2.isDirty || a5.series.forEach(function(b3) {
                    var a6 = b3.getProcessedData(true);
                    a6 = b3.getExtremes(a6.yData, true);
                    t2 || (t2 = {
                      startMin: Number.MAX_VALUE,
                      startMax: -Number.MAX_VALUE
                    });
                    ba(a6.dataMin) && ba(a6.dataMax) && (t2.startMin = Math.min(S(b3.options.threshold, Infinity), a6.dataMin, t2.startMin), t2.startMax = Math.max(S(b3.options.threshold, -Infinity), a6.dataMax, t2.startMax));
                  });
                  l2 = Math.min(S(t2 && t2.startMin, m2.dataMin), n2 ? m2.min : a5.toValue(a5.toPixels(m2.min) - a5.minPixelPadding));
                  p2 = Math.max(S(t2 && t2.startMax, m2.dataMax), n2 ? m2.max : a5.toValue(a5.toPixels(m2.max) + a5.minPixelPadding));
                  a5.panningState = t2;
                  a5.isOrdinal || (n2 = l2 - h2, 0 < n2 && (q2 += n2, h2 = l2), n2 = q2 - p2, 0 < n2 && (q2 = p2, h2 -= n2), a5.series.length && h2 !== m2.min && q2 !== m2.max && h2 >= l2 && q2 <= p2 && (a5.setExtremes(h2, q2, false, false, { trigger: "pan" }), !c2.resetZoomButton && h2 !== l2 && q2 !== p2 && e2.match("y") && (c2.showResetZoom(), a5.displayBtn = false), g2 = true), f3[d3] = k2);
                }
              });
              O(f3, (b3, a5) => {
                c2[a5] = b3;
              });
              g2 && c2.redraw(false);
              P(c2.container, { cursor: "move" });
            });
          }
        }
        V(ea.prototype, {
          callbacks: [],
          collectionsWithInit: { xAxis: [ea.prototype.addAxis, [true]], yAxis: [ea.prototype.addAxis, [false]], series: [ea.prototype.addSeries] },
          collectionsWithUpdate: ["xAxis", "yAxis", "series"],
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        });
        "";
        return ea;
      });
      M(
        a,
        "Extensions/ScrollablePlotArea.js",
        [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/Series/Series.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Utilities.js"]],
        function(a2, y, I, L, C, z) {
          const { stop: x } = a2, { addEvent: B, createElement: u, defined: v, merge: l, pick: p } = z;
          B(I, "afterSetChartSize", function(a3) {
            var m = this.options.chart.scrollablePlotArea, h = m && m.minWidth;
            m = m && m.minHeight;
            let g;
            if (!this.renderer.forExport) {
              if (h) {
                if (this.scrollablePixelsX = h = Math.max(0, h - this.chartWidth))
                  this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox), this.plotBox.width = this.plotWidth += h, this.inverted ? this.clipBox.height += h : this.clipBox.width += h, g = { 1: { name: "right", value: h } };
              } else
                m && (this.scrollablePixelsY = h = Math.max(0, m - this.chartHeight), v(h) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox), this.plotBox.height = this.plotHeight += h, this.inverted ? this.clipBox.width += h : this.clipBox.height += h, g = { 2: { name: "bottom", value: h } }));
              g && !a3.skipAxes && this.axes.forEach(function(a4) {
                g[a4.side] ? a4.getPlotLinePath = function() {
                  let e = g[a4.side].name, h2 = this[e], l2;
                  this[e] = h2 - g[a4.side].value;
                  l2 = y.prototype.getPlotLinePath.apply(this, arguments);
                  this[e] = h2;
                  return l2;
                } : (a4.setAxisSize(), a4.setAxisTranslation());
              });
            }
          });
          B(I, "render", function() {
            this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
          });
          I.prototype.setUpScrolling = function() {
            const a3 = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
            this.scrollablePixelsX && (a3.overflowX = "auto");
            this.scrollablePixelsY && (a3.overflowY = "auto");
            this.scrollingParent = u("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo);
            this.scrollingContainer = u("div", { className: "highcharts-scrolling" }, a3, this.scrollingParent);
            let l2;
            B(this.scrollingContainer, "scroll", () => {
              this.pointer && (delete this.pointer.chartPosition, this.hoverPoint && (l2 = this.hoverPoint), this.pointer.runPointActions(void 0, l2, true));
            });
            this.innerContainer = u("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
            this.innerContainer.appendChild(this.container);
            this.setUpScrolling = null;
          };
          I.prototype.moveFixedElements = function() {
            let a3 = this.container, l2 = this.fixedRenderer, h = ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), g;
            this.scrollablePixelsX && !this.inverted ? g = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (g = ".highcharts-yaxis");
            g && h.push(`${g}:not(.highcharts-radial-axis)`, `${g}-labels:not(.highcharts-radial-axis-labels)`);
            h.forEach(function(e) {
              [].forEach.call(a3.querySelectorAll(e), function(a4) {
                (a4.namespaceURI === l2.SVG_NS ? l2.box : l2.box.parentNode).appendChild(a4);
                a4.style.pointerEvents = "auto";
              });
            });
          };
          I.prototype.applyFixed = function() {
            var a3 = !this.fixedDiv, l2 = this.options.chart, h = l2.scrollablePlotArea, g = C.getRendererType();
            a3 ? (this.fixedDiv = u("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (l2.style && l2.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = l2 = new g(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = l2.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": p(
              h.opacity,
              0.85
            ), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), B(this, "afterShowResetZoom", this.moveFixedElements), B(this, "afterApplyDrilldown", this.moveFixedElements), B(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
            if (this.scrollableDirty || a3)
              this.scrollableDirty = false, this.moveFixedElements();
            l2 = this.chartWidth + (this.scrollablePixelsX || 0);
            g = this.chartHeight + (this.scrollablePixelsY || 0);
            x(this.container);
            this.container.style.width = l2 + "px";
            this.container.style.height = g + "px";
            this.renderer.boxWrapper.attr({ width: l2, height: g, viewBox: [0, 0, l2, g].join(" ") });
            this.chartBackground.attr({ width: l2, height: g });
            this.scrollingContainer.style.height = this.chartHeight + "px";
            a3 && (h.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * h.scrollPositionX), h.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * h.scrollPositionY));
            g = this.axisOffset;
            a3 = this.plotTop - g[0] - 1;
            h = this.plotLeft - g[3] - 1;
            l2 = this.plotTop + this.plotHeight + g[2] + 1;
            g = this.plotLeft + this.plotWidth + g[1] + 1;
            let e = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), w = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
            a3 = this.scrollablePixelsX ? [["M", 0, a3], ["L", this.plotLeft - 1, a3], ["L", this.plotLeft - 1, l2], ["L", 0, l2], ["Z"], ["M", e, a3], ["L", this.chartWidth, a3], ["L", this.chartWidth, l2], ["L", e, l2], ["Z"]] : this.scrollablePixelsY ? [["M", h, 0], ["L", h, this.plotTop - 1], ["L", g, this.plotTop - 1], ["L", g, 0], ["Z"], ["M", h, w], ["L", h, this.chartHeight], ["L", g, this.chartHeight], [
              "L",
              g,
              w
            ], ["Z"]] : [["M", 0, 0]];
            "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a3 });
          };
          B(y, "afterInit", function() {
            this.chart.scrollableDirty = true;
          });
          B(L, "show", function() {
            this.chart.scrollableDirty = true;
          });
          "";
        }
      );
      M(a, "Core/Axis/Stacking/StackItem.js", [a["Core/Templating.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { format: x } = a2, { series: C } = y, { destroyObjectProperties: z, fireEvent: H, isNumber: B, pick: u } = I;
        class v {
          constructor(a3, p, t, m, h) {
            const g = a3.chart.inverted, e = a3.reversed;
            this.axis = a3;
            a3 = this.isNegative = !!t !== !!e;
            this.options = p = p || {};
            this.x = m;
            this.cumulative = this.total = null;
            this.points = {};
            this.hasValidPoints = false;
            this.stack = h;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = { align: p.align || (g ? a3 ? "left" : "right" : "center"), verticalAlign: p.verticalAlign || (g ? "middle" : a3 ? "bottom" : "top"), y: p.y, x: p.x };
            this.textAlign = p.textAlign || (g ? a3 ? "right" : "left" : "center");
          }
          destroy() {
            z(this, this.axis);
          }
          render(a3) {
            const l = this.axis.chart, t = this.options;
            var m = t.format;
            m = m ? x(m, this, l) : t.formatter.call(this);
            this.label ? this.label.attr({ text: m, visibility: "hidden" }) : (this.label = l.renderer.label(m, null, void 0, t.shape, void 0, void 0, t.useHTML, false, "stack-labels"), m = { r: t.borderRadius || 0, text: m, padding: u(t.padding, 5), visibility: "hidden" }, l.styledMode || (m.fill = t.backgroundColor, m.stroke = t.borderColor, m["stroke-width"] = t.borderWidth, this.label.css(t.style || {})), this.label.attr(m), this.label.added || this.label.add(a3));
            this.label.labelrank = l.plotSizeY;
            H(this, "afterRender");
          }
          setOffset(a3, p, t, m, h, g) {
            const {
              alignOptions: e,
              axis: l,
              label: v2,
              options: x2,
              textAlign: d
            } = this, k = l.chart;
            t = this.getStackBox({ xOffset: a3, width: p, boxBottom: t, boxTop: m, defaultX: h, xAxis: g });
            var { verticalAlign: r } = e;
            if (v2 && t) {
              m = v2.getBBox();
              h = v2.padding;
              g = "justify" === u(x2.overflow, "justify");
              e.x = x2.x || 0;
              e.y = x2.y || 0;
              const { x: a4, y: p2 } = this.adjustStackPosition({ labelBox: m, verticalAlign: r, textAlign: d });
              t.x -= a4;
              t.y -= p2;
              v2.align(e, false, t);
              (r = k.isInsidePlot(v2.alignAttr.x + e.x + a4, v2.alignAttr.y + e.y + p2)) || (g = false);
              g && C.prototype.justifyDataLabel.call(l, v2, e, v2.alignAttr, m, t);
              v2.attr({
                x: v2.alignAttr.x,
                y: v2.alignAttr.y,
                rotation: x2.rotation,
                rotationOriginX: m.width / 2,
                rotationOriginY: m.height / 2
              });
              u(!g && x2.crop, true) && (r = B(v2.x) && B(v2.y) && k.isInsidePlot(v2.x - h + v2.width, v2.y) && k.isInsidePlot(v2.x + h, v2.y));
              v2[r ? "show" : "hide"]();
            }
            H(this, "afterSetOffset", { xOffset: a3, width: p });
          }
          adjustStackPosition({ labelBox: a3, verticalAlign: p, textAlign: t }) {
            const l = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 };
            return { x: a3.width / 2 + a3.width / 2 * l[t], y: a3.height / 2 * l[p] };
          }
          getStackBox(a3) {
            var l = this.axis;
            const t = l.chart, {
              boxTop: m,
              defaultX: h,
              xOffset: g,
              width: e,
              boxBottom: w
            } = a3;
            var v2 = l.stacking.usePercentage ? 100 : u(m, this.total, 0);
            v2 = l.toPixels(v2);
            a3 = a3.xAxis || t.xAxis[0];
            const x2 = u(h, a3.translate(this.x)) + g;
            l = l.toPixels(w || B(l.min) && l.logarithmic && l.logarithmic.lin2log(l.min) || 0);
            l = Math.abs(v2 - l);
            const d = this.isNegative;
            return t.inverted ? { x: (d ? v2 : v2 - l) - t.plotLeft, y: a3.height - x2 - e, width: l, height: e } : { x: x2 + a3.transB - t.plotLeft, y: (d ? v2 - l : v2) - t.plotTop, width: e, height: l };
          }
        }
        "";
        return v;
      });
      M(a, "Core/Axis/Stacking/StackingAxis.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Axis/Stacking/StackItem.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C) {
        function x() {
          const b2 = this, a3 = b2.inverted;
          b2.yAxis.forEach((b3) => {
            b3.stacking && b3.stacking.stacks && b3.hasVisibleSeries && (b3.stacking.oldStacks = b3.stacking.stacks);
          });
          b2.series.forEach((c) => {
            const d2 = c.xAxis && c.xAxis.options || {};
            !c.options.stacking || true !== c.visible && false !== b2.options.chart.ignoreHiddenSeries || (c.stackKey = [c.type, q(c.options.stack, ""), a3 ? d2.top : d2.left, a3 ? d2.height : d2.width].join());
          });
        }
        function H() {
          const b2 = this.stacking;
          if (b2) {
            var a3 = b2.stacks;
            r(a3, function(b3, c) {
              E(b3);
              a3[c] = null;
            });
            b2 && b2.stackTotalGroup && b2.stackTotalGroup.destroy();
          }
        }
        function B() {
          "yAxis" !== this.coll || this.stacking || (this.stacking = new G(this));
        }
        function u(b2, a3, d2, e2) {
          !w(b2) || b2.x !== a3 || e2 && b2.stackKey !== e2 ? b2 = { x: a3, index: 0, key: e2, stackKey: e2 } : b2.index++;
          b2.key = [d2, a3, b2.index].join();
          return b2;
        }
        function v() {
          const b2 = this, a3 = b2.stackKey, d2 = b2.yAxis.stacking.stacks, e2 = b2.processedXData, g2 = b2[b2.options.stacking + "Stacker"];
          let k2;
          g2 && [a3, "-" + a3].forEach((a4) => {
            let c = e2.length;
            let f;
            for (; c--; ) {
              var h2 = e2[c];
              k2 = b2.getStackIndicator(k2, h2, b2.index, a4);
              (f = (h2 = d2[a4] && d2[a4][h2]) && h2.points[k2.key]) && g2.call(b2, f, h2, c);
            }
          });
        }
        function l(b2, a3, d2) {
          a3 = a3.total ? 100 / a3.total : 0;
          b2[0] = e(b2[0] * a3);
          b2[1] = e(b2[1] * a3);
          this.stackedYData[d2] = b2[1];
        }
        function p() {
          const b2 = this.yAxis.stacking;
          this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? h.setStackedPoints.call(this, "group") : b2 && r(b2.stacks, (a3, d2) => {
            "group" === d2.slice(-5) && (r(a3, (b3) => b3.destroy()), delete b2.stacks[d2]);
          });
        }
        function t(b2) {
          var a3 = this.chart;
          const f = b2 || this.options.stacking;
          if (f && (true === this.visible || false === a3.options.chart.ignoreHiddenSeries)) {
            var g2 = this.processedXData, k2 = this.processedYData, h2 = [], l2 = k2.length, m2 = this.options, p2 = m2.threshold, r2 = q(m2.startFromThreshold && p2, 0);
            m2 = m2.stack;
            b2 = b2 ? `${this.type},${f}` : this.stackKey;
            var t2 = "-" + b2, v2 = this.negStacks;
            a3 = "group" === f ? a3.yAxis[0] : this.yAxis;
            var u2 = a3.stacking.stacks, x2 = a3.stacking.oldStacks, E2, G2;
            a3.stacking.stacksTouched += 1;
            for (G2 = 0; G2 < l2; G2++) {
              var F2 = g2[G2];
              var B2 = k2[G2];
              var y2 = this.getStackIndicator(y2, F2, this.index);
              var C2 = y2.key;
              var z = (E2 = v2 && B2 < (r2 ? 0 : p2)) ? t2 : b2;
              u2[z] || (u2[z] = {});
              u2[z][F2] || (x2[z] && x2[z][F2] ? (u2[z][F2] = x2[z][F2], u2[z][F2].total = null) : u2[z][F2] = new L(a3, a3.options.stackLabels, !!E2, F2, m2));
              z = u2[z][F2];
              null !== B2 ? (z.points[C2] = z.points[this.index] = [q(z.cumulative, r2)], w(z.cumulative) || (z.base = C2), z.touched = a3.stacking.stacksTouched, 0 < y2.index && false === this.singleStacks && (z.points[C2][0] = z.points[this.index + "," + F2 + ",0"][0])) : z.points[C2] = z.points[this.index] = null;
              "percent" === f ? (E2 = E2 ? b2 : t2, v2 && u2[E2] && u2[E2][F2] ? (E2 = u2[E2][F2], z.total = E2.total = Math.max(E2.total, z.total) + Math.abs(B2) || 0) : z.total = e(z.total + (Math.abs(B2) || 0))) : "group" === f ? (d(B2) && (B2 = B2[0]), null !== B2 && (z.total = (z.total || 0) + 1)) : z.total = e(z.total + (B2 || 0));
              z.cumulative = "group" === f ? (z.total || 1) - 1 : e(q(z.cumulative, r2) + (B2 || 0));
              null !== B2 && (z.points[C2].push(z.cumulative), h2[G2] = z.cumulative, z.hasValidPoints = true);
            }
            "percent" === f && (a3.stacking.usePercentage = true);
            "group" !== f && (this.stackedYData = h2);
            a3.stacking.oldStacks = {};
          }
        }
        const { getDeferredAnimation: m } = a2, { series: { prototype: h } } = I, { addEvent: g, correctFloat: e, defined: w, destroyObjectProperties: E, fireEvent: F, isArray: d, isNumber: k, objectEach: r, pick: q } = C;
        class G {
          constructor(b2) {
            this.oldStacks = {};
            this.stacks = {};
            this.stacksTouched = 0;
            this.axis = b2;
          }
          buildStacks() {
            const b2 = this.axis, a3 = b2.series, d2 = b2.options.reversedStacks, e2 = a3.length;
            let g2, k2;
            this.usePercentage = false;
            for (k2 = e2; k2--; )
              g2 = a3[d2 ? k2 : e2 - k2 - 1], g2.setStackedPoints(), g2.setGroupedPoints();
            for (k2 = 0; k2 < e2; k2++)
              a3[k2].modifyStacks();
            F(b2, "afterBuildStacks");
          }
          cleanStacks() {
            let b2;
            this.oldStacks && (b2 = this.stacks = this.oldStacks);
            r(b2, function(b3) {
              r(b3, function(b4) {
                b4.cumulative = b4.total;
              });
            });
          }
          resetStacks() {
            r(this.stacks, (b2) => {
              r(b2, (a3, d2) => {
                k(a3.touched) && a3.touched < this.stacksTouched ? (a3.destroy(), delete b2[d2]) : (a3.total = null, a3.cumulative = null);
              });
            });
          }
          renderStackTotals() {
            var b2 = this.axis;
            const a3 = b2.chart, d2 = a3.renderer, e2 = this.stacks;
            b2 = m(a3, b2.options.stackLabels && b2.options.stackLabels.animation || false);
            const g2 = this.stackTotalGroup = this.stackTotalGroup || d2.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
            g2.translate(a3.plotLeft, a3.plotTop);
            r(e2, function(b3) {
              r(b3, function(b4) {
                b4.render(g2);
              });
            });
            g2.animate({ opacity: 1 }, b2);
          }
        }
        var b;
        (function(b2) {
          const a3 = [];
          b2.compose = function(b3, c, d2) {
            C.pushUnique(a3, b3) && (g(b3, "init", B), g(b3, "destroy", H));
            C.pushUnique(a3, c) && (c.prototype.getStacks = x);
            C.pushUnique(a3, d2) && (b3 = d2.prototype, b3.getStackIndicator = u, b3.modifyStacks = v, b3.percentStacker = l, b3.setGroupedPoints = p, b3.setStackedPoints = t);
          };
        })(b || (b = {}));
        return b;
      });
      M(
        a,
        "Series/Line/LineSeries.js",
        [a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]],
        function(a2, y, I) {
          const { defined: x, merge: C } = I;
          class z extends a2 {
            constructor() {
              super(...arguments);
              this.points = this.options = this.data = void 0;
            }
            drawGraph() {
              const a3 = this, x2 = this.options, u = (this.gappedPath || this.getGraphPath).call(this), v = this.chart.styledMode;
              let l = [["graph", "highcharts-graph"]];
              v || l[0].push(x2.lineColor || this.color || "#cccccc", x2.dashStyle);
              l = a3.getZonesGraphs(l);
              l.forEach(function(l2, t) {
                var m = l2[0];
                let h = a3[m];
                const g = h ? "animate" : "attr";
                h ? (h.endX = a3.preventGraphAnimation ? null : u.xMap, h.animate({ d: u })) : u.length && (a3[m] = h = a3.chart.renderer.path(u).addClass(l2[1]).attr({ zIndex: 1 }).add(a3.group));
                h && !v && (m = { stroke: l2[2], "stroke-width": x2.lineWidth || 0, fill: a3.fillGraph && a3.color || "none" }, l2[3] ? m.dashstyle = l2[3] : "square" !== x2.linecap && (m["stroke-linecap"] = m["stroke-linejoin"] = "round"), h[g](m).shadow(2 > t && x2.shadow));
                h && (h.startX = u.xMap, h.isArea = u.isArea);
              });
            }
            getGraphPath(a3, B, u) {
              const v = this, l = v.options, p = [], t = [];
              let m, h = l.step;
              a3 = a3 || v.points;
              const g = a3.reversed;
              g && a3.reverse();
              (h = { right: 1, center: 2 }[h] || h && 3) && g && (h = 4 - h);
              a3 = this.getValidPoints(a3, false, !(l.connectNulls && !B && !u));
              a3.forEach(function(e, g2) {
                const w = e.plotX, F = e.plotY, d = a3[g2 - 1], k = e.isNull || "number" !== typeof F;
                (e.leftCliff || d && d.rightCliff) && !u && (m = true);
                k && !x(B) && 0 < g2 ? m = !l.connectNulls : k && !B ? m = true : (0 === g2 || m ? g2 = [["M", e.plotX, e.plotY]] : v.getPointSpline ? g2 = [v.getPointSpline(a3, e, g2)] : h ? (g2 = 1 === h ? [["L", d.plotX, F]] : 2 === h ? [["L", (d.plotX + w) / 2, d.plotY], ["L", (d.plotX + w) / 2, F]] : [["L", w, d.plotY]], g2.push(["L", w, F])) : g2 = [["L", w, F]], t.push(e.x), h && (t.push(e.x), 2 === h && t.push(e.x)), p.push.apply(p, g2), m = false);
              });
              p.xMap = t;
              return v.graphPath = p;
            }
            getZonesGraphs(a3) {
              this.zones.forEach(function(x2, u) {
                u = ["zone-graph-" + u, "highcharts-graph highcharts-zone-graph-" + u + " " + (x2.className || "")];
                this.chart.styledMode || u.push(x2.color || this.color, x2.dashStyle || this.options.dashStyle);
                a3.push(u);
              }, this);
              return a3;
            }
          }
          z.defaultOptions = C(a2.defaultOptions, { legendSymbol: "lineMarker" });
          y.registerSeriesType("line", z);
          "";
          return z;
        }
      );
      M(a, "Series/Area/AreaSeries.js", [
        a["Core/Color/Color.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I) {
        const { seriesTypes: { line: x } } = y, { extend: C, merge: z, objectEach: H, pick: B } = I;
        class u extends x {
          constructor() {
            super(...arguments);
            this.points = this.options = this.data = void 0;
          }
          drawGraph() {
            this.areaPath = [];
            super.drawGraph.apply(this);
            const a3 = this, l = this.areaPath, p = this.options, t = [["area", "highcharts-area", this.color, p.fillColor]];
            this.zones.forEach(function(l2, h) {
              t.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + l2.className, l2.color || a3.color, l2.fillColor || p.fillColor]);
            });
            t.forEach(function(m) {
              const h = m[0], g = {};
              let e = a3[h];
              const t2 = e ? "animate" : "attr";
              e ? (e.endX = a3.preventGraphAnimation ? null : l.xMap, e.animate({ d: l })) : (g.zIndex = 0, e = a3[h] = a3.chart.renderer.path(l).addClass(m[1]).add(a3.group), e.isArea = true);
              a3.chart.styledMode || (m[3] ? g.fill = m[3] : (g.fill = m[2], g["fill-opacity"] = B(p.fillOpacity, 0.75)));
              e[t2](g);
              e.startX = l.xMap;
              e.shiftUnit = p.step ? 2 : 1;
            });
          }
          getGraphPath(a3) {
            var l = x.prototype.getGraphPath, p = this.options;
            const t = p.stacking, m = this.yAxis, h = [], g = [], e = this.index, w = m.stacking.stacks[this.stackKey], v = p.threshold, u2 = Math.round(m.getThreshold(p.threshold));
            p = B(p.connectNulls, "percent" === t);
            var d = function(d2, b, f) {
              var c = a3[d2];
              d2 = t && w[c.x].points[e];
              const n = c[f + "Null"] || 0;
              f = c[f + "Cliff"] || 0;
              let l2, q2;
              c = true;
              f || n ? (l2 = (n ? d2[0] : d2[1]) + f, q2 = d2[0] + f, c = !!n) : !t && a3[b] && a3[b].isNull && (l2 = q2 = v);
              "undefined" !== typeof l2 && (g.push({ plotX: k, plotY: null === l2 ? u2 : m.getThreshold(l2), isNull: c, isCliff: true }), h.push({ plotX: k, plotY: null === q2 ? u2 : m.getThreshold(q2), doCurve: false }));
            };
            let k;
            a3 = a3 || this.points;
            t && (a3 = this.getStackPoints(a3));
            for (let e2 = 0, b = a3.length; e2 < b; ++e2) {
              t || (a3[e2].leftCliff = a3[e2].rightCliff = a3[e2].leftNull = a3[e2].rightNull = void 0);
              var r = a3[e2].isNull;
              k = B(a3[e2].rectPlotX, a3[e2].plotX);
              var q = t ? B(a3[e2].yBottom, u2) : u2;
              if (!r || p)
                p || d(e2, e2 - 1, "left"), r && !t && p || (g.push(a3[e2]), h.push({ x: e2, plotX: k, plotY: q })), p || d(e2, e2 + 1, "right");
            }
            d = l.call(this, g, true, true);
            h.reversed = true;
            r = l.call(this, h, true, true);
            (q = r[0]) && "M" === q[0] && (r[0] = ["L", q[1], q[2]]);
            r = d.concat(r);
            r.length && r.push(["Z"]);
            l = l.call(this, g, false, p);
            r.xMap = d.xMap;
            this.areaPath = r;
            return l;
          }
          getStackPoints(a3) {
            const l = this, p = [], t = [], m = this.xAxis, h = this.yAxis, g = h.stacking.stacks[this.stackKey], e = {}, w = h.series, v = w.length, u2 = h.options.reversedStacks ? 1 : -1, d = w.indexOf(l);
            a3 = a3 || this.points;
            if (this.options.stacking) {
              for (let d2 = 0; d2 < a3.length; d2++)
                a3[d2].leftNull = a3[d2].rightNull = void 0, e[a3[d2].x] = a3[d2];
              H(g, function(a4, d2) {
                null !== a4.total && t.push(d2);
              });
              t.sort(function(a4, d2) {
                return a4 - d2;
              });
              const k = w.map((a4) => a4.visible);
              t.forEach(function(a4, q) {
                let r = 0, b, f;
                if (e[a4] && !e[a4].isNull)
                  p.push(e[a4]), [-1, 1].forEach(function(c) {
                    const h2 = 1 === c ? "rightNull" : "leftNull", m2 = g[t[q + c]];
                    let p2 = 0;
                    if (m2) {
                      let c2 = d;
                      for (; 0 <= c2 && c2 < v; ) {
                        const d2 = w[c2].index;
                        b = m2.points[d2];
                        b || (d2 === l.index ? e[a4][h2] = true : k[c2] && (f = g[a4].points[d2]) && (p2 -= f[1] - f[0]));
                        c2 += u2;
                      }
                    }
                    e[a4][1 === c ? "rightCliff" : "leftCliff"] = p2;
                  });
                else {
                  let c = d;
                  for (; 0 <= c && c < v; ) {
                    if (b = g[a4].points[w[c].index]) {
                      r = b[1];
                      break;
                    }
                    c += u2;
                  }
                  r = B(r, 0);
                  r = h.translate(r, 0, 1, 0, 1);
                  p.push({ isNull: true, plotX: m.translate(a4, 0, 0, 0, 1), x: a4, plotY: r, yBottom: r });
                }
              });
            }
            return p;
          }
        }
        u.defaultOptions = z(x.defaultOptions, { threshold: 0, legendSymbol: "rectangle" });
        C(u.prototype, { singleStacks: false });
        y.registerSeriesType("area", u);
        "";
        return u;
      });
      M(a, "Series/Spline/SplineSeries.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y) {
        const { line: x } = a2.seriesTypes, { merge: L, pick: C } = y;
        class z extends x {
          constructor() {
            super(...arguments);
            this.points = this.options = this.data = void 0;
          }
          getPointSpline(a3, x2, u) {
            const v = x2.plotX || 0, l = x2.plotY || 0, p = a3[u - 1];
            u = a3[u + 1];
            let t, m;
            let h;
            if (p && !p.isNull && false !== p.doCurve && !x2.isCliff && u && !u.isNull && false !== u.doCurve && !x2.isCliff) {
              a3 = p.plotY || 0;
              var g = u.plotX || 0;
              u = u.plotY || 0;
              let e = 0;
              t = (1.5 * v + (p.plotX || 0)) / 2.5;
              m = (1.5 * l + a3) / 2.5;
              g = (1.5 * v + g) / 2.5;
              h = (1.5 * l + u) / 2.5;
              g !== t && (e = (h - m) * (g - v) / (g - t) + l - h);
              m += e;
              h += e;
              m > a3 && m > l ? (m = Math.max(a3, l), h = 2 * l - m) : m < a3 && m < l && (m = Math.min(a3, l), h = 2 * l - m);
              h > u && h > l ? (h = Math.max(u, l), m = 2 * l - h) : h < u && h < l && (h = Math.min(u, l), m = 2 * l - h);
              x2.rightContX = g;
              x2.rightContY = h;
            }
            x2 = ["C", C(p.rightContX, p.plotX, 0), C(p.rightContY, p.plotY, 0), C(t, v, 0), C(m, l, 0), v, l];
            p.rightContX = p.rightContY = void 0;
            return x2;
          }
        }
        z.defaultOptions = L(x.defaultOptions);
        a2.registerSeriesType(
          "spline",
          z
        );
        "";
        return z;
      });
      M(a, "Series/AreaSpline/AreaSplineSeries.js", [a["Series/Spline/SplineSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { area: x, area: { prototype: C } } = y.seriesTypes, { extend: z, merge: H } = I;
        class B extends a2 {
          constructor() {
            super(...arguments);
            this.options = this.points = this.data = void 0;
          }
        }
        B.defaultOptions = H(a2.defaultOptions, x.defaultOptions);
        z(B.prototype, { getGraphPath: C.getGraphPath, getStackPoints: C.getStackPoints, drawGraph: C.drawGraph });
        y.registerSeriesType(
          "areaspline",
          B
        );
        "";
        return B;
      });
      M(a, "Series/Column/ColumnSeriesDefaults.js", [], function() {
        "";
        return { borderRadius: 3, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
      });
      M(a, "Series/Column/ColumnSeries.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Color/Color.js"],
        a["Series/Column/ColumnSeriesDefaults.js"],
        a["Core/Globals.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, I, L, C, z, H) {
        const { animObject: x } = a2, { parse: u } = y, { hasTouch: v, noop: l } = L, { clamp: p, defined: t, extend: m, fireEvent: h, isArray: g, isNumber: e, merge: w, pick: E, objectEach: F } = H;
        class d extends C {
          constructor() {
            super(...arguments);
            this.points = this.options = this.group = this.data = this.borderWidth = void 0;
          }
          animate(a3) {
            const d2 = this, e2 = this.yAxis, g2 = e2.pos, b = d2.options, f = this.chart.inverted, c = {}, k = f ? "translateX" : "translateY";
            let h2;
            a3 ? (c.scaleY = 1e-3, a3 = p(e2.toPixels(b.threshold), g2, g2 + e2.len), f ? c.translateX = a3 - e2.len : c.translateY = a3, d2.clipBox && d2.setClip(), d2.group.attr(c)) : (h2 = Number(d2.group.attr(k)), d2.group.animate({ scaleY: 1 }, m(x(d2.options.animation), { step: function(b2, a4) {
              d2.group && (c[k] = h2 + a4.pos * (g2 - h2), d2.group.attr(c));
            } })));
          }
          init(a3, d2) {
            super.init.apply(this, arguments);
            const e2 = this;
            a3 = e2.chart;
            a3.hasRendered && a3.series.forEach(function(a4) {
              a4.type === e2.type && (a4.isDirty = true);
            });
          }
          getColumnMetrics() {
            const a3 = this;
            var d2 = a3.options;
            const e2 = a3.xAxis, g2 = a3.yAxis;
            var b = e2.options.reversedStacks;
            b = e2.reversed && !b || !e2.reversed && b;
            const f = {};
            let c, h2 = 0;
            false === d2.grouping ? h2 = 1 : a3.chart.series.forEach(function(b2) {
              const d3 = b2.yAxis, e3 = b2.options;
              let k;
              b2.type !== a3.type || !b2.visible && a3.chart.options.chart.ignoreHiddenSeries || g2.len !== d3.len || g2.pos !== d3.pos || (e3.stacking && "group" !== e3.stacking ? (c = b2.stackKey, "undefined" === typeof f[c] && (f[c] = h2++), k = f[c]) : false !== e3.grouping && (k = h2++), b2.columnIndex = k);
            });
            const l2 = Math.min(Math.abs(e2.transA) * (e2.ordinal && e2.ordinal.slope || d2.pointRange || e2.closestPointRange || e2.tickInterval || 1), e2.len), m2 = l2 * d2.groupPadding, p2 = (l2 - 2 * m2) / (h2 || 1);
            d2 = Math.min(d2.maxPointWidth || e2.len, E(d2.pointWidth, p2 * (1 - 2 * d2.pointPadding)));
            a3.columnMetrics = { width: d2, offset: (p2 - d2) / 2 + (m2 + ((a3.columnIndex || 0) + (b ? 1 : 0)) * p2 - l2 / 2) * (b ? -1 : 1), paddedWidth: p2, columnCount: h2 };
            return a3.columnMetrics;
          }
          crispCol(a3, d2, e2, g2) {
            var b = this.borderWidth, f = -(b % 2 ? 0.5 : 0);
            b = b % 2 ? 0.5 : 1;
            this.options.crisp && (e2 = Math.round(a3 + e2) + f, a3 = Math.round(a3) + f, e2 -= a3);
            g2 = Math.round(d2 + g2) + b;
            f = 0.5 >= Math.abs(d2) && 0.5 < g2;
            d2 = Math.round(d2) + b;
            g2 -= d2;
            f && g2 && (--d2, g2 += 1);
            return { x: a3, y: d2, width: e2, height: g2 };
          }
          adjustForMissingColumns(a3, d2, e2, h2) {
            const b = this.options.stacking;
            if (!e2.isNull && 1 < h2.columnCount) {
              const f = this.yAxis.options.reversedStacks;
              let c = 0, k = f ? 0 : -h2.columnCount;
              F(this.yAxis.stacking && this.yAxis.stacking.stacks, (a4) => {
                if ("number" === typeof e2.x) {
                  const d3 = a4[e2.x.toString()];
                  d3 && (a4 = d3.points[this.index], b ? (a4 && (c = k), d3.hasValidPoints && (f ? k++ : k--)) : g(a4) && (a4 = Object.keys(d3.points).filter((b2) => !b2.match(",") && d3.points[b2] && 1 < d3.points[b2].length).map(parseFloat).sort((b2, a5) => a5 - b2), c = a4.indexOf(this.index), k = a4.length));
                }
              });
              a3 = (e2.plotX || 0) + ((k - 1) * h2.paddedWidth + d2) / 2 - d2 - c * h2.paddedWidth;
            }
            return a3;
          }
          translate() {
            const a3 = this, d2 = a3.chart, g2 = a3.options;
            var l2 = a3.dense = 2 > a3.closestPointRange * a3.xAxis.transA;
            l2 = a3.borderWidth = E(g2.borderWidth, l2 ? 0 : 1);
            const b = a3.xAxis, f = a3.yAxis, c = g2.threshold, n = E(g2.minPointLength, 5), m2 = a3.getColumnMetrics(), w2 = m2.width, v2 = a3.pointXOffset = m2.offset, u2 = a3.dataMin, x2 = a3.dataMax;
            let F2 = a3.barW = Math.max(w2, 1 + 2 * l2), y2 = a3.translatedThreshold = f.getThreshold(c);
            d2.inverted && (y2 -= 0.5);
            g2.pointPadding && (F2 = Math.ceil(F2));
            C.prototype.translate.apply(a3);
            a3.points.forEach(function(k) {
              const h2 = E(k.yBottom, y2);
              var l3 = 999 + Math.abs(h2), q = k.plotX || 0;
              l3 = p(k.plotY, -l3, f.len + l3);
              let r = Math.min(l3, h2), D = Math.max(l3, h2) - r, z2 = w2, B = q + v2, G = F2;
              n && Math.abs(D) < n && (D = n, q = !f.reversed && !k.negative || f.reversed && k.negative, e(c) && e(x2) && k.y === c && x2 <= c && (f.min || 0) < c && (u2 !== x2 || (f.max || 0) <= c) && (q = !q, k.negative = !k.negative), r = Math.abs(r - y2) > n ? h2 - n : y2 - (q ? n : 0));
              t(k.options.pointWidth) && (z2 = G = Math.ceil(k.options.pointWidth), B -= Math.round((z2 - w2) / 2));
              g2.centerInCategory && (B = a3.adjustForMissingColumns(B, z2, k, m2));
              k.barX = B;
              k.pointWidth = z2;
              k.tooltipPos = d2.inverted ? [p(f.len + f.pos - d2.plotLeft - l3, f.pos - d2.plotLeft, f.len + f.pos - d2.plotLeft), b.len + b.pos - d2.plotTop - B - G / 2, D] : [b.left - d2.plotLeft + B + G / 2, p(l3 + f.pos - d2.plotTop, f.pos - d2.plotTop, f.len + f.pos - d2.plotTop), D];
              k.shapeType = a3.pointClass.prototype.shapeType || "roundedRect";
              k.shapeArgs = a3.crispCol(B, k.isNull ? y2 : r, G, k.isNull ? 0 : D);
            });
            h(this, "afterColumnTranslate");
          }
          drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          }
          pointAttribs(a3, d2) {
            const e2 = this.options;
            var g2 = this.pointAttrToOptions || {}, b = g2.stroke || "borderColor";
            const f = g2["stroke-width"] || "borderWidth";
            let c, k = a3 && a3.color || this.color, h2 = a3 && a3[b] || e2[b] || k;
            g2 = a3 && a3.options.dashStyle || e2.dashStyle;
            let l2 = a3 && a3[f] || e2[f] || this[f] || 0, m2 = E(a3 && a3.opacity, e2.opacity, 1);
            a3 && this.zones.length && (c = a3.getZone(), k = a3.options.color || c && (c.color || a3.nonZonedColor) || this.color, c && (h2 = c.borderColor || h2, g2 = c.dashStyle || g2, l2 = c.borderWidth || l2));
            d2 && a3 && (a3 = w(
              e2.states[d2],
              a3.options.states && a3.options.states[d2] || {}
            ), d2 = a3.brightness, k = a3.color || "undefined" !== typeof d2 && u(k).brighten(a3.brightness).get() || k, h2 = a3[b] || h2, l2 = a3[f] || l2, g2 = a3.dashStyle || g2, m2 = E(a3.opacity, m2));
            b = { fill: k, stroke: h2, "stroke-width": l2, opacity: m2 };
            g2 && (b.dashstyle = g2);
            return b;
          }
          drawPoints(a3 = this.points) {
            const d2 = this, g2 = this.chart, k = d2.options, b = g2.renderer, f = k.animationLimit || 250;
            let c;
            a3.forEach(function(a4) {
              let h2 = a4.graphic, l2 = !!h2, n = h2 && g2.pointCount < f ? "animate" : "attr";
              if (e(a4.plotY) && null !== a4.y) {
                c = a4.shapeArgs;
                h2 && a4.hasNewShapeType() && (h2 = h2.destroy());
                d2.enabledDataSorting && (a4.startXPos = d2.xAxis.reversed ? -(c ? c.width || 0 : 0) : d2.xAxis.width);
                h2 || (a4.graphic = h2 = b[a4.shapeType](c).add(a4.group || d2.group)) && d2.enabledDataSorting && g2.hasRendered && g2.pointCount < f && (h2.attr({ x: a4.startXPos }), l2 = true, n = "animate");
                if (h2 && l2)
                  h2[n](w(c));
                g2.styledMode || h2[n](d2.pointAttribs(a4, a4.selected && "select")).shadow(false !== a4.allowShadow && k.shadow);
                h2 && (h2.addClass(a4.getClassName(), true), h2.attr({ visibility: a4.visible ? "inherit" : "hidden" }));
              } else
                h2 && (a4.graphic = h2.destroy());
            });
          }
          drawTracker(a3 = this.points) {
            const d2 = this, e2 = d2.chart, k = e2.pointer, b = function(a4) {
              const b2 = k.getPointFromEvent(a4);
              "undefined" !== typeof b2 && d2.options.enableMouseTracking && (k.isDirectTouch = true, b2.onMouseOver(a4));
            };
            let f;
            a3.forEach(function(a4) {
              f = g(a4.dataLabels) ? a4.dataLabels : a4.dataLabel ? [a4.dataLabel] : [];
              a4.graphic && (a4.graphic.element.point = a4);
              f.forEach(function(b2) {
                b2.div ? b2.div.point = a4 : b2.element.point = a4;
              });
            });
            d2._hasTracking || (d2.trackerGroups.forEach(function(a4) {
              if (d2[a4]) {
                d2[a4].addClass("highcharts-tracker").on("mouseover", b).on(
                  "mouseout",
                  function(a5) {
                    k.onTrackerMouseOut(a5);
                  }
                );
                if (v)
                  d2[a4].on("touchstart", b);
                !e2.styledMode && d2.options.cursor && d2[a4].css({ cursor: d2.options.cursor });
              }
            }), d2._hasTracking = true);
            h(this, "afterDrawTracker");
          }
          remove() {
            const a3 = this, d2 = a3.chart;
            d2.hasRendered && d2.series.forEach(function(d3) {
              d3.type === a3.type && (d3.isDirty = true);
            });
            C.prototype.remove.apply(a3, arguments);
          }
        }
        d.defaultOptions = w(C.defaultOptions, I);
        m(d.prototype, { cropShoulder: 0, directTouch: true, getSymbol: l, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] });
        z.registerSeriesType(
          "column",
          d
        );
        "";
        return d;
      });
      M(a, "Core/Series/DataLabel.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Templating.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { getDeferredAnimation: x } = a2, { format: C } = y, { defined: z, extend: H, fireEvent: B, isArray: u, isString: v, merge: l, objectEach: p, pick: t, splat: m } = I;
        var h;
        (function(a3) {
          function e(a4, d2, c, e2, g2) {
            const b = this.chart;
            var f = this.isCartesian && b.inverted;
            const k2 = this.enabledDataSorting;
            var h3 = a4.plotX, l2 = a4.plotY;
            const n = c.rotation;
            var m2 = c.align;
            l2 = z(h3) && z(l2) && b.isInsidePlot(
              h3,
              Math.round(l2),
              { inverted: f, paneCoordinates: true, series: this }
            );
            let p2 = "justify" === t(c.overflow, k2 ? "none" : "justify");
            f = this.visible && false !== a4.visible && z(h3) && (a4.series.forceDL || k2 && !p2 || l2 || t(c.inside, !!this.options.stacking) && e2 && b.isInsidePlot(h3, f ? e2.x + 1 : e2.y + e2.height - 1, { inverted: f, paneCoordinates: true, series: this }));
            h3 = a4.pos();
            if (f && h3) {
              n && d2.attr({ align: m2 });
              m2 = d2.getBBox(true);
              var q2 = [0, 0];
              var r2 = b.renderer.fontMetrics(d2).b;
              e2 = H({ x: h3[0], y: Math.round(h3[1]), width: 0, height: 0 }, e2);
              H(c, { width: m2.width, height: m2.height });
              n ? (p2 = false, q2 = b.renderer.rotCorr(r2, n), r2 = { x: e2.x + (c.x || 0) + e2.width / 2 + q2.x, y: e2.y + (c.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[c.verticalAlign] * e2.height }, q2 = [m2.x - Number(d2.attr("x")), m2.y - Number(d2.attr("y"))], k2 && this.xAxis && !p2 && this.setDataLabelStartPos(a4, d2, g2, l2, r2), d2[g2 ? "attr" : "animate"](r2)) : (k2 && this.xAxis && !p2 && this.setDataLabelStartPos(a4, d2, g2, l2, e2), d2.align(c, void 0, e2), r2 = d2.alignAttr);
              if (p2 && 0 <= e2.height)
                this.justifyDataLabel(d2, c, r2, m2, e2, g2);
              else if (t(c.crop, true)) {
                let { x: a5, y: c2 } = r2;
                a5 += q2[0];
                c2 += q2[1];
                f = b.isInsidePlot(a5, c2, {
                  paneCoordinates: true,
                  series: this
                }) && b.isInsidePlot(a5 + m2.width, c2 + m2.height, { paneCoordinates: true, series: this });
              }
              if (c.shape && !n)
                d2[g2 ? "attr" : "animate"]({ anchorX: h3[0], anchorY: h3[1] });
            }
            g2 && k2 && (d2.placed = false);
            f || k2 && !p2 ? d2.show() : (d2.hide(), d2.placed = false);
          }
          function g(a4, d2) {
            var b = d2.filter;
            return b ? (d2 = b.operator, a4 = a4[b.property], b = b.value, ">" === d2 && a4 > b || "<" === d2 && a4 < b || ">=" === d2 && a4 >= b || "<=" === d2 && a4 <= b || "==" === d2 && a4 == b || "===" === d2 && a4 === b ? true : false) : true;
          }
          function h2() {
            return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
          }
          function F(a4) {
            const b = this.hasRendered || 0, c = this.initDataLabelsGroup().attr({ opacity: +b });
            !b && c && (this.visible && c.show(), this.options.animation ? c.animate({ opacity: 1 }, a4) : c.attr({ opacity: 1 }));
            return c;
          }
          function d(a4 = this.points) {
            var b, c;
            const d2 = this, e2 = d2.chart, k2 = d2.options, h3 = e2.renderer, { backgroundColor: l2, plotBackgroundColor: q2 } = e2.options.chart, w = e2.options.plotOptions, E = h3.getContrast(v(q2) && q2 || v(l2) && l2 || "#000000");
            let F2 = k2.dataLabels, A, y3;
            var G = m(F2)[0];
            const H2 = G.animation;
            G = G.defer ? x(e2, H2, d2) : { defer: 0, duration: 0 };
            F2 = r(r(null === (b = null === w || void 0 === w ? void 0 : w.series) || void 0 === b ? void 0 : b.dataLabels, null === (c = null === w || void 0 === w ? void 0 : w[d2.type]) || void 0 === c ? void 0 : c.dataLabels), F2);
            B(this, "drawDataLabels");
            if (u(F2) || F2.enabled || d2._hasPointLabels)
              y3 = this.initDataLabels(G), a4.forEach((a5) => {
                var b2;
                const c2 = a5.dataLabels || [];
                A = m(r(F2, a5.dlOptions || (null === (b2 = a5.options) || void 0 === b2 ? void 0 : b2.dataLabels)));
                A.forEach((b3, f) => {
                  var l3, m2 = b3.enabled && (!a5.isNull || a5.dataLabelOnNull) && g(a5, b3);
                  const n = a5.connectors ? a5.connectors[f] : a5.connector, q3 = b3.style || {};
                  let r2 = {}, w2 = c2[f], u2 = !w2;
                  const x2 = t(b3.distance, a5.labelDistance);
                  if (m2) {
                    var A2 = t(b3[a5.formatPrefix + "Format"], b3.format);
                    var F3 = a5.getLabelConfig();
                    F3 = z(A2) ? C(A2, F3, e2) : (b3[a5.formatPrefix + "Formatter"] || b3.formatter).call(F3, b3);
                    A2 = b3.rotation;
                    e2.styledMode || (q3.color = t(b3.color, q3.color, v(d2.color) ? d2.color : void 0, "#000000"), "contrast" === q3.color ? (a5.contrastColor = h3.getContrast(a5.color || d2.color), q3.color = !z(x2) && b3.inside || 0 > (x2 || 0) || k2.stacking ? a5.contrastColor : E) : delete a5.contrastColor, k2.cursor && (q3.cursor = k2.cursor));
                    r2 = { r: b3.borderRadius || 0, rotation: A2, padding: b3.padding, zIndex: 1 };
                    if (!e2.styledMode) {
                      const { backgroundColor: c3, borderColor: d3 } = b3;
                      r2.fill = "auto" === c3 ? a5.color : c3;
                      r2.stroke = "auto" === d3 ? a5.color : d3;
                      r2["stroke-width"] = b3.borderWidth;
                    }
                    p(r2, (a6, b4) => {
                      "undefined" === typeof a6 && delete r2[b4];
                    });
                  }
                  !w2 || m2 && z(F3) && !!w2.div === !!b3.useHTML && (w2.rotation && b3.rotation || w2.rotation === b3.rotation) || (w2 = void 0, u2 = true, n && a5.connector && (a5.connector = a5.connector.destroy(), a5.connectors && (1 === a5.connectors.length ? delete a5.connectors : delete a5.connectors[f])));
                  m2 && z(F3) && (w2 ? r2.text = F3 : (w2 = A2 ? h3.text(F3, 0, 0, b3.useHTML).addClass("highcharts-data-label") : h3.label(F3, 0, 0, b3.shape, void 0, void 0, b3.useHTML, void 0, "data-label")) && w2.addClass(" highcharts-data-label-color-" + a5.colorIndex + " " + (b3.className || "") + (b3.useHTML ? " highcharts-tracker" : "")), w2 && (w2.options = b3, w2.attr(r2), e2.styledMode || w2.css(q3).shadow(b3.shadow), (m2 = b3[a5.formatPrefix + "TextPath"] || b3.textPath) && !b3.useHTML && (w2.setTextPath((null === (l3 = a5.getDataLabelPath) || void 0 === l3 ? void 0 : l3.call(a5, w2)) || a5.graphic, m2), a5.dataLabelPath && !m2.enabled && (a5.dataLabelPath = a5.dataLabelPath.destroy())), w2.added || w2.add(y3), d2.alignDataLabel(a5, w2, b3, void 0, u2), w2.isActive = true, c2[f] && c2[f] !== w2 && c2[f].destroy(), c2[f] = w2));
                });
                for (b2 = c2.length; b2--; )
                  c2[b2].isActive ? c2[b2].isActive = false : (c2[b2].destroy(), c2.splice(b2, 1));
                a5.dataLabel = c2[0];
                a5.dataLabels = c2;
              });
            B(this, "afterDrawDataLabels");
          }
          function k(a4, d2, c, e2, g2, k2) {
            const b = this.chart, f = d2.align, h3 = d2.verticalAlign, l2 = a4.box ? 0 : a4.padding || 0;
            let { x: m2 = 0, y: n = 0 } = d2, p2, q2;
            p2 = (c.x || 0) + l2;
            0 > p2 && ("right" === f && 0 <= m2 ? (d2.align = "left", d2.inside = true) : m2 -= p2, q2 = true);
            p2 = (c.x || 0) + e2.width - l2;
            p2 > b.plotWidth && ("left" === f && 0 >= m2 ? (d2.align = "right", d2.inside = true) : m2 += b.plotWidth - p2, q2 = true);
            p2 = c.y + l2;
            0 > p2 && ("bottom" === h3 && 0 <= n ? (d2.verticalAlign = "top", d2.inside = true) : n -= p2, q2 = true);
            p2 = (c.y || 0) + e2.height - l2;
            p2 > b.plotHeight && ("top" === h3 && 0 >= n ? (d2.verticalAlign = "bottom", d2.inside = true) : n += b.plotHeight - p2, q2 = true);
            q2 && (d2.x = m2, d2.y = n, a4.placed = !k2, a4.align(d2, void 0, g2));
            return q2;
          }
          function r(a4, d2) {
            let b = [], f;
            if (u(a4) && !u(d2))
              b = a4.map(function(a5) {
                return l(a5, d2);
              });
            else if (u(d2) && !u(a4))
              b = d2.map(function(b2) {
                return l(a4, b2);
              });
            else if (!u(a4) && !u(d2))
              b = l(a4, d2);
            else if (u(a4) && u(d2))
              for (f = Math.max(a4.length, d2.length); f--; )
                b[f] = l(a4[f], d2[f]);
            return b;
          }
          function q(a4, d2, c, e2, g2) {
            const b = this.chart, f = b.inverted, k2 = this.xAxis, h3 = k2.reversed, l2 = f ? d2.height / 2 : d2.width / 2;
            a4 = (a4 = a4.pointWidth) ? a4 / 2 : 0;
            d2.startXPos = f ? g2.x : h3 ? -l2 - a4 : k2.width - l2 + a4;
            d2.startYPos = f ? h3 ? this.yAxis.height - l2 + a4 : -l2 - a4 : g2.y;
            e2 ? "hidden" === d2.visibility && (d2.show(), d2.attr({ opacity: 0 }).animate({ opacity: 1 })) : d2.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, d2.hide);
            b.hasRendered && (c && d2.attr({ x: d2.startXPos, y: d2.startYPos }), d2.placed = true);
          }
          const y2 = [];
          a3.compose = function(a4) {
            I.pushUnique(y2, a4) && (a4 = a4.prototype, a4.initDataLabelsGroup = h2, a4.initDataLabels = F, a4.alignDataLabel = e, a4.drawDataLabels = d, a4.justifyDataLabel = k, a4.setDataLabelStartPos = q);
          };
        })(h || (h = {}));
        "";
        return h;
      });
      M(a, "Series/Column/ColumnDataLabel.js", [a["Core/Series/DataLabel.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { series: x } = y, { merge: C, pick: z } = I;
        var H;
        (function(y2) {
          function u(a3, p, t, m, h) {
            let g = this.chart.inverted;
            var e = a3.series;
            let l = (e.xAxis ? e.xAxis.len : this.chart.plotSizeX) || 0;
            e = (e.yAxis ? e.yAxis.len : this.chart.plotSizeY) || 0;
            var v2 = a3.dlBox || a3.shapeArgs;
            let u2 = z(a3.below, a3.plotY > z(this.translatedThreshold, e)), d = z(t.inside, !!this.options.stacking);
            v2 && (m = C(v2), 0 > m.y && (m.height += m.y, m.y = 0), v2 = m.y + m.height - e, 0 < v2 && v2 < m.height && (m.height -= v2), g && (m = { x: e - m.y - m.height, y: l - m.x - m.width, width: m.height, height: m.width }), d || (g ? (m.x += u2 ? 0 : m.width, m.width = 0) : (m.y += u2 ? m.height : 0, m.height = 0)));
            t.align = z(t.align, !g || d ? "center" : u2 ? "right" : "left");
            t.verticalAlign = z(t.verticalAlign, g || d ? "middle" : u2 ? "top" : "bottom");
            x.prototype.alignDataLabel.call(this, a3, p, t, m, h);
            t.inside && a3.contrastColor && p.css({ color: a3.contrastColor });
          }
          const v = [];
          y2.compose = function(l) {
            a2.compose(x);
            I.pushUnique(v, l) && (l.prototype.alignDataLabel = u);
          };
        })(H || (H = {}));
        return H;
      });
      M(a, "Series/Bar/BarSeries.js", [a["Series/Column/ColumnSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { extend: x, merge: C } = I;
        class z extends a2 {
          constructor() {
            super(...arguments);
            this.points = this.options = this.data = void 0;
          }
        }
        z.defaultOptions = C(a2.defaultOptions, {});
        x(z.prototype, { inverted: true });
        y.registerSeriesType("bar", z);
        "";
        return z;
      });
      M(a, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
        "";
        return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
      });
      M(
        a,
        "Series/Scatter/ScatterSeries.js",
        [a["Series/Scatter/ScatterSeriesDefaults.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]],
        function(a2, y, I) {
          const { column: x, line: C } = y.seriesTypes, { addEvent: z, extend: H, merge: B } = I;
          class u extends C {
            constructor() {
              super(...arguments);
              this.points = this.options = this.data = void 0;
            }
            applyJitter() {
              const a3 = this, l = this.options.jitter, p = this.points.length;
              l && this.points.forEach(function(t, m) {
                ["x", "y"].forEach(function(h, g) {
                  let e = "plot" + h.toUpperCase(), w, v;
                  if (l[h] && !t.isNull) {
                    var u2 = a3[h + "Axis"];
                    v = l[h] * u2.transA;
                    u2 && !u2.isLog && (w = Math.max(0, t[e] - v), u2 = Math.min(u2.len, t[e] + v), g = 1e4 * Math.sin(m + g * p), g -= Math.floor(g), t[e] = w + (u2 - w) * g, "x" === h && (t.clientX = t.plotX));
                  }
                });
              });
            }
            drawGraph() {
              this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
            }
          }
          u.defaultOptions = B(C.defaultOptions, a2);
          H(u.prototype, { drawTracker: x.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false });
          z(u, "afterTranslate", function() {
            this.applyJitter();
          });
          y.registerSeriesType("scatter", u);
          return u;
        }
      );
      M(a, "Series/CenteredUtilities.js", [a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { deg2rad: x } = a2, { fireEvent: C, isNumber: z, pick: H, relativeLength: B } = I;
        var u;
        (function(a3) {
          a3.getCenter = function() {
            var a4 = this.options, p = this.chart;
            const t = 2 * (a4.slicedOffset || 0), m = p.plotWidth - 2 * t, h = p.plotHeight - 2 * t;
            var g = a4.center;
            const e = Math.min(m, h), w = a4.thickness;
            var v = a4.size;
            let u2 = a4.innerSize || 0;
            "string" === typeof v && (v = parseFloat(v));
            "string" === typeof u2 && (u2 = parseFloat(u2));
            a4 = [H(g[0], "50%"), H(g[1], "50%"), H(v && 0 > v ? void 0 : a4.size, "100%"), H(u2 && 0 > u2 ? void 0 : a4.innerSize || 0, "0%")];
            !p.angular || this instanceof y || (a4[3] = 0);
            for (g = 0; 4 > g; ++g)
              v = a4[g], p = 2 > g || 2 === g && /%$/.test(v), a4[g] = B(v, [m, h, e, a4[2]][g]) + (p ? t : 0);
            a4[3] > a4[2] && (a4[3] = a4[2]);
            z(w) && 2 * w < a4[2] && 0 < w && (a4[3] = a4[2] - 2 * w);
            C(this, "afterGetCenter", { positions: a4 });
            return a4;
          };
          a3.getStartAndEndRadians = function(a4, p) {
            a4 = z(a4) ? a4 : 0;
            p = z(p) && p > a4 && 360 > p - a4 ? p : a4 + 360;
            return { start: x * (a4 + -90), end: x * (p + -90) };
          };
        })(u || (u = {}));
        "";
        return u;
      });
      M(a, "Series/Pie/PiePoint.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, y, I) {
        const { setAnimation: x } = a2, { addEvent: C, defined: z, extend: H, isNumber: B, pick: u, relativeLength: v } = I;
        class l extends y {
          constructor() {
            super(...arguments);
            this.series = this.options = this.labelDistance = void 0;
          }
          getConnectorPath() {
            const a3 = this.labelPosition, l2 = this.series.options.dataLabels, m = this.connectorShapes;
            let h = l2.connectorShape;
            m[h] && (h = m[h]);
            return h.call(
              this,
              { x: a3.computed.x, y: a3.computed.y, alignment: a3.alignment },
              a3.connectorPosition,
              l2
            );
          }
          getTranslate() {
            return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
          }
          haloPath(a3) {
            const l2 = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(l2.x, l2.y, l2.r + a3, l2.r + a3, { innerR: l2.r - 1, start: l2.start, end: l2.end, borderRadius: l2.borderRadius });
          }
          init() {
            super.init.apply(this, arguments);
            this.name = u(this.name, "Slice");
            const a3 = (a4) => {
              this.slice("select" === a4.type);
            };
            C(this, "select", a3);
            C(
              this,
              "unselect",
              a3
            );
            return this;
          }
          isValid() {
            return B(this.y) && 0 <= this.y;
          }
          setVisible(a3, l2) {
            const m = this.series, h = m.chart, g = m.options.ignoreHiddenPoint;
            l2 = u(l2, g);
            a3 !== this.visible && (this.visible = this.options.visible = a3 = "undefined" === typeof a3 ? !this.visible : a3, m.options.data[m.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector"].forEach((e) => {
              if (this[e])
                this[e][a3 ? "show" : "hide"](a3);
            }), this.legendItem && h.legend.colorizeItem(this, a3), a3 || "hover" !== this.state || this.setState(""), g && (m.isDirty = true), l2 && h.redraw());
          }
          slice(a3, l2, m) {
            const h = this.series;
            x(m, h.chart);
            u(l2, true);
            this.sliced = this.options.sliced = z(a3) ? a3 : !this.sliced;
            h.options.data[h.data.indexOf(this)] = this.options;
            this.graphic && this.graphic.animate(this.getTranslate());
          }
        }
        H(l.prototype, { connectorShapes: { fixedOffset: function(a3, l2, m) {
          const h = l2.breakAt;
          l2 = l2.touchingSliceAt;
          return [["M", a3.x, a3.y], m.softConnector ? ["C", a3.x + ("left" === a3.alignment ? -5 : 5), a3.y, 2 * h.x - l2.x, 2 * h.y - l2.y, h.x, h.y] : ["L", h.x, h.y], ["L", l2.x, l2.y]];
        }, straight: function(a3, l2) {
          l2 = l2.touchingSliceAt;
          return [
            ["M", a3.x, a3.y],
            ["L", l2.x, l2.y]
          ];
        }, crookedLine: function(a3, l2, m) {
          const { breakAt: h, touchingSliceAt: g } = l2;
          ({ series: l2 } = this);
          const [e, p, t] = l2.center, u2 = t / 2, d = l2.chart.plotWidth, k = l2.chart.plotLeft;
          l2 = "left" === a3.alignment;
          const { x: r, y: q } = a3;
          m.crookDistance ? (a3 = v(m.crookDistance, 1), a3 = l2 ? e + u2 + (d + k - e - u2) * (1 - a3) : k + (e - u2) * a3) : a3 = e + (p - q) * Math.tan((this.angle || 0) - Math.PI / 2);
          m = [["M", r, q]];
          (l2 ? a3 <= r && a3 >= h.x : a3 >= r && a3 <= h.x) && m.push(["L", a3, q]);
          m.push(["L", h.x, h.y], ["L", g.x, g.y]);
          return m;
        } } });
        return l;
      });
      M(a, "Series/Pie/PieSeriesDefaults.js", [], function() {
        "";
        return {
          borderRadius: 3,
          center: [null, null],
          clip: false,
          colorByPoint: true,
          dataLabels: { allowOverlap: true, connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: true, formatter: function() {
            return this.point.isNull ? void 0 : this.point.name;
          }, softConnector: true, x: 0 },
          fillColor: void 0,
          ignoreHiddenPoint: true,
          inactiveOtherPoints: true,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: false,
          slicedOffset: 10,
          stickyTracking: false,
          tooltip: { followPointer: true },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: { hover: { brightness: 0.1 } }
        };
      });
      M(a, "Series/Pie/PieSeries.js", [a["Series/CenteredUtilities.js"], a["Series/Column/ColumnSeries.js"], a["Core/Globals.js"], a["Series/Pie/PiePoint.js"], a["Series/Pie/PieSeriesDefaults.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/Symbols.js"], a["Core/Utilities.js"]], function(a2, y, I, L, C, z, H, B, u) {
        const { getStartAndEndRadians: v } = a2;
        ({ noop: I } = I);
        const { clamp: l, extend: p, fireEvent: t, merge: m, pick: h, relativeLength: g } = u;
        class e extends z {
          constructor() {
            super(...arguments);
            this.points = this.options = this.maxLabelDistance = this.data = this.center = void 0;
          }
          animate(a3) {
            const e2 = this, g2 = e2.points, d = e2.startAngleRad;
            a3 || g2.forEach(function(a4) {
              const g3 = a4.graphic, k = a4.shapeArgs;
              g3 && k && (g3.attr({ r: h(a4.startR, e2.center && e2.center[3] / 2), start: d, end: d }), g3.animate({ r: k.r, start: k.start, end: k.end }, e2.options.animation));
            });
          }
          drawEmpty() {
            const a3 = this.startAngleRad, e2 = this.endAngleRad, g2 = this.options;
            let d, k;
            0 === this.total && this.center ? (d = this.center[0], k = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(
              d,
              k,
              this.center[1] / 2,
              0,
              a3,
              e2
            ).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: B.arc(d, k, this.center[2] / 2, 0, { start: a3, end: e2, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": g2.borderWidth, fill: g2.fillColor || "none", stroke: g2.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
          }
          drawPoints() {
            const a3 = this.chart.renderer;
            this.points.forEach(function(e2) {
              e2.graphic && e2.hasNewShapeType() && (e2.graphic = e2.graphic.destroy());
              e2.graphic || (e2.graphic = a3[e2.shapeType](e2.shapeArgs).add(e2.series.group), e2.delayedRendering = true);
            });
          }
          generatePoints() {
            super.generatePoints();
            this.updateTotals();
          }
          getX(a3, e2, g2) {
            const d = this.center, k = this.radii ? this.radii[g2.index] || 0 : d[2] / 2;
            a3 = Math.asin(l((a3 - d[1]) / (k + g2.labelDistance), -1, 1));
            return d[0] + (e2 ? -1 : 1) * Math.cos(a3) * (k + g2.labelDistance) + (0 < g2.labelDistance ? (e2 ? -1 : 1) * this.options.dataLabels.padding : 0);
          }
          hasData() {
            return !!this.processedXData.length;
          }
          redrawPoints() {
            const a3 = this, e2 = a3.chart;
            let g2, d, k, h2;
            this.drawEmpty();
            a3.group && !e2.styledMode && a3.group.shadow(a3.options.shadow);
            a3.points.forEach(function(l2) {
              const q = {};
              d = l2.graphic;
              !l2.isNull && d ? (h2 = l2.shapeArgs, g2 = l2.getTranslate(), e2.styledMode || (k = a3.pointAttribs(l2, l2.selected && "select")), l2.delayedRendering ? (d.setRadialReference(a3.center).attr(h2).attr(g2), e2.styledMode || d.attr(k).attr({ "stroke-linejoin": "round" }), l2.delayedRendering = false) : (d.setRadialReference(a3.center), e2.styledMode || m(true, q, k), m(true, q, h2, g2), d.animate(q)), d.attr({ visibility: l2.visible ? "inherit" : "hidden" }), d.addClass(l2.getClassName(), true)) : d && (l2.graphic = d.destroy());
            });
          }
          sortByAngle(a3, e2) {
            a3.sort(function(a4, d) {
              return "undefined" !== typeof a4.angle && (d.angle - a4.angle) * e2;
            });
          }
          translate(a3) {
            t(this, "translate");
            this.generatePoints();
            var e2 = this.options;
            const l2 = e2.slicedOffset, d = l2 + (e2.borderWidth || 0);
            var k = v(e2.startAngle, e2.endAngle);
            const m2 = this.startAngleRad = k.start;
            k = (this.endAngleRad = k.end) - m2;
            const q = this.points, p2 = e2.dataLabels.distance;
            e2 = e2.ignoreHiddenPoint;
            const b = q.length;
            let f, c, n, w = 0;
            a3 || (this.center = a3 = this.getCenter());
            for (c = 0; c < b; c++) {
              n = q[c];
              var u2 = m2 + w * k;
              !n.isValid() || e2 && !n.visible || (w += n.percentage / 100);
              var x = m2 + w * k;
              var y2 = {
                x: a3[0],
                y: a3[1],
                r: a3[2] / 2,
                innerR: a3[3] / 2,
                start: Math.round(1e3 * u2) / 1e3,
                end: Math.round(1e3 * x) / 1e3
              };
              n.shapeType = "arc";
              n.shapeArgs = y2;
              n.labelDistance = h(n.options.dataLabels && n.options.dataLabels.distance, p2);
              n.labelDistance = g(n.labelDistance, y2.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, n.labelDistance);
              x = (x + u2) / 2;
              x > 1.5 * Math.PI ? x -= 2 * Math.PI : x < -Math.PI / 2 && (x += 2 * Math.PI);
              n.slicedTranslation = { translateX: Math.round(Math.cos(x) * l2), translateY: Math.round(Math.sin(x) * l2) };
              y2 = Math.cos(x) * a3[2] / 2;
              f = Math.sin(x) * a3[2] / 2;
              n.tooltipPos = [a3[0] + 0.7 * y2, a3[1] + 0.7 * f];
              n.half = x < -Math.PI / 2 || x > Math.PI / 2 ? 1 : 0;
              n.angle = x;
              u2 = Math.min(d, n.labelDistance / 5);
              n.labelPosition = { natural: { x: a3[0] + y2 + Math.cos(x) * n.labelDistance, y: a3[1] + f + Math.sin(x) * n.labelDistance }, computed: {}, alignment: 0 > n.labelDistance ? "center" : n.half ? "right" : "left", connectorPosition: { breakAt: { x: a3[0] + y2 + Math.cos(x) * u2, y: a3[1] + f + Math.sin(x) * u2 }, touchingSliceAt: { x: a3[0] + y2, y: a3[1] + f } } };
            }
            t(this, "afterTranslate");
          }
          updateTotals() {
            const a3 = this.points, e2 = a3.length, g2 = this.options.ignoreHiddenPoint;
            let d, k, h2 = 0;
            for (d = 0; d < e2; d++)
              k = a3[d], !k.isValid() || g2 && !k.visible || (h2 += k.y);
            this.total = h2;
            for (d = 0; d < e2; d++)
              k = a3[d], k.percentage = 0 < h2 && (k.visible || !g2) ? k.y / h2 * 100 : 0, k.total = h2;
          }
        }
        e.defaultOptions = m(z.defaultOptions, C);
        p(e.prototype, { axisTypes: [], directTouch: true, drawGraph: void 0, drawTracker: y.prototype.drawTracker, getCenter: a2.getCenter, getSymbol: I, isCartesian: false, noSharedTooltip: true, pointAttribs: y.prototype.pointAttribs, pointClass: L, requireSorting: false, searchPoint: I, trackerGroups: ["group", "dataLabelsGroup"] });
        H.registerSeriesType(
          "pie",
          e
        );
        return e;
      });
      M(a, "Series/Pie/PieDataLabel.js", [a["Core/Series/DataLabel.js"], a["Core/Globals.js"], a["Core/Renderer/RendererUtilities.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, I, L, C) {
        const { noop: x } = y, { distribute: H } = I, { series: B } = L, { arrayMax: u, clamp: v, defined: l, merge: p, pick: t, relativeLength: m } = C;
        var h;
        (function(g) {
          function e() {
            const a3 = this, d2 = a3.data, e2 = a3.chart, g2 = a3.options.dataLabels || {}, b = g2.connectorPadding, f = e2.plotWidth, c = e2.plotHeight, h3 = e2.plotLeft, m2 = Math.round(e2.chartWidth / 3), w = a3.center, v2 = w[2] / 2, x2 = w[1], y3 = [[], []], z2 = [0, 0, 0, 0], F = a3.dataLabelPositioners;
            let C2, A, E, I2, L2, M2, J, N, O, S, W, U2;
            a3.visible && (g2.enabled || a3._hasPointLabels) && (d2.forEach(function(a4) {
              a4.dataLabel && a4.visible && a4.dataLabel.shortened && (a4.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a4.dataLabel.shortened = false);
            }), B.prototype.drawDataLabels.apply(a3), d2.forEach(function(a4) {
              a4.dataLabel && (a4.visible ? (y3[a4.half].push(a4), a4.dataLabel._pos = null, !l(g2.style.width) && !l(a4.options.dataLabels && a4.options.dataLabels.style && a4.options.dataLabels.style.width) && a4.dataLabel.getBBox().width > m2 && (a4.dataLabel.css({ width: Math.round(0.7 * m2) + "px" }), a4.dataLabel.shortened = true)) : (a4.dataLabel = a4.dataLabel.destroy(), a4.dataLabels && 1 === a4.dataLabels.length && delete a4.dataLabels));
            }), y3.forEach((d3, k) => {
              const m3 = d3.length, n = [];
              let q, p2 = 0;
              if (m3) {
                a3.sortByAngle(d3, k - 0.5);
                if (0 < a3.maxLabelDistance) {
                  var r = Math.max(0, x2 - v2 - a3.maxLabelDistance);
                  q = Math.min(x2 + v2 + a3.maxLabelDistance, e2.plotHeight);
                  d3.forEach(function(a4) {
                    0 < a4.labelDistance && a4.dataLabel && (a4.top = Math.max(
                      0,
                      x2 - v2 - a4.labelDistance
                    ), a4.bottom = Math.min(x2 + v2 + a4.labelDistance, e2.plotHeight), p2 = a4.dataLabel.getBBox().height || 21, a4.distributeBox = { target: a4.labelPosition.natural.y - a4.top + p2 / 2, size: p2, rank: a4.y }, n.push(a4.distributeBox));
                  });
                  r = q + p2 - r;
                  H(n, r, r / 5);
                }
                for (W = 0; W < m3; W++) {
                  C2 = d3[W];
                  M2 = C2.labelPosition;
                  I2 = C2.dataLabel;
                  S = false === C2.visible ? "hidden" : "inherit";
                  O = r = M2.natural.y;
                  n && l(C2.distributeBox) && ("undefined" === typeof C2.distributeBox.pos ? S = "hidden" : (J = C2.distributeBox.size, O = F.radialDistributionY(C2)));
                  delete C2.positionIndex;
                  if (g2.justify)
                    N = F.justify(C2, v2, w);
                  else
                    switch (g2.alignTo) {
                      case "connectors":
                        N = F.alignToConnectors(d3, k, f, h3);
                        break;
                      case "plotEdges":
                        N = F.alignToPlotEdges(I2, k, f, h3);
                        break;
                      default:
                        N = F.radialDistributionX(a3, C2, O, r);
                    }
                  I2._attr = { visibility: S, align: M2.alignment };
                  U2 = C2.options.dataLabels || {};
                  I2._pos = { x: N + t(U2.x, g2.x) + ({ left: b, right: -b }[M2.alignment] || 0), y: O + t(U2.y, g2.y) - I2.getBBox().height / 2 };
                  M2 && (M2.computed.x = N, M2.computed.y = O);
                  t(g2.crop, true) && (L2 = I2.getBBox().width, r = null, N - L2 < b && 1 === k ? (r = Math.round(L2 - N + b), z2[3] = Math.max(r, z2[3])) : N + L2 > f - b && 0 === k && (r = Math.round(N + L2 - f + b), z2[1] = Math.max(r, z2[1])), 0 > O - J / 2 ? z2[0] = Math.max(Math.round(-O + J / 2), z2[0]) : O + J / 2 > c && (z2[2] = Math.max(Math.round(O + J / 2 - c), z2[2])), I2.sideOverflow = r);
                }
              }
            }), 0 === u(z2) || this.verifyDataLabelOverflow(z2)) && (this.placeDataLabels(), this.points.forEach(function(b2) {
              U2 = p(g2, b2.options.dataLabels);
              if (A = t(U2.connectorWidth, 1)) {
                let c2;
                E = b2.connector;
                if ((I2 = b2.dataLabel) && I2._pos && b2.visible && 0 < b2.labelDistance) {
                  S = I2._attr.visibility;
                  if (c2 = !E)
                    b2.connector = E = e2.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b2.colorIndex + (b2.className ? " " + b2.className : "")).add(a3.dataLabelsGroup), e2.styledMode || E.attr({ "stroke-width": A, stroke: U2.connectorColor || b2.color || "#666666" });
                  E[c2 ? "attr" : "animate"]({ d: b2.getConnectorPath() });
                  E.attr("visibility", S);
                } else
                  E && (b2.connector = E.destroy());
              }
            }));
          }
          function h2() {
            this.points.forEach(function(a3) {
              let d2 = a3.dataLabel, e2;
              d2 && a3.visible && ((e2 = d2._pos) ? (d2.sideOverflow && (d2._attr.width = Math.max(d2.getBBox().width - d2.sideOverflow, 0), d2.css({ width: d2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), d2.shortened = true), d2.attr(d2._attr), d2[d2.moved ? "animate" : "attr"](e2), d2.moved = true) : d2 && d2.attr({ y: -9999 }));
              delete a3.distributeBox;
            }, this);
          }
          function y2(a3) {
            let d2 = this.center, e2 = this.options, g2 = e2.center, b = e2.minSize || 80, f, c = null !== e2.size;
            c || (null !== g2[0] ? f = Math.max(d2[2] - Math.max(a3[1], a3[3]), b) : (f = Math.max(d2[2] - a3[1] - a3[3], b), d2[0] += (a3[3] - a3[1]) / 2), null !== g2[1] ? f = v(f, b, d2[2] - Math.max(a3[0], a3[2])) : (f = v(f, b, d2[2] - a3[0] - a3[2]), d2[1] += (a3[0] - a3[2]) / 2), f < d2[2] ? (d2[2] = f, d2[3] = Math.min(e2.thickness ? Math.max(0, f - 2 * e2.thickness) : Math.max(0, m(e2.innerSize || 0, f)), f), this.translate(d2), this.drawDataLabels && this.drawDataLabels()) : c = true);
            return c;
          }
          const z = [], d = { radialDistributionY: function(a3) {
            return a3.top + a3.distributeBox.pos;
          }, radialDistributionX: function(a3, d2, e2, g2) {
            return a3.getX(e2 < d2.top + 2 || e2 > d2.bottom - 2 ? g2 : e2, d2.half, d2);
          }, justify: function(a3, d2, e2) {
            return e2[0] + (a3.half ? -1 : 1) * (d2 + a3.labelDistance);
          }, alignToPlotEdges: function(a3, d2, e2, g2) {
            a3 = a3.getBBox().width;
            return d2 ? a3 + g2 : e2 - a3 - g2;
          }, alignToConnectors: function(a3, d2, e2, g2) {
            let b = 0, f;
            a3.forEach(function(a4) {
              f = a4.dataLabel.getBBox().width;
              f > b && (b = f);
            });
            return d2 ? b + g2 : e2 - b - g2;
          } };
          g.compose = function(g2) {
            a2.compose(B);
            C.pushUnique(z, g2) && (g2 = g2.prototype, g2.dataLabelPositioners = d, g2.alignDataLabel = x, g2.drawDataLabels = e, g2.placeDataLabels = h2, g2.verifyDataLabelOverflow = y2);
          };
        })(h || (h = {}));
        return h;
      });
      M(a, "Extensions/OverlappingDataLabels.js", [a["Core/Chart/Chart.js"], a["Core/Utilities.js"]], function(a2, y) {
        function x(a3, l) {
          let p, t = false;
          a3 && (p = a3.newOpacity, a3.oldOpacity !== p && (a3.alignAttr && a3.placed ? (a3[p ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), t = true, a3.alignAttr.opacity = p, a3[a3.isOld ? "animate" : "attr"](a3.alignAttr, null, function() {
            l.styledMode || a3.css({ pointerEvents: p ? "auto" : "none" });
          }), C(l, "afterHideOverlappingLabel")) : a3.attr({ opacity: p })), a3.isOld = true);
          return t;
        }
        const { addEvent: L, fireEvent: C, isArray: z, isNumber: H, objectEach: B, pick: u } = y;
        L(a2, "render", function() {
          let a3 = this, l = [];
          (this.labelCollectors || []).forEach(function(a4) {
            l = l.concat(a4());
          });
          (this.yAxis || []).forEach(function(a4) {
            a4.stacking && a4.options.stackLabels && !a4.options.stackLabels.allowOverlap && B(a4.stacking.stacks, function(a5) {
              B(a5, function(a6) {
                a6.label && l.push(a6.label);
              });
            });
          });
          (this.series || []).forEach(function(p) {
            var t = p.options.dataLabels;
            p.visible && (false !== t.enabled || p._hasPointLabels) && (t = (m) => m.forEach((h) => {
              h.visible && (z(h.dataLabels) ? h.dataLabels : h.dataLabel ? [h.dataLabel] : []).forEach(function(g) {
                const e = g.options;
                g.labelrank = u(e.labelrank, h.labelrank, h.shapeArgs && h.shapeArgs.height);
                e.allowOverlap ? (g.oldOpacity = g.opacity, g.newOpacity = 1, x(g, a3)) : l.push(g);
              });
            }), t(p.nodes || []), t(p.points));
          });
          this.hideOverlappingLabels(l);
        });
        a2.prototype.hideOverlappingLabels = function(a3) {
          let l = this, p = a3.length, t = l.renderer;
          var m;
          let h;
          let g, e, w, u2 = false;
          var v = function(a4) {
            let d, e2;
            var g2;
            let h2 = a4.box ? 0 : a4.padding || 0, b = g2 = 0, f, c;
            if (a4 && (!a4.alignAttr || a4.placed))
              return d = a4.alignAttr || { x: a4.attr("x"), y: a4.attr("y") }, e2 = a4.parentGroup, a4.width || (g2 = a4.getBBox(), a4.width = g2.width, a4.height = g2.height, g2 = t.fontMetrics(a4.element).h), f = a4.width - 2 * h2, (c = { left: "0", center: "0.5", right: "1" }[a4.alignValue]) ? b = +c * f : H(a4.x) && Math.round(a4.x) !== a4.translateX && (b = a4.x - a4.translateX), { x: d.x + (e2.translateX || 0) + h2 - (b || 0), y: d.y + (e2.translateY || 0) + h2 - g2, width: a4.width - 2 * h2, height: a4.height - 2 * h2 };
          };
          for (h = 0; h < p; h++)
            if (m = a3[h])
              m.oldOpacity = m.opacity, m.newOpacity = 1, m.absoluteBox = v(m);
          a3.sort(function(a4, e2) {
            return (e2.labelrank || 0) - (a4.labelrank || 0);
          });
          for (h = 0; h < p; h++)
            for (e = (v = a3[h]) && v.absoluteBox, m = h + 1; m < p; ++m)
              w = (g = a3[m]) && g.absoluteBox, !e || !w || v === g || 0 === v.newOpacity || 0 === g.newOpacity || "hidden" === v.visibility || "hidden" === g.visibility || w.x >= e.x + e.width || w.x + w.width <= e.x || w.y >= e.y + e.height || w.y + w.height <= e.y || ((v.labelrank < g.labelrank ? v : g).newOpacity = 0);
          a3.forEach(function(a4) {
            x(a4, l) && (u2 = true);
          });
          u2 && C(l, "afterHideAllOverlappingLabels");
        };
      });
      M(a, "Extensions/BorderRadius.js", [a["Core/Defaults.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function(a2, y, I, L, C, z) {
        const { defaultOptions: x } = a2;
        ({ seriesTypes: a2 } = I);
        const { addEvent: B, extend: u, isObject: v, merge: l, relativeLength: p } = z, t = {
          radius: 0,
          scope: "stack",
          where: void 0
        }, m = (a3, g) => {
          v(a3) || (a3 = { radius: a3 || 0 });
          return l(t, g, a3);
        };
        if (-1 === L.symbolCustomAttribs.indexOf("borderRadius")) {
          L.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY");
          const h = C.prototype.symbols.arc;
          C.prototype.symbols.arc = function(a3, g2, l2, m2, d = {}) {
            a3 = h(a3, g2, l2, m2, d);
            const { innerR: e = 0, r = l2, start: q = 0, end: t2 = 0 } = d;
            if (d.open || !d.borderRadius)
              return a3;
            l2 = t2 - q;
            g2 = Math.sin(l2 / 2);
            d = Math.max(Math.min(p(d.borderRadius || 0, r - e), (r - e) / 2, r * g2 / (1 + g2)), 0);
            l2 = Math.min(d, l2 / Math.PI * 2 * e);
            for (g2 = a3.length - 1; g2--; ) {
              {
                let e2 = void 0, h2 = void 0, k = void 0;
                m2 = a3;
                var b = g2, f = 1 < g2 ? l2 : d, c = m2[b], n = m2[b + 1];
                "Z" === n[0] && (n = m2[0]);
                "M" !== c[0] && "L" !== c[0] || "A" !== n[0] ? "A" !== c[0] || "M" !== n[0] && "L" !== n[0] || (k = n, h2 = c) : (k = c, h2 = n, e2 = true);
                if (k && h2 && h2.params) {
                  c = h2[1];
                  var w = h2[5];
                  n = h2.params;
                  const { start: a4, end: d2, cx: g3, cy: l3 } = n;
                  var u2 = w ? c - f : c + f;
                  const p2 = u2 ? Math.asin(f / u2) : 0;
                  w = w ? p2 : -p2;
                  u2 *= Math.cos(p2);
                  e2 ? (n.start = a4 + w, k[1] = g3 + u2 * Math.cos(a4), k[2] = l3 + u2 * Math.sin(a4), m2.splice(b + 1, 0, ["A", f, f, 0, 0, 1, g3 + c * Math.cos(n.start), l3 + c * Math.sin(n.start)])) : (n.end = d2 - w, h2[6] = g3 + c * Math.cos(n.end), h2[7] = l3 + c * Math.sin(n.end), m2.splice(b + 1, 0, ["A", f, f, 0, 0, 1, g3 + u2 * Math.cos(d2), l3 + u2 * Math.sin(d2)]));
                  h2[4] = Math.abs(n.end - n.start) < Math.PI ? 0 : 1;
                }
              }
            }
            return a3;
          };
          const g = C.prototype.symbols.roundedRect;
          C.prototype.symbols.roundedRect = function(a3, h2, l2, m2, d = {}) {
            const e = g(a3, h2, l2, m2, d), { r: p2 = 0, brBoxHeight: q = m2, brBoxY: t2 = h2 } = d;
            var b = h2 - t2, f = t2 + q - (h2 + m2);
            d = -0.1 < b - p2 ? 0 : p2;
            const c = -0.1 < f - p2 ? 0 : p2;
            var n = Math.max(d && b, 0);
            const u2 = Math.max(c && f, 0);
            f = [a3 + d, h2];
            b = [a3 + l2 - d, h2];
            const w = [a3 + l2, h2 + d], v2 = [a3 + l2, h2 + m2 - c], x2 = [a3 + l2 - c, h2 + m2], y2 = [a3 + c, h2 + m2], z2 = [a3, h2 + m2 - c], B2 = [a3, h2 + d];
            if (n) {
              const a4 = Math.sqrt(Math.pow(d, 2) - Math.pow(d - n, 2));
              f[0] -= a4;
              b[0] += a4;
              w[1] = B2[1] = h2 + d - n;
            }
            m2 < d - n && (n = Math.sqrt(Math.pow(d, 2) - Math.pow(d - n - m2, 2)), w[0] = v2[0] = a3 + l2 - d + n, x2[0] = Math.min(w[0], x2[0]), y2[0] = Math.max(v2[0], y2[0]), z2[0] = B2[0] = a3 + d - n, w[1] = B2[1] = h2 + m2);
            u2 && (n = Math.sqrt(Math.pow(c, 2) - Math.pow(c - u2, 2)), x2[0] += n, y2[0] -= n, v2[1] = z2[1] = h2 + m2 - c + u2);
            m2 < c - u2 && (m2 = Math.sqrt(Math.pow(c, 2) - Math.pow(c - u2 - m2, 2)), w[0] = v2[0] = a3 + l2 - c + m2, b[0] = Math.min(w[0], b[0]), f[0] = Math.max(v2[0], f[0]), z2[0] = B2[0] = a3 + c - m2, v2[1] = z2[1] = h2);
            e.length = 0;
            e.push(["M", ...f], ["L", ...b], [
              "A",
              d,
              d,
              0,
              0,
              1,
              ...w
            ], ["L", ...v2], ["A", c, c, 0, 0, 1, ...x2], ["L", ...y2], ["A", c, c, 0, 0, 1, ...z2], ["L", ...B2], ["A", d, d, 0, 0, 1, ...f], ["Z"]);
            return e;
          };
          B(a2.pie, "afterTranslate", function() {
            const a3 = m(this.options.borderRadius);
            for (const e of this.points) {
              const g2 = e.shapeArgs;
              g2 && (g2.borderRadius = p(a3.radius, (g2.r || 0) - (g2.innerR || 0)));
            }
          });
          B(y, "afterColumnTranslate", function() {
            var a3, g2;
            if (this.options.borderRadius && (!this.chart.is3d || !this.chart.is3d())) {
              const { options: e, yAxis: r } = this, q = "percent" === e.stacking;
              var h2 = null === (g2 = null === (a3 = x.plotOptions) || void 0 === a3 ? void 0 : a3[this.type]) || void 0 === g2 ? void 0 : g2.borderRadius;
              a3 = m(e.borderRadius, v(h2) ? h2 : {});
              g2 = r.options.reversed;
              for (const k of this.points)
                if ({ shapeArgs: h2 } = k, "roundedRect" === k.shapeType && h2) {
                  const { width: b = 0, height: f = 0, y: c = 0 } = h2;
                  var l2 = c, d = f;
                  "stack" === a3.scope && k.stackTotal && (l2 = r.translate(q ? 100 : k.stackTotal, false, true, false, true), d = r.translate(e.threshold || 0, false, true, false, true), d = this.crispCol(0, Math.min(l2, d), 0, Math.abs(l2 - d)), l2 = d.y, d = d.height);
                  const m2 = -1 === (k.negative ? -1 : 1) * (g2 ? -1 : 1);
                  let t2 = a3.where;
                  !t2 && this.is("waterfall") && Math.abs((k.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (t2 = "all");
                  t2 || (t2 = "end");
                  const v2 = Math.min(p(a3.radius, b), b / 2, "all" === t2 ? f / 2 : Infinity) || 0;
                  "end" === t2 && (m2 && (l2 -= v2), d += v2);
                  u(h2, { brBoxHeight: d, brBoxY: l2, r: v2 });
                }
            }
          }, { order: 9 });
        }
        y = { optionsToObject: m };
        "";
        return y;
      });
      M(a, "Core/Responsive.js", [a["Core/Utilities.js"]], function(a2) {
        const { diffObjects: x, extend: I, find: L, merge: C, pick: z, uniqueKey: H } = a2;
        var B;
        (function(u) {
          function v(a3, l2) {
            const h = a3.condition;
            (h.callback || function() {
              return this.chartWidth <= z(h.maxWidth, Number.MAX_VALUE) && this.chartHeight <= z(h.maxHeight, Number.MAX_VALUE) && this.chartWidth >= z(h.minWidth, 0) && this.chartHeight >= z(h.minHeight, 0);
            }).call(this) && l2.push(a3._id);
          }
          function l(a3, l2) {
            const h = this.options.responsive;
            var g = this.currentResponsive;
            let e = [];
            !l2 && h && h.rules && h.rules.forEach((a4) => {
              "undefined" === typeof a4._id && (a4._id = H());
              this.matchResponsiveRule(a4, e);
            }, this);
            l2 = C(...e.map((a4) => L((h || {}).rules || [], (e2) => e2._id === a4)).map((a4) => a4 && a4.chartOptions));
            l2.isResponsiveOptions = true;
            e = e.toString() || void 0;
            e !== (g && g.ruleIds) && (g && this.update(g.undoOptions, a3, true), e ? (g = x(l2, this.options, true, this.collectionsWithUpdate), g.isResponsiveOptions = true, this.currentResponsive = { ruleIds: e, mergedOptions: l2, undoOptions: g }, this.update(l2, a3, true)) : this.currentResponsive = void 0);
          }
          const p = [];
          u.compose = function(t) {
            a2.pushUnique(p, t) && I(t.prototype, { matchResponsiveRule: v, setResponsive: l });
            return t;
          };
        })(B || (B = {}));
        "";
        "";
        return B;
      });
      M(a, "masters/highcharts.src.js", [
        a["Core/Globals.js"],
        a["Core/Utilities.js"],
        a["Core/Defaults.js"],
        a["Core/Animation/Fx.js"],
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Templating.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Renderer/HTML/HTMLElement.js"],
        a["Core/Renderer/HTML/HTMLRenderer.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Axis/DateTimeAxis.js"],
        a["Core/Axis/LogarithmicAxis.js"],
        a["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
        a["Core/Axis/Tick.js"],
        a["Core/Tooltip.js"],
        a["Core/Series/Point.js"],
        a["Core/Pointer.js"],
        a["Core/Legend/Legend.js"],
        a["Core/Chart/Chart.js"],
        a["Core/Axis/Stacking/StackingAxis.js"],
        a["Core/Axis/Stacking/StackItem.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Series/Column/ColumnSeries.js"],
        a["Series/Column/ColumnDataLabel.js"],
        a["Series/Pie/PieSeries.js"],
        a["Series/Pie/PieDataLabel.js"],
        a["Core/Series/DataLabel.js"],
        a["Core/Responsive.js"],
        a["Core/Color/Color.js"],
        a["Core/Time.js"]
      ], function(a2, y, I, L, C, z, H, B, u, v, l, p, t, m, h, g, e, w, E, F, d, k, r, q, G, b, f, c, n, M2, D, K, U2, T) {
        a2.animate = C.animate;
        a2.animObject = C.animObject;
        a2.getDeferredAnimation = C.getDeferredAnimation;
        a2.setAnimation = C.setAnimation;
        a2.stop = C.stop;
        a2.timers = L.timers;
        a2.AST = z;
        a2.Axis = t;
        a2.Chart = k;
        a2.chart = k.chart;
        a2.Fx = L;
        a2.Legend = d;
        a2.PlotLineOrBand = g;
        a2.Point = E;
        a2.Pointer = F;
        a2.Series = G;
        a2.StackItem = q;
        a2.SVGElement = u;
        a2.SVGRenderer = v;
        a2.Templating = H;
        a2.Tick = e;
        a2.Time = T;
        a2.Tooltip = w;
        a2.Color = U2;
        a2.color = U2.parse;
        p.compose(v);
        l.compose(u);
        F.compose(k);
        d.compose(k);
        a2.defaultOptions = I.defaultOptions;
        a2.getOptions = I.getOptions;
        a2.time = I.defaultTime;
        a2.setOptions = I.setOptions;
        a2.dateFormat = H.dateFormat;
        a2.format = H.format;
        a2.numberFormat = H.numberFormat;
        a2.addEvent = y.addEvent;
        a2.arrayMax = y.arrayMax;
        a2.arrayMin = y.arrayMin;
        a2.attr = y.attr;
        a2.clearTimeout = y.clearTimeout;
        a2.correctFloat = y.correctFloat;
        a2.createElement = y.createElement;
        a2.css = y.css;
        a2.defined = y.defined;
        a2.destroyObjectProperties = y.destroyObjectProperties;
        a2.discardElement = y.discardElement;
        a2.distribute = B.distribute;
        a2.erase = y.erase;
        a2.error = y.error;
        a2.extend = y.extend;
        a2.extendClass = y.extendClass;
        a2.find = y.find;
        a2.fireEvent = y.fireEvent;
        a2.getMagnitude = y.getMagnitude;
        a2.getStyle = y.getStyle;
        a2.inArray = y.inArray;
        a2.isArray = y.isArray;
        a2.isClass = y.isClass;
        a2.isDOMElement = y.isDOMElement;
        a2.isFunction = y.isFunction;
        a2.isNumber = y.isNumber;
        a2.isObject = y.isObject;
        a2.isString = y.isString;
        a2.keys = y.keys;
        a2.merge = y.merge;
        a2.normalizeTickInterval = y.normalizeTickInterval;
        a2.objectEach = y.objectEach;
        a2.offset = y.offset;
        a2.pad = y.pad;
        a2.pick = y.pick;
        a2.pInt = y.pInt;
        a2.relativeLength = y.relativeLength;
        a2.removeEvent = y.removeEvent;
        a2.seriesType = b.seriesType;
        a2.splat = y.splat;
        a2.stableSort = y.stableSort;
        a2.syncTimeout = y.syncTimeout;
        a2.timeUnits = y.timeUnits;
        a2.uniqueKey = y.uniqueKey;
        a2.useSerialIds = y.useSerialIds;
        a2.wrap = y.wrap;
        c.compose(f);
        D.compose(G);
        m.compose(t);
        h.compose(t);
        M2.compose(n);
        g.compose(t);
        K.compose(k);
        r.compose(t, k, G);
        w.compose(F);
        return a2;
      });
      a["masters/highcharts.src.js"]._modules = a;
      return a["masters/highcharts.src.js"];
    });
  }
});
export default require_highcharts();
//# sourceMappingURL=highcharts.js.map
