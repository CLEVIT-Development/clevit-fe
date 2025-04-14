import { r as e, g as t } from "./react-CvSS68GI.js";

var n,
  i,
  o,
  a = {},
  r = {},
  s = {},
  u = {},
  l = {};
Object.defineProperty(l, "__esModule", { value: !0 }),
  (l.TraceDirectionKey = l.Direction = l.Axis = void 0),
  (l.TraceDirectionKey = n),
  (function (e) {
    (e.NEGATIVE = "NEGATIVE"), (e.POSITIVE = "POSITIVE"), (e.NONE = "NONE");
  })(n || (l.TraceDirectionKey = n = {})),
  (l.Direction = i),
  (function (e) {
    (e.TOP = "TOP"),
      (e.LEFT = "LEFT"),
      (e.RIGHT = "RIGHT"),
      (e.BOTTOM = "BOTTOM"),
      (e.NONE = "NONE");
  })(i || (l.Direction = i = {})),
  (l.Axis = o),
  (function (e) {
    (e.X = "x"), (e.Y = "y");
  })(o || (l.Axis = o = {})),
  Object.defineProperty(u, "__esModule", { value: !0 }),
  (u.calculateDirection = function (e) {
    var t,
      n = c.TraceDirectionKey.NEGATIVE,
      i = c.TraceDirectionKey.POSITIVE,
      o = e[e.length - 1],
      a = e[e.length - 2] || 0;
    if (
      e.every(function (e) {
        return 0 === e;
      })
    )
      return c.TraceDirectionKey.NONE;
    (t = o > a ? i : n), 0 === o && (t = a < 0 ? i : n);
    return t;
  });
var c = l;
var d = {},
  f = {};
Object.defineProperty(f, "__esModule", { value: !0 }),
  (f.resolveAxisDirection = f.getDirectionValue = f.getDirectionKey = f.getDifference = void 0);
var h = l;
f.getDirectionKey = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  switch (Object.keys(e).toString()) {
    case h.TraceDirectionKey.POSITIVE:
      return h.TraceDirectionKey.POSITIVE;
    case h.TraceDirectionKey.NEGATIVE:
      return h.TraceDirectionKey.NEGATIVE;
    default:
      return h.TraceDirectionKey.NONE;
  }
};
f.getDirectionValue = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return e[e.length - 1] || 0;
};
f.getDifference = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return Math.abs(e - t);
};
(f.resolveAxisDirection = function (e, t) {
  var n = h.Direction.LEFT,
    i = h.Direction.RIGHT,
    o = h.Direction.NONE;
  return (
    e === h.Axis.Y && ((n = h.Direction.BOTTOM), (i = h.Direction.TOP)),
    t === h.TraceDirectionKey.NEGATIVE && (o = n),
    t === h.TraceDirectionKey.POSITIVE && (o = i),
    o
  );
}),
  Object.defineProperty(d, "__esModule", { value: !0 }),
  (d.calculateDirectionDelta = function (e) {
    for (
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length - 1,
        i = p.TraceDirectionKey.NONE;
      n >= 0;
      n--
    ) {
      var o = e[n],
        a = (0, v.getDirectionKey)(o),
        r = (0, v.getDirectionValue)(o[a]),
        s = e[n - 1] || {},
        u = (0, v.getDirectionKey)(s),
        l = (0, v.getDirectionValue)(s[u]);
      if ((0, v.getDifference)(r, l) >= t) {
        i = a;
        break;
      }
      i = u;
    }
    return i;
  });
var p = l,
  v = f;
var m = {};
Object.defineProperty(m, "__esModule", { value: !0 }),
  (m.calculateDuration = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return e ? t - e : 0;
  });
var g = {};
Object.defineProperty(g, "__esModule", { value: !0 }),
  (g.calculateMovingPosition = function (e) {
    if ("changedTouches" in e) {
      var t = e.changedTouches && e.changedTouches[0];
      return { x: t && t.clientX, y: t && t.clientY };
    }
    return { x: e.clientX, y: e.clientY };
  });
var y = {},
  P = {};
Object.defineProperty(P, "__esModule", { value: !0 }),
  (P.updateTrace = function (e, t) {
    e[e.length - 1] !== t && e.push(t);
    return e;
  });
var S = {},
  b = {};
Object.defineProperty(b, "__esModule", { value: !0 }),
  (b.calculateTraceDirections = function () {
    for (
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = [],
        n = T.TraceDirectionKey.POSITIVE,
        i = T.TraceDirectionKey.NEGATIVE,
        o = 0,
        a = [],
        r = T.TraceDirectionKey.NONE;
      o < e.length;
      o++
    ) {
      var s = e[o],
        u = e[o - 1];
      if (a.length) {
        var l = s > u ? n : i;
        r === T.TraceDirectionKey.NONE && (r = l),
          l === r ? a.push(s) : (t.push(_({}, r, a.slice())), (a = []).push(s), (r = l));
      } else 0 !== s && (r = s > 0 ? n : i), a.push(s);
    }
    a.length && t.push(_({}, r, a));
    return t;
  });
var T = l;
function _(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
Object.defineProperty(S, "__esModule", { value: !0 }),
  (S.resolveDirection = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.Axis.X,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (n) {
      var i = (0, E.calculateTraceDirections)(e),
        o = (0, O.calculateDirectionDelta)(i, n);
      return (0, D.resolveAxisDirection)(t, o);
    }
    var a = (0, I.calculateDirection)(e);
    return (0, D.resolveAxisDirection)(t, a);
  });
var I = u,
  E = b,
  O = d,
  D = f,
  w = l;
var A = {};
Object.defineProperty(A, "__esModule", { value: !0 }),
  (A.calculateVelocity = function (e, t, n) {
    return Math.sqrt(e * e + t * t) / (n || 1);
  }),
  Object.defineProperty(y, "__esModule", { value: !0 }),
  (y.calculatePosition = function (e, t) {
    var n = e.start,
      i = e.x,
      o = e.y,
      a = e.traceX,
      r = e.traceY,
      s = t.rotatePosition,
      u = t.directionDelta,
      l = s.x - i,
      c = o - s.y,
      d = Math.abs(l),
      f = Math.abs(c);
    (0, M.updateTrace)(a, l), (0, M.updateTrace)(r, c);
    var h = (0, C.resolveDirection)(a, N.Axis.X, u),
      p = (0, C.resolveDirection)(r, N.Axis.Y, u),
      v = (0, x.calculateDuration)(n, Date.now()),
      m = (0, j.calculateVelocity)(d, f, v);
    return {
      absX: d,
      absY: f,
      deltaX: l,
      deltaY: c,
      directionX: h,
      directionY: p,
      duration: v,
      positionX: s.x,
      positionY: s.y,
      velocity: m,
    };
  });
var M = P,
  C = S,
  x = m,
  j = A,
  N = l;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 }), (L.checkIsMoreThanSingleTouches = void 0);
L.checkIsMoreThanSingleTouches = function (e) {
  return Boolean(e.touches && e.touches.length > 1);
};
var k = {},
  R = {};
Object.defineProperty(R, "__esModule", { value: !0 }),
  (R.createOptions = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
      Object.defineProperty(e, "passive", {
        get: function () {
          return (this.isPassiveSupported = !0), !0;
        },
        enumerable: !0,
      }),
      e
    );
  }),
  Object.defineProperty(k, "__esModule", { value: !0 }),
  (k.checkIsPassiveSupported = function (e) {
    if ("boolean" == typeof e) return e;
    var t = { isPassiveSupported: e };
    try {
      var n = (0, B.createOptions)(t);
      window.addEventListener("checkIsPassiveSupported", U, n),
        window.removeEventListener("checkIsPassiveSupported", U, n);
    } catch (i) {}
    return t.isPassiveSupported;
  }),
  (k.noop = void 0);
