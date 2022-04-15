!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var i = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 129));
})([
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(25)));
  },
  function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var a = n(17);
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    t.IX2EngineConstants = t.IX2EngineActionTypes = void 0;
    var r = n(187);
    Object.keys(r).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(i, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          }));
    });
    var o = n(93);
    Object.keys(o).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(i, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          }));
    });
    var c = n(188);
    Object.keys(c).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(i, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return c[e];
            },
          }));
    });
    var u = n(189);
    Object.keys(u).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(i, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return u[e];
            },
          }));
    });
    var s = a(n(190));
    t.IX2EngineActionTypes = s;
    var d = a(n(191));
    t.IX2EngineConstants = d;
  },
  function (e, t) {
    var n = Function.prototype,
      a = n.bind,
      i = n.call,
      r = a && a.bind(i);
    e.exports = a
      ? function (e) {
          return e && r(i, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return i.apply(e, arguments);
            }
          );
        };
  },
  function (e, t, n) {
    var a = n(98),
      i = "object" == typeof self && self && self.Object === Object && self,
      r = a || i || Function("return this")();
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function (e, t, n) {
    "use strict";
    var a = {},
      i = {},
      r = [],
      o = window.Webflow || [],
      c = window.jQuery,
      u = c(window),
      s = c(document),
      d = c.isFunction,
      l = (a._ = n(131)),
      f = (a.tram = n(68) && c.tram),
      p = !1,
      g = !1;
    function E(e) {
      a.env() &&
        (d(e.design) && u.on("__wf_design", e.design),
        d(e.preview) && u.on("__wf_preview", e.preview)),
        d(e.destroy) && u.on("__wf_destroy", e.destroy),
        e.ready &&
          d(e.ready) &&
          (function (e) {
            p ? e.ready() : l.contains(r, e.ready) || r.push(e.ready);
          })(e);
    }
    function y(e) {
      d(e.design) && u.off("__wf_design", e.design),
        d(e.preview) && u.off("__wf_preview", e.preview),
        d(e.destroy) && u.off("__wf_destroy", e.destroy),
        e.ready &&
          d(e.ready) &&
          (function (e) {
            r = l.filter(r, function (t) {
              return t !== e.ready;
            });
          })(e);
    }
    (f.config.hideBackface = !1),
      (f.config.keepInherited = !0),
      (a.define = function (e, t, n) {
        i[e] && y(i[e]);
        var a = (i[e] = t(c, l, n) || {});
        return E(a), a;
      }),
      (a.require = function (e) {
        return i[e];
      }),
      (a.push = function (e) {
        p ? d(e) && e() : o.push(e);
      }),
      (a.env = function (e) {
        var t = window.__wf_design,
          n = void 0 !== t;
        return e
          ? "design" === e
            ? n && t
            : "preview" === e
            ? n && !t
            : "slug" === e
            ? n && window.__wf_slug
            : "editor" === e
            ? window.WebflowEditor
            : "test" === e
            ? window.__wf_test
            : "frame" === e
            ? window !== window.top
            : void 0
          : n;
      });
    var v,
      I = navigator.userAgent.toLowerCase(),
      T = (a.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      b = (a.env.chrome =
        /chrome/.test(I) &&
        /Google/.test(navigator.vendor) &&
        parseInt(I.match(/chrome\/(\d+)\./)[1], 10)),
      m = (a.env.ios = /(ipod|iphone|ipad)/.test(I));
    (a.env.safari = /safari/.test(I) && !b && !m),
      T &&
        s.on("touchstart mousedown", function (e) {
          v = e.target;
        }),
      (a.validClick = T
        ? function (e) {
            return e === v || c.contains(e, v);
          }
        : function () {
            return !0;
          });
    var _;
    function O(e, t) {
      var n = [],
        a = {};
      return (
        (a.up = l.throttle(function (e) {
          l.each(n, function (t) {
            t(e);
          });
        })),
        e && t && e.on(t, a.up),
        (a.on = function (e) {
          "function" == typeof e && (l.contains(n, e) || n.push(e));
        }),
        (a.off = function (e) {
          n = arguments.length
            ? l.filter(n, function (t) {
                return t !== e;
              })
            : [];
        }),
        a
      );
    }
    function h(e) {
      d(e) && e();
    }
    function R() {
      _ && (_.reject(), u.off("load", _.resolve)),
        (_ = new c.Deferred()),
        u.on("load", _.resolve);
    }
    (a.resize = O(u, "resize.webflow orientationchange.webflow load.webflow")),
      (a.scroll = O(
        u,
        "scroll.webflow resize.webflow orientationchange.webflow load.webflow"
      )),
      (a.redraw = O()),
      (a.location = function (e) {
        window.location = e;
      }),
      a.env() && (a.location = function () {}),
      (a.ready = function () {
        (p = !0),
          g ? ((g = !1), l.each(i, E)) : l.each(r, h),
          l.each(o, h),
          a.resize.up();
      }),
      (a.load = function (e) {
        _.then(e);
      }),
      (a.destroy = function (e) {
        (e = e || {}),
          (g = !0),
          u.triggerHandler("__wf_destroy"),
          null != e.domready && (p = e.domready),
          l.each(i, y),
          a.resize.off(),
          a.scroll.off(),
          a.redraw.off(),
          (r = []),
          (o = []),
          "pending" === _.state() && R();
      }),
      c(a.ready),
      R(),
      (e.exports = window.Webflow = a);
  },
  function (e, t, n) {
    var a = n(4),
      i = n(155),
      r = a({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return r(i(e), t);
      };
  },
  function (e, t, n) {
    var a = n(194),
      i = n(248),
      r = n(62),
      o = n(2),
      c = n(257);
    e.exports = function (e) {
      return "function" == typeof e
        ? e
        : null == e
        ? r
        : "object" == typeof e
        ? o(e)
          ? i(e[0], e[1])
          : a(e)
        : c(e);
    };
  },
  function (e, t, n) {
    var a = n(206),
      i = n(211);
    e.exports = function (e, t) {
      var n = i(e, t);
      return a(n) ? n : void 0;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  function (e, t, n) {
    var a = n(18);
    e.exports = !a(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var a = n(17);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2VanillaUtils =
        t.IX2VanillaPlugins =
        t.IX2ElementsReducer =
        t.IX2EasingUtils =
        t.IX2Easings =
        t.IX2BrowserSupport =
          void 0);
    var i = a(n(47));
    t.IX2BrowserSupport = i;
    var r = a(n(115));
    t.IX2Easings = r;
    var o = a(n(117));
    t.IX2EasingUtils = o;
    var c = a(n(266));
    t.IX2ElementsReducer = c;
    var u = a(n(119));
    t.IX2VanillaPlugins = u;
    var s = a(n(268));
    t.IX2VanillaUtils = s;
  },
  function (e, t, n) {
    var a = n(22),
      i = n(207),
      r = n(208),
      o = a ? a.toStringTag : void 0;
    e.exports = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? i(e)
        : r(e);
    };
  },
  function (e, t, n) {
    var a = n(97),
      i = n(55);
    e.exports = function (e) {
      return null != e && i(e.length) && !a(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var a =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, n)
                : {};
            a.get || a.set ? Object.defineProperty(t, n, a) : (t[n] = e[n]);
          }
      return (t.default = e), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var a = n(6);
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : a(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    (t.clone = u),
      (t.addLast = l),
      (t.addFirst = f),
      (t.removeLast = p),
      (t.removeFirst = g),
      (t.insert = E),
      (t.removeAt = y),
      (t.replaceAt = v),
      (t.getIn = I),
      (t.set = T),
      (t.setIn = b),
      (t.update = m),
      (t.updateIn = _),
      (t.merge = O),
      (t.mergeDeep = h),
      (t.mergeIn = R),
      (t.omit = S),
      (t.addDefaults = A);
    var i = "INVALID_ARGS";
    function r(e) {
      throw new Error(e);
    }
    function o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var c = {}.hasOwnProperty;
    function u(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = o(e), n = {}, a = 0; a < t.length; a++) {
        var i = t[a];
        n[i] = e[i];
      }
      return n;
    }
    function s(e, t, n) {
      var a = n;
      null == a && r(i);
      for (
        var c = !1, l = arguments.length, f = Array(l > 3 ? l - 3 : 0), p = 3;
        p < l;
        p++
      )
        f[p - 3] = arguments[p];
      for (var g = 0; g < f.length; g++) {
        var E = f[g];
        if (null != E) {
          var y = o(E);
          if (y.length)
            for (var v = 0; v <= y.length; v++) {
              var I = y[v];
              if (!e || void 0 === a[I]) {
                var T = E[I];
                t && d(a[I]) && d(T) && (T = s(e, t, a[I], T)),
                  void 0 !== T &&
                    T !== a[I] &&
                    (c || ((c = !0), (a = u(a))), (a[I] = T));
              }
            }
        }
      }
      return a;
    }
    function d(e) {
      var t = void 0 === e ? "undefined" : a(e);
      return null != e && ("object" === t || "function" === t);
    }
    function l(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function f(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function p(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function g(e) {
      return e.length ? e.slice(1) : e;
    }
    function E(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function y(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function v(e, t, n) {
      if (e[t] === n) return e;
      for (var a = e.length, i = Array(a), r = 0; r < a; r++) i[r] = e[r];
      return (i[t] = n), i;
    }
    function I(e, t) {
      if ((!Array.isArray(t) && r(i), null != e)) {
        for (var n = e, a = 0; a < t.length; a++) {
          var o = t[a];
          if (void 0 === (n = null != n ? n[o] : void 0)) return n;
        }
        return n;
      }
    }
    function T(e, t, n) {
      var a = null == e ? ("number" == typeof t ? [] : {}) : e;
      if (a[t] === n) return a;
      var i = u(a);
      return (i[t] = n), i;
    }
    function b(e, t, n) {
      return t.length
        ? (function e(t, n, a, i) {
            var r = n[i];
            return T(
              t,
              r,
              i === n.length - 1
                ? a
                : e(
                    d(t) && d(t[r])
                      ? t[r]
                      : "number" == typeof n[i + 1]
                      ? []
                      : {},
                    n,
                    a,
                    i + 1
                  )
            );
          })(e, t, n, 0)
        : n;
    }
    function m(e, t, n) {
      return T(e, t, n(null == e ? void 0 : e[t]));
    }
    function _(e, t, n) {
      return b(e, t, n(I(e, t)));
    }
    function O(e, t, n, a, i, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        c[u - 6] = arguments[u];
      return c.length
        ? s.call.apply(s, [null, !1, !1, e, t, n, a, i, r].concat(c))
        : s(!1, !1, e, t, n, a, i, r);
    }
    function h(e, t, n, a, i, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        c[u - 6] = arguments[u];
      return c.length
        ? s.call.apply(s, [null, !1, !0, e, t, n, a, i, r].concat(c))
        : s(!1, !0, e, t, n, a, i, r);
    }
    function R(e, t, n, a, i, r, o) {
      var c = I(e, t);
      null == c && (c = {});
      for (
        var u = arguments.length, d = Array(u > 7 ? u - 7 : 0), l = 7;
        l < u;
        l++
      )
        d[l - 7] = arguments[l];
      return b(
        e,
        t,
        d.length
          ? s.call.apply(s, [null, !1, !1, c, n, a, i, r, o].concat(d))
          : s(!1, !1, c, n, a, i, r, o)
      );
    }
    function S(e, t) {
      for (var n = Array.isArray(t) ? t : [t], a = !1, i = 0; i < n.length; i++)
        if (c.call(e, n[i])) {
          a = !0;
          break;
        }
      if (!a) return e;
      for (var r = {}, u = o(e), s = 0; s < u.length; s++) {
        var d = u[s];
        n.indexOf(d) >= 0 || (r[d] = e[d]);
      }
      return r;
    }
    function A(e, t, n, a, i, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        c[u - 6] = arguments[u];
      return c.length
        ? s.call.apply(s, [null, !0, !1, e, t, n, a, i, r].concat(c))
        : s(!0, !1, e, t, n, a, i, r);
    }
    var N = {
      clone: u,
      addLast: l,
      addFirst: f,
      removeLast: p,
      removeFirst: g,
      insert: E,
      removeAt: y,
      replaceAt: v,
      getIn: I,
      set: T,
      setIn: b,
      update: m,
      updateIn: _,
      merge: O,
      mergeDeep: h,
      mergeIn: R,
      omit: S,
      addDefaults: A,
    };
    t.default = N;
  },
  function (e, t, n) {
    var a = n(5).Symbol;
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(38);
    e.exports = function (e) {
      if ("string" == typeof e || a(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    };
  },
  function (e, t) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(t) {
      return (
        "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
          ? (e.exports = a =
              function (e) {
                return n(e);
              })
          : (e.exports = a =
              function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              }),
        a(t)
      );
    }
    e.exports = a;
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var a = n(144),
      i = n(71);
    e.exports = function (e) {
      return a(i(e));
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(6);
    e.exports = function (e, t) {
      return arguments.length < 2
        ? ((n = a[e]), i(n) ? n : void 0)
        : a[e] && a[e][t];
      var n;
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(13),
      r = n(79),
      o = n(29),
      c = n(72),
      u = a.TypeError,
      s = Object.defineProperty;
    t.f = i
      ? s
      : function (e, t, n) {
          if ((o(e), (t = c(t)), o(n), r))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw u("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(19),
      r = a.String,
      o = a.TypeError;
    e.exports = function (e) {
      if (i(e)) return e;
      throw o(r(e) + " is not an object");
    };
  },
  function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    var a = n(196),
      i = n(197),
      r = n(198),
      o = n(199),
      c = n(200);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    (u.prototype.clear = a),
      (u.prototype.delete = i),
      (u.prototype.get = r),
      (u.prototype.has = o),
      (u.prototype.set = c),
      (e.exports = u);
  },
  function (e, t, n) {
    var a = n(48);
    e.exports = function (e, t) {
      for (var n = e.length; n--; ) if (a(e[n][0], t)) return n;
      return -1;
    };
  },
  function (e, t, n) {
    var a = n(11)(Object, "create");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(220);
    e.exports = function (e, t) {
      var n = e.__data__;
      return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
  },
  function (e, t, n) {
    var a = n(105),
      i = n(56),
      r = n(16);
    e.exports = function (e) {
      return r(e) ? a(e) : i(e);
    };
  },
  function (e, t, n) {
    var a = n(238),
      i = n(12),
      r = Object.prototype,
      o = r.hasOwnProperty,
      c = r.propertyIsEnumerable,
      u = a(
        (function () {
          return arguments;
        })()
      )
        ? a
        : function (e) {
            return i(e) && o.call(e, "callee") && !c.call(e, "callee");
          };
    e.exports = u;
  },
  function (e, t, n) {
    var a = n(2),
      i = n(61),
      r = n(249),
      o = n(252);
    e.exports = function (e, t) {
      return a(e) ? e : i(e, t) ? [e] : r(o(e));
    };
  },
  function (e, t, n) {
    var a = n(15),
      i = n(12);
    e.exports = function (e) {
      return "symbol" == typeof e || (i(e) && "[object Symbol]" == a(e));
    };
  },
  function (e, t) {
    var n = Function.prototype.call;
    e.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(41),
      r = a["__core-js_shared__"] || i("__core-js_shared__", {});
    e.exports = r;
  },
  function (e, t, n) {
    var a = n(0),
      i = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        i(a, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        a[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    var a = n(13),
      i = n(28),
      r = n(70);
    e.exports = a
      ? function (e, t, n) {
          return i.f(e, t, r(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ActionTypes", function () {
        return r;
      }),
      n.d(t, "default", function () {
        return o;
      });
    var a = n(87),
      i = n(182),
      r = { INIT: "@@redux/INIT" };
    function o(e, t, n) {
      var c;
      if (
        ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(o)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var u = e,
        s = t,
        d = [],
        l = d,
        f = !1;
      function p() {
        l === d && (l = d.slice());
      }
      function g() {
        return s;
      }
      function E(e) {
        if ("function" != typeof e)
          throw new Error("Expected listener to be a function.");
        var t = !0;
        return (
          p(),
          l.push(e),
          function () {
            if (t) {
              (t = !1), p();
              var n = l.indexOf(e);
              l.splice(n, 1);
            }
          }
        );
      }
      function y(e) {
        if (!Object(a.default)(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (f) throw new Error("Reducers may not dispatch actions.");
        try {
          (f = !0), (s = u(s, e));
        } finally {
          f = !1;
        }
        for (var t = (d = l), n = 0; n < t.length; n++) t[n]();
        return e;
      }
      return (
        y({ type: r.INIT }),
        ((c = {
          dispatch: y,
          subscribe: E,
          getState: g,
          replaceReducer: function (e) {
            if ("function" != typeof e)
              throw new Error("Expected the nextReducer to be a function.");
            (u = e), y({ type: r.INIT });
          },
        })[i.default] = function () {
          var e,
            t = E;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" != typeof e)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  e.next && e.next(g());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[i.default] = function () {
              return this;
            }),
            e
          );
        }),
        c
      );
    }
  },
  function (e, t, n) {
    "use strict";
    function a() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (0 === t.length)
        return function (e) {
          return e;
        };
      if (1 === t.length) return t[0];
      var a = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (e, t) {
          return t(e);
        }, a.apply(void 0, arguments));
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    var a = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TRANSFORM_STYLE_PREFIXED =
        t.TRANSFORM_PREFIXED =
        t.FLEX_PREFIXED =
        t.ELEMENT_MATCHES =
        t.withBrowser =
        t.IS_BROWSER_ENV =
          void 0);
    var i = a(n(94)),
      r = "undefined" != typeof window;
    t.IS_BROWSER_ENV = r;
    var o = function (e, t) {
      return r ? e() : t;
    };
    t.withBrowser = o;
    var c = o(function () {
      return (0,
      i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (e) {
        return e in Element.prototype;
      });
    });
    t.ELEMENT_MATCHES = c;
    var u = o(function () {
      var e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        for (var n = t.length, a = 0; a < n; a++) {
          var i = t[a];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return "";
      } catch (e) {
        return "";
      }
    }, "flex");
    t.FLEX_PREFIXED = u;
    var s = o(function () {
      var e = document.createElement("i");
      if (null == e.style.transform)
        for (var t = ["Webkit", "Moz", "ms"], n = t.length, a = 0; a < n; a++) {
          var i = t[a] + "Transform";
          if (void 0 !== e.style[i]) return i;
        }
      return "transform";
    }, "transform");
    t.TRANSFORM_PREFIXED = s;
    var d = s.split("transform")[0],
      l = d ? d + "TransformStyle" : "transformStyle";
    t.TRANSFORM_STYLE_PREFIXED = l;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e === t || (e != e && t != t);
    };
  },
  function (e, t, n) {
    var a = n(11)(n(5), "Map");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(212),
      i = n(219),
      r = n(221),
      o = n(222),
      c = n(223);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    (u.prototype.clear = a),
      (u.prototype.delete = i),
      (u.prototype.get = r),
      (u.prototype.has = o),
      (u.prototype.set = c),
      (e.exports = u);
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, a = t.length, i = e.length; ++n < a; ) e[i + n] = t[n];
      return e;
    };
  },
  function (e, t, n) {
    (function (e) {
      var a = n(5),
        i = n(239),
        r = t && !t.nodeType && t,
        o = r && "object" == typeof e && e && !e.nodeType && e,
        c = o && o.exports === r ? a.Buffer : void 0,
        u = (c ? c.isBuffer : void 0) || i;
      e.exports = u;
    }.call(this, n(106)(e)));
  },
  function (e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
      var a = typeof e;
      return (
        !!(t = null == t ? 9007199254740991 : t) &&
        ("number" == a || ("symbol" != a && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    };
  },
  function (e, t, n) {
    var a = n(240),
      i = n(241),
      r = n(242),
      o = r && r.isTypedArray,
      c = o ? i(o) : a;
    e.exports = c;
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    };
  },
  function (e, t, n) {
    var a = n(57),
      i = n(243),
      r = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!a(e)) return i(e);
      var t = [];
      for (var n in Object(e)) r.call(e, n) && "constructor" != n && t.push(n);
      return t;
    };
  },
  function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || n);
    };
  },
  function (e, t, n) {
    var a = n(244),
      i = n(49),
      r = n(245),
      o = n(246),
      c = n(108),
      u = n(15),
      s = n(99),
      d = s(a),
      l = s(i),
      f = s(r),
      p = s(o),
      g = s(c),
      E = u;
    ((a && "[object DataView]" != E(new a(new ArrayBuffer(1)))) ||
      (i && "[object Map]" != E(new i())) ||
      (r && "[object Promise]" != E(r.resolve())) ||
      (o && "[object Set]" != E(new o())) ||
      (c && "[object WeakMap]" != E(new c()))) &&
      (E = function (e) {
        var t = u(e),
          n = "[object Object]" == t ? e.constructor : void 0,
          a = n ? s(n) : "";
        if (a)
          switch (a) {
            case d:
              return "[object DataView]";
            case l:
              return "[object Map]";
            case f:
              return "[object Promise]";
            case p:
              return "[object Set]";
            case g:
              return "[object WeakMap]";
          }
        return t;
      }),
      (e.exports = E);
  },
  function (e, t, n) {
    var a = n(60);
    e.exports = function (e, t, n) {
      var i = null == e ? void 0 : a(e, t);
      return void 0 === i ? n : i;
    };
  },
  function (e, t, n) {
    var a = n(37),
      i = n(23);
    e.exports = function (e, t) {
      for (var n = 0, r = (t = a(t, e)).length; null != e && n < r; )
        e = e[i(t[n++])];
      return n && n == r ? e : void 0;
    };
  },
  function (e, t, n) {
    var a = n(2),
      i = n(38),
      r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      o = /^\w*$/;
    e.exports = function (e, t) {
      if (a(e)) return !1;
      var n = typeof e;
      return (
        !(
          "number" != n &&
          "symbol" != n &&
          "boolean" != n &&
          null != e &&
          !i(e)
        ) ||
        o.test(e) ||
        !r.test(e) ||
        (null != t && e in Object(t))
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e;
    };
  },
  function (e, t, n) {
    var a = n(261),
      i = n(7),
      r = n(38),
      o = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      u = /^0o[0-7]+$/i,
      s = parseInt;
    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (r(e)) return NaN;
      if (i(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = i(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = a(e);
      var n = c.test(e);
      return n || u.test(e) ? s(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.mediaQueriesDefined =
        t.viewportWidthChanged =
        t.actionListPlaybackChanged =
        t.elementStateChanged =
        t.instanceRemoved =
        t.instanceStarted =
        t.instanceAdded =
        t.parameterChanged =
        t.animationFrameChanged =
        t.eventStateChanged =
        t.testFrameRendered =
        t.eventListenerAdded =
        t.clearRequested =
        t.stopRequested =
        t.playbackRequested =
        t.previewRequested =
        t.sessionStopped =
        t.sessionStarted =
        t.sessionInitialized =
        t.rawDataImported =
          void 0);
    var i = a(n(30)),
      r = n(3),
      o = n(14),
      c = r.IX2EngineActionTypes,
      u = c.IX2_RAW_DATA_IMPORTED,
      s = c.IX2_SESSION_INITIALIZED,
      d = c.IX2_SESSION_STARTED,
      l = c.IX2_SESSION_STOPPED,
      f = c.IX2_PREVIEW_REQUESTED,
      p = c.IX2_PLAYBACK_REQUESTED,
      g = c.IX2_STOP_REQUESTED,
      E = c.IX2_CLEAR_REQUESTED,
      y = c.IX2_EVENT_LISTENER_ADDED,
      v = c.IX2_TEST_FRAME_RENDERED,
      I = c.IX2_EVENT_STATE_CHANGED,
      T = c.IX2_ANIMATION_FRAME_CHANGED,
      b = c.IX2_PARAMETER_CHANGED,
      m = c.IX2_INSTANCE_ADDED,
      _ = c.IX2_INSTANCE_STARTED,
      O = c.IX2_INSTANCE_REMOVED,
      h = c.IX2_ELEMENT_STATE_CHANGED,
      R = c.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      S = c.IX2_VIEWPORT_WIDTH_CHANGED,
      A = c.IX2_MEDIA_QUERIES_DEFINED,
      N = o.IX2VanillaUtils.reifyState;
    (t.rawDataImported = function (e) {
      return { type: u, payload: (0, i.default)({}, N(e)) };
    }),
      (t.sessionInitialized = function (e) {
        var t = e.hasBoundaryNodes,
          n = e.reducedMotion;
        return { type: s, payload: { hasBoundaryNodes: t, reducedMotion: n } };
      }),
      (t.sessionStarted = function () {
        return { type: d };
      }),
      (t.sessionStopped = function () {
        return { type: l };
      }),
      (t.previewRequested = function (e) {
        var t = e.rawData,
          n = e.defer;
        return { type: f, payload: { defer: n, rawData: t } };
      }),
      (t.playbackRequested = function (e) {
        var t = e.actionTypeId,
          n = void 0 === t ? r.ActionTypeConsts.GENERAL_START_ACTION : t,
          a = e.actionListId,
          i = e.actionItemId,
          o = e.eventId,
          c = e.allowEvents,
          u = e.immediate,
          s = e.testManual,
          d = e.verbose,
          l = e.rawData;
        return {
          type: p,
          payload: {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            testManual: s,
            eventId: o,
            allowEvents: c,
            immediate: u,
            verbose: d,
            rawData: l,
          },
        };
      }),
      (t.stopRequested = function (e) {
        return { type: g, payload: { actionListId: e } };
      }),
      (t.clearRequested = function () {
        return { type: E };
      }),
      (t.eventListenerAdded = function (e, t) {
        return { type: y, payload: { target: e, listenerParams: t } };
      }),
      (t.testFrameRendered = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return { type: v, payload: { step: e } };
      }),
      (t.eventStateChanged = function (e, t) {
        return { type: I, payload: { stateKey: e, newState: t } };
      }),
      (t.animationFrameChanged = function (e, t) {
        return { type: T, payload: { now: e, parameters: t } };
      }),
      (t.parameterChanged = function (e, t) {
        return { type: b, payload: { key: e, value: t } };
      }),
      (t.instanceAdded = function (e) {
        return { type: m, payload: (0, i.default)({}, e) };
      }),
      (t.instanceStarted = function (e, t) {
        return { type: _, payload: { instanceId: e, time: t } };
      }),
      (t.instanceRemoved = function (e) {
        return { type: O, payload: { instanceId: e } };
      }),
      (t.elementStateChanged = function (e, t, n, a) {
        return {
          type: h,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        };
      }),
      (t.actionListPlaybackChanged = function (e) {
        var t = e.actionListId,
          n = e.isPlaying;
        return { type: R, payload: { actionListId: t, isPlaying: n } };
      }),
      (t.viewportWidthChanged = function (e) {
        var t = e.width,
          n = e.mediaQueries;
        return { type: S, payload: { width: t, mediaQueries: n } };
      }),
      (t.mediaQueriesDefined = function () {
        return { type: A };
      });
  },
  function (e, t, n) {
    var a = n(126),
      i = n(66);
    function r(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (r.prototype = a(i.prototype)),
      (r.prototype.constructor = r),
      (e.exports = r);
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t, n) {
    var a = n(126),
      i = n(66),
      r = 4294967295;
    function o(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = r),
        (this.__views__ = []);
    }
    (o.prototype = a(i.prototype)),
      (o.prototype.constructor = o),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(24));
    window.tram = (function (e) {
      function t(e, t) {
        return new D.Bare().init(e, t);
      }
      function n(e) {
        return e.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase();
        });
      }
      function i(e) {
        var t = parseInt(e.slice(1), 16);
        return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
      }
      function r(e, t, n) {
        return (
          "#" + ((1 << 24) | (e << 16) | (t << 8) | n).toString(16).slice(1)
        );
      }
      function o() {}
      function c(e, t, n) {
        s("Units do not match [" + e + "]: " + t + ", " + n);
      }
      function u(e, t, n) {
        if ((void 0 !== t && (n = t), void 0 === e)) return n;
        var a = n;
        return (
          $.test(e) || !Z.test(e)
            ? (a = parseInt(e, 10))
            : Z.test(e) && (a = 1e3 * parseFloat(e)),
          0 > a && (a = 0),
          a == a ? a : n
        );
      }
      function s(e) {
        z.debug && window && window.console.warn(e);
      }
      var d = (function (e, t, n) {
          function i(e) {
            return "object" == (0, a.default)(e);
          }
          function r(e) {
            return "function" == typeof e;
          }
          function o() {}
          return function n(a, c) {
            function u() {
              var e = new s();
              return r(e.init) && e.init.apply(e, arguments), e;
            }
            function s() {}
            void 0 === c && ((c = a), (a = Object)), (u.Bare = s);
            var d,
              l = (o[e] = a[e]),
              f = (s[e] = u[e] = new o());
            return (
              (f.constructor = u),
              (u.mixin = function (t) {
                return (s[e] = u[e] = n(u, t)[e]), u;
              }),
              (u.open = function (e) {
                if (
                  ((d = {}),
                  r(e) ? (d = e.call(u, f, l, u, a)) : i(e) && (d = e),
                  i(d))
                )
                  for (var n in d) t.call(d, n) && (f[n] = d[n]);
                return r(f.init) || (f.init = a), u;
              }),
              u.open(c)
            );
          };
        })("prototype", {}.hasOwnProperty),
        l = {
          ease: [
            "ease",
            function (e, t, n, a) {
              var i = (e /= a) * e,
                r = i * e;
              return (
                t +
                n * (-2.75 * r * i + 11 * i * i + -15.5 * r + 8 * i + 0.25 * e)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (e, t, n, a) {
              var i = (e /= a) * e,
                r = i * e;
              return t + n * (-1 * r * i + 3 * i * i + -3 * r + 2 * i);
            },
          ],
          "ease-out": [
            "ease-out",
            function (e, t, n, a) {
              var i = (e /= a) * e,
                r = i * e;
              return (
                t +
                n * (0.3 * r * i + -1.6 * i * i + 2.2 * r + -1.8 * i + 1.9 * e)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (e, t, n, a) {
              var i = (e /= a) * e,
                r = i * e;
              return t + n * (2 * r * i + -5 * i * i + 2 * r + 2 * i);
            },
          ],
          linear: [
            "linear",
            function (e, t, n, a) {
              return (n * e) / a + t;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (e, t, n, a) {
              return n * (e /= a) * e + t;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (e, t, n, a) {
              return -n * (e /= a) * (e - 2) + t;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (e, t, n, a) {
              return (e /= a / 2) < 1
                ? (n / 2) * e * e + t
                : (-n / 2) * (--e * (e - 2) - 1) + t;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (e, t, n, a) {
              return n * (e /= a) * e * e + t;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (e, t, n, a) {
              return n * ((e = e / a - 1) * e * e + 1) + t;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (e, t, n, a) {
              return (e /= a / 2) < 1
                ? (n / 2) * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e + 2) + t;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (e, t, n, a) {
              return n * (e /= a) * e * e * e + t;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (e, t, n, a) {
              return -n * ((e = e / a - 1) * e * e * e - 1) + t;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (e, t, n, a) {
              return (e /= a / 2) < 1
                ? (n / 2) * e * e * e * e + t
                : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (e, t, n, a) {
              return n * (e /= a) * e * e * e * e + t;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (e, t, n, a) {
              return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (e, t, n, a) {
              return (e /= a / 2) < 1
                ? (n / 2) * e * e * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (e, t, n, a) {
              return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (e, t, n, a) {
              return n * Math.sin((e / a) * (Math.PI / 2)) + t;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (e, t, n, a) {
              return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (e, t, n, a) {
              return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (e, t, n, a) {
              return e === a ? t + n : n * (1 - Math.pow(2, (-10 * e) / a)) + t;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (e, t, n, a) {
              return 0 === e
                ? t
                : e === a
                ? t + n
                : (e /= a / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (n / 2) * (2 - Math.pow(2, -10 * --e)) + t;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (e, t, n, a) {
              return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (e, t, n, a) {
              return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (e, t, n, a) {
              return (e /= a / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (e, t, n, a, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * (e /= a) * e * ((i + 1) * e - i) + t
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (e, t, n, a, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (e, t, n, a, i) {
              return (
                void 0 === i && (i = 1.70158),
                (e /= a / 2) < 1
                  ? (n / 2) * e * e * ((1 + (i *= 1.525)) * e - i) + t
                  : (n / 2) *
                      ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) +
                    t
              );
            },
          ],
        },
        f = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        p = document,
        g = window,
        E = "bkwld-tram",
        y = /[\-\.0-9]/g,
        v = /[A-Z]/,
        I = "number",
        T = /^(rgb|#)/,
        b = /(em|cm|mm|in|pt|pc|px)$/,
        m = /(em|cm|mm|in|pt|pc|px|%)$/,
        _ = /(deg|rad|turn)$/,
        O = "unitless",
        h = /(all|none) 0s ease 0s/,
        R = /^(width|height)$/,
        S = " ",
        A = p.createElement("a"),
        N = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        C = function (e) {
          if (e in A.style) return { dom: e, css: e };
          var t,
            n,
            a = "",
            i = e.split("-");
          for (t = 0; t < i.length; t++)
            a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
          for (t = 0; t < N.length; t++)
            if ((n = N[t] + a) in A.style) return { dom: n, css: L[t] + e };
        },
        P = (t.support = {
          bind: Function.prototype.bind,
          transform: C("transform"),
          transition: C("transition"),
          backface: C("backface-visibility"),
          timing: C("transition-timing-function"),
        });
      if (P.transition) {
        var x = P.timing.dom;
        if (((A.style[x] = l["ease-in-back"][0]), !A.style[x]))
          for (var w in f) l[w][0] = f[w];
      }
      var M = (t.frame = (function () {
          var e =
            g.requestAnimationFrame ||
            g.webkitRequestAnimationFrame ||
            g.mozRequestAnimationFrame ||
            g.oRequestAnimationFrame ||
            g.msRequestAnimationFrame;
          return e && P.bind
            ? e.bind(g)
            : function (e) {
                g.setTimeout(e, 16);
              };
        })()),
        U = (t.now = (function () {
          var e = g.performance,
            t = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
          return t && P.bind
            ? t.bind(e)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        G = d(function (t) {
          function i(e, t) {
            var n = (function (e) {
                for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                  var i = e[t];
                  i && a.push(i);
                }
                return a;
              })(("" + e).split(S)),
              a = n[0];
            t = t || {};
            var i = K[a];
            if (!i) return s("Unsupported property: " + a);
            if (!t.weak || !this.props[a]) {
              var r = i[0],
                o = this.props[a];
              return (
                o || (o = this.props[a] = new r.Bare()),
                o.init(this.$el, n, i, t),
                o
              );
            }
          }
          function r(e, t, n) {
            if (e) {
              var r = (0, a.default)(e);
              if (
                (t ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                "number" == r && t)
              )
                return (
                  (this.timer = new H({
                    duration: e,
                    context: this,
                    complete: o,
                  })),
                  void (this.active = !0)
                );
              if ("string" == r && t) {
                switch (e) {
                  case "hide":
                    d.call(this);
                    break;
                  case "stop":
                    c.call(this);
                    break;
                  case "redraw":
                    l.call(this);
                    break;
                  default:
                    i.call(this, e, n && n[1]);
                }
                return o.call(this);
              }
              if ("function" == r) return void e.call(this, this);
              if ("object" == r) {
                var s = 0;
                p.call(
                  this,
                  e,
                  function (e, t) {
                    e.span > s && (s = e.span), e.stop(), e.animate(t);
                  },
                  function (e) {
                    "wait" in e && (s = u(e.wait, 0));
                  }
                ),
                  f.call(this),
                  s > 0 &&
                    ((this.timer = new H({ duration: s, context: this })),
                    (this.active = !0),
                    t && (this.timer.complete = o));
                var g = this,
                  E = !1,
                  y = {};
                M(function () {
                  p.call(g, e, function (e) {
                    e.active && ((E = !0), (y[e.name] = e.nextStyle));
                  }),
                    E && g.$el.css(y);
                });
              }
            }
          }
          function o() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var e = this.queue.shift();
              r.call(this, e.options, !0, e.args);
            }
          }
          function c(e) {
            var t;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              "string" == typeof e
                ? ((t = {})[e] = 1)
                : (t =
                    "object" == (0, a.default)(e) && null != e
                      ? e
                      : this.props),
              p.call(this, t, g),
              f.call(this);
          }
          function d() {
            c.call(this), (this.el.style.display = "none");
          }
          function l() {
            this.el.offsetHeight;
          }
          function f() {
            var e,
              t,
              n = [];
            for (e in (this.upstream && n.push(this.upstream), this.props))
              (t = this.props[e]).active && n.push(t.string);
            (n = n.join(",")),
              this.style !== n &&
                ((this.style = n), (this.el.style[P.transition.dom] = n));
          }
          function p(e, t, a) {
            var r,
              o,
              c,
              u,
              s = t !== g,
              d = {};
            for (r in e)
              (c = e[r]),
                r in q
                  ? (d.transform || (d.transform = {}), (d.transform[r] = c))
                  : (v.test(r) && (r = n(r)),
                    r in K ? (d[r] = c) : (u || (u = {}), (u[r] = c)));
            for (r in d) {
              if (((c = d[r]), !(o = this.props[r]))) {
                if (!s) continue;
                o = i.call(this, r);
              }
              t.call(this, o, c);
            }
            a && u && a.call(this, u);
          }
          function g(e) {
            e.stop();
          }
          function y(e, t) {
            e.set(t);
          }
          function I(e) {
            this.$el.css(e);
          }
          function T(e, n) {
            t[e] = function () {
              return this.children
                ? function (e, t) {
                    var n,
                      a = this.children.length;
                    for (n = 0; a > n; n++) e.apply(this.children[n], t);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (t.init = function (t) {
            if (
              ((this.$el = e(t)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              z.keepInherited && !z.fallback)
            ) {
              var n = W(this.el, "transition");
              n && !h.test(n) && (this.upstream = n);
            }
            P.backface &&
              z.hideBackface &&
              B(this.el, P.backface.css, "hidden");
          }),
            T("add", i),
            T("start", r),
            T("wait", function (e) {
              (e = u(e, 0)),
                this.active
                  ? this.queue.push({ options: e })
                  : ((this.timer = new H({
                      duration: e,
                      context: this,
                      complete: o,
                    })),
                    (this.active = !0));
            }),
            T("then", function (e) {
              return this.active
                ? (this.queue.push({ options: e, args: arguments }),
                  void (this.timer.complete = o))
                : s(
                    "No active transition timer. Use start() or wait() before then()."
                  );
            }),
            T("next", o),
            T("stop", c),
            T("set", function (e) {
              c.call(this, e), p.call(this, e, y, I);
            }),
            T("show", function (e) {
              "string" != typeof e && (e = "block"),
                (this.el.style.display = e);
            }),
            T("hide", d),
            T("redraw", l),
            T("destroy", function () {
              c.call(this),
                e.removeData(this.el, E),
                (this.$el = this.el = null);
            });
        }),
        D = d(G, function (t) {
          function n(t, n) {
            var a = e.data(t, E) || e.data(t, E, new G.Bare());
            return a.el || a.init(t), n ? a.start(n) : a;
          }
          t.init = function (t, a) {
            var i = e(t);
            if (!i.length) return this;
            if (1 === i.length) return n(i[0], a);
            var r = [];
            return (
              i.each(function (e, t) {
                r.push(n(t, a));
              }),
              (this.children = r),
              this
            );
          };
        }),
        V = d(function (e) {
          function t() {
            var e = this.get();
            this.update("auto");
            var t = this.get();
            return this.update(e), t;
          }
          function n(e) {
            var t = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e);
            return (t ? r(t[1], t[2], t[3]) : e).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          (e.init = function (e, t, n, a) {
            (this.$el = e), (this.el = e[0]);
            var i = t[0];
            n[2] && (i = n[2]),
              Q[i] && (i = Q[i]),
              (this.name = i),
              (this.type = n[1]),
              (this.duration = u(t[1], this.duration, 500)),
              (this.ease = (function (e, t, n) {
                return void 0 !== t && (n = t), e in l ? e : n;
              })(t[2], this.ease, "ease")),
              (this.delay = u(t[3], this.delay, 0)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = R.test(this.name)),
              (this.unit = a.unit || this.unit || z.defaultUnit),
              (this.angle = a.angle || this.angle || z.defaultAngle),
              z.fallback || a.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    S +
                    this.duration +
                    "ms" +
                    ("ease" != this.ease ? S + l[this.ease][0] : "") +
                    (this.delay ? S + this.delay + "ms" : "")));
          }),
            (e.set = function (e) {
              (e = this.convert(e, this.type)), this.update(e), this.redraw();
            }),
            (e.transition = function (e) {
              (this.active = !0),
                (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  "auto" == e && (e = t.call(this))),
                (this.nextStyle = e);
            }),
            (e.fallback = function (e) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == n && (n = this.convert(this.get(), this.type)),
                  "auto" == e && (e = t.call(this))),
                (this.tween = new j({
                  from: n,
                  to: e,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (e.get = function () {
              return W(this.el, this.name);
            }),
            (e.update = function (e) {
              B(this.el, this.name, e);
            }),
            (e.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                B(this.el, this.name, this.get()));
              var e = this.tween;
              e && e.context && e.destroy();
            }),
            (e.convert = function (e, t) {
              if ("auto" == e && this.auto) return e;
              var i,
                r = "number" == typeof e,
                o = "string" == typeof e;
              switch (t) {
                case I:
                  if (r) return e;
                  if (o && "" === e.replace(y, "")) return +e;
                  i = "number(unitless)";
                  break;
                case T:
                  if (o) {
                    if ("" === e && this.original) return this.original;
                    if (t.test(e))
                      return "#" == e.charAt(0) && 7 == e.length ? e : n(e);
                  }
                  i = "hex or rgb string";
                  break;
                case b:
                  if (r) return e + this.unit;
                  if (o && t.test(e)) return e;
                  i = "number(px) or string(unit)";
                  break;
                case m:
                  if (r) return e + this.unit;
                  if (o && t.test(e)) return e;
                  i = "number(px) or string(unit or %)";
                  break;
                case _:
                  if (r) return e + this.angle;
                  if (o && t.test(e)) return e;
                  i = "number(deg) or string(angle)";
                  break;
                case O:
                  if (r) return e;
                  if (o && m.test(e)) return e;
                  i = "number(unitless) or string(unit or %)";
              }
              return (
                (function (e, t) {
                  s(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      (0, a.default)(t) +
                      "] " +
                      t
                  );
                })(0, e),
                e
              );
            }),
            (e.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        X = d(V, function (e, t) {
          e.init = function () {
            t.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), T));
          };
        }),
        F = d(V, function (e, t) {
          (e.init = function () {
            t.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (e.get = function () {
              return this.$el[this.name]();
            }),
            (e.update = function (e) {
              this.$el[this.name](e);
            });
        }),
        k = d(V, function (e, t) {
          function n(e, t) {
            var n, a, i, r, o;
            for (n in e)
              (i = (r = q[n])[0]),
                (a = r[1] || n),
                (o = this.convert(e[n], i)),
                t.call(this, a, o, i);
          }
          (e.init = function () {
            t.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                q.perspective &&
                  z.perspective &&
                  ((this.current.perspective = z.perspective),
                  B(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (e.set = function (e) {
              n.call(this, e, function (e, t) {
                this.current[e] = t;
              }),
                B(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (e.transition = function (e) {
              var t = this.values(e);
              this.tween = new Y({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                a = {};
              for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(a));
            }),
            (e.fallback = function (e) {
              var t = this.values(e);
              this.tween = new Y({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (e.update = function () {
              B(this.el, this.name, this.style(this.current));
            }),
            (e.style = function (e) {
              var t,
                n = "";
              for (t in e) n += t + "(" + e[t] + ") ";
              return n;
            }),
            (e.values = function (e) {
              var t,
                a = {};
              return (
                n.call(this, e, function (e, n, i) {
                  (a[e] = n),
                    void 0 === this.current[e] &&
                      ((t = 0),
                      ~e.indexOf("scale") && (t = 1),
                      (this.current[e] = this.convert(t, i)));
                }),
                a
              );
            });
        }),
        j = d(function (t) {
          function n() {
            var e,
              t,
              a,
              i = u.length;
            if (i) for (M(n), t = U(), e = i; e--; ) (a = u[e]) && a.render(t);
          }
          var a = { ease: l.ease[1], from: 0, to: 1 };
          (t.init = function (e) {
            (this.duration = e.duration || 0), (this.delay = e.delay || 0);
            var t = e.ease || a.ease;
            l[t] && (t = l[t][1]),
              "function" != typeof t && (t = a.ease),
              (this.ease = t),
              (this.update = e.update || o),
              (this.complete = e.complete || o),
              (this.context = e.context || this),
              (this.name = e.name);
            var n = e.from,
              i = e.to;
            void 0 === n && (n = a.from),
              void 0 === i && (i = a.to),
              (this.unit = e.unit || ""),
              "number" == typeof n && "number" == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = U()),
              !1 !== e.autoplay && this.play();
          }),
            (t.play = function () {
              this.active ||
                (this.start || (this.start = U()),
                (this.active = !0),
                this,
                1 === u.push(this) && M(n));
            }),
            (t.stop = function () {
              var t, n;
              this.active &&
                ((this.active = !1),
                this,
                (n = e.inArray(this, u)) >= 0 &&
                  ((t = u.slice(n + 1)),
                  (u.length = n),
                  t.length && (u = u.concat(t))));
            }),
            (t.render = function (e) {
              var t,
                n = e - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var a = this.ease(n, 0, 1, this.duration);
                return (
                  (t = this.startRGB
                    ? (function (e, t, n) {
                        return r(
                          e[0] + n * (t[0] - e[0]),
                          e[1] + n * (t[1] - e[1]),
                          e[2] + n * (t[2] - e[2])
                        );
                      })(this.startRGB, this.endRGB, a)
                    : (function (e) {
                        return Math.round(e * s) / s;
                      })(this.begin + a * this.change)),
                  (this.value = t + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (t = this.endHex || this.begin + this.change),
                (this.value = t + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (t.format = function (e, t) {
              if (((t += ""), "#" == (e += "").charAt(0)))
                return (
                  (this.startRGB = i(t)),
                  (this.endRGB = i(e)),
                  (this.endHex = e),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = t.replace(y, "");
                n !== e.replace(y, "") && c("tween", t, e), (this.unit = n);
              }
              (t = parseFloat(t)),
                (e = parseFloat(e)),
                (this.begin = this.value = t),
                (this.change = e - t);
            }),
            (t.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var u = [],
            s = 1e3;
        }),
        H = d(j, function (e) {
          (e.init = function (e) {
            (this.duration = e.duration || 0),
              (this.complete = e.complete || o),
              (this.context = e.context),
              this.play();
          }),
            (e.render = function (e) {
              e - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Y = d(j, function (e, t) {
          (e.init = function (e) {
            var t, n;
            for (t in ((this.context = e.context),
            (this.update = e.update),
            (this.tweens = []),
            (this.current = e.current),
            e.values))
              (n = e.values[t]),
                this.current[t] !== n &&
                  this.tweens.push(
                    new j({
                      name: t,
                      from: this.current[t],
                      to: n,
                      duration: e.duration,
                      delay: e.delay,
                      ease: e.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (e.render = function (e) {
              var t,
                n,
                a = !1;
              for (t = this.tweens.length; t--; )
                (n = this.tweens[t]).context &&
                  (n.render(e), (this.current[n.name] = n.value), (a = !0));
              return a
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (e.destroy = function () {
              if ((t.destroy.call(this), this.tweens)) {
                var e;
                for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        z = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !P.transition,
          agentTests: [],
        });
      (t.fallback = function (e) {
        if (!P.transition) return (z.fallback = !0);
        z.agentTests.push("(" + e + ")");
        var t = new RegExp(z.agentTests.join("|"), "i");
        z.fallback = t.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (e) {
          return new j(e);
        }),
        (t.delay = function (e, t, n) {
          return new H({ complete: t, duration: e, context: n });
        }),
        (e.fn.tram = function (e) {
          return t.call(null, this, e);
        });
      var B = e.style,
        W = e.css,
        Q = { transform: P.transform && P.transform.css },
        K = {
          color: [X, T],
          background: [X, T, "background-color"],
          "outline-color": [X, T],
          "border-color": [X, T],
          "border-top-color": [X, T],
          "border-right-color": [X, T],
          "border-bottom-color": [X, T],
          "border-left-color": [X, T],
          "border-width": [V, b],
          "border-top-width": [V, b],
          "border-right-width": [V, b],
          "border-bottom-width": [V, b],
          "border-left-width": [V, b],
          "border-spacing": [V, b],
          "letter-spacing": [V, b],
          margin: [V, b],
          "margin-top": [V, b],
          "margin-right": [V, b],
          "margin-bottom": [V, b],
          "margin-left": [V, b],
          padding: [V, b],
          "padding-top": [V, b],
          "padding-right": [V, b],
          "padding-bottom": [V, b],
          "padding-left": [V, b],
          "outline-width": [V, b],
          opacity: [V, I],
          top: [V, m],
          right: [V, m],
          bottom: [V, m],
          left: [V, m],
          "font-size": [V, m],
          "text-indent": [V, m],
          "word-spacing": [V, m],
          width: [V, m],
          "min-width": [V, m],
          "max-width": [V, m],
          height: [V, m],
          "min-height": [V, m],
          "max-height": [V, m],
          "line-height": [V, O],
          "scroll-top": [F, I, "scrollTop"],
          "scroll-left": [F, I, "scrollLeft"],
        },
        q = {};
      P.transform &&
        ((K.transform = [k]),
        (q = {
          x: [m, "translateX"],
          y: [m, "translateY"],
          rotate: [_],
          rotateX: [_],
          rotateY: [_],
          scale: [I],
          scaleX: [I],
          scaleY: [I],
          skew: [_],
          skewX: [_],
          skewY: [_],
        })),
        P.transform &&
          P.backface &&
          ((q.z = [m, "translateZ"]),
          (q.rotateZ = [_]),
          (q.scaleZ = [I]),
          (q.perspective = [b]));
      var $ = /ms/,
        Z = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  },
  function (e, t, n) {
    var a = n(13),
      i = n(39),
      r = n(143),
      o = n(70),
      c = n(26),
      u = n(72),
      s = n(9),
      d = n(79),
      l = Object.getOwnPropertyDescriptor;
    t.f = a
      ? l
      : function (e, t) {
          if (((e = c(e)), (t = u(t)), d))
            try {
              return l(e, t);
            } catch (e) {}
          if (s(e, t)) return o(!i(r.f, e, t), e[t]);
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    var a = n(0).TypeError;
    e.exports = function (e) {
      if (null == e) throw a("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var a = n(146),
      i = n(73);
    e.exports = function (e) {
      var t = a(e, "string");
      return i(t) ? t : t + "";
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(27),
      r = n(6),
      o = n(147),
      c = n(74),
      u = a.Object;
    e.exports = c
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = i("Symbol");
          return r(t) && o(t.prototype, u(e));
        };
  },
  function (e, t, n) {
    var a = n(75);
    e.exports = a && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    var a = n(148),
      i = n(18);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && a && a < 41)
        );
      });
  },
  function (e, t, n) {
    var a = n(0),
      i = n(77),
      r = n(9),
      o = n(78),
      c = n(75),
      u = n(74),
      s = i("wks"),
      d = a.Symbol,
      l = d && d.for,
      f = u ? d : (d && d.withoutSetter) || o;
    e.exports = function (e) {
      if (!r(s, e) || (!c && "string" != typeof s[e])) {
        var t = "Symbol." + e;
        c && r(d, e) ? (s[e] = d[e]) : (s[e] = u && l ? l(t) : f(t));
      }
      return s[e];
    };
  },
  function (e, t, n) {
    var a = n(154),
      i = n(40);
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: a ? "pure" : "global",
      copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var a = n(4),
      i = 0,
      r = Math.random(),
      o = a((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + r, 36);
    };
  },
  function (e, t, n) {
    var a = n(13),
      i = n(18),
      r = n(80);
    e.exports =
      !a &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(r("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var a = n(0),
      i = n(19),
      r = a.document,
      o = i(r) && i(r.createElement);
    e.exports = function (e) {
      return o ? r.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var a = n(4),
      i = n(6),
      r = n(40),
      o = a(Function.toString);
    i(r.inspectSource) ||
      (r.inspectSource = function (e) {
        return o(e);
      }),
      (e.exports = r.inspectSource);
  },
  function (e, t, n) {
    var a = n(77),
      i = n(78),
      r = a("keys");
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function (e, t, n) {
    var a = n(4),
      i = n(9),
      r = n(26),
      o = n(84).indexOf,
      c = n(43),
      u = a([].push);
    e.exports = function (e, t) {
      var n,
        a = r(e),
        s = 0,
        d = [];
      for (n in a) !i(c, n) && i(a, n) && u(d, n);
      for (; t.length > s; ) i(a, (n = t[s++])) && (~o(d, n) || u(d, n));
      return d;
    };
  },
  function (e, t, n) {
    var a = n(26),
      i = n(163),
      r = n(164),
      o = function (e) {
        return function (t, n, o) {
          var c,
            u = a(t),
            s = r(u),
            d = i(o, s);
          if (e && n != n) {
            for (; s > d; ) if ((c = u[d++]) != c) return !0;
          } else
            for (; s > d; d++)
              if ((e || d in u) && u[d] === n) return e || d || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: o(!0), indexOf: o(!1) };
  },
  function (e, t) {
    var n = Math.ceil,
      a = Math.floor;
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : (t > 0 ? a : n)(t);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(45);
    n.d(t, "createStore", function () {
      return a.default;
    });
    var i = n(89);
    n.d(t, "combineReducers", function () {
      return i.default;
    });
    var r = n(91);
    n.d(t, "bindActionCreators", function () {
      return r.default;
    });
    var o = n(92);
    n.d(t, "applyMiddleware", function () {
      return o.default;
    });
    var c = n(46);
    n.d(t, "compose", function () {
      return c.default;
    }),
      n(90);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(174),
      i = n(179),
      r = n(181),
      o = Function.prototype,
      c = Object.prototype,
      u = o.toString,
      s = c.hasOwnProperty,
      d = u.call(Object);
    t.default = function (e) {
      if (!Object(r.default)(e) || "[object Object]" != Object(a.default)(e))
        return !1;
      var t = Object(i.default)(e);
      if (null === t) return !0;
      var n = s.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n instanceof n && u.call(n) == d;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(175).default.Symbol;
    t.default = a;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
    var a = n(45);
    function i(e, t) {
      var n = t && t.type;
      return (
        "Given action " +
        ((n && '"' + n.toString() + '"') || "an action") +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function r(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        "function" == typeof e[o] && (n[o] = e[o]);
      }
      var c,
        u = Object.keys(n);
      try {
        !(function (e) {
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            if (void 0 === n(void 0, { type: a.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  t +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  "@@redux/PROBE_UNKNOWN_ACTION_" +
                  Math.random().toString(36).substring(7).split("").join("."),
              })
            )
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  a.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (e) {
        c = e;
      }
      return function () {
        var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          t = arguments[1];
        if (c) throw c;
        for (var a = !1, r = {}, o = 0; o < u.length; o++) {
          var s = u[o],
            d = n[s],
            l = e[s],
            f = d(l, t);
          if (void 0 === f) {
            var p = i(s, t);
            throw new Error(p);
          }
          (r[s] = f), (a = a || f !== l);
        }
        return a ? r : e;
      };
    }
    n(87), n(90);
  },
  function (e, t, n) {
    "use strict";
    function a(e) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(e);
      try {
        throw new Error(e);
      } catch (e) {}
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    function a(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function i(e, t) {
      if ("function" == typeof e) return a(e, t);
      if ("object" != typeof e || null === e)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === e ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), i = {}, r = 0; r < n.length; r++) {
        var o = n[r],
          c = e[o];
        "function" == typeof c && (i[o] = a(c, t));
      }
      return i;
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
    var a = n(46),
      i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        };
    function r() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return function (n, r, o) {
          var c,
            u = e(n, r, o),
            s = u.dispatch,
            d = {
              getState: u.getState,
              dispatch: function (e) {
                return s(e);
              },
            };
          return (
            (c = t.map(function (e) {
              return e(d);
            })),
            (s = a.default.apply(void 0, c)(u.dispatch)),
            i({}, u, { dispatch: s })
          );
        };
      };
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActionAppliesTo = t.ActionTypeConsts = void 0),
      (t.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
      (t.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      });
  },
  function (e, t, n) {
    var a = n(95)(n(259));
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(10),
      i = n(16),
      r = n(35);
    e.exports = function (e) {
      return function (t, n, o) {
        var c = Object(t);
        if (!i(t)) {
          var u = a(n, 3);
          (t = r(t)),
            (n = function (e) {
              return u(c[e], e, c);
            });
        }
        var s = e(t, n, o);
        return s > -1 ? c[u ? t[s] : s] : void 0;
      };
    };
  },
  function (e, t, n) {
    var a = n(31),
      i = n(201),
      r = n(202),
      o = n(203),
      c = n(204),
      u = n(205);
    function s(e) {
      var t = (this.__data__ = new a(e));
      this.size = t.size;
    }
    (s.prototype.clear = i),
      (s.prototype.delete = r),
      (s.prototype.get = o),
      (s.prototype.has = c),
      (s.prototype.set = u),
      (e.exports = s);
  },
  function (e, t, n) {
    var a = n(15),
      i = n(7);
    e.exports = function (e) {
      if (!i(e)) return !1;
      var t = a(e);
      return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
      );
    };
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }.call(this, n(25)));
  },
  function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
  },
  function (e, t, n) {
    var a = n(224),
      i = n(12);
    e.exports = function e(t, n, r, o, c) {
      return (
        t === n ||
        (null == t || null == n || (!i(t) && !i(n))
          ? t != t && n != n
          : a(t, n, r, o, e, c))
      );
    };
  },
  function (e, t, n) {
    var a = n(225),
      i = n(228),
      r = n(229);
    e.exports = function (e, t, n, o, c, u) {
      var s = 1 & n,
        d = e.length,
        l = t.length;
      if (d != l && !(s && l > d)) return !1;
      var f = u.get(e),
        p = u.get(t);
      if (f && p) return f == t && p == e;
      var g = -1,
        E = !0,
        y = 2 & n ? new a() : void 0;
      for (u.set(e, t), u.set(t, e); ++g < d; ) {
        var v = e[g],
          I = t[g];
        if (o) var T = s ? o(I, v, g, t, e, u) : o(v, I, g, e, t, u);
        if (void 0 !== T) {
          if (T) continue;
          E = !1;
          break;
        }
        if (y) {
          if (
            !i(t, function (e, t) {
              if (!r(y, t) && (v === e || c(v, e, n, o, u))) return y.push(t);
            })
          ) {
            E = !1;
            break;
          }
        } else if (v !== I && !c(v, I, n, o, u)) {
          E = !1;
          break;
        }
      }
      return u.delete(e), u.delete(t), E;
    };
  },
  function (e, t, n) {
    var a = n(51),
      i = n(2);
    e.exports = function (e, t, n) {
      var r = t(e);
      return i(e) ? r : a(r, n(e));
    };
  },
  function (e, t, n) {
    var a = n(236),
      i = n(104),
      r = Object.prototype.propertyIsEnumerable,
      o = Object.getOwnPropertySymbols,
      c = o
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                a(o(e), function (t) {
                  return r.call(e, t);
                }));
          }
        : i;
    e.exports = c;
  },
  function (e, t) {
    e.exports = function () {
      return [];
    };
  },
  function (e, t, n) {
    var a = n(237),
      i = n(36),
      r = n(2),
      o = n(52),
      c = n(53),
      u = n(54),
      s = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
      var n = r(e),
        d = !n && i(e),
        l = !n && !d && o(e),
        f = !n && !d && !l && u(e),
        p = n || d || l || f,
        g = p ? a(e.length, String) : [],
        E = g.length;
      for (var y in e)
        (!t && !s.call(e, y)) ||
          (p &&
            ("length" == y ||
              (l && ("offset" == y || "parent" == y)) ||
              (f &&
                ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
              c(y, E))) ||
          g.push(y);
      return g;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    };
  },
  function (e, t, n) {
    var a = n(11)(n(5), "WeakMap");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(7);
    e.exports = function (e) {
      return e == e && !a(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, a = null == e ? 0 : e.length, i = Array(a); ++n < a; )
        i[n] = t(e[n], n, e);
      return i;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, a) {
      for (var i = e.length, r = n + (a ? 1 : -1); a ? r-- : ++r < i; )
        if (t(e[r], r, e)) return r;
      return -1;
    };
  },
  function (e, t, n) {
    var a = n(260);
    e.exports = function (e) {
      var t = a(e),
        n = t % 1;
      return t == t ? (n ? t - n : t) : 0;
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.inQuad = function (e) {
        return Math.pow(e, 2);
      }),
      (t.outQuad = function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      }),
      (t.inOutQuad = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }),
      (t.inCubic = function (e) {
        return Math.pow(e, 3);
      }),
      (t.outCubic = function (e) {
        return Math.pow(e - 1, 3) + 1;
      }),
      (t.inOutCubic = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }),
      (t.inQuart = function (e) {
        return Math.pow(e, 4);
      }),
      (t.outQuart = function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      }),
      (t.inOutQuart = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }),
      (t.inQuint = function (e) {
        return Math.pow(e, 5);
      }),
      (t.outQuint = function (e) {
        return Math.pow(e - 1, 5) + 1;
      }),
      (t.inOutQuint = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }),
      (t.inSine = function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      }),
      (t.outSine = function (e) {
        return Math.sin(e * (Math.PI / 2));
      }),
      (t.inOutSine = function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }),
      (t.inExpo = function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }),
      (t.outExpo = function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      }),
      (t.inOutExpo = function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      }),
      (t.inCirc = function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }),
      (t.outCirc = function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }),
      (t.inOutCirc = function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }),
      (t.outBounce = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }),
      (t.inBack = function (e) {
        return e * e * ((r + 1) * e - r);
      }),
      (t.outBack = function (e) {
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
      }),
      (t.inOutBack = function (e) {
        var t = r;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      }),
      (t.inElastic = function (e) {
        var t = r,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n));
      }),
      (t.outElastic = function (e) {
        var t = r,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
              1);
      }),
      (t.inOutElastic = function (e) {
        var t = r,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1
              ? a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                -0.5
              : a *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / n) *
                  0.5 +
                1);
      }),
      (t.swingFromTo = function (e) {
        var t = r;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      }),
      (t.swingFrom = function (e) {
        return e * e * ((r + 1) * e - r);
      }),
      (t.swingTo = function (e) {
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
      }),
      (t.bounce = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }),
      (t.bouncePast = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }),
      (t.easeInOut = t.easeOut = t.easeIn = t.ease = void 0);
    var i = a(n(116)),
      r = 1.70158,
      o = (0, i.default)(0.25, 0.1, 0.25, 1);
    t.ease = o;
    var c = (0, i.default)(0.42, 0, 1, 1);
    t.easeIn = c;
    var u = (0, i.default)(0, 0, 0.58, 1);
    t.easeOut = u;
    var s = (0, i.default)(0.42, 0, 0.58, 1);
    t.easeInOut = s;
  },
  function (e, t) {
    var n = 4,
      a = 0.001,
      i = 1e-7,
      r = 10,
      o = 11,
      c = 1 / (o - 1),
      u = "function" == typeof Float32Array;
    function s(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function d(e, t) {
      return 3 * t - 6 * e;
    }
    function l(e) {
      return 3 * e;
    }
    function f(e, t, n) {
      return ((s(t, n) * e + d(t, n)) * e + l(t)) * e;
    }
    function p(e, t, n) {
      return 3 * s(t, n) * e * e + 2 * d(t, n) * e + l(t);
    }
    e.exports = function (e, t, s, d) {
      if (!(0 <= e && e <= 1 && 0 <= s && s <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var l = u ? new Float32Array(o) : new Array(o);
      if (e !== t || s !== d) for (var g = 0; g < o; ++g) l[g] = f(g * c, e, s);
      function E(t) {
        for (var u = 0, d = 1, g = o - 1; d !== g && l[d] <= t; ++d) u += c;
        var E = u + ((t - l[--d]) / (l[d + 1] - l[d])) * c,
          y = p(E, e, s);
        return y >= a
          ? (function (e, t, a, i) {
              for (var r = 0; r < n; ++r) {
                var o = p(t, a, i);
                if (0 === o) return t;
                t -= (f(t, a, i) - e) / o;
              }
              return t;
            })(t, E, e, s)
          : 0 === y
          ? E
          : (function (e, t, n, a, o) {
              var c,
                u,
                s = 0;
              do {
                (c = f((u = t + (n - t) / 2), a, o) - e) > 0
                  ? (n = u)
                  : (t = u);
              } while (Math.abs(c) > i && ++s < r);
              return u;
            })(t, u, u + c, e, s);
      }
      return function (n) {
        return e === t && s === d
          ? n
          : 0 === n
          ? 0
          : 1 === n
          ? 1
          : f(E(n), t, d);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(118)),
      i = n(1),
      r = n(17);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.optimizeFloat = u),
      (t.createBezierEasing = function (e) {
        return c.default.apply(void 0, (0, a.default)(e));
      }),
      (t.applyEasing = function (e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : u(n ? (t > 0 ? n(t) : t) : t > 0 && e && o[e] ? o[e](t) : t);
      });
    var o = r(n(115)),
      c = i(n(116));
    function u(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        a = Math.pow(n, t),
        i = Number(Math.round(e * a) / a);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
  },
  function (e, t, n) {
    var a = n(263),
      i = n(264),
      r = n(265);
    e.exports = function (e) {
      return a(e) || i(e) || r();
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(20));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isPluginType = function (e) {
        return e === r.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginDuration =
        t.getPluginOrigin =
        t.getPluginConfig =
          void 0);
    var i = n(267),
      r = n(3),
      o = n(47),
      c = (0, a.default)({}, r.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin,
      }),
      u = function (e) {
        return function (t) {
          if (!o.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = c[t];
          if (!n) throw new Error("IX2 no plugin configured for: ".concat(t));
          var a = n[e];
          if (!a) throw new Error("IX2 invalid plugin method: ".concat(e));
          return a;
        };
      },
      s = u("getConfig");
    t.getPluginConfig = s;
    var d = u("getOrigin");
    t.getPluginOrigin = d;
    var l = u("getDuration");
    t.getPluginDuration = l;
    var f = u("getDestination");
    t.getPluginDestination = f;
    var p = u("createInstance");
    t.createPluginInstance = p;
    var g = u("render");
    t.renderPlugin = g;
    var E = u("clear");
    t.clearPlugin = E;
  },
  function (e, t, n) {
    var a = n(121),
      i = n(274)(a);
    e.exports = i;
  },
  function (e, t, n) {
    var a = n(272),
      i = n(35);
    e.exports = function (e, t) {
      return e && a(e, t, i);
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(278);
    (t.__esModule = !0), (t.default = void 0);
    var i = a(n(279)).default;
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(118)),
      i = n(17),
      r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.observeRequests = function (e) {
        M({
          store: e,
          select: function (e) {
            return e.ixRequest.preview;
          },
          onChange: te,
        }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.playback;
            },
            onChange: ae,
          }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.stop;
            },
            onChange: ie,
          }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.clear;
            },
            onChange: re,
          });
      }),
      (t.startEngine = oe),
      (t.stopEngine = ce),
      (t.stopAllActionGroups = Ee),
      (t.stopActionGroup = ye),
      (t.startActionGroup = ve);
    var o = r(n(30)),
      c = r(n(282)),
      u = r(n(94)),
      s = r(n(59)),
      d = r(n(283)),
      l = r(n(289)),
      f = r(n(301)),
      p = r(n(302)),
      g = r(n(303)),
      E = r(n(306)),
      y = r(n(122)),
      v = n(3),
      I = n(14),
      T = n(64),
      b = i(n(309)),
      m = r(n(310)),
      _ = Object.keys(v.QuickEffectIds),
      O = function (e) {
        return _.includes(e);
      },
      h = v.IX2EngineConstants,
      R = h.COLON_DELIMITER,
      S = h.BOUNDARY_SELECTOR,
      A = h.HTML_ELEMENT,
      N = h.RENDER_GENERAL,
      L = h.W_MOD_IX,
      C = I.IX2VanillaUtils,
      P = C.getAffectedElements,
      x = C.getElementId,
      w = C.getDestinationValues,
      M = C.observeStore,
      U = C.getInstanceId,
      G = C.renderHTMLElement,
      D = C.clearAllStyles,
      V = C.getMaxDurationItemIndex,
      X = C.getComputedStyle,
      F = C.getInstanceOrigin,
      k = C.reduceListToGroup,
      j = C.shouldNamespaceEventParameter,
      H = C.getNamespacedParameterId,
      Y = C.shouldAllowMediaQuery,
      z = C.cleanupHTMLElement,
      B = C.stringifyTarget,
      W = C.mediaQueriesEqual,
      Q = I.IX2VanillaPlugins,
      K = Q.isPluginType,
      q = Q.createPluginInstance,
      $ = Q.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      ee = 12;
    function te(e, t) {
      var n = e.rawData,
        a = function () {
          oe({ store: t, rawData: n, allowEvents: !0 }), ne();
        };
      e.defer ? setTimeout(a, 0) : a();
    }
    function ne() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function ae(e, t) {
      var n = e.actionTypeId,
        a = e.actionListId,
        i = e.actionItemId,
        r = e.eventId,
        o = e.allowEvents,
        c = e.immediate,
        u = e.testManual,
        s = e.verbose,
        d = void 0 === s || s,
        l = e.rawData;
      if (a && i && l && c) {
        var f = l.actionLists[a];
        f && (l = k({ actionList: f, actionItemId: i, rawData: l }));
      }
      if (
        (oe({ store: t, rawData: l, allowEvents: o, testManual: u }),
        (a && n === v.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
      ) {
        ye({ store: t, actionListId: a }),
          ge({ store: t, actionListId: a, eventId: r });
        var p = ve({
          store: t,
          eventId: r,
          actionListId: a,
          immediate: c,
          verbose: d,
        });
        d &&
          p &&
          t.dispatch(
            (0, T.actionListPlaybackChanged)({ actionListId: a, isPlaying: !c })
          );
      }
    }
    function ie(e, t) {
      var n = e.actionListId;
      n ? ye({ store: t, actionListId: n }) : Ee({ store: t }), ce(t);
    }
    function re(e, t) {
      ce(t), D({ store: t, elementApi: b });
    }
    function oe(e) {
      var t,
        n = e.store,
        i = e.rawData,
        r = e.allowEvents,
        o = e.testManual,
        c = n.getState().ixSession;
      i && n.dispatch((0, T.rawDataImported)(i)),
        c.active ||
          (n.dispatch(
            (0, T.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(S)),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            ((function (e) {
              var t = e.getState().ixData.eventTypeMap;
              de(e),
                (0, g.default)(t, function (t, n) {
                  var i = m.default[n];
                  i
                    ? (function (e) {
                        var t = e.logic,
                          n = e.store,
                          i = e.events;
                        !(function (e) {
                          if (J) {
                            var t = {},
                              n = "";
                            for (var a in e) {
                              var i = e[a],
                                r = i.eventTypeId,
                                o = i.target,
                                c = b.getQuerySelector(o);
                              t[c] ||
                                (r !== v.EventTypeConsts.MOUSE_CLICK &&
                                  r !== v.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((t[c] = !0),
                                (n +=
                                  c +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                            }
                            if (n) {
                              var u = document.createElement("style");
                              (u.textContent = n), document.body.appendChild(u);
                            }
                          }
                        })(i);
                        var r = t.types,
                          o = t.handler,
                          c = n.getState().ixData,
                          l = c.actionLists,
                          f = le(i, pe);
                        if ((0, d.default)(f)) {
                          (0, g.default)(f, function (e, t) {
                            var r = i[t],
                              o = r.action,
                              d = r.id,
                              f = r.mediaQueries,
                              p = void 0 === f ? c.mediaQueryKeys : f,
                              g = o.config.actionListId;
                            (W(p, c.mediaQueryKeys) ||
                              n.dispatch((0, T.mediaQueriesDefined)()),
                            o.actionTypeId ===
                              v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) &&
                              (Array.isArray(r.config)
                                ? r.config
                                : [r.config]
                              ).forEach(function (t) {
                                var i = t.continuousParameterGroupId,
                                  r = (0, s.default)(
                                    l,
                                    "".concat(g, ".continuousParameterGroups"),
                                    []
                                  ),
                                  o = (0, u.default)(r, function (e) {
                                    return e.id === i;
                                  }),
                                  c = (t.smoothing || 0) / 100,
                                  f = (t.restingState || 0) / 100;
                                o &&
                                  e.forEach(function (e, i) {
                                    !(function (e) {
                                      var t = e.store,
                                        n = e.eventStateKey,
                                        i = e.eventTarget,
                                        r = e.eventId,
                                        o = e.eventConfig,
                                        c = e.actionListId,
                                        u = e.parameterGroup,
                                        d = e.smoothing,
                                        l = e.restingValue,
                                        f = t.getState(),
                                        p = f.ixData,
                                        g = f.ixSession,
                                        E = p.events[r],
                                        y = E.eventTypeId,
                                        v = {},
                                        I = {},
                                        T = [],
                                        m = u.continuousActionGroups,
                                        _ = u.id;
                                      j(y, o) && (_ = H(n, _));
                                      var O =
                                        g.hasBoundaryNodes && i
                                          ? b.getClosestElement(i, S)
                                          : null;
                                      m.forEach(function (e) {
                                        var t = e.keyframe;
                                        e.actionItems.forEach(function (e) {
                                          var n = e.actionTypeId,
                                            r = e.config.target;
                                          if (r) {
                                            var o = r.boundaryMode ? O : null,
                                              c = B(r) + R + n;
                                            if (
                                              ((I[c] = (function () {
                                                var e,
                                                  t =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  n =
                                                    arguments.length > 1
                                                      ? arguments[1]
                                                      : void 0,
                                                  i =
                                                    arguments.length > 2
                                                      ? arguments[2]
                                                      : void 0,
                                                  r = (0, a.default)(t);
                                                return (
                                                  r.some(function (t, a) {
                                                    return (
                                                      t.keyframe === n &&
                                                      ((e = a), !0)
                                                    );
                                                  }),
                                                  null == e &&
                                                    ((e = r.length),
                                                    r.push({
                                                      keyframe: n,
                                                      actionItems: [],
                                                    })),
                                                  r[e].actionItems.push(i),
                                                  r
                                                );
                                              })(I[c], t, e)),
                                              !v[c])
                                            ) {
                                              v[c] = !0;
                                              var u = e.config;
                                              P({
                                                config: u,
                                                event: E,
                                                eventTarget: i,
                                                elementRoot: o,
                                                elementApi: b,
                                              }).forEach(function (e) {
                                                T.push({ element: e, key: c });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        T.forEach(function (e) {
                                          var n = e.element,
                                            a = e.key,
                                            i = I[a],
                                            o = (0, s.default)(
                                              i,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            u = o.actionTypeId,
                                            f = K(u) ? q(u)(n, o) : null,
                                            p = w(
                                              {
                                                element: n,
                                                actionItem: o,
                                                elementApi: b,
                                              },
                                              f
                                            );
                                          Ie({
                                            store: t,
                                            element: n,
                                            eventId: r,
                                            actionListId: c,
                                            actionItem: o,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: _,
                                            actionGroups: i,
                                            smoothing: d,
                                            restingValue: l,
                                            pluginInstance: f,
                                          });
                                        });
                                    })({
                                      store: n,
                                      eventStateKey: d + R + i,
                                      eventTarget: e,
                                      eventId: d,
                                      eventConfig: t,
                                      actionListId: g,
                                      parameterGroup: o,
                                      smoothing: c,
                                      restingValue: f,
                                    });
                                  });
                              });
                            (o.actionTypeId ===
                              v.ActionTypeConsts.GENERAL_START_ACTION ||
                              O(o.actionTypeId)) &&
                              ge({ store: n, actionListId: g, eventId: d });
                          });
                          var p = function (e) {
                              var t = n.getState().ixSession;
                              fe(f, function (a, r, u) {
                                var s = i[r],
                                  d = t.eventState[u],
                                  l = s.action,
                                  f = s.mediaQueries,
                                  p = void 0 === f ? c.mediaQueryKeys : f;
                                if (Y(p, t.mediaQueryKey)) {
                                  var g = function () {
                                    var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      i = o(
                                        {
                                          store: n,
                                          element: a,
                                          event: s,
                                          eventConfig: t,
                                          nativeEvent: e,
                                          eventStateKey: u,
                                        },
                                        d
                                      );
                                    (0, y.default)(i, d) ||
                                      n.dispatch(
                                        (0, T.eventStateChanged)(u, i)
                                      );
                                  };
                                  if (
                                    l.actionTypeId ===
                                    v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  )
                                    (Array.isArray(s.config)
                                      ? s.config
                                      : [s.config]
                                    ).forEach(g);
                                  else g();
                                }
                              });
                            },
                            I = (0, E.default)(p, ee),
                            m = function (e) {
                              var t = e.target,
                                a = void 0 === t ? document : t,
                                i = e.types,
                                r = e.throttle;
                              i.split(" ")
                                .filter(Boolean)
                                .forEach(function (e) {
                                  var t = r ? I : p;
                                  a.addEventListener(e, t),
                                    n.dispatch(
                                      (0, T.eventListenerAdded)(a, [e, t])
                                    );
                                });
                            };
                          Array.isArray(r)
                            ? r.forEach(m)
                            : "string" == typeof r && m(t);
                        }
                      })({ logic: i, store: e, events: t })
                    : console.warn("IX2 event type not configured: ".concat(n));
                }),
                e.getState().ixSession.eventListeners.length &&
                  (function (e) {
                    var t = function () {
                      de(e);
                    };
                    se.forEach(function (n) {
                      window.addEventListener(n, t),
                        e.dispatch((0, T.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
            })(n),
            -1 === (t = document.documentElement).className.indexOf(L) &&
              (t.className += " ".concat(L)),
            n.getState().ixSession.hasDefinedMediaQueries &&
              (function (e) {
                M({
                  store: e,
                  select: function (e) {
                    return e.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ce(e),
                      D({ store: e, elementApi: b }),
                      oe({ store: e, allowEvents: !0 }),
                      ne();
                  },
                });
              })(n)),
          n.dispatch((0, T.sessionStarted)()),
          (function (e, t) {
            !(function n(a) {
              var i = e.getState(),
                r = i.ixSession,
                o = i.ixParameters;
              r.active &&
                (e.dispatch((0, T.animationFrameChanged)(a, o)),
                t
                  ? (function (e, t) {
                      var n = M({
                        store: e,
                        select: function (e) {
                          return e.ixSession.tick;
                        },
                        onChange: function (e) {
                          t(e), n();
                        },
                      });
                    })(e, n)
                  : requestAnimationFrame(n));
            })(window.performance.now());
          })(n, o));
    }
    function ce(e) {
      var t = e.getState().ixSession;
      t.active &&
        (t.eventListeners.forEach(ue), e.dispatch((0, T.sessionStopped)()));
    }
    function ue(e) {
      var t = e.target,
        n = e.listenerParams;
      t.removeEventListener.apply(t, n);
    }
    var se = ["resize", "orientationchange"];
    function de(e) {
      var t = e.getState(),
        n = t.ixSession,
        a = t.ixData,
        i = window.innerWidth;
      if (i !== n.viewportWidth) {
        var r = a.mediaQueries;
        e.dispatch((0, T.viewportWidthChanged)({ width: i, mediaQueries: r }));
      }
    }
    var le = function (e, t) {
        return (0, l.default)((0, p.default)(e, t), f.default);
      },
      fe = function (e, t) {
        (0, g.default)(e, function (e, n) {
          e.forEach(function (e, a) {
            t(e, n, n + R + a);
          });
        });
      },
      pe = function (e) {
        var t = { target: e.target, targets: e.targets };
        return P({ config: t, elementApi: b });
      };
    function ge(e) {
      var t = e.store,
        n = e.actionListId,
        a = e.eventId,
        i = t.getState(),
        r = i.ixData,
        o = i.ixSession,
        c = r.actionLists,
        u = r.events[a],
        d = c[n];
      if (d && d.useFirstGroupAsInitialState) {
        var l = (0, s.default)(d, "actionItemGroups[0].actionItems", []),
          f = (0, s.default)(u, "mediaQueries", r.mediaQueryKeys);
        if (!Y(f, o.mediaQueryKey)) return;
        l.forEach(function (e) {
          var i,
            r = e.config,
            o = e.actionTypeId,
            c =
              !0 ===
              (null == r
                ? void 0
                : null === (i = r.target) || void 0 === i
                ? void 0
                : i.useEventTarget)
                ? { target: u.target, targets: u.targets }
                : r,
            s = P({ config: c, event: u, elementApi: b }),
            d = K(o);
          s.forEach(function (i) {
            var r = d ? q(o)(i, e) : null;
            Ie({
              destination: w({ element: i, actionItem: e, elementApi: b }, r),
              immediate: !0,
              store: t,
              element: i,
              eventId: a,
              actionItem: e,
              actionListId: n,
              pluginInstance: r,
            });
          });
        });
      }
    }
    function Ee(e) {
      var t = e.store,
        n = t.getState().ixInstances;
      (0, g.default)(n, function (e) {
        if (!e.continuous) {
          var n = e.actionListId,
            a = e.verbose;
          Te(e, t),
            a &&
              t.dispatch(
                (0, T.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ye(e) {
      var t = e.store,
        n = e.eventId,
        a = e.eventTarget,
        i = e.eventStateKey,
        r = e.actionListId,
        o = t.getState(),
        c = o.ixInstances,
        u =
          o.ixSession.hasBoundaryNodes && a ? b.getClosestElement(a, S) : null;
      (0, g.default)(c, function (e) {
        var a = (0, s.default)(e, "actionItem.config.target.boundaryMode"),
          o = !i || e.eventStateKey === i;
        if (e.actionListId === r && e.eventId === n && o) {
          if (u && a && !b.elementContains(u, e.element)) return;
          Te(e, t),
            e.verbose &&
              t.dispatch(
                (0, T.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ve(e) {
      var t,
        n = e.store,
        a = e.eventId,
        i = e.eventTarget,
        r = e.eventStateKey,
        o = e.actionListId,
        c = e.groupIndex,
        u = void 0 === c ? 0 : c,
        d = e.immediate,
        l = e.verbose,
        f = n.getState(),
        p = f.ixData,
        g = f.ixSession,
        E = p.events[a] || {},
        y = E.mediaQueries,
        v = void 0 === y ? p.mediaQueryKeys : y,
        I = (0, s.default)(p, "actionLists.".concat(o), {}),
        T = I.actionItemGroups,
        m = I.useFirstGroupAsInitialState;
      if (!T || !T.length) return !1;
      u >= T.length && (0, s.default)(E, "config.loop") && (u = 0),
        0 === u && m && u++;
      var _ =
          (0 === u || (1 === u && m)) &&
          O(null === (t = E.action) || void 0 === t ? void 0 : t.actionTypeId)
            ? E.config.delay
            : void 0,
        h = (0, s.default)(T, [u, "actionItems"], []);
      if (!h.length) return !1;
      if (!Y(v, g.mediaQueryKey)) return !1;
      var R = g.hasBoundaryNodes && i ? b.getClosestElement(i, S) : null,
        A = V(h),
        N = !1;
      return (
        h.forEach(function (e, t) {
          var c = e.config,
            s = e.actionTypeId,
            f = K(s),
            p = c.target;
          if (p) {
            var g = p.boundaryMode ? R : null;
            P({
              config: c,
              event: E,
              eventTarget: i,
              elementRoot: g,
              elementApi: b,
            }).forEach(function (c, p) {
              var g = f ? q(s)(c, e) : null,
                E = f ? $(s)(c, e) : null;
              N = !0;
              var y = A === t && 0 === p,
                v = X({ element: c, actionItem: e }),
                I = w({ element: c, actionItem: e, elementApi: b }, g);
              Ie({
                store: n,
                element: c,
                actionItem: e,
                eventId: a,
                eventTarget: i,
                eventStateKey: r,
                actionListId: o,
                groupIndex: u,
                isCarrier: y,
                computedStyle: v,
                destination: I,
                immediate: d,
                verbose: l,
                pluginInstance: g,
                pluginDuration: E,
                instanceDelay: _,
              });
            });
          }
        }),
        N
      );
    }
    function Ie(e) {
      var t,
        n,
        a = e.store,
        i = e.computedStyle,
        r = (0, c.default)(e, ["store", "computedStyle"]),
        u = r.element,
        s = r.actionItem,
        d = r.immediate,
        l = r.pluginInstance,
        f = r.continuous,
        p = r.restingValue,
        g = r.eventId,
        E = !f,
        y = U(),
        I = a.getState(),
        m = I.ixElements,
        _ = I.ixSession,
        O = I.ixData,
        h = x(m, u),
        R = (m[h] || {}).refState,
        S = b.getRefType(u),
        A = _.reducedMotion && v.ReducedMotionTypes[s.actionTypeId];
      if (A && f)
        switch (
          null === (t = O.events[g]) || void 0 === t ? void 0 : t.eventTypeId
        ) {
          case v.EventTypeConsts.MOUSE_MOVE:
          case v.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            n = p;
            break;
          default:
            n = 0.5;
        }
      var N = F(u, R, i, s, b, l);
      a.dispatch(
        (0, T.instanceAdded)(
          (0, o.default)(
            {
              instanceId: y,
              elementId: h,
              origin: N,
              refType: S,
              skipMotion: A,
              skipToValue: n,
            },
            r
          )
        )
      ),
        be(document.body, "ix2-animation-started", y),
        d
          ? (function (e, t) {
              var n = e.getState().ixParameters;
              e.dispatch((0, T.instanceStarted)(t, 0)),
                e.dispatch((0, T.animationFrameChanged)(performance.now(), n)),
                me(e.getState().ixInstances[t], e);
            })(a, y)
          : (M({
              store: a,
              select: function (e) {
                return e.ixInstances[y];
              },
              onChange: me,
            }),
            E && a.dispatch((0, T.instanceStarted)(y, _.tick)));
    }
    function Te(e, t) {
      be(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      var n = e.elementId,
        a = e.actionItem,
        i = t.getState().ixElements[n] || {},
        r = i.ref;
      i.refType === A && z(r, a, b), t.dispatch((0, T.instanceRemoved)(e.id));
    }
    function be(e, t, n) {
      var a = document.createEvent("CustomEvent");
      a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
    }
    function me(e, t) {
      var n = e.active,
        a = e.continuous,
        i = e.complete,
        r = e.elementId,
        o = e.actionItem,
        c = e.actionTypeId,
        u = e.renderType,
        s = e.current,
        d = e.groupIndex,
        l = e.eventId,
        f = e.eventTarget,
        p = e.eventStateKey,
        g = e.actionListId,
        E = e.isCarrier,
        y = e.styleProp,
        v = e.verbose,
        I = e.pluginInstance,
        m = t.getState(),
        _ = m.ixData,
        O = m.ixSession,
        h = (_.events[l] || {}).mediaQueries,
        R = void 0 === h ? _.mediaQueryKeys : h;
      if (Y(R, O.mediaQueryKey) && (a || n || i)) {
        if (s || (u === N && i)) {
          t.dispatch((0, T.elementStateChanged)(r, c, s, o));
          var S = t.getState().ixElements[r] || {},
            L = S.ref,
            C = S.refType,
            P = S.refState,
            x = P && P[c];
          switch (C) {
            case A:
              G(L, P, x, l, o, y, b, u, I);
          }
        }
        if (i) {
          if (E) {
            var w = ve({
              store: t,
              eventId: l,
              eventTarget: f,
              eventStateKey: p,
              actionListId: g,
              groupIndex: d + 1,
              verbose: v,
            });
            v &&
              !w &&
              t.dispatch(
                (0, T.actionListPlaybackChanged)({
                  actionListId: g,
                  isPlaying: !1,
                })
              );
          }
          Te(e, t);
        }
      }
    }
  },
  function (e, t, n) {
    var a = n(125);
    e.exports = function (e, t, n) {
      "__proto__" == t && a
        ? a(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    };
  },
  function (e, t, n) {
    var a = n(11),
      i = (function () {
        try {
          var e = a(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
    e.exports = i;
  },
  function (e, t, n) {
    var a = n(7),
      i = Object.create,
      r = (function () {
        function e() {}
        return function (t) {
          if (!a(t)) return {};
          if (i) return i(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    e.exports = r;
  },
  function (e, t, n) {
    var a = n(323),
      i = n(324),
      r = a
        ? function (e) {
            return a.get(e);
          }
        : i;
    e.exports = r;
  },
  function (e, t, n) {
    var a = n(325),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      for (
        var t = e.name + "", n = a[t], r = i.call(a, t) ? n.length : 0;
        r--;

      ) {
        var o = n[r],
          c = o.func;
        if (null == c || c == e) return o.name;
      }
      return t;
    };
  },
  function (e, t, n) {
    n(130),
      n(132),
      n(133),
      n(134),
      n(136),
      n(332),
      n(333),
      n(334),
      (e.exports = n(335));
  },
  function (e, t, n) {
    "use strict";
    var a = n(8);
    a.define(
      "brand",
      (e.exports = function (e) {
        var t,
          n = {},
          i = document,
          r = e("html"),
          o = e("body"),
          c = ".w-webflow-badge",
          u = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          d =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function l() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            Boolean(i.webkitFullscreenElement);
          e(t).attr("style", n ? "display: none !important;" : "");
        }
        function f() {
          var e = o.children(c),
            n = e.length && e.get(0) === t,
            i = a.env("editor");
          n ? i && e.remove() : (e.length && e.remove(), i || o.append(t));
        }
        return (
          (n.ready = function () {
            var n,
              a,
              o,
              c = r.attr("data-wf-status"),
              p = r.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && u.hostname !== p && (c = !0),
              c &&
                !s &&
                ((t =
                  t ||
                  ((n = e('<a class="w-webflow-badge"></a>').attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs"
                  )),
                  (a = e("<img>")
                    .attr("src", "")
                    .attr("alt", "")
                    .css({ marginRight: "8px", width: "16px" })),
                  (o = e("<img>").attr("src", "").attr("alt", "")),
                  n.append(a, o),
                  n[0])),
                f(),
                setTimeout(f, 500),
                e(i).off(d, l).on(d, l));
          }),
          n
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var a = window.$,
      i = n(68) && a.tram;
    e.exports = (function () {
      var e = { VERSION: "1.6.0-Webflow" },
        t = {},
        n = Array.prototype,
        a = Object.prototype,
        r = Function.prototype,
        o = (n.push, n.slice),
        c = (n.concat, a.toString, a.hasOwnProperty),
        u = n.forEach,
        s = n.map,
        d = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        f = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        g =
          (r.bind,
          (e.each = e.forEach =
            function (n, a, i) {
              if (null == n) return n;
              if (u && n.forEach === u) n.forEach(a, i);
              else if (n.length === +n.length) {
                for (var r = 0, o = n.length; r < o; r++)
                  if (a.call(i, n[r], r, n) === t) return;
              } else {
                var c = e.keys(n);
                for (r = 0, o = c.length; r < o; r++)
                  if (a.call(i, n[c[r]], c[r], n) === t) return;
              }
              return n;
            }));
      (e.map = e.collect =
        function (e, t, n) {
          var a = [];
          return null == e
            ? a
            : s && e.map === s
            ? e.map(t, n)
            : (g(e, function (e, i, r) {
                a.push(t.call(n, e, i, r));
              }),
              a);
        }),
        (e.find = e.detect =
          function (e, t, n) {
            var a;
            return (
              E(e, function (e, i, r) {
                if (t.call(n, e, i, r)) return (a = e), !0;
              }),
              a
            );
          }),
        (e.filter = e.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : d && e.filter === d
              ? e.filter(t, n)
              : (g(e, function (e, i, r) {
                  t.call(n, e, i, r) && a.push(e);
                }),
                a);
          });
      var E =
        (e.some =
        e.any =
          function (n, a, i) {
            a || (a = e.identity);
            var r = !1;
            return null == n
              ? r
              : l && n.some === l
              ? n.some(a, i)
              : (g(n, function (e, n, o) {
                  if (r || (r = a.call(i, e, n, o))) return t;
                }),
                !!r);
          });
      (e.contains = e.include =
        function (e, t) {
          return (
            null != e &&
            (f && e.indexOf === f
              ? -1 != e.indexOf(t)
              : E(e, function (e) {
                  return e === t;
                }))
          );
        }),
        (e.delay = function (e, t) {
          var n = o.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (e.defer = function (t) {
          return e.delay.apply(e, [t, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              i.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (e.debounce = function (t, n, a) {
          var i,
            r,
            o,
            c,
            u,
            s = function s() {
              var d = e.now() - c;
              d < n
                ? (i = setTimeout(s, n - d))
                : ((i = null), a || ((u = t.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (c = e.now());
            var d = a && !i;
            return (
              i || (i = setTimeout(s, n)),
              d && ((u = t.apply(o, r)), (o = r = null)),
              u
            );
          };
        }),
        (e.defaults = function (t) {
          if (!e.isObject(t)) return t;
          for (var n = 1, a = arguments.length; n < a; n++) {
            var i = arguments[n];
            for (var r in i) void 0 === t[r] && (t[r] = i[r]);
          }
          return t;
        }),
        (e.keys = function (t) {
          if (!e.isObject(t)) return [];
          if (p) return p(t);
          var n = [];
          for (var a in t) e.has(t, a) && n.push(a);
          return n;
        }),
        (e.has = function (e, t) {
          return c.call(e, t);
        }),
        (e.isObject = function (e) {
          return e === Object(e);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var y = /(.)^/,
        v = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        I = /\\|'|\r|\n|\u2028|\u2029/g,
        T = function (e) {
          return "\\" + v[e];
        };
      return (
        (e.template = function (t, n, a) {
          !n && a && (n = a), (n = e.defaults({}, n, e.templateSettings));
          var i = RegExp(
              [
                (n.escape || y).source,
                (n.interpolate || y).source,
                (n.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            o = "__p+='";
          t.replace(i, function (e, n, a, i, c) {
            return (
              (o += t.slice(r, c).replace(I, T)),
              (r = c + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (o += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (o += "';\n" + i + "\n__p+='"),
              e
            );
          }),
            (o += "';\n"),
            n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              "return __p;\n");
          try {
            var c = new Function(n.variable || "obj", "_", o);
          } catch (e) {
            throw ((e.source = o), e);
          }
          var u = function (t) {
              return c.call(this, t, e);
            },
            s = n.variable || "obj";
          return (u.source = "function(" + s + "){\n" + o + "}"), u;
        }),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    var a = n(8);
    a.define(
      "edit",
      (e.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (a.env("test") || a.env("frame")) &&
            !n.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (e) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var i,
          r = e(window),
          o = e(document.documentElement),
          c = document.location,
          u = "hashchange",
          s =
            n.load ||
            function () {
              (i = !0),
                (window.WebflowEditor = !0),
                r.off(u, l),
                (function (e) {
                  var t = window.document.createElement("iframe");
                  (t.src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                    (t.style.display = "none"),
                    (t.sandbox = "allow-scripts allow-same-origin");
                  var n = function n(a) {
                    "WF_third_party_cookies_unsupported" === a.data
                      ? (v(t, n), e(!1))
                      : "WF_third_party_cookies_supported" === a.data &&
                        (v(t, n), e(!0));
                  };
                  (t.onerror = function () {
                    v(t, n), e(!1);
                  }),
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(t);
                })(function (t) {
                  e.ajax({
                    url: y("https://editor-api.webflow.com/api/editor/view"),
                    data: { siteId: o.attr("data-wf-site") },
                    xhrFields: { withCredentials: !0 },
                    dataType: "json",
                    crossDomain: !0,
                    success: f(t),
                  });
                });
            },
          d = !1;
        try {
          d =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch (e) {}
        function l() {
          i || (/\?edit/.test(c.hash) && s());
        }
        function f(e) {
          return function (t) {
            t
              ? ((t.thirdPartyCookiesSupported = e),
                p(E(t.bugReporterScriptPath), function () {
                  p(E(t.scriptPath), function () {
                    window.WebflowEditor(t);
                  });
                }))
              : console.error("Could not load editor data");
          };
        }
        function p(t, n) {
          e.ajax({ type: "GET", url: t, dataType: "script", cache: !0 }).then(
            n,
            g
          );
        }
        function g(e, t, n) {
          throw (console.error("Could not load editor script: " + t), n);
        }
        function E(e) {
          return e.indexOf("//") >= 0
            ? e
            : y("https://editor-api.webflow.com" + e);
        }
        function y(e) {
          return e.replace(/([^:])\/\//g, "$1/");
        }
        function v(e, t) {
          window.removeEventListener("message", t, !1), e.remove();
        }
        return (
          d
            ? s()
            : c.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                /\?edit$/.test(c.href)) &&
              s()
            : r.on(u, l).triggerHandler(u),
          {}
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n(8).define(
      "focus-visible",
      (e.exports = function () {
        return {
          ready: function () {
            if ("undefined" != typeof document)
              try {
                document.querySelector(":focus-visible");
              } catch (e) {
                !(function (e) {
                  var t = !0,
                    n = !1,
                    a = null,
                    i = {
                      text: !0,
                      search: !0,
                      url: !0,
                      tel: !0,
                      email: !0,
                      password: !0,
                      number: !0,
                      date: !0,
                      month: !0,
                      week: !0,
                      time: !0,
                      datetime: !0,
                      "datetime-local": !0,
                    };
                  function r(e) {
                    return !!(
                      e &&
                      e !== document &&
                      "HTML" !== e.nodeName &&
                      "BODY" !== e.nodeName &&
                      "classList" in e &&
                      "contains" in e.classList
                    );
                  }
                  function o(e) {
                    e.getAttribute("data-wf-focus-visible") ||
                      e.setAttribute("data-wf-focus-visible", "true");
                  }
                  function c() {
                    t = !1;
                  }
                  function u() {
                    document.addEventListener("mousemove", s),
                      document.addEventListener("mousedown", s),
                      document.addEventListener("mouseup", s),
                      document.addEventListener("pointermove", s),
                      document.addEventListener("pointerdown", s),
                      document.addEventListener("pointerup", s),
                      document.addEventListener("touchmove", s),
                      document.addEventListener("touchstart", s),
                      document.addEventListener("touchend", s);
                  }
                  function s(e) {
                    (e.target.nodeName &&
                      "html" === e.target.nodeName.toLowerCase()) ||
                      ((t = !1),
                      document.removeEventListener("mousemove", s),
                      document.removeEventListener("mousedown", s),
                      document.removeEventListener("mouseup", s),
                      document.removeEventListener("pointermove", s),
                      document.removeEventListener("pointerdown", s),
                      document.removeEventListener("pointerup", s),
                      document.removeEventListener("touchmove", s),
                      document.removeEventListener("touchstart", s),
                      document.removeEventListener("touchend", s));
                  }
                  document.addEventListener(
                    "keydown",
                    function (n) {
                      n.metaKey ||
                        n.altKey ||
                        n.ctrlKey ||
                        (r(e.activeElement) && o(e.activeElement), (t = !0));
                    },
                    !0
                  ),
                    document.addEventListener("mousedown", c, !0),
                    document.addEventListener("pointerdown", c, !0),
                    document.addEventListener("touchstart", c, !0),
                    document.addEventListener(
                      "visibilitychange",
                      function () {
                        "hidden" === document.visibilityState &&
                          (n && (t = !0), u());
                      },
                      !0
                    ),
                    u(),
                    e.addEventListener(
                      "focus",
                      function (e) {
                        var n, a, c;
                        r(e.target) &&
                          (t ||
                            ((a = (n = e.target).type),
                            ("INPUT" === (c = n.tagName) &&
                              i[a] &&
                              !n.readOnly) ||
                              ("TEXTAREA" === c && !n.readOnly) ||
                              n.isContentEditable)) &&
                          o(e.target);
                      },
                      !0
                    ),
                    e.addEventListener(
                      "blur",
                      function (e) {
                        var t;
                        r(e.target) &&
                          e.target.hasAttribute("data-wf-focus-visible") &&
                          ((n = !0),
                          window.clearTimeout(a),
                          (a = window.setTimeout(function () {
                            n = !1;
                          }, 100)),
                          (t = e.target).getAttribute(
                            "data-wf-focus-visible"
                          ) && t.removeAttribute("data-wf-focus-visible"));
                      },
                      !0
                    );
                })(document);
              }
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var a = n(135);
    function i(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var r = window.jQuery,
      o = {},
      c = {
        reset: function (e, t) {
          a.triggers.reset(e, t);
        },
        intro: function (e, t) {
          a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
        },
      };
    (o.triggers = {}),
      (o.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      r.extend(o.triggers, c),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var a = window.jQuery,
      i = {},
      r = [],
      o = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), a(t).triggerHandler(i.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), a(t).triggerHandler(i.types.OUTRO));
        },
      };
    (i.triggers = {}),
      (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      (i.init = function () {
        for (var e = r.length, t = 0; t < e; t++) {
          var n = r[t];
          n[0](0, n[1]);
        }
        (r = []), a.extend(i.triggers, o);
      }),
      (i.async = function () {
        for (var e in o) {
          var t = o[e];
          o.hasOwnProperty(e) &&
            (i.triggers[e] = function (e, n) {
              r.push([t, n]);
            });
        }
      }),
      i.async(),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    var a = n(8),
      i = n(137);
    i.setEnv(a.env),
      a.define(
        "ix2",
        (e.exports = function () {
          return i;
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var a = n(17),
      i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setEnv = function (e) {
        e() && (0, c.observeRequests)(s);
      }),
      (t.init = function (e) {
        d(), (0, c.startEngine)({ store: s, rawData: e, allowEvents: !0 });
      }),
      (t.destroy = d),
      (t.actions = t.store = void 0),
      n(138);
    var r = n(86),
      o = i(n(185)),
      c = n(123),
      u = a(n(64));
    t.actions = u;
    var s = (0, r.createStore)(o.default);
    function d() {
      (0, c.stopEngine)(s);
    }
    t.store = s;
  },
  function (e, t, n) {
    var a = n(139);
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(140);
    e.exports = a;
  },
  function (e, t, n) {
    n(141);
    var a = n(173);
    e.exports = a("Array", "includes");
  },
  function (e, t, n) {
    "use strict";
    var a = n(142),
      i = n(84).includes,
      r = n(168);
    a(
      { target: "Array", proto: !0 },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      r("includes");
  },
  function (e, t, n) {
    var a = n(0),
      i = n(69).f,
      r = n(42),
      o = n(156),
      c = n(41),
      u = n(160),
      s = n(167);
    e.exports = function (e, t) {
      var n,
        d,
        l,
        f,
        p,
        g = e.target,
        E = e.global,
        y = e.stat;
      if ((n = E ? a : y ? a[g] || c(g, {}) : (a[g] || {}).prototype))
        for (d in t) {
          if (
            ((f = t[d]),
            (l = e.noTargetGet ? (p = i(n, d)) && p.value : n[d]),
            !s(E ? d : g + (y ? "." : "#") + d, e.forced) && void 0 !== l)
          ) {
            if (typeof f == typeof l) continue;
            u(f, l);
          }
          (e.sham || (l && l.sham)) && r(f, "sham", !0), o(n, d, f, e);
        }
    };
  },
  function (e, t, n) {
    "use strict";
    var a = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      r = i && !a.call({ 1: 2 }, 1);
    t.f = r
      ? function (e) {
          var t = i(this, e);
          return !!t && t.enumerable;
        }
      : a;
  },
  function (e, t, n) {
    var a = n(0),
      i = n(4),
      r = n(18),
      o = n(145),
      c = a.Object,
      u = i("".split);
    e.exports = r(function () {
      return !c("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? u(e, "") : c(e);
        }
      : c;
  },
  function (e, t, n) {
    var a = n(4),
      i = a({}.toString),
      r = a("".slice);
    e.exports = function (e) {
      return r(i(e), 8, -1);
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(39),
      r = n(19),
      o = n(73),
      c = n(150),
      u = n(153),
      s = n(76),
      d = a.TypeError,
      l = s("toPrimitive");
    e.exports = function (e, t) {
      if (!r(e) || o(e)) return e;
      var n,
        a = c(e, l);
      if (a) {
        if ((void 0 === t && (t = "default"), (n = i(a, e, t)), !r(n) || o(n)))
          return n;
        throw d("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), u(e, t);
    };
  },
  function (e, t, n) {
    var a = n(4);
    e.exports = a({}.isPrototypeOf);
  },
  function (e, t, n) {
    var a,
      i,
      r = n(0),
      o = n(149),
      c = r.process,
      u = r.Deno,
      s = (c && c.versions) || (u && u.version),
      d = s && s.v8;
    d && (i = (a = d.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])),
      !i &&
        o &&
        (!(a = o.match(/Edge\/(\d+)/)) || a[1] >= 74) &&
        (a = o.match(/Chrome\/(\d+)/)) &&
        (i = +a[1]),
      (e.exports = i);
  },
  function (e, t, n) {
    var a = n(27);
    e.exports = a("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    var a = n(151);
    e.exports = function (e, t) {
      var n = e[t];
      return null == n ? void 0 : a(n);
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(6),
      r = n(152),
      o = a.TypeError;
    e.exports = function (e) {
      if (i(e)) return e;
      throw o(r(e) + " is not a function");
    };
  },
  function (e, t, n) {
    var a = n(0).String;
    e.exports = function (e) {
      try {
        return a(e);
      } catch (e) {
        return "Object";
      }
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(39),
      r = n(6),
      o = n(19),
      c = a.TypeError;
    e.exports = function (e, t) {
      var n, a;
      if ("string" === t && r((n = e.toString)) && !o((a = i(n, e)))) return a;
      if (r((n = e.valueOf)) && !o((a = i(n, e)))) return a;
      if ("string" !== t && r((n = e.toString)) && !o((a = i(n, e)))) return a;
      throw c("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var a = n(0),
      i = n(71),
      r = a.Object;
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(6),
      r = n(9),
      o = n(42),
      c = n(41),
      u = n(81),
      s = n(157),
      d = n(159).CONFIGURABLE,
      l = s.get,
      f = s.enforce,
      p = String(String).split("String");
    (e.exports = function (e, t, n, u) {
      var s,
        l = !!u && !!u.unsafe,
        g = !!u && !!u.enumerable,
        E = !!u && !!u.noTargetGet,
        y = u && void 0 !== u.name ? u.name : t;
      i(n) &&
        ("Symbol(" === String(y).slice(0, 7) &&
          (y = "[" + String(y).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!r(n, "name") || (d && n.name !== y)) && o(n, "name", y),
        (s = f(n)).source ||
          (s.source = p.join("string" == typeof y ? y : ""))),
        e !== a
          ? (l ? !E && e[t] && (g = !0) : delete e[t],
            g ? (e[t] = n) : o(e, t, n))
          : g
          ? (e[t] = n)
          : c(t, n);
    })(Function.prototype, "toString", function () {
      return (i(this) && l(this).source) || u(this);
    });
  },
  function (e, t, n) {
    var a,
      i,
      r,
      o = n(158),
      c = n(0),
      u = n(4),
      s = n(19),
      d = n(42),
      l = n(9),
      f = n(40),
      p = n(82),
      g = n(43),
      E = c.TypeError,
      y = c.WeakMap;
    if (o || f.state) {
      var v = f.state || (f.state = new y()),
        I = u(v.get),
        T = u(v.has),
        b = u(v.set);
      (a = function (e, t) {
        if (T(v, e)) throw new E("Object already initialized");
        return (t.facade = e), b(v, e, t), t;
      }),
        (i = function (e) {
          return I(v, e) || {};
        }),
        (r = function (e) {
          return T(v, e);
        });
    } else {
      var m = p("state");
      (g[m] = !0),
        (a = function (e, t) {
          if (l(e, m)) throw new E("Object already initialized");
          return (t.facade = e), d(e, m, t), t;
        }),
        (i = function (e) {
          return l(e, m) ? e[m] : {};
        }),
        (r = function (e) {
          return l(e, m);
        });
    }
    e.exports = {
      set: a,
      get: i,
      has: r,
      enforce: function (e) {
        return r(e) ? i(e) : a(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!s(t) || (n = i(t)).type !== e)
            throw E("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t, n) {
    var a = n(0),
      i = n(6),
      r = n(81),
      o = a.WeakMap;
    e.exports = i(o) && /native code/.test(r(o));
  },
  function (e, t, n) {
    var a = n(13),
      i = n(9),
      r = Function.prototype,
      o = a && Object.getOwnPropertyDescriptor,
      c = i(r, "name"),
      u = c && "something" === function () {}.name,
      s = c && (!a || (a && o(r, "name").configurable));
    e.exports = { EXISTS: c, PROPER: u, CONFIGURABLE: s };
  },
  function (e, t, n) {
    var a = n(9),
      i = n(161),
      r = n(69),
      o = n(28);
    e.exports = function (e, t) {
      for (var n = i(t), c = o.f, u = r.f, s = 0; s < n.length; s++) {
        var d = n[s];
        a(e, d) || c(e, d, u(t, d));
      }
    };
  },
  function (e, t, n) {
    var a = n(27),
      i = n(4),
      r = n(162),
      o = n(166),
      c = n(29),
      u = i([].concat);
    e.exports =
      a("Reflect", "ownKeys") ||
      function (e) {
        var t = r.f(c(e)),
          n = o.f;
        return n ? u(t, n(e)) : t;
      };
  },
  function (e, t, n) {
    var a = n(83),
      i = n(44).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return a(e, i);
      };
  },
  function (e, t, n) {
    var a = n(85),
      i = Math.max,
      r = Math.min;
    e.exports = function (e, t) {
      var n = a(e);
      return n < 0 ? i(n + t, 0) : r(n, t);
    };
  },
  function (e, t, n) {
    var a = n(165);
    e.exports = function (e) {
      return a(e.length);
    };
  },
  function (e, t, n) {
    var a = n(85),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(a(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var a = n(18),
      i = n(6),
      r = /#|\.prototype\./,
      o = function (e, t) {
        var n = u[c(e)];
        return n == d || (n != s && (i(t) ? a(t) : !!t));
      },
      c = (o.normalize = function (e) {
        return String(e).replace(r, ".").toLowerCase();
      }),
      u = (o.data = {}),
      s = (o.NATIVE = "N"),
      d = (o.POLYFILL = "P");
    e.exports = o;
  },
  function (e, t, n) {
    var a = n(76),
      i = n(169),
      r = n(28),
      o = a("unscopables"),
      c = Array.prototype;
    null == c[o] && r.f(c, o, { configurable: !0, value: i(null) }),
      (e.exports = function (e) {
        c[o][e] = !0;
      });
  },
  function (e, t, n) {
    var a,
      i = n(29),
      r = n(170),
      o = n(44),
      c = n(43),
      u = n(172),
      s = n(80),
      d = n(82)("IE_PROTO"),
      l = function () {},
      f = function (e) {
        return "<script>" + e + "</script>";
      },
      p = function (e) {
        e.write(f("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      g = function () {
        try {
          a = new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        g =
          "undefined" != typeof document
            ? document.domain && a
              ? p(a)
              : (((t = s("iframe")).style.display = "none"),
                u.appendChild(t),
                (t.src = String("javascript:")),
                (e = t.contentWindow.document).open(),
                e.write(f("document.F=Object")),
                e.close(),
                e.F)
            : p(a);
        for (var n = o.length; n--; ) delete g.prototype[o[n]];
        return g();
      };
    (c[d] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((l.prototype = i(e)),
                (n = new l()),
                (l.prototype = null),
                (n[d] = e))
              : (n = g()),
            void 0 === t ? n : r(n, t)
          );
        });
  },
  function (e, t, n) {
    var a = n(13),
      i = n(28),
      r = n(29),
      o = n(26),
      c = n(171);
    e.exports = a
      ? Object.defineProperties
      : function (e, t) {
          r(e);
          for (var n, a = o(t), u = c(t), s = u.length, d = 0; s > d; )
            i.f(e, (n = u[d++]), a[n]);
          return e;
        };
  },
  function (e, t, n) {
    var a = n(83),
      i = n(44);
    e.exports =
      Object.keys ||
      function (e) {
        return a(e, i);
      };
  },
  function (e, t, n) {
    var a = n(27);
    e.exports = a("document", "documentElement");
  },
  function (e, t, n) {
    var a = n(0),
      i = n(4);
    e.exports = function (e, t) {
      return i(a[e].prototype[t]);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(88),
      i = n(177),
      r = n(178),
      o = a.default ? a.default.toStringTag : void 0;
    t.default = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? Object(i.default)(e)
        : Object(r.default)(e);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(176),
      i = "object" == typeof self && self && self.Object === Object && self,
      r = a.default || i || Function("return this")();
    t.default = r;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.default = n;
      }.call(this, n(25));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(88),
      i = Object.prototype,
      r = i.hasOwnProperty,
      o = i.toString,
      c = a.default ? a.default.toStringTag : void 0;
    t.default = function (e) {
      var t = r.call(e, c),
        n = e[c];
      try {
        e[c] = void 0;
        var a = !0;
      } catch (e) {}
      var i = o.call(e);
      return a && (t ? (e[c] = n) : delete e[c]), i;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = Object.prototype.toString;
    t.default = function (e) {
      return a.call(e);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(180),
      i = Object(a.default)(Object.getPrototypeOf, Object);
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      (t.default = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      (t.default = function (e) {
        return null != e && "object" == typeof e;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e, a) {
        var i,
          r = n(184);
        i =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : a;
        var o = Object(r.default)(i);
        t.default = o;
      }.call(this, n(25), n(183)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    function a(e) {
      var t,
        n = e.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = n(86),
      i = n(186),
      r = n(192),
      o = n(193),
      c = n(14),
      u = n(280),
      s = n(281),
      d = c.IX2ElementsReducer.ixElements,
      l = (0, a.combineReducers)({
        ixData: i.ixData,
        ixRequest: r.ixRequest,
        ixSession: o.ixSession,
        ixElements: d,
        ixInstances: u.ixInstances,
        ixParameters: s.ixParameters,
      });
    t.default = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ixData = void 0);
    var a = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    t.ixData = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case a:
          return t.payload.ixData || Object.freeze({});
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.QuickEffectDirectionConsts =
        t.QuickEffectIds =
        t.EventLimitAffectedElements =
        t.EventContinuousMouseAxes =
        t.EventBasedOn =
        t.EventAppliesTo =
        t.EventTypeConsts =
          void 0),
      (t.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
      (t.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
      (t.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
      (t.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
      (t.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      }),
      (t.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      }),
      (t.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.InteractionTypeConsts = void 0),
      (t.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      });
  },
  function (e, t, n) {
    "use strict";
    var a,
      i = n(1)(n(20));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ReducedMotionTypes = void 0);
    var r = n(93).ActionTypeConsts,
      o = r.TRANSFORM_MOVE,
      c = r.TRANSFORM_SCALE,
      u = r.TRANSFORM_ROTATE,
      s = r.TRANSFORM_SKEW,
      d = r.STYLE_SIZE,
      l = r.STYLE_FILTER,
      f =
        ((a = {}),
        (0, i.default)(a, o, !0),
        (0, i.default)(a, c, !0),
        (0, i.default)(a, u, !0),
        (0, i.default)(a, s, !0),
        (0, i.default)(a, d, !0),
        (0, i.default)(a, l, !0),
        a);
    t.ReducedMotionTypes = f;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2_TEST_FRAME_RENDERED =
        t.IX2_MEDIA_QUERIES_DEFINED =
        t.IX2_VIEWPORT_WIDTH_CHANGED =
        t.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        t.IX2_ELEMENT_STATE_CHANGED =
        t.IX2_INSTANCE_REMOVED =
        t.IX2_INSTANCE_STARTED =
        t.IX2_INSTANCE_ADDED =
        t.IX2_PARAMETER_CHANGED =
        t.IX2_ANIMATION_FRAME_CHANGED =
        t.IX2_EVENT_STATE_CHANGED =
        t.IX2_EVENT_LISTENER_ADDED =
        t.IX2_CLEAR_REQUESTED =
        t.IX2_STOP_REQUESTED =
        t.IX2_PLAYBACK_REQUESTED =
        t.IX2_PREVIEW_REQUESTED =
        t.IX2_SESSION_STOPPED =
        t.IX2_SESSION_STARTED =
        t.IX2_SESSION_INITIALIZED =
        t.IX2_RAW_DATA_IMPORTED =
          void 0),
      (t.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED"),
      (t.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED"),
      (t.IX2_SESSION_STARTED = "IX2_SESSION_STARTED"),
      (t.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED"),
      (t.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED"),
      (t.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED"),
      (t.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED"),
      (t.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED"),
      (t.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED"),
      (t.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED"),
      (t.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED"),
      (t.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED"),
      (t.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED"),
      (t.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED"),
      (t.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED"),
      (t.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED"),
      (t.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
      (t.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED"),
      (t.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED"),
      (t.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED");
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.RENDER_PLUGIN =
        t.RENDER_STYLE =
        t.RENDER_GENERAL =
        t.RENDER_TRANSFORM =
        t.ABSTRACT_NODE =
        t.PLAIN_OBJECT =
        t.HTML_ELEMENT =
        t.PRESERVE_3D =
        t.PARENT =
        t.SIBLINGS =
        t.IMMEDIATE_CHILDREN =
        t.CHILDREN =
        t.BAR_DELIMITER =
        t.COLON_DELIMITER =
        t.COMMA_DELIMITER =
        t.AUTO =
        t.WILL_CHANGE =
        t.FLEX =
        t.DISPLAY =
        t.COLOR =
        t.BORDER_COLOR =
        t.BACKGROUND =
        t.BACKGROUND_COLOR =
        t.HEIGHT =
        t.WIDTH =
        t.FILTER =
        t.OPACITY =
        t.SKEW_Y =
        t.SKEW_X =
        t.SKEW =
        t.ROTATE_Z =
        t.ROTATE_Y =
        t.ROTATE_X =
        t.SCALE_3D =
        t.SCALE_Z =
        t.SCALE_Y =
        t.SCALE_X =
        t.TRANSLATE_3D =
        t.TRANSLATE_Z =
        t.TRANSLATE_Y =
        t.TRANSLATE_X =
        t.TRANSFORM =
        t.CONFIG_UNIT =
        t.CONFIG_Z_UNIT =
        t.CONFIG_Y_UNIT =
        t.CONFIG_X_UNIT =
        t.CONFIG_VALUE =
        t.CONFIG_Z_VALUE =
        t.CONFIG_Y_VALUE =
        t.CONFIG_X_VALUE =
        t.BOUNDARY_SELECTOR =
        t.W_MOD_IX =
        t.W_MOD_JS =
        t.WF_PAGE =
        t.IX2_ID_DELIMITER =
          void 0),
      (t.IX2_ID_DELIMITER = "|"),
      (t.WF_PAGE = "data-wf-page"),
      (t.W_MOD_JS = "w-mod-js"),
      (t.W_MOD_IX = "w-mod-ix"),
      (t.BOUNDARY_SELECTOR = ".w-dyn-item"),
      (t.CONFIG_X_VALUE = "xValue"),
      (t.CONFIG_Y_VALUE = "yValue"),
      (t.CONFIG_Z_VALUE = "zValue"),
      (t.CONFIG_VALUE = "value"),
      (t.CONFIG_X_UNIT = "xUnit"),
      (t.CONFIG_Y_UNIT = "yUnit"),
      (t.CONFIG_Z_UNIT = "zUnit"),
      (t.CONFIG_UNIT = "unit"),
      (t.TRANSFORM = "transform"),
      (t.TRANSLATE_X = "translateX"),
      (t.TRANSLATE_Y = "translateY"),
      (t.TRANSLATE_Z = "translateZ"),
      (t.TRANSLATE_3D = "translate3d"),
      (t.SCALE_X = "scaleX"),
      (t.SCALE_Y = "scaleY"),
      (t.SCALE_Z = "scaleZ"),
      (t.SCALE_3D = "scale3d"),
      (t.ROTATE_X = "rotateX"),
      (t.ROTATE_Y = "rotateY"),
      (t.ROTATE_Z = "rotateZ"),
      (t.SKEW = "skew"),
      (t.SKEW_X = "skewX"),
      (t.SKEW_Y = "skewY"),
      (t.OPACITY = "opacity"),
      (t.FILTER = "filter"),
      (t.WIDTH = "width"),
      (t.HEIGHT = "height"),
      (t.BACKGROUND_COLOR = "backgroundColor"),
      (t.BACKGROUND = "background"),
      (t.BORDER_COLOR = "borderColor"),
      (t.COLOR = "color"),
      (t.DISPLAY = "display"),
      (t.FLEX = "flex"),
      (t.WILL_CHANGE = "willChange"),
      (t.AUTO = "AUTO"),
      (t.COMMA_DELIMITER = ","),
      (t.COLON_DELIMITER = ":"),
      (t.BAR_DELIMITER = "|"),
      (t.CHILDREN = "CHILDREN"),
      (t.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN"),
      (t.SIBLINGS = "SIBLINGS"),
      (t.PARENT = "PARENT"),
      (t.PRESERVE_3D = "preserve-3d"),
      (t.HTML_ELEMENT = "HTML_ELEMENT"),
      (t.PLAIN_OBJECT = "PLAIN_OBJECT"),
      (t.ABSTRACT_NODE = "ABSTRACT_NODE"),
      (t.RENDER_TRANSFORM = "RENDER_TRANSFORM"),
      (t.RENDER_GENERAL = "RENDER_GENERAL"),
      (t.RENDER_STYLE = "RENDER_STYLE"),
      (t.RENDER_PLUGIN = "RENDER_PLUGIN");
  },
  function (e, t, n) {
    "use strict";
    var a,
      i = n(1)(n(20)),
      r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixRequest = void 0);
    var o = r(n(30)),
      c = n(3),
      u = n(21),
      s = c.IX2EngineActionTypes,
      d = s.IX2_PREVIEW_REQUESTED,
      l = s.IX2_PLAYBACK_REQUESTED,
      f = s.IX2_STOP_REQUESTED,
      p = s.IX2_CLEAR_REQUESTED,
      g = { preview: {}, playback: {}, stop: {}, clear: {} },
      E = Object.create(
        null,
        ((a = {}),
        (0, i.default)(a, d, { value: "preview" }),
        (0, i.default)(a, l, { value: "playback" }),
        (0, i.default)(a, f, { value: "stop" }),
        (0, i.default)(a, p, { value: "clear" }),
        a)
      );
    t.ixRequest = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
        t = arguments.length > 1 ? arguments[1] : void 0;
      if (t.type in E) {
        var n = [E[t.type]];
        return (0, u.setIn)(e, [n], (0, o.default)({}, t.payload));
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixSession = void 0);
    var a = n(3),
      i = n(21),
      r = a.IX2EngineActionTypes,
      o = r.IX2_SESSION_INITIALIZED,
      c = r.IX2_SESSION_STARTED,
      u = r.IX2_TEST_FRAME_RENDERED,
      s = r.IX2_SESSION_STOPPED,
      d = r.IX2_EVENT_LISTENER_ADDED,
      l = r.IX2_EVENT_STATE_CHANGED,
      f = r.IX2_ANIMATION_FRAME_CHANGED,
      p = r.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      g = r.IX2_VIEWPORT_WIDTH_CHANGED,
      E = r.IX2_MEDIA_QUERIES_DEFINED,
      y = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      };
    t.ixSession = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case o:
          var n = t.payload,
            a = n.hasBoundaryNodes,
            r = n.reducedMotion;
          return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: r });
        case c:
          return (0, i.set)(e, "active", !0);
        case u:
          var v = t.payload.step,
            I = void 0 === v ? 20 : v;
          return (0, i.set)(e, "tick", e.tick + I);
        case s:
          return y;
        case f:
          var T = t.payload.now;
          return (0, i.set)(e, "tick", T);
        case d:
          var b = (0, i.addLast)(e.eventListeners, t.payload);
          return (0, i.set)(e, "eventListeners", b);
        case l:
          var m = t.payload,
            _ = m.stateKey,
            O = m.newState;
          return (0, i.setIn)(e, ["eventState", _], O);
        case p:
          var h = t.payload,
            R = h.actionListId,
            S = h.isPlaying;
          return (0, i.setIn)(e, ["playbackState", R], S);
        case g:
          for (
            var A = t.payload,
              N = A.width,
              L = A.mediaQueries,
              C = L.length,
              P = null,
              x = 0;
            x < C;
            x++
          ) {
            var w = L[x],
              M = w.key,
              U = w.min,
              G = w.max;
            if (N >= U && N <= G) {
              P = M;
              break;
            }
          }
          return (0, i.merge)(e, { viewportWidth: N, mediaQueryKey: P });
        case E:
          return (0, i.set)(e, "hasDefinedMediaQueries", !0);
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    var a = n(195),
      i = n(247),
      r = n(110);
    e.exports = function (e) {
      var t = i(e);
      return 1 == t.length && t[0][2]
        ? r(t[0][0], t[0][1])
        : function (n) {
            return n === e || a(n, e, t);
          };
    };
  },
  function (e, t, n) {
    var a = n(96),
      i = n(100);
    e.exports = function (e, t, n, r) {
      var o = n.length,
        c = o,
        u = !r;
      if (null == e) return !c;
      for (e = Object(e); o--; ) {
        var s = n[o];
        if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < c; ) {
        var d = (s = n[o])[0],
          l = e[d],
          f = s[1];
        if (u && s[2]) {
          if (void 0 === l && !(d in e)) return !1;
        } else {
          var p = new a();
          if (r) var g = r(l, f, d, e, t, p);
          if (!(void 0 === g ? i(f, l, 3, r, p) : g)) return !1;
        }
      }
      return !0;
    };
  },
  function (e, t) {
    e.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (e, t, n) {
    var a = n(32),
      i = Array.prototype.splice;
    e.exports = function (e) {
      var t = this.__data__,
        n = a(t, e);
      return !(
        n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0)
      );
    };
  },
  function (e, t, n) {
    var a = n(32);
    e.exports = function (e) {
      var t = this.__data__,
        n = a(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
  },
  function (e, t, n) {
    var a = n(32);
    e.exports = function (e) {
      return a(this.__data__, e) > -1;
    };
  },
  function (e, t, n) {
    var a = n(32);
    e.exports = function (e, t) {
      var n = this.__data__,
        i = a(n, e);
      return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
    };
  },
  function (e, t, n) {
    var a = n(31);
    e.exports = function () {
      (this.__data__ = new a()), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.get(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t, n) {
    var a = n(31),
      i = n(49),
      r = n(50);
    e.exports = function (e, t) {
      var n = this.__data__;
      if (n instanceof a) {
        var o = n.__data__;
        if (!i || o.length < 199)
          return o.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new r(o);
      }
      return n.set(e, t), (this.size = n.size), this;
    };
  },
  function (e, t, n) {
    var a = n(97),
      i = n(209),
      r = n(7),
      o = n(99),
      c = /^\[object .+?Constructor\]$/,
      u = Function.prototype,
      s = Object.prototype,
      d = u.toString,
      l = s.hasOwnProperty,
      f = RegExp(
        "^" +
          d
            .call(l)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    e.exports = function (e) {
      return !(!r(e) || i(e)) && (a(e) ? f : c).test(o(e));
    };
  },
  function (e, t, n) {
    var a = n(22),
      i = Object.prototype,
      r = i.hasOwnProperty,
      o = i.toString,
      c = a ? a.toStringTag : void 0;
    e.exports = function (e) {
      var t = r.call(e, c),
        n = e[c];
      try {
        e[c] = void 0;
        var a = !0;
      } catch (e) {}
      var i = o.call(e);
      return a && (t ? (e[c] = n) : delete e[c]), i;
    };
  },
  function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e);
    };
  },
  function (e, t, n) {
    var a,
      i = n(210),
      r = (a = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + a
        : "";
    e.exports = function (e) {
      return !!r && r in e;
    };
  },
  function (e, t, n) {
    var a = n(5)["__core-js_shared__"];
    e.exports = a;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t];
    };
  },
  function (e, t, n) {
    var a = n(213),
      i = n(31),
      r = n(49);
    e.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new a(),
          map: new (r || i)(),
          string: new a(),
        });
    };
  },
  function (e, t, n) {
    var a = n(214),
      i = n(215),
      r = n(216),
      o = n(217),
      c = n(218);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    (u.prototype.clear = a),
      (u.prototype.delete = i),
      (u.prototype.get = r),
      (u.prototype.has = o),
      (u.prototype.set = c),
      (e.exports = u);
  },
  function (e, t, n) {
    var a = n(33);
    e.exports = function () {
      (this.__data__ = a ? a(null) : {}), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t, n) {
    var a = n(33),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      if (a) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return i.call(t, e) ? t[e] : void 0;
    };
  },
  function (e, t, n) {
    var a = n(33),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      return a ? void 0 !== t[e] : i.call(t, e);
    };
  },
  function (e, t, n) {
    var a = n(33);
    e.exports = function (e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = a && void 0 === t ? "__lodash_hash_undefined__" : t),
        this
      );
    };
  },
  function (e, t, n) {
    var a = n(34);
    e.exports = function (e) {
      var t = a(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t
        ? "__proto__" !== e
        : null === e;
    };
  },
  function (e, t, n) {
    var a = n(34);
    e.exports = function (e) {
      return a(this, e).get(e);
    };
  },
  function (e, t, n) {
    var a = n(34);
    e.exports = function (e) {
      return a(this, e).has(e);
    };
  },
  function (e, t, n) {
    var a = n(34);
    e.exports = function (e, t) {
      var n = a(this, e),
        i = n.size;
      return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
    };
  },
  function (e, t, n) {
    var a = n(96),
      i = n(101),
      r = n(230),
      o = n(234),
      c = n(58),
      u = n(2),
      s = n(52),
      d = n(54),
      l = "[object Arguments]",
      f = "[object Array]",
      p = "[object Object]",
      g = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, E, y, v) {
      var I = u(e),
        T = u(t),
        b = I ? f : c(e),
        m = T ? f : c(t),
        _ = (b = b == l ? p : b) == p,
        O = (m = m == l ? p : m) == p,
        h = b == m;
      if (h && s(e)) {
        if (!s(t)) return !1;
        (I = !0), (_ = !1);
      }
      if (h && !_)
        return (
          v || (v = new a()),
          I || d(e) ? i(e, t, n, E, y, v) : r(e, t, b, n, E, y, v)
        );
      if (!(1 & n)) {
        var R = _ && g.call(e, "__wrapped__"),
          S = O && g.call(t, "__wrapped__");
        if (R || S) {
          var A = R ? e.value() : e,
            N = S ? t.value() : t;
          return v || (v = new a()), y(A, N, n, E, v);
        }
      }
      return !!h && (v || (v = new a()), o(e, t, n, E, y, v));
    };
  },
  function (e, t, n) {
    var a = n(50),
      i = n(226),
      r = n(227);
    function o(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new a(); ++t < n; ) this.add(e[t]);
    }
    (o.prototype.add = o.prototype.push = i),
      (o.prototype.has = r),
      (e.exports = o);
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, a = null == e ? 0 : e.length; ++n < a; )
        if (t(e[n], n, e)) return !0;
      return !1;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e.has(t);
    };
  },
  function (e, t, n) {
    var a = n(22),
      i = n(231),
      r = n(48),
      o = n(101),
      c = n(232),
      u = n(233),
      s = a ? a.prototype : void 0,
      d = s ? s.valueOf : void 0;
    e.exports = function (e, t, n, a, s, l, f) {
      switch (n) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
          return !(e.byteLength != t.byteLength || !l(new i(e), new i(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return r(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var p = c;
        case "[object Set]":
          var g = 1 & a;
          if ((p || (p = u), e.size != t.size && !g)) return !1;
          var E = f.get(e);
          if (E) return E == t;
          (a |= 2), f.set(e, t);
          var y = o(p(e), p(t), a, s, l, f);
          return f.delete(e), y;
        case "[object Symbol]":
          if (d) return d.call(e) == d.call(t);
      }
      return !1;
    };
  },
  function (e, t, n) {
    var a = n(5).Uint8Array;
    e.exports = a;
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e, a) {
          n[++t] = [a, e];
        }),
        n
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var a = n(235),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, r, o, c) {
      var u = 1 & n,
        s = a(e),
        d = s.length;
      if (d != a(t).length && !u) return !1;
      for (var l = d; l--; ) {
        var f = s[l];
        if (!(u ? f in t : i.call(t, f))) return !1;
      }
      var p = c.get(e),
        g = c.get(t);
      if (p && g) return p == t && g == e;
      var E = !0;
      c.set(e, t), c.set(t, e);
      for (var y = u; ++l < d; ) {
        var v = e[(f = s[l])],
          I = t[f];
        if (r) var T = u ? r(I, v, f, t, e, c) : r(v, I, f, e, t, c);
        if (!(void 0 === T ? v === I || o(v, I, n, r, c) : T)) {
          E = !1;
          break;
        }
        y || (y = "constructor" == f);
      }
      if (E && !y) {
        var b = e.constructor,
          m = t.constructor;
        b != m &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            "function" == typeof b &&
            b instanceof b &&
            "function" == typeof m &&
            m instanceof m
          ) &&
          (E = !1);
      }
      return c.delete(e), c.delete(t), E;
    };
  },
  function (e, t, n) {
    var a = n(102),
      i = n(103),
      r = n(35);
    e.exports = function (e) {
      return a(e, r, i);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, a = null == e ? 0 : e.length, i = 0, r = []; ++n < a; ) {
        var o = e[n];
        t(o, n, e) && (r[i++] = o);
      }
      return r;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
      return a;
    };
  },
  function (e, t, n) {
    var a = n(15),
      i = n(12);
    e.exports = function (e) {
      return i(e) && "[object Arguments]" == a(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      return !1;
    };
  },
  function (e, t, n) {
    var a = n(15),
      i = n(55),
      r = n(12),
      o = {};
    (o["[object Float32Array]"] =
      o["[object Float64Array]"] =
      o["[object Int8Array]"] =
      o["[object Int16Array]"] =
      o["[object Int32Array]"] =
      o["[object Uint8Array]"] =
      o["[object Uint8ClampedArray]"] =
      o["[object Uint16Array]"] =
      o["[object Uint32Array]"] =
        !0),
      (o["[object Arguments]"] =
        o["[object Array]"] =
        o["[object ArrayBuffer]"] =
        o["[object Boolean]"] =
        o["[object DataView]"] =
        o["[object Date]"] =
        o["[object Error]"] =
        o["[object Function]"] =
        o["[object Map]"] =
        o["[object Number]"] =
        o["[object Object]"] =
        o["[object RegExp]"] =
        o["[object Set]"] =
        o["[object String]"] =
        o["[object WeakMap]"] =
          !1),
      (e.exports = function (e) {
        return r(e) && i(e.length) && !!o[a(e)];
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  },
  function (e, t, n) {
    (function (e) {
      var a = n(98),
        i = t && !t.nodeType && t,
        r = i && "object" == typeof e && e && !e.nodeType && e,
        o = r && r.exports === i && a.process,
        c = (function () {
          try {
            return (
              (r && r.require && r.require("util").types) ||
              (o && o.binding && o.binding("util"))
            );
          } catch (e) {}
        })();
      e.exports = c;
    }.call(this, n(106)(e)));
  },
  function (e, t, n) {
    var a = n(107)(Object.keys, Object);
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(11)(n(5), "DataView");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(11)(n(5), "Promise");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(11)(n(5), "Set");
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(109),
      i = n(35);
    e.exports = function (e) {
      for (var t = i(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r];
        t[n] = [r, o, a(o)];
      }
      return t;
    };
  },
  function (e, t, n) {
    var a = n(100),
      i = n(59),
      r = n(254),
      o = n(61),
      c = n(109),
      u = n(110),
      s = n(23);
    e.exports = function (e, t) {
      return o(e) && c(t)
        ? u(s(e), t)
        : function (n) {
            var o = i(n, e);
            return void 0 === o && o === t ? r(n, e) : a(t, o, 3);
          };
    };
  },
  function (e, t, n) {
    var a = n(250),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      r = /\\(\\)?/g,
      o = a(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(i, function (e, n, a, i) {
            t.push(a ? i.replace(r, "$1") : n || e);
          }),
          t
        );
      });
    e.exports = o;
  },
  function (e, t, n) {
    var a = n(251);
    e.exports = function (e) {
      var t = a(e, function (e) {
          return 500 === n.size && n.clear(), e;
        }),
        n = t.cache;
      return t;
    };
  },
  function (e, t, n) {
    var a = n(50),
      i = "Expected a function";
    function r(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t))
        throw new TypeError(i);
      var n = function () {
        var a = arguments,
          i = t ? t.apply(this, a) : a[0],
          r = n.cache;
        if (r.has(i)) return r.get(i);
        var o = e.apply(this, a);
        return (n.cache = r.set(i, o) || r), o;
      };
      return (n.cache = new (r.Cache || a)()), n;
    }
    (r.Cache = a), (e.exports = r);
  },
  function (e, t, n) {
    var a = n(253);
    e.exports = function (e) {
      return null == e ? "" : a(e);
    };
  },
  function (e, t, n) {
    var a = n(22),
      i = n(111),
      r = n(2),
      o = n(38),
      c = a ? a.prototype : void 0,
      u = c ? c.toString : void 0;
    e.exports = function e(t) {
      if ("string" == typeof t) return t;
      if (r(t)) return i(t, e) + "";
      if (o(t)) return u ? u.call(t) : "";
      var n = t + "";
      return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
    };
  },
  function (e, t, n) {
    var a = n(255),
      i = n(256);
    e.exports = function (e, t) {
      return null != e && i(e, t, a);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null != e && t in Object(e);
    };
  },
  function (e, t, n) {
    var a = n(37),
      i = n(36),
      r = n(2),
      o = n(53),
      c = n(55),
      u = n(23);
    e.exports = function (e, t, n) {
      for (var s = -1, d = (t = a(t, e)).length, l = !1; ++s < d; ) {
        var f = u(t[s]);
        if (!(l = null != e && n(e, f))) break;
        e = e[f];
      }
      return l || ++s != d
        ? l
        : !!(d = null == e ? 0 : e.length) && c(d) && o(f, d) && (r(e) || i(e));
    };
  },
  function (e, t, n) {
    var a = n(112),
      i = n(258),
      r = n(61),
      o = n(23);
    e.exports = function (e) {
      return r(e) ? a(o(e)) : i(e);
    };
  },
  function (e, t, n) {
    var a = n(60);
    e.exports = function (e) {
      return function (t) {
        return a(t, e);
      };
    };
  },
  function (e, t, n) {
    var a = n(113),
      i = n(10),
      r = n(114),
      o = Math.max;
    e.exports = function (e, t, n) {
      var c = null == e ? 0 : e.length;
      if (!c) return -1;
      var u = null == n ? 0 : r(n);
      return u < 0 && (u = o(c + u, 0)), a(e, i(t, 3), u);
    };
  },
  function (e, t, n) {
    var a = n(63);
    e.exports = function (e) {
      return e
        ? (e = a(e)) === 1 / 0 || e === -1 / 0
          ? 1.7976931348623157e308 * (e < 0 ? -1 : 1)
          : e == e
          ? e
          : 0
        : 0 === e
        ? e
        : 0;
    };
  },
  function (e, t, n) {
    var a = n(262),
      i = /^\s+/;
    e.exports = function (e) {
      return e ? e.slice(0, a(e) + 1).replace(i, "") : e;
    };
  },
  function (e, t) {
    var n = /\s/;
    e.exports = function (e) {
      for (var t = e.length; t-- && n.test(e.charAt(t)); );
      return t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      )
        return Array.from(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createElementState = m),
      (t.mergeActionState = _),
      (t.ixElements = void 0);
    var a = n(21),
      i = n(3),
      r = i.IX2EngineConstants,
      o = (r.HTML_ELEMENT, r.PLAIN_OBJECT),
      c = (r.ABSTRACT_NODE, r.CONFIG_X_VALUE),
      u = r.CONFIG_Y_VALUE,
      s = r.CONFIG_Z_VALUE,
      d = r.CONFIG_VALUE,
      l = r.CONFIG_X_UNIT,
      f = r.CONFIG_Y_UNIT,
      p = r.CONFIG_Z_UNIT,
      g = r.CONFIG_UNIT,
      E = i.IX2EngineActionTypes,
      y = E.IX2_SESSION_STOPPED,
      v = E.IX2_INSTANCE_ADDED,
      I = E.IX2_ELEMENT_STATE_CHANGED,
      T = {},
      b = "refState";
    function m(e, t, n, i, r) {
      var c =
        n === o ? (0, a.getIn)(r, ["config", "target", "objectId"]) : null;
      return (0, a.mergeIn)(e, [i], { id: i, ref: t, refId: c, refType: n });
    }
    function _(e, t, n, i, r) {
      var o = (function (e) {
          var t = r.config;
          return O.reduce(function (e, n) {
            var a = n[0],
              i = n[1],
              r = t[a],
              o = t[i];
            return null != r && null != o && (e[i] = o), e;
          }, {});
        })(),
        c = [t, b, n];
      return (0, a.mergeIn)(e, c, i, o);
    }
    t.ixElements = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (t.type) {
        case y:
          return T;
        case v:
          var n = t.payload,
            i = n.elementId,
            r = n.element,
            o = n.origin,
            c = n.actionItem,
            u = n.refType,
            s = c.actionTypeId,
            d = e;
          return (
            (0, a.getIn)(d, [i, r]) !== r && (d = m(d, r, u, i, c)),
            _(d, i, s, o, c)
          );
        case I:
          var l = t.payload;
          return _(e, l.elementId, l.actionTypeId, l.current, l.actionItem);
        default:
          return e;
      }
    };
    var O = [
      [c, l],
      [u, f],
      [s, p],
      [d, g],
    ];
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginOrigin =
        t.getPluginDuration =
        t.getPluginConfig =
          void 0),
      (t.getPluginConfig = function (e) {
        return e.value;
      }),
      (t.getPluginDuration = function (e, t) {
        if ("auto" !== t.config.duration) return null;
        var n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? 1e3 * n
          : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
      }),
      (t.getPluginOrigin = function (e) {
        return e || { value: 0 };
      }),
      (t.getPluginDestination = function (e) {
        return { value: e.value };
      }),
      (t.createPluginInstance = function (e) {
        var t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      }),
      (t.renderPlugin = function (e, t, n) {
        if (e) {
          var a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        }
      }),
      (t.clearPlugin = function (e) {
        window.Webflow.require("lottie").createInstance(e).stop();
      });
  },
  function (e, t, n) {
    "use strict";
    var a,
      i,
      r,
      o = n(1),
      c = o(n(24)),
      u = o(n(20)),
      s = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getInstanceId = function () {
        return "i" + ge++;
      }),
      (t.getElementId = function (e, t) {
        for (var n in e) {
          var a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + Ee++;
      }),
      (t.reifyState = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.events,
          n = e.actionLists,
          a = e.site,
          i = (0, l.default)(
            t,
            function (e, t) {
              var n = t.eventTypeId;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          r = a && a.mediaQueries,
          o = [];
        return (
          r
            ? (o = r.map(function (e) {
                return e.key;
              }))
            : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: t,
              actionLists: n,
              eventTypeMap: i,
              mediaQueries: r,
              mediaQueryKeys: o,
            },
          }
        );
      }),
      (t.observeStore = function (e) {
        var t = e.store,
          n = e.select,
          a = e.onChange,
          i = e.comparator,
          r = void 0 === i ? ye : i,
          o = t.getState,
          c = (0, t.subscribe)(function () {
            var e = n(o());
            null != e ? r(e, u) || a((u = e), t) : c();
          }),
          u = n(o());
        return c;
      }),
      (t.getAffectedElements = Ie),
      (t.getComputedStyle = function (e) {
        var t = e.element,
          n = e.actionItem;
        if (!I.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
          case ie:
          case re:
          case oe:
          case ce:
          case ue:
            return window.getComputedStyle(t);
          default:
            return {};
        }
      }),
      (t.getInstanceOrigin = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = arguments.length > 3 ? arguments[3] : void 0,
          i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          r = a.actionTypeId,
          o = a.config;
        if ((0, v.isPluginType)(r)) return (0, v.getPluginOrigin)(r)(t[r]);
        switch (r) {
          case Z:
          case J:
          case ee:
          case te:
            return t[r] || Oe[r];
          case ae:
            return be(t[r], a.config.filters);
          case ne:
            return { value: (0, d.default)(parseFloat(i(e, C)), 1) };
          case ie:
            var c = i(e, x),
              u = i(e, w);
            return {
              widthValue:
                o.widthUnit === H
                  ? Te.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.width)
                  : (0, d.default)(parseFloat(c), parseFloat(n.width)),
              heightValue:
                o.heightUnit === H
                  ? Te.test(u)
                    ? parseFloat(u)
                    : parseFloat(n.height)
                  : (0, d.default)(parseFloat(u), parseFloat(n.height)),
            };
          case re:
          case oe:
          case ce:
            return (function (e) {
              var t = e.element,
                n = e.computedStyle,
                a = e.getStyle,
                i = le[e.actionTypeId],
                r = a(t, i),
                o = (function (e, t) {
                  var n = Ne.exec(t);
                  return n ? n[1] : "";
                })(0, Ae.test(r) ? r : n[i]).split(Y);
              return {
                rValue: (0, d.default)(parseInt(o[0], 10), 255),
                gValue: (0, d.default)(parseInt(o[1], 10), 255),
                bValue: (0, d.default)(parseInt(o[2], 10), 255),
                aValue: (0, d.default)(parseFloat(o[3]), 1),
              };
            })({ element: e, actionTypeId: r, computedStyle: n, getStyle: i });
          case ue:
            return { value: (0, d.default)(i(e, k), n.display) };
          case se:
            return t[r] || { value: 0 };
          default:
            return;
        }
      }),
      (t.getDestinationValues = function (e) {
        var t = e.element,
          n = e.actionItem,
          a = e.elementApi,
          i = n.actionTypeId;
        if ((0, v.isPluginType)(i))
          return (0, v.getPluginDestination)(i)(n.config);
        switch (i) {
          case Z:
          case J:
          case ee:
          case te:
            var r = n.config;
            return { xValue: r.xValue, yValue: r.yValue, zValue: r.zValue };
          case ie:
            var o = a.getStyle,
              c = a.setStyle,
              u = a.getProperty,
              s = n.config,
              d = s.widthUnit,
              l = s.heightUnit,
              f = n.config,
              p = f.widthValue,
              g = f.heightValue;
            if (!I.IS_BROWSER_ENV) return { widthValue: p, heightValue: g };
            if (d === H) {
              var E = o(t, x);
              c(t, x, ""), (p = u(t, "offsetWidth")), c(t, x, E);
            }
            if (l === H) {
              var y = o(t, w);
              c(t, w, ""), (g = u(t, "offsetHeight")), c(t, w, y);
            }
            return { widthValue: p, heightValue: g };
          case re:
          case oe:
          case ce:
            var T = n.config;
            return {
              rValue: T.rValue,
              gValue: T.gValue,
              bValue: T.bValue,
              aValue: T.aValue,
            };
          case ae:
            return n.config.filters.reduce(me, {});
          default:
            return { value: n.config.value };
        }
      }),
      (t.getRenderType = _e),
      (t.getStyleProp = function (e, t) {
        return e === K ? t.replace("STYLE_", "").toLowerCase() : null;
      }),
      (t.renderHTMLElement = function (e, t, n, a, i, r, o, c, u) {
        switch (c) {
          case W:
            return (function (e, t, n, a, i) {
              var r,
                o,
                c,
                u,
                s,
                d = Se.map(function (e) {
                  var n = Oe[e],
                    a = t[e] || {},
                    i = a.xValue,
                    r = void 0 === i ? n.xValue : i,
                    o = a.yValue,
                    c = void 0 === o ? n.yValue : o,
                    u = a.zValue,
                    s = void 0 === u ? n.zValue : u,
                    d = a.xUnit,
                    l = void 0 === d ? "" : d,
                    f = a.yUnit,
                    p = void 0 === f ? "" : f,
                    g = a.zUnit,
                    E = void 0 === g ? "" : g;
                  switch (e) {
                    case Z:
                      return ""
                        .concat(_, "(")
                        .concat(r)
                        .concat(l, ", ")
                        .concat(c)
                        .concat(p, ", ")
                        .concat(s)
                        .concat(E, ")");
                    case J:
                      return ""
                        .concat(O, "(")
                        .concat(r)
                        .concat(l, ", ")
                        .concat(c)
                        .concat(p, ", ")
                        .concat(s)
                        .concat(E, ")");
                    case ee:
                      return ""
                        .concat(h, "(")
                        .concat(r)
                        .concat(l, ") ")
                        .concat(R, "(")
                        .concat(c)
                        .concat(p, ") ")
                        .concat(S, "(")
                        .concat(s)
                        .concat(E, ")");
                    case te:
                      return ""
                        .concat(A, "(")
                        .concat(r)
                        .concat(l, ", ")
                        .concat(c)
                        .concat(p, ")");
                    default:
                      return "";
                  }
                }).join(" "),
                l = i.setStyle;
              Le(e, I.TRANSFORM_PREFIXED, i),
                l(e, I.TRANSFORM_PREFIXED, d),
                (r = n),
                (o = a.actionTypeId),
                (c = r.xValue),
                (u = r.yValue),
                (s = r.zValue),
                ((o === Z && void 0 !== s) ||
                  (o === J && void 0 !== s) ||
                  (o === ee && (void 0 !== c || void 0 !== u))) &&
                  l(e, I.TRANSFORM_STYLE_PREFIXED, N);
            })(e, t, n, i, o);
          case K:
            return (function (e, t, n, a, i, r) {
              var o = r.setStyle,
                c = a.actionTypeId,
                u = a.config;
              switch (c) {
                case ie:
                  var s = a.config,
                    d = s.widthUnit,
                    f = void 0 === d ? "" : d,
                    p = s.heightUnit,
                    g = void 0 === p ? "" : p,
                    E = n.widthValue,
                    y = n.heightValue;
                  void 0 !== E &&
                    (f === H && (f = "px"), Le(e, x, r), o(e, x, E + f)),
                    void 0 !== y &&
                      (g === H && (g = "px"), Le(e, w, r), o(e, w, y + g));
                  break;
                case ae:
                  !(function (e, t, n, a) {
                    var i = (0, l.default)(
                        t,
                        function (e, t, a) {
                          return ""
                            .concat(e, " ")
                            .concat(a, "(")
                            .concat(t)
                            .concat(Re(a, n), ")");
                        },
                        ""
                      ),
                      r = a.setStyle;
                    Le(e, P, a), r(e, P, i);
                  })(e, n, u, r);
                  break;
                case re:
                case oe:
                case ce:
                  var v = le[c],
                    I = Math.round(n.rValue),
                    T = Math.round(n.gValue),
                    b = Math.round(n.bValue),
                    m = n.aValue;
                  Le(e, v, r),
                    o(
                      e,
                      v,
                      m >= 1
                        ? "rgb(".concat(I, ",").concat(T, ",").concat(b, ")")
                        : "rgba("
                            .concat(I, ",")
                            .concat(T, ",")
                            .concat(b, ",")
                            .concat(m, ")")
                    );
                  break;
                default:
                  var _ = u.unit,
                    O = void 0 === _ ? "" : _;
                  Le(e, i, r), o(e, i, n.value + O);
              }
            })(e, 0, n, i, r, o);
          case Q:
            return (function (e, t, n) {
              var a = o.setStyle;
              switch (t.actionTypeId) {
                case ue:
                  var i = t.config.value;
                  return void (i === L && I.IS_BROWSER_ENV
                    ? a(e, k, I.FLEX_PREFIXED)
                    : a(e, k, i));
              }
            })(e, i);
          case q:
            var s = i.actionTypeId;
            if ((0, v.isPluginType)(s)) return (0, v.renderPlugin)(s)(u, t, i);
        }
      }),
      (t.clearAllStyles = function (e) {
        var t = e.store,
          n = e.elementApi,
          a = t.getState().ixData,
          i = a.events,
          r = void 0 === i ? {} : i,
          o = a.actionLists,
          c = void 0 === o ? {} : o;
        Object.keys(r).forEach(function (e) {
          var t = r[e],
            a = t.action.config.actionListId,
            i = c[a];
          i && Pe({ actionList: i, event: t, elementApi: n });
        }),
          Object.keys(c).forEach(function (e) {
            Pe({ actionList: c[e], elementApi: n });
          });
      }),
      (t.cleanupHTMLElement = function (e, t, n) {
        var a = n.setStyle,
          i = n.getStyle,
          r = t.actionTypeId;
        if (r === ie) {
          var o = t.config;
          o.widthUnit === H && a(e, x, ""), o.heightUnit === H && a(e, w, "");
        }
        i(e, j) && we({ effect: Ce, actionTypeId: r, elementApi: n })(e);
      }),
      (t.getMaxDurationItemIndex = Ue),
      (t.getActionListProgress = function (e, t) {
        var n = e.actionItemGroups,
          a = e.useFirstGroupAsInitialState,
          i = t.actionItem,
          r = t.verboseTimeElapsed,
          o = void 0 === r ? 0 : r,
          c = 0,
          u = 0;
        return (
          n.forEach(function (e, t) {
            if (!a || 0 !== t) {
              var n = e.actionItems,
                r = n[Ue(n)],
                s = r.config,
                d = r.actionTypeId;
              i.id === r.id && (u = c + o);
              var l = _e(d) === Q ? 0 : s.duration;
              c += s.delay + l;
            }
          }),
          c > 0 ? (0, y.optimizeFloat)(u / c) : 0
        );
      }),
      (t.reduceListToGroup = function (e) {
        var t = e.actionList,
          n = e.actionItemId,
          a = e.rawData,
          i = t.actionItemGroups,
          r = t.continuousParameterGroups,
          o = [],
          c = function (e) {
            return (
              o.push((0, p.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === n
            );
          };
        return (
          i &&
            i.some(function (e) {
              return e.actionItems.some(c);
            }),
          r &&
            r.some(function (e) {
              return e.continuousActionGroups.some(function (e) {
                return e.actionItems.some(c);
              });
            }),
          (0, p.setIn)(
            a,
            ["actionLists"],
            (0, u.default)({}, t.id, {
              id: t.id,
              actionItemGroups: [{ actionItems: o }],
            })
          )
        );
      }),
      (t.shouldNamespaceEventParameter = function (e, t) {
        var n = t.basedOn;
        return (
          (e === E.EventTypeConsts.SCROLLING_IN_VIEW &&
            (n === E.EventBasedOn.ELEMENT || null == n)) ||
          (e === E.EventTypeConsts.MOUSE_MOVE && n === E.EventBasedOn.ELEMENT)
        );
      }),
      (t.getNamespacedParameterId = function (e, t) {
        return e + z + t;
      }),
      (t.shouldAllowMediaQuery = function (e, t) {
        return null == t || -1 !== e.indexOf(t);
      }),
      (t.mediaQueriesEqual = function (e, t) {
        return (0, g.default)(e && e.sort(), t && t.sort());
      }),
      (t.stringifyTarget = function (e) {
        if ("string" == typeof e) return e;
        var t = e.id,
          n = void 0 === t ? "" : t,
          a = e.selector,
          i = void 0 === a ? "" : a,
          r = e.useEventTarget;
        return n + B + i + B + (void 0 === r ? "" : r);
      }),
      (t.getItemConfigByKey = void 0);
    var d = s(n(269)),
      l = s(n(270)),
      f = s(n(276)),
      p = n(21),
      g = s(n(122)),
      E = n(3),
      y = n(117),
      v = n(119),
      I = n(47),
      T = E.IX2EngineConstants,
      b = T.BACKGROUND,
      m = T.TRANSFORM,
      _ = T.TRANSLATE_3D,
      O = T.SCALE_3D,
      h = T.ROTATE_X,
      R = T.ROTATE_Y,
      S = T.ROTATE_Z,
      A = T.SKEW,
      N = T.PRESERVE_3D,
      L = T.FLEX,
      C = T.OPACITY,
      P = T.FILTER,
      x = T.WIDTH,
      w = T.HEIGHT,
      M = T.BACKGROUND_COLOR,
      U = T.BORDER_COLOR,
      G = T.COLOR,
      D = T.CHILDREN,
      V = T.IMMEDIATE_CHILDREN,
      X = T.SIBLINGS,
      F = T.PARENT,
      k = T.DISPLAY,
      j = T.WILL_CHANGE,
      H = T.AUTO,
      Y = T.COMMA_DELIMITER,
      z = T.COLON_DELIMITER,
      B = T.BAR_DELIMITER,
      W = T.RENDER_TRANSFORM,
      Q = T.RENDER_GENERAL,
      K = T.RENDER_STYLE,
      q = T.RENDER_PLUGIN,
      $ = E.ActionTypeConsts,
      Z = $.TRANSFORM_MOVE,
      J = $.TRANSFORM_SCALE,
      ee = $.TRANSFORM_ROTATE,
      te = $.TRANSFORM_SKEW,
      ne = $.STYLE_OPACITY,
      ae = $.STYLE_FILTER,
      ie = $.STYLE_SIZE,
      re = $.STYLE_BACKGROUND_COLOR,
      oe = $.STYLE_BORDER,
      ce = $.STYLE_TEXT_COLOR,
      ue = $.GENERAL_DISPLAY,
      se = "OBJECT_VALUE",
      de = function (e) {
        return e.trim();
      },
      le = Object.freeze(
        ((a = {}),
        (0, u.default)(a, re, M),
        (0, u.default)(a, oe, U),
        (0, u.default)(a, ce, G),
        a)
      ),
      fe = Object.freeze(
        ((i = {}),
        (0, u.default)(i, I.TRANSFORM_PREFIXED, m),
        (0, u.default)(i, M, b),
        (0, u.default)(i, C, C),
        (0, u.default)(i, P, P),
        (0, u.default)(i, x, x),
        (0, u.default)(i, w, w),
        i)
      ),
      pe = {},
      ge = 1,
      Ee = 1,
      ye = function (e, t) {
        return e === t;
      };
    function ve(e) {
      var t = (0, c.default)(e);
      return "string" === t
        ? { id: e }
        : null != e && "object" === t
        ? {
            id: e.id,
            objectId: e.objectId,
            selector: e.selector,
            selectorGuids: e.selectorGuids,
            appliesTo: e.appliesTo,
            useEventTarget: e.useEventTarget,
          }
        : {};
    }
    function Ie(e) {
      var t,
        n,
        a,
        i = e.config,
        r = e.event,
        o = e.eventTarget,
        c = e.elementRoot,
        u = e.elementApi;
      if (!u) throw new Error("IX2 missing elementApi");
      var s = i.targets;
      if (Array.isArray(s) && s.length > 0)
        return s.reduce(function (e, t) {
          return e.concat(
            Ie({
              config: { target: t },
              event: r,
              eventTarget: o,
              elementRoot: c,
              elementApi: u,
            })
          );
        }, []);
      var d = u.getValidDocument,
        l = u.getQuerySelector,
        f = u.queryDocument,
        p = u.getChildElements,
        g = u.getSiblingElements,
        y = u.matchSelector,
        v = u.elementContains,
        T = u.isSiblingNode,
        b = i.target;
      if (!b) return [];
      var m = ve(b),
        _ = m.id,
        O = m.objectId,
        h = m.selector,
        R = m.selectorGuids,
        S = m.appliesTo,
        A = m.useEventTarget;
      if (O) return [pe[O] || (pe[O] = {})];
      if (S === E.EventAppliesTo.PAGE) {
        var N = d(_);
        return N ? [N] : [];
      }
      var L,
        C,
        P,
        x =
          (null !==
            (t =
              null == r
                ? void 0
                : null === (n = r.action) || void 0 === n
                ? void 0
                : null === (a = n.config) || void 0 === a
                ? void 0
                : a.affectedElements) && void 0 !== t
            ? t
            : {})[_ || h] || {},
        w = Boolean(x.id || x.selector),
        M = r && l(ve(r.target));
      if (
        (w
          ? ((L = x.limitAffectedElements), (C = M), (P = l(x)))
          : (C = P = l({ id: _, selector: h, selectorGuids: R })),
        r && A)
      ) {
        var U = o && (P || !0 === A) ? [o] : f(M);
        if (P) {
          if (A === F)
            return f(P).filter(function (e) {
              return U.some(function (t) {
                return v(e, t);
              });
            });
          if (A === D)
            return f(P).filter(function (e) {
              return U.some(function (t) {
                return v(t, e);
              });
            });
          if (A === X)
            return f(P).filter(function (e) {
              return U.some(function (t) {
                return T(t, e);
              });
            });
        }
        return U;
      }
      return null == C || null == P
        ? []
        : I.IS_BROWSER_ENV && c
        ? f(P).filter(function (e) {
            return c.contains(e);
          })
        : L === D
        ? f(C, P)
        : L === V
        ? p(f(C)).filter(y(P))
        : L === X
        ? g(f(C)).filter(y(P))
        : f(P);
    }
    var Te = /px/,
      be = function (e, t) {
        return t.reduce(function (e, t) {
          return null == e[t.type] && (e[t.type] = he[t.type]), e;
        }, e || {});
      },
      me = function (e, t) {
        return t && (e[t.type] = t.value || 0), e;
      };
    function _e(e) {
      return /^TRANSFORM_/.test(e)
        ? W
        : /^STYLE_/.test(e)
        ? K
        : /^GENERAL_/.test(e)
        ? Q
        : /^PLUGIN_/.test(e)
        ? q
        : void 0;
    }
    t.getItemConfigByKey = function (e, t, n) {
      if ((0, v.isPluginType)(e)) return (0, v.getPluginConfig)(e)(n, t);
      switch (e) {
        case ae:
          var a = (0, f.default)(n.filters, function (e) {
            return e.type === t;
          });
          return a ? a.value : 0;
        default:
          return n[t];
      }
    };
    var Oe =
        ((r = {}),
        (0, u.default)(
          r,
          Z,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, u.default)(
          r,
          J,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, u.default)(
          r,
          ee,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, u.default)(r, te, Object.freeze({ xValue: 0, yValue: 0 })),
        r),
      he = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      Re = function (e, t) {
        var n = (0, f.default)(t.filters, function (t) {
          return t.type === e;
        });
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      Se = Object.keys(Oe),
      Ae = /^rgb/,
      Ne = RegExp("rgba?".concat("\\(([^)]+)\\)"));
    function Le(e, t, n) {
      if (I.IS_BROWSER_ENV) {
        var a = fe[t];
        if (a) {
          var i = n.getStyle,
            r = n.setStyle,
            o = i(e, j);
          if (o) {
            var c = o.split(Y).map(de);
            -1 === c.indexOf(a) && r(e, j, c.concat(a).join(Y));
          } else r(e, j, a);
        }
      }
    }
    function Ce(e, t, n) {
      if (I.IS_BROWSER_ENV) {
        var a = fe[t];
        if (a) {
          var i = n.getStyle,
            r = n.setStyle,
            o = i(e, j);
          o &&
            -1 !== o.indexOf(a) &&
            r(
              e,
              j,
              o
                .split(Y)
                .map(de)
                .filter(function (e) {
                  return e !== a;
                })
                .join(Y)
            );
        }
      }
    }
    function Pe(e) {
      var t = e.actionList,
        n = void 0 === t ? {} : t,
        a = e.event,
        i = e.elementApi,
        r = n.actionItemGroups,
        o = n.continuousParameterGroups;
      r &&
        r.forEach(function (e) {
          xe({ actionGroup: e, event: a, elementApi: i });
        }),
        o &&
          o.forEach(function (e) {
            e.continuousActionGroups.forEach(function (e) {
              xe({ actionGroup: e, event: a, elementApi: i });
            });
          });
    }
    function xe(e) {
      var t = e.actionGroup,
        n = e.event,
        a = e.elementApi;
      t.actionItems.forEach(function (e) {
        var t,
          i = e.actionTypeId,
          r = e.config;
        (t = (0, v.isPluginType)(i)
          ? (0, v.clearPlugin)(i)
          : we({ effect: Me, actionTypeId: i, elementApi: a })),
          Ie({ config: r, event: n, elementApi: a }).forEach(t);
      });
    }
    var we = function (e) {
      var t = e.effect,
        n = e.actionTypeId,
        a = e.elementApi;
      return function (e) {
        switch (n) {
          case Z:
          case J:
          case ee:
          case te:
            t(e, I.TRANSFORM_PREFIXED, a);
            break;
          case ae:
            t(e, P, a);
            break;
          case ne:
            t(e, C, a);
            break;
          case ie:
            t(e, x, a), t(e, w, a);
            break;
          case re:
          case oe:
          case ce:
            t(e, le[n], a);
            break;
          case ue:
            t(e, k, a);
        }
      };
    };
    function Me(e, t, n) {
      var a = n.setStyle;
      Ce(e, t, n),
        a(e, t, ""),
        t === I.TRANSFORM_PREFIXED && a(e, I.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Ue(e) {
      var t = 0,
        n = 0;
      return (
        e.forEach(function (e, a) {
          var i = e.config,
            r = i.delay + i.duration;
          r >= t && ((t = r), (n = a));
        }),
        n
      );
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e || e != e ? t : e;
    };
  },
  function (e, t, n) {
    var a = n(271),
      i = n(120),
      r = n(10),
      o = n(275),
      c = n(2);
    e.exports = function (e, t, n) {
      var u = c(e) ? a : o,
        s = arguments.length < 3;
      return u(e, r(t, 4), n, s, i);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, a) {
      var i = -1,
        r = null == e ? 0 : e.length;
      for (a && r && (n = e[++i]); ++i < r; ) n = t(n, e[i], i, e);
      return n;
    };
  },
  function (e, t, n) {
    var a = n(273)();
    e.exports = a;
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t, n, a) {
        for (var i = -1, r = Object(t), o = a(t), c = o.length; c--; ) {
          var u = o[e ? c : ++i];
          if (!1 === n(r[u], u, r)) break;
        }
        return t;
      };
    };
  },
  function (e, t, n) {
    var a = n(16);
    e.exports = function (e, t) {
      return function (n, i) {
        if (null == n) return n;
        if (!a(n)) return e(n, i);
        for (
          var r = n.length, o = t ? r : -1, c = Object(n);
          (t ? o-- : ++o < r) && !1 !== i(c[o], o, c);

        );
        return n;
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, a, i) {
      return (
        i(e, function (e, i, r) {
          n = a ? ((a = !1), e) : t(n, e, i, r);
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var a = n(95)(n(277));
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(113),
      i = n(10),
      r = n(114),
      o = Math.max,
      c = Math.min;
    e.exports = function (e, t, n) {
      var u = null == e ? 0 : e.length;
      if (!u) return -1;
      var s = u - 1;
      return (
        void 0 !== n && ((s = r(n)), (s = n < 0 ? o(u + s, 0) : c(s, u - 1))),
        a(e, i(t, 3), s, !0)
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  function (e, t, n) {
    "use strict";
    var a = Object.prototype.hasOwnProperty;
    function i(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    e.exports = function (e, t) {
      if (i(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (!a.call(t, n[o]) || !i(e[n[o]], t[n[o]])) return !1;
      return !0;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixInstances = void 0);
    var a = n(3),
      i = n(14),
      r = n(21),
      o = a.IX2EngineActionTypes,
      c = o.IX2_RAW_DATA_IMPORTED,
      u = o.IX2_SESSION_STOPPED,
      s = o.IX2_INSTANCE_ADDED,
      d = o.IX2_INSTANCE_STARTED,
      l = o.IX2_INSTANCE_REMOVED,
      f = o.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      g = p.optimizeFloat,
      E = p.applyEasing,
      y = p.createBezierEasing,
      v = a.IX2EngineConstants.RENDER_GENERAL,
      I = i.IX2VanillaUtils,
      T = I.getItemConfigByKey,
      b = I.getRenderType,
      m = I.getStyleProp,
      _ = function (e, t) {
        var n = e.position,
          a = e.parameterId,
          i = e.actionGroups,
          o = e.destinationKeys,
          c = e.smoothing,
          u = e.restingValue,
          s = e.actionTypeId,
          d = e.customEasingFn,
          l = e.skipMotion,
          f = e.skipToValue,
          p = t.payload.parameters,
          y = Math.max(1 - c, 0.01),
          v = p[a];
        null == v && ((y = 1), (v = u));
        var I,
          b,
          m,
          _,
          O = Math.max(v, 0) || 0,
          h = g(O - n),
          R = l ? f : g(n + h * y),
          S = 100 * R;
        if (R === n && e.current) return e;
        for (var A = 0, N = i.length; A < N; A++) {
          var L = i[A],
            C = L.keyframe,
            P = L.actionItems;
          if ((0 === A && (I = P[0]), S >= C)) {
            I = P[0];
            var x = i[A + 1],
              w = x && S !== C;
            (b = w ? x.actionItems[0] : null),
              w && ((m = C / 100), (_ = (x.keyframe - C) / 100));
          }
        }
        var M = {};
        if (I && !b)
          for (var U = 0, G = o.length; U < G; U++) {
            var D = o[U];
            M[D] = T(s, D, I.config);
          }
        else if (I && b && void 0 !== m && void 0 !== _)
          for (
            var V = (R - m) / _,
              X = I.config.easing,
              F = E(X, V, d),
              k = 0,
              j = o.length;
            k < j;
            k++
          ) {
            var H = o[k],
              Y = T(s, H, I.config),
              z = (T(s, H, b.config) - Y) * F + Y;
            M[H] = z;
          }
        return (0, r.merge)(e, { position: R, current: M });
      },
      O = function (e, t) {
        var n = e,
          a = n.active,
          i = n.origin,
          o = n.start,
          c = n.immediate,
          u = n.renderType,
          s = n.verbose,
          d = n.actionItem,
          l = n.destination,
          f = n.destinationKeys,
          p = n.pluginDuration,
          y = n.instanceDelay,
          I = n.customEasingFn,
          T = n.skipMotion,
          b = d.config.easing,
          m = d.config,
          _ = m.duration,
          O = m.delay;
        null != p && (_ = p),
          (O = null != y ? y : O),
          u === v ? (_ = 0) : (c || T) && (_ = O = 0);
        var h = t.payload.now;
        if (a && i) {
          var R = h - (o + O);
          if (s) {
            var S = h - o,
              A = _ + O,
              N = g(Math.min(Math.max(0, S / A), 1));
            e = (0, r.set)(e, "verboseTimeElapsed", A * N);
          }
          if (R < 0) return e;
          var L = g(Math.min(Math.max(0, R / _), 1)),
            C = E(b, L, I),
            P = {},
            x = null;
          return (
            f.length &&
              (x = f.reduce(function (e, t) {
                var n = l[t],
                  a = parseFloat(i[t]) || 0,
                  r = (parseFloat(n) - a) * C + a;
                return (e[t] = r), e;
              }, {})),
            (P.current = x),
            (P.position = L),
            1 === L && ((P.active = !1), (P.complete = !0)),
            (0, r.merge)(e, P)
          );
        }
        return e;
      };
    t.ixInstances = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case c:
          return t.payload.ixInstances || Object.freeze({});
        case u:
          return Object.freeze({});
        case s:
          var n = t.payload,
            a = n.instanceId,
            i = n.elementId,
            o = n.actionItem,
            p = n.eventId,
            g = n.eventTarget,
            E = n.eventStateKey,
            v = n.actionListId,
            I = n.groupIndex,
            T = n.isCarrier,
            h = n.origin,
            R = n.destination,
            S = n.immediate,
            A = n.verbose,
            N = n.continuous,
            L = n.parameterId,
            C = n.actionGroups,
            P = n.smoothing,
            x = n.restingValue,
            w = n.pluginInstance,
            M = n.pluginDuration,
            U = n.instanceDelay,
            G = n.skipMotion,
            D = n.skipToValue,
            V = o.actionTypeId,
            X = b(V),
            F = m(X, V),
            k = Object.keys(R).filter(function (e) {
              return null != R[e];
            }),
            j = o.config.easing;
          return (0, r.set)(e, a, {
            id: a,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: h,
            destination: R,
            destinationKeys: k,
            immediate: S,
            verbose: A,
            current: null,
            actionItem: o,
            actionTypeId: V,
            eventId: p,
            eventTarget: g,
            eventStateKey: E,
            actionListId: v,
            groupIndex: I,
            renderType: X,
            isCarrier: T,
            styleProp: F,
            continuous: N,
            parameterId: L,
            actionGroups: C,
            smoothing: P,
            restingValue: x,
            pluginInstance: w,
            pluginDuration: M,
            instanceDelay: U,
            skipMotion: G,
            skipToValue: D,
            customEasingFn: Array.isArray(j) && 4 === j.length ? y(j) : void 0,
          });
        case d:
          var H = t.payload,
            Y = H.instanceId,
            z = H.time;
          return (0, r.mergeIn)(e, [Y], { active: !0, complete: !1, start: z });
        case l:
          var B = t.payload.instanceId;
          if (!e[B]) return e;
          for (
            var W = {}, Q = Object.keys(e), K = Q.length, q = 0;
            q < K;
            q++
          ) {
            var $ = Q[q];
            $ !== B && (W[$] = e[$]);
          }
          return W;
        case f:
          for (
            var Z = e, J = Object.keys(e), ee = J.length, te = 0;
            te < ee;
            te++
          ) {
            var ne = J[te],
              ae = e[ne],
              ie = ae.continuous ? _ : O;
            Z = (0, r.set)(Z, ne, ie(ae, t));
          }
          return Z;
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixParameters = void 0);
    var a = n(3).IX2EngineActionTypes,
      i = a.IX2_RAW_DATA_IMPORTED,
      r = a.IX2_SESSION_STOPPED,
      o = a.IX2_PARAMETER_CHANGED;
    t.ixParameters = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case i:
          return t.payload.ixParameters || {};
        case r:
          return {};
        case o:
          var n = t.payload,
            a = n.key,
            c = n.value;
          return (e[a] = c), e;
        default:
          return e;
      }
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
        a,
        i = {},
        r = Object.keys(e);
      for (a = 0; a < r.length; a++)
        (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    };
  },
  function (e, t, n) {
    var a = n(56),
      i = n(58),
      r = n(16),
      o = n(284),
      c = n(285);
    e.exports = function (e) {
      if (null == e) return 0;
      if (r(e)) return o(e) ? c(e) : e.length;
      var t = i(e);
      return "[object Map]" == t || "[object Set]" == t ? e.size : a(e).length;
    };
  },
  function (e, t, n) {
    var a = n(15),
      i = n(2),
      r = n(12);
    e.exports = function (e) {
      return (
        "string" == typeof e || (!i(e) && r(e) && "[object String]" == a(e))
      );
    };
  },
  function (e, t, n) {
    var a = n(286),
      i = n(287),
      r = n(288);
    e.exports = function (e) {
      return i(e) ? r(e) : a(e);
    };
  },
  function (e, t, n) {
    var a = n(112)("length");
    e.exports = a;
  },
  function (e, t) {
    var n = RegExp(
      "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
    );
    e.exports = function (e) {
      return n.test(e);
    };
  },
  function (e, t) {
    var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      a = "\\ud83c[\\udffb-\\udfff]",
      i = "[^\\ud800-\\udfff]",
      r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "(?:" + n + "|" + a + ")?",
      u =
        "[\\ufe0e\\ufe0f]?" +
        c +
        "(?:\\u200d(?:" +
        [i, r, o].join("|") +
        ")[\\ufe0e\\ufe0f]?" +
        c +
        ")*",
      s = "(?:" + [i + n + "?", n, r, o, "[\\ud800-\\udfff]"].join("|") + ")",
      d = RegExp(a + "(?=" + a + ")|" + s + u, "g");
    e.exports = function (e) {
      for (var t = (d.lastIndex = 0); d.test(e); ) ++t;
      return t;
    };
  },
  function (e, t, n) {
    var a = n(10),
      i = n(290),
      r = n(291);
    e.exports = function (e, t) {
      return r(e, i(a(t)));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    };
  },
  function (e, t, n) {
    var a = n(111),
      i = n(10),
      r = n(292),
      o = n(295);
    e.exports = function (e, t) {
      if (null == e) return {};
      var n = a(o(e), function (e) {
        return [e];
      });
      return (
        (t = i(t)),
        r(e, n, function (e, n) {
          return t(e, n[0]);
        })
      );
    };
  },
  function (e, t, n) {
    var a = n(60),
      i = n(293),
      r = n(37);
    e.exports = function (e, t, n) {
      for (var o = -1, c = t.length, u = {}; ++o < c; ) {
        var s = t[o],
          d = a(e, s);
        n(d, s) && i(u, r(s, e), d);
      }
      return u;
    };
  },
  function (e, t, n) {
    var a = n(294),
      i = n(37),
      r = n(53),
      o = n(7),
      c = n(23);
    e.exports = function (e, t, n, u) {
      if (!o(e)) return e;
      for (
        var s = -1, d = (t = i(t, e)).length, l = d - 1, f = e;
        null != f && ++s < d;

      ) {
        var p = c(t[s]),
          g = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p)
          return e;
        if (s != l) {
          var E = f[p];
          void 0 === (g = u ? u(E, p, f) : void 0) &&
            (g = o(E) ? E : r(t[s + 1]) ? [] : {});
        }
        a(f, p, g), (f = f[p]);
      }
      return e;
    };
  },
  function (e, t, n) {
    var a = n(124),
      i = n(48),
      r = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n) {
      var o = e[t];
      (r.call(e, t) && i(o, n) && (void 0 !== n || t in e)) || a(e, t, n);
    };
  },
  function (e, t, n) {
    var a = n(102),
      i = n(296),
      r = n(298);
    e.exports = function (e) {
      return a(e, r, i);
    };
  },
  function (e, t, n) {
    var a = n(51),
      i = n(297),
      r = n(103),
      o = n(104),
      c = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; ) a(t, r(e)), (e = i(e));
            return t;
          }
        : o;
    e.exports = c;
  },
  function (e, t, n) {
    var a = n(107)(Object.getPrototypeOf, Object);
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(105),
      i = n(299),
      r = n(16);
    e.exports = function (e) {
      return r(e) ? a(e, !0) : i(e);
    };
  },
  function (e, t, n) {
    var a = n(7),
      i = n(57),
      r = n(300),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!a(e)) return r(e);
      var t = i(e),
        n = [];
      for (var c in e)
        ("constructor" != c || (!t && o.call(e, c))) && n.push(c);
      return n;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [];
      if (null != e) for (var n in Object(e)) t.push(n);
      return t;
    };
  },
  function (e, t, n) {
    var a = n(56),
      i = n(58),
      r = n(36),
      o = n(2),
      c = n(16),
      u = n(52),
      s = n(57),
      d = n(54),
      l = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (null == e) return !0;
      if (
        c(e) &&
        (o(e) ||
          "string" == typeof e ||
          "function" == typeof e.splice ||
          u(e) ||
          d(e) ||
          r(e))
      )
        return !e.length;
      var t = i(e);
      if ("[object Map]" == t || "[object Set]" == t) return !e.size;
      if (s(e)) return !a(e).length;
      for (var n in e) if (l.call(e, n)) return !1;
      return !0;
    };
  },
  function (e, t, n) {
    var a = n(124),
      i = n(121),
      r = n(10);
    e.exports = function (e, t) {
      var n = {};
      return (
        (t = r(t, 3)),
        i(e, function (e, i, r) {
          a(n, i, t(e, i, r));
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var a = n(304),
      i = n(120),
      r = n(305),
      o = n(2);
    e.exports = function (e, t) {
      return (o(e) ? a : i)(e, r(t));
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (
        var n = -1, a = null == e ? 0 : e.length;
        ++n < a && !1 !== t(e[n], n, e);

      );
      return e;
    };
  },
  function (e, t, n) {
    var a = n(62);
    e.exports = function (e) {
      return "function" == typeof e ? e : a;
    };
  },
  function (e, t, n) {
    var a = n(307),
      i = n(7);
    e.exports = function (e, t, n) {
      var r = !0,
        o = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        i(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (o = "trailing" in n ? !!n.trailing : o)),
        a(e, t, { leading: r, maxWait: t, trailing: o })
      );
    };
  },
  function (e, t, n) {
    var a = n(7),
      i = n(308),
      r = n(63),
      o = Math.max,
      c = Math.min;
    e.exports = function (e, t, n) {
      var u,
        s,
        d,
        l,
        f,
        p,
        g = 0,
        E = !1,
        y = !1,
        v = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function I(t) {
        var n = u,
          a = s;
        return (u = s = void 0), (g = t), (l = e.apply(a, n));
      }
      function T(e) {
        var n = e - p;
        return void 0 === p || n >= t || n < 0 || (y && e - g >= d);
      }
      function b() {
        var e = i();
        if (T(e)) return m(e);
        f = setTimeout(
          b,
          (function (e) {
            var n = t - (e - p);
            return y ? c(n, d - (e - g)) : n;
          })(e)
        );
      }
      function m(e) {
        return (f = void 0), v && u ? I(e) : ((u = s = void 0), l);
      }
      function _() {
        var e = i(),
          n = T(e);
        if (((u = arguments), (s = this), (p = e), n)) {
          if (void 0 === f)
            return (function (e) {
              return (g = e), (f = setTimeout(b, t)), E ? I(e) : l;
            })(p);
          if (y) return clearTimeout(f), (f = setTimeout(b, t)), I(p);
        }
        return void 0 === f && (f = setTimeout(b, t)), l;
      }
      return (
        (t = r(t) || 0),
        a(n) &&
          ((E = !!n.leading),
          (d = (y = "maxWait" in n) ? o(r(n.maxWait) || 0, t) : d),
          (v = "trailing" in n ? !!n.trailing : v)),
        (_.cancel = function () {
          void 0 !== f && clearTimeout(f), (g = 0), (u = p = s = f = void 0);
        }),
        (_.flush = function () {
          return void 0 === f ? l : m(i());
        }),
        _
      );
    };
  },
  function (e, t, n) {
    var a = n(5);
    e.exports = function () {
      return a.Date.now();
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(24));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setStyle = function (e, t, n) {
        e.style[t] = n;
      }),
      (t.getStyle = function (e, t) {
        return e.style[t];
      }),
      (t.getProperty = function (e, t) {
        return e[t];
      }),
      (t.matchSelector = function (e) {
        return function (t) {
          return t[o](e);
        };
      }),
      (t.getQuerySelector = function (e) {
        var t = e.id,
          n = e.selector;
        if (t) {
          var a = t;
          if (-1 !== t.indexOf(u)) {
            var i = t.split(u),
              r = i[0];
            if (((a = i[1]), r !== document.documentElement.getAttribute(l)))
              return null;
          }
          return '[data-w-id="'
            .concat(a, '"], [data-w-id^="')
            .concat(a, '_instance"]');
        }
        return n;
      }),
      (t.getValidDocument = function (e) {
        return null == e || e === document.documentElement.getAttribute(l)
          ? document
          : null;
      }),
      (t.queryDocument = function (e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }),
      (t.elementContains = function (e, t) {
        return e.contains(t);
      }),
      (t.isSiblingNode = function (e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }),
      (t.getChildElements = function (e) {
        for (var t = [], n = 0, a = (e || []).length; n < a; n++) {
          var i = e[n].children,
            r = i.length;
          if (r) for (var o = 0; o < r; o++) t.push(i[o]);
        }
        return t;
      }),
      (t.getSiblingElements = function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [],
            n = [],
            a = 0,
            i = e.length;
          a < i;
          a++
        ) {
          var r = e[a].parentNode;
          if (r && r.children && r.children.length && -1 === n.indexOf(r)) {
            n.push(r);
            for (var o = r.firstElementChild; null != o; )
              -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
          }
        }
        return t;
      }),
      (t.getRefType = function (e) {
        return null != e && "object" == (0, a.default)(e)
          ? e instanceof Element
            ? s
            : d
          : null;
      }),
      (t.getClosestElement = void 0);
    var i = n(14),
      r = n(3),
      o = i.IX2BrowserSupport.ELEMENT_MATCHES,
      c = r.IX2EngineConstants,
      u = c.IX2_ID_DELIMITER,
      s = c.HTML_ELEMENT,
      d = c.PLAIN_OBJECT,
      l = c.WF_PAGE,
      f = Element.prototype.closest
        ? function (e, t) {
            return document.documentElement.contains(e) ? e.closest(t) : null;
          }
        : function (e, t) {
            if (!document.documentElement.contains(e)) return null;
            var n = e;
            do {
              if (n[o] && n[o](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
    t.getClosestElement = f;
  },
  function (e, t, n) {
    "use strict";
    var a,
      i = n(1),
      r = i(n(20)),
      o = i(n(24)),
      c = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var u,
      s,
      d,
      l = c(n(30)),
      f = c(n(311)),
      p = c(n(59)),
      g = c(n(330)),
      E = n(3),
      y = n(123),
      v = n(64),
      I = n(14),
      T = E.EventTypeConsts,
      b = T.MOUSE_CLICK,
      m = T.MOUSE_SECOND_CLICK,
      _ = T.MOUSE_DOWN,
      O = T.MOUSE_UP,
      h = T.MOUSE_OVER,
      R = T.MOUSE_OUT,
      S = T.DROPDOWN_CLOSE,
      A = T.DROPDOWN_OPEN,
      N = T.SLIDER_ACTIVE,
      L = T.SLIDER_INACTIVE,
      C = T.TAB_ACTIVE,
      P = T.TAB_INACTIVE,
      x = T.NAVBAR_CLOSE,
      w = T.NAVBAR_OPEN,
      M = T.MOUSE_MOVE,
      U = T.PAGE_SCROLL_DOWN,
      G = T.SCROLL_INTO_VIEW,
      D = T.SCROLL_OUT_OF_VIEW,
      V = T.PAGE_SCROLL_UP,
      X = T.SCROLLING_IN_VIEW,
      F = T.PAGE_FINISH,
      k = T.ECOMMERCE_CART_CLOSE,
      j = T.ECOMMERCE_CART_OPEN,
      H = T.PAGE_START,
      Y = T.PAGE_SCROLL,
      z = "COMPONENT_ACTIVE",
      B = "COMPONENT_INACTIVE",
      W = E.IX2EngineConstants.COLON_DELIMITER,
      Q = I.IX2VanillaUtils.getNamespacedParameterId,
      K = function (e) {
        return function (t) {
          return !("object" !== (0, o.default)(t) || !e(t)) || t;
        };
      },
      q = K(function (e) {
        return e.element === e.nativeEvent.target;
      }),
      $ = K(function (e) {
        var t = e.element,
          n = e.nativeEvent;
        return t.contains(n.target);
      }),
      Z = (0, f.default)([q, $]),
      J = function (e, t) {
        if (t) {
          var n = e.getState().ixData.events[t];
          if (n && !oe[n.eventTypeId]) return n;
        }
        return null;
      },
      ee = function (e, t) {
        var n = e.store,
          a = e.event,
          i = e.element,
          r = e.eventStateKey,
          o = a.action,
          c = a.id,
          u = o.config,
          s = u.actionListId,
          d = u.autoStopEventId,
          l = J(n, d);
        return (
          l &&
            (0, y.stopActionGroup)({
              store: n,
              eventId: d,
              eventTarget: i,
              eventStateKey: d + W + r.split(W)[1],
              actionListId: (0, p.default)(l, "action.config.actionListId"),
            }),
          (0, y.stopActionGroup)({
            store: n,
            eventId: c,
            eventTarget: i,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, y.startActionGroup)({
            store: n,
            eventId: c,
            eventTarget: i,
            eventStateKey: r,
            actionListId: s,
          }),
          t
        );
      },
      te = function (e, t) {
        return function (n, a) {
          return !0 === e(n, a) ? t(n, a) : a;
        };
      },
      ne = { handler: te(Z, ee) },
      ae = (0, l.default)({}, ne, { types: [z, B].join(" ") }),
      ie = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      re = { types: ie },
      oe = { PAGE_START: H, PAGE_FINISH: F },
      ce =
        ((u = void 0 !== window.pageXOffset),
        (s =
          "CSS1Compat" === document.compatMode
            ? document.documentElement
            : document.body),
        function () {
          return {
            scrollLeft: u ? window.pageXOffset : s.scrollLeft,
            scrollTop: u ? window.pageYOffset : s.scrollTop,
            stiffScrollTop: (0, g.default)(
              u ? window.pageYOffset : s.scrollTop,
              0,
              s.scrollHeight - window.innerHeight
            ),
            scrollWidth: s.scrollWidth,
            scrollHeight: s.scrollHeight,
            clientWidth: s.clientWidth,
            clientHeight: s.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      ue = function (e) {
        var t = e.element,
          n = e.nativeEvent,
          a = n.type,
          i = n.target,
          r = n.relatedTarget,
          o = t.contains(i);
        if ("mouseover" === a && o) return !0;
        var c = t.contains(r);
        return !("mouseout" !== a || !o || !c);
      },
      se = function (e) {
        var t,
          n,
          a = e.element,
          i = e.event.config,
          r = ce(),
          o = r.clientWidth,
          c = r.clientHeight,
          u = i.scrollOffsetValue,
          s = "PX" === i.scrollOffsetUnit ? u : (c * (u || 0)) / 100;
        return (
          (n = { left: 0, top: s, right: o, bottom: c - s }),
          !(
            (t = a.getBoundingClientRect()).left > n.right ||
            t.right < n.left ||
            t.top > n.bottom ||
            t.bottom < n.top
          )
        );
      },
      de = function (e) {
        return function (t, n) {
          var a = t.nativeEvent.type,
            i = -1 !== [z, B].indexOf(a) ? a === z : n.isActive,
            r = (0, l.default)({}, n, { isActive: i });
          return n && r.isActive === n.isActive ? r : e(t, r) || r;
        };
      },
      le = function (e) {
        return function (t, n) {
          var a = { elementHovered: ue(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        };
      },
      fe = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = ce(),
            i = a.stiffScrollTop,
            r = a.scrollHeight,
            o = a.innerHeight,
            c = t.event,
            u = c.config,
            s = c.eventTypeId,
            d = u.scrollOffsetValue,
            f = "PX" === u.scrollOffsetUnit,
            p = r - o,
            g = Number((i / p).toFixed(2));
          if (n && n.percentTop === g) return n;
          var E,
            y,
            v = (f ? d : (o * (d || 0)) / 100) / p,
            I = 0;
          n &&
            ((E = g > n.percentTop),
            (I = (y = n.scrollingDown !== E) ? g : n.anchorTop));
          var T = s === U ? g >= I + v : g <= I - v,
            b = (0, l.default)({}, n, {
              percentTop: g,
              inBounds: T,
              anchorTop: I,
              scrollingDown: E,
            });
          return (n && T && (y || b.inBounds !== n.inBounds) && e(t, b)) || b;
        };
      },
      pe = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            a = { clickCount: (n.clickCount % 2) + 1 };
          return (a.clickCount !== n.clickCount && e(t, a)) || a;
        };
      },
      ge = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, ae, {
          handler: te(
            e ? Z : q,
            de(function (e, t) {
              return t.isActive ? ne.handler(e, t) : t;
            })
          ),
        });
      },
      Ee = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, ae, {
          handler: te(
            e ? Z : q,
            de(function (e, t) {
              return t.isActive ? t : ne.handler(e, t);
            })
          ),
        });
      },
      ye = (0, l.default)({}, re, {
        handler:
          ((d = function (e, t) {
            var n = t.elementVisible,
              a = e.event;
            return !e.store.getState().ixData.events[
              a.action.config.autoStopEventId
            ] && t.triggered
              ? t
              : (a.eventTypeId === G) === n
              ? (ee(e), (0, l.default)({}, t, { triggered: !0 }))
              : t;
          }),
          function (e, t) {
            var n = (0, l.default)({}, t, { elementVisible: se(e) });
            return (
              ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) &&
                d(e, n)) ||
              n
            );
          }),
      }),
      ve =
        ((a = {}),
        (0, r.default)(a, N, ge()),
        (0, r.default)(a, L, Ee()),
        (0, r.default)(a, A, ge()),
        (0, r.default)(a, S, Ee()),
        (0, r.default)(a, w, ge(!1)),
        (0, r.default)(a, x, Ee(!1)),
        (0, r.default)(a, C, ge()),
        (0, r.default)(a, P, Ee()),
        (0, r.default)(a, j, {
          types: "ecommerce-cart-open",
          handler: te(Z, ee),
        }),
        (0, r.default)(a, k, {
          types: "ecommerce-cart-close",
          handler: te(Z, ee),
        }),
        (0, r.default)(a, b, {
          types: "click",
          handler: te(
            Z,
            pe(function (e, t) {
              var n,
                a,
                i,
                r = t.clickCount;
              (a = (n = e).store),
                (i = n.event.action.config.autoStopEventId),
                Boolean(J(a, i)) ? 1 === r && ee(e) : ee(e);
            })
          ),
        }),
        (0, r.default)(a, m, {
          types: "click",
          handler: te(
            Z,
            pe(function (e, t) {
              2 === t.clickCount && ee(e);
            })
          ),
        }),
        (0, r.default)(a, _, (0, l.default)({}, ne, { types: "mousedown" })),
        (0, r.default)(a, O, (0, l.default)({}, ne, { types: "mouseup" })),
        (0, r.default)(a, h, {
          types: "mouseover mouseout",
          handler: te(
            Z,
            le(function (e, t) {
              t.elementHovered && ee(e);
            })
          ),
        }),
        (0, r.default)(a, R, {
          types: "mouseover mouseout",
          handler: te(
            Z,
            le(function (e, t) {
              t.elementHovered || ee(e);
            })
          ),
        }),
        (0, r.default)(a, M, {
          types: "mousemove mouseout scroll",
          handler: function (e) {
            var t = e.store,
              n = e.element,
              a = e.eventConfig,
              i = e.nativeEvent,
              r = e.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              c = a.basedOn,
              u = a.selectedAxis,
              s = a.continuousParameterGroupId,
              d = a.reverse,
              l = a.restingState,
              f = void 0 === l ? 0 : l,
              p = i.clientX,
              g = void 0 === p ? o.clientX : p,
              y = i.clientY,
              I = void 0 === y ? o.clientY : y,
              T = i.pageX,
              b = void 0 === T ? o.pageX : T,
              m = i.pageY,
              _ = void 0 === m ? o.pageY : m,
              O = "X_AXIS" === u,
              h = "mouseout" === i.type,
              R = f / 100,
              S = s,
              A = !1;
            switch (c) {
              case E.EventBasedOn.VIEWPORT:
                R = O
                  ? Math.min(g, window.innerWidth) / window.innerWidth
                  : Math.min(I, window.innerHeight) / window.innerHeight;
                break;
              case E.EventBasedOn.PAGE:
                var N = ce(),
                  L = N.scrollLeft,
                  C = N.scrollTop,
                  P = N.scrollWidth,
                  x = N.scrollHeight;
                R = O ? Math.min(L + b, P) / P : Math.min(C + _, x) / x;
                break;
              case E.EventBasedOn.ELEMENT:
              default:
                S = Q(r, s);
                var w = 0 === i.type.indexOf("mouse");
                if (w && !0 !== Z({ element: n, nativeEvent: i })) break;
                var M = n.getBoundingClientRect(),
                  U = M.left,
                  G = M.top,
                  D = M.width,
                  V = M.height;
                if (
                  !w &&
                  !(function (e, t) {
                    return (
                      e.left > t.left &&
                      e.left < t.right &&
                      e.top > t.top &&
                      e.top < t.bottom
                    );
                  })({ left: g, top: I }, M)
                )
                  break;
                (A = !0), (R = O ? (g - U) / D : (I - G) / V);
            }
            return (
              h && (R > 0.95 || R < 0.05) && (R = Math.round(R)),
              (c !== E.EventBasedOn.ELEMENT || A || A !== o.elementHovered) &&
                ((R = d ? 1 - R : R),
                t.dispatch((0, v.parameterChanged)(S, R))),
              { elementHovered: A, clientX: g, clientY: I, pageX: b, pageY: _ }
            );
          },
        }),
        (0, r.default)(a, Y, {
          types: ie,
          handler: function (e) {
            var t = e.store,
              n = e.eventConfig,
              a = n.continuousParameterGroupId,
              i = n.reverse,
              r = ce(),
              o = r.scrollTop / (r.scrollHeight - r.clientHeight);
            (o = i ? 1 - o : o), t.dispatch((0, v.parameterChanged)(a, o));
          },
        }),
        (0, r.default)(a, X, {
          types: ie,
          handler: function (e) {
            var t = e.element,
              n = e.store,
              a = e.eventConfig,
              i = e.eventStateKey,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              o = ce(),
              c = o.scrollLeft,
              u = o.scrollTop,
              s = o.scrollWidth,
              d = o.scrollHeight,
              l = o.clientHeight,
              f = a.basedOn,
              p = a.selectedAxis,
              g = a.continuousParameterGroupId,
              y = a.startsEntering,
              I = a.startsExiting,
              T = a.addEndOffset,
              b = a.addStartOffset,
              m = a.addOffsetValue,
              _ = void 0 === m ? 0 : m,
              O = a.endOffsetValue,
              h = void 0 === O ? 0 : O,
              R = "X_AXIS" === p;
            if (f === E.EventBasedOn.VIEWPORT) {
              var S = R ? c / s : u / d;
              return (
                S !== r.scrollPercent &&
                  n.dispatch((0, v.parameterChanged)(g, S)),
                { scrollPercent: S }
              );
            }
            var A = Q(i, g),
              N = t.getBoundingClientRect(),
              L = (b ? _ : 0) / 100,
              C = (T ? h : 0) / 100;
            (L = y ? L : 1 - L), (C = I ? C : 1 - C);
            var P = N.top + Math.min(N.height * L, l),
              x = N.top + N.height * C - P,
              w = Math.min(l + x, d),
              M = Math.min(Math.max(0, l - P), w) / w;
            return (
              M !== r.scrollPercent &&
                n.dispatch((0, v.parameterChanged)(A, M)),
              { scrollPercent: M }
            );
          },
        }),
        (0, r.default)(a, G, ye),
        (0, r.default)(a, D, ye),
        (0, r.default)(
          a,
          U,
          (0, l.default)({}, re, {
            handler: fe(function (e, t) {
              t.scrollingDown && ee(e);
            }),
          })
        ),
        (0, r.default)(
          a,
          V,
          (0, l.default)({}, re, {
            handler: fe(function (e, t) {
              t.scrollingDown || ee(e);
            }),
          })
        ),
        (0, r.default)(a, F, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: te(
            q,
            (function (e) {
              return function (t, n) {
                var a = { finished: "complete" === document.readyState };
                return !a.finished || (n && n.finshed) || e(t), a;
              };
            })(ee)
          ),
        }),
        (0, r.default)(a, H, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: te(
            q,
            (function (e) {
              return function (t, n) {
                return n || e(t), { started: !0 };
              };
            })(ee)
          ),
        }),
        a);
    t.default = ve;
  },
  function (e, t, n) {
    var a = n(312)();
    e.exports = a;
  },
  function (e, t, n) {
    var a = n(65),
      i = n(313),
      r = n(127),
      o = n(128),
      c = n(2),
      u = n(326);
    e.exports = function (e) {
      return i(function (t) {
        var n = t.length,
          i = n,
          s = a.prototype.thru;
        for (e && t.reverse(); i--; ) {
          var d = t[i];
          if ("function" != typeof d)
            throw new TypeError("Expected a function");
          if (s && !l && "wrapper" == o(d)) var l = new a([], !0);
        }
        for (i = l ? i : n; ++i < n; ) {
          d = t[i];
          var f = o(d),
            p = "wrapper" == f ? r(d) : void 0;
          l =
            p && u(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9]
              ? l[o(p[0])].apply(l, p[3])
              : 1 == d.length && u(d)
              ? l[f]()
              : l.thru(d);
        }
        return function () {
          var e = arguments,
            a = e[0];
          if (l && 1 == e.length && c(a)) return l.plant(a).value();
          for (var i = 0, r = n ? t[i].apply(this, e) : a; ++i < n; )
            r = t[i].call(this, r);
          return r;
        };
      });
    };
  },
  function (e, t, n) {
    var a = n(314),
      i = n(317),
      r = n(319);
    e.exports = function (e) {
      return r(i(e, void 0, a), e + "");
    };
  },
  function (e, t, n) {
    var a = n(315);
    e.exports = function (e) {
      return null != e && e.length ? a(e, 1) : [];
    };
  },
  function (e, t, n) {
    var a = n(51),
      i = n(316);
    e.exports = function e(t, n, r, o, c) {
      var u = -1,
        s = t.length;
      for (r || (r = i), c || (c = []); ++u < s; ) {
        var d = t[u];
        n > 0 && r(d)
          ? n > 1
            ? e(d, n - 1, r, o, c)
            : a(c, d)
          : o || (c[c.length] = d);
      }
      return c;
    };
  },
  function (e, t, n) {
    var a = n(22),
      i = n(36),
      r = n(2),
      o = a ? a.isConcatSpreadable : void 0;
    e.exports = function (e) {
      return r(e) || i(e) || !!(o && e && e[o]);
    };
  },
  function (e, t, n) {
    var a = n(318),
      i = Math.max;
    e.exports = function (e, t, n) {
      return (
        (t = i(void 0 === t ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, o = -1, c = i(r.length - t, 0), u = Array(c);
            ++o < c;

          )
            u[o] = r[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
          return (s[t] = n(u)), a(e, this, s);
        }
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    };
  },
  function (e, t, n) {
    var a = n(320),
      i = n(322)(a);
    e.exports = i;
  },
  function (e, t, n) {
    var a = n(321),
      i = n(125),
      r = n(62),
      o = i
        ? function (e, t) {
            return i(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: a(t),
              writable: !0,
            });
          }
        : r;
    e.exports = o;
  },
  function (e, t) {
    e.exports = function (e) {
      return function () {
        return e;
      };
    };
  },
  function (e, t) {
    var n = Date.now;
    e.exports = function (e) {
      var t = 0,
        a = 0;
      return function () {
        var i = n(),
          r = 16 - (i - a);
        if (((a = i), r > 0)) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    };
  },
  function (e, t, n) {
    var a = n(108),
      i = a && new a();
    e.exports = i;
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var a = n(67),
      i = n(127),
      r = n(128),
      o = n(327);
    e.exports = function (e) {
      var t = r(e),
        n = o[t];
      if ("function" != typeof n || !(t in a.prototype)) return !1;
      if (e === n) return !0;
      var c = i(n);
      return !!c && e === c[0];
    };
  },
  function (e, t, n) {
    var a = n(67),
      i = n(65),
      r = n(66),
      o = n(2),
      c = n(12),
      u = n(328),
      s = Object.prototype.hasOwnProperty;
    function d(e) {
      if (c(e) && !o(e) && !(e instanceof a)) {
        if (e instanceof i) return e;
        if (s.call(e, "__wrapped__")) return u(e);
      }
      return new i(e);
    }
    (d.prototype = r.prototype), (d.prototype.constructor = d), (e.exports = d);
  },
  function (e, t, n) {
    var a = n(67),
      i = n(65),
      r = n(329);
    e.exports = function (e) {
      if (e instanceof a) return e.clone();
      var t = new i(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = r(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = -1,
        a = e.length;
      for (t || (t = Array(a)); ++n < a; ) t[n] = e[n];
      return t;
    };
  },
  function (e, t, n) {
    var a = n(331),
      i = n(63);
    e.exports = function (e, t, n) {
      return (
        void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n && (n = (n = i(n)) == n ? n : 0),
        void 0 !== t && (t = (t = i(t)) == t ? t : 0),
        a(i(e), t, n)
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      return (
        e == e &&
          (void 0 !== n && (e = e <= n ? e : n),
          void 0 !== t && (e = e >= t ? e : t)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(8);
    a.define(
      "links",
      (e.exports = function (e, t) {
        var n,
          i,
          r,
          o = {},
          c = e(window),
          u = a.env(),
          s = window.location,
          d = document.createElement("a"),
          l = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/;
        function g(t) {
          var a =
            (n && t.getAttribute("href-disabled")) || t.getAttribute("href");
          if (((d.href = a), !(a.indexOf(":") >= 0))) {
            var o = e(t);
            if (
              d.hash.length > 1 &&
              d.host + d.pathname === s.host + s.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
              var c = e(d.hash);
              c.length && i.push({ link: o, sec: c, active: !1 });
            } else if ("#" !== a && "" !== a) {
              var u = d.href === s.href || a === r || (f.test(a) && p.test(r));
              y(o, l, u);
            }
          }
        }
        function E() {
          var e = c.scrollTop(),
            n = c.height();
          t.each(i, function (t) {
            var a = t.link,
              i = t.sec,
              r = i.offset().top,
              o = i.outerHeight(),
              c = 0.5 * n,
              u = i.is(":visible") && r + o - c >= e && r + c <= e + n;
            t.active !== u && ((t.active = u), y(a, l, u));
          });
        }
        function y(e, t, n) {
          var a = e.hasClass(t);
          (n && a) || ((n || a) && (n ? e.addClass(t) : e.removeClass(t)));
        }
        return (
          (o.ready =
            o.design =
            o.preview =
              function () {
                (n = u && a.env("design")),
                  (r = a.env("slug") || s.pathname || ""),
                  a.scroll.off(E),
                  (i = []);
                for (var e = document.links, t = 0; t < e.length; ++t) g(e[t]);
                i.length && (a.scroll.on(E), E());
              }),
          o
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var a = n(8);
    a.define(
      "scroll",
      (e.exports = function (e) {
        var t = "click.wf-empty-link",
          n = "click.wf-scroll",
          i = window.location,
          r = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return !0;
            }
          })()
            ? null
            : window.history,
          o = e(window),
          c = e(document),
          u = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 15);
            },
          d = a.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            d +
            " > .header, " +
            d +
            " > .w-nav:not([data-no-scroll])",
          f = 'a[href="#"]',
          p = document.createElement("style");
        p.appendChild(
          document.createTextNode(
            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
          )
        );
        var g = /^#[a-zA-Z0-9][\w:.-]*$/,
          E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
        function y(e, t) {
          var n;
          switch (t) {
            case "add":
              (n = e.attr("tabindex"))
                ? e.attr("data-wf-tabindex-swap", n)
                : e.attr("tabindex", "-1");
              break;
            case "remove":
              (n = e.attr("data-wf-tabindex-swap"))
                ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap"))
                : e.removeAttr("tabindex");
          }
          e.toggleClass("wf-force-outline-none", "add" === t);
        }
        function v(t) {
          var n = t.currentTarget;
          if (
            !(
              a.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(n.className))
            )
          ) {
            var c,
              d =
                ((c = n),
                g.test(c.hash) && c.host + c.pathname === i.host + i.pathname
                  ? n.hash
                  : "");
            if ("" !== d) {
              var f = e(d);
              f.length &&
                (t && (t.preventDefault(), t.stopPropagation()),
                (function (e) {
                  i.hash === e ||
                    !r ||
                    !r.pushState ||
                    (a.env.chrome && "file:" === i.protocol) ||
                    ((r.state && r.state.hash) !== e &&
                      r.pushState({ hash: e }, "", e));
                })(d),
                window.setTimeout(
                  function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(l),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              c = t.outerHeight();
                            c < r && (i -= Math.round((r - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              E.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              u.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          c = Date.now();
                        s(function e() {
                          var t = Date.now() - c;
                          window.scroll(
                            0,
                            (function (e, t, n, a) {
                              return n > r
                                ? t
                                : e +
                                    (t - e) *
                                      ((i = n / r) < 0.5
                                        ? 4 * i * i * i
                                        : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                          1);
                              var i;
                            })(a, i, t)
                          ),
                            t <= r ? s(e) : n();
                        });
                      }
                    })(f, function () {
                      y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove");
                    });
                  },
                  t ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var e = t,
              a = n;
            c.on(a, 'a[href*="#"]:not(.w-tab-link):not(a[href="#"])', v),
              c.on(e, f, function (e) {
                e.preventDefault();
              }),
              document.head.insertBefore(p, document.head.firstChild);
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n(8).define(
      "touch",
      (e.exports = function (e) {
        var t = {},
          n = window.getSelection;
        function a(t) {
          var a,
            i,
            r = !1,
            o = !1,
            c = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function u(e) {
            var t = e.touches;
            (t && t.length > 1) ||
              ((r = !0),
              t ? ((o = !0), (a = t[0].clientX)) : (a = e.clientX),
              (i = a));
          }
          function s(t) {
            if (r) {
              if (o && "mousemove" === t.type)
                return t.preventDefault(), void t.stopPropagation();
              var a = t.touches,
                u = a ? a[0].clientX : t.clientX,
                s = u - i;
              (i = u),
                Math.abs(s) > c &&
                  n &&
                  "" === String(n()) &&
                  ((function (t, n, a) {
                    var i = e.Event("swipe", { originalEvent: n });
                    e(n.target).trigger(i, a);
                  })(0, t, { direction: s > 0 ? "right" : "left" }),
                  l());
            }
          }
          function d(e) {
            if (r)
              return (
                (r = !1),
                o && "mouseup" === e.type
                  ? (e.preventDefault(), e.stopPropagation(), void (o = !1))
                  : void 0
              );
          }
          function l() {
            r = !1;
          }
          t.addEventListener("touchstart", u, !1),
            t.addEventListener("touchmove", s, !1),
            t.addEventListener("touchend", d, !1),
            t.addEventListener("touchcancel", l, !1),
            t.addEventListener("mousedown", u, !1),
            t.addEventListener("mousemove", s, !1),
            t.addEventListener("mouseup", d, !1),
            t.addEventListener("mouseout", l, !1),
            (this.destroy = function () {
              t.removeEventListener("touchstart", u, !1),
                t.removeEventListener("touchmove", s, !1),
                t.removeEventListener("touchend", d, !1),
                t.removeEventListener("touchcancel", l, !1),
                t.removeEventListener("mousedown", u, !1),
                t.removeEventListener("mousemove", s, !1),
                t.removeEventListener("mouseup", d, !1),
                t.removeEventListener("mouseout", l, !1),
                (t = null);
            });
        }
        return (
          (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (t) {
            return (t = "string" == typeof t ? e(t).get(0) : t)
              ? new a(t)
              : null;
          }),
          (t.instance = t.init(document)),
          t
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var a = n(1)(n(336)),
      i = n(8);
    i.define(
      "forms",
      (e.exports = function (e, t) {
        var n,
          r,
          o,
          c,
          u,
          s = {},
          d = e(document),
          l = window.location,
          f = window.XDomainRequest && !window.atob,
          p = ".w-form",
          g = /e(-)?mail/i,
          E = /^\S+@\S+$/,
          y = window.alert,
          v = i.env(),
          I = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            y(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        function b(t, n) {
          var a = e(n),
            i = e.data(n, p);
          i || (i = e.data(n, p, { form: a })), m(i);
          var o = a.closest("div.w-form");
          (i.done = o.find("> .w-form-done")),
            (i.fail = o.find("> .w-form-fail")),
            (i.fileUploads = o.find(".w-file-upload")),
            i.fileUploads.each(function (t) {
              !(function (t, n) {
                if (n.fileUploads && n.fileUploads[t]) {
                  var a,
                    i = e(n.fileUploads[t]),
                    r = i.find("> .w-file-upload-default"),
                    o = i.find("> .w-file-upload-uploading"),
                    c = i.find("> .w-file-upload-success"),
                    s = i.find("> .w-file-upload-error"),
                    d = r.find(".w-file-upload-input"),
                    l = r.find(".w-file-upload-label"),
                    f = l.children(),
                    p = s.find(".w-file-upload-error-msg"),
                    g = c.find(".w-file-upload-file"),
                    E = c.find(".w-file-remove-link"),
                    y = g.find(".w-file-upload-file-name"),
                    I = p.attr("data-w-size-error"),
                    T = p.attr("data-w-type-error"),
                    b = p.attr("data-w-generic-error");
                  if (v)
                    d.on("click", function (e) {
                      e.preventDefault();
                    }),
                      l.on("click", function (e) {
                        e.preventDefault();
                      }),
                      f.on("click", function (e) {
                        e.preventDefault();
                      });
                  else {
                    E.on("click", function () {
                      d.removeAttr("data-value"),
                        d.val(""),
                        y.html(""),
                        r.toggle(!0),
                        c.toggle(!1);
                    }),
                      d.on("change", function (i) {
                        (a = i.target && i.target.files && i.target.files[0]) &&
                          (r.toggle(!1),
                          s.toggle(!1),
                          o.toggle(!0),
                          y.text(a.name),
                          A() || _(n),
                          (n.fileUploads[t].uploading = !0),
                          (function (t, n) {
                            var a = { name: t.name, size: t.size };
                            e.ajax({
                              type: "POST",
                              url: u,
                              data: a,
                              dataType: "json",
                              crossDomain: !0,
                            })
                              .done(function (e) {
                                n(null, e);
                              })
                              .fail(function (e) {
                                n(e);
                              });
                          })(a, R));
                      });
                    var O = l.outerHeight();
                    d.height(O), d.width(1);
                  }
                }
                function h(e) {
                  var a = e.responseJSON && e.responseJSON.msg,
                    i = b;
                  "string" == typeof a &&
                  0 === a.indexOf("InvalidFileTypeError")
                    ? (i = T)
                    : "string" == typeof a &&
                      0 === a.indexOf("MaxFileSizeError") &&
                      (i = I),
                    p.text(i),
                    d.removeAttr("data-value"),
                    d.val(""),
                    o.toggle(!1),
                    r.toggle(!0),
                    s.toggle(!0),
                    (n.fileUploads[t].uploading = !1),
                    A() || m(n);
                }
                function R(t, n) {
                  if (t) return h(t);
                  var i = n.fileName,
                    r = n.postData,
                    o = n.fileId,
                    c = n.s3Url;
                  d.attr("data-value", o),
                    (function (t, n, a, i, r) {
                      var o = new FormData();
                      for (var c in n) o.append(c, n[c]);
                      o.append("file", a, i),
                        e
                          .ajax({
                            type: "POST",
                            url: t,
                            data: o,
                            processData: !1,
                            contentType: !1,
                          })
                          .done(function () {
                            r(null);
                          })
                          .fail(function (e) {
                            r(e);
                          });
                    })(c, r, a, i, S);
                }
                function S(e) {
                  if (e) return h(e);
                  o.toggle(!1),
                    c.css("display", "inline-block"),
                    (n.fileUploads[t].uploading = !1),
                    A() || m(n);
                }
                function A() {
                  return (
                    (n.fileUploads && n.fileUploads.toArray()) ||
                    []
                  ).some(function (e) {
                    return e.uploading;
                  });
                }
              })(t, i);
            });
          var c =
            i.form.attr("aria-label") || i.form.attr("data-name") || "Form";
          i.done.attr("aria-label") || i.form.attr("aria-label", c),
            i.done.attr("tabindex", "-1"),
            i.done.attr("role", "region"),
            i.done.attr("aria-label") ||
              i.done.attr("aria-label", c + " success"),
            i.fail.attr("tabindex", "-1"),
            i.fail.attr("role", "region"),
            i.fail.attr("aria-label") ||
              i.fail.attr("aria-label", c + " failure");
          var s = (i.action = a.attr("action"));
          (i.handler = null),
            (i.redirect = a.attr("data-redirect")),
            I.test(s) ? (i.handler = S) : s || (r ? (i.handler = R) : T());
        }
        function m(e) {
          var t = (e.btn = e.form.find(':input[type="submit"]'));
          (e.wait = e.btn.attr("data-wait") || null),
            (e.success = !1),
            t.prop("disabled", !1),
            e.label && t.val(e.label);
        }
        function _(e) {
          var t = e.btn,
            n = e.wait;
          t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
        }
        function O(t, n) {
          var a = null;
          return (
            (n = n || {}),
            t
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (i, r) {
                var o = e(r),
                  c = o.attr("type"),
                  u =
                    o.attr("data-name") || o.attr("name") || "Field " + (i + 1),
                  s = o.val();
                if ("checkbox" === c) s = o.is(":checked");
                else if ("radio" === c) {
                  if (null === n[u] || "string" == typeof n[u]) return;
                  s =
                    t
                      .find('input[name="' + o.attr("name") + '"]:checked')
                      .val() || null;
                }
                "string" == typeof s && (s = e.trim(s)),
                  (n[u] = s),
                  (a =
                    a ||
                    (function (e, t, n, a) {
                      var i = null;
                      return (
                        "password" === c
                          ? (i = "Passwords cannot be submitted.")
                          : e.attr("required")
                          ? a
                            ? g.test(e.attr("type")) &&
                              (E.test(a) ||
                                (i =
                                  "Please enter a valid email address for: " +
                                  n))
                            : (i = "Please fill out the required field: " + n)
                          : "g-recaptcha-response" !== n ||
                            a ||
                            (i = "Please confirm youâ€™re not a robot."),
                        i
                      );
                    })(o, 0, u, s));
              }),
            a
          );
        }
        s.ready =
          s.design =
          s.preview =
            function () {
              (r = e("html").attr("data-wf-site")),
                (c = "https://webflow.com/api/v1/form/" + r),
                f &&
                  c.indexOf("https://webflow.com") >= 0 &&
                  (c = c.replace(
                    "https://webflow.com",
                    "http://formdata.webflow.com"
                  )),
                (u = "".concat(c, "/signFile")),
                (n = e(p + " form")).length && n.each(b),
                v ||
                  o ||
                  (function () {
                    (o = !0),
                      d.on("submit", p + " form", function (t) {
                        var n = e.data(this, p);
                        n.handler && ((n.evt = t), n.handler(n));
                      });
                    d.on(
                      "change",
                      p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                      function (t) {
                        e(t.target)
                          .siblings(".w-checkbox-input")
                          .toggleClass("w--redirected-checked");
                      }
                    ),
                      d.on(
                        "change",
                        p + ' form input[type="radio"]',
                        function (t) {
                          e(
                            'input[name="'
                              .concat(t.target.name, '"]:not(')
                              .concat(".w-checkbox-input", ")")
                          ).map(function (t, n) {
                            return e(n)
                              .siblings(".w-radio-input")
                              .removeClass("w--redirected-checked");
                          });
                          var n = e(t.target);
                          n.hasClass("w-radio-input") ||
                            n
                              .siblings(".w-radio-input")
                              .addClass("w--redirected-checked");
                        }
                      ),
                      [
                        ["checkbox", ".w-checkbox-input"],
                        ["radio", ".w-radio-input"],
                      ].forEach(function (t) {
                        var n = (0, a.default)(t, 2),
                          i = n[0],
                          r = n[1];
                        d.on(
                          "focus",
                          p +
                            ' form input[type="'.concat(i, '"]:not(') +
                            r +
                            ")",
                          function (t) {
                            e(t.target)
                              .siblings(r)
                              .addClass("w--redirected-focus");
                          }
                        ),
                          d.on(
                            "blur",
                            p +
                              ' form input[type="'.concat(i, '"]:not(') +
                              r +
                              ")",
                            function (t) {
                              e(t.target)
                                .siblings(r)
                                .removeClass("w--redirected-focus");
                            }
                          );
                      });
                  })();
            };
        var h = { _mkto_trk: "marketo" };
        function R(t) {
          m(t);
          var n = t.form,
            a = {
              name: n.attr("data-name") || n.attr("name") || "Untitled Form",
              source: l.href,
              test: i.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
              trackingCookies: document.cookie
                .split("; ")
                .reduce(function (e, t) {
                  var n = t.split("="),
                    a = n[0];
                  if (a in h) {
                    var i = h[a],
                      r = n.slice(1).join("=");
                    e[i] = r;
                  }
                  return e;
                }, {}),
            };
          N(t);
          var o = O(n, a.fields);
          if (o) return y(o);
          (a.fileUploads = (function (t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, a) {
                var i = e(a),
                  r =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  o = i.attr("data-value");
                "string" == typeof o && (o = e.trim(o)), (n[r] = o);
              }),
              n
            );
          })(n)),
            _(t),
            r
              ? e
                  .ajax({
                    url: c,
                    type: "POST",
                    data: a,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    e && 200 === e.code && (t.success = !0), A(t);
                  })
                  .fail(function () {
                    A(t);
                  })
              : A(t);
        }
        function S(n) {
          m(n);
          var a = n.form,
            i = {};
          if (!/^https/.test(l.href) || /^https/.test(n.action)) {
            N(n);
            var r,
              o = O(a, i);
            if (o) return y(o);
            _(n),
              t.each(i, function (e, t) {
                g.test(t) && (i.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (r = e),
                  /^(first[ _-]?name)$/i.test(t) && (i.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (i.LNAME = e);
              }),
              r &&
                !i.FNAME &&
                ((r = r.split(" ")),
                (i.FNAME = r[0]),
                (i.LNAME = i.LNAME || r[1]));
            var c = n.action.replace("/post?", "/post-json?") + "&c=?",
              u = c.indexOf("u=") + 2;
            u = c.substring(u, c.indexOf("&", u));
            var s = c.indexOf("id=") + 3;
            (s = c.substring(s, c.indexOf("&", s))),
              (i["b_" + u + "_" + s] = ""),
              e
                .ajax({ url: c, data: i, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    A(n);
                })
                .fail(function () {
                  A(n);
                });
          } else a.attr("method", "post");
        }
        function A(e) {
          var t = e.form,
            n = e.redirect,
            a = e.success;
          a && n
            ? i.location(n)
            : (e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              m(e));
        }
        function N(e) {
          e.evt && e.evt.preventDefault(), (e.evt = null);
        }
        return s;
      })
    );
  },
  function (e, t, n) {
    var a = n(337),
      i = n(338),
      r = n(339);
    e.exports = function (e, t) {
      return a(e) || i(e, t) || r();
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = [],
        a = !0,
        i = !1,
        r = void 0;
      try {
        for (
          var o, c = e[Symbol.iterator]();
          !(a = (o = c.next()).done) && (n.push(o.value), !t || n.length !== t);
          a = !0
        );
      } catch (e) {
        (i = !0), (r = e);
      } finally {
        try {
          a || null == c.return || c.return();
        } finally {
          if (i) throw r;
        }
      }
      return n;
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
]),
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-2",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a6354e3a8fc369129310d1|5d9e58d8-bf00-3f52-ac50-6e5ca4ad2e8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|5d9e58d8-bf00-3f52-ac50-6e5ca4ad2e8f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638351930681,
      },
      "e-3": {
        id: "e-3",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "61a6354e3a8fc369129310d1|3407b27f-7b39-44f9-68c7-52552655b09e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|3407b27f-7b39-44f9-68c7-52552655b09e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-5-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-5-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
        ],
        createdOn: 1638354695222,
      },
      "e-4": {
        id: "e-4",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          id: "61a6354e3a8fc369129310d1|5d9e58d8-bf00-3f52-ac50-6e5ca4ad2e8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|5d9e58d8-bf00-3f52-ac50-6e5ca4ad2e8f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-5-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-5-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 90,
            restingState: 50,
          },
        ],
        createdOn: 1638354728072,
      },
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "3f22975e-73f0-fb63-c726-95fbce09999d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "3f22975e-73f0-fb63-c726-95fbce09999d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638360443734,
      },
      "e-9": {
        id: "e-9",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-10",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".button.white",
          originalId:
            "61a6354e3a8fc369129310d1|da74b6fa-d744-64c9-5208-050c354af5fc",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button.white",
            originalId:
              "61a6354e3a8fc369129310d1|da74b6fa-d744-64c9-5208-050c354af5fc",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638451630331,
      },
      "e-10": {
        id: "e-10",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-9",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".button.white",
          originalId:
            "61a6354e3a8fc369129310d1|da74b6fa-d744-64c9-5208-050c354af5fc",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button.white",
            originalId:
              "61a6354e3a8fc369129310d1|da74b6fa-d744-64c9-5208-050c354af5fc",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638451630331,
      },
      "e-11": {
        id: "e-11",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "61a6354e3a8fc369129310d1|0bbfc916-8121-5c56-ffa1-e941a41ba553",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|0bbfc916-8121-5c56-ffa1-e941a41ba553",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-9-p",
            smoothing: 50,
            startsEntering: !1,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !0,
            endOffsetValue: 15,
          },
        ],
        createdOn: 1638453080471,
      },
      "e-14": {
        id: "e-14",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-15",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".contact-item",
          originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0fa",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".contact-item",
            originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0fa",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638458611788,
      },
      "e-15": {
        id: "e-15",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-14",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".contact-item",
          originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0fa",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".contact-item",
            originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0fa",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638458611788,
      },
      "e-16": {
        id: "e-16",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-14", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".contact-item-container",
          originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0f9",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".contact-item-container",
            originalId: "f7ea96c8-0a8d-ac5b-3b9a-d4f680b4c0f9",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-14-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-14-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
        ],
        createdOn: 1638458968879,
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "51769f67-b164-ea33-4bf1-8605ccdbf6a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "51769f67-b164-ea33-4bf1-8605ccdbf6a2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-15-p",
            smoothing: 90,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638461757464,
      },
      "e-18": {
        id: "e-18",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-19",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".latest-project-item",
          originalId:
            "61a6354e3a8fc369129310d1|88f70c13-9785-6a4a-da82-7d11360a14b5",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".latest-project-item",
            originalId:
              "61a6354e3a8fc369129310d1|88f70c13-9785-6a4a-da82-7d11360a14b5",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 25,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638463044833,
      },
      "e-20": {
        id: "e-20",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-21",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a6354e3a8fc369129310d1|08f93528-2a6b-aa3f-1222-8bc3aa73f930",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|08f93528-2a6b-aa3f-1222-8bc3aa73f930",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638463936552,
      },
      "e-22": {
        id: "e-22",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-23",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638464290637,
      },
      "e-24": {
        id: "e-24",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-25",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "b7c99e7f-81da-4102-a7f7-6937e37bf0db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "b7c99e7f-81da-4102-a7f7-6937e37bf0db",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638550281023,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-27",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "b7c99e7f-81da-4102-a7f7-6937e37bf0ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "b7c99e7f-81da-4102-a7f7-6937e37bf0ce",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638551096345,
      },
      "e-28": {
        id: "e-28",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-21", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "51769f67-b164-ea33-4bf1-8605ccdbf6a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "51769f67-b164-ea33-4bf1-8605ccdbf6a2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-21-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638886151131,
      },
      "e-29": {
        id: "e-29",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-30",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a6354e3a8fc369129310d1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638888815780,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-29",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a6354e3a8fc369129310d1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a6354e3a8fc369129310d1",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638888815781,
      },
      "e-31": {
        id: "e-31",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-32",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61af770c668d4fc96e56f473|9a7c75d4-868f-ae9b-cce6-e4eab1e8107a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61af770c668d4fc96e56f473|9a7c75d4-868f-ae9b-cce6-e4eab1e8107a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 5,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638892940973,
      },
      "e-33": {
        id: "e-33",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-34",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61af770c668d4fc96e56f473|0ab2797b-fc2d-73d2-057d-a85fd45a96cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61af770c668d4fc96e56f473|0ab2797b-fc2d-73d2-057d-a85fd45a96cb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638893770660,
      },
      "e-35": {
        id: "e-35",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-36",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61af770c668d4fc96e56f473",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61af770c668d4fc96e56f473",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638895854982,
      },
      "e-36": {
        id: "e-36",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-35",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61af770c668d4fc96e56f473",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61af770c668d4fc96e56f473",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638895854983,
      },
      "e-37": {
        id: "e-37",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-38",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638958151057,
      },
      "e-39": {
        id: "e-39",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-32", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-32-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 95,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-32-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 95,
            restingState: 50,
          },
        ],
        createdOn: 1638958834323,
      },
      "e-48": {
        id: "e-48",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-39",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-49",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b07e3b816d526915e387b1|decda210-c2bf-6e2e-466a-b1dba9d7a32c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638964871651,
      },
      "e-50": {
        id: "e-50",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-40",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-51",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".table-item",
          originalId:
            "61b07e3b816d526915e387b1|67b369be-6d4e-da82-5441-7300b6d33ef2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".table-item",
            originalId:
              "61b07e3b816d526915e387b1|67b369be-6d4e-da82-5441-7300b6d33ef2",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638973018110,
      },
      "e-54": {
        id: "e-54",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-43", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "61a767a4757a87bd7ac118aa|92f3879a-dbee-7aa8-7858-8be0abc21aed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|92f3879a-dbee-7aa8-7858-8be0abc21aed",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-43-p",
            smoothing: 80,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638977522958,
      },
      "e-56": {
        id: "e-56",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|6ef625b2-97b3-3509-f4fd-5d79e26847d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|6ef625b2-97b3-3509-f4fd-5d79e26847d7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978288662,
      },
      "e-57": {
        id: "e-57",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|567e77d9-6150-32c0-5ea0-a398f47a347f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|567e77d9-6150-32c0-5ea0-a398f47a347f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978393542,
      },
      "e-58": {
        id: "e-58",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|cfbce943-2116-5017-7842-3fb3f0c97458",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|cfbce943-2116-5017-7842-3fb3f0c97458",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978431013,
      },
      "e-59": {
        id: "e-59",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|1af15171-6b55-0531-0cd8-ed904821cb02",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|1af15171-6b55-0531-0cd8-ed904821cb02",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978504301,
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|097ff70a-3ad8-e1aa-1c2f-39f2734d27ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|097ff70a-3ad8-e1aa-1c2f-39f2734d27ba",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978566383,
      },
      "e-61": {
        id: "e-61",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|e6066a08-7873-e326-ccb7-603e6efaae5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|e6066a08-7873-e326-ccb7-603e6efaae5b",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978617652,
      },
      "e-62": {
        id: "e-62",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|8f96f46c-6966-d91f-92ea-4fceebeaa9b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|8f96f46c-6966-d91f-92ea-4fceebeaa9b6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978656037,
      },
      "e-63": {
        id: "e-63",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|39848ce2-7849-50db-9579-f0a80473a8f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|39848ce2-7849-50db-9579-f0a80473a8f0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-24-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978704267,
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|cb1bb145-696b-f0d4-e00c-40c078d50745",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|cb1bb145-696b-f0d4-e00c-40c078d50745",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-44-p",
            smoothing: 50,
            startsEntering: !1,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1638978928573,
      },
      "e-65": {
        id: "e-65",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-66",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|2b3d1d25-b545-75b6-aa66-2aa53b45ff68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|2b3d1d25-b545-75b6-aa66-2aa53b45ff68",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 5,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638980011533,
      },
      "e-67": {
        id: "e-67",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-45",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-68",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa|7855ffd9-4a0e-ec83-eb02-130332c1301e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa|7855ffd9-4a0e-ec83-eb02-130332c1301e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639053082999,
      },
      "e-69": {
        id: "e-69",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-46",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-70",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b0c56d27d3b80b48dd5731|1aeb12f7-9ed5-0912-4c22-24d7ccbaa834",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b0c56d27d3b80b48dd5731|1aeb12f7-9ed5-0912-4c22-24d7ccbaa834",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639061419895,
      },
      "e-71": {
        id: "e-71",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-72",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b07e3b816d526915e387b1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b07e3b816d526915e387b1",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062423792,
      },
      "e-72": {
        id: "e-72",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-71",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b07e3b816d526915e387b1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b07e3b816d526915e387b1",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062423793,
      },
      "e-73": {
        id: "e-73",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-74",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b0c56d27d3b80b48dd5731",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b0c56d27d3b80b48dd5731",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062450339,
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-73",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b0c56d27d3b80b48dd5731",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b0c56d27d3b80b48dd5731",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062450341,
      },
      "e-75": {
        id: "e-75",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-76",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b1fd5ff803219151902889",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b1fd5ff803219151902889",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062469825,
      },
      "e-76": {
        id: "e-76",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-75",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b1fd5ff803219151902889",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b1fd5ff803219151902889",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062469826,
      },
      "e-77": {
        id: "e-77",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-78",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b1fd51fddb2902b92cb9e0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b1fd51fddb2902b92cb9e0",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062486740,
      },
      "e-78": {
        id: "e-78",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-77",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61b1fd51fddb2902b92cb9e0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61b1fd51fddb2902b92cb9e0",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062486741,
      },
      "e-79": {
        id: "e-79",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-80",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062529960,
      },
      "e-80": {
        id: "e-80",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-79",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "61a767a4757a87bd7ac118aa",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "61a767a4757a87bd7ac118aa",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639062529962,
      },
      "e-81": {
        id: "e-81",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-82",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-in-cms-item",
          originalId:
            "61b0c56d27d3b80b48dd5731|863cf30e-35b3-af56-d2bf-c48e78b34e73",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-in-cms-item",
            originalId:
              "61b0c56d27d3b80b48dd5731|863cf30e-35b3-af56-d2bf-c48e78b34e73",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639065538471,
      },
      "e-82": {
        id: "e-82",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-81",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-in-cms-item",
          originalId:
            "61b0c56d27d3b80b48dd5731|863cf30e-35b3-af56-d2bf-c48e78b34e73",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-in-cms-item",
            originalId:
              "61b0c56d27d3b80b48dd5731|863cf30e-35b3-af56-d2bf-c48e78b34e73",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1639065538472,
      },
      "e-83": {
        id: "e-83",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-84",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button",
          originalId:
            "61b1fd51fddb2902b92cb9e0|7d299478-9b30-7ad5-db7f-c2af90d5de7b",
          appliesTo: "CLASS",
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1641997893940,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-83",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button",
          originalId:
            "61b1fd51fddb2902b92cb9e0|7d299478-9b30-7ad5-db7f-c2af90d5de7b",
          appliesTo: "CLASS",
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1641997893942,
      },
    },
    actionLists: {
      "a-4": {
        id: "a-4",
        title: "Home - Hero Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-4-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img-container",
                    selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                  },
                  xValue: 1,
                  yValue: 0,
                  locked: !1,
                },
              },
              {
                id: "a-4-n-19",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-17",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-13",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".loader-overlay",
                    selectorGuids: ["77216e86-e7b2-3b96-6c95-6241cae8507b"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-4-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img",
                    selectorGuids: ["b0ea048e-9801-9d0f-d88d-15c0a7082131"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|40b281ca-9736-6556-5633-190e50f21a63",
                  },
                  yValue: -110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img-mask",
                    selectorGuids: ["76f2c739-8e7d-4a42-835f-cc55908560f2"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img",
                    selectorGuids: ["b0ea048e-9801-9d0f-d88d-15c0a7082131"],
                  },
                  xValue: 1.4,
                  yValue: 1.4,
                  locked: !0,
                },
              },
              {
                id: "a-4-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|dbef03f2-147f-1203-307b-ecdbab76aa15",
                  },
                  yValue: 110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-style-caps.margin-auto",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "373f0537-93ec-e58f-9597-d6d9f3e3784a",
                      "fe31f826-9411-b286-6fb1-43f8f09b0c99",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-20",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-style-caps.margin-auto",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "373f0537-93ec-e58f-9597-d6d9f3e3784a",
                      "fe31f826-9411-b286-6fb1-43f8f09b0c99",
                    ],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-4-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 200,
                  easing: "inOutCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img-container",
                    selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-4-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 2800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img",
                    selectorGuids: ["b0ea048e-9801-9d0f-d88d-15c0a7082131"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-4-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 900,
                  easing: "inOutCubic",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img-mask",
                    selectorGuids: ["76f2c739-8e7d-4a42-835f-cc55908560f2"],
                  },
                  widthValue: 100,
                  heightValue: 100,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 900,
                  easing: "",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".loader-img",
                    selectorGuids: ["b0ea048e-9801-9d0f-d88d-15c0a7082131"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-4-n-14",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 1600,
                  easing: "inOutCubic",
                  duration: 1e3,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".loader-overlay",
                    selectorGuids: ["77216e86-e7b2-3b96-6c95-6241cae8507b"],
                  },
                  yValue: 0,
                  locked: !1,
                },
              },
              {
                id: "a-4-n-15",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 1800,
                  easing: "inOutExpo",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|40b281ca-9736-6556-5633-190e50f21a63",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-16",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 1800,
                  easing: "inOutExpo",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|dbef03f2-147f-1203-307b-ecdbab76aa15",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 2e3,
                  easing: "",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-style-caps.margin-auto",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "373f0537-93ec-e58f-9597-d6d9f3e3784a",
                      "fe31f826-9411-b286-6fb1-43f8f09b0c99",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-23",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 2e3,
                  easing: "",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-4-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 2200,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-style-caps.margin-auto",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "373f0537-93ec-e58f-9597-d6d9f3e3784a",
                      "fe31f826-9411-b286-6fb1-43f8f09b0c99",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-4-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 2200,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-4-n-25",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 2600,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".loader-overlay",
                    selectorGuids: ["77216e86-e7b2-3b96-6c95-6241cae8507b"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638289911602,
      },
      "a-5": {
        id: "a-5",
        title: "Hero Img Moving",
        continuousParameterGroups: [
          {
            id: "a-5-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".loader-img-container",
                        selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                      },
                      xValue: -20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".loader-img-container",
                        selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                      },
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-5-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".loader-img-container",
                        selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".loader-img-container",
                        selectorGuids: ["e2cd0402-d75c-c20d-2bbc-554a413162e2"],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638354699022,
      },
      "a-6": {
        id: "a-6",
        title: "Scroll Element Loop",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-6-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-line-white",
                    selectorGuids: ["8d3e3140-9273-e1aa-c8d0-659f43bae58a"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-6-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-line-white",
                    selectorGuids: ["8d3e3140-9273-e1aa-c8d0-659f43bae58a"],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-line-white",
                    selectorGuids: ["8d3e3140-9273-e1aa-c8d0-659f43bae58a"],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".scroll-line-white",
                    selectorGuids: ["8d3e3140-9273-e1aa-c8d0-659f43bae58a"],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638360251766,
      },
      "a-7": {
        id: "a-7",
        title: "Button Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-7-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-7-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-right",
                    selectorGuids: ["5ae2c66f-3f0e-4153-3581-9b9ccf8b70c3"],
                  },
                  xValue: 1.3,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-7-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-right",
                    selectorGuids: ["5ae2c66f-3f0e-4153-3581-9b9ccf8b70c3"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-text-style",
                    selectorGuids: ["dedb16c0-5d7f-bb09-d7da-653fa49262f0"],
                  },
                  xValue: 1,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-7-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  xValue: 1.3,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-7-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638368882668,
      },
      "a-8": {
        id: "a-8",
        title: "Button Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-8-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  xValue: 0,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-absolute",
                    selectorGuids: ["639bb2b4-745e-96a4-ff96-e3648325745a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-8-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-text-style",
                    selectorGuids: ["dedb16c0-5d7f-bb09-d7da-653fa49262f0"],
                  },
                  xValue: 0,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-right",
                    selectorGuids: ["5ae2c66f-3f0e-4153-3581-9b9ccf8b70c3"],
                  },
                  xValue: 0,
                  xUnit: "em",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-icon-right",
                    selectorGuids: ["5ae2c66f-3f0e-4153-3581-9b9ccf8b70c3"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638368882668,
      },
      "a-9": {
        id: "a-9",
        title: "Horizontal Scrolling Latest Projects",
        continuousParameterGroups: [
          {
            id: "a-9-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".latest-projects-items",
                        selectorGuids: ["c99fd4e4-8266-a730-b096-90f29189ebf1"],
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".latest-projects-items",
                        selectorGuids: ["c99fd4e4-8266-a730-b096-90f29189ebf1"],
                      },
                      xValue: -300,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638453084760,
      },
      "a-12": {
        id: "a-12",
        title: "Hover In Contact Item",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item-icon",
                    selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-12-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item-icon",
                    selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                  },
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-12-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item",
                    selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                  },
                  globalSwatchId: "",
                  rValue: 0,
                  bValue: 0,
                  gValue: 0,
                  aValue: 1,
                },
              },
              {
                id: "a-12-n-2",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector:
                      ".text-size-large.text-align-center.text-style-caps",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                      "e6bc6151-4920-1b8c-c210-e62365a764c5",
                    ],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-12-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item-icon",
                    selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638458617516,
      },
      "a-13": {
        id: "a-13",
        title: "Hover Out Contact Item",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item",
                    selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                  },
                  globalSwatchId: "14a1631b",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-13-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector:
                      ".text-size-large.text-align-center.text-style-caps",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                      "e6bc6151-4920-1b8c-c210-e62365a764c5",
                    ],
                  },
                  globalSwatchId: "1596676d",
                  rValue: 0,
                  bValue: 0,
                  gValue: 0,
                  aValue: 1,
                },
              },
              {
                id: "a-13-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".contact-item-icon",
                    selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638458617516,
      },
      "a-14": {
        id: "a-14",
        title: "Contact Item Moving",
        continuousParameterGroups: [
          {
            id: "a-14-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item",
                        selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                      },
                      xValue: -2,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector:
                          ".text-size-large.text-align-center.text-style-caps",
                        selectorGuids: [
                          "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                          "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                          "e6bc6151-4920-1b8c-c210-e62365a764c5",
                        ],
                      },
                      xValue: -0.5,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item-icon",
                        selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                      },
                      xValue: -1,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item",
                        selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                      },
                      xValue: 2,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector:
                          ".text-size-large.text-align-center.text-style-caps",
                        selectorGuids: [
                          "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                          "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                          "e6bc6151-4920-1b8c-c210-e62365a764c5",
                        ],
                      },
                      xValue: 0.5,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item-icon",
                        selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                      },
                      xValue: 1,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-14-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-14-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item",
                        selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                      },
                      xValue: null,
                      yValue: -2,
                      xUnit: "em",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector:
                          ".text-size-large.text-align-center.text-style-caps",
                        selectorGuids: [
                          "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                          "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                          "e6bc6151-4920-1b8c-c210-e62365a764c5",
                        ],
                      },
                      yValue: -0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item-icon",
                        selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                      },
                      yValue: -1,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-14-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item",
                        selectorGuids: ["b571ef3f-44eb-1d7b-dff1-a1915055c610"],
                      },
                      xValue: null,
                      yValue: 2,
                      xUnit: "em",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector:
                          ".text-size-large.text-align-center.text-style-caps",
                        selectorGuids: [
                          "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                          "b42fb0be-de46-039b-e5ca-9e02959eec1b",
                          "e6bc6151-4920-1b8c-c210-e62365a764c5",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-item-icon",
                        selectorGuids: ["334611c8-d3e6-782b-4a89-a8921de5d93a"],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638458975534,
      },
      "a-15": {
        id: "a-15",
        title: "References Moving Desktop Tablet",
        continuousParameterGroups: [
          {
            id: "a-15-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 15,
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      xValue: -30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      zValue: 6,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-15-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      xValue: 30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      zValue: -6,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 85,
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      xValue: 30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      zValue: 6,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-15-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      xValue: -30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      zValue: -6,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638461764123,
      },
      "a-16": {
        id: "a-16",
        title: "In - Project Item",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-16-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-max-width",
                    selectorGuids: ["19e88147-98fb-675d-5d3f-43701655c972"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-16-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-max-width",
                    selectorGuids: ["19e88147-98fb-675d-5d3f-43701655c972"],
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-16-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-max-width",
                    selectorGuids: ["19e88147-98fb-675d-5d3f-43701655c972"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-16-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img-max-width",
                    selectorGuids: ["19e88147-98fb-675d-5d3f-43701655c972"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638463051813,
      },
      "a-17": {
        id: "a-17",
        title: "In Services",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-17-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center",
                    selectorGuids: ["9a0c70fd-e1ed-4994-1340-b6c6857e9839"],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|c3778366-ac5f-cdfb-b103-2a497e3b5719",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-17-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|c3778366-ac5f-cdfb-b103-2a497e3b5719",
                  },
                  yValue: 6,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|35ae4d52-17c6-cd6e-5168-25d146164d79",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-17-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|35ae4d52-17c6-cd6e-5168-25d146164d79",
                  },
                  yValue: 6,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-17-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutCubic",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center",
                    selectorGuids: ["9a0c70fd-e1ed-4994-1340-b6c6857e9839"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|c3778366-ac5f-cdfb-b103-2a497e3b5719",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|c3778366-ac5f-cdfb-b103-2a497e3b5719",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-17-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 600,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|35ae4d52-17c6-cd6e-5168-25d146164d79",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-17-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a6354e3a8fc369129310d1|35ae4d52-17c6-cd6e-5168-25d146164d79",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638463939718,
      },
      "a-18": {
        id: "a-18",
        title: "Fade In Top",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-18-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
                  },
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-18-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-18-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuad",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-18-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "outQuad",
                  duration: 600,
                  target: {
                    useEventTarget: !0,
                    id: "61a6354e3a8fc369129310d1|330c9f51-3a42-44e3-1451-dab5494f4bf9",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638464293888,
      },
      "a-19": {
        id: "a-19",
        title: "Nav Opening",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-19-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".close-nav-wrapper",
                    selectorGuids: ["5a48bf29-0c76-93ef-5cef-5da67c1b6070"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-opened-bg",
                    selectorGuids: ["c046227d-6e95-662e-ca4a-1a7e730ad2a7"],
                  },
                  yValue: 0,
                  locked: !1,
                },
              },
              {
                id: "a-19-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".secondary-links-container",
                    selectorGuids: ["55e8b9fa-4d92-e630-e1c4-fab53141933a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-19-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".nav-opened-wrapper",
                    selectorGuids: ["7d334297-ed9a-9cd2-9e47-d0fe3c919d75"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-19-n-15",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "inOutCubic",
                  duration: 800,
                  target: {
                    selector: ".nav-opened-bg",
                    selectorGuids: ["c046227d-6e95-662e-ca4a-1a7e730ad2a7"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-19-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 350,
                  easing: "ease",
                  duration: 700,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-21",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 350,
                  easing: "outCubic",
                  duration: 800,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-17",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 450,
                  easing: "ease",
                  duration: 700,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 450,
                  easing: "outCubic",
                  duration: 800,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-27",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 450,
                  easing: "ease",
                  duration: 700,
                  target: {
                    selector: ".close-nav-wrapper",
                    selectorGuids: ["5a48bf29-0c76-93ef-5cef-5da67c1b6070"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 550,
                  easing: "ease",
                  duration: 700,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-23",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 550,
                  easing: "outCubic",
                  duration: 800,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-19",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 650,
                  easing: "ease",
                  duration: 700,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 650,
                  easing: "ease",
                  duration: 700,
                  target: {
                    selector: ".secondary-links-container",
                    selectorGuids: ["55e8b9fa-4d92-e630-e1c4-fab53141933a"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-24",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 650,
                  easing: "outCubic",
                  duration: 800,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 750,
                  easing: "ease",
                  duration: 700,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 750,
                  easing: "outCubic",
                  duration: 800,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638550286521,
      },
      "a-20": {
        id: "a-20",
        title: "Nav Closing",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-20-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    selector: ".secondary-links-container",
                    selectorGuids: ["55e8b9fa-4d92-e630-e1c4-fab53141933a"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-27",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outCubic",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0cb" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 50,
                  easing: "ease",
                  duration: 400,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 50,
                  easing: "outCubic",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c9" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 100,
                  easing: "ease",
                  duration: 400,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 100,
                  easing: "outCubic",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c7" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-15",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 100,
                  easing: "inOutCubic",
                  duration: 800,
                  target: {
                    selector: ".nav-opened-bg",
                    selectorGuids: ["c046227d-6e95-662e-ca4a-1a7e730ad2a7"],
                  },
                  xValue: 1,
                  yValue: 0,
                  locked: !1,
                },
              },
              {
                id: "a-20-n-19",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 150,
                  easing: "outCubic",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 150,
                  easing: "ease",
                  duration: 400,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c5" },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 400,
                  target: {
                    selector: ".close-nav-wrapper",
                    selectorGuids: ["5a48bf29-0c76-93ef-5cef-5da67c1b6070"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-20-n-17",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "outCubic",
                  duration: 500,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  yValue: 4.6,
                  xUnit: "PX",
                  yUnit: "vw",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 400,
                  target: { id: "b7c99e7f-81da-4102-a7f7-6937e37bf0c3" },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-20-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".nav-opened-wrapper",
                    selectorGuids: ["7d334297-ed9a-9cd2-9e47-d0fe3c919d75"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638550286521,
      },
      "a-21": {
        id: "a-21",
        title: "References Moving Mobile",
        continuousParameterGroups: [
          {
            id: "a-21-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 15,
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      xValue: -30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      xValue: 30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 85,
                actionItems: [
                  {
                    id: "a-21-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-1",
                        selectorGuids: ["e1dd5d0d-2bfd-53af-1462-4d0fa01a0fc4"],
                      },
                      xValue: 30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-21-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brand-reference-2",
                        selectorGuids: ["8a89c870-9c8a-867e-fcf7-e869bb6e64e5"],
                      },
                      xValue: -30,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638461764123,
      },
      "a-22": {
        id: "a-22",
        title: "Nav Scroll Up",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-22-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    selector: ".nav",
                    selectorGuids: ["5df0521a-e806-53f8-1ae4-118351ae94b6"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638888822740,
      },
      "a-23": {
        id: "a-23",
        title: "Nav Scroll Down",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-23-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    selector: ".nav",
                    selectorGuids: ["5df0521a-e806-53f8-1ae4-118351ae94b6"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638888822740,
      },
      "a-26": {
        id: "a-26",
        title: "Project List Item Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-26-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._1",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "8e013b40-9ba2-2364-34bc-daab6f0a8c86",
                    ],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector:
                      ".blend-mode-difference.text-color-white.text-align-center",
                    selectorGuids: [
                      "fe437e63-eb01-ea4b-7706-4dc573cd96a6",
                      "7add9a72-be43-de1a-170b-9fa34f5de993",
                      "8ab45a00-93dc-f9d5-5dab-b15e840a0c20",
                    ],
                  },
                  yValue: 105,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._2",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "2bf306fb-b497-8382-4b1c-86dfd144118a",
                    ],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._3",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "66bcfaae-dc33-2335-ebdb-7d26db9dae30",
                    ],
                  },
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-26-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector:
                      ".blend-mode-difference.text-color-white.text-align-center",
                    selectorGuids: [
                      "fe437e63-eb01-ea4b-7706-4dc573cd96a6",
                      "7add9a72-be43-de1a-170b-9fa34f5de993",
                      "8ab45a00-93dc-f9d5-5dab-b15e840a0c20",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._1",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "8e013b40-9ba2-2364-34bc-daab6f0a8c86",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 450,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._2",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "2bf306fb-b497-8382-4b1c-86dfd144118a",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-26-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 500,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-large.text-style-italic._3",
                    selectorGuids: [
                      "f99e3da3-35fb-4a9a-01f3-73b0992d6faa",
                      "261c53f3-48e1-3582-46e3-81546f7eab55",
                      "66bcfaae-dc33-2335-ebdb-7d26db9dae30",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638892945152,
      },
      "a-28": {
        id: "a-28",
        title: "Project List - Hero Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-28-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-28-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".span-title.text-style-italic",
                    selectorGuids: [
                      "83c76892-08a8-46b7-0be1-8e447fde3e33",
                      "a48d024f-1e74-8561-b8ea-14a96eca4474",
                    ],
                  },
                  yValue: -110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".inline-position",
                    selectorGuids: ["27722bc4-2947-aca4-bec7-54cf92fcc576"],
                  },
                  yValue: 110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-28-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-28-n-24",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-28-n-17",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".span-title.text-style-italic",
                    selectorGuids: [
                      "83c76892-08a8-46b7-0be1-8e447fde3e33",
                      "a48d024f-1e74-8561-b8ea-14a96eca4474",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-18",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".inline-position",
                    selectorGuids: ["27722bc4-2947-aca4-bec7-54cf92fcc576"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-19",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-28-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-20",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 800,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-28-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-28-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1e3,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638289911602,
      },
      "a-29": {
        id: "a-29",
        title: "About Me - Hero Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-29-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-17",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-hero-img-container",
                    selectorGuids: ["202b7d58-9a84-2b7a-3ccf-2774fd7be937"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-29-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-hero-special",
                    selectorGuids: ["54b91806-af85-a6cd-fd13-c3dc4139c36b"],
                  },
                  yValue: 110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-29-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-29-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-hero-special",
                    selectorGuids: ["54b91806-af85-a6cd-fd13-c3dc4139c36b"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".inline-position",
                    selectorGuids: ["27722bc4-2947-aca4-bec7-54cf92fcc576"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-18",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-hero-img-container",
                    selectorGuids: ["202b7d58-9a84-2b7a-3ccf-2774fd7be937"],
                  },
                  widthValue: 100,
                  heightValue: 100,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-29-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-29-n-14",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 800,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-29-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1e3,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".scroll-container",
                    selectorGuids: ["83e2ab85-43c4-3d56-8961-384314c61a0f"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638289911602,
      },
      "a-32": {
        id: "a-32",
        title: "About Me Img Wrapper Moving",
        continuousParameterGroups: [
          {
            id: "a-32-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: -40,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-5",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: -2,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: 40,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-6",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: 2,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-32-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      yValue: -40,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-7",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: null,
                      yValue: -2,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-32-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      yValue: 40,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-8",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-me-hero-img-wrapper",
                        selectorGuids: ["a2d5fdeb-d3ca-f603-191e-53aba7c5388a"],
                      },
                      xValue: null,
                      yValue: 2,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638958838857,
      },
      "a-39": {
        id: "a-39",
        title: "About Me - Hero Img Loop",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-39-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._6",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "ee2eaf8d-b658-22af-0458-2cb00f8c7a55",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._5",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "be01110b-0cbc-37ef-af15-c7c43779fe8c",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._4",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "cb16e42f-65fb-a6cf-97ab-c6a4bc567566",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._3",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "bf48e4c4-5f6b-dadd-f9ac-72dfc91d5392",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._2",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "210d939f-387c-31cc-7ad2-ff28ef66976e",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._1",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "8f3706fd-1f52-be14-2cee-b350cb2abfd0",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-39-n-28",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._1",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "8f3706fd-1f52-be14-2cee-b350cb2abfd0",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
              {
                id: "a-39-n-30",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._2",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "210d939f-387c-31cc-7ad2-ff28ef66976e",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
              {
                id: "a-39-n-31",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._3",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "bf48e4c4-5f6b-dadd-f9ac-72dfc91d5392",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
              {
                id: "a-39-n-32",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._4",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "cb16e42f-65fb-a6cf-97ab-c6a4bc567566",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
              {
                id: "a-39-n-33",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._5",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "be01110b-0cbc-37ef-af15-c7c43779fe8c",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
              {
                id: "a-39-n-39",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._6",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "ee2eaf8d-b658-22af-0458-2cb00f8c7a55",
                    ],
                  },
                  xValue: 0.8,
                  yValue: 0.8,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-27",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._7",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "0ffdeabb-c674-446f-cf1b-0a00d73654ba",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._6",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "ee2eaf8d-b658-22af-0458-2cb00f8c7a55",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-29",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._6",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "ee2eaf8d-b658-22af-0458-2cb00f8c7a55",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._5",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "be01110b-0cbc-37ef-af15-c7c43779fe8c",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-34",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._5",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "be01110b-0cbc-37ef-af15-c7c43779fe8c",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._4",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "cb16e42f-65fb-a6cf-97ab-c6a4bc567566",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-38",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._4",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "cb16e42f-65fb-a6cf-97ab-c6a4bc567566",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._3",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "bf48e4c4-5f6b-dadd-f9ac-72dfc91d5392",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-36",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._3",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "bf48e4c4-5f6b-dadd-f9ac-72dfc91d5392",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._2",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "210d939f-387c-31cc-7ad2-ff28ef66976e",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-35",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._2",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "210d939f-387c-31cc-7ad2-ff28ef66976e",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._1",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "8f3706fd-1f52-be14-2cee-b350cb2abfd0",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-39-n-37",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".about-me-img._1",
                    selectorGuids: [
                      "d5866efd-68f1-02e0-e549-1d4b84c93215",
                      "8f3706fd-1f52-be14-2cee-b350cb2abfd0",
                    ],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638289911602,
      },
      "a-40": {
        id: "a-40",
        title: "Table Item In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-40-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-medium.left",
                    selectorGuids: [
                      "0a0ec36e-e2d6-4769-2add-3614dbf18348",
                      "fd33cd28-8a7b-74bd-ba7d-09777b241d8f",
                    ],
                  },
                  yValue: 105,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-40-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".line",
                    selectorGuids: ["41b2fa30-dbf6-80ca-3d34-e816344e0801"],
                  },
                  xValue: 0,
                  locked: !1,
                },
              },
              {
                id: "a-40-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-medium.text-align-right",
                    selectorGuids: [
                      "0a0ec36e-e2d6-4769-2add-3614dbf18348",
                      "2808e35d-9425-b614-fc47-af0b1ed3ac98",
                    ],
                  },
                  yValue: 105,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-40-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-medium.left",
                    selectorGuids: [
                      "0a0ec36e-e2d6-4769-2add-3614dbf18348",
                      "fd33cd28-8a7b-74bd-ba7d-09777b241d8f",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-40-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".line",
                    selectorGuids: ["41b2fa30-dbf6-80ca-3d34-e816344e0801"],
                  },
                  xValue: 1,
                  locked: !1,
                },
              },
              {
                id: "a-40-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-size-medium.text-align-right",
                    selectorGuids: [
                      "0a0ec36e-e2d6-4769-2add-3614dbf18348",
                      "2808e35d-9425-b614-fc47-af0b1ed3ac98",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638973097194,
      },
      "a-43": {
        id: "a-43",
        title: "Main Project Img Scaling",
        continuousParameterGroups: [
          {
            id: "a-43-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".main-project-img-wrapper",
                        selectorGuids: ["38ff8347-3dc2-9a28-7b06-670e3d9e8120"],
                      },
                      widthValue: 60,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                keyframe: 40,
                actionItems: [
                  {
                    id: "a-43-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".main-project-img-wrapper",
                        selectorGuids: ["38ff8347-3dc2-9a28-7b06-670e3d9e8120"],
                      },
                      widthValue: 80,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638977526840,
      },
      "a-24": {
        id: "a-24",
        title: "Parallax img",
        continuousParameterGroups: [
          {
            id: "a-24-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "61af770c668d4fc96e56f473|0777dc4a-8c53-ba48-a112-9c90ca9af3ad",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-24-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "61af770c668d4fc96e56f473|0777dc4a-8c53-ba48-a112-9c90ca9af3ad",
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638892042251,
      },
      "a-44": {
        id: "a-44",
        title: "Body Changing Color",
        continuousParameterGroups: [
          {
            id: "a-44-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-44-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "61a767a4757a87bd7ac118aa|61a767a4757a876f43c118ac",
                      },
                      globalSwatchId: "14a1631b",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-44-n-9",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-wrapper",
                        selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "5734",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-44-n-10",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".back-button-wrapper",
                        selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "5734",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                keyframe: 4,
                actionItems: [
                  {
                    id: "a-44-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "61a767a4757a87bd7ac118aa|61a767a4757a876f43c118ac",
                      },
                      globalSwatchId: "1596676d",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-44-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-wrapper",
                        selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "4b2f",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-44-n-11",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".back-button-wrapper",
                        selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "4b2f",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                keyframe: 90,
                actionItems: [
                  {
                    id: "a-44-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "61a767a4757a87bd7ac118aa|61a767a4757a876f43c118ac",
                      },
                      globalSwatchId: "1596676d",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-44-n-7",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-wrapper",
                        selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "4b2f",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-44-n-12",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".back-button-wrapper",
                        selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "4b2f",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                keyframe: 94,
                actionItems: [
                  {
                    id: "a-44-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "61a767a4757a87bd7ac118aa|61a767a4757a876f43c118ac",
                      },
                      globalSwatchId: "14a1631b",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-44-n-8",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-wrapper",
                        selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "79e9",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-44-n-13",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".back-button-wrapper",
                        selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "79e9",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1638978931715,
      },
      "a-45": {
        id: "a-45",
        title: "Project Page - Hero Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-45-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-large.text-align-center",
                    selectorGuids: [
                      "231ad1c9-e6f4-24f7-e803-2e54b53f7b9c",
                      "35fccd53-9be1-7ac7-83e5-27c15859d557",
                    ],
                  },
                  yValue: -110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-28",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".main-project-img-wrapper",
                    selectorGuids: ["38ff8347-3dc2-9a28-7b06-670e3d9e8120"],
                  },
                  yValue: 10,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-45-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-45-n-16",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|03358862-1cf4-d4fe-e4a9-63c9b91871a0",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-17",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|03358862-1cf4-d4fe-e4a9-63c9b91871a0",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-45-n-18",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|ba4a797a-b05f-cd91-5dd0-6bc088f9fae3",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-19",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|ba4a797a-b05f-cd91-5dd0-6bc088f9fae3",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-45-n-20",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|9af36ac3-968d-ab61-791f-045f3387fa22",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|9af36ac3-968d-ab61-791f-045f3387fa22",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-45-n-30",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".back-button-wrapper",
                    selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-45-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-large.text-align-center",
                    selectorGuids: [
                      "231ad1c9-e6f4-24f7-e803-2e54b53f7b9c",
                      "35fccd53-9be1-7ac7-83e5-27c15859d557",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-31",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".back-button-wrapper",
                    selectorGuids: ["cb6a22ea-2f56-a1d1-b4f4-3c4eb15e7dc5"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".text-align-center.text-color-black60",
                    selectorGuids: [
                      "9a0c70fd-e1ed-4994-1340-b6c6857e9839",
                      "42f8d8ae-daa2-bbec-3b24-5748af3b185f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 800,
                  easing: "outQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|03358862-1cf4-d4fe-e4a9-63c9b91871a0",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|03358862-1cf4-d4fe-e4a9-63c9b91871a0",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-29",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 800,
                  easing: "outQuart",
                  duration: 2e3,
                  target: {
                    selector: ".main-project-img-wrapper",
                    selectorGuids: ["38ff8347-3dc2-9a28-7b06-670e3d9e8120"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-24",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 850,
                  easing: "outQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|ba4a797a-b05f-cd91-5dd0-6bc088f9fae3",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-25",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 850,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|ba4a797a-b05f-cd91-5dd0-6bc088f9fae3",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-26",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "outQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|9af36ac3-968d-ab61-791f-045f3387fa22",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-27",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "61a767a4757a87bd7ac118aa|9af36ac3-968d-ab61-791f-045f3387fa22",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638289911602,
      },
      "a-46": {
        id: "a-46",
        title: "Journal Page - Hero Entrance",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-46-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-large",
                    selectorGuids: ["231ad1c9-e6f4-24f7-e803-2e54b53f7b9c"],
                  },
                  yValue: 110,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-19",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-categories-wrapper",
                    selectorGuids: ["265dcbc4-01b0-ffa1-64fa-e05ad4d68712"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-46-n-18",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-categories-wrapper",
                    selectorGuids: ["265dcbc4-01b0-ffa1-64fa-e05ad4d68712"],
                  },
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-46-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-posts-wrapper",
                    selectorGuids: ["7bb385b0-5c68-b903-61e5-68841114efa2"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-46-n-23",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-posts-wrapper",
                    selectorGuids: ["7bb385b0-5c68-b903-61e5-68841114efa2"],
                  },
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-46-n-13",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-large",
                    selectorGuids: ["231ad1c9-e6f4-24f7-e803-2e54b53f7b9c"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-14",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".nav-wrapper",
                    selectorGuids: ["4be4d7e6-2f82-a542-3924-5384246b7bf0"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-46-n-24",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-posts-wrapper",
                    selectorGuids: ["7bb385b0-5c68-b903-61e5-68841114efa2"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-20",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "inOutQuad",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-categories-wrapper",
                    selectorGuids: ["265dcbc4-01b0-ffa1-64fa-e05ad4d68712"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "em",
                  zUnit: "PX",
                },
              },
              {
                id: "a-46-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-categories-wrapper",
                    selectorGuids: ["265dcbc4-01b0-ffa1-64fa-e05ad4d68712"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-46-n-25",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 800,
                  easing: "ease",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".journal-posts-wrapper",
                    selectorGuids: ["7bb385b0-5c68-b903-61e5-68841114efa2"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638289911602,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
