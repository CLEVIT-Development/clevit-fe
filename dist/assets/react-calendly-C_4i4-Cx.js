import { a as e, r as n } from "./react-CvSS68GI.js";

var t = function (n, e) {
  return (t =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (n, e) {
        n.__proto__ = e;
      }) ||
    function (n, e) {
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    })(n, e);
};
function o(n, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function o() {
    this.constructor = n;
  }
  t(n, e), (n.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
}
var l = function () {
  return (
    (l =
      Object.assign ||
      function (n) {
        for (var e, t = 1, o = arguments.length; t < o; t++)
          for (var l in (e = arguments[t]))
            Object.prototype.hasOwnProperty.call(e, l) && (n[l] = e[l]);
        return n;
      }),
    l.apply(this, arguments)
  );
};
"function" == typeof SuppressedError && SuppressedError;
var a, i;
function r(n) {
  return "#" === n.charAt(0) ? n.slice(1) : n;
}
!(function (n, e) {
  void 0 === e && (e = {});
  var t = e.insertAt;
  if ("undefined" != typeof document) {
    var o = document.head || document.getElementsByTagName("head")[0],
      l = document.createElement("style");
    (l.type = "text/css"),
      "top" === t && o.firstChild ? o.insertBefore(l, o.firstChild) : o.appendChild(l),
      l.styleSheet ? (l.styleSheet.cssText = n) : l.appendChild(document.createTextNode(n));
  }
})(
  "/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"
),
  ((i = a || (a = {})).PROFILE_PAGE_VIEWED = "calendly.profile_page_viewed"),
  (i.EVENT_TYPE_VIEWED = "calendly.event_type_viewed"),
  (i.DATE_AND_TIME_SELECTED = "calendly.date_and_time_selected"),
  (i.EVENT_SCHEDULED = "calendly.event_scheduled"),
  (i.PAGE_HEIGHT = "calendly.page_height");
var c = function (n) {
    var e,
      t = n.url,
      o = n.prefill,
      l = void 0 === o ? {} : o,
      a = n.pageSettings,
      i = void 0 === a ? {} : a,
      c = n.utm,
      d = void 0 === c ? {} : c,
      u = n.embedType,
      m =
        ((null == (e = i) ? void 0 : e.primaryColor) && (e.primaryColor = r(e.primaryColor)),
        (null == e ? void 0 : e.textColor) && (e.textColor = r(e.textColor)),
        (null == e ? void 0 : e.backgroundColor) && (e.backgroundColor = r(e.backgroundColor)),
        e),
      y = m.backgroundColor,
      h = m.hideEventTypeDetails,
      f = m.hideLandingPageDetails,
      g = m.primaryColor,
      b = m.textColor,
      E = m.hideGdprBanner,
      v = l.customAnswers,
      C = l.date,
      w = l.email,
      x = l.firstName,
      _ = l.guests,
      k = l.lastName,
      S = l.location,
      L = l.smsReminderNumber,
      T = l.name,
      I = d.utmCampaign,
      N = d.utmContent,
      P = d.utmMedium,
      D = d.utmSource,
      O = d.utmTerm,
      R = d.salesforce_uuid,
      U = t.indexOf("?"),
      A = U > -1,
      j = t.slice(U + 1),
      M = A ? t.slice(0, U) : t,
      V = [
        A ? j : null,
        y ? "background_color=".concat(y) : null,
        h ? "hide_event_type_details=1" : null,
        f ? "hide_landing_page_details=1" : null,
        g ? "primary_color=".concat(g) : null,
        b ? "text_color=".concat(b) : null,
        E ? "hide_gdpr_banner=1" : null,
        T ? "name=".concat(encodeURIComponent(T)) : null,
        L ? "phone_number=".concat(encodeURIComponent(L)) : null,
        S ? "location=".concat(encodeURIComponent(S)) : null,
        x ? "first_name=".concat(encodeURIComponent(x)) : null,
        k ? "last_name=".concat(encodeURIComponent(k)) : null,
        _ ? "guests=".concat(_.map(encodeURIComponent).join(",")) : null,
        w ? "email=".concat(encodeURIComponent(w)) : null,
        C && C instanceof Date ? "date=".concat(s(C)) : null,
        I ? "utm_campaign=".concat(encodeURIComponent(I)) : null,
        N ? "utm_content=".concat(encodeURIComponent(N)) : null,
        P ? "utm_medium=".concat(encodeURIComponent(P)) : null,
        D ? "utm_source=".concat(encodeURIComponent(D)) : null,
        O ? "utm_term=".concat(encodeURIComponent(O)) : null,
        R ? "salesforce_uuid=".concat(encodeURIComponent(R)) : null,
        u ? "embed_type=".concat(u) : null,
        "embed_domain=1",
      ]
        .concat(v ? p(v) : [])
        .filter(function (n) {
          return null !== n;
        })
        .join("&");
    return "".concat(M, "?").concat(V);
  },
  s = function (n) {
    var e = n.getMonth() + 1,
      t = n.getDate();
    return [n.getFullYear(), e < 10 ? "0".concat(e) : e, t < 10 ? "0".concat(t) : t].join("-");
  },
  d = /^a\d{1,2}$/,
  p = function (n) {
    var e = Object.keys(n).filter(function (n) {
      return n.match(d);
    });
    return e.length
      ? e.map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(n[e]));
        })
      : [];
  },
  u = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      o(t, e),
      (t.prototype.render = function () {
        return n.createElement(
          "div",
          { className: "calendly-spinner" },
          n.createElement("div", { className: "calendly-bounce1" }),
          n.createElement("div", { className: "calendly-bounce2" }),
          n.createElement("div", { className: "calendly-bounce3" })
        );
      }),
      t
    );
  })(n.Component),
  m = { minWidth: "320px", height: "630px" },
  y = (function (e) {
    function t(n) {
      var t = e.call(this, n) || this;
      return (t.state = { isLoading: !0 }), (t.onLoad = t.onLoad.bind(t)), t;
    }
    return (
      o(t, e),
      (t.prototype.onLoad = function () {
        this.setState({ isLoading: !1 });
      }),
      (t.prototype.render = function () {
        var e = c({
            url: this.props.url,
            pageSettings: this.props.pageSettings,
            prefill: this.props.prefill,
            utm: this.props.utm,
            embedType: "Inline",
          }),
          t = this.props.LoadingSpinner || u;
        return n.createElement(
          "div",
          { className: "calendly-inline-widget", style: this.props.styles || m },
          this.state.isLoading && n.createElement(t, null),
          n.createElement("iframe", {
            width: "100%",
            height: "100%",
            frameBorder: "0",
            title: this.props.iframeTitle || "Calendly Scheduling Page",
            onLoad: this.onLoad,
            src: e,
          })
        );
      }),
      t
    );
  })(n.Component),
  h = (function (e) {
    function t(n) {
      var t = e.call(this, n) || this;
      return (t.state = { isLoading: !0 }), (t.onLoad = t.onLoad.bind(t)), t;
    }
    return (
      o(t, e),
      (t.prototype.onLoad = function () {
        this.setState({ isLoading: !1 });
      }),
      (t.prototype.render = function () {
        var e = c({
            url: this.props.url,
            pageSettings: this.props.pageSettings,
            prefill: this.props.prefill,
            utm: this.props.utm,
            embedType: "Inline",
          }),
          t = this.props.LoadingSpinner || u;
        return n.createElement(
          n.Fragment,
          null,
          this.state.isLoading && n.createElement(t, null),
          n.createElement("iframe", {
            width: "100%",
            height: "100%",
            frameBorder: "0",
            title: this.props.iframeTitle || "Calendly Scheduling Page",
            onLoad: this.onLoad,
            src: e,
          })
        );
      }),
      t
    );
  })(n.Component),
  f = function (t) {
    if (!t.open) return null;
    if (!t.rootElement)
      throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");
    return e.createPortal(
      n.createElement(
        "div",
        { className: "calendly-overlay" },
        n.createElement("div", { onClick: t.onModalClose, className: "calendly-close-overlay" }),
        n.createElement(
          "div",
          { className: "calendly-popup" },
          n.createElement(
            "div",
            { className: "calendly-popup-content" },
            n.createElement(h, l({}, t))
          )
        ),
        n.createElement("button", {
          className: "calendly-popup-close",
          onClick: t.onModalClose,
          "aria-label": "Close modal",
          style: { display: "block", border: "none", padding: 0 },
        })
      ),
      t.rootElement
    );
  },
  g = (function (e) {
    function t(n) {
      var t = e.call(this, n) || this;
      return (
        (t.state = { isOpen: !1 }),
        (t.onClick = t.onClick.bind(t)),
        (t.onClose = t.onClose.bind(t)),
        t
      );
    }
    return (
      o(t, e),
      (t.prototype.onClick = function (n) {
        n.preventDefault(), this.setState({ isOpen: !0 });
      }),
      (t.prototype.onClose = function (n) {
        n.stopPropagation(), this.setState({ isOpen: !1 });
      }),
      (t.prototype.render = function () {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "button",
            {
              onClick: this.onClick,
              style: this.props.styles || {},
              className: this.props.className || "",
            },
            this.props.text
          ),
          n.createElement(
            f,
            l({}, this.props, {
              open: this.state.isOpen,
              onModalClose: this.onClose,
              rootElement: this.props.rootElement,
            })
          )
        );
      }),
      t
    );
  })(n.Component),
  b = (function (e) {
    function t(n) {
      var t = e.call(this, n) || this;
      return (
        (t.state = { isOpen: !1 }),
        (t.onClick = t.onClick.bind(t)),
        (t.onClose = t.onClose.bind(t)),
        t
      );
    }
    return (
      o(t, e),
      (t.prototype.onClick = function () {
        this.setState({ isOpen: !0 });
      }),
      (t.prototype.onClose = function (n) {
        n.stopPropagation(), this.setState({ isOpen: !1 });
      }),
      (t.prototype.render = function () {
        return n.createElement(
          "div",
          { className: "calendly-badge-widget", onClick: this.onClick },
          n.createElement(
            "div",
            {
              className: "calendly-badge-content",
              style: {
                background: this.props.color || "#00a2ff",
                color: this.props.textColor || "#ffffff",
              },
            },
            this.props.text || "Schedule time with me",
            this.props.branding && n.createElement("span", null, "powered by Calendly")
          ),
          n.createElement(
            f,
            l({}, this.props, {
              open: this.state.isOpen,
              onModalClose: this.onClose,
              rootElement: this.props.rootElement,
            })
          )
        );
      }),
      t
    );
  })(n.Component),
  E = "message";
function v(e) {
  var t = e || {},
    o = t.onDateAndTimeSelected,
    l = t.onEventScheduled,
    i = t.onEventTypeViewed,
    r = t.onProfilePageViewed,
    c = t.onPageHeightResize;
  n.useEffect(
    function () {
      var n = function (n) {
        var e = n.data.event;
        e === a.DATE_AND_TIME_SELECTED
          ? o && o(n)
          : e === a.EVENT_SCHEDULED
            ? l && l(n)
            : e === a.EVENT_TYPE_VIEWED
              ? i && i(n)
              : e === a.PROFILE_PAGE_VIEWED
                ? r && r(n)
                : e === a.PAGE_HEIGHT && c && c(n);
      };
      return (
        window.addEventListener(E, n),
        function () {
          window.removeEventListener(E, n);
        }
      );
    },
    [e]
  );
}
export {
  y as InlineWidget,
  g as PopupButton,
  f as PopupModal,
  b as PopupWidget,
  v as useCalendlyEventListener,
};