var B = R;
var U = function () {};
k.noop = U;
var F = {};
function V(e) {
  return (
    (V =
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
          }),
    V(e)
  );
}
Object.defineProperty(F, "__esModule", { value: !0 }), (F.checkIsTouchEventsSupported = void 0);
F.checkIsTouchEventsSupported = function () {
  return (
    "object" === ("undefined" == typeof window ? "undefined" : V(window)) &&
    ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints))
  );
};
var W = {};
function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i);
  }
  return n;
}
function Y(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
Object.defineProperty(W, "__esModule", { value: !0 }), (W.getInitialState = void 0);
W.getInitialState = function () {
  return (function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? X(Object(n), !0).forEach(function (t) {
            Y(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : X(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
    }
    return e;
  })(
    { x: 0, y: 0, start: 0, isSwiping: !1, traceX: [], traceY: [] },
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
  );
};
var K = {};
function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i);
  }
  return n;
}
function H(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
Object.defineProperty(K, "__esModule", { value: !0 }), (K.getInitialProps = void 0);
K.getInitialProps = function () {
  return (function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? z(Object(n), !0).forEach(function (t) {
            H(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : z(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
    }
    return e;
  })(
    {
      element: null,
      target: null,
      delta: 10,
      directionDelta: 0,
      rotationAngle: 0,
      mouseTrackingEnabled: !1,
      touchTrackingEnabled: !0,
      preventDefaultTouchmoveEvent: !1,
      preventTrackingOnMouseleave: !1,
    },
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
  );
};
var G = {};
Object.defineProperty(G, "__esModule", { value: !0 }),
  (G.getOptions = function () {
    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return { passive: !1 };
    return {};
  });
var q = {};
Object.defineProperty(q, "__esModule", { value: !0 }),
  (q.rotateByAngle = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (0 === t) return e;
    var n = e.x,
      i = e.y,
      o = (Math.PI / 180) * t,
      a = n * Math.cos(o) + i * Math.sin(o),
      r = i * Math.cos(o) - n * Math.sin(o);
    return { x: a, y: r };
  }),
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = u;
    Object.keys(t).forEach(function (n) {
      "default" !== n &&
        "__esModule" !== n &&
        ((n in e && e[n] === t[n]) ||
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: function () {
              return t[n];
            },
          }));
    });
    var n = d;
    Object.keys(n).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === n[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          }));
    });
    var i = m;
    Object.keys(i).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === i[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return i[t];
            },
          }));
    });
    var o = g;
    Object.keys(o).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === o[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          }));
    });
    var a = y;
    Object.keys(a).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === a[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            },
          }));
    });
    var r = b;
    Object.keys(r).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === r[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return r[t];
            },
          }));
    });
    var s = A;
    Object.keys(s).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === s[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          }));
    });
    var l = L;
    Object.keys(l).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === l[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          }));
    });
    var c = k;
    Object.keys(c).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === c[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          }));
    });
    var h = F;
    Object.keys(h).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === h[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          }));
    });
    var p = f;
    Object.keys(p).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === p[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return p[t];
            },
          }));
    });
    var v = R;
    Object.keys(v).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === v[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          }));
    });
    var T = W;
    Object.keys(T).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === T[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return T[t];
            },
          }));
    });
    var _ = K;
    Object.keys(_).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === _[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return _[t];
            },
          }));
    });
    var I = G;
    Object.keys(I).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === I[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return I[t];
            },
          }));
    });
    var E = S;
    Object.keys(E).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === E[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return E[t];
            },
          }));
    });
    var O = q;
    Object.keys(O).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === O[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return O[t];
            },
          }));
    });
    var D = P;
    Object.keys(D).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        ((t in e && e[t] === D[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return D[t];
            },
          }));
    });
  })(s),
  (function (e) {
    function t(e) {
      return (
        (t =
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
              }),
        t(e)
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = {};
    e.default = void 0;
    var i = (function (e, n) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== t(e) && "function" != typeof e)) return { default: e };
        var i = a(n);
        if (i && i.has(e)) return i.get(e);
        var o = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var u = r ? Object.getOwnPropertyDescriptor(e, s) : null;
            u && (u.get || u.set) ? Object.defineProperty(o, s, u) : (o[s] = e[s]);
          }
        (o.default = e), i && i.set(e, o);
        return o;
      })(s),
      o = l;
    function a(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (a = function (e) {
        return e ? n : t;
      })(e);
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function u(e, t, n) {
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
    }
    Object.keys(o).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        (Object.prototype.hasOwnProperty.call(n, t) ||
          (t in e && e[t] === o[t]) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          }));
    });
    var c = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e),
          u(this, "state", void 0),
          u(this, "props", void 0),
          (this.state = i.getInitialState()),
          (this.props = i.getInitialProps(t)),
          (this.handleSwipeStart = this.handleSwipeStart.bind(this)),
          (this.handleSwipeMove = this.handleSwipeMove.bind(this)),
          (this.handleSwipeEnd = this.handleSwipeEnd.bind(this)),
          (this.handleMouseDown = this.handleMouseDown.bind(this)),
          (this.handleMouseMove = this.handleMouseMove.bind(this)),
          (this.handleMouseUp = this.handleMouseUp.bind(this)),
          (this.handleMouseLeave = this.handleMouseLeave.bind(this));
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "init",
            value: function () {
              this.setupTouchListeners(), this.setupMouseListeners();
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this.props,
                n = Object.assign({}, t, e);
              if (t.element !== n.element || t.target !== n.target)
                return this.destroy(), (this.props = n), void this.init();
              (this.props = n),
                (t.mouseTrackingEnabled === n.mouseTrackingEnabled &&
                  t.preventTrackingOnMouseleave === n.preventTrackingOnMouseleave) ||
                  (this.cleanupMouseListeners(),
                  n.mouseTrackingEnabled
                    ? this.setupMouseListeners()
                    : this.cleanupMouseListeners()),
                t.touchTrackingEnabled !== n.touchTrackingEnabled &&
                  (this.cleanupTouchListeners(),
                  n.touchTrackingEnabled
                    ? this.setupTouchListeners()
                    : this.cleanupTouchListeners());
            },
          },
          {
            key: "destroy",
            value: function () {
              this.cleanupMouseListeners(),
                this.cleanupTouchListeners(),
                (this.state = i.getInitialState()),
                (this.props = i.getInitialProps());
            },
          },
          {
            key: "setupTouchListeners",
            value: function () {
              var e = this.props,
                t = e.element,
                n = e.target,
                o = e.touchTrackingEnabled;
              if (t && o) {
                var a = n || t,
                  r = i.checkIsPassiveSupported(),
                  s = i.getOptions(r);
                a.addEventListener("touchstart", this.handleSwipeStart, s),
                  a.addEventListener("touchmove", this.handleSwipeMove, s),
                  a.addEventListener("touchend", this.handleSwipeEnd, s);
              }
            },
          },
          {
            key: "cleanupTouchListeners",
            value: function () {
              var e = this.props,
                t = e.element,
                n = e.target || t;
              n &&
                (n.removeEventListener("touchstart", this.handleSwipeStart),
                n.removeEventListener("touchmove", this.handleSwipeMove),
                n.removeEventListener("touchend", this.handleSwipeEnd));
            },
          },
          {
            key: "setupMouseListeners",
            value: function () {
              var e = this.props,
                t = e.element,
                n = e.mouseTrackingEnabled,
                i = e.preventTrackingOnMouseleave;
              n &&
                t &&
                (t.addEventListener("mousedown", this.handleMouseDown),
                t.addEventListener("mousemove", this.handleMouseMove),
                t.addEventListener("mouseup", this.handleMouseUp),
                i && t.addEventListener("mouseleave", this.handleMouseLeave));
            },
          },
          {
            key: "cleanupMouseListeners",
            value: function () {
              var e = this.props.element;
              e &&
                (e.removeEventListener("mousedown", this.handleMouseDown),
                e.removeEventListener("mousemove", this.handleMouseMove),
                e.removeEventListener("mouseup", this.handleMouseUp),
                e.removeEventListener("mouseleave", this.handleMouseLeave));
            },
          },
          {
            key: "getEventData",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { directionDelta: 0 },
                n = this.props.rotationAngle,
                o = t.directionDelta,
                a = i.calculateMovingPosition(e),
                r = i.rotateByAngle(a, n);
              return i.calculatePosition(this.state, { rotatePosition: r, directionDelta: o });
            },
          },
          {
            key: "handleSwipeStart",
            value: function (e) {
              if (!i.checkIsMoreThanSingleTouches(e)) {
                var t = this.props.rotationAngle,
                  n = i.calculateMovingPosition(e),
                  o = i.rotateByAngle(n, t),
                  a = o.x,
                  r = o.y;
                this.state = i.getInitialState({ isSwiping: !1, start: Date.now(), x: a, y: r });
              }
            },
          },
          {
            key: "handleSwipeMove",
            value: function (e) {
              var t = this.state,
                n = t.x,
                o = t.y,
                a = t.isSwiping;
              if (n && o && !i.checkIsMoreThanSingleTouches(e)) {
                var r = this.props.directionDelta || 0,
                  s = this.getEventData(e, { directionDelta: r }),
                  u = s.absX,
                  l = s.absY,
                  c = s.deltaX,
                  d = s.deltaY,
                  f = s.directionX,
                  h = s.directionY,
                  p = s.duration,
                  v = s.velocity,
                  m = this.props,
                  g = m.delta,
                  y = m.preventDefaultTouchmoveEvent,
                  P = m.onSwipeStart,
                  S = m.onSwiping;
                e.cancelable && y && e.preventDefault(),
                  (u < Number(g) && l < Number(g) && !a) ||
                    (P &&
                      !a &&
                      P(e, {
                        deltaX: c,
                        deltaY: d,
                        absX: u,
                        absY: l,
                        directionX: f,
                        directionY: h,
                        duration: p,
                        velocity: v,
                      }),
                    (this.state.isSwiping = !0),
                    S &&
                      S(e, {
                        deltaX: c,
                        deltaY: d,
                        absX: u,
                        absY: l,
                        directionX: f,
                        directionY: h,
                        duration: p,
                        velocity: v,
                      }));
              }
            },
          },
          {
            key: "handleSwipeEnd",
            value: function (e) {
              var t = this.props,
                n = t.onSwiped,
                o = t.onTap;
              if (this.state.isSwiping) {
                var a = this.props.directionDelta || 0,
                  r = this.getEventData(e, { directionDelta: a });
                n && n(e, r);
              } else {
                var s = this.getEventData(e);
                o && o(e, s);
              }
              this.state = i.getInitialState();
            },
          },
          {
            key: "handleMouseDown",
            value: function (e) {
              var t = this.props.target;
              t ? t === e.target && this.handleSwipeStart(e) : this.handleSwipeStart(e);
            },
          },
          {
            key: "handleMouseMove",
            value: function (e) {
              this.handleSwipeMove(e);
            },
          },
          {
            key: "handleMouseUp",
            value: function (e) {
              var t = this.state.isSwiping,
                n = this.props.target;
              n ? (n === e.target || t) && this.handleSwipeEnd(e) : this.handleSwipeEnd(e);
            },
          },
          {
            key: "handleMouseLeave",
            value: function (e) {
              this.state.isSwiping && this.handleSwipeEnd(e);
            },
          },
        ]),
        (o = [
          {
            key: "isTouchEventsSupported",
            value: function () {
              return i.checkIsTouchEventsSupported();
            },
          },
        ]),
        n && r(t.prototype, n),
        o && r(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    e.default = c;
  })(r);
var Z,
  J,
  Q = {},
  $ = {};
(Z = $),
  Object.defineProperty(Z, "__esModule", { value: !0 }),
  (Z.Modifiers =
    Z.Classnames =
    Z.AutoplayDirection =
    Z.ControlsStrategy =
    Z.AutoPlayStrategy =
    Z.AnimationType =
    Z.EventType =
      void 0),
  ((J = Z.EventType || (Z.EventType = {})).ACTION = "action"),
  (J.INIT = "init"),
  (J.RESIZE = "resize"),
  (J.UPDATE = "update"),
  (function (e) {
    (e.FADEOUT = "fadeout"), (e.SLIDE = "slide");
  })(Z.AnimationType || (Z.AnimationType = {})),
  (function (e) {
    (e.DEFAULT = "default"), (e.ALL = "all"), (e.ACTION = "action"), (e.NONE = "none");
  })(Z.AutoPlayStrategy || (Z.AutoPlayStrategy = {})),
  (function (e) {
    (e.DEFAULT = "default"), (e.ALTERNATE = "alternate"), (e.RESPONSIVE = "responsive");
  })(Z.ControlsStrategy || (Z.ControlsStrategy = {})),
  (function (e) {
    (e.RTL = "rtl"), (e.LTR = "ltr");
  })(Z.AutoplayDirection || (Z.AutoplayDirection = {})),
  (function (e) {
    (e.ANIMATED = "animated animated-out fadeOut"),
      (e.ROOT = "alice-carousel"),
      (e.WRAPPER = "alice-carousel__wrapper"),
      (e.STAGE = "alice-carousel__stage"),
      (e.STAGE_ITEM = "alice-carousel__stage-item"),
      (e.DOTS = "alice-carousel__dots"),
      (e.DOTS_ITEM = "alice-carousel__dots-item"),
      (e.PLAY_BTN = "alice-carousel__play-btn"),
      (e.PLAY_BTN_ITEM = "alice-carousel__play-btn-item"),
      (e.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper"),
      (e.SLIDE_INFO = "alice-carousel__slide-info"),
      (e.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item"),
      (e.BUTTON_PREV = "alice-carousel__prev-btn"),
      (e.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper"),
      (e.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item"),
      (e.BUTTON_NEXT = "alice-carousel__next-btn"),
      (e.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper"),
      (e.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item");
  })(Z.Classnames || (Z.Classnames = {})),
  (function (e) {
    (e.ACTIVE = "__active"),
      (e.INACTIVE = "__inactive"),
      (e.CLONED = "__cloned"),
      (e.CUSTOM = "__custom"),
      (e.PAUSE = "__pause"),
      (e.SEPARATOR = "__separator"),
      (e.SSR = "__ssr"),
      (e.TARGET = "__target");
  })(Z.Modifiers || (Z.Modifiers = {})),
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.defaultProps = void 0);
    var t = $;
    e.defaultProps = {
      activeIndex: 0,
      animationDuration: 400,
      animationEasingFunction: "ease",
      animationType: t.AnimationType.SLIDE,
      autoHeight: !1,
      autoWidth: !1,
      autoPlay: !1,
      autoPlayControls: !1,
      autoPlayDirection: t.AutoplayDirection.LTR,
      autoPlayInterval: 400,
      autoPlayStrategy: t.AutoPlayStrategy.DEFAULT,
      children: void 0,
      controlsStrategy: t.ControlsStrategy.DEFAULT,
      disableButtonsControls: !1,
      disableDotsControls: !1,
      disableSlideInfo: !0,
      infinite: !1,
      innerWidth: void 0,
      items: void 0,
      keyboardNavigation: !1,
      mouseTracking: !1,
      syncStateOnPropsUpdate: !0,
      name: "",
      paddingLeft: 0,
      paddingRight: 0,
      responsive: void 0,
      swipeDelta: 20,
      swipeExtraPadding: 200,
      ssrSilentMode: !0,
      touchTracking: !0,
      touchMoveDefaultEvents: !0,
      onInitialized: function () {},
      onResized: function () {},
      onUpdated: function () {},
      onResizeEvent: void 0,
      onSlideChange: function () {},
      onSlideChanged: function () {},
    };
  })(Q);
var ee = {};
!(function (t) {
  var n = function () {
      return (n =
        Object.assign ||
        function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    },
    i =
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(e));
  t.default = function (e) {
    var t = { xDown: null, xUp: null };
    return i.default.createElement(
      "a",
      n(
        {
          onClick: function (e) {
            t.xDown !== t.xUp && e.preventDefault();
          },
          onMouseDown: function (e) {
            e.preventDefault(), (t.xUp = null), (t.xDown = e.clientX);
          },
          onMouseUp: function (e) {
            e.preventDefault(), (t.xUp = e.clientX);
          },
        },
        e
      ),
      e.children
    );
  };
})(ee);
var te = {},
  ne = {},
  ie = {},
  oe = {},
  ae = {},
  re = {};
!(function (e) {
  var t = function () {
      return (t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mapPositionCoords = e.mapPartialCoords = void 0),
      function (e) {
        return e.map(function (e) {
          return { width: e.width, position: 0 };
        });
      }),
    i =
      ((e.mapPartialCoords = n),
      function (e, n) {
        return (
          void 0 === n && (n = 0),
          e.map(function (e) {
            return e.position > n ? t(t({}, e), { position: n }) : e;
          })
        );
      });
  e.mapPositionCoords = i;
})(re);
var se = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.isVerticalTouchmoveDetected =
      e.getFadeoutAnimationPosition =
      e.getFadeoutAnimationIndex =
      e.getSwipeTouchendIndex =
      e.getSwipeTouchendPosition =
      e.getSwipeTransformationCursor =
      e.getTransformationItemIndex =
      e.getSwipeShiftValue =
      e.getItemCoords =
      e.getIsLeftDirection =
      e.shouldRecalculateSwipePosition =
      e.getSwipeLimitMax =
      e.getSwipeLimitMin =
      e.shouldCancelSlideAnimation =
      e.shouldRecalculateSlideIndex =
      e.getUpdateSlidePositionIndex =
      e.getActiveIndex =
      e.getStartIndex =
      e.getShiftIndex =
        void 0);
  var t =
      ((e.getShiftIndex = function (e, t) {
        return (e = void 0 === e ? 0 : e) + (void 0 === t ? 0 : t);
      }),
      function (e, t) {
        if ((void 0 === e && (e = 0), (t = void 0 === t ? 0 : t))) {
          if (t <= e) return t - 1;
          if (0 < e) return e;
        }
        return 0;
      }),
    n =
      ((e.getStartIndex = t),
      function (t) {
        var n = void 0 === (n = t.startIndex) ? 0 : n,
          i = t.itemsCount;
        return void 0 !== (t = t.infinite) && t ? n : (0, e.getStartIndex)(n, void 0 === i ? 0 : i);
      }),
    i =
      ((e.getActiveIndex = n),
      function (e, t) {
        return e < 0 ? t - 1 : t <= e ? 0 : e;
      }),
    o =
      ((e.getUpdateSlidePositionIndex = i),
      function (e, t) {
        return e < 0 || t <= e;
      }),
    a =
      ((e.shouldRecalculateSlideIndex = o),
      function (e, t) {
        return e < 0 || t <= e;
      }),
    r =
      ((e.shouldCancelSlideAnimation = a),
      function (e, t) {
        var n = e.itemsOffset,
          i = ((e = void 0 === (e = e.transformationSet) ? [] : e), t.infinite);
        t = t.swipeExtraPadding;
        return i
          ? (e[void 0 === n ? 0 : n] || {}).position
          : ((i = (e[0] || {}).width), Math.min(void 0 === t ? 0 : t, void 0 === i ? 0 : i));
      }),
    s =
      ((e.getSwipeLimitMin = r),
      function (t, n) {
        var i = n.infinite,
          o = ((n = void 0 === (n = n.swipeExtraPadding) ? 0 : n), t.itemsCount),
          a = t.itemsOffset,
          r = void 0 === (r = t.itemsInSlide) ? 1 : r;
        t = void 0 === (t = t.transformationSet) ? [] : t;
        return i
          ? (t[(void 0 === o ? 1 : o) + (0, e.getShiftIndex)(r, void 0 === a ? 0 : a)] || {})
              .position || 0
          : (0, e.getItemCoords)(-r, t).position + n;
      }),
    u =
      ((e.getSwipeLimitMax = s),
      function (e, t, n) {
        return -t <= e || Math.abs(e) >= n;
      }),
    l =
      ((e.shouldRecalculateSwipePosition = u),
      function (e) {
        return (e = void 0 === e ? 0 : e) < 0;
      }),
    c =
      ((e.getIsLeftDirection = l),
      function (e, t) {
        return (
          (t = void 0 === t ? [] : t).slice((e = void 0 === e ? 0 : e))[0] || {
            position: 0,
            width: 0,
          }
        );
      }),
    d =
      ((e.getItemCoords = c),
      function (t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = []), (0, e.getItemCoords)(t, n).position
        );
      }),
    f =
      ((e.getSwipeShiftValue = d),
      function (e, t) {
        return (
          void 0 === t && (t = 0),
          (e = void 0 === e ? [] : e).findIndex(function (e) {
            return e.position >= Math.abs(t);
          })
        );
      }),
    h =
      ((e.getTransformationItemIndex = f),
      function (t, n, i) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = 0),
          void 0 === i && (i = 0),
          (t = (0, e.getTransformationItemIndex)(t, n)),
          (0, e.getIsLeftDirection)(i) ? t : t - 1
        );
      }),
    p =
      ((e.getSwipeTransformationCursor = h),
      function (t, n, i) {
        void 0 === i && (i = 0);
        var o = t.infinite,
          a = t.autoWidth,
          r = t.isStageContentPartial,
          s = t.swipeAllowedPositionMax;
        (t = t.transformationSet),
          (i = (0, e.getSwipeTransformationCursor)(t, i, n)),
          (n = (0, e.getItemCoords)(i, t).position);
        if (!o) {
          if (a && r) return 0;
          if (s < n) return -s;
        }
        return -n;
      }),
    v =
      ((e.getSwipeTouchendPosition = p),
      function (t, n) {
        var i = n.transformationSet,
          o = n.itemsInSlide,
          a = n.itemsOffset,
          r = n.itemsCount,
          s = n.infinite,
          u = n.isStageContentPartial,
          l = n.activeIndex;
        n = n.translate3d;
        return s || (!u && n !== Math.abs(t))
          ? ((u = (0, e.getTransformationItemIndex)(i, t)),
            s
              ? u < (n = (0, e.getShiftIndex)(o, a))
                ? r - o - a + u
                : n + r <= u
                  ? u - (n + r)
                  : u - n
              : u)
          : l;
      }),
    m =
      ((e.getSwipeTouchendIndex = v),
      function (e) {
        var t = e.infinite,
          n = e.activeIndex;
        e = e.itemsInSlide;
        return t ? n + e : n;
      }),
    g =
      ((e.getFadeoutAnimationIndex = m),
      function (e, t) {
        var n = t.activeIndex;
        t = t.stageWidth;
        return e < n ? (n - e) * -t || 0 : (e - n) * t || 0;
      }),
    y =
      ((e.getFadeoutAnimationPosition = g),
      function (e, t, n) {
        return e < (n = void 0 === n ? 0 : n) || e < 0.1 * t;
      });
  e.isVerticalTouchmoveDetected = y;
})(se),
  (function (e) {
    var t = function () {
        return (t =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      n =
        (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getItemsInSlide =
          e.canUseDOM =
          e.getTransformMatrix =
          e.getTranslateXProperty =
          e.getTouchmoveTranslatePosition =
          e.getTranslate3dProperty =
          e.getRenderStageItemStyles =
          e.getRenderStageStyles =
          e.getTransitionProperty =
          e.getRenderWrapperStyles =
          e.animate =
          e.shouldHandleResizeEvent =
          e.getElementFirstChild =
          e.getElementCursor =
          e.getAutoheightProperty =
          e.getElementDimensions =
          e.getItemWidth =
          e.createDefaultTransformationSet =
          e.createAutowidthTransformationSet =
          e.isElement =
          e.createClones =
          e.getItemsOffset =
          e.getItemsCount =
          e.getSlides =
            void 0),
        re),
      i = se,
      o =
        ((e.getSlides = function (e) {
          var t = e.children;
          e = e.items;
          return t ? (t.length ? t : [t]) : void 0 === e ? [] : e;
        }),
        function (t) {
          return (0, e.getSlides)(t).length;
        }),
      a =
        ((e.getItemsCount = o),
        function (e) {
          var t = e.infinite,
            n = e.paddingRight;
          e = e.paddingLeft;
          return t && (e || n) ? 1 : 0;
        }),
      r =
        ((e.getItemsOffset = a),
        function (t) {
          var n,
            i,
            o,
            a,
            r = (0, e.getSlides)(t);
          return t.infinite
            ? ((n = (0, e.getItemsCount)(t)),
              (a = (0, e.getItemsOffset)(t)),
              (t = (0, e.getItemsInSlide)(n, t)),
              (o = Math.min(t, n) + a),
              (i = r.slice(0, o)),
              (o = r.slice(-o)),
              a && t === n && ((a = r[0]), (t = r.slice(-1)[0]), o.unshift(t), i.push(a)),
              o.concat(r, i))
            : r;
        }),
      s =
        ((e.createClones = r),
        function (e) {
          try {
            return e instanceof Element || e instanceof HTMLDocument;
          } catch (e) {
            return !1;
          }
        }),
      u =
        ((e.isElement = s),
        function (t, i, o) {
          void 0 === i && (i = 0), void 0 === o && (o = !1);
          var a = 0,
            r = !0,
            s = [];
          return (
            (0, e.isElement)(t) &&
              ((s = Array.from((null == t ? void 0 : t.children) || []).reduce(function (e, t, n) {
                var o = 0,
                  s = e[(n = n - 1)];
                t = d(null == t ? void 0 : t.firstChild).width;
                return (
                  (r = (a += t = void 0 === t ? 0 : t) <= i),
                  s && (o = 0 == n ? s.width : s.width + s.position),
                  e.push({ position: o, width: t }),
                  e
                );
              }, [])),
              o || (s = r ? (0, n.mapPartialCoords)(s) : (0, n.mapPositionCoords)(s, (t = a - i)))),
            { coords: s, content: a, partial: r }
          );
        }),
      l =
        ((e.createAutowidthTransformationSet = u),
        function (t, i, o, a) {
          void 0 === a && (a = !1);
          var r = 0,
            s = !0,
            u = [],
            l = (0, e.getItemWidth)(i, o);
          return (
            (u = t.reduce(function (e, t, n) {
              var o = 0;
              n = e[n - 1];
              return (
                (s = (r += l) <= i),
                n && (o = l + n.position || 0),
                e.push({ width: l, position: o }),
                e
              );
            }, [])),
            {
              coords: (u = a
                ? u
                : s
                  ? (0, n.mapPartialCoords)(u)
                  : ((o = r - i), (0, n.mapPositionCoords)(u, o))),
              content: r,
              partial: s,
            }
          );
        }),
      c =
        ((e.createDefaultTransformationSet = l),
        function (e, t) {
          return 0 < t ? e / t : e;
        });
    function d(e) {
      return e && e.getBoundingClientRect
        ? { width: (e = e.getBoundingClientRect()).width, height: e.height }
        : { width: 0, height: 0 };
    }
    (e.getItemWidth = c), (e.getElementDimensions = d);
    var f =
        ((e.getAutoheightProperty = function (t, n, i) {
          (n = (0, e.getElementCursor)(n, i)), (i = (0, e.getElementFirstChild)(t, n));
          if ((0, e.isElement)(i))
            return (
              (t = window.getComputedStyle(i)),
              (n = parseFloat(t.marginTop)),
              (t = parseFloat(t.marginBottom)),
              Math.ceil(i.offsetHeight + n + t)
            );
        }),
        function (t, n) {
          var i = n.activeIndex;
          n = n.itemsInSlide;
          return t.infinite ? i + n + (0, e.getItemsOffset)(t) : i;
        }),
      h =
        ((e.getElementCursor = f),
        function (e, t) {
          return ((e = (e && e.children) || [])[t] && e[t].firstChild) || null;
        });
    (e.getElementFirstChild = h),
      (e.shouldHandleResizeEvent = function (e, t, n) {
        return (t = void 0 === t ? {} : t).width !== (n = void 0 === n ? {} : n).width;
      }),
      (e.animate = function (t, n) {
        var i = void 0 === (i = (n = n || {}).position) ? 0 : i,
          o = void 0 === (o = n.animationDuration) ? 0 : o;
        return (
          (n = void 0 === (n = n.animationEasingFunction) ? "ease" : n),
          t &&
            (0, e.isElement)(t) &&
            ((t.style.transition = "transform ".concat(o, "ms ").concat(n, " 0ms")),
            (t.style.transform = "translate3d(".concat(i, "px, 0, 0)"))),
          t
        );
      });
    var p =
        ((e.getRenderWrapperStyles = function (t, n, i) {
          var o = (s = t || {}).paddingLeft,
            a = s.paddingRight,
            r = s.autoHeight,
            s = s.animationDuration;
          return {
            height: (r = r ? (0, e.getAutoheightProperty)(i, t, n) : void 0),
            transition: r ? "height ".concat(s, "ms") : void 0,
            paddingLeft: "".concat(o, "px"),
            paddingRight: "".concat(a, "px"),
          };
        }),
        function (e) {
          var t = (e = e || {}).animationDuration;
          e = void 0 === (e = e.animationEasingFunction) ? "ease" : e;
          return "transform ".concat(void 0 === t ? 0 : t, "ms ").concat(e, " 0ms");
        }),
      v =
        ((e.getTransitionProperty = p),
        function (e, n) {
          return (
            (e = (e || {}).translate3d),
            (e = "translate3d(".concat(-(void 0 === e ? 0 : e), "px, 0, 0)")),
            t(t({}, n), { transform: e })
          );
        }),
      m =
        ((e.getRenderStageStyles = v),
        function (e, t) {
          var n = t.transformationSet,
            i = t.fadeoutAnimationIndex,
            o = t.fadeoutAnimationPosition,
            a = t.fadeoutAnimationProcessing;
          (t = t.animationDuration), (n = (n[e] || {}).width);
          return a && i === e
            ? {
                transform: "translateX(".concat(o, "px)"),
                animationDuration: "".concat(t, "ms"),
                width: "".concat(n, "px"),
              }
            : { width: n };
        }),
      g =
        ((e.getRenderStageItemStyles = m),
        function (e, t) {
          var n = e,
            o = t.infinite,
            a = t.itemsOffset,
            r = t.itemsInSlide;
          return (
            (
              (void 0 === (t = t.transformationSet) ? [] : t)[
                (n = o ? e + (0, i.getShiftIndex)(void 0 === r ? 0 : r, void 0 === a ? 0 : a) : n)
              ] || {}
            ).position || 0
          );
        }),
      y =
        ((e.getTranslate3dProperty = g),
        function (e, t) {
          return -(t - Math.floor(e));
        });
    function P(t) {
      return (
        (t && (0, e.isElement)(t) && window.getComputedStyle(t).transform.match(/(-?[0-9.]+)/g)) ||
        []
      );
    }
    (e.getTouchmoveTranslatePosition = y),
      (e.getTranslateXProperty = function (e) {
        return (e = ((e = P(e)) && e[4]) || ""), Number(e);
      }),
      (e.getTransformMatrix = P);
    var S =
      ((e.canUseDOM = function () {
        var e;
        try {
          return Boolean(
            null == (e = null === window || void 0 === window ? void 0 : window.document)
              ? void 0
              : e.createElement
          );
        } catch (e) {
          return !1;
        }
      }),
      function (t, n) {
        var i,
          o = 1,
          a = n.responsive,
          r = n.autoWidth,
          s = n.infinite;
        n = n.innerWidth;
        return void 0 !== r && r
          ? void 0 !== s && s
            ? t
            : o
          : (a &&
              (r = Object.keys(a)).length &&
              (n || (0, e.canUseDOM)()) &&
              ((i = void 0 === n ? window.innerWidth : n),
              r.forEach(function (e) {
                var n;
                Number(e) <= i &&
                  ((n = (e = a[e]).items),
                  (e = e.itemsFit),
                  (o = "contain" === (void 0 === e ? "fill" : e) ? n : Math.min(n, t)));
              })),
            o || 1);
      });
    e.getItemsInSlide = S;
  })(ae),
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.calculateInitialState = e.getIsStageContentPartial = e.concatClassnames = void 0);
    var t = ae,
      n = se,
      i =
        ((e.concatClassnames = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return e.filter(Boolean).join(" ");
        }),
        function (e, t, n) {
          return (
            void 0 === t && (t = 0), void 0 === n && (n = 0), !(e = void 0 !== e && e) && n <= t
          );
        }),
      o =
        ((e.getIsStageContentPartial = i),
        function (e, i, o) {
          void 0 === o && (o = (0, t.canUseDOM)());
          var a,
            r,
            s = void 0 === (s = e.animationDuration) ? 0 : s,
            u = void 0 !== (u = e.infinite) && u,
            l = void 0 !== (l = e.autoPlay) && l,
            c = void 0 !== (c = e.autoWidth) && c,
            d = (0, t.createClones)(e),
            f = (0, t.getTransitionProperty)(),
            h = (0, t.getItemsCount)(e),
            p = (0, t.getItemsOffset)(e),
            v = (0, t.getItemsInSlide)(h, e),
            m = (0, n.getStartIndex)(e.activeIndex, h),
            g =
              ((m = (0, n.getActiveIndex)({ startIndex: m, itemsCount: h, infinite: u })),
              (0, t.getElementDimensions)(i).width),
            y =
              ((i = (
                c
                  ? ((a = (i = (0, t.createAutowidthTransformationSet)(i, g, u)).coords),
                    (r = i.content),
                    i)
                  : ((a = (i = (0, t.createDefaultTransformationSet)(d, g, v, u)).coords),
                    (r = i.content),
                    i)
              ).partial),
              (0, n.getItemCoords)(-v, a).position),
            P = (0, n.getSwipeLimitMin)({ itemsOffset: p, transformationSet: a }, e),
            S =
              ((e = (0, n.getSwipeLimitMax)(
                { itemsCount: h, itemsOffset: p, itemsInSlide: v, transformationSet: a },
                e
              )),
              (0, n.getSwipeShiftValue)(h, a));
          return {
            activeIndex: m,
            autoWidth: c,
            animationDuration: s,
            clones: d,
            infinite: u,
            itemsCount: h,
            itemsInSlide: v,
            itemsOffset: p,
            translate3d: (0, t.getTranslate3dProperty)(m, {
              itemsInSlide: v,
              itemsOffset: p,
              transformationSet: a,
              autoWidth: c,
              infinite: u,
            }),
            stageWidth: g,
            stageContentWidth: r,
            initialStageHeight: 0,
            isStageContentPartial: i,
            isAutoPlaying: l,
            isAutoPlayCanceledOnAction: !1,
            transformationSet: a,
            transition: f,
            fadeoutAnimationIndex: null,
            fadeoutAnimationPosition: null,
            fadeoutAnimationProcessing: !1,
            swipeLimitMin: P,
            swipeLimitMax: e,
            swipeAllowedPositionMax: y,
            swipeShiftValue: S,
            canUseDom: o,
          };
        });
    e.calculateInitialState = o;
  })(oe);
var ue = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.isClonedItem = e.isTargetItem = e.isActiveItem = e.getRenderStageItemClasses = void 0);
  var t = $,
    n = oe,
    i = se,
    o =
      ((e.getRenderStageItemClasses = function (i, o) {
        void 0 === i && (i = 0);
        var a = o.fadeoutAnimationIndex,
          r = (0, e.isActiveItem)(i, o) ? t.Modifiers.ACTIVE : "",
          s = (0, e.isClonedItem)(i, o) ? t.Modifiers.CLONED : "";
        (o = (0, e.isTargetItem)(i, o) ? t.Modifiers.TARGET : ""),
          (i = i === a ? t.Classnames.ANIMATED : "");
        return (0, n.concatClassnames)(t.Classnames.STAGE_ITEM, r, s, o, i);
      }),
      function (e, t) {
        void 0 === e && (e = 0);
        var n = t.activeIndex,
          o = t.itemsInSlide,
          a = t.itemsOffset,
          r = t.infinite,
          s = ((t = t.autoWidth), (0, i.getShiftIndex)(o, a));
        return t && r ? e - s === n + a : ((t = n + s), r ? t <= e && e < t + o : n <= e && e < t);
      }),
    a =
      ((e.isActiveItem = o),
      function (e, t) {
        void 0 === e && (e = 0);
        var n = t.activeIndex,
          o = t.itemsInSlide,
          a = t.itemsOffset,
          r = t.infinite;
        (t = t.autoWidth), (o = (0, i.getShiftIndex)(o, a));
        return r ? (t && r ? e - o === n + a : e === n + o) : e === n;
      }),
    r =
      ((e.isTargetItem = a),
      function (e, t) {
        void 0 === e && (e = 0);
        var n = t.itemsInSlide,
          o = t.itemsOffset,
          a = t.itemsCount,
          r = t.infinite;
        t = t.autoWidth;
        return (
          !!r &&
          (t && r ? e < n || a - 1 + n < e : e < (t = (0, i.getShiftIndex)(n, o)) || a - 1 + t < e)
        );
      });
  e.isClonedItem = r;
})(ue);
var le = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.debounce = void 0),
    (e.debounce = function (e, t) {
      function n() {
        i && (clearTimeout(i), (i = void 0));
      }
      void 0 === t && (t = 0);
      var i = void 0;
      return [
        function () {
          for (var o = this, a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
          n(),
            (i = window.setTimeout(function () {
              e.apply(o, a), (i = void 0);
            }, t));
        },
        n,
      ];
    });
})(le);
var ce = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.debug = void 0),
    (e.debug = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    });
})(ce);
var de = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getSlideItemInfo =
      e.getSlideInfo =
      e.getSlideIndexForMultipleItems =
      e.getSlideIndexForNonMultipleItems =
      e.getActiveSlideDotsLength =
      e.getActiveSlideIndex =
        void 0);
  var t =
      ((e.getActiveSlideIndex = function (t, n) {
        var i = (n = n || {}).activeIndex,
          o = n.itemsInSlide;
        (n = n.itemsCount), (i += o);
        return 1 === o
          ? (0, e.getSlideIndexForNonMultipleItems)(i, o, n)
          : (0, e.getSlideIndexForMultipleItems)(i, o, n, t);
      }),
      function (e, t) {
        var n;
        return (
          void 0 === t && (t = 1),
          (e = void 0 === e ? 0 : e) && t ? ((n = Math.floor(e / t)), e % t == 0 ? n - 1 : n) : 0
        );
      }),
    n =
      ((e.getActiveSlideDotsLength = t),
      function (e, t, n) {
        return e < t ? n - t : n < e ? 0 : e - 1;
      }),
    i =
      ((e.getSlideIndexForNonMultipleItems = n),
      function (t, n, i, o) {
        var a = (0, e.getActiveSlideDotsLength)(i, n);
        return t === i + n
          ? 0
          : o || (t < n && 0 !== t)
            ? a
            : 0 === t
              ? i % n == 0
                ? a
                : a - 1
              : 0 < n
                ? Math.floor(t / n) - 1
                : 0;
      }),
    o =
      ((e.getSlideIndexForMultipleItems = i),
      function (e, t) {
        return (
          void 0 === t && (t = 0),
          (e = (e = void 0 === e ? 0 : e) + 1) < 1 ? (e = t) : t < e && (e = 1),
          { item: e, itemsCount: t }
        );
      }),
    a =
      ((e.getSlideInfo = o),
      function (e) {
        var t = (e = e || {}).itemsInSlide,
          n = e.activeIndex,
          i = e.infinite,
          o = e.itemsCount;
        return e.isStageContentPartial
          ? { isPrevSlideDisabled: !0, isNextSlideDisabled: !0 }
          : {
              isPrevSlideDisabled: !1 === i && 0 === n,
              isNextSlideDisabled: !1 === i && o - t <= n,
            };
      });
  e.getSlideItemInfo = a;
})(de);
var fe = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.shouldCancelAutoPlayOnHover =
      e.shouldCancelAutoPlayOnAction =
      e.getItemIndexForDotNavigation =
      e.checkIsTheLastDotIndex =
      e.getDotsNavigationLength =
      e.hasDotForEachSlide =
      e.isStrategy =
      e.shouldDisableButtons =
      e.shouldDisableDots =
      e.shouldDisableControls =
        void 0);
  var t = $;
  function n(n, i) {
    n = (n || {}).controlsStrategy;
    var o = (i = i || {}).itemsInSlide,
      a = i.itemsCount;
    i = i.autoWidth;
    if ((0, e.isStrategy)(n, t.ControlsStrategy.RESPONSIVE)) return !i && o === a;
  }
  (e.shouldDisableControls = n),
    (e.shouldDisableDots = function (e, t) {
      return e.disableDotsControls || n(e, t);
    }),
    (e.shouldDisableButtons = function (e, t) {
      return e.disableButtonsControls || (!e.infinite && n(e, t));
    });
  var i =
      ((e.isStrategy = function (e, t) {
        return void 0 === e && (e = ""), void 0 === t && (t = ""), Boolean(e && e.includes(t));
      }),
      function (n, i) {
        return n || (0, e.isStrategy)(i, t.ControlsStrategy.ALTERNATE);
      }),
    o =
      ((e.hasDotForEachSlide = i),
      function (e, t, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = 1),
          (n = void 0 !== n && n) ? e : (0 !== Number(t) && Math.ceil(e / t)) || 0
        );
      }),
    a =
      ((e.getDotsNavigationLength = o),
      function (e, t, n) {
        return !t && e === n - 1;
      }),
    r =
      ((e.checkIsTheLastDotIndex = a),
      function (e, t, n, i) {
        return (t ? n - i : e * i) || 0;
      }),
    s =
      ((e.getItemIndexForDotNavigation = r),
      function (e) {
        return (
          (e = void 0 === e ? "" : e) === t.AutoPlayStrategy.ACTION || e === t.AutoPlayStrategy.ALL
        );
      }),
    u =
      ((e.shouldCancelAutoPlayOnAction = s),
      function (e) {
        return (
          (e = void 0 === e ? "" : e) === t.AutoPlayStrategy.DEFAULT || e === t.AutoPlayStrategy.ALL
        );
      });
  e.shouldCancelAutoPlayOnHover = u;
})(fe),
  (function (e) {
    var t = Object.create
        ? function (e, t, n, i) {
            void 0 === i && (i = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (o && ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, i, o);
          }
        : function (e, t, n, i) {
            e[(i = void 0 === i ? n : i)] = t[n];
          },
      n = function (e, n) {
        for (var i in e)
          "default" === i || Object.prototype.hasOwnProperty.call(n, i) || t(n, e, i);
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n(oe, e),
      n(ae, e),
      n(ue, e),
      n(le, e),
      n(se, e),
      n(ce, e),
      n(de, e),
      n(fe, e),
      n(re, e);
  })(ie),
  (function (t) {
    var n =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SlideInfo = void 0),
        (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(e)),
      i = $,
      o = ie;
    t.SlideInfo = function (e) {
      var t = e.activeIndex,
        a = e.itemsCount;
      (e = e.renderSlideInfo), (t = (0, o.getSlideInfo)(t, a).item);
      return "function" == typeof e
        ? n.default.createElement(
            "div",
            { className: i.Classnames.SLIDE_INFO },
            e({ item: t, itemsCount: a })
          )
        : ((e = (0, o.concatClassnames)(i.Classnames.SLIDE_INFO_ITEM, i.Modifiers.SEPARATOR)),
          n.default.createElement(
            "div",
            { className: i.Classnames.SLIDE_INFO },
            n.default.createElement("span", { className: i.Classnames.SLIDE_INFO_ITEM }, t),
            n.default.createElement("span", { className: e }, "/"),
            n.default.createElement("span", { className: i.Classnames.SLIDE_INFO_ITEM }, a)
          ));
    };
  })(ne);
var he = {};
!(function (t) {
  var n =
    (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.StageItem = void 0),
    (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(e));
  t.StageItem = function (e) {
    var t = e.item,
      i = e.className;
    e = e.styles;
    return n.default.createElement("li", { style: e, className: i }, t);
  };
})(he);
var pe = {};
!(function (t) {
  var n =
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DotsNavigation = void 0),
      (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(e)),
    i = $,
    o = ie;
  t.DotsNavigation = function (e) {
    var t = e.state,
      a = e.onClick,
      r = e.onMouseEnter,
      s = e.onMouseLeave,
      u = e.controlsStrategy,
      l = e.renderDotsItem,
      c = t.itemsCount,
      d = t.itemsInSlide,
      f = t.infinite,
      h = ((e = t.autoWidth), t.activeIndex),
      p = (0, o.getSlideItemInfo)(t).isNextSlideDisabled,
      v = (0, o.hasDotForEachSlide)(e, u),
      m = (0, o.getDotsNavigationLength)(c, d, v);
    return n.default.createElement(
      "ul",
      { className: i.Classnames.DOTS },
      Array.from({ length: c }).map(function (e, u) {
        var g, y, P;
        if (u < m)
          return (
            (y = (0, o.checkIsTheLastDotIndex)(u, Boolean(f), m)),
            (g = (0, o.getItemIndexForDotNavigation)(u, y, c, d)),
            (y = (0, o.getActiveSlideIndex)(p, t)),
            v && ((y = h) < 0 ? (y = c - 1) : c <= h && (y = 0), (g = u)),
            (y = y === u ? i.Modifiers.ACTIVE : ""),
            (P = l ? i.Modifiers.CUSTOM : ""),
            (P = (0, o.concatClassnames)(i.Classnames.DOTS_ITEM, y, P)),
            n.default.createElement(
              "li",
              {
                key: "dot-item-".concat(u),
                onMouseEnter: r,
                onMouseLeave: s,
                onClick: function () {
                  return a(g);
                },
                className: P,
              },
              l && l({ isActive: Boolean(y), activeIndex: u })
            )
          );
      })
    );
  };
})(pe);
var ve = {};
!(function (t) {
  var n =
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PlayPauseButton = void 0),
      (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(e)),
    i = $,
    o = ie;
  t.PlayPauseButton = function (e) {
    var t = e.isPlaying,
      a = e.onClick;
    return "function" == typeof (e = e.renderPlayPauseButton)
      ? n.default.createElement(
          "div",
          { className: i.Classnames.PLAY_BTN, onClick: a },
          e({ isPlaying: t })
        )
      : ((e = t ? i.Modifiers.PAUSE : ""),
        (t = (0, o.concatClassnames)(i.Classnames.PLAY_BTN_ITEM, e)),
        n.default.createElement(
          "div",
          { className: i.Classnames.PLAY_BTN },
          n.default.createElement(
            "div",
            { className: i.Classnames.PLAY_BTN_WRAPPER },
            n.default.createElement("div", { onClick: a, className: t })
          )
        ));
  };
})(ve);
var me = {};
!(function (t) {
  var n =
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PrevNextButton = void 0),
      (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(e)),
    i = $,
    o = ie;
  t.PrevNextButton = function (e) {
    var t,
      a = e.name,
      r = e.isDisabled,
      s = e.onClick,
      u = e.renderPrevButton;
    e = e.renderNextButton;
    return "function" == typeof u
      ? n.default.createElement(
          "div",
          { className: i.Classnames.BUTTON_PREV, onClick: s },
          u({ isDisabled: r })
        )
      : "function" == typeof e
        ? n.default.createElement(
            "div",
            { className: i.Classnames.BUTTON_NEXT, onClick: s },
            e({ isDisabled: r })
          )
        : ((e = (u = "prev" === a) ? "<" : ">"),
          (a = u ? i.Classnames.BUTTON_PREV : i.Classnames.BUTTON_NEXT),
          (t = u ? i.Classnames.BUTTON_PREV_WRAPPER : i.Classnames.BUTTON_NEXT_WRAPPER),
          (u = u ? i.Classnames.BUTTON_PREV_ITEM : i.Classnames.BUTTON_NEXT_ITEM),
          (r = r ? i.Modifiers.INACTIVE : ""),
          (u = (0, o.concatClassnames)(u, r)),
          n.default.createElement(
            "div",
            { className: a },
            n.default.createElement(
              "div",
              { className: t },
              n.default.createElement(
                "p",
                {
                  className: u,
                  onClick: function (e) {
                    return s(e);
                  },
                },
                n.default.createElement("span", { "data-area": e })
              )
            )
          ));
  };
})(me),
  (function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PrevNextButton =
        e.PlayPauseButton =
        e.DotsNavigation =
        e.StageItem =
        e.SlideInfo =
          void 0);
    var t = ne,
      n =
        (Object.defineProperty(e, "SlideInfo", {
          enumerable: !0,
          get: function () {
            return t.SlideInfo;
          },
        }),
        he),
      i =
        (Object.defineProperty(e, "StageItem", {
          enumerable: !0,
          get: function () {
            return n.StageItem;
          },
        }),
        pe),
      o =
        (Object.defineProperty(e, "DotsNavigation", {
          enumerable: !0,
          get: function () {
            return i.DotsNavigation;
          },
        }),
        ve),
      a =
        (Object.defineProperty(e, "PlayPauseButton", {
          enumerable: !0,
          get: function () {
            return o.PlayPauseButton;
          },
        }),
        me);
    Object.defineProperty(e, "PrevNextButton", {
      enumerable: !0,
      get: function () {
        return a.PrevNextButton;
      },
    });
  })(te),
  (function (t) {
    var n,
      i =
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array
              ? function (e, t) {
                  e.__proto__ = t;
                }
              : function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }))(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " + String(t) + " is not a constructor or null"
            );
          function i() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()));
        }),
      o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      a = Object.create
        ? function (e, t, n, i) {
            void 0 === i && (i = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (o && ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, i, o);
          }
        : function (e, t, n, i) {
            e[(i = void 0 === i ? n : i)] = t[n];
          },
      s = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          },
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && a(t, e, n);
        return s(t, e), t;
      },
      l = function (e, t, n, i) {
        return new (n = n || Promise)(function (t, o) {
          function a(e) {
            try {
              s(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function r(e) {
            try {
              s(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var i;
            e.done
              ? t(e.value)
              : ((i = e.value) instanceof n
                  ? i
                  : new n(function (e) {
                      e(i);
                    })
                ).then(a, r);
          }
          s((i = i.apply(e, [])).next());
        });
      },
      c = function (e, t) {
        var n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          r = { next: s(0), throw: s(1), return: s(2) };
        return (
          "function" == typeof Symbol &&
            (r[Symbol.iterator] = function () {
              return this;
            }),
          r
        );
        function s(r) {
          return function (s) {
            var u = [r, s];
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  i &&
                    (o =
                      2 & u[0]
                        ? i.return
                        : u[0]
                          ? i.throw || ((o = i.return) && o.call(i), 0)
                          : i.next) &&
                    !(o = o.call(i, u[1])).done)
                )
                  return o;
                switch (((i = 0), (u = o ? [2 & u[0], o.value] : u)[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return a.label++, { value: u[1], done: !1 };
                  case 5:
                    a.label++, (i = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = 0 < (o = a.trys).length && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) a.label = u[1];
                    else if (6 === u[0] && a.label < o[1]) (a.label = o[1]), (o = u);
                    else {
                      if (!(o && a.label < o[2])) {
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                      }
                      (a.label = o[2]), a.ops.push(u);
                    }
                }
                u = t.call(e, a);
              } catch (s) {
                (u = [6, s]), (i = 0);
              } finally {
                n = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      },
      d = function (e) {
        return e && e.__esModule ? e : { default: e };
      },
      f = (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Link = void 0), d(e)),
      h = d(r),
      p = Q,
      v = d(ee),
      m = ((t.Link = v.default), u(te)),
      g = u(ie),
      y = $,
      P =
        ((function (e, t) {
          for (var n in e)
            "default" === n || Object.prototype.hasOwnProperty.call(t, n) || a(t, e, n);
        })($, t),
        (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.swipeListener = null),
              (n._handleKeyboardEvents = function (e) {
                switch (e.code) {
                  case "Space":
                    return n.props.autoPlay && n._handlePlayPauseToggle();
                  case "ArrowLeft":
                    return n.slidePrev(e);
                  case "ArrowRight":
                    return n.slideNext(e);
                }
              }),
              (n._handleBeforeSlideEnd = function (e) {
                return l(n, 0, void 0, function () {
                  var t, n, i;
                  return c(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (n = this.state),
                          (i = n.activeIndex),
                          (t = n.itemsCount),
                          (n = n.fadeoutAnimationProcessing),
                          g.shouldRecalculateSlideIndex(i, t)
                            ? ((i = g.getUpdateSlidePositionIndex(i, t)),
                              [4, this._handleUpdateSlidePosition(i)])
                            : [3, 2]
                        );
                      case 1:
                        return o.sent(), [3, 4];
                      case 2:
                        return n
                          ? [
                              4,
                              this.setState({
                                fadeoutAnimationIndex: null,
                                fadeoutAnimationPosition: null,
                                fadeoutAnimationProcessing: !1,
                              }),
                            ]
                          : [3, 4];
                      case 3:
                        o.sent(), (o.label = 4);
                      case 4:
                        return this._handleSlideChanged(e), [2];
                    }
                  });
                });
              }),
              (n._handleMouseEnter = function () {
                var e = n.props.autoPlayStrategy;
                g.shouldCancelAutoPlayOnHover(e) &&
                  n.state.isAutoPlaying &&
                  ((n.isHovered = !0), n._handlePause());
              }),
              (n._handleMouseLeave = function () {
                n.state.isAutoPlaying && ((n.isHovered = !1), n._handlePlay());
              }),
              (n._handlePause = function () {
                n._clearAutoPlayTimeout();
              }),
              (n._handlePlayPauseToggle = function () {
                return l(n, 0, void 0, function () {
                  var e;
                  return c(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (e = this.state.isAutoPlaying),
                          (this.hasUserAction = !0),
                          [4, this.setState({ isAutoPlaying: !e, isAutoPlayCanceledOnAction: !0 })]
                        );
                      case 1:
                        return t.sent(), e ? this._handlePause() : this._handlePlay(), [2];
                    }
                  });
                });
              }),
              (n._setRootComponentRef = function (e) {
                return (n.rootElement = e);
              }),
              (n._setStageComponentRef = function (e) {
                return (n.stageComponent = e);
              }),
              (n._renderStageItem = function (e, t) {
                var i = g.getRenderStageItemStyles(t, n.state),
                  o = g.getRenderStageItemClasses(t, n.state);
                return f.default.createElement(m.StageItem, {
                  styles: i,
                  className: o,
                  key: "stage-item-".concat(t),
                  item: e,
                });
              }),
              (n._renderSlideInfo = function () {
                var e = n.props.renderSlideInfo,
                  t = (i = n.state).activeIndex,
                  i = i.itemsCount;
                return f.default.createElement(m.SlideInfo, {
                  itemsCount: i,
                  activeIndex: t,
                  renderSlideInfo: e,
                });
              }),
              (n.state = g.calculateInitialState(t, null)),
              (n.isHovered = !1),
              (n.isAnimationDisabled = !1),
              (n.isTouchMoveProcessStarted = !1),
              (n.cancelTouchAnimations = !1),
              (n.hasUserAction = !1),
              (n.rootElement = null),
              (n.rootComponentDimensions = {}),
              (n.stageComponent = null),
              (n.startTouchmovePosition = void 0),
              (n.slideTo = n.slideTo.bind(n)),
              (n.slidePrev = n.slidePrev.bind(n)),
              (n.slideNext = n.slideNext.bind(n)),
              (n._handleTouchmove = n._handleTouchmove.bind(n)),
              (n._handleTouchend = n._handleTouchend.bind(n)),
              (n._handleDotClick = n._handleDotClick.bind(n)),
              (n._handleResize = n._handleResize.bind(n)),
              (t = g.debounce(n._handleResize, 100)),
              (n._handleResizeDebounced = t[0]),
              (n._cancelResizeDebounced = t[1]),
              n
            );
          }
          return (
            i(t, e),
            (t.prototype.componentDidMount = function () {
              return l(this, 0, void 0, function () {
                return c(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this._setInitialState()];
                    case 1:
                      return (
                        e.sent(),
                        this._addEventListeners(),
                        this._setupSwipeHandlers(),
                        this.props.autoPlay && this._handlePlay(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = (p = this.props).activeIndex,
                n = p.animationDuration,
                i = p.autoWidth,
                o = p.children,
                a = p.infinite,
                r = p.items,
                s = p.paddingLeft,
                u = p.paddingRight,
                l = p.responsive,
                c = p.swipeExtraPadding,
                d = p.mouseTracking,
                f = p.swipeDelta,
                h = p.touchTracking,
                p = p.touchMoveDefaultEvents;
              (o && e.children !== o) ||
              e.autoWidth !== i ||
              e.infinite !== a ||
              e.items !== r ||
              e.paddingLeft !== s ||
              e.paddingRight !== u ||
              e.responsive !== l ||
              e.swipeExtraPadding !== c
                ? this._updateComponent()
                : (e.animationDuration !== n && this.setState({ animationDuration: n }),
                  e.activeIndex !== t && this.slideTo(t, y.EventType.UPDATE)),
                (e.swipeDelta === f &&
                  e.mouseTracking === d &&
                  e.touchTracking === h &&
                  e.touchMoveDefaultEvents === p) ||
                  this._updateSwipeProps(),
                this.props.keyboardNavigation !== e.keyboardNavigation &&
                  this._updateEventListeners();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._cancelResizeDebounced(),
                this._cancelTimeoutAnimations(),
                this._removeEventListeners();
            }),
            Object.defineProperty(t.prototype, "eventObject", {
              get: function () {
                var e = (t = this.state).itemsInSlide,
                  t = t.activeIndex,
                  n = (i = g.getSlideItemInfo(this.state)).isNextSlideDisabled,
                  i = i.isPrevSlideDisabled;
                return {
                  item: t,
                  slide: g.getActiveSlideIndex(n, this.state),
                  itemsInSlide: e,
                  isNextSlideDisabled: n,
                  isPrevSlideDisabled: i,
                  type: y.EventType.ACTION,
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isFadeoutAnimationAllowed", {
              get: function () {
                var e = this.state.itemsInSlide,
                  t = (o = this.props).animationType,
                  n = o.paddingLeft,
                  i = o.paddingRight,
                  o = o.autoWidth;
                return 1 === e && t === y.AnimationType.FADEOUT && !(n || i || o);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "touchmovePosition", {
              get: function () {
                return void 0 !== this.startTouchmovePosition
                  ? this.startTouchmovePosition
                  : this.state.translate3d;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.slideTo = function (e, t) {
              var n, i, o;
              void 0 === e && (e = 0),
                this._handlePause(),
                this.isFadeoutAnimationAllowed
                  ? ((n = g.getUpdateSlidePositionIndex(e, this.state.itemsCount)),
                    (i = g.getFadeoutAnimationPosition(n, this.state)),
                    (o = g.getFadeoutAnimationIndex(this.state)),
                    this._handleSlideTo({
                      activeIndex: n,
                      fadeoutAnimationIndex: o,
                      fadeoutAnimationPosition: i,
                      eventType: t,
                    }))
                  : this._handleSlideTo({ activeIndex: e, eventType: t });
            }),
            (t.prototype.slidePrev = function (e) {
              this._handlePause(), e && e.isTrusted && (this.hasUserAction = !0);
              var t, n;
              e = this.state.activeIndex - 1;
              this.isFadeoutAnimationAllowed
                ? ((t = -this.state.stageWidth),
                  (n = g.getFadeoutAnimationIndex(this.state)),
                  this._handleSlideTo({
                    activeIndex: e,
                    fadeoutAnimationIndex: n,
                    fadeoutAnimationPosition: t,
                  }))
                : this._handleSlideTo({ activeIndex: e });
            }),
            (t.prototype.slideNext = function (e) {
              this._handlePause(), e && e.isTrusted && (this.hasUserAction = !0);
              var t, n;
              e = this.state.activeIndex + 1;
              this.isFadeoutAnimationAllowed
                ? ((t = this.state.stageWidth),
                  (n = g.getFadeoutAnimationIndex(this.state)),
                  this._handleSlideTo({
                    activeIndex: e,
                    fadeoutAnimationIndex: n,
                    fadeoutAnimationPosition: t,
                  }))
                : this._handleSlideTo({ activeIndex: e });
            }),
            (t.prototype._addEventListeners = function () {
              window.addEventListener("resize", this._handleResizeDebounced),
                this.props.keyboardNavigation &&
                  window.addEventListener("keyup", this._handleKeyboardEvents);
            }),
            (t.prototype._removeEventListeners = function () {
              this.swipeListener && this.swipeListener.destroy(),
                window.removeEventListener("resize", this._handleResizeDebounced),
                window.removeEventListener("keyup", this._handleKeyboardEvents);
            }),
            (t.prototype._updateEventListeners = function () {
              this.props.keyboardNavigation
                ? window.addEventListener("keyup", this._handleKeyboardEvents)
                : window.removeEventListener("keyup", this._handleKeyboardEvents);
            }),
            (t.prototype._handleResize = function (e) {
              return l(this, 0, void 0, function () {
                var t, n, i, a;
                return c(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (i = this.props.onResizeEvent),
                        (n = g.getElementDimensions(this.rootElement)),
                        (i || g.shouldHandleResizeEvent)(e, this.rootComponentDimensions, n)
                          ? (this._cancelTimeoutAnimations(),
                            (this.rootComponentDimensions = n),
                            (i = this.state),
                            (n = i.itemsCount),
                            (t = i.isAutoPlaying),
                            (i = g.getUpdateSlidePositionIndex(this.state.activeIndex, n)),
                            (n = g.calculateInitialState(
                              o(o({}, this.props), { activeIndex: i }),
                              this.stageComponent
                            )),
                            (i = g.getTranslate3dProperty(n.activeIndex, n)),
                            (a = o(o({}, n), { translate3d: i, isAutoPlaying: t })),
                            g.animate(this.stageComponent, { position: -i }),
                            [4, this.setState(a)])
                          : [3, 2]
                      );
                    case 1:
                      r.sent(),
                        this._handleResized({ itemsInSlide: a.itemsInSlide }),
                        (this.isAnimationDisabled = !1),
                        t && this._handlePlay(),
                        (r.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype._handleTouchmove = function (e, t) {
              var n = t.absY,
                i = t.absX,
                o = t.deltaX,
                a = ((t = this.props.swipeDelta), (l = this.state).swipeShiftValue),
                r = l.swipeLimitMin,
                s = l.swipeLimitMax,
                u = l.infinite,
                l = l.fadeoutAnimationProcessing;
              if (
                ((this.hasUserAction = !0),
                !(l || (!this.isTouchMoveProcessStarted && g.isVerticalTouchmoveDetected(i, n, t))))
              ) {
                this.isTouchMoveProcessStarted ||
                  (this._cancelTimeoutAnimations(),
                  this._setTouchmovePosition(),
                  (this.isAnimationDisabled = !0),
                  (this.isTouchMoveProcessStarted = !0),
                  this._handleSlideChange());
                var c = g.getTouchmoveTranslatePosition(o, this.touchmovePosition);
                if (!1 === u)
                  return r < c || c < -s
                    ? void 0
                    : void g.animate(this.stageComponent, { position: c });
                if (g.shouldRecalculateSwipePosition(c, r, s))
                  try {
                    !(function e() {
                      g.getIsLeftDirection(o) ? (c += a) : (c += -a),
                        g.shouldRecalculateSwipePosition(c, r, s) && e();
                    })();
                  } catch (e) {
                    g.debug(e);
                  }
                g.animate(this.stageComponent, { position: c });
              }
            }),
            (t.prototype._handleTouchend = function (e, t) {
              var n, i, o;
              t = t.deltaX;
              this._clearTouchmovePosition(),
                this.isTouchMoveProcessStarted &&
                  ((this.isTouchMoveProcessStarted = !1),
                  (n = this.state.animationDuration),
                  (i = this.props.animationEasingFunction),
                  (o = g.getTranslateXProperty(this.stageComponent)),
                  (t = g.getSwipeTouchendPosition(this.state, t, o)),
                  g.animate(this.stageComponent, {
                    position: t,
                    animationDuration: n,
                    animationEasingFunction: i,
                  }),
                  this._handleBeforeTouchEnd(t));
            }),
            (t.prototype._handleBeforeTouchEnd = function (e) {
              var t = this,
                n = this.state.animationDuration;
              this.touchEndTimeoutId = window.setTimeout(function () {
                return l(t, 0, void 0, function () {
                  var t,
                    n,
                    i,
                    o = this;
                  return c(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (t = g.getSwipeTouchendIndex(e, this.state)),
                          (n = g.getTranslate3dProperty(t, this.state)),
                          g.animate(this.stageComponent, { position: -n }),
                          (i = g.getTransitionProperty()),
                          [4, this.setState({ activeIndex: t, translate3d: n, transition: i })]
                        );
                      case 1:
                        return (
                          a.sent(),
                          requestAnimationFrame(function () {
                            return o._handleSlideChanged();
                          }),
                          [2]
                        );
                    }
                  });
                });
              }, n);
            }),
            (t.prototype._handleSlideTo = function (e) {
              var t,
                n = void 0 === (t = e.activeIndex) ? 0 : t,
                i = void 0 === (t = e.fadeoutAnimationIndex) ? null : t,
                o = void 0 === (t = e.fadeoutAnimationPosition) ? null : t,
                a = e.eventType;
              return l(this, 0, void 0, function () {
                var e,
                  t,
                  r,
                  s,
                  u = this;
                return c(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (r = t.infinite),
                        (t = t.animationEasingFunction),
                        (e = this.state),
                        (s = e.itemsCount),
                        (e = e.animationDuration),
                        this.isAnimationDisabled ||
                        this.state.activeIndex === n ||
                        (!r && g.shouldCancelSlideAnimation(n, s))
                          ? [2]
                          : ((this.isAnimationDisabled = !0),
                            this._cancelTimeoutAnimations(),
                            this._handleSlideChange(a),
                            (r = !1),
                            (s = g.getTranslate3dProperty(n, this.state)),
                            (t =
                              null !== i && null !== o
                                ? ((r = !0), g.getTransitionProperty())
                                : g.getTransitionProperty({
                                    animationDuration: e,
                                    animationEasingFunction: t,
                                  })),
                            [
                              4,
                              this.setState({
                                activeIndex: n,
                                transition: t,
                                translate3d: s,
                                animationDuration: e,
                                fadeoutAnimationIndex: i,
                                fadeoutAnimationPosition: o,
                                fadeoutAnimationProcessing: r,
                              }),
                            ])
                      );
                    case 1:
                      return (
                        l.sent(),
                        (this.slideEndTimeoutId = window.setTimeout(function () {
                          return u._handleBeforeSlideEnd(a);
                        }, e)),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype._handleUpdateSlidePosition = function (e) {
              return l(this, 0, void 0, function () {
                var t, n, i;
                return c(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = this.state.animationDuration),
                        (n = g.getTranslate3dProperty(e, this.state)),
                        (i = g.getTransitionProperty({ animationDuration: 0 })),
                        [
                          4,
                          this.setState({
                            activeIndex: e,
                            translate3d: n,
                            transition: i,
                            animationDuration: t,
                            fadeoutAnimationIndex: null,
                            fadeoutAnimationPosition: null,
                            fadeoutAnimationProcessing: !1,
                          }),
                        ]
                      );
                    case 1:
                      return o.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype._handleUpdated = function () {
              this.props.onUpdated &&
                this.props.onUpdated(o(o({}, this.eventObject), { type: y.EventType.UPDATE }));
            }),
            (t.prototype._handleResized = function (e) {
              void 0 === e && (e = {}),
                this.props.onResized &&
                  this.props.onResized(
                    o(o(o({}, this.eventObject), e), { type: y.EventType.RESIZE })
                  );
            }),
            (t.prototype._handleSlideChange = function (e) {
              this.props.onSlideChange &&
                ((e = e ? o(o({}, this.eventObject), { type: e }) : this.eventObject),
                this.props.onSlideChange(e));
            }),
            (t.prototype._handleSlideChanged = function (e) {
              return l(this, 0, void 0, function () {
                var t, n, i, a;
                return c(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (n = this.state),
                        (t = n.isAutoPlaying),
                        (n = n.isAutoPlayCanceledOnAction),
                        (i = this.props),
                        (a = i.autoPlayStrategy),
                        (i = i.onSlideChanged),
                        g.shouldCancelAutoPlayOnAction(a) && this.hasUserAction && !n
                          ? [
                              4,
                              this.setState({ isAutoPlayCanceledOnAction: !0, isAutoPlaying: !1 }),
                            ]
                          : [3, 2]
                      );
                    case 1:
                      return r.sent(), [3, 3];
                    case 2:
                      t && this._handlePlay(), (r.label = 3);
                    case 3:
                      return (
                        (this.isAnimationDisabled = !1),
                        i &&
                          ((a = e ? o(o({}, this.eventObject), { type: e }) : this.eventObject),
                          i(a)),
                        e === y.EventType.UPDATE && this._handleUpdated(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype._handleDotClick = function (e) {
              (this.hasUserAction = !0), this.slideTo(e);
            }),
            (t.prototype._handlePlay = function () {
              this._setAutoPlayInterval();
            }),
            (t.prototype._cancelTimeoutAnimations = function () {
              this._clearAutoPlayTimeout(),
                this._clearSlideEndTimeout(),
                this.clearTouchendTimeout();
            }),
            (t.prototype._clearAutoPlayTimeout = function () {
              window.clearTimeout(this.autoPlayTimeoutId), (this.autoPlayTimeoutId = void 0);
            }),
            (t.prototype._clearSlideEndTimeout = function () {
              clearTimeout(this.slideEndTimeoutId), (this.slideEndTimeoutId = void 0);
            }),
            (t.prototype.clearTouchendTimeout = function () {
              clearTimeout(this.touchEndTimeoutId), (this.touchEndTimeoutId = void 0);
            }),
            (t.prototype._clearTouchmovePosition = function () {
              this.startTouchmovePosition = void 0;
            }),
            (t.prototype._setTouchmovePosition = function () {
              var e = g.getTranslateXProperty(this.stageComponent);
              this.startTouchmovePosition = -e;
            }),
            (t.prototype._setInitialState = function () {
              return l(this, 0, void 0, function () {
                var e;
                return c(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = g.calculateInitialState(this.props, this.stageComponent)),
                        (this.rootComponentDimensions = g.getElementDimensions(this.rootElement)),
                        [4, this.setState(e)]
                      );
                    case 1:
                      return (
                        t.sent(),
                        this.props.onInitialized &&
                          this.props.onInitialized(
                            o(o({}, this.eventObject), { type: y.EventType.INIT })
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype._setAutoPlayInterval = function () {
              var e = this,
                t = (n = this.props).autoPlayDirection,
                n = n.autoPlayInterval;
              this.autoPlayTimeoutId = window.setTimeout(function () {
                e.isHovered || (t === y.AutoplayDirection.RTL ? e.slidePrev() : e.slideNext());
              }, n);
            }),
            (t.prototype._setupSwipeHandlers = function () {
              (this.swipeListener = new h.default({
                element: this.rootElement,
                delta: this.props.swipeDelta,
                onSwiping: this._handleTouchmove,
                onSwiped: this._handleTouchend,
                rotationAngle: 5,
                mouseTrackingEnabled: this.props.mouseTracking,
                touchTrackingEnabled: this.props.touchTracking,
                preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
                preventTrackingOnMouseleave: !0,
              })),
                this.swipeListener.init();
            }),
            (t.prototype._updateComponent = function () {
              var e = this,
                t = (this.props.syncStateOnPropsUpdate ? this.state : this.props).activeIndex,
                n = o(o({}, this.props), { activeIndex: t });
              this._cancelTimeoutAnimations(),
                (this.isAnimationDisabled = !1),
                this.state.isAutoPlaying && this._handlePlay(),
                this.setState({ clones: g.createClones(n) }),
                requestAnimationFrame(function () {
                  e.setState(g.calculateInitialState(n, e.stageComponent), function () {
                    return e._handleUpdated();
                  });
                });
            }),
            (t.prototype._updateSwipeProps = function () {
              this.swipeListener &&
                this.swipeListener.update({
                  delta: this.props.swipeDelta,
                  mouseTrackingEnabled: this.props.mouseTracking,
                  touchTrackingEnabled: this.props.touchTracking,
                  preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
                });
            }),
            (t.prototype._renderDotsNavigation = function () {
              var e = (t = this.props).renderDotsItem,
                t = t.controlsStrategy;
              return f.default.createElement(m.DotsNavigation, {
                state: this.state,
                onClick: this._handleDotClick,
                renderDotsItem: e,
                controlsStrategy: t,
              });
            }),
            (t.prototype._renderPrevButton = function () {
              var e = this.props.renderPrevButton,
                t = g.getSlideItemInfo(this.state).isPrevSlideDisabled;
              return f.default.createElement(m.PrevNextButton, {
                name: "prev",
                onClick: this.slidePrev,
                isDisabled: t,
                renderPrevButton: e,
              });
            }),
            (t.prototype._renderNextButton = function () {
              var e = this.props.renderNextButton,
                t = g.getSlideItemInfo(this.state).isNextSlideDisabled;
              return f.default.createElement(m.PrevNextButton, {
                name: "next",
                onClick: this.slideNext,
                isDisabled: t,
                renderNextButton: e,
              });
            }),
            (t.prototype._renderPlayPauseButton = function () {
              var e = this.props.renderPlayPauseButton,
                t = this.state.isAutoPlaying;
              return f.default.createElement(m.PlayPauseButton, {
                isPlaying: t,
                onClick: this._handlePlayPauseToggle,
                renderPlayPauseButton: e,
              });
            }),
            (t.prototype.render = function () {
              var e = (i = this.state).translate3d,
                t = i.clones,
                n = i.transition,
                i = i.canUseDom,
                o = g.shouldDisableDots(this.props, this.state),
                a = g.shouldDisableButtons(this.props, this.state),
                r = g.getRenderWrapperStyles(this.props, this.state, this.stageComponent);
              (e = g.getRenderStageStyles({ translate3d: e }, { transition: n })),
                (n = this.props.ssrSilentMode || i ? "" : y.Modifiers.SSR),
                (i = g.concatClassnames(y.Classnames.ROOT, n));
              return f.default.createElement(
                "div",
                { className: i },
                f.default.createElement(
                  "div",
                  { ref: this._setRootComponentRef },
                  f.default.createElement(
                    "div",
                    {
                      style: r,
                      className: y.Classnames.WRAPPER,
                      onMouseEnter: this._handleMouseEnter,
                      onMouseLeave: this._handleMouseLeave,
                    },
                    f.default.createElement(
                      "ul",
                      { style: e, className: y.Classnames.STAGE, ref: this._setStageComponentRef },
                      t.map(this._renderStageItem)
                    )
                  )
                ),
                o ? null : this._renderDotsNavigation(),
                a ? null : this._renderPrevButton(),
                a ? null : this._renderNextButton(),
                this.props.disableSlideInfo ? null : this._renderSlideInfo(),
                this.props.autoPlayControls ? this._renderPlayPauseButton() : null
              );
            }),
            (t.defaultProps = p.defaultProps),
            t
          );
        })(f.default.PureComponent));
    t.default = P;
  })(a);
const ge = t(a);
export { ge as A };
